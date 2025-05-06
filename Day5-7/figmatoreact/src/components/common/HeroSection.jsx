import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection = ({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
  backgroundImage,
  className = ''
}) => {
  return (
    <section className={`relative py-20 ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryButtonText && (
            <Link to={primaryButtonLink || '#'}>
              <Button variant="primary" size="large">
                {primaryButtonText}
              </Button>
            </Link>
          )}
          
          {secondaryButtonText && (
            <Link to={secondaryButtonLink || '#'}>
              <Button variant="outline" size="large">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string,
  primaryButtonLink: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonLink: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};

export default HeroSection;