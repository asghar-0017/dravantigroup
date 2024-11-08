import React from 'react';
import '../../assets/style/TerritoriesCovered.css';

const TerritoriesCovered = () => {
  return (
    <div className="territories-container">
      <div className="territories-header">
        <h2>Territories Covered</h2>
      </div>
      <div className="territories-content">
        <p>
          Today, our operations span the UAE, GCC, and MENA regions. We have recently expanded
          our services to the EU and USA, with ambitious plans to extend our reach into Southeast Asia.
        </p>
      </div>
      <div className="territories-cards">
        <div className="card">
          <h3>Vision</h3>
          <p>
            Our vision is to establish a premier national and regional technology ecosystem, delivering
            unique, innovative, and high-quality products, services, and investment opportunities for
            our business partners. We aim to be at the forefront of technological advancement, setting
            new standards for excellence and innovation.
          </p>
        </div>
        <div className="card">
          <h3>Mission</h3>
          <p>
            Our mission is to drive economic development in the UAE, GCC, and MENA regions, maximizing
            value for clients and shareholders alike. We are committed to leading the digital
            transformation of our industry, contributing to the prosperity and technological progress
            of the communities we serve.
          </p>
        </div>
        <div className="card">
          <h3>Values</h3>
          <p>
          At MBME Group, our core values guide our actions and shape our identity, fostering a culture of excellence and integrity, Innovation, Teamwork, Respect and Accountability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerritoriesCovered;
