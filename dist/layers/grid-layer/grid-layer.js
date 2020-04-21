"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.gridVisConfigs = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _enhancedCpuGridLayer = _interopRequireDefault(require("../../deckgl-layers/grid-layer/enhanced-cpu-grid-layer"));

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _gridUtils = require("./grid-utils");

var _gridLayerIcon = _interopRequireDefault(require("./grid-layer-icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var gridVisConfigs = {
  opacity: 'opacity',
  worldUnitSize: 'worldUnitSize',
  colorRange: 'colorRange',
  coverage: 'coverage',
  sizeRange: 'elevationRange',
  percentile: 'percentile',
  elevationPercentile: 'elevationPercentile',
  elevationScale: 'elevationScale',
  colorAggregation: 'aggregation',
  sizeAggregation: 'sizeAggregation',
  enable3d: 'enable3d'
};
exports.gridVisConfigs = gridVisConfigs;

var GridLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(GridLayer, _AggregationLayer);

  var _super = _createSuper(GridLayer);

  function GridLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GridLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(gridVisConfigs);

    _this.visConfigSettings.worldUnitSize.label = 'Grid Size (km)';
    return _this;
  }

  (0, _createClass2["default"])(GridLayer, [{
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var cellSize = visConfig.worldUnitSize * 1000;
      return [new _enhancedCpuGridLayer["default"](_objectSpread({}, this.getDefaultAggregationLayerProp(opts), {}, data, {
        wrapLongitude: false,
        cellSize: cellSize
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread({}, this.getDefaultHoverLayerProps(), {
        wrapLongitude: false,
        data: [(0, _gridUtils.pointToPolygonGeo)({
          object: objectHovered.object,
          cellSize: cellSize,
          coverage: visConfig.coverage,
          mapState: mapState
        })],
        getLineColor: this.config.highlightColor,
        lineWidthScale: 8 * zoomFactor
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'grid';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _gridLayerIcon["default"];
    }
  }]);
  return GridLayer;
}(_aggregationLayer["default"]);

exports["default"] = GridLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ3JpZC1sYXllci9ncmlkLWxheWVyLmpzIl0sIm5hbWVzIjpbImdyaWRWaXNDb25maWdzIiwib3BhY2l0eSIsIndvcmxkVW5pdFNpemUiLCJjb2xvclJhbmdlIiwiY292ZXJhZ2UiLCJzaXplUmFuZ2UiLCJwZXJjZW50aWxlIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImVsZXZhdGlvblNjYWxlIiwiY29sb3JBZ2dyZWdhdGlvbiIsInNpemVBZ2dyZWdhdGlvbiIsImVuYWJsZTNkIiwiR3JpZExheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsInZpc0NvbmZpZ1NldHRpbmdzIiwibGFiZWwiLCJvcHRzIiwiZGF0YSIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsInpvb21GYWN0b3IiLCJnZXRab29tRmFjdG9yIiwidmlzQ29uZmlnIiwiY29uZmlnIiwiY2VsbFNpemUiLCJFbmhhbmNlZEdyaWRMYXllciIsImdldERlZmF1bHRBZ2dyZWdhdGlvbkxheWVyUHJvcCIsIndyYXBMb25naXR1ZGUiLCJpc0xheWVySG92ZXJlZCIsIkdlb0pzb25MYXllciIsImdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMiLCJvYmplY3QiLCJnZXRMaW5lQ29sb3IiLCJoaWdobGlnaHRDb2xvciIsImxpbmVXaWR0aFNjYWxlIiwiR3JpZExheWVySWNvbiIsIkFnZ3JlZ2F0aW9uTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsY0FBYyxHQUFHO0FBQzVCQyxFQUFBQSxPQUFPLEVBQUUsU0FEbUI7QUFFNUJDLEVBQUFBLGFBQWEsRUFBRSxlQUZhO0FBRzVCQyxFQUFBQSxVQUFVLEVBQUUsWUFIZ0I7QUFJNUJDLEVBQUFBLFFBQVEsRUFBRSxVQUprQjtBQUs1QkMsRUFBQUEsU0FBUyxFQUFFLGdCQUxpQjtBQU01QkMsRUFBQUEsVUFBVSxFQUFFLFlBTmdCO0FBTzVCQyxFQUFBQSxtQkFBbUIsRUFBRSxxQkFQTztBQVE1QkMsRUFBQUEsY0FBYyxFQUFFLGdCQVJZO0FBUzVCQyxFQUFBQSxnQkFBZ0IsRUFBRSxhQVRVO0FBVTVCQyxFQUFBQSxlQUFlLEVBQUUsaUJBVlc7QUFXNUJDLEVBQUFBLFFBQVEsRUFBRTtBQVhrQixDQUF2Qjs7O0lBY2NDLFM7Ozs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47O0FBRUEsVUFBS0MsaUJBQUwsQ0FBdUJkLGNBQXZCOztBQUNBLFVBQUtlLGlCQUFMLENBQXVCYixhQUF2QixDQUFxQ2MsS0FBckMsR0FBNkMsZ0JBQTdDO0FBSmlCO0FBS2xCOzs7O2dDQVVXQyxJLEVBQU07QUFBQSxVQUNUQyxJQURTLEdBQ3dCRCxJQUR4QixDQUNUQyxJQURTO0FBQUEsVUFDSEMsYUFERyxHQUN3QkYsSUFEeEIsQ0FDSEUsYUFERztBQUFBLFVBQ1lDLFFBRFosR0FDd0JILElBRHhCLENBQ1lHLFFBRFo7QUFHaEIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJGLFFBQW5CLENBQW5CO0FBSGdCLFVBSVRHLFNBSlMsR0FJSSxLQUFLQyxNQUpULENBSVRELFNBSlM7QUFLaEIsVUFBTUUsUUFBUSxHQUFHRixTQUFTLENBQUNyQixhQUFWLEdBQTBCLElBQTNDO0FBRUEsY0FDRSxJQUFJd0IsZ0NBQUosbUJBQ0ssS0FBS0MsOEJBQUwsQ0FBb0NWLElBQXBDLENBREwsTUFFS0MsSUFGTDtBQUdFVSxRQUFBQSxhQUFhLEVBQUUsS0FIakI7QUFJRUgsUUFBQUEsUUFBUSxFQUFSQTtBQUpGLFNBREYsNkNBU00sS0FBS0ksY0FBTCxDQUFvQlYsYUFBcEIsS0FBc0MsQ0FBQ0ksU0FBUyxDQUFDWixRQUFqRCxHQUNBLENBQ0UsSUFBSW1CLG9CQUFKLG1CQUNLLEtBQUtDLHlCQUFMLEVBREw7QUFFRUgsUUFBQUEsYUFBYSxFQUFFLEtBRmpCO0FBR0VWLFFBQUFBLElBQUksRUFBRSxDQUNKLGtDQUFrQjtBQUNoQmMsVUFBQUEsTUFBTSxFQUFFYixhQUFhLENBQUNhLE1BRE47QUFFaEJQLFVBQUFBLFFBQVEsRUFBUkEsUUFGZ0I7QUFHaEJyQixVQUFBQSxRQUFRLEVBQUVtQixTQUFTLENBQUNuQixRQUhKO0FBSWhCZ0IsVUFBQUEsUUFBUSxFQUFSQTtBQUpnQixTQUFsQixDQURJLENBSFI7QUFXRWEsUUFBQUEsWUFBWSxFQUFFLEtBQUtULE1BQUwsQ0FBWVUsY0FYNUI7QUFZRUMsUUFBQUEsY0FBYyxFQUFFLElBQUlkO0FBWnRCLFNBREYsQ0FEQSxHQWlCQSxFQTFCTjtBQTRCRDs7O3dCQTNDVTtBQUNULGFBQU8sTUFBUDtBQUNEOzs7d0JBRWU7QUFDZCxhQUFPZSx5QkFBUDtBQUNEOzs7RUFkb0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtHZW9Kc29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XHJcbmltcG9ydCBFbmhhbmNlZEdyaWRMYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2dyaWQtbGF5ZXIvZW5oYW5jZWQtY3B1LWdyaWQtbGF5ZXInO1xyXG5pbXBvcnQgQWdncmVnYXRpb25MYXllciBmcm9tICcuLi9hZ2dyZWdhdGlvbi1sYXllcic7XHJcbmltcG9ydCB7cG9pbnRUb1BvbHlnb25HZW99IGZyb20gJy4vZ3JpZC11dGlscyc7XHJcbmltcG9ydCBHcmlkTGF5ZXJJY29uIGZyb20gJy4vZ3JpZC1sYXllci1pY29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBncmlkVmlzQ29uZmlncyA9IHtcclxuICBvcGFjaXR5OiAnb3BhY2l0eScsXHJcbiAgd29ybGRVbml0U2l6ZTogJ3dvcmxkVW5pdFNpemUnLFxyXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcclxuICBjb3ZlcmFnZTogJ2NvdmVyYWdlJyxcclxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXHJcbiAgcGVyY2VudGlsZTogJ3BlcmNlbnRpbGUnLFxyXG4gIGVsZXZhdGlvblBlcmNlbnRpbGU6ICdlbGV2YXRpb25QZXJjZW50aWxlJyxcclxuICBlbGV2YXRpb25TY2FsZTogJ2VsZXZhdGlvblNjYWxlJyxcclxuICBjb2xvckFnZ3JlZ2F0aW9uOiAnYWdncmVnYXRpb24nLFxyXG4gIHNpemVBZ2dyZWdhdGlvbjogJ3NpemVBZ2dyZWdhdGlvbicsXHJcbiAgZW5hYmxlM2Q6ICdlbmFibGUzZCdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRMYXllciBleHRlbmRzIEFnZ3JlZ2F0aW9uTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclZpc0NvbmZpZyhncmlkVmlzQ29uZmlncyk7XHJcbiAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzLndvcmxkVW5pdFNpemUubGFiZWwgPSAnR3JpZCBTaXplIChrbSknO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ2dyaWQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheWVySWNvbigpIHtcclxuICAgIHJldHVybiBHcmlkTGF5ZXJJY29uO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGF5ZXIob3B0cykge1xyXG4gICAgY29uc3Qge2RhdGEsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlfSA9IG9wdHM7XHJcblxyXG4gICAgY29uc3Qgem9vbUZhY3RvciA9IHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XHJcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xyXG4gICAgY29uc3QgY2VsbFNpemUgPSB2aXNDb25maWcud29ybGRVbml0U2l6ZSAqIDEwMDA7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgbmV3IEVuaGFuY2VkR3JpZExheWVyKHtcclxuICAgICAgICAuLi50aGlzLmdldERlZmF1bHRBZ2dyZWdhdGlvbkxheWVyUHJvcChvcHRzKSxcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxyXG4gICAgICAgIGNlbGxTaXplXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgLy8gcmVuZGVyIGFuIG91dGxpbmUgb2YgZWFjaCBjZWxsIGlmIG5vdCBleHRydWRlZFxyXG4gICAgICAuLi4odGhpcy5pc0xheWVySG92ZXJlZChvYmplY3RIb3ZlcmVkKSAmJiAhdmlzQ29uZmlnLmVuYWJsZTNkXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIG5ldyBHZW9Kc29uTGF5ZXIoe1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxyXG4gICAgICAgICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgIHBvaW50VG9Qb2x5Z29uR2VvKHtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3RIb3ZlcmVkLm9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgY2VsbFNpemUsXHJcbiAgICAgICAgICAgICAgICAgIGNvdmVyYWdlOiB2aXNDb25maWcuY292ZXJhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIG1hcFN0YXRlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcclxuICAgICAgICAgICAgICBsaW5lV2lkdGhTY2FsZTogOCAqIHpvb21GYWN0b3JcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIF1cclxuICAgICAgICA6IFtdKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19