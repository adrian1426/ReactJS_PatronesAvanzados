import PropTypes from 'prop-types';
import { TodoProvider } from '../../context/TodoContext';

export const Compound = ({ children }) => {
  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <TodoProvider>
        {children}
      </TodoProvider>
    </div>
  );
};

Compound.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Compound;