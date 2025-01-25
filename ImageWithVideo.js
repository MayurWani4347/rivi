import React from "react";
import "../styles/image.css"; // Make sure this file is created and linked properly

const ImageWithVideo = () => {
  return (
    <div className="image-with-video">
      <h1 className="heading">One platform, endless use cases.</h1>
      <video
        className="viiiiideo"
        src="https://storage.googleapis.com/rivi-website-content/Compressed%20Rivi%20Capabilities%20Oct%2024%20%20(1).mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default ImageWithVideo;
