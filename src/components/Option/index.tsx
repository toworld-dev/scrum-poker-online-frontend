import React, { memo } from 'react';

import { Container, Position } from './styles';
import User from '../User';

interface OptionProps {
  value: number;
  choices?: string[];
  picked?: boolean;
}

const Option: React.FC<OptionProps> = ({
  value,
  choices = [],
  picked = false,
}) => {
  const handleChoises = (): JSX.Element => {
    return (
      <>
        {choices.map((choice, index) => {
          return (
            <Position key={choice} index={index}>
              <User size="small" data={choice} />
            </Position>
          );
        })}
      </>
    );
  };

  return (
    <Container picked={picked}>
      {!!choices && handleChoises()}
      {value}
    </Container>
  );
};

export default memo(Option);
