import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light container">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#"><b>Rapid Riders</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end for-navbar" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        <Link to="/destination" className="nav-link">Destination</Link>
        <Link to="/" className="nav-link">Blog</Link>
        <Link to="/" className="nav-link">Contact</Link>
        <Link to="/signin" className="nav-link"><button className="btn btn-warning">Sign In</button></Link>
         {/* <Link to={`/signin`}>
                        {
                            loggedInUser.email ? <button className="btn btn-warning" onClick={() => setLoggedInUser({})}>Sign Out</button>
                                : <button className="btn btn-outline-warning" >Sign in</button>
                        }
                    </Link> */}
         
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;