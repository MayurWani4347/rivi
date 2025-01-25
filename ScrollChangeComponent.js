import React, { useState, useEffect } from "react";
import "../styles/scrollChange.css"; // Ensure this file is created and linked properly

const ScrollChangeComponent = () => {
  // State to track the current content
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of content (including the third item)
  const content = [
    {
      text: "Rivi works with your data",
      image: "https://angelmatch.io/_next/image?url=https://angelmatch-store.sfo3.digitaloceanspaces.com/pitch-decks/logo/290.png&w=256&q=75",
    },
    {
      text: "Rivi works with your cloud",
      image: "https://a.storyblok.com/f/87676/960x954/2584a84114/your-cloud-graphic.png",
    },
    {
      text: "Rivi works with any model",
      image: "https://a.storyblok.com/f/87676/282x444/56e64cdca3/any-model.svg",
    },
  ];

  // Function to handle scroll direction for text and image change
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down, show the next content
      setCurrentIndex((prevIndex) =>
        prevIndex < content.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else {
      // Scrolling up, show the previous content
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-change-container">
      <div
        className={`text-image-section ${
          currentIndex === 2 ? "third-content" : ""
        }`}
      >
        <div className="left-text">
          <h2>{content[currentIndex].text}</h2>
        </div>
        <div className="right-image">
          <img
            src={content[currentIndex].image}
            alt="Dynamic Content"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollChangeComponent;
