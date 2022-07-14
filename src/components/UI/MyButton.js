import React from "react";
import { Button } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import classes from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <Button
      className={classes.myButton}
      onClick={props.onButtonClick}
      style={props.style}
      type={props.type}
    >
      <Typography style={{ fontWeight: "bold" }}>{props.text}</Typography>
    </Button>
  );
};

export default MyButton;
