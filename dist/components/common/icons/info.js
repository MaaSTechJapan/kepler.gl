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

var Info = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Info, _Component);

  var _super = _createSuper(Info);

  function Info() {
    (0, _classCallCheck2["default"])(this, Info);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Info, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 64 64"
      }, this.props), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "25",
        cy: "25",
        fill: "none",
        r: "24",
        stroke: this.props.stroke,
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M23.779,16.241c-0.216,0-0.357-0.144-0.357-0.359v-2.618c0-0.215,0.142-0.359,0.357-0.359h2.439  c0.215,0,0.359,0.144,0.359,0.359v2.618c0,0.215-0.145,0.359-0.359,0.359H23.779z M23.852,37.293c-0.215,0-0.358-0.143-0.358-0.358  V20.473c0-0.215,0.144-0.359,0.358-0.359h2.295c0.216,0,0.359,0.144,0.359,0.359v16.462c0,0.216-0.144,0.358-0.359,0.358H23.852z"
      }));
    }
  }]);
  return Info;
}(_react.Component);

exports["default"] = Info;
(0, _defineProperty2["default"])(Info, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Info, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-info',
  stroke: '#FFF'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9pbmZvLmpzIl0sIm5hbWVzIjpbIkluZm8iLCJwcm9wcyIsInN0cm9rZSIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsInByZWRlZmluZWRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7OzZCQVlWO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQ7QUFBTSxRQUFBLE9BQU8sRUFBQztBQUFkLFNBQThCLEtBQUtDLEtBQW5DLGdCQUNFO0FBQ0UsUUFBQSxFQUFFLEVBQUMsSUFETDtBQUVFLFFBQUEsRUFBRSxFQUFDLElBRkw7QUFHRSxRQUFBLElBQUksRUFBQyxNQUhQO0FBSUUsUUFBQSxDQUFDLEVBQUMsSUFKSjtBQUtFLFFBQUEsTUFBTSxFQUFFLEtBQUtBLEtBQUwsQ0FBV0MsTUFMckI7QUFNRSxRQUFBLGFBQWEsRUFBQyxPQU5oQjtBQU9FLFFBQUEsZ0JBQWdCLEVBQUMsSUFQbkI7QUFRRSxRQUFBLFdBQVcsRUFBQztBQVJkLFFBREYsZUFXRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFYRixDQURGO0FBZUQ7OztFQTVCK0JDLGdCOzs7aUNBQWJILEksZUFDQTtBQUNqQjtBQUNBSSxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQztBQUZELEM7aUNBREFOLEksa0JBTUc7QUFDcEJJLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCRyxFQUFBQSxtQkFBbUIsRUFBRSxvQkFGRDtBQUdwQkwsRUFBQUEsTUFBTSxFQUFFO0FBSFksQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtaW5mbycsXHJcbiAgICBzdHJva2U6ICcjRkZGJ1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYXNlIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgY3g9XCIyNVwiXHJcbiAgICAgICAgICBjeT1cIjI1XCJcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHI9XCIyNFwiXHJcbiAgICAgICAgICBzdHJva2U9e3RoaXMucHJvcHMuc3Ryb2tlfVxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0yMy43NzksMTYuMjQxYy0wLjIxNiwwLTAuMzU3LTAuMTQ0LTAuMzU3LTAuMzU5di0yLjYxOGMwLTAuMjE1LDAuMTQyLTAuMzU5LDAuMzU3LTAuMzU5aDIuNDM5ICBjMC4yMTUsMCwwLjM1OSwwLjE0NCwwLjM1OSwwLjM1OXYyLjYxOGMwLDAuMjE1LTAuMTQ1LDAuMzU5LTAuMzU5LDAuMzU5SDIzLjc3OXogTTIzLjg1MiwzNy4yOTNjLTAuMjE1LDAtMC4zNTgtMC4xNDMtMC4zNTgtMC4zNTggIFYyMC40NzNjMC0wLjIxNSwwLjE0NC0wLjM1OSwwLjM1OC0wLjM1OWgyLjI5NWMwLjIxNiwwLDAuMzU5LDAuMTQ0LDAuMzU5LDAuMzU5djE2LjQ2MmMwLDAuMjE2LTAuMTQ0LDAuMzU4LTAuMzU5LDAuMzU4SDIzLjg1MnpcIiAvPlxyXG4gICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=