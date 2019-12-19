import React, { useState } from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const ProjectEstimatedAmount = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-title">definissons le montant de votre projet</div>

        <form className="country-container">
          <div className="form-element-label">
            Montant estimé de votre acquisition *
          </div>
          <input
            className="form-element input"
            type="number"
            name="property-estimated-amount"
            required
            // value="400000"
            // onChange={event => {
            //   props.setPropertyCity(event.target.value);
            //   Cookies.set("propertyCity", event.target.value);
            //   autocomplete(event.target.value);
            // }}
          ></input>
          <div className="currency-symbol">€</div>
        </form>
        <form className="city-container">
          <div className="form-element-label">Montant estimé des travaux</div>

          <input
            className="form-element input"
            type="number"
            name="repairs-estimated-amount"
            // value="400000"
            // onChange={event => {
            //   props.setPropertyCity(event.target.value);
            //   Cookies.set("propertyCity", event.target.value);
            //   autocomplete(event.target.value);
            // }}
          ></input>
          <div className="currency-symbol">€</div>
        </form>
        <form className="country-container">
          <div className="form-element-label">Frais de notaire *</div>
          <input
            className="form-element input"
            type="number"
            name="notary-costs"
            required
            // value="400000"
            // onChange={event => {
            //   props.setPropertyCity(event.target.value);
            //   Cookies.set("propertyCity", event.target.value);
            //   autocomplete(event.target.value);
            // }}
          ></input>
          <div className="currency-symbol">€</div>
        </form>
        <form className="city-container margin-bottom">
          <div className="form-element-label">
            Budget total estimé du projet
          </div>

          <input
            className="form-element input"
            type="number"
            name="total-amount"
            required
            // value="400000"
            // onChange={event => {
            //   props.setPropertyCity(event.target.value);
            //   Cookies.set("propertyCity", event.target.value);
            //   autocomplete(event.target.value);
            // }}
          ></input>
          <div className="currency-symbol">€</div>
        </form>

        <Footer
          link={"/borrower_email"}
          // displayButtonNext={props.propertyCountry && props.propertyCity}
        ></Footer>
      </div>
    </>
  );
};

export default ProjectEstimatedAmount;
