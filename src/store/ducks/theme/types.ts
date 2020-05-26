import { DefaultTheme } from 'styled-components';

/**
 * Action types
 */
export enum ThemeTypes {
  SET = '@theme/SET',
}

/**
 * State type
 */
export type ThemeState = DefaultTheme;
