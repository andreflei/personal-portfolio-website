import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {Button} from "../ButtonElement";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const formsparkFormId = 'Wii9yXJb';
    const formsparkUrl = `https://submit-form.com/${formsparkFormId}`;
    const recaptchaKey = '6LfXBAUeAAAAACeJxJQobqY6iWPfhowsZihXEA0U';
    const recaptchaRef = useRef();

    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const serviceMessage = {
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

    const resetMessage = () => {
        setMessage({text: ''});
    }

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken
        };

        try {
            await axios.post(formsparkUrl, payload);
            setMessage({
                text: 'Thank you for your message, i will reply shortly.'
            });
            setFormState(initialFormState);
            resetCaptcha();
        } catch (error) {
            if(!payload["g-recaptcha-response"].length) {
                setMessage({
                    text: 'Please click the reCAPTCHA checkbox above.'
                });
                setTimeout(() => {
                    resetMessage();
                }, 5000);
            } else {
                setMessage({
                    text: 'Sorry, there was a problem. Please try again or contact me on Xing.'
                });
                setTimeout(() => {
                    resetMessage();
                }, 5000);
            }
        }
        setRecaptchaToken('');
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
            <StyledLabel htmlFor="firstName">First name</StyledLabel>
            <StyledInput
                onChange={updateFormInput}
                type="text"
                name="firstName"
                id="firstName"
                value={formState.firstName}
                required
            />
            <StyledLabel htmlFor="lastName">Last name</StyledLabel>
            <StyledInput
                onChange={updateFormInput}
                type="text"
                name="lastName"
                id="lastName"
                value={formState.lastName}
                required
            />
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
                onChange={updateFormInput}
                type="email"
                name="email"
                id="email"
                value={formState.email}
                required
            />
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledTextArea
                onChange={updateFormInput}
                id="message"
                name="message"
                value={formState.message}
                required
            />
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptchaToken}
            />
            <Button
                style={{marginTop: 15}}
                type="submit"
                disabled={submitting}
                dark="true"
                primary="true"
            >{submitting ? 'Submitting...' : 'Submit'}</Button>
            <ContactFormMessage>{message.text}</ContactFormMessage>
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

  @media screen and (min-height: 1200px) {
    min-height: 1000px;
  }
`

const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #FFFFFF;

  @media screen and (min-height: 1200px) {
    margin-bottom: 25px;
  }
`

const StyledInput = styled.input`
  width: 80%;
  min-height: 30px;
  margin-bottom: 18px;
  font-size: 16px;
  padding-left: 5px;

  @media screen and (min-height: 1200px) {
    min-height: 50px;
    margin-bottom: 30px;
  }
`

const StyledTextArea = styled.textarea`
  width: 80%;
  min-height: 150px;
  margin-bottom: 18px;
  font-size: 16px;
  padding: 0 5px 0 5px;

  @media screen and (min-height: 1200px) {
    min-height: 250px;
    margin-bottom: 25px;
  }
`

const ContactFormMessage = styled.div`
  margin: 15px;
  font-weight: 700;
  color: #F4A261;
  text-align: center;
`

export default ContactForm;