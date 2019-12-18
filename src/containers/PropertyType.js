import React, { useState } from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

const PropertyType = props => {
  // const [isSelected, setIsSelected] = useState(false);
  const setState = value => {
    props.setPropertyType(value);
    Cookies.set("propertyType", value);
  };
  return (
    <>
      <div className="wrapper">
        <div className="main-title">type de bien</div>

        <div className="property-type-box-container">
          <div className="property-type-box">
            <input
              type="radio"
              id="property-type-1"
              name="property-type"
              value="house"
              // si état === "house", on sait que le radio a été coché precedemment et on veut qu'il le reste malgré un changement de page.
              checked={props.propertyType === "house"}
              // au clic sur radio, on set l'état et conserve la donnée dans un cookie :
              onChange={event => {
                setState(event.target.value);
              }}
            >
              {/* {setIsSelected(true)} */}
            </input>
            <label className="property-type-text" for="property-type-1">
              maison
            </label>
          </div>
          <div className="property-type-box">
            <input
              type="radio"
              id="property-type-2"
              name="property-type"
              value="flat"
              checked={props.propertyType === "flat"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label className="property-type-text" for="property-type-2">
              appartement
            </label>
          </div>
        </div>
        <Footer
          //on envoie au Footer les props suivantes pour la navigation : Lien de la page suivante + Un booléen (permettant ou non l'affichage du bouton "Précédent") + L'état "propertyType" (permettant ou non l'affichage du bouton "Suivant")
          link={"/property_condition"}
          disableButtonPrevious={true}
          displayButtonNext={props.propertyType}
        ></Footer>
      </div>
    </>
  );
};
export default PropertyType;
