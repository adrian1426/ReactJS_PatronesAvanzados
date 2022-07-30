import React from 'react';
import CustomHook from './CustomHook';
import { NoCustomHook } from './NoCustomHook';

export const CustomHookPage = () => (
  <>
    <h2>Sin Custom Hook</h2>
    <hr />
    <NoCustomHook />

    <br />

    <h2>Con Custom Hook</h2>
    <hr />
    <CustomHook />
  </>
);
