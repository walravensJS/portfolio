import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { GET_PROJECT } from "../graphql/detail";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

export default function Detail() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { slug },
    });

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

    useEffect(() => {
        if (data && data.projects) {
            data.projects.forEach((project) => {
                console.log("Project thumbImage URL:", project.thumbImage);
            });
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error)
        return (
            <p>
                Error: {error.message} (Slug: {slug})
            </p>
        );

    if (!data || data.projects.length === 0) {
        return <p>No project found.</p>;
    }

    return (
        <div ref={contentRef} className="main-container">
            <Link to={ROUTES.project.path} className="return">
                <FaArrowLeft /> Go back
            </Link>
            {data.projects.map((project) => (
                <div key={project.id}>
                    <div className="portfolio-header">
                        <div>
                            <h1>{project.title}</h1>
                            <div className="links">
                                {project.githubUrl && (
                                    <p>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                        </a>
                                    </p>
                                )}
                                {project.site && (
                                    <p>
                                        <a
                                            href={project.site}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GoLinkExternal />
                                        </a>
                                    </p>
                                )}
                            </div>
                            <br />
                            <p>{project.description}</p>
                        </div>
                        {project.fullImage && (
                            <img
                                src={project.fullImage.url}
                                alt={project.title}
                            />
                        )}
                    </div>
                    <div className="mock">
                        {project.thumbImage && (
                            <img
                                src={project.thumbImage.url}
                                alt={project.title}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
