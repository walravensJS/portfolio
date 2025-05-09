import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton"; // Import the skeleton loader
import { ROUTES } from "./../../../routes/routes";

export default function ProjectCard({ project, isLoading }) {
    return (
        <Link
            to={`${ROUTES.project.path}/${project.slug}`}
            key={`project-${project.slug}`}
        >
            <motion.div
    whileHover={{ scale: 1.05, translateY: -10 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="rounded-lg shadow-lg overflow-hidden relative group"
>
    {isLoading || !project.imageUrl ? (
        <Skeleton height={320} width="100%" />
    ) : (
        <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-80 object-cover"
        />
    )}

    {/* Top-right Skills List (visible on image) */}
{!isLoading && project.skill && project.skill.length > 0 && (
    <div className="absolute top-2 right-2 flex flex-wrap gap-1 z-10">
        {project.skill.map((skill) => (
            <span
                key={skill.id}
                className="bg-white/80 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2 py-0.5 rounded shadow-sm"
            >
                {skill.title}
            </span>
        ))}
    </div>
)}

    {/* Desktop Hover Overlay */}
    {!isLoading && (
        <div className="hidden md:flex absolute inset-0 bg-purple-800 bg-opacity-60 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-xl font-bold text-center px-4">
                {project.title}
            </h2>
        </div>
    )}

    {/* Mobile Layout (fallback) */}
    <div className="p-4 md:hidden bg-white">
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
            <p className="text-gray-400 line-clamp-5">
                {project.shortDescription}
            </p>
        )}

        {/* Skills */}
        {isLoading ? (
            <Skeleton height={18} width="40%" />
        ) : project.skill && project.skill.length > 0 ? (
            <div className="flex gap-1 flex-wrap mt-1">
                {project.skill.map((skill) => (
                    <p
                        className="p-1 bg-gray-300 rounded font-bold text-xs text-zinc-600"
                        key={skill.id}
                    >
                        {skill.title}
                    </p>
                ))}
            </div>
        ) : (
            <p className="text-gray-400">No skills listed for this project</p>
        )}
    </div>
</motion.div>

        </Link>
    );
}
