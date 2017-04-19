'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _material = require('./components/material');

var _material2 = _interopRequireDefault(_material);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _OuterLayout = require('./components/OuterLayout');

var _OuterLayout2 = _interopRequireDefault(_OuterLayout);

var _MainContent = require('./components/MainContent');

var _MainContent2 = _interopRequireDefault(_MainContent);

var _TitleHeader = require('./components/TitleHeader');

var _TitleHeader2 = _interopRequireDefault(_TitleHeader);

var _TaskBar = require('./components/TaskBar');

var _TaskBar2 = _interopRequireDefault(_TaskBar);

var _TaskTextBar = require('./components/TaskTextBar');

var _TaskTextBar2 = _interopRequireDefault(_TaskTextBar);

var _TrialMain = require('./components/TrialMain');

var _TrialMain2 = _interopRequireDefault(_TrialMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ReactDOM.render(

//   // <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
//   //   <Logo /> Welcome to The App!
//   // </button>,

//   <div id="top">
// 	<TrialMain></TrialMain>
//   </div>,
//   document.getElementById('app')
// );


// import { Badge, Card, Chip, DataTable, Dialog, Footer, Grid, Icon, Layout, List, Snackbar, Tabs, utils } from 'react-mdl';
_reactDom2.default.render(

// <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
//   <Logo /> Welcome to The App!
// </button>,

_react2.default.createElement(
  'div',
  { id: 'top' },
  _react2.default.createElement(
    _OuterLayout2.default,
    null,
    _react2.default.createElement(_TitleHeader2.default, null),
    _react2.default.createElement(_MainContent2.default, null)
  )
), document.getElementById('app'));