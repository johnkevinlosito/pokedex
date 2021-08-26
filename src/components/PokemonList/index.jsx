import React from "react";
import Card from "../Card";
import Stats from "../Stats";
import Type from "../Type";
import classes from "./styles.module.css";

const PokemonList = ({ pokemons }) => {
    return (
        <>
            {pokemons
                .sort((a, b) => a.id - b.id)
                .map((pokemon) => (
                    <Card key={pokemon.id}>
                        <div className={classes.info}>
                            <h2 className={classes.pokemon_name}>
                                {pokemon.name}
                            </h2>
                            <div className={classes.pokemon_stats}>
                                <Stats
                                    name={"Attack"}
                                    value={pokemon.stats[1].base_stat}
                                />
                                <Stats
                                    name={"Defense"}
                                    value={pokemon.stats[2].base_stat}
                                />
                            </div>
                            <div className={classes.pokemon_types}>
                                <Type name={pokemon.types[0].type.name} />
                                {pokemon.types[1] && (
                                    <Type name={pokemon.types[1].type.name} />
                                )}
                            </div>
                        </div>
                        <div
                            className={`${classes.pokemon_img} ${pokemon.types[0].type.name} gradient`}
                        >
                            <img
                                src={
                                    pokemon.sprites.other.dream_world
                                        .front_default
                                }
                                alt=""
                            />
                        </div>
                    </Card>
                ))}
        </>
    );
};

export default PokemonList;
