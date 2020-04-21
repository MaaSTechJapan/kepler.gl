"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _reactModal = _interopRequireDefault(require("react-modal"));

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPicker = _interopRequireDefault(require("./custom-picker"));

var _dataUtils = require("../../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  input {\n    color: ", ";\n    font-size: 10px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 11px;\n  display: flex;\n  direction: rtl;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  width: 32px;\n  height: 18px;\n  display: inline-block;\n  :hover {\n    box-shadow: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: calc(100% - 16px);\n  height: 1px;\n  background-color: ", ";\n  margin-top: 8px;\n  margin-left: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  svg {\n    :hover {\n      color: ", ";\n    }\n  }\n  height: 12px;\n  margin-left: auto;\n  margin-right: 12px;\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  z-index: ", ";\n\n  :not(.sorting) {\n    :hover {\n      background-color: ", ";\n      ", "\n    }\n  }\n\n  &.sorting-colors {\n    background-color: ", ";\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__drag-handle {\n    color: ", ";\n    opacity: 1;\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dragHandleActive = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.theme.textColorHl;
});

var StyledSortableItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive);

var StyledDragHandle = _styledComponents["default"].div(_templateObject3());

var StyledTrash = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.subtextColorActive;
});

var StyledLine = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.labelColor;
});

var StyledSwatch = _styledComponents["default"].div.attrs({
  className: 'custom-palette__swatch'
})(_templateObject6(), function (props) {
  return props.color;
}, function (props) {
  return props.theme.boxShadow;
});

var StyledColorRange = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.panelBackgroundHover;
});

var StyledButtonContainer = _styledComponents["default"].div(_templateObject8());

var StyledInlineInput = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.theme.textColorHl;
});

var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref) {
  var children = _ref.children,
      isSorting = _ref.isSorting;
  return /*#__PURE__*/_react["default"].createElement(StyledSortableItem, {
    className: (0, _classnames["default"])('custom-palette__sortable-items', {
      sorting: isSorting
    })
  }, children);
});
var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", null, children);
});
var DragHandle = (0, _reactSortableHoc.sortableHandle)(function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});

var CustomPalette = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomPalette, _Component);

  var _super = _createSuper(CustomPalette);

  function CustomPalette() {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomPalette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      // currentSwatchIndex: null,
      isSorting: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showSketcherSelector", function (props) {
      return props.showSketcher;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
      return props.theme;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sketcherPosSelector", (0, _reselect.createSelector)(_this.showSketcherSelector, function (showSketcher) {
      var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          defaultSketcherPos = _this$props.defaultSketcherPos,
          bottomBuffer = _this$props.bottomBuffer,
          sketcherHeight = _this$props.sketcherHeight;
      if (showSketcher === false || !_this.root || !_this.root.current) return defaultSketcherPos;
      var _theme$sidePanelInner = theme.sidePanelInnerPadding,
          sidePanelInnerPadding = _theme$sidePanelInner === void 0 ? 16 : _theme$sidePanelInner,
          _theme$sidePanel = theme.sidePanel,
          sidePanel = _theme$sidePanel === void 0 ? {} : _theme$sidePanel,
          _theme$sidePanelScrol = theme.sidePanelScrollBarWidth,
          sidePanelScrollBarWidth = _theme$sidePanelScrol === void 0 ? 10 : _theme$sidePanelScrol;
      var sidePanelLeft = (sidePanel.margin || {}).left || 20;
      var offsetX = sidePanelInnerPadding + sidePanelLeft + sidePanelScrollBarWidth; // find component Root position

      var bounding = _this.root.current.getBoundingClientRect();

      var x = bounding.x,
          y = bounding.y,
          width = bounding.width; // set the top so it won't collide with bottom widget

      var top = y + sketcherHeight <= window.innerHeight - bottomBuffer ? y : window.innerHeight - bottomBuffer - sketcherHeight;
      return {
        top: "".concat(top, "px"),
        left: "".concat(x + width + offsetX, "px")
      };
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "modalStylesSelector", (0, _reselect.createSelector)(_this.themeSelector, _this.sketcherPosSelector, function (theme, sketcherPos) {
      return {
        content: {
          top: 0,
          left: 0,
          border: 0,
          right: 'auto',
          bottom: 'auto',
          padding: '0px 0px 0px 0px',
          borderRadius: theme.panelBorderRadius || '2px'
        },
        overlay: _objectSpread({}, sketcherPos, {
          right: 'auto',
          bottom: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0)'
        })
      };
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onPickerUpdate", function (color) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[_this.props.showSketcher] = color.hex;

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorDelete", function (index) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);

      if (newColors.length > 1) {
        newColors.splice(index, 1);
      }

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorAdd", function () {
      var colors = _this.props.customPalette.colors; // add the last color

      var newColors = [].concat((0, _toConsumableArray2["default"])(colors), [colors[colors.length - 1]]);

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClick", function (index) {
      _this.props.onToggleSketcher(index);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClose", function () {
      _this.props.onToggleSketcher(false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onApply", function (event) {
      event.stopPropagation();
      event.preventDefault();

      _this.props.onCancel();

      _this.props.onApply(_this.props.customPalette, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortEnd", function (_ref4) {
      var oldIndex = _ref4.oldIndex,
          newIndex = _ref4.newIndex;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _dataUtils.arrayMove)(colors, oldIndex, newIndex);

      _this._setColorPaletteUI(newColors);

      _this.setState({
        isSorting: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
      _this.setState({
        isSorting: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_inputColorHex", function (index, _ref5) {
      var value = _ref5.target.value;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[index] = value.toUpperCase();

      _this._setColorPaletteUI(newColors);
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomPalette, [{
    key: "_setColorPaletteUI",
    value: function _setColorPaletteUI(colors) {
      this.props.setCustomPalette({
        colors: colors
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var colors = this.props.customPalette.colors;
      var modalStyles = this.modalStylesSelector(this.props);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-palette-panel",
        ref: this.root
      }, /*#__PURE__*/_react["default"].createElement(StyledColorRange, null, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
        colors: colors
      })), /*#__PURE__*/_react["default"].createElement(SortableContainer, {
        className: "custom-palette-container",
        onSortEnd: this._onSortEnd,
        onSortStart: this._onSortStart,
        lockAxis: "y",
        helperClass: "sorting-colors",
        useDragHandle: true
      }, colors.map(function (color, index) {
        return /*#__PURE__*/_react["default"].createElement(SortableItem, {
          key: index,
          index: index,
          isSorting: _this2.state.isSorting
        }, /*#__PURE__*/_react["default"].createElement(DragHandle, {
          className: "layer__drag-handle"
        }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
          height: "20px"
        })), /*#__PURE__*/_react["default"].createElement(StyledSwatch, {
          color: color,
          onClick: function onClick(e) {
            return _this2._onSwatchClick(index, e);
          }
        }), /*#__PURE__*/_react["default"].createElement(StyledInlineInput, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
          type: "text",
          className: "custom-palette-hex__input",
          value: color.toUpperCase(),
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          onChange: function onChange(e) {
            return _this2._inputColorHex(index, e);
          },
          id: "input-layer-label"
        })), /*#__PURE__*/_react["default"].createElement(StyledTrash, {
          onClick: function onClick() {
            return _this2._onColorDelete(index);
          }
        }, /*#__PURE__*/_react["default"].createElement(_icons.Trash, {
          className: "trashbin"
        })));
      })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        className: "add-step__button",
        link: true,
        onClick: this._onColorAdd
      }, "+ Add Step"), /*#__PURE__*/_react["default"].createElement(StyledLine, null), /*#__PURE__*/_react["default"].createElement(StyledButtonContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        className: "confirm-apply__button",
        link: true,
        onClick: this._onApply
      }, "Confirm"), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        link: true,
        onClick: this.props.onCancel
      }, ' ', "Cancel")), this.props.showSketcher !== false ? /*#__PURE__*/_react["default"].createElement(_reactModal["default"], {
        isOpen: true,
        style: modalStyles,
        ariaHideApp: false,
        parentSelector: function parentSelector() {
          // React modal issue: https://github.com/reactjs/react-modal/issues/769
          // failed to execute removeChild on parent node when it is already unmounted
          return _this2.root.current || {
            removeChild: function removeChild() {},
            appendChild: function appendChild() {}
          };
        }
      }, /*#__PURE__*/_react["default"].createElement(_customPicker["default"], {
        color: colors[this.props.showSketcher],
        onChange: this._onPickerUpdate,
        onSwatchClose: this._onSwatchClose
      })) : null);
    }
  }]);
  return CustomPalette;
}(_react.Component);

(0, _defineProperty2["default"])(CustomPalette, "propTypes", {
  customPalette: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    type: _propTypes["default"].string,
    category: _propTypes["default"].string,
    colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
  }),
  setCustomPalette: _propTypes["default"].func,
  showSketcher: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  theme: _propTypes["default"].object,
  defaultSketcherPos: _propTypes["default"].object,
  sketcherHeight: _propTypes["default"].number,
  bottomBuffer: _propTypes["default"].number
});
(0, _defineProperty2["default"])(CustomPalette, "defaultProps", {
  defaultSketcherPos: {
    top: '320px',
    left: '320px'
  },
  sketcherHeight: 228,
  bottomBuffer: 212
});

var _default = (0, _styledComponents.withTheme)(CustomPalette);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY3VzdG9tLXBhbGV0dGUuanMiXSwibmFtZXMiOlsiZHJhZ0hhbmRsZUFjdGl2ZSIsImNzcyIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFNvcnRhYmxlSXRlbSIsInN0eWxlZCIsImRpdiIsImRyb3Bkb3duV3JhcHBlcloiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsIlN0eWxlZERyYWdIYW5kbGUiLCJTdHlsZWRUcmFzaCIsInRleHRDb2xvciIsInN1YnRleHRDb2xvckFjdGl2ZSIsIlN0eWxlZExpbmUiLCJsYWJlbENvbG9yIiwiU3R5bGVkU3dhdGNoIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJjb2xvciIsImJveFNoYWRvdyIsIlN0eWxlZENvbG9yUmFuZ2UiLCJTdHlsZWRCdXR0b25Db250YWluZXIiLCJTdHlsZWRJbmxpbmVJbnB1dCIsIlNvcnRhYmxlSXRlbSIsImNoaWxkcmVuIiwiaXNTb3J0aW5nIiwic29ydGluZyIsIlNvcnRhYmxlQ29udGFpbmVyIiwiRHJhZ0hhbmRsZSIsIkN1c3RvbVBhbGV0dGUiLCJzaG93U2tldGNoZXIiLCJzaG93U2tldGNoZXJTZWxlY3RvciIsImRlZmF1bHRTa2V0Y2hlclBvcyIsImJvdHRvbUJ1ZmZlciIsInNrZXRjaGVySGVpZ2h0Iiwicm9vdCIsImN1cnJlbnQiLCJzaWRlUGFuZWxJbm5lclBhZGRpbmciLCJzaWRlUGFuZWwiLCJzaWRlUGFuZWxTY3JvbGxCYXJXaWR0aCIsInNpZGVQYW5lbExlZnQiLCJtYXJnaW4iLCJsZWZ0Iiwib2Zmc2V0WCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInkiLCJ3aWR0aCIsInRvcCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidGhlbWVTZWxlY3RvciIsInNrZXRjaGVyUG9zU2VsZWN0b3IiLCJza2V0Y2hlclBvcyIsImNvbnRlbnQiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwYW5lbEJvcmRlclJhZGl1cyIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJjdXN0b21QYWxldHRlIiwibmV3Q29sb3JzIiwiaGV4IiwiX3NldENvbG9yUGFsZXR0ZVVJIiwiaW5kZXgiLCJsZW5ndGgiLCJzcGxpY2UiLCJvblRvZ2dsZVNrZXRjaGVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2FuY2VsIiwib25BcHBseSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwidG9VcHBlckNhc2UiLCJzZXRDdXN0b21QYWxldHRlIiwibW9kYWxTdHlsZXMiLCJtb2RhbFN0eWxlc1NlbGVjdG9yIiwiX29uU29ydEVuZCIsIl9vblNvcnRTdGFydCIsIm1hcCIsInN0YXRlIiwiZSIsIl9vblN3YXRjaENsaWNrIiwiX2lucHV0Q29sb3JIZXgiLCJfb25Db2xvckRlbGV0ZSIsIl9vbkNvbG9yQWRkIiwiX29uQXBwbHkiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiX29uUGlja2VyVXBkYXRlIiwiX29uU3dhdGNoQ2xvc2UiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm5hbWUiLCJzdHJpbmciLCJ0eXBlIiwiY2F0ZWdvcnkiLCJhcnJheU9mIiwiZnVuYyIsIm9uZU9mVHlwZSIsImJvb2wiLCJudW1iZXIiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEdBRkk7QUFHcEJELEVBQUFBLFlBQVksRUFBRTtBQUhNLEM7O2VBME1ULGlDQUFVSixhQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lLCBjc3N9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50LCBzb3J0YWJsZUhhbmRsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuXHJcbmltcG9ydCB7QnV0dG9uLCBJbmxpbmVJbnB1dH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1ZlcnREb3RzLCBUcmFzaH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gJy4vY29sb3ItcGFsZXR0ZSc7XHJcbmltcG9ydCBDdXN0b21QaWNrZXIgZnJvbSAnLi9jdXN0b20tcGlja2VyJztcclxuaW1wb3J0IHthcnJheU1vdmV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuY29uc3QgZHJhZ0hhbmRsZUFjdGl2ZSA9IGNzc2BcclxuICAubGF5ZXJfX2RyYWctaGFuZGxlIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU29ydGFibGVJdGVtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWiArIDF9O1xyXG5cclxuICA6bm90KC5zb3J0aW5nKSB7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcclxuICAgICAgJHtkcmFnSGFuZGxlQWN0aXZlfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zb3J0aW5nLWNvbG9ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcclxuICAgICR7ZHJhZ0hhbmRsZUFjdGl2ZX1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREcmFnSGFuZGxlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFRyYXNoID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIHN2ZyB7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmV9O1xyXG4gICAgfVxyXG4gIH1cclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTd2F0Y2ggPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdjdXN0b20tcGFsZXR0ZV9fc3dhdGNoJ1xyXG59KWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJveFNoYWRvd307XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQ29sb3JSYW5nZSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSW5saW5lSW5wdXQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIGlucHV0IHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBzb3J0YWJsZUVsZW1lbnQoKHtjaGlsZHJlbiwgaXNTb3J0aW5nfSkgPT4gKFxyXG4gIDxTdHlsZWRTb3J0YWJsZUl0ZW1cclxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY3VzdG9tLXBhbGV0dGVfX3NvcnRhYmxlLWl0ZW1zJywge3NvcnRpbmc6IGlzU29ydGluZ30pfVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1N0eWxlZFNvcnRhYmxlSXRlbT5cclxuKSk7XHJcblxyXG5jb25zdCBTb3J0YWJsZUNvbnRhaW5lciA9IHNvcnRhYmxlQ29udGFpbmVyKCh7Y2hpbGRyZW59KSA9PiA8ZGl2PntjaGlsZHJlbn08L2Rpdj4pO1xyXG5cclxuY29uc3QgRHJhZ0hhbmRsZSA9IHNvcnRhYmxlSGFuZGxlKCh7Y2xhc3NOYW1lLCBjaGlsZHJlbn0pID0+IChcclxuICA8U3R5bGVkRHJhZ0hhbmRsZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvU3R5bGVkRHJhZ0hhbmRsZT5cclxuKSk7XHJcblxyXG5jbGFzcyBDdXN0b21QYWxldHRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY3VzdG9tUGFsZXR0ZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNvbG9yczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcclxuICAgIH0pLFxyXG4gICAgc2V0Q3VzdG9tUGFsZXR0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBzaG93U2tldGNoZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGRlZmF1bHRTa2V0Y2hlclBvczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNrZXRjaGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYm90dG9tQnVmZmVyOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRlZmF1bHRTa2V0Y2hlclBvczoge3RvcDogJzMyMHB4JywgbGVmdDogJzMyMHB4J30sXHJcbiAgICBza2V0Y2hlckhlaWdodDogMjI4LFxyXG4gICAgYm90dG9tQnVmZmVyOiAyMTJcclxuICB9O1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIC8vIGN1cnJlbnRTd2F0Y2hJbmRleDogbnVsbCxcclxuICAgIGlzU29ydGluZzogZmFsc2VcclxuICB9O1xyXG5cclxuICByb290ID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIC8vIGRlcml2ZSBza2V0Y2hlciBwb3NpdGlvbiBiYXNlZCBvbiByb290IGNvbXBvbmVudFxyXG4gIHNob3dTa2V0Y2hlclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuc2hvd1NrZXRjaGVyO1xyXG4gIHRoZW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy50aGVtZTtcclxuICBza2V0Y2hlclBvc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5zaG93U2tldGNoZXJTZWxlY3RvciwgKHNob3dTa2V0Y2hlciwgdGhlbWUgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qge2RlZmF1bHRTa2V0Y2hlclBvcywgYm90dG9tQnVmZmVyLCBza2V0Y2hlckhlaWdodH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHNob3dTa2V0Y2hlciA9PT0gZmFsc2UgfHwgIXRoaXMucm9vdCB8fCAhdGhpcy5yb290LmN1cnJlbnQpIHJldHVybiBkZWZhdWx0U2tldGNoZXJQb3M7XHJcbiAgICBjb25zdCB7c2lkZVBhbmVsSW5uZXJQYWRkaW5nID0gMTYsIHNpZGVQYW5lbCA9IHt9LCBzaWRlUGFuZWxTY3JvbGxCYXJXaWR0aCA9IDEwfSA9IHRoZW1lO1xyXG4gICAgY29uc3Qgc2lkZVBhbmVsTGVmdCA9IChzaWRlUGFuZWwubWFyZ2luIHx8IHt9KS5sZWZ0IHx8IDIwO1xyXG4gICAgY29uc3Qgb2Zmc2V0WCA9IHNpZGVQYW5lbElubmVyUGFkZGluZyArIHNpZGVQYW5lbExlZnQgKyBzaWRlUGFuZWxTY3JvbGxCYXJXaWR0aDtcclxuICAgIC8vIGZpbmQgY29tcG9uZW50IFJvb3QgcG9zaXRpb25cclxuICAgIGNvbnN0IGJvdW5kaW5nID0gdGhpcy5yb290LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB7eCwgeSwgd2lkdGh9ID0gYm91bmRpbmc7XHJcblxyXG4gICAgLy8gc2V0IHRoZSB0b3Agc28gaXQgd29uJ3QgY29sbGlkZSB3aXRoIGJvdHRvbSB3aWRnZXRcclxuICAgIGNvbnN0IHRvcCA9XHJcbiAgICAgIHkgKyBza2V0Y2hlckhlaWdodCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBib3R0b21CdWZmZXJcclxuICAgICAgICA/IHlcclxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodCAtIGJvdHRvbUJ1ZmZlciAtIHNrZXRjaGVySGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiB7dG9wOiBgJHt0b3B9cHhgLCBsZWZ0OiBgJHt4ICsgd2lkdGggKyBvZmZzZXRYfXB4YH07XHJcbiAgfSk7XHJcblxyXG4gIG1vZGFsU3R5bGVzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIHRoaXMudGhlbWVTZWxlY3RvcixcclxuICAgIHRoaXMuc2tldGNoZXJQb3NTZWxlY3RvcixcclxuICAgICh0aGVtZSwgc2tldGNoZXJQb3MpID0+ICh7XHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBib3R0b206ICdhdXRvJyxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4IDBweCAwcHggMHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnBhbmVsQm9yZGVyUmFkaXVzIHx8ICcycHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAuLi5za2V0Y2hlclBvcyxcclxuICAgICAgICByaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxuICBfc2V0Q29sb3JQYWxldHRlVUkoY29sb3JzKSB7XHJcbiAgICB0aGlzLnByb3BzLnNldEN1c3RvbVBhbGV0dGUoe1xyXG4gICAgICBjb2xvcnNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX29uUGlja2VyVXBkYXRlID0gY29sb3IgPT4ge1xyXG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XHJcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBbLi4uY29sb3JzXTtcclxuICAgIG5ld0NvbG9yc1t0aGlzLnByb3BzLnNob3dTa2V0Y2hlcl0gPSBjb2xvci5oZXg7XHJcbiAgICB0aGlzLl9zZXRDb2xvclBhbGV0dGVVSShuZXdDb2xvcnMpO1xyXG4gIH07XHJcblxyXG4gIF9vbkNvbG9yRGVsZXRlID0gaW5kZXggPT4ge1xyXG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XHJcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBbLi4uY29sb3JzXTtcclxuICAgIGlmIChuZXdDb2xvcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICBuZXdDb2xvcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XHJcbiAgfTtcclxuXHJcbiAgX29uQ29sb3JBZGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcclxuICAgIC8vIGFkZCB0aGUgbGFzdCBjb2xvclxyXG4gICAgY29uc3QgbmV3Q29sb3JzID0gWy4uLmNvbG9ycywgY29sb3JzW2NvbG9ycy5sZW5ndGggLSAxXV07XHJcbiAgICB0aGlzLl9zZXRDb2xvclBhbGV0dGVVSShuZXdDb2xvcnMpO1xyXG4gIH07XHJcblxyXG4gIF9vblN3YXRjaENsaWNrID0gaW5kZXggPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVNrZXRjaGVyKGluZGV4KTtcclxuICB9O1xyXG5cclxuICBfb25Td2F0Y2hDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25Ub2dnbGVTa2V0Y2hlcihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgX29uQXBwbHkgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKCk7XHJcbiAgICB0aGlzLnByb3BzLm9uQXBwbHkodGhpcy5wcm9wcy5jdXN0b21QYWxldHRlLCBldmVudCk7XHJcbiAgfTtcclxuXHJcbiAgX29uU29ydEVuZCA9ICh7b2xkSW5kZXgsIG5ld0luZGV4fSkgPT4ge1xyXG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XHJcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBhcnJheU1vdmUoY29sb3JzLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgdGhpcy5fc2V0Q29sb3JQYWxldHRlVUkobmV3Q29sb3JzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogZmFsc2V9KTtcclxuICB9O1xyXG5cclxuICBfb25Tb3J0U3RhcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtpc1NvcnRpbmc6IHRydWV9KTtcclxuICB9O1xyXG5cclxuICBfaW5wdXRDb2xvckhleCA9IChpbmRleCwge3RhcmdldDoge3ZhbHVlfX0pID0+IHtcclxuICAgIGNvbnN0IHtjb2xvcnN9ID0gdGhpcy5wcm9wcy5jdXN0b21QYWxldHRlO1xyXG4gICAgY29uc3QgbmV3Q29sb3JzID0gWy4uLmNvbG9yc107XHJcbiAgICBuZXdDb2xvcnNbaW5kZXhdID0gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XHJcbiAgICBjb25zdCBtb2RhbFN0eWxlcyA9IHRoaXMubW9kYWxTdHlsZXNTZWxlY3Rvcih0aGlzLnByb3BzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLXBhbmVsXCIgcmVmPXt0aGlzLnJvb3R9PlxyXG4gICAgICAgIDxTdHlsZWRDb2xvclJhbmdlPlxyXG4gICAgICAgICAgPENvbG9yUGFsZXR0ZSBjb2xvcnM9e2NvbG9yc30gLz5cclxuICAgICAgICA8L1N0eWxlZENvbG9yUmFuZ2U+XHJcbiAgICAgICAgPFNvcnRhYmxlQ29udGFpbmVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tcGFsZXR0ZS1jb250YWluZXJcIlxyXG4gICAgICAgICAgb25Tb3J0RW5kPXt0aGlzLl9vblNvcnRFbmR9XHJcbiAgICAgICAgICBvblNvcnRTdGFydD17dGhpcy5fb25Tb3J0U3RhcnR9XHJcbiAgICAgICAgICBsb2NrQXhpcz1cInlcIlxyXG4gICAgICAgICAgaGVscGVyQ2xhc3M9XCJzb3J0aW5nLWNvbG9yc1wiXHJcbiAgICAgICAgICB1c2VEcmFnSGFuZGxlXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8U29ydGFibGVJdGVtIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gaXNTb3J0aW5nPXt0aGlzLnN0YXRlLmlzU29ydGluZ30+XHJcbiAgICAgICAgICAgICAgPERyYWdIYW5kbGUgY2xhc3NOYW1lPVwibGF5ZXJfX2RyYWctaGFuZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8VmVydERvdHMgaGVpZ2h0PVwiMjBweFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9EcmFnSGFuZGxlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRTd2F0Y2ggY29sb3I9e2NvbG9yfSBvbkNsaWNrPXtlID0+IHRoaXMuX29uU3dhdGNoQ2xpY2soaW5kZXgsIGUpfSAvPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRJbmxpbmVJbnB1dD5cclxuICAgICAgICAgICAgICAgIDxJbmxpbmVJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLWhleF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sb3IudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5faW5wdXRDb2xvckhleChpbmRleCwgZSl9XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtbGF5ZXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1N0eWxlZElubGluZUlucHV0PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUcmFzaCBvbkNsaWNrPXsoKSA9PiB0aGlzLl9vbkNvbG9yRGVsZXRlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhc2ggY2xhc3NOYW1lPVwidHJhc2hiaW5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkVHJhc2g+XHJcbiAgICAgICAgICAgIDwvU29ydGFibGVJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Tb3J0YWJsZUNvbnRhaW5lcj5cclxuICAgICAgICB7LyogQWRkIFN0ZXAgQnV0dG9uICovfVxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYWRkLXN0ZXBfX2J1dHRvblwiIGxpbmsgb25DbGljaz17dGhpcy5fb25Db2xvckFkZH0+XHJcbiAgICAgICAgICArIEFkZCBTdGVwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPFN0eWxlZExpbmUgLz5cclxuICAgICAgICB7LyogQ2FuY2VsIG9yIENvbmZpcm0gQnV0dG9ucyAqL31cclxuICAgICAgICA8U3R5bGVkQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb25maXJtLWFwcGx5X19idXR0b25cIiBsaW5rIG9uQ2xpY2s9e3RoaXMuX29uQXBwbHl9PlxyXG4gICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gbGluayBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2FuY2VsfT5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1N0eWxlZEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93U2tldGNoZXIgIT09IGZhbHNlID8gKFxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIGlzT3BlblxyXG4gICAgICAgICAgICBzdHlsZT17bW9kYWxTdHlsZXN9XHJcbiAgICAgICAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cclxuICAgICAgICAgICAgcGFyZW50U2VsZWN0b3I9eygpID0+IHtcclxuICAgICAgICAgICAgICAvLyBSZWFjdCBtb2RhbCBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtbW9kYWwvaXNzdWVzLzc2OVxyXG4gICAgICAgICAgICAgIC8vIGZhaWxlZCB0byBleGVjdXRlIHJlbW92ZUNoaWxkIG9uIHBhcmVudCBub2RlIHdoZW4gaXQgaXMgYWxyZWFkeSB1bm1vdW50ZWRcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmN1cnJlbnQgfHwge1xyXG4gICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkOiAoKSA9PiB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDdXN0b21QaWNrZXJcclxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3JzW3RoaXMucHJvcHMuc2hvd1NrZXRjaGVyXX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25QaWNrZXJVcGRhdGV9XHJcbiAgICAgICAgICAgICAgb25Td2F0Y2hDbG9zZT17dGhpcy5fb25Td2F0Y2hDbG9zZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShDdXN0b21QYWxldHRlKTtcclxuIl19