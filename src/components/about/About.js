import React, {useState} from 'react';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import styled from 'styled-components';
import Video from '../../videos/Plexus.mp4';
import {Button} from '../ButtonElement';
import aboutImg from '../../images/undraw_Coding_re_iv62.svg';

//TODO: später noch in Home umbenennen

const About = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => setHover(!hover);

    return (
        <AboutContainer>
            <AboutContent>
                <AboutImg src={aboutImg} alt='Developer activity'/>
                <AboutH1>André Fleischhacker</AboutH1>
                <AboutP>Junior Web Developer</AboutP>
                <AboutBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                    >
                        Get in contact {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </AboutBtnWrapper>
            </AboutContent>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
  background: #264653;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  height: 100vh; //fill complete screen height 

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`

const AboutImg = styled.img`
  max-width: 280px;
  margin-bottom: 25px;

  @media screen and (max-width: 480px) {
    max-width: 200px;
  }
`

const AboutContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutH1 = styled.h1`
  color: #FFFFFF;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

const AboutP = styled.p`
  margin-top: 24px;
  color: #FFFFFF;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export default About;