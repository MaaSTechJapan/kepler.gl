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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJTdHlsZWRSYW5nZVNsaWRlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJCZ2QiLCJ2ZXJ0aWNhbCIsInNsaWRlckJhckhlaWdodCIsIlNsaWRlcldyYXBwZXIiLCJpc1JhbmdlZCIsInNsaWRlck1hcmdpblRvcElzUmFuZ2UiLCJzbGlkZXJNYXJnaW5Ub3AiLCJTbGlkZXIiLCJ2YWwiLCJ2YWx1ZTEiLCJtaW5WYWx1ZSIsIkJvb2xlYW4iLCJtYXhWYWx1ZSIsInZhbHVlMCIsIngiLCJfZ2V0VmFsdWUiLCJfaXNWYWwwSW5SYW5nZSIsIm9uU2xpZGVyMENoYW5nZSIsIl9pc1ZhbDFJblJhbmdlIiwib25TbGlkZXIxQ2hhbmdlIiwidmFsMCIsInZhbDEiLCJvblNsaWRlckJhckNoYW5nZSIsInciLCJsIiwibnVtIiwic2xpZGVySGFuZGxlV2lkdGgiLCJyZWYiLCJjdXJyZW50Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJwZXJjZW50IiwiX2dldEJhc2VEaXN0YW5jZSIsIm1heERlbHRhIiwib2Zmc2V0IiwiZGVsdGEiLCJfZ2V0VmFsRGVsdGEiLCJyYXdWYWx1ZSIsIl9yb3VuZFZhbFRvU3RlcCIsInN0ZXAiLCJjbGFzc1NldCIsImRpc2FibGVkIiwic2hvd1Rvb2x0aXAiLCJjdXJyVmFsRGVsdGEiLCJ3aWR0aCIsInYwTGVmdCIsImNhbGNIYW5kbGVMZWZ0MCIsInNsaWRlMExpc3RlbmVyIiwiY2FsY0hhbmRsZUxlZnQxIiwic2xpZGUxTGlzdGVuZXIiLCJlbmFibGVCYXJEcmFnIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJDb21wb25lbnQiLCJ0aXRsZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwib25JbnB1dDBDaGFuZ2UiLCJvbklucHV0MUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxJQUFULEdBQWdCLENBQUU7O0FBRWxCLElBQU1DLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBVixvQkFHRCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQWhCO0FBQUEsQ0FISixFQUluQixVQUFBRixLQUFLO0FBQUEsbUJBQU9BLEtBQUssQ0FBQ0csUUFBTixHQUFpQixPQUFqQixHQUEyQixRQUFsQyxlQUErQ0gsS0FBSyxDQUFDQyxLQUFOLENBQVlHLGVBQTNEO0FBQUEsQ0FKYyxFQUtuQixVQUFBSixLQUFLO0FBQUEsbUJBQU9BLEtBQUssQ0FBQ0csUUFBTixHQUFpQixRQUFqQixHQUE0QixPQUFuQztBQUFBLENBTGMsQ0FBdkI7O0FBUUEsSUFBTUUsYUFBYSxHQUFHUCw2QkFBT0MsR0FBVixxQkFFSCxVQUFBQyxLQUFLO0FBQUEsU0FDakJBLEtBQUssQ0FBQ00sUUFBTixHQUFpQk4sS0FBSyxDQUFDQyxLQUFOLENBQVlNLHNCQUE3QixHQUFzRFAsS0FBSyxDQUFDQyxLQUFOLENBQVlPLGVBRGpEO0FBQUEsQ0FGRixDQUFuQjs7SUFNcUJDLE07Ozs7Ozs7Ozs7Ozs7Ozs0RkF1Q2IsdUI7dUdBbUJXLFVBQUFDLEdBQUcsRUFBSTtBQUFBLHdCQUNLLE1BQUtWLEtBRFY7QUFBQSxVQUNmVyxNQURlLGVBQ2ZBLE1BRGU7QUFBQSxVQUNQQyxRQURPLGVBQ1BBLFFBRE87QUFFdEIsYUFBT0MsT0FBTyxDQUFDSCxHQUFHLElBQUlFLFFBQVAsSUFBbUJGLEdBQUcsSUFBSUMsTUFBM0IsQ0FBZDtBQUNELEs7dUdBRWdCLFVBQUFELEdBQUcsRUFBSTtBQUFBLHlCQUNLLE1BQUtWLEtBRFY7QUFBQSxVQUNmYyxRQURlLGdCQUNmQSxRQURlO0FBQUEsVUFDTEMsTUFESyxnQkFDTEEsTUFESztBQUV0QixhQUFPRixPQUFPLENBQUNILEdBQUcsSUFBSUksUUFBUCxJQUFtQkosR0FBRyxJQUFJSyxNQUEzQixDQUFkO0FBQ0QsSzt1R0FPZ0IsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BCLFVBQU1OLEdBQUcsR0FBRyxNQUFLTyxTQUFMLENBQWUsTUFBS2pCLEtBQUwsQ0FBV2UsTUFBMUIsRUFBa0NDLENBQWxDLENBQVo7O0FBQ0EsVUFBSSxNQUFLRSxjQUFMLENBQW9CUixHQUFwQixDQUFKLEVBQThCO0FBQzVCLGNBQUtWLEtBQUwsQ0FBV21CLGVBQVgsQ0FBMkJULEdBQTNCO0FBQ0Q7QUFDRixLO3VHQUVnQixVQUFBTSxDQUFDLEVBQUk7QUFDcEIsVUFBTU4sR0FBRyxHQUFHLE1BQUtPLFNBQUwsQ0FBZSxNQUFLakIsS0FBTCxDQUFXVyxNQUExQixFQUFrQ0ssQ0FBbEMsQ0FBWjs7QUFDQSxVQUFJLE1BQUtJLGNBQUwsQ0FBb0JWLEdBQXBCLENBQUosRUFBOEI7QUFDNUIsY0FBS1YsS0FBTCxDQUFXcUIsZUFBWCxDQUEyQlgsR0FBM0I7QUFDRDtBQUNGLEs7MEdBRW1CLFVBQUFNLENBQUMsRUFBSTtBQUN2QixVQUFNTSxJQUFJLEdBQUcsTUFBS0wsU0FBTCxDQUFlLE1BQUtqQixLQUFMLENBQVdlLE1BQTFCLEVBQWtDQyxDQUFsQyxDQUFiOztBQUNBLFVBQU1PLElBQUksR0FBRyxNQUFLTixTQUFMLENBQWUsTUFBS2pCLEtBQUwsQ0FBV1csTUFBMUIsRUFBa0NLLENBQWxDLENBQWI7O0FBQ0EsVUFBSSxNQUFLSSxjQUFMLENBQW9CRyxJQUFwQixLQUE2QixNQUFLTCxjQUFMLENBQW9CSSxJQUFwQixDQUFqQyxFQUE0RDtBQUMxRCxjQUFLdEIsS0FBTCxDQUFXd0IsaUJBQVgsQ0FBNkJGLElBQTdCLEVBQW1DQyxJQUFuQztBQUNEO0FBQ0YsSzt3R0FFaUIsVUFBQ0UsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLEdBQVAsRUFBZTtBQUMvQixhQUFPRixDQUFDLEtBQUssQ0FBTixrQkFDS0MsQ0FETCxpQkFDYSxNQUFLMUIsS0FBTCxDQUFXNEIsaUJBQVgsR0FBK0IsQ0FENUMsMEJBRUtGLENBRkwsaUJBRWEsTUFBSzFCLEtBQUwsQ0FBVzRCLGlCQUFYLEdBQStCLENBRjVDLFFBQVA7QUFHRCxLO3dHQUVpQixVQUFDSCxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMxQixhQUFPLE1BQUsxQixLQUFMLENBQVdNLFFBQVgsSUFBdUJtQixDQUFDLEtBQUssQ0FBN0IsYUFDQUMsQ0FEQSx3QkFFS0EsQ0FBQyxHQUFHRCxDQUZULGlCQUVpQixNQUFLekIsS0FBTCxDQUFXNEIsaUJBQVgsR0FBK0IsQ0FGaEQsUUFBUDtBQUdELEs7Ozs7Ozt1Q0FoRWtCO0FBQ2pCLGFBQU8sS0FBSzVCLEtBQUwsQ0FBV0csUUFBWCxHQUFzQixLQUFLMEIsR0FBTCxDQUFTQyxPQUFULENBQWlCQyxZQUF2QyxHQUFzRCxLQUFLRixHQUFMLENBQVNDLE9BQVQsQ0FBaUJFLFdBQTlFO0FBQ0Q7OztpQ0FFWWhCLEMsRUFBRztBQUNkLFVBQU1pQixPQUFPLEdBQUdqQixDQUFDLEdBQUcsS0FBS2tCLGdCQUFMLEVBQXBCOztBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLbkMsS0FBTCxDQUFXYyxRQUFYLEdBQXNCLEtBQUtkLEtBQUwsQ0FBV1ksUUFBbEQ7QUFDQSxhQUFPcUIsT0FBTyxHQUFHRSxRQUFqQjtBQUNEOzs7OEJBRVN6QixHLEVBQUswQixNLEVBQVE7QUFDckIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JGLE1BQWxCLENBQWQ7O0FBQ0EsVUFBTUcsUUFBUSxHQUFHLEtBQUt2QyxLQUFMLENBQVdHLFFBQVgsR0FBc0JPLEdBQUcsR0FBRzJCLEtBQTVCLEdBQW9DM0IsR0FBRyxHQUFHMkIsS0FBM0Q7QUFFQSxhQUFPLEtBQUtHLGVBQUwsQ0FBcUJELFFBQXJCLENBQVA7QUFDRDs7O29DQVllN0IsRyxFQUFLO0FBQUEseUJBQ00sS0FBS1YsS0FEWDtBQUFBLFVBQ1pZLFFBRFksZ0JBQ1pBLFFBRFk7QUFBQSxVQUNGNkIsSUFERSxnQkFDRkEsSUFERTtBQUVuQixhQUFPLCtCQUFlN0IsUUFBZixFQUF5QjZCLElBQXpCLEVBQStCL0IsR0FBL0IsQ0FBUDtBQUNEOzs7NkJBb0NRO0FBQUEseUJBV0gsS0FBS1YsS0FYRjtBQUFBLFVBRUwwQyxRQUZLLGdCQUVMQSxRQUZLO0FBQUEsVUFHTEMsUUFISyxnQkFHTEEsUUFISztBQUFBLFVBSUxyQyxRQUpLLGdCQUlMQSxRQUpLO0FBQUEsVUFLTFEsUUFMSyxnQkFLTEEsUUFMSztBQUFBLFVBTUxGLFFBTkssZ0JBTUxBLFFBTks7QUFBQSxVQU9MRCxNQVBLLGdCQU9MQSxNQVBLO0FBQUEsVUFRTFIsUUFSSyxnQkFRTEEsUUFSSztBQUFBLFVBU0x5QixpQkFUSyxnQkFTTEEsaUJBVEs7QUFBQSxVQVVMZ0IsV0FWSyxnQkFVTEEsV0FWSztBQVlQLFVBQU03QixNQUFNLEdBQUcsQ0FBQ1QsUUFBRCxJQUFhTSxRQUFRLEdBQUcsQ0FBeEIsR0FBNEJBLFFBQTVCLEdBQXVDLEtBQUtaLEtBQUwsQ0FBV2UsTUFBakU7QUFDQSxVQUFNOEIsWUFBWSxHQUFHbEMsTUFBTSxHQUFHSSxNQUE5QjtBQUNBLFVBQU1vQixRQUFRLEdBQUdyQixRQUFRLEdBQUdGLFFBQTVCO0FBQ0EsVUFBTWtDLEtBQUssR0FBSUQsWUFBWSxHQUFHVixRQUFoQixHQUE0QixHQUExQztBQUVBLFVBQU1ZLE1BQU0sR0FBSSxDQUFDaEMsTUFBTSxHQUFHSCxRQUFWLElBQXNCdUIsUUFBdkIsR0FBbUMsR0FBbEQ7QUFFQSwwQkFDRSxnQ0FBQyxhQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcsV0FBWCxvQkFBNEJPLFFBQTVCO0FBQXNDQyxVQUFBQSxRQUFRLEVBQVJBO0FBQXRDLFdBRGI7QUFFRSxRQUFBLEdBQUcsRUFBRSxLQUFLZCxHQUZaO0FBR0UsUUFBQSxRQUFRLEVBQUV2QixRQUhaO0FBSUUsUUFBQSxRQUFRLEVBQUVIO0FBSlosc0JBTUUsZ0NBQUMsaUJBQUQ7QUFBbUIsUUFBQSxTQUFTLEVBQUMsaUJBQTdCO0FBQStDLFFBQUEsUUFBUSxFQUFFQTtBQUF6RCxzQkFDRSxnQ0FBQyx3QkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFDLHlCQURaO0FBRUUsUUFBQSxJQUFJLEVBQUUsS0FBSzZDLGVBQUwsQ0FBcUJGLEtBQXJCLEVBQTRCQyxNQUE1QixDQUZSO0FBR0UsUUFBQSxhQUFhLEVBQUUsS0FBS0UsY0FIdEI7QUFJRSxRQUFBLGlCQUFpQixFQUFFckIsaUJBSnJCO0FBS0UsUUFBQSxPQUFPLEVBQUV0QixRQUxYO0FBTUUsUUFBQSxRQUFRLEVBQUVILFFBTlo7QUFPRSxRQUFBLFdBQVcsRUFBRXlDO0FBUGYsUUFERixlQVVFLGdDQUFDLHdCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUMseUJBRFo7QUFFRSxRQUFBLElBQUksRUFBRSxLQUFLTSxlQUFMLENBQXFCSixLQUFyQixFQUE0QkMsTUFBNUIsQ0FGUjtBQUdFLFFBQUEsYUFBYSxFQUFFLEtBQUtJLGNBSHRCO0FBSUUsUUFBQSxpQkFBaUIsRUFBRXZCLGlCQUpyQjtBQUtFLFFBQUEsUUFBUSxFQUFFekIsUUFMWjtBQU1FLFFBQUEsS0FBSyxFQUFFUSxNQU5UO0FBT0UsUUFBQSxXQUFXLEVBQUVpQztBQVBmLFFBVkYsZUFtQkUsZ0NBQUMsMkJBQUQ7QUFDRSxRQUFBLEtBQUssRUFBRUUsS0FEVDtBQUVFLFFBQUEsTUFBTSxFQUFFQyxNQUZWO0FBR0UsUUFBQSxhQUFhLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV29ELGFBSDVCO0FBSUUsUUFBQSxpQkFBaUIsRUFBRSxLQUFLQyxpQkFKMUI7QUFLRSxRQUFBLFFBQVEsRUFBRWxEO0FBTFosUUFuQkYsQ0FORixDQURGO0FBb0NEOzs7RUFsS2lDbUQsZ0I7OztpQ0FBZjdDLE0sZUFDQTtBQUNqQjhDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLE1BREE7QUFFakJuRCxFQUFBQSxRQUFRLEVBQUVrRCxzQkFBVUUsSUFGSDtBQUdqQjNDLEVBQUFBLE1BQU0sRUFBRXlDLHNCQUFVRyxNQUhEO0FBSWpCaEQsRUFBQUEsTUFBTSxFQUFFNkMsc0JBQVVHLE1BSkQ7QUFLakIvQyxFQUFBQSxRQUFRLEVBQUU0QyxzQkFBVUcsTUFMSDtBQU1qQjdDLEVBQUFBLFFBQVEsRUFBRTBDLHNCQUFVRyxNQU5IO0FBT2pCL0IsRUFBQUEsaUJBQWlCLEVBQUU0QixzQkFBVUcsTUFQWjtBQVFqQnhDLEVBQUFBLGVBQWUsRUFBRXFDLHNCQUFVSSxJQVJWO0FBU2pCQyxFQUFBQSxjQUFjLEVBQUVMLHNCQUFVSSxJQVRUO0FBVWpCdkMsRUFBQUEsZUFBZSxFQUFFbUMsc0JBQVVJLElBVlY7QUFXakJFLEVBQUFBLGNBQWMsRUFBRU4sc0JBQVVJLElBWFQ7QUFZakJwQyxFQUFBQSxpQkFBaUIsRUFBRWdDLHNCQUFVSSxJQVpaO0FBYWpCbkIsRUFBQUEsSUFBSSxFQUFFZSxzQkFBVUcsTUFiQztBQWNqQlAsRUFBQUEsYUFBYSxFQUFFSSxzQkFBVUUsSUFkUjtBQWVqQmQsRUFBQUEsV0FBVyxFQUFFWSxzQkFBVUU7QUFmTixDO2lDQURBakQsTSxrQkFtQkc7QUFDcEI4QyxFQUFBQSxLQUFLLEVBQUUsRUFEYTtBQUVwQmpELEVBQUFBLFFBQVEsRUFBRSxJQUZVO0FBR3BCUyxFQUFBQSxNQUFNLEVBQUUsQ0FIWTtBQUlwQkosRUFBQUEsTUFBTSxFQUFFLEdBSlk7QUFLcEJDLEVBQUFBLFFBQVEsRUFBRSxDQUxVO0FBTXBCRSxFQUFBQSxRQUFRLEVBQUUsR0FOVTtBQU9wQjJCLEVBQUFBLElBQUksRUFBRSxDQVBjO0FBUXBCYixFQUFBQSxpQkFBaUIsRUFBRSxFQVJDO0FBU3BCd0IsRUFBQUEsYUFBYSxFQUFFLEtBVEs7QUFVcEJqQyxFQUFBQSxlQUFlLEVBQUV2QixJQVZHO0FBV3BCaUUsRUFBQUEsY0FBYyxFQUFFakUsSUFYSTtBQVlwQnlCLEVBQUFBLGVBQWUsRUFBRXpCLElBWkc7QUFhcEJrRSxFQUFBQSxjQUFjLEVBQUVsRSxJQWJJO0FBY3BCNEIsRUFBQUEsaUJBQWlCLEVBQUU1QixJQWRDO0FBZXBCK0MsRUFBQUEsUUFBUSxFQUFFLEtBZlU7QUFnQnBCeEMsRUFBQUEsUUFBUSxFQUFFLEtBaEJVO0FBaUJwQnlDLEVBQUFBLFdBQVcsRUFBRTtBQWpCTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2xpZGVySGFuZGxlIGZyb20gJy4vc2xpZGVyLWhhbmRsZSc7XG5pbXBvcnQgU2xpZGVyQmFySGFuZGxlIGZyb20gJy4vc2xpZGVyLWJhci1oYW5kbGUnO1xuaW1wb3J0IHtyb3VuZFZhbFRvU3RlcH0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5jb25zdCBTdHlsZWRSYW5nZVNsaWRlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJCZ2R9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgJHtwcm9wcyA9PiBgJHtwcm9wcy52ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJ306IDEwMCVgfTtcbmA7XG5cbmNvbnN0IFNsaWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pc1JhbmdlZCA/IHByb3BzLnRoZW1lLnNsaWRlck1hcmdpblRvcElzUmFuZ2UgOiBwcm9wcy50aGVtZS5zbGlkZXJNYXJnaW5Ub3B9cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzUmFuZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2YWx1ZTA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmFsdWUxOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pblZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNsaWRlckhhbmRsZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uU2xpZGVyMENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25JbnB1dDBDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2xpZGVyMUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25JbnB1dDFDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2xpZGVyQmFyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVuYWJsZUJhckRyYWc6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dUb29sdGlwOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHZhbHVlMDogMCxcbiAgICB2YWx1ZTE6IDEwMCxcbiAgICBtaW5WYWx1ZTogMCxcbiAgICBtYXhWYWx1ZTogMTAwLFxuICAgIHN0ZXA6IDEsXG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IDEyLFxuICAgIGVuYWJsZUJhckRyYWc6IGZhbHNlLFxuICAgIG9uU2xpZGVyMENoYW5nZTogbm9vcCxcbiAgICBvbklucHV0MENoYW5nZTogbm9vcCxcbiAgICBvblNsaWRlcjFDaGFuZ2U6IG5vb3AsXG4gICAgb25JbnB1dDFDaGFuZ2U6IG5vb3AsXG4gICAgb25TbGlkZXJCYXJDaGFuZ2U6IG5vb3AsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgfTtcblxuICByZWYgPSBjcmVhdGVSZWYoKTtcblxuICBfZ2V0QmFzZURpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gdGhpcy5yZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgOiB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgX2dldFZhbERlbHRhKHgpIHtcbiAgICBjb25zdCBwZXJjZW50ID0geCAvIHRoaXMuX2dldEJhc2VEaXN0YW5jZSgpO1xuICAgIGNvbnN0IG1heERlbHRhID0gdGhpcy5wcm9wcy5tYXhWYWx1ZSAtIHRoaXMucHJvcHMubWluVmFsdWU7XG4gICAgcmV0dXJuIHBlcmNlbnQgKiBtYXhEZWx0YTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSh2YWwsIG9mZnNldCkge1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5fZ2V0VmFsRGVsdGEob2Zmc2V0KTtcbiAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMucHJvcHMudmVydGljYWwgPyB2YWwgLSBkZWx0YSA6IHZhbCArIGRlbHRhO1xuXG4gICAgcmV0dXJuIHRoaXMuX3JvdW5kVmFsVG9TdGVwKHJhd1ZhbHVlKTtcbiAgfVxuXG4gIF9pc1ZhbDBJblJhbmdlID0gdmFsID0+IHtcbiAgICBjb25zdCB7dmFsdWUxLCBtaW5WYWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBCb29sZWFuKHZhbCA+PSBtaW5WYWx1ZSAmJiB2YWwgPD0gdmFsdWUxKTtcbiAgfTtcblxuICBfaXNWYWwxSW5SYW5nZSA9IHZhbCA9PiB7XG4gICAgY29uc3Qge21heFZhbHVlLCB2YWx1ZTB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gQm9vbGVhbih2YWwgPD0gbWF4VmFsdWUgJiYgdmFsID49IHZhbHVlMCk7XG4gIH07XG5cbiAgX3JvdW5kVmFsVG9TdGVwKHZhbCkge1xuICAgIGNvbnN0IHttaW5WYWx1ZSwgc3RlcH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiByb3VuZFZhbFRvU3RlcChtaW5WYWx1ZSwgc3RlcCwgdmFsKTtcbiAgfVxuXG4gIHNsaWRlMExpc3RlbmVyID0geCA9PiB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZTAsIHgpO1xuICAgIGlmICh0aGlzLl9pc1ZhbDBJblJhbmdlKHZhbCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXIwQ2hhbmdlKHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIHNsaWRlMUxpc3RlbmVyID0geCA9PiB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZTEsIHgpO1xuICAgIGlmICh0aGlzLl9pc1ZhbDFJblJhbmdlKHZhbCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXIxQ2hhbmdlKHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIHNsaWRlckJhckxpc3RlbmVyID0geCA9PiB7XG4gICAgY29uc3QgdmFsMCA9IHRoaXMuX2dldFZhbHVlKHRoaXMucHJvcHMudmFsdWUwLCB4KTtcbiAgICBjb25zdCB2YWwxID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZTEsIHgpO1xuICAgIGlmICh0aGlzLl9pc1ZhbDFJblJhbmdlKHZhbDEpICYmIHRoaXMuX2lzVmFsMEluUmFuZ2UodmFsMCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXJCYXJDaGFuZ2UodmFsMCwgdmFsMSk7XG4gICAgfVxuICB9O1xuXG4gIGNhbGNIYW5kbGVMZWZ0MCA9ICh3LCBsLCBudW0pID0+IHtcbiAgICByZXR1cm4gdyA9PT0gMFxuICAgICAgPyBgY2FsYygke2x9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYFxuICAgICAgOiBgY2FsYygke2x9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYDtcbiAgfTtcblxuICBjYWxjSGFuZGxlTGVmdDEgPSAodywgbCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlzUmFuZ2VkICYmIHcgPT09IDBcbiAgICAgID8gYCR7bH0lYFxuICAgICAgOiBgY2FsYygke2wgKyB3fSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWA7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzU2V0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpc1JhbmdlZCxcbiAgICAgIG1heFZhbHVlLFxuICAgICAgbWluVmFsdWUsXG4gICAgICB2YWx1ZTEsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIHNsaWRlckhhbmRsZVdpZHRoLFxuICAgICAgc2hvd1Rvb2x0aXBcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZTAgPSAhaXNSYW5nZWQgJiYgbWluVmFsdWUgPiAwID8gbWluVmFsdWUgOiB0aGlzLnByb3BzLnZhbHVlMDtcbiAgICBjb25zdCBjdXJyVmFsRGVsdGEgPSB2YWx1ZTEgLSB2YWx1ZTA7XG4gICAgY29uc3QgbWF4RGVsdGEgPSBtYXhWYWx1ZSAtIG1pblZhbHVlO1xuICAgIGNvbnN0IHdpZHRoID0gKGN1cnJWYWxEZWx0YSAvIG1heERlbHRhKSAqIDEwMDtcblxuICAgIGNvbnN0IHYwTGVmdCA9ICgodmFsdWUwIC0gbWluVmFsdWUpIC8gbWF4RGVsdGEpICogMTAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXJXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctc2xpZGVyJywgey4uLmNsYXNzU2V0LCBkaXNhYmxlZH0pfVxuICAgICAgICByZWY9e3RoaXMucmVmfVxuICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZFJhbmdlU2xpZGVyIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlclwiIHZlcnRpY2FsPXt2ZXJ0aWNhbH0+XG4gICAgICAgICAgPFNsaWRlckhhbmRsZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19oYW5kbGVcIlxuICAgICAgICAgICAgbGVmdD17dGhpcy5jYWxjSGFuZGxlTGVmdDAod2lkdGgsIHYwTGVmdCl9XG4gICAgICAgICAgICB2YWx1ZUxpc3RlbmVyPXt0aGlzLnNsaWRlMExpc3RlbmVyfVxuICAgICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgZGlzcGxheT17aXNSYW5nZWR9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2xpZGVySGFuZGxlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZVwiXG4gICAgICAgICAgICBsZWZ0PXt0aGlzLmNhbGNIYW5kbGVMZWZ0MSh3aWR0aCwgdjBMZWZ0KX1cbiAgICAgICAgICAgIHZhbHVlTGlzdGVuZXI9e3RoaXMuc2xpZGUxTGlzdGVuZXJ9XG4gICAgICAgICAgICBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUxfVxuICAgICAgICAgICAgc2hvd1Rvb2x0aXA9e3Nob3dUb29sdGlwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNsaWRlckJhckhhbmRsZVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgdjBMZWZ0PXt2MExlZnR9XG4gICAgICAgICAgICBlbmFibGVCYXJEcmFnPXt0aGlzLnByb3BzLmVuYWJsZUJhckRyYWd9XG4gICAgICAgICAgICBzbGlkZXJCYXJMaXN0ZW5lcj17dGhpcy5zbGlkZXJCYXJMaXN0ZW5lcn1cbiAgICAgICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0eWxlZFJhbmdlU2xpZGVyPlxuICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==