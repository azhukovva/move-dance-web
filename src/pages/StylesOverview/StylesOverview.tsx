import React from "react";
import classes from "./StylesOverview.module.css"
import { Style } from "../../data";

const Card = (props: Style) => {
  const onCardClick = () => {};
  return (
    //with colorful bg
    <div>
 
      <div
        id={`${props.name}-card`}
        className="item-card"
        style={{ backgroundImage: `url(${props.image})` }}
        onClick={onCardClick}
      >
        <div className="overlay">
          <span className="card-title">{props.name}</span>
        </div>
      </div>
    </div>
  );
};

const StylesOverview = () => {
  return <div className={classes.item_grid}></div>;
};

export default StylesOverview;
