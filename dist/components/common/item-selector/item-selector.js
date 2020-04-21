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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkRHJvcGRvd25TZWxlY3QiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwiaW5wdXRUaGVtZSIsInRoZW1lIiwic2Vjb25kYXJ5SW5wdXQiLCJpbnB1dCIsImRyb3Bkb3duTGlzdEFuY2hvciIsIkRyb3Bkb3duU2VsZWN0VmFsdWUiLCJzcGFuIiwiaGFzUGxhY2Vob2xkZXIiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0Q29sb3IiLCJEcm9wZG93blNlbGVjdEVyYXNlIiwiRHJvcGRvd25XcmFwcGVyIiwiZHJvcGRvd25XcmFwcGVyWiIsInBsYWNlbWVudCIsImlucHV0Qm94SGVpZ2h0IiwiSXRlbVNlbGVjdG9yIiwic2hvd1R5cGVhaGVhZCIsIl9oaWRlVHlwZWFoZWFkIiwib25CbHVyIiwiaXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJpbmRleCIsImZpbmRJbmRleCIsInQiLCJpdGVtcyIsInNsaWNlIiwibGVuZ3RoIiwib25DaGFuZ2UiLCJjbG9zZU9uU2VsZWN0Iiwic2V0U3RhdGUiLCJfb25CbHVyIiwiZ2V0VmFsdWUiLCJBY2Nlc3NvciIsImdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IiLCJnZXRPcHRpb25WYWx1ZSIsImRpc3BsYXlPcHRpb24iLCJwcmV2aW91c1NlbGVjdGVkIiwibXVsdGlTZWxlY3QiLCJjb25jYXQiLCJkaXNhYmxlZCIsInJlc3VsdHMiLCJsaXN0SXRlbSIsImxpc3RBbmNob3IiLCJvcHRpb25zIiwiZmlsdGVyT3B0aW9uIiwiZml4ZWRPcHRpb25zIiwiX3NlbGVjdEl0ZW0iLCJEcm9wRG93blJlbmRlckNvbXBvbmVudCIsIkRyb3Bkb3duSGVhZGVyQ29tcG9uZW50IiwiRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudCIsInNlYXJjaGFibGUiLCJzZWxlY3RlZCIsImhhc1ZhbHVlIiwiZHJvcGRvd25TZWxlY3RQcm9wcyIsImFjdGl2ZSIsInN0YXRlIiwib25DbGljayIsIl9zaG93VHlwZWFoZWFkIiwib25Gb2N1cyIsIl9zaG93UG9wb3ZlciIsImVycm9yIiwiaXNFcnJvciIsInBvc2l0aW9uIiwicGxhY2Vob2xkZXIiLCJfcmVtb3ZlSXRlbSIsImVyYXNhYmxlIiwiX29uRXJhc2UiLCJfcmVuZGVyRHJvcGRvd24iLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheSIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJkcm9wZG93bkhlYWRlciIsIkRyb3Bkb3duTGlzdCIsIkxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDNUNDLEVBQUFBLFNBQVMsRUFBRTtBQURpQyxDQUFqQixDQUFILG9CQUd0QixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLFdBQXJCLEdBQW1DRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsY0FBL0MsR0FBZ0VILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxLQUFqRjtBQUFBLENBSGlCLEVBTXBCLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUcsa0JBQWhCO0FBQUEsQ0FOZSxDQUExQjs7QUFVQSxJQUFNQyxtQkFBbUIsR0FB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O0FBMEJqQjFCLEVBQUFBLHVCQUF1QixFQUFFcUIsc0JBQVVPLElBMUJsQjtBQTJCakI3QixFQUFBQSx1QkFBdUIsRUFBRXNCLHNCQUFVTyxJQTNCbEI7QUE0QmpCM0IsRUFBQUEsK0JBQStCLEVBQUVvQixzQkFBVU87QUE1QjFCLEM7aUNBRGZoRSxZLGtCQWdDa0I7QUFDcEJxRCxFQUFBQSxRQUFRLEVBQUUsS0FEVTtBQUVwQnZELEVBQUFBLFNBQVMsRUFBRSxRQUZTO0FBR3BCVSxFQUFBQSxhQUFhLEVBQUUsRUFISztBQUlwQmUsRUFBQUEsYUFBYSxFQUFFLElBSks7QUFLcEJELEVBQUFBLGNBQWMsRUFBRSxJQUxJO0FBTXBCVSxFQUFBQSxZQUFZLEVBQUUsSUFOTTtBQU9wQkMsRUFBQUEsWUFBWSxFQUFFLElBUE07QUFRcEJoRCxFQUFBQSxVQUFVLEVBQUUsU0FSUTtBQVNwQndDLEVBQUFBLFdBQVcsRUFBRSxJQVRPO0FBVXBCMEIsRUFBQUEsV0FBVyxFQUFFLGVBVk87QUFXcEJuQyxFQUFBQSxhQUFhLEVBQUUsSUFYSztBQVlwQnNCLEVBQUFBLFVBQVUsRUFBRSxJQVpRO0FBYXBCOEIsRUFBQUEsY0FBYyxFQUFFLElBYkk7QUFjcEJoQyxFQUFBQSx1QkFBdUIsRUFBRSxJQWRMO0FBZXBCRCxFQUFBQSx1QkFBdUIsRUFBRWtDLHdCQWZMO0FBZ0JwQmhDLEVBQUFBLCtCQUErQixFQUFFaUM7QUFoQmIsQzs7ZUFzTFQscUNBQXNCdEUsWUFBdEIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gudW5pcWJ5JztcclxuaW1wb3J0IGxpc3RlbnNUb0NsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJy4vYWNjZXNzb3InO1xyXG5pbXBvcnQgQ2hpY2tsZXRlZElucHV0IGZyb20gJy4vY2hpY2tsZXRlZC1pbnB1dCc7XHJcbmltcG9ydCBUeXBlYWhlYWQgZnJvbSAnLi90eXBlYWhlYWQnO1xyXG5pbXBvcnQge0RlbGV0ZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgRHJvcGRvd25MaXN0LCB7TGlzdEl0ZW19IGZyb20gJy4vZHJvcGRvd24tbGlzdCc7XHJcblxyXG5pbXBvcnQge3RvQXJyYXl9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuXHJcbmNvbnN0IFN0eWxlZERyb3Bkb3duU2VsZWN0ID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24nXHJcbn0pYFxyXG4gICR7cHJvcHMgPT4gKHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXQgOiBwcm9wcy50aGVtZS5pbnB1dCl9O1xyXG5cclxuICAubGlzdF9faXRlbV9fYW5jaG9yIHtcclxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QW5jaG9yfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEcm9wZG93blNlbGVjdFZhbHVlID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmhhc1BsYWNlaG9sZGVyID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlciA6IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgRHJvcGRvd25TZWxlY3RFcmFzZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXI6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV3JhcHBlclp9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnBsYWNlbWVudCA9PT0gJ3RvcCcgPyBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodCA6ICdhdXRvJyl9O1xyXG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gKHByb3BzLnBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnNHB4JyA6ICdhdXRvJyl9O1xyXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnBsYWNlbWVudCA9PT0gJ3RvcCcgPyAnNHB4JyA6ICdhdXRvJyl9O1xyXG5gO1xyXG5cclxuY2xhc3MgSXRlbVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgLy8gcmVxdWlyZWQgcHJvcGVydGllc1xyXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcclxuICAgIF0pLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8vIG9wdGlvbmFsIHByb3BlcnRpZXNcclxuICAgIGZpeGVkT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNwbGF5T3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgZ2V0T3B0aW9uVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGVyYXNhYmxlOiBmYWxzZSxcclxuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcclxuICAgIGRpc3BsYXlPcHRpb246IG51bGwsXHJcbiAgICBnZXRPcHRpb25WYWx1ZTogbnVsbCxcclxuICAgIGZpbHRlck9wdGlvbjogbnVsbCxcclxuICAgIGZpeGVkT3B0aW9uczogbnVsbCxcclxuICAgIGlucHV0VGhlbWU6ICdwcmltYXJ5JyxcclxuICAgIG11bHRpU2VsZWN0OiB0cnVlLFxyXG4gICAgcGxhY2Vob2xkZXI6ICdFbnRlciBhIHZhbHVlJyxcclxuICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXHJcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxyXG4gICAgZHJvcGRvd25IZWFkZXI6IG51bGwsXHJcbiAgICBEcm9wZG93bkhlYWRlckNvbXBvbmVudDogbnVsbCxcclxuICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50OiBEcm9wZG93bkxpc3QsXHJcbiAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50OiBMaXN0SXRlbVxyXG4gIH07XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgc2hvd1R5cGVhaGVhZDogZmFsc2VcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGlja091dHNpZGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9oaWRlVHlwZWFoZWFkKCk7XHJcbiAgfTtcclxuXHJcbiAgX2hpZGVUeXBlYWhlYWQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xyXG4gICAgdGhpcy5fb25CbHVyKCk7XHJcbiAgfVxyXG5cclxuICBfb25CbHVyID0gKCkgPT4ge1xyXG4gICAgLy8gbm90ZTogY2hpY2tsZXRlZCBpbnB1dCBpcyBub3QgYSByZWFsIGZvcm0gZWxlbWVudCBzbyB3ZSBjYWxsIG9uQmx1cigpXHJcbiAgICAvLyB3aGVuIHdlIGZlZWwgdGhlIGV2ZW50cyBhcmUgYXBwcm9wcmlhdGVcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9yZW1vdmVJdGVtID0gKGl0ZW0sIGUpID0+IHtcclxuICAgIC8vIG9ubHkgdXNlZCB3aGVuIG11bHRpU2VsZWN0ID0gdHJ1ZVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW1zfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkSXRlbXMuZmluZEluZGV4KHQgPT4gdCA9PT0gaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIC4uLnNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAuLi5zZWxlY3RlZEl0ZW1zLnNsaWNlKGluZGV4ICsgMSwgc2VsZWN0ZWRJdGVtcy5sZW5ndGgpXHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoaXRlbXMpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1R5cGVhaGVhZDogZmFsc2V9KTtcclxuICAgICAgdGhpcy5fb25CbHVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3NlbGVjdEl0ZW0gPSBpdGVtID0+IHtcclxuICAgIGNvbnN0IGdldFZhbHVlID0gQWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0ZvcihcclxuICAgICAgdGhpcy5wcm9wcy5nZXRPcHRpb25WYWx1ZSB8fCB0aGlzLnByb3BzLmRpc3BsYXlPcHRpb25cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IHRvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5tdWx0aVNlbGVjdCkge1xyXG4gICAgICBjb25zdCBpdGVtcyA9IHVuaXFCeShwcmV2aW91c1NlbGVjdGVkLmNvbmNhdCh0b0FycmF5KGl0ZW0pKSwgZ2V0VmFsdWUpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGl0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZ2V0VmFsdWUoaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1R5cGVhaGVhZDogZmFsc2V9KTtcclxuICAgICAgdGhpcy5fb25CbHVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX29uRXJhc2UgPSBlID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIF9zaG93VHlwZWFoZWFkID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3dUeXBlYWhlYWQ6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3JlbmRlckRyb3Bkb3duKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyb3Bkb3duV3JhcHBlciBwbGFjZW1lbnQ9e3RoaXMucHJvcHMucGxhY2VtZW50fT5cclxuICAgICAgICA8VHlwZWFoZWFkXHJcbiAgICAgICAgICBjdXN0b21DbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHJlc3VsdHM6ICdsaXN0LXNlbGVjdG9yJyxcclxuICAgICAgICAgICAgaW5wdXQ6ICd0eXBlYWhlYWRfX2lucHV0JyxcclxuICAgICAgICAgICAgbGlzdEl0ZW06ICdsaXN0X19pdGVtJyxcclxuICAgICAgICAgICAgbGlzdEFuY2hvcjogJ2xpc3RfX2l0ZW1fX2FuY2hvcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLm9wdGlvbnN9XHJcbiAgICAgICAgICBmaWx0ZXJPcHRpb249e3RoaXMucHJvcHMuZmlsdGVyT3B0aW9ufVxyXG4gICAgICAgICAgZml4ZWRPcHRpb25zPXt0aGlzLnByb3BzLmZpeGVkT3B0aW9uc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e3RoaXMuX3NlbGVjdEl0ZW19XHJcbiAgICAgICAgICBjdXN0b21MaXN0Q29tcG9uZW50PXt0aGlzLnByb3BzLkRyb3BEb3duUmVuZGVyQ29tcG9uZW50fVxyXG4gICAgICAgICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wZG93bkhlYWRlckNvbXBvbmVudH1cclxuICAgICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXt0aGlzLnByb3BzLkRyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbil9XHJcbiAgICAgICAgICBzZWFyY2hhYmxlPXt0aGlzLnByb3BzLnNlYXJjaGFibGV9XHJcbiAgICAgICAgICBzaG93T3B0aW9uc1doZW5FbXB0eVxyXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRHJvcGRvd25XcmFwcGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgY29uc3QgaGFzVmFsdWUgPSBzZWxlY3RlZC5sZW5ndGg7XHJcbiAgICBjb25zdCBkaXNwbGF5T3B0aW9uID0gQWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0Zvcih0aGlzLnByb3BzLmRpc3BsYXlPcHRpb24pO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0UHJvcHMgPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWRcclxuICAgICAgfSksXHJcbiAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxyXG4gICAgICBvbkNsaWNrOiB0aGlzLl9zaG93VHlwZWFoZWFkLFxyXG4gICAgICBvbkZvY3VzOiB0aGlzLl9zaG93UG9wb3ZlcixcclxuICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaXNFcnJvcixcclxuICAgICAgaW5wdXRUaGVtZTogdGhpcy5wcm9wcy5pbnB1dFRoZW1lXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zZWxlY3RvclwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxyXG4gICAgICAgICAgey8qIHRoaXMgcGFydCBpcyB1c2VkIHRvIGRpc3BsYXkgdGhlIGxhYmVsICovfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubXVsdGlTZWxlY3QgPyAoXHJcbiAgICAgICAgICAgIDxDaGlja2xldGVkSW5wdXRcclxuICAgICAgICAgICAgICB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cclxuICAgICAgICAgICAgICByZW1vdmVJdGVtPXt0aGlzLl9yZW1vdmVJdGVtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFN0eWxlZERyb3Bkb3duU2VsZWN0IHsuLi5kcm9wZG93blNlbGVjdFByb3BzfT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25TZWxlY3RWYWx1ZVxyXG4gICAgICAgICAgICAgICAgaGFzUGxhY2Vob2xkZXI9eyFoYXNWYWx1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duX192YWx1ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2hhc1ZhbHVlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8dGhpcy5wcm9wcy5Ecm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRbMF19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RWYWx1ZT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcmFzYWJsZSAmJiBoYXNWYWx1ZSA/IChcclxuICAgICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdEVyYXNlPlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXt0aGlzLl9vbkVyYXNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blNlbGVjdEVyYXNlPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duU2VsZWN0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBidWlsdCB0aGUgbGlzdCAqL31cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWQgJiYgdGhpcy5fcmVuZGVyRHJvcGRvd24oKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuc1RvQ2xpY2tPdXRzaWRlKEl0ZW1TZWxlY3Rvcik7XHJcbiJdfQ==