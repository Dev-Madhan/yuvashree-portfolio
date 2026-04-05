"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="footer-container container grid">
                <ul className="footer-links">
                    <li><a href="#home" className="footer-link">Home</a></li>
                    <li><a href="#about" className="footer-link">About</a></li>
                    <li><a href="#projects" className="footer-link">Projects</a></li>
                </ul>
                <span className="footer-copy">
                    &#169; All Rights Reserved By
                    <a href="#"> Yuvashree Maniarasu.</a>
                </span>
            </div>
        </motion.footer>
    );
};

export default Footer;
