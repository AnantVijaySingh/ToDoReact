'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

ReactDOM.render(
  <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
    <Logo /> Welcome to The App!
  </button>,
  document.getElementById('app')
);