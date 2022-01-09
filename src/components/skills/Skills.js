import React from 'react';
import styled from 'styled-components';
import {FaHtml5,FaCss3Alt,SiJavascript,FaReact,SiStyledComponents,FaJava,SiMysql,FaGit} from "react-icons/all";

const Skills = () => {
    return (
        <SkillsContainer id='skills'>
            <SkillsH1>SKILLS</SkillsH1>
                <SkillsWrapper>
                    <SkillsIcon>
                        <FaHtml5/>
                        <SkillsP>HTML 5</SkillsP>
                    </SkillsIcon>
                    <SkillsIcon>
                        <FaCss3Alt/>
                        <SkillsP>CSS 3</SkillsP>
                    </SkillsIcon>
                    <SkillsIcon>
                        <SiJavascript/>
                        <SkillsP>JavaScript</SkillsP>
                    </SkillsIcon>
                    <SkillsIcon>
                        <FaReact/>
                        <SkillsP>React</SkillsP>
                    </SkillsIcon>
                    <SkillsIcon>
                        <SiStyledComponents/>
                        <SkillsP>Styled Components</SkillsP>
                    </SkillsIcon>
                    <SkillsIcon>
                        <FaJava/>
                        <SkillsP>Java</SkillsP>
                    </SkillsIcon>
                    <SkillsIcon>
                        <SiMysql/>
                        <SkillsP>MySQL</SkillsP>
                    </SkillsIcon>
                    <SkillsIcon>
                        <FaGit/>
                        <SkillsP>Git</SkillsP>
                    </SkillsIcon>
                </SkillsWrapper>
        </SkillsContainer>
    )
};

const SkillsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
    //background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  background: #203B46;
`

const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 60px;
  margin-top: 24px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto 64px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  grid-gap: 48px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SkillsIcon = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 5rem;
  justify-content: center;
  align-content: center;
  margin: 0 auto 0 auto;
`

const SkillsP = styled.p`
  display: flex;
  flex-direction: row;
  max-width: 80px;
  font-size: 1rem;
  color: #fff;
  justify-self: center;
  margin: 5px auto 0 auto;
`

export default Skills;