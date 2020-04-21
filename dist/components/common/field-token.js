"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaultSettings = require("../../constants/default-settings");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: rgba(", ", 0.2);\n  border-radius: 2px;\n  border: 1px solid rgb(", ");\n  color: rgb(", ");\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 400;\n  padding: 0 5px;\n  text-align: center;\n  width: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FieldTag = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
});

var FieldToken = function FieldToken(_ref) {
  var type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement(FieldTag, {
    color: _defaultSettings.FILED_TYPE_DISPLAY[type] && _defaultSettings.FILED_TYPE_DISPLAY[type].color || _defaultSettings.FIELD_COLORS["default"]
  }, _defaultSettings.FILED_TYPE_DISPLAY[type].label);
};

var _default = FieldToken;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC10b2tlbi5qcyJdLCJuYW1lcyI6WyJGaWVsZFRhZyIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiY29sb3IiLCJGaWVsZFRva2VuIiwidHlwZSIsIkZJTEVEX1RZUEVfRElTUExBWSIsIkZJRUxEX0NPTE9SUyIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyw2QkFBT0MsR0FBVixvQkFDYSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FEbEIsRUFHWSxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FIakIsRUFJQyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FKTixDQUFkOztBQWFBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsc0JBQ2pCLGdDQUFDLFFBQUQ7QUFDRSxJQUFBLEtBQUssRUFBR0Msb0NBQW1CRCxJQUFuQixLQUE0QkMsb0NBQW1CRCxJQUFuQixFQUF5QkYsS0FBdEQsSUFBZ0VJO0FBRHpFLEtBR0dELG9DQUFtQkQsSUFBbkIsRUFBeUJHLEtBSDVCLENBRGlCO0FBQUEsQ0FBbkI7O2VBUWVKLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7RklMRURfVFlQRV9ESVNQTEFZLCBGSUVMRF9DT0xPUlN9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IEZpZWxkVGFnID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR7cHJvcHMgPT4gcHJvcHMuY29sb3J9LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn0pO1xyXG4gIGNvbG9yOiByZ2IoJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn0pO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGaWVsZFRva2VuID0gKHt0eXBlfSkgPT4gKFxyXG4gIDxGaWVsZFRhZ1xyXG4gICAgY29sb3I9eyhGSUxFRF9UWVBFX0RJU1BMQVlbdHlwZV0gJiYgRklMRURfVFlQRV9ESVNQTEFZW3R5cGVdLmNvbG9yKSB8fCBGSUVMRF9DT0xPUlMuZGVmYXVsdH1cclxuICA+XHJcbiAgICB7RklMRURfVFlQRV9ESVNQTEFZW3R5cGVdLmxhYmVsfVxyXG4gIDwvRmllbGRUYWc+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFRva2VuO1xyXG4iXX0=