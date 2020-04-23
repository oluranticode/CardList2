import React from 'react';
import './card.style.css';
import img1 from './img1.jpg'

const Card = ({name, email,}) => {
    return (
        <div className="card-container">
        <img className="image" src={img1} />
        <h1> {name}</h1>
        <p>{email}</p>
        </div>
    );
}

export default Card;