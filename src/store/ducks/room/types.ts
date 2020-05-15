/**
 * Action types
 */
export enum RoomTypes {
  REQUEST_GET = '@Room/REQUEST_GET',
}

/**
 * Data types
 */
export interface Room {
  name: string;
  topic: {
    description?: string;
  };
}

/**
 * State type
 */
export interface RoomState {
  readonly data: Room[];
  readonly error: boolean;
  readonly loading: boolean;
}
