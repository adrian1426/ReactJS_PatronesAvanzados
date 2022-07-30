import PropTypes from 'prop-types';

const TodoTitle = ({ children }) => <header>{children}</header>;

TodoTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoTitle;