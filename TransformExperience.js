import React, { useState, useEffect } from "react";
import "../styles/transformExperience.css"; // Ensure your CSS file is properly linked

const TransformExperience = () => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [
    "https://a.storyblok.com/f/87676/2072x1460/68b3377e99/chat-voice-ai-illus-1.png",
    "https://a.storyblok.com/f/87676/1554x1092/b1fd67633f/language-illus-new.png",
    "https://a.storyblok.com/f/87676/2072x1456/0c75d5de4d/off-topic-illus-4.png",
    "https://a.storyblok.com/f/87676/1554x1092/b1cba1036c/sdk-illus.png",
    "https://a.storyblok.com/f/87676/1554x1092/a3faad9a9f/frame-1171275397.png",
    "https://a.storyblok.com/f/87676/1554x1092/9a48193e4b/safe-secure-illus.png",
  ];

  // Handle scroll direction
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scroll down: Move to the next image
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else {
      // Scroll up: Move to the previous image
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="transform-experience-container">
      <h2 className="heading">Transform your customer experience</h2>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Experience ${index + 1}`}
            className={`image ${
              index === currentIndex
                ? "visible"
                : index < currentIndex
                ? "above"
                : "below"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TransformExperience;
