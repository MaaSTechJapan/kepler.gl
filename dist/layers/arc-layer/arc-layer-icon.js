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

var ArcLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ArcLayerIcon, _Component);

  var _super = _createSuper(ArcLayerIcon);

  function ArcLayerIcon() {
    (0, _classCallCheck2["default"])(this, ArcLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArcLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M34.5,34.4c-0.6,0-1.2-0.4-1.4-1c-2.7-9.9-8.8-21.7-16.8-22.3c-3.1-0.2-5.6,1.5-7,4.8c-0.3,0.7-1.1,1.1-1.9,0.7\r c-0.7-0.3-1.1-1.1-0.7-1.9c1.9-4.3,5.6-6.8,9.8-6.5c9.5,0.7,16.3,13,19.4,24.4c0.2,0.8-0.2,1.5-1,1.7C34.8,34.3,34.6,34.4,34.5,34.4\r z",
        className: "cr1"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M6.7,57c0,0-0.1,0-0.1,0c-0.5-0.1-0.9-0.6-0.8-1.1c2.4-17.3,9.6-30.3,17.5-31.8c3.1-0.6,7.8,0.4,12.1,8.3\r c0.3,0.5,0.1,1-0.4,1.3c-0.5,0.3-1,0.1-1.3-0.4c-2.1-3.8-5.6-8.2-10.1-7.4C16.6,27.3,9.9,40,7.6,56.2C7.6,56.7,7.2,57,6.7,57z",
        className: "cr2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M56.8,56.4c-0.8,0-1.4-0.6-1.4-1.4c0-13.5-6.8-24.4-12.9-25.8c-3.5-0.8-5.6,2-6.7,4.4c-0.3,0.7-1.2,1-1.9,0.7\r c-0.7-0.3-1-1.2-0.7-1.9c2.2-4.7,5.8-6.9,9.9-6c9,2,15.1,16.4,15.1,28.6C58.3,55.7,57.6,56.4,56.8,56.4z",
        className: "cr3"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M34.5,32.7c-0.2,0-0.3,0-0.5,0c-1.3-0.3-2.1-1.5-1.8-2.8c3.5-17.4,10.3-20.7,14-21.2c4.4-0.5,8.6,2.3,11,7.4\r c0.6,1.2,0,2.6-1.1,3.1c-1.2,0.6-2.6,0-3.1-1.1c-1.5-3.2-3.8-5-6.1-4.7c-1.5,0.2-6.8,2-9.9,17.4C36.6,32,35.6,32.7,34.5,32.7z",
        className: "cr4"
      }));
    }
  }]);
  return ArcLayerIcon;
}(_react.Component);

(0, _defineProperty2["default"])(ArcLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(ArcLayerIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'point-layer-icon',
  totalColor: 4
});
var _default = ArcLayerIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvYXJjLWxheWVyL2FyYy1sYXllci1pY29uLmpzIl0sIm5hbWVzIjpbIkFyY0xheWVySWNvbiIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiY29sb3JzIiwiYXJyYXlPZiIsInByZWRlZmluZWRDbGFzc05hbWUiLCJ0b3RhbENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs2QkFhSztBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQ0UsUUFBQSxDQUFDLEVBQUMsbVBBREo7QUFJRSxRQUFBLFNBQVMsRUFBQztBQUpaLFFBREYsZUFPRTtBQUNFLFFBQUEsQ0FBQyxFQUFDLG1PQURKO0FBR0UsUUFBQSxTQUFTLEVBQUM7QUFIWixRQVBGLGVBWUU7QUFDRSxRQUFBLENBQUMsRUFBQyxrTkFESjtBQUdFLFFBQUEsU0FBUyxFQUFDO0FBSFosUUFaRixlQWlCRTtBQUNFLFFBQUEsQ0FBQyxFQUFDLHNPQURKO0FBR0UsUUFBQSxTQUFTLEVBQUM7QUFIWixRQWpCRixDQURGO0FBeUJEOzs7RUF2Q3dCQyxnQjs7aUNBQXJCRixZLGVBQ2U7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEZkwsWSxrQkFPa0I7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCSyxFQUFBQSxtQkFBbUIsRUFBRSxrQkFGRDtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQztlQW1DVFQsWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucy9iYXNlJztcclxuXHJcbmNsYXNzIEFyY0xheWVySWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxNnB4JyxcclxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdwb2ludC1sYXllci1pY29uJyxcclxuICAgIHRvdGFsQ29sb3I6IDRcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMzQuNSwzNC40Yy0wLjYsMC0xLjItMC40LTEuNC0xYy0yLjctOS45LTguOC0yMS43LTE2LjgtMjIuM2MtMy4xLTAuMi01LjYsMS41LTcsNC44Yy0wLjMsMC43LTEuMSwxLjEtMS45LDAuN1xyXG5cdGMtMC43LTAuMy0xLjEtMS4xLTAuNy0xLjljMS45LTQuMyw1LjYtNi44LDkuOC02LjVjOS41LDAuNywxNi4zLDEzLDE5LjQsMjQuNGMwLjIsMC44LTAuMiwxLjUtMSwxLjdDMzQuOCwzNC4zLDM0LjYsMzQuNCwzNC41LDM0LjRcclxuXHR6XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyMVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk02LjcsNTdjMCwwLTAuMSwwLTAuMSwwYy0wLjUtMC4xLTAuOS0wLjYtMC44LTEuMWMyLjQtMTcuMyw5LjYtMzAuMywxNy41LTMxLjhjMy4xLTAuNiw3LjgsMC40LDEyLjEsOC4zXHJcblx0YzAuMywwLjUsMC4xLDEtMC40LDEuM2MtMC41LDAuMy0xLDAuMS0xLjMtMC40Yy0yLjEtMy44LTUuNi04LjItMTAuMS03LjRDMTYuNiwyNy4zLDkuOSw0MCw3LjYsNTYuMkM3LjYsNTYuNyw3LjIsNTcsNi43LDU3elwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNTYuOCw1Ni40Yy0wLjgsMC0xLjQtMC42LTEuNC0xLjRjMC0xMy41LTYuOC0yNC40LTEyLjktMjUuOGMtMy41LTAuOC01LjYsMi02LjcsNC40Yy0wLjMsMC43LTEuMiwxLTEuOSwwLjdcclxuXHRjLTAuNy0wLjMtMS0xLjItMC43LTEuOWMyLjItNC43LDUuOC02LjksOS45LTZjOSwyLDE1LjEsMTYuNCwxNS4xLDI4LjZDNTguMyw1NS43LDU3LjYsNTYuNCw1Ni44LDU2LjR6XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyM1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0zNC41LDMyLjdjLTAuMiwwLTAuMywwLTAuNSwwYy0xLjMtMC4zLTIuMS0xLjUtMS44LTIuOGMzLjUtMTcuNCwxMC4zLTIwLjcsMTQtMjEuMmM0LjQtMC41LDguNiwyLjMsMTEsNy40XHJcblx0YzAuNiwxLjIsMCwyLjYtMS4xLDMuMWMtMS4yLDAuNi0yLjYsMC0zLjEtMS4xYy0xLjUtMy4yLTMuOC01LTYuMS00LjdjLTEuNSwwLjItNi44LDItOS45LDE3LjRDMzYuNiwzMiwzNS42LDMyLjcsMzQuNSwzMi43elwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmNMYXllckljb247XHJcbiJdfQ==