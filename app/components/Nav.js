import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const MainNav = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background: rgb(0, 115, 255);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .main-navigation__logo {
    h1 {
      margin: 0;
      font-size: 1.5rem;
      color: whitesmoke;
    }
  }
  .main-navigation__items {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      align-items: center;
    }
    li {
      margin: 0 1rem;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const Nav = () => (
  <MainNav>
    <div className="main-navigation__logo">
      <h1>StringAdder</h1>
    </div>
    <div className="main-navigation__items">
      <ul>
        <li>
          <StyledNavLink to="/">List</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/add">Add to List</StyledNavLink>
        </li>
      </ul>
    </div>
  </MainNav>
);

export default Nav;
