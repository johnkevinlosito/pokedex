import CloseIcon from "../../../assets/closeIcon.png";
import Card from "../../Card";
import Stats from "../../Stats";
import Abilities from "../../Abilities";
import Type from "../../Type";
import classes from "./styles.module.css";

const Desktop = ({ pokemon, onClose, specie }) => {
    const gen = specie.generation.name.replace("-", " ");
    return (
        <div className={`${classes.modal}`}>
            <button className={classes.closeBtn} onClick={onClose}>
                <img src={CloseIcon} alt="" />
            </button>
            <div className={classes.content}>
                <div
                    className={`${classes.left_content} ${pokemon.types[0].type.name} gradient`}
                >
                    <img
                        className={classes.pokemon_img}
                        src={
                            pokemon.sprites.other.dream_world.front_default
                                ? pokemon.sprites.other.dream_world
                                      .front_default
                                : pokemon.sprites.other["official-artwork"]
                                      .front_default
                        }
                        alt=""
                    />
                    <div className={classes.type}>
                        <Type name={pokemon.types[0].type.name} />
                        {pokemon.types[1] && (
                            <Type name={pokemon.types[1].type.name} />
                        )}
                    </div>
                </div>

                <div
                    className={`${classes.details} ${pokemon.types[0].type.name} darkGradient`}
                >
                    <div className={classes.top_details}>
                        <h1>{pokemon.name}</h1>
                        <div className={classes.gen}>
                            <span className={classes.genNum}>{gen}</span>
                            <span className={classes.id}>{pokemon.id}</span>
                        </div>
                    </div>

                    <Card>
                        <Abilities abilities={pokemon.abilities} />
                    </Card>
                    <div className={classes.stats}>
                        <Card style={{ marginRight: ".5rem" }}>
                            <Stats
                                name={pokemon.stats[1].stat.name}
                                value={pokemon.stats[1].base_stat}
                            />
                        </Card>
                        <Card style={{ marginRight: ".5rem" }}>
                            <Stats
                                name={pokemon.stats[2].stat.name}
                                value={pokemon.stats[2].base_stat}
                            />
                        </Card>
                        <Card style={{ marginRight: ".5rem" }}>
                            <Stats
                                name={pokemon.stats[4].stat.name}
                                value={pokemon.stats[4].base_stat}
                            />
                        </Card>
                        <Card>
                            <Stats
                                name={pokemon.stats[3].stat.name}
                                value={pokemon.stats[3].base_stat}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desktop;
