import React from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import profilePic from "../assets/profile.png";

const Header = ({ theme, toggleTheme }) => {

  const handleMailClick = (e) => {
    e.preventDefault();
    const mailtoLink = "mailto:debasishgayan27@gmail.com";
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=debasishgayan27@gmail.com";

    // Try opening mailto first
    const newWindow = window.open(mailtoLink, "_self");

    // If mailto fails (newWindow is null), fallback to Gmail web
    if (!newWindow) {
      window.open(gmailLink, "_blank");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Profile Section */}
        <div className="profile">
          <img src={profilePic} alt="Debasish Gayan" className="profile-image" />
          <div className="profile-text">
            <h1>Debasish Gayan</h1>
            <p>
              Full Stack Developer | AI & ML Enthusiast | UI/UX Designer | Android Developer | Innovator ✅
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

          {/* Mail icon: smart fallback */}
          <button onClick={handleMailClick} aria-label="Send Email">
            <Mail />
          </button>

          <button onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
