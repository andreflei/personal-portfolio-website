import styled from 'styled-components';
import React, {useState} from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);


    const handleClick = () => setOpen(!open);

    return (
        <Nav>
            <BrandName>ANDRÉ FLEISCHHACKER</BrandName>
            <NavMenu>
                <a href="#about">
                    <span>ABOUT</span>
                </a>
                <a href="#skills">
                    <span>SKILLS</span>
                </a>
                <a href="#portfolio">
                    <span>PORTFOLIO</span>
                </a>
                <a href="#contact">
                    <span>CONTACT</span>
                </a>
            </NavMenu>
            <MobileMenuIcon onClick={handleClick}>
                <i className={open ? "fas fa-times" : "fas fa-bars"}/>
            </MobileMenuIcon>

        </Nav>
    )
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  background-image: linear-gradient(to bottom right, dodgerblue, lightskyblue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 2px;
  z-index: 3;
`
const BrandName = styled.div`
  justify-self: start;
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  //width: 46vw;
`

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0px;
  position: relative;
  margin-right: 10px;
  margin-left: auto;
  
  a {
    display: flex;
    align-items: center;
    padding: 0;
    margin-right: 15px;
    text-decoration: none;
  }
  
  a:hover {
    border-bottom: 4px solid orange;
    transition: all 0.2s ease-out;
  }
  
  span {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    white-space: nowrap;
  }
`
const MobileMenuIcon = styled.div`
  width: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
  margin-left: 10px;
  
  i:hover {
    cursor: pointer;
  }
`


export default Header;

