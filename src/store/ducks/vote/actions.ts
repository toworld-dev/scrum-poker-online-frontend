import { action } from 'typesafe-actions';
import { VoteTypes, Vote } from './types';
import { store } from '../..';
import { ICreateVoteRequest } from '../../../types/vote/IVoteRequest';

export const listenVotes = (data: Vote) => action(VoteTypes.VOTES, data);
export const createVote = (vote: number) => {
  const { auth, room } = store.getState();

  return action(VoteTypes.VOTE, {
    vote,
    topic: room.data.topic?.id,
    clientId: auth.data.clientId,
    username: auth.data.username,
  } as ICreateVoteRequest);
};

export const listenResult = (result: number[]) =>
  action(VoteTypes.SET_RESULT, result);

export const showResult = () => action(VoteTypes.SHOW_RESULT);
