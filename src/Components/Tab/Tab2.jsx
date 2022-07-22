import React, { useEffect, useState, useContext } from "react";
import { UserContex } from "../../App";
import rating from "../../util/ratedDish";
import userVote from "../../util/userVote";
import Card from "../Card/Card";

const Tab2 = () => {
  const { currUser } = useContext(UserContex);
  const [dishes, setDishes] = useState([]);
  const [currRank, setCurrRank] = useState(userVote[currUser]);
  function compare(a, b) {
    if (a.rating > b.rating) {
      return -1;
    } else if (a.rating < b.rating) {
      return 1;
    }
    return 0;
  }
  async function sorting() {
    await rating.sort(compare);
    setDishes(rating);
    setCurrRank(userVote[currUser]);
  }
  useEffect(() => {
    sorting();
  }, []);
  return (
    <div className="container">
      {dishes.map((element) => {
        let rank;
        if (element.dishName === currRank.rank1) {
          rank = 1;
        } else if (element.dishName === currRank.rank2) {
          rank = 2;
        } else if (element.dishName === currRank.rank3) {
          rank = 3;
        } else {
          rank = 0;
        }
        return (
          <Card
            key={element.id}
            name={element.dishName}
            image={element.image}
            description={element.rating}
            vote={true}
            rank={rank}
          />
        );
      })}
    </div>
  );
};

export default Tab2;
