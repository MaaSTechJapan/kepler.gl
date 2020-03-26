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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  border-radius: ", ";\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSlider = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.active ? props.theme.sliderBarHoverColor : props.theme.sliderBarColor;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return props.theme.sliderBarRadius;
});

function nope() {}

var SliderBarHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderBarHandle, _Component);

  var _super = _createSuper(SliderBarHandle);

  function SliderBarHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderBarHandle);
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
      valueListener: props.sliderBarListener,
      toggleMouseOver: _this.toggleMouseOver
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderBarHandle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          v0Left = _this$props.v0Left;
      var style = this.props.vertical ? {
        height: "".concat(width, "%"),
        bottom: "".concat(-100 + width + v0Left, "%")
      } : {
        width: "".concat(width, "%"),
        left: "".concat(v0Left, "%")
      };
      return /*#__PURE__*/_react["default"].createElement(StyledSlider, {
        active: this.state.mouseOver,
        className: (0, _classnames["default"])('kg-range-slider__bar', {
          'kg-range-slider__bar--active': this.state.mouseOver
        }),
        style: style,
        onMouseDown: this.props.enableBarDrag ? this.mouseEvent.handleMouseDown : nope,
        onTouchStart: this.props.enableBarDrag ? this.mouseEvent.handleTouchStart : nope
      });
    }
  }]);
  return SliderBarHandle;
}(_react.Component);

exports["default"] = SliderBarHandle;
(0, _defineProperty2["default"])(SliderBarHandle, "propTypes", {
  width: _propTypes["default"].number,
  left: _propTypes["default"].string,
  sliderBarListener: _propTypes["default"].func,
  enableBarDrag: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderBarHandle, "defaultProps", {
  sliderBarListener: nope,
  enableBarDrag: false,
  vertical: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWJhci1oYW5kbGUuanMiXSwibmFtZXMiOlsiU3R5bGVkU2xpZGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJhY3RpdmUiLCJ0aGVtZSIsInNsaWRlckJhckhvdmVyQ29sb3IiLCJzbGlkZXJCYXJDb2xvciIsInZlcnRpY2FsIiwic2xpZGVyQmFySGVpZ2h0Iiwic2xpZGVyQmFyUmFkaXVzIiwibm9wZSIsIlNsaWRlckJhckhhbmRsZSIsIm1vdXNlT3ZlciIsInNldFN0YXRlIiwic3RhdGUiLCJtb3VzZUV2ZW50IiwiTW91c2VFdmVudEhhbmRsZXIiLCJ2YWx1ZUxpc3RlbmVyIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJ3aWR0aCIsInYwTGVmdCIsInN0eWxlIiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsImVuYWJsZUJhckRyYWciLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBR0MsNkJBQU9DLEdBQVYsb0JBRUksVUFBQUMsS0FBSztBQUFBLFNBQ3ZCQSxLQUFLLENBQUNDLE1BQU4sR0FBZUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLG1CQUEzQixHQUFpREgsS0FBSyxDQUFDRSxLQUFOLENBQVlFLGNBRHRDO0FBQUEsQ0FGVCxFQUlkLFVBQUFKLEtBQUs7QUFBQSxtQkFBT0EsS0FBSyxDQUFDSyxRQUFOLEdBQWlCLE9BQWpCLEdBQTJCLFFBQWxDLGVBQStDTCxLQUFLLENBQUNFLEtBQU4sQ0FBWUksZUFBM0Q7QUFBQSxDQUpTLEVBS0MsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZSyxlQUFoQjtBQUFBLENBTE4sQ0FBbEI7O0FBWUEsU0FBU0MsSUFBVCxHQUFnQixDQUFFOztJQUVHQyxlOzs7OztBQWVuQiwyQkFBWVQsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRGlCLDhGQVNYO0FBQUNVLE1BQUFBLFNBQVMsRUFBRTtBQUFaLEtBVFc7QUFBQSx3R0FXRCxZQUFNO0FBQ3RCLFlBQUtDLFFBQUwsQ0FBYztBQUFDRCxRQUFBQSxTQUFTLEVBQUUsQ0FBQyxNQUFLRSxLQUFMLENBQVdGO0FBQXhCLE9BQWQ7QUFDRCxLQWJrQjtBQUVqQixVQUFLRyxVQUFMLEdBQWtCLElBQUlDLHNCQUFKLENBQXNCO0FBQ3RDVCxNQUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFEc0I7QUFFdENVLE1BQUFBLGFBQWEsRUFBRWYsS0FBSyxDQUFDZ0IsaUJBRmlCO0FBR3RDQyxNQUFBQSxlQUFlLEVBQUUsTUFBS0E7QUFIZ0IsS0FBdEIsQ0FBbEI7QUFGaUI7QUFPbEI7Ozs7NkJBUVE7QUFBQSx3QkFDaUIsS0FBS2pCLEtBRHRCO0FBQUEsVUFDQWtCLEtBREEsZUFDQUEsS0FEQTtBQUFBLFVBQ09DLE1BRFAsZUFDT0EsTUFEUDtBQUdQLFVBQU1DLEtBQUssR0FBRyxLQUFLcEIsS0FBTCxDQUFXSyxRQUFYLEdBQ1Y7QUFDRWdCLFFBQUFBLE1BQU0sWUFBS0gsS0FBTCxNQURSO0FBRUVJLFFBQUFBLE1BQU0sWUFBSyxDQUFDLEdBQUQsR0FBT0osS0FBUCxHQUFlQyxNQUFwQjtBQUZSLE9BRFUsR0FLVjtBQUNFRCxRQUFBQSxLQUFLLFlBQUtBLEtBQUwsTUFEUDtBQUVFSyxRQUFBQSxJQUFJLFlBQUtKLE1BQUw7QUFGTixPQUxKO0FBVUEsMEJBQ0UsZ0NBQUMsWUFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFLEtBQUtQLEtBQUwsQ0FBV0YsU0FEckI7QUFFRSxRQUFBLFNBQVMsRUFBRSw0QkFBVyxzQkFBWCxFQUFtQztBQUM1QywwQ0FBZ0MsS0FBS0UsS0FBTCxDQUFXRjtBQURDLFNBQW5DLENBRmI7QUFLRSxRQUFBLEtBQUssRUFBRVUsS0FMVDtBQU1FLFFBQUEsV0FBVyxFQUFFLEtBQUtwQixLQUFMLENBQVd3QixhQUFYLEdBQTJCLEtBQUtYLFVBQUwsQ0FBZ0JZLGVBQTNDLEdBQTZEakIsSUFONUU7QUFPRSxRQUFBLFlBQVksRUFBRSxLQUFLUixLQUFMLENBQVd3QixhQUFYLEdBQTJCLEtBQUtYLFVBQUwsQ0FBZ0JhLGdCQUEzQyxHQUE4RGxCO0FBUDlFLFFBREY7QUFXRDs7O0VBdEQwQ21CLGdCOzs7aUNBQXhCbEIsZSxlQUNBO0FBQ2pCUyxFQUFBQSxLQUFLLEVBQUVVLHNCQUFVQyxNQURBO0FBRWpCTixFQUFBQSxJQUFJLEVBQUVLLHNCQUFVRSxNQUZDO0FBR2pCZCxFQUFBQSxpQkFBaUIsRUFBRVksc0JBQVVHLElBSFo7QUFJakJQLEVBQUFBLGFBQWEsRUFBRUksc0JBQVVJLElBSlI7QUFLakIzQixFQUFBQSxRQUFRLEVBQUV1QixzQkFBVUk7QUFMSCxDO2lDQURBdkIsZSxrQkFTRztBQUNwQk8sRUFBQUEsaUJBQWlCLEVBQUVSLElBREM7QUFFcEJnQixFQUFBQSxhQUFhLEVBQUUsS0FGSztBQUdwQm5CLEVBQUFBLFFBQVEsRUFBRTtBQUhVLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1vdXNlRXZlbnRIYW5kbGVyIGZyb20gJy4vbW91c2UtZXZlbnQnO1xuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5zbGlkZXJCYXJIb3ZlckNvbG9yIDogcHJvcHMudGhlbWUuc2xpZGVyQmFyQ29sb3J9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJSYWRpdXN9O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBub3BlKCkge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyQmFySGFuZGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZWZ0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNsaWRlckJhckxpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlbmFibGVCYXJEcmFnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNsaWRlckJhckxpc3RlbmVyOiBub3BlLFxuICAgIGVuYWJsZUJhckRyYWc6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50SGFuZGxlcih7XG4gICAgICB2ZXJ0aWNhbDogcHJvcHMudmVydGljYWwsXG4gICAgICB2YWx1ZUxpc3RlbmVyOiBwcm9wcy5zbGlkZXJCYXJMaXN0ZW5lcixcbiAgICAgIHRvZ2dsZU1vdXNlT3ZlcjogdGhpcy50b2dnbGVNb3VzZU92ZXJcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlID0ge21vdXNlT3ZlcjogZmFsc2V9O1xuXG4gIHRvZ2dsZU1vdXNlT3ZlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6ICF0aGlzLnN0YXRlLm1vdXNlT3Zlcn0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7d2lkdGgsIHYwTGVmdH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLnByb3BzLnZlcnRpY2FsXG4gICAgICA/IHtcbiAgICAgICAgICBoZWlnaHQ6IGAke3dpZHRofSVgLFxuICAgICAgICAgIGJvdHRvbTogYCR7LTEwMCArIHdpZHRoICsgdjBMZWZ0fSVgXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICAgICAgICBsZWZ0OiBgJHt2MExlZnR9JWBcbiAgICAgICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkU2xpZGVyXG4gICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctcmFuZ2Utc2xpZGVyX19iYXInLCB7XG4gICAgICAgICAgJ2tnLXJhbmdlLXNsaWRlcl9fYmFyLS1hY3RpdmUnOiB0aGlzLnN0YXRlLm1vdXNlT3ZlclxuICAgICAgICB9KX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnID8gdGhpcy5tb3VzZUV2ZW50LmhhbmRsZU1vdXNlRG93biA6IG5vcGV9XG4gICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnID8gdGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnQgOiBub3BlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=