import React from "react";
import { ServicesIntroHeader } from "../../UI/ServicesIntroHeader";
import { ServicesList } from "../../UI/ServicesList";
import { Footer } from "../../UI/Footer";
import { Questions } from "./Questions";

export const Services = () => {
  return (
    <>
      <ServicesIntroHeader />

      <ServicesList />

      <Questions />

      <Footer />
    </>
  );
};
