


import React, { useEffect, useState } from 'react';
import "../styles/header.css";

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down"); 
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up"); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${scrollDirection === "up" ? "scrolled-up" : "scrolled-down"}`}>
      <div className="logo-container">
        <a href="https://rivi.co/assets/images/rivi.png">
          <img
            src="https://rivi.co/assets/images/rivi.png"
            alt="Logo"
            className="logo"
          />
        </a>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">LABS</a></li>
          <li><a href="#">PEOPLE</a></li>
          <li><a href="#">Contact Sales</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
