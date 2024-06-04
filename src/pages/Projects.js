import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/queries";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

import gsap from "gsap";

function DisplayProjects({ selectedFilter }) {
    const { loading, error, data } = useQuery(GET_PROJECTS);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (data) {
            setTimeout(() => setLoaded(true), 100);
        }
    }, [data]);

    useEffect(() => {
        const cards = document.querySelectorAll(".project-card");

        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -20,
                    duration: 0.3,
                    ease: "power1.inOut",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: "power1.inOut",
                });
            });
        });
    }, []);

    console.log(data && data.projects);
    console.log(selectedFilter);
    console.log(loaded);
    console.log(error);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const filteredProjects = selectedFilter
        ? data.projects.filter((project) =>
              Object.keys(project).some(
                  (key) =>
                      key.toLowerCase() === selectedFilter &&
                      project[key] === true
              )
          )
        : data.projects;

    return filteredProjects.map((project) => (
        <Link
            to={`${ROUTES.project.path}/${project.slug}`}
            key={`project-${project.slug}`}
            className={`project-card ${loaded ? "fade-up" : ""}`}
        >
            <img alt={project.slug} src={project.fullImage.url} />
            <div className="card-context">
                <h3>{project.title}</h3>
                <br />
                <p className="card-description">{project.description}</p>
                <div className="skills-used">
                    {Object.keys(project)
                        .filter((key) => project[key] === true)
                        .map((key) => (
                            <span key={key} className="cat-item">
                                {key}
                            </span>
                        ))}
                </div>
            </div>
        </Link>
    ));
}

export default function Projects() {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter === "All" ? null : filter.toLowerCase());
    };

    const filters = [
        "All",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Premiere Pro",
        "Figma",
    ];

    useEffect(() => {
        gsap.from(".main-container", {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power4.out",
        });
    }, []);

    return (
        <div>
            <div className="main-container">
                <div className="proj-header">
                    <div>
                        <h1>Portfolio</h1>
                        <p>
                            Inspiration for the next generation <br />
                            Summary of my work.
                            <br />
                            (see links on project page)
                        </p>
                    </div>
                    <img
                        alt="project graphic element"
                        src="./img/project.svg"
                    />
                </div>
                <div className="filter-container">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-button ${
                                selectedFilter === filter.toLowerCase() ||
                                (filter === "All" && selectedFilter === null)
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="projects-list">
                    <DisplayProjects selectedFilter={selectedFilter} />
                </div>
            </div>
        </div>
    );
}
