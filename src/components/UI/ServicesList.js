import React from "react";
import { Box } from "@mui/system";
import { Heading } from "./Heading";
import { Service } from "./Service";
import { Container } from "react-bootstrap";
import fullBackUpImage from "../../assets/service1.jpg";
import photovoltaicService from "../../assets/service2.png";
import powerStation from "../../assets/service3.jpg";

export const ServicesList = () => {
  return (
    <Box style={{ backgroundColor: "var(--color-dark-blue)" }} pb={5}>
      <Container>
        <Heading
          miniTitle="Cílová skupina"
          title="Jaké služby nabízíme?"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-white)"
          variant="h4"
        />

        <Service
          title="Fotovoltaické elektrárny"
          text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřešíme za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řeseníza Vás, včetně vyřízení dotací. Nabízíme kompletní řesení."
          leftAligned={true}
          image={photovoltaicService}
        />
        <Service
          title="Nabíjecí stanice"
          text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřešíme za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řeseníza Vás, včetně vyřízení dotací. Nabízíme kompletní řesení."
          leftAligned={false}
          image={powerStation}
        />
        <Service
          title="Full Back up"
          text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřešíme za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řesení za Vás, včetně vyřízení dotací. Nabízíme kompletní řeseníza Vás, včetně vyřízení dotací. Nabízíme kompletní řesení."
          leftAligned={true}
          image={fullBackUpImage}
        />
      </Container>
    </Box>
  );
};
