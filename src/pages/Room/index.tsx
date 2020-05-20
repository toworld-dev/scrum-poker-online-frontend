import React from 'react';

import { Container } from './styles';
import { Header, UsersOnline } from '../../components';
import { NewTopic, Options } from './components';

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
