import React from 'react';
import '../../assets/style/interM.css'
function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card average">
      <img src={icon} className="icon"/>
      <h3 style={{fontSize:'20px',paddingTop:'15px'}}>{title}</h3>
      <p style={{color:'#7a7a7a'}}>{description}</p>
    
    </div>
  );
}

export default ServiceCard;
