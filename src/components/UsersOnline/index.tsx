import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { User } from '..';
import { ApplicationState } from '../../store';
import { Account } from '../../store/ducks/account/types';
import { Container } from './styles';

interface IUsersOnline {
  data: Account[];
  userVoted: Account[];
}

const UsersOnline: React.FC = () => {
  const { userVoted, data } = useSelector<ApplicationState, IUsersOnline>(
    state => state.account,
  );

  const handleUserVoted = useCallback(
    (clientId: string): string | undefined => {
      const voted = !!userVoted.find(account => account.clientId === clientId);
      return voted ? '#279f33' : undefined;
    },
    [userVoted],
  );

  return (
    <Container>
      {!!data && (
        <>
          {data.map((user: Account) => (
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
