import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@routes/routes";
import ButtonLink from "@functional/ButtonLink";

export default function CardLinks() {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-[95%] mt-5 mx-auto">
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
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                    <div className="absolute inset-0 top-1/2 text-center text-white text-lg font-bold z-20">
                        <h2 className="">View projects</h2>

                        <ButtonLink href="/about" />
                    </div>
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
                        src="/img/mylogo.svg"
                        alt="About Me"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                    <div className="absolute inset-0 top-1/2 text-center text-white text-lg font-bold z-20">
                        <h2 className="">About Me</h2>

                        <ButtonLink href="/about" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
