import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
    return (
        <footer>
            <div class="footer-container">
                <ul class="footer-links">
                    <li class="foot-item">
                        <NavLink to={ROUTES.home.path}>Home</NavLink>
                    </li>
                    <li class="foot-item">
                        <NavLink to={ROUTES.contact.path}>Contact</NavLink>
                    </li>
                    <li class="foot-item">
                        <NavLink to={ROUTES.about.path}>About</NavLink>
                    </li>
                    <li class="foot-item">
                        <NavLink to={ROUTES.project.path}>Projects</NavLink>
                    </li>
                </ul>
                <div class="footer-text">
                    <div class="footer-contact">
                        <h4>Stijn Walravens</h4>
                        <p>email@Johndoe.com</p>
                    </div>
                    <div class="footer-social">
                        <a
                            href="https://www.linkedin.com/in/stijn-walravens-0a0b1a1b8/"
                            target="blank"
                            class="social-link"
                        >
                            <p>LinkedIn</p>
                        </a>
                        <a href="github" target="blank" class="social-link">
                            <p>Github</p>
                        </a>
                        <a href="Instagram" target="blank" class="social-link">
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
