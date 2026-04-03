import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about-container container grid">
                <h2 className="section-title-1">
                    <span>About Me.</span>
                </h2>

                <div className="about-profile">
                    <div className="about-image">
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
                    </div>
                </div>

                <div className="about-info">
                    <p className="about-description">
                        Passionate about creating <b>Web Pages</b> with
                        <b>UI/UX User Interface</b>, I have years of experience and many
                        clients are happy with the projects carried out.
                    </p>

                    <ul className="about-list">
                        <li className="about-item">
                            <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git &
                            GitHub, Bootstrap, Flutter & Figma.
                        </li>
                    </ul>

                    <div className="about-buttons">
                        <a href="#contact" className="button">
                            <i className="bx bx-paper-plane"></i>
                            Contact Me
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="button-ghost">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
