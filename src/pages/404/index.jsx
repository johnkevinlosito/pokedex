import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import TeamRocket from "../../assets/Team_Rocket.png";

const NotFound = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.banner}>
                    <h1>404</h1>
                    <div>
                        <img src={TeamRocket} alt="" />
                    </div>
                </div>
                <div className={classes.msg}>
                    <div className={classes.text}>
                        <p className={classes.p1}>The rocket team </p>
                        <p className={classes.p2}>has won this time.</p>
                    </div>
                    <Link to="/" className={classes.btn}>
                        Return
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
