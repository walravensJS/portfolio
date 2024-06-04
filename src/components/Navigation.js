import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import ThemeSwitcher from "./Themeswitcher";
import { ThemeArea } from "../context/ThemeContext";
import Hamburgernav from "./Hamburgernav";

export default function Navigation() {
    return (
        <nav>
            <h4>WALRAVENS</h4>
            <div className="nav-links">
                <ul>
                    <li className="nav-item">
                        <NavLink to={ROUTES.home.path}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.project.path}>Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.about.path}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.contact.path}>Contact</NavLink>
                    </li>
                </ul>
                <ThemeArea>
                    <ThemeSwitcher />
                </ThemeArea>
            </div>
            <Hamburgernav />
        </nav>
    );
}
