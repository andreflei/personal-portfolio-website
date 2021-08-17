import React from 'react';
import './portfolio.css';
import project1 from '../../images/architecture-768432_640.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1 className="portfolio-heading">PORTFOLIO</h1>
            <div className="container">
                <div className="item">
                    <img src={project1} alt="Modern architecture skyscraper building"/>
                    <h3>item title</h3>
                </div>
                <div className="item">
                    <img src={project1} alt="Modern architecture skyscraper building"/>
                    <h3>item title</h3>
                </div>
                <div className="item">
                    <img src={project1} alt="Modern architecture skyscraper building"/>
                    <h3>item title</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;