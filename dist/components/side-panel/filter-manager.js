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

var _reselect = require("reselect");

var _styledComponents = require("../common/styled-components");

var _icons = require("../common/icons");

var _sourceDataCatalog = _interopRequireDefault(require("./common/source-data-catalog"));

var _filterPanel = _interopRequireDefault(require("./filter-panel/filter-panel"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

FilterManagerFactory.deps = [_sourceDataCatalog["default"], _filterPanel["default"]];

function FilterManagerFactory(SourceDataCatalog, FilterPanel) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FilterManager, _Component);

    var _super = _createSuper(FilterManager);

    function FilterManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, FilterManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasetsSelector", function (state) {
        return state.datasets;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultDatasetSelector", (0, _reselect.createSelector)(_this.datasetsSelector, function (datasets) {
        return Object.keys(datasets).length && Object.keys(datasets)[0] || null;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_addFilter", function () {
        var defaultDataset = _this.defaultDatasetSelector(_this.props);

        _this.props.addFilter(defaultDataset);
      });
      return _this;
    }

    (0, _createClass2["default"])(FilterManager, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            filters = _this$props.filters,
            datasets = _this$props.datasets,
            layers = _this$props.layers;
        var isAnyFilterAnimating = filters.some(function (f) {
          return f.isAnimating;
        });
        var hadEmptyFilter = filters.some(function (f) {
          return !f.name;
        });
        var hadDataset = Object.keys(datasets).length;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-manager"
        }, /*#__PURE__*/_react["default"].createElement(SourceDataCatalog, {
          datasets: datasets,
          showDatasetTable: this.props.showDatasetTable
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, filters && filters.map(function (filter, idx) {
          return /*#__PURE__*/_react["default"].createElement(FilterPanel, {
            key: "".concat(filter.id, "-").concat(idx),
            idx: idx,
            filters: filters,
            filter: filter,
            datasets: datasets,
            layers: layers,
            isAnyFilterAnimating: isAnyFilterAnimating,
            removeFilter: function removeFilter() {
              return _this2.props.removeFilter(idx);
            },
            enlargeFilter: function enlargeFilter() {
              return _this2.props.enlargeFilter(idx);
            },
            toggleAnimation: function toggleAnimation() {
              return _this2.props.toggleAnimation(idx);
            },
            toggleFilterFeature: function toggleFilterFeature() {
              return _this2.props.toggleFilterFeature(idx);
            },
            setFilter: _this2.props.setFilter
          });
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
          inactive: hadEmptyFilter || !hadDataset,
          width: "105px",
          onClick: this._addFilter
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), "Add Filter"));
      }
    }]);
    return FilterManager;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    datasets: _propTypes["default"].object,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    addFilter: _propTypes["default"].func.isRequired,
    removeFilter: _propTypes["default"].func.isRequired,
    enlargeFilter: _propTypes["default"].func.isRequired,
    toggleAnimation: _propTypes["default"].func.isRequired,
    toggleFilterFeature: _propTypes["default"].func.isRequired,
    setFilter: _propTypes["default"].func.isRequired,
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    showDatasetTable: _propTypes["default"].func,
    // fields can be undefined when dataset is not selected
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any)
  }), _temp;
}

var _default = FilterManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IiwiRmlsdGVyUGFuZWxGYWN0b3J5IiwiU291cmNlRGF0YUNhdGFsb2ciLCJGaWx0ZXJQYW5lbCIsInN0YXRlIiwiZGF0YXNldHMiLCJkYXRhc2V0c1NlbGVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImRlZmF1bHREYXRhc2V0IiwiZGVmYXVsdERhdGFzZXRTZWxlY3RvciIsInByb3BzIiwiYWRkRmlsdGVyIiwiZmlsdGVycyIsImxheWVycyIsImlzQW55RmlsdGVyQW5pbWF0aW5nIiwic29tZSIsImYiLCJpc0FuaW1hdGluZyIsImhhZEVtcHR5RmlsdGVyIiwibmFtZSIsImhhZERhdGFzZXQiLCJzaG93RGF0YXNldFRhYmxlIiwibWFwIiwiZmlsdGVyIiwiaWR4IiwiaWQiLCJyZW1vdmVGaWx0ZXIiLCJlbmxhcmdlRmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwidG9nZ2xlRmlsdGVyRmVhdHVyZSIsInNldEZpbHRlciIsIl9hZGRGaWx0ZXIiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJmaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBQSxvQkFBb0IsQ0FBQ0MsSUFBckIsR0FBNEIsQ0FBQ0MsNkJBQUQsRUFBMkJDLHVCQUEzQixDQUE1Qjs7QUFFQSxTQUFTSCxvQkFBVCxDQUE4QkksaUJBQTlCLEVBQWlEQyxXQUFqRCxFQUE4RDtBQUFBOztBQUM1RDtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtB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QUUsS0FBS1c7QUFBN0Usd0JBQ0UsZ0NBQUMsVUFBRDtBQUFLLFVBQUEsTUFBTSxFQUFDO0FBQVosVUFERixlQXRCRixDQURGO0FBNkJEO0FBakVIO0FBQUE7QUFBQSxJQUFtQ0MsZ0JBQW5DLHlEQUNxQjtBQUNqQjdCLElBQUFBLFFBQVEsRUFBRThCLHNCQUFVQyxNQURIO0FBRWpCckIsSUFBQUEsTUFBTSxFQUFFb0Isc0JBQVVFLE9BQVYsQ0FBa0JGLHNCQUFVRyxHQUE1QixFQUFpQ0MsVUFGeEI7QUFHakIxQixJQUFBQSxTQUFTLEVBQUVzQixzQkFBVUssSUFBVixDQUFlRCxVQUhUO0FBSWpCWCxJQUFBQSxZQUFZLEVBQUVPLHNCQUFVSyxJQUFWLENBQWVELFVBSlo7QUFLakJWLElBQUFBLGFBQWEsRUFBRU0sc0JBQVVLLElBQVYsQ0FBZUQsVUFMYjtBQU1qQlQsSUFBQUEsZUFBZSxFQUFFSyxzQkFBVUssSUFBVixDQUFlRCxVQU5mO0FBT2pCUixJQUFBQSxtQkFBbUIsRUFBRUksc0JBQVVLLElBQVYsQ0FBZUQsVUFQbkI7QUFRakJQLElBQUFBLFNBQVMsRUFBRUcsc0JBQVVLLElBQVYsQ0FBZUQsVUFSVDtBQVNqQnpCLElBQUFBLE9BQU8sRUFBRXFCLHNCQUFVRSxPQUFWLENBQWtCRixzQkFBVUcsR0FBNUIsRUFBaUNDLFVBVHpCO0FBVWpCaEIsSUFBQUEsZ0JBQWdCLEVBQUVZLHNCQUFVSyxJQVZYO0FBWWpCO0FBQ0FDLElBQUFBLE1BQU0sRUFBRU4sc0JBQVVFLE9BQVYsQ0FBa0JGLHNCQUFVRyxHQUE1QjtBQWJTLEdBRHJCO0FBbUVEOztlQUVjeEMsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb24sIFNpZGVQYW5lbERpdmlkZXIsIEJ1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0FkZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IGZyb20gJy4vY29tbW9uL3NvdXJjZS1kYXRhLWNhdGFsb2cnO1xyXG5pbXBvcnQgRmlsdGVyUGFuZWxGYWN0b3J5IGZyb20gJy4vZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbCc7XHJcblxyXG5GaWx0ZXJNYW5hZ2VyRmFjdG9yeS5kZXBzID0gW1NvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSwgRmlsdGVyUGFuZWxGYWN0b3J5XTtcclxuXHJcbmZ1bmN0aW9uIEZpbHRlck1hbmFnZXJGYWN0b3J5KFNvdXJjZURhdGFDYXRhbG9nLCBGaWx0ZXJQYW5lbCkge1xyXG4gIHJldHVybiBjbGFzcyBGaWx0ZXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXHJcbiAgICAgIGFkZEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgcmVtb3ZlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBlbmxhcmdlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB0b2dnbGVBbmltYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHNldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxuICAgICAgc2hvd0RhdGFzZXRUYWJsZTogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgICAvLyBmaWVsZHMgY2FuIGJlIHVuZGVmaW5lZCB3aGVuIGRhdGFzZXQgaXMgbm90IHNlbGVjdGVkXHJcbiAgICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSlcclxuICAgIH07XHJcblxyXG4gICAgLyogc2VsZWN0b3JzICovXHJcbiAgICBkYXRhc2V0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUuZGF0YXNldHM7XHJcbiAgICBkZWZhdWx0RGF0YXNldFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuZGF0YXNldHNTZWxlY3RvcixcclxuICAgICAgZGF0YXNldHMgPT4gKE9iamVjdC5rZXlzKGRhdGFzZXRzKS5sZW5ndGggJiYgT2JqZWN0LmtleXMoZGF0YXNldHMpWzBdKSB8fCBudWxsXHJcbiAgICApO1xyXG5cclxuICAgIC8qIGFjdGlvbnMgKi9cclxuICAgIF9hZGRGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHREYXRhc2V0ID0gdGhpcy5kZWZhdWx0RGF0YXNldFNlbGVjdG9yKHRoaXMucHJvcHMpO1xyXG4gICAgICB0aGlzLnByb3BzLmFkZEZpbHRlcihkZWZhdWx0RGF0YXNldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2ZpbHRlcnMsIGRhdGFzZXRzLCBsYXllcnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgaXNBbnlGaWx0ZXJBbmltYXRpbmcgPSBmaWx0ZXJzLnNvbWUoZiA9PiBmLmlzQW5pbWF0aW5nKTtcclxuICAgICAgY29uc3QgaGFkRW1wdHlGaWx0ZXIgPSBmaWx0ZXJzLnNvbWUoZiA9PiAhZi5uYW1lKTtcclxuICAgICAgY29uc3QgaGFkRGF0YXNldCA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKS5sZW5ndGg7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLW1hbmFnZXJcIj5cclxuICAgICAgICAgIDxTb3VyY2VEYXRhQ2F0YWxvZyBkYXRhc2V0cz17ZGF0YXNldHN9IHNob3dEYXRhc2V0VGFibGU9e3RoaXMucHJvcHMuc2hvd0RhdGFzZXRUYWJsZX0gLz5cclxuICAgICAgICAgIDxTaWRlUGFuZWxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAge2ZpbHRlcnMgJiZcclxuICAgICAgICAgICAgICBmaWx0ZXJzLm1hcCgoZmlsdGVyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJQYW5lbFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2ZpbHRlci5pZH0tJHtpZHh9YH1cclxuICAgICAgICAgICAgICAgICAgaWR4PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XHJcbiAgICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17KCkgPT4gdGhpcy5wcm9wcy5yZW1vdmVGaWx0ZXIoaWR4KX1cclxuICAgICAgICAgICAgICAgICAgZW5sYXJnZUZpbHRlcj17KCkgPT4gdGhpcy5wcm9wcy5lbmxhcmdlRmlsdGVyKGlkeCl9XHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVBbmltYXRpb24oaWR4KX1cclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlRmlsdGVyRmVhdHVyZT17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVGaWx0ZXJGZWF0dXJlKGlkeCl9XHJcbiAgICAgICAgICAgICAgICAgIHNldEZpbHRlcj17dGhpcy5wcm9wcy5zZXRGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBpbmFjdGl2ZT17aGFkRW1wdHlGaWx0ZXIgfHwgIWhhZERhdGFzZXR9IHdpZHRoPVwiMTA1cHhcIiBvbkNsaWNrPXt0aGlzLl9hZGRGaWx0ZXJ9PlxyXG4gICAgICAgICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPlxyXG4gICAgICAgICAgICBBZGQgRmlsdGVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJNYW5hZ2VyRmFjdG9yeTtcclxuIl19