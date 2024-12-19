import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "@design/Navigation";
import Footer from "@design/Footer";

export default function Root() {
    return (
        <body>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </body>
    );
}
