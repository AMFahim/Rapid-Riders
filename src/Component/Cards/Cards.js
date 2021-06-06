import React from 'react';
import Bike from '../../images/Bike.png'
import Car from '../../images/Car.png';
import Bus from '../../images/Bus.png';
import Train from '../../images/Train.png'
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div>
      <div className="style">
        <Link to="/destination">
          <div className="card">
            <img className="image" src={Bike} alt="" />
            <div className="container">
              <h3>Bike</h3>
            </div>
          </div>
        </Link>
        <Link to="/destination">
          <div className="card">
            <img src={Car} alt="" />
            <div className="container">
              <h3>Car</h3>
            </div>
          </div>
        </Link>
        <Link to="/destination">
          <div className="card">
            <img src={Bus} alt="" />
            <div className="container">
              <h3>Bus</h3>
            </div>
          </div>
        </Link>
        <Link to="/destination">
          <div className="card">
            <img src={Train} alt="" />
            <div className="container">
              <h3>Train</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;