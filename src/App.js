import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
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

const App = () => {
  //on crée un état global par page pour enregistrer les données à chaque étape et les rendre persistantes gràce aux cookies.
  const [propertyType, setPropertyType] = useState(Cookies.get("propertyType"));
  const [propertyCondition, setPropertyCondition] = useState(
    Cookies.get("propertyCondition")
  );
  const [propertyUse, setPropertyUse] = useState(Cookies.get("propertyUse"));
  const [borrowerCurrentSituation, setBorrowerCurrentSituation] = useState(
    Cookies.get("borrowerCurrentSituation")
  );
  const [propertyCountry, setPropertyCountry] = useState(
    Cookies.get("propertyCountry")
  );
  const [propertyCity, setPropertyCity] = useState(Cookies.get("propertyCity"));
  const [projectEstimatedAmount, setProjectEstimatedAmount] = useState(
    Cookies.get("projectEstimatedAmount")
  );
  const [borrowerEmail, setBorrowerEmail] = useState(
    Cookies.get("borrowerEmail")
  );

  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path="/property_condition">
          <PropertyCondition
            propertyCondition={propertyCondition}
            setPropertyCondition={setPropertyCondition}
          />
        </Route>

        <Route path="/property_use">
          <PropertyUse
            propertyUse={propertyUse}
            setPropertyUse={setPropertyUse}
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
            projectEstimatedAmount={projectEstimatedAmount}
            setProjectEstimatedAmount={setProjectEstimatedAmount}
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
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        </Route>
      </Switch>

      {/* <Footer></Footer> */}
    </Router>
  );
};
export default App;
