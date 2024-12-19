import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
    // State to handle the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle the modal visibility
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <nav className="w-full shadow" role="navigation">
            <div className="flex justify-between items-center h-16 relative shadow-sm font-mono w-[95%] m-auto">
                <a href="/">
                    <img
                        src="/img/mylogo.png"
                        alt="profile"
                        className="invert"
                    />
                </a>
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10">
                    <li>
                        <a
                            href="/"
                            className="text-lg font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="/projects"
                            className="text-lg font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                        >
                            CASES
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="text-lg font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                        >
                            ABOUT
                        </a>
                    </li>
                </ul>

                {/* Hamburger Icon for Mobile and Tablet */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleModal}>
                        <motion.svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{ rotate: 0, opacity: 1 }}
                            animate={{
                                rotate: isModalOpen ? 45 : 0,
                                opacity: isModalOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </motion.svg>
                        <motion.svg
                            className="w-6 h-6 absolute"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: isModalOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </motion.svg>
                    </button>
                </div>
            </div>

            {/* Modal for Mobile/Tablet Navigation */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black z-20"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex justify-end p-4">
                        <button onClick={toggleModal}>
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <motion.ul
                            className="flex flex-col gap-10 text-white text-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <li>
                                <a
                                    href="/"
                                    className="font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                                    onClick={toggleModal}
                                >
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                                    onClick={toggleModal}
                                >
                                    CASES
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="font-bold hover:text-purple-500 transition-colors duration-300 ease-in-out"
                                    onClick={toggleModal}
                                >
                                    ABOUT
                                </a>
                            </li>
                        </motion.ul>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
