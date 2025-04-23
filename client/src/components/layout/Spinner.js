import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';

export const Spinner = () => {
  return (
    <Fragment>
      <section className='container'>
        <img
          src={spinner}
          style={{ width: '200px', margin: 'auto', display: 'block' }}
          alt='Loading...'
        />
      </section>
    </Fragment>
  );
};
