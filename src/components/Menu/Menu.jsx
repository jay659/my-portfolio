import React from "react";
import "./menu.css";
// Router
import { NavLink } from "components/Nav/NavLink/NavLink";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="Education"
          path="education"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Experience"
          path="experience"
          onClick={() => setMenuOpen(false)}
        />
         <NavLink
          text="Skills"
          path="skills"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Project"
          path="project"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Contact"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};
