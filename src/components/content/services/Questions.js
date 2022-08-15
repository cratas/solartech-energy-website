import React, { useState } from "react";
import { Box } from "@mui/system";
import { Heading } from "../../UI/Heading";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "react-bootstrap";

export const Questions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box style={{ backgroundColor: "var(--color-pure-white)" }} pb={6}>
      <Container>
        <Heading
          miniTitle="Dotazy"
          title="Nejčastěji kladené dotazy"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
          variant="h4"
        />

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{
            border: "none",
            boxShadow: "none",
            backgroundColor:
              expanded === "panel1"
                ? "var(--color-dark-blue)"
                : "var(--color-white)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              color={
                expanded === "panel1"
                  ? "var(--color-white)"
                  : "var(--color-dark-blue)"
              }
              width="5%"
            >
              01
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              color={
                expanded === "panel1"
                  ? "var(--color-white)"
                  : "var(--color-dark-blue)"
              }
            >
              Co je to fotovoltaická elektrárna?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color={
                expanded === "panel1"
                  ? "var(--color-light-grey)"
                  : "var(--color-dark-blue)"
              }
              pl={"5%"}
            >
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{
            border: "none",
            backgroundColor: "var(--color-white)",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>02</Typography>
            <Typography>You are currently not an owner</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{
            border: "none",
            backgroundColor: "var(--color-white)",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography>03</Typography>
            <Typography>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};
