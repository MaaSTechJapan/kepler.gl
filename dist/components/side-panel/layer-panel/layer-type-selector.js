"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dropdownList = require("../../common/item-selector/dropdown-list");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  // override item-selector dropdown padding\n  .item-selector .item-selector__dropdown {\n    padding: 4px 10px 4px 2px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: 12px 0 0 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.list {\n    display: flex;\n    align-items: center;\n\n    .layer-type-selector__item__icon {\n      color: ", ";\n      background-size: ", "px ", "px;\n      margin-right: 12px;\n    }\n  }\n\n  .layer-type-selector__item__icon {\n    color: ", ";\n    display: flex;\n    background-image: url(", ");\n    background-size: ", "px ", "px;\n  }\n\n  .layer-type-selector__item__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n  padding-right: 12px;\n\n  &.selected {\n    .layer-type-selector__item__icon {\n      border: 1px solid #caf2f4;\n    }\n  }\n\n  :hover,\n  &.selected {\n    cursor: pointer;\n    .layer-type-selector__item__icon {\n      color: ", ";\n    }\n\n    .layer-type-selector__item__label {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ITEM_SIZE = {
  large: 60,
  small: 28
};

var StyledDropdownListItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.textColor;
});

var StyledListItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.activeColor;
}, ITEM_SIZE.small, ITEM_SIZE.small, function (props) {
  return props.theme.labelColor;
}, "".concat(_defaultSettings.CLOUDFRONT, "/kepler.gl-layer-icon-bg.png"), ITEM_SIZE.large, ITEM_SIZE.large, function (props) {
  return props.theme.labelColor;
});

var DropdownListWrapper = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.dropdownList;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
});

var LayerTypeListItem = function LayerTypeListItem(_ref) {
  var value = _ref.value,
      isTile = _ref.isTile;
  return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
    className: (0, _classnames["default"])('layer-type-selector__item__inner', {
      list: !isTile
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer-type-selector__item__icon"
  }, /*#__PURE__*/_react["default"].createElement(value.icon, {
    height: "".concat(isTile ? ITEM_SIZE.large : ITEM_SIZE.small, "px")
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer-type-selector__item__label"
  }, value.label));
};

var LayerTypeDropdownList = function LayerTypeDropdownList(props) {
  return /*#__PURE__*/_react["default"].createElement(DropdownListWrapper, {
    className: _dropdownList.classList.list
  }, props.options.map(function (value, i) {
    return /*#__PURE__*/_react["default"].createElement(StyledDropdownListItem, {
      className: (0, _classnames["default"])('layer-type-selector__item', {
        selected: props.selectedItems.find(function (it) {
          return it.id === value.id;
        }),
        hover: props.selectionIndex === i
      }),
      key: "".concat(value.id, "_").concat(i),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      },
      onClick: function onClick(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      }
    }, /*#__PURE__*/_react["default"].createElement(props.customListItemComponent, {
      value: value,
      isTile: true
    }));
  }));
};

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};

var StyledLayerTypeSelector = _styledComponents["default"].div(_templateObject4());

var LayerTypeSelector = function LayerTypeSelector(_ref2) {
  var layer = _ref2.layer,
      layerTypeOptions = _ref2.layerTypeOptions,
      onSelect = _ref2.onSelect;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(StyledLayerTypeSelector, {
    className: "layer-config__type"
  }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: layerTypeOptions.find(function (op) {
      return op.id === layer.type;
    }),
    options: layerTypeOptions,
    multiSelect: false,
    placeholder: "Select A Type",
    onChange: onSelect,
    getOptionValue: function getOptionValue(op) {
      return op.id;
    },
    filterOption: "label",
    displayOption: function displayOption(op) {
      return op.label;
    },
    DropDownLineItemRenderComponent: LayerTypeListItem,
    DropDownRenderComponent: LayerTypeDropdownList
  })));
};

LayerTypeSelector.propTypes = propTypes;
var _default = LayerTypeSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJJVEVNX1NJWkUiLCJsYXJnZSIsInNtYWxsIiwiU3R5bGVkRHJvcGRvd25MaXN0SXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsIlN0eWxlZExpc3RJdGVtIiwibGFiZWxDb2xvciIsIkNMT1VERlJPTlQiLCJEcm9wZG93bkxpc3RXcmFwcGVyIiwiZHJvcGRvd25MaXN0IiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiTGF5ZXJUeXBlTGlzdEl0ZW0iLCJ2YWx1ZSIsImlzVGlsZSIsImxpc3QiLCJsYWJlbCIsIkxheWVyVHlwZURyb3Bkb3duTGlzdCIsImNsYXNzTGlzdCIsIm9wdGlvbnMiLCJtYXAiLCJpIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEl0ZW1zIiwiZmluZCIsIml0IiwiaWQiLCJob3ZlciIsInNlbGVjdGlvbkluZGV4IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25PcHRpb25TZWxlY3RlZCIsInByb3BUeXBlcyIsImxheWVyIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm9uU2VsZWN0IiwiZnVuYyIsIlN0eWxlZExheWVyVHlwZVNlbGVjdG9yIiwiTGF5ZXJUeXBlU2VsZWN0b3IiLCJsYXllclR5cGVPcHRpb25zIiwib3AiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFEUztBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBRlMsQ0FB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QUFBLGNBQWMsRUFBRSx3QkFBQUssRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ2hCLEVBQVA7QUFBQSxLQU5wQjtBQU9FLElBQUEsWUFBWSxFQUFDLE9BUGY7QUFRRSxJQUFBLGFBQWEsRUFBRSx1QkFBQWdCLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUMxQixLQUFQO0FBQUEsS0FSbkI7QUFTRSxJQUFBLCtCQUErQixFQUFFSixpQkFUbkM7QUFVRSxJQUFBLHVCQUF1QixFQUFFSztBQVYzQixJQURGLENBREYsQ0FEd0I7QUFBQSxDQUExQjs7QUFtQkF1QixpQkFBaUIsQ0FBQ1IsU0FBbEIsR0FBOEJBLFNBQTlCO2VBRWVRLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHtjbGFzc0xpc3R9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XHJcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcclxuaW1wb3J0IHtDTE9VREZST05UfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IElURU1fU0laRSA9IHtcclxuICBsYXJnZTogNjAsXHJcbiAgc21hbGw6IDI4XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWREcm9wZG93bkxpc3RJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAmLnNlbGVjdGVkIHtcclxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhZjJmNDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDpob3ZlcixcclxuICAmLnNlbGVjdGVkIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gICYubGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvbiB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yfTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAke0lURU1fU0laRS5zbWFsbH1weCAke0lURU1fU0laRS5zbWFsbH1weDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YCR7Q0xPVURGUk9OVH0va2VwbGVyLmdsLWxheWVyLWljb24tYmcucG5nYH0pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAke0lURU1fU0laRS5sYXJnZX1weCAke0lURU1fU0laRS5sYXJnZX1weDtcclxuICB9XHJcblxyXG4gIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERyb3Bkb3duTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0fTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAxMnB4IDAgMCAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgTGF5ZXJUeXBlTGlzdEl0ZW0gPSAoe3ZhbHVlLCBpc1RpbGV9KSA9PiAoXHJcbiAgPFN0eWxlZExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faW5uZXInLCB7bGlzdDogIWlzVGlsZX0pfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvblwiPlxyXG4gICAgICA8dmFsdWUuaWNvbiBoZWlnaHQ9e2Ake2lzVGlsZSA/IElURU1fU0laRS5sYXJnZSA6IElURU1fU0laRS5zbWFsbH1weGB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9fbGFiZWxcIj57dmFsdWUubGFiZWx9PC9kaXY+XHJcbiAgPC9TdHlsZWRMaXN0SXRlbT5cclxuKTtcclxuXHJcbmNvbnN0IExheWVyVHlwZURyb3Bkb3duTGlzdCA9IHByb3BzID0+IChcclxuICA8RHJvcGRvd25MaXN0V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0fT5cclxuICAgIHtwcm9wcy5vcHRpb25zLm1hcCgodmFsdWUsIGkpID0+IChcclxuICAgICAgPFN0eWxlZERyb3Bkb3duTGlzdEl0ZW1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW0nLCB7XHJcbiAgICAgICAgICBzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWRJdGVtcy5maW5kKGl0ID0+IGl0LmlkID09PSB2YWx1ZS5pZCksXHJcbiAgICAgICAgICBob3ZlcjogcHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGlcclxuICAgICAgICB9KX1cclxuICAgICAgICBrZXk9e2Ake3ZhbHVlLmlkfV8ke2l9YH1cclxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBwcm9wcy5vbk9wdGlvblNlbGVjdGVkKHZhbHVlLCBlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcHJvcHMub25PcHRpb25TZWxlY3RlZCh2YWx1ZSwgZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudCB2YWx1ZT17dmFsdWV9IGlzVGlsZSAvPlxyXG4gICAgICA8L1N0eWxlZERyb3Bkb3duTGlzdEl0ZW0+XHJcbiAgICApKX1cclxuICA8L0Ryb3Bkb3duTGlzdFdyYXBwZXI+XHJcbik7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkTGF5ZXJUeXBlU2VsZWN0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIC8vIG92ZXJyaWRlIGl0ZW0tc2VsZWN0b3IgZHJvcGRvd24gcGFkZGluZ1xyXG4gIC5pdGVtLXNlbGVjdG9yIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93biB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweCA0cHggMnB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgTGF5ZXJUeXBlU2VsZWN0b3IgPSAoe2xheWVyLCBsYXllclR5cGVPcHRpb25zLCBvblNlbGVjdH0pID0+IChcclxuICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgIDxTdHlsZWRMYXllclR5cGVTZWxlY3RvciBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX3R5cGVcIj5cclxuICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e2xheWVyVHlwZU9wdGlvbnMuZmluZChvcCA9PiBvcC5pZCA9PT0gbGF5ZXIudHlwZSl9XHJcbiAgICAgICAgb3B0aW9ucz17bGF5ZXJUeXBlT3B0aW9uc31cclxuICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQSBUeXBlXCJcclxuICAgICAgICBvbkNoYW5nZT17b25TZWxlY3R9XHJcbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e29wID0+IG9wLmlkfVxyXG4gICAgICAgIGZpbHRlck9wdGlvbj1cImxhYmVsXCJcclxuICAgICAgICBkaXNwbGF5T3B0aW9uPXtvcCA9PiBvcC5sYWJlbH1cclxuICAgICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50PXtMYXllclR5cGVMaXN0SXRlbX1cclxuICAgICAgICBEcm9wRG93blJlbmRlckNvbXBvbmVudD17TGF5ZXJUeXBlRHJvcGRvd25MaXN0fVxyXG4gICAgICAvPlxyXG4gICAgPC9TdHlsZWRMYXllclR5cGVTZWxlY3Rvcj5cclxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbik7XHJcblxyXG5MYXllclR5cGVTZWxlY3Rvci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllclR5cGVTZWxlY3RvcjtcclxuIl19