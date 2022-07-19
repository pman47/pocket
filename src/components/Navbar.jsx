import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Menu from "./Menu";
import "./Navbar.css";

const Navbar = () => {
  const menu = ["features", "pricing", "business", "smart card"];

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="pocket" />
      <div className="menu">
        {menu.map((menuItem) => (
          <Menu key={menuItem} item={menuItem} />
        ))}
        <Link to="/share" className="create-a-card-button">
          create a card
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
