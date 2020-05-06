import React, { memo } from 'react';

import { Container } from './styles';

interface OptionProps {
  value: string;
  choices?: string[];
  picked?: boolean;
}

const Option: React.FC<OptionProps> = ({ value, picked = false }) => {
  return <Container picked={picked}>{value}</Container>;
};

export default memo(Option);
