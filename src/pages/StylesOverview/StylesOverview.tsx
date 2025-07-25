import React, { useState } from "react";
import classes from "./StylesOverview.module.css";
import { Style } from "../../data";
import { styles } from "../../data";
import StyleModal from "../../components/StyleModal/StyleModal";

type CardProps = Style & { onClick: () => void };

const Card = (props: CardProps) => {
  return (
    <div>
      <div
        className={classes.card}
        id={`${props.name}-card`}
        style={{ backgroundImage: `url(${props.image})` }}
        onClick={props.onClick}
      >
        <div className={classes.overlay}>
          <span className={classes.cardTitle}>{props.name}</span>
        </div>
      </div>
    </div>
  );
};

const StylesOverview = () => {
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);

  const handleCardClick = (style: Style) => {
    setSelectedStyle(style);
  };

  const closeModal = () => {
    setSelectedStyle(null);
  };
  return (
    <>
      <div className={classes.grid}>
        {" "}
        {styles.map((style) => (
          <Card
            key={style.name}
            name={style.name}
            about={style.about}
            for={style.for}
            whatToBring={style.whatToBring}
            image={style.image}
            onClick={() => handleCardClick(style)}
          />
        ))}
      </div>

      {selectedStyle && (
        <StyleModal style={selectedStyle} onClose={closeModal} />
      )}
    </>
  );
};

export default StylesOverview;
