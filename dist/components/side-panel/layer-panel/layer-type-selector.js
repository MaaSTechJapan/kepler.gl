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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJJVEVNX1NJWkUiLCJsYXJnZSIsInNtYWxsIiwiU3R5bGVkRHJvcGRvd25MaXN0SXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsIlN0eWxlZExpc3RJdGVtIiwibGFiZWxDb2xvciIsIkNMT1VERlJPTlQiLCJEcm9wZG93bkxpc3RXcmFwcGVyIiwiZHJvcGRvd25MaXN0IiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiTGF5ZXJUeXBlTGlzdEl0ZW0iLCJ2YWx1ZSIsImlzVGlsZSIsImxpc3QiLCJsYWJlbCIsIkxheWVyVHlwZURyb3Bkb3duTGlzdCIsImNsYXNzTGlzdCIsIm9wdGlvbnMiLCJtYXAiLCJpIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEl0ZW1zIiwiZmluZCIsIml0IiwiaWQiLCJob3ZlciIsInNlbGVjdGlvbkluZGV4IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25PcHRpb25TZWxlY3RlZCIsInByb3BUeXBlcyIsImxheWVyIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm9uU2VsZWN0IiwiZnVuYyIsIlN0eWxlZExheWVyVHlwZVNlbGVjdG9yIiwiTGF5ZXJUeXBlU2VsZWN0b3IiLCJsYXllclR5cGVPcHRpb25zIiwib3AiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFEUztBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBRlMsQ0FB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QUFBLGNBQWMsRUFBRSx3QkFBQUssRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ2hCLEVBQVA7QUFBQSxLQU5wQjtBQU9FLElBQUEsWUFBWSxFQUFDLE9BUGY7QUFRRSxJQUFBLGFBQWEsRUFBRSx1QkFBQWdCLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUMxQixLQUFQO0FBQUEsS0FSbkI7QUFTRSxJQUFBLCtCQUErQixFQUFFSixpQkFUbkM7QUFVRSxJQUFBLHVCQUF1QixFQUFFSztBQVYzQixJQURGLENBREYsQ0FEd0I7QUFBQSxDQUExQjs7QUFtQkF1QixpQkFBaUIsQ0FBQ1IsU0FBbEIsR0FBOEJBLFNBQTlCO2VBRWVRLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7Q0xPVURGUk9OVH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSVRFTV9TSVpFID0ge1xuICBsYXJnZTogNjAsXG4gIHNtYWxsOiAyOFxufTtcblxuY29uc3QgU3R5bGVkRHJvcGRvd25MaXN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuXG4gICYuc2VsZWN0ZWQge1xuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWYyZjQ7XG4gICAgfVxuICB9XG5cbiAgOmhvdmVyLFxuICAmLnNlbGVjdGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICAgIH1cblxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbCB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICAmLmxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yfTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtJVEVNX1NJWkUuc21hbGx9cHggJHtJVEVNX1NJWkUuc21hbGx9cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YCR7Q0xPVURGUk9OVH0va2VwbGVyLmdsLWxheWVyLWljb24tYmcucG5nYH0pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJHtJVEVNX1NJWkUubGFyZ2V9cHggJHtJVEVNX1NJWkUubGFyZ2V9cHg7XG4gIH1cblxuICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9fbGFiZWwge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweCAwIDAgMTJweDtcbmA7XG5cbmNvbnN0IExheWVyVHlwZUxpc3RJdGVtID0gKHt2YWx1ZSwgaXNUaWxlfSkgPT4gKFxuICA8U3R5bGVkTGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pbm5lcicsIHtsaXN0OiAhaXNUaWxlfSl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvblwiPlxuICAgICAgPHZhbHVlLmljb24gaGVpZ2h0PXtgJHtpc1RpbGUgPyBJVEVNX1NJWkUubGFyZ2UgOiBJVEVNX1NJWkUuc21hbGx9cHhgfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9fbGFiZWxcIj57dmFsdWUubGFiZWx9PC9kaXY+XG4gIDwvU3R5bGVkTGlzdEl0ZW0+XG4pO1xuXG5jb25zdCBMYXllclR5cGVEcm9wZG93bkxpc3QgPSBwcm9wcyA9PiAoXG4gIDxEcm9wZG93bkxpc3RXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3R9PlxuICAgIHtwcm9wcy5vcHRpb25zLm1hcCgodmFsdWUsIGkpID0+IChcbiAgICAgIDxTdHlsZWREcm9wZG93bkxpc3RJdGVtXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbScsIHtcbiAgICAgICAgICBzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWRJdGVtcy5maW5kKGl0ID0+IGl0LmlkID09PSB2YWx1ZS5pZCksXG4gICAgICAgICAgaG92ZXI6IHByb3BzLnNlbGVjdGlvbkluZGV4ID09PSBpXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2Ake3ZhbHVlLmlkfV8ke2l9YH1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcm9wcy5vbk9wdGlvblNlbGVjdGVkKHZhbHVlLCBlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByb3BzLm9uT3B0aW9uU2VsZWN0ZWQodmFsdWUsIGUpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8cHJvcHMuY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQgdmFsdWU9e3ZhbHVlfSBpc1RpbGUgLz5cbiAgICAgIDwvU3R5bGVkRHJvcGRvd25MaXN0SXRlbT5cbiAgICApKX1cbiAgPC9Ecm9wZG93bkxpc3RXcmFwcGVyPlxuKTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgU3R5bGVkTGF5ZXJUeXBlU2VsZWN0b3IgPSBzdHlsZWQuZGl2YFxuICAvLyBvdmVycmlkZSBpdGVtLXNlbGVjdG9yIGRyb3Bkb3duIHBhZGRpbmdcbiAgLml0ZW0tc2VsZWN0b3IgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duIHtcbiAgICBwYWRkaW5nOiA0cHggMTBweCA0cHggMnB4O1xuICB9XG5gO1xuY29uc3QgTGF5ZXJUeXBlU2VsZWN0b3IgPSAoe2xheWVyLCBsYXllclR5cGVPcHRpb25zLCBvblNlbGVjdH0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPFN0eWxlZExheWVyVHlwZVNlbGVjdG9yIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fdHlwZVwiPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXtsYXllclR5cGVPcHRpb25zLmZpbmQob3AgPT4gb3AuaWQgPT09IGxheWVyLnR5cGUpfVxuICAgICAgICBvcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IEEgVHlwZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e29wID0+IG9wLmlkfVxuICAgICAgICBmaWx0ZXJPcHRpb249XCJsYWJlbFwiXG4gICAgICAgIGRpc3BsYXlPcHRpb249e29wID0+IG9wLmxhYmVsfVxuICAgICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50PXtMYXllclR5cGVMaXN0SXRlbX1cbiAgICAgICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ9e0xheWVyVHlwZURyb3Bkb3duTGlzdH1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRMYXllclR5cGVTZWxlY3Rvcj5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuTGF5ZXJUeXBlU2VsZWN0b3IucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBMYXllclR5cGVTZWxlY3RvcjtcbiJdfQ==