import React from 'react';
import {Link} from 'react-router-dom';

import {useState} from 'react';
import EmailSignup from './EmailSignup';
import FormSuccess from './FormSuccess';

export default function Footer() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="subscribe" style={{color: "white"}}>
           {!isSubmitted? 
            <EmailSignup submitForm={submitForm}/> 
            :
            <FormSuccess />
        }
        </div>

        <div className="footer-container">
            <div className="footer-row">
                <h5>About Us</h5>
                <Link to="#"><p>Story</p></Link>
                <Link to="#"><p>Khách Hàng</p></Link>
                <Link to="#"><p>Testimonial</p></Link>
                <Link to="#"><p>Tuyển Dụng</p></Link>
            </div>

            <div className="footer-row">
                <h5>Services</h5>
                <Link to="#"><p>Travel Consultant</p></Link>
                <Link to="#"><p>Flight Ticket</p></Link>
                <Link to="#"><p>Hotel Booking</p></Link>
                <Link to="#"><p>Restaurant Booking</p></Link>
            </div>

            <div className="footer-row">
                <h5>Contact Us</h5>
                <Link to="#"><p>United State</p></Link>
                <Link to="#"><p>United Kingdom</p></Link>
                <Link to="#"><p>Australia</p></Link>
                <Link to="#"><p>Việt Nam</p></Link>
            </div>

            <div className="footer-row">
                <h5>Social</h5>
                <Link to="#"><p><i className="fab fa-facebook-f"></i>{" "}Facebook</p></Link>
                <Link to="#"><p><i className="fab fa-instagram-square"></i>{" "}Instagram</p></Link>
                <Link to="#"><p><i className="fab fa-youtube"></i>{" "}Youtube</p></Link>
                <Link to="#"><p><i className="fab fa-twitter"></i>{" "}Twitter</p></Link>
            </div>

        </div>

        </>
    )
}
