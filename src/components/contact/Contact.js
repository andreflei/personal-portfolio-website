import React from 'react';
import { useState } from 'react';
import './contact.css';
import mailsvg from '../../images/message-369540.svg';

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={mailsvg} alt="Picture shows a envelope"/>
            </div>
            <div className="right">
                <h2 className="contact-heading">Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for your message, i'll reply soon :-)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact;