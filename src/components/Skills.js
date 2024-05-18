import React from "react";
import skillsData from "../data/SkillsData";

export default function Skills() {
    const skills = skillsData.skills;

    return (
        <div>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <h3>{skill.name}</h3>
                        <img src={skill.image} alt={skill.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
