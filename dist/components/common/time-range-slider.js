"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeRangeSliderFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _window = require("global/window");

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _icons = require("./icons");

var _styledComponents2 = require("./styled-components");

var _rangeSlider = _interopRequireDefault(require("./range-slider"));

var _timeSliderMarker = _interopRequireDefault(require("./time-slider-marker"));

var _playbackControls = _interopRequireDefault(require("./animation-control/playback-controls"));

var _defaultSettings = require("../../constants/default-settings");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  font-size: 11px;\n  justify-content: ", ";\n\n  .horizontal-bar {\n    padding: 0 12px;\n    color: ", ";\n  }\n\n  .time-value {\n    display: flex;\n    flex-direction: ", ";\n    align-items: flex-start;\n\n    span {\n      color: ", ";\n    }\n  }\n\n  .time-value:last-child {\n    align-items: flex-end;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  .time-range-slider__control {\n    margin-bottom: 12px;\n    margin-right: 30px;\n  }\n\n  .playback-control-button {\n    padding: 9px 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animationControlWidth = 140;

var StyledSliderContainer = _styledComponents["default"].div(_templateObject());

TimeRangeSliderFactory.deps = [_playbackControls["default"]];

function TimeRangeSliderFactory(PlaybackControls) {
  var TimeRangeSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TimeRangeSlider, _Component);

    var _super = _createSuper(TimeRangeSlider);

    function TimeRangeSlider(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, TimeRangeSlider);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "timeSelector", function (props) {
        return props.currentTime;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatSelector", function (props) {
        return props.format;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "displayTimeSelector", (0, _reselect.createSelector)(_this.timeSelector, _this.formatSelector, function (currentTime, format) {
        var groupTime = Array.isArray(currentTime) ? currentTime : [currentTime];
        return groupTime.reduce(function (accu, curr) {
          var displayDateTime = _moment["default"].utc(curr).format(format);

          var _displayDateTime$spli = displayDateTime.split(' '),
              _displayDateTime$spli2 = (0, _slicedToArray2["default"])(_displayDateTime$spli, 2),
              displayDate = _displayDateTime$spli2[0],
              displayTime = _displayDateTime$spli2[1];

          if (!accu.displayDate.includes(displayDate)) {
            accu.displayDate.push(displayDate);
          }

          accu.displayTime.push(displayTime);
          return accu;
        }, {
          displayDate: [],
          displayTime: []
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_sliderUpdate", function (args) {
        _this._sliderThrottle.cancel();

        _this._sliderThrottle(args);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimation", function () {
        var _this$props = _this.props,
            domain = _this$props.domain,
            value = _this$props.value;
        var value0 = domain[0];
        var value1 = value0 + value[1] - value[0];

        _this.props.onChange([value0, value1]);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startAnimation", function () {
        _this._pauseAnimation();

        _this.props.toggleAnimation();

        _this.setState({
          isAnimating: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_pauseAnimation", function () {
        if (_this._animation) {
          (0, _window.cancelAnimationFrame)(_this._animation);

          _this.props.toggleAnimation();

          _this._animation = null;
        }

        _this.setState({
          isAnimating: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nextFrame", function () {
        _this._animation = null;
        var _this$props2 = _this.props,
            domain = _this$props2.domain,
            value = _this$props2.value;
        var speed = (domain[1] - domain[0]) / _defaultSettings.BASE_SPEED * _this.props.speed; // loop when reaches the end

        var value0 = value[1] + speed > domain[1] ? domain[0] : value[0] + speed;
        var value1 = value0 + value[1] - value[0];

        _this.props.onChange([value0, value1]);
      });
      _this.state = {
        isAnimating: false,
        width: 288
      };
      _this._animation = null;
      _this._sliderThrottle = (0, _lodash["default"])(function () {
        var _this$props3;

        return (_this$props3 = _this.props).onChange.apply(_this$props3, arguments);
      }, 20);
      return _this;
    }

    (0, _createClass2["default"])(TimeRangeSlider, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this._animation && this.state.isAnimating) {
          this._animation = (0, _window.requestAnimationFrame)(this._nextFrame);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            domain = _this$props4.domain,
            value = _this$props4.value,
            isEnlarged = _this$props4.isEnlarged,
            hideTimeTitle = _this$props4.hideTimeTitle;
        var isAnimating = this.state.isAnimating;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "time-range-slider"
        }, !hideTimeTitle ? /*#__PURE__*/_react["default"].createElement(TimeTitle, {
          timeFormat: this.props.timeFormat,
          value: value,
          isEnlarged: isEnlarged
        }) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderContainer, {
          className: "time-range-slider__container",
          isEnlarged: isEnlarged
        }, isEnlarged ? /*#__PURE__*/_react["default"].createElement(PlaybackControls, {
          isAnimatable: this.props.isAnimatable,
          isEnlarged: isEnlarged,
          isAnimating: isAnimating,
          pauseAnimation: this._pauseAnimation,
          resetAnimation: this._resetAnimation,
          startAnimation: this._startAnimation,
          buttonHeight: "12px",
          buttonStyle: "secondary"
        }) : null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: isEnlarged ? "calc(100% - ".concat(animationControlWidth, "px)") : '100%'
          }
        }, /*#__PURE__*/_react["default"].createElement(_rangeSlider["default"], {
          range: domain,
          value0: value[0],
          value1: value[1],
          histogram: this.props.histogram,
          lineChart: this.props.lineChart,
          plotType: this.props.plotType,
          isEnlarged: isEnlarged,
          showInput: false,
          step: this.props.step,
          onChange: this._sliderUpdate,
          xAxis: _timeSliderMarker["default"]
        }))));
      }
    }]);
    return TimeRangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(TimeRangeSlider, "propTypes", {
    onChange: _propTypes["default"].func.isRequired,
    domain: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    step: _propTypes["default"].number.isRequired,
    plotType: _propTypes["default"].string,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    lineChart: _propTypes["default"].object,
    toggleAnimation: _propTypes["default"].func.isRequired,
    isAnimatable: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    speed: _propTypes["default"].number,
    timeFormat: _propTypes["default"].string,
    hideTimeTitle: _propTypes["default"].bool
  });
  TimeRangeSlider.defaultProps = {
    timeFormat: _defaultSettings.DEFAULT_TIME_FORMAT
  };
  return TimeRangeSlider;
}

var TimeValueWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isEnlarged ? 'center' : 'space-between';
}, function (props) {
  return props.theme.titleTextColor;
}, function (props) {
  return props.isEnlarged ? 'row' : 'column';
}, function (props) {
  return props.theme.titleTextColor;
});

var TimeTitle = function TimeTitle(_ref) {
  var value = _ref.value,
      isEnlarged = _ref.isEnlarged,
      _ref$timeFormat = _ref.timeFormat,
      timeFormat = _ref$timeFormat === void 0 ? _defaultSettings.DEFAULT_TIME_FORMAT : _ref$timeFormat;
  return /*#__PURE__*/_react["default"].createElement(TimeValueWrapper, {
    isEnlarged: isEnlarged,
    className: "time-range-slider__time-title"
  }, /*#__PURE__*/_react["default"].createElement(TimeValue, {
    key: 0,
    value: _moment["default"].utc(value[0]).format(timeFormat),
    split: !isEnlarged
  }), isEnlarged ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "horizontal-bar"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Minus, {
    height: "12px"
  })) : null, /*#__PURE__*/_react["default"].createElement(TimeValue, {
    key: 1,
    value: _moment["default"].utc(value[1]).format(timeFormat),
    split: !isEnlarged
  }));
};

var TimeValue = function TimeValue(_ref2) {
  var value = _ref2.value,
      split = _ref2.split;
  return (
    /*#__PURE__*/
    // render two lines if not enlarged
    _react["default"].createElement("div", {
      className: "time-value"
    }, split ? value.split(' ').map(function (v, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i
      }, i === 0 ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectText, null, v) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, v));
    }) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, value))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXJhbmdlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25Db250cm9sV2lkdGgiLCJTdHlsZWRTbGlkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlBsYXliYWNrQ29udHJvbHNGYWN0b3J5IiwiUGxheWJhY2tDb250cm9scyIsIlRpbWVSYW5nZVNsaWRlciIsInByb3BzIiwiY3VycmVudFRpbWUiLCJmb3JtYXQiLCJ0aW1lU2VsZWN0b3IiLCJmb3JtYXRTZWxlY3RvciIsImdyb3VwVGltZSIsIkFycmF5IiwiaXNBcnJheSIsInJlZHVjZSIsImFjY3UiLCJjdXJyIiwiZGlzcGxheURhdGVUaW1lIiwibW9tZW50IiwidXRjIiwic3BsaXQiLCJkaXNwbGF5RGF0ZSIsImRpc3BsYXlUaW1lIiwiaW5jbHVkZXMiLCJwdXNoIiwiYXJncyIsIl9zbGlkZXJUaHJvdHRsZSIsImNhbmNlbCIsImRvbWFpbiIsInZhbHVlIiwidmFsdWUwIiwidmFsdWUxIiwib25DaGFuZ2UiLCJfcGF1c2VBbmltYXRpb24iLCJ0b2dnbGVBbmltYXRpb24iLCJzZXRTdGF0ZSIsImlzQW5pbWF0aW5nIiwiX2FuaW1hdGlvbiIsInNwZWVkIiwiQkFTRV9TUEVFRCIsInN0YXRlIiwid2lkdGgiLCJfbmV4dEZyYW1lIiwiaXNFbmxhcmdlZCIsImhpZGVUaW1lVGl0bGUiLCJ0aW1lRm9ybWF0IiwiaXNBbmltYXRhYmxlIiwiX3Jlc2V0QW5pbWF0aW9uIiwiX3N0YXJ0QW5pbWF0aW9uIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwicGxvdFR5cGUiLCJzdGVwIiwiX3NsaWRlclVwZGF0ZSIsIlRpbWVTbGlkZXJNYXJrZXIiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJudW1iZXIiLCJzdHJpbmciLCJhbnkiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiREVGQVVMVF9USU1FX0ZPUk1BVCIsIlRpbWVWYWx1ZVdyYXBwZXIiLCJ0aGVtZSIsInRpdGxlVGV4dENvbG9yIiwiVGltZVRpdGxlIiwiVGltZVZhbHVlIiwibWFwIiwidiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLEdBQTlCOztBQUVBLElBQU1DLHFCQUFxQixHQUFHQyw2QkFBT0MsR0FBVixtQkFBM0I7O0FBZ0JBQyxzQkFBc0IsQ0FBQ0MsSUFBdkIsR0FBOEIsQ0FBQ0MsNEJBQUQsQ0FBOUI7O0FBRWUsU0FBU0Ysc0JBQVQsQ0FBZ0NHLGdCQUFoQyxFQUFrRDtBQUFBLE1BQ3pEQyxlQUR5RDtBQUFBOztBQUFBOztBQWtCN0QsNkJBQVlDLE1BQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixnQ0FBTUEsTUFBTjtBQURpQix1R0FnQkosVUFBQUEsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLE9BaEJEO0FBQUEseUdBaUJGLFVBQUFELEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNFLE1BQVY7QUFBQSxPQWpCSDtBQUFBLDhHQWtCRyw4QkFDcEIsTUFBS0MsWUFEZSxFQUVwQixNQUFLQyxjQUZlLEVBR3BCLFVBQUNILFdBQUQsRUFBY0MsTUFBZCxFQUF5QjtBQUN2QixZQUFNRyxTQUFTLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTixXQUFkLElBQTZCQSxXQUE3QixHQUEyQyxDQUFDQSxXQUFELENBQTdEO0FBQ0EsZUFBT0ksU0FBUyxDQUFDRyxNQUFWLENBQ0wsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ2QsY0FBTUMsZUFBZSxHQUFHQyxt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QUlDLENBQUo7QUFBQSwwQkFDSDtBQUFLLFFBQUEsR0FBRyxFQUFFQTtBQUFWLFNBQ0dBLENBQUMsS0FBSyxDQUFOLGdCQUFVLGdDQUFDLDZCQUFELFFBQWFELENBQWIsQ0FBVixnQkFBeUMsZ0NBQUMsaUNBQUQsUUFBaUJBLENBQWpCLENBRDVDLENBREc7QUFBQSxLQUZQLENBREksZ0JBU0osZ0NBQUMsaUNBQUQsUUFBaUI1QyxLQUFqQixDQVZKO0FBRmdCO0FBQUEsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge3JlcXVlc3RBbmltYXRpb25GcmFtZSwgY2FuY2VsQW5pbWF0aW9uRnJhbWV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IHtNaW51c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtTZWxlY3RUZXh0Qm9sZCwgU2VsZWN0VGV4dH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3JhbmdlLXNsaWRlcic7XG5pbXBvcnQgVGltZVNsaWRlck1hcmtlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXInO1xuaW1wb3J0IFBsYXliYWNrQ29udHJvbHNGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL3BsYXliYWNrLWNvbnRyb2xzJztcbmltcG9ydCB7QkFTRV9TUEVFRCwgREVGQVVMVF9USU1FX0ZPUk1BVH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBhbmltYXRpb25Db250cm9sV2lkdGggPSAxNDA7XG5cbmNvbnN0IFN0eWxlZFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC50aW1lLXJhbmdlLXNsaWRlcl9fY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAucGxheWJhY2stY29udHJvbC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDlweCAxMnB4O1xuICB9XG5gO1xuXG5UaW1lUmFuZ2VTbGlkZXJGYWN0b3J5LmRlcHMgPSBbUGxheWJhY2tDb250cm9sc0ZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5KFBsYXliYWNrQ29udHJvbHMpIHtcbiAgY2xhc3MgVGltZVJhbmdlU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBkb21haW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHBsb3RUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaGlzdG9ncmFtOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIGxpbmVDaGFydDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHRvZ2dsZUFuaW1hdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGlzQW5pbWF0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgdGltZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGhpZGVUaW1lVGl0bGU6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpc0FuaW1hdGluZzogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAyODhcbiAgICAgIH07XG4gICAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuICAgICAgdGhpcy5fc2xpZGVyVGhyb3R0bGUgPSB0aHJvdHRsZSgoLi4udmFsdWUpID0+IHRoaXMucHJvcHMub25DaGFuZ2UoLi4udmFsdWUpLCAyMCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9hbmltYXRpb24gJiYgdGhpcy5zdGF0ZS5pc0FuaW1hdGluZykge1xuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fbmV4dEZyYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5jdXJyZW50VGltZTtcbiAgICBmb3JtYXRTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZvcm1hdDtcbiAgICBkaXNwbGF5VGltZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLnRpbWVTZWxlY3RvcixcbiAgICAgIHRoaXMuZm9ybWF0U2VsZWN0b3IsXG4gICAgICAoY3VycmVudFRpbWUsIGZvcm1hdCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cFRpbWUgPSBBcnJheS5pc0FycmF5KGN1cnJlbnRUaW1lKSA/IGN1cnJlbnRUaW1lIDogW2N1cnJlbnRUaW1lXTtcbiAgICAgICAgcmV0dXJuIGdyb3VwVGltZS5yZWR1Y2UoXG4gICAgICAgICAgKGFjY3UsIGN1cnIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlEYXRlVGltZSA9IG1vbWVudC51dGMoY3VycikuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBbZGlzcGxheURhdGUsIGRpc3BsYXlUaW1lXSA9IGRpc3BsYXlEYXRlVGltZS5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBpZiAoIWFjY3UuZGlzcGxheURhdGUuaW5jbHVkZXMoZGlzcGxheURhdGUpKSB7XG4gICAgICAgICAgICAgIGFjY3UuZGlzcGxheURhdGUucHVzaChkaXNwbGF5RGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2N1LmRpc3BsYXlUaW1lLnB1c2goZGlzcGxheVRpbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjdTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtkaXNwbGF5RGF0ZTogW10sIGRpc3BsYXlUaW1lOiBbXX1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgX3NsaWRlclVwZGF0ZSA9IGFyZ3MgPT4ge1xuICAgICAgdGhpcy5fc2xpZGVyVGhyb3R0bGUuY2FuY2VsKCk7XG4gICAgICB0aGlzLl9zbGlkZXJUaHJvdHRsZShhcmdzKTtcbiAgICB9O1xuXG4gICAgX3Jlc2V0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2RvbWFpbiwgdmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHZhbHVlMCA9IGRvbWFpblswXTtcbiAgICAgIGNvbnN0IHZhbHVlMSA9IHZhbHVlMCArIHZhbHVlWzFdIC0gdmFsdWVbMF07XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFt2YWx1ZTAsIHZhbHVlMV0pO1xuICAgIH07XG5cbiAgICBfc3RhcnRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXVzZUFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy50b2dnbGVBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQW5pbWF0aW5nOiB0cnVlfSk7XG4gICAgfTtcblxuICAgIF9wYXVzZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0aW9uKTtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQW5pbWF0aW5nOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBfbmV4dEZyYW1lID0gKCkgPT4ge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3Qge2RvbWFpbiwgdmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHNwZWVkID0gKChkb21haW5bMV0gLSBkb21haW5bMF0pIC8gQkFTRV9TUEVFRCkgKiB0aGlzLnByb3BzLnNwZWVkO1xuXG4gICAgICAvLyBsb29wIHdoZW4gcmVhY2hlcyB0aGUgZW5kXG4gICAgICBjb25zdCB2YWx1ZTAgPSB2YWx1ZVsxXSArIHNwZWVkID4gZG9tYWluWzFdID8gZG9tYWluWzBdIDogdmFsdWVbMF0gKyBzcGVlZDtcbiAgICAgIGNvbnN0IHZhbHVlMSA9IHZhbHVlMCArIHZhbHVlWzFdIC0gdmFsdWVbMF07XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFt2YWx1ZTAsIHZhbHVlMV0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZG9tYWluLCB2YWx1ZSwgaXNFbmxhcmdlZCwgaGlkZVRpbWVUaXRsZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2lzQW5pbWF0aW5nfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1yYW5nZS1zbGlkZXJcIj5cbiAgICAgICAgICB7IWhpZGVUaW1lVGl0bGUgPyAoXG4gICAgICAgICAgICA8VGltZVRpdGxlIHRpbWVGb3JtYXQ9e3RoaXMucHJvcHMudGltZUZvcm1hdH0gdmFsdWU9e3ZhbHVlfSBpc0VubGFyZ2VkPXtpc0VubGFyZ2VkfSAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxTdHlsZWRTbGlkZXJDb250YWluZXIgY2xhc3NOYW1lPVwidGltZS1yYW5nZS1zbGlkZXJfX2NvbnRhaW5lclwiIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9PlxuICAgICAgICAgICAge2lzRW5sYXJnZWQgPyAoXG4gICAgICAgICAgICAgIDxQbGF5YmFja0NvbnRyb2xzXG4gICAgICAgICAgICAgICAgaXNBbmltYXRhYmxlPXt0aGlzLnByb3BzLmlzQW5pbWF0YWJsZX1cbiAgICAgICAgICAgICAgICBpc0VubGFyZ2VkPXtpc0VubGFyZ2VkfVxuICAgICAgICAgICAgICAgIGlzQW5pbWF0aW5nPXtpc0FuaW1hdGluZ31cbiAgICAgICAgICAgICAgICBwYXVzZUFuaW1hdGlvbj17dGhpcy5fcGF1c2VBbmltYXRpb259XG4gICAgICAgICAgICAgICAgcmVzZXRBbmltYXRpb249e3RoaXMuX3Jlc2V0QW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uPXt0aGlzLl9zdGFydEFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICBidXR0b25IZWlnaHQ9XCIxMnB4XCJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogaXNFbmxhcmdlZCA/IGBjYWxjKDEwMCUgLSAke2FuaW1hdGlvbkNvbnRyb2xXaWR0aH1weClgIDogJzEwMCUnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICAgICAgICAgIHJhbmdlPXtkb21haW59XG4gICAgICAgICAgICAgICAgdmFsdWUwPXt2YWx1ZVswXX1cbiAgICAgICAgICAgICAgICB2YWx1ZTE9e3ZhbHVlWzFdfVxuICAgICAgICAgICAgICAgIGhpc3RvZ3JhbT17dGhpcy5wcm9wcy5oaXN0b2dyYW19XG4gICAgICAgICAgICAgICAgbGluZUNoYXJ0PXt0aGlzLnByb3BzLmxpbmVDaGFydH1cbiAgICAgICAgICAgICAgICBwbG90VHlwZT17dGhpcy5wcm9wcy5wbG90VHlwZX1cbiAgICAgICAgICAgICAgICBpc0VubGFyZ2VkPXtpc0VubGFyZ2VkfVxuICAgICAgICAgICAgICAgIHNob3dJbnB1dD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5zdGVwfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zbGlkZXJVcGRhdGV9XG4gICAgICAgICAgICAgICAgeEF4aXM9e1RpbWVTbGlkZXJNYXJrZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1N0eWxlZFNsaWRlckNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFRpbWVSYW5nZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGltZUZvcm1hdDogREVGQVVMVF9USU1FX0ZPUk1BVFxuICB9O1xuXG4gIHJldHVybiBUaW1lUmFuZ2VTbGlkZXI7XG59XG5cbmNvbnN0IFRpbWVWYWx1ZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiAocHJvcHMuaXNFbmxhcmdlZCA/ICdjZW50ZXInIDogJ3NwYWNlLWJldHdlZW4nKX07XG5cbiAgLmhvcml6b250YWwtYmFyIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICB9XG5cbiAgLnRpbWUtdmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gKHByb3BzLmlzRW5sYXJnZWQgPyAncm93JyA6ICdjb2x1bW4nKX07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcbiAgICB9XG4gIH1cblxuICAudGltZS12YWx1ZTpsYXN0LWNoaWxkIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbmA7XG5cbmNvbnN0IFRpbWVUaXRsZSA9ICh7dmFsdWUsIGlzRW5sYXJnZWQsIHRpbWVGb3JtYXQgPSBERUZBVUxUX1RJTUVfRk9STUFUfSkgPT4gKFxuICA8VGltZVZhbHVlV3JhcHBlciBpc0VubGFyZ2VkPXtpc0VubGFyZ2VkfSBjbGFzc05hbWU9XCJ0aW1lLXJhbmdlLXNsaWRlcl9fdGltZS10aXRsZVwiPlxuICAgIDxUaW1lVmFsdWUga2V5PXswfSB2YWx1ZT17bW9tZW50LnV0Yyh2YWx1ZVswXSkuZm9ybWF0KHRpbWVGb3JtYXQpfSBzcGxpdD17IWlzRW5sYXJnZWR9IC8+XG4gICAge2lzRW5sYXJnZWQgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWwtYmFyXCI+XG4gICAgICAgIDxNaW51cyBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICkgOiBudWxsfVxuICAgIDxUaW1lVmFsdWUga2V5PXsxfSB2YWx1ZT17bW9tZW50LnV0Yyh2YWx1ZVsxXSkuZm9ybWF0KHRpbWVGb3JtYXQpfSBzcGxpdD17IWlzRW5sYXJnZWR9IC8+XG4gIDwvVGltZVZhbHVlV3JhcHBlcj5cbik7XG5cbmNvbnN0IFRpbWVWYWx1ZSA9ICh7dmFsdWUsIHNwbGl0fSkgPT4gKFxuICAvLyByZW5kZXIgdHdvIGxpbmVzIGlmIG5vdCBlbmxhcmdlZFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtdmFsdWVcIj5cbiAgICB7c3BsaXQgPyAoXG4gICAgICB2YWx1ZVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAge2kgPT09IDAgPyA8U2VsZWN0VGV4dD57dn08L1NlbGVjdFRleHQ+IDogPFNlbGVjdFRleHRCb2xkPnt2fTwvU2VsZWN0VGV4dEJvbGQ+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICkgOiAoXG4gICAgICA8U2VsZWN0VGV4dEJvbGQ+e3ZhbHVlfTwvU2VsZWN0VGV4dEJvbGQ+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuIl19