"use client";
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollUp from '@/components/ScrollUp';

export default function Page() {
    useEffect(() => {
        const initScrollReveal = async () => {
            const ScrollReveal = (await import('scrollreveal')).default;
            const sr = ScrollReveal({
                origin: 'top',
                distance: '60px',
                duration: 2500,
                delay: 400,
                // reset: true // Animation repeat 
            });

            sr.reveal(`.home-profile, .about-image, .contact-mail`, { origin: 'right' });
            sr.reveal(`.home-name, .home-info,
                       .about-container, .section-title-1, .about-info,
                       .contact-social, .contact-data`, { origin: 'left' });
            sr.reveal(`.services-card, .projects-card`, { interval: 100 });
        };

        initScrollReveal();
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Services />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <ScrollUp />
        </>
    );
}
