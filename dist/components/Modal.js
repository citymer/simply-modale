"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./index.css");
var _react = _interopRequireDefault(require("react"));
var _cancel = _interopRequireDefault(require("../assets/cancel.png"));
var _useEscapeTouch = _interopRequireDefault(require("../useEscapeTouch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => {
  (0, _useEscapeTouch.default)('Escape', props.closeModal);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, props.title), /*#__PURE__*/_react.default.createElement("img", {
    src: _cancel.default,
    alt: "cancel",
    className: "close",
    onClick: props.closeModal
  })));
};
var _default = Modal;
exports.default = _default;