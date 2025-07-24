import React from 'react';
import classes from "./Card.module.css"

type CardProps = {
    title: string;
    text: string;
}

const Card = () => {
    return (
        <div className={classes.container}>
            <div className={classes.more}></div>
        </div>
    );
}

export default Card;
