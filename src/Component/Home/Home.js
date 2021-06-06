import React from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Home.css'

const Home = () => {
  return (
    <div className="backGround">
      <Header/>
      <HeaderMain/>
      <Cards/>
    </div>
  );
};

export default Home;