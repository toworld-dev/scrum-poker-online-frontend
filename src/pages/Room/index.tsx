import React, { useState } from 'react';

import { Container, Header, Body, Footer } from './styles';

import Option from '../../components/Option';
import Identification from '../../components/Identification';
import User from '../../components/User';
import Modal from '../../components/Modal';

const Room: React.FC = () => {
  const userList: string[] = ['Marcos', 'Jhonatan'];
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Container>
      <Header>
        <Identification openModal={setShowModal} />
        <User data="henrique" />
      </Header>
      <Body>
        <Option value="1" />
        <Option value="2" />
        <Option value="3" chose={['Jhonatan']} />
        <Option value="5" />
        <Option value="8" chosen chose={['Henrique', 'Marcos']} />
        <Option value="13" />
        <Option value="20" />
        <Option value="40" />
        <Option value="100" />
      </Body>
      <Footer>
        {userList.map((user: string) => (
          <User size="small" key={user} data={user} />
        ))}
      </Footer>
      <Modal display={showModal}>Teste</Modal>
    </Container>
  );
};

export default Room;
