import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Contact from './components/Contact/Contact';
import Destination from './components/Destination/Destination';
import News from './components/News/News';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Auth from './components/Login/Auth';
import HotelInfo from './components/HotelInfo/HotelInfo';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const TravelPlaceContext = createContext();

function App() {
  const [name, setName] = useState('cox\'s bazar');
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <TravelPlaceContext.Provider value={[name, setName, loggedInUser, setLoggedInUser]}>
      {loggedInUser.email}
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/place/:id">
          <Destination/>
        </Route>
        <Route path="/news">
          <News/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        <PrivateRoute path="/hotelinfo">
          <HotelInfo />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </TravelPlaceContext.Provider>
  );
}

export default App;
