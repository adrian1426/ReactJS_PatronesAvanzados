import React from 'react';
import MyBug from './MyBug';
import { NoRenderProp } from './NoRenderProp';
import { RenderProp } from './RenderProp';

export const RenderPropsPage = () => (
  <>
    <h2>Sin Render Props</h2>
    <hr />
    <NoRenderProp>
      <MyBug />
    </NoRenderProp>

    <br />

    <h2>Con Render Props</h2>
    <hr />
    <RenderProp renderProp={() => <p>Ups amiguito</p>}>
      <MyBug />
    </RenderProp>
  </>
);
