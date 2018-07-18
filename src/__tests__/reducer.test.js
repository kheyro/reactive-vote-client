import React from 'react';
import { Map, List, fromJS } from 'immutable';
import reducer from '../reducers';

describe('Reducers', () => {
  it('initialise the State', () => {
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Brazil', 'France'),
          tally: Map({ 'France': 5 }),
        }),
      }),
    };
    const nextState = reducer(undefined, action);
    expect(nextState).toEqual(
      fromJS({
        vote: {
          pair: ['Brazil', 'France'],
          tally: { 'France': 5 },
        },
      })
    );
  });

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Brazil', 'France'),
          tally: Map({ 'France': 5 }),
        }),
      }),
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(
      fromJS({
        vote: {
          pair: ['Brazil', 'France'],
          tally: { 'France': 5 },
        },
      })
    );
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Brazil', 'France'],
          tally: { 'France': 5 },
        },
      },
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(
      fromJS({
        vote: {
          pair: ['Brazil', 'France'],
          tally: { 'France': 5 },
        },
      })
    );
  });

  it('handles VOTE by setting hasVoted', () => {
    const state = fromJS({
      vote: {
        pair: ['Brazil', 'France'],
        tally: { 'France': 4 },
      },
    });
    const nextState = reducer(state, { type: 'VOTE', entry: 'France' });
    expect(nextState).toEqual(
      fromJS({
        vote: {
          pair: ['Brazil', 'France'],
          tally: { 'France': 4 },
        },
        hasVoted: 'France',
      })
    );
  });

  it('does not set hasVoted for VOTE on invalid entry', () => {
    const state = fromJS({
      vote: {
        pair: ['Brazil', 'France'],
        tally: { 'France': 4 },
      },
    });
    const nextState = reducer(state, { type: 'VOTE', entry: 'Portugal' });
    expect(nextState).toEqual(
      fromJS({
        vote: {
          pair: ['Brazil', 'France'],
          tally: { 'France': 4 },
        },
      })
    );
  });
});
