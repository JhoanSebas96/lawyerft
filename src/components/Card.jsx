import React from "react";
import { GoLaw } from "react-icons/go";
import './Card.css'

function Card({caso}) {
  return (
    <div className="card-container">
      <div className="card-info">
        <div className="img-container">
          <GoLaw className="img-card"></GoLaw>
        </div>
        <p>{caso.description}</p>
      </div>
    </div>
  );
}

export default Card;
