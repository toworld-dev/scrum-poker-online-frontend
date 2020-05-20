import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { User } from '..';
import { ApplicationState } from '../../store';
import { Account } from '../../store/ducks/account/types';
import { Container } from './styles';

const UsersOnline: React.FC = () => {
  const accounts = useSelector<ApplicationState, Account[]>(
    state => state.account.data,
  );

  return (
    <Container>
      {!!accounts && (
        <>
          {accounts.map((user: Account) => (
            <User size="small" key={user.clientId} data={user} />
          ))}
        </>
      )}
    </Container>
  );
};

export default memo(UsersOnline);
