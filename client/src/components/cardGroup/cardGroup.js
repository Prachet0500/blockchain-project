import React from 'react';
import Card from '../card/card';
import './style.css';

function CardGroup({CardData}) {
  const cardData = CardData||[
    { title: 'Card 1', image: 'image-1.jpg' },
    { title: 'Card 2', image: 'image-2.jpg' },
    { title: 'Card 3', image: 'image-3.jpg' },
    { title: 'Card 4', image: 'image-4.jpg' },
    { title: 'Card 5', image: 'image-5.jpg' },
    { title: 'Card 6', image: 'image-6.jpg' },
    { title: 'Card 7', image: 'image-7.jpg' },
    { title: 'Card 8', image: 'image-8.jpg' },
  ];
  console.log(cardData);

  return (
    <div className="CardGroup">
      {/* Map over the card data and create a Card component for each one */}
      {cardData.map((card, index) => (
        <Card className="Card" key={index} title={null} image={card.image} description={card.description}/>
      ))}
    </div>
  );
}

export default CardGroup;