import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/ethereum.png';
import bear from '../../assets/bear.png';

const ROUTES = [
  ['Home', '/'],
  ['Pools', '/pools'],
  ['About', '/about'],
];

const Navbar = () => {
  const navMenuRef = useRef();
  const accountMenuRef = useRef();

  const navMenuToggle = () => {
    navMenuRef.current.classList.toggle('nav-menu-active');
  };

  const accountMenuToggle = () => {
    accountMenuRef.current.classList.toggle('account-menu-active');
  };

  return (
    <StyledNav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <div
          className="uk-navbar-item uk-logo uk-flex uk-flex-middle"
          onClick={navMenuToggle}
        >
          <img
            data-src={logo}
            width="40"
            height="40"
            alt=""
            data-uk-img=""
            uk-image="true"
            className="uk-margin-right-small"
          />
        </div>
        <ul ref={navMenuRef} id="nav-menu" className="uk-navbar-nav">
          {ROUTES.map((route, index) => (
            <li key={index} onClick={navMenuToggle}>
              <NavLink to={route[1]}>{route[0]}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul ref={accountMenuRef} id="account-menu" className="uk-navbar-nav">
          <li>
            <p>0x00...BD23</p>
          </li>
          <li>
            <select name="chain_id" id="nav-chain-select" className="uk-select">
              <option value="Polygon">Polygon</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Goerli">Goerli</option>
            </select>
          </li>
        </ul>
        <div
          className="uk-flex uk-flex-middle uk-flex-wrap"
          onClick={accountMenuToggle}
        >
          <img
            src={bear}
            className="uk-border-circle"
            width="40"
            height="40"
            alt="User Avatar"
          />
          <p>0x00...BD23</p>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #a8bc9d !important;
  max-height: 64px;
  max-width: 100%;

  div > ul > li > a {
    text-transform: none;
    color: #000;
  }

  .uk-navbar-item,
  .uk-navbar-nav > li > a,
  .uk-navbar-nav > li > div,
  .uk-navbar-toggle {
    min-height: 64px !important;
  }

  div.uk-navbar-left {
    margin-left: 7.5%;
  }

  div.uk-navbar-right {
    margin-right: 7.5%;
  }

  div.uk-navbar-right > div > p {
    display: none;
  }

  @media screen and (max-width: 767px) {
    #nav-menu,
    #account-menu {
      position: absolute;
      height: calc(100vh - 64px);
      top: 64px;
      background-color: #a8bc9d;
      margin: 0 !important;
      transition: transform 0.5s ease-in;
      z-index: 100;
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: 0;
    }

    #nav-menu {
      left: 0px;
      transform: translateX(-100%);
    }

    #account-menu {
      right: 0px;
      transform: translateX(100%);
    }

    #nav-menu > *,
    #account-menu > * {
      background-color: #a8bc9d;
      height: 64px;
    }

    #account-menu > li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5%;
    }

    #account-menu > li > p {
      margin: 0;
    }

    #nav-menu > *:not(:last-child),
    #account-menu > *:not(:last-child) {
      border-bottom: 0.5px #fafafa solid;
    }

    .nav-menu-active {
      transform: translateX(0%) !important;
    }

    .account-menu-active {
      transform: translateX(0%) !important;
    }
  }

  @media screen and (min-width: 768px) {
    div.uk-navbar-left {
      margin-left: 5%;
    }
    div.uk-navbar-right {
      margin-right: 5%;
    }

    div.uk-navbar-right > div > p {
      display: block;
      margin-left: 10px;
    }

    ul#nav-menu > li {
      display: block;
    }
    ul#nav-menu > li:not(:first-child) {
      display: block;
    }
    ul#account-menu > li:not(:last-child) {
      display: block;
    }
    ul#account-menu > li > p {
      display: none;
    }
  }
`;

export default Navbar;
