import React from "react";

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm font-mono" role="navigation">
            <a href="/" >
            <img src="/img/mylogo.png" alt="profile" /></a>
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
        </nav>
    );
}
