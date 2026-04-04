"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const fadeInMask = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1] 
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="services section" id="services">
            <motion.h2 
                className="section-title-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <span>Services.</span>
            </motion.h2>

            <motion.div 
                className="services-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Services Card 1 */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-layout"></i>
                        </div>
                        <h2 className="services-title">Web Design</h2>
                        <p className="services-description">
                            Beautiful and elegant designs with interfaces that are
                            intuitive, efficient and pleasant to use for the user.
                        </p>
                    </div>
                </motion.article>

                {/* Services Card 2 */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-code-alt"></i>
                        </div>
                        <h2 className="services-title">Development</h2>
                        <p className="services-description">
                            Custom web development tailored to your specifications, designed
                            to provide a flawless user experience.
                        </p>
                    </div>
                </motion.article>

                {/* Services Card 3 */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-mobile-alt"></i>
                        </div>
                        <h2 className="services-title">Mobile App</h2>
                        <p className="services-description">
                            Design and transform website projects into mobile apps to
                            provide a seamless user experience.
                        </p>
                    </div>
                </motion.article>
            </motion.div>
        </section>
    );
};

export default Services;
