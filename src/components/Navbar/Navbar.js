import React from "react";
import "./Navbar.css";
import logo from "../../images/CherryTreeGlyph.png";

export default function Navbar() {
    return (

        <div className="nav-bar">
        <a className="home-link" href="/">
            <img src={logo} className="nav-logo" alt="logo" />
            <h1 className="name">Leon</h1>
            </a>
            
            
        <nav>
        <h2>Email</h2>
        </nav>
        </div>

        
    )
}