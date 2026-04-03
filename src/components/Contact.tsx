"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [contactMessage, setContactMessage] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            // serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_kzkr5bl', 'template_emgzv0m', form.current, '0v7LSRfZsCkuD-BzT')
                .then(() => {
                    setContactMessage('Message sent successfully ✅');
                    setTimeout(() => {
                        setContactMessage('');
                    }, 5000);
                    form.current?.reset();
                }, () => {
                    setContactMessage('Message not sent (service error) ❌');
                });
        }
    };

    return (
        <section className="contact section" id="contact">
            <div className="contact-container container grid">
                <div className="contact-data">
                    <h2 className="section-title-2">Contact Me.</h2>
                    <p className="contact-description-1">
                        I will read all emails. Send me any message you want and I'll get back to you.
                    </p>
                    <p className="contact-description-2">
                        I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.
                    </p>
                    <div className="geometric-box"></div>
                </div>

                <div className="contact-mail">
                    <h2 className="contact-title">Send Me A Message</h2>

                    <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form">
                        <div className="contact-group">
                            <div className="contact-box">
                                <input type="text" name="user_name" className="contact-input" id="name" placeholder="First Name" required />
                                <label htmlFor="name" className="contact-label">First Name</label>
                            </div>

                            <div className="contact-box">
                                <input type="email" name="user_email" className="contact-input" id="email" placeholder="Email Address" required />
                                <label htmlFor="email" className="contact-label">Email Address</label>
                            </div>
                        </div>

                        <div className="contact-box">
                            <input type="text" name="user_subject" className="contact-input" id="subject" placeholder="Subject" required />
                            <label htmlFor="subject" className="contact-label">Subject</label>
                        </div>

                        <div className="contact-box contact-area">
                            <textarea name="user_message" id="message" className="contact-input" placeholder="Message" required></textarea>
                            <label htmlFor="message" className="contact-label">Message</label>
                        </div>

                        <p className="contact-message" id="contact-message">{contactMessage}</p>

                        <button type="submit" className="contact-button button">
                            <i className="ri-send-plane-line"></i> Send Message
                        </button>
                    </form>
                </div>

                <div className="contact-social">
                    <img src="/img/curved-arrow.svg" alt="" className="contact-social-arrow" />
                    <div className="contact-social-data">
                        <div>
                            <p className="contact-social-description-1">Does not send emails</p>
                            <p className="contact-social-description-2">Write me on my social networks</p>
                        </div>

                        <div className="contact-social-links">
                            <a href="https://www.facebook.com/" target="_blank" className="contact-social-link">
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="contact-social-link">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="contact-social-link">
                                <i className="bx bxl-linkedin-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
