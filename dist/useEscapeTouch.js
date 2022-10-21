"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useEscapeTouch = (key, action) => {
  (0, _react.useEffect)(() => {
    const onKeyUp = e => {
      if (e.key === key) action();
    };
    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  }, [action, key]);
};
var _default = useEscapeTouch;
exports.default = _default;