import React from "react";
import "./Card.css";

const Card = ({ image, name, description, vote, rank }) => {
  return (
    <div className="card">
      {vote && rank !== 0 ? <div className="vote">{rank}</div> : ""}
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <span>{name}</span>
      <p className={vote ? "leaderboard" : ""}>{description}</p>
    </div>
  );
};

export default Card;
