import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";

const Home = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.container}>
                <div className={classes.hero_img}></div>
                <div className={classes.hero_content}>
                    <div className={classes.hero_text}>
                        <h1>
                            <span>Find</span> all your favorite
                            <span> Pokemon</span>
                        </h1>
                        <h2>
                            You can know the type of Pokemon, its strengths,
                            disadvantages and abilities
                        </h2>
                    </div>
                    <Link to="/pokedex" className={classes.btn_cta}>
                        See Pokemons
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
