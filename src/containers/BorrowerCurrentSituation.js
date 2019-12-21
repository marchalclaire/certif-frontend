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
              props.globalState.borrowerCurrentSituation === "locataire"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-1"
              name="property-borrower-situation"
              value="locataire"
              checked={
                props.globalState.borrowerCurrentSituation === "locataire"
              }
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation === "locataire"
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
              props.globalState.borrowerCurrentSituation === "propriétaire"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-2"
              name="property-borrower-situation"
              value="propriétaire"
              checked={
                props.globalState.borrowerCurrentSituation === "propriétaire"
              }
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation === "propriétaire"
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
              props.globalState.borrowerCurrentSituation ===
              "bénéficiare d'un logement de fonction"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-3"
              name="property-borrower-situation"
              value="bénéficiare d'un logement de fonction"
              checked={
                props.globalState.borrowerCurrentSituation ===
                "bénéficiare d'un logement de fonction"
              }
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation ===
                "bénéficiare d'un logement de fonction"
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
              props.globalState.borrowerCurrentSituation ===
              "hébergé à titre gratuit"
                ? "property-borrower-situation-box selected"
                : "property-borrower-situation-box"
            }
          >
            <input
              type="radio"
              id="property-borrower-situation-4"
              name="property-borrower-situation"
              value="hébergé à titre gratuit"
              checked={
                props.globalState.borrowerCurrentSituation ===
                "hébergé à titre gratuit"
              }
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.borrowerCurrentSituation ===
                "hébergé à titre gratuit"
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
