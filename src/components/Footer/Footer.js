import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer container flex flex-jc-sb'>
      <div className='footer__about'>
        <h4>About us</h4>
        <p>
          Upskill is a peer to peer skill sharing platform. It enables
          individuals and organizations to share skills and exchange technical
          knowledge to bridge the skills gap in Bangladesh.
        </p>
        <div className='footer__img'>
          <img src={require('../../assets/ictlogo.6db32a07.png')} alt='' />
        </div>
      </div>

      <div className='footer__links'>
        <h4>Helpful Links</h4>
        <a href='#'>Terms and Conditions</a>
        <a href='#'>Privacy Statement</a>
        <a href='#'>About Upskill</a>
      </div>

      <div className='footer__contact'>
        <h4>Contact</h4>
        <p>
          Upskill Training Center <br /> Flat- 4B House- 516/3 Lane- 10 <br />
          Baridhara DOHS
        </p>
        <p>01727 234132 </p> <p>sanan.upskill@gmail.com</p>
      </div>

      <div className='footer__subscribe'>
        <h4>Subscribe to our newsletter</h4>
        <form>
          <input type='text' placeholder='Type your mail' />
          <button className='button footer__cta'>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
