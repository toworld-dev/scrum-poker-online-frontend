import React from 'react';

import { Container, Header, Body, Footer } from './styles';

import Option from '../../components/Option';
import Identification from '../../components/Identification';
import User from '../../components/User';

const Room: React.FC = () => {
  return (
    <Container>
      <Header>
        <Identification />
        <User />
      </Header>
      <Body>
        <Option value="1" />
        <Option value="2" />
        <Option value="3" />
        <Option value="5" />
        <Option value="8" />
        <Option value="13" />
        <Option value="20" />
        <Option value="40" />
        <Option value="100" />
      </Body>
      <Footer />
    </Container>
  );
};

export default Room;
