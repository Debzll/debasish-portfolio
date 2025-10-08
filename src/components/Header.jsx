import React from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import profilePic from "../assets/profile.png"; // Import from src/assets

const Header = ({ theme, toggleTheme }) => (
  <header className="header">
    <div className="header-container">
      {/* Profile Section */}
      <div className="profile">
        <img src={profilePic} alt="Debasish Gayan" className="profile-image" />
        <div className="profile-text">
          <h1>Debasish Gayan</h1>
          <p>
            Full Stack Developer | AI & ML Enthusiast | UI/UX Designer | Android
            Developer | Innovator ✅
          </p>
        </div>
      </div>

      {/* Social Links & Theme Toggle */}
      <div className="links">
        <a href="https://github.com/Debzll" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/debasish-gayan-30365a281/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        {/* Open Gmail compose in new tab */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=debasishgayan27@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
        <button onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  </header>
);

export default Header;
