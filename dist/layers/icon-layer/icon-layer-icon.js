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

var _base = _interopRequireDefault(require("../../components/common/icons/base"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var IconLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(IconLayerIcon, _Component);

  var _super = _createSuper(IconLayerIcon);

  function IconLayerIcon() {
    (0, _classCallCheck2["default"])(this, IconLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        className: "cr1",
        d: "M42.27,33.59l-4.34,4.34-4.34-4.34a13.25,13.25,0,0,1-8.9-12.52h0A13.24,13.24,0,0,1,37.93,7.83h0A13.24,13.24,0,0,1,51.17,21.07h0A13.25,13.25,0,0,1,42.27,33.59ZM37.93,28.3a7.22,7.22,0,1,0-7.22-7.22A7.22,7.22,0,0,0,37.93,28.3Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cr2",
        d: "M18.68,48.79l-2.44,2.44L13.8,48.79a7.44,7.44,0,0,1-5-7h0a7.44,7.44,0,0,1,7.44-7.44h0a7.44,7.44,0,0,1,7.44,7.44h0A7.44,7.44,0,0,1,18.68,48.79Zm-2.44-3a4.06,4.06,0,1,0-4.06-4.06A4.06,4.06,0,0,0,16.24,45.81Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cr3",
        d: "M48.85,55.52l-2.2,2.2-2.2-2.2a6.73,6.73,0,0,1-4.52-6.36h0a6.72,6.72,0,0,1,6.72-6.72h0a6.72,6.72,0,0,1,6.72,6.72h0A6.73,6.73,0,0,1,48.85,55.52Zm-2.2-2.69A3.67,3.67,0,1,0,43,49.17,3.67,3.67,0,0,0,46.65,52.83Z"
      }));
    }
  }]);
  return IconLayerIcon;
}(_react.Component);

exports["default"] = IconLayerIcon;
(0, _defineProperty2["default"])(IconLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(IconLayerIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'icon-layer-icon',
  totalColor: 3
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaWNvbi1sYXllci9pY29uLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiSWNvbkxheWVySWNvbiIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiY29sb3JzIiwiYXJyYXlPZiIsInByZWRlZmluZWRDbGFzc05hbWUiLCJ0b3RhbENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7NkJBYVY7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLENBQUMsRUFBQztBQUZKLFFBREYsZUFLRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLENBQUMsRUFBQztBQUZKLFFBTEYsZUFTRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLENBQUMsRUFBQztBQUZKLFFBVEYsQ0FERjtBQWdCRDs7O0VBOUJ3Q0MsZ0I7OztpQ0FBdEJGLGEsZUFDQTtBQUNqQjtBQUNBRyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxNQUZEO0FBR2pCQyxFQUFBQSxNQUFNLEVBQUVGLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUMsTUFBNUI7QUFIUyxDO2lDQURBTCxhLGtCQU9HO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkssRUFBQUEsbUJBQW1CLEVBQUUsaUJBRkQ7QUFHcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUhRLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMvYmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uTGF5ZXJJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2ljb24tbGF5ZXItaWNvbicsXHJcbiAgICB0b3RhbENvbG9yOiAzXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjFcIlxyXG4gICAgICAgICAgZD1cIk00Mi4yNywzMy41OWwtNC4zNCw0LjM0LTQuMzQtNC4zNGExMy4yNSwxMy4yNSwwLDAsMS04LjktMTIuNTJoMEExMy4yNCwxMy4yNCwwLDAsMSwzNy45Myw3LjgzaDBBMTMuMjQsMTMuMjQsMCwwLDEsNTEuMTcsMjEuMDdoMEExMy4yNSwxMy4yNSwwLDAsMSw0Mi4yNywzMy41OVpNMzcuOTMsMjguM2E3LjIyLDcuMjIsMCwxLDAtNy4yMi03LjIyQTcuMjIsNy4yMiwwLDAsMCwzNy45MywyOC4zWlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IyXCJcclxuICAgICAgICAgIGQ9XCJNMTguNjgsNDguNzlsLTIuNDQsMi40NEwxMy44LDQ4Ljc5YTcuNDQsNy40NCwwLDAsMS01LTdoMGE3LjQ0LDcuNDQsMCwwLDEsNy40NC03LjQ0aDBhNy40NCw3LjQ0LDAsMCwxLDcuNDQsNy40NGgwQTcuNDQsNy40NCwwLDAsMSwxOC42OCw0OC43OVptLTIuNDQtM2E0LjA2LDQuMDYsMCwxLDAtNC4wNi00LjA2QTQuMDYsNC4wNiwwLDAsMCwxNi4yNCw0NS44MVpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyM1wiXHJcbiAgICAgICAgICBkPVwiTTQ4Ljg1LDU1LjUybC0yLjIsMi4yLTIuMi0yLjJhNi43Myw2LjczLDAsMCwxLTQuNTItNi4zNmgwYTYuNzIsNi43MiwwLDAsMSw2LjcyLTYuNzJoMGE2LjcyLDYuNzIsMCwwLDEsNi43Miw2LjcyaDBBNi43Myw2LjczLDAsMCwxLDQ4Ljg1LDU1LjUyWm0tMi4yLTIuNjlBMy42NywzLjY3LDAsMSwwLDQzLDQ5LjE3LDMuNjcsMy42NywwLDAsMCw0Ni42NSw1Mi44M1pcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==