import React from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const PropertyCondition = props => {
  const setState = value => {
    props.setPropertyCondition(value);
    Cookies.set("propertyCondition", value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-title">état du bien</div>

        <div className="property-type-box-container">
          <div
            className={
              props.propertyCondition === "old"
                ? "property-type-box selected"
                : "property-type-box"
            }
          >
            <input
              type="radio"
              id="property-condition-1"
              name="property-condition"
              value="old"
              // si état === "old", on sait que le radio a été coché precedemment et on veut qu'il le reste malgré un changement de page.
              checked={props.propertyCondition === "old"}
              // au clic sur radio, on set l'état et conserve la donnée dans un cookie :
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.propertyCondition === "old"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-condition-1"
            >
              ancien
            </label>
          </div>
          <div
            className={
              props.propertyCondition === "new"
                ? "property-type-box selected"
                : "property-type-box"
            }
          >
            <input
              type="radio"
              id="property-condition-2"
              name="property-condition"
              value="new"
              // si état === "new", on sait que le radio a été coché precedemment et on veut qu'il le reste malgré un changement de page.
              checked={props.propertyCondition === "new"}
              // au clic sur radio, on set l'état et conserve la donnée dans un cookie :
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.propertyCondition === "new"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-condition-2"
            >
              neuf
            </label>
          </div>
        </div>
        {/* on envoie au Footer les props suivantes pour la navigation : Lien de la page suivante + L'état "propertyCondition" (permettant ou non l'affichage du bouton "Suivant") */}
        <Footer
          link="/property_use"
          displayButtonNext={props.propertyCondition}
        ></Footer>
      </div>
    </>
  );
};
export default PropertyCondition;
