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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiU3R5bGVkVG9rZW4iLCJzdHlsZWQiLCJkaXYiLCJGaWVsZExpc3RJdGVtRmFjdG9yeSIsInNob3dUb2tlbiIsIkZpZWxkTGlzdEl0ZW0iLCJ2YWx1ZSIsImRpc3BsYXlPcHRpb24iLCJ0eXBlIiwiY2xhc3NMaXN0IiwibGlzdEl0ZW1BbmNob3IiLCJTdWdnZXN0ZWRGaWVsZEhlYWRlciIsIkZpZWxkVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJzdHJpbmciLCJzaGFwZSIsImZvcm1hdCIsImlkIiwidGFibGVGaWVsZEluZGV4IiwibnVtYmVyIiwiRmllbGRTZWxlY3RvciIsInByb3BzIiwiZmllbGRzIiwiZmlsdGVyRmllbGRUeXBlcyIsImZpZWxkc1NlbGVjdG9yIiwidmFsdWVTZWxlY3RvciIsImZpbHRlciIsImYiLCJBcnJheSIsImlzQXJyYXkiLCJpbmNsdWRlcyIsImZpbHRlckZpZWxkVHlwZXNTZWxlY3RvciIsImZpbHRlcnMiLCJzaG93VG9rZW5TZWxlY3RvciIsImNsb3NlT25TZWxlY3QiLCJzdWdnZXN0ZWQiLCJpbnB1dFRoZW1lIiwiZXJyb3IiLCJzZWxlY3RlZEl0ZW1zU2VsZWN0b3IiLCJlcmFzYWJsZSIsImZpZWxkT3B0aW9uc1NlbGVjdG9yIiwibXVsdGlTZWxlY3QiLCJwbGFjZWhvbGRlciIsInBsYWNlbWVudCIsIm9uU2VsZWN0IiwiZmllbGRMaXN0SXRlbVNlbGVjdG9yIiwiQ29tcG9uZW50IiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7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QSxXQUFXLEVBQUUsS0FQTztBQVFwQlAsRUFBQUEsYUFBYSxFQUFFLElBUks7QUFTcEJoQyxFQUFBQSxTQUFTLEVBQUUsSUFUUztBQVVwQndDLEVBQUFBLFdBQVcsRUFBRTtBQVZPLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuXHJcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnLi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5pbXBvcnQgRmllbGRUb2tlbiBmcm9tICcuLi9jb21tb24vZmllbGQtdG9rZW4nO1xyXG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnLi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xyXG5cclxuY29uc3QgZGVmYXVsdERpc3BsYXlPcHRpb24gPSBkID0+IGQubmFtZTtcclxuXHJcbmNvbnN0IFN0eWxlZFRva2VuID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDRweCAwIDA7XHJcbmA7XHJcbi8vIGN1c3RvbSBsaXN0IEl0ZW1cclxuZXhwb3J0IGNvbnN0IEZpZWxkTGlzdEl0ZW1GYWN0b3J5ID0gKHNob3dUb2tlbiA9IHRydWUpID0+IHtcclxuICBjb25zdCBGaWVsZExpc3RJdGVtID0gKHt2YWx1ZSwgZGlzcGxheU9wdGlvbiA9IGRlZmF1bHREaXNwbGF5T3B0aW9ufSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Nob3dUb2tlbiA/IChcclxuICAgICAgICA8U3R5bGVkVG9rZW4+XHJcbiAgICAgICAgICA8RmllbGRUb2tlbiB0eXBlPXt2YWx1ZS50eXBlfSAvPlxyXG4gICAgICAgIDwvU3R5bGVkVG9rZW4+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0SXRlbUFuY2hvcn0+e2Rpc3BsYXlPcHRpb24odmFsdWUpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiBGaWVsZExpc3RJdGVtO1xyXG59O1xyXG5cclxuY29uc3QgU3VnZ2VzdGVkRmllbGRIZWFkZXIgPSAoKSA9PiA8ZGl2PlN1Z2dlc3RlZCBGaWVsZDwvZGl2PjtcclxuXHJcbmNvbnN0IEZpZWxkVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG4gIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRhYmxlRmllbGRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHR5cGU6IFByb3BUeXBlcy5udW1iZXJcclxuICB9KVxyXG5dKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLmFycmF5T2YoRmllbGRUeXBlKV0pLFxyXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogRmllbGRUeXBlLFxyXG4gICAgZmlsdGVyRmllbGRUeXBlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbRmllbGRUeXBlLCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXHJcbiAgICBpbnB1dFRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dUb2tlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzdWdnZXN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGVyYXNhYmxlOiB0cnVlLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgZmllbGRzOiBbXSxcclxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcclxuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXHJcbiAgICBzaG93VG9rZW46IHRydWUsXHJcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBhIGZpZWxkJ1xyXG4gIH07XHJcblxyXG4gIGZpZWxkc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xyXG4gIHZhbHVlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy52YWx1ZTtcclxuICBmaWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJGaWVsZFR5cGVzO1xyXG4gIHNob3dUb2tlblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuc2hvd1Rva2VuO1xyXG5cclxuICBzZWxlY3RlZEl0ZW1zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmZpZWxkc1NlbGVjdG9yLCB0aGlzLnZhbHVlU2VsZWN0b3IsIChmaWVsZHMsIHZhbHVlKSA9PlxyXG4gICAgZmllbGRzLmZpbHRlcihmID0+IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSkuaW5jbHVkZXMoZGVmYXVsdERpc3BsYXlPcHRpb24oZikpKVxyXG4gICk7XHJcblxyXG4gIGZpZWxkT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICB0aGlzLmZpZWxkc1NlbGVjdG9yLFxyXG4gICAgdGhpcy5maWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IsXHJcbiAgICAoZmllbGRzLCBmaWx0ZXJGaWVsZFR5cGVzKSA9PiB7XHJcbiAgICAgIGlmICghZmlsdGVyRmllbGRUeXBlcykge1xyXG4gICAgICAgIHJldHVybiBmaWVsZHM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZmlsdGVycyA9IEFycmF5LmlzQXJyYXkoZmlsdGVyRmllbGRUeXBlcykgPyBmaWx0ZXJGaWVsZFR5cGVzIDogW2ZpbHRlckZpZWxkVHlwZXNdO1xyXG4gICAgICByZXR1cm4gZmllbGRzLmZpbHRlcihmID0+IGZpbHRlcnMuaW5jbHVkZXMoZi50eXBlKSk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgZmllbGRMaXN0SXRlbVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5zaG93VG9rZW5TZWxlY3RvciwgRmllbGRMaXN0SXRlbUZhY3RvcnkpO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXNlbGVjdG9yXCI+XHJcbiAgICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2QgPT4gZH1cclxuICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e3RoaXMucHJvcHMuY2xvc2VPblNlbGVjdH1cclxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e2RlZmF1bHREaXNwbGF5T3B0aW9ufVxyXG4gICAgICAgICAgZmlsdGVyT3B0aW9uPXsnaWQnfVxyXG4gICAgICAgICAgZml4ZWRPcHRpb25zPXt0aGlzLnByb3BzLnN1Z2dlc3RlZH1cclxuICAgICAgICAgIGlucHV0VGhlbWU9e3RoaXMucHJvcHMuaW5wdXRUaGVtZX1cclxuICAgICAgICAgIGlzRXJyb3I9e3RoaXMucHJvcHMuZXJyb3J9XHJcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0aGlzLnNlbGVjdGVkSXRlbXNTZWxlY3Rvcih0aGlzLnByb3BzKX1cclxuICAgICAgICAgIGVyYXNhYmxlPXt0aGlzLnByb3BzLmVyYXNhYmxlfVxyXG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5maWVsZE9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKX1cclxuICAgICAgICAgIG11bHRpU2VsZWN0PXt0aGlzLnByb3BzLm11bHRpU2VsZWN0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMucHJvcHMucGxhY2VtZW50fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3R9XHJcbiAgICAgICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50PXt0aGlzLmZpZWxkTGlzdEl0ZW1TZWxlY3Rvcih0aGlzLnByb3BzKX1cclxuICAgICAgICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3RlZCA/IFN1Z2dlc3RlZEZpZWxkSGVhZGVyIDogbnVsbH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==