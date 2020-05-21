import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Option } from '../../../../components';
import { ApplicationState } from '../../../../store';
import { VoteState } from '../../../../store/ducks/vote/types';
import { Container } from './styles';

type IOptions = Omit<VoteState, 'error' | 'loading'>;

const Options: React.FC = () => {
  const { data, mostVoted } = useSelector<ApplicationState, IOptions>(
    state => state.vote,
  );

  const handleOptions = useCallback(() => {
    const options: number[] = [1, 2, 3, 5, 8, 13, 20, 40, 100];

    return (
      <>
        {options.map(option => (
          <Option
            key={option}
            value={option}
            picked={mostVoted.indexOf(option) > -1}
            showChoices={!!mostVoted.length}
            choices={data[option] || []}
          />
        ))}
      </>
    );
  }, [data, mostVoted]);

  return <Container>{handleOptions()}</Container>;
};

export default Options;
