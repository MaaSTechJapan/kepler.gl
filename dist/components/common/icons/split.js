"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var Split = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Split, _Component);

  var _super = _createSuper(Split);

  function Split() {
    (0, _classCallCheck2["default"])(this, Split);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Split, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(7.500000, 7.500000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M19.5,47.4137931 C19.5,48.8421157 20.6192881,50 22,50 C23.3807119,50 24.5,48.8421157 24.5,47.4137931 L24.5,2.5862069 C24.5,1.15788427 23.3807119,0 22,0 C20.6192881,0 19.5,1.15788427 19.5,2.5862069 L19.5,47.4137931 Z"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "4",
        width: "44",
        height: "5",
        rx: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        transform: "translate(2.500000, 24.500000) rotate(90.000000) translate(-2.500000, -24.500000) ",
        x: "-18",
        y: "22",
        width: "41",
        height: "5",
        rx: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        transform: "translate(41.500000, 25.000000) rotate(90.000000) translate(-41.500000, -25.000000) ",
        x: "20.5",
        y: "22.5",
        width: "42",
        height: "5",
        rx: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "41",
        width: "44",
        height: "5",
        rx: "2.5"
      })));
    }
  }]);
  return Split;
}(_react.Component);

exports["default"] = Split;
(0, _defineProperty2["default"])(Split, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Split, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-split'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJTcGxpdCIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7OzZCQVdWO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQsRUFBVSxLQUFLQyxLQUFmLGVBQ0U7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLHNCQUNFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQURGLGVBRUU7QUFBTSxRQUFBLENBQUMsRUFBQyxHQUFSO0FBQVksUUFBQSxDQUFDLEVBQUMsR0FBZDtBQUFrQixRQUFBLEtBQUssRUFBQyxJQUF4QjtBQUE2QixRQUFBLE1BQU0sRUFBQyxHQUFwQztBQUF3QyxRQUFBLEVBQUUsRUFBQztBQUEzQyxRQUZGLGVBR0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxvRkFEWjtBQUVFLFFBQUEsQ0FBQyxFQUFDLEtBRko7QUFHRSxRQUFBLENBQUMsRUFBQyxJQUhKO0FBSUUsUUFBQSxLQUFLLEVBQUMsSUFKUjtBQUtFLFFBQUEsTUFBTSxFQUFDLEdBTFQ7QUFNRSxRQUFBLEVBQUUsRUFBQztBQU5MLFFBSEYsZUFXRTtBQUNFLFFBQUEsU0FBUyxFQUFDLHNGQURaO0FBRUUsUUFBQSxDQUFDLEVBQUMsTUFGSjtBQUdFLFFBQUEsQ0FBQyxFQUFDLE1BSEo7QUFJRSxRQUFBLEtBQUssRUFBQyxJQUpSO0FBS0UsUUFBQSxNQUFNLEVBQUMsR0FMVDtBQU1FLFFBQUEsRUFBRSxFQUFDO0FBTkwsUUFYRixlQW1CRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLEdBQVI7QUFBWSxRQUFBLENBQUMsRUFBQyxJQUFkO0FBQW1CLFFBQUEsS0FBSyxFQUFDLElBQXpCO0FBQThCLFFBQUEsTUFBTSxFQUFDLEdBQXJDO0FBQXlDLFFBQUEsRUFBRSxFQUFDO0FBQTVDLFFBbkJGLENBREYsQ0FERjtBQXlCRDs7O0VBckNnQ0MsZ0I7OztpQ0FBZEYsSyxlQUNBO0FBQ2pCO0FBQ0FHLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDO0FBRkQsQztpQ0FEQUwsSyxrQkFNRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJHLEVBQUFBLG1CQUFtQixFQUFFO0FBRkQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxNnB4JyxcclxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLXNwbGl0J1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNy41MDAwMDAsIDcuNTAwMDAwKVwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xOS41LDQ3LjQxMzc5MzEgQzE5LjUsNDguODQyMTE1NyAyMC42MTkyODgxLDUwIDIyLDUwIEMyMy4zODA3MTE5LDUwIDI0LjUsNDguODQyMTE1NyAyNC41LDQ3LjQxMzc5MzEgTDI0LjUsMi41ODYyMDY5IEMyNC41LDEuMTU3ODg0MjcgMjMuMzgwNzExOSwwIDIyLDAgQzIwLjYxOTI4ODEsMCAxOS41LDEuMTU3ODg0MjcgMTkuNSwyLjU4NjIwNjkgTDE5LjUsNDcuNDEzNzkzMSBaXCIgLz5cclxuICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjRcIiB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNVwiIHJ4PVwiMi41XCIgLz5cclxuICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyLjUwMDAwMCwgMjQuNTAwMDAwKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTIuNTAwMDAwLCAtMjQuNTAwMDAwKSBcIlxyXG4gICAgICAgICAgICB4PVwiLTE4XCJcclxuICAgICAgICAgICAgeT1cIjIyXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI0MVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjVcIlxyXG4gICAgICAgICAgICByeD1cIjIuNVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQxLjUwMDAwMCwgMjUuMDAwMDAwKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTQxLjUwMDAwMCwgLTI1LjAwMDAwMCkgXCJcclxuICAgICAgICAgICAgeD1cIjIwLjVcIlxyXG4gICAgICAgICAgICB5PVwiMjIuNVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNDJcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1XCJcclxuICAgICAgICAgICAgcng9XCIyLjVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjQxXCIgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjVcIiByeD1cIjIuNVwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=