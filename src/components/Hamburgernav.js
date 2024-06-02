import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburgernav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger">
            <button className="burger-button" onClick={toggleMenu}>
                <GiHamburgerMenu />
            </button>
            <div className={`burger-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li className="nav-item">
                        <NavLink to={ROUTES.home.path} onClick={toggleMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.project.path} onClick={toggleMenu}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.about.path} onClick={toggleMenu}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.contact.path} onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hamburgernav;
