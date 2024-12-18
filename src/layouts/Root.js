import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <body className="bg-black w-full h-screen">
            <main className="w-[95%] mx-auto">
                <Outlet />
            </main>
        </body>
    );
}
