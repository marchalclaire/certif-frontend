import React from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const PropertyUse = props => {
  const setState = value => {
    const state = { ...props.globalState };
    state.propertyUse = value;
    props.setGlobalState(state);
    Cookies.set("propertyUse", value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-title">usage du bien</div>

        <div className="property-type-box-container">
          <div
            className={
              props.globalState.propertyUse === "principal"
                ? "property-use-box selected"
                : "property-use-box"
            }
          >
            <input
              type="radio"
              id="property-use-1"
              name="property-use"
              value="principal"
              checked={props.globalState.propertyUse === "principal"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyUse === "principal"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-use-1"
            >
              résidence principale
            </label>
          </div>
          <div
            className={
              props.globalState.propertyUse === "secondary"
                ? "property-use-box selected"
                : "property-use-box"
            }
          >
            <input
              type="radio"
              id="property-use-2"
              name="property-use"
              value="secondary"
              checked={props.globalState.propertyUse === "secondary"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyUse === "secondary"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-use-2"
            >
              résidence secondaire
            </label>
          </div>
          <div
            className={
              props.globalState.propertyUse === "investment"
                ? "property-use-box selected"
                : "property-use-box"
            }
          >
            <input
              type="radio"
              id="property-use-3"
              name="property-use"
              value="investment"
              checked={props.globalState.propertyUse === "investment"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyUse === "investment"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-use-3"
            >
              investissement locatif
            </label>
          </div>
        </div>
        <Footer
          link={"/borrower_current_situation"}
          displayButtonNext={props.globalState.propertyUse}
        ></Footer>
      </div>
    </>
  );
};

export default PropertyUse;
