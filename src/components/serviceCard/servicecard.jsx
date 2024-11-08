import React from 'react';
import '../../assets/style/interM.css'
function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <img src={icon} className="icon"/>
      <h3>{title}</h3>
      <p>{description}</p>
    
    </div>
  );
}

export default ServiceCard;
