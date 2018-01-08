'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the SVG HTML Tag.
 *
 * @module G
 * @type {ReactClass}
 */
var G = function (_React$Component) {
  _inherits(G, _React$Component);

  function G() {
    _classCallCheck(this, G);

    return _possibleConstructorReturn(this, (G.__proto__ || Object.getPrototypeOf(G)).call(this));
  }

  _createClass(G, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'g',
        this.props,
        this.props.children
      );
    }
  }]);

  return G;
}(_react2.default.Component);

G.propTypes = {
  children: _propTypes2.default.object,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = G;
module.exports = exports['default'];