import React from "react";
import classes from "./DotsDesign.module.css";

export const DotsDesign = ({ variant }) => {
  const colorTheme =
    variant === "BLUE"
      ? { backgroundColor: "var(--color-white)" }
      : { backgroundColor: "var(--color-blue)" };

  const colorThemeDot =
    variant === "BLUE"
      ? { backgroundColor: "var(--color-blue)" }
      : { backgroundColor: "var(--color-yellow)" };

  const lines = (
    <div className={classes.mainDiv} style={colorTheme}>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
    </div>
  );

  return (
    <>
      {lines}
      {lines}
      {lines}
      {lines}
    </>
  );
};
