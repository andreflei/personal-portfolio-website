import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
// import Navbar from "./components/header/Navbar";


function App() {
    return (
        <div className="app">
            <Router>
                <Route component={Header}/>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
            </Router>
        </div>
    );
}

export default App;
