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

var TitleHeader = function (_React$Component) {
	_inherits(TitleHeader, _React$Component);

	function TitleHeader() {
		_classCallCheck(this, TitleHeader);

		return _possibleConstructorReturn(this, (TitleHeader.__proto__ || Object.getPrototypeOf(TitleHeader)).apply(this, arguments));
	}

	_createClass(TitleHeader, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "mdl-layout__header mdl-layout__header--transparent", id: "appHeader" },
				_react2.default.createElement(
					"div",
					{ className: "mdl-layout__header-row" },
					_react2.default.createElement(
						"span",
						{ className: "mdl-layout-title" },
						_react2.default.createElement(
							"b",
							null,
							"FACTUM"
						)
					)
				)
			);
		}
	}]);

	return TitleHeader;
}(_react2.default.Component);

exports.default = TitleHeader;