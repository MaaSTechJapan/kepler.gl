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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultSettings = require("../../constants/default-settings");

var _icons = require("../common/icons");

var _styledComponents = require("../common/styled-components");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var propTypes = {
  datasets: _propTypes["default"].object.isRequired,
  selectedDataset: _propTypes["default"].string,
  dataType: _propTypes["default"].string.isRequired,
  filtered: _propTypes["default"].bool.isRequired,
  // callbacks
  applyCPUFilter: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onChangeExportSelectedDataset: _propTypes["default"].func.isRequired,
  onChangeExportDataType: _propTypes["default"].func.isRequired,
  onChangeExportFiltered: _propTypes["default"].func.isRequired
};

var getDataRowCount = function getDataRowCount(datasets, selectedDataset, filtered) {
  var selectedData = datasets[selectedDataset];

  if (!selectedData) {
    return "".concat(Object.keys(datasets).length, " Files ");
  }

  var allData = selectedData.allData,
      filteredIdxCPU = selectedData.filteredIdxCPU;

  if (filtered && !filteredIdxCPU) {
    return '-';
  }

  var rowCount = filtered ? filteredIdxCPU.length : allData.length;
  return "".concat(rowCount.toLocaleString(), " Rows");
};

var ExportDataModalFactory = function ExportDataModalFactory() {
  var ExportDataModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ExportDataModal, _Component);

    var _super = _createSuper(ExportDataModal);

    function ExportDataModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, ExportDataModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelectDataset", function (_ref) {
        var value = _ref.target.value;

        _this.props.applyCPUFilter(value);

        _this.props.onChangeExportSelectedDataset(value);
      });
      return _this;
    }

    (0, _createClass2["default"])(ExportDataModal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var toCPUFilter = this.props.selectedDataset || Object.keys(this.props.datasets);
        this.props.applyCPUFilter(toCPUFilter);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            selectedDataset = _this$props.selectedDataset,
            dataType = _this$props.dataType,
            filtered = _this$props.filtered,
            onChangeExportDataType = _this$props.onChangeExportDataType,
            onChangeExportFiltered = _this$props.onChangeExportFiltered;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledModalContent, {
          className: "export-data-modal"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Dataset"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, "Choose the datasets you want to export")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement("select", {
          value: selectedDataset,
          onChange: this._onSelectDataset
        }, ['All'].concat(Object.keys(datasets)).map(function (d) {
          return /*#__PURE__*/_react["default"].createElement("option", {
            key: d,
            value: d
          }, datasets[d] && datasets[d].label || d);
        })))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Data Type"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, "Choose the type of data you want to export")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, _defaultSettings.EXPORT_DATA_TYPE_OPTIONS.map(function (op) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledType, {
            key: op.id,
            selected: dataType === op.id,
            available: op.available,
            onClick: function onClick() {
              return op.available && onChangeExportDataType(op.id);
            }
          }, /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
            ext: op.label,
            height: "80px",
            fontSize: "11px"
          }));
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Filter Data"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, "You can choose exporting original data or filtered data")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilteredOption, {
          selected: !filtered,
          onClick: function onClick() {
            return onChangeExportFiltered(false);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "filtered-title"
        }, "Unfiltered Data"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "filtered-subtitle"
        }, getDataRowCount(datasets, selectedDataset, false))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilteredOption, {
          selected: filtered,
          onClick: function onClick() {
            return onChangeExportFiltered(true);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "filtered-title"
        }, "Filtered Data"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "filtered-subtitle"
        }, getDataRowCount(datasets, selectedDataset, true)))))));
      }
    }]);
    return ExportDataModal;
  }(_react.Component);

  ExportDataModal.propTypes = propTypes;
  return ExportDataModal;
};

var _default = ExportDataModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtZGF0YS1tb2RhbC5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJkYXRhc2V0cyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzZWxlY3RlZERhdGFzZXQiLCJzdHJpbmciLCJkYXRhVHlwZSIsImZpbHRlcmVkIiwiYm9vbCIsImFwcGx5Q1BVRmlsdGVyIiwiZnVuYyIsIm9uQ2xvc2UiLCJvbkNoYW5nZUV4cG9ydFNlbGVjdGVkRGF0YXNldCIsIm9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUiLCJvbkNoYW5nZUV4cG9ydEZpbHRlcmVkIiwiZ2V0RGF0YVJvd0NvdW50Iiwic2VsZWN0ZWREYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImFsbERhdGEiLCJmaWx0ZXJlZElkeENQVSIsInJvd0NvdW50IiwidG9Mb2NhbGVTdHJpbmciLCJFeHBvcnREYXRhTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsIiwidmFsdWUiLCJ0YXJnZXQiLCJwcm9wcyIsInRvQ1BVRmlsdGVyIiwiX29uU2VsZWN0RGF0YXNldCIsImNvbmNhdCIsIm1hcCIsImQiLCJsYWJlbCIsIkVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyIsIm9wIiwiaWQiLCJhdmFpbGFibGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQU9BLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsUUFBUSxFQUFFQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFEWDtBQUVoQkMsRUFBQUEsZUFBZSxFQUFFSCxzQkFBVUksTUFGWDtBQUdoQkMsRUFBQUEsUUFBUSxFQUFFTCxzQkFBVUksTUFBVixDQUFpQkYsVUFIWDtBQUloQkksRUFBQUEsUUFBUSxFQUFFTixzQkFBVU8sSUFBVixDQUFlTCxVQUpUO0FBS2hCO0FB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LHdCQUNFLGdDQUFDLHNDQUFEO0FBQ0UsVUFBQSxRQUFRLEVBQUUsQ0FBQzNCLFFBRGI7QUFFRSxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNTyxzQkFBc0IsQ0FBQyxLQUFELENBQTVCO0FBQUE7QUFGWCx3QkFJRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsNkJBSkYsZUFLRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDR0MsZUFBZSxDQUFDZixRQUFELEVBQVdJLGVBQVgsRUFBNEIsS0FBNUIsQ0FEbEIsQ0FMRixDQURGLGVBVUUsZ0NBQUMsc0NBQUQ7QUFDRSxVQUFBLFFBQVEsRUFBRUcsUUFEWjtBQUVFLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1PLHNCQUFzQixDQUFDLElBQUQsQ0FBNUI7QUFBQTtBQUZYLHdCQUlFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZiwyQkFKRixlQUtFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNHQyxlQUFlLENBQUNmLFFBQUQsRUFBV0ksZUFBWCxFQUE0QixJQUE1QixDQURsQixDQUxGLENBVkYsQ0FQRixDQWxDRixDQURGLENBREY7QUFtRUQ7QUF6RmdDO0FBQUE7QUFBQSxJQUNMbUMsZ0JBREs7O0FBMkZuQ2QsRUFBQUEsZUFBZSxDQUFDMUIsU0FBaEIsR0FBNEJBLFNBQTVCO0FBQ0EsU0FBTzBCLGVBQVA7QUFDRCxDQTdGRDs7ZUErRmVELHNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQge0VYUE9SVF9EQVRBX1RZUEVfT1BUSU9OU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge0ZpbGVUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkTW9kYWxDb250ZW50LFxyXG4gIFN0eWxlZEV4cG9ydFNlY3Rpb24sXHJcbiAgU3R5bGVkRmlsdGVyZWRPcHRpb24sXHJcbiAgU3R5bGVkVHlwZVxyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIHNlbGVjdGVkRGF0YXNldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkYXRhVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZpbHRlcmVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIC8vIGNhbGxiYWNrc1xyXG4gIGFwcGx5Q1BVRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2VFeHBvcnRTZWxlY3RlZERhdGFzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2VFeHBvcnREYXRhVHlwZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5jb25zdCBnZXREYXRhUm93Q291bnQgPSAoZGF0YXNldHMsIHNlbGVjdGVkRGF0YXNldCwgZmlsdGVyZWQpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZERhdGEgPSBkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdO1xyXG4gIGlmICghc2VsZWN0ZWREYXRhKSB7XHJcbiAgICByZXR1cm4gYCR7T2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aH0gRmlsZXMgYDtcclxuICB9XHJcbiAgY29uc3Qge2FsbERhdGEsIGZpbHRlcmVkSWR4Q1BVfSA9IHNlbGVjdGVkRGF0YTtcclxuXHJcbiAgaWYgKGZpbHRlcmVkICYmICFmaWx0ZXJlZElkeENQVSkge1xyXG4gICAgcmV0dXJuICctJztcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvd0NvdW50ID0gZmlsdGVyZWQgPyBmaWx0ZXJlZElkeENQVS5sZW5ndGggOiBhbGxEYXRhLmxlbmd0aDtcclxuXHJcbiAgcmV0dXJuIGAke3Jvd0NvdW50LnRvTG9jYWxlU3RyaW5nKCl9IFJvd3NgO1xyXG59O1xyXG5cclxuY29uc3QgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSA9ICgpID0+IHtcclxuICBjbGFzcyBFeHBvcnREYXRhTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IHRvQ1BVRmlsdGVyID0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGFzZXQgfHwgT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhc2V0cyk7XHJcbiAgICAgIHRoaXMucHJvcHMuYXBwbHlDUFVGaWx0ZXIodG9DUFVGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblNlbGVjdERhdGFzZXQgPSAoe3RhcmdldDoge3ZhbHVlfX0pID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5hcHBseUNQVUZpbHRlcih2YWx1ZSk7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VFeHBvcnRTZWxlY3RlZERhdGFzZXQodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhc2V0cyxcclxuICAgICAgICBzZWxlY3RlZERhdGFzZXQsXHJcbiAgICAgICAgZGF0YVR5cGUsXHJcbiAgICAgICAgZmlsdGVyZWQsXHJcbiAgICAgICAgb25DaGFuZ2VFeHBvcnREYXRhVHlwZSxcclxuICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkXHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImV4cG9ydC1kYXRhLW1vZGFsXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RGF0YXNldDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkNob29zZSB0aGUgZGF0YXNldHMgeW91IHdhbnQgdG8gZXhwb3J0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkRGF0YXNldH0gb25DaGFuZ2U9e3RoaXMuX29uU2VsZWN0RGF0YXNldH0+XHJcbiAgICAgICAgICAgICAgICAgIHtbJ0FsbCddLmNvbmNhdChPYmplY3Qua2V5cyhkYXRhc2V0cykpLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZH0gdmFsdWU9e2R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyhkYXRhc2V0c1tkXSAmJiBkYXRhc2V0c1tkXS5sYWJlbCkgfHwgZH1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RGF0YSBUeXBlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+Q2hvb3NlIHRoZSB0eXBlIG9mIGRhdGEgeW91IHdhbnQgdG8gZXhwb3J0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIHtFWFBPUlRfREFUQV9UWVBFX09QVElPTlMubWFwKG9wID0+IChcclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFR5cGVcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXRhVHlwZSA9PT0gb3AuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlPXtvcC5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3AuYXZhaWxhYmxlICYmIG9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUob3AuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbGVUeXBlIGV4dD17b3AubGFiZWx9IGhlaWdodD1cIjgwcHhcIiBmb250U2l6ZT1cIjExcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFR5cGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RmlsdGVyIERhdGE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgWW91IGNhbiBjaG9vc2UgZXhwb3J0aW5nIG9yaWdpbmFsIGRhdGEgb3IgZmlsdGVyZWQgZGF0YVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRGaWx0ZXJlZE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17IWZpbHRlcmVkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJlZC10aXRsZVwiPlVuZmlsdGVyZWQgRGF0YTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmVkLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldERhdGFSb3dDb3VudChkYXRhc2V0cywgc2VsZWN0ZWREYXRhc2V0LCBmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRGaWx0ZXJlZE9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRGaWx0ZXJlZE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZmlsdGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlRXhwb3J0RmlsdGVyZWQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyZWQtdGl0bGVcIj5GaWx0ZXJlZCBEYXRhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyZWQtc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RGF0YVJvd0NvdW50KGRhdGFzZXRzLCBzZWxlY3RlZERhdGFzZXQsIHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRmlsdGVyZWRPcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBFeHBvcnREYXRhTW9kYWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG4gIHJldHVybiBFeHBvcnREYXRhTW9kYWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBvcnREYXRhTW9kYWxGYWN0b3J5O1xyXG4iXX0=