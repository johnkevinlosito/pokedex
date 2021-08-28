import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import PokemonList from "../../components/PokemonList";
import classes from "./styles.module.css";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon/?limit=18"
    );
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        setLoading(true);
        try {
            fetch(currentUrl, { signal: abortController.signal })
                .then((response) => response.json())
                .then((data) => {
                    setNextUrl(data.next);
                    setPrevUrl(data.previous);
                    const results = data.results;
                    const pokemonData = results.map((result) => {
                        return fetch(result.url).then((response) =>
                            response.json()
                        );
                    });
                    return Promise.all(pokemonData);
                })
                .then((data) => {
                    setPokemons(data);
                    setLoading(false);
                });
        } catch (e) {}

        // const fetchPokemonData = async (url) => {
        //     const response = await fetch(url);
        //     const res = await response.json();
        //     setPokemons((prev) => [...prev, res]);
        // };
        // const fetchPokemons = async () => {
        //     const response = await fetch(currentUrl);
        //     const res = await response.json();
        //     res.results.map((pokemon) => fetchPokemonData(pokemon.url));
        // };
        // fetchPokemons();
        return () => {
            abortController.abort();
        };
    }, [currentUrl]);

    const goToNextPageHandler = () => {
        setCurrentUrl(nextUrl);
    };
    const goToPrevPageHandler = () => {
        setCurrentUrl(prevUrl);
    };
    if (loading) return <Loading />;

    return (
        <section className={classes.pokedex}>
            <Container className={classes.pokedex_list}>
                <PokemonList pokemons={pokemons} />
            </Container>
            <Pagination
                goToPrevPage={prevUrl ? goToPrevPageHandler : null}
                goToNextPage={nextUrl ? goToNextPageHandler : null}
            />
        </section>
    );
};

export default Pokedex;
