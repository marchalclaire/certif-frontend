import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Footer = props => {
  const history = useHistory();
  return (
    <>
      <div className="footer-nav">
        {/* permet l'affichage ou non du bouton "Précédent" (exclu de la page 1). Booléen à true = props transmise de la page "PropertyType" : */}
        {props.disableButtonPrevious === true ? (
          <div></div>
        ) : (
          <div
            className="footer-button-previous"
            onClick={() => {
              //permet le retour à la page précédente, puis on enrgistre la page sur laquelle on va dans un cookie pour pouvoir revenir à cette étape en cas de coupure du navigateur :
              history.push(props.previousLink);
              Cookies.set("currentPage", props.previousLink);
            }}
          >
            Précédent
          </div>
        )}
        {/* props recupérée des containers, si l'état n'existe pas cela signifie que rien n'a été coché ou remplie, on ne permet la navigation vers la page suivante en ne mettant pas de bouton "Suivant". */}
        {!props.displayButtonNext ? (
          <div></div>
        ) : (
          <div
            className="footer-button-next"
            onClick={() => {
              history.push(props.link);
              Cookies.set("currentPage", props.link);
            }}
          >
            Suivant
          </div>
        )}
      </div>
      <div>
        <span className="footer-text">* Champ obligatoire - </span>
        <span className="footer-text underline"> Mentions Légales</span>
      </div>
    </>
  );
};
export default Footer;
