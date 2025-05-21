import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_IMAGES, GET_SKILLS } from "./../../graphql/queries";
import ProjectCard from "./../design/project/ProjectCard";
import Skeleton from "react-loading-skeleton";

export default function ProjectList() {
    const {
        loading: projectsLoading,
        error: projectsError,
        data: projectsData,
    } = useQuery(GET_PROJECTS);
    const {
        loading: imagesLoading,
        error: imagesError,
        data: imagesData,
    } = useQuery(GET_IMAGES);
    const {
        loading: skillsLoading,
        error: skillsError,
        data: skillsData,
    } = useQuery(GET_SKILLS);

    const [projectsWithImages, setProjectsWithImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search input
    const [selectedSkill, setSelectedSkill] = useState(""); // State for selected filter
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [visibleCards, setVisibleCards] = useState([]); // Track which cards are visible

    useEffect(() => {
        if (projectsData && imagesData) {
            const imagesMap = imagesData.images.reduce((acc, img) => {
                acc[img.project.id] = img.image.url;
                return acc;
            }, {});

            const projects = projectsData.projects.map((project) => ({
                ...project,
                imageUrl: imagesMap[project.id] || null,
            }));

            setProjectsWithImages(projects);
            setFilteredProjects(projects);
        }
    }, [projectsData, imagesData]);

    // Reset visible cards whenever filtered projects change
    useEffect(() => {
        setVisibleCards([]);
        
        // Start the staggered animation
        if (filteredProjects.length > 0) {
            const animationDelay = 100; // 100ms between each card animation
            
            filteredProjects.forEach((project, index) => {
                setTimeout(() => {
                    setVisibleCards(prev => [...prev, project.id]);
                }, index * animationDelay);
            });
        }
    }, [filteredProjects]);

    const handleSearch = () => {
        const filtered = projectsWithImages.filter((project) => {
            const searchFields = [
                project?.shortDescription,
                project?.title,
                ...(project?.skills || []).map((skill) => skill.title),
            ];
            return searchFields.some((field) =>
                field?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setFilteredProjects(filtered);
    };

    const handleFilter = (selectedSkill) => {
        if (selectedSkill === "") {
            setFilteredProjects(projectsWithImages); // Show all projects if no skill selected
        } else {
            const filtered = projectsWithImages.filter((project) =>
                project?.skills?.some((skill) => skill.title === selectedSkill)
            );
            setFilteredProjects(filtered);
        }
    };

    if (projectsLoading || imagesLoading || skillsLoading) {
        return (
            <div className="container mx-auto w-full">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="w-full">
                            <Skeleton height={320} width="100%" />
                            <div className="p-4">
                                <Skeleton height={24} width="60%" />
                                <Skeleton height={20} width="80%" />
                                <Skeleton height={18} width="40%" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (projectsError || imagesError || skillsError) {
        return (
            <p>
                Error:{" "}
                {projectsError?.message ||
                    imagesError?.message ||
                    skillsError?.message}
            </p>
        );
    }

    return (
        <div className="container mx-auto w-[95%]">
            
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className={`transform transition-all duration-500 ease-out ${
                            visibleCards.includes(project.id)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-16"
                        }`}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}