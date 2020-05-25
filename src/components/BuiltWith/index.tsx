import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';

import { Container } from './styles';

const BuiltWith: React.FC = () => {
  return (
    <Container>
      <a
        href="https://github.com/toworld-dev/scrum-poker-online-frontend"
        target="_blank"
        rel="noreferrer"
      >
        <FaReact color="#5ed4f4" size={20} />
      </a>
      <a
        href="https://github.com/toworld-dev/scrum-poker-online"
        target="_blank"
        rel="noreferrer"
      >
        <FaNodeJs color="#8cc03e" size={20} />
      </a>
    </Container>
  );
};

export default BuiltWith;
