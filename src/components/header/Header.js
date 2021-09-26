import styled from 'styled-components';
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);


    const handleClick = () => setOpen(!open);

    return (
        <Nav>
            <BrandName>
                <StyledLink to="/home">ANDRÉ FLEISCHHACKER</StyledLink>
            </BrandName>
            <NavMenu open={open}>
                <StyledLink to="/about">ABOUT</StyledLink>
                <StyledLink to="/skills">SKILLS</StyledLink>
                <StyledLink to="/portfolio">PORTFOLIO</StyledLink>
                <StyledLink to="/contact">CONTACT</StyledLink>
            </NavMenu>
            <MobileMenuIcon onClick={handleClick}>
                <i className={open ? "fas fa-times" : "fas fa-bars"}/>
            </MobileMenuIcon>
        </Nav>
    )
};

const Nav = styled.nav`
  //position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  background-image: linear-gradient(to bottom right, dodgerblue, lightskyblue);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  letter-spacing: 2px;
  z-index: 3;
`
const BrandName = styled.div`
  justify-self: start;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  position: relative;
  margin-right: 10px;
  margin-left: auto;

  @media screen and (max-width: 960px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({open}) => (open) ? "300px" : "0px"};
    transition: max-height 0.3s ease-in;
  }


`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 15px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: crimson;
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  width: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
  margin-left: 10px;

  i:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    display: flex;
  }
`

export default Header;

