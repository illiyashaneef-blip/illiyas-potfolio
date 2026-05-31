import React from "react";

function About() {
  return (
    <section id="about" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            
            <h2 className="display-5 fw-bold text-success mb-4">About Me</h2>
            
            <p className="lead mb-4">
              I'm Haneef, a self-taught Frontend Developer and Arabic Language Tutor based in Nigeria. 
              I love turning complex problems into simple, beautiful, and responsive websites.
            </p>
            
            <p className="text-secondary mb-4">
              My journey started with a curiosity for how websites work. Today, I build modern web apps 
              using React, JavaScript, and Bootstrap. On the other side, I teach Arabic to beginners 
              who want to read, write, and speak with confidence. I believe learning should be practical 
              and engaging, whether it's code or a new language.
            </p>
            
            <p className="text-secondary">
              When I'm not coding or teaching, I work with clients like Atibiyan to build digital solutions 
              that help their businesses grow online. I'm always open to freelance projects and collaborations.
            </p>

            <div className="row mt-5">
              <div className="col-md-4 mb-3">
                <h5 className="text-success">2+</h5>
                <p className="text-secondary">Years Experience</p>
              </div>
              <div className="col-md-4 mb-3">
                <h5 className="text-success">10+</h5>
                <p className="text-secondary">Projects Completed</p>
              </div>
              <div className="col-md-4 mb-3">
                <h5 className="text-success">15+</h5>
                <p className="text-secondary">Arabic Students</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;