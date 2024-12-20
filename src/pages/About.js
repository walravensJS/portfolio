import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SKILLS, GET_EDUCATION, GET_PROJECTS } from "./../graphql/queries"; // Adjust the import path as needed

export default function About() {
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

            <div className="flex justify-between items-center">
                <h1 className="text-purple-500 font-bold mt-6 mb-6">
                    Stijn Walravens
                </h1>
                <img
                    src="/img/mylogo.svg"
                    alt="Stijn Walravens"
                    className="w-40 h-40 rounded-full"
                />
            </div>
            <h2 className="text-xl mb-1">
                Full Stack Developer & Graphic Designer
            </h2>
            <p>
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

            <h2 className="text-lg font-bold text-gray-700 mt-8">Skills</h2>
            <ul className="list-disc list-inside mt-4 space-y-1">
                {skillsData.skills.map((skill) => (
                    <li key={skill.id} className="text-gray-600 list-none">
                        {skill.title}
                    </li>
                ))}
            </ul>

            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mt-8">
                        Diplomas
                    </h2>
                    <ul className="list-disc list-inside mt-4 space-y-1">
                        {educationData.educations.map((education) => (
                            <li
                                key={education.id}
                                className="text-gray-600 list-none"
                            >
                                {education.title} - {education.course} (
                                {education.period})
                            </li>
                        ))}
                    </ul>
                </div>

                <h2 className="text-4xl font-bold text-gray-700 mt-8">
                    {projectsData.projects.length} projects completed
                </h2>
            </div>
        </div>
    );
}
