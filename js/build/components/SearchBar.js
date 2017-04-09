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

var SearchBar = function (_React$Component) {
		_inherits(SearchBar, _React$Component);

		function SearchBar() {
				_classCallCheck(this, SearchBar);

				return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
		}

		_createClass(SearchBar, [{
				key: "render",
				value: function render() {
						{/* Always shows a header, even in smaller screens */}
						return _react2.default.createElement(
								"div",
								{ className: "mdl-layout mdl-js-layout mdl-layout--fixed-header" },
								_react2.default.createElement(
										"header",
										{ className: "mdl-layout__header" },
										_react2.default.createElement(
												"div",
												{ className: "mdl-layout__header-row" },
												_react2.default.createElement(
														"span",
														{ className: "mdl-layout-title" },
														"Title"
												),
												_react2.default.createElement("div", { className: "mdl-layout-spacer" }),
												_react2.default.createElement(
														"div",
														{ className: "mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right" },
														_react2.default.createElement(
																"label",
																{ className: "mdl-button mdl-js-button mdl-button--icon", htmlFor: "fixed-header-drawer-exp" },
																_react2.default.createElement(
																		"i",
																		{ className: "material-icons" },
																		"search"
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "mdl-textfield__expandable-holder" },
																_react2.default.createElement("input", { className: "mdl-textfield__input", type: "text", name: "sample", id: "fixed-header-drawer-exp" })
														)
												)
										)
								),
								_react2.default.createElement(
										"div",
										{ className: "mdl-layout__drawer" },
										_react2.default.createElement(
												"span",
												{ className: "mdl-layout-title" },
												"Title"
										),
										_react2.default.createElement(
												"nav",
												{ className: "mdl-navigation" },
												_react2.default.createElement(
														"a",
														{ className: "mdl-navigation__link", href: "" },
														"Link"
												),
												_react2.default.createElement(
														"a",
														{ className: "mdl-navigation__link", href: "" },
														"Link"
												),
												_react2.default.createElement(
														"a",
														{ className: "mdl-navigation__link", href: "" },
														"Link"
												),
												_react2.default.createElement(
														"a",
														{ className: "mdl-navigation__link", href: "" },
														"Link"
												)
										)
								),
								_react2.default.createElement(
										"main",
										{ className: "mdl-layout__content" },
										_react2.default.createElement(
												"div",
												{ className: "page-content" },
												"Testing"
										)
								)
						);
				}
		}]);

		return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;