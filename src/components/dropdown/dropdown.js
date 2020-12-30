import React from 'react';
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuLink,
  } from "@reach/menu-button";
  import "@reach/menu-button/styles.css";
  import './dropdown.scss';
   
  const DropDown = ({links}) => {
    return (
      <li className="nav-item">
        <Menu>
          <MenuButton className="navbar-documents">
            Documents <span aria-hidden>▾</span>
          </MenuButton>
          <MenuList>
            <Link to='/parent'>
              <MenuItem>Parent Documents</MenuItem>
            </Link>
            <Link to='/eyfs'>
              <MenuItem>EYFS</MenuItem>
            </Link>
            <Link to='/policies'>
              <MenuItem>Policies and Procedures</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </li>
      
    );
  }

  export default DropDown;