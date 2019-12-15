import React from "react";
import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const BorrowerCurrentSituation = () => {
  return (
    <>
      <div>Bienvenue sur la page 4 "BorrowerCurrentSituation"</div>
      <Link to={"/property_country_city"}>
        <div>Lien vers la page 5 "PropertyCountryCity"</div>
      </Link>
    </>
  );
};
export default BorrowerCurrentSituation;
