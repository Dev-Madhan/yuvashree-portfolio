"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectsData = [
        {
            img: "/img/project-1.jpg",
            subtitle: "Website",
            title: "Restaurant Website",
            description: "Project that you carry out in the design and structure of the layout, showing the design at the client's request."
        },
        {
            img: "/img/project-2.jpg",
            subtitle: "App",
            title: "Yoga App",
            description: "Project that you carry out in the design and structure of the layout, showing the design at the client's request."
        },
        {
            img: "/img/project-3.jpg",
            subtitle: "Website",
            title: "Coffee Delivery Website",
            description: "Project that you carry out in the design and structure of the layout, showing the design at the client's request."
        },
        {
            img: "/img/project-1.jpg",
            subtitle: "App",
            title: "Fast Food App",
            description: "Project that you carry out in the design and structure of the layout, showing the design at the client's request."
        },
        {
            img: "/img/project-2.jpg",
            subtitle: "Website",
            title: "Barbershop Website",
            description: "Project that you carry out in the design and structure of the layout, showing the design at the client's request."
        }
    ];

    const fadeInMask = {
        hidden: { opacity: 0, y: 50 },
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
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="projects section" id="projects">
            <motion.h2 
                className="section-title-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <span>Projects.</span>
            </motion.h2>

            <motion.div 
                className="projects-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {projectsData.map((project, index) => (
                    <motion.article 
                        key={index} 
                        className="projects-card"
                        variants={fadeInMask}
                        whileHover={{ 
                            y: -12,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            transition: { duration: 0.4, ease: "easeOut" }
                        }}
                    >
                        <div className="projects-image">
                            <img src={project.img} alt="image" className="projects-img" />
                            <a href="#" className="projects-button button">
                                <i className="ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        <div className="projects-content">
                            <h3 className="projects-subtitle">{project.subtitle}</h3>
                            <h2 className="projects-title">{project.title}</h2>
                            <p className="projects-description">{project.description}</p>
                        </div>
                        <div className="projects-buttons">
                            <a href="https://github.com/" target="_blank" className="projects-link">
                                <i className="ri-github-line"></i>View
                            </a>
                            <a href="https://dribbble.com/" target="_blank" className="projects-link">
                                <i className="ri-dribbble-line"></i>View
                            </a>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
