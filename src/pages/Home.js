import React from "react";
import Circlebutton from "../components/Circlebutton";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <div>
            <div className="home-header">
                <div class="header-intro">
                    <div className="looking">
                        <div className="red-circle"></div>
                        <p>Looking for work</p>
                    </div>
                    <h1 className="name">
                        Stijn <br></br> Walravens
                    </h1>
                    <div className="occupation-container">
                        <ul className="occupation">
                            <li className="occupation-item">
                                Full stack Developer
                            </li>
                            <li className="occupation-item">React Developer</li>
                            <li className="occupation-item">
                                Graphic Designer
                            </li>
                        </ul>
                    </div>

                    <p class="description">
                        22 year old, Belgian/Native American fullstack
                        developer.
                    </p>
                </div>
                <div class="header-pics">
                    <img
                        src="img/memoji.png"
                        alt="MeMoji"
                        class="overlap-img"
                    />
                </div>
            </div>
            <Circlebutton></Circlebutton>
            <div class="about-home" id="about">
                <p class="wave">Hello there! 👋</p>
                <p>
                    I'm a full stack developer and graphic designer with a knack
                    for weaving digital magic. By day, I'm deep into the world
                    of web development, using tools like Express, Eleventy, and
                    React.js to create seamless online experiences. But when the
                    workday's done, you'll find me freelancing as a graphic
                    designer, bringing local clients' dreams to life, especially
                    for weddings and events. Outside of work, I'm all about
                    gaming, movie marathons, and getting lost in a good book.
                    And when it comes to design tools, Adobe is my playground.
                    Let's team up and make some digital dreams a reality!
                </p>
            </div>

            <div class="skills">
                <h1>Skills</h1>
                <p>Software skills i’ve developed over the years</p>
                <Skills></Skills>
            </div>
        </div>
    );
}
