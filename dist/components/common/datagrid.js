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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kYXRhZ3JpZC5qcyJdLCJuYW1lcyI6WyJEYXRhR3JpZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibW9kYWxTY3JvbGxCYXIiLCJncmlkUGFkZGluZ1NpZGUiLCJjZWxsUGFkZGluZ1NpZGUiLCJTdHlsZWRGaWVsZEhlYWRlciIsInBhbmVsQmFja2dyb3VuZExUIiwidGl0bGVDb2xvckxUIiwidHlwZSIsIkZpZWxkSGVhZGVyRmFjdG9yeSIsIkhlYWRlciIsImNsYXNzTmFtZSIsInZhbHVlIiwiZGlzcGxheU5hbWUiLCJTdHlsZWRDZWxsIiwicGFuZWxCb3JkZXJMVCIsImxhYmVsQ29sb3JMVCIsIkNlbGxGYWN0b3J5IiwiQ2VsbCIsIkRhdGFHcmlkRmFjdG9yeSIsImRlcHMiLCJGaWVsZEhlYWRlciIsIkRhdGFHcmlkIiwiY29sdW1ucyIsImNvbHVtbnNTZWxlY3RvciIsInNvbWUiLCJjIiwiQUxMX0ZJRUxEX1RZUEVTIiwiZ2VvanNvbiIsImNvbHVtbkluZGV4Iiwia2V5Iiwicm93SW5kZXgiLCJzdHlsZSIsInJvd3MiLCJpc0xhc3QiLCJsZW5ndGgiLCJsYXN0IiwibmFtZSIsImluZGV4IiwiY2VsbEhlYWRlckhlaWdodCIsImhhc0dlb2pzb24iLCJleHRlbmRDZWxsSGVpZ2h0IiwiY2VsbEhlaWdodCIsImlzR2VvanNvbkZpZWxkIiwiZXh0ZW5kQ29sdW1uV2lkdGgiLCJjb2x1bW5XaWR0aCIsImhlaWdodCIsIndpZHRoIiwiX2NlbGxSZW5kZXJlciIsIl9jb2x1bW5XaWR0aCIsImdyaWREZWZhdWx0V2lkdGgiLCJncmlkRGVmYXVsdEhlaWdodCIsIl9yb3dIZWlnaHQiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MkIsRUFBRTtBQVgvQixVQURGLENBREY7QUFpQkQ7QUE5RXVDO0FBQUE7QUFBQSxJQUNuQmtCLG9CQURtQjs7QUFBQSxtQ0FDcEMvQixRQURvQyxlQUVyQjtBQUNqQnJCLElBQUFBLEtBQUssRUFBRXFELHNCQUFVQyxNQURBO0FBRWpCaEMsSUFBQUEsT0FBTyxFQUFFK0Isc0JBQVVFLE9BQVYsQ0FBa0JGLHNCQUFVQyxNQUE1QixFQUFvQ0UsVUFGNUI7QUFHakJYLElBQUFBLE1BQU0sRUFBRVEsc0JBQVVJLE1BQVYsQ0FBaUJELFVBSFI7QUFJakJ4QixJQUFBQSxJQUFJLEVBQUVxQixzQkFBVUUsT0FBVixDQUFrQkYsc0JBQVVFLE9BQVYsQ0FBa0JGLHNCQUFVSyxHQUE1QixDQUFsQixFQUFvREYsVUFKekM7QUFLakJWLElBQUFBLEtBQUssRUFBRU8sc0JBQVVJLE1BQVYsQ0FBaUJEO0FBTFAsR0FGcUI7QUFpRjFDbkMsRUFBQUEsUUFBUSxDQUFDVCxXQUFULEdBQXVCLFVBQXZCLENBakYwQyxDQW1GMUM7QUFDQTs7QUFDQSxTQUFPLGlDQUFVUyxRQUFWLENBQVA7QUFDRDs7ZUFFY0gsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge011bHRpR3JpZH0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmllbGRUb2tlbiBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC10b2tlbic7XG5pbXBvcnQge0Nsb2NrfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucy9pbmRleCc7XG5pbXBvcnQge3BhcnNlRmllbGRWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFU30gZnJvbSAnY29uc3RhbnRzJztcblxuY29uc3QgRGF0YUdyaWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6Zm9jdXMsXG4gIC5SZWFjdFZpcnR1YWxpemVkX19HcmlkOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICAuUmVhY3RWaXJ0dWFsaXplZF9fR3JpZF9faW5uZXJTY3JvbGxDb250YWluZXIge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxTY3JvbGxCYXJ9O1xuICB9XG5cbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQge1xuICAgIC5jb2x1bW4tMCAuY2VsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JpZFBhZGRpbmdTaWRlfXB4O1xuICAgIH1cblxuICAgIC5oZWFkZXItMCAuaGVhZGVyLWNlbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdyaWRQYWRkaW5nU2lkZX1weDtcbiAgICB9XG5cbiAgICAuY2VsbCB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGV9cHg7XG4gICAgfVxuXG4gICAgLmxhc3Qge1xuICAgICAgLmNlbGwge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdyaWRQYWRkaW5nU2lkZX1weDtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXItY2VsbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JpZFBhZGRpbmdTaWRlfXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRmllbGRIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRMVH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG4gIGhlaWdodDogMTAwJTtcblxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5sYWJlbC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuaWNvbi13cmFwcGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLnR5cGUgPT09ICd0aW1lc3RhbXAnID8gJzJweCcgOiAnMCcpfTtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGaWVsZEhlYWRlckZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IEhlYWRlciA9ICh7Y2xhc3NOYW1lLCB2YWx1ZSwgdHlwZX0pID0+IChcbiAgICA8U3R5bGVkRmllbGRIZWFkZXIgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgJyd9IHR5cGU9e3R5cGV9IHRpdGxlPXt2YWx1ZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWhlYWRlci1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICB7dHlwZSA9PT0gJ3RpbWVzdGFtcCcgPyA8Q2xvY2sgaGVpZ2h0PVwiMTZweFwiIC8+IDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC13cmFwcGVyXCI+XG4gICAgICAgICAgPEZpZWxkVG9rZW4gdHlwZT17dHlwZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZEZpZWxkSGVhZGVyPlxuICApO1xuXG4gIEhlYWRlci5kaXNwbGF5TmFtZSA9ICdIZWFkZXInO1xuXG4gIHJldHVybiBIZWFkZXI7XG59O1xuXG5jb25zdCBTdHlsZWRDZWxsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckxUfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvckxUfTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgc3BhbiB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENlbGxGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBDZWxsID0gKHtjbGFzc05hbWUsIHZhbHVlfSkgPT4gKFxuICAgIDxTdHlsZWRDZWxsIGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfSB0aXRsZT17dmFsdWV9PlxuICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgICA8L1N0eWxlZENlbGw+XG4gICk7XG5cbiAgQ2VsbC5kaXNwbGF5TmFtZSA9ICdDZWxsJztcblxuICByZXR1cm4gQ2VsbDtcbn07XG5cbkRhdGFHcmlkRmFjdG9yeS5kZXBzID0gW0ZpZWxkSGVhZGVyRmFjdG9yeSwgQ2VsbEZhY3RvcnldO1xuXG5mdW5jdGlvbiBEYXRhR3JpZEZhY3RvcnkoRmllbGRIZWFkZXIsIENlbGwpIHtcbiAgY2xhc3MgRGF0YUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICByb3dzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSkuaXNSZXF1aXJlZCxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29sdW1uc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuY29sdW1ucztcbiAgICBoYXNHZW9qc29uID0gY3JlYXRlU2VsZWN0b3IodGhpcy5jb2x1bW5zU2VsZWN0b3IsIGNvbHVtbnMgPT5cbiAgICAgIGNvbHVtbnMuc29tZShjID0+IGMudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLmdlb2pzb24pXG4gICAgKTtcblxuICAgIF9jZWxsUmVuZGVyZXIgPSAoe2NvbHVtbkluZGV4LCBrZXksIHJvd0luZGV4LCBzdHlsZX0pID0+IHtcbiAgICAgIGNvbnN0IHtjb2x1bW5zLCByb3dzfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBpc0xhc3QgPSBjb2x1bW5JbmRleCA9PT0gY29sdW1ucy5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgdHlwZSA9IGNvbHVtbnNbY29sdW1uSW5kZXhdLnR5cGU7XG5cbiAgICAgIC8vIHJvd0luZGV4IC0xIGJlY2F1c2UgZGF0YSByb3dzIHN0YXJ0IHJlbmRlcmluZyBhdCBpbmRleCAxIGFuZCB3ZSBub3JtYWxpemUgYmFjayB1c2luZyB0aGUgLTEgcGFyYW1cbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgICBsYXN0OiBpc0xhc3QsXG4gICAgICAgIFtgaGVhZGVyLSR7Y29sdW1uSW5kZXh9YF06IHJvd0luZGV4ID09PSAwLFxuICAgICAgICBbYHJvdy0ke3Jvd0luZGV4IC0gMX0gY29sdW1uLSR7Y29sdW1uSW5kZXh9YF06IHJvd0luZGV4ID4gMFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtrZXl9IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIHtyb3dJbmRleCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxGaWVsZEhlYWRlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItY2VsbCAke3R5cGV9YH1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvbHVtbnNbY29sdW1uSW5kZXhdLm5hbWV9XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjZWxsICR7dHlwZX1gfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFyc2VGaWVsZFZhbHVlKHJvd3Nbcm93SW5kZXggLSAxXVtjb2x1bW5JbmRleF0sIHR5cGUpfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIF9yb3dIZWlnaHQgPSAoe2luZGV4fSkgPT5cbiAgICAgIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5wcm9wcy50aGVtZS5jZWxsSGVhZGVySGVpZ2h0XG4gICAgICAgIDogdGhpcy5oYXNHZW9qc29uKHRoaXMucHJvcHMpXG4gICAgICAgID8gdGhpcy5wcm9wcy50aGVtZS5leHRlbmRDZWxsSGVpZ2h0XG4gICAgICAgIDogdGhpcy5wcm9wcy50aGVtZS5jZWxsSGVpZ2h0O1xuXG4gICAgX2NvbHVtbldpZHRoID0gKHtpbmRleH0pID0+IHtcbiAgICAgIGNvbnN0IGlzR2VvanNvbkZpZWxkID0gdGhpcy5wcm9wcy5jb2x1bW5zW2luZGV4XS50eXBlID09PSBBTExfRklFTERfVFlQRVMuZ2VvanNvbjtcbiAgICAgIHJldHVybiBpc0dlb2pzb25GaWVsZCA/IHRoaXMucHJvcHMudGhlbWUuZXh0ZW5kQ29sdW1uV2lkdGggOiB0aGlzLnByb3BzLnRoZW1lLmNvbHVtbldpZHRoO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7Y29sdW1ucywgaGVpZ2h0LCByb3dzLCB0aGVtZSwgd2lkdGh9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhdGFHcmlkV3JhcHBlciBjbGFzc05hbWU9XCJkYXRhZ3JpZC13cmFwcGVyXCI+XG4gICAgICAgICAgPE11bHRpR3JpZFxuICAgICAgICAgICAgY2VsbFJlbmRlcmVyPXt0aGlzLl9jZWxsUmVuZGVyZXJ9XG4gICAgICAgICAgICBjb2x1bW5XaWR0aD17dGhpcy5fY29sdW1uV2lkdGh9XG4gICAgICAgICAgICBjb2x1bW5Db3VudD17Y29sdW1ucy5sZW5ndGh9XG4gICAgICAgICAgICBmaXhlZFJvd0NvdW50PXsxfVxuICAgICAgICAgICAgZW5hYmxlRml4ZWRSb3dTY3JvbGw9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD17d2lkdGggfHwgdGhlbWUuZ3JpZERlZmF1bHRXaWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IHx8IHRoZW1lLmdyaWREZWZhdWx0SGVpZ2h0fVxuICAgICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLl9yb3dIZWlnaHR9XG4gICAgICAgICAgICByb3dDb3VudD17cm93cy5sZW5ndGggKyAxfVxuICAgICAgICAgICAgaGlkZVRvcFJpZ2h0R3JpZFNjcm9sbGJhcj17dHJ1ZX1cbiAgICAgICAgICAgIGhpZGVCb3R0b21MZWZ0R3JpZFNjcm9sbGJhcj17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGFHcmlkV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgRGF0YUdyaWQuZGlzcGxheU5hbWUgPSAnRGF0YUdyaWQnO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBjb21wb25lbnQgdXNpbmcgd2l0aFRoZW1lIGJlY2F1c2Ugd2UgbmVlZCB0b1xuICAvLyBhY2Nlc3MgdmFyaWFibGVzIG91dHNpZGUgc3R5bGVkLWNvbXBvbmVudHMgY29udGV4dFxuICByZXR1cm4gd2l0aFRoZW1lKERhdGFHcmlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YUdyaWRGYWN0b3J5O1xuIl19