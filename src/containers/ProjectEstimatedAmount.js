import React, { useEffect } from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const ProjectEstimatedAmount = props => {
  //on utilise un useEffect afin que chaque état se mette à jour à chaque changement d'état (nouvelle donnée entrée dans l'input). On évite le pb de l'asyncrone entre mise à jour de chaque état et calculs.
  useEffect(() => {
    calculate();
  }, [props.propertyEstimatedAmount, props.repairsEstimatedAmount]);

  //on crée une fonction pour calculer les frais de notaire et la somme totale :
  const calculate = () => {
    let total = 0;
    let notaryCosts = 0;
    if (props.propertyEstimatedAmount) {
      if (props.propertyCondition === "new") {
        notaryCosts = Number(props.propertyEstimatedAmount) * 0.018;
      } else {
        notaryCosts = Number(props.propertyEstimatedAmount) * 0.0738;
      }
      total = total + Number(props.propertyEstimatedAmount) + notaryCosts;
    }
    if (props.repairsEstimatedAmount) {
      total = total + Number(props.repairsEstimatedAmount);
    }

    //on set les états complétés suite aux calculs et on conserve les données dans les cookies :
    props.setNotaryCosts(notaryCosts);
    Cookies.set("notaryCosts", notaryCosts);
    props.setTotalAmount(total);
    Cookies.set("totalAmount", total);
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-title">definissons le montant de votre projet</div>

        <form className="country-container">
          <div className="form-element-label">
            Montant estimé de votre acquisition *
          </div>
          <input
            className="form-element input right"
            type="number"
            name="property-estimated-amount"
            min="0"
            required
            value={props.propertyEstimatedAmount}
            onChange={event => {
              props.setPropertyEstimatedAmount(event.target.value);
              Cookies.set("propertyEstimatedAmount", event.target.value);
            }}
          ></input>
          <div className="currency-symbol">€</div>
        </form>
        <form className="city-container">
          <div className="form-element-label">Montant estimé des travaux</div>

          <input
            className="form-element input right"
            type="number"
            name="repairs-estimated-amount"
            value={props.repairsEstimatedAmount}
            onChange={event => {
              props.setRepairsEstimatedAmount(event.target.value);
              Cookies.set("repairsEstimatedAmount", event.target.value);
            }}
          ></input>
          <div className="currency-symbol">€</div>
        </form>
        <form className="country-container">
          <div className="form-element-label">Frais de notaire *</div>
          <input
            className="form-element input right"
            type="number"
            name="notary-costs"
            readOnly
            value={props.notaryCosts}
          ></input>
          <div className="currency-symbol">€</div>
        </form>
        <form className="city-container margin-bottom">
          <div className="form-element-label">
            Budget total estimé du projet
          </div>

          <input
            className="form-element input right"
            type="number"
            name="total-amount"
            readOnly
            value={props.totalAmount}
          ></input>
          <div className="currency-symbol">€</div>
        </form>

        <Footer
          link={"/borrower_email"}
          //on envoie au Footer "props.propertyEstimatedAmount" dans le but de pouvoir afficher le bouton "Suivant" et la navigation vers la page suivante. En effet si le champ "Montant estimé de votre acquisition " est complété, les autres le seront automatiquement par calculs (sauf champ "travaux" qui n'est pas un champ obligatoire).
          displayButtonNext={props.propertyEstimatedAmount}
        ></Footer>
      </div>
    </>
  );
};

export default ProjectEstimatedAmount;
