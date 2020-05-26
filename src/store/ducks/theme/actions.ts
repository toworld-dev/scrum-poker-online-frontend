import { action } from 'typesafe-actions';
import { ThemeTypes } from './types';

export const set = (theme: string) => action(ThemeTypes.SET, { theme });
