import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import PokemonList from "../../components/PokemonList";
import classes from "./styles.module.css";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon/"
    );

    useEffect(() => {
        const fetchPokemonData = async (url) => {
            const response = await fetch(url);
            const res = await response.json();
            setPokemons((prev) => [...prev, res]);
        };
        const fetchPokemons = async () => {
            const response = await fetch(currentUrl);
            const res = await response.json();
            res.results.map((pokemon) => fetchPokemonData(pokemon.url));
        };
        fetchPokemons();
        return () => {};
    }, [currentUrl]);

    return (
        <section className={classes.pokedex}>
            <Container className={classes.pokedex_list}>
                <PokemonList pokemons={pokemons} />
            </Container>
        </section>
    );
};

export default Pokedex;
