import React from "react";
import classes from "../UICommon.module.css";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";

export const ServiceCard = ({ text, title, image }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      className={classes.serviceCard}
    >
      <Avatar
        variant={"rounded"}
        alt="The image"
        src={image}
        style={{
          width: "6rem",
          height: "100%",
        }}
      />
      <Typography
        pt={1}
        pb={2}
        variant="h6"
        style={{ fontWeight: "bold", color: "var(--color-dark-blue)" }}
      >
        {title}
      </Typography>
      <Typography
        variant="p"
        style={{
          fontWeight: "500",
          color: "var(--color-grey)",
          maxWidth: "15rem",
          lineHeight: "1.2rem",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
