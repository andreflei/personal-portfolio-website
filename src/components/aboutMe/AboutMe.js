import React from 'react';
import styled from 'styled-components';
import Travelling from '../../images/undraw_adventure_re_ncqp.svg';
import Bike from '../../images/undraw_biking_kc4f.svg';
import Cooking from '../../images/undraw_barbecue_3x93.svg';
import Gaming from '../../images/undraw_gaming_re_cma2.svg';
import {AboutMeText} from './AboutMeText';

const AboutMe = () => {

    return (
        <AboutMeContainer  id="aboutMe">
            <AboutMeH1>ABOUT</AboutMeH1>
            <AboutMeWrapper>
                <AboutMeP>{AboutMeText}</AboutMeP>
                <AboutMeHobbyWrapper>
                    <HobbyH2>What i love to do:</HobbyH2>
                    <HobbyItem>
                        <HobbyImg src={Travelling}/>
                        <HobbyP>Sightseeing and Travelling</HobbyP>
                    </HobbyItem>
                    <HobbyItem>
                        <HobbyImg src={Bike}/>
                        <HobbyP>Ride the bike</HobbyP>
                    </HobbyItem>
                    <HobbyItem>
                        <HobbyImg src={Cooking}/>
                        <HobbyP>Cooking and eating</HobbyP>
                    </HobbyItem>
                    <HobbyItem>
                        <HobbyImg src={Gaming}/>
                        <HobbyP>Gaming</HobbyP>
                    </HobbyItem>
                </AboutMeHobbyWrapper>
            </AboutMeWrapper>
        </AboutMeContainer>
    )
};

const AboutMeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #264653;
`

const AboutMeH1 = styled.h1`
  font-size: 2.5rem;
  color: #E9C46A;
  margin-bottom: 48px;
  margin-top: 24px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const AboutMeWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto 25px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 25px;
  padding: 0 50px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

const AboutMeP = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #E9C46A;
  align-self: flex-start;
  text-align: start;
`

const AboutMeHobbyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HobbyH2 = styled.h2`
  font-size: 1.5rem;
  color: #E9C46A;
  text-align: center;
  margin-bottom: 20px;
`

const HobbyItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 150px;
  margin: 25px;
`

const HobbyImg = styled.img`
  width: 150px;
`

const HobbyP = styled.p`
  font-size: 1.5rem;
  color: #E9C46A;
  text-align: center;
`

export default AboutMe;