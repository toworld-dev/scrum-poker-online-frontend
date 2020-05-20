import { action } from 'typesafe-actions';
import { RoomTypes, Room } from './types';

export const listenTopic = (data: Room) => action(RoomTypes.TOPIC, data);

export const createTopic = (topicName: string) =>
  action(RoomTypes.CREATE, topicName);
