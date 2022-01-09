import React, {useRef} from 'react';
import styled from 'styled-components';
import {Button} from "../ButtonElement";

const ContactForm = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            message: messageRef.current.value
        }

        alert("This is your Form data: \n" + JSON.stringify(data))
    }

    return (
        <ContactFormWrapper>
            <WrapperInput>
                <StyledLabel htmlFor="firstName">First name</StyledLabel>
                <StyledInput
                    type="text"
                    name="firstName"
                    className="firstName"
                    tabIndex="1"
                    ref={firstNameRef}
                />
            </WrapperInput>
            <WrapperInput>
                <StyledLabel htmlFor="lastName">Last name</StyledLabel>
                <StyledInput
                    type="text"
                    name="lastName"
                    className="lastName"
                    tabIndex="2"
                    ref={lastNameRef}
                />
            </WrapperInput>
            <WrapperInput>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput
                    type="email"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="examplemail@example.com"
                    tabIndex="3"
                    ref={emailRef}
                />
            </WrapperInput>
            <WrapperInput>
                <StyledLabel htmlFor="phone">Phone number</StyledLabel>
                <StyledInput
                    type="text"
                    name="phone"
                    id="phone"
                    tabIndex="4"
                    ref={phoneRef}
                />
            </WrapperInput>
            <WrapperInput>
                <StyledLabel htmlFor="message">Message</StyledLabel>
                <StyledTextArea
                    placeholder="Enter your message here..."
                    className="message"
                    name="message"
                    ref={messageRef}
                />
            </WrapperInput>
{/*TODO check Button Element implementation */}
            <Button type="submit"
                    onSubmit={handleSubmit}
                    className="send"
                    dark="true"
                    primary="true"
            >Submit</Button>
        </ContactFormWrapper>
    )
};

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #FFFFFF;
`

const StyledInput = styled.input`
  min-width: 300px;
  min-height: 30px;
`

const StyledTextArea = styled.textarea`
  min-width: 300px;
  min-height: 150px;
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`


export default ContactForm;