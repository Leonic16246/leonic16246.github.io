import React from "react";
import "./Navbar.scss";
import logo from "../../images/CherryTreeGlyph.png";

import { Link, NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <div className="nav-bar">

            <Link className="home-link" to="/">
                <img src={logo} className="nav-logo" alt="logo" />
                <h1 className="name">Leon</h1>
            </Link>
                
            <nav>
                <NavLink exact="true" activeclassname="active" className="int-link" to="/about">
                    <h1 className="nav-about">About</h1>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="int-link" to="/contact">
                    <h1 className="nav-contact">Contact</h1>
                </NavLink>
            </nav>

            <ul className="icons">
                <li>
                    <a className="nav-github" target="_blank" rel="noreferrer" href="https://github.com/Leonic16246">
                        <FontAwesomeIcon icon={faGithub} color="#F0F0F0" />
                    </a>
                </li>
                <li>
                    <a className="nav-linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leonic-lee">
                        <FontAwesomeIcon icon={faLinkedin} color="#F0F0F0" />
                    </a>
                </li>
            </ul>

        </div>

        
    )
}