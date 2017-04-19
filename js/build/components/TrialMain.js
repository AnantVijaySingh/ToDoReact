"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrialMain = function (_React$Component) {
	_inherits(TrialMain, _React$Component);

	function TrialMain() {
		_classCallCheck(this, TrialMain);

		return _possibleConstructorReturn(this, (TrialMain.__proto__ || Object.getPrototypeOf(TrialMain)).apply(this, arguments));
	}

	_createClass(TrialMain, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "mdl-layout mdl-js-layout  mdl-layout--fixed-header" },
				_react2.default.createElement(
					"header",
					{ className: "mdl-layout__header mdl-layout__header--transparent" },
					_react2.default.createElement(
						"div",
						{ className: "mdl-layout__header-row" },
						_react2.default.createElement(
							"span",
							{ className: "mdl-layout-title" },
							"Tasks To Do"
						),
						_react2.default.createElement("div", { className: "mdl-layout-spacer" }),
						_react2.default.createElement(
							"nav",
							{ className: "mdl-navigation" },
							_react2.default.createElement(
								"form",
								{ action: "#" },
								_react2.default.createElement(
									"div",
									{ className: "mdl-textfield mdl-js-textfield mdl-textfield--expandable" },
									_react2.default.createElement(
										"label",
										{ className: "mdl-button mdl-js-button mdl-button--icon", htmlFor: "sample6" },
										_react2.default.createElement(
											"i",
											{ className: "material-icons" },
											"search"
										)
									),
									_react2.default.createElement(
										"label",
										{ className: "mdl-textfield__label", htmlFor: "sample-expandable" },
										"Expandable Input"
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					"main",
					{ className: "mdl-layout__content", id: "TrailMainId" },
					_react2.default.createElement(
						"div",
						{ className: "mdl-grid" },
						_react2.default.createElement(
							"div",
							{ className: "mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet" },
							"Simple Textfield",
							_react2.default.createElement(
								"label",
								{ className: "mdl-textfield__label", htmlFor: "sample1" },
								"Task..."
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement(
									"button",
									{ className: "mdl-button mdl-js-button mdl-button--raised mdl-button-custom", id: "todayButton" },
									_react2.default.createElement(
										"span",
										null,
										"Today&nbsp",
										_react2.default.createElement("span", { className: "mdl-badge", "data-badge": "1" })
									)
								),
								_react2.default.createElement(
									"button",
									{ className: "mdl-button mdl-js-button mdl-button--raised mdl-button-custom", disabled: true, id: "tomorrowButton" },
									_react2.default.createElement(
										"span",
										null,
										"Tomorrow&nbsp",
										_react2.default.createElement("span", { className: "mdl-badge", "data-badge": "0" })
									)
								),
								_react2.default.createElement(
									"button",
									{ className: "mdl-button mdl-js-button mdl-button--raised mdl-button-custom", disabled: true, id: "weekButton" },
									_react2.default.createElement(
										"span",
										null,
										"Week&nbsp",
										_react2.default.createElement("span", { className: "mdl-badge", "data-badge": "0" })
									)
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet", id: "taskList" },
							_react2.default.createElement(
								"div",
								{ className: "mdl-card-custom mdl-card mdl-shadow--2dp" },
								_react2.default.createElement(
									"div",
									{ className: "mdl-card__supporting-text" },
									"Test User Task Text .........."
								),
								_react2.default.createElement(
									"div",
									{ className: "mdl-card__actions mdl-card--border" },
									_react2.default.createElement(
										"button",
										{ className: "mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons", id: "doneButton" },
										_react2.default.createElement(
											"i",
											{ className: "material-icons" },
											"done"
										)
									),
									_react2.default.createElement(
										"button",
										{ className: "mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons", id: "deleteButton" },
										_react2.default.createElement(
											"i",
											{ className: "material-icons" },
											"delete"
										)
									),
									_react2.default.createElement(
										"button",
										{ className: "mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons", id: "mailButton" },
										_react2.default.createElement(
											"i",
											{ className: "material-icons" },
											"email"
										)
									),
									_react2.default.createElement(
										"span",
										{ className: "timeStamp" },
										"Time"
									)
								),
								_react2.default.createElement(
									"div",
									{ className: "mdl-card__menu" },
									_react2.default.createElement(
										"button",
										{ className: "mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" },
										_react2.default.createElement(
											"i",
											{ className: "material-icons" },
											"share"
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return TrialMain;
}(_react2.default.Component);

exports.default = TrialMain;