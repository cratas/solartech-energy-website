import { useState, React, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import MyButton from "../UI/MyButton";
import classes from "./NavbarContainer.module.css";
import logo from "../../assets/logo.png";

const NavbarContainer = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isToggleActive, setIsToggleActive] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);

  // checking if viewport is on the top of the screen
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setIsOnTop(true) : setIsOnTop(false);

    return () => (window.onscroll = null);
  });

  // change section handler
  const handleChangeSectionLink = (linkName) => {
    setActiveLink(linkName);
  };

  // contact button handler
  const handleButtonClick = (e) => {
    setActiveLink("contact");
  };

  // toggle click handler
  const changeToggleStatus = () => {
    setIsToggleActive((status) => !status);
  };

  // conditional styles for elements
  const navbarToggleClassesFirst = isToggleActive
    ? `${classes.toggleIconLineOne} ${classes.rotateLeft}`
    : classes.toggleIconLineOne;

  const navbarToggleClassesSecond = isToggleActive
    ? `${classes.toggleIconLineTwo} ${classes.rotateRight}`
    : classes.toggleIconLineTwo;

  // custom style variables
  const nonActiveStyle = `${classes.links} nav-link`;
  const activeStyle = `${classes.links} nav-link ${classes.active}`;

  // conditional styles for links
  const homeClasses = activeLink === "home" ? activeStyle : nonActiveStyle;
  const subsidyClasses =
    activeLink === "subsidy" ? activeStyle : nonActiveStyle;
  const servicesClasses =
    activeLink === "services" ? activeStyle : nonActiveStyle;

  const navbarScrollingStyle = isOnTop
    ? classes.navbarContainer
    : `${classes.navbarContainer} ${classes.scrolled}`;

  return (
    <>
      <Navbar sticky="top" expand="lg" className={navbarScrollingStyle}>
        <Container>
          <Navbar.Brand>
            <img src={logo} className={classes.logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle
            className={classes.navbarToggle}
            aria-controls="navbarNavAltMarkup"
            onClick={changeToggleStatus}
          >
            <div className={classes.toggleIcon}>
              <div className={navbarToggleClassesFirst}></div>
              <div className={navbarToggleClassesSecond}></div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Link
                to="/"
                className={homeClasses}
                onClick={() => handleChangeSectionLink("home")}
              >
                <Typography style={{ fontWeight: "bold" }}>Úvod</Typography>
              </Link>

              <Link
                to="/subsidy"
                onClick={() => handleChangeSectionLink("subsidy")}
                className={subsidyClasses}
              >
                <Typography style={{ fontWeight: "bold" }}>Dotace</Typography>
              </Link>

              <Link
                to="/services"
                className={servicesClasses}
                onClick={() => handleChangeSectionLink("services")}
              >
                <Typography style={{ fontWeight: "bold" }}>Služby</Typography>
              </Link>

              <Link to="/contact">
                <MyButton text="Kontakt" onButtonClick={handleButtonClick} />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarContainer;
