import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './VideoC.css';

function VideoC({
  vId,
  about,
  title,
}) {
  const videoId = vId;
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
    window.scrollY = 0;
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const sizeOfScreen = window.innerWidth;

  const opts = sizeOfScreen > 1005 ? { width: '1200', height: '600' } : { width: '400', height: '200' };

  return (
    <div className="video-Box">
      <div className="video" onClick={openVideo}>
        <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" />
        <div className="play-button">▶</div>
      </div>

      {showVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-modal">
            <YouTube videoId={videoId} opts={opts} />
          </div>
        </div>
      )}

      <div className="video-title">
        {title}
      </div>
      <div className="video-about">
        {about}
      </div>
    </div>
  );
}

export default VideoC;
