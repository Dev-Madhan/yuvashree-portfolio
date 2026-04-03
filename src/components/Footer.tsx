import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container grid">
                <ul className="footer-links">
                    <li><a href="#home" className="footer-link">Home</a></li>
                    <li><a href="#about" className="footer-link">About</a></li>
                    <li><a href="#projects" className="footer-link">Projects</a></li>
                </ul>
                <span className="footer-copy">
                    &#169; All Rights Reserved By 
                    <a href="#"> Madhan.</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
