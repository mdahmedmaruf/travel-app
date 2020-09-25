import React, { useContext } from 'react';
import { TravelPlaceContext } from '../../App';
import Rectangle from '../../images/Rectangle.png';
import coxsbazar from '../Data/images/Sajek.png';
import sundorbon from '../Data/images/sundorbon.png';
import sreemongol from '../Data/images/Sreemongol.png';
import Header from '../Header/Header';
import TravelArea from './TravelArea';
import './Home.css';

const Home = () => {

  const [name, setName] = useContext(TravelPlaceContext);

    return (
      <>
        <Header />
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${Rectangle})` }}  className="hero">
          <div style={{color: '#FFF'}} className="homeContent">
          <TravelArea />
          <div className="homeImages">
            <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${coxsbazar})` }} onClick={() => setName('cox\'s bazar')}><h2>Cox's Bazar</h2></div>
            <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${sundorbon})` }} onClick={() => setName('sundorbon')}><h2>Sundorbon</h2></div>
            <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${sreemongol})` }} onClick={() => setName('sreemongol')}><h2>sreemongol</h2></div>
          </div>
          </div>
        </div>
      </>
    );
};

export default Home;