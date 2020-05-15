import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Account } from '../../store/ducks/account/types';
import Identification from '../Identification';
import User from '../User';
import { Container } from './styles';
import { ApplicationState } from '../../store';
import { Auth } from '../../store/ducks/auth/types';

const Header: React.FC = () => {
  const auth = useSelector<ApplicationState, Auth>(state => state.auth.data);

  return (
    <Container>
      <Identification />
      <User data={auth as Account} />
    </Container>
  );
};

export default memo(Header);
