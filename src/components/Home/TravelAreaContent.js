import React from 'react';
import { Link } from 'react-router-dom';

const TravelAreaContent = (props) => {

  const {name, desc, id} = props.place;

  return (
    <>
      <h1>{name} </h1>
      <p>{desc}</p>
      <Link to={`/place/${id}`}>
        <button>Booking</button>
      </Link>
    </>
  );
};

export default TravelAreaContent;