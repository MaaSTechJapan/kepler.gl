"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CellFactory = exports.FieldHeaderFactory = void 0;

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

var _reactVirtualized = require("react-virtualized");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _fieldToken = _interopRequireDefault(require("./field-token"));

var _icons = require("./icons");

var _dataUtils = require("../../utils/data-utils");

var _constants = require("../../constants");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-right: 0;\n  border-bottom: ", ";\n  color: ", ";\n  text-overflow: ellipsis;\n  height: 100%;\n  width: 100%;\n\n  span {\n    text-overflow: ellipsis;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  border-right: 0;\n  border-bottom: 0;\n  background: ", ";\n  color: ", ";\n  height: 100%;\n\n  .header-content {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .label-wrapper {\n    display: flex;\n    align-items: center;\n  }\n\n  .icon-wrapper {\n    margin-right: ", ";\n    height: 16px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  overflow-x: auto;\n\n  .ReactVirtualized__Grid:focus,\n  .ReactVirtualized__Grid:active {\n    outline: 0;\n  }\n  .ReactVirtualized__Grid__innerScrollContainer {\n    ", ";\n  }\n\n  .ReactVirtualized__Grid {\n    .column-0 .cell {\n      padding-left: ", "px;\n    }\n\n    .header-0 .header-cell {\n      padding-left: ", "px;\n    }\n\n    .cell {\n      overflow-y: auto;\n      overflow-x: hidden;\n      padding-right: ", "px;\n    }\n\n    .last {\n      .cell {\n        padding-right: ", "px;\n      }\n      .header-cell {\n        padding-right: ", "px;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DataGridWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.modalScrollBar;
}, function (props) {
  return props.theme.gridPaddingSide;
}, function (props) {
  return props.theme.gridPaddingSide;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.gridPaddingSide;
}, function (props) {
  return props.theme.gridPaddingSide;
});

var StyledFieldHeader = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.type === 'timestamp' ? '2px' : '0';
});

var FieldHeaderFactory = function FieldHeaderFactory() {
  var Header = function Header(_ref) {
    var className = _ref.className,
        value = _ref.value,
        type = _ref.type;
    return /*#__PURE__*/_react["default"].createElement(StyledFieldHeader, {
      className: className || '',
      type: type,
      title: value
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "field-header-content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "label-wrapper"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "icon-wrapper"
    }, type === 'timestamp' ? /*#__PURE__*/_react["default"].createElement(_icons.Clock, {
      height: "16px"
    }) : null), /*#__PURE__*/_react["default"].createElement("span", null, value)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "field-wrapper"
    }, /*#__PURE__*/_react["default"].createElement(_fieldToken["default"], {
      type: type
    }))));
  };

  Header.displayName = 'Header';
  return Header;
};

exports.FieldHeaderFactory = FieldHeaderFactory;

var StyledCell = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.panelBorderLT;
}, function (props) {
  return props.theme.labelColorLT;
});

var CellFactory = function CellFactory() {
  var Cell = function Cell(_ref2) {
    var className = _ref2.className,
        value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement(StyledCell, {
      className: className || '',
      title: value
    }, /*#__PURE__*/_react["default"].createElement("span", null, value));
  };

  Cell.displayName = 'Cell';
  return Cell;
};

exports.CellFactory = CellFactory;
DataGridFactory.deps = [FieldHeaderFactory, CellFactory];

function DataGridFactory(FieldHeader, Cell) {
  var DataGrid = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(DataGrid, _PureComponent);

    var _super = _createSuper(DataGrid);

    function DataGrid() {
      var _this;

      (0, _classCallCheck2["default"])(this, DataGrid);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columnsSelector", function (props) {
        return props.columns;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hasGeojson", (0, _reselect.createSelector)(_this.columnsSelector, function (columns) {
        return columns.some(function (c) {
          return c.type === _constants.ALL_FIELD_TYPES.geojson;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellRenderer", function (_ref3) {
        var _classnames;

        var columnIndex = _ref3.columnIndex,
            key = _ref3.key,
            rowIndex = _ref3.rowIndex,
            style = _ref3.style;
        var _this$props = _this.props,
            columns = _this$props.columns,
            rows = _this$props.rows;
        var isLast = columnIndex === columns.length - 1;
        var type = columns[columnIndex].type; // rowIndex -1 because data rows start rendering at index 1 and we normalize back using the -1 param

        var className = (0, _classnames2["default"])((_classnames = {
          last: isLast
        }, (0, _defineProperty2["default"])(_classnames, "header-".concat(columnIndex), rowIndex === 0), (0, _defineProperty2["default"])(_classnames, "row-".concat(rowIndex - 1, " column-").concat(columnIndex), rowIndex > 0), _classnames));
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: key,
          style: style,
          className: className
        }, rowIndex === 0 ? /*#__PURE__*/_react["default"].createElement(FieldHeader, {
          className: "header-cell ".concat(type),
          value: columns[columnIndex].name,
          type: type
        }) : /*#__PURE__*/_react["default"].createElement(Cell, {
          className: "cell ".concat(type),
          value: (0, _dataUtils.parseFieldValue)(rows[rowIndex - 1][columnIndex], type),
          type: type
        }));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowHeight", function (_ref4) {
        var index = _ref4.index;
        return index === 0 ? _this.props.theme.cellHeaderHeight : _this.hasGeojson(_this.props) ? _this.props.theme.extendCellHeight : _this.props.theme.cellHeight;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnWidth", function (_ref5) {
        var index = _ref5.index;
        var isGeojsonField = _this.props.columns[index].type === _constants.ALL_FIELD_TYPES.geojson;
        return isGeojsonField ? _this.props.theme.extendColumnWidth : _this.props.theme.columnWidth;
      });
      return _this;
    }

    (0, _createClass2["default"])(DataGrid, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            columns = _this$props2.columns,
            height = _this$props2.height,
            rows = _this$props2.rows,
            theme = _this$props2.theme,
            width = _this$props2.width;
        return /*#__PURE__*/_react["default"].createElement(DataGridWrapper, {
          className: "datagrid-wrapper"
        }, /*#__PURE__*/_react["default"].createElement(_reactVirtualized.MultiGrid, {
          cellRenderer: this._cellRenderer,
          columnWidth: this._columnWidth,
          columnCount: columns.length,
          fixedRowCount: 1,
          enableFixedRowScroll: true,
          width: width || theme.gridDefaultWidth,
          height: height || theme.gridDefaultHeight,
          rowHeight: this._rowHeight,
          rowCount: rows.length + 1,
          hideTopRightGridScrollbar: true,
          hideBottomLeftGridScrollbar: true
        }));
      }
    }]);
    return DataGrid;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(DataGrid, "propTypes", {
    theme: _propTypes["default"].object,
    columns: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
    height: _propTypes["default"].number.isRequired,
    rows: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].any)).isRequired,
    width: _propTypes["default"].number.isRequired
  });
  DataGrid.displayName = 'DataGrid'; // Wrapping the component using withTheme because we need to
  // access variables outside styled-components context

  return (0, _styledComponents.withTheme)(DataGrid);
}

var _default = DataGridFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kYXRhZ3JpZC5qcyJdLCJuYW1lcyI6WyJEYXRhR3JpZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibW9kYWxTY3JvbGxCYXIiLCJncmlkUGFkZGluZ1NpZGUiLCJjZWxsUGFkZGluZ1NpZGUiLCJTdHlsZWRGaWVsZEhlYWRlciIsInBhbmVsQmFja2dyb3VuZExUIiwidGl0bGVDb2xvckxUIiwidHlwZSIsIkZpZWxkSGVhZGVyRmFjdG9yeSIsIkhlYWRlciIsImNsYXNzTmFtZSIsInZhbHVlIiwiZGlzcGxheU5hbWUiLCJTdHlsZWRDZWxsIiwicGFuZWxCb3JkZXJMVCIsImxhYmVsQ29sb3JMVCIsIkNlbGxGYWN0b3J5IiwiQ2VsbCIsIkRhdGFHcmlkRmFjdG9yeSIsImRlcHMiLCJGaWVsZEhlYWRlciIsIkRhdGFHcmlkIiwiY29sdW1ucyIsImNvbHVtbnNTZWxlY3RvciIsInNvbWUiLCJjIiwiQUxMX0ZJRUxEX1RZUEVTIiwiZ2VvanNvbiIsImNvbHVtbkluZGV4Iiwia2V5Iiwicm93SW5kZXgiLCJzdHlsZSIsInJvd3MiLCJpc0xhc3QiLCJsZW5ndGgiLCJsYXN0IiwibmFtZSIsImluZGV4IiwiY2VsbEhlYWRlckhlaWdodCIsImhhc0dlb2pzb24iLCJleHRlbmRDZWxsSGVpZ2h0IiwiY2VsbEhlaWdodCIsImlzR2VvanNvbkZpZWxkIiwiZXh0ZW5kQ29sdW1uV2lkdGgiLCJjb2x1bW5XaWR0aCIsImhlaWdodCIsIndpZHRoIiwiX2NlbGxSZW5kZXJlciIsIl9jb2x1bW5XaWR0aCIsImdyaWREZWZhdWx0V2lkdGgiLCJncmlkRGVmYXVsdEhlaWdodCIsIl9yb3dIZWlnaHQiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MkIsRUFBRTtBQVgvQixVQURGLENBREY7QUFpQkQ7QUE5RXVDO0FBQUE7QUFBQSxJQUNuQmtCLG9CQURtQjs7QUFBQSxtQ0FDcEMvQixRQURvQyxlQUVyQjtBQUNqQnJCLElBQUFBLEtBQUssRUFBRXFELHNCQUFVQyxNQURBO0FBRWpCaEMsSUFBQUEsT0FBTyxFQUFFK0Isc0JBQVVFLE9BQVYsQ0FBa0JGLHNCQUFVQyxNQUE1QixFQUFvQ0UsVUFGNUI7QUFHakJYLElBQUFBLE1BQU0sRUFBRVEsc0JBQVVJLE1BQVYsQ0FBaUJELFVBSFI7QUFJakJ4QixJQUFBQSxJQUFJLEVBQUVxQixzQkFBVUUsT0FBVixDQUFrQkYsc0JBQVVFLE9BQVYsQ0FBa0JGLHNCQUFVSyxHQUE1QixDQUFsQixFQUFvREYsVUFKekM7QUFLakJWLElBQUFBLEtBQUssRUFBRU8sc0JBQVVJLE1BQVYsQ0FBaUJEO0FBTFAsR0FGcUI7QUFpRjFDbkMsRUFBQUEsUUFBUSxDQUFDVCxXQUFULEdBQXVCLFVBQXZCLENBakYwQyxDQW1GMUM7QUFDQTs7QUFDQSxTQUFPLGlDQUFVUyxRQUFWLENBQVA7QUFDRDs7ZUFFY0gsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtNdWx0aUdyaWR9IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkJztcclxuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRmllbGRUb2tlbiBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC10b2tlbic7XHJcbmltcG9ydCB7Q2xvY2t9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zL2luZGV4JztcclxuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFU30gZnJvbSAnY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IERhdGFHcmlkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6Zm9jdXMsXHJcbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIC5SZWFjdFZpcnR1YWxpemVkX19HcmlkX19pbm5lclNjcm9sbENvbnRhaW5lciB7XHJcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsU2Nyb2xsQmFyfTtcclxuICB9XHJcblxyXG4gIC5SZWFjdFZpcnR1YWxpemVkX19HcmlkIHtcclxuICAgIC5jb2x1bW4tMCAuY2VsbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ncmlkUGFkZGluZ1NpZGV9cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci0wIC5oZWFkZXItY2VsbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ncmlkUGFkZGluZ1NpZGV9cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbGwge1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbFBhZGRpbmdTaWRlfXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXN0IHtcclxuICAgICAgLmNlbGwge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JpZFBhZGRpbmdTaWRlfXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ncmlkUGFkZGluZ1NpZGV9cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRGaWVsZEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZExUfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaWNvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3RpbWVzdGFtcCcgPyAnMnB4JyA6ICcwJyl9O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWVsZEhlYWRlckZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgSGVhZGVyID0gKHtjbGFzc05hbWUsIHZhbHVlLCB0eXBlfSkgPT4gKFxyXG4gICAgPFN0eWxlZEZpZWxkSGVhZGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfSB0eXBlPXt0eXBlfSB0aXRsZT17dmFsdWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gJ3RpbWVzdGFtcCcgPyA8Q2xvY2sgaGVpZ2h0PVwiMTZweFwiIC8+IDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxGaWVsZFRva2VuIHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRGaWVsZEhlYWRlcj5cclxuICApO1xyXG5cclxuICBIZWFkZXIuZGlzcGxheU5hbWUgPSAnSGVhZGVyJztcclxuXHJcbiAgcmV0dXJuIEhlYWRlcjtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZENlbGwgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyTFR9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3JMVH07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBzcGFuIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENlbGxGYWN0b3J5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IENlbGwgPSAoe2NsYXNzTmFtZSwgdmFsdWV9KSA9PiAoXHJcbiAgICA8U3R5bGVkQ2VsbCBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30gdGl0bGU9e3ZhbHVlfT5cclxuICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICAgIDwvU3R5bGVkQ2VsbD5cclxuICApO1xyXG5cclxuICBDZWxsLmRpc3BsYXlOYW1lID0gJ0NlbGwnO1xyXG5cclxuICByZXR1cm4gQ2VsbDtcclxufTtcclxuXHJcbkRhdGFHcmlkRmFjdG9yeS5kZXBzID0gW0ZpZWxkSGVhZGVyRmFjdG9yeSwgQ2VsbEZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gRGF0YUdyaWRGYWN0b3J5KEZpZWxkSGVhZGVyLCBDZWxsKSB7XHJcbiAgY2xhc3MgRGF0YUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgcm93czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkpLmlzUmVxdWlyZWQsXHJcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29sdW1uc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuY29sdW1ucztcclxuICAgIGhhc0dlb2pzb24gPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmNvbHVtbnNTZWxlY3RvciwgY29sdW1ucyA9PlxyXG4gICAgICBjb2x1bW5zLnNvbWUoYyA9PiBjLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy5nZW9qc29uKVxyXG4gICAgKTtcclxuXHJcbiAgICBfY2VsbFJlbmRlcmVyID0gKHtjb2x1bW5JbmRleCwga2V5LCByb3dJbmRleCwgc3R5bGV9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtjb2x1bW5zLCByb3dzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGlzTGFzdCA9IGNvbHVtbkluZGV4ID09PSBjb2x1bW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBjb2x1bW5zW2NvbHVtbkluZGV4XS50eXBlO1xyXG5cclxuICAgICAgLy8gcm93SW5kZXggLTEgYmVjYXVzZSBkYXRhIHJvd3Mgc3RhcnQgcmVuZGVyaW5nIGF0IGluZGV4IDEgYW5kIHdlIG5vcm1hbGl6ZSBiYWNrIHVzaW5nIHRoZSAtMSBwYXJhbVxyXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICBsYXN0OiBpc0xhc3QsXHJcbiAgICAgICAgW2BoZWFkZXItJHtjb2x1bW5JbmRleH1gXTogcm93SW5kZXggPT09IDAsXHJcbiAgICAgICAgW2Byb3ctJHtyb3dJbmRleCAtIDF9IGNvbHVtbi0ke2NvbHVtbkluZGV4fWBdOiByb3dJbmRleCA+IDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtrZXl9IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAge3Jvd0luZGV4ID09PSAwID8gKFxyXG4gICAgICAgICAgICA8RmllbGRIZWFkZXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItY2VsbCAke3R5cGV9YH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29sdW1uc1tjb2x1bW5JbmRleF0ubmFtZX1cclxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPENlbGxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjZWxsICR7dHlwZX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXJzZUZpZWxkVmFsdWUocm93c1tyb3dJbmRleCAtIDFdW2NvbHVtbkluZGV4XSwgdHlwZSl9XHJcbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9yb3dIZWlnaHQgPSAoe2luZGV4fSkgPT5cclxuICAgICAgaW5kZXggPT09IDBcclxuICAgICAgICA/IHRoaXMucHJvcHMudGhlbWUuY2VsbEhlYWRlckhlaWdodFxyXG4gICAgICAgIDogdGhpcy5oYXNHZW9qc29uKHRoaXMucHJvcHMpXHJcbiAgICAgICAgPyB0aGlzLnByb3BzLnRoZW1lLmV4dGVuZENlbGxIZWlnaHRcclxuICAgICAgICA6IHRoaXMucHJvcHMudGhlbWUuY2VsbEhlaWdodDtcclxuXHJcbiAgICBfY29sdW1uV2lkdGggPSAoe2luZGV4fSkgPT4ge1xyXG4gICAgICBjb25zdCBpc0dlb2pzb25GaWVsZCA9IHRoaXMucHJvcHMuY29sdW1uc1tpbmRleF0udHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLmdlb2pzb247XHJcbiAgICAgIHJldHVybiBpc0dlb2pzb25GaWVsZCA/IHRoaXMucHJvcHMudGhlbWUuZXh0ZW5kQ29sdW1uV2lkdGggOiB0aGlzLnByb3BzLnRoZW1lLmNvbHVtbldpZHRoO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtjb2x1bW5zLCBoZWlnaHQsIHJvd3MsIHRoZW1lLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUdyaWRXcmFwcGVyIGNsYXNzTmFtZT1cImRhdGFncmlkLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxNdWx0aUdyaWRcclxuICAgICAgICAgICAgY2VsbFJlbmRlcmVyPXt0aGlzLl9jZWxsUmVuZGVyZXJ9XHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoPXt0aGlzLl9jb2x1bW5XaWR0aH1cclxuICAgICAgICAgICAgY29sdW1uQ291bnQ9e2NvbHVtbnMubGVuZ3RofVxyXG4gICAgICAgICAgICBmaXhlZFJvd0NvdW50PXsxfVxyXG4gICAgICAgICAgICBlbmFibGVGaXhlZFJvd1Njcm9sbD17dHJ1ZX1cclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRoIHx8IHRoZW1lLmdyaWREZWZhdWx0V2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IHx8IHRoZW1lLmdyaWREZWZhdWx0SGVpZ2h0fVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9e3RoaXMuX3Jvd0hlaWdodH1cclxuICAgICAgICAgICAgcm93Q291bnQ9e3Jvd3MubGVuZ3RoICsgMX1cclxuICAgICAgICAgICAgaGlkZVRvcFJpZ2h0R3JpZFNjcm9sbGJhcj17dHJ1ZX1cclxuICAgICAgICAgICAgaGlkZUJvdHRvbUxlZnRHcmlkU2Nyb2xsYmFyPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0RhdGFHcmlkV3JhcHBlcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIERhdGFHcmlkLmRpc3BsYXlOYW1lID0gJ0RhdGFHcmlkJztcclxuXHJcbiAgLy8gV3JhcHBpbmcgdGhlIGNvbXBvbmVudCB1c2luZyB3aXRoVGhlbWUgYmVjYXVzZSB3ZSBuZWVkIHRvXHJcbiAgLy8gYWNjZXNzIHZhcmlhYmxlcyBvdXRzaWRlIHN0eWxlZC1jb21wb25lbnRzIGNvbnRleHRcclxuICByZXR1cm4gd2l0aFRoZW1lKERhdGFHcmlkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUdyaWRGYWN0b3J5O1xyXG4iXX0=