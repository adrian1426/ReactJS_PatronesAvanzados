import React from 'react';
import { HOCForm } from './HOCForm';
import { NoHOC } from './NoHOC';

export const HocPage = () => {

  const handleSubmit = data => alert(data);

  const handleSubmit2 = data => {
    console.log(data);
  };

  return (
    <>
      <h2>SIN High Order Component (HOC)</h2>
      <hr />
      <NoHOC onSubmit={handleSubmit} />

      <br />

      <h2>CON High Order Component (HOC)</h2>
      <hr />
      <HOCForm onSubmit={handleSubmit2} />
    </>
  );
};
