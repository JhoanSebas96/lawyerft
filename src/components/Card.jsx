import React from "react";
import { GoLaw } from "react-icons/go";
import cardLogo from '../assets/card-icon.svg'
import './Card.css'

function Card() {
  return (
    <div className="card-container">
      <div className="card-info">
        <div className="img-container">
          <GoLaw className="img-card"></GoLaw>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure beatae deleniti non eum iusto dolorem animi aliquam, deserunt magni hic, vitae cumque, perspiciatis molestiae fugiat.</p>
      </div>
    </div>
  );
}

export default Card;
