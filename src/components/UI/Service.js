import { Box } from "@mui/material";
import React from "react";
import { Avatar, Typography } from "@mui/material";
import MyButton from "./MyButton";

export const Service = ({ title, text, leftAligned, image }) => {
  return (
    <Box
      width="100%"
      display="flex"
      marginBottom={5}
      flexDirection={{ xs: "column", md: leftAligned ? "row-reverse" : "row" }}
      pt={2}
    >
      <Box width={{ xs: "100%", md: "50%" }}>
        <Avatar
          variant={"rounded"}
          alt="The image"
          src={image}
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "25rem",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
            zIndex: "0",
            borderRadius: "0.5rem",
          }}
        />
      </Box>
      <Box
        width={{ xs: "100%", md: "50%" }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        textAlign={{
          xs: "center",
          md: leftAligned ? "right" : "left",
        }}
        alignItems={{
          xs: "center",
          md: leftAligned ? "flex-end" : "flex-start",
        }}
        p={1.5}
      >
        <Typography variant="h4" fontWeight={"bold"} color="var(--color-white)">
          {title}
        </Typography>
        <Box mt={1}>
          <Typography variant="p" color="var(--color-light-grey)">
            {text}
          </Typography>
        </Box>
        <Box mt={4}>
          <MyButton text="Sjednat" />
        </Box>
      </Box>
    </Box>
  );
};
