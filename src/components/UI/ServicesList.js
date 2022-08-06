import React from "react";
import { Box } from "@mui/system";
import { Heading } from "./Heading";
import { Service } from "./Service";

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

      <Service />
      <Service />

    </Box>
  );
};
