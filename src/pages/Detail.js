import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../graphql/detail";

export default function Detail() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { slug },
    });

    console.log("Data:", data); // Log the data for debugging

    if (loading) return <p>Loading...</p>;
    if (error)
        return (
            <p>
                Error: {error.message} (Slug: {slug})
            </p>
        );

    if (!data || !data.projects === 0) {
        return <p>No project found.</p>;
    }

    return data.projects.map((project) => (
        <div key={project.id}>
            <h3>{project.title}</h3>
            <br />
            <p>{project.description}</p>
            <br />
            {project.fullImage && (
                <img src={`${project.fullImage.url}`} alt={project.title} />
            )}
        </div>
    ));
}
