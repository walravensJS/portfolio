import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
    return (
        <footer>
            <div className="footer-container">
                <ul className="footer-links">
                    <li className="foot-item">
                        <NavLink to={ROUTES.home.path}>Home</NavLink>
                    </li>
                    <li className="foot-item">
                        <NavLink to={ROUTES.contact.path}>Contact</NavLink>
                    </li>
                    <li className="foot-item">
                        <NavLink to={ROUTES.about.path}>About</NavLink>
                    </li>
                    <li className="foot-item">
                        <NavLink to={ROUTES.project.path}>Projects</NavLink>
                    </li>
                </ul>
                <div className="footer-text">
                    <div className="footer-contact">
                        <h4>Stijn Walravens</h4>
                        <p>stijn.w01@hotmail.com</p>
                    </div>
                    <div className="footer-social">
                        <a
                            href="https://www.linkedin.com/in/stijn-walravens-0a0b1a1b8/"
                            target="blank"
                            className="social-link"
                        >
                            <p>LinkedIn</p>
                        </a>
                        <a
                            href="https://github.com/pgm-stijwalr"
                            target="blank"
                            className="social-link"
                        >
                            <p>Github</p>
                        </a>
                        <a
                            href="https://discord.com/channels/823722533110284298/823722533110284302/1246839028771196979"
                            target="blank"
                            className="social-link"
                        >
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
