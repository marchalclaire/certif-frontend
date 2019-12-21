import React, { useState, useEffect } from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";

const ProjectEstimatedAmount = props => {
  const [propertyEstimatedAmount, setPropertyEstimatedAmount] = useState(
    props.globalState.propertyEstimatedAmount
  );
  const [repairsEstimatedAmount, setRepairsEstimatedAmount] = useState(
    props.globalState.repairsEstimatedAmount
  );
  const [notaryCosts, setNotaryCosts] = useState(props.globalState.notaryCosts);
  const [totalAmount, setTotalAmount] = useState(props.globalState.totalAmount);

  //on utilise un useEffect afin que chaque état se mette à jour à chaque changement d'état (nouvelle donnée entrée dans l'input). On évite le pb de l'asyncrone entre mise à jour de chaque état et calculs.
  useEffect(() => {
    calculate();
  }, [propertyEstimatedAmount, repairsEstimatedAmount]);

  //on crée une fonction pour calculer les frais de notaire et la somme totale :
  const calculate = () => {
    let total = 0;
    let notaryCosts = 0;
    if (propertyEstimatedAmount) {
      if (props.globalState.propertyCondition === "neuf") {
        notaryCosts = Number(propertyEstimatedAmount) * 0.018;
      } else {
        notaryCosts = Number(propertyEstimatedAmount) * 0.0738;
      }
      total = total + Number(propertyEstimatedAmount) + notaryCosts;
    }
    if (repairsEstimatedAmount) {
      console.log(repairsEstimatedAmount);
      total = total + Number(repairsEstimatedAmount);
    }

    //on set les états complétés suite aux calculs et on conserve les données dans les cookies :
    const state = { ...props.globalState };

    state.propertyEstimatedAmount = Number(propertyEstimatedAmount);
    Cookies.set("propertyEstimatedAmount", Number(propertyEstimatedAmount));
    state.repairsEstimatedAmount = Number(repairsEstimatedAmount);
    Cookies.set("repairsEstimatedAmount", Number(repairsEstimatedAmount));
    state.notaryCosts = Number(notaryCosts);
    setNotaryCosts(Number(notaryCosts));
    Cookies.set("notaryCosts", Number(notaryCosts));
    state.totalAmount = Number(total);
    setTotalAmount(Number(total));
    Cookies.set("totalAmount", Number(total));
    props.setGlobalState(state);
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
            value={propertyEstimatedAmount}
            onChange={event => {
              setPropertyEstimatedAmount(event.target.value);
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
            value={repairsEstimatedAmount}
            onChange={event => {
              setRepairsEstimatedAmount(event.target.value);
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
            value={notaryCosts}
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
            value={totalAmount}
          ></input>
          <div className="currency-symbol">€</div>
        </form>

        <Footer
          previousLink="/property_country_city"
          link={"/borrower_email"}
          displayButtonNext={propertyEstimatedAmount}
        ></Footer>
      </div>
    </>
  );
};

export default ProjectEstimatedAmount;
