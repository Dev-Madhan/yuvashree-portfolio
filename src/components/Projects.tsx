import React from 'react';

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

    return (
        <section className="projects section" id="projects">
            <h2 className="section-title-1">
                <span>Projects.</span>
            </h2>

            <div className="projects-container container grid">
                {projectsData.map((project, index) => (
                    <article key={index} className="projects-card">
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
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
