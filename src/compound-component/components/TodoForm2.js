import { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { handleSubmit: onSubmit } = useContext(TodoContext);

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New todo:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;