import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Circlebutton from "../components/Circlebutton";
import Skills from "../components/Skills";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const headerRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        // Fade in header and skills on initial load
        gsap.from(headerRef.current, { opacity: 0, y: 50, duration: 1 });
        gsap.from(skillsRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5,
        });

        // Fade in about section on scroll
        gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: true,
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div className="main-container">
            <div className="home-header" ref={headerRef}>
                <div className="header-intro">
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
                    <p className="description">
                        22 year old, Belgian/Native American fullstack
                        developer.
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
            <Circlebutton />
            <div className="about-home" id="about" ref={aboutRef}>
                <p className="wave">Hello there! 👋</p>
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
            <div className="skills" ref={skillsRef}>
                <Skills />
            </div>
        </div>
    );
}
