/**
 * Action types
 */
export enum RoomTypes {
  TOPIC = '@Room/TOPIC',
  CREATE = '@Room/CREATE',
}

/**
 * Data types
 */
export interface Room {
  name: string;
  topic: {
    id?: string;
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
