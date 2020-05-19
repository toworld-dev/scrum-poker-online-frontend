import { action } from 'typesafe-actions';
import { VoteTypes, Vote } from './types';
import { store } from '../..';
import { ICreateVoteRequest } from '../../../types/vote/IVoteRequest';

export const listenVotes = (data: Vote) => action(VoteTypes.VOTES, data);
export const createVote = (vote: number) => {
  const {
    auth: { data },
  } = store.getState();

  return action(VoteTypes.VOTE, {
    vote,
    clientId: data.clientId,
    username: data.username,
  } as ICreateVoteRequest);
};
