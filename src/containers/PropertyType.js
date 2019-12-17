import React, { useState } from "react";
import Footer from "../components/Footer.js";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

const PropertyType = () => {
  // const [isSelected, setIsSelected] = useState(false);

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
            ></input>
            <label className="property-type-text" for="property-type-2">
              appartement
            </label>
          </div>
        </div>
        <Footer
          link={"/property_condition"}
          disableButtonPrevious={true}
        ></Footer>
      </div>
    </>
  );
};
export default PropertyType;
