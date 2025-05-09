import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_IMAGES } from "../../../graphql/queries";
import FeaturedPost from "../../design/home/FeaturedPost";
import { gsap } from "gsap";
import AnimatedLogo from "../../design/Loading/AnimatedLogo";

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
    const [isChanging, setIsChanging] = useState(false);
    const componentRef = useRef(null);
    
    // Process data when it arrives
    useEffect(() => {
        if (projectsData && imagesData) {
            // Create an image map for faster lookup
            const imagesMap = imagesData.images.reduce((acc, img) => {
                acc[img.project.id] = img.image.url; // Map project ID to image URL
                return acc;
            }, {});
            
            // Enhance projects with image URLs
            const projects = projectsData.projects
                .filter(project => project.title && project.slug) // Ensure we have valid projects
                .map((project) => ({
                    ...project,
                    imageUrl: imagesMap[project.id] || null, // Add the matching image URL to the project
                }));
            
            // Only proceed if we have projects
            if (projects.length > 0) {
                // Select a random project
                const randomProject = projects[Math.floor(Math.random() * projects.length)];
                setFeaturedProject(randomProject);
            }
        }
    }, [projectsData, imagesData]);

    // Animation when featured project changes or loads
    useEffect(() => {
        if (featuredProject && componentRef.current) {
            gsap.fromTo(
                componentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 }
            );
        }
    }, [featuredProject]);

    // Function to manually refresh the featured project
    const refreshFeaturedProject = () => {
        if (!projectsData || !projectsData.projects || projectsData.projects.length === 0) return;
        
        setIsChanging(true);
        
        // Fade out
        gsap.to(componentRef.current, {
            opacity: 0, 
            y: 20, 
            duration: 0.4,
            onComplete: () => {
                // Select a new random project, ensuring it's different from the current one
                const availableProjects = projectsData.projects.filter(
                    p => p.id !== featuredProject?.id
                );
                
                if (availableProjects.length > 0) {
                    const randomProject = availableProjects[
                        Math.floor(Math.random() * availableProjects.length)
                    ];
                    
                    // Get image for the project
                    const imagesMap = imagesData.images.reduce((acc, img) => {
                        acc[img.project.id] = img.image.url;
                        return acc;
                    }, {});
                    
                    setFeaturedProject({
                        ...randomProject,
                        imageUrl: imagesMap[randomProject.id] || null,
                    });
                }
                
                // Fade back in
                setTimeout(() => {
                    gsap.to(componentRef.current, {
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8,
                        onComplete: () => setIsChanging(false)
                    });
                }, 100);
            }
        });
    };

    // Loading state
    if (projectsLoading || imagesLoading) {
        return (
            <div className="flex justify-center items-center p-12 min-h-64 w-full">
                <div className="w-16 h-16">
                    <AnimatedLogo className="w-full" />
                </div>
            </div>
        );
    }

    // Error state
    if (projectsError || imagesError) {
        return (
            <div className="bg-red-50 rounded-lg p-6 shadow-sm w-full max-w-3xl mx-auto my-8">
                <h2 className="text-xl font-bold text-red-600 mb-2">Unable to load featured project</h2>
                <p className="text-gray-700">
                    {projectsError?.message || imagesError?.message || "Something went wrong"}
                </p>
                <button 
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    // No projects available
    if (!featuredProject) {
        return (
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center w-full max-w-3xl mx-auto my-8">
                <h2 className="text-xl font-bold text-gray-800 mb-2">No Projects Available</h2>
                <p className="text-gray-600">
                    There are currently no projects to showcase.
                </p>
            </div>
        );
    }

    // Render featured project with refresh button
    return (
        <div 
            ref={componentRef} 
            className="w-full relative"
        >
            <div className="flex justify-center items-center w-full">
                <FeaturedPost project={featuredProject} />
            </div>
            
            {/* Refresh button */}
            <button
                onClick={refreshFeaturedProject}
                disabled={isChanging}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full p-2 shadow-md transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Show another featured project"
                title="Show another project"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </button>
        </div>
    );
}