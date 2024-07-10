import React from 'react';
import smileImage from '../assets/images/smileSq.png';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content">
            <div className='header-large'>
              William Cobb
            </div>
            <p className='align-left hero-section-text'>
              Hello! I'm William Cobb, a seasoned technologist and software 
              engineer with over 30 years of experience spanning diverse 
              industries such as Healthcare, Pharma, Logistics, 
              Finance, Retail, Education, and Hospitality. 
              My passion for emerging technologies and AI drives me 
              to continually explore and shape the future of 
              software development. With a forward-thinking approach, 
              I am committed to not only addressing current technological 
              challenges but also preparing for the evolving landscape. 
              Let's embark on this exciting journey together, leveraging 
              AI and innovative solutions to redefine what's possible.
            </p>
            <a href="/work" className="btn btn-primary">My Work</a>
            <a href="/contact" className="btn btn-secondary">Contact Me</a>
          </div>
          <div className="col-md-6">
            <img src={smileImage} alt="William W Cobb III" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
