import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Tools() {
    const { scrollYProgress } = useScroll(); // Track scroll progress

    // Map scroll progress to vertical movement for images
    const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <div className="flex w-[95%] mx-auto h-screen">
            {/* Left Section */}
            <div className="w-1/2 flex items-center justify-center">
                <h1 className="text-left text-4xl font-bold sticky top-1/2 -translate-y-1/2">
                    Tools I Use
                </h1>
            </div>

            {/* Right Section */}
            <div className="w-1/2 overflow-hidden">
                <motion.div
                    style={{ y: translateY }} // Apply vertical scroll effect
                    className="flex flex-col space-y-8"
                >
                    <img
                        src="/img/tools/macbook.png"
                        alt="Tool 1"
                        className="w-full max-h-64 object-contain"
                    />
                    <img
                        src="/img/tools/mouse.png"
                        alt="Tool 2"
                        className="w-full max-h-64 object-contain"
                    />
                    <img
                        src="/img/tools/vscode.png"
                        alt="Tool 3"
                        className="w-full max-h-64 object-contain"
                    />
                </motion.div>
            </div>
        </div>
    );
}
