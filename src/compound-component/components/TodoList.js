import PropTypes from 'prop-types';

const TodoList = ({ list, onChange }) => {
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

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ),
  onChange: PropTypes.func.isRequired,
};

export default TodoList;