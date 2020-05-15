import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Room } from '../../store/ducks/room/types';
import Chip from '../Chip';
import { Container, Main, Description } from './styles';
import { ApplicationState } from '../../store';
import { set } from '../../store/ducks/modal/actions';

const Identification: React.FC = () => {
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
        <Chip onClick={() => dispatch(set(true))}>New topic</Chip>
      </Description>
    </Container>
  );
};

export default memo(Identification);
