import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import NoPokemon from "../../components/NoPokemon";
import Pagination from "../../components/Pagination";
import PokemonList from "../../components/PokemonList";
import Search from "../../components/Search";
import classes from "./styles.module.css";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon/?limit=18"
    );
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [loading, setLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const Pokedex = require("pokeapi-js-wrapper");
        const P = new Pokedex.Pokedex({ cacheImages: true });

        setLoading(true);
        try {
            P.getPokemonsList().then(function (response) {
                setAllPokemon(response.results);
            });
            P.resource(currentUrl)
                .then(function (response) {
                    setNextUrl(response.next);
                    setPrevUrl(response.previous);
                    const results = response.results;
                    const pokemonData = results.map((result) => {
                        return P.resource(result.url).then(function (response) {
                            return response;
                        });
                    });
                    return Promise.all(pokemonData);
                })
                .then((data) => {
                    setPokemons(data);
                    setLoading(false);
                });
        } catch (e) {}

        return () => {};
    }, [currentUrl]);

    useEffect(() => {
        setIsSearching(true);
        const Pokedex = require("pokeapi-js-wrapper");
        const P = new Pokedex.Pokedex();
        if (searchValue === "") {
            setIsSearching(false);
            setFilteredPokemon([]);
        }
        const timeoutId = setTimeout(() => {
            if (searchValue !== "") {
                setFilteredPokemon([]);
                allPokemon.reduce((previousValue, currentValue) => {
                    if (currentValue.name.includes(searchValue)) {
                        P.getPokemonByName(currentValue.name)
                            .then(function (response) {
                                return response;
                            })
                            .then((response) => {
                                setFilteredPokemon([
                                    ...previousValue,
                                    response,
                                ]);
                                previousValue.push(response);
                            });
                    }
                    return previousValue;
                }, []);
            }
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchValue, allPokemon]);

    const goToNextPageHandler = () => {
        setCurrentUrl(nextUrl);
    };
    const goToPrevPageHandler = () => {
        setCurrentUrl(prevUrl);
    };

    const searchHandler = (e) => {
        setSearchValue(e.target.value);
    };
    if (loading) return <Loading />;
    return (
        <section className={classes.pokedex}>
            <Search onChange={searchHandler} value={searchValue} />
            <Container className={classes.pokedex_list}>
                {isSearching && filteredPokemon.length === 0 && <NoPokemon />}
                {isSearching && filteredPokemon.length > 0 && (
                    <PokemonList pokemons={filteredPokemon} />
                )}
                {!isSearching && <PokemonList pokemons={pokemons} />}
            </Container>
            {!isSearching && (
                <Pagination
                    goToPrevPage={prevUrl ? goToPrevPageHandler : null}
                    goToNextPage={nextUrl ? goToNextPageHandler : null}
                />
            )}
        </section>
    );
};

export default Pokedex;
