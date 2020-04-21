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

var Bug = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Bug, _Component);

  var _super = _createSuper(Bug);

  function Bug() {
    (0, _classCallCheck2["default"])(this, Bug);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Bug, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M32 8.333C26.698 8.333 22.4 13 22.4 19h19.2c0-6-4.298-10.667-9.6-10.667z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M53.6 32H46v-6.506c0-.074.184-.142.18-.215l5.417-5.907c.937-1.042.987-2.73.05-3.772-.937-1.041-2.432-1.041-3.369 0l-5.304 5.664c-.066-.004-.115-.264-.181-.264H21.207c-.066 0-.128.26-.193.264l-5.317-5.785c-.937-1.042-2.457-.981-3.394.06-.937 1.042-.937 2.76 0 3.802l5.516 5.923c-.003.072.181.156.181.23V32h-7.6C9.075 32 8 33.027 8 34.5S9.075 37 10.4 37h7.2c0 3 .375 4.299 1.025 6.12-.105.084-.227.253-.322.359l-6.788 7.603c-.937 1.041-.937 2.76 0 3.802.937 1.04 2.457 1.056 3.394.015l6.443-6.93C23.494 50.693 26 52.619 30 53.246V27h4v26.246c4-.626 6.506-2.545 8.648-5.27l6.343 6.938a2.29 2.29 0 0 0 3.444 0c.937-1.041.962-2.73.025-3.771L45.684 43.6c-.094-.105-.21-.396-.316-.48C46.018 41.298 46.4 40 46.4 37h7.2c1.325 0 2.4-1.027 2.4-2.5S54.925 32 53.6 32z"
      })));
    }
  }]);
  return Bug;
}(_react.Component);

exports["default"] = Bug;
(0, _defineProperty2["default"])(Bug, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Bug, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-bug'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9idWcuanMiXSwibmFtZXMiOlsiQnVnIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7NkJBV1Y7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRSx3REFDRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFERixlQUVFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQUZGLENBREYsQ0FERjtBQVFEOzs7RUFwQjhCQyxnQjs7O2lDQUFaRixHLGVBQ0E7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUM7QUFGRCxDO2lDQURBTCxHLGtCQU1HO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkcsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxNnB4JyxcclxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWJ1ZydcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTMyIDguMzMzQzI2LjY5OCA4LjMzMyAyMi40IDEzIDIyLjQgMTloMTkuMmMwLTYtNC4yOTgtMTAuNjY3LTkuNi0xMC42Njd6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTMuNiAzMkg0NnYtNi41MDZjMC0uMDc0LjE4NC0uMTQyLjE4LS4yMTVsNS40MTctNS45MDdjLjkzNy0xLjA0Mi45ODctMi43My4wNS0zLjc3Mi0uOTM3LTEuMDQxLTIuNDMyLTEuMDQxLTMuMzY5IDBsLTUuMzA0IDUuNjY0Yy0uMDY2LS4wMDQtLjExNS0uMjY0LS4xODEtLjI2NEgyMS4yMDdjLS4wNjYgMC0uMTI4LjI2LS4xOTMuMjY0bC01LjMxNy01Ljc4NWMtLjkzNy0xLjA0Mi0yLjQ1Ny0uOTgxLTMuMzk0LjA2LS45MzcgMS4wNDItLjkzNyAyLjc2IDAgMy44MDJsNS41MTYgNS45MjNjLS4wMDMuMDcyLjE4MS4xNTYuMTgxLjIzVjMyaC03LjZDOS4wNzUgMzIgOCAzMy4wMjcgOCAzNC41UzkuMDc1IDM3IDEwLjQgMzdoNy4yYzAgMyAuMzc1IDQuMjk5IDEuMDI1IDYuMTItLjEwNS4wODQtLjIyNy4yNTMtLjMyMi4zNTlsLTYuNzg4IDcuNjAzYy0uOTM3IDEuMDQxLS45MzcgMi43NiAwIDMuODAyLjkzNyAxLjA0IDIuNDU3IDEuMDU2IDMuMzk0LjAxNWw2LjQ0My02LjkzQzIzLjQ5NCA1MC42OTMgMjYgNTIuNjE5IDMwIDUzLjI0NlYyN2g0djI2LjI0NmM0LS42MjYgNi41MDYtMi41NDUgOC42NDgtNS4yN2w2LjM0MyA2LjkzOGEyLjI5IDIuMjkgMCAwIDAgMy40NDQgMGMuOTM3LTEuMDQxLjk2Mi0yLjczLjAyNS0zLjc3MUw0NS42ODQgNDMuNmMtLjA5NC0uMTA1LS4yMS0uMzk2LS4zMTYtLjQ4QzQ2LjAxOCA0MS4yOTggNDYuNCA0MCA0Ni40IDM3aDcuMmMxLjMyNSAwIDIuNC0xLjAyNyAyLjQtMi41UzU0LjkyNSAzMiA1My42IDMyelwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=