import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggleIsOpen}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>ANDRÉ FLEISCHHACKER</NavLogo>
                <MobileIcon onClick={toggleIsOpen} scrollNav={scrollNav}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home"
                                  scrollNav={scrollNav}
                                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="aboutMe"
                                  scrollNav={scrollNav}
                                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >ABOUT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills"
                                  scrollNav={scrollNav}
                                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >SKILLS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="portfolio"
                                  scrollNav={scrollNav}
                                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >PORTFOLIO</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                                  scrollNav={scrollNav}
                                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >CONTACT</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

const Nav = styled.nav`
  //background: #000;
  background: ${({scrollNav}) => (scrollNav ? '#F4A261' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 968px) {
    transition: 0.8s all ease;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

const NavLogo = styled(LinkR)`
  color: ${({scrollNav}) => (scrollNav ? '#000000' : '#FFFFFF')};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  
  @media screen and (max-width: 420px) {
    font-size: 0.8rem;
  }
  
  @media screen and (max-width: 272px) {
    display: none;
  }
`
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 968px) { //früher: 768px
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({scrollNav}) => (scrollNav ? '#000000' : '#FFFFFF')};
    
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  //margin-right: -22px; //evtl nicht notwendig bei mir 

  @media screen and (max-width: 968px) {//früher: 768px
    display: none;
  }
`

const NavItem = styled.li`
  height: 80px;
`

const NavLinks = styled(LinkS)`
  color: ${({scrollNav}) => (scrollNav ? '#000000' : '#FFFFFF')};
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &:hover:not(&.active) {
    color: ${({scrollNav}) => (scrollNav ? '#FFFFFF' : '#2A9D8F')};
    transition: 0.3s ease-in;
  }

  &.active {
    border-bottom: ${({scrollNav}) => (scrollNav ? '3px solid #000000' : '')}
  }
`

// const NavBtn = styled.div`
//   display: flex;
//   align-items: center;
//
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `

// const NavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `

export default Navbar;