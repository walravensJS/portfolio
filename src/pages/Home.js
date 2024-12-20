import React, { useState, useEffect } from "react";
import Header from "../components/design/home/Header";
import MyCard from "../components/design/home/MyCard";
import FetchFeaturedPost from "../components/functional/Home/FetchFeaturedPost";
import Tools from "../components/design/home/Tools";
import { motion } from "framer-motion";
import CardLinks from "../components/design/home/CardLinks";
import AnimatedLogo from "../components/design/Loading/AnimatedLogo";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (replace this with actual data fetching logic if needed)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds delay for demonstration

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="w-40 h-40">
                    <AnimatedLogo className="w-full" />;
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="w-[95%] mx-auto">
                {/* Responsive layout: Reverse order for mobile */}
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-[85vh] gap-10">
                    {/* Animated Header */}
                    <motion.div
                        className="lg:mr-10"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Header />
                    </motion.div>

                    {/* Animated Card */}
                    <motion.div
                        className="flex justify-center items-center w-full lg:w-auto max-h-[60vh] sm:max-h-[50vh] md:max-h-[40vh]" // Adjust max height for mobile
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            type: "spring",
                            stiffness: 100,
                        }}
                    >
                        <MyCard className="mt-4 sm:mt-0" />
                    </motion.div>
                </div>
            </div>
            <FetchFeaturedPost />
            <Tools />
            <CardLinks />
        </div>
    );
}
