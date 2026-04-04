"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Services = () => {
    const fadeInMask: Variants = {
        hidden: { opacity: 0, y: 40 },
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
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
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
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-layout"></i>
                        </div>
                        <h2 className="services-title">UI Design</h2>
                        <p className="services-description">
                            Creating high-fidelity mockups and visually 
                            compelling interfaces for web and mobile products.
                        </p>
                    </div>
                </motion.article>

                {/* Services Card 2 */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-search-alt"></i>
                        </div>
                        <h2 className="services-title">UX Research</h2>
                        <p className="services-description">
                            Conducting user interviews, surveys, and usability 
                            testing to validate design decisions.
                        </p>
                    </div>
                </motion.article>

                {/* Services Card 3 */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-shape-square"></i>
                        </div>
                        <h2 className="services-title">Prototyping</h2>
                        <p className="services-description">
                            Developing interactive prototypes to map out user 
                            flows and demonstrate product functionality.
                        </p>
                    </div>
                </motion.article>
            </motion.div>
        </section>
    );
};

export default Services;
