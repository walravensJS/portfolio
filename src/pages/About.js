import React from "react";
import Education from "../components/Education";
import Skills from "../components/Skills";

export default function About() {
    return (
        <div className="main-container">
            <div className="about-header">
                <div className="about-text">
                    <h1>About me</h1>
                    <p>
                        I'm a Belgian / Native American full stack developer and
                        graphic designer with a knack for creating digital art.
                        By day, I'm deep into the world of web development,
                        using tools like Express, Eleventy, and React.js to
                        create seamless online experiences. But when the
                        workday's done, you'll find me freelancing as a graphic
                        designer, bringing local clients' dreams to life,
                        especially for weddings and events. Outside of work, I'm
                        all about gaming, movie marathons, and getting lost in a
                        good book. And when it comes to design tools, Adobe is
                        my playground. Let's team up and make some digital
                        dreams a reality!
                        <div className="my-information">
                            <div className="info-left">
                                <p>Age:</p>
                                <p>Nationality</p>
                                <p>LinkedIn</p>
                                <p>GitHub</p>
                                <p>Instagram</p>
                            </div>
                            <div className="info-right">
                                <p>22</p>
                                <p>American / Belgian</p>
                                <p>
                                    <a href="https://www.linkedin.com/in/stijn-walravens-4263b618b/">
                                        View
                                    </a>
                                </p>
                                <p>
                                    <a href="https://github.com/pgm-stijwalr">
                                        pgm-stijnwalr
                                    </a>
                                </p>
                                <p>walravensstijn</p>
                            </div>
                        </div>
                    </p>
                </div>
                <div className="header-pics">
                    <img
                        src="img/memoji.png"
                        alt="MeMoji"
                        className="overlap-img"
                    />
                </div>
            </div>
            <Education />
            <Skills />
        </div>
    );
}
