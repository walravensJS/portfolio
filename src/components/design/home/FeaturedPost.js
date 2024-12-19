import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@routes/routes";

export default function FeaturedPost({ project }) {
    return (
        <Link
            to={`${ROUTES.project.path}/${project.slug}`}
            key={`project-${project.slug}`}
            className="w-full"
        >
            <div className="w-full relative">
                {/* Project Image */}
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-80 object-cover "
                    />
                ) : (
                    <div className="w-full h-40 bg-gray-700 flex items-center justify-center">
                        <span>No Image</span>
                    </div>
                )}

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>

                <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                    <div className="text-center">
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <p className="text-sm">View</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
