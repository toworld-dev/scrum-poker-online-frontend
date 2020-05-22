import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Container, Head, Body, Buttons } from './styles';
import { Room } from '../../../../store/ducks/room/types';
import Chip from '../../../../components/Chip';
import { ApplicationState } from '../../../../store';
import { showResult } from '../../../../store/ducks/vote/actions';
import { logout } from '../../../../store/ducks/auth/actions';
import { set } from '../../../../store/ducks/modal/actions';
import { Auth } from '../../../../store/ducks/auth/types';

const Header: React.FC = () => {
  const auth = useSelector<ApplicationState, Auth>(state => state.auth.data);
  const room = useSelector<ApplicationState, Room>(state => state.room.data);
  const description = room.topic?.description;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = useCallback(() => {
    history.push('/');
    dispatch(logout());
  }, [history, dispatch]);

  return (
    <Container>
      <Head>
        <h1>Scrum Poker</h1>
        <Chip onClick={handleLogout}>Logout</Chip>
      </Head>
      <Body>
        {!!description && <h3>{description}</h3>}
        {auth.type === 'admin' && (
          <Buttons>
            <Chip onClick={() => dispatch(set(true))}>New topic</Chip>
            <Chip onClick={() => dispatch(showResult())}>Show result</Chip>
          </Buttons>
        )}
      </Body>
    </Container>
  );
};

export default memo(Header);
