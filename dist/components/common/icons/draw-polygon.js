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

var DrawPolygon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DrawPolygon, _Component);

  var _super = _createSuper(DrawPolygon);

  function DrawPolygon() {
    (0, _classCallCheck2["default"])(this, DrawPolygon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DrawPolygon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5 6L13 2L22 9L21 23L2 17L5 6Z",
        stroke: "currentColor",
        fill: "transparent",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M11.5 16C12.3284 16 13 15.3284 13 14.5C13 13.6716 12.3284 13 11.5 13C10.6716 13 10 13.6716 10 14.5C10 15.3284 10.6716 16 11.5 16Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M15.5 12C16.3284 12 17 11.3284 17 10.5C17 9.67157 16.3284 9 15.5 9C14.6716 9 14 9.67157 14 10.5C14 11.3284 14.6716 12 15.5 12Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22 11C23.1046 11 24 10.1046 24 9C24 7.89543 23.1046 7 22 7C20.8954 7 20 7.89543 20 9C20 10.1046 20.8954 11 22 11Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M21 25C22.1046 25 23 24.1046 23 23C23 21.8954 22.1046 21 21 21C19.8954 21 19 21.8954 19 23C19 24.1046 19.8954 25 21 25Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M2 19C3.10457 19 4 18.1046 4 17C4 15.8954 3.10457 15 2 15C0.89543 15 0 15.8954 0 17C0 18.1046 0.89543 19 2 19Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M13 4C14.1046 4 15 3.10457 15 2C15 0.89543 14.1046 0 13 0C11.8954 0 11 0.89543 11 2C11 3.10457 11.8954 4 13 4Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"
      }));
    }
  }]);
  return DrawPolygon;
}(_react.Component);

exports["default"] = DrawPolygon;
(0, _defineProperty2["default"])(DrawPolygon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  predefinedClassName: _propTypes["default"].string,
  viewBox: _propTypes["default"].string,
  style: _propTypes["default"].object
});
(0, _defineProperty2["default"])(DrawPolygon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-draw-polygon',
  viewBox: '0 0 24 25'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9kcmF3LXBvbHlnb24uanMiXSwibmFtZXMiOlsiRHJhd1BvbHlnb24iLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsInByZWRlZmluZWRDbGFzc05hbWUiLCJ2aWV3Qm94Iiwic3R5bGUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs2QkFlVjtBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQ0UsUUFBQSxDQUFDLEVBQUMsZ0NBREo7QUFFRSxRQUFBLE1BQU0sRUFBQyxjQUZUO0FBR0UsUUFBQSxJQUFJLEVBQUMsYUFIUDtBQUlFLFFBQUEsV0FBVyxFQUFDO0FBSmQsUUFERixlQU9FO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQVBGLGVBUUU7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBUkYsZUFTRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFURixlQVVFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQVZGLGVBV0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBWEYsZUFZRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFaRixlQWFFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQWJGLGVBY0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBZEYsQ0FERjtBQWtCRDs7O0VBbENzQ0MsZ0I7OztpQ0FBcEJGLFcsZUFDQTtBQUNqQjtBQUNBRyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxNQUZEO0FBR2pCQyxFQUFBQSxtQkFBbUIsRUFBRUYsc0JBQVVDLE1BSGQ7QUFJakJFLEVBQUFBLE9BQU8sRUFBRUgsc0JBQVVDLE1BSkY7QUFLakJHLEVBQUFBLEtBQUssRUFBRUosc0JBQVVLO0FBTEEsQztpQ0FEQVQsVyxrQkFTRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJHLEVBQUFBLG1CQUFtQixFQUFFLDRCQUZEO0FBR3BCQyxFQUFBQSxPQUFPLEVBQUU7QUFIVyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3UG9seWdvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZpZXdCb3g6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxNnB4JyxcclxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWRyYXctcG9seWdvbicsXHJcbiAgICB2aWV3Qm94OiAnMCAwIDI0IDI1J1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk01IDZMMTMgMkwyMiA5TDIxIDIzTDIgMTdMNSA2WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTAgMTFDMTAuNTUyMyAxMSAxMSAxMC41NTIzIDExIDEwQzExIDkuNDQ3NzIgMTAuNTUyMyA5IDEwIDlDOS40NDc3MiA5IDkgOS40NDc3MiA5IDEwQzkgMTAuNTUyMyA5LjQ0NzcyIDExIDEwIDExWlwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMS41IDE2QzEyLjMyODQgMTYgMTMgMTUuMzI4NCAxMyAxNC41QzEzIDEzLjY3MTYgMTIuMzI4NCAxMyAxMS41IDEzQzEwLjY3MTYgMTMgMTAgMTMuNjcxNiAxMCAxNC41QzEwIDE1LjMyODQgMTAuNjcxNiAxNiAxMS41IDE2WlwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xNS41IDEyQzE2LjMyODQgMTIgMTcgMTEuMzI4NCAxNyAxMC41QzE3IDkuNjcxNTcgMTYuMzI4NCA5IDE1LjUgOUMxNC42NzE2IDkgMTQgOS42NzE1NyAxNCAxMC41QzE0IDExLjMyODQgMTQuNjcxNiAxMiAxNS41IDEyWlwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0yMiAxMUMyMy4xMDQ2IDExIDI0IDEwLjEwNDYgMjQgOUMyNCA3Ljg5NTQzIDIzLjEwNDYgNyAyMiA3QzIwLjg5NTQgNyAyMCA3Ljg5NTQzIDIwIDlDMjAgMTAuMTA0NiAyMC44OTU0IDExIDIyIDExWlwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0yMSAyNUMyMi4xMDQ2IDI1IDIzIDI0LjEwNDYgMjMgMjNDMjMgMjEuODk1NCAyMi4xMDQ2IDIxIDIxIDIxQzE5Ljg5NTQgMjEgMTkgMjEuODk1NCAxOSAyM0MxOSAyNC4xMDQ2IDE5Ljg5NTQgMjUgMjEgMjVaXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTIgMTlDMy4xMDQ1NyAxOSA0IDE4LjEwNDYgNCAxN0M0IDE1Ljg5NTQgMy4xMDQ1NyAxNSAyIDE1QzAuODk1NDMgMTUgMCAxNS44OTU0IDAgMTdDMCAxOC4xMDQ2IDAuODk1NDMgMTkgMiAxOVpcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTMgNEMxNC4xMDQ2IDQgMTUgMy4xMDQ1NyAxNSAyQzE1IDAuODk1NDMgMTQuMTA0NiAwIDEzIDBDMTEuODk1NCAwIDExIDAuODk1NDMgMTEgMkMxMSAzLjEwNDU3IDExLjg5NTQgNCAxMyA0WlwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk01IDhDNi4xMDQ1NyA4IDcgNy4xMDQ1NyA3IDZDNyA0Ljg5NTQzIDYuMTA0NTcgNCA1IDRDMy44OTU0MyA0IDMgNC44OTU0MyAzIDZDMyA3LjEwNDU3IDMuODk1NDMgOCA1IDhaXCIgLz5cclxuICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19