import React from "react";
import "../styles/demo.css"; // Ensure this file exists and is correctly linked

const VideoSection = () => {
  return (
    <div className="video-sectio">
      <h1 className="headin">
        The smartest AI in travel. <br />
        Only one that solves for multi-city trips.
      </h1>
      <video
        className="video-playe"
        src="https://storage.googleapis.com/rivi-website-content/Mobile%20mockup%2018_9%20(online-video-cutter.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default VideoSection;
