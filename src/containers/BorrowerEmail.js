import React, { useState } from "react";
import Desktop from "../images/visuel-desktop-email.jpg";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BorrowerEmail = props => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const history = useHistory();
  const submit = event => {
    sendData();
    event.preventDefault();
  };

  const sendData = () => {
    const response = axios
      .post("http://localhost:4001/simulation/create/", props.globalState)
      .then(response => {
        const state = { ...props.globalState };
        state.fileNumber = response.data;
        props.setGlobalState(state);
        history.push("/file_number");
      })

      .catch(error => {});
  };
  return (
    <>
      <div className="wrapper">
        <div className="main-title">vos coordonnées</div>
        <div className="email-container">
          <div className="email-container-text">
            <div className="email-text">
              Un devis vous sera envoyé par mail avec un récapitulatif de votre
              demande
            </div>
          </div>
          <img className="email-img" src={Desktop} alt={Desktop}></img>
        </div>
        <form onSubmit={submit}>
          <div className="country-container">
            <div className="form-element-label">
              Adresse e-mail emprunteur *
            </div>
            <input
              className="email-form-element"
              type="email"
              name="borrower-email"
              required
              value={props.globalState.borrowerEmail}
              onChange={event => {
                const state = { ...props.globalState };
                state.borrowerEmail = event.target.value;
                props.setGlobalState(state);
                Cookies.set("borrowerEmail", event.target.value);
              }}
            ></input>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              onChange={() => {
                setCheckBoxValue(!checkBoxValue);
              }}
            ></input>
            <span className="email-text-container">
              J'accepte de recevoir par mail des propositions de Meilleurtaux.
            </span>
          </div>
          <div className="footer-nav">
            <div
              className="footer-button-previous"
              onClick={() => {
                history.push("/project_estimated_amount");
                Cookies.set("currentPage", "/project_estimated_amount");
              }}
            >
              Précédent
            </div>
            {checkBoxValue && props.globalState.borrowerEmail ? (
              <input
                type="submit"
                value="Valider"
                className="footer-button-next"
              ></input>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            <span className="footer-text">* Champ obligatoire - </span>
            <span className="footer-text underline"> Mentions Légales</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default BorrowerEmail;
