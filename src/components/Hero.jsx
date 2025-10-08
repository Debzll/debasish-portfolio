import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile.png"; // Import from src/assets

const quotes = [
  "I love building innovative web applications using React, Node.js, and modern technologies to create seamless user experiences.",
  "Exploring AI and machine learning helps me enhance projects with smart solutions and predictive features.",
  "UI/UX design fascinates me — I aim to craft visually appealing and user-friendly interfaces for every project.",
  "Mobile app development allows me to connect users to technology in intuitive ways on Android platforms.",
  "Continuous learning is my passion — from coding challenges to experimenting with new frameworks, I keep evolving as a developer."
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const fullText = "Hi, I'm Debasish";
    let index = 0;
    let forward = true;

    const type = () => {
      if (forward) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          forward = false;
          setTimeout(type, 1500);
          return;
        }
      } else {
        setDisplayedText(fullText.slice(0, index));
        index--;
        if (index === 0) forward = true;
      }
      setTimeout(type, 150);
    };

    type();
  }, []);

  // Quote fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuoteIndex(prev => (prev + 1) % quotes.length);
        setFade(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">
          {displayedText}
          <span className="cursor"></span>
        </h1>
        <p className={`quote ${fade ? "fade-in" : "fade-out"}`}>
          {quotes[quoteIndex]}
        </p>
      </div>

      <div className="hero-image">
        <div className="profile-card">
          <img src={profilePic} alt="Debasish" className="hero-profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
