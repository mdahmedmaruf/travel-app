import React, { useContext, useEffect, useState } from 'react';
import { TravelPlaceContext } from '../../App';
import { allPlaces } from '../Data/Data';
import TravelAreaContent from './TravelAreaContent';


const TravelArea = () => {
    const [name, setName] = useContext(TravelPlaceContext);
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const matchPlaces = allPlaces.filter(place => place.name === name);
        setPlaces(matchPlaces);
    },[name])

    return (
        <div className="travelArea">
            {
               places.map(place => <TravelAreaContent key={name} place={place} />) 
            }
        </div>
    );
};

export default TravelArea;