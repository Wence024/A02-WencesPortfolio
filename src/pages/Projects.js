// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsContainer = styled(motion.div)`
  padding: 2rem;
  background: #ffffff;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const Projects = () => {
  return (
    <ProjectsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Title>My Projects</Title>
      <ProjectList>
        <ProjectItem>
          <strong>Portfolio Website</strong> - A personal portfolio website to showcase my skills and projects.
        </ProjectItem>
        <ProjectItem>
          <strong>Task Manager App</strong> - A task management application to help users organize their daily tasks.
        </ProjectItem>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
