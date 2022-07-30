import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

const TodoList = () => {
  const { todoListValues: list, toogleTodo: onChange } = useContext(TodoContext);

  return (
    <ul>
      {list.map(({ name, isDone }) => (
        <li key={name}>
          <label>
            <input
              name={name}
              type="checkbox"
              checked={isDone}
              onChange={onChange}
            />
            <span style={{ textDecoration: isDone ? 'line-through' : '' }}>
              {name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;