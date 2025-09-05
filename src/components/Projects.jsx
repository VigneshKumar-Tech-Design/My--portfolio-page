import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "My Portfolio Website – Interactive 3D Personal Webpage",
      date: "August 2025",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Three.js", "MySQL", "Node.js"],
      details: [
        "Developed a responsive portfolio website using React and the Web Trinity (HTML, CSS, JavaScript).",
        "Integrated Three.js for interactive 3D models and visual effects to enhance user engagement.",
        "Implemented a dynamic contact form with MySQL for storing submissions and Node.js backend for server-side handling.",
        "Optimized design with reusable React components and smooth UI/UX for desktop and mobile devices."
      ],
      link: "https://github.com/your-repo"
    },
    {
      title: "LLM-Powered Resume Analysis Platform with Ollama 3",
      date: "June 2025",
      technologies: ["HTML", "CSS", "JavaScript", "Python (Flask)", "Ollama Llama 3"],
      details: [
        "Developed a web application for role-specific resume analysis, with 15–30s average response time.",
        "Integrated Ollama 3 for parsing, keyword extraction, and job-role matching, increasing accuracy by 18% over baseline.",
        "Implemented AI-driven feedback delivering personalized improvements for 95% of processed resumes."
      ],
      link: "https://github.com/your-repo"
    },
    {
      title: "Application of Machine Learning in Computational Fluid Dynamics",
      date: "May 2024",
      technologies: ["MATLAB", "ANSYS Fluent", "GAMBIT", "CATIA V5", "Python (scikit-learn, pandas, Streamlit)", "Git"],
      details: [
        "Developed a machine learning model to optimize an Expansion-Deflection (ED) nozzle for improved performance using MATLAB (Regression Learner).",
        "Processed and analyzed 360 CFD simulation data points; selected best-performing parameters using correlation chart and ML model with R² = 0.96 for parametric optimization.",
        "Migrated to Python-based regression and optimization workflows, improving thrust coefficient by 6.7% under supersonic conditions.",
        "Reduced computational design cycle time by 30% using automated, data-driven workflows deployed via a custom Streamlit GUI."
      ],
      link: "https://github.com/your-repo"
    },
    {
      title: "AirSimulator – Real-Time Autonomous Drone Simulation",
      date: "Dec 2023",
      technologies: ["AirSim", "Unreal Engine", "PX4", "Visual Studio"],
      details: [
        "Designed and implemented a quadrotor flight simulation system using Microsoft’s open-source AirSim platform integrated with Unreal Engine to model realistic environmental physics.",
        "Developed and configured autonomous flight environments, integrating drone control via PX4 and ROS APIs to simulate sensor-based navigation and real-time dynamic response.",
        "Conducted in-depth studies on aerodynamics, gravity variation, magnetic field simulation, drag modeling, and quaternion-based orientation update for accurate physics-based behavior.",
        "Built a modular simulation environment with detailed settings for vehicle parameters, sensor interfacing, and environmental elements like pressure, temperature, and magnetic variation."
      ],
      link: "https://github.com/your-repo"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, i) => (
          <div key={i} className={`custom-card ${i % 2 === 0 ? "front-card" : "back-card"}`}>
            <div className="card-header">
              <h5 className="card-title">{project.title}</h5>
              <div className="card-meta">
                <p className="card-date">{project.date}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon-btn"
                    aria-label="View on GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>
            <div className="tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
            </div>
            <ul className="details">
              {project.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;