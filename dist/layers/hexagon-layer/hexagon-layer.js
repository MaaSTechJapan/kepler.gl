"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hexagonVisConfigs = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _enhancedHexagonLayer = _interopRequireDefault(require("../../deckgl-layers/hexagon-layer/enhanced-hexagon-layer"));

var _hexagonUtils = require("./hexagon-utils");

var _hexagonLayerIcon = _interopRequireDefault(require("./hexagon-layer-icon"));

var _dataUtils = require("../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var hexagonVisConfigs = {
  opacity: 'opacity',
  worldUnitSize: 'worldUnitSize',
  resolution: 'resolution',
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
exports.hexagonVisConfigs = hexagonVisConfigs;

var HexagonLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(HexagonLayer, _AggregationLayer);

  var _super = _createSuper(HexagonLayer);

  function HexagonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(hexagonVisConfigs);

    _this.visConfigSettings.worldUnitSize.label = 'Hexagon Radius (km)';
    return _this;
  }

  (0, _createClass2["default"])(HexagonLayer, [{
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var radius = visConfig.worldUnitSize * 1000;
      return [new _enhancedHexagonLayer["default"](_objectSpread({}, this.getDefaultAggregationLayerProp(opts), {}, data, {
        wrapLongitude: false,
        radius: radius
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread({}, this.getDefaultHoverLayerProps(), {
        wrapLongitude: false,
        data: [(0, _hexagonUtils.hexagonToPolygonGeo)(objectHovered, {}, radius * visConfig.coverage, mapState)].filter(function (d) {
          return d;
        }),
        getLineColor: this.config.highlightColor,
        lineWidthScale: (0, _dataUtils.clamp)([1, 100], radius * 0.1 * zoomFactor)
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'hexagon';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Hexbin';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _hexagonLayerIcon["default"];
    }
  }]);
  return HexagonLayer;
}(_aggregationLayer["default"]);

exports["default"] = HexagonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbImhleGFnb25WaXNDb25maWdzIiwib3BhY2l0eSIsIndvcmxkVW5pdFNpemUiLCJyZXNvbHV0aW9uIiwiY29sb3JSYW5nZSIsImNvdmVyYWdlIiwic2l6ZVJhbmdlIiwicGVyY2VudGlsZSIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJlbGV2YXRpb25TY2FsZSIsImNvbG9yQWdncmVnYXRpb24iLCJzaXplQWdncmVnYXRpb24iLCJlbmFibGUzZCIsIkhleGFnb25MYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJ2aXNDb25maWdTZXR0aW5ncyIsImxhYmVsIiwib3B0cyIsImRhdGEiLCJvYmplY3RIb3ZlcmVkIiwibWFwU3RhdGUiLCJ6b29tRmFjdG9yIiwiZ2V0Wm9vbUZhY3RvciIsInZpc0NvbmZpZyIsImNvbmZpZyIsInJhZGl1cyIsIkVuaGFuY2VkSGV4YWdvbkxheWVyIiwiZ2V0RGVmYXVsdEFnZ3JlZ2F0aW9uTGF5ZXJQcm9wIiwid3JhcExvbmdpdHVkZSIsImlzTGF5ZXJIb3ZlcmVkIiwiR2VvSnNvbkxheWVyIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsImZpbHRlciIsImQiLCJnZXRMaW5lQ29sb3IiLCJoaWdobGlnaHRDb2xvciIsImxpbmVXaWR0aFNjYWxlIiwiSGV4YWdvbkxheWVySWNvbiIsIkFnZ3JlZ2F0aW9uTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRSxTQURzQjtBQUUvQkMsRUFBQUEsYUFBYSxFQUFFLGVBRmdCO0FBRy9CQyxFQUFBQSxVQUFVLEVBQUUsWUFIbUI7QUFJL0JDLEVBQUFBLFVBQVUsRUFBRSxZQUptQjtBQUsvQkMsRUFBQUEsUUFBUSxFQUFFLFVBTHFCO0FBTS9CQyxFQUFBQSxTQUFTLEVBQUUsZ0JBTm9CO0FBTy9CQyxFQUFBQSxVQUFVLEVBQUUsWUFQbUI7QUFRL0JDLEVBQUFBLG1CQUFtQixFQUFFLHFCQVJVO0FBUy9CQyxFQUFBQSxjQUFjLEVBQUUsZ0JBVGU7QUFVL0JDLEVBQUFBLGdCQUFnQixFQUFFLGFBVmE7QUFXL0JDLEVBQUFBLGVBQWUsRUFBRSxpQkFYYztBQVkvQkMsRUFBQUEsUUFBUSxFQUFFO0FBWnFCLENBQTFCOzs7SUFlY0MsWTs7Ozs7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjs7QUFFQSxVQUFLQyxpQkFBTCxDQUF1QmYsaUJBQXZCOztBQUNBLFVBQUtnQixpQkFBTCxDQUF1QmQsYUFBdkIsQ0FBcUNlLEtBQXJDLEdBQTZDLHFCQUE3QztBQUppQjtBQUtsQjs7OztnQ0FjV0MsSSxFQUFNO0FBQUEsVUFDVEMsSUFEUyxHQUN3QkQsSUFEeEIsQ0FDVEMsSUFEUztBQUFBLFVBQ0hDLGFBREcsR0FDd0JGLElBRHhCLENBQ0hFLGFBREc7QUFBQSxVQUNZQyxRQURaLEdBQ3dCSCxJQUR4QixDQUNZRyxRQURaO0FBRWhCLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLENBQW1CRixRQUFuQixDQUFuQjtBQUZnQixVQUdURyxTQUhTLEdBR0ksS0FBS0MsTUFIVCxDQUdURCxTQUhTO0FBSWhCLFVBQU1FLE1BQU0sR0FBR0YsU0FBUyxDQUFDdEIsYUFBVixHQUEwQixJQUF6QztBQUVBLGNBQ0UsSUFBSXlCLGdDQUFKLG1CQUNLLEtBQUtDLDhCQUFMLENBQW9DVixJQUFwQyxDQURMLE1BRUtDLElBRkw7QUFHRVUsUUFBQUEsYUFBYSxFQUFFLEtBSGpCO0FBSUVILFFBQUFBLE1BQU0sRUFBTkE7QUFKRixTQURGLDZDQVNNLEtBQUtJLGNBQUwsQ0FBb0JWLGFBQXBCLEtBQXNDLENBQUNJLFNBQVMsQ0FBQ1osUUFBakQsR0FDQSxDQUNFLElBQUltQixvQkFBSixtQkFDSyxLQUFLQyx5QkFBTCxFQURMO0FBRUVILFFBQUFBLGFBQWEsRUFBRSxLQUZqQjtBQUdFVixRQUFBQSxJQUFJLEVBQUUsQ0FDSix1Q0FBb0JDLGFBQXBCLEVBQW1DLEVBQW5DLEVBQXVDTSxNQUFNLEdBQUdGLFNBQVMsQ0FBQ25CLFFBQTFELEVBQW9FZ0IsUUFBcEUsQ0FESSxFQUVKWSxNQUZJLENBRUcsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFKO0FBQUEsU0FGSixDQUhSO0FBTUVDLFFBQUFBLFlBQVksRUFBRSxLQUFLVixNQUFMLENBQVlXLGNBTjVCO0FBT0VDLFFBQUFBLGNBQWMsRUFBRSxzQkFBTSxDQUFDLENBQUQsRUFBSSxHQUFKLENBQU4sRUFBZ0JYLE1BQU0sR0FBRyxHQUFULEdBQWVKLFVBQS9CO0FBUGxCLFNBREYsQ0FEQSxHQVlBLEVBckJOO0FBdUJEOzs7d0JBekNVO0FBQ1QsYUFBTyxTQUFQO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sUUFBUDtBQUNEOzs7d0JBRWU7QUFDZCxhQUFPZ0IsNEJBQVA7QUFDRDs7O0VBbEJ1Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0dlb0pzb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcclxuaW1wb3J0IEFnZ3JlZ2F0aW9uTGF5ZXIgZnJvbSAnLi4vYWdncmVnYXRpb24tbGF5ZXInO1xyXG5pbXBvcnQgRW5oYW5jZWRIZXhhZ29uTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy9oZXhhZ29uLWxheWVyL2VuaGFuY2VkLWhleGFnb24tbGF5ZXInO1xyXG5pbXBvcnQge2hleGFnb25Ub1BvbHlnb25HZW99IGZyb20gJy4vaGV4YWdvbi11dGlscyc7XHJcbmltcG9ydCBIZXhhZ29uTGF5ZXJJY29uIGZyb20gJy4vaGV4YWdvbi1sYXllci1pY29uJztcclxuaW1wb3J0IHtjbGFtcH0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgaGV4YWdvblZpc0NvbmZpZ3MgPSB7XHJcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxyXG4gIHdvcmxkVW5pdFNpemU6ICd3b3JsZFVuaXRTaXplJyxcclxuICByZXNvbHV0aW9uOiAncmVzb2x1dGlvbicsXHJcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxyXG4gIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxyXG4gIHNpemVSYW5nZTogJ2VsZXZhdGlvblJhbmdlJyxcclxuICBwZXJjZW50aWxlOiAncGVyY2VudGlsZScsXHJcbiAgZWxldmF0aW9uUGVyY2VudGlsZTogJ2VsZXZhdGlvblBlcmNlbnRpbGUnLFxyXG4gIGVsZXZhdGlvblNjYWxlOiAnZWxldmF0aW9uU2NhbGUnLFxyXG4gIGNvbG9yQWdncmVnYXRpb246ICdhZ2dyZWdhdGlvbicsXHJcbiAgc2l6ZUFnZ3JlZ2F0aW9uOiAnc2l6ZUFnZ3JlZ2F0aW9uJyxcclxuICBlbmFibGUzZDogJ2VuYWJsZTNkJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbkxheWVyIGV4dGVuZHMgQWdncmVnYXRpb25MYXllciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGhleGFnb25WaXNDb25maWdzKTtcclxuICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3Mud29ybGRVbml0U2l6ZS5sYWJlbCA9ICdIZXhhZ29uIFJhZGl1cyAoa20pJztcclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdoZXhhZ29uJztcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuICdIZXhiaW4nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheWVySWNvbigpIHtcclxuICAgIHJldHVybiBIZXhhZ29uTGF5ZXJJY29uO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGF5ZXIob3B0cykge1xyXG4gICAgY29uc3Qge2RhdGEsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlfSA9IG9wdHM7XHJcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcclxuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XHJcbiAgICBjb25zdCByYWRpdXMgPSB2aXNDb25maWcud29ybGRVbml0U2l6ZSAqIDEwMDA7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgbmV3IEVuaGFuY2VkSGV4YWdvbkxheWVyKHtcclxuICAgICAgICAuLi50aGlzLmdldERlZmF1bHRBZ2dyZWdhdGlvbkxheWVyUHJvcChvcHRzKSxcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxyXG4gICAgICAgIHJhZGl1c1xyXG4gICAgICB9KSxcclxuXHJcbiAgICAgIC8vIHJlbmRlciBhbiBvdXRsaW5lIG9mIGVhY2ggaGV4YWdvbiBpZiBub3QgZXh0cnVkZWRcclxuICAgICAgLi4uKHRoaXMuaXNMYXllckhvdmVyZWQob2JqZWN0SG92ZXJlZCkgJiYgIXZpc0NvbmZpZy5lbmFibGUzZFxyXG4gICAgICAgID8gW1xyXG4gICAgICAgICAgICBuZXcgR2VvSnNvbkxheWVyKHtcclxuICAgICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMoKSxcclxuICAgICAgICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICBoZXhhZ29uVG9Qb2x5Z29uR2VvKG9iamVjdEhvdmVyZWQsIHt9LCByYWRpdXMgKiB2aXNDb25maWcuY292ZXJhZ2UsIG1hcFN0YXRlKVxyXG4gICAgICAgICAgICAgIF0uZmlsdGVyKGQgPT4gZCksXHJcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcclxuICAgICAgICAgICAgICBsaW5lV2lkdGhTY2FsZTogY2xhbXAoWzEsIDEwMF0sIHJhZGl1cyAqIDAuMSAqIHpvb21GYWN0b3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgOiBbXSlcclxuICAgIF07XHJcbiAgfVxyXG59XHJcbiJdfQ==