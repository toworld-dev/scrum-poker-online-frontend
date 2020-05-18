import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Main, Description } from './styles';
import { Room } from '../../store/ducks/room/types';
import Chip from '../Chip';
import { ApplicationState } from '../../store';
import { set } from '../../store/ducks/modal/actions';
import { Auth } from '../../store/ducks/auth/types';

const Identification: React.FC = () => {
  const auth = useSelector<ApplicationState, Auth>(state => state.auth.data);
  const room = useSelector<ApplicationState, Room>(state => state.room.data);
  const description = room.topic?.description;
  const dispatch = useDispatch();

  return (
    <Container>
      <Main>
        <h1>Scrum Poker Online</h1>
        <h2>{room.name}</h2>
      </Main>
      <Description>
        {!!description && <h3>{description}</h3>}
        {auth.type === 'admin' && (
          <Chip onClick={() => dispatch(set(true))}>New topic</Chip>
        )}
      </Description>
    </Container>
  );
};

export default memo(Identification);
