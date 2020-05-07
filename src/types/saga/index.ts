export interface IActionSaga<T> {
  error?: any;
  meta?: any;
  payload?: T;
  type?: any;
}
