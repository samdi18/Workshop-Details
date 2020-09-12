import React from 'react';
import './Workshops.scss';

import WorkshopCard from './WorkshopCard/WorkshopCard';

const Workshops = () => {
  const workshops = [
    {
      img: 'NRB_Connect_Kamrul_Hasan_Shaon',
      name: 'Optimize Your Digital Campaigns',
    },
    { img: 'Fareed Huda', name: 'Product Strategy' },
    {
      img: 'Emotional Intelligence With Shead Ashraf',
      name: 'Emotional Intelligence',
    },
    { img: 'Reh Hassan workshop', name: 'How to really get a job' },
    { img: 'NRB_Connect_4', name: 'NRB Connect' },
  ];

  return (
    <div className='wkshops container'>
      <h2>Upcoming Workshops</h2>
      <p className='flex flex-jc-fe'>view all</p>
      <div className='flex flex-jc-sb'>
        {workshops.map((element, i) => (
          <WorkshopCard key={i} image={element.img} name={element.name} />
        ))}
      </div>
    </div>
  );
};

export default Workshops;
