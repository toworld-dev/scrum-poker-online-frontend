import React, { useState, useCallback } from 'react';

import { Container, Header, Body, Footer } from './styles';

import Option from '../../components/Option';
import Identification from '../../components/Identification';
import User from '../../components/User';
import NewTopic from './components/NewTopic';

const socket: any = {
  name: 'Nome da sala',
  topic: {
    description: 'Endpoint de criação de usuário',
  },
  vote: {
    1: ['henrique', 'Marcos'],
    5: ['Jhonatan'],
  },
  picked: 1,
  accounts: ['henrique', 'Marcos', 'Jhonatan'],
};

const Room: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  // const { user } = useAuth();

  const handleOptions = useCallback(() => {
    const options: number[] = [1, 2, 3, 5, 8, 13, 20, 40, 100];

    return (
      <>
        {options.map(option => (
          <Option
            key={option}
            value={option}
            picked={socket.picked === option}
            choices={socket.vote[option] || []}
          />
        ))}
      </>
    );
  }, []);

  return (
    <Container>
      <Header>
        <Identification
          topicDescription={socket.topic.description}
          roomName={socket.name}
          openModal={setShowModal}
        />
        <User data="henrique" />
      </Header>
      <Body>{handleOptions()}</Body>
      <Footer>
        {socket.accounts.map((user: string) => (
          <User size="small" key={user} data={user} />
        ))}
      </Footer>
      <NewTopic visible={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
};

export default Room;
