import React from "react";
import { motion } from "framer-motion";

export default function Tools() {
    return (
        <div className="flex flex-col md:flex-row w-[95%] lg:h-52 md:h-screen mx-auto gap-5 mt-5">
            <div className="md:w-1/2 lg:w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-left">
                    Tools I Use
                </h1>
                <div className="mt-5 grid lg:flex w-full md:grid-cols-3 gap-5">
                    <motion.div
                        className="flex justify-center lg:w-1/3 items-center p-5 bg-gray-100 rounded-lg hover:bg-purple-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/img/tools/macbook.png"
                            alt="Macbook"
                            className="w-16 h-16"
                        />
                    </motion.div>
                    <motion.div
                        className="flex justify-center lg:w-1/3  items-center p-5 bg-gray-100 rounded-lg hover:bg-purple-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/img/tools/mouse.png"
                            alt="Mouse"
                            className="h-16"
                        />
                    </motion.div>
                    <motion.div
                        className="flex justify-center lg:w-1/3  items-center p-5 bg-gray-100 rounded-lg hover:bg-purple-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/img/tools/vscode.png"
                            alt="VSCode"
                            className="w-16 h-16"
                        />
                    </motion.div>
                    <motion.div
                        className="flex justify-center lg:w-1/3 items-center p-5 bg-gray-100 rounded-lg hover:bg-purple-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/img/tools/photoshop.png"
                            alt="Macbook"
                            className="w-16 h-16"
                        />
                    </motion.div>
                    <motion.div
                        className="flex justify-center lg:w-1/3  items-center p-5 bg-gray-100 rounded-lg hover:bg-purple-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/img/tools/illustrator.png"
                            alt="Mouse"
                            className="h-16"
                        />
                    </motion.div>
                    <motion.div
                        className="flex justify-center lg:w-1/3  items-center p-5 bg-gray-100 rounded-lg hover:bg-purple-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/img/tools/procreate.png"
                            alt="VSCode"
                            className="w-16 h-16"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
