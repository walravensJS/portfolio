import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SKILLS, GET_EDUCATION, GET_PROJECTS } from "./../graphql/queries";
import { useState } from "react";
import ResumeModal from "../components/functional/About/Resume"; // adjust path as needed


export default function About() {
    const [isResumeOpen, setResumeOpen] = useState(false);

    const {
        loading: skillsLoading,
        error: skillsError,
        data: skillsData,
    } = useQuery(GET_SKILLS);

    const {
        loading: educationLoading,
        error: educationError,
        data: educationData,
    } = useQuery(GET_EDUCATION);

    const {
        loading: projectsLoading,
        error: projectsError,
        data: projectsData,
    } = useQuery(GET_PROJECTS);

    if (skillsLoading || educationLoading || projectsLoading) {
        return <p>Loading...</p>;
    }

    if (skillsError || educationError || projectsError) {
        return (
            <p>
                Error:{" "}
                {skillsError
                    ? skillsError.message
                    : educationError
                    ? educationError.message
                    : projectsError.message}
            </p>
        );
    }

    return (
        <div className="relative w-[95%] m-auto">
            <div className="absolute inset-0 -z-10">
                <div className="w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-3xl rounded-full opacity-50 lg:bottom-0 lg:right-0 lg:translate-x-[190%] lg:translate-y-[100%] sm:top-1/2 sm:right-0 sm:translate-x-[100%] sm:translate-y-[-50%]"></div>
            </div>

            <div className="flex justify-between ">
                <div className="md:text-left">
                    <h1 className="text-purple-500 font-bold mt-6 mb-6 text-3xl md:text-4xl">
                        Stijn Walravens
                    </h1>
                    <h2 className="text-lg md:text-xl mb-1">
                        Full Stack Developer & Graphic Designer
                    </h2>
                </div>
                <img
                    src="/img/mylogo.svg"
                    alt="Stijn Walravens"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full"
                />
            </div>

            <p className="mt-4 text-gray-700 text-sm md:text-base">
                I'm a Belgian / Native American full stack developer and graphic
                designer with a knack for creating digital art. By day, I'm deep
                into the world of web development, using tools like Express,
                Eleventy, and React.js to create seamless online experiences.
                But when the workday's done, you'll find me freelancing as a
                graphic designer, bringing local clients' dreams to life,
                especially for weddings and events. Outside of work, I'm all
                about gaming, movie marathons, and getting lost in a good book.
                And when it comes to design tools, Adobe is my playground. Let's
                team up and make some digital dreams a reality!
            </p>

            <button
                onClick={() => setResumeOpen(true)}
                className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
                View Resume
            </button>

            <h2 className="text-lg font-bold text-gray-700 mt-8">Skills</h2>
            <div className="list-disc list-inside mt-4 space-y-1">
                {skillsData.skills.map((skill) => (
                    <p key={skill.id} className="text-gray-600">
                        {skill.title}
                    </p>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8">
                <div className="w-divll md:w-1/2">
                    <h2 className="text-lg font-bold text-gray-700">
                        Diplomas
                    </h2>

                    <div className="list-disc list-inside mt-4 space-y-1">
                        {educationData.educations.map((education) => (
                            <p key={education.id} className="text-gray-600">
                                {education.title} - {education.course} (
                                {education.period})
                            </p>
                        ))}
                    </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mt-8 md:mt-0">
                    {projectsData.projects.length} projects completed
                </h2>
            </div>
            <ResumeModal isOpen={isResumeOpen} onClose={() => setResumeOpen(false)} />
        </div>
        
    );
}
