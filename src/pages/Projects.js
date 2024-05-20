import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/queries";
import { Link } from "react-router-dom";

function DisplayProjects({ selectedFilter }) {
    const { loading, error, data } = useQuery(GET_PROJECTS);

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
        <Link to={`${project.slug}`} key={project.id} className="project-card">
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

    return (
        <div>
            <div className="main-container">
                <div className="proj-header">
                    <div>
                        <h1>Portfolio</h1>
                        <p>
                            Inspiration for the next generation <br />
                            Summary of my work.
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
