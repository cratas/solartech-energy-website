import { Box } from "@mui/material";
import React from "react";
import companyService from "../../assets/company.jpg";
import { Avatar } from "@mui/material";

export const Service = () => {
  return (
    <Box width="100%" display="flex" marginBottom={5}>
        <Box width="50%">
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={companyService}
            style={{
              width: "100%",
              height: "100%",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
              zIndex: "0",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0.5rem",
            }}
          />
        </Box>
        <Box width="50%">sdf</Box>
    </Box>
  );
};
