import React from 'react'
import { Container } from 'react-bootstrap'
import { Box } from '@mui/system'
import { Typography, Divider } from '@mui/material'
import MyButton from './MyButton'

export const IntroHeader = () => {
  return (
    <Container>
    {/* Into text */}
    <Box textAlign="center" pt={5}>
      <Typography
        variant="h1"
        fontWeight={"bold"}
        color={"var(--color-blue)"}
      >
        Šetříme Vaše
        <br />
        peníze za elektřinu
      </Typography>
    </Box>

    <Box display="flex" justifyContent="center">
      <Divider
        style={{
          width: "20%",
          opacity: "100%",
          height: "0.3rem",
          color: "var(--color-yellow)",
          borderRadius: "2rem",
          margin: "1rem",
        }}
      />
    </Box>

    <Box
      textAlign="center"
      pt={2}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box width={"40%"}>
        <Typography
          variant="p"
          fontWeight={"500"}
          color={"var(--color-blue)"}
        >
          Kompletní řešení fotovoltaických elektráren, které jsou schopny
          ušetřit Vám spoustu peněz, vyhnout se inflaci a v neposlední řadě
          přispět k lepšímu životnímu prostředí.
        </Typography>
      </Box>
    </Box>

    <Box textAlign="center" pt={5} pb={5}>
      <MyButton
        text="Zjistit více"
        style={{
          backgroundColor: "var(--color-yellow)",
          border: "var(--color-yellow)",
          color: "var(--color-blue)",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        }}
      />
    </Box>
  </Container>
  )
}
