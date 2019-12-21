import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const FileNumber = props => {
  const [fileNumber, setFileNumber] = useState(props.globalState.fileNumber);

  //on met l'état global et cookies à O
  useEffect(() => {
    props.setGlobalState({});
    if (Cookies.get("propertyType")) {
      Cookies.remove("propertyType");
    }
    if (Cookies.get("propertyCondition")) {
      Cookies.remove("propertyCondition");
    }
    if (Cookies.get("propertyUse")) {
      Cookies.remove("propertyUse");
    }
    if (Cookies.get("borrowerCurrentSituation")) {
      Cookies.remove("borrowerCurrentSituation");
    }
    if (Cookies.get("propertyCountry")) {
      Cookies.remove("propertyCountry");
    }
    if (Cookies.get("propertyCity")) {
      Cookies.remove("propertyCity");
    }
    if (Cookies.get("borrowerEmail")) {
      Cookies.remove("borrowerEmail");
    }
    if (Cookies.get("propertyEstimatedAmount")) {
      Cookies.remove("propertyEstimatedAmount");
    }
    if (Cookies.get("repairsEstimatedAmount")) {
      Cookies.remove("repairsEstimatedAmount");
    }
    if (Cookies.get("notaryCosts")) {
      Cookies.remove("notaryCosts");
    }
    if (Cookies.get("totalAmount")) {
      Cookies.remove("totalAmount");
    }
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="main-title">et voilà, le formulaire est terminé !</div>
        <div className="email-container"></div>

        <span className="file-number-text">
          Votre numéro de dossier est le : {fileNumber}.
        </span>
      </div>
    </>
  );
};

export default FileNumber;
