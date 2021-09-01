import React from 'react';
import './header.css';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const Header=({onLoad,onPlaceChanged})=>{
    return(
      <div class="wrapper">
        <div class="navbar">
          <div class="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="searchbar">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input type="text" placeholder="search your destination..."/>
            </Autocomplete>
            <div class="icon">
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    );
}
   
export default Header;