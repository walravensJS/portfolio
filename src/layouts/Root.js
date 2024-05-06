import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
    return (
        <div>
            <Navigation></Navigation>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
