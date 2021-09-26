import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <BrandName>
                <StyledLink to="/home">ANDRÉ FLEISCHHACKER</StyledLink>
            </BrandName>
            <Hamburger onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu open={open}>
                <StyledLink to="/about">ABOUT</StyledLink>
                <StyledLink to="/skills">SKILLS</StyledLink>
                <StyledLink to="/portfolio">PORTFOLIO</StyledLink>
                <StyledLink to="/contact">CONTACT</StyledLink>
            </Menu>
        </Nav>
    )
};

const Nav = styled.div`
  //height: 85px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: orangered;
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media screen and (max-width: 960px) {
    display: flex;
  }
  
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  @media screen and (max-width: 960px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({open}) => (open) ? "300px" : "0px"};
    transition: max-height 0.3s ease-in;
  }
`

const BrandName = styled.div`
  padding: 1rem 0;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`

const StyledLink = styled(Link)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  margin-right: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.3s ease-in;
  
  &:hover {
    color: crimson;
  }
`


export default Navbar;
