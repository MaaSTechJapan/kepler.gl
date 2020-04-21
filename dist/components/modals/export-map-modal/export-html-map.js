"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _components = require("./components");

var _defaultSettings = require("../../../constants/default-settings");

var _userGuides = require("../../../constants/user-guides");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: unset;\n  width: unset;\n  img {\n    width: 180px;\n    height: 120px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  padding: ", ";\n  color: ", ";\n  height: ", ";\n  outline: 0;\n  font-size: ", ";\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    outline: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .disclaimer {\n    font-size: ", ";\n    color: ", ";\n    margin-top: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NO_OP = function NO_OP() {};

var ExportMapStyledExportSection = (0, _styledComponents2["default"])(_styledComponents.StyledExportSection)(_templateObject(), function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputColor;
});

var StyledInput = _styledComponents2["default"].input(_templateObject2(), function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? 'red' : props.theme.titleColorLT;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputFontSize;
});

var BigStyledTile = (0, _styledComponents2["default"])(_styledComponents.StyledType)(_templateObject3());
var exportHtmlPropTypes = {
  options: _propTypes["default"].object,
  onEditUserMapboxAccessToken: _propTypes["default"].func.isRequired
};

var ExportHtmlMap = _react["default"].memo(function (_ref) {
  var _ref$onChangeExportMa = _ref.onChangeExportMapHTMLMode,
      onChangeExportMapHTMLMode = _ref$onChangeExportMa === void 0 ? NO_OP : _ref$onChangeExportMa,
      _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
      onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? NO_OP : _ref$onEditUserMapbox,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, "Export your map into an interactive html file.")), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, {
    className: "export-map-modal__html-options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, "Mapbox access token"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, "Use your own Mapbox access token in the html (optional)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement(StyledInput, {
    onChange: function onChange(e) {
      return onEditUserMapboxAccessToken(e.target.value);
    },
    type: "text",
    placeholder: "Paste your Mapbox access token",
    value: options ? options.userMapboxToken : ''
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, _defaultSettings.TOKEN_MISUSE_WARNING), /*#__PURE__*/_react["default"].createElement("span", null, _defaultSettings.DISCLAIMER), /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
    href: _userGuides.GITHUB_EXPORT_HTML_MAP
  }, "How to update an existing map token.")))), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, "Map Mode"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, "Select the app mode. More ", /*#__PURE__*/_react["default"].createElement("a", {
    href: _userGuides.GITHUB_EXPORT_HTML_MAP_MODES
  }, "info"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, _defaultSettings.EXPORT_HTML_MAP_MODE_OPTIONS.map(function (mode) {
    return /*#__PURE__*/_react["default"].createElement(BigStyledTile, {
      key: mode.id,
      selected: options.mode === mode.id,
      available: mode.available,
      onClick: function onClick() {
        return mode.available && onChangeExportMapHTMLMode(mode.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: mode.url,
      alt: ""
    }), /*#__PURE__*/_react["default"].createElement("p", null, "Allow users to ", mode.label, " the map"));
  }))));
});

ExportHtmlMap.propTypes = exportHtmlPropTypes;
ExportHtmlMap.displayName = 'ExportHtmlMap';

var ExportHtmlMapFactory = function ExportHtmlMapFactory() {
  return ExportHtmlMap;
};

var _default = ExportHtmlMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1odG1sLW1hcC5qcyJdLCJuYW1lcyI6WyJOT19PUCIsIkV4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24iLCJTdHlsZWRFeHBvcnRTZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImlucHV0Rm9udFNpemUiLCJpbnB1dENvbG9yIiwiU3R5bGVkSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsImlucHV0UGFkZGluZyIsImVycm9yIiwidGl0bGVDb2xvckxUIiwiaW5wdXRCb3hIZWlnaHQiLCJCaWdTdHlsZWRUaWxlIiwiU3R5bGVkVHlwZSIsImV4cG9ydEh0bWxQcm9wVHlwZXMiLCJvcHRpb25zIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwib25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJFeHBvcnRIdG1sTWFwIiwiUmVhY3QiLCJtZW1vIiwib25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXJNYXBib3hUb2tlbiIsIlRPS0VOX01JU1VTRV9XQVJOSU5HIiwiRElTQ0xBSU1FUiIsIkdJVEhVQl9FWFBPUlRfSFRNTF9NQVAiLCJHSVRIVUJfRVhQT1JUX0hUTUxfTUFQX01PREVTIiwiRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyIsIm1hcCIsIm1vZGUiLCJpZCIsImF2YWlsYWJsZSIsInVybCIsImxhYmVsIiwicHJvcFR5cGVzIiwiZGlzcGxheU5hbWUiLCJFeHBvcnRIdG1sTWFwRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTSxDQUFFLENBQXRCOztBQUVBLElBQU1D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RSxNQUFBLEdBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQURaO0FBRUUsTUFBQSxRQUFRLEVBQUVyQixPQUFPLENBQUNvQixJQUFSLEtBQWlCQSxJQUFJLENBQUNDLEVBRmxDO0FBR0UsTUFBQSxTQUFTLEVBQUVELElBQUksQ0FBQ0UsU0FIbEI7QUFJRSxNQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU1GLElBQUksQ0FBQ0UsU0FBTCxJQUFrQmIseUJBQXlCLENBQUNXLElBQUksQ0FBQ0MsRUFBTixDQUFqRDtBQUFBO0FBSlgsb0JBTUU7QUFBSyxNQUFBLEdBQUcsRUFBRUQsSUFBSSxDQUFDRyxHQUFmO0FBQW9CLE1BQUEsR0FBRyxFQUFDO0FBQXhCLE1BTkYsZUFPRSw4REFBbUJILElBQUksQ0FBQ0ksS0FBeEIsYUFQRixDQURvQztBQUFBLEdBQXJDLENBREgsQ0FQRixDQTFCRixDQURGO0FBQUEsQ0FEb0IsQ0FBdEI7O0FBcURBbEIsYUFBYSxDQUFDbUIsU0FBZCxHQUEwQjFCLG1CQUExQjtBQUVBTyxhQUFhLENBQUNvQixXQUFkLEdBQTRCLGVBQTVCOztBQUVBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxTQUFNckIsYUFBTjtBQUFBLENBQTdCOztlQUVlcUIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1N0eWxlZEV4cG9ydFNlY3Rpb24sIFN0eWxlZFR5cGV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtTdHlsZWRFeHBvcnRNYXBTZWN0aW9uLCBTdHlsZWRXYXJuaW5nLCBFeHBvcnRNYXBMaW5rfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIERJU0NMQUlNRVIsXHJcbiAgRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyxcclxuICBUT0tFTl9NSVNVU0VfV0FSTklOR1xyXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtHSVRIVUJfRVhQT1JUX0hUTUxfTUFQLCBHSVRIVUJfRVhQT1JUX0hUTUxfTUFQX01PREVTfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE5PX09QID0gKCkgPT4ge307XHJcblxyXG5jb25zdCBFeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uID0gc3R5bGVkKFN0eWxlZEV4cG9ydFNlY3Rpb24pYFxyXG4gIC5kaXNjbGFpbWVyIHtcclxuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0UGFkZGluZ307XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmVycm9yID8gJ3JlZCcgOiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFQpfTtcclxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHR9O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Rm9udFNpemV9O1xyXG5cclxuICA6YWN0aXZlLFxyXG4gIDpmb2N1cyxcclxuICAmLmZvY3VzLFxyXG4gICYuYWN0aXZlIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQmlnU3R5bGVkVGlsZSA9IHN0eWxlZChTdHlsZWRUeXBlKWBcclxuICBoZWlnaHQ6IHVuc2V0O1xyXG4gIHdpZHRoOiB1bnNldDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBleHBvcnRIdG1sUHJvcFR5cGVzID0ge1xyXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5jb25zdCBFeHBvcnRIdG1sTWFwID0gUmVhY3QubWVtbyhcclxuICAoe29uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUgPSBOT19PUCwgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuID0gTk9fT1AsIG9wdGlvbnMgPSB7fX0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+RXhwb3J0IHlvdXIgbWFwIGludG8gYW4gaW50ZXJhY3RpdmUgaHRtbCBmaWxlLjwvZGl2PlxyXG4gICAgICA8L1N0eWxlZEV4cG9ydE1hcFNlY3Rpb24+XHJcbiAgICAgIDxFeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uIGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtbW9kYWxfX2h0bWwtb3B0aW9uc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5NYXBib3ggYWNjZXNzIHRva2VuPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+VXNlIHlvdXIgb3duIE1hcGJveCBhY2Nlc3MgdG9rZW4gaW4gdGhlIGh0bWwgKG9wdGlvbmFsKTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIHlvdXIgTWFwYm94IGFjY2VzcyB0b2tlblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zID8gb3B0aW9ucy51c2VyTWFwYm94VG9rZW4gOiAnJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cclxuICAgICAgICAgICAgPFN0eWxlZFdhcm5pbmc+e1RPS0VOX01JU1VTRV9XQVJOSU5HfTwvU3R5bGVkV2FybmluZz5cclxuICAgICAgICAgICAgPHNwYW4+e0RJU0NMQUlNRVJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8RXhwb3J0TWFwTGluayBocmVmPXtHSVRIVUJfRVhQT1JUX0hUTUxfTUFQfT5cclxuICAgICAgICAgICAgICBIb3cgdG8gdXBkYXRlIGFuIGV4aXN0aW5nIG1hcCB0b2tlbi5cclxuICAgICAgICAgICAgPC9FeHBvcnRNYXBMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgPEV4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hcCBNb2RlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIFNlbGVjdCB0aGUgYXBwIG1vZGUuIE1vcmUgPGEgaHJlZj17R0lUSFVCX0VYUE9SVF9IVE1MX01BUF9NT0RFU30+aW5mbzwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICB7RVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUy5tYXAobW9kZSA9PiAoXHJcbiAgICAgICAgICAgIDxCaWdTdHlsZWRUaWxlXHJcbiAgICAgICAgICAgICAga2V5PXttb2RlLmlkfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb25zLm1vZGUgPT09IG1vZGUuaWR9XHJcbiAgICAgICAgICAgICAgYXZhaWxhYmxlPXttb2RlLmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb2RlLmF2YWlsYWJsZSAmJiBvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlKG1vZGUuaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e21vZGUudXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPkFsbG93IHVzZXJzIHRvIHttb2RlLmxhYmVsfSB0aGUgbWFwPC9wPlxyXG4gICAgICAgICAgICA8L0JpZ1N0eWxlZFRpbGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9FeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4pO1xyXG5cclxuRXhwb3J0SHRtbE1hcC5wcm9wVHlwZXMgPSBleHBvcnRIdG1sUHJvcFR5cGVzO1xyXG5cclxuRXhwb3J0SHRtbE1hcC5kaXNwbGF5TmFtZSA9ICdFeHBvcnRIdG1sTWFwJztcclxuXHJcbmNvbnN0IEV4cG9ydEh0bWxNYXBGYWN0b3J5ID0gKCkgPT4gRXhwb3J0SHRtbE1hcDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEh0bWxNYXBGYWN0b3J5O1xyXG4iXX0=