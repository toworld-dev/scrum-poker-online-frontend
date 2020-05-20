import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Option } from '../../../../components';
import { ApplicationState } from '../../../../store';
import { Account } from '../../../../store/ducks/account/types';
import { Vote } from '../../../../store/ducks/vote/types';
import { Container } from './styles';

const Options: React.FC = () => {
  const accounts = useSelector<ApplicationState, Account[]>(
    state => state.account.data,
  );
  const votes = useSelector<ApplicationState, Vote>(state => state.vote.data);

  const handleOptions = useCallback(() => {
    const options: number[] = [1, 2, 3, 5, 8, 13, 20, 40, 100];

    let win: number | undefined;
    let winQty = 0;
    const userVotes = Object.keys(votes).reduce(
      (qtdVotes: number, vote: any) => {
        if (votes[vote].length > winQty) {
          win = vote;
          winQty = votes[vote].length;
        }
        return qtdVotes + votes[vote].length;
      },
      0,
    );

    return (
      <>
        {options.map(option => (
          <Option
            key={option}
            value={option}
            picked={!!(userVotes >= accounts.length && win === option)}
            choices={votes[option] || []}
          />
        ))}
      </>
    );
  }, [votes, accounts]);

  return <Container>{handleOptions()}</Container>;
};

export default Options;
