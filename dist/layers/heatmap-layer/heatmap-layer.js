"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.heatmapVisConfigs = exports.pointColResolver = exports.pointPosAccessor = exports.MAX_ZOOM_LEVEL = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _defaultSettings = require("../../constants/default-settings");

var _colorUtils = require("../../utils/color-utils");

var _mapboxglLayer = _interopRequireDefault(require("../mapboxgl-layer"));

var _heatmapLayerIcon = _interopRequireDefault(require("./heatmap-layer-icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MAX_ZOOM_LEVEL = 18;
exports.MAX_ZOOM_LEVEL = MAX_ZOOM_LEVEL;

var pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return function (d) {
    return [// lng
    d[lng.fieldIdx], // lat
    d[lat.fieldIdx]];
  };
};

exports.pointPosAccessor = pointPosAccessor;

var pointColResolver = function pointColResolver(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng;
  return "".concat(lat.fieldIdx, "-").concat(lng.fieldIdx);
};

exports.pointColResolver = pointColResolver;
var heatmapVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  radius: 'heatmapRadius'
};
/**
 *
 * @param {Object} colorRange
 * @return {Array} [
 *  0, "rgba(33,102,172,0)",
 *  0.2, "rgb(103,169,207)",
 *  0.4, "rgb(209,229,240)",
 *  0.6, "rgb(253,219,199)",
 *  0.8, "rgb(239,138,98)",
 *  1, "rgb(178,24,43)"
 * ]
 */

exports.heatmapVisConfigs = heatmapVisConfigs;

var heatmapDensity = function heatmapDensity(colorRange) {
  var scaleFunction = _defaultSettings.SCALE_FUNC.quantize;
  var colors = ['#000000'].concat((0, _toConsumableArray2["default"])(colorRange.colors));
  var scale = scaleFunction().domain([0, 1]).range(colors);
  var colorDensity = scale.range().reduce(function (bands, level) {
    var invert = scale.invertExtent(level);
    return [].concat((0, _toConsumableArray2["default"])(bands), [invert[0], // first value in the range
    "rgb(".concat((0, _colorUtils.hexToRgb)(level).join(','), ")") // color
    ]);
  }, []);
  colorDensity[1] = 'rgba(0,0,0,0)';
  return colorDensity;
};

var HeatmapLayer = /*#__PURE__*/function (_MapboxGLLayer) {
  (0, _inherits2["default"])(HeatmapLayer, _MapboxGLLayer);

  var _super = _createSuper(HeatmapLayer);

  function HeatmapLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HeatmapLayer);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columnsSelector", function (config) {
      return pointColResolver(config.columns);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "visConfigSelector", function (config) {
      return config.visConfig;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "weightFieldSelector", function (config) {
      return config.weightField ? config.weightField.name : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "weightDomainSelector", function (config) {
      return config.weightDomain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "paintSelector", (0, _reselect.createSelector)(_this.visConfigSelector, _this.weightFieldSelector, _this.weightDomainSelector, function (visConfig, weightField, weightDomain) {
      return {
        'heatmap-weight': weightField ? ['interpolate', ['linear'], ['get', weightField], weightDomain[0], 0, weightDomain[1], 1] : 1,
        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
        'heatmap-color': ['interpolate', ['linear'], ['heatmap-density']].concat((0, _toConsumableArray2["default"])(heatmapDensity(visConfig.colorRange))),
        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, visConfig.radius // radius
        ],
        'heatmap-opacity': visConfig.opacity
      };
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "computeHeatmapConfiguration", (0, _reselect.createSelector)(_this.sourceSelector, _this.filterSelector, _this.paintSelector, function (source, filter, paint) {
      return _objectSpread({
        type: 'heatmap',
        id: _this.id,
        source: source,
        layout: {
          visibility: 'visible'
        },
        maxzoom: MAX_ZOOM_LEVEL,
        paint: paint
      }, _this.isValidFilter(filter) ? {
        filter: filter
      } : {});
    }));

    _this.registerVisConfig(heatmapVisConfigs);

    _this.getPosition = (0, _lodash["default"])(pointPosAccessor, pointColResolver);
    return _this;
  }

  (0, _createClass2["default"])(HeatmapLayer, [{
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(channel) {
      return channel === 'color' ? {
        label: 'color',
        measure: 'Density'
      } : {
        label: 'weight',
        measure: this.config.weightField ? this.config.weightField.name : 'Density'
      };
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // mapbox heatmap layer color is always based on density
      // no need to set colorField, colorDomain and colorScale

      /* eslint-disable no-unused-vars */
      var _get$call$weightField = _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HeatmapLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        weightField: null,
        weightDomain: [0, 1],
        weightScale: 'linear'
      }),
          colorField = _get$call$weightField.colorField,
          colorDomain = _get$call$weightField.colorDomain,
          colorScale = _get$call$weightField.colorScale,
          layerConfig = (0, _objectWithoutProperties2["default"])(_get$call$weightField, ["colorField", "colorDomain", "colorScale"]);
      /* eslint-enable no-unused-vars */


      return layerConfig;
    }
  }, {
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getPosition(this.config.columns);
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getPosition = this.getPositionAccessor();
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition(d);
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "getGeometry",
    value: function getGeometry(position) {
      return position.every(Number.isFinite) ? {
        type: 'Point',
        coordinates: position
      } : null;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var weightField = this.config.weightField;
      var getPosition = this.getPositionAccessor();

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var newConfig = this.computeHeatmapConfiguration(this.config, datasets);
      newConfig.id = this.id;
      return {
        columns: this.config.columns,
        config: newConfig,
        data: data,
        weightField: weightField,
        getPosition: getPosition
      };
    }
  }, {
    key: "type",
    get: function get() {
      return 'heatmap';
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        weight: {
          property: 'weight',
          field: 'weightField',
          scale: 'weightScale',
          domain: 'weightDomain',
          key: 'weight',
          // supportedFieldTypes can be determined by channelScaleType
          // or specified here
          defaultMeasure: 'density',
          supportedFieldTypes: [_defaultSettings.ALL_FIELD_TYPES.real, _defaultSettings.ALL_FIELD_TYPES.integer],
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _heatmapLayerIcon["default"];
    }
  }]);
  return HeatmapLayer;
}(_mapboxglLayer["default"]);

var _default = HeatmapLayer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGVhdG1hcC1sYXllci9oZWF0bWFwLWxheWVyLmpzIl0sIm5hbWVzIjpbIk1BWF9aT09NX0xFVkVMIiwicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImQiLCJmaWVsZElkeCIsInBvaW50Q29sUmVzb2x2ZXIiLCJoZWF0bWFwVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwicmFkaXVzIiwiaGVhdG1hcERlbnNpdHkiLCJzY2FsZUZ1bmN0aW9uIiwiU0NBTEVfRlVOQyIsInF1YW50aXplIiwiY29sb3JzIiwic2NhbGUiLCJkb21haW4iLCJyYW5nZSIsImNvbG9yRGVuc2l0eSIsInJlZHVjZSIsImJhbmRzIiwibGV2ZWwiLCJpbnZlcnQiLCJpbnZlcnRFeHRlbnQiLCJqb2luIiwiSGVhdG1hcExheWVyIiwicHJvcHMiLCJjb25maWciLCJjb2x1bW5zIiwidmlzQ29uZmlnIiwid2VpZ2h0RmllbGQiLCJuYW1lIiwid2VpZ2h0RG9tYWluIiwidmlzQ29uZmlnU2VsZWN0b3IiLCJ3ZWlnaHRGaWVsZFNlbGVjdG9yIiwid2VpZ2h0RG9tYWluU2VsZWN0b3IiLCJzb3VyY2VTZWxlY3RvciIsImZpbHRlclNlbGVjdG9yIiwicGFpbnRTZWxlY3RvciIsInNvdXJjZSIsImZpbHRlciIsInBhaW50IiwidHlwZSIsImlkIiwibGF5b3V0IiwidmlzaWJpbGl0eSIsIm1heHpvb20iLCJpc1ZhbGlkRmlsdGVyIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbiIsImNoYW5uZWwiLCJsYWJlbCIsIm1lYXN1cmUiLCJ3ZWlnaHRTY2FsZSIsImNvbG9yRmllbGQiLCJjb2xvckRvbWFpbiIsImNvbG9yU2NhbGUiLCJsYXllckNvbmZpZyIsImFsbERhdGEiLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsInBvc2l0aW9uIiwiZXZlcnkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImNvb3JkaW5hdGVzIiwiZGF0YXNldHMiLCJvbGRMYXllckRhdGEiLCJ1cGRhdGVEYXRhIiwiZGF0YSIsIm5ld0NvbmZpZyIsImNvbXB1dGVIZWF0bWFwQ29uZmlndXJhdGlvbiIsIndlaWdodCIsInByb3BlcnR5IiwiZmllbGQiLCJrZXkiLCJkZWZhdWx0TWVhc3VyZSIsInN1cHBvcnRlZEZpZWxkVHlwZXMiLCJBTExfRklFTERfVFlQRVMiLCJyZWFsIiwiaW50ZWdlciIsImNoYW5uZWxTY2FsZVR5cGUiLCJDSEFOTkVMX1NDQUxFUyIsInNpemUiLCJIZWF0bWFwTGF5ZXJJY29uIiwiTWFwYm94R0xMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxjQUFjLEdBQUcsRUFBdkI7OztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFQyxHQUFGLFFBQUVBLEdBQUY7QUFBQSxNQUFPQyxHQUFQLFFBQU9BLEdBQVA7QUFBQSxTQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSSxDQUNuRDtBQUNBQSxJQUFBQSxDQUFDLENBQUNELEdBQUcsQ0FBQ0UsUUFBTCxDQUZrRCxFQUduRDtBQUNBRCxJQUFBQSxDQUFDLENBQUNGLEdBQUcsQ0FBQ0csUUFBTCxDQUprRCxDQUFKO0FBQUEsR0FBakI7QUFBQSxDQUF6Qjs7OztBQU9BLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFSixHQUFGLFNBQUVBLEdBQUY7QUFBQSxNQUFPQyxHQUFQLFNBQU9BLEdBQVA7QUFBQSxtQkFBbUJELEdBQUcsQ0FBQ0csUUFBdkIsY0FBbUNGLEdBQUcsQ0FBQ0UsUUFBdkM7QUFBQSxDQUF6Qjs7O0FBRUEsSUFBTUUsaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRSxTQURzQjtBQUUvQkMsRUFBQUEsVUFB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QUEsU0FBUyxDQUFDN0IsRUFBVixHQUFlLEtBQUtBLEVBQXBCO0FBRUEsYUFBTztBQUNMZixRQUFBQSxPQUFPLEVBQUUsS0FBS0QsTUFBTCxDQUFZQyxPQURoQjtBQUVMRCxRQUFBQSxNQUFNLEVBQUU2QyxTQUZIO0FBR0xELFFBQUFBLElBQUksRUFBSkEsSUFISztBQUlMekMsUUFBQUEsV0FBVyxFQUFYQSxXQUpLO0FBS0xtQixRQUFBQSxXQUFXLEVBQVhBO0FBTEssT0FBUDtBQU9EOzs7d0JBM0lVO0FBQ1QsYUFBTyxTQUFQO0FBQ0Q7Ozt3QkFFb0I7QUFDbkIsYUFBTztBQUNMeUIsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLFFBQVEsRUFBRSxRQURKO0FBRU5DLFVBQUFBLEtBQUssRUFBRSxhQUZEO0FBR043RCxVQUFBQSxLQUFLLEVBQUUsYUFIRDtBQUlOQyxVQUFBQSxNQUFNLEVBQUUsY0FKRjtBQUtONkQsVUFBQUEsR0FBRyxFQUFFLFFBTEM7QUFNTjtBQUNBO0FBQ0FDLFVBQUFBLGNBQWMsRUFBRSxTQVJWO0FBU05DLFVBQUFBLG1CQUFtQixFQUFFLENBQUNDLGlDQUFnQkMsSUFBakIsRUFBdUJELGlDQUFnQkUsT0FBdkMsQ0FUZjtBQVVOQyxVQUFBQSxnQkFBZ0IsRUFBRUMsZ0NBQWVDO0FBVjNCO0FBREgsT0FBUDtBQWNEOzs7d0JBRWU7QUFDZCxhQUFPQyw0QkFBUDtBQUNEOzs7RUE5QndCQyx5Qjs7ZUFxSlo5RCxZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gubWVtb2l6ZSc7XHJcbmltcG9ydCB7Q0hBTk5FTF9TQ0FMRVMsIFNDQUxFX0ZVTkMsIEFMTF9GSUVMRF9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XHJcbmltcG9ydCBNYXBib3hHTExheWVyIGZyb20gJy4uL21hcGJveGdsLWxheWVyJztcclxuaW1wb3J0IEhlYXRtYXBMYXllckljb24gZnJvbSAnLi9oZWF0bWFwLWxheWVyLWljb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BWF9aT09NX0xFVkVMID0gMTg7XHJcblxyXG5leHBvcnQgY29uc3QgcG9pbnRQb3NBY2Nlc3NvciA9ICh7bGF0LCBsbmd9KSA9PiBkID0+IFtcclxuICAvLyBsbmdcclxuICBkW2xuZy5maWVsZElkeF0sXHJcbiAgLy8gbGF0XHJcbiAgZFtsYXQuZmllbGRJZHhdXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcG9pbnRDb2xSZXNvbHZlciA9ICh7bGF0LCBsbmd9KSA9PiBgJHtsYXQuZmllbGRJZHh9LSR7bG5nLmZpZWxkSWR4fWA7XHJcblxyXG5leHBvcnQgY29uc3QgaGVhdG1hcFZpc0NvbmZpZ3MgPSB7XHJcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxyXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcclxuICByYWRpdXM6ICdoZWF0bWFwUmFkaXVzJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvclJhbmdlXHJcbiAqIEByZXR1cm4ge0FycmF5fSBbXHJcbiAqICAwLCBcInJnYmEoMzMsMTAyLDE3MiwwKVwiLFxyXG4gKiAgMC4yLCBcInJnYigxMDMsMTY5LDIwNylcIixcclxuICogIDAuNCwgXCJyZ2IoMjA5LDIyOSwyNDApXCIsXHJcbiAqICAwLjYsIFwicmdiKDI1MywyMTksMTk5KVwiLFxyXG4gKiAgMC44LCBcInJnYigyMzksMTM4LDk4KVwiLFxyXG4gKiAgMSwgXCJyZ2IoMTc4LDI0LDQzKVwiXHJcbiAqIF1cclxuICovXHJcbmNvbnN0IGhlYXRtYXBEZW5zaXR5ID0gY29sb3JSYW5nZSA9PiB7XHJcbiAgY29uc3Qgc2NhbGVGdW5jdGlvbiA9IFNDQUxFX0ZVTkMucXVhbnRpemU7XHJcblxyXG4gIGNvbnN0IGNvbG9ycyA9IFsnIzAwMDAwMCcsIC4uLmNvbG9yUmFuZ2UuY29sb3JzXTtcclxuXHJcbiAgY29uc3Qgc2NhbGUgPSBzY2FsZUZ1bmN0aW9uKClcclxuICAgIC5kb21haW4oWzAsIDFdKVxyXG4gICAgLnJhbmdlKGNvbG9ycyk7XHJcblxyXG4gIGNvbnN0IGNvbG9yRGVuc2l0eSA9IHNjYWxlLnJhbmdlKCkucmVkdWNlKChiYW5kcywgbGV2ZWwpID0+IHtcclxuICAgIGNvbnN0IGludmVydCA9IHNjYWxlLmludmVydEV4dGVudChsZXZlbCk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi5iYW5kcyxcclxuICAgICAgaW52ZXJ0WzBdLCAvLyBmaXJzdCB2YWx1ZSBpbiB0aGUgcmFuZ2VcclxuICAgICAgYHJnYigke2hleFRvUmdiKGxldmVsKS5qb2luKCcsJyl9KWAgLy8gY29sb3JcclxuICAgIF07XHJcbiAgfSwgW10pO1xyXG4gIGNvbG9yRGVuc2l0eVsxXSA9ICdyZ2JhKDAsMCwwLDApJztcclxuICByZXR1cm4gY29sb3JEZW5zaXR5O1xyXG59O1xyXG5cclxuY2xhc3MgSGVhdG1hcExheWVyIGV4dGVuZHMgTWFwYm94R0xMYXllciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoaGVhdG1hcFZpc0NvbmZpZ3MpO1xyXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG1lbW9pemUocG9pbnRQb3NBY2Nlc3NvciwgcG9pbnRDb2xSZXNvbHZlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnaGVhdG1hcCc7XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3ZWlnaHQ6IHtcclxuICAgICAgICBwcm9wZXJ0eTogJ3dlaWdodCcsXHJcbiAgICAgICAgZmllbGQ6ICd3ZWlnaHRGaWVsZCcsXHJcbiAgICAgICAgc2NhbGU6ICd3ZWlnaHRTY2FsZScsXHJcbiAgICAgICAgZG9tYWluOiAnd2VpZ2h0RG9tYWluJyxcclxuICAgICAgICBrZXk6ICd3ZWlnaHQnLFxyXG4gICAgICAgIC8vIHN1cHBvcnRlZEZpZWxkVHlwZXMgY2FuIGJlIGRldGVybWluZWQgYnkgY2hhbm5lbFNjYWxlVHlwZVxyXG4gICAgICAgIC8vIG9yIHNwZWNpZmllZCBoZXJlXHJcbiAgICAgICAgZGVmYXVsdE1lYXN1cmU6ICdkZW5zaXR5JyxcclxuICAgICAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzOiBbQUxMX0ZJRUxEX1RZUEVTLnJlYWwsIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXSxcclxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5zaXplXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIEhlYXRtYXBMYXllckljb247XHJcbiAgfVxyXG5cclxuICBnZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oY2hhbm5lbCkge1xyXG4gICAgcmV0dXJuIGNoYW5uZWwgPT09ICdjb2xvcidcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBsYWJlbDogJ2NvbG9yJyxcclxuICAgICAgICAgIG1lYXN1cmU6ICdEZW5zaXR5J1xyXG4gICAgICAgIH1cclxuICAgICAgOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ3dlaWdodCcsXHJcbiAgICAgICAgICBtZWFzdXJlOiB0aGlzLmNvbmZpZy53ZWlnaHRGaWVsZCA/IHRoaXMuY29uZmlnLndlaWdodEZpZWxkLm5hbWUgOiAnRGVuc2l0eSdcclxuICAgICAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcclxuICAgIC8vIG1hcGJveCBoZWF0bWFwIGxheWVyIGNvbG9yIGlzIGFsd2F5cyBiYXNlZCBvbiBkZW5zaXR5XHJcbiAgICAvLyBubyBuZWVkIHRvIHNldCBjb2xvckZpZWxkLCBjb2xvckRvbWFpbiBhbmQgY29sb3JTY2FsZVxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuICAgIGNvbnN0IHtjb2xvckZpZWxkLCBjb2xvckRvbWFpbiwgY29sb3JTY2FsZSwgLi4ubGF5ZXJDb25maWd9ID0ge1xyXG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxyXG5cclxuICAgICAgd2VpZ2h0RmllbGQ6IG51bGwsXHJcbiAgICAgIHdlaWdodERvbWFpbjogWzAsIDFdLFxyXG4gICAgICB3ZWlnaHRTY2FsZTogJ2xpbmVhcidcclxuICAgIH07XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4gICAgcmV0dXJuIGxheWVyQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zaXRpb25BY2Nlc3NvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKHRoaXMuY29uZmlnLmNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpIHtcclxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBkID0+IGdldFBvc2l0aW9uKGQpKTtcclxuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XHJcbiAgfVxyXG5cclxuICBjb2x1bW5zU2VsZWN0b3IgPSBjb25maWcgPT4gcG9pbnRDb2xSZXNvbHZlcihjb25maWcuY29sdW1ucyk7XHJcbiAgdmlzQ29uZmlnU2VsZWN0b3IgPSBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZztcclxuICB3ZWlnaHRGaWVsZFNlbGVjdG9yID0gY29uZmlnID0+IChjb25maWcud2VpZ2h0RmllbGQgPyBjb25maWcud2VpZ2h0RmllbGQubmFtZSA6IG51bGwpO1xyXG4gIHdlaWdodERvbWFpblNlbGVjdG9yID0gY29uZmlnID0+IGNvbmZpZy53ZWlnaHREb21haW47XHJcblxyXG4gIHBhaW50U2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIHRoaXMudmlzQ29uZmlnU2VsZWN0b3IsXHJcbiAgICB0aGlzLndlaWdodEZpZWxkU2VsZWN0b3IsXHJcbiAgICB0aGlzLndlaWdodERvbWFpblNlbGVjdG9yLFxyXG4gICAgKHZpc0NvbmZpZywgd2VpZ2h0RmllbGQsIHdlaWdodERvbWFpbikgPT4gKHtcclxuICAgICAgJ2hlYXRtYXAtd2VpZ2h0Jzogd2VpZ2h0RmllbGRcclxuICAgICAgICA/IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ2dldCcsIHdlaWdodEZpZWxkXSwgd2VpZ2h0RG9tYWluWzBdLCAwLCB3ZWlnaHREb21haW5bMV0sIDFdXHJcbiAgICAgICAgOiAxLFxyXG4gICAgICAnaGVhdG1hcC1pbnRlbnNpdHknOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDAsIDEsIE1BWF9aT09NX0xFVkVMLCAzXSxcclxuICAgICAgJ2hlYXRtYXAtY29sb3InOiBbXHJcbiAgICAgICAgJ2ludGVycG9sYXRlJyxcclxuICAgICAgICBbJ2xpbmVhciddLFxyXG4gICAgICAgIFsnaGVhdG1hcC1kZW5zaXR5J10sXHJcbiAgICAgICAgLi4uaGVhdG1hcERlbnNpdHkodmlzQ29uZmlnLmNvbG9yUmFuZ2UpXHJcbiAgICAgIF0sXHJcbiAgICAgICdoZWF0bWFwLXJhZGl1cyc6IFtcclxuICAgICAgICAnaW50ZXJwb2xhdGUnLFxyXG4gICAgICAgIFsnbGluZWFyJ10sXHJcbiAgICAgICAgWyd6b29tJ10sXHJcbiAgICAgICAgMCxcclxuICAgICAgICAyLFxyXG4gICAgICAgIE1BWF9aT09NX0xFVkVMLFxyXG4gICAgICAgIHZpc0NvbmZpZy5yYWRpdXMgLy8gcmFkaXVzXHJcbiAgICAgIF0sXHJcbiAgICAgICdoZWF0bWFwLW9wYWNpdHknOiB2aXNDb25maWcub3BhY2l0eVxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBjb21wdXRlSGVhdG1hcENvbmZpZ3VyYXRpb24gPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIHRoaXMuc291cmNlU2VsZWN0b3IsXHJcbiAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxyXG4gICAgdGhpcy5wYWludFNlbGVjdG9yLFxyXG4gICAgKHNvdXJjZSwgZmlsdGVyLCBwYWludCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBzb3VyY2UsXHJcbiAgICAgICAgbGF5b3V0OiB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heHpvb206IE1BWF9aT09NX0xFVkVMLFxyXG4gICAgICAgIHBhaW50LFxyXG4gICAgICAgIC4uLih0aGlzLmlzVmFsaWRGaWx0ZXIoZmlsdGVyKSA/IHtmaWx0ZXJ9IDoge30pXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgZ2V0R2VvbWV0cnkocG9zaXRpb24pIHtcclxuICAgIHJldHVybiBwb3NpdGlvbi5ldmVyeShOdW1iZXIuaXNGaW5pdGUpXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgdHlwZTogJ1BvaW50JyxcclxuICAgICAgICAgIGNvb3JkaW5hdGVzOiBwb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpIHtcclxuICAgIGNvbnN0IHt3ZWlnaHRGaWVsZH0gPSB0aGlzLmNvbmZpZztcclxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XHJcblxyXG4gICAgY29uc3QgbmV3Q29uZmlnID0gdGhpcy5jb21wdXRlSGVhdG1hcENvbmZpZ3VyYXRpb24odGhpcy5jb25maWcsIGRhdGFzZXRzKTtcclxuICAgIG5ld0NvbmZpZy5pZCA9IHRoaXMuaWQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29sdW1uczogdGhpcy5jb25maWcuY29sdW1ucyxcclxuICAgICAgY29uZmlnOiBuZXdDb25maWcsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHdlaWdodEZpZWxkLFxyXG4gICAgICBnZXRQb3NpdGlvblxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYXRtYXBMYXllcjtcclxuIl19