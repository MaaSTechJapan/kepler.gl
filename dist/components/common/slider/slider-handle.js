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

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  border-radius: 3px;\n  display: inline-block;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  z-index: 999;\n  margin-left: ", "px;\n  font-size: 9.5px;\n  font-weight: 500;\n  padding: 7px 10px;\n  background-color: ", ";\n  color: ", ";\n  margin-bottom: -6px;\n  width: 50px;\n\n  :before,\n  :after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n  }\n\n  :before {\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    left: -8px;\n    top: 50%;\n  }\n\n  :after {\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    left: -6px;\n    top: 50%;\n    margin-top: -4px;\n    border-right-color: ", ";\n    border-right-style: solid;\n    border-right-width: 6px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 10;\n  margin-", ": -", "px;\n  height: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSliderHandle = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.vertical ? 'left' : 'top';
}, function (props) {
  return (props.sliderHandleWidth - props.theme.sliderBarHeight) / 2;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return props.theme.sliderHandleShadow;
}, function (props) {
  return props.theme.sliderHandleColor;
}, function (props) {
  return props.active ? props.theme.selectBorderColor : props.theme.sliderHandleColor;
}, function (props) {
  return props.theme.sliderHandleHoverColor;
});

var StyledSliderTooltip = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.sliderHandleWidth + 12;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
});

var SliderTooltip = function SliderTooltip(_ref) {
  var value = _ref.value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? function (val) {
    return val;
  } : _ref$format,
      style = _ref.style,
      sliderHandleWidth = _ref.sliderHandleWidth;
  return /*#__PURE__*/_react["default"].createElement(StyledSliderTooltip, {
    sliderHandleWidth: sliderHandleWidth,
    style: style
  }, format(value));
};

var SliderHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderHandle, _Component);

  var _super = _createSuper(SliderHandle);

  function SliderHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderHandle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.valueListener,
      toggleMouseOver: _this.toggleMouseOver
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderHandle, [{
    key: "render",
    value: function render() {
      var style = (0, _defineProperty2["default"])({}, this.props.vertical ? 'bottom' : 'left', this.props.left);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: this.props.display ? 'block' : 'none'
        }
      }, this.props.showTooltip && this.state.mouseOver ? /*#__PURE__*/_react["default"].createElement(SliderTooltip, {
        style: style,
        sliderHandleWidth: this.props.sliderHandleWidth,
        value: Number.isFinite(this.props.value) ? this.props.value : null
      }) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderHandle, {
        className: (0, _classnames["default"])('kg-range-slider__handle', {
          'kg-range-slider__handle--active': this.state.mouseOver
        }),
        sliderHandleWidth: this.props.sliderHandleWidth,
        active: this.state.mouseOver,
        vertical: this.props.vertical,
        style: style,
        onMouseDown: this.mouseEvent.handleMouseDown,
        onTouchStart: this.mouseEvent.handleTouchStart
      }));
    }
  }]);
  return SliderHandle;
}(_react.Component);

exports["default"] = SliderHandle;
(0, _defineProperty2["default"])(SliderHandle, "propTypes", {
  sliderHandleWidth: _propTypes["default"].number,
  left: _propTypes["default"].string,
  display: _propTypes["default"].bool,
  valueListener: _propTypes["default"].func,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderHandle, "defaultProps", {
  sliderHandleWidth: 12,
  left: '50%',
  display: true,
  vertical: false,
  valueListener: function valueListenerFn() {},
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWhhbmRsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTbGlkZXJIYW5kbGUiLCJzdHlsZWQiLCJzcGFuIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsInNsaWRlckhhbmRsZVdpZHRoIiwidGhlbWUiLCJzbGlkZXJCYXJIZWlnaHQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNsaWRlckhhbmRsZUhlaWdodCIsInNsaWRlckhhbmRsZVNoYWRvdyIsInNsaWRlckhhbmRsZUNvbG9yIiwiYWN0aXZlIiwic2VsZWN0Qm9yZGVyQ29sb3IiLCJzbGlkZXJIYW5kbGVIb3ZlckNvbG9yIiwiU3R5bGVkU2xpZGVyVG9vbHRpcCIsImRpdiIsInRvb2x0aXBCZyIsInRvb2x0aXBDb2xvciIsIlNsaWRlclRvb2x0aXAiLCJ2YWx1ZSIsImZvcm1hdCIsInZhbCIsInN0eWxlIiwiU2xpZGVySGFuZGxlIiwibW91c2VPdmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vdXNlRXZlbnQiLCJNb3VzZUV2ZW50SGFuZGxlciIsInZhbHVlTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJsZWZ0IiwiZGlzcGxheSIsInNob3dUb29sdGlwIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlVG91Y2hTdGFydCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwidmFsdWVMaXN0ZW5lckZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLDZCQUFPQyxJQUFWLG9CQUdiLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLFFBQU4sR0FBaUIsTUFBakIsR0FBMEIsS0FBL0I7QUFBQSxDQUhRLEVB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RWpCUCxFQUFBQSxJQUFJLEVBQUVNLHNCQUFVRSxNQUZDO0FBR2pCUCxFQUFBQSxPQUFPLEVBQUVLLHNCQUFVRyxJQUhGO0FBSWpCWCxFQUFBQSxhQUFhLEVBQUVRLHNCQUFVSSxJQUpSO0FBS2pCdkMsRUFBQUEsUUFBUSxFQUFFbUMsc0JBQVVHO0FBTEgsQztpQ0FEQWpCLFksa0JBU0c7QUFDcEJwQixFQUFBQSxpQkFBaUIsRUFBRSxFQURDO0FBRXBCNEIsRUFBQUEsSUFBSSxFQUFFLEtBRmM7QUFHcEJDLEVBQUFBLE9BQU8sRUFBRSxJQUhXO0FBSXBCOUIsRUFBQUEsUUFBUSxFQUFFLEtBSlU7QUFLcEIyQixFQUFBQSxhQUFhLEVBQUUsU0FBU2EsZUFBVCxHQUEyQixDQUFFLENBTHhCO0FBTXBCVCxFQUFBQSxXQUFXLEVBQUU7QUFOTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1vdXNlRXZlbnRIYW5kbGVyIGZyb20gJy4vbW91c2UtZXZlbnQnO1xyXG5cclxuY29uc3QgU3R5bGVkU2xpZGVySGFuZGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1hcmdpbi0ke3Byb3BzID0+IChwcm9wcy52ZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnKX06IC0ke3Byb3BzID0+XHJcbiAgKHByb3BzLnNsaWRlckhhbmRsZVdpZHRoIC0gcHJvcHMudGhlbWUuc2xpZGVyQmFySGVpZ2h0KSAvIDJ9cHg7XHJcbiAgaGVpZ2h0OiAke3Byb3BzID0+XHJcbiAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuc2xpZGVySGFuZGxlV2lkdGgpXHJcbiAgICAgID8gcHJvcHMuc2xpZGVySGFuZGxlV2lkdGhcclxuICAgICAgOiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVIZWlnaHR9cHg7XHJcbiAgd2lkdGg6ICR7cHJvcHMgPT5cclxuICAgIE51bWJlci5pc0Zpbml0ZShwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aClcclxuICAgICAgPyBwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aFxyXG4gICAgICA6IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhlaWdodH1weDtcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZVNoYWRvd307XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVDb2xvcn07XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yIDogcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlQ29sb3J9O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVIb3ZlckNvbG9yfTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTbGlkZXJUb29sdGlwID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoICsgMTJ9cHg7XHJcbiAgZm9udC1zaXplOiA5LjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQ29sb3J9O1xyXG4gIG1hcmdpbi1ib3R0b206IC02cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcblxyXG4gIDpiZWZvcmUsXHJcbiAgOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICA6YmVmb3JlIHtcclxuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IC04cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICB9XHJcblxyXG4gIDphZnRlciB7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpZGVyVG9vbHRpcCA9ICh7dmFsdWUsIGZvcm1hdCA9IHZhbCA9PiB2YWwsIHN0eWxlLCBzbGlkZXJIYW5kbGVXaWR0aH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFNsaWRlclRvb2x0aXAgc2xpZGVySGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICB7Zm9ybWF0KHZhbHVlKX1cclxuICAgIDwvU3R5bGVkU2xpZGVyVG9vbHRpcD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVySGFuZGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBsZWZ0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2YWx1ZUxpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICB2YWx1ZUxpc3RlbmVyOiBmdW5jdGlvbiB2YWx1ZUxpc3RlbmVyRm4oKSB7fSxcclxuICAgIHNob3dUb29sdGlwOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5tb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnRIYW5kbGVyKHtcclxuICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxyXG4gICAgICB2YWx1ZUxpc3RlbmVyOiBwcm9wcy52YWx1ZUxpc3RlbmVyLFxyXG4gICAgICB0b2dnbGVNb3VzZU92ZXI6IHRoaXMudG9nZ2xlTW91c2VPdmVyXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge21vdXNlT3ZlcjogZmFsc2V9O1xyXG5cclxuICB0b2dnbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6ICF0aGlzLnN0YXRlLm1vdXNlT3Zlcn0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1t0aGlzLnByb3BzLnZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCddOiB0aGlzLnByb3BzLmxlZnR9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnByb3BzLmRpc3BsYXkgPyAnYmxvY2snIDogJ25vbmUnfX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgJiYgdGhpcy5zdGF0ZS5tb3VzZU92ZXIgPyAoXHJcbiAgICAgICAgICA8U2xpZGVyVG9vbHRpcFxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxyXG4gICAgICAgICAgICB2YWx1ZT17TnVtYmVyLmlzRmluaXRlKHRoaXMucHJvcHMudmFsdWUpID8gdGhpcy5wcm9wcy52YWx1ZSA6IG51bGx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxTdHlsZWRTbGlkZXJIYW5kbGVcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctcmFuZ2Utc2xpZGVyX19oYW5kbGUnLCB7XHJcbiAgICAgICAgICAgICdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZS0tYWN0aXZlJzogdGhpcy5zdGF0ZS5tb3VzZU92ZXJcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGh9XHJcbiAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUubW91c2VPdmVyfVxyXG4gICAgICAgICAgdmVydGljYWw9e3RoaXMucHJvcHMudmVydGljYWx9XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5tb3VzZUV2ZW50LmhhbmRsZU1vdXNlRG93bn1cclxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=