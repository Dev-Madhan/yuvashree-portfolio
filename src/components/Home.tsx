"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Home = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const nameText = "Yuvashree";

    useEffect(() => {
        if (!sectionRef.current) return;
        
        const q = gsap.utils.selector(sectionRef.current);
        
        gsap.from(q(".letter"), {
            opacity: 0,
            y: 50,
            rotateX: -90,
            stagger: 0.05,
            duration: 1,
            delay: 2, // After curtain
            ease: "back.out(1.7)"
        });
    }, []);

    return (
        <section ref={sectionRef} className="home section" id="home">
            <div className="home-container container grid">
                <motion.h1 
                    className="home-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {nameText.split("").map((char, index) => (
                        <span key={index} className="letter" style={{ display: 'inline-block' }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </motion.h1>

                <div className="home-profile">
                    <motion.div 
                        className="home-image"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <img
                            src="/img/home-perfil.jpg"
                            alt="home image"
                            className="home-img" />

                        <div className="home-shadow"></div>

                        <img
                            src="/img/curved-arrow.svg"
                            alt=""
                            className="home-arrow" />
                        <img
                            src="/img/random-lines.svg"
                            alt=""
                            className="home-line" />

                        <div className="geometric-box"></div>
                    </motion.div>

                    <motion.div 
                        className="home-social"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className="home-social-link"
                        ><i className="bx bxl-instagram"></i
                        ></a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="home-social-link">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="home-social-link">
                            <i className="bx bxl-github"></i>
                        </a>
                    </motion.div>
                </div>

                <motion.div 
                    className="home-info"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="home-description">
                        <b>Frontend Developer</b>, with knowledge in web development and
                        design, I offer the best projects resulting in quality work.
                    </p>

                    <a href="#about" className="home-scroll">
                        <div className="home-scroll-box">
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <span className="home-scroll-text">Scroll Down</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
