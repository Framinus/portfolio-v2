import React from 'react';
import '../style/professionalRole.css';

export default function ProfessionalRole(props) {
  return (
    <div className="role-detail">
      <div className="role-image">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          width={100}
          height={100}
      />
      </div>
      <div className="role-info">
        <h4 className="pro-title">{props.title}</h4>
        <p>{props.description}</p>
        <p className="techstack-text">{props.techStack}</p>
      </div>
    </div>
  );
}
