import { useState, useEffect } from "react";
import NavbarContainer from "./components/navbar/NavbarContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content/Content";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

var theme = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
  },
});

theme = responsiveFontSizes(theme);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

Aos.init({ duration: 500 });

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Router>
            <NavbarContainer />
            <ScrollToTop />
            <Content />
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
