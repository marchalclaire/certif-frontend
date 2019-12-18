import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// props transmises par chaque page container. Props envoyée = lien de la page suivante servant à la navigation + booléen permettant de masquer le bouton "Précédent")
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
              //permet le retour à la page précédente :
              history.goBack();
            }}
          >
            Précédent
          </div>
        )}
        {/* props recupérée des containers, si l'état n'existe pas cela signifie que rien n'a été coché ou remplie, on ne permet la navigation vers la page suivante en ne mettant pas de bouton "Suivant". */}
        {!props.displayButtonNext ? (
          <div></div>
        ) : (
          <Link className="link" to={props.link}>
            <div className="footer-button-next">Suivant</div>
          </Link>
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
