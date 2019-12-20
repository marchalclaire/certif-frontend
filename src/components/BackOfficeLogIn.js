import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BackOfficeLogIn = props => {
  //   const [password, setPassword] = useState("");
  //   const [isError, setIsError] = useState(false);

  //   const login = async () => {
  //     await axios
  //       .post("http://localhost:4000/api/user/log_in", {
  //         password: password
  //       })
  //       //si le statut de la réponse est 200 (=ok) :
  //       .then(response => {
  //         console.log(response.data);
  //         props.onLogInSuccess(response.data.token);
  //       })
  //       //si le statut n'est pas 200 on passe dans le catch (pas obligatoire de noter error dans le cas ci-dessous)
  //       .catch(error => {
  //         setIsError(true);
  //       });
  //   };

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
                // onChange={event => setPassword(event.target.value)}
              ></input>
            </div>
            {/* <div className="m-button bold" onClick={() => login()}> */}
            <Link className="link" to={"/back_office"}>
              <div className="m-button">
                <span onClick={() => props.setShowModal(false)}>
                  Se connecter
                </span>
              </div>
            </Link>

            {/* <div className="logIn-error">
              {isError ? "Mot de passe inconnu" : ""}{" "}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackOfficeLogIn;
