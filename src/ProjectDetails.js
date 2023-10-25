import React, { useState } from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ projects }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveProjectIndex(activeProjectIndex === index ? null : index);
  };

  return (
    <div className="project-details-container">
      <div className="project-info">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="project-title" onClick={() => toggleDescription(index)}>
              {project.title}
            </h3>
            {activeProjectIndex === index && <p className="description">{project.description}</p>}
          </div>
        ))}
      </div>
      <div className="project-image-container">
        <img
          src="https://n2new-admin.north2.work/uploads/test_2_efe2ea3f48.jpg"
          alt="Shared Project"
          className="project-image"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
