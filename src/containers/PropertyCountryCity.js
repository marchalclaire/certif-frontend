import React from "react";
import Footer from "../components/Footer.js";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const PropertyCountryCity = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-title">où se situe le bien à financer ?</div>

        <div className="country-container">
          <div className="form-element-label">
            Dans quel pays se situe votre projet ? *
          </div>
          <select
            className="form-element select"
            name="countries"
            id="country-select"
          >
            <option value="">--Sélectionnez votre pays--</option>
            <option value="country">france</option>
          </select>
        </div>
        <div className="city-container">
          <div className="form-element-label">Ville ou code postal *</div>
          <input className="form-element input"></input>
        </div>
        <div className="text-container">
          La connaissance du code postal du bien permettra de calculer les frais
          de notaire selon les conditions en vigueur dans le département
          concerné.
          <br />
          Si vous êtes en recherche de biens sur plusieurs communes, indiquez
          une commune ciblée.
        </div>
        <Footer link={"/project_estimated_amount"}></Footer>
      </div>
    </>
  );
};
export default PropertyCountryCity;
