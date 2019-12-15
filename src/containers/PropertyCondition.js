import React from "react";
import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";

// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const PropertyCondition = () => {
  return (
    <>
      <div>Bienvenue sur la page 2 "PropertyCondition"</div>
      <Link to={"/property_use"}>
        <div>Lien vers la page 3 "PropertyUse"</div>
      </Link>
    </>
  );
};
export default PropertyCondition;
