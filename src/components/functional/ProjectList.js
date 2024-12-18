import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_IMAGES } from "../../graphql/queries";
import ProjectCard from "@design/project/ProjectCard";

export default function ProjectList() {
    const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_PROJECTS);
    const { loading: imagesLoading, error: imagesError, data: imagesData } = useQuery(GET_IMAGES);


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

    if (projectsLoading || imagesLoading) return <p>Loading...</p>;
    if (projectsError || imagesError) return <p>Error: {projectsError?.message || imagesError?.message}</p>;

    return (
        <div>
            <h1>Project List</h1>
            <div className="flex gap-4 flex-wrap">
                {projectsWithImages.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
