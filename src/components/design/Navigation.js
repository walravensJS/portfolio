import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "./../design/logo/Logo";

export default function Navigation() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
<nav className="w-full shadow sticky top-0 z-30 bg-white/70 backdrop-blur-lg rounded-b-xl" role="navigation">
<div className="flex justify-between items-center h-16 relative shadow-sm font-mono w-[95%] m-auto">
                <NavLink to="/">
                    <Logo />
                </NavLink>
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                ? "text-base font-bold bg-purple-500 px-4 py-2 rounded-full text-white transition-colors duration-300 ease-in-out"                                    
                                : "text-base font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive
                                ? "text-base font-bold bg-purple-500 px-4 py-2 rounded-full text-white transition-colors duration-300 ease-in-out"                                    
                                : "text-base font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                ? "text-base font-bold bg-purple-500 px-4 py-2 rounded-full text-white transition-colors duration-300 ease-in-out"
                                : "text-base font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) =>
                                isActive
                                ? "text-base font-bold bg-purple-500 px-4 py-2 rounded-full text-white transition-colors duration-300 ease-in-out"
                                : "text-base font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                            }
                        >
                            Resume
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center z-40 relative">
                    <button 
                        onClick={toggleModal}
                        className="w-10 h-10 flex items-center justify-center focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            {/* First line */}
                            <motion.span
                                className="absolute h-0.5 w-6 bg-black rounded-full"
                                animate={{
                                    top: isModalOpen ? "0.75rem" : "0.25rem",
                                    transform: isModalOpen ? "rotate(45deg)" : "rotate(0deg)"
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Second line */}
                            <motion.span
                                className="absolute h-0.5 w-6 bg-black rounded-full"
                                style={{ top: "0.75rem" }}
                                animate={{
                                    opacity: isModalOpen ? 0 : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Third line */}
                            <motion.span
                                className="absolute h-0.5 w-6 bg-black rounded-full"
                                animate={{
                                    top: isModalOpen ? "0.75rem" : "1.25rem",
                                    transform: isModalOpen ? "rotate(-45deg)" : "rotate(0deg)"
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Modal for Mobile Navigation */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 h-screen bg-black/95 z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex justify-center items-center h-full">
                            <motion.ul
                                className="flex flex-col gap-10 text-white text-2xl text-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ 
                                    duration: 0.4,
                                    staggerChildren: 0.1
                                }}
                            >
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "font-bold text-purple-500 transition-colors duration-300 ease-in-out"
                                                : "font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                                        }
                                        onClick={toggleModal}
                                    >
                                        HOME
                                    </NavLink>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "font-bold text-purple-500 transition-colors duration-300 ease-in-out"
                                                : "font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                                        }
                                        onClick={toggleModal}
                                    >
                                        PROJECTS
                                    </NavLink>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "font-bold text-purple-500 transition-colors duration-300 ease-in-out"
                                                : "font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                                        }
                                        onClick={toggleModal}
                                    >
                                        ABOUT
                                    </NavLink>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}