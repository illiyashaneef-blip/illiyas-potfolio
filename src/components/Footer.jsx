import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-center py-5 border-top border-success border-opacity-25">
      <div className="container">
        
        <div className="mb-3">
          <a href="https://github.com" className="text-secondary mx-3 text-decoration-none fs-5">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" className="text-secondary mx-3 text-decoration-none fs-5">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:your.email@example.com" className="text-secondary mx-3 text-decoration-none fs-5">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="https://twitter.com" className="text-secondary mx-3 text-decoration-none fs-5">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>

        <p className="text-secondary mb-1">Built with React + Bootstrap</p>
        <p className="text-secondary mb-0">
          © {new Date().getFullYear()} Haneef Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;