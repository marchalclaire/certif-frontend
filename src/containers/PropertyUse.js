import React from "react";
import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const PropertyUse = () => {
  return (
    <>
      <div>Bienvenue sur la page 3 "PropertyUse"</div>
      <Link to={"/borrower_current_situation"}>
        <div>Lien vers la page 4 "BorrowerCurrentSituation"</div>
      </Link>
    </>
  );
};
export default PropertyUse;
