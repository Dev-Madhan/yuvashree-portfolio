"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SendIcon } from './ui/send';
import { DownloadIcon } from './ui/download';
const About = () => {
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
        <section className="about section" id="about">
            <motion.div
                className="about-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2
                    className="section-title-1"
                    variants={fadeInMask}
                >
                    <span>About Me.</span>
                </motion.h2>

                <div className="about-profile">
                    <motion.div
                        className="about-image"
                        variants={fadeInMask}
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
                    variants={fadeInMask}
                >
                    <p className="about-description">
                        Passionate about crafting <b>digital experiences</b> that are
                        functional, aesthetically pleasing, and <b>user-centered</b>.
                        My design philosophy is rooted in solving real problems through
                        modern interface design and deep user research.
                    </p>

                    <ul className="about-list">
                        <li className="about-item">
                            <b>My Skills Are:</b> Figma, Adobe Creative Suite (XD, PS, AI),
                            User Research, Information Architecture, Wireframing,
                            Interactive Prototyping, & Visual Design.
                        </li>
                    </ul>

                    <div className="about-buttons">
                        <a href="#contact" className="button">
                            <SendIcon size={20} />
                            Contact
                        </a>

                        <a
                            href="/resume/resume.pdf"
                            target="_blank"
                            className="button-ghost"
                            download="resume.pdf">
                            <DownloadIcon size={20} />
                            Resume
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
