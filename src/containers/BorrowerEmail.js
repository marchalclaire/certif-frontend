import React, { useState } from "react";
import Footer from "../components/Footer.js";
import Desktop from "../images/visuel-desktop-email.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import PropertyUse from "./PropertyUse.js";

const BorrowerEmail = props => {
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
            value={props.borrowerEmail}
            onChange={event => {
              props.setBorrowerEmail(event.target.value);
              Cookies.set("borrowerEmail", event.target.value);
            }}
          ></input>
        </form>
        <div className="checkbox-container">
          <input type="checkbox"></input>
          <span className="email-text-container">
            J'accepte de recevoir par mail des propositions de Meilleurtaux.
          </span>
        </div>
        <Footer
          link={"/file_number"}
          displayButtonNext={props.borrowerEmail}
        ></Footer>
      </div>
    </>
  );
};

export default BorrowerEmail;
