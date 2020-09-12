import React from 'react';
import './Description.scss';

const Description = () => {
  return (
    <div className='description'>
      <div className='description__info'>
        <h4>What is UX and UI</h4>
        <p>
          UX refers to the term ‘User Experience’ while ‘UI’ refers to ‘User
          Interface’ and both of these elements are crucial for product
          development. But despite their professional relationship, the roles
          they play are quite different. Where UX Design is a more analytical
          and technical approach, UI Design is similar to what we refer to as
          graphic design, though the responsibilities are more complex.
        </p>
      </div>

      <div className='description__info'>
        <h4>What you will learn</h4>
        <p>
          Step into the world of User Interface (UI) & User Experience (UI)
          design with Upskill. During our introductory workshop, explore the
          decision-making process that dictates how users interact with digital
          products and see why businesses demands UX/UI talent. After the
          workshop, You will be able to leverage essential tools and techniques
          like user research, prototyping, testing, and more.
        </p>
      </div>

      <div className='description__info'>
        <h4>What you will get</h4>
        <p>
          This is a basic workshop on UX/ UI where the fundamentals will be
          discussed. So anyone can attend this workshop. No prior subject
          knowledge is required.
        </p>
      </div>

      <div className='description__note'>
        <h5>
          Lunch will be provided.
          <br /> Every participant will get a Participation Certificate
        </h5>
      </div>
    </div>
  );
};

export default Description;
