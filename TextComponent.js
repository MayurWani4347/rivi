import React, { useEffect } from "react";
import "../styles/TextComponent.css";

const TextComponent = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".list-text li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add 'visible' when the item enters the viewport
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the item is visible
    );

    // Observe each list item starting from the second one (index 1)
    listItems.forEach((item, index) => {
      if (index !== 0) observer.observe(item); // Skip the first item, it's visible by default
    });

    // Initially, make the first item visible
    listItems[0]?.classList.add("visible");

    return () => {
      listItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="text-container">
      <ul className="list-text">
        <li>Rivi is on a mission to build the future of travel with AI by:</li>
        <li>Deploying state-of-the-art AI agents for all travel-related tasks.</li>
        <li>Personalizing travel planning for each unique requirement.</li>
        <li>Ensuring safety, security, and privacy in every interaction.</li>
        <li>Capturing true business value, driving growth and efficiency.</li>
      </ul>
    </div>
  );
};

export default TextComponent;
