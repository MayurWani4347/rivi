// import React from 'react';
// import "../styles/Hero.css";

// const Hero = () => {
//   return (
//     <section className="hero">
      
//       <div className="s">
//       <button className="top-button">
//         <p className="trusted-text">Trusted by Fortune 500 companies</p>
//       </button></div>

      
//       <div className="hero-text"><div className='A'>
//         <h1>Meet Rivi - The leading</h1>
//         <h1>travel AI platform</h1></div>
//         <p>
//           Rivi provides AI tools to OTAs, airlines, hotels, and tourism
//         </p>
//         <p>
//           boards empowering them to build impactful solutions and  </p><p>thrive in the AI era.</p>
       
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollTop / windowHeight, 1); // Scroll progress clamped between 0 and 1
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          opacity: scrollProgress < 0.5 ? 1 - scrollProgress * 2 : 0, // Fade out text faster and completely hide after 50% scroll
        }}
      >

              <div className="s">
      <button className="top-button">
         <p className="trusted-text">Trusted by Fortune 500 companies</p>
</button></div>
        <div className="hero-text">
          <div className="A">
          <h1>Meet Rivi - The leading</h1>
          <h1>travel AI platform</h1></div>
          <p>Rivi provides AI tools to OTAs, airlines, hotels, and tourism</p>
          <p>boards empowering them to build impactful solutions and thrive in the AI era.</p>
        </div>
      </section>

      {/* Image Section */}
      <div
        className="hero-image-container"
        style={{
          transform: `scale(${2 - scrollProgress})`, // Zoom out the image
          opacity: scrollProgress, // Fade in the image as text fades out
        }}
      >
        <img src={require("../components/download (2).jpg")} alt="Hero" />
      </div>

      {/* Below Content */}
      {/* <section className="below-content">
        <h2>Discover more about Rivi</h2>
        <p>
          Rivi's AI tools are designed to revolutionize the travel and tourism
          industry by providing innovative solutions.
        </p>
      </section> */}
    </div>
  );
};

export default Hero;
