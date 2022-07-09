import React from "react";
import { Button } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import classes from "./MyButton.module.css";
import { FaThumbsUp } from "react-icons/fa";
import Box from '@mui/material/Box';

const MyButton = (props) => {
  return (
    <Button
      className={classes.myButton}
      onClick={props.onButtonClick}
      style={props.style}
      type={props.type}
    >
      {/* <Box display="flex"> */}
        {/* <FaThumbsUp style={{marginRight: '0.5rem'}}/> */}
        <Typography style={{ fontWeight: "bold" }}>{props.text}</Typography>
      {/* </Box> */}
    </Button>
  );
};

export default MyButton;
