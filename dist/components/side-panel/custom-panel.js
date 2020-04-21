"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
// This is a dummy component that can be replaced to inject more side panel sub panels into the side bar
function CustomPanelsFactory() {
  var CustomPanels = function CustomPanels(props) {
    return /*#__PURE__*/_react["default"].createElement("div", null);
  };

  CustomPanels.defaultProps = {
    // provide a list of additional panels
    panels: [// {
      //   id: 'rocket',
      //   label: 'Rocket',
      //   iconComponent: Icons.Rocket
      // },
      // {
      //   id: 'chart',
      //   label: 'Chart',
      //   iconComponent: Icons.LineChart
      // }
    ],
    // prop selector from side panel props
    getProps: function getProps(sidePanelProps) {
      return {};
    }
  };
  return CustomPanels;
}

var _default = CustomPanelsFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvY3VzdG9tLXBhbmVsLmpzIl0sIm5hbWVzIjpbIkN1c3RvbVBhbmVsc0ZhY3RvcnkiLCJDdXN0b21QYW5lbHMiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsInBhbmVscyIsImdldFByb3BzIiwic2lkZVBhbmVsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBLFNBQVNBLG1CQUFULEdBQStCO0FBQzdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUM1Qix3QkFBTyw0Q0FBUDtBQUNELEdBRkQ7O0FBSUFELEVBQUFBLFlBQVksQ0FBQ0UsWUFBYixHQUE0QjtBQUMxQjtBQUNBQyxJQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZNLEtBRmtCO0FBYzFCO0FBQ0FDLElBQUFBLFFBQVEsRUFBRSxrQkFBQUMsY0FBYztBQUFBLGFBQUssRUFBTDtBQUFBO0FBZkUsR0FBNUI7QUFrQkEsU0FBT0wsWUFBUDtBQUNEOztlQUVjRCxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBUaGlzIGlzIGEgZHVtbXkgY29tcG9uZW50IHRoYXQgY2FuIGJlIHJlcGxhY2VkIHRvIGluamVjdCBtb3JlIHNpZGUgcGFuZWwgc3ViIHBhbmVscyBpbnRvIHRoZSBzaWRlIGJhclxyXG5mdW5jdGlvbiBDdXN0b21QYW5lbHNGYWN0b3J5KCkge1xyXG4gIGNvbnN0IEN1c3RvbVBhbmVscyA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiA8ZGl2IC8+O1xyXG4gIH07XHJcblxyXG4gIEN1c3RvbVBhbmVscy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAvLyBwcm92aWRlIGEgbGlzdCBvZiBhZGRpdGlvbmFsIHBhbmVsc1xyXG4gICAgcGFuZWxzOiBbXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBpZDogJ3JvY2tldCcsXHJcbiAgICAgIC8vICAgbGFiZWw6ICdSb2NrZXQnLFxyXG4gICAgICAvLyAgIGljb25Db21wb25lbnQ6IEljb25zLlJvY2tldFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgaWQ6ICdjaGFydCcsXHJcbiAgICAgIC8vICAgbGFiZWw6ICdDaGFydCcsXHJcbiAgICAgIC8vICAgaWNvbkNvbXBvbmVudDogSWNvbnMuTGluZUNoYXJ0XHJcbiAgICAgIC8vIH1cclxuICAgIF0sXHJcbiAgICAvLyBwcm9wIHNlbGVjdG9yIGZyb20gc2lkZSBwYW5lbCBwcm9wc1xyXG4gICAgZ2V0UHJvcHM6IHNpZGVQYW5lbFByb3BzID0+ICh7fSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gQ3VzdG9tUGFuZWxzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYW5lbHNGYWN0b3J5O1xyXG4iXX0=