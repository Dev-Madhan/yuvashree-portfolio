import React from 'react';

const Services = () => {
    return (
        <section className="services section">
            <h2 className="section-title-2">
                <span>Services.</span>
            </h2>

            <div className="services-container container grid">
                {/* Services Card 1 */}
                <article className="services-card">
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
                </article>

                {/* Services Card 2 */}
                <article className="services-card">
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
                </article>

                {/* Services Card 3 */}
                <article className="services-card">
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
                </article>
            </div>
        </section>
    );
};

export default Services;
