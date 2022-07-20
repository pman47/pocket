import React from "react";
import Navbar from "./Navbar";
import "./LandingPage.css";
import UpperRight from "../../assets/UpperRight.png";
import Slider from "./Slider";
import IPhoneSection from "./IPhoneSection";

const LandingPage = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Navbar />
      <img
        cka
        src={UpperRight}
        className="UpperRight"
        alt="Upper Right Circle"
      />
      <Slider />
      <IPhoneSection />
    </div>
  );
};

export default LandingPage;
