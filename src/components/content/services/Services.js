import React, { useMemo } from "react";
import { ServicesIntroHeader } from "../../UI/ServicesIntroHeader";
import { ServicesList } from "../../UI/ServicesList";
import { Footer } from "../../UI/Footer";
import { Questions } from "./Questions";

export const Services = () => {
  const elements = useMemo(
    () => (
      <>
        <ServicesIntroHeader />

        <ServicesList />

        <Questions />

        <Footer />
      </>
    ),
    []
  );

  return elements;
};
