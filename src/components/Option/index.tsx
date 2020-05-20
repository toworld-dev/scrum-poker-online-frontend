/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Account } from '../../store/ducks/account/types';
import { Container, Position } from './styles';
import User from '../User';
import { createVote } from '../../store/ducks/vote/actions';
import { ApplicationState } from '../../store';
import { Auth } from '../../store/ducks/auth/types';

interface OptionProps {
  value: number;
  choices?: Account[];
  picked?: boolean;
  showChoices?: boolean;
}

const Option: React.FC<OptionProps> = ({
  value,
  choices = [],
  picked = false,
  showChoices = false,
}) => {
  const { clientId } = useSelector<ApplicationState, Pick<Auth, 'clientId'>>(
    state => state.auth.data,
  );
  const dispatch = useDispatch();

  const handleChoises = (): JSX.Element => {
    return (
      <>
        {choices.map((choice: Account, index) => {
          if (showChoices || choice.clientId === clientId) {
            return (
              <Position key={choice.clientId} index={showChoices ? index : 0}>
                <User size="small" data={choice} />
              </Position>
            );
          }
        })}
      </>
    );
  };

  return (
    <Container
      picked={picked}
      type="button"
      onClick={() => {
        if (!showChoices) {
          dispatch(createVote(value));
        }
      }}
    >
      {!!choices && handleChoises()}
      {value}
    </Container>
  );
};

export default memo(Option);
