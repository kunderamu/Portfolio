import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  // Add your project details here
];

function Projects() {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;