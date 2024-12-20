import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { GET_PROJECT } from "../graphql/detail";
import { GET_IMAGES } from "../graphql/queries"; // Import both images and skills query
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import AnimatedLogo from "./../components/design/Loading/AnimatedLogo";

export default function Detail() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { slug },
    });
    const { data: imagesData } = useQuery(GET_IMAGES); // Fetch images separately
    const contentRef = useRef(null);

    useEffect(() => {
        if (data && data.projects) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1 }
            );
        }
    }, [data]);

    console.log("data", data);

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="w-40 h-40">
                    <AnimatedLogo className="w-full" />;
                </div>
            </div>
        );
    if (error)
        return (
            <p>
                Error: {error.message} (Slug: {slug})
            </p>
        );

    if (!data || data.projects.length === 0) {
        return <p>No project found.</p>;
    }

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

    console.log("imagesMap", imagesMap);

    const project = data.projects[0];
    const projectImages = imagesMap[project.id] || [];

    return (
        <div ref={contentRef} className="w-[95%] m-auto mt-5">
            <Link to={ROUTES.project.path} className="flex items-center gap-2">
                <FaArrowLeft />
                <p>Go back</p>
            </Link>
            <div className="portfolio-header flex flex-col sm:flex-row gap-6">
                <div className="sm:w-2/3">
                    <h1 className="text-3xl font-bold mb-4 mt-4">
                        {project.title}
                    </h1>
                    <div className="links mb-4">
                        {project.github && (
                            <p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FaGithub className="mr-2" />
                                    GitHub
                                </a>
                            </p>
                        )}
                        {project.site && (
                            <p>
                                <a
                                    href={project.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <GoLinkExternal className="mr-2" />
                                    Website
                                </a>
                            </p>
                        )}
                    </div>
                    <p className="text-lg">{project.longDescription}</p>

                    <div className="skills mt-6">
                        <h2 className="text-xl font-semibold">Skills</h2>
                        <div className="">
                            {project.skill && project.skill.length > 0 ? (
                                project.skill.map((skill, index) => (
                                    <p className="list-none" key={index}>
                                        {skill.title}
                                    </p>
                                ))
                            ) : (
                                <p>No skills listed for this project</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/3">
                    {projectImages.length > 0 ? (
                        <div className="space-y-4">
                            {projectImages.map((imageUrl, index) => (
                                <img
                                    key={index}
                                    src={imageUrl}
                                    alt={`Project ${index + 1}`}
                                    className="rounded-lg shadow-lg w-full"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span>No Images Available</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
