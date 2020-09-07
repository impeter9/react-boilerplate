import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>StringAdder</h1>
    </div>
    <div className="main-navigation__items">
      <ul>
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add to List</NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Nav;
