import React from 'react';

const WorkSection: React.FC = () => {
    return (
        <section className="my-section">
        <div className="container">
            <h2>About My Work</h2>

            <p><strong>Technologist | Software Engineer | Innovator</strong></p>

            <h2>Professional Summary</h2>
            <p>With three decades of experience in technology and software engineering, I bring a wealth of knowledge and expertise to every project. My career has spanned various industries including healthcare, pharma, logistics, finance, retail, education, and hospitality, allowing me to develop a versatile skill set and a keen understanding of the unique challenges and opportunities each sector presents. My passion for emerging technologies, particularly AI, drives my commitment to not only meet current demands but to anticipate and shape future developments.</p>

            <h2>Key Areas of Expertise</h2>
            <ul>
            <li><strong>Healthcare & Pharma:</strong> Implementing robust software solutions to improve patient care and streamline pharmaceutical operations.</li>
            <li><strong>Logistics & Finance:</strong> Enhancing supply chain efficiency and financial systems through innovative technological applications.</li>
            <li><strong>Retail & Hospitality:</strong> Leveraging technology to enhance customer experiences and operational efficiency.</li>
            <li><strong>Education:</strong> Developing educational tools and platforms that facilitate learning and administrative processes.</li>
            <li><strong>Artificial Intelligence:</strong> Pioneering AI applications that transform traditional practices and drive future innovation.</li>
            </ul>

            <h2>Professional Philosophy</h2>
            <p>I firmly believe that the role of a technologist is to constantly evolve, adapting to new challenges and leveraging emerging technologies to create impactful solutions. My approach is rooted in a forward-thinking mindset, ensuring that every project not only addresses current needs but also positions clients for future success. Embracing the transformative power of AI, I am committed to driving innovation and excellence in every endeavor.</p>

            <h2>Let's Connect</h2>
            <p>I am always eager to explore new opportunities and collaborate on innovative projects. If you are looking for a seasoned technologist with a passion for emerging technologies and a track record of successful implementations, let's connect.</p>

            <div className="contact-info">
            <p><strong>William Cobb</strong></p>
            <p><a href="http://williamcobb.com">williamcobb.com</a> | <a href="http://2wc.ai">2wc.ai</a></p>
            <p>Email: <a href="mailto:william@2wc.com">william@2wc.com</a></p>
            <p>Phone: 703.585.1065</p>
            </div>            

        </div>
            
        </section>
    );
}

export default WorkSection;
