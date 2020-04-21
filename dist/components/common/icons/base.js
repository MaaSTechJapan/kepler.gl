"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var getStyleClassFromColor = function getStyleClassFromColor(totalColor, colors) {
  return new Array(totalColor).fill(1).reduce(function (accu, c, i) {
    return "".concat(accu, ".cr").concat(i + 1, " {fill:").concat(colors[i % colors.length], ";}");
  }, '');
};

var Base = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Base, _Component);

  var _super = _createSuper(Base);

  function Base() {
    (0, _classCallCheck2["default"])(this, Base);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Base, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width,
          viewBox = _this$props.viewBox,
          style = _this$props.style,
          children = _this$props.children,
          predefinedClassName = _this$props.predefinedClassName,
          className = _this$props.className,
          colors = _this$props.colors,
          totalColor = _this$props.totalColor,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["height", "width", "viewBox", "style", "children", "predefinedClassName", "className", "colors", "totalColor"]);
      var svgHeight = height;
      var svgWidth = width || svgHeight;
      var fillStyle = Array.isArray(colors) && totalColor && getStyleClassFromColor(totalColor, colors);
      return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
        viewBox: viewBox,
        width: svgWidth,
        height: svgHeight,
        style: style,
        className: "".concat(predefinedClassName, " ").concat(className)
      }, props), fillStyle ? /*#__PURE__*/_react["default"].createElement("style", {
        type: "text/css"
      }, fillStyle) : null, children);
    }
  }]);
  return Base;
}(_react.Component);

exports["default"] = Base;
(0, _defineProperty2["default"])(Base, "displayName", 'Base Icon');
(0, _defineProperty2["default"])(Base, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,

  /** Set the width of the icon, ex. '16px' */
  width: _propTypes["default"].string,

  /** Set the viewbox of the svg */
  viewBox: _propTypes["default"].string,

  /** Path element */
  children: _propTypes["default"].node,
  predefinedClassName: _propTypes["default"].string,
  className: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Base, "defaultProps", {
  height: null,
  width: null,
  viewBox: '0 0 64 64',
  predefinedClassName: '',
  className: '',
  style: {
    fill: 'currentColor'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9iYXNlLmpzIl0sIm5hbWVzIjpbImdldFN0eWxlQ2xhc3NGcm9tQ29sb3IiLCJ0b3RhbENvbG9yIiwiY29sb3JzIiwiQXJyYXkiLCJmaWxsIiwicmVkdWNlIiwiYWNjdSIsImMiLCJpIiwibGVuZ3RoIiwiQmFzZSIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJ2aWV3Qm94Iiwic3R5bGUiLCJjaGlsZHJlbiIsInByZWRlZmluZWRDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJzdmdIZWlnaHQiLCJzdmdXaWR0aCIsImZpbGxTdHlsZSIsImlzQXJyYXkiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsVUFBRCxFQUFhQyxNQUFiO0FBQUEsU0FDN0IsSUFBSUMsS0FBSixDQUFVRixVQUFWLEVBQ0dHLElBREgsQ0FDUSxDQURSLEVBRUdDLE1BRkgsQ0FFVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBVUMsQ0FBVjtBQUFBLHFCQUFtQkYsSUFBbkIsZ0JBQTZCRSxDQUFDLEdBQUcsQ0FBakMsb0JBQTRDTixNQUFNLENBQUNNLENBQUMsR0FBR04sTUFBTSxDQUFDTyxNQUFaLENBQWxEO0FBQUEsR0FGVixFQUVxRixFQUZyRixDQUQ2QjtBQUFBLENBQS9COztJQUtxQkMsSTs7Ozs7Ozs7Ozs7OzZCQTRCVjtBQUFBLHdCQVlILEtBQUtDLEtBWkY7QUFBQSxVQUVMQyxNQUZLLGVBRUxBLE1BRks7QUFBQSxVQUdMQyxLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMQyxPQUpLLGVBSUxBLE9BSks7QUFBQSxVQUtMQyxLQUxLLGVBS0xBLEtBTEs7QUFBQSxVQU1MQyxRQU5LLGVBTUxBLFFBTks7QUFBQSxVQU9MQyxtQkFQSyxlQU9MQSxtQkFQSztBQUFBLFVBUUxDLFNBUkssZUFRTEEsU0FSSztBQUFBLFVBU0xoQixNQVRLLGVBU0xBLE1BVEs7QUFBQSxVQVVMRCxVQVZLLGVBVUxBLFVBVks7QUFBQSxVQVdGVSxLQVhFO0FBYVAsVUFBTVEsU0FBUyxHQUFHUCxNQUFsQjtBQUNBLFVBQU1RLFFBQVEsR0FBR1AsS0FBSyxJQUFJTSxTQUExQjtBQUVBLFVBQU1FLFNBQVMsR0FDYmxCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY3BCLE1BQWQsS0FBeUJELFVBQXpCLElBQXVDRCxzQkFBc0IsQ0FBQ0MsVUFBRCxFQUFhQyxNQUFiLENBRC9EO0FBR0EsMEJBQ0U7QUFDRSxRQUFBLE9BQU8sRUFBRVksT0FEWDtBQUVFLFFBQUEsS0FBSyxFQUFFTSxRQUZUO0FBR0UsUUFBQSxNQUFNLEVBQUVELFNBSFY7QUFJRSxRQUFBLEtBQUssRUFBRUosS0FKVDtBQUtFLFFBQUEsU0FBUyxZQUFLRSxtQkFBTCxjQUE0QkMsU0FBNUI7QUFMWCxTQU1NUCxLQU5OLEdBUUdVLFNBQVMsZ0JBQUc7QUFBTyxRQUFBLElBQUksRUFBQztBQUFaLFNBQXdCQSxTQUF4QixDQUFILEdBQWdELElBUjVELEVBU0dMLFFBVEgsQ0FERjtBQWFEOzs7RUE1RCtCTyxnQjs7O2lDQUFiYixJLGlCQUNFLFc7aUNBREZBLEksZUFHQTtBQUNqQjtBQUNBRSxFQUFBQSxNQUFNLEVBQUVZLHNCQUFVQyxNQUZEOztBQUdqQjtBQUNBWixFQUFBQSxLQUFLLEVBQUVXLHNCQUFVQyxNQUpBOztBQUtqQjtBQUNBWCxFQUFBQSxPQUFPLEVBQUVVLHNCQUFVQyxNQU5GOztBQU9qQjtBQUNBVCxFQUFBQSxRQUFRLEVBQUVRLHNCQUFVRSxJQVJIO0FBVWpCVCxFQUFBQSxtQkFBbUIsRUFBRU8sc0JBQVVDLE1BVmQ7QUFXakJQLEVBQUFBLFNBQVMsRUFBRU0sc0JBQVVDO0FBWEosQztpQ0FIQWYsSSxrQkFpQkc7QUFDcEJFLEVBQUFBLE1BQU0sRUFBRSxJQURZO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsSUFGYTtBQUdwQkMsRUFBQUEsT0FBTyxFQUFFLFdBSFc7QUFJcEJHLEVBQUFBLG1CQUFtQixFQUFFLEVBSkQ7QUFLcEJDLEVBQUFBLFNBQVMsRUFBRSxFQUxTO0FBTXBCSCxFQUFBQSxLQUFLLEVBQUU7QUFDTFgsSUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFOYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBnZXRTdHlsZUNsYXNzRnJvbUNvbG9yID0gKHRvdGFsQ29sb3IsIGNvbG9ycykgPT5cclxuICBuZXcgQXJyYXkodG90YWxDb2xvcilcclxuICAgIC5maWxsKDEpXHJcbiAgICAucmVkdWNlKChhY2N1LCBjLCBpKSA9PiBgJHthY2N1fS5jciR7aSArIDF9IHtmaWxsOiR7Y29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXX07fWAsICcnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdCYXNlIEljb24nO1xyXG5cclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKiogU2V0IHRoZSB3aWR0aCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKiogU2V0IHRoZSB2aWV3Ym94IG9mIHRoZSBzdmcgKi9cclxuICAgIHZpZXdCb3g6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKiogUGF0aCBlbGVtZW50ICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcblxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoZWlnaHQ6IG51bGwsXHJcbiAgICB3aWR0aDogbnVsbCxcclxuICAgIHZpZXdCb3g6ICcwIDAgNjQgNjQnLFxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJycsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGhlaWdodCxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIHZpZXdCb3gsXHJcbiAgICAgIHN0eWxlLFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgcHJlZGVmaW5lZENsYXNzTmFtZSxcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBjb2xvcnMsXHJcbiAgICAgIHRvdGFsQ29sb3IsXHJcbiAgICAgIC4uLnByb3BzXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IGhlaWdodDtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gd2lkdGggfHwgc3ZnSGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGZpbGxTdHlsZSA9XHJcbiAgICAgIEFycmF5LmlzQXJyYXkoY29sb3JzKSAmJiB0b3RhbENvbG9yICYmIGdldFN0eWxlQ2xhc3NGcm9tQ29sb3IodG90YWxDb2xvciwgY29sb3JzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgdmlld0JveD17dmlld0JveH1cclxuICAgICAgICB3aWR0aD17c3ZnV2lkdGh9XHJcbiAgICAgICAgaGVpZ2h0PXtzdmdIZWlnaHR9XHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZGVmaW5lZENsYXNzTmFtZX0gJHtjbGFzc05hbWV9YH1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7ZmlsbFN0eWxlID8gPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntmaWxsU3R5bGV9PC9zdHlsZT4gOiBudWxsfVxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=