import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.css";

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink
                        onClick={props.showMobileNav}
                        activeClassName={classes.active}
                        to="/"
                        exact
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={props.showMobileNav}
                        activeClassName={classes.active}
                        to="/pokedex"
                    >
                        Pokedex
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={props.showMobileNav}
                        activeClassName={classes.active}
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
