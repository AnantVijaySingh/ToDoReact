'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Badge, Card, Chip, DataTable, Dialog, Footer, Grid, Icon, Layout, List, Snackbar, Tabs, utils } from 'react-mdl';
import material from './components/material.js';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

ReactDOM.render(
  // <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
  //   <Logo /> Welcome to The App!
  // </button>,
  <div id="top">
  	<SearchBar></SearchBar>
  </div>,
  document.getElementById('app')
);