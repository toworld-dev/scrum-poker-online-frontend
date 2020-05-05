import React from 'react';

import { Container, Main, Description } from './styles';

interface IdentificationProps {
  openModal: (show: boolean) => void;
}

const Identification: React.FC<IdentificationProps> = ({ openModal }) => {
  return (
    <Container>
      <Main>
        <h1>Scrum Poker Online</h1>
        <h2>Sala toWorld.dev</h2>
      </Main>
      <Description>
        <h3>Adicionar endpoint de alteração de programa</h3>
        <button type="button" onClick={() => openModal(true)}>
          Novo tópico
        </button>
      </Description>
    </Container>
  );
};

export default Identification;
