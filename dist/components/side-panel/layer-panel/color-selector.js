"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputBoxContainer = exports.ColorSelectorInput = exports.ColorBlock = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorUtils = require("../../../utils/color-utils");

var _singleColorPalette = _interopRequireDefault(require("./single-color-palette"));

var _colorRangeSelector = _interopRequireDefault(require("./color-range-selector"));

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _styledComponents2 = require("../../common/styled-components");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n\n  .color-select__input-group {\n    flex-grow: 1;\n  }\n  .color-select__input-group:nth-child(2) {\n    margin-left: 12px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  height: ", ";\n\n  .color-selector__selector__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 32px;\n  height: 18px;\n  border-radius: 1px;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ColorBlock = _styledComponents["default"].div(_templateObject(), function (props) {
  return "rgb(".concat(props.color.slice(0, 3).join(','), ")");
});

exports.ColorBlock = ColorBlock;

var ColorSelectorInput = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.theme.input;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputPlaceholderColor;
});

exports.ColorSelectorInput = ColorSelectorInput;

var InputBoxContainer = _styledComponents["default"].div(_templateObject3());

exports.InputBoxContainer = InputBoxContainer;

var ColorSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorSelector, _Component);

  var _super = _createSuper(ColorSelector);

  function ColorSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showDropdown: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "node", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      if (_this.props.colorUI && _this.props.colorUI.showSketcher) {
        // if sketcher is open, let sketch to close itself first
        return;
      }

      _this._closePanelDropdown();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getEditing", function () {
      return _this.props.colorUI ? _this.props.colorUI.showDropdown : _this.state.showDropdown;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closePanelDropdown", function () {
      if (_this._getEditing() === false) {
        return;
      }

      if (_this.props.setColorUI) {
        _this.props.setColorUI({
          showDropdown: false,
          showSketcher: false
        });
      } else {
        _this.setState({
          showDropdown: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelectColor", function (color, e) {
      e.stopPropagation();

      var editing = _this._getEditing();

      if (_this.props.colorSets[editing]) {
        _this.props.colorSets[editing].setColor(color);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDropdown", function (e, i) {
      e.stopPropagation();
      e.preventDefault();

      if (_this.props.setColorUI) {
        _this.props.setColorUI({
          showDropdown: i
        });
      } else {
        _this.setState({
          showDropdown: i
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          colorSets = _this$props.colorSets,
          disabled = _this$props.disabled,
          inputTheme = _this$props.inputTheme,
          colorUI = _this$props.colorUI;

      var editing = this._getEditing();

      var currentEditing = colorSets[editing] && (0, _typeof2["default"])(colorSets[editing]) === 'object';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-selector",
        ref: this.node
      }, /*#__PURE__*/_react["default"].createElement(InputBoxContainer, null, colorSets.map(function (cSet, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "color-select__input-group",
          key: i
        }, /*#__PURE__*/_react["default"].createElement(ColorSelectorInput, {
          className: "color-selector__selector",
          active: editing === i,
          disabled: disabled,
          inputTheme: inputTheme,
          onMouseDown: function onMouseDown(e) {
            return _this2._showDropdown(e, i);
          }
        }, cSet.isRange ? /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
          colors: cSet.selectedColor.colors
        }) : /*#__PURE__*/_react["default"].createElement(ColorBlock, {
          className: "color-selector__selector__block",
          color: cSet.selectedColor
        }), cSet.label ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "color-selector__selector__label"
        }, cSet.label) : null));
      })), currentEditing ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledPanelDropdown, {
        className: "color-selector__dropdown"
      }, colorSets[editing].isRange ? /*#__PURE__*/_react["default"].createElement(_colorRangeSelector["default"], {
        selectedColorRange: colorSets[editing].selectedColor,
        onSelectColorRange: this._onSelectColor,
        setColorPaletteUI: this.props.setColorUI,
        colorPaletteUI: colorUI
      }) : /*#__PURE__*/_react["default"].createElement(_singleColorPalette["default"], {
        selectedColor: (0, _colorUtils.rgbToHex)(colorSets[editing].selectedColor),
        onSelectColor: this._onSelectColor
      })) : null);
    }
  }]);
  return ColorSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ColorSelector, "propTypes", {
  colorSets: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    selectedColor: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].any), _propTypes["default"].object]),
    setColor: _propTypes["default"].func.isRequired,
    isRange: _propTypes["default"].bool,
    label: _propTypes["default"].string
  })),
  colorUI: _propTypes["default"].shape({
    customPalette: _propTypes["default"].object,
    showSketcher: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
    showDropdown: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
    colorRangeConfig: _propTypes["default"].object
  }),
  inputTheme: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  setColorUI: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ColorSelector, "defaultProps", {
  colorSets: []
});

var _default = (0, _reactOnclickoutside["default"])(ColorSelector);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3Itc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiQ29sb3JCbG9jayIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiY29sb3IiLCJzbGljZSIsImpvaW4iLCJDb2xvclNlbGVjdG9ySW5wdXQiLCJpbnB1dFRoZW1lIiwidGhlbWUiLCJzZWNvbmRhcnlJbnB1dCIsImlucHV0IiwiaW5wdXRCb3hIZWlnaHQiLCJpbnB1dFBsYWNlaG9sZGVyQ29sb3IiLCJJbnB1dEJveENvbnRhaW5lciIsIkNvbG9yU2VsZWN0b3IiLCJzaG93RHJvcGRvd24iLCJlIiwiY29sb3JVSSIsInNob3dTa2V0Y2hlciIsIl9jbG9zZVBhbmVsRHJvcGRvd24iLCJzdGF0ZSIsIl9nZXRFZGl0aW5nIiwic2V0Q29sb3JVSSIsInNldFN0YXRlIiwic3RvcFByb3BhZ2F0aW9uIiwiZWRpdGluZyIsImNvbG9yU2V0cyIsInNldENvbG9yIiwiaSIsInByZXZlbnREZWZhdWx0IiwiZGlzYWJsZWQiLCJjdXJyZW50RWRpdGluZyIsIm5vZGUiLCJtYXAiLCJjU2V0IiwiX3Nob3dEcm9wZG93biIsImlzUmFuZ2UiLCJzZWxlY3RlZENvbG9yIiwiY29sb3JzIiwibGFiZWwiLCJfb25TZWxlY3RDb2xvciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mVHlwZSIsImFueSIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInN0cmluZyIsImN1c3RvbVBhbGV0dGUiLCJudW1iZXIiLCJjb2xvclJhbmdlQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8s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VVEsSUFBWCxFQUFpQlIsc0JBQVVXLE1BQTNCLENBQXBCLENBRlM7QUFHdkJ0QyxJQUFBQSxZQUFZLEVBQUUyQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVVEsSUFBWCxFQUFpQlIsc0JBQVVXLE1BQTNCLENBQXBCLENBSFM7QUFJdkJDLElBQUFBLGdCQUFnQixFQUFFWixzQkFBVUs7QUFKTCxHQUFoQixDQVRRO0FBZWpCeEMsRUFBQUEsVUFBVSxFQUFFbUMsc0JBQVVTLE1BZkw7QUFnQmpCckIsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVVEsSUFoQkg7QUFpQmpCNUIsRUFBQUEsVUFBVSxFQUFFb0Isc0JBQVVNO0FBakJMLEM7aUNBRGZsQyxhLGtCQXFCa0I7QUFDcEJZLEVBQUFBLFNBQVMsRUFBRTtBQURTLEM7O2VBMEdULHFDQUFlWixhQUFmLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtyZ2JUb0hleH0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQgU2luZ2xlQ29sb3JQYWxldHRlIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9sYXllci1wYW5lbC9zaW5nbGUtY29sb3ItcGFsZXR0ZSc7XHJcbmltcG9ydCBDb2xvclJhbmdlU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2NvbG9yLXJhbmdlLXNlbGVjdG9yJztcclxuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3ItcGFsZXR0ZSc7XHJcbmltcG9ydCB7U3R5bGVkUGFuZWxEcm9wZG93bn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9yQmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBgcmdiKCR7cHJvcHMuY29sb3Iuc2xpY2UoMCwgMykuam9pbignLCcpfSlgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xvclNlbGVjdG9ySW5wdXQgPSBzdHlsZWQuZGl2YFxyXG4gICR7cHJvcHMgPT4gKHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXQgOiBwcm9wcy50aGVtZS5pbnB1dCl9O1xyXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodH07XHJcblxyXG4gIC5jb2xvci1zZWxlY3Rvcl9fc2VsZWN0b3JfX2xhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQbGFjZWhvbGRlckNvbG9yfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuY29sb3Itc2VsZWN0X19pbnB1dC1ncm91cCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIC5jb2xvci1zZWxlY3RfX2lucHV0LWdyb3VwOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jbGFzcyBDb2xvclNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY29sb3JTZXRzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzZWxlY3RlZENvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSwgUHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gICAgICAgIHNldENvbG9yOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGlzUmFuZ2U6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICAgIH0pXHJcbiAgICApLFxyXG4gICAgY29sb3JVSTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgY3VzdG9tUGFsZXR0ZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgc2hvd1NrZXRjaGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgICBzaG93RHJvcGRvd246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICAgIGNvbG9yUmFuZ2VDb25maWc6IFByb3BUeXBlcy5vYmplY3RcclxuICAgIH0pLFxyXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNldENvbG9yVUk6IFByb3BUeXBlcy5mdW5jXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbG9yU2V0czogW11cclxuICB9O1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dEcm9wZG93bjogZmFsc2VcclxuICB9O1xyXG5cclxuICBub2RlID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29sb3JVSSAmJiB0aGlzLnByb3BzLmNvbG9yVUkuc2hvd1NrZXRjaGVyKSB7XHJcbiAgICAgIC8vIGlmIHNrZXRjaGVyIGlzIG9wZW4sIGxldCBza2V0Y2ggdG8gY2xvc2UgaXRzZWxmIGZpcnN0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2Nsb3NlUGFuZWxEcm9wZG93bigpO1xyXG4gIH07XHJcblxyXG4gIF9nZXRFZGl0aW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY29sb3JVSSA/IHRoaXMucHJvcHMuY29sb3JVSS5zaG93RHJvcGRvd24gOiB0aGlzLnN0YXRlLnNob3dEcm9wZG93bjtcclxuICB9O1xyXG5cclxuICBfY2xvc2VQYW5lbERyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuX2dldEVkaXRpbmcoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMuc2V0Q29sb3JVSSkge1xyXG4gICAgICB0aGlzLnByb3BzLnNldENvbG9yVUkoe3Nob3dEcm9wZG93bjogZmFsc2UsIHNob3dTa2V0Y2hlcjogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEcm9wZG93bjogZmFsc2V9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfb25TZWxlY3RDb2xvciA9IChjb2xvciwgZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGVkaXRpbmcgPSB0aGlzLl9nZXRFZGl0aW5nKCk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb2xvclNldHNbZWRpdGluZ10pIHtcclxuICAgICAgdGhpcy5wcm9wcy5jb2xvclNldHNbZWRpdGluZ10uc2V0Q29sb3IoY29sb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9zaG93RHJvcGRvd24gPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnByb3BzLnNldENvbG9yVUkpIHtcclxuICAgICAgdGhpcy5wcm9wcy5zZXRDb2xvclVJKHtzaG93RHJvcGRvd246IGl9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEcm9wZG93bjogaX0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjb2xvclNldHMsIGRpc2FibGVkLCBpbnB1dFRoZW1lLCBjb2xvclVJfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgZWRpdGluZyA9IHRoaXMuX2dldEVkaXRpbmcoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRFZGl0aW5nID0gY29sb3JTZXRzW2VkaXRpbmddICYmIHR5cGVvZiBjb2xvclNldHNbZWRpdGluZ10gPT09ICdvYmplY3QnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc2VsZWN0b3JcIiByZWY9e3RoaXMubm9kZX0+XHJcbiAgICAgICAgPElucHV0Qm94Q29udGFpbmVyPlxyXG4gICAgICAgICAge2NvbG9yU2V0cy5tYXAoKGNTZXQsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zZWxlY3RfX2lucHV0LWdyb3VwXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8Q29sb3JTZWxlY3RvcklucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xvci1zZWxlY3Rvcl9fc2VsZWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0aW5nID09PSBpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRUaGVtZT17aW5wdXRUaGVtZX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMuX3Nob3dEcm9wZG93bihlLCBpKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y1NldC5pc1JhbmdlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlIGNvbG9ycz17Y1NldC5zZWxlY3RlZENvbG9yLmNvbG9yc30gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDb2xvckJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sb3Itc2VsZWN0b3JfX3NlbGVjdG9yX19ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NTZXQuc2VsZWN0ZWRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Y1NldC5sYWJlbCA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zZWxlY3Rvcl9fc2VsZWN0b3JfX2xhYmVsXCI+e2NTZXQubGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L0NvbG9yU2VsZWN0b3JJbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0lucHV0Qm94Q29udGFpbmVyPlxyXG4gICAgICAgIHtjdXJyZW50RWRpdGluZyA/IChcclxuICAgICAgICAgIDxTdHlsZWRQYW5lbERyb3Bkb3duIGNsYXNzTmFtZT1cImNvbG9yLXNlbGVjdG9yX19kcm9wZG93blwiPlxyXG4gICAgICAgICAgICB7Y29sb3JTZXRzW2VkaXRpbmddLmlzUmFuZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPENvbG9yUmFuZ2VTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclJhbmdlPXtjb2xvclNldHNbZWRpdGluZ10uc2VsZWN0ZWRDb2xvcn1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0Q29sb3JSYW5nZT17dGhpcy5fb25TZWxlY3RDb2xvcn1cclxuICAgICAgICAgICAgICAgIHNldENvbG9yUGFsZXR0ZVVJPXt0aGlzLnByb3BzLnNldENvbG9yVUl9XHJcbiAgICAgICAgICAgICAgICBjb2xvclBhbGV0dGVVST17Y29sb3JVSX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxTaW5nbGVDb2xvclBhbGV0dGVcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e3JnYlRvSGV4KGNvbG9yU2V0c1tlZGl0aW5nXS5zZWxlY3RlZENvbG9yKX1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0Q29sb3I9e3RoaXMuX29uU2VsZWN0Q29sb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvU3R5bGVkUGFuZWxEcm9wZG93bj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGUoQ29sb3JTZWxlY3Rvcik7XHJcbiJdfQ==