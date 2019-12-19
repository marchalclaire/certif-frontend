import React, { useState } from "react";
import Footer from "../components/Footer.js";
import Desktop from "../images/visuel-desktop-email.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const BorrowerEmail = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-title">vos coordonnées</div>
        <div className="email-container">
          <div className="email-container-text">
            <div className="email-text">
              Un devis vous sera envoyé par mail avec un récapitulatif de votre
              demande
            </div>
          </div>
          <img className="email-img" src={Desktop} alt={Desktop}></img>
        </div>
        <form className="country-container">
          <div className="form-element-label">Adresse e-mail emprunteur *</div>
          <input
            className="email-form-element"
            type="email"
            name="borrower-email"
            required
            // value="400000"
            // onChange={event => {
            //   props.setPropertyCity(event.target.value);
            //   Cookies.set("propertyCity", event.target.value);
            //   autocomplete(event.target.value);
            // }}
          ></input>
        </form>
        <div className="checkbox-container">
          <input type="checkbox"></input>
          <span className="email-text-container">
            J'accepte de recevoir par mail des propositions de Meilleurtaux.
          </span>
        </div>
        <Footer
          link={"/borrower_email"}
          // displayButtonNext={props.propertyCountry && props.propertyCity}
        ></Footer>
      </div>
      <>
        <div>Bienvenue sur la page 7 "BorrowerEmail"</div>
        <Link to={"/file_number"}>
          <div>Lien vers la page 8 "FileNumber"</div>
        </Link>
      </>
    </>
  );
};

export default BorrowerEmail;
