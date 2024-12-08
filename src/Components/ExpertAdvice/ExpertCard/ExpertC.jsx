import React from 'react';
import './ExpertC.css';

const ExpertC = ({ 
  height, 
  width, 
  boxHeight,
  imgSrc,
  title,
 }) => {
  return (
    <div className="Explore-Card">
      <div className="Explore-Img" style={{height: boxHeight}}>
        <img src={imgSrc} alt="" style={{ height: height, width: width }} />
        <div className="Overlay"></div>
      </div>
      <div className="EContent">
        <div className="Explore-Content">
          <span>{title}</span>
        </div>
        <div className="About-Explore">
          {/* How to book Aarti at Saryu Ghat in Ayodhya?. */}
        </div>
      </div>
    </div>
  );
}

export default ExpertC;
