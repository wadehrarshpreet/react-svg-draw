'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the circle HTML Tag.
 *
 * @module Path
 * @type {ReactClass}
 */
var Path = function (_React$Component) {
    _inherits(Path, _React$Component);

    function Path() {
        _classCallCheck(this, Path);

        return _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).call(this));
    }

    _createClass(Path, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'path',
                _extends({ style: _config.defaultStyle }, this.props),
                this.props.children
            );
        }
    }]);

    return Path;
}(_react2.default.Component);

Path.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.object, _propTypes2.default.array]),
    className: _propTypes2.default.string,
    d: _propTypes2.default.string,
    fill: _propTypes2.default.string,
    markerEnd: _propTypes2.default.string,
    markerMid: _propTypes2.default.string,
    markerStart: _propTypes2.default.string,
    stroke: _propTypes2.default.string,
    strokeWidth: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Path;
module.exports = exports['default'];