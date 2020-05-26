import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { ThemeState } from '../../store/ducks/theme/types';

const Theme: React.FC = ({ children }) => {
  const theme = useSelector<ApplicationState, ThemeState>(state => state.theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
