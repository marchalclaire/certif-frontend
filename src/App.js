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
  //on crée un état global par page (ou plusieurs selon nombre de champs renseignés par page) pour enregistrer les données à chaque étape et les rendre persistantes gràce aux cookies.

  // const [propertyCondition, setPropertyCondition] = useState(
  //   Cookies.get("propertyCondition")
  // );
  // const [propertyUse, setPropertyUse] = useState(Cookies.get("propertyUse"));
  const [borrowerCurrentSituation, setBorrowerCurrentSituation] = useState(
    Cookies.get("borrowerCurrentSituation")
  );
  const [propertyCountry, setPropertyCountry] = useState(
    Cookies.get("propertyCountry")
  );
  const [propertyCity, setPropertyCity] = useState(Cookies.get("propertyCity"));

  const [propertyEstimatedAmount, setPropertyEstimatedAmount] = useState(
    Cookies.get("propertyEstimatedAmount")
  );
  const [repairsEstimatedAmount, setRepairsEstimatedAmount] = useState(
    Cookies.get("repairsEstimatedAmount")
  );
  const [notaryCosts, setNotaryCosts] = useState(Cookies.get("notaryCosts"));
  const [totalAmount, setTotalAmount] = useState(Cookies.get("totalAmount"));
  const [borrowerEmail, setBorrowerEmail] = useState(
    Cookies.get("borrowerEmail")
  );
  const [globalState, setGlobalState] = useState({
    propertyType: Cookies.get("propertyType"),
    propertyCondition: Cookies.get("propertyCondition"),
    propertyUse: Cookies.get("propertyUse")
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
            borrowerCurrentSituation={borrowerCurrentSituation}
            setBorrowerCurrentSituation={setBorrowerCurrentSituation}
          />
        </Route>

        <Route path="/property_country_city">
          <PropertyCountryCity
            propertyCountry={propertyCountry}
            setPropertyCountry={setPropertyCountry}
            propertyCity={propertyCity}
            setPropertyCity={setPropertyCity}
          />
        </Route>

        <Route path="/project_estimated_amount">
          <ProjectEstimatedAmount
            propertyEstimatedAmount={propertyEstimatedAmount}
            setPropertyEstimatedAmount={setPropertyEstimatedAmount}
            repairsEstimatedAmount={repairsEstimatedAmount}
            setRepairsEstimatedAmount={setRepairsEstimatedAmount}
            notaryCosts={notaryCosts}
            setNotaryCosts={setNotaryCosts}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            // propertyCondition={propertyCondition}
          />
        </Route>

        <Route path="/borrower_email">
          <BorrowerEmail
            borrowerEmail={borrowerEmail}
            setBorrowerEmail={setBorrowerEmail}
          />
        </Route>

        <Route path="/file_number">
          <FileNumber />
        </Route>

        <Route path="/">
          <PropertyType
            globalState={globalState}
            setGlobalState={setGlobalState}
          />
        </Route>
      </Switch>

      {/* <Footer></Footer> */}
    </Router>
  );
};
export default App;
