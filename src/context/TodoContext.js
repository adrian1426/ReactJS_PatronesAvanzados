import { createContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

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

  const valuesProvider = {
    handleSubmit,
    toogleTodo,
    getTodoValues,
    todoListValues
  };

  return (
    <TodoContext.Provider value={valuesProvider}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;