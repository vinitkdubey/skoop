import React, { useContext, useState } from "react";
import rating from "../../util/ratedDish";
import database from "../../util/database";
import userVote from "../../util/userVote";
import "./Poll.css";
import { UserContex } from "../../App";

const Poll = ({ pollref }) => {
  const { currUser } = useContext(UserContex);
  const [vote, setVote] = useState(userVote[currUser]);
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setVote({ ...vote, [name]: value });
  }
  return (
    <div className="poll-container-wrapper" ref={pollref}>
      <div className="poll-container">
        <label htmlFor="rank1">
          Rank 1 :
          <select
            name="rank1"
            value={vote.rank1}
            id="rank1"
            onChange={changeHandler}
          >
            <option value="">-----</option>
            {database.map((element, index) => {
              if (
                element.dishName != vote.rank2 &&
                element.dishName != vote.rank3
              ) {
                return (
                  <option key={index} value={element.dishName}>
                    {element.dishName}
                  </option>
                );
              }
            })}
          </select>
        </label>
        <label htmlFor="rank2">
          Rank 2 :
          <select
            name="rank2"
            value={vote.rank2}
            id="rank2"
            onChange={changeHandler}
          >
            <option value="">-----</option>
            {database.map((element, index) => {
              if (
                element.dishName != vote.rank1 &&
                element.dishName != vote.rank3
              ) {
                return (
                  <option key={index} value={element.dishName}>
                    {element.dishName}
                  </option>
                );
              }
            })}
          </select>
        </label>
        <label htmlFor="rank3">
          Rank 3 :
          <select
            name="rank3"
            value={vote.rank3}
            id="rank3"
            onChange={changeHandler}
          >
            <option value="">-----</option>
            {database.map((element, index) => {
              if (
                element.dishName != vote.rank2 &&
                element.dishName != vote.rank1
              ) {
                return (
                  <option key={index} value={element.dishName}>
                    {element.dishName}
                  </option>
                );
              }
            })}
          </select>
        </label>
        <button
          onClick={() => {
            // Removing previous votes
            if (userVote[currUser].rank1 !== "") {
              rating.forEach((data) => {
                if (data.dishName === userVote[currUser].rank1)
                  data.rating -= 30;
              });
            }
            if (userVote[currUser].rank2 !== "") {
              rating.forEach((data) => {
                if (data.dishName === userVote[currUser].rank2)
                  data.rating -= 20;
              });
            }
            if (userVote[currUser].rank3 !== "") {
              rating.forEach((data) => {
                if (data.dishName === userVote[currUser].rank3)
                  data.rating -= 10;
              });
            }
            // Adding new votes
            rating.forEach((data) => {
              if (data.dishName === vote.rank1) {
                data.rating += 30;
              } else if (data.dishName === vote.rank2) {
                data.rating += 20;
              } else if (data.dishName === vote.rank3) {
                data.rating += 10;
              } else {
                return;
              }
            });
            // Updatin user vote
            userVote[currUser] = vote;
            pollref.current.style.display = "none";
          }}
        >
          Poll
        </button>
      </div>
    </div>
  );
};

export default Poll;
