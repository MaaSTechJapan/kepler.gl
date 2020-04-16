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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1tYXAtbW9kYWwuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25DaGFuZ2VFeHBvcnREYXRhIiwib25DaGFuZ2VFeHBvcnRNYXBUeXBlIiwibWFwRm9ybWF0Iiwic3RyaW5nIiwic3R5bGUiLCJ3aWR0aCIsIk5PX09QIiwiRXhwb3J0TWFwTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkV4cG9ydEh0bWxNYXBGYWN0b3J5IiwiRXhwb3J0SnNvbk1hcEZhY3RvcnkiLCJFeHBvcnRIdG1sTWFwIiwiRXhwb3J0SnNvbk1hcCIsIkV4cG9ydE1hcE1vZGFsIiwiUmVhY3QiLCJtZW1vIiwiY29uZmlnIiwib25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQiLCJvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlIiwiRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyIsIm1hcCIsIm9wIiwiaWQiLCJmb3JtYXQiLCJhdmFpbGFibGUiLCJsYWJlbCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUMsTUFESDtBQUVoQkMsRUFBQUEsMkJBQTJCLEVBQUVGLHNCQUFVRyxJQUFWLENBQWVDLFVBRjVCO0FBR2hCQyxF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QkFBN0I7QUFFQSxTQUFPaEIsY0FBUDtBQUNEOztlQUVjTixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge0ZpbGVUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge1N0eWxlZE1vZGFsQ29udGVudCwgU3R5bGVkVHlwZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtFWFBPUlRfTUFQX0ZPUk1BVFMsIEVYUE9SVF9NQVBfRk9STUFUX09QVElPTlN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0TWFwU2VjdGlvbn0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCBFeHBvcnRIdG1sTWFwRmFjdG9yeSBmcm9tICcuL2V4cG9ydC1odG1sLW1hcCc7XG5pbXBvcnQgRXhwb3J0SnNvbk1hcEZhY3RvcnkgZnJvbSAnLi9leHBvcnQtanNvbi1tYXAnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2VFeHBvcnREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2VFeHBvcnRNYXBUeXBlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWFwRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5jb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMCUnfTtcblxuY29uc3QgTk9fT1AgPSAoKSA9PiB7fTtcblxuRXhwb3J0TWFwTW9kYWxGYWN0b3J5LmRlcHMgPSBbRXhwb3J0SHRtbE1hcEZhY3RvcnksIEV4cG9ydEpzb25NYXBGYWN0b3J5XTtcblxuZnVuY3Rpb24gRXhwb3J0TWFwTW9kYWxGYWN0b3J5KEV4cG9ydEh0bWxNYXAsIEV4cG9ydEpzb25NYXApIHtcbiAgY29uc3QgRXhwb3J0TWFwTW9kYWwgPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBjb25maWcgPSB7fSxcbiAgICAgIG9uQ2hhbmdlRXhwb3J0RGF0YSA9IE5PX09QLFxuICAgICAgb25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQgPSBOT19PUCxcbiAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUgPSBOT19PUCxcbiAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiA9IE5PX09QLFxuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfSkgPT4gKFxuICAgICAgPFN0eWxlZE1vZGFsQ29udGVudCBjbGFzc05hbWU9XCJleHBvcnQtbWFwLW1vZGFsXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hcCBmb3JtYXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkNob29zZSB0aGUgZm9ybWF0IHRvIGV4cG9ydCB5b3VyIG1hcCB0bzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICB7RVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRUeXBlXG4gICAgICAgICAgICAgICAgICBrZXk9e29wLmlkfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e29wdGlvbnMuZm9ybWF0ID09PSBvcC5pZH1cbiAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZT17b3AuYXZhaWxhYmxlfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3AuYXZhaWxhYmxlICYmIG9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0KG9wLmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmlsZVR5cGUgZXh0PXtvcC5sYWJlbH0gaGVpZ2h0PVwiODBweFwiIGZvbnRTaXplPVwiMTFweFwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUeXBlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF06IChcbiAgICAgICAgICAgICAgICA8RXhwb3J0SHRtbE1hcFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZT17b25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbj17b25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc1tvcHRpb25zLmZvcm1hdF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXTogKFxuICAgICAgICAgICAgICAgIDxFeHBvcnRKc29uTWFwXG4gICAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0RGF0YT17b25DaGFuZ2VFeHBvcnREYXRhfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc1tvcHRpb25zLmZvcm1hdF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVtvcHRpb25zLmZvcm1hdF1cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgKVxuICApO1xuXG4gIEV4cG9ydE1hcE1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuICBFeHBvcnRNYXBNb2RhbC5kaXNwbGF5TmFtZSA9ICdFeHBvcnRNYXBNb2RhbCc7XG5cbiAgcmV0dXJuIEV4cG9ydE1hcE1vZGFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRNYXBNb2RhbEZhY3Rvcnk7XG4iXX0=