import React from 'react';

import { Container, Footer } from './styles';
import { UsersOnline } from '../../components';
import { NewTopic, Options, Header, ThemeToggle } from './components';

const Room: React.FC = () => {
  return (
    <Container>
      <Header />
      <Options />
      <Footer>
        <UsersOnline />
        <ThemeToggle />
      </Footer>
      <NewTopic />
    </Container>
  );
};

export default Room;
