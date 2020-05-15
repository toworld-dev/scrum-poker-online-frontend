/**
 * Action types
 */
export enum RoomTypes {
  TOPIC = '@Room/TOPIC',
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
  readonly data: Room;
  readonly error: boolean;
  readonly loading: boolean;
}
