"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MapIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MapIcon, _Component);

  var _super = _createSuper(MapIcon);

  function MapIcon() {
    (0, _classCallCheck2["default"])(this, MapIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MapIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: '0 0 602 602'
      }, this.props), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M573.864,323.679l25.6-201.737L409.988,50.046L197.993,151.289L0,67.678l27.935,220.105L2.223,506.009l208.665,39.135\r l200.136-38.125l189.865,43.823L573.864,323.679z M210.855,522.625L26.64,488.076l23.732-199.335L26.803,103.007l171.761,72.543\r L410.987,74.083l164.331,62.361l-23.755,187.142l23.648,198.602l-163.764-37.782L210.855,522.625z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M506.021,405.449c-5.509,0-10.604,1.596-15.049,4.167c-17.531-12.832-35.583-27.904-36.47-47.735\r c-1.217-27.195,15.439-53.227-3.623-78.182c-18.625-24.382-66.301-7.944-84.73-26.264c2.873-4.617,4.593-10.01,4.593-15.844\r c0-16.671-13.519-30.192-30.187-30.192c-16.68,0-30.192,13.515-30.192,30.192c0,9.561,4.534,17.98,11.467,23.513\r c-2.907,7.358-4.729,15.167-5.048,23.141c-0.496,12.596,3.121,25.126,0.391,37.634c-2.252,10.391-16.875,9.729-24.757,9.788\r c-19.875,0.177-48.202-3.57-61.023,10.462c-3.783-2.843-8.207-4.812-13.077-5.621c-2.87-25.848,2.098-51.102-20.824-70.985\r c-14.736-12.794-38.846-18.344-52.438-32.719c2.873-4.619,4.61-10.031,4.61-15.871c0-16.674-13.515-30.198-30.189-30.198\r c-16.668,0-30.192,13.515-30.192,30.198c0,16.668,13.515,30.183,30.192,30.183c5.562,0,10.707-1.604,15.179-4.229\r c10.048,10.083,23.915,16.784,36.892,23.56c16.529,8.627,28.844,19.698,31.108,39.283c1.241,10.734,0.762,21.291,1.46,31.854\r c-12.135,3.918-20.978,15.16-20.978,28.602c0,16.681,13.515,30.192,30.195,30.192c16.668,0,30.189-13.512,30.189-30.192\r c0-3.942-0.81-7.701-2.189-11.159c10.024-18.063,56.066-5.745,73.423-11.55c12.644-4.238,17.13-16.083,18.247-28.365\r c1.063-11.473-2.637-22.757-0.91-34.283c0.686-4.69,1.867-9.224,3.439-13.55c1.644,0.271,3.311,0.502,5.024,0.502\r c5.308,0,10.22-1.489,14.559-3.904c18.684,18.713,55.768,6.174,79.328,20.271c28.017,16.754-0.792,64.046,8.051,89.309\r c6.123,17.472,22.13,30.499,37.994,42.232c-2.902,4.64-4.664,10.084-4.664,15.953c0,16.681,13.507,30.192,30.198,30.192\r c16.657,0,30.192-13.512,30.192-30.192C536.213,418.979,522.689,405.449,506.021,405.449z"
      })));
    }
  }]);
  return MapIcon;
}(_react.Component);

(0, _defineProperty2["default"])(MapIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(MapIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-add',
  totalColor: 1
});
var _default = MapIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9tYXAuanMiXSwibmFtZXMiOlsiTWFwSWNvbiIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiY29sb3JzIiwiYXJyYXlPZiIsInByZWRlZmluZWRDbGFzc05hbWUiLCJ0b3RhbENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7OzZCQWFLO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQ7QUFBTSxRQUFBLE9BQU8sRUFBRTtBQUFmLFNBQWtDLEtBQUtDLEtBQXZDLGdCQUNFLHdEQUNFO0FBQ0UsUUFBQSxDQUFDLEVBQUM7QUFESixRQURGLGVBTUU7QUFDRSxRQUFBLENBQUMsRUFBQztBQURKLFFBTkYsQ0FERixDQURGO0FBMkJEOzs7RUF6Q21CQyxnQjs7aUNBQWhCRixPLGVBQ2U7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEZkwsTyxrQkFPa0I7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCSyxFQUFBQSxtQkFBbUIsRUFBRSxtQkFGRDtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQztlQXFDVFQsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgTWFwSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxNnB4JyxcclxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWFkZCcsXHJcbiAgICB0b3RhbENvbG9yOiAxXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJhc2Ugdmlld0JveD17JzAgMCA2MDIgNjAyJ30gey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk01NzMuODY0LDMyMy42NzlsMjUuNi0yMDEuNzM3TDQwOS45ODgsNTAuMDQ2TDE5Ny45OTMsMTUxLjI4OUwwLDY3LjY3OGwyNy45MzUsMjIwLjEwNUwyLjIyMyw1MDYuMDA5bDIwOC42NjUsMzkuMTM1XHJcblx0XHRcdGwyMDAuMTM2LTM4LjEyNWwxODkuODY1LDQzLjgyM0w1NzMuODY0LDMyMy42Nzl6IE0yMTAuODU1LDUyMi42MjVMMjYuNjQsNDg4LjA3NmwyMy43MzItMTk5LjMzNUwyNi44MDMsMTAzLjAwN2wxNzEuNzYxLDcyLjU0M1xyXG5cdFx0XHRMNDEwLjk4Nyw3NC4wODNsMTY0LjMzMSw2Mi4zNjFsLTIzLjc1NSwxODcuMTQybDIzLjY0OCwxOTguNjAybC0xNjMuNzY0LTM3Ljc4MkwyMTAuODU1LDUyMi42MjV6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTUwNi4wMjEsNDA1LjQ0OWMtNS41MDksMC0xMC42MDQsMS41OTYtMTUuMDQ5LDQuMTY3Yy0xNy41MzEtMTIuODMyLTM1LjU4My0yNy45MDQtMzYuNDctNDcuNzM1XHJcblx0XHRcdGMtMS4yMTctMjcuMTk1LDE1LjQzOS01My4yMjctMy42MjMtNzguMTgyYy0xOC42MjUtMjQuMzgyLTY2LjMwMS03Ljk0NC04NC43My0yNi4yNjRjMi44NzMtNC42MTcsNC41OTMtMTAuMDEsNC41OTMtMTUuODQ0XHJcblx0XHRcdGMwLTE2LjY3MS0xMy41MTktMzAuMTkyLTMwLjE4Ny0zMC4xOTJjLTE2LjY4LDAtMzAuMTkyLDEzLjUxNS0zMC4xOTIsMzAuMTkyYzAsOS41NjEsNC41MzQsMTcuOTgsMTEuNDY3LDIzLjUxM1xyXG5cdFx0XHRjLTIuOTA3LDcuMzU4LTQuNzI5LDE1LjE2Ny01LjA0OCwyMy4xNDFjLTAuNDk2LDEyLjU5NiwzLjEyMSwyNS4xMjYsMC4zOTEsMzcuNjM0Yy0yLjI1MiwxMC4zOTEtMTYuODc1LDkuNzI5LTI0Ljc1Nyw5Ljc4OFxyXG5cdFx0XHRjLTE5Ljg3NSwwLjE3Ny00OC4yMDItMy41Ny02MS4wMjMsMTAuNDYyYy0zLjc4My0yLjg0My04LjIwNy00LjgxMi0xMy4wNzctNS42MjFjLTIuODctMjUuODQ4LDIuMDk4LTUxLjEwMi0yMC44MjQtNzAuOTg1XHJcblx0XHRcdGMtMTQuNzM2LTEyLjc5NC0zOC44NDYtMTguMzQ0LTUyLjQzOC0zMi43MTljMi44NzMtNC42MTksNC42MS0xMC4wMzEsNC42MS0xNS44NzFjMC0xNi42NzQtMTMuNTE1LTMwLjE5OC0zMC4xODktMzAuMTk4XHJcblx0XHRcdGMtMTYuNjY4LDAtMzAuMTkyLDEzLjUxNS0zMC4xOTIsMzAuMTk4YzAsMTYuNjY4LDEzLjUxNSwzMC4xODMsMzAuMTkyLDMwLjE4M2M1LjU2MiwwLDEwLjcwNy0xLjYwNCwxNS4xNzktNC4yMjlcclxuXHRcdFx0YzEwLjA0OCwxMC4wODMsMjMuOTE1LDE2Ljc4NCwzNi44OTIsMjMuNTZjMTYuNTI5LDguNjI3LDI4Ljg0NCwxOS42OTgsMzEuMTA4LDM5LjI4M2MxLjI0MSwxMC43MzQsMC43NjIsMjEuMjkxLDEuNDYsMzEuODU0XHJcblx0XHRcdGMtMTIuMTM1LDMuOTE4LTIwLjk3OCwxNS4xNi0yMC45NzgsMjguNjAyYzAsMTYuNjgxLDEzLjUxNSwzMC4xOTIsMzAuMTk1LDMwLjE5MmMxNi42NjgsMCwzMC4xODktMTMuNTEyLDMwLjE4OS0zMC4xOTJcclxuXHRcdFx0YzAtMy45NDItMC44MS03LjcwMS0yLjE4OS0xMS4xNTljMTAuMDI0LTE4LjA2Myw1Ni4wNjYtNS43NDUsNzMuNDIzLTExLjU1YzEyLjY0NC00LjIzOCwxNy4xMy0xNi4wODMsMTguMjQ3LTI4LjM2NVxyXG5cdFx0XHRjMS4wNjMtMTEuNDczLTIuNjM3LTIyLjc1Ny0wLjkxLTM0LjI4M2MwLjY4Ni00LjY5LDEuODY3LTkuMjI0LDMuNDM5LTEzLjU1YzEuNjQ0LDAuMjcxLDMuMzExLDAuNTAyLDUuMDI0LDAuNTAyXHJcblx0XHRcdGM1LjMwOCwwLDEwLjIyLTEuNDg5LDE0LjU1OS0zLjkwNGMxOC42ODQsMTguNzEzLDU1Ljc2OCw2LjE3NCw3OS4zMjgsMjAuMjcxYzI4LjAxNywxNi43NTQtMC43OTIsNjQuMDQ2LDguMDUxLDg5LjMwOVxyXG5cdFx0XHRjNi4xMjMsMTcuNDcyLDIyLjEzLDMwLjQ5OSwzNy45OTQsNDIuMjMyYy0yLjkwMiw0LjY0LTQuNjY0LDEwLjA4NC00LjY2NCwxNS45NTNjMCwxNi42ODEsMTMuNTA3LDMwLjE5MiwzMC4xOTgsMzAuMTkyXHJcblx0XHRcdGMxNi42NTcsMCwzMC4xOTItMTMuNTEyLDMwLjE5Mi0zMC4xOTJDNTM2LjIxMyw0MTguOTc5LDUyMi42ODksNDA1LjQ0OSw1MDYuMDIxLDQwNS40NDl6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwSWNvbjtcclxuIl19