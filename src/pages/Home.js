import React from "react";
import Navigation from "@design/Navigation";
import Header from "@design/home/Header";
import MyCard from "@design/home/MyCard";

export default function Home() {

    return (
        <div className="">
            <Navigation />
            <div className="flex w-full justify-between">
            <Header />
            <MyCard />
            </div>
        </div>
    );
}
