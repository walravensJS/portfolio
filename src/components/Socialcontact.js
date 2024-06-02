import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";

export default function Socialcontact() {
    return (
        <div className="icons">
            <a href="github">
                <AiFillGithub />
            </a>
            <a href="github">
                <SlSocialLinkedin />
            </a>
            <a href="github">
                <SlSocialPintarest />
            </a>
            <a href="github">
                <SlSocialInstagram />
            </a>
        </div>
    );
}
