import React from "react";

const projects = [
  {
    title: "Restaurant Website",
    desc: "A responsive restaurant site with menu, online ordering, and reservation system. Built for local food businesses to increase online orders.",
    tech: ["React", "Bootstrap", "CSS"],
    link: "#",
  },
  {
    title: "Logistics Website",
    desc: "A logistics platform for tracking shipments, managing clients, and handling deliveries. Clean dashboard and mobile-friendly design.",
    tech: ["React", "JavaScript", "Bootstrap"],
    link: "#",
  },
  {
    title: "Tech Elevation - Atibiyan",
    desc: "A company website for Atibiyan focused on tech training and digital solutions. Built to showcase services and attract students.",
    tech: ["React", "Bootstrap", "HTML/CSS"],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-5">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-success mb-3">My Projects</h2>
          <p className="text-secondary">Here are some projects I've built recently</p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card bg-dark border-success h-100 project-card">
                <div className="card-body">
                  <h5 className="card-title text-white">{project.title}</h5>
                  <p className="card-text text-secondary">{project.desc}</p>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-success bg-opacity-25 text-success me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="btn btn-outline-success btn-sm">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;