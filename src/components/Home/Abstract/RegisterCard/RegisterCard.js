import React from 'react';
import './RegisterCard.scss';

const RegisterCard = () => {
  return (
    <div className='register-card flex flex-jc-sb flex-ai-c'>
      <div className='register-card__info'>
        <h2>
          <span className='bengali'>৳ </span>
          2000
        </h2>
        <p>10 days to register</p>
      </div>
      <div className='register-card__cta button'>
        <a href='#'>Register Now</a>
      </div>
    </div>
  );
};

export default RegisterCard;
