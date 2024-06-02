import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skillsData from "../data/SkillsData";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const skills = skillsData.skills;
    const skillRefs = useRef([]);

    useEffect(() => {
        skillRefs.current.forEach((skill, index) => {
            gsap.fromTo(
                skill,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: skill,
                        start: "top 80%",
                        end: "top 60%",
                        scrub: true,
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div>
            <h1>Skills</h1>
            <p>Software skills I’ve developed over the years</p>
            <ul className="skill-list">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="skill-item"
                        ref={(el) => (skillRefs.current[index] = el)}
                    >
                        <img src={skill.image} alt={skill.name} />
                        <h3>{skill.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}
