import React from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

const BorrowerCurrentSituation = props => {
  const setState = value => {
    props.setBorrowerCurrentSituation(value);
    Cookies.set("borrowerCurrentSituation", value);
  };
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
              checked={props.borrowerCurrentSituation === "tenant"}
              onChange={event => {
                setState(event.target.value);
              }}
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
              checked={props.borrowerCurrentSituation === "owner"}
              onChange={event => {
                setState(event.target.value);
              }}
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
              checked={props.borrowerCurrentSituation === "staff housing"}
              onChange={event => {
                setState(event.target.value);
              }}
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
              checked={props.borrowerCurrentSituation === "free accomodation"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className="property-type-text"
              for="property-borrower-situation-4"
            >
              hébergé à titre gratuit
            </label>
          </div>
        </div>
        <Footer
          link={"/property_country_city"}
          displayButtonNext={props.borrowerCurrentSituation}
        ></Footer>
      </div>
    </>
  );
};

export default BorrowerCurrentSituation;
