import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioH1>PORTFOLIO</PortfolioH1>
            <PortfolioWrapper>
                <PortfolioCard>
                    <PortfolioIcon src={Icon1}/>
                    <PortfolioH2>Video Play Website</PortfolioH2>
                    <PortfolioP>This is a template Netflix clone created with React.</PortfolioP>
                </PortfolioCard>
                <PortfolioCard>
                    <PortfolioIcon src={Icon2}/>
                    <PortfolioH2>Project 2</PortfolioH2>
                    <PortfolioP>lorem epsum idee</PortfolioP>
                </PortfolioCard>
                <PortfolioCard>
                    <PortfolioIcon src={Icon3}/>
                    <PortfolioH2>Project 3</PortfolioH2>
                    <PortfolioP>testetkjkgjdkjhgdkjgajdgkdjg</PortfolioP>
                </PortfolioCard>
            </PortfolioWrapper>
        </PortfolioContainer>
    )
};

const PortfolioContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

const PortfolioWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

const PortfolioIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`

export default Portfolio;