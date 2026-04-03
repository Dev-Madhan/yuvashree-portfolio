import React from 'react';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <h1 className="home-name">Renzo Cruz</h1>

                <div className="home-profile">
                    <div className="home-image">
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
                    </div>

                    <div className="home-social">
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
                    </div>
                </div>

                <div className="home-info">
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
                </div>
            </div>
        </section>
    );
};

export default Home;
