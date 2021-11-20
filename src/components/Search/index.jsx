import React from "react";
import classes from "./styles.module.css";

const Search = (props) => {
    return (
        <form className={classes.form} onSubmit={e=> e.preventDefault()}>
            <input
                type="text"
                id="searchPokemon"
                name="searchPokemon"
                placeholder="Search pokemon..."
                className={classes.input}
                onChange={props.onChange}
                value={props.value}
            />
        </form>
    );
};

export default Search;
