import { action } from 'typesafe-actions';
import { ModalTypes } from './types';

export const set = (status: boolean) => action(ModalTypes.SET, status);
