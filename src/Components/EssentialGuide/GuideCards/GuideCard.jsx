import React, { useState } from 'react';
import './GuideCard.css';

const GuideCard = ({
  images,
  name,
  about,
  wekipedia,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="Essential-Expert-card">
      <div className="Essential-image">
        <img src={images[currentImageIndex]} alt="" style={{ transition: ".5s ease-in-out" }} />
      </div>
      <div className="contents">
        <span className="temple-title">
          {name}
        </span>
        <p className="Temple-desc">
          {about}
        </p>
        <div className="action">
          <a href={wekipedia}><img src="./Icons/Wekipedia.png" className="Icons mx-3"></img></a>
          <div onClick={nextImage}>
            <img src="./Icons/next.png"  className="Icons">
          </img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
