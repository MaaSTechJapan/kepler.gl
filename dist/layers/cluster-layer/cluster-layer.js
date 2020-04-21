"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clusterVisConfigs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _layers = require("@deck.gl/layers");

var _clusterLayer = _interopRequireDefault(require("../../deckgl-layers/cluster-layer/cluster-layer"));

var _defaultSettings = require("../../constants/default-settings");

var _clusterLayerIcon = _interopRequireDefault(require("./cluster-layer-icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var clusterVisConfigs = {
  opacity: 'opacity',
  clusterRadius: 'clusterRadius',
  colorRange: 'colorRange',
  radiusRange: 'clusterRadiusRange',
  colorAggregation: 'aggregation'
};
exports.clusterVisConfigs = clusterVisConfigs;

var ClusterLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(ClusterLayer, _AggregationLayer);

  var _super = _createSuper(ClusterLayer);

  function ClusterLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ClusterLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(clusterVisConfigs);

    return _this;
  }

  (0, _createClass2["default"])(ClusterLayer, [{
    key: "renderLayer",
    value: function renderLayer(opts) {
      var visConfig = this.config.visConfig;
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          layerCallbacks = opts.layerCallbacks;
      var updateTriggers = {
        getColorValue: {
          colorField: this.config.colorField,
          colorAggregation: this.config.visConfig.colorAggregation
        },
        filterData: _objectSpread({
          filterRange: gpuFilter.filterRange
        }, gpuFilter.filterValueUpdateTriggers)
      };
      var filterData = data._filterData,
          clusterData = (0, _objectWithoutProperties2["default"])(data, ["_filterData"]);
      return [new _clusterLayer["default"](_objectSpread({}, this.getDefaultDeckLayerProps(opts), {}, clusterData, {
        filterData: filterData,
        // radius
        radiusScale: 1,
        radiusRange: visConfig.radiusRange,
        clusterRadius: visConfig.clusterRadius,
        // color
        colorRange: this.getColorRange(visConfig.colorRange),
        colorScaleType: this.config.colorScale,
        colorAggregation: visConfig.colorAggregation,
        zoom: Math.round(mapState.zoom),
        width: mapState.width,
        height: mapState.height,
        // updateTriggers
        updateTriggers: updateTriggers,
        // call back from layer after calculate clusters
        onSetColorDomain: layerCallbacks.onSetLayerDomain
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _layers.ScatterplotLayer({
        id: "".concat(this.id, "-hovered"),
        data: [objectHovered.object],
        getFillColor: this.config.highlightColor,
        getRadius: function getRadius(d) {
          return d.radius;
        },
        radiusScale: 1,
        pickable: false
      })] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'cluster';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _clusterLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          aggregation: 'colorAggregation',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.colorAggr,
          defaultMeasure: 'Point Count',
          domain: 'colorDomain',
          field: 'colorField',
          key: 'color',
          property: 'color',
          range: 'colorRange',
          scale: 'colorScale'
        }
      };
    }
  }]);
  return ClusterLayer;
}(_aggregationLayer["default"]);

exports["default"] = ClusterLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvY2x1c3Rlci1sYXllci9jbHVzdGVyLWxheWVyLmpzIl0sIm5hbWVzIjpbImNsdXN0ZXJWaXNDb25maWdzIiwib3BhY2l0eSIsImNsdXN0ZXJSYWRpdXMiLCJjb2xvclJhbmdlIiwicmFkaXVzUmFuZ2UiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiQ2x1c3RlckxheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsIm9wdHMiLCJ2aXNDb25maWciLCJjb25maWciLCJkYXRhIiwiZ3B1RmlsdGVyIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwibGF5ZXJDYWxsYmFja3MiLCJ1cGRhdGVUcmlnZ2VycyIsImdldENvbG9yVmFsdWUiLCJjb2xvckZpZWxkIiwiZmlsdGVyRGF0YSIsImZpbHRlclJhbmdlIiwiZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyIsIl9maWx0ZXJEYXRhIiwiY2x1c3RlckRhdGEiLCJEZWNrR0xDbHVzdGVyTGF5ZXIiLCJnZXREZWZhdWx0RGVja0xheWVyUHJvcHMiLCJyYWRpdXNTY2FsZSIsImdldENvbG9yUmFuZ2UiLCJjb2xvclNjYWxlVHlwZSIsImNvbG9yU2NhbGUiLCJ6b29tIiwiTWF0aCIsInJvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJvblNldENvbG9yRG9tYWluIiwib25TZXRMYXllckRvbWFpbiIsImlzTGF5ZXJIb3ZlcmVkIiwiU2NhdHRlcnBsb3RMYXllciIsImlkIiwib2JqZWN0IiwiZ2V0RmlsbENvbG9yIiwiaGlnaGxpZ2h0Q29sb3IiLCJnZXRSYWRpdXMiLCJkIiwicmFkaXVzIiwicGlja2FibGUiLCJDbHVzdGVyTGF5ZXJJY29uIiwiY29sb3IiLCJhZ2dyZWdhdGlvbiIsImNoYW5uZWxTY2FsZVR5cGUiLCJDSEFOTkVMX1NDQUxFUyIsImNvbG9yQWdnciIsImRlZmF1bHRNZWFzdXJlIiwiZG9tYWluIiwiZmllbGQiLCJrZXkiLCJwcm9wZXJ0eSIsInJhbmdlIiwic2NhbGUi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QkMsUUFBQUEsU0FBUyxFQUFFLG1CQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0MsTUFBTjtBQUFBLFNBSk87QUFLbkJuQixRQUFBQSxXQUFXLEVBQUUsQ0FMTTtBQU1uQm9CLFFBQUFBLFFBQVEsRUFBRTtBQU5TLE9BQXJCLENBREYsQ0FEQSxHQVdBLEVBdENOO0FBd0NEOzs7d0JBaEZVO0FBQ1QsYUFBTyxTQUFQO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU9DLDRCQUFQO0FBQ0Q7Ozt3QkFFb0I7QUFDbkIsYUFBTztBQUNMQyxRQUFBQSxLQUFLLEVBQUU7QUFDTEMsVUFBQUEsV0FBVyxFQUFFLGtCQURSO0FBRUxDLFVBQUFBLGdCQUFnQixFQUFFQyxnQ0FBZUMsU0FGNUI7QUFHTEMsVUFBQUEsY0FBYyxFQUFFLGFBSFg7QUFJTEMsVUFBQUEsTUFBTSxFQUFFLGFBSkg7QUFLTEMsVUFBQUEsS0FBSyxFQUFFLFlBTEY7QUFNTEMsVUFBQUEsR0FBRyxFQUFFLE9BTkE7QUFPTEMsVUFBQUEsUUFBUSxFQUFFLE9BUEw7QUFRTEMsVUFBQUEsS0FBSyxFQUFFLFlBUkY7QUFTTEMsVUFBQUEsS0FBSyxFQUFFO0FBVEY7QUFERixPQUFQO0FBYUQ7OztFQTVCdUNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IEFnZ3JlZ2F0aW9uTGF5ZXIgZnJvbSAnLi4vYWdncmVnYXRpb24tbGF5ZXInO1xyXG5pbXBvcnQge1NjYXR0ZXJwbG90TGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XHJcblxyXG5pbXBvcnQgRGVja0dMQ2x1c3RlckxheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvY2x1c3Rlci1sYXllci9jbHVzdGVyLWxheWVyJztcclxuaW1wb3J0IHtDSEFOTkVMX1NDQUxFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQgQ2x1c3RlckxheWVySWNvbiBmcm9tICcuL2NsdXN0ZXItbGF5ZXItaWNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgY2x1c3RlclZpc0NvbmZpZ3MgPSB7XHJcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxyXG4gIGNsdXN0ZXJSYWRpdXM6ICdjbHVzdGVyUmFkaXVzJyxcclxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXHJcbiAgcmFkaXVzUmFuZ2U6ICdjbHVzdGVyUmFkaXVzUmFuZ2UnLFxyXG4gIGNvbG9yQWdncmVnYXRpb246ICdhZ2dyZWdhdGlvbidcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsdXN0ZXJMYXllciBleHRlbmRzIEFnZ3JlZ2F0aW9uTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGNsdXN0ZXJWaXNDb25maWdzKTtcclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdjbHVzdGVyJztcclxuICB9XHJcblxyXG4gIGdldCBsYXllckljb24oKSB7XHJcbiAgICByZXR1cm4gQ2x1c3RlckxheWVySWNvbjtcclxuICB9XHJcblxyXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgYWdncmVnYXRpb246ICdjb2xvckFnZ3JlZ2F0aW9uJyxcclxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3IsXHJcbiAgICAgICAgZGVmYXVsdE1lYXN1cmU6ICdQb2ludCBDb3VudCcsXHJcbiAgICAgICAgZG9tYWluOiAnY29sb3JEb21haW4nLFxyXG4gICAgICAgIGZpZWxkOiAnY29sb3JGaWVsZCcsXHJcbiAgICAgICAga2V5OiAnY29sb3InLFxyXG4gICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxyXG4gICAgICAgIHJhbmdlOiAnY29sb3JSYW5nZScsXHJcbiAgICAgICAgc2NhbGU6ICdjb2xvclNjYWxlJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGF5ZXIob3B0cykge1xyXG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcclxuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlLCBsYXllckNhbGxiYWNrc30gPSBvcHRzO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xyXG4gICAgICBnZXRDb2xvclZhbHVlOiB7XHJcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgICBjb2xvckFnZ3JlZ2F0aW9uOiB0aGlzLmNvbmZpZy52aXNDb25maWcuY29sb3JBZ2dyZWdhdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgZmlsdGVyUmFuZ2U6IGdwdUZpbHRlci5maWx0ZXJSYW5nZSxcclxuICAgICAgICAuLi5ncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qge19maWx0ZXJEYXRhOiBmaWx0ZXJEYXRhLCAuLi5jbHVzdGVyRGF0YX0gPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBEZWNrR0xDbHVzdGVyTGF5ZXIoe1xyXG4gICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpLFxyXG4gICAgICAgIC4uLmNsdXN0ZXJEYXRhLFxyXG4gICAgICAgIGZpbHRlckRhdGEsXHJcblxyXG4gICAgICAgIC8vIHJhZGl1c1xyXG4gICAgICAgIHJhZGl1c1NjYWxlOiAxLFxyXG4gICAgICAgIHJhZGl1c1JhbmdlOiB2aXNDb25maWcucmFkaXVzUmFuZ2UsXHJcbiAgICAgICAgY2x1c3RlclJhZGl1czogdmlzQ29uZmlnLmNsdXN0ZXJSYWRpdXMsXHJcblxyXG4gICAgICAgIC8vIGNvbG9yXHJcbiAgICAgICAgY29sb3JSYW5nZTogdGhpcy5nZXRDb2xvclJhbmdlKHZpc0NvbmZpZy5jb2xvclJhbmdlKSxcclxuICAgICAgICBjb2xvclNjYWxlVHlwZTogdGhpcy5jb25maWcuY29sb3JTY2FsZSxcclxuICAgICAgICBjb2xvckFnZ3JlZ2F0aW9uOiB2aXNDb25maWcuY29sb3JBZ2dyZWdhdGlvbixcclxuXHJcbiAgICAgICAgem9vbTogTWF0aC5yb3VuZChtYXBTdGF0ZS56b29tKSxcclxuICAgICAgICB3aWR0aDogbWFwU3RhdGUud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtYXBTdGF0ZS5oZWlnaHQsXHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZVRyaWdnZXJzXHJcbiAgICAgICAgdXBkYXRlVHJpZ2dlcnMsXHJcblxyXG4gICAgICAgIC8vIGNhbGwgYmFjayBmcm9tIGxheWVyIGFmdGVyIGNhbGN1bGF0ZSBjbHVzdGVyc1xyXG4gICAgICAgIG9uU2V0Q29sb3JEb21haW46IGxheWVyQ2FsbGJhY2tzLm9uU2V0TGF5ZXJEb21haW5cclxuICAgICAgfSksXHJcbiAgICAgIC8vIGhvdmVyIGxheWVyXHJcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIG5ldyBTY2F0dGVycGxvdExheWVyKHtcclxuICAgICAgICAgICAgICBpZDogYCR7dGhpcy5pZH0taG92ZXJlZGAsXHJcbiAgICAgICAgICAgICAgZGF0YTogW29iamVjdEhvdmVyZWQub2JqZWN0XSxcclxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxyXG4gICAgICAgICAgICAgIGdldFJhZGl1czogZCA9PiBkLnJhZGl1cyxcclxuICAgICAgICAgICAgICByYWRpdXNTY2FsZTogMSxcclxuICAgICAgICAgICAgICBwaWNrYWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIF1cclxuICAgICAgICA6IFtdKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19