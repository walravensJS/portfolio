import React, { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, ZoomOut } from "lucide-react";

export default function ResumePage() {
    const [scale, setScale] = useState(1);
    
    const handleZoomIn = () => {
        setScale(prevScale => Math.min(prevScale + 0.1, 2.0));
    };
    
    const handleZoomOut = () => {
        setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
    };

    const handleDownload = () => {
        // Path to your resume file
        const resumeURL = "/img/Resume-Stijn_Walravens.pdf";
        
        // Create an anchor element and trigger download
        const link = document.createElement("a");
        link.href = resumeURL;
        link.download = "stijnwalravens-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Control buttons */}
            <div className="fixed top-20 right-6 flex gap-2 z-10">
                {/* Zoom controls */}
                <motion.button
                    className="p-3 bg-white text-purple-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
                    onClick={handleZoomOut}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Zoom out"
                >
                    <ZoomOut size={20} />
                </motion.button>
                
                <motion.button
                    className="p-3 bg-white text-purple-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
                    onClick={handleZoomIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Zoom in"
                >
                    <ZoomIn size={20} />
                </motion.button>
                
                {/* Download button */}
                <motion.button
                    className="px-6 py-3 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-600 transition-colors duration-300 ease-in-out flex items-center gap-2 shadow-lg"
                    onClick={handleDownload}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                </motion.button>
            </div>

            {/* Resume container with zoom functionality */}
            <div className="flex-grow w-full overflow-auto flex justify-center items-start py-8 px-4">
                <div className="transition-transform duration-300 ease-out">
                    <motion.div 
                        className="bg-white p-4 rounded-lg shadow-lg"
                        style={{ 
                            transform: `scale(${scale})`,
                            transformOrigin: "top center"
                        }}
                    >
                        <img 
                            src="/img/Resume-Stijn_Walravens.png" 
                            alt="Resume"
                            className="max-w-4xl w-full h-auto" 
                            style={{ 
                                imageRendering: "high-quality",
                                objectFit: "contain"
                            }}
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
