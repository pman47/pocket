import Cards from "./Cards";
import SmallCards from "./SmallCards";

import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Share.css";
import { BiArrowBack } from "react-icons/bi";

const Share = () => {
  return (
    <div className="sharePage">
      <div className="logoContainer">
        <img src={Logo} alt="pocket logo" className="logo" />
      </div>
      <Link to="/" className="backButton">
        <BiArrowBack className="backArrow" /> BACK
      </Link>
      <Cards />
      <SmallCards />
    </div>
  );
};

export default Share;
