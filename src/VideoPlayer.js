import React, { useState } from 'react';
import './VideoPlayer.css'; // Import your CSS file

const VideoPlayer = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const playVideo = () => {
    setIsVideoVisible(true);
  };

  return (
    <section className="section-1">
      <div className={`container ${isVideoVisible ? 'video-active' : ''}`}>
        {!isVideoVisible && (
          <div className="image-container">
            <div className="image">
              <img
                src="https://n2new-admin.north2.work/uploads/i_Phone_11_Pro_Mockup_bd23992bf3.jpg"
                alt="Preview"
              />
            </div>
            <div className="play-button" onClick={() => playVideo()}>
              Play Video
            </div>
          </div>
        )}
        {isVideoVisible && (
          <div className="video-container">
            <iframe
              title="Showreel Video"
              width="100%"
              height="100%"
              src="https://www.shutterstock.com/shutterstock/videos/1036803500/preview/stock-footage-bangkok-thailand-august-mascots-of-one-piece-manga-series-posing-in-front-of-the.webm"
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPlayer;
