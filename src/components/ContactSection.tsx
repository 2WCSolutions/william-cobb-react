import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="my-section">
        <div className="container">
            <h2>Contact William</h2>
            <p>
                <b>Technologist | Software Engineer | Visionary Leader</b>
            </p>

            <p>Thank you for your interest in connecting with me. 
                Please use the contact information provided to get in touch. 
                I look forward to hearing from you!</p>
        
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

export default ContactSection;
