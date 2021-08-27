import React from "react";
import Nav from ".";
import classes from "./MobileNav.module.css";
import Logo from "../../assets/Logo.png";
import CloseIcon from "../../assets/closeIcon.png";

const MobileNav = (props) => {
    return (
        <>
            <div className={classes.backdrop}></div>
            <div className={classes.mobile_nav}>
                <button
                    className={classes.mobileNavMenuBtn}
                    onClick={props.onClose}
                >
                    <img src={CloseIcon} alt="" />
                </button>
                <img src={Logo} alt="Pokemon Logo" className={classes.logo} />
                <Nav showMobileNav={props.onClose} />
            </div>
        </>
    );
};

export default MobileNav;
