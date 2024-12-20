import React from "react";
import Occupation from "./Occupation";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdClass } from "react-icons/md";

export default function Header() {
    return (
        <div className="flex flex-col lg:flex-col w-full justify-between gap-10 px-5 lg:px-20 py-10">
            {/* Left Section */}
            <div className="flex flex-col gap-6 lg:w-full">
                <div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl leading-none font-bold">
                        Stijn
                        <br />
                        Walravens
                    </h1>
                </div>
                <Occupation />
                <p className="text-sm md:text-base lg:text-lg mt-4 mb-4">
                    22-year-old Belgian/Native American full-stack developer and
                    Designer.
                </p>
                <div className="flex gap-3 items-center text-purple-500 font-bold hover:cursor-pointer">
                    <a
                        href="/contact"
                        rel="noreferrer"
                        className="text-sm md:text-base"
                    >
                        Reach out
                    </a>
                    <FaExternalLinkAlt />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:w-full gap-8">
                <div className="flex items-center gap-4">
                    <MdClass className="text-purple-500 text-3xl" />
                    <div>
                        <h2 className="font-bold text-lg">Current Project</h2>
                        <p className="text-sm md:text-base">Logo design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
