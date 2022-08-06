import React from 'react';
import { NoStateReducer } from './NoStateReducer';
import { StateReducer } from './StateReducer';

export const StateReducerPage = () => (
  <>
    <h2>Sin State Reducer</h2>
    <hr />
    <NoStateReducer />

    <br />

    <h2>Con State Reducer</h2>
    <hr />
    <StateReducer />
  </>
);
