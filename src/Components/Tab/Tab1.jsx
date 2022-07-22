import React, { useEffect, useRef, useState } from "react";
import database from "../../util/database";
import Card from "../Card/Card";
import Poll from "../Poll/Poll";
import Loader from "./loader.gif";

const Tab1 = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const poll = useRef();

  useEffect(() => {
    setTimeout(() => {
      setDishes(database);
      setLoading(false);
    }, 3000);
  }, []);

  /* ------------ Created Static databse because most of time 
                fetch api gives error. ---------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await fetch(
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    );
    let data = await res.json();
    setDishes(data);
  };
*/

  return (
    <>
      <div className="container">
        {loading ? (
          <div className="loader"></div>
        ) : (
          dishes.map((element) => {
            return (
              <Card
                key={element.id}
                name={element.dishName}
                image={element.image}
                description={element.description}
              />
            );
          })
        )}
        <button
          className="poll"
          onClick={() => {
            poll.current.style.display = "flex";
          }}
        >
          <i className="fas fa-square-poll-vertical"></i>
        </button>
      </div>
      <Poll pollref={poll} />
    </>
  );
};

export default Tab1;
