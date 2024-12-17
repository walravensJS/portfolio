import React from "react";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <body className="bg-black ">
            <main className="min-h-screen p-5">
                <Outlet />
            </main>
        </body>
    );
}
