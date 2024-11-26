import React from "react";
import "./ShadowBox.css";
import logo from "../../assets/companylogo.png"; // Go up two levels to access the assets folder
 // Import image from the assets folder

const ShadowBox = () => {
  return (
    <div className="shadow-box-bar">
      <img src={logo} alt="Company Logo" /> {/* Image in the shadow box */}
      <h1>Rolls Bearing Services</h1>
    </div>
  );
};

export default ShadowBox;
