import React from "react";
import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const ProjectEstimatedAmount = () => {
  return (
    <>
      <div>Bienvenue sur la page 6 "ProjectEstimatedAmount"</div>
      <Link to={"/borrower_email"}>
        <div>Lien vers la page 7 "BorrowerEmail"</div>
      </Link>
    </>
  );
};
export default ProjectEstimatedAmount;
