import { useState } from 'react';

const withControlledForm = (FormComponent, initialState = {}) => {

  const ControlledForm = ({ onSubmit }) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = e => {
      const { target: { name, value } } = e;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(formValues);
    };

    return (
      <FormComponent
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return ControlledForm;
};

export default withControlledForm;