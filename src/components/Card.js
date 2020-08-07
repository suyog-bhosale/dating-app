import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Card.css";
import db from "./firebase";

/**
 * @author
 * @function TinderCard
 **/

const Card = (props) => {
  const [people, SetPeople] = useState([]);

  useEffect(() => {
    //fetching data from firebase !!

    db.collection("uPeople").onSnapshot((snapshot) => {
      SetPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="tinder_container">
      <h1>inderCard</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="tindercard"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default Card;
