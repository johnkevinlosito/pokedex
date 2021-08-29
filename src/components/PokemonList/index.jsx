import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard";
import Stats from "../Stats";
import Type from "../Type";
import classes from "./styles.module.css";
import PokemonDetail from "../PokemonDetail";
import Loading from "../Loading";

const PokemonList = ({ pokemons }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [pokemonData, setPokemonData] = useState([]);
    const [specie, setSpecie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const showDetailsHandler = (pokemon) => {
        const Pokedex = require("pokeapi-js-wrapper");
        const P = new Pokedex.Pokedex({ cacheImages: true });
        setIsLoading(true);

        const getSpecie = async () => {
            P.resource(pokemon.species.url).then((response) => {
                setSpecie(response);
                setIsLoading(false);
            });
        };
        getSpecie();
        setShowDetails(true);
        setPokemonData(pokemon);
    };
    const hideDetailsHandler = () => {
        setShowDetails(false);
    };

    useEffect(() => {
        showDetails && (document.body.style.overflow = "hidden");
        !showDetails && (document.body.style.overflow = "");
    }, [showDetails]);
    return (
        <>
            {pokemons
                .sort((a, b) => a.id - b.id)
                .map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        onClick={showDetailsHandler}
                        pokemon={pokemon}
                    >
                        <div className={classes.info}>
                            <h2 className={classes.pokemon_name}>
                                {pokemon.name}
                            </h2>
                            <div className={classes.pokemon_stats}>
                                <Stats
                                    style={{ marginRight: "0.8125rem" }}
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
                                        ? pokemon.sprites.other.dream_world
                                              .front_default
                                        : pokemon.sprites.other[
                                              "official-artwork"
                                          ].front_default
                                }
                                alt=""
                            />
                        </div>
                    </PokemonCard>
                ))}

            {showDetails && isLoading && <Loading />}
            {showDetails && !isLoading && (
                <PokemonDetail
                    onClose={hideDetailsHandler}
                    pokemon={pokemonData}
                    specie={specie}
                />
            )}
        </>
    );
};

export default PokemonList;
