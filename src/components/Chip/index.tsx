import React from 'react';

import { Container } from './styles';

interface ChipProps {
  onClick: () => void;
}

const Chip: React.FC<ChipProps> = ({ onClick, children, ...rest }) => {
  return (
    <Container onClick={() => onClick()} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Chip;
