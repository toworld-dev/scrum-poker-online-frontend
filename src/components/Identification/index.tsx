import React, { memo } from 'react';

import { Container, Main, Description } from './styles';

interface IdentificationProps {
  roomName: string;
  topicDescription?: string;
  openModal: (show: boolean) => void;
}

const Identification: React.FC<IdentificationProps> = ({
  roomName,
  topicDescription,
  openModal,
}) => {
  return (
    <Container>
      <Main>
        <h1>Scrum Poker Online</h1>
        <h2>{roomName}</h2>
      </Main>
      <Description>
        {topicDescription && <h3>{topicDescription}</h3>}
        <button type="button" onClick={() => openModal(true)}>
          New topic
        </button>
      </Description>
    </Container>
  );
};

export default memo(Identification);
