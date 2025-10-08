import React from "react";

const LetMe = () => {

  const handleContactClick = (e) => {
    e.preventDefault();
    const mailtoLink = "mailto:debasishgayan27@gmail.com";
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=debasishgayan27@gmail.com";

    // Try opening mailto first
    const newWindow = window.open(mailtoLink, "_self");

    // If mailto fails, fallback to Gmail web
    if (!newWindow) {
      window.open(gmailLink, "_blank");
    }
  };

  return (
    <section className="let-me-cta">
      <div className="let-me-content">
        <h3>Let's build something amazing together!</h3>
        <p>
          I’m passionate about creating innovative and responsive web applications.
          Whether it’s frontend, backend, UI/UX, or Android development, I love
          bringing ideas to life.
        </p>
        <button
          onClick={handleContactClick}
          className="let-me-btn"
          aria-label="Contact Me"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default LetMe;
