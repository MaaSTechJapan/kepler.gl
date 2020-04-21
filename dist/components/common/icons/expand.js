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

var Expand = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Expand, _Component);

  var _super = _createSuper(Expand);

  function Expand() {
    (0, _classCallCheck2["default"])(this, Expand);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Expand, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(6.000000, 6.000000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M31.25,6.25 L36.0416667,11.0416667 L30.0208333,17.0208333 L32.9791667,19.9791667 L38.9583333,13.9583333 L43.75,18.75 L43.75,6.25 L31.25,6.25 Z M6.25,18.75 L11.0416667,13.9583333 L17.0208333,19.9791667 L19.9791667,17.0208333 L13.9583333,11.0416667 L18.75,6.25 L6.25,6.25 L6.25,18.75 Z M18.75,43.75 L13.9583333,38.9583333 L19.9791667,32.9791667 L17.0208333,30.0208333 L11.0416667,36.0416667 L6.25,31.25 L6.25,43.75 L18.75,43.75 Z M43.75,31.25 L38.9583333,36.0416667 L32.9791667,30.0208333 L30.0208333,32.9791667 L36.0416667,38.9583333 L31.25,43.75 L43.75,43.75 L43.75,31.25 Z"
      })));
    }
  }]);
  return Expand;
}(_react.Component);

exports["default"] = Expand;
(0, _defineProperty2["default"])(Expand, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Expand, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-expand'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9leHBhbmQuanMiXSwibmFtZXMiOlsiRXhwYW5kIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7NkJBV1Y7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsc0JBQ0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBREYsQ0FERixDQURGO0FBT0Q7OztFQW5CaUNDLGdCOzs7aUNBQWZGLE0sZUFDQTtBQUNqQjtBQUNBRyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQztBQUZELEM7aUNBREFMLE0sa0JBTUc7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCRyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGFuZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtZXhwYW5kJ1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNi4wMDAwMDAsIDYuMDAwMDAwKVwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0zMS4yNSw2LjI1IEwzNi4wNDE2NjY3LDExLjA0MTY2NjcgTDMwLjAyMDgzMzMsMTcuMDIwODMzMyBMMzIuOTc5MTY2NywxOS45NzkxNjY3IEwzOC45NTgzMzMzLDEzLjk1ODMzMzMgTDQzLjc1LDE4Ljc1IEw0My43NSw2LjI1IEwzMS4yNSw2LjI1IFogTTYuMjUsMTguNzUgTDExLjA0MTY2NjcsMTMuOTU4MzMzMyBMMTcuMDIwODMzMywxOS45NzkxNjY3IEwxOS45NzkxNjY3LDE3LjAyMDgzMzMgTDEzLjk1ODMzMzMsMTEuMDQxNjY2NyBMMTguNzUsNi4yNSBMNi4yNSw2LjI1IEw2LjI1LDE4Ljc1IFogTTE4Ljc1LDQzLjc1IEwxMy45NTgzMzMzLDM4Ljk1ODMzMzMgTDE5Ljk3OTE2NjcsMzIuOTc5MTY2NyBMMTcuMDIwODMzMywzMC4wMjA4MzMzIEwxMS4wNDE2NjY3LDM2LjA0MTY2NjcgTDYuMjUsMzEuMjUgTDYuMjUsNDMuNzUgTDE4Ljc1LDQzLjc1IFogTTQzLjc1LDMxLjI1IEwzOC45NTgzMzMzLDM2LjA0MTY2NjcgTDMyLjk3OTE2NjcsMzAuMDIwODMzMyBMMzAuMDIwODMzMywzMi45NzkxNjY3IEwzNi4wNDE2NjY3LDM4Ljk1ODMzMzMgTDMxLjI1LDQzLjc1IEw0My43NSw0My43NSBMNDMuNzUsMzEuMjUgWlwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=