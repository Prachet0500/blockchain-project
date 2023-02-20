import React from 'react';
import './style.css';


function Card({ title, image, description }) {
  console.log( title, image, description,'card')
  return (
    <div className="Card">
      <img className='card-img'src={image} alt='ok' />
      {/* <h2>{title}</h2> */}
      <p className='card-p'>{description}</p>
      <button className='card-button'>Purchase</button>
    </div>
  );
}

export default Card;