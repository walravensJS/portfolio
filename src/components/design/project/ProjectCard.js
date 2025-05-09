import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { ROUTES } from "./../../../routes/routes";

export default function ProjectCard({ project, isLoading }) {
  return (
    <Link
      to={`${ROUTES.project.path}/${project.slug}`}
      key={`project-${project.slug}`}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="rounded-3xl shadow-xl overflow-hidden relative h-full"
      >
        {/* Background Image */}
        {isLoading || !project.imageUrl ? (
          <Skeleton height={400} width="100%" />
        ) : (
          <div className="relative h-96 w-full">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          {/* Title */}
          {isLoading ? (
            <Skeleton height={30} width="80%" baseColor="#444" highlightColor="#666" />
          ) : (
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          )}

          {/* Description */}
          {isLoading ? (
            <Skeleton count={2} height={20} baseColor="#444" highlightColor="#666" />
          ) : (
            <p className="text-gray-200 mb-4 line-clamp-2">{project.shortDescription}</p>
          )}

          {/* Bottom Section */}
          <div className="flex justify-between items-center">
            {/* Skills/Technologies */}
            {!isLoading && project.skill && (
              <div className="flex items-center gap-1 w-[100%]">
                {project.skill.length > 0 ? (
                  <div className="flex items-center bg-white/20 backdrop-blur-sm w-[100%] text-center rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-center">{project.skill.length} Technologies</span>
                  </div>
                ) : (
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium">No technologies listed</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTA Button */}
          {!isLoading && (
            <button className="w-full mt-4 bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors">
              View Project
            </button>
          )}
        </div>

        {/* Skills badges - Top Right */}
        {!isLoading && project.skill && project.skill.length > 0 && (
          <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[60%]">
            {project.skill.slice(0, 2).map((skill) => (
              <span
                key={skill.id}
                className="bg-white/80 backdrop-blur-sm text-xs font-bold text-black px-3 py-1 rounded-full shadow-md"
              >
                {skill.title}
              </span>
            ))}
            {project.skill.length > 2 && (
              <span className="bg-white/80 backdrop-blur-sm text-xs font-bold text-black px-3 py-1 rounded-full shadow-md">
                +{project.skill.length - 2}
              </span>
            )}
          </div>
        )}
      </motion.div>
    </Link>
  );
}