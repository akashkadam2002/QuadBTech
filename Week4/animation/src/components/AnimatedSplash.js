import React, { useEffect, useState } from 'react';
import './AnimatedSplash.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const AnimatedSplash = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [servicesScrollProgress, setServicesScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - windowHeight;
            const progress = (scrollY / maxScroll) * 100;
            setScrollProgress(progress);

            // Specific scroll calculation for services section
            const servicesSection = document.querySelector('.services');
            if (servicesSection) {
                const servicesRect = servicesSection.getBoundingClientRect();
                const servicesTop = servicesRect.top + window.scrollY;
                const servicesHeight = servicesRect.height;
                const servicesVisibleStart = Math.max(0, scrollY - servicesTop);
                const servicesProgress = Math.min(100, (servicesVisibleStart / servicesHeight) * 100);
                setServicesScrollProgress(servicesProgress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="splash-container">
                <div className='head'>
                    <div className="main-text">
                        Come to us with a <span className='color'>vision</span>
                    </div>
                    <div className="line-with-circle"></div>
                    <h1 className='title'>Embrace the Quest</h1>
                    <p className='text'>We build digital products, from idea to design, development to marketing & PR to post launch support</p>
                    <button className='btn'>GET FREE CONSULTATION</button>
                    <div className="marquee-container">
                        <div className="marquee-content">
                            <span className="animated-text"> <span className='arrow'><FaAngleLeft /><FaAngleRight /></span> Web Development </span>
                            <span className="animated-text"><span className='arrow'><FaAngleLeft /><FaAngleRight /></span> Web Development </span>
                            <span className="animated-text"><span className='arrow'><FaAngleLeft /><FaAngleRight /></span> Web Development </span>
                            <span className="animated-text"> <span className='arrow'><FaAngleLeft /><FaAngleRight /></span> Web Development </span>
                            <span className="animated-text"> <span className='arrow'><FaAngleLeft /><FaAngleRight /></span> Web Development </span>
                            <span className="animated-text"><span className='arrow'><FaAngleLeft /><FaAngleRight /></span> Web Development </span>
                        </div>
                    </div>
                </div>

                <div className="services">
                    <h2 className='tit'>We are creative designers, developers and marketers from India driven by a common purpose to inspire, create and launch ground-breaking ideas.</h2>
                    <p className='text'>We love turning your vision into reality. Here's how we work:</p>
                    
                    <div className="services-content">
                        <div className="horizontal-line">
                            
                        </div>
                        <div 
                            className="scrolling-circle" 
                            style={{ left: `${servicesScrollProgress}%` }}
                        />
                        
                        <div className='service-points'>
                            <div className='point point-left'>
                                <h3>We find the Creatives, so you don't have to</h3>
                                <p>What if marketing your brand or business was effortless? We always make sure to look up time we take off. We are working together with you to design and execute innovative, data-driven creatives that will get results.</p>
                            </div>
                            
                            <div className='point point-right'>
                                <h3>We create technologies you will be proud of</h3>
                                <p>We work with you to determine the best approach that will make the biggest impact. Using the latest technologies we create tools through which your business can grow.</p>
                            </div>

                            <div className='point point-left'>
                                <h3>Finally... we deliver excellence</h3>
                                <p>Our process ensures that every project we undertake meets the highest standards of quality and delivers measurable results for your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimatedSplash;