import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import SignIn from './Component/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import Search from './Component/Search/Search';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Booking from './Component/Booking/Booking';


export const UserContext = createContext();

 function App() {
   const [loggedInUser, setLoggedInUser] = useState();
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
      {/* <Header/> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/destination">
            <Search/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="*"> 
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    


    </UserContext.Provider>
  );
}

export default App;
