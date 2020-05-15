import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Container, Header, Body, Footer } from './styles';

import Option from '../../components/Option';
import Identification from '../../components/Identification';
import User from '../../components/User';
import NewTopic from './components/NewTopic';
import { ApplicationState } from '../../store';
import { Account } from '../../store/ducks/account/types';

const socket: any = {
  name: 'Nome da sala',
  topic: {
    description: 'Endpoint de criação de usuário',
  },
  vote: {
    1: [
      {
        clientId: '123',
        username: 'henrique',
      },
      {
        clientId: '321',
        username: 'Marcos',
      },
    ],
    5: [
      {
        clientId: '456',
        username: 'Jhonatan',
      },
    ],
  },
  picked: 1,
  accounts: ['henrique', 'Marcos', 'Jhonatan'],
};

const Room: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const accounts = useSelector<ApplicationState, Account[]>(
    state => state.account.data,
  );

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
        <User data={{ clientId: '123', username: 'Henrique' } as Account} />
      </Header>
      <Body>{handleOptions()}</Body>
      <Footer>
        {!!accounts && (
          <>
            {accounts.map((user: Account) => (
              <User size="small" key={user.clientId} data={user} />
            ))}
          </>
        )}
      </Footer>
      <NewTopic visible={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
};

export default Room;
