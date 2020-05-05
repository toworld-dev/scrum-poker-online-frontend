import React from 'react';

import { Container } from './styles';

interface OptionProps {
  value: string;
  chose?: string[];
  chosen?: boolean;
}

const Option: React.FC<OptionProps> = ({ value, chosen = false }) => {
  return <Container chosen={chosen}>{value}</Container>;
};

export default Option;
