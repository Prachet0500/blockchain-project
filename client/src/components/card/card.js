import React from 'react';
import './style.css';
import { useNavigate } from 'react-router';


function Card({ title, image, description }) {
  const navigate=useNavigate();
  const handleBuyClick=()=>{
      navigate('/buy');
  }
  console.log( title, image, description,'card')
  return (
    <div className="Card">
      <img className='card-img'src={image} alt='ok' />
      {/* <h2>{title}</h2> */}
      <p className='card-p'>{description}</p>
      <button className='card-button' onClick={handleBuyClick}>Purchase</button>
    </div>
  );
}

export default Card;