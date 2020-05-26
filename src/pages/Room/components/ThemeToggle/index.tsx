import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from 'react-switch';

import { Container } from './styles';
import { ApplicationState } from '../../../../store';
import { set } from '../../../../store/ducks/theme/actions';
import { ThemeState } from '../../../../store/ducks/theme/types';

const ThemeToggle: React.FC = () => {
  const theme = useSelector<ApplicationState, ThemeState>(state => state.theme);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(set(theme.title === 'light' ? 'dark' : 'light'));
  };

  return (
    <Container>
      <Switch
        onChange={handleChange}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={theme.colors.primary}
        onColor={theme.colors.secundary}
        onHandleColor={theme.colors.text}
        offHandleColor={theme.colors.text}
      />
    </Container>
  );
};

export default memo(ThemeToggle);
