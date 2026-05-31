import React from "react";
import profile from "../assets/ahasant.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="bg-dark text-white position-relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Subtle background gradient */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(25, 135, 84, 0.15) 0%, transparent 50%)"
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100 py-5">

          {/* Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="badge bg-success bg-opacity-25 text-success px-3 py-2 mb-3">
              Available for Projects
            </span>
            
            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span className="text-success">Haneef</span>
            </h1>

            <h3 className="mb-3 fw-light">
              Frontend Developer & Quran Tutor
            </h3>

            <p className="lead text-secondary mb-4">
              I build modern, responsive websites with React & Bootstrap. 
              I also teach Arabic to beginners and help students speak confidently.
            </p>

            {/* Skills badges */}
            <div className="mb-4">
              <span className="badge bg-secondary me-2 mb-2">React</span>
              <span className="badge bg-secondary me-2 mb-2">JavaScript</span>
              <span className="badge bg-secondary me-2 mb-2">Bootstrap</span>
              <span className="badge bg-secondary me-2 mb-2">Arabic</span>
            </div>

            <div className="d-flex gap-3 flex-wrap">
              <a href="#projects" className="btn btn-success btn-lg px-4">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                Hire Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <div className="position-relative d-inline-block">
              <div 
                className="position-absolute rounded-circle"
                style={{
                  width: "370px",
                  height: "370px",
                  background: "linear-gradient(135deg, #198754, #20c997)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  filter: "blur(20px)",
                  opacity: 0.3
                }}
              ></div>
              
              <img
                src={profile}
                alt="Haneef"
                className="rounded-circle border-success border-3 position-relative"
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                  objectPosition: "center top"
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;