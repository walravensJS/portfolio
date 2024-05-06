import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
    return (
        <nav>
            <li class="nav-item">
                <NavLink to={ROUTES.home.path}>Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to={ROUTES.contact.path}>Contact</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to={ROUTES.about.path}>About</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to={ROUTES.project.path}>Projects</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to={ROUTES.resume.path}>Resume</NavLink>
            </li>
        </nav>
    );
}
