import React from "react";
import classes from "./styles.module.css";

const Type = (props) => {
    return <div className={`${classes.type} ${props.name}`}>{props.name}</div>;
};

export default Type;
