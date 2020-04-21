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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29sdW1uLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJUb3BSb3ciLCJzdHlsZWQiLCJkaXYiLCJMYXllckNvbHVtbkNvbmZpZyIsInByb3BzIiwiY29sdW1uUGFpcnMiLCJmaWVsZFBhaXJzIiwibWFwIiwiZnAiLCJuYW1lIiwiZGVmYXVsdE5hbWUiLCJ0eXBlIiwicGFpciIsImtleSIsInZhbHVlIiwiYXNzaWduQ29sdW1uUGFpcnMiLCJhc3NpZ25Db2x1bW4iLCJjb2x1bW5zIiwidXBkYXRlTGF5ZXJDb25maWciLCJjb2x1bW5MYWJlbHMiLCJmaWVsZHMiLCJmaWVsZFBhaXJzU2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwidmFsIiwiX3VwZGF0ZUNvbHVtbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiYW55IiwiZnVuYyIsIkNvbHVtblJvdyIsIkNvbHVtbk5hbWUiLCJDb2x1bW5TZWxlY3QiLCJDb2x1bW5TZWxlY3RvciIsImNvbHVtbiIsImxhYmVsIiwiYWxsRmllbGRzIiwib25TZWxlY3QiLCJvcHRpb25hbCIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsNkJBQU9DLEdBQVYsbUJBQVo7O0lBS3FCQyxpQjs7Ozs7Ozs7Ozs7Ozs7O29HQVlMLFVBQUFDLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNDLFdBQVY7QUFBQSxLO21HQUNOLFVBQUFELEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNFLFVBQVY7QUFBQSxLOzJHQUNHLDhCQUNuQixNQUFLRCxXQURjLEVBRW5C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bi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5cclxuaW1wb3J0IHtQYW5lbExhYmVsLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBUb3BSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJDb2x1bW5Db25maWcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXHJcbiAgICBhc3NpZ25Db2x1bW5QYWlyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGFzc2lnbkNvbHVtbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHVwZGF0ZUxheWVyQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY29sdW1uUGFpcnM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBmaWVsZFBhaXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICAgIGNvbHVtbkxhYmVsczogUHJvcFR5cGVzLm9iamVjdFxyXG4gIH07XHJcblxyXG4gIGNvbHVtblBhaXJzID0gcHJvcHMgPT4gcHJvcHMuY29sdW1uUGFpcnM7XHJcbiAgZmllbGRQYWlycyA9IHByb3BzID0+IHByb3BzLmZpZWxkUGFpcnM7XHJcbiAgZmllbGRQYWlyc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICB0aGlzLmNvbHVtblBhaXJzLFxyXG4gICAgdGhpcy5maWVsZFBhaXJzLFxyXG4gICAgKGNvbHVtblBhaXJzLCBmaWVsZFBhaXJzKSA9PlxyXG4gICAgICBjb2x1bW5QYWlyc1xyXG4gICAgICAgID8gZmllbGRQYWlycy5tYXAoZnAgPT4gKHtcclxuICAgICAgICAgICAgbmFtZTogZnAuZGVmYXVsdE5hbWUsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwb2ludCcsXHJcbiAgICAgICAgICAgIHBhaXI6IGZwLnBhaXJcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIDogbnVsbFxyXG4gICk7XHJcblxyXG4gIF91cGRhdGVDb2x1bW4oa2V5LCB2YWx1ZSkge1xyXG4gICAgY29uc3Qge2NvbHVtblBhaXJzLCBhc3NpZ25Db2x1bW5QYWlycywgYXNzaWduQ29sdW1ufSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgY29sdW1ucyA9XHJcbiAgICAgIHZhbHVlICYmIHZhbHVlLnBhaXIgJiYgY29sdW1uUGFpcnNcclxuICAgICAgICA/IGFzc2lnbkNvbHVtblBhaXJzKGtleSwgdmFsdWUucGFpcilcclxuICAgICAgICA6IGFzc2lnbkNvbHVtbihrZXksIHZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUxheWVyQ29uZmlnKHtjb2x1bW5zfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Y29sdW1ucywgY29sdW1uTGFiZWxzLCBmaWVsZHN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBmaWVsZFBhaXJzID0gdGhpcy5maWVsZFBhaXJzU2VsZWN0b3IodGhpcy5wcm9wcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5cIj5cclxuICAgICAgICAgICAgPFRvcFJvdz5cclxuICAgICAgICAgICAgICA8UGFuZWxMYWJlbD5Db2x1bW5zPC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgIDxQYW5lbExhYmVsPlJlcXVpcmVkKjwvUGFuZWxMYWJlbD5cclxuICAgICAgICAgICAgPC9Ub3BSb3c+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjb2x1bW5zKS5tYXAoa2V5ID0+IChcclxuICAgICAgICAgICAgICA8Q29sdW1uU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1uc1trZXldfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9eyhjb2x1bW5MYWJlbHMgJiYgY29sdW1uTGFiZWxzW2tleV0pIHx8IGtleX1cclxuICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgYWxsRmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbCA9PiB0aGlzLl91cGRhdGVDb2x1bW4oa2V5LCB2YWwpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBDb2x1bW5Sb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDb2x1bW5OYW1lID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzAlO1xyXG5gO1xyXG5jb25zdCBDb2x1bW5TZWxlY3QgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA3MCU7XHJcbmA7XHJcblxyXG5jb25zdCBDb2x1bW5TZWxlY3RvciA9ICh7Y29sdW1uLCBsYWJlbCwgYWxsRmllbGRzLCBvblNlbGVjdCwgZmllbGRQYWlyc30pID0+IChcclxuICA8Q29sdW1uUm93IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19zZWxlY3RvclwiPlxyXG4gICAgPENvbHVtbk5hbWUgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX25hbWVcIj5cclxuICAgICAgPFBhbmVsTGFiZWw+e2xhYmVsfTwvUGFuZWxMYWJlbD5cclxuICAgICAgeyFjb2x1bW4ub3B0aW9uYWwgPyA8UGFuZWxMYWJlbD57YCAgKmB9PC9QYW5lbExhYmVsPiA6IG51bGx9XHJcbiAgICA8L0NvbHVtbk5hbWU+XHJcbiAgICA8Q29sdW1uU2VsZWN0IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19zZWxlY3RcIj5cclxuICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICBzdWdnZXN0ZWQ9e2ZpZWxkUGFpcnN9XHJcbiAgICAgICAgZXJyb3I9eyFjb2x1bW4ub3B0aW9uYWwgJiYgIWNvbHVtbi52YWx1ZX1cclxuICAgICAgICBmaWVsZHM9e2FsbEZpZWxkc31cclxuICAgICAgICB2YWx1ZT17Y29sdW1uLnZhbHVlfVxyXG4gICAgICAgIGVyYXNhYmxlPXtCb29sZWFuKGNvbHVtbi5vcHRpb25hbCl9XHJcbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxyXG4gICAgICAvPlxyXG4gICAgPC9Db2x1bW5TZWxlY3Q+XHJcbiAgPC9Db2x1bW5Sb3c+XHJcbik7XHJcbiJdfQ==