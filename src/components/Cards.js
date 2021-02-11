import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Learn more!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./pictures/work-experience.jpg"
              text="Explore my career journey"
              label="Work Experience"
              path="/work-experience"
            />
            <CardItem
              src="./pictures/education.jpg"
              text="My alma mater"
              label="Education "
              path="/education"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./pictures/hobbies.jpg"
              text="What do I do in my free time?"
              label="Hobbies"
              path="/hobbies"
            />
            <CardItem
              src="./pictures/accomplishments.jpg"
              text="What have I accomplished?"
              label="Accomplishments"
              path="/accomplishments"
            />
            <CardItem
              src="./pictures/volunteer.jpg"
              text="My volunteer experience"
              label="Volunteer"
              path="/volunteer"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
