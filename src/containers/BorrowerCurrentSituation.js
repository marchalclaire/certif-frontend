import React from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const BorrowerCurrentSituation = props => {
  const setState = value => {
    const state = { ...props.globalState };
    state.borrowerCurrentSituation = value;
    props.setGlobalState(state);
    Cookies.set("borrowerCurrentSituation", value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-title">votre situation actuelle</div>

        <div className="property-type-box-container">
          <div
            className={
              props.globalState.borrowerCurrentSituation === "tenant"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-1"
              name="property-borrower-situation"
              value="tenant"
              checked={props.globalState.borrowerCurrentSituation === "tenant"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation === "tenant"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-borrower-situation-1"
            >
              locataire
            </label>
          </div>
          <div
            className={
              props.globalState.borrowerCurrentSituation === "owner"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-2"
              name="property-borrower-situation"
              value="owner"
              checked={props.globalState.borrowerCurrentSituation === "owner"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation === "owner"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-borrower-situation-2"
            >
              propriétaire
            </label>
          </div>
          <div
            className={
              props.globalState.borrowerCurrentSituation === "staff housing"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-3"
              name="property-borrower-situation"
              value="staff housing"
              checked={
                props.globalState.borrowerCurrentSituation === "staff housing"
              }
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation === "staff housing"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-borrower-situation-3"
            >
              bénéficiare d'un logement de fonction
            </label>
          </div>
          <div
            className={
              props.globalState.borrowerCurrentSituation === "free accomodation"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-4"
              name="property-borrower-situation"
              value="free accomodation"
              checked={
                props.globalState.borrowerCurrentSituation ===
                "free accomodation"
              }
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation ===
                "free accomodation"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-borrower-situation-4"
            >
              hébergé à titre gratuit
            </label>
          </div>
        </div>
        <Footer
          previousLink="/property_use"
          link={"/property_country_city"}
          displayButtonNext={props.globalState.borrowerCurrentSituation}
        ></Footer>
      </div>
    </>
  );
};

export default BorrowerCurrentSituation;
