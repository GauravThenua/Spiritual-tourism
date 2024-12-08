import React from 'react';
import './BPC.css';

const BPC = ({
  imgSrc,
  title,
  about,
}) => {
  return (
    <div className="city-container">
      <div className="city-image">
        <img src={imgSrc} alt="" />
        <div className="city-Desc">
          <h3>{title}</h3>
          <p>
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BPC;
