import React from 'react';
import styled from 'styled-components';
import Travelling from '../../images/undraw_adventure_4hum.svg';
import Bike from '../../images/undraw_biking_kc4f.svg';
import Cooking from '../../images/undraw_barbecue_3x93.svg';
import Gaming from '../../images/undraw_Gaming_re_cma2.svg';


const AboutMe = () => {

    return (
        <AboutMeContainer id="aboutMe">
            <AboutMeH1>ABOUT</AboutMeH1>
            <AboutMeWrapper>
                <AboutMeP>Hello, my name is André Fleischhacker and i'm a self-thought web developer. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis </AboutMeP>
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
  background: #203B46;
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
  max-width: 1200px;
  margin: 0 auto 25px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 25px;
  padding: 0 50px;
`

const AboutMeP = styled.p`
  font-size: 1.2rem;
  color: #E9C46A;
  align-self: flex-start;
`

const AboutMeHobbyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HobbyH2 = styled.h2`
  font-size: 1.5rem;
  color: #E9C46A;
  justify-self: center;
  align-self: center;
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
`

export default AboutMe;