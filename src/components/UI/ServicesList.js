import React from "react";
import { Box } from "@mui/system";
import { Heading } from "./Heading";

export const ServicesList = () => {
  return (
    <Box style={{ backgroundColor: "var(--color-dark-blue)" }}>
        
      <Heading
          miniTitle="Cílová skupina"
          title="Jaké služby nabízíme?"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-white)"
          variant="h4"
        />
    </Box>
  );
};
