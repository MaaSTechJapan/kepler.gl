"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqby"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _accessor = _interopRequireDefault(require("./accessor"));

var _chickletedInput = _interopRequireDefault(require("./chickleted-input"));

var _typeahead = _interopRequireDefault(require("./typeahead"));

var _icons = require("../icons");

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _utils = require("../../../utils/utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  position: absolute;\n  bottom: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 6px;\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  .list__item__anchor {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDropdownSelect = _styledComponents["default"].div.attrs({
  className: 'item-selector__dropdown'
})(_templateObject(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.theme.input;
}, function (props) {
  return props.theme.dropdownListAnchor;
});

var DropdownSelectValue = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var DropdownSelectErase = _styledComponents["default"].div(_templateObject3());

var DropdownWrapper = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.placement === 'top' ? props.theme.inputBoxHeight : 'auto';
}, function (props) {
  return props.placement === 'bottom' ? '4px' : 'auto';
}, function (props) {
  return props.placement === 'top' ? '4px' : 'auto';
});

var ItemSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ItemSelector, _Component);

  var _super = _createSuper(ItemSelector);

  function ItemSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, ItemSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showTypeahead: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this._hideTypeahead();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function () {
      // note: chickleted input is not a real form element so we call onBlur()
      // when we feel the events are appropriate
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeItem", function (item, e) {
      // only used when multiSelect = true
      e.preventDefault();
      e.stopPropagation();
      var selectedItems = _this.props.selectedItems;
      var index = selectedItems.findIndex(function (t) {
        return t === item;
      });

      if (index < 0) {
        return;
      }

      var items = [].concat((0, _toConsumableArray2["default"])(selectedItems.slice(0, index)), (0, _toConsumableArray2["default"])(selectedItems.slice(index + 1, selectedItems.length)));

      _this.props.onChange(items);

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectItem", function (item) {
      var getValue = _accessor["default"].generateOptionToStringFor(_this.props.getOptionValue || _this.props.displayOption);

      var previousSelected = (0, _utils.toArray)(_this.props.selectedItems);

      if (_this.props.multiSelect) {
        var items = (0, _lodash["default"])(previousSelected.concat((0, _utils.toArray)(item)), getValue);

        _this.props.onChange(items);
      } else {
        _this.props.onChange(getValue(item));
      }

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onErase", function (e) {
      e.stopPropagation();

      _this.props.onChange(null);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showTypeahead", function () {
      if (!_this.props.disabled) {
        _this.setState({
          showTypeahead: true
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ItemSelector, [{
    key: "_hideTypeahead",
    value: function _hideTypeahead() {
      this.setState({
        showTypeahead: false
      });

      this._onBlur();
    }
  }, {
    key: "_renderDropdown",
    value: function _renderDropdown() {
      return /*#__PURE__*/_react["default"].createElement(DropdownWrapper, {
        placement: this.props.placement
      }, /*#__PURE__*/_react["default"].createElement(_typeahead["default"], {
        customClasses: {
          results: 'list-selector',
          input: 'typeahead__input',
          listItem: 'list__item',
          listAnchor: 'list__item__anchor'
        },
        options: this.props.options,
        filterOption: this.props.filterOption,
        fixedOptions: this.props.fixedOptions,
        placeholder: "Search",
        onOptionSelected: this._selectItem,
        customListComponent: this.props.DropDownRenderComponent,
        customListHeaderComponent: this.props.DropdownHeaderComponent,
        customListItemComponent: this.props.DropDownLineItemRenderComponent,
        displayOption: _accessor["default"].generateOptionToStringFor(this.props.displayOption),
        searchable: this.props.searchable,
        showOptionsWhenEmpty: true,
        selectedItems: (0, _utils.toArray)(this.props.selectedItems)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var selected = (0, _utils.toArray)(this.props.selectedItems);
      var hasValue = selected.length;

      var displayOption = _accessor["default"].generateOptionToStringFor(this.props.displayOption);

      var dropdownSelectProps = {
        className: (0, _classnames["default"])({
          active: this.state.showTypeahead
        }),
        disabled: this.props.disabled,
        onClick: this._showTypeahead,
        onFocus: this._showPopover,
        error: this.props.isError,
        inputTheme: this.props.inputTheme
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "item-selector"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.multiSelect ? /*#__PURE__*/_react["default"].createElement(_chickletedInput["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        placeholder: this.props.placeholder,
        displayOption: displayOption,
        removeItem: this._removeItem
      })) : /*#__PURE__*/_react["default"].createElement(StyledDropdownSelect, dropdownSelectProps, /*#__PURE__*/_react["default"].createElement(DropdownSelectValue, {
        hasPlaceholder: !hasValue,
        className: "item-selector__dropdown__value"
      }, hasValue ? /*#__PURE__*/_react["default"].createElement(this.props.DropDownLineItemRenderComponent, {
        displayOption: displayOption,
        value: selected[0]
      }) : this.props.placeholder), this.props.erasable && hasValue ? /*#__PURE__*/_react["default"].createElement(DropdownSelectErase, null, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "12px",
        onClick: this._onErase
      })) : null), this.state.showTypeahead && this._renderDropdown()));
    }
  }]);
  return ItemSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ItemSelector, "propTypes", {
  // required properties
  selectedItems: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object]),
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  // optional properties
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  erasable: _propTypes["default"].bool,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  getOptionValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  placement: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  DropdownHeaderComponent: _propTypes["default"].func,
  DropDownRenderComponent: _propTypes["default"].func,
  DropDownLineItemRenderComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ItemSelector, "defaultProps", {
  erasable: false,
  placement: 'bottom',
  selectedItems: [],
  displayOption: null,
  getOptionValue: null,
  filterOption: null,
  fixedOptions: null,
  inputTheme: 'primary',
  multiSelect: true,
  placeholder: 'Enter a value',
  closeOnSelect: true,
  searchable: true,
  dropdownHeader: null,
  DropdownHeaderComponent: null,
  DropDownRenderComponent: _dropdownList["default"],
  DropDownLineItemRenderComponent: _dropdownList.ListItem
});

var _default = (0, _reactOnclickoutside["default"])(ItemSelector);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkRHJvcGRvd25TZWxlY3QiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwiaW5wdXRUaGVtZSIsInRoZW1lIiwic2Vjb25kYXJ5SW5wdXQiLCJpbnB1dCIsImRyb3Bkb3duTGlzdEFuY2hvciIsIkRyb3Bkb3duU2VsZWN0VmFsdWUiLCJzcGFuIiwiaGFzUGxhY2Vob2xkZXIiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0Q29sb3IiLCJEcm9wZG93blNlbGVjdEVyYXNlIiwiRHJvcGRvd25XcmFwcGVyIiwiZHJvcGRvd25XcmFwcGVyWiIsInBsYWNlbWVudCIsImlucHV0Qm94SGVpZ2h0IiwiSXRlbVNlbGVjdG9yIiwic2hvd1R5cGVhaGVhZCIsIl9oaWRlVHlwZWFoZWFkIiwib25CbHVyIiwiaXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJpbmRleCIsImZpbmRJbmRleCIsInQiLCJpdGVtcyIsInNsaWNlIiwibGVuZ3RoIiwib25DaGFuZ2UiLCJjbG9zZU9uU2VsZWN0Iiwic2V0U3RhdGUiLCJfb25CbHVyIiwiZ2V0VmFsdWUiLCJBY2Nlc3NvciIsImdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IiLCJnZXRPcHRpb25WYWx1ZSIsImRpc3BsYXlPcHRpb24iLCJwcmV2aW91c1NlbGVjdGVkIiwibXVsdGlTZWxlY3QiLCJjb25jYXQiLCJkaXNhYmxlZCIsInJlc3VsdHMiLCJsaXN0SXRlbSIsImxpc3RBbmNob3IiLCJvcHRpb25zIiwiZmlsdGVyT3B0aW9uIiwiZml4ZWRPcHRpb25zIiwiX3NlbGVjdEl0ZW0iLCJEcm9wRG93blJlbmRlckNvbXBvbmVudCIsIkRyb3Bkb3duSGVhZGVyQ29tcG9uZW50IiwiRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudCIsInNlYXJjaGFibGUiLCJzZWxlY3RlZCIsImhhc1ZhbHVlIiwiZHJvcGRvd25TZWxlY3RQcm9wcyIsImFjdGl2ZSIsInN0YXRlIiwib25DbGljayIsIl9zaG93VHlwZWFoZWFkIiwib25Gb2N1cyIsIl9zaG93UG9wb3ZlciIsImVycm9yIiwiaXNFcnJvciIsInBvc2l0aW9uIiwicGxhY2Vob2xkZXIiLCJfcmVtb3ZlSXRlbSIsImVyYXNhYmxlIiwiX29uRXJhc2UiLCJfcmVuZGVyRHJvcGRvd24iLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheSIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJkcm9wZG93bkhlYWRlciIsIkRyb3Bkb3duTGlzdCIsIkxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDNUNDLEVBQUFBLFNBQVMsRUFBRTtBQURpQyxDQUFqQixDQUFILG9CQUd0QixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLFdBQXJCLEdBQW1DRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsY0FBL0MsR0FBZ0VILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxLQUFqRjtBQUFBLENBSGlCLEVBTXBCLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUcsa0JBQWhCO0FBQUEsQ0FOZSxDQUExQjs7QUFVQSxJQUFNQyxtQkFBbUIsR0FB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O0FBMEJqQjFCLEVBQUFBLHVCQUF1QixFQUFFcUIsc0JBQVVPLElBMUJsQjtBQTJCakI3QixFQUFBQSx1QkFBdUIsRUFBRXNCLHNCQUFVTyxJQTNCbEI7QUE0QmpCM0IsRUFBQUEsK0JBQStCLEVBQUVvQixzQkFBVU87QUE1QjFCLEM7aUNBRGZoRSxZLGtCQWdDa0I7QUFDcEJxRCxFQUFBQSxRQUFRLEVBQUUsS0FEVTtBQUVwQnZELEVBQUFBLFNBQVMsRUFBRSxRQUZTO0FBR3BCVSxFQUFBQSxhQUFhLEVBQUUsRUFISztBQUlwQmUsRUFBQUEsYUFBYSxFQUFFLElBSks7QUFLcEJELEVBQUFBLGNBQWMsRUFBRSxJQUxJO0FBTXBCVSxFQUFBQSxZQUFZLEVBQUUsSUFOTTtBQU9wQkMsRUFBQUEsWUFBWSxFQUFFLElBUE07QUFRcEJoRCxFQUFBQSxVQUFVLEVBQUUsU0FSUTtBQVNwQndDLEVBQUFBLFdBQVcsRUFBRSxJQVRPO0FBVXBCMEIsRUFBQUEsV0FBVyxFQUFFLGVBVk87QUFXcEJuQyxFQUFBQSxhQUFhLEVBQUUsSUFYSztBQVlwQnNCLEVBQUFBLFVBQVUsRUFBRSxJQVpRO0FBYXBCOEIsRUFBQUEsY0FBYyxFQUFFLElBYkk7QUFjcEJoQyxFQUFBQSx1QkFBdUIsRUFBRSxJQWRMO0FBZXBCRCxFQUFBQSx1QkFBdUIsRUFBRWtDLHdCQWZMO0FBZ0JwQmhDLEVBQUFBLCtCQUErQixFQUFFaUM7QUFoQmIsQzs7ZUFzTFQscUNBQXNCdEUsWUFBdEIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gudW5pcWJ5JztcbmltcG9ydCBsaXN0ZW5zVG9DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICcuL2FjY2Vzc29yJztcbmltcG9ydCBDaGlja2xldGVkSW5wdXQgZnJvbSAnLi9jaGlja2xldGVkLWlucHV0JztcbmltcG9ydCBUeXBlYWhlYWQgZnJvbSAnLi90eXBlYWhlYWQnO1xuaW1wb3J0IHtEZWxldGV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBEcm9wZG93bkxpc3QsIHtMaXN0SXRlbX0gZnJvbSAnLi9kcm9wZG93bi1saXN0JztcblxuaW1wb3J0IHt0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duU2VsZWN0ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2l0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duJ1xufSlgXG4gICR7cHJvcHMgPT4gKHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXQgOiBwcm9wcy50aGVtZS5pbnB1dCl9O1xuXG4gIC5saXN0X19pdGVtX19hbmNob3Ige1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QW5jaG9yfTtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25TZWxlY3RWYWx1ZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmhhc1BsYWNlaG9sZGVyID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlciA6IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IERyb3Bkb3duU2VsZWN0RXJhc2UgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bldyYXBwZXJafTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnBsYWNlbWVudCA9PT0gJ3RvcCcgPyBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodCA6ICdhdXRvJyl9O1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IChwcm9wcy5wbGFjZW1lbnQgPT09ICdib3R0b20nID8gJzRweCcgOiAnYXV0bycpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMucGxhY2VtZW50ID09PSAndG9wJyA/ICc0cHgnIDogJ2F1dG8nKX07XG5gO1xuXG5jbGFzcyBJdGVtU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcblxuICAgIC8vIG9wdGlvbmFsIHByb3BlcnRpZXNcbiAgICBmaXhlZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGVyYXNhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNwbGF5T3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGdldE9wdGlvblZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzRXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpbnB1dFRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXJhc2FibGU6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgc2VsZWN0ZWRJdGVtczogW10sXG4gICAgZGlzcGxheU9wdGlvbjogbnVsbCxcbiAgICBnZXRPcHRpb25WYWx1ZTogbnVsbCxcbiAgICBmaWx0ZXJPcHRpb246IG51bGwsXG4gICAgZml4ZWRPcHRpb25zOiBudWxsLFxuICAgIGlucHV0VGhlbWU6ICdwcmltYXJ5JyxcbiAgICBtdWx0aVNlbGVjdDogdHJ1ZSxcbiAgICBwbGFjZWhvbGRlcjogJ0VudGVyIGEgdmFsdWUnLFxuICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBkcm9wZG93bkhlYWRlcjogbnVsbCxcbiAgICBEcm9wZG93bkhlYWRlckNvbXBvbmVudDogbnVsbCxcbiAgICBEcm9wRG93blJlbmRlckNvbXBvbmVudDogRHJvcGRvd25MaXN0LFxuICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ6IExpc3RJdGVtXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvd1R5cGVhaGVhZDogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVDbGlja091dHNpZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5faGlkZVR5cGVhaGVhZCgpO1xuICB9O1xuXG4gIF9oaWRlVHlwZWFoZWFkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgdGhpcy5fb25CbHVyKCk7XG4gIH1cblxuICBfb25CbHVyID0gKCkgPT4ge1xuICAgIC8vIG5vdGU6IGNoaWNrbGV0ZWQgaW5wdXQgaXMgbm90IGEgcmVhbCBmb3JtIGVsZW1lbnQgc28gd2UgY2FsbCBvbkJsdXIoKVxuICAgIC8vIHdoZW4gd2UgZmVlbCB0aGUgZXZlbnRzIGFyZSBhcHByb3ByaWF0ZVxuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX3JlbW92ZUl0ZW0gPSAoaXRlbSwgZSkgPT4ge1xuICAgIC8vIG9ubHkgdXNlZCB3aGVuIG11bHRpU2VsZWN0ID0gdHJ1ZVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW1zfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEl0ZW1zLmZpbmRJbmRleCh0ID0+IHQgPT09IGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgLi4uc2VsZWN0ZWRJdGVtcy5zbGljZSgwLCBpbmRleCksXG4gICAgICAuLi5zZWxlY3RlZEl0ZW1zLnNsaWNlKGluZGV4ICsgMSwgc2VsZWN0ZWRJdGVtcy5sZW5ndGgpXG4gICAgXTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoaXRlbXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1R5cGVhaGVhZDogZmFsc2V9KTtcbiAgICAgIHRoaXMuX29uQmx1cigpO1xuICAgIH1cbiAgfTtcblxuICBfc2VsZWN0SXRlbSA9IGl0ZW0gPT4ge1xuICAgIGNvbnN0IGdldFZhbHVlID0gQWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0ZvcihcbiAgICAgIHRoaXMucHJvcHMuZ2V0T3B0aW9uVmFsdWUgfHwgdGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uXG4gICAgKTtcblxuICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSB0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgaXRlbXMgPSB1bmlxQnkocHJldmlvdXNTZWxlY3RlZC5jb25jYXQodG9BcnJheShpdGVtKSksIGdldFZhbHVlKTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGdldFZhbHVlKGl0ZW0pKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xuICAgICAgdGhpcy5fb25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9vbkVyYXNlID0gZSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICB9O1xuXG4gIF9zaG93VHlwZWFoZWFkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dUeXBlYWhlYWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcmVuZGVyRHJvcGRvd24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bldyYXBwZXIgcGxhY2VtZW50PXt0aGlzLnByb3BzLnBsYWNlbWVudH0+XG4gICAgICAgIDxUeXBlYWhlYWRcbiAgICAgICAgICBjdXN0b21DbGFzc2VzPXt7XG4gICAgICAgICAgICByZXN1bHRzOiAnbGlzdC1zZWxlY3RvcicsXG4gICAgICAgICAgICBpbnB1dDogJ3R5cGVhaGVhZF9faW5wdXQnLFxuICAgICAgICAgICAgbGlzdEl0ZW06ICdsaXN0X19pdGVtJyxcbiAgICAgICAgICAgIGxpc3RBbmNob3I6ICdsaXN0X19pdGVtX19hbmNob3InXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLm9wdGlvbnN9XG4gICAgICAgICAgZmlsdGVyT3B0aW9uPXt0aGlzLnByb3BzLmZpbHRlck9wdGlvbn1cbiAgICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuZml4ZWRPcHRpb25zfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXt0aGlzLl9zZWxlY3RJdGVtfVxuICAgICAgICAgIGN1c3RvbUxpc3RDb21wb25lbnQ9e3RoaXMucHJvcHMuRHJvcERvd25SZW5kZXJDb21wb25lbnR9XG4gICAgICAgICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wZG93bkhlYWRlckNvbXBvbmVudH1cbiAgICAgICAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50fVxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e0FjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IodGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uKX1cbiAgICAgICAgICBzZWFyY2hhYmxlPXt0aGlzLnByb3BzLnNlYXJjaGFibGV9XG4gICAgICAgICAgc2hvd09wdGlvbnNXaGVuRW1wdHlcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyl9XG4gICAgICAgIC8+XG4gICAgICA8L0Ryb3Bkb3duV3JhcHBlcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IGRpc3BsYXlPcHRpb24gPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbik7XG5cbiAgICBjb25zdCBkcm9wZG93blNlbGVjdFByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKHtcbiAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWRcbiAgICAgIH0pLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiB0aGlzLl9zaG93VHlwZWFoZWFkLFxuICAgICAgb25Gb2N1czogdGhpcy5fc2hvd1BvcG92ZXIsXG4gICAgICBlcnJvcjogdGhpcy5wcm9wcy5pc0Vycm9yLFxuICAgICAgaW5wdXRUaGVtZTogdGhpcy5wcm9wcy5pbnB1dFRoZW1lXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0b3JcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAgey8qIHRoaXMgcGFydCBpcyB1c2VkIHRvIGRpc3BsYXkgdGhlIGxhYmVsICovfVxuICAgICAgICAgIHt0aGlzLnByb3BzLm11bHRpU2VsZWN0ID8gKFxuICAgICAgICAgICAgPENoaWNrbGV0ZWRJbnB1dFxuICAgICAgICAgICAgICB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc31cbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgICAgcmVtb3ZlSXRlbT17dGhpcy5fcmVtb3ZlSXRlbX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTdHlsZWREcm9wZG93blNlbGVjdCB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc30+XG4gICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdFZhbHVlXG4gICAgICAgICAgICAgICAgaGFzUGxhY2Vob2xkZXI9eyFoYXNWYWx1ZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLXNlbGVjdG9yX19kcm9wZG93bl9fdmFsdWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hhc1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgPHRoaXMucHJvcHMuRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkaXNwbGF5T3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRbMF19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Ecm9wZG93blNlbGVjdFZhbHVlPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcmFzYWJsZSAmJiBoYXNWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25TZWxlY3RFcmFzZT5cbiAgICAgICAgICAgICAgICAgIDxEZWxldGUgaGVpZ2h0PVwiMTJweFwiIG9uQ2xpY2s9e3RoaXMuX29uRXJhc2V9IC8+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blNlbGVjdEVyYXNlPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvU3R5bGVkRHJvcGRvd25TZWxlY3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogdGhpcyBwYXJ0IGlzIHVzZWQgdG8gYnVpbHQgdGhlIGxpc3QgKi99XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1R5cGVhaGVhZCAmJiB0aGlzLl9yZW5kZXJEcm9wZG93bigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuc1RvQ2xpY2tPdXRzaWRlKEl0ZW1TZWxlY3Rvcik7XG4iXX0=