import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const ListItem = ({text}) => {
  return (
    <Box mt={3} display="flex" alignItems={"center"}>
      <FaCheckSquare color="var(--color-light-blue)" size={30} />
      <Typography
        variant="h5"
        color="var(--color-dark-blue)"
        ml={2}
        fontWeight={"bold"}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ListItem;
