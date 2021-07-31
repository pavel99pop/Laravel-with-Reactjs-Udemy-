import React, { Fragment, useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import whiteLogo from "../../assets/images/logo_white.png";
import blackLogo from "../../assets/images/logo_black.png";

const TopNavigation = () => {
  const [navbarLogo, setNavbarLogo] = useState([whiteLogo]);
  const [navbarBack, setNavbarBack] = useState("navBackground");
  const [navbarItem, setNavbarItem] = useState("navItem");

  const onScroll = () => {
    if (window.scrollY > 100) {
      setNavbarLogo([blackLogo]);
      setNavbarBack("navBackgroundScroll");
      setNavbarItem("navItemScroll");
    } else if (window.scrollY < 100) {
      setNavbarLogo([whiteLogo]);
      setNavbarBack("navBackground");
      setNavbarItem("navItem");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <Navbar
        className={navbarBack}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={navbarLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className={navbarItem} href="#deets">
                HOME
              </Nav.Link>
              <Nav.Link className={navbarItem} href="#deets">
                ABOUT
              </Nav.Link>
              <Nav.Link className={navbarItem} href="#deets">
                SERVICES
              </Nav.Link>
              <Nav.Link className={navbarItem} href="#deets">
                COURSES
              </Nav.Link>
              <Nav.Link className={navbarItem} href="#deets">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className={navbarItem} href="#deets">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default TopNavigation;
