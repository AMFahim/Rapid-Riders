import React from 'react';
import Header from '../Header/Header';
import GoogleMap from '../../images/Map.png';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className="container">
      <Header />
      <br />
      <div className="row">
        <div className="col-md-4">
          <div className="card-body" style={{ backgroundColor: "blanchedalmond" }}>
            <p>Pick From</p>
            <input className="form-control" type="text" placeholder="From" />
            <p>Pick To</p>
            <input className="form-control" type="text" placeholder="To" />
            <br />
            <Link to="/booking"><button className="btn btn-danger col mx-auto">Search</button></Link>
          </div>
        </div>
        <div className="col-md-8">
          <img src={GoogleMap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;