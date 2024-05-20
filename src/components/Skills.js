import React from "react";
import skillsData from "../data/SkillsData";

export default function Skills() {
    const skills = skillsData.skills;

    return (
        <div>
            <ul class="skill-list">
                {skills.map((skill, index) => (
                    <li key={index} class="skill-item">
                        <img src={skill.image} alt={skill.name} />
                        <h3>{skill.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}
