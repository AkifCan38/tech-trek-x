import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import backgroundImage from '../assets/background-image.jpg';

const Contact = () => {
    return (
        <div className="contact" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2>Contact Us</h2>
            <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                Email: akifcan.duman@iaau.edu.kg
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} className="icon" />
                Phone: +996 995 285 894
            </p>
        </div>
    );
};

export default Contact;
