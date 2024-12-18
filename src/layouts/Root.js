import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "@design/Navigation";
import Footer from "@design/Footer";

export default function Root() {
    return (
        <body className="">
            <Navigation />
            <main className="w-[95%] mx-auto">
        
                <Outlet />
            </main>
            <Footer />
        </body>
    );
}
