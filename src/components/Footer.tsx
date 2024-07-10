import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-center p-3">
      <div className="container">
        <p>&copy; 2024 William W Cobb III. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/BuddyCobb" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/buddycobb/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/williamcobbiii/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.twitter.com/WilliamCobb" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
