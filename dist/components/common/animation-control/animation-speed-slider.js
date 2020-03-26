"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangeSlider = _interopRequireDefault(require("../range-slider"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _defaultSettings = require("../../../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  bottom: 50px;\n  right: calc(0% - 32px);\n  width: 180px;\n  padding: 2px 8px 2px 12px;\n  background-color: ", ";\n  box-shadow: -2px -2px 0 0 rgba(0, 0, 0, 0.1);\n  .kg-range-slider__input {\n    width: 36px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderWrapper = _styledComponents["default"].div(_templateObject());

var SpeedSliderContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.panelBackground;
});

var AnimationSpeedSlider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AnimationSpeedSlider, _Component);

  var _super = _createSuper(AnimationSpeedSlider);

  function AnimationSpeedSlider() {
    var _this;

    (0, _classCallCheck2["default"])(this, AnimationSpeedSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      _this.props.onHide();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (v) {
      return _this.props.updateAnimationSpeed(v[1]);
    });
    return _this;
  }

  (0, _createClass2["default"])(AnimationSpeedSlider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(SpeedSliderContainer, {
        className: "animation-control__speed-slider"
      }, /*#__PURE__*/_react["default"].createElement(SliderWrapper, null, /*#__PURE__*/_react["default"].createElement(_rangeSlider["default"], {
        range: _defaultSettings.SPEED_CONTROL_RANGE,
        step: 0.01,
        value0: 0,
        value1: this.props.speed,
        onChange: this._onChange,
        isRanged: false,
        showTooltip: true,
        showInput: true,
        inputTheme: "secondary",
        inputSize: "tiny"
      })));
    }
  }]);
  return AnimationSpeedSlider;
}(_react.Component);

var _default = (0, _reactOnclickoutside["default"])(AnimationSpeedSlider);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tc3BlZWQtc2xpZGVyLmpzIl0sIm5hbWVzIjpbIlNsaWRlcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTcGVlZFNsaWRlckNvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJwYW5lbEJhY2tncm91bmQiLCJBbmltYXRpb25TcGVlZFNsaWRlciIsImUiLCJvbkhpZGUiLCJ2IiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJTUEVFRF9DT05UUk9MX1JBTkdFIiwic3BlZWQiLCJfb25DaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFuQjs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBR0YsNkJBQU9DLEdBQVYscUJBTUosVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxlQUFoQjtBQUFBLENBTkQsQ0FBMUI7O0lBYU1DLG9COzs7Ozs7Ozs7Ozs7Ozs7MkdBQ2lCLFVBQUFDLENBQUMsRUFBSTtBQUN4QixZQUFLSixLQUFMLENBQVdLLE1BQVg7QUFDRCxLO2tHQUVXLFVBQUFDLENBQUM7QUFBQSxhQUFJLE1BQUtOLEtBQUwsQ0FBV08sb0JBQVgsQ0FBZ0NELENBQUMsQ0FBQyxDQUFELENBQWpDLENBQUo7QUFBQSxLOzs7Ozs7NkJBRUo7QUFDUCwwQkFDRSxnQ0FBQyxvQkFBRDtBQUFzQixRQUFBLFNBQVMsRUFBQztBQUFoQyxzQkFDRSxnQ0FBQyxhQUFELHFCQUNFLGdDQUFDLHVCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUVFLG9DQURUO0FBRUUsUUFBQSxJQUFJLEVBQUUsSUFGUjtBQUdFLFFBQUEsTUFBTSxFQUFFLENBSFY7QUFJRSxRQUFBLE1BQU0sRUFBRSxLQUFLUixLQUFMLENBQVdTLEtBSnJCO0FBS0UsUUFBQSxRQUFRLEVBQUUsS0FBS0MsU0FMakI7QUFNRSxRQUFBLFFBQVEsRUFBRSxLQU5aO0FBT0UsUUFBQSxXQUFXLE1BUGI7QUFRRSxRQUFBLFNBQVMsTUFSWDtBQVNFLFFBQUEsVUFBVSxFQUFDLFdBVGI7QUFVRSxRQUFBLFNBQVMsRUFBQztBQVZaLFFBREYsQ0FERixDQURGO0FBa0JEOzs7RUExQmdDQyxnQjs7ZUE2QnBCLHFDQUFlUixvQkFBZixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSYW5nZVNsaWRlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXInO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCB7U1BFRURfQ09OVFJPTF9SQU5HRX0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBTbGlkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3BlZWRTbGlkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IGNhbGMoMCUgLSAzMnB4KTtcbiAgd2lkdGg6IDE4MHB4O1xuICBwYWRkaW5nOiAycHggOHB4IDJweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIGJveC1zaGFkb3c6IC0ycHggLTJweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAua2ctcmFuZ2Utc2xpZGVyX19pbnB1dCB7XG4gICAgd2lkdGg6IDM2cHg7XG4gIH1cbmA7XG5cbmNsYXNzIEFuaW1hdGlvblNwZWVkU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgfTtcblxuICBfb25DaGFuZ2UgPSB2ID0+IHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uU3BlZWQodlsxXSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3BlZWRTbGlkZXJDb250YWluZXIgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLXNsaWRlclwiPlxuICAgICAgICA8U2xpZGVyV3JhcHBlcj5cbiAgICAgICAgICA8UmFuZ2VTbGlkZXJcbiAgICAgICAgICAgIHJhbmdlPXtTUEVFRF9DT05UUk9MX1JBTkdFfVxuICAgICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICAgIHZhbHVlMD17MH1cbiAgICAgICAgICAgIHZhbHVlMT17dGhpcy5wcm9wcy5zcGVlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZX1cbiAgICAgICAgICAgIGlzUmFuZ2VkPXtmYWxzZX1cbiAgICAgICAgICAgIHNob3dUb29sdGlwXG4gICAgICAgICAgICBzaG93SW5wdXRcbiAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgaW5wdXRTaXplPVwidGlueVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICAgPC9TcGVlZFNsaWRlckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uQ2xpY2tPdXRzaWRlKEFuaW1hdGlvblNwZWVkU2xpZGVyKTtcbiJdfQ==