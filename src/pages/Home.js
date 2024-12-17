import React from "react";
import Navigation from "@design/SideNavigation";
import Header from "@design/home/Header";

export default function Home() {

    return (
        <div className="flex">
            <Navigation />
            <Header />
        </div>
    );
}
