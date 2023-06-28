import React from "react";
import "./Navbar.css";
import logo from "../../images/CherryTreeGlyph.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav-bar">

            <Link className="home-link" to="/">
                <img src={logo} className="nav-logo" alt="logo" />
                <h1 className="name">Leon</h1>
            </Link>
                
            <nav>
                <h2>Email</h2>
            </nav>
            
        </div>

        
    )
}