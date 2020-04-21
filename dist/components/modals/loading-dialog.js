"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loadingSpinner = _interopRequireDefault(require("../common/loading-spinner"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n\n  .loading-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .loading-message {\n    margin-left: 32px;\n    color: ", ";\n    font-weight: 500;\n    font-size: 14px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n\n  span {\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSpinner = _styledComponents["default"].div(_templateObject());

var StyledLoadingDialog = _styledComponents["default"].div.attrs({
  className: 'data-loading-dialog'
})(_templateObject2(), function (props) {
  return props.theme.titleColorLT;
});

var LoadingDialog = function LoadingDialog(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 64 : _ref$size,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Loading...' : _ref$message;
  return /*#__PURE__*/_react["default"].createElement(StyledLoadingDialog, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-content"
  }, /*#__PURE__*/_react["default"].createElement(StyledSpinner, null, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], {
    size: size
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-message"
  }, message)));
};

var _default = LoadingDialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9sb2FkaW5nLWRpYWxvZy5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTcGlubmVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkTG9hZGluZ0RpYWxvZyIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsInRpdGxlQ29sb3JMVCIsIkxvYWRpbmdEaWFsb2ciLCJzaXplIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFuQjs7QUFRQSxJQUFNQyxtQkFBbUIsR0FBR0YsNkJBQU9DLEdBQVAsQ0FBV0UsS0FBWCxDQUFpQjtBQUMzQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRGdDLENBQWpCLENBQUgscUJBZ0JaLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBaEI7QUFBQSxDQWhCTyxDQUF6Qjs7QUFzQkEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLHVCQUFFQyxJQUFGO0FBQUEsTUFBRUEsSUFBRiwwQkFBUyxFQUFUO0FBQUEsMEJBQWFDLE9BQWI7QUFBQSxNQUFhQSxPQUFiLDZCQUF1QixZQUF2QjtBQUFBLHNCQUNwQixnQ0FBQyxtQkFBRCxxQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsYUFBRCxxQkFDRSxnQ0FBQywwQkFBRDtBQUFnQixJQUFBLElBQUksRUFBRUQ7QUFBdEIsSUFERixDQURGLGVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQWtDQyxPQUFsQyxDQUpGLENBREYsQ0FEb0I7QUFBQSxDQUF0Qjs7ZUFXZUYsYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZGluZy1zcGlubmVyJztcclxuXHJcbmNvbnN0IFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMb2FkaW5nRGlhbG9nID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnZGF0YS1sb2FkaW5nLWRpYWxvZydcclxufSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgLmxvYWRpbmctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvYWRpbmdEaWFsb2cgPSAoe3NpemUgPSA2NCwgbWVzc2FnZSA9ICdMb2FkaW5nLi4uJ30pID0+IChcclxuICA8U3R5bGVkTG9hZGluZ0RpYWxvZz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250ZW50XCI+XHJcbiAgICAgIDxTdHlsZWRTcGlubmVyPlxyXG4gICAgICAgIDxMb2FkaW5nU3Bpbm5lciBzaXplPXtzaXplfSAvPlxyXG4gICAgICA8L1N0eWxlZFNwaW5uZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1tZXNzYWdlXCI+e21lc3NhZ2V9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L1N0eWxlZExvYWRpbmdEaWFsb2c+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nRGlhbG9nO1xyXG4iXX0=