/*
import React, {useState} from 'react';
import './navbar.css';
// import {MenuItems} from "./MenuItems";
// import { Button } from '../Button';

const Navbar = () => {
    const [open, setOpen] = useState(false);


    const handleClick = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-brand-name">
                    ANDRÉ FLEISCHHACKER - WEB DEV
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={open ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={open ? "nav-menu active" : "nav-menu"}>
                    {/!*{MenuItems.map((item, index) => {*!/}
                    {/!*    return (*!/}
                    {/!*        <li key={index}>*!/}
                    {/!*            <a className={item.className} href={item.url}>*!/}
                    {/!*                {item.title}*!/}
                    {/!*            </a>*!/}
                    {/!*        </li>*!/}
                    {/!*    )*!/}
                    {/!*})}*!/}
                    {/!*<Button>Close</Button>*!/}

                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                            ABOUT
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-links" onClick={closeMobileMenu}>
                            SKILLS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" className="nav-links" onClick={closeMobileMenu}>
                            PORTFOLIO
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
                            CONTACT
                        </a>
                    </li>
                    <li className="nav-item nav-links-mobile">
                        <a href="#home" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Close
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
*/
