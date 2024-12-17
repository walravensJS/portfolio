import React from "react";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <div>
            <main className="bg-zinc-900 min-h-screen">
                <Outlet />
            </main>
        </div>
    );
}
