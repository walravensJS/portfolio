import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <div>
            <Navigation></Navigation>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
}
