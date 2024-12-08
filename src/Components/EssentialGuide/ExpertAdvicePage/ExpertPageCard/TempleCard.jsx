import React, { useState } from 'react';
import './TempleCard.css';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';

const TempleCard = ({ name, img, about, wikipedia, Vid, lat, lng }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const NavigateToMap = () => {
    const addressQuery = encodeURIComponent(`${name}`); // Encode the address or place name
    window.open(`https://www.google.com/maps/search/?api=1&query=${name}+Ayodhya`, '_blank'); // Open Google Maps in a new tab with the address query
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const openVideo = () => {
    setShowVideo(true);
    window.scrollY = 0;
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const sizeOfScreen = window.innerWidth;
  const opts =
    sizeOfScreen > 1005 ? { width: '1000', height: '500' } : { width: '400', height: '200' };

  return (
    <div className="Essential-card">
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <span className="titles">{name}</span>
        <p className="descs">
          {expanded ? about : about.slice(0, 70)}
          {about.length > 100 && !expanded && (
            <span>
              ...{' '}
              <button className="Temple-read-more" onClick={toggleExpansion}>
                Read More
              </button>
            </span>
          )}
        </p>
        {expanded && (
          <button className="Temple-read-less" onClick={toggleExpansion}>
            Read Less
          </button>
        )}
        <div className="Temple-Links">
            <div className="map" onClick={NavigateToMap}><img src="./Icons/maps-and-flags.png" className="Icons Temple-Expert-read" alt="Google Maps Icon" /></div>
          <div className="Temple-YT">
            <a href={wikipedia}><img src="./Icons/Wekipedia.png" className="Icons Temple-Expert-read" alt="Wikipedia Icon" /></a>
            {Vid !== '' && (
              <img src="./Icons/play.png" className="Icons Temple-Expert-read" alt="YouTube Icon" onClick={openVideo} />
            )}
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-modal">
            <YouTube videoId={Vid} opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TempleCard;
