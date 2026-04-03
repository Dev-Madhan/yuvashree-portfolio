"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about-container container grid">
                <motion.h2 
                    className="section-title-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span>About Me.</span>
                </motion.h2>

                <div className="about-profile">
                    <motion.div 
                        className="about-image"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="/img/about-perfil.jpg"
                            alt="about image"
                            className="about-img" />

                        <div className="about-shadow"></div>
                        <div className="geometric-box"></div>

                        <img
                            src="/img/random-lines.svg"
                            alt=""
                            className="about-line" />
                        <div className="about-box"></div>
                    </motion.div>
                </div>

                <motion.div 
                    className="about-info"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="about-description">
                        Passionate about creating <b>Web Pages</b> with
                        <b>UI/UX User Interface</b>, I have years of experience and many
                        clients are happy with the projects carried out.
                    </p>

                    <ul className="about-list">
                        <li className="about-item">
                            <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git &
                            GitHub, Bootstrap, Flutter & Figma.
                        </li>
                    </ul>

                    <div className="about-buttons">
                        <a href="#contact" className="button">
                            <i className="bx bx-paper-plane"></i>
                            Contact Me
                        </a>

                        <a
                            href="/resume/resume.pdf"
                            target="_blank"
                            className="button-ghost"
                            download="resume.pdf">
                            <i className="ri-download-line"></i>
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
