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

    console.log("Data:", data); // Log the data for debugging

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
                <div className="portfolio-header" key={project.id}>
                    <div>
                        <h1>{project.title}</h1>
                        <div className="links">
                            <p>
                                <a href={project.githubUrl} target="_blank">
                                    <FaGithub />
                                </a>
                            </p>
                            <p>
                                <a href={project.site} target="_blank">
                                    <GoLinkExternal />
                                </a>
                            </p>
                        </div>
                        <br />
                        <p>{project.description}</p>
                    </div>
                    {project.fullImage && (
                        <img
                            src={`${project.fullImage.url}`}
                            alt={project.title}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
