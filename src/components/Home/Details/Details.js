import React, { useState } from 'react';
import './Details.scss';
import Description from './Description/Description';
import CourseOutline from './CourseOutline/CourseOutline';
import Instructor from './Instructor/Instructor';

const Details = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropdownId, setDropdownId] = useState('1');

  const handleClick = (e) => {
    //console.log(e.target.id);

    if (dropdownId !== e.target.id) {
      setDropdownId(e.target.id);
    }
  };

  return (
    <div className='details'>
      <h1>Fundamentals: UI/ UX Design</h1>

      <div className='details__links flex'>
        <a
          href='#'
          className={` ${dropdownId === '1' ? 'active' : ''}`}
          id='1'
          onClick={handleClick}
        >
          Description
        </a>
        <a
          href='#'
          id='2'
          className={` ${dropdownId === '2' ? 'active' : ''}`}
          onClick={handleClick}
        >
          Course Outline
        </a>
        <a
          href='#'
          id='3'
          className={` ${dropdownId === '3' ? 'active' : ''}`}
          onClick={handleClick}
        >
          Instructor
        </a>
      </div>
      {dropdownId === '1' ? <Description /> : ''}
      {dropdownId === '2' ? <CourseOutline /> : ''}
      {dropdownId === '3' ? <Instructor /> : ''}
    </div>
  );
};

export default Details;
