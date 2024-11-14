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
                        <NavLink to={ROUTES.about.path}>About</NavLink>
                    </li>
                    <li className="foot-item">
                        <NavLink to={ROUTES.project.path}>Projects</NavLink>
                    </li>
                </ul>
                <div className="footer-text">
                    <div className="footer-contact">
                        <h4>Stijn Walravens</h4>
                        <p>stijn.walravens@outlook.com</p>
                    </div>
                    <div className="footer-social">
                        <a
                            href="https://www.linkedin.com/in/stijn-walravens-4263b618b"
                            target="_blank"
                            className="social-link"
                            rel="noreferrer"
                        >
                            <p>LinkedIn</p>
                        </a>
                        <a
                            href="https://github.com/pgm-stijwalr"
                            target="_blank"
                            className="social-link"
                            rel="noreferrer"
                        >
                            <p>Github</p>
                        </a>
                        <a
                            href="https://www.instagram.com/walravens.js/"
                            target="_blank"
                            className="social-link"
                            rel="noreferrer"
                        >
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
