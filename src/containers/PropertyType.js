import React from "react";
import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const PropertyType = () => {
  return (
    <>
      <div>Bienvenue sur la première page 1 "PropertyType"</div>
      <Link to={"/property_condition"}>
        <div>Lien vers la page 2 "PropertyCondition"</div>
      </Link>
    </>
  );
};
export default PropertyType;
