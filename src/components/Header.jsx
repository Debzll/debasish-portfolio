import React from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

const Header = ({ theme, toggleTheme }) => (
  <header className="header">
    <div className="header-container">
      <div className="profile">
        <img src="/profile.png" alt="DG" />
        <div className="profile-text">
          <h1>Debasish Gayan</h1>
          <p>
            Full Stack Developer | AI & ML Enthusiast | UI/UX Designer | Android
            Developer|Innovator ✅
          </p>
        </div>
      </div>
      <div className="links">
        <a href="https://github.com/debasish-gayan">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/debasish-gayan-30365a281/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=debasishgayan27@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>

        <button onClick={toggleTheme}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  </header>
);

export default Header;
