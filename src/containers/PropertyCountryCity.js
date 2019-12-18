import React, { useState } from "react";
import Footer from "../components/Footer.js";
import Cookies from "js-cookie";
import axios from "axios";

// import React, { useState, useEffect } from "react";

// import Card from "../components/Card.js";
// import London from "../london.jpg";

const PropertyCountryCity = props => {
  const [cities, setCities] = useState([]);

  const autocomplete = async value => {
    //appel axios API VICOPO uniquement déclenché quand minimum 3 caractères entrés dans l'input :
    if (value.length > 2) {
      const response = await axios.get(
        "https://vicopo.selfbuild.fr/cherche/" + value
      );
      setCities(response.data.cities);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-title">où se situe le bien à financer ?</div>

        <div className="country-container">
          <div className="form-element-label">
            Dans quel pays se situe votre projet ? *
          </div>
          <select
            className="form-element select"
            name="countries"
            id="country-select"
            onChange={event => {
              props.setPropertyCountry(event.target.value);
              Cookies.set("propertyCountry", event.target.value);
            }}
          >
            <option value="">--Sélectionnez votre pays--</option>
            <option
              value="france"
              selected={props.propertyCountry === "france"}
            >
              france
            </option>
          </select>
        </div>
        <div className="city-container">
          <div className="form-element-label">Ville ou code postal *</div>

          <input
            className="form-element input"
            type="text"
            value={props.propertyCity}
            onChange={event => {
              props.setPropertyCity(event.target.value);
              Cookies.set("propertyCity", event.target.value);
              autocomplete(event.target.value);
            }}
          ></input>
          <ul>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
        <div className="text-container">
          La connaissance du code postal du bien permettra de calculer les frais
          de notaire selon les conditions en vigueur dans le département
          concerné.
          <br />
          Si vous êtes en recherche de biens sur plusieurs communes, indiquez
          une commune ciblée.
        </div>
        <Footer
          link={"/project_estimated_amount"}
          displayButtonNext={props.propertyCountry && props.propertyCity}
        ></Footer>
      </div>
    </>
  );
};
export default PropertyCountryCity;
