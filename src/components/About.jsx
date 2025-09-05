import React from 'react';

const AboutSection = () => {
  // Aerospace technologies
  const aerospaceTech = [
    { name: 'Propulsion', icon: 'fas fa-rocket', color: 'linear-gradient(135deg, #4A90E2, #2E5FAA)' },
    { name: 'CFD', icon: 'fas fa-wind', color: 'linear-gradient(135deg, #7B68EE, #5B4ACD)' },
    { name: 'Aerodynamics', icon: 'fas fa-plane', color: 'linear-gradient(135deg, #20B2AA, #15857E)' },
    { name: 'Orbital Mechanics', icon: 'fas fa-satellite', color: 'linear-gradient(135deg, #DB7093, #B04D6E)' },
    { name: 'ANSYS Fluent', icon: 'fas fa-cogs', color: 'linear-gradient(135deg, #FF8C00, #D17300)' },
    { name: 'CATIA V5', icon: 'fas fa-cube', color: 'linear-gradient(135deg, #9370DB, #7459B3)' },
  ];

  // Software technologies
  const softwareTech = [
    { name: 'Python', icon: 'fab fa-python', color: 'linear-gradient(135deg, #FFD700, #D4AF37)' },
    { name: 'React', icon: 'fab fa-react', color: 'linear-gradient(135deg, #61DAFB, #39AED9)' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'linear-gradient(135deg, #F7DF1E, #D6BA09)' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'linear-gradient(135deg, #E34F26, #C03A20)' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'linear-gradient(135deg, #1572B6, #0E5A9D)' },
    { name: 'SQL', icon: 'fas fa-database', color: 'linear-gradient(135deg, #4479A1, #2C5E85)' },
  ];

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="./profile-photo.png" 
            alt="Vignesh Kumar R" 
          />
        </div>
        
        <div className="about-content">
          <h2>Vignesh Kumar R</h2>
          <p>Aerospace Engineer & Full Stack Developer</p>
          <p>I'm a passionate Aerospace Engineer with expertise in computational fluid dynamics, propulsion systems, and full stack development. I enjoy solving complex problems at the intersection of aerospace technology and software development.</p>
          
          <p>I worked as a Junior Aerospace Engineer at Spacetaxi Private Ltd., where I develop and optimize regenerative cooling designs for rocket engines. I have experience with Hindustan Aeronautics Ltd. and a strong background in both aerospace engineering and software development.</p>
        </div>
      </div>
      
      <div className="tech-stack">
        <h3>Technical Expertise</h3>
        
        <div className="tech-category">
          <h4>Aerospace Engineering</h4>
          <div className="tech-icons">
            {aerospaceTech.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-sphere" style={{ background: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="tech-category">
          <h4>Software Development</h4>
          <div className="tech-icons">
            {softwareTech.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-sphere" style={{ background: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;