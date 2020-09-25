import React, { useContext } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.png';
import { TravelPlaceContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(TravelPlaceContext);
    return (
    <div className="container">
      <div className="logoNav">
        <div className="logo">
            <Link to="/"><img src={logo} alt="Logo"/></Link>
        </div>
        <nav className="mainNavigaion">
          <ul>
            <li>
              <Link to="/home" >Home</Link>
            </li>
            <li>
              <Link to="/destination" >Destination</Link>
            </li>
            <li>
              <Link to="/news" >News</Link>
            </li>
            <li>
              <Link to="/contact" >Contact</Link>
            </li>
            <li className="loginButton">
            {
              loggedInUser ? (
                <>
                  <p>{loggedInUser.email} <span onClick={() => setLoggedInUser({})}>SignOut</span></p>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )
            }
            </li>
          </ul>
        </nav> 
      </div>
    </div>
    );
};

export default Header;