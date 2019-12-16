import React from "react";
import { Link } from "react-router-dom";
// import Card from "../components/Card.js";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

const PropertyType = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-title">type de bien</div>

        <div className="property-type-box-container">
          <input
            type="radio"
            id="property-type-1"
            name="property-type"
            value="maison"
            // checked
          ></input>
          <label for="property-type-1">maison</label>
        </div>
        <div>Bienvenue sur la première page 1 "PropertyType"</div>
        <Link to={"/property_condition"}>
          <div>Lien vers la page 2 "PropertyCondition"</div>
        </Link>
      </div>
    </>
  );
};
export default PropertyType;
