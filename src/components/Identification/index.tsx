import React, { memo } from 'react';

import Chip from '../Chip';
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
        <Chip onClick={() => openModal(true)}>New topic</Chip>
      </Description>
    </Container>
  );
};

export default memo(Identification);
