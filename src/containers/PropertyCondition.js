import React, { useState } from "react";
import Footer from "../components/Footer.js";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

const PropertyCondition = () => {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div className="main-title">état du bien</div>

        <div className="property-type-box-container">
          <div className="property-type-box">
            <input
              type="radio"
              id="property-condition-1"
              name="property-condition"
              value="old"
            >
              {/* {setIsSelected(true)} */}
            </input>
            <label className="property-type-text" for="property-condition-1">
              ancien
            </label>
          </div>
          <div className="property-type-box">
            <input
              type="radio"
              id="property-condition-2"
              name="property-condition"
              value="new"
            ></input>
            <label className="property-type-text" for="property-condition-2">
              neuf
            </label>
          </div>
        </div>
        <Footer link="/property_use"></Footer>
      </div>
    </>
  );
};
export default PropertyCondition;
