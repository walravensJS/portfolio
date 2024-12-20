import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t-1 mt-10 pb-10 text-zinc-400">
            <div className="flex flex-col md:flex-row justify-between w-[95%] m-auto">
                <div className="mb-6 md:mb-0">
                    <ul className="flex flex-col md:flex-row justify-center md:justify-start gap-5">
                        <li className="text-center">
                            <a href="/">Home</a>
                        </li>
                        <li className="text-center">
                            <a href="/projects">Projects</a>
                        </li>
                        <li className="text-center">
                            <a href="/about">About</a>
                        </li>
                    </ul>

                    <div className="flex justify-center gap-4 mt-4">
                        {[
                            { href: "https://github.com", icon: FaGithub },
                            { href: "https://linkedin.com", icon: FaLinkedin },
                            {
                                href: "https://instagram.com",
                                icon: FaSquareInstagram,
                            },
                        ].map(({ href, icon: Icon }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                className="p-3"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <p className="font-bold text-black">Stijn Walravens</p>
                    <p className="mt-2">
                        <a
                            href="mailto:stijn.walravens@outlook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            stijn.walravens@outlook.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
