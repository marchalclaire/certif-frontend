import React, { useState } from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const FileNumber = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-title">et voilà, le formulaire est terminé !</div>
        <div className="email-container"></div>

        <span className="file-number-text">
          Votre numéro de dossier est le :.
        </span>
      </div>
    </>
  );
};

export default FileNumber;
