"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FieldListItemFactory = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("./item-selector/item-selector"));

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

var _dropdownList = require("./item-selector/dropdown-list");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin: 0 4px 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.name;
};

var StyledToken = _styledComponents["default"].div(_templateObject()); // custom list Item


var FieldListItemFactory = function FieldListItemFactory() {
  var showToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var FieldListItem = function FieldListItem(_ref) {
    var value = _ref.value,
        _ref$displayOption = _ref.displayOption,
        displayOption = _ref$displayOption === void 0 ? defaultDisplayOption : _ref$displayOption;
    return /*#__PURE__*/_react["default"].createElement("div", null, showToken ? /*#__PURE__*/_react["default"].createElement(StyledToken, null, /*#__PURE__*/_react["default"].createElement(_fieldToken["default"], {
      type: value.type
    })) : null, /*#__PURE__*/_react["default"].createElement("span", {
      className: _dropdownList.classList.listItemAnchor
    }, displayOption(value)));
  };

  return FieldListItem;
};

exports.FieldListItemFactory = FieldListItemFactory;

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Suggested Field");
};

var FieldType = _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string, _propTypes["default"].shape({
  format: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  tableFieldIndex: _propTypes["default"].number,
  type: _propTypes["default"].number
})]);

var FieldSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FieldSelector, _Component);

  var _super = _createSuper(FieldSelector);

  function FieldSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, FieldSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
      return props.fields;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "valueSelector", function (props) {
      return props.value;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterFieldTypesSelector", function (props) {
      return props.filterFieldTypes;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showTokenSelector", function (props) {
      return props.showToken;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
      return fields.filter(function (f) {
        return (Array.isArray(value) ? value : [value]).includes(defaultDisplayOption(f));
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldOptionsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
      if (!filterFieldTypes) {
        return fields;
      }

      var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
      return fields.filter(function (f) {
        return filters.includes(f.type);
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldListItemSelector", (0, _reselect.createSelector)(_this.showTokenSelector, FieldListItemFactory));
    return _this;
  }

  (0, _createClass2["default"])(FieldSelector, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "field-selector"
      }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
        getOptionValue: function getOptionValue(d) {
          return d;
        },
        closeOnSelect: this.props.closeOnSelect,
        displayOption: defaultDisplayOption,
        filterOption: 'id',
        fixedOptions: this.props.suggested,
        inputTheme: this.props.inputTheme,
        isError: this.props.error,
        selectedItems: this.selectedItemsSelector(this.props),
        erasable: this.props.erasable,
        options: this.fieldOptionsSelector(this.props),
        multiSelect: this.props.multiSelect,
        placeholder: this.props.placeholder,
        placement: this.props.placement,
        onChange: this.props.onSelect,
        DropDownLineItemRenderComponent: this.fieldListItemSelector(this.props),
        DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null
      }));
    }
  }]);
  return FieldSelector;
}(_react.Component);

exports["default"] = FieldSelector;
(0, _defineProperty2["default"])(FieldSelector, "propTypes", {
  fields: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].arrayOf(FieldType)]),
  onSelect: _propTypes["default"].func.isRequired,
  placement: _propTypes["default"].string,
  value: FieldType,
  filterFieldTypes: _propTypes["default"].oneOfType([FieldType, _propTypes["default"].arrayOf(FieldType)]),
  inputTheme: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  erasable: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  closeOnSelect: _propTypes["default"].bool,
  showToken: _propTypes["default"].bool,
  suggested: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(FieldSelector, "defaultProps", {
  erasable: true,
  error: false,
  fields: [],
  onSelect: function onSelect() {},
  placement: 'bottom',
  value: null,
  multiSelect: false,
  closeOnSelect: true,
  showToken: true,
  placeholder: 'Select a field'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiU3R5bGVkVG9rZW4iLCJzdHlsZWQiLCJkaXYiLCJGaWVsZExpc3RJdGVtRmFjdG9yeSIsInNob3dUb2tlbiIsIkZpZWxkTGlzdEl0ZW0iLCJ2YWx1ZSIsImRpc3BsYXlPcHRpb24iLCJ0eXBlIiwiY2xhc3NMaXN0IiwibGlzdEl0ZW1BbmNob3IiLCJTdWdnZXN0ZWRGaWVsZEhlYWRlciIsIkZpZWxkVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJzdHJpbmciLCJzaGFwZSIsImZvcm1hdCIsImlkIiwidGFibGVGaWVsZEluZGV4IiwibnVtYmVyIiwiRmllbGRTZWxlY3RvciIsInByb3BzIiwiZmllbGRzIiwiZmlsdGVyRmllbGRUeXBlcyIsImZpZWxkc1NlbGVjdG9yIiwidmFsdWVTZWxlY3RvciIsImZpbHRlciIsImYiLCJBcnJheSIsImlzQXJyYXkiLCJpbmNsdWRlcyIsImZpbHRlckZpZWxkVHlwZXNTZWxlY3RvciIsImZpbHRlcnMiLCJzaG93VG9rZW5TZWxlY3RvciIsImNsb3NlT25TZWxlY3QiLCJzdWdnZXN0ZWQiLCJpbnB1dFRoZW1lIiwiZXJyb3IiLCJzZWxlY3RlZEl0ZW1zU2VsZWN0b3IiLCJlcmFzYWJsZSIsImZpZWxkT3B0aW9uc1NlbGVjdG9yIiwibXVsdGlTZWxlY3QiLCJwbGFjZWhvbGRlciIsInBsYWNlbWVudCIsIm9uU2VsZWN0IiwiZmllbGRMaXN0SXRlbVNlbGVjdG9yIiwiQ29tcG9uZW50IiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7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QSxXQUFXLEVBQUUsS0FQTztBQVFwQlAsRUFBQUEsYUFBYSxFQUFFLElBUks7QUFTcEJoQyxFQUFBQSxTQUFTLEVBQUUsSUFUUztBQVVwQndDLEVBQUFBLFdBQVcsRUFBRTtBQVZPLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICcuL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQgRmllbGRUb2tlbiBmcm9tICcuLi9jb21tb24vZmllbGQtdG9rZW4nO1xuaW1wb3J0IHtjbGFzc0xpc3R9IGZyb20gJy4vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcblxuY29uc3QgZGVmYXVsdERpc3BsYXlPcHRpb24gPSBkID0+IGQubmFtZTtcblxuY29uc3QgU3R5bGVkVG9rZW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCA0cHggMCAwO1xuYDtcbi8vIGN1c3RvbSBsaXN0IEl0ZW1cbmV4cG9ydCBjb25zdCBGaWVsZExpc3RJdGVtRmFjdG9yeSA9IChzaG93VG9rZW4gPSB0cnVlKSA9PiB7XG4gIGNvbnN0IEZpZWxkTGlzdEl0ZW0gPSAoe3ZhbHVlLCBkaXNwbGF5T3B0aW9uID0gZGVmYXVsdERpc3BsYXlPcHRpb259KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIHtzaG93VG9rZW4gPyAoXG4gICAgICAgIDxTdHlsZWRUb2tlbj5cbiAgICAgICAgICA8RmllbGRUb2tlbiB0eXBlPXt2YWx1ZS50eXBlfSAvPlxuICAgICAgICA8L1N0eWxlZFRva2VuPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0SXRlbUFuY2hvcn0+e2Rpc3BsYXlPcHRpb24odmFsdWUpfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gRmllbGRMaXN0SXRlbTtcbn07XG5cbmNvbnN0IFN1Z2dlc3RlZEZpZWxkSGVhZGVyID0gKCkgPT4gPGRpdj5TdWdnZXN0ZWQgRmllbGQ8L2Rpdj47XG5cbmNvbnN0IEZpZWxkVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsZUZpZWxkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdHlwZTogUHJvcFR5cGVzLm51bWJlclxuICB9KVxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpZWxkczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBGaWVsZFR5cGUsXG4gICAgZmlsdGVyRmllbGRUeXBlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbRmllbGRUeXBlLCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93VG9rZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHN1Z2dlc3RlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVyYXNhYmxlOiB0cnVlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBmaWVsZHM6IFtdLFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgIHNob3dUb2tlbjogdHJ1ZSxcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBhIGZpZWxkJ1xuICB9O1xuXG4gIGZpZWxkc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xuICB2YWx1ZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMudmFsdWU7XG4gIGZpbHRlckZpZWxkVHlwZXNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpbHRlckZpZWxkVHlwZXM7XG4gIHNob3dUb2tlblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuc2hvd1Rva2VuO1xuXG4gIHNlbGVjdGVkSXRlbXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRzU2VsZWN0b3IsIHRoaXMudmFsdWVTZWxlY3RvciwgKGZpZWxkcywgdmFsdWUpID0+XG4gICAgZmllbGRzLmZpbHRlcihmID0+IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSkuaW5jbHVkZXMoZGVmYXVsdERpc3BsYXlPcHRpb24oZikpKVxuICApO1xuXG4gIGZpZWxkT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5maWVsZHNTZWxlY3RvcixcbiAgICB0aGlzLmZpbHRlckZpZWxkVHlwZXNTZWxlY3RvcixcbiAgICAoZmllbGRzLCBmaWx0ZXJGaWVsZFR5cGVzKSA9PiB7XG4gICAgICBpZiAoIWZpbHRlckZpZWxkVHlwZXMpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbHRlcnMgPSBBcnJheS5pc0FycmF5KGZpbHRlckZpZWxkVHlwZXMpID8gZmlsdGVyRmllbGRUeXBlcyA6IFtmaWx0ZXJGaWVsZFR5cGVzXTtcbiAgICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKGYgPT4gZmlsdGVycy5pbmNsdWRlcyhmLnR5cGUpKTtcbiAgICB9XG4gICk7XG5cbiAgZmllbGRMaXN0SXRlbVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5zaG93VG9rZW5TZWxlY3RvciwgRmllbGRMaXN0SXRlbUZhY3RvcnkpO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1zZWxlY3RvclwiPlxuICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2QgPT4gZH1cbiAgICAgICAgICBjbG9zZU9uU2VsZWN0PXt0aGlzLnByb3BzLmNsb3NlT25TZWxlY3R9XG4gICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGVmYXVsdERpc3BsYXlPcHRpb259XG4gICAgICAgICAgZmlsdGVyT3B0aW9uPXsnaWQnfVxuICAgICAgICAgIGZpeGVkT3B0aW9ucz17dGhpcy5wcm9wcy5zdWdnZXN0ZWR9XG4gICAgICAgICAgaW5wdXRUaGVtZT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lfVxuICAgICAgICAgIGlzRXJyb3I9e3RoaXMucHJvcHMuZXJyb3J9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5zZWxlY3RlZEl0ZW1zU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgZXJhc2FibGU9e3RoaXMucHJvcHMuZXJhc2FibGV9XG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5maWVsZE9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICBtdWx0aVNlbGVjdD17dGhpcy5wcm9wcy5tdWx0aVNlbGVjdH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMucHJvcHMucGxhY2VtZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0fVxuICAgICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e3RoaXMuZmllbGRMaXN0SXRlbVNlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3RlZCA/IFN1Z2dlc3RlZEZpZWxkSGVhZGVyIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==