import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_IMAGES, GET_SKILLS } from "@graphql/queries";
import ProjectCard from "@design/project/ProjectCard";
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
                project?.skill?.some((skill) => skill.title === selectedSkill)
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
            <div className="flex items-center gap-4 mb-6">
                {/* Search Input and Button */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search by title, description, or skills..."
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        className="bg-purple-500 text-white px-4 py-2 rounded-md"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="flex gap-2">
                    <select
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        value={selectedSkill}
                        onChange={(e) => {
                            const skill = e.target.value;
                            setSelectedSkill(skill);
                            handleFilter(skill);
                        }}
                    >
                        <option value="">All Skill</option>
                        {skillsData?.skills.map((skill) => (
                            <option key={skill.id} value={skill.title}>
                                {skill.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
