"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

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
var DimensionScaleSelector = function DimensionScaleSelector(_ref) {
  var label = _ref.label,
      onSelect = _ref.onSelect,
      options = _ref.options,
      scaleType = _ref.scaleType,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, label || 'Scale'), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    disabled: disabled,
    selectedItems: scaleType,
    options: options,
    multiSelect: false,
    searchable: false,
    onChange: onSelect
  }));
};

var _default = DimensionScaleSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIkRpbWVuc2lvblNjYWxlU2VsZWN0b3IiLCJsYWJlbCIsIm9uU2VsZWN0Iiwib3B0aW9ucyIsInNjYWxlVHlwZSIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixPQUE2RDtBQUFBLE1BQTNEQyxLQUEyRCxRQUEzREEsS0FBMkQ7QUFBQSxNQUFwREMsUUFBb0QsUUFBcERBLFFBQW9EO0FBQUEsTUFBMUNDLE9BQTBDLFFBQTFDQSxPQUEwQztBQUFBLE1BQWpDQyxTQUFpQyxRQUFqQ0EsU0FBaUM7QUFBQSwyQkFBdEJDLFFBQXNCO0FBQUEsTUFBdEJBLFFBQXNCLDhCQUFYLEtBQVc7QUFDMUYsc0JBQ0UsZ0NBQUMsa0NBQUQscUJBQ0UsZ0NBQUMsNEJBQUQsUUFBYUosS0FBSyxJQUFJLE9BQXRCLENBREYsZUFFRSxnQ0FBQyx3QkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFSSxRQURaO0FBRUUsSUFBQSxhQUFhLEVBQUVELFNBRmpCO0FBR0UsSUFBQSxPQUFPLEVBQUVELE9BSFg7QUFJRSxJQUFBLFdBQVcsRUFBRSxLQUpmO0FBS0UsSUFBQSxVQUFVLEVBQUUsS0FMZDtBQU1FLElBQUEsUUFBUSxFQUFFRDtBQU5aLElBRkYsQ0FERjtBQWFELENBZEQ7O2VBZ0JlRixzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7UGFuZWxMYWJlbCwgU2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XHJcblxyXG5jb25zdCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yID0gKHtsYWJlbCwgb25TZWxlY3QsIG9wdGlvbnMsIHNjYWxlVHlwZSwgZGlzYWJsZWQgPSBmYWxzZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgIDxQYW5lbExhYmVsPntsYWJlbCB8fCAnU2NhbGUnfTwvUGFuZWxMYWJlbD5cclxuICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzY2FsZVR5cGV9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0fVxyXG4gICAgICAvPlxyXG4gICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yO1xyXG4iXX0=