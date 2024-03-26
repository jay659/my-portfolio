import React from "react";
import { useEffect } from "react";
import sound from "../../../Sound/clicksound.mp3"


const MenuIcon = ({ handleClick, menuOpen }) => {

  const handleIconClick = () => {
    handleClick();
    new Audio(sound).play();
  };

  return (
    <div
      className={"menu-icon " + (menuOpen && "menuActive")}
      onClick={handleIconClick}
    >
      <span className={"line1 " + (menuOpen && "menuActive")}></span>
      <span className={"line2 " + (menuOpen && "menuActive")}></span>
      <span className={"line3 " + (menuOpen && "menuActive")}></span>
    </div>
  );
};


export default MenuIcon;
