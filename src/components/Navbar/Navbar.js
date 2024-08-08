import "./Navbar.scss";
import logo from "../../images/CherryTreeGlyph.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-bar">

            <Link className="home-link" to="/">
                <img src={logo} className="nav-logo" alt="logo" />
                <h1 className="name">Leon</h1>
            </Link>
                
            <div className="menu">
                <NavLink exact="true" activeclassname="active" className="int-link" to="/about">
                    <h1 className="nav-about">About</h1>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="int-link" to="/contact">
                    <h1 className="nav-contact">Contact</h1>
                </NavLink>
            </div>

            <ul className="icon-list">
                <li className="icon">
                    <a className="nav-github" target="_blank" rel="noreferrer" href="https://github.com/Leonic16246">
                        <FontAwesomeIcon icon={faGithub} color="#F0F0F0" />
                    </a>
                </li>
                <li className="icon">
                    <a className="nav-linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leonic-lee">
                        <FontAwesomeIcon icon={faLinkedin} color="#F0F0F0" />
                    </a>
                </li>
                <li className="dropdown-icon" onClick={toggleMenu}>
                    <a>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className='dropdown-button' />
                    </a>
                </li>
            </ul>
            {menuOpen && (
                <div className="dropdown-menu">
                    <NavLink exact="true" activeclassname="active" className="drop-link" to="/about">
                        <h1 className="nav-about">About</h1>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="drop-link" to="/contact">
                        <h1 className="nav-contact">Contact</h1>
                    </NavLink>
                </div>
            )}
        </nav>

        
    )
}
