import React from "react";
import Navbar from "./Navbar";
import "./LandingPage.css";
import UpperRight from "../../assets/UpperRight.png";
import Slider from "./Slider";
import IPhoneSection from "./IPhoneSection";

const LandingPage = () => {
  let upperRightStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: "-11",
  };

  return (
    <div style={{ marginBottom: "300px" }}>
      <Navbar />
      <img src={UpperRight} style={upperRightStyle} alt="Upper Right Circle" />
      <Slider />
      <IPhoneSection />
    </div>
  );
};

export default LandingPage;
