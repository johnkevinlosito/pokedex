import React from "react";
import classes from "./styles.module.css";

const Stats = (props) => {
    return (
        <div className={classes.stats_content} style={props.style}>
            <div className={classes.stat_value}>{props.value}</div>
            <p className={classes.stat_name}>
                {props.name === "special-attack"
                    ? "SP Attack"
                    : props.name === "special-defense"
                    ? "SP Defense"
                    : props.name}
            </p>
        </div>
    );
};

export default Stats;
