import React from "react";
import Header from "@design/home/Header";
import MyCard from "@design/home/MyCard";
import FetchFeaturedPost from "@functional/Home/FetchFeaturedPost";
import Tools from "@design/home/Tools";

export default function Home() {
    return (
        <div>
            <div className=" w-[95%] mx-auto">
                <div className="flex justify-center items-center h-[85vh]">
                    <Header />
                    <div className="flex justify-center items-center">
                        <MyCard />
                    </div>
                </div>
            </div>
            <FetchFeaturedPost />
            <Tools />
        </div>
    );
}
