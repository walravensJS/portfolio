import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@routes/routes";

export default function ProjectCard({ project }) {
    return (
        <Link
            to={`${ROUTES.project.path}/${project.slug}`}
            key={`project-${project.slug}`}
        >
            <div className="w-1/3 bg-zinc-800 rounded-lg shadow-lg">
                {/* Project Image */}
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-80 object-cover rounded-t-lg"
                    />
                ) : (
                    <div className="w-full h-40 bg-gray-700 flex items-center justify-center rounded-t-lg">
                        <span>No Image</span>
                    </div>
                )}

                <div className="p-4">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-gray-400">{project.shortDescription}</p>

                    {project.skills && project.skills.length > 0 && (
                        <div className="mt-2">
                            <h3 className="text-sm font-semibold text-gray-300">
                                Skills:
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {project.skills.map((skill) => (
                                    <li
                                        key={skill.id}
                                        className="bg-gray-600 text-sm px-2 py-1 rounded"
                                    >
                                        {skill.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
