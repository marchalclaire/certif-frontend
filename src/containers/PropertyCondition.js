import React from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const PropertyCondition = props => {
  const setState = value => {
    const state = { ...props.globalState };
    state.propertyCondition = value;
    props.setGlobalState(state);
    Cookies.set("propertyCondition", value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-title">état du bien</div>

        <div className="property-type-box-container">
          <div
            className={
              props.globalState.propertyCondition === "old"
                ? "property-type-box selected"
                : "property-type-box"
            }
          >
            <input
              type="radio"
              id="property-condition-1"
              name="property-condition"
              value="old"
              checked={props.globalState.propertyCondition === "old"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyCondition === "old"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-condition-1"
            >
              ancien
            </label>
          </div>
          <div
            className={
              props.globalState.propertyCondition === "new"
                ? "property-type-box selected"
                : "property-type-box"
            }
          >
            <input
              type="radio"
              id="property-condition-2"
              name="property-condition"
              value="new"
              checked={props.globalState.propertyCondition === "new"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyCondition === "new"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-condition-2"
            >
              neuf
            </label>
          </div>
        </div>
        <Footer
          link="/property_use"
          displayButtonNext={props.globalState.propertyCondition}
        ></Footer>
      </div>
    </>
  );
};
export default PropertyCondition;
