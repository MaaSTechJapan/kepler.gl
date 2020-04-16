"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("./index");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  position: relative;\n  color: currentColor;\n  height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: currentColor;\n  border-radius: 1px;\n  display: inline-block;\n  padding: 0 4px;\n  position: absolute;\n  top: 45%;\n  left: 10%;\n\n  .text {\n    color: white;\n    font-size: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FileNameTag = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.fontSize;
});

var FileTypeIconWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.height;
});

var FileTypeIcon = function FileTypeIcon(_ref) {
  var ext = _ref.ext,
      height = _ref.height,
      fontSize = _ref.fontSize;
  return /*#__PURE__*/_react["default"].createElement(FileTypeIconWrapper, {
    height: height
  }, /*#__PURE__*/_react["default"].createElement(_index.File, {
    height: height
  }), /*#__PURE__*/_react["default"].createElement(FileNameTag, {
    fontSize: fontSize
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text"
  }, ext)));
};

var _default = FileTypeIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9maWxlLXR5cGUuanMiXSwibmFtZXMiOlsiRmlsZU5hbWVUYWciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImZvbnRTaXplIiwiRmlsZVR5cGVJY29uV3JhcHBlciIsImhlaWdodCIsIkZpbGVUeXBlSWNvbiIsImV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDZCQUFPQyxHQUFWLG9CQVdBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxDQVhMLENBQWpCOztBQWVBLElBQU1DLG1CQUFtQixHQUFHSiw2QkFBT0MsR0FBVixxQkFJYixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxNQUFWO0FBQUEsQ0FKUSxDQUF6Qjs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLE1BQU9GLE1BQVAsUUFBT0EsTUFBUDtBQUFBLE1BQWVGLFFBQWYsUUFBZUEsUUFBZjtBQUFBLHNCQUNuQixnQ0FBQyxtQkFBRDtBQUFxQixJQUFBLE1BQU0sRUFBRUU7QUFBN0Isa0JBQ0UsZ0NBQUMsV0FBRDtBQUFNLElBQUEsTUFBTSxFQUFFQTtBQUFkLElBREYsZUFFRSxnQ0FBQyxXQUFEO0FBQWEsSUFBQSxRQUFRLEVBQUVGO0FBQXZCLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUF1QkksR0FBdkIsQ0FERixDQUZGLENBRG1CO0FBQUEsQ0FBckI7O2VBU2VELFkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7RmlsZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5jb25zdCBGaWxlTmFtZVRhZyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiAxMCU7XG5cbiAgLnRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMuZm9udFNpemV9O1xuICB9XG5gO1xuXG5jb25zdCBGaWxlVHlwZUljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9O1xuYDtcblxuY29uc3QgRmlsZVR5cGVJY29uID0gKHtleHQsIGhlaWdodCwgZm9udFNpemV9KSA9PiAoXG4gIDxGaWxlVHlwZUljb25XcmFwcGVyIGhlaWdodD17aGVpZ2h0fT5cbiAgICA8RmlsZSBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICA8RmlsZU5hbWVUYWcgZm9udFNpemU9e2ZvbnRTaXplfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntleHR9PC9kaXY+XG4gICAgPC9GaWxlTmFtZVRhZz5cbiAgPC9GaWxlVHlwZUljb25XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZVR5cGVJY29uO1xuIl19