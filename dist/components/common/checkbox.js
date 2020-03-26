"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  min-height: ", ";\n  margin-left: ", "px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  display: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function noop() {}

var StyledSwitchInput = _styledComponents["default"].label(_templateObject(), function (props) {
  return props.secondary ? props.theme.secondarySwitch : props.theme.inputSwitch;
});

var StyledCheckboxInput = _styledComponents["default"].label(_templateObject2(), function (props) {
  return props.theme.inputCheckbox;
});

var HiddenInput = _styledComponents["default"].input(_templateObject3());

var StyledCheckbox = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.switchBtnHeight;
}, function (props) {
  return props.theme.switchLabelMargin;
});

var Checkbox = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      focused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (args) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus(args);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (args) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur(args);
    });
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      var inputProps = _objectSpread({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'id', 'onChange', 'value']), {
        type: 'checkbox',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      });

      var labelProps = _objectSpread({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'secondary']), {
        htmlFor: this.props.id
      });

      var LabelElement = this.props.type === 'checkbox' ? StyledCheckboxInput : StyledSwitchInput;
      return /*#__PURE__*/_react["default"].createElement(StyledCheckbox, {
        className: (0, _classnames["default"])('kg-checkbox', this.props.className)
      }, /*#__PURE__*/_react["default"].createElement(HiddenInput, inputProps), /*#__PURE__*/_react["default"].createElement(LabelElement, (0, _extends2["default"])({
        className: "kg-checkbox__label"
      }, labelProps), this.props.label));
    }
  }]);
  return Checkbox;
}(_react.Component);

exports["default"] = Checkbox;
(0, _defineProperty2["default"])(Checkbox, "propTypes", {
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].node,
  value: _propTypes["default"].oneOf([true, false, 'indeterminate']),
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].string,
  "switch": _propTypes["default"].bool,
  activeColor: _propTypes["default"].string,
  secondary: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  disabled: false,
  checked: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  label: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jaGVja2JveC5qcyJdLCJuYW1lcyI6WyJub29wIiwiU3R5bGVkU3dpdGNoSW5wdXQiLCJzdHlsZWQiLCJsYWJlbCIsInByb3BzIiwic2Vjb25kYXJ5IiwidGhlbWUiLCJzZWNvbmRhcnlTd2l0Y2giLCJpbnB1dFN3aXRjaCIsIlN0eWxlZENoZWNrYm94SW5wdXQiLCJpbnB1dENoZWNrYm94IiwiSGlkZGVuSW5wdXQiLCJpbnB1dCIsIlN0eWxlZENoZWNrYm94IiwiZGl2Iiwic3dpdGNoQnRuSGVpZ2h0Iiwic3dpdGNoTGFiZWxNYXJnaW4iLCJDaGVja2JveCIsImZvY3VzZWQiLCJhcmdzIiwic2V0U3RhdGUiLCJvbkZvY3VzIiwib25CbHVyIiwiaW5wdXRQcm9wcyIsInR5cGUiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJsYWJlbFByb3BzIiwiaHRtbEZvciIsImlkIiwiTGFiZWxFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJ2YWx1ZSIsIm9uZU9mIiwiY2hlY2tlZCIsImJvb2wiLCJkaXNhYmxlZCIsImVycm9yIiwiYWN0aXZlQ29sb3IiLCJmdW5jIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEIsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxLQUFWLG9CQUNuQixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsZUFBOUIsR0FBZ0RILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxXQUFqRTtBQUFBLENBRGMsQ0FBdkI7O0FBSUEsSUFBTUMsbUJBQW1CLEdBQUdQLDZCQUFPQyxLQUFWLHFCQUNyQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlJLGFBQWhCO0FBQUEsQ0FEZ0IsQ0FBekI7O0FBSUEsSUFBTUMsV0FBVyxHQUFHVCw2QkFBT1UsS0FBVixvQkFBakI7O0FBS0EsSUFBTUMsY0FBYyxHQUFHWCw2QkFBT1ksR0FBVixxQkFFSixVQUFBVixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlTLGVBQWhCO0FBQUEsQ0FGRCxFQUdILFVBQUFYLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWVUsaUJBQWhCO0FBQUEsQ0FIRixDQUFwQjs7SUFNcUJDLFE7Ozs7Ozs7Ozs7Ozs7Ozs4RkEwQlg7QUFDTkMsTUFBQUEsT0FBTyxFQUFFO0FBREgsSztvR0FJTSxVQUFBQyxJQUFJLEVBQUk7QUFDcEIsWUFBS0MsUUFBTCxDQUFjO0FBQUNGLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWQ7O0FBQ0EsWUFBS2QsS0FBTCxDQUFXaUIsT0FBWCxDQUFtQkYsSUFBbkI7QUFDRCxLO21HQUVZLFVBQUFBLElBQUksRUFBSTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFBQ0YsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBZDs7QUFDQSxZQUFLZCxLQUFMLENBQVdrQixNQUFYLENBQWtCSCxJQUFsQjtBQUNELEs7Ozs7Ozs2QkFFUTtBQUNQLFVBQU1JLFVBQVUscUJBQ1gsd0JBQUssS0FBS25CLEtBQVYsRUFBaUIsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixJQUF4QixFQUE4QixVQUE5QixFQUEwQyxPQUExQyxDQUFqQixDQURXO0FBRWRvQixRQUFBQSxJQUFJLEVBQUUsVUFGUTtBQUdkSCxRQUFBQSxPQUFPLEVBQUUsS0FBS0ksV0FIQTtBQUlkSCxRQUFBQSxNQUFNLEVBQUUsS0FBS0k7QUFKQyxRQUFoQjs7QUFPQSxVQUFNQyxVQUFVLHFCQUNYLHdCQUFLLEtBQUt2QixLQUFWLEVBQWlCLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsV0FBeEIsQ0FBakIsQ0FEVztBQUVkd0IsUUFBQUEsT0FBTyxFQUFFLEtBQUt4QixLQUFMLENBQVd5QjtBQUZOLFFBQWhCOztBQUtBLFVBQU1DLFlBQVksR0FBRyxLQUFLMUIsS0FBTCxDQUFXb0IsSUFBWCxLQUFvQixVQUFwQixHQUFpQ2YsbUJBQWpDLEdBQXVEUixpQkFBNUU7QUFDQSwwQkFDRSxnQ0FBQyxjQUFEO0FBQWdCLFFBQUEsU0FBUyxFQUFFLDRCQUFXLGFBQVgsRUFBMEIsS0FBS0csS0FBTCxDQUFXMkIsU0FBckM7QUFBM0Isc0JBQ0UsZ0NBQUMsV0FBRCxFQUFpQlIsVUFBakIsQ0FERixlQUVFLGdDQUFDLFlBQUQ7QUFBYyxRQUFBLFNBQVMsRUFBQztBQUF4QixTQUFpREksVUFBakQsR0FDRyxLQUFLdkIsS0FBTCxDQUFXRCxLQURkLENBRkYsQ0FERjtBQVFEOzs7RUE5RG1DNkIsZ0I7OztpQ0FBakJmLFEsZUFDQTtBQUNqQlksRUFBQUEsRUFBRSxFQUFFSSxzQkFBVUMsTUFBVixDQUFpQkMsVUFESjtBQUVqQmhDLEVBQUFBLEtBQUssRUFBRThCLHNCQUFVRyxJQUZBO0FBR2pCQyxFQUFBQSxLQUFLLEVBQUVKLHNCQUFVSyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxlQUFkLENBQWhCLENBSFU7QUFJakJDLEVBQUFBLE9BQU8sRUFBRU4sc0JBQVVPLElBSkY7QUFLakJDLEVBQUFBLFFBQVEsRUFBRVIsc0JBQVVPLElBTEg7QUFPakJFLEVBQUFBLEtBQUssRUFBRVQsc0JBQVVDLE1BUEE7QUFRakIsWUFBUUQsc0JBQVVPLElBUkQ7QUFTakJHLEVBQUFBLFdBQVcsRUFBRVYsc0JBQVVDLE1BVE47QUFVakI3QixFQUFBQSxTQUFTLEVBQUU0QixzQkFBVU8sSUFWSjtBQVdqQmxCLEVBQUFBLE1BQU0sRUFBRVcsc0JBQVVXLElBWEQ7QUFZakJDLEVBQUFBLFFBQVEsRUFBRVosc0JBQVVXLElBWkg7QUFhakJ2QixFQUFBQSxPQUFPLEVBQUVZLHNCQUFVVztBQWJGLEM7aUNBREEzQixRLGtCQWlCRztBQUNwQndCLEVBQUFBLFFBQVEsRUFBRSxLQURVO0FBRXBCRixFQUFBQSxPQUFPLEVBQUUsS0FGVztBQUdwQmpCLEVBQUFBLE1BQU0sRUFBRXRCLElBSFk7QUFJcEI2QyxFQUFBQSxRQUFRLEVBQUU3QyxJQUpVO0FBS3BCcUIsRUFBQUEsT0FBTyxFQUFFckIsSUFMVztBQU1wQkcsRUFBQUEsS0FBSyxFQUFFO0FBTmEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5jb25zdCBTdHlsZWRTd2l0Y2hJbnB1dCA9IHN0eWxlZC5sYWJlbGBcbiAgJHtwcm9wcyA9PiAocHJvcHMuc2Vjb25kYXJ5ID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5U3dpdGNoIDogcHJvcHMudGhlbWUuaW5wdXRTd2l0Y2gpfTtcbmA7XG5cbmNvbnN0IFN0eWxlZENoZWNrYm94SW5wdXQgPSBzdHlsZWQubGFiZWxgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRDaGVja2JveH1cbmA7XG5cbmNvbnN0IEhpZGRlbklucHV0ID0gc3R5bGVkLmlucHV0YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG5gO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoQnRuSGVpZ2h0fTtcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoTGFiZWxNYXJnaW59cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZihbdHJ1ZSwgZmFsc2UsICdpbmRldGVybWluYXRlJ10pLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN3aXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2Vjb25kYXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIG9uQmx1cjogbm9vcCxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkZvY3VzOiBub29wLFxuICAgIGxhYmVsOiAnJ1xuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSBhcmdzID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5vbkZvY3VzKGFyZ3MpO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSBhcmdzID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pO1xuICAgIHRoaXMucHJvcHMub25CbHVyKGFyZ3MpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgLi4ucGljayh0aGlzLnByb3BzLCBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnaWQnLCAnb25DaGFuZ2UnLCAndmFsdWUnXSksXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgb25Gb2N1czogdGhpcy5oYW5kbGVGb2N1cyxcbiAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyXG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsUHJvcHMgPSB7XG4gICAgICAuLi5waWNrKHRoaXMucHJvcHMsIFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdzZWNvbmRhcnknXSksXG4gICAgICBodG1sRm9yOiB0aGlzLnByb3BzLmlkXG4gICAgfTtcblxuICAgIGNvbnN0IExhYmVsRWxlbWVudCA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyA/IFN0eWxlZENoZWNrYm94SW5wdXQgOiBTdHlsZWRTd2l0Y2hJbnB1dDtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZENoZWNrYm94IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgICA8SGlkZGVuSW5wdXQgey4uLmlucHV0UHJvcHN9IC8+XG4gICAgICAgIDxMYWJlbEVsZW1lbnQgY2xhc3NOYW1lPVwia2ctY2hlY2tib3hfX2xhYmVsXCIgey4uLmxhYmVsUHJvcHN9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICA8L0xhYmVsRWxlbWVudD5cbiAgICAgIDwvU3R5bGVkQ2hlY2tib3g+XG4gICAgKTtcbiAgfVxufVxuIl19