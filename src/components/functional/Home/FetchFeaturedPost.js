import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_IMAGES } from "../../../graphql/queries";
import FeaturedPost from "../../design/home/FeaturedPost";

export default function FetchFeaturedPost() {
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

    const [featuredProject, setFeaturedProject] = useState(null);

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

            // Select a random project
            const randomProject =
                projects[Math.floor(Math.random() * projects.length)];
            setFeaturedProject(randomProject);
        }
    }, [projectsData, imagesData]);

    if (projectsLoading || imagesLoading) return <p>Loading...</p>;
    if (projectsError || imagesError)
        return <p>Error: {projectsError?.message || imagesError?.message}</p>;

    if (!featuredProject) return <p>No project available.</p>;

    return (
        <div className="flex justify-center items-center w-full">
            <FeaturedPost project={featuredProject} />
        </div>
    );
}
