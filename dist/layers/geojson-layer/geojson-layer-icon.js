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

var GeojsonLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GeojsonLayerIcon, _Component);

  var _super = _createSuper(GeojsonLayerIcon);

  function GeojsonLayerIcon() {
    (0, _classCallCheck2["default"])(this, GeojsonLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GeojsonLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr1",
        points: "25.04 23.08 9.72 31.79 8.19 43.2 19.57 53.83 28.79 53.83 35.6 46.57 39.45 30.08 25.04 23.08"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr2",
        points: "52.8 26.3 41.74 30.32 37.9 46.75 45.26 53.83 51.45 53.83 55.07 43.51 52.8 26.3",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr3",
        points: "36.69 48.75 31.93 53.83 41.96 53.83 36.69 48.75",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr3",
        points: "25.95 20.98 40.84 28.22 52.57 24.06 50.89 11.5 23.24 11.5 25.95 20.98",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr4",
        points: "20.79 11.9 11.73 15.72 10.08 28.96 23.64 21.25 20.79 11.9",
        style: {
          opacity: 0.8
        }
      }));
    }
  }]);
  return GeojsonLayerIcon;
}(_react.Component);

exports["default"] = GeojsonLayerIcon;
(0, _defineProperty2["default"])(GeojsonLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(GeojsonLayerIcon, "defaultProps", {
  height: null,
  size: 'tiny',
  predefinedClassName: 'geojson-layer-icon'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiR2VvanNvbkxheWVySWNvbiIsInByb3BzIiwib3BhY2l0eSIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsImNvbG9ycyIsImFycmF5T2YiLCJzaXplIiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs2QkFhVjtBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFFBQUEsTUFBTSxFQUFDO0FBRlQsUUFERixlQUtFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFFBQUEsTUFBTSxFQUFDLGdGQUZUO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFBQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFIVCxRQUxGLGVBVUU7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxNQUFNLEVBQUMsaURBRlQ7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUhULFFBVkYsZUFlRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQyx1RUFGVDtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUNBLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBSFQsUUFmRixlQW9CRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQywyREFGVDtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUNBLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBSFQsUUFwQkYsQ0FERjtBQTRCRDs7O0VBMUMyQ0MsZ0I7OztpQ0FBekJILGdCLGVBQ0E7QUFDakI7QUFDQUksRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEQU4sZ0Isa0JBT0c7QUFDcEJJLEVBQUFBLE1BQU0sRUFBRSxJQURZO0FBRXBCSyxFQUFBQSxJQUFJLEVBQUUsTUFGYztBQUdwQkMsRUFBQUEsbUJBQW1CLEVBQUU7QUFIRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCYXNlIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zL2Jhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvanNvbkxheWVySWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6IG51bGwsXHJcbiAgICBzaXplOiAndGlueScsXHJcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZ2VvanNvbi1sYXllci1pY29uJ1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IxXCJcclxuICAgICAgICAgIHBvaW50cz1cIjI1LjA0IDIzLjA4IDkuNzIgMzEuNzkgOC4xOSA0My4yIDE5LjU3IDUzLjgzIDI4Ljc5IDUzLjgzIDM1LjYgNDYuNTcgMzkuNDUgMzAuMDggMjUuMDQgMjMuMDhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyMlwiXHJcbiAgICAgICAgICBwb2ludHM9XCI1Mi44IDI2LjMgNDEuNzQgMzAuMzIgMzcuOSA0Ni43NSA0NS4yNiA1My44MyA1MS40NSA1My44MyA1NS4wNyA0My41MSA1Mi44IDI2LjNcIlxyXG4gICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiAwLjh9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyM1wiXHJcbiAgICAgICAgICBwb2ludHM9XCIzNi42OSA0OC43NSAzMS45MyA1My44MyA0MS45NiA1My44MyAzNi42OSA0OC43NVwiXHJcbiAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IDAuNH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IzXCJcclxuICAgICAgICAgIHBvaW50cz1cIjI1Ljk1IDIwLjk4IDQwLjg0IDI4LjIyIDUyLjU3IDI0LjA2IDUwLjg5IDExLjUgMjMuMjQgMTEuNSAyNS45NSAyMC45OFwiXHJcbiAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IDAuNH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3I0XCJcclxuICAgICAgICAgIHBvaW50cz1cIjIwLjc5IDExLjkgMTEuNzMgMTUuNzIgMTAuMDggMjguOTYgMjMuNjQgMjEuMjUgMjAuNzkgMTEuOVwiXHJcbiAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IDAuOH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19