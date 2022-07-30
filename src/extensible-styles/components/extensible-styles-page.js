import React from 'react';
import { ExtensibleStyle } from './ExtensibleStyle';
import { NoExtensibleStyle } from './NoExtensibleStyle';

export const ExtensibleStylesPage = () => (
  <>
    <h2>SIN Extensible Styles</h2>
    <hr />
    <NoExtensibleStyle type='button'>
      Mi botón
    </NoExtensibleStyle>

    <br />

    <h2>Con Extensible Styles</h2>
    <hr />
    <ExtensibleStyle
      type='button'
      className='btn-success'
      style={{ color: 'red' }}
    >
      Mi botón extendible
    </ExtensibleStyle>
  </>
);
