import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";

export const SocialSitesContact = () => {
  return (
    <Box backgroundColor="var(--color-dark-blue)" p={5} textAlign="center">
      <Typography
        variant="h4"
        color="var(--color-pure-white)"
        fontWeight="bold"
      >
        Sledujte nás na sociálních sítích
      </Typography>
      <Box mt={3}>
        <SocialIcon
          url="https://instagram.com/in/jaketrent"
          bgColor="var(--color-white)"
          style={{ height: 35, width: 35, marginRight: "1rem" }}
        />
        <SocialIcon
          url="https://facebook.com/in/jaketrent"
          bgColor="var(--color-white)"
          style={{ height: 35, width: 35, marginRight: "1rem" }}
        />
        <SocialIcon
          url="https://email.com/in/jaketrent"
          bgColor="var(--color-white)"
          style={{ height: 35, width: 35 }}
        />
      </Box>
    </Box>
  );
};
