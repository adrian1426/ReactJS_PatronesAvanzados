import PropTypes from 'prop-types';
import './button.css';

export const ExtensibleStyle = (props) => {
  const { name, type, onClick, children, ...rest } = props;

  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      {...rest}
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