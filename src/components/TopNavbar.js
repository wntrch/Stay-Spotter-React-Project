import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import StaySpotterLogo from "../assets/img/logo.png";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className="top-navbar" sticky="top" expand="md">
      <NavbarBrand className="ms-3" href="/">
        <div className="logo-container">
          <img
            src={StaySpotterLogo}
            height="70px"
            width="90px"
            alt="stayspotter logo"
            className="float-start"
          />
          <h1 className="logo-text">StaySpotter</h1>
        </div>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse
        isOpen={menuOpen}
        navbar
        className={menuOpen ? "justify-content-center" : ""}
      >
        {/* <div className="links-container"> */}
        <Nav className="mx-auto nav-center" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/listings">
              <i className="fa fa-list fa-lg" /> Listings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact Us
            </NavLink>
          </NavItem>
        </Nav>
        {/* </div> */}
      </Collapse>
    </Navbar>
  );
};

export default TopNavbar;
