import React, { useContext } from 'react';
import Rectangle from '../../images/Rectangle.png';
import Header from '../Header/Header';
import './Destination.css';
import { TravelPlaceContext } from '../../App';
import { Link } from 'react-router-dom';

const Destination = () => {
    const [name, setName] = useContext(TravelPlaceContext);
    
    return (
        <>
        <Header />
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${Rectangle})` }}  className="hero">
            <div className="destinationBooking">
                <div className="destinationContent">
                    <h2> {name} </h2>
                </div>
                <div className="bookingForm">
                    <div>
                        <label htmlFor="origin">Origin</label>
                        <input type="text" value="Dhaka"/>
                        <label htmlFor="destination">Destination</label>
                        <select name="destination" id="destination">
                            <option value="coxs bazar">Cox's Bazar</option>
                            <option value="Sreemangal">Sreemangal</option>
                            <option value="Sundarbans">Cox's Bazar</option>
                        </select>
                        <div className="destinationDates">
                            <label htmlFor="startdate">From</label>
                            <input type="date" name="startdate" id="startdate"/>
                            <label htmlFor="enddate">To</label>
                            <input type="date" name="enddate" id="enddate"/>
                        </div>
                        <Link to="/hotelinfo">
                        <input type="submit" value="Start Booking"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Destination;