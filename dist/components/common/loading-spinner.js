"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 50%;\n  border: 3px solid ", ";\n  padding: 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border-left-color: ", ";\n    animation: _preloader_spin_ 500ms linear infinite;\n    border-radius: 50%;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    cursor: wait;\n    border-style: solid;\n    display: block;\n    animation-name: ", ";\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animationName = (0, _styledComponents.keyframes)(_templateObject());

var Loader = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.color || props.theme.primaryBtnBgd;
}, animationName);

var LoadingWrapper = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.borderColor || props.theme.borderColorLT;
});

var LoadingSpinner = function LoadingSpinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 32 : _ref$size,
      color = _ref.color,
      borderColor = _ref.borderColor,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 3 : _ref$strokeWidth,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 2 : _ref$gap;
  return /*#__PURE__*/_react["default"].createElement(LoadingWrapper, {
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      padding: "".concat(gap, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement(Loader, {
    color: color,
    style: {
      width: "".concat(size - strokeWidth * 2 - gap * 2, "px"),
      height: "".concat(size - strokeWidth * 2 - gap * 2, "px")
    }
  }));
};

var _default = LoadingSpinner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nLXNwaW5uZXIuanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uTmFtZSIsImtleWZyYW1lcyIsIkxvYWRlciIsInN0eWxlZCIsInNwYW4iLCJwcm9wcyIsImNvbG9yIiwidGhlbWUiLCJwcmltYXJ5QnRuQmdkIiwiTG9hZGluZ1dyYXBwZXIiLCJkaXYiLCJib3JkZXJDb2xvciIsImJvcmRlckNvbG9yTFQiLCJMb2FkaW5nU3Bpbm5lciIsInNpemUiLCJzdHJva2VXaWR0aCIsImdhcCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLE9BQUdDLDJCQUFILG9CQUFuQjs7QUFTQSxJQUFNQyxNQUFNLEdBQUdDLDZCQUFPQyxJQUFWLHFCQUNhLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sSUFBZUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGFBQS9CO0FBQUEsQ0FEbEIsRUFVVVIsYUFWVixDQUFaOztBQWFBLElBQU1TLGNBQWMsR0FBR04sNkJBQU9PLEdBQVYscUJBRUUsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sV0FBTixJQUFxQk4sS0FBSyxDQUFDRSxLQUFOLENBQVlLLGFBQXJDO0FBQUEsQ0FGUCxDQUFwQjs7QUFNQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsdUJBQUVDLElBQUY7QUFBQSxNQUFFQSxJQUFGLDBCQUFTLEVBQVQ7QUFBQSxNQUFhUixLQUFiLFFBQWFBLEtBQWI7QUFBQSxNQUFvQkssV0FBcEIsUUFBb0JBLFdBQXBCO0FBQUEsOEJBQWlDSSxXQUFqQztBQUFBLE1BQWlDQSxXQUFqQyxpQ0FBK0MsQ0FBL0M7QUFBQSxzQkFBa0RDLEdBQWxEO0FBQUEsTUFBa0RBLEdBQWxELHlCQUF3RCxDQUF4RDtBQUFBLHNCQUNyQixnQ0FBQyxjQUFEO0FBQWdCLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLEtBQUssWUFBS0gsSUFBTCxPQUFOO0FBQXFCSSxNQUFBQSxNQUFNLFlBQUtKLElBQUwsT0FBM0I7QUFBMENLLE1BQUFBLE9BQU8sWUFBS0gsR0FBTDtBQUFqRDtBQUF2QixrQkFDRSxnQ0FBQyxNQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVWLEtBRFQ7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUNMVyxNQUFBQSxLQUFLLFlBQUtILElBQUksR0FBR0MsV0FBVyxHQUFHLENBQXJCLEdBQXlCQyxHQUFHLEdBQUcsQ0FBcEMsT0FEQTtBQUVMRSxNQUFBQSxNQUFNLFlBQUtKLElBQUksR0FBR0MsV0FBVyxHQUFHLENBQXJCLEdBQXlCQyxHQUFHLEdBQUcsQ0FBcEM7QUFGRDtBQUZULElBREYsQ0FEcUI7QUFBQSxDQUF2Qjs7ZUFZZUgsYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IGFuaW1hdGlvbk5hbWUgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2FkZXIgPSBzdHlsZWQuc3BhbmBcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yIHx8IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xyXG4gICAgYW5pbWF0aW9uOiBfcHJlbG9hZGVyX3NwaW5fIDUwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiB3YWl0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7YW5pbWF0aW9uTmFtZX07XHJcbn1gO1xyXG5cclxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLmJvcmRlckNvbG9yIHx8IHByb3BzLnRoZW1lLmJvcmRlckNvbG9yTFR9O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuYDtcclxuXHJcbmNvbnN0IExvYWRpbmdTcGlubmVyID0gKHtzaXplID0gMzIsIGNvbG9yLCBib3JkZXJDb2xvciwgc3Ryb2tlV2lkdGggPSAzLCBnYXAgPSAyfSkgPT4gKFxyXG4gIDxMb2FkaW5nV3JhcHBlciBzdHlsZT17e3dpZHRoOiBgJHtzaXplfXB4YCwgaGVpZ2h0OiBgJHtzaXplfXB4YCwgcGFkZGluZzogYCR7Z2FwfXB4YH19PlxyXG4gICAgPExvYWRlclxyXG4gICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke3NpemUgLSBzdHJva2VXaWR0aCAqIDIgLSBnYXAgKiAyfXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke3NpemUgLSBzdHJva2VXaWR0aCAqIDIgLSBnYXAgKiAyfXB4YFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NwaW5uZXI7XHJcbiJdfQ==