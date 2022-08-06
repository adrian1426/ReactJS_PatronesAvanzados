import PropTypes from 'prop-types';
import { useState } from 'react';

function callAllFun(...fns) {
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
};

export const PropsGetterWithRenderProps = ({ initialState, children }) => {
  const [formValues, setFormValues] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = _handleSubmit => event => {
    event.preventDefault();

    _handleSubmit(formValues);
  };

  const getInputProps = (miprops = {}) => ({
    onChange: callAllFun(miprops?.onChange, handleChange)
  });

  const getStateAndHelpers = () => ({
    formValues,
    getInputProps,
    handleSubmit,
  });

  return children(getStateAndHelpers());
};

PropsGetterWithRenderProps.propTypes = {
  children: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};