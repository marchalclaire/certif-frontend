import React from "react";
import Footer from "../components/Footer.js";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

const BorrowerCurrentSituation = () => {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div className="main-title">votre situation actuelle</div>

        <div className="property-type-box-container">
          <div className="property-borrower-situation-box">
            <input
              type="radio"
              id="property-borrower-situation-1"
              name="property-borrower-situation"
              value="tenant"
            >
              {/* {setIsSelected(true)} */}
            </input>
            <label
              className="property-type-text"
              for="property-borrower-situation-1"
            >
              locataire
            </label>
          </div>
          <div className="property-borrower-situation-box">
            <input
              type="radio"
              id="property-borrower-situation-2"
              name="property-borrower-situation"
              value="owner"
            ></input>
            <label
              className="property-type-text"
              for="property-borrower-situation-2"
            >
              propriétaire
            </label>
          </div>
          <div className="property-borrower-situation-box">
            <input
              type="radio"
              id="property-borrower-situation-3"
              name="property-borrower-situation"
              value="staff housing"
            ></input>
            <label
              className="property-type-text"
              for="property-borrower-situation-3"
            >
              bénéficiare d'un logement de fonction
            </label>
          </div>
          <div className="property-borrower-situation-box">
            <input
              type="radio"
              id="property-borrower-situation-4"
              name="property-borrower-situation"
              value="free accomodation"
            ></input>
            <label
              className="property-type-text"
              for="property-borrower-situation-4"
            >
              hébergé à titre gratuit
            </label>
          </div>
        </div>
        <Footer link={"/property_country_city"}></Footer>
      </div>
    </>
  );
};

export default BorrowerCurrentSituation;
