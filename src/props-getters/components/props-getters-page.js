import React from 'react';
import { FormRenderProps } from './FormRenderProps';
import { PropsGetterWithHOC } from './PropsGetterWithHOC';
import { PropsGetterWithRenderProps } from './PropsGetterWithRenderProps';

export const PropsGettersPage = () => {

  const onSubmit = values => alert(JSON.stringify(values));

  const _handleChange = handleChange => e => {
    alert('change');
    handleChange(e);
  };

  const log = () => {
    console.log("Escribiendo log con props getter");
  };

  return (
    <>
      <h2>Sin Props Getters y Render Props</h2>
      <hr />
      <FormRenderProps initialState={{ name: '', jobTitle: '' }}>
        {({ formValues, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={_handleChange(handleChange)}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
              />
            </div>
            <button style={{ margin: '8px 0' }} type="submit">
              Submit
            </button>
          </form>
        )}
      </FormRenderProps>

      <br />

      <h2>Con Props Getters y Render Props</h2>
      <hr />
      <PropsGetterWithRenderProps initialState={{ name: '', jobTitle: '' }}>
        {({ formValues, getInputProps, handleSubmit }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                {...getInputProps({ onChange: log })}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                {...getInputProps()}
              />
            </div>
            <button style={{ margin: '8px 0' }} type="submit">
              Submit
            </button>
          </form>
        )}
      </PropsGetterWithRenderProps>

      <br />

      <h2>Con Props Getters y HOC</h2>
      <hr />
      <PropsGetterWithHOC onSubmit={onSubmit} />
    </>
  );
};
