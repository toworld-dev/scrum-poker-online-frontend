import React, { memo } from 'react';

import { useDispatch } from 'react-redux';
import { Account } from '../../store/ducks/account/types';
import { Container, Position } from './styles';
import User from '../User';
import { createVote } from '../../store/ducks/vote/actions';

interface OptionProps {
  value: number;
  choices?: Account[];
  picked?: boolean;
}

const Option: React.FC<OptionProps> = ({
  value,
  choices = [],
  picked = false,
}) => {
  const dispatch = useDispatch();

  const handleChoises = (): JSX.Element => {
    return (
      <>
        {choices.map((choice: Account, index) => {
          return (
            <Position key={choice.clientId} index={index}>
              <User size="small" data={choice} />
            </Position>
          );
        })}
      </>
    );
  };

  return (
    <Container
      picked={picked}
      type="button"
      onClick={() => {
        dispatch(createVote(value));
      }}
    >
      {!!choices && handleChoises()}
      {value}
    </Container>
  );
};

export default memo(Option);
