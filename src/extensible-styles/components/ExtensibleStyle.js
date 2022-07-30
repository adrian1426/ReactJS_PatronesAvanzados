import PropTypes from 'prop-types';
import './button.css';

export const ExtensibleStyle = ({ name, type, onClick, children, className = 'btn btn-primary', style = {} }) => {
  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
};

ExtensibleStyle.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};