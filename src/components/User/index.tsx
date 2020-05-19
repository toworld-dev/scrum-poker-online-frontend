import React from 'react';
import { Account } from '../../store/ducks/account/types';

import { Container } from './styles';

interface UserProps {
  data: Account;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const User: React.FC<UserProps> = ({
  data,
  size = 'medium',
  onClick = () => {},
}) => {
  return (
    <Container onClick={() => onClick()} type="button" size={size}>
      {data.username.substring(0, 1)}
    </Container>
  );
};

export default User;
