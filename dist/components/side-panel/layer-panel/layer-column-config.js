"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _reselect = require("reselect");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 70%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 30%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-bottom: 8px;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TopRow = _styledComponents["default"].div(_templateObject());

var LayerColumnConfig = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(LayerColumnConfig, _Component);

  var _super = _createSuper(LayerColumnConfig);

  function LayerColumnConfig() {
    var _this;

    (0, _classCallCheck2["default"])(this, LayerColumnConfig);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columnPairs", function (props) {
      return props.columnPairs;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldPairs", function (props) {
      return props.fieldPairs;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldPairsSelector", (0, _reselect.createSelector)(_this.columnPairs, _this.fieldPairs, function (columnPairs, fieldPairs) {
      return columnPairs ? fieldPairs.map(function (fp) {
        return {
          name: fp.defaultName,
          type: 'point',
          pair: fp.pair
        };
      }) : null;
    }));
    return _this;
  }

  (0, _createClass2["default"])(LayerColumnConfig, [{
    key: "_updateColumn",
    value: function _updateColumn(key, value) {
      var _this$props = this.props,
          columnPairs = _this$props.columnPairs,
          assignColumnPairs = _this$props.assignColumnPairs,
          assignColumn = _this$props.assignColumn;
      var columns = value && value.pair && columnPairs ? assignColumnPairs(key, value.pair) : assignColumn(key, value);
      this.props.updateLayerConfig({
        columns: columns
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          columns = _this$props2.columns,
          columnLabels = _this$props2.columnLabels,
          fields = _this$props2.fields;
      var fieldPairs = this.fieldPairsSelector(this.props);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "layer-config__column"
      }, /*#__PURE__*/_react["default"].createElement(TopRow, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "Columns"), /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "Required*")), Object.keys(columns).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement(ColumnSelector, {
          column: columns[key],
          label: columnLabels && columnLabels[key] || key,
          key: key,
          allFields: fields,
          fieldPairs: fieldPairs,
          onSelect: function onSelect(val) {
            return _this2._updateColumn(key, val);
          }
        });
      }))));
    }
  }]);
  return LayerColumnConfig;
}(_react.Component);

exports["default"] = LayerColumnConfig;
(0, _defineProperty2["default"])(LayerColumnConfig, "propTypes", {
  columns: _propTypes["default"].object.isRequired,
  fields: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  assignColumnPairs: _propTypes["default"].func.isRequired,
  assignColumn: _propTypes["default"].func.isRequired,
  updateLayerConfig: _propTypes["default"].func.isRequired,
  columnPairs: _propTypes["default"].object,
  fieldPairs: _propTypes["default"].arrayOf(_propTypes["default"].any),
  columnLabels: _propTypes["default"].object
});

var ColumnRow = _styledComponents["default"].div(_templateObject2());

var ColumnName = _styledComponents["default"].div(_templateObject3());

var ColumnSelect = _styledComponents["default"].div(_templateObject4());

var ColumnSelector = function ColumnSelector(_ref) {
  var column = _ref.column,
      label = _ref.label,
      allFields = _ref.allFields,
      onSelect = _ref.onSelect,
      fieldPairs = _ref.fieldPairs;
  return /*#__PURE__*/_react["default"].createElement(ColumnRow, {
    className: "layer-config__column__selector"
  }, /*#__PURE__*/_react["default"].createElement(ColumnName, {
    className: "layer-config__column__name"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, label), !column.optional ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "  *") : null), /*#__PURE__*/_react["default"].createElement(ColumnSelect, {
    className: "layer-config__column__select"
  }, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
    suggested: fieldPairs,
    error: !column.optional && !column.value,
    fields: allFields,
    value: column.value,
    erasable: Boolean(column.optional),
    onSelect: onSelect
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29sdW1uLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJUb3BSb3ciLCJzdHlsZWQiLCJkaXYiLCJMYXllckNvbHVtbkNvbmZpZyIsInByb3BzIiwiY29sdW1uUGFpcnMiLCJmaWVsZFBhaXJzIiwibWFwIiwiZnAiLCJuYW1lIiwiZGVmYXVsdE5hbWUiLCJ0eXBlIiwicGFpciIsImtleSIsInZhbHVlIiwiYXNzaWduQ29sdW1uUGFpcnMiLCJhc3NpZ25Db2x1bW4iLCJjb2x1bW5zIiwidXBkYXRlTGF5ZXJDb25maWciLCJjb2x1bW5MYWJlbHMiLCJmaWVsZHMiLCJmaWVsZFBhaXJzU2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwidmFsIiwiX3VwZGF0ZUNvbHVtbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiYW55IiwiZnVuYyIsIkNvbHVtblJvdyIsIkNvbHVtbk5hbWUiLCJDb2x1bW5TZWxlY3QiLCJDb2x1bW5TZWxlY3RvciIsImNvbHVtbiIsImxhYmVsIiwiYWxsRmllbGRzIiwib25TZWxlY3QiLCJvcHRpb25hbCIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsNkJBQU9DLEdBQVYsbUJBQVo7O0lBS3FCQyxpQjs7Ozs7Ozs7Ozs7Ozs7O29HQVlMLFVBQUFDLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNDLFdBQVY7QUFBQSxLO21HQUNOLFVBQUFELEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNFLFVBQVY7QUFBQSxLOzJHQUNHLDhCQUNuQixNQUFLRCxXQURjLEVBRW5C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bi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IHtQYW5lbExhYmVsLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRvcFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyQ29sdW1uQ29uZmlnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgIGFzc2lnbkNvbHVtblBhaXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFzc2lnbkNvbHVtbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVMYXllckNvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5QYWlyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWVsZFBhaXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBjb2x1bW5MYWJlbHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBjb2x1bW5QYWlycyA9IHByb3BzID0+IHByb3BzLmNvbHVtblBhaXJzO1xuICBmaWVsZFBhaXJzID0gcHJvcHMgPT4gcHJvcHMuZmllbGRQYWlycztcbiAgZmllbGRQYWlyc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5jb2x1bW5QYWlycyxcbiAgICB0aGlzLmZpZWxkUGFpcnMsXG4gICAgKGNvbHVtblBhaXJzLCBmaWVsZFBhaXJzKSA9PlxuICAgICAgY29sdW1uUGFpcnNcbiAgICAgICAgPyBmaWVsZFBhaXJzLm1hcChmcCA9PiAoe1xuICAgICAgICAgICAgbmFtZTogZnAuZGVmYXVsdE5hbWUsXG4gICAgICAgICAgICB0eXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgcGFpcjogZnAucGFpclxuICAgICAgICAgIH0pKVxuICAgICAgICA6IG51bGxcbiAgKTtcblxuICBfdXBkYXRlQ29sdW1uKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCB7Y29sdW1uUGFpcnMsIGFzc2lnbkNvbHVtblBhaXJzLCBhc3NpZ25Db2x1bW59ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNvbHVtbnMgPVxuICAgICAgdmFsdWUgJiYgdmFsdWUucGFpciAmJiBjb2x1bW5QYWlyc1xuICAgICAgICA/IGFzc2lnbkNvbHVtblBhaXJzKGtleSwgdmFsdWUucGFpcilcbiAgICAgICAgOiBhc3NpZ25Db2x1bW4oa2V5LCB2YWx1ZSk7XG5cbiAgICB0aGlzLnByb3BzLnVwZGF0ZUxheWVyQ29uZmlnKHtjb2x1bW5zfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NvbHVtbnMsIGNvbHVtbkxhYmVscywgZmllbGRzfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBmaWVsZFBhaXJzID0gdGhpcy5maWVsZFBhaXJzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX2NvbHVtblwiPlxuICAgICAgICAgICAgPFRvcFJvdz5cbiAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+Q29sdW1uczwvUGFuZWxMYWJlbD5cbiAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+UmVxdWlyZWQqPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgPC9Ub3BSb3c+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoY29sdW1ucykubWFwKGtleSA9PiAoXG4gICAgICAgICAgICAgIDxDb2x1bW5TZWxlY3RvclxuICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1uc1trZXldfVxuICAgICAgICAgICAgICAgIGxhYmVsPXsoY29sdW1uTGFiZWxzICYmIGNvbHVtbkxhYmVsc1trZXldKSB8fCBrZXl9XG4gICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgYWxsRmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgZmllbGRQYWlycz17ZmllbGRQYWlyc31cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dmFsID0+IHRoaXMuX3VwZGF0ZUNvbHVtbihrZXksIHZhbCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBDb2x1bW5Sb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDb2x1bW5OYW1lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMwJTtcbmA7XG5jb25zdCBDb2x1bW5TZWxlY3QgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuYDtcblxuY29uc3QgQ29sdW1uU2VsZWN0b3IgPSAoe2NvbHVtbiwgbGFiZWwsIGFsbEZpZWxkcywgb25TZWxlY3QsIGZpZWxkUGFpcnN9KSA9PiAoXG4gIDxDb2x1bW5Sb3cgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX3NlbGVjdG9yXCI+XG4gICAgPENvbHVtbk5hbWUgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX25hbWVcIj5cbiAgICAgIDxQYW5lbExhYmVsPntsYWJlbH08L1BhbmVsTGFiZWw+XG4gICAgICB7IWNvbHVtbi5vcHRpb25hbCA/IDxQYW5lbExhYmVsPntgICAqYH08L1BhbmVsTGFiZWw+IDogbnVsbH1cbiAgICA8L0NvbHVtbk5hbWU+XG4gICAgPENvbHVtblNlbGVjdCBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX2NvbHVtbl9fc2VsZWN0XCI+XG4gICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICBzdWdnZXN0ZWQ9e2ZpZWxkUGFpcnN9XG4gICAgICAgIGVycm9yPXshY29sdW1uLm9wdGlvbmFsICYmICFjb2x1bW4udmFsdWV9XG4gICAgICAgIGZpZWxkcz17YWxsRmllbGRzfVxuICAgICAgICB2YWx1ZT17Y29sdW1uLnZhbHVlfVxuICAgICAgICBlcmFzYWJsZT17Qm9vbGVhbihjb2x1bW4ub3B0aW9uYWwpfVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAvPlxuICAgIDwvQ29sdW1uU2VsZWN0PlxuICA8L0NvbHVtblJvdz5cbik7XG4iXX0=