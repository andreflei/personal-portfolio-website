import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import ContactForm from "./ContactForm";
import Form from 'react-bootstrap/Button';
import mailsvg from '../../images/message-369540.svg';

const Contact = () => {
    // const [message, setMessage] = useState(false);
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMessage(true);
    // }

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