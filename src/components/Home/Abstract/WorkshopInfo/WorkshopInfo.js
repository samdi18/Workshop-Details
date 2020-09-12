import React from 'react';
import './WorkshopInfo.scss';

const WorkshopInfo = () => {
  return (
    <div className='wkshop-info flex flex-fd-c flex-jc-c'>
      <div className='wkshop-info__title'>
        <h3>Workshop Info</h3>
      </div>

      <div className='wkshop-info__venue'>
        <h5>Venue</h5>
        <p>
          Upskill Training Center, Baridhara DOHS, 516/3, Flat- 4B, Lane- 10
        </p>
      </div>

      <div className='wkshop-info__dt'>
        <h5>Date & Time</h5>
        <p>Oct 24, 2019 11:00 AM</p>
      </div>

      <div className='wkshop-info__duration'>
        <h5>Duration</h5>
        <p>6 Hour(s)</p>
      </div>
    </div>
  );
};

export default WorkshopInfo;
