import { useState } from 'react';
import PropTypes from 'prop-types';
import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export const NoCompound = ({ title }) => {
  const [listTodos, setListTodos] = useState({});

  const handleSubmit = inputValue => {
    setListTodos({
      ...listTodos,
      [inputValue]: { name: inputValue, isDone: false },
    });
  };

  const toogleTodo = ({ target: { name } }) => {
    setListTodos({
      ...listTodos,
      [name]: {
        ...listTodos[name],
        isDone: !listTodos[name].isDone,
      },
    });
  };

  const getTodoValues = () => Object.values(listTodos);

  const todoListValues = getTodoValues();

  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <TodoTitle>
        <h2>{title}</h2>
      </TodoTitle>
      <main>
        <TodoForm onSubmit={handleSubmit} />
      </main>
      <footer>
        {!todoListValues.length && <p>No todo added yet.</p>}
        <TodoList list={todoListValues} onChange={toogleTodo} />
      </footer>
    </div>
  );
};

NoCompound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoCompound;