import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Skills from "../skills/Skills";
import {homeObjOne} from "../skills/Data";
import Portfolio from "../portfolio/Portfolio";
//T0-DO: Inhalt zu App.js verschieben

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
            <Navbar toggleIsOpen={toggleIsOpen}/>
            <About/>
            <Skills {...homeObjOne}/>
            <Portfolio/>
        </>
    );
};

export default Home;