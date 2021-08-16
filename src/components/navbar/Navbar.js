import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <a href="#home" className="navbar-brand-name">ANDRÉ FLEISCHHACKER - WEB DEV</a>
                </div>
                <div className="navbar-right">
                    <a href="#about" className="navbar-about">ABOUT</a>
                    <a href="#skills" className="navbar-skills">SKILLS</a>
                    <a href="#portfolio" className="navbar-portfolio">PORTFOLIO</a>
                    <a href="#contact" className="navbar-contact">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;