import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import classes from "./loader.module.scss";

const Loader = ({ loading }) => {
  return (
    <div className={classes.loader__container}>
      <MoonLoader
        color="#405275"
        size={80}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
