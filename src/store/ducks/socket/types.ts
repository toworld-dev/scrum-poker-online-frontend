/**
 * Action types
 */
export enum SocketTypes {
  ACCOUNTS = '@socket/ACCOUNTS',
  ACCOUNT_ONLINE = '@socket/ACCOUNT_ONLINE',
}

/**
 * Data types
 */
export interface Room {
  name: string;
  topic: {
    description: string;
  };
}

/**
 * State type
 */
export interface SocketState {
  readonly accounts: string[];
  // readonly vote: boolean;
  // readonly room: Room;
}
