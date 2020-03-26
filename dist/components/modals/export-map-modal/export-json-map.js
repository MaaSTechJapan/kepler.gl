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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1qc29uLW1hcC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiZXJyb3JDb2xvciIsInNlbGVjdEJvcmRlckNvbG9yTFQiLCJleHBvcnRKc29uUHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIkV4cG9ydEpzb25NYXAiLCJSZWFjdCIsIm1lbW8iLCJjb25maWciLCJNQVBfQ09ORklHX0RFU0NSSVBUSU9OIiwiR0lUSFVCX0FERF9EQVRBX1RPX01BUCIsInByb3BUeXBlcyIsImRpc3BsYXlOYW1lIiwiRXhwb3J0SnNvbk1hcEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxrQ0FBT0Msc0NBQVAsQ0FBSCxvQkFFaEIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRlcsRUFPTCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLG1CQUFoQjtBQUFBLENBUEEsQ0FBN0I7QUEwQkEsSUFBTUMsbUJBQW1CLEdBQUc7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDO0FBRE8sQ0FBNUI7O0FBSUEsSUFBTUMsYUFBYSxHQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEseUJBQUVDLE1BQUY7QUFBQSxNQUFFQSxNQUFGLDRCQUFXLEVBQVg7QUFBQSxzQkFDL0IsMERBQ0UsZ0NBQUMsa0NBQUQscUJBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREYsZUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsd0lBRkYsQ0FERixlQVFFLGdDQUFDLHVCQUFEO0FBQXlCLElBQUEsU0FBUyxFQUFDO0FBQW5DLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBREYsZUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0MsdUNBREgsZUFFRSxnQ0FBQyx5QkFBRDtBQUFlLElBQUEsSUFBSSxFQUFFQztBQUFyQixvQkFGRixNQUZGLENBREYsZUFRRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLDJCQUFEO0FBQVksSUFBQSxFQUFFLEVBQUMsYUFBZjtBQUE2QixJQUFBLElBQUksRUFBRUY7QUFBbkMsSUFERixDQURGLGVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLHlCQUFELHdQQURGLENBSkYsQ0FSRixDQVJGLENBRCtCO0FBQUEsQ0FBWCxDQUF0Qjs7QUFpQ0FILGFBQWEsQ0FBQ00sU0FBZCxHQUEwQlYsbUJBQTFCO0FBRUFJLGFBQWEsQ0FBQ08sV0FBZCxHQUE0QixlQUE1Qjs7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsU0FBTVIsYUFBTjtBQUFBLENBQTdCOztlQUVlUSxvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEpTT05QcmV0dHkgZnJvbSAncmVhY3QtanNvbi1wcmV0dHknO1xuaW1wb3J0IHtHSVRIVUJfQUREX0RBVEFfVE9fTUFQfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xuaW1wb3J0IHtNQVBfQ09ORklHX0RFU0NSSVBUSU9OfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdHlsZWRFeHBvcnRNYXBTZWN0aW9uLCBTdHlsZWRXYXJuaW5nLCBFeHBvcnRNYXBMaW5rfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiA9IHN0eWxlZChTdHlsZWRFeHBvcnRTZWN0aW9uKWBcbiAgLm5vdGUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC52aWV3ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBwYWRkaW5nOiAwLjVlbSAzLjVlbSAwLjVlbSAxZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IGV4cG9ydEpzb25Qcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmNvbnN0IEV4cG9ydEpzb25NYXAgPSBSZWFjdC5tZW1vKCh7Y29uZmlnID0ge319KSA9PiAoXG4gIDxkaXY+XG4gICAgPFN0eWxlZEV4cG9ydE1hcFNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgIEV4cG9ydCBjdXJyZW50IG1hcCBkYXRhIGFuZCBjb25maWcgaW50byBhIHNpbmdsZSBKc29uIGZpbGUuIFlvdSBjYW4gbGF0ZXIgb3BlbiB0aGUgc2FtZSBtYXBcbiAgICAgICAgYnkgdXBsb2FkaW5nIHRoaXMgZmlsZSB0byBrZXBsZXIuZ2wuXG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZEV4cG9ydE1hcFNlY3Rpb24+XG4gICAgPFN0eWxlZEpzb25FeHBvcnRTZWN0aW9uIGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtbW9kYWxfX2pzb24tb3B0aW9uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+TWFwIENvbmZpZzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAge01BUF9DT05GSUdfREVTQ1JJUFRJT059XG4gICAgICAgICAgPEV4cG9ydE1hcExpbmsgaHJlZj17R0lUSFVCX0FERF9EQVRBX1RPX01BUH0+YWRkRGF0YVRvTWFwPC9FeHBvcnRNYXBMaW5rPi5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld2VyXCI+XG4gICAgICAgICAgPEpTT05QcmV0dHkgaWQ9XCJqc29uLXByZXR0eVwiIGpzb249e2NvbmZpZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgIDxTdHlsZWRXYXJuaW5nPlxuICAgICAgICAgICAgKiBNYXAgY29uZmlnIGlzIGNvdXBsZWQgd2l0aCBsb2FkZWQgZGF0YXNldHMuIOKAmGRhdGFJZOKAmSBpcyB1c2VkIHRvIGJpbmQgbGF5ZXJzLCBmaWx0ZXJzLFxuICAgICAgICAgICAgYW5kIHRvb2x0aXBzIHRvIGEgc3BlY2lmaWMgZGF0YXNldC4gV2hlbiBwYXNzaW5nIHRoaXMgY29uZmlnIHRvIGFkZERhdGFUb01hcCwgbWFrZSBzdXJlXG4gICAgICAgICAgICB0aGUgZGF0YXNldCBpZCBtYXRjaGVzIHRoZSBkYXRhSWQvcyBpbiB0aGlzIGNvbmZpZy5cbiAgICAgICAgICA8L1N0eWxlZFdhcm5pbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9TdHlsZWRKc29uRXhwb3J0U2VjdGlvbj5cbiAgPC9kaXY+XG4pKTtcblxuRXhwb3J0SnNvbk1hcC5wcm9wVHlwZXMgPSBleHBvcnRKc29uUHJvcFR5cGVzO1xuXG5FeHBvcnRKc29uTWFwLmRpc3BsYXlOYW1lID0gJ0V4cG9ydEpzb25NYXAnO1xuXG5jb25zdCBFeHBvcnRKc29uTWFwRmFjdG9yeSA9ICgpID0+IEV4cG9ydEpzb25NYXA7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEpzb25NYXBGYWN0b3J5O1xuIl19