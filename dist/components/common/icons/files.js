"use strict";

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Files = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Files, _React$Component);

  var _super = _createSuper(Files);

  function Files() {
    (0, _classCallCheck2["default"])(this, Files);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Files, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 64 64"
      }, this.props), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M48.015 58h-32a8 8 0 0 1-8-8V26h48v24a8 8 0 0 1-8 8zm-2-44h-28a6 6 0 0 0-6 6v2h40v-2a6 6 0 0 0-6-6zm-2 26v-6h-4v4h-16v-4h-4v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2zm-4-34h-16a4 4 0 0 0-4 4h24a4 4 0 0 0-4-4z"
      }));
    }
  }]);
  return Files;
}(_react["default"].Component);

exports["default"] = Files;
(0, _defineProperty2["default"])(Files, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Files, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-files'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlcyIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7NkJBVVY7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsT0FBTyxFQUFDO0FBQWQsU0FBOEIsS0FBS0MsS0FBbkMsZ0JBQ0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBREYsQ0FERjtBQUtEOzs7RUFoQmdDQyxrQkFBTUMsUzs7O2lDQUFwQkgsSyxlQUNBO0FBQ2pCO0FBQ0FJLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDO0FBRkQsQztpQ0FEQU4sSyxrQkFLRztBQUNwQkksRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJHLEVBQUFBLG1CQUFtQixFQUFFO0FBRkQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGVpZ2h0OiAnMTZweCcsXHJcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1maWxlcydcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFzZSB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNDguMDE1IDU4aC0zMmE4IDggMCAwIDEtOC04VjI2aDQ4djI0YTggOCAwIDAgMS04IDh6bS0yLTQ0aC0yOGE2IDYgMCAwIDAtNiA2djJoNDB2LTJhNiA2IDAgMCAwLTYtNnptLTIgMjZ2LTZoLTR2NGgtMTZ2LTRoLTR2NmEyIDIgMCAwIDAgMiAyaDIwYTIgMiAwIDAgMCAyLTJ6bS00LTM0aC0xNmE0IDQgMCAwIDAtNCA0aDI0YTQgNCAwIDAgMC00LTR6XCIgLz5cclxuICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19