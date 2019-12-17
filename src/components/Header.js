import React from "react";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <img src={Logo} alt={Logo}></img>
          <div>Crédit immobilier : 5 mn pour obtenir le meilleur taux</div>
        </div>
      </div>
    </>
  );
};
export default Header;
