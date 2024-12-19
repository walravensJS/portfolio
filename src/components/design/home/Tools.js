import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Tools() {
    const sectionRef = useRef(null);

    // Track the scroll progress of the Tools section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"], // Trigger animation as section enters and leaves viewport
    });

    // Transform y based on scroll progress within the section
    const translateY = useTransform(scrollYProgress, [0, 1], ["50%", "-150%"]);

    return (
        <div
            ref={sectionRef}
            className="flex flex-col md:flex-row w-[95%] mx-auto h-auto md:h-[50vh] gap-5"
        >
            {/* Left Section */}
            <div className="md:w-1/2 w-full">
                <h1 className="text-left text-3xl md:text-4xl font-bold flex h-full items-center">
                    Tools I Use
                </h1>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full overflow-hidden">
                <motion.div
                    style={{ y: translateY }} // Apply vertical scroll effect
                    className="flex flex-col space-y-5 md:space-y-8"
                >
                    <img
                        src="/img/tools/macbook.png"
                        alt="Tool 1"
                        className="w-full max-h-40 md:max-h-64 object-contain"
                    />
                    <img
                        src="/img/tools/mouse.png"
                        alt="Tool 2"
                        className="w-full max-h-40 md:max-h-64 object-contain"
                    />
                    <img
                        src="/img/tools/vscode.png"
                        alt="Tool 3"
                        className="w-full max-h-40 md:max-h-64 object-contain"
                    />
                </motion.div>
            </div>
        </div>
    );
}
