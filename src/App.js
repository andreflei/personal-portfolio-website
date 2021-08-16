import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <div className="app">
            <Navbar/>
            <div className="sections">
                <Home/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
