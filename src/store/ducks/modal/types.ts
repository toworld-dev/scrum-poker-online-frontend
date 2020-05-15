/**
 * Action types
 */
export enum ModalTypes {
  SET = '@modal/SET',
}

/**
 * State type
 */
export interface ModalState {
  readonly status: boolean;
}
