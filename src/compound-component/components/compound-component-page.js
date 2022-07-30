import React from 'react';
import Compound from './Compound';
import NoCompound from './NoCompound';
import TodoForm2 from './TodoForm2';
import TodoList2 from './TodoList2';
import TodoTitle2 from './TodoTitle2';

export const CompoundComponentPage = () => (
  <>
    <h2>Sin Compound Component</h2>
    <hr />
    <NoCompound title="Mi lista de tareas" />

    <br />

    <h2>Con Compound Component</h2>
    <hr />
    <Compound>
      <TodoTitle2>
        <h2>Lista de tareas</h2>
      </TodoTitle2>
      <TodoForm2 />
      <TodoList2 />
    </Compound>
  </>
);
