import React from "react";
import NavbarComponent from "../../../components/common/navbar/NavbarComponent";

function NavbarContainer({ isLoggined }) {
  return <NavbarComponent isLoggined={isLoggined} />;
}

export default NavbarContainer;
