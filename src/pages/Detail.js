import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    const { slug } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HYGRAPH_URL}?slug=${slug}`)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, [slug]);
    return (
        <div>
            {project && (
                <>
                    <h2>{project.title}</h2>
                </>
            )}
        </div>
    );
}
