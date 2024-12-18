import React from "react";
import Header from "@design/home/Header";
import MyCard from "@design/home/MyCard";
import FetchFeaturedPost from "@functional/Home/FetchFeaturedPost";

export default function Home() {

    return (
        <div className="">
            <div className="flex justify-around m-auto items-center h-[85vh]">
                <Header/>
                <div>
                    <MyCard />
                </div>
            </div>
            <FetchFeaturedPost />
        </div>
    );
}
