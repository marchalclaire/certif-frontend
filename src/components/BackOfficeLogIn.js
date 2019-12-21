import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BackOfficeLogIn = props => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    await axios
      .post("https://certifclairemarchal.herokuapp.com/backoffice/login", {
        password: password
      })
      //si le statut de la réponse est 200 (=ok) :
      .then(response => {
        if (response.data.message === "ok") {
          props.setShowModal(false);
          history.push("/back_office");
        } else {
          setError(response.data.message);
        }
      })
      //si le statut n'est pas 200 on passe dans le catch
      .catch(error => {
        setError(error.data.message);
      });
  };

  return (
    <>
      <div className="modal">
        <span
          className="icon-close"
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          x
        </span>
        <div className="modal-content">
          <div className="modal-wrapper">
            <div className="modal-main-title">
              Connexion à votre espace Admin
            </div>
            <div className="modal-underline"></div>
            <div className="modal-input">
              <div className="m-title">Mot de passe</div>
              <input
                className="m-input"
                type="password"
                onChange={event => setPassword(event.target.value)}
              ></input>
            </div>
            <div
              className="m-button"
              onClick={() => {
                login();
              }}
            >
              Se connecter
            </div>

            <div className="logIn-error">{error ? error : ""} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackOfficeLogIn;
