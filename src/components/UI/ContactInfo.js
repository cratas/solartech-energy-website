import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { ContactInfoCard } from "./Cards/ContactInfoCard";
import { Grid } from "@mui/material";

// icons
import { MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

export const ContactInfo = () => {
  const iconColor = "var(--color-light-blue)";

  return (
    <Container>
      <Heading
        miniTitle="Kontakt"
        title="Kontaktujte nás!"
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-dark-blue)"
        variant="h2"
      />
      <Box textAlign="center" mt={-5}>
        <Typography variant="p" fontWeight={"500"} color="var(--color-grey)">
          Máte-li jakýkoliv dotaz či problém, můžete nás
          <br /> kontaktovat několika způsoby.
        </Typography>
      </Box>

      <Box>
        <Grid container pb={{xs: 3, sm: 5}} mt={{xs: 2, sm: 2, md: 0, xl: 0}} spacing={{xs: 2, sm: 2, md: 5, xl: 5}}>
          <Grid item xs={12} md={4}>
            <ContactInfoCard
              icon={<MdLocationPin size={30} color={iconColor} />}
              text="Bernartice nad Odrou"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactInfoCard
              icon={<AiFillPhone size={30} color={iconColor} />}
              text="+420 662 212 222"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactInfoCard
              icon={<IoMdMail size={30} color={iconColor} />}
              text="blitztech@info.com"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
