import React from 'react';
import { NavLink } from 'react-router-dom';
import './layout.css';
import logo from '../../assets/ethereum.png';

const ROUTES = [
  ['Home', '/'],
  ['Account', '/account'],
  ['About', '/about'],
];

const Navbar = () => {
  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left uk-margin-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/">
              <img
                data-src={logo}
                width="40"
                height="40"
                alt=""
                data-uk-img=""
                uk-image="true"
                className="uk-margin-right-small"
              />
              LOGO
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right uk-margin-right">
        <ul className="uk-navbar-nav">
          {ROUTES.map((route, index) => (
            <li key={index}>
              <NavLink to={route[1]}>{route[0]}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
