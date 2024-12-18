import React from "react";
import Header from "@design/home/Header";
import MyCard from "@design/home/MyCard";
import Looking from "@design/home/Looking";

export default function Home() {

    return (
        <div className="">
            <div className="flex w-full justify-center items-center">
            <Header />
            <div className="flex flex-col items-center w-full">
            <MyCard />
            <Looking />
            </div>
            </div>
        </div>
    );
}
