"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPaletteGroup = exports.PaletteConfig = exports["default"] = exports.ALL_STEPS = exports.ALL_TYPES = void 0;

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

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _styledComponents2 = require("../../common/styled-components");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPalette = _interopRequireDefault(require("./custom-palette"));

var _colorRanges = require("../../../constants/color-ranges");

var _dataUtils = require("../../../utils/data-utils");

var _colorUtils = require("../../../utils/color-utils");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .color-palette__config__label {\n    flex-grow: 1;\n  }\n  .color-palette__config__select {\n    flex-grow: 1;\n  }\n  .item-selector .item-selector__dropdown {\n    ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 12px 12px 0 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ALL_TYPES = (0, _lodash["default"])(_colorRanges.COLOR_RANGES.map(function (c) {
  return c.type;
}).filter(function (ctype) {
  return ctype;
}).concat(['all', 'custom']));
exports.ALL_TYPES = ALL_TYPES;
var ALL_STEPS = (0, _lodash["default"])(_colorRanges.COLOR_RANGES.map(function (d) {
  return d.colors.length;
})).sort(_dataUtils.numberSort);
exports.ALL_STEPS = ALL_STEPS;

var StyledColorConfig = _styledComponents["default"].div(_templateObject());

var StyledColorRangeSelector = _styledComponents["default"].div.attrs({
  className: 'color-range-selector'
})(_templateObject2());

var StyledPaletteConfig = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.secondaryInput;
});

var CONFIG_SETTINGS = {
  type: {
    type: 'select',
    options: ALL_TYPES
  },
  steps: {
    type: 'select',
    options: ALL_STEPS
  },
  reversed: {
    type: 'switch',
    options: [true, false]
  },
  custom: {
    label: 'Custom Palette',
    type: 'switch',
    options: [true, false]
  }
};

var ColorRangeSelect = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorRangeSelect, _Component);

  var _super = _createSuper(ColorRangeSelect);

  function ColorRangeSelect() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorRangeSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colorRangesSelector", function (props) {
      return props.colorRanges;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configTypeSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.type;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configStepSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.steps;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredColorRange", (0, _reselect.createSelector)(_this.colorRangesSelector, _this.configTypeSelector, _this.configStepSelector, function (colorRanges, type, steps) {
      return colorRanges.filter(function (colorRange) {
        var isType = type === 'all' || type === colorRange.type;
        var isStep = Number(steps) === colorRange.colors.length;
        return isType && isStep;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (_ref) {
      var key = _ref.key,
          value = _ref.value;

      _this._setColorRangeConfig((0, _defineProperty2["default"])({}, key, value));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSetCustomPalette", function (config) {
      _this.props.setColorPaletteUI({
        customPalette: config
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setColorRangeConfig", function (newConfig) {
      _this.props.setColorPaletteUI({
        colorRangeConfig: newConfig
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCustomPaletteCancel", function (newConfig) {
      _this.props.setColorPaletteUI({
        showSketcher: false,
        colorRangeConfig: {
          custom: false
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onToggleSketcher", function (val) {
      _this.props.setColorPaletteUI({
        showSketcher: val
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorRangeSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$colorPale = this.props.colorPaletteUI,
          customPalette = _this$props$colorPale.customPalette,
          showSketcher = _this$props$colorPale.showSketcher,
          colorRangeConfig = _this$props$colorPale.colorRangeConfig;
      var filteredColorRanges = this.filteredColorRange(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledColorRangeSelector, null, /*#__PURE__*/_react["default"].createElement(StyledColorConfig, null, (colorRangeConfig.custom ? ['custom'] : Object.keys(colorRangeConfig)).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement(PaletteConfig, {
          key: key,
          label: CONFIG_SETTINGS[key].label || key,
          config: CONFIG_SETTINGS[key],
          value: colorRangeConfig[key],
          onChange: function onChange(value) {
            return _this2._updateConfig({
              key: key,
              value: value
            });
          }
        });
      })), colorRangeConfig.custom ? /*#__PURE__*/_react["default"].createElement(_customPalette["default"], {
        customPalette: customPalette,
        showSketcher: showSketcher,
        selected: this.props.selectedColorRange,
        onApply: this.props.onSelectColorRange,
        onToggleSketcher: this._onToggleSketcher,
        setCustomPalette: this._onSetCustomPalette,
        onCancel: this._onCustomPaletteCancel
      }) : /*#__PURE__*/_react["default"].createElement(ColorPaletteGroup, {
        colorRanges: filteredColorRanges,
        onSelect: this.props.onSelectColorRange,
        selected: this.props.selectedColorRange,
        reversed: colorRangeConfig.reversed
      }));
    }
  }]);
  return ColorRangeSelect;
}(_react.Component);

exports["default"] = ColorRangeSelect;
(0, _defineProperty2["default"])(ColorRangeSelect, "propTypes", {
  colorPaletteUI: _propTypes["default"].object.isRequired,
  selectedColorRange: _propTypes["default"].object.isRequired,
  onSelectColorRange: _propTypes["default"].func.isRequired,
  setColorPaletteUI: _propTypes["default"].func.isRequired,
  // optional
  colorRanges: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(ColorRangeSelect, "defaultProps", {
  colorRanges: _colorRanges.COLOR_RANGES,
  onSelectColorRange: function onSelectColorRange() {},
  setColorPaletteUI: function setColorPaletteUI() {}
});

var PaletteConfig = function PaletteConfig(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      _ref2$config = _ref2.config,
      type = _ref2$config.type,
      options = _ref2$config.options,
      _onChange = _ref2.onChange;
  return /*#__PURE__*/_react["default"].createElement(StyledPaletteConfig, {
    className: "color-palette__config",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__label"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, label)), type === 'select' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__select"
  }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: value,
    options: options,
    multiSelect: false,
    searchable: false,
    onChange: _onChange
  })), type === 'switch' && /*#__PURE__*/_react["default"].createElement(_switch["default"], {
    checked: value,
    id: "".concat(label, "-toggle"),
    onChange: function onChange() {
      return _onChange(!value);
    },
    secondary: true
  }));
};

exports.PaletteConfig = PaletteConfig;

var StyledColorRange = _styledComponents["default"].div.attrs({
  className: 'color-palette-outer'
})(_templateObject4(), function (props) {
  return props.theme.panelBackgroundHover;
});

var ColorPaletteGroup = function ColorPaletteGroup(_ref3) {
  var reversed = _ref3.reversed,
      onSelect = _ref3.onSelect,
      selected = _ref3.selected,
      colorRanges = _ref3.colorRanges;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__group"
  }, colorRanges.map(function (colorRange, i) {
    return /*#__PURE__*/_react["default"].createElement(StyledColorRange, {
      key: "".concat(colorRange.name, "-").concat(i),
      onClick: function onClick(e) {
        return onSelect(reversed ? (0, _colorUtils.reverseColorRange)(true, colorRange) : colorRange, e);
      }
    }, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
      colors: colorRange.colors,
      isReversed: reversed,
      isSelected: colorRange.name === selected.name && reversed === Boolean(selected.reversed)
    }));
  }));
};

exports.ColorPaletteGroup = ColorPaletteGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3ItcmFuZ2Utc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiQUxMX1RZUEVTIiwiQ09MT1JfUkFOR0VTIiwibWFwIiwiYyIsInR5cGUiLCJmaWx0ZXIiLCJjdHlwZSIsImNvbmNhdCIsIkFMTF9TVEVQUyIsImQiLCJjb2xvcnMiLCJsZW5ndGgiLCJzb3J0IiwibnVtYmVyU29ydCIsIlN0eWxlZENvbG9yQ29uZmlnIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRQYWxldHRlQ29uZmlnIiwicHJvcHMiLCJ0aGVtZSIsInNlY29uZGFyeUlucHV0IiwiQ09ORklHX1NFVFRJTkdTIiwib3B0aW9ucyIsInN0ZXBzIiwicmV2ZXJzZWQiLCJjdXN0b20iLCJsYWJlbCIsIkNvbG9yUmFuZ2VTZWxlY3QiLCJjb2xvclJhbmdlcyIsImNvbG9yUGFsZXR0ZVVJIiwiY29sb3JSYW5nZUNvbmZpZyIsImNvbG9yUmFuZ2VzU2VsZWN0b3IiLCJjb25maWdUeXBlU2VsZWN0b3IiLCJjb25maWdTdGVwU2VsZWN0b3IiLCJjb2xvclJhbmdlIiwiaXNUeXBlIiwiaXNTdGVwIiwiTnVtYmVyIiwia2V5IiwidmFsdWUiLCJfc2V0Q29sb3JSYW5nZUNvbmZpZyIsImNvbmZpZyIsInNldENvbG9yUGFsZXR0ZVVJIiwiY3VzdG9tUGFsZXR0ZSIsIm5ld0NvbmZpZyIsInNob3dTa2V0Y2hlciIsInZhbCIsImZpbHRlcmVkQ29sb3JSYW5nZXMiLCJmaWx0ZXJlZENvbG9yUmFuZ2UiLCJPYmplY3QiLCJrZXlzIiwiX3VwZGF0ZUNvbmZpZyIsInNlbGVjdGVkQ29sb3JSYW5nZSIsIm9uU2VsZWN0Q29sb3JSYW5nZSIsIl9vblRvZ2dsZVNrZXRjaGVyIiwiX29uU2V0Q3VzdG9tUGFsZXR0ZSIsIl9vbkN1c3RvbVBhbGV0dGVDYW5jZWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJQYWxldHRlQ29uZmlnIiwib25DaGFuZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiU3R5bGVkQ29sb3JSYW5nZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiQ29sb3JQYWxldHRlR3JvdXAiLCJvblNlbGVjdCIsInNlbGVjdGVkIiwiaSIsIm5hbWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxTQUFTLEdBQUcsd0JBQ3ZCQywwQkFBYUMsR0FBYixDQUFpQixVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxJQUFOO0FBQUEsQ0FBbEIsRUFDR0MsTUFESCxDQUNVLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FEZixFQUVHQyxNQUZILENBRVUsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUZWLENBRHVCLENBQWxCOztBQU1BLElBQU1DLFNBQVMsR0FBRyx3QkFBS1AsMEJBQWFDLEdBQWIsQ0FBaUIsVUFBQU8sQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxNQUFiO0FBQUEsQ0FBbEIsQ0FBTCxFQUE2Q0MsSUFBN0MsQ0FBa0RDLHFCQUFsRCxDQUFsQjs7O0FBRVAsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUF2Qjs7QUFJQSxJQUFNQyx3QkFBd0IsR0FBR0YsNkJBQU9DLEdBQVAsQ0FBV0UsS0FBWCxDQUFpQjtBQUNoREMsRUFBQUEsU0FBUyxFQUFFO0FBRHFDLENBQWpCLENBQUgsb0JBQTlCOztBQU1BLElBQU1DLG1C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QUFBLE1BQVkrQyxRQUFaLFNBQVlBLFFBQVo7QUFBQSxNQUFzQkMsUUFBdEIsU0FBc0JBLFFBQXRCO0FBQUEsTUFBZ0M1QyxXQUFoQyxTQUFnQ0EsV0FBaEM7QUFBQSxzQkFDL0I7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dBLFdBQVcsQ0FBQzdCLEdBQVosQ0FBZ0IsVUFBQ21DLFVBQUQsRUFBYXVDLENBQWI7QUFBQSx3QkFDZixnQ0FBQyxnQkFBRDtBQUNFLE1BQUEsR0FBRyxZQUFLdkMsVUFBVSxDQUFDd0MsSUFBaEIsY0FBd0JELENBQXhCLENBREw7QUFFRSxNQUFBLE9BQU8sRUFBRSxpQkFBQVAsQ0FBQztBQUFBLGVBQUlLLFFBQVEsQ0FBQy9DLFFBQVEsR0FBRyxtQ0FBa0IsSUFBbEIsRUFBd0JVLFVBQXhCLENBQUgsR0FBeUNBLFVBQWxELEVBQThEZ0MsQ0FBOUQsQ0FBWjtBQUFBO0FBRlosb0JBSUUsZ0NBQUMsd0JBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRWhDLFVBQVUsQ0FBQzNCLE1BRHJCO0FBRUUsTUFBQSxVQUFVLEVBQUVpQixRQUZkO0FBR0UsTUFBQSxVQUFVLEVBQUVVLFVBQVUsQ0FBQ3dDLElBQVgsS0FBb0JGLFFBQVEsQ0FBQ0UsSUFBN0IsSUFBcUNsRCxRQUFRLEtBQUttRCxPQUFPLENBQUNILFFBQVEsQ0FBQ2hELFFBQVY7QUFIdkUsTUFKRixDQURlO0FBQUEsR0FBaEIsQ0FESCxDQUQrQjtBQUFBLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7UGFuZWxMYWJlbH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuL2NvbG9yLXBhbGV0dGUnO1xuaW1wb3J0IEN1c3RvbVBhbGV0dGUgZnJvbSAnLi9jdXN0b20tcGFsZXR0ZSc7XG5pbXBvcnQge0NPTE9SX1JBTkdFU30gZnJvbSAnY29uc3RhbnRzL2NvbG9yLXJhbmdlcyc7XG5pbXBvcnQge251bWJlclNvcnR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHtyZXZlcnNlQ29sb3JSYW5nZX0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQUxMX1RZUEVTID0gdW5pcShcbiAgQ09MT1JfUkFOR0VTLm1hcChjID0+IGMudHlwZSlcbiAgICAuZmlsdGVyKGN0eXBlID0+IGN0eXBlKVxuICAgIC5jb25jYXQoWydhbGwnLCAnY3VzdG9tJ10pXG4pO1xuXG5leHBvcnQgY29uc3QgQUxMX1NURVBTID0gdW5pcShDT0xPUl9SQU5HRVMubWFwKGQgPT4gZC5jb2xvcnMubGVuZ3RoKSkuc29ydChudW1iZXJTb3J0KTtcblxuY29uc3QgU3R5bGVkQ29sb3JDb25maWcgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMnB4IDEycHggMCAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NvbG9yLXJhbmdlLXNlbGVjdG9yJ1xufSlgXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkUGFsZXR0ZUNvbmZpZyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuY29sb3ItcGFsZXR0ZV9fY29uZmlnX19sYWJlbCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5jb2xvci1wYWxldHRlX19jb25maWdfX3NlbGVjdCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5pdGVtLXNlbGVjdG9yIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93biB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dH07XG4gIH1cbmA7XG5cbmNvbnN0IENPTkZJR19TRVRUSU5HUyA9IHtcbiAgdHlwZToge1xuICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIG9wdGlvbnM6IEFMTF9UWVBFU1xuICB9LFxuICBzdGVwczoge1xuICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIG9wdGlvbnM6IEFMTF9TVEVQU1xuICB9LFxuICByZXZlcnNlZDoge1xuICAgIHR5cGU6ICdzd2l0Y2gnLFxuICAgIG9wdGlvbnM6IFt0cnVlLCBmYWxzZV1cbiAgfSxcbiAgY3VzdG9tOiB7XG4gICAgbGFiZWw6ICdDdXN0b20gUGFsZXR0ZScsXG4gICAgdHlwZTogJ3N3aXRjaCcsXG4gICAgb3B0aW9uczogW3RydWUsIGZhbHNlXVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclJhbmdlU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb2xvclBhbGV0dGVVSTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkQ29sb3JSYW5nZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0Q29sb3JSYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRDb2xvclBhbGV0dGVVSTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAvLyBvcHRpb25hbFxuICAgIGNvbG9yUmFuZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3JSYW5nZXM6IENPTE9SX1JBTkdFUyxcbiAgICBvblNlbGVjdENvbG9yUmFuZ2U6ICgpID0+IHt9LFxuICAgIHNldENvbG9yUGFsZXR0ZVVJOiAoKSA9PiB7fVxuICB9O1xuXG4gIGNvbG9yUmFuZ2VzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5jb2xvclJhbmdlcztcbiAgY29uZmlnVHlwZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuY29sb3JQYWxldHRlVUkuY29sb3JSYW5nZUNvbmZpZy50eXBlO1xuICBjb25maWdTdGVwU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5jb2xvclBhbGV0dGVVSS5jb2xvclJhbmdlQ29uZmlnLnN0ZXBzO1xuICBmaWx0ZXJlZENvbG9yUmFuZ2UgPSBjcmVhdGVTZWxlY3RvcihcbiAgICB0aGlzLmNvbG9yUmFuZ2VzU2VsZWN0b3IsXG4gICAgdGhpcy5jb25maWdUeXBlU2VsZWN0b3IsXG4gICAgdGhpcy5jb25maWdTdGVwU2VsZWN0b3IsXG4gICAgKGNvbG9yUmFuZ2VzLCB0eXBlLCBzdGVwcykgPT4ge1xuICAgICAgcmV0dXJuIGNvbG9yUmFuZ2VzLmZpbHRlcihjb2xvclJhbmdlID0+IHtcbiAgICAgICAgY29uc3QgaXNUeXBlID0gdHlwZSA9PT0gJ2FsbCcgfHwgdHlwZSA9PT0gY29sb3JSYW5nZS50eXBlO1xuICAgICAgICBjb25zdCBpc1N0ZXAgPSBOdW1iZXIoc3RlcHMpID09PSBjb2xvclJhbmdlLmNvbG9ycy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIGlzVHlwZSAmJiBpc1N0ZXA7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG5cbiAgX3VwZGF0ZUNvbmZpZyA9ICh7a2V5LCB2YWx1ZX0pID0+IHtcbiAgICB0aGlzLl9zZXRDb2xvclJhbmdlQ29uZmlnKHtba2V5XTogdmFsdWV9KTtcbiAgfTtcblxuICBfb25TZXRDdXN0b21QYWxldHRlID0gY29uZmlnID0+IHtcbiAgICB0aGlzLnByb3BzLnNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgIGN1c3RvbVBhbGV0dGU6IGNvbmZpZ1xuICAgIH0pO1xuICB9O1xuXG4gIF9zZXRDb2xvclJhbmdlQ29uZmlnID0gbmV3Q29uZmlnID0+IHtcbiAgICB0aGlzLnByb3BzLnNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgIGNvbG9yUmFuZ2VDb25maWc6IG5ld0NvbmZpZ1xuICAgIH0pO1xuICB9O1xuXG4gIF9vbkN1c3RvbVBhbGV0dGVDYW5jZWwgPSBuZXdDb25maWcgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgc2hvd1NrZXRjaGVyOiBmYWxzZSxcbiAgICAgIGNvbG9yUmFuZ2VDb25maWc6IHtjdXN0b206IGZhbHNlfVxuICAgIH0pO1xuICB9O1xuXG4gIF9vblRvZ2dsZVNrZXRjaGVyID0gdmFsID0+IHtcbiAgICB0aGlzLnByb3BzLnNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgIHNob3dTa2V0Y2hlcjogdmFsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjdXN0b21QYWxldHRlLCBzaG93U2tldGNoZXIsIGNvbG9yUmFuZ2VDb25maWd9ID0gdGhpcy5wcm9wcy5jb2xvclBhbGV0dGVVSTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ29sb3JSYW5nZXMgPSB0aGlzLmZpbHRlcmVkQ29sb3JSYW5nZSh0aGlzLnByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yPlxuICAgICAgICA8U3R5bGVkQ29sb3JDb25maWc+XG4gICAgICAgICAgeyhjb2xvclJhbmdlQ29uZmlnLmN1c3RvbSA/IFsnY3VzdG9tJ10gOiBPYmplY3Qua2V5cyhjb2xvclJhbmdlQ29uZmlnKSkubWFwKGtleSA9PiAoXG4gICAgICAgICAgICA8UGFsZXR0ZUNvbmZpZ1xuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgbGFiZWw9e0NPTkZJR19TRVRUSU5HU1trZXldLmxhYmVsIHx8IGtleX1cbiAgICAgICAgICAgICAgY29uZmlnPXtDT05GSUdfU0VUVElOR1Nba2V5XX1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvbG9yUmFuZ2VDb25maWdba2V5XX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuX3VwZGF0ZUNvbmZpZyh7a2V5LCB2YWx1ZX0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdHlsZWRDb2xvckNvbmZpZz5cblxuICAgICAgICB7Y29sb3JSYW5nZUNvbmZpZy5jdXN0b20gPyAoXG4gICAgICAgICAgPEN1c3RvbVBhbGV0dGVcbiAgICAgICAgICAgIGN1c3RvbVBhbGV0dGU9e2N1c3RvbVBhbGV0dGV9XG4gICAgICAgICAgICBzaG93U2tldGNoZXI9e3Nob3dTa2V0Y2hlcn1cbiAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkQ29sb3JSYW5nZX1cbiAgICAgICAgICAgIG9uQXBwbHk9e3RoaXMucHJvcHMub25TZWxlY3RDb2xvclJhbmdlfVxuICAgICAgICAgICAgb25Ub2dnbGVTa2V0Y2hlcj17dGhpcy5fb25Ub2dnbGVTa2V0Y2hlcn1cbiAgICAgICAgICAgIHNldEN1c3RvbVBhbGV0dGU9e3RoaXMuX29uU2V0Q3VzdG9tUGFsZXR0ZX1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLl9vbkN1c3RvbVBhbGV0dGVDYW5jZWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29sb3JQYWxldHRlR3JvdXBcbiAgICAgICAgICAgIGNvbG9yUmFuZ2VzPXtmaWx0ZXJlZENvbG9yUmFuZ2VzfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMucHJvcHMub25TZWxlY3RDb2xvclJhbmdlfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDb2xvclJhbmdlfVxuICAgICAgICAgICAgcmV2ZXJzZWQ9e2NvbG9yUmFuZ2VDb25maWcucmV2ZXJzZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBhbGV0dGVDb25maWcgPSAoe2xhYmVsLCB2YWx1ZSwgY29uZmlnOiB7dHlwZSwgb3B0aW9uc30sIG9uQ2hhbmdlfSkgPT4gKFxuICA8U3R5bGVkUGFsZXR0ZUNvbmZpZyBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlX19jb25maWdcIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZV9fY29uZmlnX19sYWJlbFwiPlxuICAgICAgPFBhbmVsTGFiZWw+e2xhYmVsfTwvUGFuZWxMYWJlbD5cbiAgICA8L2Rpdj5cbiAgICB7dHlwZSA9PT0gJ3NlbGVjdCcgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlX19jb25maWdfX3NlbGVjdFwiPlxuICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dmFsdWV9XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICB7dHlwZSA9PT0gJ3N3aXRjaCcgJiYgKFxuICAgICAgPFN3aXRjaCBjaGVja2VkPXt2YWx1ZX0gaWQ9e2Ake2xhYmVsfS10b2dnbGVgfSBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoIXZhbHVlKX0gc2Vjb25kYXJ5IC8+XG4gICAgKX1cbiAgPC9TdHlsZWRQYWxldHRlQ29uZmlnPlxuKTtcblxuY29uc3QgU3R5bGVkQ29sb3JSYW5nZSA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdjb2xvci1wYWxldHRlLW91dGVyJ1xufSlgXG4gIHBhZGRpbmc6IDAgOHB4O1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbG9yUGFsZXR0ZUdyb3VwID0gKHtyZXZlcnNlZCwgb25TZWxlY3QsIHNlbGVjdGVkLCBjb2xvclJhbmdlc30pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlX19ncm91cFwiPlxuICAgIHtjb2xvclJhbmdlcy5tYXAoKGNvbG9yUmFuZ2UsIGkpID0+IChcbiAgICAgIDxTdHlsZWRDb2xvclJhbmdlXG4gICAgICAgIGtleT17YCR7Y29sb3JSYW5nZS5uYW1lfS0ke2l9YH1cbiAgICAgICAgb25DbGljaz17ZSA9PiBvblNlbGVjdChyZXZlcnNlZCA/IHJldmVyc2VDb2xvclJhbmdlKHRydWUsIGNvbG9yUmFuZ2UpIDogY29sb3JSYW5nZSwgZSl9XG4gICAgICA+XG4gICAgICAgIDxDb2xvclBhbGV0dGVcbiAgICAgICAgICBjb2xvcnM9e2NvbG9yUmFuZ2UuY29sb3JzfVxuICAgICAgICAgIGlzUmV2ZXJzZWQ9e3JldmVyc2VkfVxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e2NvbG9yUmFuZ2UubmFtZSA9PT0gc2VsZWN0ZWQubmFtZSAmJiByZXZlcnNlZCA9PT0gQm9vbGVhbihzZWxlY3RlZC5yZXZlcnNlZCl9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlZENvbG9yUmFuZ2U+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcbiJdfQ==