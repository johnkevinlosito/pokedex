import React from "react";
import classes from "./styles.module.css";

const Pagination = ({ goToPrevPage, goToNextPage }) => {
    return (
        <div className={classes.pagination}>
            {goToPrevPage && (
                <button className={classes.prev} onClick={goToPrevPage}>
                    Previous
                </button>
            )}
            {goToNextPage && (
                <button className={classes.next} onClick={goToNextPage}>
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
