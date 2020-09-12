import React, { Fragment } from 'react';
import Abstract from './Abstract/Abstract';
import Details from './Details/Details';

const Home = () => {
  return (
    <div className='flex flex-jc-sb'>
      <Abstract />
      <Details />
    </div>
  );
};

export default Home;
