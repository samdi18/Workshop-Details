import React, { Fragment } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Workshops from './components/Workshops/Workshops';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Fragment>
      <div className='container'>
        <Navbar />
        <Home />
      </div>
      <Workshops />
      <Footer />
    </Fragment>
  );
};

export default App;
