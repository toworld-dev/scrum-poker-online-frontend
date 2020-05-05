import React from 'react';

import { Container } from './styles';

interface OptionProps {
  value: string;
}

const Option: React.FC<OptionProps> = ({ value }) => {
  return <Container>{value}</Container>;
};

export default Option;
