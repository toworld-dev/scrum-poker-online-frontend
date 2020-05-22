import React from 'react';

import { Container } from './styles';
import { UsersOnline } from '../../components';
import { NewTopic, Options, Header } from './components';

const Room: React.FC = () => {
  return (
    <Container>
      <Header />
      <Options />
      <UsersOnline />
      <NewTopic />
    </Container>
  );
};

export default Room;
