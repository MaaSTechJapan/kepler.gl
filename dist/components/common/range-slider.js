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

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangePlot = _interopRequireDefault(require("./range-plot"));

var _slider = _interopRequireDefault(require("./slider/slider"));

var _styledComponents2 = require("./styled-components");

var _dataUtils = require("../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 6px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  margin-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderInput = (0, _styledComponents["default"])(_styledComponents2.Input)(_templateObject(), function (props) {
  return props.theme.sliderInputWidth;
}, function (props) {
  return props.flush ? 0 : props.size === 'tiny' ? 12 : 18;
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2());

var RangeInputWrapper = _styledComponents["default"].div(_templateObject3());

var RangeSlider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RangeSlider, _Component);

  var _super = _createSuper(RangeSlider);

  function RangeSlider() {
    var _this;

    (0, _classCallCheck2["default"])(this, RangeSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value0: 0,
      value1: 1,
      prevValue0: 0,
      prevValue1: 1,
      width: 288
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderContainer", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue0", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue1", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          range = _this$props.range;
      return Boolean(val >= range[0] && val <= value1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
      var _this$props2 = _this.props,
          range = _this$props2.range,
          value0 = _this$props2.value0;
      return Boolean(val <= range[1] && val >= value0);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_roundValToStep", function (val) {
      var _this$props3 = _this.props,
          range = _this$props3.range,
          step = _this$props3.step;
      return (0, _dataUtils.roundValToStep)(range[0], step, val);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal1", function (val) {
      var _this$props4 = _this.props,
          value0 = _this$props4.value0,
          onChange = _this$props4.onChange;
      val = Number(val);

      if (_this._isVal1InRange(val)) {
        onChange([value0, _this._roundValToStep(val)]);
        return true;
      }

      return false;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal0", function (val) {
      var _this$props5 = _this.props,
          value1 = _this$props5.value1,
          onChange = _this$props5.onChange;
      var val0 = Number(val);

      if (_this._isVal0InRange(val0)) {
        onChange([_this._roundValToStep(val0), value1]);
        return true;
      }

      return false;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChangeInput", function (key, e) {
      _this.setState((0, _defineProperty2["default"])({}, key, e.target.value));
    });
    return _this;
  }

  (0, _createClass2["default"])(RangeSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._resize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this._resize();
    }
  }, {
    key: "_resize",
    value: function _resize() {
      var width = this.sliderContainer.current.offsetWidth;

      if (width !== this.state.width) {
        this.setState({
          width: width
        });
      }
    }
  }, {
    key: "_renderInput",
    value: function _renderInput(key) {
      var _this2 = this;

      var setRange = key === 'value0' ? this._setRangeVal0 : this._setRangeVal1;
      var ref = key === 'value0' ? this.inputValue0 : this.inputValue1;

      var update = function update(e) {
        if (!setRange(e.target.value)) {
          _this2.setState((0, _defineProperty2["default"])({}, key, _this2.state[key]));
        }
      };

      var onChange = this._onChangeInput.bind(this, key);

      return /*#__PURE__*/_react["default"].createElement(SliderInput, {
        className: "kg-range-slider__input",
        type: "number",
        ref: ref,
        id: "slider-input-".concat(key),
        key: key,
        value: this.state[key],
        onChange: onChange,
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            update(e);
            ref.current.blur();
          }
        },
        onBlur: update,
        flush: key === 'value0',
        size: this.props.inputSize,
        secondary: this.props.inputTheme === 'secondary'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          isRanged = _this$props6.isRanged,
          showInput = _this$props6.showInput,
          histogram = _this$props6.histogram,
          lineChart = _this$props6.lineChart,
          plotType = _this$props6.plotType,
          isEnlarged = _this$props6.isEnlarged,
          range = _this$props6.range,
          onChange = _this$props6.onChange,
          value0 = _this$props6.value0,
          value1 = _this$props6.value1,
          sliderHandleWidth = _this$props6.sliderHandleWidth,
          step = _this$props6.step;
      var height = isRanged && showInput ? '16px' : '24px';
      var width = this.state.width;
      var plotWidth = Math.max(width - sliderHandleWidth, 0);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "kg-range-slider",
        style: {
          width: '100%',
          padding: "0 ".concat(sliderHandleWidth / 2, "px")
        },
        ref: this.sliderContainer
      }, histogram && histogram.length ? /*#__PURE__*/_react["default"].createElement(_rangePlot["default"], {
        histogram: histogram,
        lineChart: lineChart,
        plotType: plotType,
        isEnlarged: isEnlarged,
        onBrush: function onBrush(val0, val1) {
          onChange([_this3._roundValToStep(val0), _this3._roundValToStep(val1)]);
        },
        range: range,
        value: [value0, value1],
        width: plotWidth
      }) : null, /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
        style: {
          height: height
        },
        className: "kg-range-slider__slider"
      }, this.props.xAxis ? /*#__PURE__*/_react["default"].createElement(this.props.xAxis, {
        width: plotWidth,
        domain: range
      }) : null, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
        showValues: false,
        isRanged: isRanged,
        minValue: range[0],
        maxValue: range[1],
        value0: value0,
        value1: value1,
        step: step,
        handleWidth: sliderHandleWidth,
        onSlider0Change: this._setRangeVal0,
        onSlider1Change: this._setRangeVal1,
        onSliderBarChange: function onSliderBarChange(val0, val1) {
          onChange([val0, val1]);
        },
        enableBarDrag: true
      }), !isRanged && showInput ? this._renderInput('value1') : null), isRanged && showInput ? /*#__PURE__*/_react["default"].createElement(RangeInputWrapper, {
        className: "range-slider__input-group"
      }, this._renderInput('value0'), this._renderInput('value1')) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var update = null;
      var value0 = props.value0,
          value1 = props.value1;

      if (props.value0 !== state.prevValue0 && !isNaN(value0)) {
        update = _objectSpread({}, update || {}, {
          value0: value0,
          prevValue0: value0
        });
      }

      if (props.value1 !== state.prevValue1 && !isNaN(value1)) {
        update = _objectSpread({}, update || {}, {
          value1: value1,
          prevValue1: value1
        });
      }

      return update;
    }
  }]);
  return RangeSlider;
}(_react.Component);

(0, _defineProperty2["default"])(RangeSlider, "propTypes", {
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  value0: _propTypes["default"].number.isRequired,
  value1: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
  isRanged: _propTypes["default"].bool,
  isEnlarged: _propTypes["default"].bool,
  showInput: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  inputSize: _propTypes["default"].string,
  step: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  xAxis: _propTypes["default"].func
});
(0, _defineProperty2["default"])(RangeSlider, "defaultProps", {
  isEnlarged: false,
  isRanged: true,
  showInput: true,
  sliderHandleWidth: 12,
  inputTheme: '',
  inputSize: 'small',
  onChange: function onChange() {}
});
(0, _reactLifecyclesCompat.polyfill)(RangeSlider);
var _default = RangeSlider;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXIuanMiXSwibmFtZXMiOlsiU2xpZGVySW5wdXQiLCJJbnB1dCIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJJbnB1dFdpZHRoIiwiZmx1c2giLCJzaXplIiwiU2xpZGVyV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlJhbmdlSW5wdXRXcmFwcGVyIiwiUmFuZ2VTbGlkZXIiLCJ2YWx1ZTAiLCJ2YWx1ZTEiLCJwcmV2VmFsdWUwIiwicHJldlZhbHVlMSIsIndpZHRoIiwidmFsIiwicmFuZ2UiLCJCb29sZWFuIiwic3RlcCIsIm9uQ2hhbmdlIiwiTnVtYmVyIiwiX2lzVmFsMUluUmFuZ2UiLCJfcm91bmRWYWxUb1N0ZXAiLCJ2YWwwIiwiX2lzVmFsMEluUmFuZ2UiLCJrZXkiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9yZXNpemUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbGlkZXJDb250YWluZXIiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJzdGF0ZSIsInNldFJhbmdlIiwiX3NldFJhbmdlVmFsMCIsIl9zZXRSYW5nZVZhbDEiLCJyZWYiLCJpbnB1dFZhbHVlMCIsImlucHV0VmFsdWUxIiwidXBkYXRlIiwiX29uQ2hhbmdlSW5wdXQiLCJiaW5kIiwiYmx1ciIsImlucHV0U2l6ZSIsImlucHV0VGhlbWUiLCJpc1JhbmdlZCIsInNob3dJbnB1dCIsImhpc3RvZ3JhbSIsImxpbmVDaGFydCIsInBsb3RUeXBlIiwiaXNFbmxhcmdlZCIsInNsaWRlckhhbmRsZVdpZHRoIiwiaGVpZ2h0IiwicGxvdFdpZHRoIiwiTWF0aCIsIm1heCIsInBhZGRpbmciLCJsZW5ndGgiLCJ2YWwxIiwieEF4aXMiLCJfcmVuZGVySW5wdXQiLCJpc05hTiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFueSIsImJv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LENBTE07QUFNakJ2QixFQUFBQSxRQUFRLEVBQUVrQixzQkFBVU0sSUFOSDtBQU9qQm5CLEVBQUFBLFVBQVUsRUFBRWEsc0JBQVVNLElBUEw7QUFRakJ2QixFQUFBQSxTQUFTLEVBQUVpQixzQkFBVU0sSUFSSjtBQVNqQnpCLEVBQUFBLFVBQVUsRUFBRW1CLHNCQUFVTyxNQVRMO0FBVWpCM0IsRUFBQUEsU0FBUyxFQUFFb0Isc0JBQVVPLE1BVko7QUFXakJ4RCxFQUFBQSxJQUFJLEVBQUVpRCxzQkFBVUUsTUFYQztBQVlqQmQsRUFBQUEsaUJBQWlCLEVBQUVZLHNCQUFVRSxNQVpaO0FBYWpCTixFQUFBQSxLQUFLLEVBQUVJLHNCQUFVSTtBQWJBLEM7aUNBRGY5RCxXLGtCQWlCa0I7QUFDcEI2QyxFQUFBQSxVQUFVLEVBQUUsS0FEUTtBQUVwQkwsRUFBQUEsUUFBUSxFQUFFLElBRlU7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRSxJQUhTO0FBSXBCSyxFQUFBQSxpQkFBaUIsRUFBRSxFQUpDO0FBS3BCUCxFQUFBQSxVQUFVLEVBQUUsRUFMUTtBQU1wQkQsRUFBQUEsU0FBUyxFQUFFLE9BTlM7QUFPcEI1QixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQVBFLEM7QUFvTXhCLHFDQUFTVixXQUFUO2VBRWVBLFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmFuZ2VQbG90IGZyb20gJy4vcmFuZ2UtcGxvdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge3JvdW5kVmFsVG9TdGVwfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuY29uc3QgU2xpZGVySW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJJbnB1dFdpZHRofXB4O1xuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiAocHJvcHMuZmx1c2ggPyAwIDogcHJvcHMuc2l6ZSA9PT0gJ3RpbnknID8gMTIgOiAxOCl9cHg7XG5gO1xuXG5jb25zdCBTbGlkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgUmFuZ2VJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNsYXNzIFJhbmdlU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByYW5nZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTE6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBoaXN0b2dyYW06IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGlzUmFuZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93SW5wdXQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgeEF4aXM6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc0VubGFyZ2VkOiBmYWxzZSxcbiAgICBpc1JhbmdlZDogdHJ1ZSxcbiAgICBzaG93SW5wdXQ6IHRydWUsXG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IDEyLFxuICAgIGlucHV0VGhlbWU6ICcnLFxuICAgIGlucHV0U2l6ZTogJ3NtYWxsJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGxldCB1cGRhdGUgPSBudWxsO1xuICAgIGNvbnN0IHt2YWx1ZTAsIHZhbHVlMX0gPSBwcm9wcztcbiAgICBpZiAocHJvcHMudmFsdWUwICE9PSBzdGF0ZS5wcmV2VmFsdWUwICYmICFpc05hTih2YWx1ZTApKSB7XG4gICAgICB1cGRhdGUgPSB7Li4uKHVwZGF0ZSB8fCB7fSksIHZhbHVlMCwgcHJldlZhbHVlMDogdmFsdWUwfTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnZhbHVlMSAhPT0gc3RhdGUucHJldlZhbHVlMSAmJiAhaXNOYU4odmFsdWUxKSkge1xuICAgICAgdXBkYXRlID0gey4uLih1cGRhdGUgfHwge30pLCB2YWx1ZTEsIHByZXZWYWx1ZTE6IHZhbHVlMX07XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTA6IDAsXG4gICAgdmFsdWUxOiAxLFxuICAgIHByZXZWYWx1ZTA6IDAsXG4gICAgcHJldlZhbHVlMTogMSxcbiAgICB3aWR0aDogMjg4XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fcmVzaXplKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB0aGlzLl9yZXNpemUoKTtcbiAgfVxuXG4gIHNsaWRlckNvbnRhaW5lciA9IGNyZWF0ZVJlZigpO1xuICBpbnB1dFZhbHVlMCA9IGNyZWF0ZVJlZigpO1xuICBpbnB1dFZhbHVlMSA9IGNyZWF0ZVJlZigpO1xuXG4gIF9pc1ZhbDBJblJhbmdlID0gdmFsID0+IHtcbiAgICBjb25zdCB7dmFsdWUxLCByYW5nZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIEJvb2xlYW4odmFsID49IHJhbmdlWzBdICYmIHZhbCA8PSB2YWx1ZTEpO1xuICB9O1xuXG4gIF9pc1ZhbDFJblJhbmdlID0gdmFsID0+IHtcbiAgICBjb25zdCB7cmFuZ2UsIHZhbHVlMH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIEJvb2xlYW4odmFsIDw9IHJhbmdlWzFdICYmIHZhbCA+PSB2YWx1ZTApO1xuICB9O1xuXG4gIF9yb3VuZFZhbFRvU3RlcCA9IHZhbCA9PiB7XG4gICAgY29uc3Qge3JhbmdlLCBzdGVwfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gcm91bmRWYWxUb1N0ZXAocmFuZ2VbMF0sIHN0ZXAsIHZhbCk7XG4gIH07XG5cbiAgX3NldFJhbmdlVmFsMSA9IHZhbCA9PiB7XG4gICAgY29uc3Qge3ZhbHVlMCwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICBpZiAodGhpcy5faXNWYWwxSW5SYW5nZSh2YWwpKSB7XG4gICAgICBvbkNoYW5nZShbdmFsdWUwLCB0aGlzLl9yb3VuZFZhbFRvU3RlcCh2YWwpXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9zZXRSYW5nZVZhbDAgPSB2YWwgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTEsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsMCA9IE51bWJlcih2YWwpO1xuXG4gICAgaWYgKHRoaXMuX2lzVmFsMEluUmFuZ2UodmFsMCkpIHtcbiAgICAgIG9uQ2hhbmdlKFt0aGlzLl9yb3VuZFZhbFRvU3RlcCh2YWwwKSwgdmFsdWUxXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9yZXNpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnNsaWRlckNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcbiAgICB9XG4gIH1cbiAgX29uQ2hhbmdlSW5wdXQgPSAoa2V5LCBlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W2tleV06IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH07XG5cbiAgX3JlbmRlcklucHV0KGtleSkge1xuICAgIGNvbnN0IHNldFJhbmdlID0ga2V5ID09PSAndmFsdWUwJyA/IHRoaXMuX3NldFJhbmdlVmFsMCA6IHRoaXMuX3NldFJhbmdlVmFsMTtcbiAgICBjb25zdCByZWYgPSBrZXkgPT09ICd2YWx1ZTAnID8gdGhpcy5pbnB1dFZhbHVlMCA6IHRoaXMuaW5wdXRWYWx1ZTE7XG4gICAgY29uc3QgdXBkYXRlID0gZSA9PiB7XG4gICAgICBpZiAoIXNldFJhbmdlKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtba2V5XTogdGhpcy5zdGF0ZVtrZXldfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2VJbnB1dC5iaW5kKHRoaXMsIGtleSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlcklucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9faW5wdXRcIlxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGlkPXtgc2xpZGVyLWlucHV0LSR7a2V5fWB9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZVtrZXldfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdXBkYXRlKGUpO1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuYmx1cigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25CbHVyPXt1cGRhdGV9XG4gICAgICAgIGZsdXNoPXtrZXkgPT09ICd2YWx1ZTAnfVxuICAgICAgICBzaXplPXt0aGlzLnByb3BzLmlucHV0U2l6ZX1cbiAgICAgICAgc2Vjb25kYXJ5PXt0aGlzLnByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzUmFuZ2VkLFxuICAgICAgc2hvd0lucHV0LFxuICAgICAgaGlzdG9ncmFtLFxuICAgICAgbGluZUNoYXJ0LFxuICAgICAgcGxvdFR5cGUsXG4gICAgICBpc0VubGFyZ2VkLFxuICAgICAgcmFuZ2UsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlMCxcbiAgICAgIHZhbHVlMSxcbiAgICAgIHNsaWRlckhhbmRsZVdpZHRoLFxuICAgICAgc3RlcFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gaXNSYW5nZWQgJiYgc2hvd0lucHV0ID8gJzE2cHgnIDogJzI0cHgnO1xuICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHBsb3RXaWR0aCA9IE1hdGgubWF4KHdpZHRoIC0gc2xpZGVySGFuZGxlV2lkdGgsIDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyXCJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiBgMCAke3NsaWRlckhhbmRsZVdpZHRoIC8gMn1weGB9fVxuICAgICAgICByZWY9e3RoaXMuc2xpZGVyQ29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICB7aGlzdG9ncmFtICYmIGhpc3RvZ3JhbS5sZW5ndGggPyAoXG4gICAgICAgICAgPFJhbmdlUGxvdFxuICAgICAgICAgICAgaGlzdG9ncmFtPXtoaXN0b2dyYW19XG4gICAgICAgICAgICBsaW5lQ2hhcnQ9e2xpbmVDaGFydH1cbiAgICAgICAgICAgIHBsb3RUeXBlPXtwbG90VHlwZX1cbiAgICAgICAgICAgIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9XG4gICAgICAgICAgICBvbkJydXNoPXsodmFsMCwgdmFsMSkgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZShbdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsMCksIHRoaXMuX3JvdW5kVmFsVG9TdGVwKHZhbDEpXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e1t2YWx1ZTAsIHZhbHVlMV19XG4gICAgICAgICAgICB3aWR0aD17cGxvdFdpZHRofVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U2xpZGVyV3JhcHBlciBzdHlsZT17e2hlaWdodH19IGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9fc2xpZGVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMueEF4aXMgPyA8dGhpcy5wcm9wcy54QXhpcyB3aWR0aD17cGxvdFdpZHRofSBkb21haW49e3JhbmdlfSAvPiA6IG51bGx9XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgc2hvd1ZhbHVlcz17ZmFsc2V9XG4gICAgICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgICAgICBtaW5WYWx1ZT17cmFuZ2VbMF19XG4gICAgICAgICAgICBtYXhWYWx1ZT17cmFuZ2VbMV19XG4gICAgICAgICAgICB2YWx1ZTA9e3ZhbHVlMH1cbiAgICAgICAgICAgIHZhbHVlMT17dmFsdWUxfVxuICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgIGhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cbiAgICAgICAgICAgIG9uU2xpZGVyMENoYW5nZT17dGhpcy5fc2V0UmFuZ2VWYWwwfVxuICAgICAgICAgICAgb25TbGlkZXIxQ2hhbmdlPXt0aGlzLl9zZXRSYW5nZVZhbDF9XG4gICAgICAgICAgICBvblNsaWRlckJhckNoYW5nZT17KHZhbDAsIHZhbDEpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoW3ZhbDAsIHZhbDFdKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBlbmFibGVCYXJEcmFnXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IWlzUmFuZ2VkICYmIHNob3dJbnB1dCA/IHRoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTEnKSA6IG51bGx9XG4gICAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICAgICAge2lzUmFuZ2VkICYmIHNob3dJbnB1dCA/IChcbiAgICAgICAgICA8UmFuZ2VJbnB1dFdyYXBwZXIgY2xhc3NOYW1lPVwicmFuZ2Utc2xpZGVyX19pbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAge3RoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTAnKX1cbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJJbnB1dCgndmFsdWUxJyl9XG4gICAgICAgICAgPC9SYW5nZUlucHV0V3JhcHBlcj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbnBvbHlmaWxsKFJhbmdlU2xpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VTbGlkZXI7XG4iXX0=