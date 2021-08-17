import React from 'react';
import './contact.css';
import mailsvg from '../../images/message-369540.svg';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                </form>
            </div>
        </div>
    )
}

export default Contact;