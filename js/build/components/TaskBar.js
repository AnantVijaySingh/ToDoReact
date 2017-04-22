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

var TaskBar = function (_React$Component) {
	_inherits(TaskBar, _React$Component);

	function TaskBar() {
		_classCallCheck(this, TaskBar);

		return _possibleConstructorReturn(this, (TaskBar.__proto__ || Object.getPrototypeOf(TaskBar)).apply(this, arguments));
	}

	_createClass(TaskBar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet", id: "taskBar" },
				this.props.children,
				_react2.default.createElement(
					"label",
					{ className: "mdl-textfield__label", htmlFor: "sample1" },
					"Task..."
				)
			);
		}
	}]);

	return TaskBar;
}(_react2.default.Component);

exports.default = TaskBar;