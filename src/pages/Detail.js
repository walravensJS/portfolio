import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { GET_PROJECT } from "../graphql/detail";
import { GET_IMAGES } from "../graphql/queries";
import { ROUTES } from "../routes/routes";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import AnimatedLogo from "./../components/design/Loading/AnimatedLogo";

export default function Detail() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { slug },
    });
    const { data: imagesData } = useQuery(GET_IMAGES);
    const contentRef = useRef(null);
    const [activeImage, setActiveImage] = useState(0);

    // Animation on component mount
    useEffect(() => {
        if (data && data.projects) {
            const timeline = gsap.timeline();
            
            timeline.fromTo(
                contentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 }
            );
            
            // Stagger animations for child elements
            timeline.fromTo(
                ".animate-item",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
                "-=0.4"
            );
        }
    }, [data]);

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen w-screen bg-gray-50">
                <div className="w-24 h-24">
                    <AnimatedLogo className="w-full" />
                </div>
            </div>
        );
        
    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-red-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-red-600 mb-2">Something went wrong</h2>
                    <p className="text-gray-700">Error: {error.message}</p>
                    <p className="text-gray-500 mt-2">Project slug: {slug}</p>
                    <Link to={ROUTES.project.path} className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
                        <FaArrowLeft size={12} />
                        <span>Return to projects</span>
                    </Link>
                </div>
            </div>
        );

    if (!data || data.projects.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-yellow-600 mb-2">Project not found</h2>
                    <p className="text-gray-700">We couldn't find the project you're looking for.</p>
                    <Link to={ROUTES.project.path} className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
                        <FaArrowLeft size={12} />
                        <span>Return to projects</span>
                    </Link>
                </div>
            </div>
        );
    }

    const project = data.projects[0];
    
    // Process images
    const imagesMap = imagesData?.images?.reduce((acc, image) => {
        const { project, image: imgData } = image;
        if (project && project.id) {
            if (!acc[project.id]) {
                acc[project.id] = [];
            }
            acc[project.id].push(imgData.url);
        }
        return acc;
    }, {});
    
    const projectImages = imagesMap?.[project.id] || [];

    // Next image handler
    const showNextImage = () => {
        setActiveImage((prev) => (prev + 1) % projectImages.length);
    };

    // Previous image handler
    const showPrevImage = () => {
        setActiveImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                {/* Breadcrumb navigation */}
                <nav className="animate-item mb-6">
                    <Link 
                        to={ROUTES.project.path} 
                        className="text-2xl font-bold mt-6 mb-6 flex gap-2 items-center hover:ml-2 transition-all duration-300"
                    >
                        <FaArrowLeft size={14} />
                        <span>Back to Projects</span>
                    </Link>
                </nav>
                
                {/* Main content */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Project header */}
                    <div className="px-6 py-6 border-b border-gray-100">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 animate-item">
                            {project.title}
                        </h1>
                    </div>
                    
                    {/* Project content */}
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left column - Project details */}
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                {/* Project description */}
                                <div className="animate-item prose max-w-none mb-8">
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        {project.longDescription}
                                    </p>
                                </div>

                                {/* External links */}
                                <div className="flex flex-wrap gap-4 mb-8 animate-item">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md transition-colors"
                                        >
                                            <FaGithub size={18} />
                                            <span>View on GitHub</span>
                                        </a>
                                    )}
                                    {project.site && (
                                        <a
                                            href={project.site}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                                        >
                                            <GoLinkExternal size={18} />
                                            <span>Visit Website</span>
                                        </a>
                                    )}
                                </div>

                                {/* Skills section */}
                                <div className="animate-item">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies & Skills</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skill && project.skill.length > 0 ? (
                                            project.skill.map((skill, index) => (
                                                <span 
                                                    key={index}
                                                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {skill.title}
                                                </span>
                                            ))
                                        ) : (
                                            <p className="text-gray-500 italic">No skills listed for this project</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right column - Project images */}
                            <div className="lg:w-1/2 order-1 lg:order-2 animate-item">
                                {projectImages.length > 0 ? (
                                    <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                                        {/* Main image display */}
                                        <div className="relative aspect-video">
                                            {projectImages.map((imageUrl, index) => (
                                                <div 
                                                    key={index}
                                                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
                                                >
                                                    <img
                                                        src={imageUrl}
                                                        alt={`${project.title} screenshot ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            
                                            {/* Navigation arrows (only show if multiple images) */}
                                            {projectImages.length > 1 && (
                                                <>
                                                    <button 
                                                        onClick={showPrevImage}
                                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full"
                                                        aria-label="Previous image"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button 
                                                        onClick={showNextImage}
                                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full"
                                                        aria-label="Next image"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                        
                                        {/* Thumbnail navigation for multiple images */}
                                        {projectImages.length > 1 && (
                                            <div className="flex overflow-x-auto p-2 gap-2 bg-white">
                                                {projectImages.map((imageUrl, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setActiveImage(index)}
                                                        className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
                                                            index === activeImage ? 'border-blue-500' : 'border-transparent'
                                                        }`}
                                                    >
                                                        <img 
                                                            src={imageUrl} 
                                                            alt={`Thumbnail ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                        <span className="text-gray-500">No Images Available</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}