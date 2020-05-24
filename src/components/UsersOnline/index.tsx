import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { User } from '..';
import { ApplicationState } from '../../store';
import { Account } from '../../store/ducks/account/types';
import { Container } from './styles';
import { Vote } from '../../store/ducks/vote/types';

interface IUsersOnline {
  account: AccountState[];
  vote: VoteState;
}

const UsersOnline: React.FC = () => {
  const { account, vote } = useSelector<Omit<ApplicationState, 'modal' | 'auth', 'room'>, IUsersOnline>(
    state => state,
  );

  console.log('aqui');
  const handleUserVoted = useCallback(
    (clientId: string) => {
      Object.keys(votes).forEach((key: any) => {
        votes[key].forEach((vote: any) => {
          if (vote.clientId === clientId) {
            return '#000';
          }
        });
      });

      // eslint-disable-next-line no-useless-return
      return undefined;
    },
    [votes],
  );

  return (
    <Container>
      {!!accounts && (
        <>
          {accounts.map((user: Account) => (
            <User
              color={handleUserVoted(user.clientId)}
              size="small"
              key={user.clientId}
              data={user}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default memo(UsersOnline);
