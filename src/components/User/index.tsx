import React from 'react';

import { Container } from './styles';

interface UserProps {
  data: string;
  size?: 'small' | 'medium' | 'large';
}

const User: React.FC<UserProps> = ({ data, size = 'medium' }) => {
  return <Container size={size}>{data[0]}</Container>;
};

export default User;
