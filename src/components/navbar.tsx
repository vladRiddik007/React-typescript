import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        TS + React
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">list todo</NavLink>
        </li>
        <li>
          <NavLink to="about">inform</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
