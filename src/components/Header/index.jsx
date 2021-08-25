import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import Logo from "../../assets/Logo.png";
import BurgetBtn from "../../assets/BurgerBtn.png";
import Nav from "../Nav";
import MobileNav from "../Nav/MobileNav";

const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setShowMobileNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });
    const showMobileNavHandler = () => {
        setShowMobileNav(!showMobileNav);
        setIsMobile(true);
    };
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Pokemon Logo"
                        className={classes.logo}
                    />
                </Link>
                <div className={classes.navbar}>
                    <Nav />
                </div>
                {showMobileNav && isMobile && (
                    <MobileNav onClose={showMobileNavHandler} />
                )}
                <button
                    className={classes.navMenuBtn}
                    onClick={showMobileNavHandler}
                >
                    <img src={BurgetBtn} alt="" />
                </button>
            </div>
        </header>
    );
};

export default Header;
