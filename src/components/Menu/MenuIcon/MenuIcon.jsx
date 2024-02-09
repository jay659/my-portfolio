import React from "react";

import { Howl } from 'howler';

const sound1 = new Howl({
  src: ['../../../Sound/clicksound.mp3'],
});

const MenuIcon = ({ handleClick, menuOpen }) => {
  console.log(menuOpen)
  const playSound = menuOpen ? sound1 : sound1;

  const handleIconClick = () => {
    playSound.play();
    handleClick();
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
