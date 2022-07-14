import React from "react";
import { Button } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import classes from "./MyButton.module.css";

const MyButton = (props) => {
  const buttonStyle =
    props.buttonType === "dark"
      ? `${classes.myButton} ${classes.buttonDark} ${props.customStyle}`
      : `${classes.myButton} ${props.customStyle}`;

  return (
    <Button
      className={buttonStyle}
      onClick={props.onButtonClick}
      style={props.style}
      type={props.type}
    >
      <Typography style={{ fontWeight: "bold" }}>{props.text}</Typography>
    </Button>
  );
};

export default MyButton;
