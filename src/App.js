import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import BackOfficeLogIn from "./components/BackOfficeLogIn.js";

import "./App.css";

import Header from "./components/Header.js";
import PropertyType from "./containers/PropertyType";
import PropertyCondition from "./containers/PropertyCondition";
import PropertyUse from "./containers/PropertyUse";
import BorrowerCurrentSituation from "./containers/BorrowerCurrentSituation";
import PropertyCountryCity from "./containers/PropertyCountryCity";
import ProjectEstimatedAmount from "./containers/ProjectEstimatedAmount";
import BorrowerEmail from "./containers/BorrowerEmail";
import FileNumber from "./containers/FileNumber";
import BackOffice from "./containers/BackOffice";

const App = () => {
  //on crée un état global pour enregistrer les données à chaque étape et les rendre persistantes gràce aux cookies.
  const [globalState, setGlobalState] = useState({
    propertyType: Cookies.get("propertyType"),
    propertyCondition: Cookies.get("propertyCondition"),
    propertyUse: Cookies.get("propertyUse"),
    borrowerCurrentSituation: Cookies.get("borrowerCurrentSituation"),
    propertyCountry: Cookies.get("propertyCountry"),
    propertyCity: Cookies.get("propertyCity"),
    borrowerEmail: Cookies.get("borrowerEmail"),
    propertyEstimatedAmount: Number(Cookies.get("propertyEstimatedAmount")),
    repairsEstimatedAmount: Number(Cookies.get("repairsEstimatedAmount")),
    notaryCosts: Number(Cookies.get("notaryCosts")),
    totalAmount: Number(Cookies.get("totalAmount")),
    fileNumber: ""
  });
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      {showModal === true && (
        <BackOfficeLogIn
          showModal={showModal}
          setShowModal={setShowModal}
        ></BackOfficeLogIn>
      )}
      <Header showModal={showModal} setShowModal={setShowModal}></Header>

      <Switch>
        <Route path="/back_office">
          <BackOffice />
        </Route>
        <Route path="/property_condition">
          <PropertyCondition
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>

        <Route path="/property_use">
          <PropertyUse
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>

        <Route path="/borrower_current_situation">
          <BorrowerCurrentSituation
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>

        <Route path="/property_country_city">
          <PropertyCountryCity
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>

        <Route path="/project_estimated_amount">
          <ProjectEstimatedAmount
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>

        <Route path="/borrower_email">
          <BorrowerEmail
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>

        <Route path="/file_number">
          <FileNumber
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>

        <Route path="/">
          <PropertyType
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
