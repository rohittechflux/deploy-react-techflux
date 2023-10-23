import React, { useState } from 'react';

const ProjectDetails = ({ title, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="project-details">
      <h3 className="project-title" onClick={toggleDescription}>
        {title}
      </h3>
      {isDescriptionVisible && <p className="description">{description}</p>}
    </div>
  );
};

export default ProjectDetails;
