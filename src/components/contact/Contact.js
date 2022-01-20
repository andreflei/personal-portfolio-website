import React from 'react';
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactH1>CONTACT</ContactH1>
            <ContactForm/>
        </ContactContainer>
    )
};

const ContactContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #203B46;
  
  @media screen and (min-height: 1200px) {
    height: calc(100vh - 80px);
    min-height: 1000px;
  } 
`

const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #FFFFFF;
  margin-bottom: 64px;
  margin-top: 24px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export default Contact;