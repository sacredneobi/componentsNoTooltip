"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@emotion/react");
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _excluded = ["animation", "width", "height", "timeout", "enterDelay", "loading"];
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var myKeyframe = (0, _react2.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n0% {\n  transform: rotate(-45deg);\n}\n25% {\n  transform: rotate(-20deg);\n}\n75% {\n  transform: rotate(-65deg);\n}\n100% {\n  transform: rotate(-45deg);\n}\n"])));
var Styled = (0, _styles.styled)("div", {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== "width" && prop !== "height" && prop !== "sx";
  }
})(function (_ref) {
  var theme = _ref.theme,
    width = _ref.width,
    height = _ref.height;
  return {
    fill: theme.palette.text.disabled,
    display: "flex",
    height: height,
    minHeight: 200,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "& svg": {
      height: "Calc(".concat(typeof height === "string" ? "".concat(200, "px") : "".concat(height, "px"), " - 60px)"),
      width: "Calc(".concat(typeof width === "string" ? width : "".concat(width, "px"), " - 60px)"),
      animationName: myKeyframe,
      animationDuration: "5s",
      transform: "rotate(-45deg)",
      animationDelay: "500ms",
      animationIterationCount: "infinite",
      fill: theme.palette.text.disabled
    }
  };
});
var Default = function Default(props) {
  var animation = props.animation,
    width = props.width,
    height = props.height,
    timeout = props.timeout,
    enterDelay = props.enterDelay,
    loading = props.loading,
    other = _objectWithoutProperties(props, _excluded);
  var icon = /*#__PURE__*/_react["default"].createElement(Styled, _extends({
    width: width,
    height: height
  }, other), /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "Layer_1",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: "512",
    height: "512"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.879,17.878a11.259,11.259,0,0,0-1.835,4,1.739,1.739,0,0,0,2.083,2.082,11.263,11.263,0,0,0,3.994-1.834h0A3,3,0,0,0,1.879,17.878Zm2.828,2.829h0a10.07,10.07,0,0,1-2.6,1.184,10.1,10.1,0,0,1,1.184-2.6,1,1,0,0,1,1.414,1.414ZM18,8.5a2.5,2.5,0,0,1-5,0A2.5,2.5,0,0,1,18,8.5ZM20.972,0h0A15.487,15.487,0,0,0,8.634,6.006,11.065,11.065,0,0,0,4.065,7.169,8.1,8.1,0,0,0,.243,10.835a2.955,2.955,0,0,0,.25,2.8A3.009,3.009,0,0,0,3.014,15H5.5A3.517,3.517,0,0,1,9,18.5v2.486a3.009,3.009,0,0,0,1.363,2.521,2.955,2.955,0,0,0,2.8.25,8.1,8.1,0,0,0,3.666-3.822,11.065,11.065,0,0,0,1.163-4.569A15.507,15.507,0,0,0,24,3,3.009,3.009,0,0,0,20.972,0ZM4.346,13H3.014a1,1,0,0,1-.85-.461.95.95,0,0,1-.085-.91A6.176,6.176,0,0,1,4.962,8.957a8.993,8.993,0,0,1,1.993-.72A34.361,34.361,0,0,0,4.346,13Zm10.7,6.038a6.18,6.18,0,0,1-2.671,2.883.951.951,0,0,1-.911-.085,1,1,0,0,1-.461-.85V19.654a34.361,34.361,0,0,0,4.763-2.609A8.993,8.993,0,0,1,15.043,19.038Zm.135-4.02a29.92,29.92,0,0,1-4.271,2.471,5.5,5.5,0,0,0-4.4-4.4A29.92,29.92,0,0,1,8.982,8.822C12.35,4.124,15.84,2.147,21,2a1,1,0,0,1,1,.972C21.853,8.16,19.876,11.65,15.178,15.018Z"
  })));
  if (animation) {
    return /*#__PURE__*/_react["default"].createElement(_material.Fade, {
      "in": true,
      timeout: timeout,
      sx: {
        transitionDelay: "".concat(enterDelay, "ms !important")
      }
    }, icon);
  }
  return icon;
};
Default.propTypes = {
  animation: _propTypes["default"].bool,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  timeout: _propTypes["default"].number,
  enterDelay: _propTypes["default"].number,
  loading: _propTypes["default"].bool
};
Default.defaultProps = {
  animation: true,
  width: "100%",
  height: "100vh",
  timeout: 500,
  enterDelay: 1000,
  loading: false
};
var _default = Default;
exports["default"] = _default;