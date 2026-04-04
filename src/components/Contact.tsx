"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, Variants } from 'framer-motion';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [contactMessage, setContactMessage] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
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

    const fadeInMask: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="contact section" id="contact">
            <motion.div 
                className="contact-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div 
                    className="contact-data"
                    variants={fadeInMask}
                >
                    <h2 className="section-title-2">Contact Me.</h2>
                    <p className="contact-description-1">
                        I will read all emails. Send me any message you want and I'll get back to you.
                    </p>
                    <p className="contact-description-2">
                        I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.
                    </p>
                    <div className="geometric-box"></div>
                </motion.div>

                <motion.div 
                    className="contact-mail"
                    variants={fadeInMask}
                >
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

                        <button 
                            type="submit" 
                            className="contact-button button"
                        >
                            <i className="ri-send-plane-line"></i> Send Message
                        </button>
                    </form>
                </motion.div>

                <motion.div 
                    className="contact-social"
                    variants={fadeInMask}
                >
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
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
