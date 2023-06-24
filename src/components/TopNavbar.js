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
import StaySpotterLogo from "../assets/img/sslogo.png";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar
      className="top-navbar"
      sticky="top"
      expand="md"
      // style={{ display: "flex", justifyContent: "center" }}
    >
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
        style={menuOpen ? { paddingLeft: "20%" } : {}}
      >
        <div
          className="mx-auto custom-nav-wrapper"
          style={{ paddingRight: "25%" }}
        >
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <span className="nav-item-content">
                  {" "}
                  <i className="fa fa-home fa-lg icon" /> Home
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/listings">
                <span className="nav-item-content">
                  <i className="fa fa-list fa-lg icon" /> Listings
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <span className="nav-item-content">
                  <i className="fa fa-info fa-lg icon" /> About
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <span className="nav-item-content">
                  <i className="fa fa-address-card fa-lg icon" /> Contact Us
                </span>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default TopNavbar;
