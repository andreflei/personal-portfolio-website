import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import {FaXing, FaGithub} from "react-icons/fa";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>HOME</SocialLogo>
                        <WebsiteRights>André Fleischhacker - Junior Web Developer © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.xing.com/profile/Andre_Fleischhacker/cv" target="_self" aria-label="Xing">
                                <FaXing/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/andreflei" target="_self" aria-label="GitHub">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
};

const FooterContainer = styled.footer`
  background-color: #264653;
`
const FooterWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 10px auto 0 auto;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-weight: bold;
`

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 12px;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`

export default Footer;