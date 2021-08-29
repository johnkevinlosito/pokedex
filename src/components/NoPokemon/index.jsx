import React from "react";
import classes from "./styles.module.css";
import Pika from "../../assets/Pika-X.png";

const NoPokemon = () => {
    return (
        <div className={classes.noContent}>
            <img src={Pika} alt="" />
        </div>
    );
};

export default NoPokemon;
