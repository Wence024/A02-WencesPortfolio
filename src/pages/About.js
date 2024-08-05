// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled(motion.div)`
  padding: 2rem;
  background: #f0f4f8;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <Title>About Me</Title>
      <Paragraph>
        Hi, I'm John Doe, a passionate web developer with a strong background in computer science. I graduated from XYZ University with a degree in Information Technology. Over the past few years, I have honed my skills in front-end development, working on various projects that have allowed me to grow and innovate in the field.
      </Paragraph>
      <Paragraph>
        My journey began with a fascination for how the web works, leading me to pursue a career in web development. I have since worked on numerous projects, from small personal websites to large-scale applications, always striving to improve and learn new technologies.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
