import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton"; // Import the skeleton loader
import { ROUTES } from "@routes/routes";

export default function ProjectCard({ project, isLoading }) {
    return (
        <Link
            to={`${ROUTES.project.path}/${project.slug}`}
            key={`project-${project.slug}`}
        >
            <motion.div
                whileHover={{ scale: 1.05, translateY: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="rounded-lg shadow-lg overflow-hidden"
            >
                {isLoading || !project.imageUrl ? (
                    <Skeleton height={320} width="100%" />
                ) : (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-80 object-cover rounded-t-lg"
                    />
                )}

                <div className="p-4">
                    {/* Title */}
                    {isLoading ? (
                        <Skeleton height={24} width="60%" />
                    ) : (
                        <h2 className="text-xl font-bold">{project.title}</h2>
                    )}

                    {/* Description */}
                    {isLoading ? (
                        <Skeleton height={20} width="80%" />
                    ) : (
                        <p className="text-gray-400">
                            {project.shortDescription}
                        </p>
                    )}

                    {isLoading ? (
                        <Skeleton height={18} width="40%" />
                    ) : project.skill && project.skill.length > 0 ? (
                        <div className=" flex gap-1">
                            {project.skill.map((skill) => (
                                <p
                                    className="p-1 bg-slate-400 rounded font-bold text-xs mt-1 text-zinc-600"
                                    key={skill.id}
                                >
                                    {skill.title}
                                </p>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400">
                            No skills listed for this project
                        </p>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}
