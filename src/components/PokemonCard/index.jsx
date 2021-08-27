import React from "react";
import classes from "./styles.module.css";

const PokemonCard = (props) => {
    const clickHandler = () => {
        props.onClick(props.pokemon);
    };
    return (
        <div className={classes.card} onClick={clickHandler}>
            {props.children}
        </div>
    );
};

export default PokemonCard;
