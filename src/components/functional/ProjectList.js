import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_IMAGES } from "../../graphql/queries";
import ProjectCard from "@design/project/ProjectCard";
import Skeleton from "react-loading-skeleton"; // Import the skeleton loader

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

    const [projectsWithImages, setProjectsWithImages] = useState([]);

    useEffect(() => {
        if (projectsData && imagesData) {
            const imagesMap = imagesData.images.reduce((acc, img) => {
                acc[img.project.id] = img.image.url; // Map project ID to image URL
                return acc;
            }, {});

            const projects = projectsData.projects.map((project) => ({
                ...project,
                imageUrl: imagesMap[project.id] || null, // Add the matching image URL to the project
            }));

            setProjectsWithImages(projects);
        }
    }, [projectsData, imagesData]);

    if (projectsLoading || imagesLoading) {
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

    if (projectsError || imagesError) {
        return <p>Error: {projectsError?.message || imagesError?.message}</p>;
    }

    return (
        <div className="container mx-auto w-[95%]">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projectsWithImages.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
