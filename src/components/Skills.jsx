import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Bootstrap", level: "90%" },
  ];

  return (
    <section className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="text-center text-success mb-5">Skills</h2>

        {skills.map((skill, index) => (
          <div className="mb-4" key={index}>
            <h5>{skill.name}</h5>

            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: skill.level }}
              >
                {skill.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;