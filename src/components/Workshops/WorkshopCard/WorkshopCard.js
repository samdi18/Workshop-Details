import React from 'react';
import './WorkshopCard.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleRight);

const WorkshopCard = ({ image, name }) => {
  return (
    <div className='wkshop-card flex flex-fd-c'>
      <div className='wkshop-card__img'>
        <img src={require(`../../../assets/${image}.png`)} alt='' />
      </div>

      <h5>{name}</h5>

      <div className='wkshop-card__link'>
        <a href='#'>View workshop</a>
        <FontAwesomeIcon icon='angle-right' size='lg' color='#0062FF' />
      </div>
    </div>
  );
};

export default WorkshopCard;
