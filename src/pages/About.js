import React, { useEffect, useRef } from "react";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { gsap } from "gsap";

export default function About() {
    const aboutTextRef = useRef(null);
    const headerPicsRef = useRef(null);

    useEffect(() => {
        const aboutText = aboutTextRef.current;
        const headerPics = headerPicsRef.current;

        // GSAP animation for the about text
        gsap.from(aboutText, {
            opacity: 0,
            y: 50,
            duration: 1,
        });

        // GSAP animation for the header pics
        gsap.from(headerPics, {
            opacity: 0,
            x: -50,
            duration: 1,
        });
    }, []);

    return (
        <div className="main-container">
            <div className="about-pic-mobile">
                <div className="pic" ref={headerPicsRef}>
                    <img
                        src="img/memoji.png"
                        alt="MeMoji"
                        className="overlap-img"
                    />
                </div>
                <div className="about-text" ref={aboutTextRef}>
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
                                <p>Nationality:</p>
                                <p>LinkedIn:</p>
                                <p>GitHub:</p>
                                <p>Instagram:</p>
                            </div>
                            <div className="info-right">
                                <p>22</p>
                                <p>American / Belgian</p>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/stijn-walravens-4263b618b"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://github.com/pgm-stijwalr"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        pgm-stijnwalr
                                    </a>
                                </p>
                                <p>walravens.js</p>
                            </div>
                        </div>
                    </p>
                </div>
                <div className="header-pics about-mob" ref={headerPicsRef}>
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
