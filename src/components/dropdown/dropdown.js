import React from 'react';
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
  } from "@reach/menu-button";
  import "@reach/menu-button/styles.css";
  import './dropdown.scss';
  import '../navbar/navbar.scss';
   
  const DropDown = ({links}) => {
    return (
        <Menu>
          <MenuButton className="navbar-documents">
            Documents <span aria-hidden>▾</span>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to='/parent'>Parent Documents</Link> 
            </MenuItem>
            <MenuItem>
              <Link to='/eyfs'>EYFS</Link> 
            </MenuItem>
            <MenuItem>
              <Link to='/policies'>Policies and Procedures</Link> 
            </MenuItem>
          </MenuList>
        </Menu>
      
      
    );
  }

  export default DropDown;