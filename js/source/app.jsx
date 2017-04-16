'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Badge, Card, Chip, DataTable, Dialog, Footer, Grid, Icon, Layout, List, Snackbar, Tabs, utils } from 'react-mdl';
import material from './components/material';
import Logo from './components/Logo';
import OuterLayout from './components/OuterLayout';
import MainContent from './components/MainContent';
import TitleHeader from './components/TitleHeader';
import TaskBar from './components/TaskBar';

ReactDOM.render(

  // <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
  //   <Logo /> Welcome to The App!
  // </button>,

  <div id="top">
  	<OuterLayout>
  		<TitleHeader></TitleHeader>
  		<MainContent>
  			<TaskBar></TaskBar>
  		</MainContent>
  	</OuterLayout>
  </div>,
  document.getElementById('app')
);