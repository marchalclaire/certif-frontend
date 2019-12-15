import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import PropertyType from "./containers/PropertyType";
import PropertyCondition from "./containers/PropertyCondition";
import PropertyUse from "./containers/PropertyUse";
import BorrowerCurrentSituation from "./containers/BorrowerCurrentSituation";
import PropertyCountryCity from "./containers/PropertyCountryCity";
import ProjectEstimatedAmount from "./containers/ProjectEstimatedAmount";
import BorrowerEmail from "./containers/BorrowerEmail";
import FileNumber from "./containers/FileNumber";

// import Header from "./components/Header";

// import Cookie from "js-cookie";

const App = () => {
  return (
    <Router>
      {/* <Header></Header> */}

      <Switch>
        <Route path="/property_condition">
          <PropertyCondition />
        </Route>

        <Route path="/property_use">
          <PropertyUse />
        </Route>

        <Route path="/borrower_current_situation">
          <BorrowerCurrentSituation />
        </Route>

        <Route path="/property_country_city">
          <PropertyCountryCity />
        </Route>

        <Route path="/project_estimated_amount">
          <ProjectEstimatedAmount />
        </Route>

        <Route path="/borrower_email">
          <BorrowerEmail />
        </Route>

        <Route path="/file_number">
          <FileNumber />
        </Route>

        <Route path="/">
          <PropertyType />
        </Route>
      </Switch>

      {/* <Footer></Footer> */}
    </Router>
  );
};
export default App;
