import React from "react";
import Mew from "../../assets/mew.png";
import Container from "../../components/Container";
import classes from "./styles.module.css";

const About = () => {
    return (
        <section>
            <Container className={classes.about}>
                <img src={Mew} className={classes.banner} alt="" />
                <div className={classes.content}>
                    <p>
                        This is a personal project by{" "}
                        <b>
                            <a
                                href="https://johnkevinlosito.com"
                                target="_blank"
                            >
                                John
                            </a>
                        </b>{" "}
                        on his journey in learning React JS. The layout / UI is
                        inspired from a Figma community file which can be found{" "}
                        <a
                            href="https://www.figma.com/community/file/893705420616737018"
                            target="_blank"
                        >
                            here
                        </a>{" "}
                        and is licensed under{" "}
                        <a
                            href="https://creativecommons.org/licenses/by/4.0/"
                            target="_blank"
                        >
                            CC BY 4.0
                        </a>
                    </p>
                    <p>
                        This project fetches its data from{" "}
                        <a href="https://pokeapi.co/" target="_blank">
                            https://pokeapi.co/
                        </a>{" "}
                        which is a free and open to use consumption-only API.{" "}
                    </p>
                    <p className={classes.copyright}>
                        *Pokémon and Pokémon character names are trademarks of
                        Nintendo. Other trademarks are the property of their
                        respective owners.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default About;
