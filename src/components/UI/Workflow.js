import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";
import { Step } from "./Step";
import { Box } from "@mui/system";

export const Workflow = () => {
  return (
    <Container>
      <Box pb={7}>
        <Heading
          miniTitle="Postup"
          title="Jak vypadá práce s námi?"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
          variant="h4"
        />

        <Step
          isLeftAligned={false}
          number="01."
          title="Analýza a požadavky"
          text="Hned po připojení do sítě pošleme veškerou dokumentaci na Státní fond životního prostředí. Jakmile úředníci dokumenty zpracují, vyplatí vám dotaci na účet."
        />
        <Step
          isLeftAligned={true}
          number="02."
          title="Instalace"
          text="Hned po připojení do sítě pošleme veškerou dokumentaci na Státní fond životního prostředí. Jakmile úředníci dokumenty zpracují, vyplatí vám dotaci na účet."
        />
        <Step
          isLeftAligned={false}
          number="03."
          title="Vyplacení dotace"
          text="Hned po připojení do sítě pošleme veškerou dokumentaci na Státní fond životního prostředí. Jakmile úředníci dokumenty zpracují, vyplatí vám dotaci na účet."
        />
        <Step
          isLeftAligned={true}
          number="04."
          title="Zachování kontaktu"
          text="Hned po připojení do sítě pošleme veškerou dokumentaci na Státní fond životního prostředí. Jakmile úředníci dokumenty zpracují, vyplatí vám dotaci na účet."
        />
      </Box>
    </Container>
  );
};
