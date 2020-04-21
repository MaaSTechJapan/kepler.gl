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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactColor = require("react-color");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _reselect = require("reselect");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .sketch-picker {\n    span {\n      color: ", " !important;\n      font-family: ", ";\n    }\n    input {\n      text-align: center;\n      font-family: ", ";\n      color: ", " !important;\n      border-color: ", " !important;\n      box-shadow: none !important;\n      background-color: ", " !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// This was put in because 3rd party library react-color doesn't yet cater for customized color of child component <SketchField> which contains HEX/RGB input text box
// Issue raised: https://github.com/casesandberg/react-color/issues/631
var StyledPicker = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.inputColor;
}, function (props) {
  return props.theme.secondaryInputBgd;
}, function (props) {
  return props.theme.inputBgdHover;
});

var PRESET_COLORS = [];

var CustomPicker = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomPicker, _Component);

  var _super = _createSuper(CustomPicker);

  function CustomPicker() {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
      return props.theme;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pickerStyleSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
      return {
        picker: {
          width: '200px',
          padding: '10px 10px 8px',
          boxSizing: 'initial',
          background: theme.panelBackground
        }
      };
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      _this.props.onSwatchClose();
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          onChange = _this$props.onChange;
      var pickerStyle = this.pickerStyleSelector(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledPicker, null, /*#__PURE__*/_react["default"].createElement(_reactColor.SketchPicker, {
        color: color,
        onChange: onChange,
        presetColors: PRESET_COLORS,
        styles: pickerStyle,
        disableAlpha: true
      }));
    }
  }]);
  return CustomPicker;
}(_react.Component);

(0, _defineProperty2["default"])(CustomPicker, "propTypes", {
  color: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onSwatchClose: _propTypes["default"].func
});

var _default = (0, _styledComponents.withTheme)((0, _reactOnclickoutside["default"])(CustomPicker));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY3VzdG9tLXBpY2tlci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRQaWNrZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibGFiZWxDb2xvciIsImZvbnRGYW1pbHkiLCJpbnB1dENvbG9yIiwic2Vjb25kYXJ5SW5wdXRCZ2QiLCJpbnB1dEJnZEhvdmVyIiwiUFJFU0VUX0NPTE9SUyIsIkN1c3RvbVBpY2tlciIsInRoZW1lU2VsZWN0b3IiLCJwaWNrZXIiLCJ3aWR0aCIsInBhZGRpbmciLCJib3hTaXppbmciLCJiYWNrZ3JvdW5kIiwicGFuZWxCYWNrZ3JvdW5kIiwiZSIsIm9uU3dhdGNoQ2xvc2UiLCJjb2xvciIsIm9uQ2hhbmdlIiwicGlja2VyU3R5bGUiLCJwaWNrZXJTdHlsZVNlbGVjdG9yIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsNkJBQU9DLEdBQVYsb0JBR0gsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBSEYsRUFJRyxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFVBQWhCO0FBQUEsQ0FKUixFQVFHLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsVUFBaEI7QUFBQSxDQVJSLEVBU0gsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxVQUFoQjtBQUFBLENBVEYsRUFVSSxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLGlCQUFoQjtBQUFBLENBVlQsRUFZUSxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGFBQWhCO0FBQUEsQ0FaYixDQUFsQjs7QUFpQkEsSUFBTUMsYUFBYSxHQUFHLEVBQXRCOztJQUVNQyxZOzs7Ozs7Ozs7Ozs7Ozs7c0dBT1ksVUFBQVIsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ0MsS0FBVjtBQUFBLEs7NEdBQ0MsOEJBQWUsTUFBS1EsYUFBcEIsRUFBbUMsVUFBQVIsS0FBSztBQUFBLGFBQUs7QUFDakVTLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxLQUFLLEVBQUUsT0FERDtBQUVOQyxVQUFBQSxPQUFPLEVBQUUsZUFGSDtBQUdOQyxVQUFBQSxTQUFTLEVBQUUsU0FITDtBQUlOQyxVQUFBQSxVQUFVLEVBQUViLEtBQUssQ0FBQ2M7QUFKWjtBQUR5RCxPQUFMO0FBQUEsS0FBeEMsQzsyR0FTRCxVQUFBQyxDQUFDLEVBQUk7QUFDeEIsWUFBS2hCLEtBQUwsQ0FBV2lCLGFBQVg7QUFDRCxLOzs7Ozs7NkJBRVE7QUFBQSx3QkFDbUIsS0FBS2pCLEtBRHhCO0FBQUEsVUFDQWtCLEtBREEsZUFDQUEsS0FEQTtBQUFBLFVBQ09DLFFBRFAsZUFDT0EsUUFEUDtBQUVQLFVBQU1DLFdBQVcsR0FBRyxLQUFLQyxtQkFBTCxDQUF5QixLQUFLckIsS0FBOUIsQ0FBcEI7QUFDQSwwQkFDRSxnQ0FBQyxZQUFELHFCQUNFLGdDQUFDLHdCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUVrQixLQURUO0FBRUUsUUFBQSxRQUFRLEVBQUVDLFFBRlo7QUFHRSxRQUFBLFlBQVksRUFBRVosYUFIaEI7QUFJRSxRQUFBLE1BQU0sRUFBRWEsV0FKVjtBQUtFLFFBQUEsWUFBWTtBQUxkLFFBREYsQ0FERjtBQVdEOzs7RUFuQ3dCRSxnQjs7aUNBQXJCZCxZLGVBQ2U7QUFDakJVLEVBQUFBLEtBQUssRUFBRUssc0JBQVVDLE1BREE7QUFFakJMLEVBQUFBLFFBQVEsRUFBRUksc0JBQVVFLElBRkg7QUFHakJSLEVBQUFBLGFBQWEsRUFBRU0sc0JBQVVFO0FBSFIsQzs7ZUFxQ04saUNBQVUscUNBQWVqQixZQUFmLENBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7U2tldGNoUGlja2VyfSBmcm9tICdyZWFjdC1jb2xvcic7XHJcbmltcG9ydCBvbkNsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuLy8gVGhpcyB3YXMgcHV0IGluIGJlY2F1c2UgM3JkIHBhcnR5IGxpYnJhcnkgcmVhY3QtY29sb3IgZG9lc24ndCB5ZXQgY2F0ZXIgZm9yIGN1c3RvbWl6ZWQgY29sb3Igb2YgY2hpbGQgY29tcG9uZW50IDxTa2V0Y2hGaWVsZD4gd2hpY2ggY29udGFpbnMgSEVYL1JHQiBpbnB1dCB0ZXh0IGJveFxyXG4vLyBJc3N1ZSByYWlzZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9jYXNlc2FuZGJlcmcvcmVhY3QtY29sb3IvaXNzdWVzLzYzMVxyXG5cclxuY29uc3QgU3R5bGVkUGlja2VyID0gc3R5bGVkLmRpdmBcclxuICAuc2tldGNoLXBpY2tlciB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn0gIWltcG9ydGFudDtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dEJnZH0gIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0QmdkSG92ZXJ9ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUFJFU0VUX0NPTE9SUyA9IFtdO1xyXG5cclxuY2xhc3MgQ3VzdG9tUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblN3YXRjaENsb3NlOiBQcm9wVHlwZXMuZnVuY1xyXG4gIH07XHJcblxyXG4gIHRoZW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy50aGVtZTtcclxuICBwaWNrZXJTdHlsZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy50aGVtZVNlbGVjdG9yLCB0aGVtZSA9PiAoe1xyXG4gICAgcGlja2VyOiB7XHJcbiAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICBwYWRkaW5nOiAnMTBweCAxMHB4IDhweCcsXHJcbiAgICAgIGJveFNpemluZzogJ2luaXRpYWwnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYW5lbEJhY2tncm91bmRcclxuICAgIH1cclxuICB9KSk7XHJcblxyXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblN3YXRjaENsb3NlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2NvbG9yLCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgcGlja2VyU3R5bGUgPSB0aGlzLnBpY2tlclN0eWxlU2VsZWN0b3IodGhpcy5wcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkUGlja2VyPlxyXG4gICAgICAgIDxTa2V0Y2hQaWNrZXJcclxuICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgIHByZXNldENvbG9ycz17UFJFU0VUX0NPTE9SU31cclxuICAgICAgICAgIHN0eWxlcz17cGlja2VyU3R5bGV9XHJcbiAgICAgICAgICBkaXNhYmxlQWxwaGFcclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0eWxlZFBpY2tlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUob25DbGlja091dHNpZGUoQ3VzdG9tUGlja2VyKSk7XHJcbiJdfQ==