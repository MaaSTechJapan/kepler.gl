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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sliderHandle = _interopRequireDefault(require("./slider-handle"));

var _sliderBarHandle = _interopRequireDefault(require("./slider-bar-handle"));

var _dataUtils = require("../../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-top: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-bottom: 12px;\n  background-color: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function noop() {}

var StyledRangeSlider = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return "".concat(props.vertical ? 'height' : 'width', ": 100%");
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isRanged ? props.theme.sliderMarginTopIsRange : props.theme.sliderMarginTop;
});

var Slider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          minValue = _this$props.minValue;
      return Boolean(val >= minValue && val <= value1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
      var _this$props2 = _this.props,
          maxValue = _this$props2.maxValue,
          value0 = _this$props2.value0;
      return Boolean(val <= maxValue && val >= value0);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide0Listener", function (x) {
      var val = _this._getValue(_this.props.value0, x);

      if (_this._isVal0InRange(val)) {
        _this.props.onSlider0Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide1Listener", function (x) {
      var val = _this._getValue(_this.props.value1, x);

      if (_this._isVal1InRange(val)) {
        _this.props.onSlider1Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderBarListener", function (x) {
      var val0 = _this._getValue(_this.props.value0, x);

      var val1 = _this._getValue(_this.props.value1, x);

      if (_this._isVal1InRange(val1) && _this._isVal0InRange(val0)) {
        _this.props.onSliderBarChange(val0, val1);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft0", function (w, l, num) {
      return w === 0 ? "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)") : "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft1", function (w, l) {
      return _this.props.isRanged && w === 0 ? "".concat(l, "%") : "calc(".concat(l + w, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "_getBaseDistance",
    value: function _getBaseDistance() {
      return this.props.vertical ? this.ref.current.offsetHeight : this.ref.current.offsetWidth;
    }
  }, {
    key: "_getValDelta",
    value: function _getValDelta(x) {
      var percent = x / this._getBaseDistance();

      var maxDelta = this.props.maxValue - this.props.minValue;
      return percent * maxDelta;
    }
  }, {
    key: "_getValue",
    value: function _getValue(val, offset) {
      var delta = this._getValDelta(offset);

      var rawValue = this.props.vertical ? val - delta : val + delta;
      return this._roundValToStep(rawValue);
    }
  }, {
    key: "_roundValToStep",
    value: function _roundValToStep(val) {
      var _this$props3 = this.props,
          minValue = _this$props3.minValue,
          step = _this$props3.step;
      return (0, _dataUtils.roundValToStep)(minValue, step, val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classSet = _this$props4.classSet,
          disabled = _this$props4.disabled,
          isRanged = _this$props4.isRanged,
          maxValue = _this$props4.maxValue,
          minValue = _this$props4.minValue,
          value1 = _this$props4.value1,
          vertical = _this$props4.vertical,
          sliderHandleWidth = _this$props4.sliderHandleWidth,
          showTooltip = _this$props4.showTooltip;
      var value0 = !isRanged && minValue > 0 ? minValue : this.props.value0;
      var currValDelta = value1 - value0;
      var maxDelta = maxValue - minValue;
      var width = currValDelta / maxDelta * 100;
      var v0Left = (value0 - minValue) / maxDelta * 100;
      return /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
        className: (0, _classnames["default"])('kg-slider', _objectSpread({}, classSet, {
          disabled: disabled
        })),
        ref: this.ref,
        isRanged: isRanged,
        vertical: vertical
      }, /*#__PURE__*/_react["default"].createElement(StyledRangeSlider, {
        className: "kg-range-slider",
        vertical: vertical
      }, /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft0(width, v0Left),
        valueListener: this.slide0Listener,
        sliderHandleWidth: sliderHandleWidth,
        display: isRanged,
        vertical: vertical,
        showTooltip: showTooltip
      }), /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft1(width, v0Left),
        valueListener: this.slide1Listener,
        sliderHandleWidth: sliderHandleWidth,
        vertical: vertical,
        value: value1,
        showTooltip: showTooltip
      }), /*#__PURE__*/_react["default"].createElement(_sliderBarHandle["default"], {
        width: width,
        v0Left: v0Left,
        enableBarDrag: this.props.enableBarDrag,
        sliderBarListener: this.sliderBarListener,
        vertical: vertical
      })));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
(0, _defineProperty2["default"])(Slider, "propTypes", {
  title: _propTypes["default"].string,
  isRanged: _propTypes["default"].bool,
  value0: _propTypes["default"].number,
  value1: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  maxValue: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  onSlider0Change: _propTypes["default"].func,
  onInput0Change: _propTypes["default"].func,
  onSlider1Change: _propTypes["default"].func,
  onInput1Change: _propTypes["default"].func,
  onSliderBarChange: _propTypes["default"].func,
  step: _propTypes["default"].number,
  enableBarDrag: _propTypes["default"].bool,
  showTooltip: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Slider, "defaultProps", {
  title: '',
  isRanged: true,
  value0: 0,
  value1: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  sliderHandleWidth: 12,
  enableBarDrag: false,
  onSlider0Change: noop,
  onInput0Change: noop,
  onSlider1Change: noop,
  onInput1Change: noop,
  onSliderBarChange: noop,
  disabled: false,
  vertical: false,
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJTdHlsZWRSYW5nZVNsaWRlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJCZ2QiLCJ2ZXJ0aWNhbCIsInNsaWRlckJhckhlaWdodCIsIlNsaWRlcldyYXBwZXIiLCJpc1JhbmdlZCIsInNsaWRlck1hcmdpblRvcElzUmFuZ2UiLCJzbGlkZXJNYXJnaW5Ub3AiLCJTbGlkZXIiLCJ2YWwiLCJ2YWx1ZTEiLCJtaW5WYWx1ZSIsIkJvb2xlYW4iLCJtYXhWYWx1ZSIsInZhbHVlMCIsIngiLCJfZ2V0VmFsdWUiLCJfaXNWYWwwSW5SYW5nZSIsIm9uU2xpZGVyMENoYW5nZSIsIl9pc1ZhbDFJblJhbmdlIiwib25TbGlkZXIxQ2hhbmdlIiwidmFsMCIsInZhbDEiLCJvblNsaWRlckJhckNoYW5nZSIsInciLCJsIiwibnVtIiwic2xpZGVySGFuZGxlV2lkdGgiLCJyZWYiLCJjdXJyZW50Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJwZXJjZW50IiwiX2dldEJhc2VEaXN0YW5jZSIsIm1heERlbHRhIiwib2Zmc2V0IiwiZGVsdGEiLCJfZ2V0VmFsRGVsdGEiLCJyYXdWYWx1ZSIsIl9yb3VuZFZhbFRvU3RlcCIsInN0ZXAiLCJjbGFzc1NldCIsImRpc2FibGVkIiwic2hvd1Rvb2x0aXAiLCJjdXJyVmFsRGVsdGEiLCJ3aWR0aCIsInYwTGVmdCIsImNhbGNIYW5kbGVMZWZ0MCIsInNsaWRlMExpc3RlbmVyIiwiY2FsY0hhbmRsZUxlZnQxIiwic2xpZGUxTGlzdGVuZXIiLCJlbmFibGVCYXJEcmFnIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJDb21wb25lbnQiLCJ0aXRsZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwib25JbnB1dDBDaGFuZ2UiLCJvbklucHV0MUNoYW5n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QUFFLEtBZlU7QUFnQnBCeEMsRUFBQUEsUUFBUSxFQUFFLEtBaEJVO0FBaUJwQnlDLEVBQUFBLFdBQVcsRUFBRTtBQWpCTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFNsaWRlckhhbmRsZSBmcm9tICcuL3NsaWRlci1oYW5kbGUnO1xyXG5pbXBvcnQgU2xpZGVyQmFySGFuZGxlIGZyb20gJy4vc2xpZGVyLWJhci1oYW5kbGUnO1xyXG5pbXBvcnQge3JvdW5kVmFsVG9TdGVwfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuXHJcbmZ1bmN0aW9uIG5vb3AoKSB7fVxyXG5cclxuY29uc3QgU3R5bGVkUmFuZ2VTbGlkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFyQmdkfTtcclxuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcclxuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnfTogMTAwJWB9O1xyXG5gO1xyXG5cclxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmlzUmFuZ2VkID8gcHJvcHMudGhlbWUuc2xpZGVyTWFyZ2luVG9wSXNSYW5nZSA6IHByb3BzLnRoZW1lLnNsaWRlck1hcmdpblRvcH1weDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaXNSYW5nZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdmFsdWUwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdmFsdWUxOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWluVmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNsaWRlckhhbmRsZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25TbGlkZXIwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uSW5wdXQwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uU2xpZGVyMUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbklucHV0MUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblNsaWRlckJhckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZW5hYmxlQmFyRHJhZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93VG9vbHRpcDogUHJvcFR5cGVzLmJvb2xcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgaXNSYW5nZWQ6IHRydWUsXHJcbiAgICB2YWx1ZTA6IDAsXHJcbiAgICB2YWx1ZTE6IDEwMCxcclxuICAgIG1pblZhbHVlOiAwLFxyXG4gICAgbWF4VmFsdWU6IDEwMCxcclxuICAgIHN0ZXA6IDEsXHJcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXHJcbiAgICBlbmFibGVCYXJEcmFnOiBmYWxzZSxcclxuICAgIG9uU2xpZGVyMENoYW5nZTogbm9vcCxcclxuICAgIG9uSW5wdXQwQ2hhbmdlOiBub29wLFxyXG4gICAgb25TbGlkZXIxQ2hhbmdlOiBub29wLFxyXG4gICAgb25JbnB1dDFDaGFuZ2U6IG5vb3AsXHJcbiAgICBvblNsaWRlckJhckNoYW5nZTogbm9vcCxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgIHNob3dUb29sdGlwOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIHJlZiA9IGNyZWF0ZVJlZigpO1xyXG5cclxuICBfZ2V0QmFzZURpc3RhbmNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmVydGljYWwgPyB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCA6IHRoaXMucmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgfVxyXG5cclxuICBfZ2V0VmFsRGVsdGEoeCkge1xyXG4gICAgY29uc3QgcGVyY2VudCA9IHggLyB0aGlzLl9nZXRCYXNlRGlzdGFuY2UoKTtcclxuICAgIGNvbnN0IG1heERlbHRhID0gdGhpcy5wcm9wcy5tYXhWYWx1ZSAtIHRoaXMucHJvcHMubWluVmFsdWU7XHJcbiAgICByZXR1cm4gcGVyY2VudCAqIG1heERlbHRhO1xyXG4gIH1cclxuXHJcbiAgX2dldFZhbHVlKHZhbCwgb2Zmc2V0KSB7XHJcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMuX2dldFZhbERlbHRhKG9mZnNldCk7XHJcbiAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMucHJvcHMudmVydGljYWwgPyB2YWwgLSBkZWx0YSA6IHZhbCArIGRlbHRhO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9yb3VuZFZhbFRvU3RlcChyYXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBfaXNWYWwwSW5SYW5nZSA9IHZhbCA9PiB7XHJcbiAgICBjb25zdCB7dmFsdWUxLCBtaW5WYWx1ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIEJvb2xlYW4odmFsID49IG1pblZhbHVlICYmIHZhbCA8PSB2YWx1ZTEpO1xyXG4gIH07XHJcblxyXG4gIF9pc1ZhbDFJblJhbmdlID0gdmFsID0+IHtcclxuICAgIGNvbnN0IHttYXhWYWx1ZSwgdmFsdWUwfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gQm9vbGVhbih2YWwgPD0gbWF4VmFsdWUgJiYgdmFsID49IHZhbHVlMCk7XHJcbiAgfTtcclxuXHJcbiAgX3JvdW5kVmFsVG9TdGVwKHZhbCkge1xyXG4gICAgY29uc3Qge21pblZhbHVlLCBzdGVwfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gcm91bmRWYWxUb1N0ZXAobWluVmFsdWUsIHN0ZXAsIHZhbCk7XHJcbiAgfVxyXG5cclxuICBzbGlkZTBMaXN0ZW5lciA9IHggPT4ge1xyXG4gICAgY29uc3QgdmFsID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZTAsIHgpO1xyXG4gICAgaWYgKHRoaXMuX2lzVmFsMEluUmFuZ2UodmFsKSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2xpZGVyMENoYW5nZSh2YWwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNsaWRlMUxpc3RlbmVyID0geCA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlMSwgeCk7XHJcbiAgICBpZiAodGhpcy5faXNWYWwxSW5SYW5nZSh2YWwpKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXIxQ2hhbmdlKHZhbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2xpZGVyQmFyTGlzdGVuZXIgPSB4ID0+IHtcclxuICAgIGNvbnN0IHZhbDAgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlMCwgeCk7XHJcbiAgICBjb25zdCB2YWwxID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZTEsIHgpO1xyXG4gICAgaWYgKHRoaXMuX2lzVmFsMUluUmFuZ2UodmFsMSkgJiYgdGhpcy5faXNWYWwwSW5SYW5nZSh2YWwwKSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2xpZGVyQmFyQ2hhbmdlKHZhbDAsIHZhbDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNhbGNIYW5kbGVMZWZ0MCA9ICh3LCBsLCBudW0pID0+IHtcclxuICAgIHJldHVybiB3ID09PSAwXHJcbiAgICAgID8gYGNhbGMoJHtsfSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWBcclxuICAgICAgOiBgY2FsYygke2x9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYDtcclxuICB9O1xyXG5cclxuICBjYWxjSGFuZGxlTGVmdDEgPSAodywgbCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXNSYW5nZWQgJiYgdyA9PT0gMFxyXG4gICAgICA/IGAke2x9JWBcclxuICAgICAgOiBgY2FsYygke2wgKyB3fSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWA7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjbGFzc1NldCxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIGlzUmFuZ2VkLFxyXG4gICAgICBtYXhWYWx1ZSxcclxuICAgICAgbWluVmFsdWUsXHJcbiAgICAgIHZhbHVlMSxcclxuICAgICAgdmVydGljYWwsXHJcbiAgICAgIHNsaWRlckhhbmRsZVdpZHRoLFxyXG4gICAgICBzaG93VG9vbHRpcFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB2YWx1ZTAgPSAhaXNSYW5nZWQgJiYgbWluVmFsdWUgPiAwID8gbWluVmFsdWUgOiB0aGlzLnByb3BzLnZhbHVlMDtcclxuICAgIGNvbnN0IGN1cnJWYWxEZWx0YSA9IHZhbHVlMSAtIHZhbHVlMDtcclxuICAgIGNvbnN0IG1heERlbHRhID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcclxuICAgIGNvbnN0IHdpZHRoID0gKGN1cnJWYWxEZWx0YSAvIG1heERlbHRhKSAqIDEwMDtcclxuXHJcbiAgICBjb25zdCB2MExlZnQgPSAoKHZhbHVlMCAtIG1pblZhbHVlKSAvIG1heERlbHRhKSAqIDEwMDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGVyV3JhcHBlclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctc2xpZGVyJywgey4uLmNsYXNzU2V0LCBkaXNhYmxlZH0pfVxyXG4gICAgICAgIHJlZj17dGhpcy5yZWZ9XHJcbiAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxyXG4gICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdHlsZWRSYW5nZVNsaWRlciBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJcIiB2ZXJ0aWNhbD17dmVydGljYWx9PlxyXG4gICAgICAgICAgPFNsaWRlckhhbmRsZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZVwiXHJcbiAgICAgICAgICAgIGxlZnQ9e3RoaXMuY2FsY0hhbmRsZUxlZnQwKHdpZHRoLCB2MExlZnQpfVxyXG4gICAgICAgICAgICB2YWx1ZUxpc3RlbmVyPXt0aGlzLnNsaWRlMExpc3RlbmVyfVxyXG4gICAgICAgICAgICBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9XHJcbiAgICAgICAgICAgIGRpc3BsYXk9e2lzUmFuZ2VkfVxyXG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XHJcbiAgICAgICAgICAgIHNob3dUb29sdGlwPXtzaG93VG9vbHRpcH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2xpZGVySGFuZGxlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9faGFuZGxlXCJcclxuICAgICAgICAgICAgbGVmdD17dGhpcy5jYWxjSGFuZGxlTGVmdDEod2lkdGgsIHYwTGVmdCl9XHJcbiAgICAgICAgICAgIHZhbHVlTGlzdGVuZXI9e3RoaXMuc2xpZGUxTGlzdGVuZXJ9XHJcbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cclxuICAgICAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUxfVxyXG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNsaWRlckJhckhhbmRsZVxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIHYwTGVmdD17djBMZWZ0fVxyXG4gICAgICAgICAgICBlbmFibGVCYXJEcmFnPXt0aGlzLnByb3BzLmVuYWJsZUJhckRyYWd9XHJcbiAgICAgICAgICAgIHNsaWRlckJhckxpc3RlbmVyPXt0aGlzLnNsaWRlckJhckxpc3RlbmVyfVxyXG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3R5bGVkUmFuZ2VTbGlkZXI+XHJcbiAgICAgIDwvU2xpZGVyV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==