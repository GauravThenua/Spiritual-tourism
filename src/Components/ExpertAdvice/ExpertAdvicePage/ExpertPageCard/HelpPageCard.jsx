// ExpertPageCard.js

import React from 'react';
import './HelpPageCard.css';

const HelpPageCard = (
  { name,
    img ,
    about
  }
) => {
  return (
    <div className="Expert-card">
      <div className="image">
        <img src={img} alt="Temple" />
      </div>
      <div className="content">
        <span className="title">
          {name}
        </span>
        <p className="desc">
          {about}
         </p>
        <a className="Expert-read" href="#">
          Learn More
          <span aria-hidden="true"> → </span>
        </a>
      </div>
    </div>
  );
};

export default HelpPageCard;
