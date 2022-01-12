import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {Button} from "../ButtonElement";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const formsparkFormId = '*****';
    const formsparkUrl = `https://submit-form.com/${formsparkFormId}`;
    const recaptchaKey = '******';
    const recaptchaRef = useRef();


    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const serviceMessage = {
        class: '',
        text: ''
    }

    const [formState, setFormState] = useState(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(serviceMessage);
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const submitForm = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    }

    const resetCaptcha = () => {
        window.grecaptcha.reset();
    }

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken
        };

        try {
            const result = await axios.post(formsparkUrl, payload);
            console.log(result);
            setMessage({
                class: 'background-color: green',
                text: 'Thank you for your message, i will reply shortly.'
            });
            setFormState(initialFormState);
            resetCaptcha();
        } catch (error) {
            console.log(error);
            setMessage({
                class: 'background-color: red',
                text: 'Sorry, there was a problem. Please try again or contact me on Xing.'
            });
        }
    }

    const updateFormInput = (event) => {
        const {id, value} = event.target;
        const formKey = id;
        const updateFormState = {...formState};
        updateFormState[formKey] = value;
        setFormState(updateFormState);
    }

    const updateRecaptchaToken = (token) => {
        setRecaptchaToken(token);
    };

    return (
        <ContactFormWrapper onSubmit={submitForm}>
            {/*TODO: user feedback sended mail*/}
            {message && <div>
                {message.text}
            </div>}
            <StyledLabel htmlFor="firstName">First name</StyledLabel>
            <StyledInput
                onChange={updateFormInput}
                type="text"
                name="firstName"
                id="firstName"
                value={formState.firstName}
            />
            <StyledLabel htmlFor="lastName">Last name</StyledLabel>
            <StyledInput
                onChange={updateFormInput}
                type="text"
                name="lastName"
                id="lastName"
                value={formState.lastName}
            />
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
                onChange={updateFormInput}
                type="email"
                name="email"
                id="email"
                value={formState.email}
            />
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledTextArea
                onChange={updateFormInput}
                id="message"
                name="message"
                value={formState.message}
            />
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptchaToken}
            />
            <Button
                style={{marginTop: 10}}
                type="submit"
                disabled={submitting}
                dark="true"
                primary="true"
            >{submitting ? 'Submitting...' : 'Submit'}</Button>
        </ContactFormWrapper>
    )
};

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 24px 0 24px 0;
  border: 1px solid #fff;

  @media screen and (max-width: 968px) {
    width: 75%;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`

const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #FFFFFF;
`

const StyledInput = styled.input`
  width: 80%;
  min-height: 30px;
  margin-bottom: 18px;
`

const StyledTextArea = styled.textarea`
  width: 80%;
  min-height: 150px;
  margin-bottom: 18px;
`

// const WrapperInput = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 10px;
//   width: 90%;
// `

export default ContactForm;