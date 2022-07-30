import PropTypes from 'prop-types';
import './button.css';

export const NoExtensibleStyle = ({ name, type, onClick, children }) => {
  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      className="btn btn-primary"
    >
      {children}
    </button>
  );
};

NoExtensibleStyle.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};