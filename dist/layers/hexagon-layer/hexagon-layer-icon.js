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

var HexagonLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(HexagonLayerIcon, _Component);

  var _super = _createSuper(HexagonLayerIcon);

  function HexagonLayerIcon() {
    (0, _classCallCheck2["default"])(this, HexagonLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(HexagonLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr1",
        points: "23.9,10 30.9,14 30.9,22.1 23.9,26.2 16.8,22.1 16.8,14 ",
        style: {
          opacity: 0.6
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr2",
        points: "23.9,37.8 30.9,41.9 30.9,50 23.9,54 16.8,50 16.8,41.9 ",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr6",
        points: "40.1,10 47.2,14 47.2,22.1 40.1,26.2 33.1,22.1 33.1,14 "
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr3",
        points: "40.1,37.8 47.2,41.9 47.2,50 40.1,54 33.1,50 33.1,41.9 ",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr1",
        points: "15.8,23.9 22.8,27.9 22.8,36.1 15.8,40.1 8.7,36.1 8.7,27.9 "
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr4",
        points: "32,23.9 39,27.9 39,36.1 32,40.1 25,36.1 25,27.9 ",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr5",
        points: "48.2,23.9 55.3,27.9 55.3,36.1 48.2,40.1 41.2,36.1 41.2,27.9 ",
        style: {
          opacity: 0.4
        }
      }));
    }
  }]);
  return HexagonLayerIcon;
}(_react.Component);

exports["default"] = HexagonLayerIcon;
(0, _defineProperty2["default"])(HexagonLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(HexagonLayerIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'hexagon-layer-icon',
  totalColor: 6
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiSGV4YWdvbkxheWVySWNvbiIsInByb3BzIiwib3BhY2l0eSIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsImNvbG9ycyIsImFycmF5T2YiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIiwidG90YWxDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs2QkFhVjtBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFFBQUEsTUFBTSxFQUFDLHdEQUZUO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFBQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFIVCxRQURGLGVBTUU7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxNQUFNLEVBQUMsd0RBRlQ7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUhULFFBTkYsZUFXRTtBQUFTLFFBQUEsU0FBUyxFQUFDLEtBQW5CO0FBQXlCLFFBQUEsTUFBTSxFQUFDO0FBQWhDLFFBWEYsZUFZRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQyx3REFGVDtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUNBLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBSFQsUUFaRixlQWlCRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQztBQUZULFFBakJGLGVBcUJFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFFBQUEsTUFBTSxFQUFDLGtEQUZUO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFIVCxRQXJCRixlQTBCRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQyw4REFGVDtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUNBLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBSFQsUUExQkYsQ0FERjtBQWtDRDs7O0VBaEQyQ0MsZ0I7OztpQ0FBekJILGdCLGVBQ0E7QUFDakI7QUFDQUksRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEQU4sZ0Isa0JBT0c7QUFDcEJJLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCSyxFQUFBQSxtQkFBbUIsRUFBRSxvQkFGRDtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucy9iYXNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb25MYXllckljb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbG9yczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGVpZ2h0OiAnMTZweCcsXHJcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnaGV4YWdvbi1sYXllci1pY29uJyxcclxuICAgIHRvdGFsQ29sb3I6IDZcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyMVwiXHJcbiAgICAgICAgICBwb2ludHM9XCIyMy45LDEwIDMwLjksMTQgMzAuOSwyMi4xIDIzLjksMjYuMiAxNi44LDIyLjEgMTYuOCwxNCBcIlxyXG4gICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiAwLjZ9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyMlwiXHJcbiAgICAgICAgICBwb2ludHM9XCIyMy45LDM3LjggMzAuOSw0MS45IDMwLjksNTAgMjMuOSw1NCAxNi44LDUwIDE2LjgsNDEuOSBcIlxyXG4gICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiAwLjR9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBvbHlnb24gY2xhc3NOYW1lPVwiY3I2XCIgcG9pbnRzPVwiNDAuMSwxMCA0Ny4yLDE0IDQ3LjIsMjIuMSA0MC4xLDI2LjIgMzMuMSwyMi4xIDMzLjEsMTQgXCIgLz5cclxuICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IzXCJcclxuICAgICAgICAgIHBvaW50cz1cIjQwLjEsMzcuOCA0Ny4yLDQxLjkgNDcuMiw1MCA0MC4xLDU0IDMzLjEsNTAgMzMuMSw0MS45IFwiXHJcbiAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IDAuOH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IxXCJcclxuICAgICAgICAgIHBvaW50cz1cIjE1LjgsMjMuOSAyMi44LDI3LjkgMjIuOCwzNi4xIDE1LjgsNDAuMSA4LjcsMzYuMSA4LjcsMjcuOSBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyNFwiXHJcbiAgICAgICAgICBwb2ludHM9XCIzMiwyMy45IDM5LDI3LjkgMzksMzYuMSAzMiw0MC4xIDI1LDM2LjEgMjUsMjcuOSBcIlxyXG4gICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiAwLjh9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyNVwiXHJcbiAgICAgICAgICBwb2ludHM9XCI0OC4yLDIzLjkgNTUuMywyNy45IDU1LjMsMzYuMSA0OC4yLDQwLjEgNDEuMiwzNi4xIDQxLjIsMjcuOSBcIlxyXG4gICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiAwLjR9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==