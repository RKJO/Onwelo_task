import React from "react";
import { NavbarBrand, Navbar } from "reactstrap";

import logo from "../logo.svg";

const BaseLayout = (props) => {
  return (
    <>
      <Navbar expand="xs" light className="px-5 bg-onvelo">
        <NavbarBrand href="/">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="navbar-text"> Task Vote app </span>
        </NavbarBrand>
      </Navbar>
      <main className={"main-conteiner"}>{props.children}</main>
      <footer className="py-2 bg-onvelo text-white text-center fixed-bottom">
        Copyright &copy;
        <span className="year"> 2022</span>
      </footer>
    </>
  );
};

export default BaseLayout;
