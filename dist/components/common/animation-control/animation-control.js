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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _window = require("global/window");

var _slider = _interopRequireDefault(require("../slider/slider"));

var _styledComponents2 = require("../styled-components");

var _speedControl = _interopRequireDefault(require("./speed-control"));

var _playbackControls = _interopRequireDefault(require("./playback-controls"));

var _floatingTimeDisplay = _interopRequireDefault(require("./floating-time-display"));

var _defaultSettings = require("../../../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 32px;\n\n  .animation-control__speed-control {\n    margin-right: -10px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 10px);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  flex-grow: 1;\n  margin-right: 24px;\n  margin-left: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderWrapper = _styledComponents["default"].div(_templateObject());

var AnimationWidgetInner = _styledComponents["default"].div(_templateObject2());

var StyledDomain = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.titleTextColor;
});

var defaultTimeFormat = 'MM/DD/YY hh:mm:ss';
var BUTTON_HEIGHT = '18px';
AnimationControlFactory.deps = [_speedControl["default"], _playbackControls["default"], _floatingTimeDisplay["default"]];

function AnimationControlFactory(SpeedControl, AnimationPlaybacks, FloatingTimeDisplay) {
  var AnimationControl = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AnimationControl, _Component);

    var _super = _createSuper(AnimationControl);

    function AnimationControl(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, AnimationControl);
      _this = _super.call(this, props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSlider1Change", function (val) {
        var domain = _this.props.animationConfig.domain;

        if (val >= domain[0] && val <= domain[1]) {
          _this.props.updateAnimationTime(val);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationTime", function () {
        var domain = _this.props.animationConfig.domain;

        _this.props.updateAnimationTime(domain[0]);

        _this._startAnimation();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startAnimation", function () {
        _this._pauseAnimation();

        _this.setState({
          isAnimating: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nextFrame", function () {
        _this._animation = null;
        var _this$props$animation = _this.props.animationConfig,
            currentTime = _this$props$animation.currentTime,
            domain = _this$props$animation.domain,
            _this$props$animation2 = _this$props$animation.speed,
            speed = _this$props$animation2 === void 0 ? 1 : _this$props$animation2;
        var adjustedSpeed = (domain[1] - domain[0]) / _defaultSettings.BASE_SPEED * speed;
        var nextTime = currentTime + speed > domain[1] ? domain[0] : currentTime + adjustedSpeed;

        _this.props.updateAnimationTime(nextTime);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_pauseAnimation", function () {
        if (_this._animation) {
          (0, _window.cancelAnimationFrame)(_this._animation);
          _this._animation = null;
        }

        _this.setState({
          isAnimating: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleSpeedControl", function () {
        _this.setState({
          showSpeedControl: !_this.state.showSpeedControl
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function () {
        _this.toggleSpeedControl();
      });
      _this.state = {
        isAnimating: false,
        width: 288,
        showSpeedControl: false
      };
      _this._animation = null;
      return _this;
    }

    (0, _createClass2["default"])(AnimationControl, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this._animation && this.state.isAnimating) {
          this._animation = (0, _window.requestAnimationFrame)(this._nextFrame);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props$animation3 = this.props.animationConfig,
            currentTime = _this$props$animation3.currentTime,
            domain = _this$props$animation3.domain,
            speed = _this$props$animation3.speed;
        var showSpeedControl = this.state.showSpeedControl;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents2.BottomWidgetInner, {
          className: "bottom-widget--inner"
        }, /*#__PURE__*/_react["default"].createElement(AnimationWidgetInner, {
          className: "animation-widget--inner"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            marginLeft: '-10px'
          }
        }, /*#__PURE__*/_react["default"].createElement(AnimationPlaybacks, {
          className: "animation-control-playpause",
          startAnimation: this._startAnimation,
          isAnimating: this.state.isAnimating,
          pauseAnimation: this._pauseAnimation,
          resetAnimation: this._resetAnimation,
          buttonHeight: BUTTON_HEIGHT,
          buttonStyle: "link"
        })), /*#__PURE__*/_react["default"].createElement(StyledDomain, {
          className: "animation-control__time-domain"
        }, /*#__PURE__*/_react["default"].createElement("span", null, _moment["default"].utc(domain[0]).format(defaultTimeFormat))), /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
          className: "animation-control__slider"
        }, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
          showValues: false,
          isRanged: false,
          minValue: domain ? domain[0] : 0,
          maxValue: domain ? domain[1] : 1,
          value1: currentTime,
          onSlider1Change: this.onSlider1Change,
          enableBarDrag: true
        })), /*#__PURE__*/_react["default"].createElement(StyledDomain, {
          className: "animation-control__time-domain"
        }, /*#__PURE__*/_react["default"].createElement("span", null, _moment["default"].utc(domain[1]).format(defaultTimeFormat))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "animation-control__speed-control"
        }, /*#__PURE__*/_react["default"].createElement(SpeedControl, {
          onClick: this.toggleSpeedControl,
          showSpeedControl: showSpeedControl,
          updateAnimationSpeed: this.props.updateAnimationSpeed,
          speed: speed,
          buttonHeight: BUTTON_HEIGHT
        }))), /*#__PURE__*/_react["default"].createElement(FloatingTimeDisplay, {
          currentTime: currentTime
        }));
      }
    }]);
    return AnimationControl;
  }(_react.Component);

  AnimationControl.defaultProps = {
    sliderHandleWidth: 12,
    onChange: function onChange() {}
  };
  return AnimationControl;
}

var _default = AnimationControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTbGlkZXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQW5pbWF0aW9uV2lkZ2V0SW5uZXIiLCJTdHlsZWREb21haW4iLCJwcm9wcyIsInRoZW1lIiwidGl0bGVUZXh0Q29sb3IiLCJkZWZhdWx0VGltZUZvcm1hdCIsIkJVVFRPTl9IRUlHSFQiLCJBbmltYXRpb25Db250cm9sRmFjdG9yeSIsImRlcHMiLCJTcGVlZENvbnRyb2xGYWN0b3J5IiwiQW5pbWF0aW9uUGxheWJhY2tzRmFjdG9yeSIsIkZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5IiwiU3BlZWRDb250cm9sIiwiQW5pbWF0aW9uUGxheWJhY2tzIiwiRmxvYXRpbmdUaW1lRGlzcGxheSIsIkFuaW1hdGlvbkNvbnRyb2wiLCJ2YWwiLCJkb21haW4iLCJhbmltYXRpb25Db25maWciLCJ1cGRhdGVBbmltYXRpb25UaW1lIiwiX3N0YXJ0QW5pbWF0aW9uIiwiX3BhdXNlQW5pbWF0aW9uIiwic2V0U3RhdGUiLCJpc0FuaW1hdGluZyIsIl9hbmltYXRpb24iLCJjdXJyZW50VGltZSIsInNwZWVkIiwiYWRqdXN0ZWRTcGVlZCIsIkJBU0VfU1BFRUQiLCJuZXh0VGltZSIsInNob3dTcGVlZENvbnRyb2wiLCJzdGF0ZSIsInRvZ2dsZVNwZWVkQ29udHJvbCIsIndpZHRoIiwiX25leHRGcmFtZSIsIm1hcmdpbkxlZnQiLCJfcmVzZXRBbmltYXRpb24iLCJtb21lbnQiLCJ1dGMiLCJmb3JtYXQiLCJvblNsaWRlcjFDaGFuZ2UiLCJ1cGRhdGVBbmltYXRpb25TcGVlZCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNsaWRlckhhbmRsZVdpZHRoIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFD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QUFBcUIsVUFBQSxXQUFXLEVBQUVtQjtBQUFsQyxVQXhDRixDQURGO0FBNENEO0FBNUdtRjtBQUFBO0FBQUEsSUFDdkRpQixnQkFEdUQ7O0FBK0d0RjNCLEVBQUFBLGdCQUFnQixDQUFDNEIsWUFBakIsR0FBZ0M7QUFDOUJDLElBQUFBLGlCQUFpQixFQUFFLEVBRFc7QUFFOUJDLElBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFO0FBRlksR0FBaEM7QUFLQSxTQUFPOUIsZ0JBQVA7QUFDRDs7ZUFFY1IsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGNhbmNlbEFuaW1hdGlvbkZyYW1lfSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IFNsaWRlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCB7Qm90dG9tV2lkZ2V0SW5uZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTcGVlZENvbnRyb2xGYWN0b3J5IGZyb20gJy4vc3BlZWQtY29udHJvbCc7XG5pbXBvcnQgQW5pbWF0aW9uUGxheWJhY2tzRmFjdG9yeSBmcm9tICcuL3BsYXliYWNrLWNvbnRyb2xzJztcbmltcG9ydCBGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeSBmcm9tICcuL2Zsb2F0aW5nLXRpbWUtZGlzcGxheSc7XG5pbXBvcnQge0JBU0VfU1BFRUR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuYDtcblxuY29uc3QgQW5pbWF0aW9uV2lkZ2V0SW5uZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzJweDtcblxuICAuYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLWNvbnRyb2wge1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG5cbiAgICAuYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLXNsaWRlciB7XG4gICAgICByaWdodDogY2FsYygwJSAtIDEwcHgpO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRG9tYWluID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG5gO1xuXG5jb25zdCBkZWZhdWx0VGltZUZvcm1hdCA9ICdNTS9ERC9ZWSBoaDptbTpzcyc7XG5jb25zdCBCVVRUT05fSEVJR0hUID0gJzE4cHgnO1xuXG5BbmltYXRpb25Db250cm9sRmFjdG9yeS5kZXBzID0gW1xuICBTcGVlZENvbnRyb2xGYWN0b3J5LFxuICBBbmltYXRpb25QbGF5YmFja3NGYWN0b3J5LFxuICBGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gQW5pbWF0aW9uQ29udHJvbEZhY3RvcnkoU3BlZWRDb250cm9sLCBBbmltYXRpb25QbGF5YmFja3MsIEZsb2F0aW5nVGltZURpc3BsYXkpIHtcbiAgY2xhc3MgQW5pbWF0aW9uQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlzQW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDI4OCxcbiAgICAgICAgc2hvd1NwZWVkQ29udHJvbDogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGlmICghdGhpcy5fYW5pbWF0aW9uICYmIHRoaXMuc3RhdGUuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX25leHRGcmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TbGlkZXIxQ2hhbmdlID0gdmFsID0+IHtcbiAgICAgIGNvbnN0IHtkb21haW59ID0gdGhpcy5wcm9wcy5hbmltYXRpb25Db25maWc7XG4gICAgICBpZiAodmFsID49IGRvbWFpblswXSAmJiB2YWwgPD0gZG9tYWluWzFdKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uVGltZSh2YWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdXBkYXRlQW5pbWF0aW9uVGltZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtkb21haW59ID0gdGhpcy5wcm9wcy5hbmltYXRpb25Db25maWc7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvblRpbWUoZG9tYWluWzBdKTtcbiAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKCk7XG4gICAgfTtcblxuICAgIF9zdGFydEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3BhdXNlQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0FuaW1hdGluZzogdHJ1ZX0pO1xuICAgIH07XG5cbiAgICBfbmV4dEZyYW1lID0gKCkgPT4ge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgIGNvbnN0IHtjdXJyZW50VGltZSwgZG9tYWluLCBzcGVlZCA9IDF9ID0gdGhpcy5wcm9wcy5hbmltYXRpb25Db25maWc7XG4gICAgICBjb25zdCBhZGp1c3RlZFNwZWVkID0gKChkb21haW5bMV0gLSBkb21haW5bMF0pIC8gQkFTRV9TUEVFRCkgKiBzcGVlZDtcbiAgICAgIGNvbnN0IG5leHRUaW1lID0gY3VycmVudFRpbWUgKyBzcGVlZCA+IGRvbWFpblsxXSA/IGRvbWFpblswXSA6IGN1cnJlbnRUaW1lICsgYWRqdXN0ZWRTcGVlZDtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uVGltZShuZXh0VGltZSk7XG4gICAgfTtcblxuICAgIF9wYXVzZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0aW9uKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQW5pbWF0aW5nOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICB0b2dnbGVTcGVlZENvbnRyb2wgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93U3BlZWRDb250cm9sOiAhdGhpcy5zdGF0ZS5zaG93U3BlZWRDb250cm9sfSk7XG4gICAgfTtcblxuICAgIG9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVTcGVlZENvbnRyb2woKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2N1cnJlbnRUaW1lLCBkb21haW4sIHNwZWVkfSA9IHRoaXMucHJvcHMuYW5pbWF0aW9uQ29uZmlnO1xuICAgICAgY29uc3Qge3Nob3dTcGVlZENvbnRyb2x9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJvdHRvbVdpZGdldElubmVyIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXQtLWlubmVyXCI+XG4gICAgICAgICAgPEFuaW1hdGlvbldpZGdldElubmVyIGNsYXNzTmFtZT1cImFuaW1hdGlvbi13aWRnZXQtLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDogJy0xMHB4J319PlxuICAgICAgICAgICAgICA8QW5pbWF0aW9uUGxheWJhY2tzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2wtcGxheXBhdXNlXCJcbiAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbj17dGhpcy5fc3RhcnRBbmltYXRpb259XG4gICAgICAgICAgICAgICAgaXNBbmltYXRpbmc9e3RoaXMuc3RhdGUuaXNBbmltYXRpbmd9XG4gICAgICAgICAgICAgICAgcGF1c2VBbmltYXRpb249e3RoaXMuX3BhdXNlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIHJlc2V0QW5pbWF0aW9uPXt0aGlzLl9yZXNldEFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICBidXR0b25IZWlnaHQ9e0JVVFRPTl9IRUlHSFR9XG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN0eWxlZERvbWFpbiBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbF9fdGltZS1kb21haW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51dGMoZG9tYWluWzBdKS5mb3JtYXQoZGVmYXVsdFRpbWVGb3JtYXQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvU3R5bGVkRG9tYWluPlxuICAgICAgICAgICAgPFNsaWRlcldyYXBwZXIgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2xfX3NsaWRlclwiPlxuICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgc2hvd1ZhbHVlcz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaXNSYW5nZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIG1pblZhbHVlPXtkb21haW4gPyBkb21haW5bMF0gOiAwfVxuICAgICAgICAgICAgICAgIG1heFZhbHVlPXtkb21haW4gPyBkb21haW5bMV0gOiAxfVxuICAgICAgICAgICAgICAgIHZhbHVlMT17Y3VycmVudFRpbWV9XG4gICAgICAgICAgICAgICAgb25TbGlkZXIxQ2hhbmdlPXt0aGlzLm9uU2xpZGVyMUNoYW5nZX1cbiAgICAgICAgICAgICAgICBlbmFibGVCYXJEcmFnPXt0cnVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICAgICAgICAgPFN0eWxlZERvbWFpbiBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbF9fdGltZS1kb21haW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51dGMoZG9tYWluWzFdKS5mb3JtYXQoZGVmYXVsdFRpbWVGb3JtYXQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvU3R5bGVkRG9tYWluPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbF9fc3BlZWQtY29udHJvbFwiPlxuICAgICAgICAgICAgICA8U3BlZWRDb250cm9sXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVTcGVlZENvbnRyb2x9XG4gICAgICAgICAgICAgICAgc2hvd1NwZWVkQ29udHJvbD17c2hvd1NwZWVkQ29udHJvbH1cbiAgICAgICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25TcGVlZH1cbiAgICAgICAgICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgICAgICAgICAgYnV0dG9uSGVpZ2h0PXtCVVRUT05fSEVJR0hUfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BbmltYXRpb25XaWRnZXRJbm5lcj5cbiAgICAgICAgICA8RmxvYXRpbmdUaW1lRGlzcGxheSBjdXJyZW50VGltZT17Y3VycmVudFRpbWV9IC8+XG4gICAgICAgIDwvQm90dG9tV2lkZ2V0SW5uZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEFuaW1hdGlvbkNvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuICAgIHNsaWRlckhhbmRsZVdpZHRoOiAxMixcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uQ29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ29udHJvbEZhY3Rvcnk7XG4iXX0=