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
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({}, this.props, {
        viewBox: '0 0 602 602'
      }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
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
  predefinedClassName: 'data-ex-icons-map-icon',
  totalColor: 1
});
var _default = MapIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9tYXAtaWNvbi5qcyJdLCJuYW1lcyI6WyJNYXBJY29uIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJjb2xvcnMiLCJhcnJheU9mIiwicHJlZGVmaW5lZENsYXNzTmFtZSIsInRvdGFsQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7Ozs7NkJBYUs7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxnQ0FBVSxLQUFLQyxLQUFmO0FBQXNCLFFBQUEsT0FBTyxFQUFFO0FBQS9CLHVCQUNFLHdEQUNFO0FBQ0UsUUFBQSxDQUFDLEVBQUM7QUFESixRQURGLGVBTUU7QUFDRSxRQUFBLENBQUMsRUFBQztBQURKLFFBTkYsQ0FERixDQURGO0FBMkJEOzs7RUF6Q21CQyxnQjs7aUNBQWhCRixPLGVBQ2U7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEZkwsTyxrQkFPa0I7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCSyxFQUFBQSxtQkFBbUIsRUFBRSx3QkFGRDtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQztlQXFDVFQsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgTWFwSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxNnB4JyxcclxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLW1hcC1pY29uJyxcclxuICAgIHRvdGFsQ29sb3I6IDFcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30gdmlld0JveD17JzAgMCA2MDIgNjAyJ30+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTU3My44NjQsMzIzLjY3OWwyNS42LTIwMS43MzdMNDA5Ljk4OCw1MC4wNDZMMTk3Ljk5MywxNTEuMjg5TDAsNjcuNjc4bDI3LjkzNSwyMjAuMTA1TDIuMjIzLDUwNi4wMDlsMjA4LjY2NSwzOS4xMzVcclxuXHRcdFx0bDIwMC4xMzYtMzguMTI1bDE4OS44NjUsNDMuODIzTDU3My44NjQsMzIzLjY3OXogTTIxMC44NTUsNTIyLjYyNUwyNi42NCw0ODguMDc2bDIzLjczMi0xOTkuMzM1TDI2LjgwMywxMDMuMDA3bDE3MS43NjEsNzIuNTQzXHJcblx0XHRcdEw0MTAuOTg3LDc0LjA4M2wxNjQuMzMxLDYyLjM2MWwtMjMuNzU1LDE4Ny4xNDJsMjMuNjQ4LDE5OC42MDJsLTE2My43NjQtMzcuNzgyTDIxMC44NTUsNTIyLjYyNXpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNTA2LjAyMSw0MDUuNDQ5Yy01LjUwOSwwLTEwLjYwNCwxLjU5Ni0xNS4wNDksNC4xNjdjLTE3LjUzMS0xMi44MzItMzUuNTgzLTI3LjkwNC0zNi40Ny00Ny43MzVcclxuXHRcdFx0Yy0xLjIxNy0yNy4xOTUsMTUuNDM5LTUzLjIyNy0zLjYyMy03OC4xODJjLTE4LjYyNS0yNC4zODItNjYuMzAxLTcuOTQ0LTg0LjczLTI2LjI2NGMyLjg3My00LjYxNyw0LjU5My0xMC4wMSw0LjU5My0xNS44NDRcclxuXHRcdFx0YzAtMTYuNjcxLTEzLjUxOS0zMC4xOTItMzAuMTg3LTMwLjE5MmMtMTYuNjgsMC0zMC4xOTIsMTMuNTE1LTMwLjE5MiwzMC4xOTJjMCw5LjU2MSw0LjUzNCwxNy45OCwxMS40NjcsMjMuNTEzXHJcblx0XHRcdGMtMi45MDcsNy4zNTgtNC43MjksMTUuMTY3LTUuMDQ4LDIzLjE0MWMtMC40OTYsMTIuNTk2LDMuMTIxLDI1LjEyNiwwLjM5MSwzNy42MzRjLTIuMjUyLDEwLjM5MS0xNi44NzUsOS43MjktMjQuNzU3LDkuNzg4XHJcblx0XHRcdGMtMTkuODc1LDAuMTc3LTQ4LjIwMi0zLjU3LTYxLjAyMywxMC40NjJjLTMuNzgzLTIuODQzLTguMjA3LTQuODEyLTEzLjA3Ny01LjYyMWMtMi44Ny0yNS44NDgsMi4wOTgtNTEuMTAyLTIwLjgyNC03MC45ODVcclxuXHRcdFx0Yy0xNC43MzYtMTIuNzk0LTM4Ljg0Ni0xOC4zNDQtNTIuNDM4LTMyLjcxOWMyLjg3My00LjYxOSw0LjYxLTEwLjAzMSw0LjYxLTE1Ljg3MWMwLTE2LjY3NC0xMy41MTUtMzAuMTk4LTMwLjE4OS0zMC4xOThcclxuXHRcdFx0Yy0xNi42NjgsMC0zMC4xOTIsMTMuNTE1LTMwLjE5MiwzMC4xOThjMCwxNi42NjgsMTMuNTE1LDMwLjE4MywzMC4xOTIsMzAuMTgzYzUuNTYyLDAsMTAuNzA3LTEuNjA0LDE1LjE3OS00LjIyOVxyXG5cdFx0XHRjMTAuMDQ4LDEwLjA4MywyMy45MTUsMTYuNzg0LDM2Ljg5MiwyMy41NmMxNi41MjksOC42MjcsMjguODQ0LDE5LjY5OCwzMS4xMDgsMzkuMjgzYzEuMjQxLDEwLjczNCwwLjc2MiwyMS4yOTEsMS40NiwzMS44NTRcclxuXHRcdFx0Yy0xMi4xMzUsMy45MTgtMjAuOTc4LDE1LjE2LTIwLjk3OCwyOC42MDJjMCwxNi42ODEsMTMuNTE1LDMwLjE5MiwzMC4xOTUsMzAuMTkyYzE2LjY2OCwwLDMwLjE4OS0xMy41MTIsMzAuMTg5LTMwLjE5MlxyXG5cdFx0XHRjMC0zLjk0Mi0wLjgxLTcuNzAxLTIuMTg5LTExLjE1OWMxMC4wMjQtMTguMDYzLDU2LjA2Ni01Ljc0NSw3My40MjMtMTEuNTVjMTIuNjQ0LTQuMjM4LDE3LjEzLTE2LjA4MywxOC4yNDctMjguMzY1XHJcblx0XHRcdGMxLjA2My0xMS40NzMtMi42MzctMjIuNzU3LTAuOTEtMzQuMjgzYzAuNjg2LTQuNjksMS44NjctOS4yMjQsMy40MzktMTMuNTVjMS42NDQsMC4yNzEsMy4zMTEsMC41MDIsNS4wMjQsMC41MDJcclxuXHRcdFx0YzUuMzA4LDAsMTAuMjItMS40ODksMTQuNTU5LTMuOTA0YzE4LjY4NCwxOC43MTMsNTUuNzY4LDYuMTc0LDc5LjMyOCwyMC4yNzFjMjguMDE3LDE2Ljc1NC0wLjc5Miw2NC4wNDYsOC4wNTEsODkuMzA5XHJcblx0XHRcdGM2LjEyMywxNy40NzIsMjIuMTMsMzAuNDk5LDM3Ljk5NCw0Mi4yMzJjLTIuOTAyLDQuNjQtNC42NjQsMTAuMDg0LTQuNjY0LDE1Ljk1M2MwLDE2LjY4MSwxMy41MDcsMzAuMTkyLDMwLjE5OCwzMC4xOTJcclxuXHRcdFx0YzE2LjY1NywwLDMwLjE5Mi0xMy41MTIsMzAuMTkyLTMwLjE5MkM1MzYuMjEzLDQxOC45NzksNTIyLjY4OSw0MDUuNDQ5LDUwNi4wMjEsNDA1LjQ0OXpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBJY29uO1xyXG4iXX0=