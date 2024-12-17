import React from "react";

export default function Navigation() {
    return (
        <nav className="relative h-screen bg-black">
            <ul className="h-full bg-black text-white flex flex-col justify-around w-fit">
                <li className="transform -rotate-90">
                    <a href="/" className="text-lg font-bold">HOME</a>
                </li>
                <li className="transform -rotate-90">
                    <a href="/projects" className="text-lg font-bold">PROJECTS</a>
                </li>
                <li className="transform -rotate-90">
                    <a href="/about" className="text-lg font-bold">ABOUT</a>
                </li>
            </ul>
        </nav>
    );
}
