import React from 'react';
import Header from '../Header/Header';
import './Booking.css';
import peopleIcon from '../../images/icons/peopleicon.png';
import map from '../../images/Map.png'

const Booking = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4">
          <div className="card-body" style={{ backgroundColor: "blanchedalmond" }}>
            <div className="destination">
              <h5>Mirpur</h5>
              <p>to</p>
              <h5>Gulshan-1</h5>
            </div>
            <div className="ticket d-flex justify-content-around bg-light rounded">
              <div className="peopleIcon">
                <img src={peopleIcon} alt="" />
                <h3>4</h3>
              </div>
              <h3>$50</h3>
            </div>
            <br />
            <div className="ticket d-flex justify-content-around bg-light rounded">
              <div className="peopleIcon">
                <img src={peopleIcon} alt="" />
                <h3>2</h3>
              </div>
              <h3>$70</h3>
            </div>
          </div>
        </div>
        <div className="col-md-8">
         <img src={map} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Booking;