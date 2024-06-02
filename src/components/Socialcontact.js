import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

export default function Socialcontact() {
    return (
        <div className="icons">
            <a href="https://github.com/pgm-stijwalr">
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/stijn-walravens-0a0b1a1b8/">
                <SlSocialLinkedin />
            </a>
            <a href="https://discord.com/channels/823722533110284298/823722533110284302/1246839028771196979">
                <SlSocialInstagram />
            </a>
        </div>
    );
}
