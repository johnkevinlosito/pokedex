import React from "react";
import classes from "./styles.module.css";
// import Banner from "../../assets/BannerComplete.png";

const Home = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.container}>
                <div className={classes.hero_img}>
                    {/* <img src={Banner} alt="Banner" /> */}
                </div>
                <div className={classes.hero_content}>
                    <div className={classes.hero_text}>
                        <h1>
                            <span>Find</span> all your favorite
                            <span>Pokemon</span>
                        </h1>
                        <h2>
                            You can know the type of Pokemon, its strengths,
                            disadvantages and abilities
                        </h2>
                    </div>
                    <button className={classes.btn_cta}>See Pokemons</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
