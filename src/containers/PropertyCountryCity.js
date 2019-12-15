import React from "react";
import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const PropertyCountryCity = () => {
  return (
    <>
      <div>Bienvenue sur la page 5 "PropertyCountryCity"</div>
      <Link to={"/project_estimated_amount"}>
        <div>Lien vers la page 6 "ProjectEstimatedAmount"</div>
      </Link>
    </>
  );
};
export default PropertyCountryCity;
