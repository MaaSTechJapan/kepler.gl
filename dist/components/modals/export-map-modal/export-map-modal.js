"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("../../common/icons");

var _styledComponents = require("../../common/styled-components");

var _defaultSettings = require("../../../constants/default-settings");

var _components = require("./components");

var _exportHtmlMap = _interopRequireDefault(require("./export-html-map"));

var _exportJsonMap = _interopRequireDefault(require("./export-json-map"));

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var propTypes = {
  options: _propTypes["default"].object,
  onEditUserMapboxAccessToken: _propTypes["default"].func.isRequired,
  onChangeExportData: _propTypes["default"].func,
  onChangeExportMapType: _propTypes["default"].func,
  mapFormat: _propTypes["default"].string
};
var style = {
  width: '100%'
};

var NO_OP = function NO_OP() {};

ExportMapModalFactory.deps = [_exportHtmlMap["default"], _exportJsonMap["default"]];

function ExportMapModalFactory(ExportHtmlMap, ExportJsonMap) {
  var ExportMapModal = _react["default"].memo(function (_ref) {
    var _EXPORT_MAP_FORMATS$H;

    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$onChangeExportDa = _ref.onChangeExportData,
        onChangeExportData = _ref$onChangeExportDa === void 0 ? NO_OP : _ref$onChangeExportDa,
        _ref$onChangeExportMa = _ref.onChangeExportMapFormat,
        onChangeExportMapFormat = _ref$onChangeExportMa === void 0 ? NO_OP : _ref$onChangeExportMa,
        _ref$onChangeExportMa2 = _ref.onChangeExportMapHTMLMode,
        onChangeExportMapHTMLMode = _ref$onChangeExportMa2 === void 0 ? NO_OP : _ref$onChangeExportMa2,
        _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
        onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? NO_OP : _ref$onEditUserMapbox,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledModalContent, {
      className: "export-map-modal"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, "Map format"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, "Choose the format to export your map to")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, _defaultSettings.EXPORT_MAP_FORMAT_OPTIONS.map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledType, {
        key: op.id,
        selected: options.format === op.id,
        available: op.available,
        onClick: function onClick() {
          return op.available && onChangeExportMapFormat(op.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
        ext: op.label,
        height: "80px",
        fontSize: "11px"
      }));
    }))), (_EXPORT_MAP_FORMATS$H = {}, (0, _defineProperty2["default"])(_EXPORT_MAP_FORMATS$H, _defaultSettings.EXPORT_MAP_FORMATS.HTML, /*#__PURE__*/_react["default"].createElement(ExportHtmlMap, {
      onChangeExportMapHTMLMode: onChangeExportMapHTMLMode,
      onEditUserMapboxAccessToken: onEditUserMapboxAccessToken,
      options: options[options.format]
    })), (0, _defineProperty2["default"])(_EXPORT_MAP_FORMATS$H, _defaultSettings.EXPORT_MAP_FORMATS.JSON, /*#__PURE__*/_react["default"].createElement(ExportJsonMap, {
      config: config,
      onChangeExportData: onChangeExportData,
      options: options[options.format]
    })), _EXPORT_MAP_FORMATS$H)[options.format]));
  });

  ExportMapModal.propTypes = propTypes;
  ExportMapModal.displayName = 'ExportMapModal';
  return ExportMapModal;
}

var _default = ExportMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1tYXAtbW9kYWwuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25DaGFuZ2VFeHBvcnREYXRhIiwib25DaGFuZ2VFeHBvcnRNYXBUeXBlIiwibWFwRm9ybWF0Iiwic3RyaW5nIiwic3R5bGUiLCJ3aWR0aCIsIk5PX09QIiwiRXhwb3J0TWFwTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkV4cG9ydEh0bWxNYXBGYWN0b3J5IiwiRXhwb3J0SnNvbk1hcEZhY3RvcnkiLCJFeHBvcnRIdG1sTWFwIiwiRXhwb3J0SnNvbk1hcCIsIkV4cG9ydE1hcE1vZGFsIiwiUmVhY3QiLCJtZW1vIiwiY29uZmlnIiwib25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQiLCJvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlIiwiRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyIsIm1hcCIsIm9wIiwiaWQiLCJmb3JtYXQiLCJhdmFpbGFibGUiLCJsYWJlbCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUMsTUFESDtBQUVoQkMsRUFBQUEsMkJBQTJCLEVBQUVGLHNCQUFVRyxJQUFWLENBQWVDLFVBRjVCO0FBR2hCQyxF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QkFBN0I7QUFFQSxTQUFPaEIsY0FBUDtBQUNEOztlQUVjTixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQge0ZpbGVUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7U3R5bGVkTW9kYWxDb250ZW50LCBTdHlsZWRUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7RVhQT1JUX01BUF9GT1JNQVRTLCBFWFBPUlRfTUFQX0ZPUk1BVF9PUFRJT05TfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7U3R5bGVkRXhwb3J0TWFwU2VjdGlvbn0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IEV4cG9ydEh0bWxNYXBGYWN0b3J5IGZyb20gJy4vZXhwb3J0LWh0bWwtbWFwJztcclxuaW1wb3J0IEV4cG9ydEpzb25NYXBGYWN0b3J5IGZyb20gJy4vZXhwb3J0LWpzb24tbWFwJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZUV4cG9ydERhdGE6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ2hhbmdlRXhwb3J0TWFwVHlwZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbWFwRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMCUnfTtcclxuXHJcbmNvbnN0IE5PX09QID0gKCkgPT4ge307XHJcblxyXG5FeHBvcnRNYXBNb2RhbEZhY3RvcnkuZGVwcyA9IFtFeHBvcnRIdG1sTWFwRmFjdG9yeSwgRXhwb3J0SnNvbk1hcEZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gRXhwb3J0TWFwTW9kYWxGYWN0b3J5KEV4cG9ydEh0bWxNYXAsIEV4cG9ydEpzb25NYXApIHtcclxuICBjb25zdCBFeHBvcnRNYXBNb2RhbCA9IFJlYWN0Lm1lbW8oXHJcbiAgICAoe1xyXG4gICAgICBjb25maWcgPSB7fSxcclxuICAgICAgb25DaGFuZ2VFeHBvcnREYXRhID0gTk9fT1AsXHJcbiAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0ID0gTk9fT1AsXHJcbiAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUgPSBOT19PUCxcclxuICAgICAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuID0gTk9fT1AsXHJcbiAgICAgIG9wdGlvbnMgPSB7fVxyXG4gICAgfSkgPT4gKFxyXG4gICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtbW9kYWxcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5NYXAgZm9ybWF0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkNob29zZSB0aGUgZm9ybWF0IHRvIGV4cG9ydCB5b3VyIG1hcCB0bzwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICB7RVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUy5tYXAob3AgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFR5cGVcclxuICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e29wdGlvbnMuZm9ybWF0ID09PSBvcC5pZH1cclxuICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlPXtvcC5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wLmF2YWlsYWJsZSAmJiBvbkNoYW5nZUV4cG9ydE1hcEZvcm1hdChvcC5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWxlVHlwZSBleHQ9e29wLmxhYmVsfSBoZWlnaHQ9XCI4MHB4XCIgZm9udFNpemU9XCIxMXB4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVHlwZT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1N0eWxlZEV4cG9ydE1hcFNlY3Rpb24+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdOiAoXHJcbiAgICAgICAgICAgICAgICA8RXhwb3J0SHRtbE1hcFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlPXtvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlfVxyXG4gICAgICAgICAgICAgICAgICBvbkVkaXRVc2VyTWFwYm94QWNjZXNzVG9rZW49e29uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbn1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc1tvcHRpb25zLmZvcm1hdF19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXTogKFxyXG4gICAgICAgICAgICAgICAgPEV4cG9ydEpzb25NYXBcclxuICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0RGF0YT17b25DaGFuZ2VFeHBvcnREYXRhfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zW29wdGlvbnMuZm9ybWF0XX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9W29wdGlvbnMuZm9ybWF0XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N0eWxlZE1vZGFsQ29udGVudD5cclxuICAgIClcclxuICApO1xyXG5cclxuICBFeHBvcnRNYXBNb2RhbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG4gIEV4cG9ydE1hcE1vZGFsLmRpc3BsYXlOYW1lID0gJ0V4cG9ydE1hcE1vZGFsJztcclxuXHJcbiAgcmV0dXJuIEV4cG9ydE1hcE1vZGFsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRNYXBNb2RhbEZhY3Rvcnk7XHJcbiJdfQ==