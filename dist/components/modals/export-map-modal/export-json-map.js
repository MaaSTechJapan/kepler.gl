"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJsonPretty = _interopRequireDefault(require("react-json-pretty"));

var _userGuides = require("../../../constants/user-guides");

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _components = require("./components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .note {\n    color: ", ";\n    font-size: 11px;\n  }\n\n  .viewer {\n    border: 1px solid ", ";\n    background-color: white;\n    border-radius: 2px;\n    display: inline-block;\n    font: inherit;\n    line-height: 1.5em;\n    padding: 0.5em 3.5em 0.5em 1em;\n    margin: 0;\n    box-sizing: border-box;\n    height: 180px;\n    width: 100%;\n    overflow-y: scroll;\n    overflow-x: auto;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    max-width: 600px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledJsonExportSection = (0, _styledComponents["default"])(_styledComponents2.StyledExportSection)(_templateObject(), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.selectBorderColorLT;
});
var exportJsonPropTypes = {
  options: _propTypes["default"].object
};

var ExportJsonMap = _react["default"].memo(function (_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, "Export current map data and config into a single Json file. You can later open the same map by uploading this file to kepler.gl.")), /*#__PURE__*/_react["default"].createElement(StyledJsonExportSection, {
    className: "export-map-modal__json-options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, "Map Config"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, _defaultSettings.MAP_CONFIG_DESCRIPTION, /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
    href: _userGuides.GITHUB_ADD_DATA_TO_MAP
  }, "addDataToMap"), ".")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "viewer"
  }, /*#__PURE__*/_react["default"].createElement(_reactJsonPretty["default"], {
    id: "json-pretty",
    json: config
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, "* Map config is coupled with loaded datasets. \u2018dataId\u2019 is used to bind layers, filters, and tooltips to a specific dataset. When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.")))));
});

ExportJsonMap.propTypes = exportJsonPropTypes;
ExportJsonMap.displayName = 'ExportJsonMap';

var ExportJsonMapFactory = function ExportJsonMapFactory() {
  return ExportJsonMap;
};

var _default = ExportJsonMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1qc29uLW1hcC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiZXJyb3JDb2xvciIsInNlbGVjdEJvcmRlckNvbG9yTFQiLCJleHBvcnRKc29uUHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIkV4cG9ydEpzb25NYXAiLCJSZWFjdCIsIm1lbW8iLCJjb25maWciLCJNQVBfQ09ORklHX0RFU0NSSVBUSU9OIiwiR0lUSFVCX0FERF9EQVRBX1RPX01BUCIsInByb3BUeXBlcyIsImRpc3BsYXlOYW1lIiwiRXhwb3J0SnNvbk1hcEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxrQ0FBT0Msc0NBQVAsQ0FBSCxvQkFFaEIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRlcsRUFPTCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLG1CQUFoQjtBQUFBLENBUEEsQ0FBN0I7QUEwQkEsSUFBTUMsbUJBQW1CLEdBQUc7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDO0FBRE8sQ0FBNUI7O0FBSUEsSUFBTUMsYUFBYSxHQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEseUJBQUVDLE1BQUY7QUFBQSxNQUFFQSxNQUFGLDRCQUFXLEVBQVg7QUFBQSxzQkFDL0IsMERBQ0UsZ0NBQUMsa0NBQUQscUJBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREYsZUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsd0lBRkYsQ0FERixlQVFFLGdDQUFDLHVCQUFEO0FBQXlCLElBQUEsU0FBUyxFQUFDO0FBQW5DLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBREYsZUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0MsdUNBREgsZUFFRSxnQ0FBQyx5QkFBRDtBQUFlLElBQUEsSUFBSSxFQUFFQztBQUFyQixvQkFGRixNQUZGLENBREYsZUFRRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLDJCQUFEO0FBQVksSUFBQSxFQUFFLEVBQUMsYUFBZjtBQUE2QixJQUFBLElBQUksRUFBRUY7QUFBbkMsSUFERixDQURGLGVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLHlCQUFELHdQQURGLENBSkYsQ0FSRixDQVJGLENBRCtCO0FBQUEsQ0FBWCxDQUF0Qjs7QUFpQ0FILGFBQWEsQ0FBQ00sU0FBZCxHQUEwQlYsbUJBQTFCO0FBRUFJLGFBQWEsQ0FBQ08sV0FBZCxHQUE0QixlQUE1Qjs7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsU0FBTVIsYUFBTjtBQUFBLENBQTdCOztlQUVlUSxvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBKU09OUHJldHR5IGZyb20gJ3JlYWN0LWpzb24tcHJldHR5JztcclxuaW1wb3J0IHtHSVRIVUJfQUREX0RBVEFfVE9fTUFQfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xyXG5pbXBvcnQge01BUF9DT05GSUdfREVTQ1JJUFRJT059IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1N0eWxlZEV4cG9ydE1hcFNlY3Rpb24sIFN0eWxlZFdhcm5pbmcsIEV4cG9ydE1hcExpbmt9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiA9IHN0eWxlZChTdHlsZWRFeHBvcnRTZWN0aW9uKWBcclxuICAubm90ZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcblxyXG4gIC52aWV3ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvckxUfTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDMuNWVtIDAuNWVtIDFlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBleHBvcnRKc29uUHJvcFR5cGVzID0ge1xyXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbmNvbnN0IEV4cG9ydEpzb25NYXAgPSBSZWFjdC5tZW1vKCh7Y29uZmlnID0ge319KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxTdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICBFeHBvcnQgY3VycmVudCBtYXAgZGF0YSBhbmQgY29uZmlnIGludG8gYSBzaW5nbGUgSnNvbiBmaWxlLiBZb3UgY2FuIGxhdGVyIG9wZW4gdGhlIHNhbWUgbWFwXHJcbiAgICAgICAgYnkgdXBsb2FkaW5nIHRoaXMgZmlsZSB0byBrZXBsZXIuZ2wuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxyXG4gICAgPFN0eWxlZEpzb25FeHBvcnRTZWN0aW9uIGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtbW9kYWxfX2pzb24tb3B0aW9uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hcCBDb25maWc8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICB7TUFQX0NPTkZJR19ERVNDUklQVElPTn1cclxuICAgICAgICAgIDxFeHBvcnRNYXBMaW5rIGhyZWY9e0dJVEhVQl9BRERfREFUQV9UT19NQVB9PmFkZERhdGFUb01hcDwvRXhwb3J0TWFwTGluaz4uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld2VyXCI+XHJcbiAgICAgICAgICA8SlNPTlByZXR0eSBpZD1cImpzb24tcHJldHR5XCIganNvbj17Y29uZmlnfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxyXG4gICAgICAgICAgPFN0eWxlZFdhcm5pbmc+XHJcbiAgICAgICAgICAgICogTWFwIGNvbmZpZyBpcyBjb3VwbGVkIHdpdGggbG9hZGVkIGRhdGFzZXRzLiDigJhkYXRhSWTigJkgaXMgdXNlZCB0byBiaW5kIGxheWVycywgZmlsdGVycyxcclxuICAgICAgICAgICAgYW5kIHRvb2x0aXBzIHRvIGEgc3BlY2lmaWMgZGF0YXNldC4gV2hlbiBwYXNzaW5nIHRoaXMgY29uZmlnIHRvIGFkZERhdGFUb01hcCwgbWFrZSBzdXJlXHJcbiAgICAgICAgICAgIHRoZSBkYXRhc2V0IGlkIG1hdGNoZXMgdGhlIGRhdGFJZC9zIGluIHRoaXMgY29uZmlnLlxyXG4gICAgICAgICAgPC9TdHlsZWRXYXJuaW5nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkSnNvbkV4cG9ydFNlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbikpO1xyXG5cclxuRXhwb3J0SnNvbk1hcC5wcm9wVHlwZXMgPSBleHBvcnRKc29uUHJvcFR5cGVzO1xyXG5cclxuRXhwb3J0SnNvbk1hcC5kaXNwbGF5TmFtZSA9ICdFeHBvcnRKc29uTWFwJztcclxuXHJcbmNvbnN0IEV4cG9ydEpzb25NYXBGYWN0b3J5ID0gKCkgPT4gRXhwb3J0SnNvbk1hcDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEpzb25NYXBGYWN0b3J5O1xyXG4iXX0=