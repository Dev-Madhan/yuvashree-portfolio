"use client";
import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
    {
        year: '2017 - 2019',
        title: 'Computer Science Graduate',
        subtitle: 'State University',
        description: 'Earned degree with distinction. Participated in various coding competitions and built several open-source projects.',
    },
    {
        year: '2019 - 2021',
        title: 'Lead Frontend Developer',
        subtitle: 'Tech Solutions Inc.',
        description: 'Led a team of frontend developers to build scalable enterprise applications. Optimized performance and improved maintainability.',
    },
    {
        year: '2021 - 2022',
        title: 'UI/UX Design Course',
        subtitle: 'Design Certification',
        description: 'Mastered principles of user interface design, user experience research, and prototyping using Figma and Adobe Creative Suite.',
    },
    {
        year: '2022 - Present',
        title: 'Full Stack Developer',
        subtitle: 'Freelance & Projects',
        description: 'Developing high-quality web and mobile solutions using React, Next.js, and modern technologies. Focused on performance and user experience.',
    },
];

const Journey = () => {
    const fadeInMask = {
        hidden: { opacity: 0, y: 30 },
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
        <section className="journey section" id="journey">
            <motion.h2 
                className="section-title-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 + (index * 0.1) }}
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
