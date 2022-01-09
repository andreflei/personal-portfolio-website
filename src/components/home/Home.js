import React, {useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from "../navbar/Navbar";
import Homescreen from "../homescreen/Homescreen";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import AboutMe from "../aboutMe/AboutMe";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
            <Navbar toggleIsOpen={toggleIsOpen}/>
            <Homescreen/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;