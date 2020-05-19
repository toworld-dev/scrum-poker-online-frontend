import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Container, Body, Footer } from './styles';

import { Option, User, Header } from '../../components';
import NewTopic from './components/NewTopic';
import { ApplicationState } from '../../store';
import { Account } from '../../store/ducks/account/types';
import { Vote } from '../../store/ducks/vote/types';

const Room: React.FC = () => {
  const accounts = useSelector<ApplicationState, Account[]>(
    state => state.account.data,
  );
  const votes = useSelector<ApplicationState, Vote>(state => state.vote.data);

  const handleOptions = useCallback(() => {
    const options: number[] = [1, 2, 3, 5, 8, 13, 20, 40, 100];

    return (
      <>
        {options.map(option => (
          <Option
            key={option}
            value={option}
            picked={option === 1} // WIP
            choices={votes[option] || []}
          />
        ))}
      </>
    );
  }, [votes]);

  return (
    <Container>
      <Header />
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
      <NewTopic />
    </Container>
  );
};

export default Room;
