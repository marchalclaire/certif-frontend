import React from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const PropertyType = props => {
  //on crée une copie de l'état global qu'on valorise puis on re-set ce nouvel état global. On conserve la donnée dans un cookie.
  const setState = value => {
    const state = { ...props.globalState };
    state.propertyType = value;
    props.setGlobalState(state);
    Cookies.set("propertyType", value);
  };
  return (
    <>
      <div className="wrapper">
        <div className="main-title">type de bien</div>

        <div className="property-type-box-container">
          <div
            className={
              props.globalState.propertyType === "house"
                ? "property-type-box selected"
                : "property-type-box"
            }
          >
            <input
              type="radio"
              id="property-type-1"
              name="property-type"
              value="house"
              // si état === "house", on sait que le radio a été coché precedemment et on veut qu'il le reste malgré un changement de page.
              checked={props.globalState.propertyType === "house"}
              // au clic sur radio, on set l'état :
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyType === "house"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-type-1"
            >
              maison
            </label>
          </div>
          <div
            className={
              props.globalState.propertyType === "flat"
                ? "property-type-box selected"
                : "property-type-box"
            }
          >
            <input
              type="radio"
              id="property-type-2"
              name="property-type"
              value="flat"
              checked={props.globalState.propertyType === "flat"}
              onChange={event => {
                setState(event.target.value);
              }}
            ></input>
            <label
              className={
                props.globalState.propertyType === "flat"
                  ? "property-type-text checked"
                  : "property-type-text"
              }
              for="property-type-2"
            >
              appartement
            </label>
          </div>
        </div>
        <Footer
          //on envoie au Footer les props suivantes pour la navigation : Lien de la page suivante + Un booléen (permettant ou non l'affichage du bouton "Précédent") + "propertyType" (permettant ou non l'affichage du bouton "Suivant")
          link={"/property_condition"}
          disableButtonPrevious={true}
          displayButtonNext={props.globalState.propertyType}
        ></Footer>
      </div>
    </>
  );
};
export default PropertyType;
