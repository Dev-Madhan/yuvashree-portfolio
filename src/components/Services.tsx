"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="services section">
            <motion.h2 
                className="section-title-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span>Services.</span>
            </motion.h2>

            <motion.div 
                className="services-container container grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Services Card 1 */}
                <motion.article className="services-card" variants={cardVariants}>
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
                <motion.article className="services-card" variants={cardVariants}>
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
                <motion.article className="services-card" variants={cardVariants}>
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
