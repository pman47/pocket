import uploadImage from "../../assets/uploadImage.png";
import { BsImage, BsPlus } from "react-icons/bs";
import InputField from "./InputField";

import "./Left.css";

const Left = () => {
  let inputFields = [
    "First Name",
    "Middle Name",
    "Last Name",
    "Designation",
    "Company Name",
    "Contact Number",
    "Email ID",
    "Website URL",
  ];

  return (
    <div className="left">
      <div className="imageContainer">
        <img
          src={uploadImage}
          alt="upload Background"
          className="backgroundImage"
        />
        <div className="uploadImage">
          <BsImage className="imageIcon" />
          <p>Upload an Image</p>
        </div>
        <div className="sideLogo">
          <BsPlus className="plusLogo" />
          <p>LOGO</p>
        </div>
      </div>
      <div className="inputFields">
        {inputFields.map((inputItem) => (
          <InputField item={inputItem} key={inputItem} />
        ))}
      </div>
      <div className="buttons">
        <button className="cancelBtn">Cancel</button>
        <button className="saveBtn">Save</button>
      </div>
    </div>
  );
};

export default Left;
