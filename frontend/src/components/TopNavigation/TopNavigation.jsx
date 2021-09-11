import React, { Fragment, useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import whiteLogo from "../../assets/images/logo_white.png";
import blackLogo from "../../assets/images/logo_black.png";
import { NavLink } from "react-router-dom";

const TopNavigation = ({ title }) => {
  const [navbarLogo, setNavbarLogo] = useState([whiteLogo]);
  const [navbarBack, setNavbarBack] = useState("navBackground");
  const [navbarItem, setNavbarItem] = useState("navItem");
  const [navVariant, setNavVariant] = useState("dark");
  const [pageTitle, setPageTitle] = useState(title);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setNavbarLogo([blackLogo]);
      setNavbarBack("navBackgroundScroll");
      setNavbarItem("navItemScroll");
      setNavVariant("light");
    } else if (window.scrollY < 100) {
      setNavbarLogo([whiteLogo]);
      setNavbarBack("navBackground");
      setNavbarItem("navItem");
      setNavVariant("dark");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <title>{title}</title>
      <Navbar
        className={navbarBack}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant={navVariant}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={navbarLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={navbarItem}
                  to="/"
                >
                  HOME
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={navbarItem}
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={navbarItem}
                  to="/services"
                >
                  SERVICES
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={navbarItem}
                  to="/courses"
                >
                  COURSES
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={navbarItem}
                  to="/portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={navbarItem}
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default TopNavigation;
