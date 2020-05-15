import React from 'react';
import { Account } from '../../store/ducks/account/types';

import { Container } from './styles';

interface UserProps {
  data: Account;
  size?: 'small' | 'medium' | 'large';
}

const User: React.FC<UserProps> = ({ data, size = 'medium' }) => {
  return <Container size={size}>{data.username.substring(0, 1)}</Container>;
};

export default User;
