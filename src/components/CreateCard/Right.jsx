import React from "react";
import {
  FaDiscord,
  FaLinkedin,
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagram,
  FaSnapchatSquare,
  FaYoutube,
  FaPaypal,
  FaGithubSquare,
} from "react-icons/fa";
import Social from "./Social";

const Right = () => {
  const socials = [
    { logo: <FaDiscord className="socialLogo" />, name: "Discord" },
    { logo: <FaLinkedin className="socialLogo" />, name: "LinkedIn" },
    { logo: <FaWhatsappSquare className="socialLogo" />, name: "Whatsapp" },
    { logo: <FaFacebookSquare className="socialLogo" />, name: "Facebook" },
    { logo: <FaInstagram className="socialLogo" />, name: "Instagram" },
    { logo: <FaSnapchatSquare className="socialLogo" />, name: "Snapchat" },
    { logo: <FaYoutube className="socialLogo" />, name: "YouTube" },
    { logo: <FaPaypal className="socialLogo" />, name: "Paypal" },
    { logo: <FaGithubSquare className="socialLogo" />, name: "Github" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
    { name: "Simple" },
  ];

  return (
    <div className="right">
      <p className="rightTitle">ADD ADDITIONAL INFORMATION</p>
      <div className="socialsContainer">
        {socials.map((social) => (
          <Social element={social} />
        ))}
      </div>
    </div>
  );
};

export default Right;
