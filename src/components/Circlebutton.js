import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Circlebutton() {
    return (
        <div class="circle-button-container">
            <a
                href="#about"
                class="circle-button visited:fill-black fill-black"
            >
                <FaAngleDown />
            </a>
        </div>
    );
}
