import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Heading = ({ miniTitle, title, miniTitleColor, titleColor, variant }) => {

  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      flexDirection="column"
      pt={6}
      pb={6}
      textAlign="center"
    >
      <Typography variant="p" fontWeight="500" color={miniTitleColor}>
        {miniTitle}
      </Typography>
      <Divider
        style={{
          width: "25px",
          opacity: "100%",
          height: "3px",
          backgroundColor: "var(--color-light-grey)",
          borderRadius: "2rem",
          margin: "5px",
          border: "none",
        }}
      />
      <Typography
        variant={variant}
      color={titleColor}
        style={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
    </Box>
  );
};
