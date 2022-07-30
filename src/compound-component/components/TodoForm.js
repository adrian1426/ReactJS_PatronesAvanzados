import { useState } from "react";
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

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

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;