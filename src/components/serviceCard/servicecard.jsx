import React from 'react';
import '../../assets/style/interM.css'
function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
