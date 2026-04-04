"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const journeyData = [
    {
        year: '2017 - 2019',
        title: 'Visual Communication Graduate',
        subtitle: 'State University',
        description: 'Learned the fundamentals of visual design, color theory, and typography. Specialized in digital media and brand identity.',
    },
    {
        year: '2019 - 2021',
        title: 'Junior UI Designer',
        subtitle: 'Creative Agencies LLC',
        description: 'Assisted in creating high-quality visual designs for digital products. Collaborated with developers to ensure design fidelity.',
    },
    {
        year: '2021 - 2022',
        title: 'Advanced UX Certification',
        subtitle: 'UX Design Institute',
        description: 'Completed an intensive program focused on user research, usability testing, and accessibility standards.',
    },
    {
        year: '2022 - Present',
        title: 'Senior UI/UX Designer',
        subtitle: 'Freelance & Design Lead',
        description: 'Leading end-to-end design processes for startups and enterprise clients. Focused on creating human-centric digital products.',
    },
];

const Journey = () => {
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
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="journey section" id="journey">
            <motion.h2 
                className="section-title-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
                <span>My Journey.</span>
            </motion.h2>

            <div className="journey-container container grid">
                <motion.div 
                    className="journey-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {journeyData.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="journey-item"
                            variants={fadeInMask}
                        >
                            <motion.div 
                                className="journey-dot"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 + (index * 0.1) }}
                            ></motion.div>
                            <div className="journey-card">
                                <div className="journey-header">
                                    <h3 className="journey-title">{item.title}</h3>
                                    <span className="journey-year">{item.year}</span>
                                </div>
                                <h4 className="journey-subtitle">{item.subtitle}</h4>
                                <p className="journey-description">{item.description}</p>
                                <div className="geometric-box"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;
