import React from "react";
import Logo from "../images/logo.jpg";

const Header = props => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="header-container">
            <div>
              <img src={Logo} alt={Logo}></img>
              <div>Crédit immobilier : 5 mn pour obtenir le meilleur taux</div>
            </div>
            <button
              onClick={() => {
                props.setShowModal(true);
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
