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

var MainContent = function (_React$Component) {
	_inherits(MainContent, _React$Component);

	function MainContent() {
		_classCallCheck(this, MainContent);

		return _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).apply(this, arguments));
	}

	_createClass(MainContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"main",
				{ className: "mdl-layout__content", id: "TrailMainId" },
				_react2.default.createElement(
					"div",
					{ className: "mdl-grid", id: "pageContent" },
					this.props.children,
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
			);
		}
	}]);

	return MainContent;
}(_react2.default.Component);

exports.default = MainContent;