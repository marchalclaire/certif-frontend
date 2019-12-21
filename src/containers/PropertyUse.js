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
              props.globalState.propertyUse === "résidence principale"
                ? "property-use-box selected"
                : "property-use-box"
            }
          >
            <input
              type="radio"
              id="property-use-1"
              name="property-use"
              value="résidence principale"
              checked={props.globalState.propertyUse === "résidence principale"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyUse === "résidence principale"
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
              props.globalState.propertyUse === "résidence secondaire"
                ? "property-use-box selected"
                : "property-use-box"
            }
          >
            <input
              type="radio"
              id="property-use-2"
              name="property-use"
              value="résidence secondaire"
              checked={props.globalState.propertyUse === "résidence secondaire"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyUse === "résidence secondaire"
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
              props.globalState.propertyUse === "investissement locatif"
                ? "property-use-box selected"
                : "property-use-box"
            }
          >
            <input
              type="radio"
              id="property-use-3"
              name="property-use"
              value="investissement locatif"
              checked={
                props.globalState.propertyUse === "investissement locatif"
              }
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyUse === "investissement locatif"
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
          previousLink="/property_condition"
          link={"/borrower_current_situation"}
          displayButtonNext={props.globalState.propertyUse}
        ></Footer>
      </div>
    </>
  );
};

export default PropertyUse;
