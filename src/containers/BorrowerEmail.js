import React from "react";
import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card.js";
// import London from "../london.jpg";

const BorrowerEmail = () => {
  return (
    <>
      <div>Bienvenue sur la page 7 "BorrowerEmail"</div>
      <Link to={"/file_number"}>
        <div>Lien vers la page 8 "FileNumber"</div>
      </Link>
    </>
  );
};
export default BorrowerEmail;
