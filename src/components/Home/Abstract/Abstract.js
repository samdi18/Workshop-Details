import React, { Fragment } from 'react';
import './Abstract.scss';

import RegisterCard from './RegisterCard/RegisterCard';
import WorkshopInfo from './WorkshopInfo/WorkshopInfo';

const Abstract = () => {
  return (
    <div className='abstract'>
      <div className='abstract__img'>
        <img
          src={require('../../../assets/Fundamentals of UI & UX 3.png')}
          alt=''
        />
      </div>

      <RegisterCard />
      <WorkshopInfo />
    </div>
  );
};

export default Abstract;
