import React from "react";
import "../styles/feature.css"; // Ensure to link your CSS file

const FeaturedOnComponent = () => {
  const imageUrls = [
    "https://a.storyblok.com/f/87676/454x69/06d33d44f7/frame-1171275378.png",
    "https://a.storyblok.com/f/87676/368x69/0a9d53cd4f/business-standard-logo-1.png",
    "https://a.storyblok.com/f/87676/482x69/0e82f11f50/the-financial-express-1.png",
    "https://a.storyblok.com/f/87676/184x70/6ea73d33a7/frame-1171275392-2.png ",
    "https://a.storyblok.com/f/87676/452x69/b0cc32cbac/frame-1171275380.png",
    "https://a.storyblok.com/f/87676/217x69/5455ae24b8/frame-1171275379.png",
  ];

  return (
    <div className="featured-container">
      <h2>Featured on</h2>
      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <div key={index} className="image-wrapper">
            <img src={url} alt={`Featured ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOnComponent;
