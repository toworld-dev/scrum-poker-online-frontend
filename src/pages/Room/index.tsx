import React, { useState, useCallback } from 'react';

import { Container, Header, Body, Footer } from './styles';

import Option from '../../components/Option';
import Identification from '../../components/Identification';
import User from '../../components/User';
import Modal from '../../components/Modal';

const socket: any = {
  name: 'Nome da sala',
  topic: {
    description: 'Descrição',
  },
  vote: {
    '1': ['henrique', 'Marcos'],
    '5': ['henrique', 'Marcos'],
  },
  accounts: [
    {
      name: 'Henrique',
    },
  ],
};

const Room: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const userList: string[] = ['Marcos', 'Jhonatan']; // teste

  const handleOptions = useCallback(() => {
    const options: string[] = [
      '1',
      '2',
      '3',
      '5',
      '8',
      '13',
      '20',
      '40',
      '100',
    ];

    return (
      <>
        {options.map(option => (
          <Option
            key={option}
            value={option}
            picked={false}
            choices={socket.vote[option] || []}
          />
        ))}
      </>
    );
  }, []);

  return (
    <Container>
      <Header>
        <Identification roomName="toWorld.dev" openModal={setShowModal} />
        <User data="henrique" />
      </Header>
      <Body>{handleOptions()}</Body>
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
