import React from "react";
import classes from "./styles.module.css";

const Abilities = (props) => {
    return (
        <div className={classes.content}>
            <h2>Abilities</h2>
            <p>{`${props.abilities[0].ability.name} ${
                props.abilities[1]
                    ? " - " + props.abilities[1].ability.name
                    : ""
            }`}</p>
        </div>
    );
};

export default Abilities;
