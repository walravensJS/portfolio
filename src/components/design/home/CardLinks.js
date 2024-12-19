import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@routes/routes";

export default function CardLinks() {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-[95%] mx-auto">
            {/* Projects Card */}
            <Link
                to={`${ROUTES.project.path}`}
                key={`project-${ROUTES.project.path}`}
                className="w-full md:w-1/2"
            >
                <div className="relative bg-gray-100 aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/img/tools/macbook.png"
                        alt="Projects"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center text-center text-white text-lg font-bold z-10">
                        View Projects
                    </h2>
                </div>
            </Link>

            {/* About Me Card */}
            <Link
                to={`${ROUTES.project.path}`}
                key={`about-${ROUTES.project.path}`}
                className="w-full md:w-1/2"
            >
                <div className="relative bg-gray-100 aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/img/mylogo.png"
                        alt="About Me"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center text-center text-white text-lg font-bold z-10">
                        About Me
                    </h2>
                </div>
            </Link>
        </div>
    );
}
