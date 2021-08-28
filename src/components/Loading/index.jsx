import React from "react";
import classes from "./styles.module.css";
import Pokeball from "../../assets/Pokeball.png";
const Loading = () => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.content}>
                <p>Please wait... Fetching data... </p>
                <img src={Pokeball} alt="" className={classes.loading_img} />
            </div>
        </div>
    );
};

export default Loading;
