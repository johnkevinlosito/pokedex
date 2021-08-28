import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./styles.module.css";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const portalElement = document.getElementById("overlays");
const PokemonDetail = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;
    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    const displayModal =
        width < breakpoint ? (
            <Mobile
                onClose={props.onClose}
                pokemon={props.pokemon}
                specie={props.specie}
            />
        ) : (
            <Desktop
                onClose={props.onClose}
                pokemon={props.pokemon}
                specie={props.specie}
            />
        );
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(displayModal, portalElement)}
        </>
    );
};

export default PokemonDetail;
