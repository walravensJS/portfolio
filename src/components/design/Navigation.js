import React from "react";

export default function Navigation() {
    return (
        <nav className="w-full shadow" role="navigation">
            <div className="flex justify-between items-center h-16 relative shadow-sm font-mono w-[95%] m-auto">
            <a href="/" >
            <img src="/img/mylogo.png" alt="profile" className="invert" /></a>
            <ul className="flex items-center gap-10"> 
                <li className="">
                    <a href="/" className="text-lg font-bold">HOME</a>
                </li>
                <li className="">
                    <a href="/projects" className="text-lg font-bold">PROJECTS</a>
                </li>
                <li className="">
                    <a href="/about" className="text-lg font-bold">ABOUT</a>
                </li>
            </ul>
            </div>
        </nav>
    );
}
