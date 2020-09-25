import React, { useContext } from 'react';
import HeaderSecondary from '../Header/HeaderSecondary';
import hotelOne from '../../images/Rectangle1.png';
import hotelTwo from '../../images/Rectangle2.png';
import hotelThree from '../../images/Rectangle3.png';
import map from '../../images/map.png';
import './HotelInfo.css'
import { TravelPlaceContext } from '../../App';

const HotelInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(TravelPlaceContext);
    return (
        <>
            <HeaderSecondary />
            <div className="hotelInfo">
                <div className="left-content">
                    <h2>email: {loggedInUser.email} </h2>
                    <p>username: {loggedInUser.username}  </p>
                    <button onClick={() => setLoggedInUser('')}>Sign Out</button>
                    <p>252 stays Apr 13-17 3 guest</p>
                    <p>Stay in Cox's Bazar</p>
                    <div className="contentImageInfo">
                        <div className="leftImage">
                            <img src={hotelOne} alt=""/>
                        </div>
                        <div className="rightContent">
                            <p>title</p>
                            <p>content</p>
                        </div>
                    </div>
                    <div className="contentImageInfo">
                        <div className="leftImage">
                            <img src={hotelTwo} alt=""/>
                        </div>
                        <div className="rightContent">
                            <p>title</p>
                            <p>content</p>
                        </div>
                    </div>
                    <div className="contentImageInfo">
                        <div className="leftImage">
                            <img src={hotelThree} alt=""/>
                        </div>
                        <div className="rightContent">
                            <p>title</p>
                            <p>content</p>
                        </div>
                    </div>
                </div>
                <div className="rightMap">
                    <img src={map} alt="map"/>
                </div>
            </div>
        </>
    );
};

export default HotelInfo;