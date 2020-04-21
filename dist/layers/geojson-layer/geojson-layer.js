"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultRadius = exports.defaultLineWidth = exports.defaultElevation = exports.featureAccessor = exports.geoJsonRequiredColumns = exports.geojsonVisConfigs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _typeAnalyzer = require("type-analyzer");

var _baseLayer = _interopRequireWildcard(require("../base-layer"));

var _layers = require("@deck.gl/layers");

var _colorUtils = require("../../utils/color-utils");

var _geojsonUtils = require("./geojson-utils");

var _geojsonLayerIcon = _interopRequireDefault(require("./geojson-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _layerFactory = require("../layer-factory");

var _SUPPORTED_ANALYZER_T;

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SUPPORTED_ANALYZER_TYPES = (_SUPPORTED_ANALYZER_T = {}, (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.GEOMETRY, true), (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, true), (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, true), _SUPPORTED_ANALYZER_T);
var geojsonVisConfigs = {
  opacity: 'opacity',
  strokeOpacity: _objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, {
    property: 'strokeOpacity'
  }),
  thickness: _objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.thickness, {
    defaultValue: 0.5
  }),
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radius: 'radius',
  sizeRange: 'strokeWidthRange',
  radiusRange: 'radiusRange',
  heightRange: 'elevationRange',
  elevationScale: 'elevationScale',
  stroked: 'stroked',
  filled: 'filled',
  enable3d: 'enable3d',
  wireframe: 'wireframe'
};
exports.geojsonVisConfigs = geojsonVisConfigs;
var geoJsonRequiredColumns = ['geojson'];
exports.geoJsonRequiredColumns = geoJsonRequiredColumns;

var featureAccessor = function featureAccessor(_ref) {
  var geojson = _ref.geojson;
  return function (d) {
    return d[geojson.fieldIdx];
  };
};

exports.featureAccessor = featureAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultLineWidth = 1;
exports.defaultLineWidth = defaultLineWidth;
var defaultRadius = 1;
exports.defaultRadius = defaultRadius;

var GeoJsonLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(GeoJsonLayer, _Layer);

  var _super = _createSuper(GeoJsonLayer);

  function GeoJsonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoJsonLayer);
    _this = _super.call(this, props);
    _this.dataToFeature = [];

    _this.registerVisConfig(geojsonVisConfigs);

    _this.getPositionAccessor = function () {
      return featureAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(GeoJsonLayer, [{
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getFeature(this.config.columns);
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        // add height visual channel
        heightField: null,
        heightDomain: [0, 1],
        heightScale: 'linear',
        // add radius visual channel
        radiusField: null,
        radiusDomain: [0, 1],
        radiusScale: 'linear',
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object, allData) {
      // index of allData is saved to feature.properties
      return allData[object.properties.index];
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getPosition) {
      var _this2 = this;

      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      return filteredIndex.map(function (i) {
        return _this2.dataToFeature[i];
      }).filter(function (d) {
        return d;
      });
    } // TODO: fix complexity

    /* eslint-disable complexity */

  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this3 = this;

      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorField = _this$config.colorField,
          colorDomain = _this$config.colorDomain,
          strokeColorField = _this$config.strokeColorField,
          strokeColorScale = _this$config.strokeColorScale,
          strokeColorDomain = _this$config.strokeColorDomain,
          color = _this$config.color,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          sizeField = _this$config.sizeField,
          heightField = _this$config.heightField,
          heightDomain = _this$config.heightDomain,
          heightScale = _this$config.heightScale,
          radiusField = _this$config.radiusField,
          radiusDomain = _this$config.radiusDomain,
          radiusScale = _this$config.radiusScale,
          visConfig = _this$config.visConfig;
      var enable3d = visConfig.enable3d,
          stroked = visConfig.stroked,
          colorRange = visConfig.colorRange,
          heightRange = visConfig.heightRange,
          sizeRange = visConfig.sizeRange,
          radiusRange = visConfig.radiusRange,
          strokeColorRange = visConfig.strokeColorRange,
          strokeColor = visConfig.strokeColor;
      var _datasets$this$config = datasets[this.config.dataId],
          allData = _datasets$this$config.allData,
          gpuFilter = _datasets$this$config.gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data; // fill color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // stroke color

      var scScale = strokeColorField && this.getVisChannelScale(strokeColorScale, strokeColorDomain, strokeColorRange.colors.map(_colorUtils.hexToRgb)); // calculate stroke scale - if stroked = true

      var sScale = sizeField && stroked && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange); // calculate elevation scale - if extruded = true

      var eScale = heightField && enable3d && this.getVisChannelScale(heightScale, heightDomain, heightRange); // point radius

      var rScale = radiusField && this.getVisChannelScale(radiusScale, radiusDomain, radiusRange); // access feature properties from geojson sub layer

      var getDataForGpuFilter = function getDataForGpuFilter(f) {
        return allData[f.properties.index];
      };

      var getIndexForGpuFilter = function getIndexForGpuFilter(f) {
        return f.properties.index;
      };

      return {
        data: data,
        getFilterValue: gpuFilter.filterValueAccessor(getIndexForGpuFilter, getDataForGpuFilter),
        getFillColor: function getFillColor(d) {
          return cScale ? _this3.getEncodedChannelValue(cScale, allData[d.properties.index], colorField) : d.properties.fillColor || color;
        },
        getLineColor: function getLineColor(d) {
          return scScale ? _this3.getEncodedChannelValue(scScale, allData[d.properties.index], strokeColorField) : d.properties.lineColor || strokeColor || color;
        },
        getLineWidth: function getLineWidth(d) {
          return sScale ? _this3.getEncodedChannelValue(sScale, allData[d.properties.index], sizeField, 0) : d.properties.lineWidth || defaultLineWidth;
        },
        getElevation: function getElevation(d) {
          return eScale ? _this3.getEncodedChannelValue(eScale, allData[d.properties.index], heightField, 0) : d.properties.elevation || defaultElevation;
        },
        getRadius: function getRadius(d) {
          return rScale ? _this3.getEncodedChannelValue(rScale, allData[d.properties.index], radiusField, 0) : d.properties.radius || defaultRadius;
        }
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getFeature = this.getPositionAccessor();
      this.dataToFeature = (0, _geojsonUtils.getGeojsonDataMaps)(allData, getFeature); // get bounds from features

      var bounds = (0, _geojsonUtils.getGeojsonBounds)(this.dataToFeature); // if any of the feature has properties.radius set to be true

      var fixedRadius = Boolean(this.dataToFeature.find(function (d) {
        return d && d.properties && d.properties.radius;
      })); // keep a record of what type of geometry the collection has

      var featureTypes = (0, _geojsonUtils.getGeojsonFeatureTypes)(this.dataToFeature);
      this.updateMeta({
        bounds: bounds,
        fixedRadius: fixedRadius,
        featureTypes: featureTypes
      });
    }
  }, {
    key: "setInitialLayerConfig",
    value: function setInitialLayerConfig(allData) {
      this.updateLayerMeta(allData);
      var featureTypes = this.meta.featureTypes; // default settings is stroke: true, filled: false

      if (featureTypes && featureTypes.polygon) {
        // set both fill and stroke to true
        return this.updateLayerVisConfig({
          filled: true,
          stroked: true,
          strokeColor: _baseLayer.colorMaker.next().value
        });
      } else if (featureTypes && featureTypes.point) {
        // set fill to true if detect point
        return this.updateLayerVisConfig({
          filled: true,
          stroked: false
        });
      }

      return this;
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var _this$meta = this.meta,
          fixedRadius = _this$meta.fixedRadius,
          featureTypes = _this$meta.featureTypes;
      var radiusScale = this.getRadiusScaleByZoom(mapState, fixedRadius);
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var layerProps = {
        lineWidthScale: visConfig.thickness * zoomFactor * 8,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        pointRadiusScale: radiusScale,
        lineMiterLimit: 4
      };
      var updateTriggers = {
        getElevation: {
          heightField: this.config.heightField,
          heightScaleType: this.config.heightScale,
          heightRange: visConfig.heightRange
        },
        getFillColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: this.config.colorScale
        },
        getLineColor: {
          color: visConfig.strokeColor,
          colorField: this.config.strokeColorField,
          colorRange: visConfig.strokeColorRange,
          colorScale: this.config.strokeColorScale
        },
        getLineWidth: {
          sizeField: this.config.sizeField,
          sizeRange: visConfig.sizeRange
        },
        getRadius: {
          radiusField: this.config.radiusField,
          radiusRange: visConfig.radiusRange
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var opaOverwrite = {
        opacity: visConfig.strokeOpacity
      };
      return [new _layers.GeoJsonLayer(_objectSpread({}, defaultLayerProps, {}, layerProps, {}, data, {
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        autoHighlight: visConfig.enable3d,
        stroked: visConfig.stroked,
        filled: visConfig.filled,
        extruded: visConfig.enable3d,
        wireframe: visConfig.wireframe,
        wrapLongitude: false,
        lineMiterLimit: 2,
        rounded: true,
        updateTriggers: updateTriggers,
        _subLayerProps: _objectSpread({}, featureTypes.polygon ? {
          'polygons-stroke': opaOverwrite
        } : {}, {}, featureTypes.line ? {
          'line-strings': opaOverwrite
        } : {}, {}, featureTypes.point ? {
          points: {
            lineOpacity: visConfig.strokeOpacity
          }
        } : {})
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread({}, this.getDefaultHoverLayerProps(), {}, layerProps, {
        wrapLongitude: false,
        data: [objectHovered.object],
        getLineWidth: data.getLineWidth,
        getRadius: data.getRadius,
        getElevation: data.getElevation,
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        // always draw outline
        stroked: true,
        filled: false
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'geojson';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Polygon';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _geojsonLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return geoJsonRequiredColumns;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "visualChannels", this), {
        strokeColor: {
          property: 'strokeColor',
          field: 'strokeColorField',
          scale: 'strokeColorScale',
          domain: 'strokeColorDomain',
          range: 'strokeColorRange',
          key: 'strokeColor',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color,
          condition: function condition(config) {
            return config.visConfig.stroked;
          }
        },
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "visualChannels", this).size, {
          property: 'stroke',
          condition: function condition(config) {
            return config.visConfig.stroked;
          }
        }),
        height: {
          property: 'height',
          field: 'heightField',
          scale: 'heightScale',
          domain: 'heightDomain',
          range: 'heightRange',
          key: 'height',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size,
          condition: function condition(config) {
            return config.visConfig.enable3d;
          }
        },
        radius: {
          property: 'radius',
          field: 'radiusField',
          scale: 'radiusScale',
          domain: 'radiusDomain',
          range: 'radiusRange',
          key: 'radius',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius
        }
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _this4 = this;

      var label = _ref3.label,
          _ref3$fields = _ref3.fields,
          fields = _ref3$fields === void 0 ? [] : _ref3$fields;
      var geojsonColumns = fields.filter(function (f) {
        return f.type === 'geojson' && SUPPORTED_ANALYZER_TYPES[f.analyzerType];
      }).map(function (f) {
        return f.name;
      });
      var defaultColumns = {
        geojson: (0, _lodash["default"])([].concat((0, _toConsumableArray2["default"])(_defaultSettings.GEOJSON_FIELDS.geojson), (0, _toConsumableArray2["default"])(geojsonColumns)))
      };
      var foundColumns = this.findDefaultColumnField(defaultColumns, fields);

      if (!foundColumns || !foundColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: foundColumns.map(function (columns) {
          return {
            label: typeof label === 'string' && label.replace(/\.[^/.]+$/, '') || _this4.type,
            columns: columns,
            isVisible: true
          };
        })
      };
    }
  }]);
  return GeoJsonLayer;
}(_baseLayer["default"]);

exports["default"] = GeoJsonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIlNVUFBPUlRFRF9BTkFMWVpFUl9UWVBFUyIsIkRBVEFfVFlQRVMiLCJHRU9NRVRSWSIsIkdFT01FVFJZX0ZST01fU1RSSU5HIiwiUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyIsImdlb2pzb25WaXNDb25maWdzIiwib3BhY2l0eSIsInN0cm9rZU9wYWNpdHkiLCJMQVlFUl9WSVNfQ09ORklHUyIsInByb3BlcnR5IiwidGhpY2tuZXNzIiwiZGVmYXVsdFZhbHVlIiwic3Ryb2tlQ29sb3IiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInJhZGl1cyIsInNpemVSYW5nZSIsInJhZGl1c1JhbmdlIiwiaGVpZ2h0UmFuZ2UiLCJlbGV2YXRpb25TY2FsZSIsInN0cm9rZWQiLCJmaWxsZWQiLCJlbmFibGUzZCIsIndpcmVmcmFtZSIsImdlb0pzb25SZXF1aXJlZENvbHVtbnMiLCJmZWF0dXJlQWNjZXNzb3IiLCJnZW9qc29uIiwiZCIsImZpZWxkSWR4IiwiZGVmYXVsdEVsZXZhdGlvbiIsImRlZmF1bHRMaW5lV2lkdGgiLCJkZWZhdWx0UmFkaXVzIiwiR2VvSnNvbkxheWVyIiwicHJvcHMiLCJkYXRhVG9GZWF0dXJlIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsImdldEZlYXR1cmUiLCJoZWlnaHRGaWVsZCIsImhlaWdodERvbWFpbiIsImhlaWdodFNjYWxlIiwicmFkaXVzRmllbGQiLCJyYWRpdXNEb21haW4iLCJyYWRpdXNTY2FsZSIsInN0cm9rZUNvbG9yRmllbGQiLCJzdHJva2VDb2xvckRvbWFpbiIsInN0cm9rZUNvbG9yU2NhbGUiLCJvYmplY3QiLCJhbGxEYXRhIiwicHJvcGVydGllcyIsImluZGV4IiwiZ2V0UG9zaXRpb24iLCJmaWx0ZXJlZEluZGV4IiwibWFwIiwiaSIsImZpbHRlciIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRmllbGQiLCJjb2xvckRvbWFpbiIsImNvbG9yIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInNpemVGaWVsZCIsInZpc0NvbmZpZyIsImRhdGFJZCIsImdwdUZpbHRlciIsInVwZGF0ZURhdGEiLCJkYXRhIiwiY1NjYWxlIiwiZ2V0VmlzQ2hhbm5lbFNjYWxlIiwiY29sb3JzIiwiaGV4VG9SZ2IiLCJzY1NjYWxlIiwic1NjYWxlIiwiZVNjYWxlIiwiclNjYWxlIiwiZ2V0RGF0YUZvckdwdUZpbHRlciIsImYiLCJnZXRJbmRleEZvckdwdUZpbHRlciIsImdldEZpbHRlclZhbHVlIiwiZmlsdGVyVmFsdWVBY2Nlc3NvciIsImdldEZpbGxDb2xvciIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJmaWxsQ29sb3IiLCJnZXRMaW5lQ29sb3IiLCJsaW5lQ29sb3IiLCJnZXRMaW5lV2lkdGgiLCJsaW5lV2lkdGgiLCJnZXRFbGV2YXRpb24iLCJlbGV2YXRpb24iLCJnZXRSYWRpdXMiLCJib3VuZHMiLCJmaXhlZFJhZGl1cyIsIkJvb2xlYW4iLCJmaW5kIiwiZmVhdHVyZVR5cGVzIiwidXBkYXRlTWV0YSIsInVwZGF0ZUxheWVyTWV0YSIsIm1ldGEiLCJwb2x5Z29uIiwidXBkYXRlTGF5ZXJWaXNDb25maWciLCJjb2xvck1ha2VyIiwibmV4dCIsInZhbHVlIiwicG9pbnQiLCJvcHRzIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiZ2V0UmFkaXVzU2NhbGVCeVpvb20iLCJ6b29tRmFjdG9yIiwiZ2V0Wm9vbUZhY3RvciIsImVsZVpvb21GYWN0b3IiLCJnZXRFbGV2YXRpb25ab29tRmFjdG9yIiwibGF5ZXJQcm9wcyIsImxpbmVXaWR0aFNjYWxlIiwicG9pbnRSYWRpdXNTY2FsZSIsImxpbmVNaXRlckxpbWl0IiwidXBkYXRlVHJpZ2dlcnMiLCJoZWlnaHRTY2FsZVR5cGUiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZGVmYXVsdExheWVyUHJvcHMiLCJnZXREZWZhdWx0RGVja0xheWVyUHJvcHMiLCJvcGFPdmVyd3JpdGUiLCJEZWNrR0xHZW9Kc29uTGF5ZXIiLCJoaWdobGlnaHRDb2xvciIsIkhJR0hMSUdIX0NPTE9SXzNEIiwiYXV0b0hpZ2hsaWdodCIsImV4dHJ1ZGVkIiwid3JhcExvbmdpdHVkZSIsInJvdW5kZWQiLCJfc3ViTGF5ZXJQcm9wcyIsImxpbmUiLCJwb2ludHMiLCJsaW5lT3BhY2l0eSIsImlzTGF5ZXJIb3ZlcmVkIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsIkdlb2pzb25MYXllckljb24iLCJmaWVsZCIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJjb25kaXRpb24iLCJzaXplIiwiaGVpZ2h0IiwibGFiZWwiLCJmaWVsZHMiLCJnZW9qc29uQ29sdW1ucyIsInR5cGUiLCJhbmFseXplclR5cGUiLCJuYW1lIiwiZGVmYXVsdENvbHVtbnMiLCJHRU9KU09OX0ZJRUxEUyIsImZvdW5kQ29sdW1ucyIsImZpbmREZWZhdWx0Q29sdW1uRmllbGQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiaXNWaXNpYmxlIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLHdGQUMzQkMseUJBQVdDLFFBRGdCLEVBQ0wsSUFESywyREFFM0JELHlCQUFXRSxvQkFGZ0IsRUFFTyxJQUZQLDJEQUczQkYseUJBQVdHLHlCQUhnQixFQUdZLElBSFoseUJBQTlCO0FBTU8sSUFBTUMsaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRSxTQURzQjtBQUUvQkMsRUFBQUEsYUFBYSxvQkFDUkMsZ0NBQWtCRixPQURW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QURZLE9BQXZCO0FBSUEsVUFBTU0sWUFBWSxHQUFHLEtBQUtDLHNCQUFMLENBQTRCSCxjQUE1QixFQUE0Q0wsTUFBNUMsQ0FBckI7O0FBQ0EsVUFBSSxDQUFDTyxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQ0UsTUFBbkMsRUFBMkM7QUFDekMsZUFBTztBQUFDakksVUFBQUEsS0FBSyxFQUFFO0FBQVIsU0FBUDtBQUNEOztBQUVELGFBQU87QUFDTEEsUUFBQUEsS0FBSyxFQUFFK0gsWUFBWSxDQUFDekcsR0FBYixDQUFpQixVQUFBakIsT0FBTztBQUFBLGlCQUFLO0FBQ2xDa0gsWUFBQUEsS0FBSyxFQUFHLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBNkJBLEtBQUssQ0FBQ1csT0FBTixDQUFjLFdBQWQsRUFBMkIsRUFBM0IsQ0FBOUIsSUFBaUUsTUFBSSxDQUFDUixJQUQzQztBQUVsQ3JILFlBQUFBLE9BQU8sRUFBUEEsT0FGa0M7QUFHbEM4SCxZQUFBQSxTQUFTLEVBQUU7QUFIdUIsV0FBTDtBQUFBLFNBQXhCO0FBREYsT0FBUDtBQU9EOzs7RUExRnVDQyxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcclxuaW1wb3J0IHtEQVRBX1RZUEVTfSBmcm9tICd0eXBlLWFuYWx5emVyJztcclxuXHJcbmltcG9ydCBMYXllciwge2NvbG9yTWFrZXJ9IGZyb20gJy4uL2Jhc2UtbGF5ZXInO1xyXG5pbXBvcnQge0dlb0pzb25MYXllciBhcyBEZWNrR0xHZW9Kc29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XHJcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcclxuaW1wb3J0IHtnZXRHZW9qc29uRGF0YU1hcHMsIGdldEdlb2pzb25Cb3VuZHMsIGdldEdlb2pzb25GZWF0dXJlVHlwZXN9IGZyb20gJy4vZ2VvanNvbi11dGlscyc7XHJcbmltcG9ydCBHZW9qc29uTGF5ZXJJY29uIGZyb20gJy4vZ2VvanNvbi1sYXllci1pY29uJztcclxuaW1wb3J0IHtHRU9KU09OX0ZJRUxEUywgSElHSExJR0hfQ09MT1JfM0QsIENIQU5ORUxfU0NBTEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcclxuXHJcbmNvbnN0IFNVUFBPUlRFRF9BTkFMWVpFUl9UWVBFUyA9IHtcclxuICBbREFUQV9UWVBFUy5HRU9NRVRSWV06IHRydWUsXHJcbiAgW0RBVEFfVFlQRVMuR0VPTUVUUllfRlJPTV9TVFJJTkddOiB0cnVlLFxyXG4gIFtEQVRBX1RZUEVTLlBBSVJfR0VPTUVUUllfRlJPTV9TVFJJTkddOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VvanNvblZpc0NvbmZpZ3MgPSB7XHJcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxyXG4gIHN0cm9rZU9wYWNpdHk6IHtcclxuICAgIC4uLkxBWUVSX1ZJU19DT05GSUdTLm9wYWNpdHksXHJcbiAgICBwcm9wZXJ0eTogJ3N0cm9rZU9wYWNpdHknXHJcbiAgfSxcclxuICB0aGlja25lc3M6IHtcclxuICAgIC4uLkxBWUVSX1ZJU19DT05GSUdTLnRoaWNrbmVzcyxcclxuICAgIGRlZmF1bHRWYWx1ZTogMC41XHJcbiAgfSxcclxuICBzdHJva2VDb2xvcjogJ3N0cm9rZUNvbG9yJyxcclxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXHJcbiAgc3Ryb2tlQ29sb3JSYW5nZTogJ3N0cm9rZUNvbG9yUmFuZ2UnLFxyXG4gIHJhZGl1czogJ3JhZGl1cycsXHJcblxyXG4gIHNpemVSYW5nZTogJ3N0cm9rZVdpZHRoUmFuZ2UnLFxyXG4gIHJhZGl1c1JhbmdlOiAncmFkaXVzUmFuZ2UnLFxyXG4gIGhlaWdodFJhbmdlOiAnZWxldmF0aW9uUmFuZ2UnLFxyXG4gIGVsZXZhdGlvblNjYWxlOiAnZWxldmF0aW9uU2NhbGUnLFxyXG4gIHN0cm9rZWQ6ICdzdHJva2VkJyxcclxuICBmaWxsZWQ6ICdmaWxsZWQnLFxyXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnLFxyXG4gIHdpcmVmcmFtZTogJ3dpcmVmcmFtZSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW9Kc29uUmVxdWlyZWRDb2x1bW5zID0gWydnZW9qc29uJ107XHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlQWNjZXNzb3IgPSAoe2dlb2pzb259KSA9PiBkID0+IGRbZ2VvanNvbi5maWVsZElkeF07XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0RWxldmF0aW9uID0gNTAwO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdExpbmVXaWR0aCA9IDE7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmFkaXVzID0gMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0pzb25MYXllciBleHRlbmRzIExheWVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IFtdO1xyXG4gICAgdGhpcy5yZWdpc3RlclZpc0NvbmZpZyhnZW9qc29uVmlzQ29uZmlncyk7XHJcbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBmZWF0dXJlQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnZ2VvanNvbic7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiAnUG9seWdvbic7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIEdlb2pzb25MYXllckljb247XHJcbiAgfVxyXG5cclxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gZ2VvSnNvblJlcXVpcmVkQ29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxyXG4gICAgICBzdHJva2VDb2xvcjoge1xyXG4gICAgICAgIHByb3BlcnR5OiAnc3Ryb2tlQ29sb3InLFxyXG4gICAgICAgIGZpZWxkOiAnc3Ryb2tlQ29sb3JGaWVsZCcsXHJcbiAgICAgICAgc2NhbGU6ICdzdHJva2VDb2xvclNjYWxlJyxcclxuICAgICAgICBkb21haW46ICdzdHJva2VDb2xvckRvbWFpbicsXHJcbiAgICAgICAgcmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcclxuICAgICAgICBrZXk6ICdzdHJva2VDb2xvcicsXHJcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3IsXHJcbiAgICAgICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5zdHJva2VkXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxyXG4gICAgICAgIHByb3BlcnR5OiAnc3Ryb2tlJyxcclxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLnN0cm9rZWRcclxuICAgICAgfSxcclxuICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgcHJvcGVydHk6ICdoZWlnaHQnLFxyXG4gICAgICAgIGZpZWxkOiAnaGVpZ2h0RmllbGQnLFxyXG4gICAgICAgIHNjYWxlOiAnaGVpZ2h0U2NhbGUnLFxyXG4gICAgICAgIGRvbWFpbjogJ2hlaWdodERvbWFpbicsXHJcbiAgICAgICAgcmFuZ2U6ICdoZWlnaHRSYW5nZScsXHJcbiAgICAgICAga2V5OiAnaGVpZ2h0JyxcclxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5zaXplLFxyXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuZW5hYmxlM2RcclxuICAgICAgfSxcclxuICAgICAgcmFkaXVzOiB7XHJcbiAgICAgICAgcHJvcGVydHk6ICdyYWRpdXMnLFxyXG4gICAgICAgIGZpZWxkOiAncmFkaXVzRmllbGQnLFxyXG4gICAgICAgIHNjYWxlOiAncmFkaXVzU2NhbGUnLFxyXG4gICAgICAgIGRvbWFpbjogJ3JhZGl1c0RvbWFpbicsXHJcbiAgICAgICAgcmFuZ2U6ICdyYWRpdXNSYW5nZScsXHJcbiAgICAgICAga2V5OiAncmFkaXVzJyxcclxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5yYWRpdXNcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uQWNjZXNzb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRGZWF0dXJlKHRoaXMuY29uZmlnLmNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyh7bGFiZWwsIGZpZWxkcyA9IFtdfSkge1xyXG4gICAgY29uc3QgZ2VvanNvbkNvbHVtbnMgPSBmaWVsZHNcclxuICAgICAgLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2dlb2pzb24nICYmIFNVUFBPUlRFRF9BTkFMWVpFUl9UWVBFU1tmLmFuYWx5emVyVHlwZV0pXHJcbiAgICAgIC5tYXAoZiA9PiBmLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRDb2x1bW5zID0ge1xyXG4gICAgICBnZW9qc29uOiB1bmlxKFsuLi5HRU9KU09OX0ZJRUxEUy5nZW9qc29uLCAuLi5nZW9qc29uQ29sdW1uc10pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvdW5kQ29sdW1ucyA9IHRoaXMuZmluZERlZmF1bHRDb2x1bW5GaWVsZChkZWZhdWx0Q29sdW1ucywgZmllbGRzKTtcclxuICAgIGlmICghZm91bmRDb2x1bW5zIHx8ICFmb3VuZENvbHVtbnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7cHJvcHM6IFtdfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogZm91bmRDb2x1bW5zLm1hcChjb2x1bW5zID0+ICh7XHJcbiAgICAgICAgbGFiZWw6ICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIGxhYmVsLnJlcGxhY2UoL1xcLlteLy5dKyQvLCAnJykpIHx8IHRoaXMudHlwZSxcclxuICAgICAgICBjb2x1bW5zLFxyXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcclxuXHJcbiAgICAgIC8vIGFkZCBoZWlnaHQgdmlzdWFsIGNoYW5uZWxcclxuICAgICAgaGVpZ2h0RmllbGQ6IG51bGwsXHJcbiAgICAgIGhlaWdodERvbWFpbjogWzAsIDFdLFxyXG4gICAgICBoZWlnaHRTY2FsZTogJ2xpbmVhcicsXHJcblxyXG4gICAgICAvLyBhZGQgcmFkaXVzIHZpc3VhbCBjaGFubmVsXHJcbiAgICAgIHJhZGl1c0ZpZWxkOiBudWxsLFxyXG4gICAgICByYWRpdXNEb21haW46IFswLCAxXSxcclxuICAgICAgcmFkaXVzU2NhbGU6ICdsaW5lYXInLFxyXG5cclxuICAgICAgLy8gYWRkIHN0cm9rZSBjb2xvciB2aXN1YWwgY2hhbm5lbFxyXG4gICAgICBzdHJva2VDb2xvckZpZWxkOiBudWxsLFxyXG4gICAgICBzdHJva2VDb2xvckRvbWFpbjogWzAsIDFdLFxyXG4gICAgICBzdHJva2VDb2xvclNjYWxlOiAncXVhbnRpbGUnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SG92ZXJEYXRhKG9iamVjdCwgYWxsRGF0YSkge1xyXG4gICAgLy8gaW5kZXggb2YgYWxsRGF0YSBpcyBzYXZlZCB0byBmZWF0dXJlLnByb3BlcnRpZXNcclxuICAgIHJldHVybiBhbGxEYXRhW29iamVjdC5wcm9wZXJ0aWVzLmluZGV4XTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkSW5kZXgubWFwKGkgPT4gdGhpcy5kYXRhVG9GZWF0dXJlW2ldKS5maWx0ZXIoZCA9PiBkKTtcclxuICB9XHJcbiAgLy8gVE9ETzogZml4IGNvbXBsZXhpdHlcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXHJcbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEsIG9wdCA9IHt9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbG9yU2NhbGUsXHJcbiAgICAgIGNvbG9yRmllbGQsXHJcbiAgICAgIGNvbG9yRG9tYWluLFxyXG4gICAgICBzdHJva2VDb2xvckZpZWxkLFxyXG4gICAgICBzdHJva2VDb2xvclNjYWxlLFxyXG4gICAgICBzdHJva2VDb2xvckRvbWFpbixcclxuICAgICAgY29sb3IsXHJcbiAgICAgIHNpemVTY2FsZSxcclxuICAgICAgc2l6ZURvbWFpbixcclxuICAgICAgc2l6ZUZpZWxkLFxyXG4gICAgICBoZWlnaHRGaWVsZCxcclxuICAgICAgaGVpZ2h0RG9tYWluLFxyXG4gICAgICBoZWlnaHRTY2FsZSxcclxuICAgICAgcmFkaXVzRmllbGQsXHJcbiAgICAgIHJhZGl1c0RvbWFpbixcclxuICAgICAgcmFkaXVzU2NhbGUsXHJcbiAgICAgIHZpc0NvbmZpZ1xyXG4gICAgfSA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgZW5hYmxlM2QsXHJcbiAgICAgIHN0cm9rZWQsXHJcbiAgICAgIGNvbG9yUmFuZ2UsXHJcbiAgICAgIGhlaWdodFJhbmdlLFxyXG4gICAgICBzaXplUmFuZ2UsXHJcbiAgICAgIHJhZGl1c1JhbmdlLFxyXG4gICAgICBzdHJva2VDb2xvclJhbmdlLFxyXG4gICAgICBzdHJva2VDb2xvclxyXG4gICAgfSA9IHZpc0NvbmZpZztcclxuXHJcbiAgICBjb25zdCB7YWxsRGF0YSwgZ3B1RmlsdGVyfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XHJcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XHJcblxyXG4gICAgLy8gZmlsbCBjb2xvclxyXG4gICAgY29uc3QgY1NjYWxlID1cclxuICAgICAgY29sb3JGaWVsZCAmJlxyXG4gICAgICB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShjb2xvclNjYWxlLCBjb2xvckRvbWFpbiwgY29sb3JSYW5nZS5jb2xvcnMubWFwKGhleFRvUmdiKSk7XHJcblxyXG4gICAgLy8gc3Ryb2tlIGNvbG9yXHJcbiAgICBjb25zdCBzY1NjYWxlID1cclxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZCAmJlxyXG4gICAgICB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShcclxuICAgICAgICBzdHJva2VDb2xvclNjYWxlLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yRG9tYWluLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYilcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgc3Ryb2tlIHNjYWxlIC0gaWYgc3Ryb2tlZCA9IHRydWVcclxuICAgIGNvbnN0IHNTY2FsZSA9XHJcbiAgICAgIHNpemVGaWVsZCAmJiBzdHJva2VkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKHNpemVTY2FsZSwgc2l6ZURvbWFpbiwgc2l6ZVJhbmdlKTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgZWxldmF0aW9uIHNjYWxlIC0gaWYgZXh0cnVkZWQgPSB0cnVlXHJcbiAgICBjb25zdCBlU2NhbGUgPVxyXG4gICAgICBoZWlnaHRGaWVsZCAmJiBlbmFibGUzZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShoZWlnaHRTY2FsZSwgaGVpZ2h0RG9tYWluLCBoZWlnaHRSYW5nZSk7XHJcblxyXG4gICAgLy8gcG9pbnQgcmFkaXVzXHJcbiAgICBjb25zdCByU2NhbGUgPSByYWRpdXNGaWVsZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShyYWRpdXNTY2FsZSwgcmFkaXVzRG9tYWluLCByYWRpdXNSYW5nZSk7XHJcblxyXG4gICAgLy8gYWNjZXNzIGZlYXR1cmUgcHJvcGVydGllcyBmcm9tIGdlb2pzb24gc3ViIGxheWVyXHJcbiAgICBjb25zdCBnZXREYXRhRm9yR3B1RmlsdGVyID0gZiA9PiBhbGxEYXRhW2YucHJvcGVydGllcy5pbmRleF07XHJcbiAgICBjb25zdCBnZXRJbmRleEZvckdwdUZpbHRlciA9IGYgPT4gZi5wcm9wZXJ0aWVzLmluZGV4O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcihnZXRJbmRleEZvckdwdUZpbHRlciwgZ2V0RGF0YUZvckdwdUZpbHRlciksXHJcbiAgICAgIGdldEZpbGxDb2xvcjogZCA9PlxyXG4gICAgICAgIGNTY2FsZVxyXG4gICAgICAgICAgPyB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY1NjYWxlLCBhbGxEYXRhW2QucHJvcGVydGllcy5pbmRleF0sIGNvbG9yRmllbGQpXHJcbiAgICAgICAgICA6IGQucHJvcGVydGllcy5maWxsQ29sb3IgfHwgY29sb3IsXHJcbiAgICAgIGdldExpbmVDb2xvcjogZCA9PlxyXG4gICAgICAgIHNjU2NhbGVcclxuICAgICAgICAgID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKHNjU2NhbGUsIGFsbERhdGFbZC5wcm9wZXJ0aWVzLmluZGV4XSwgc3Ryb2tlQ29sb3JGaWVsZClcclxuICAgICAgICAgIDogZC5wcm9wZXJ0aWVzLmxpbmVDb2xvciB8fCBzdHJva2VDb2xvciB8fCBjb2xvcixcclxuICAgICAgZ2V0TGluZVdpZHRoOiBkID0+XHJcbiAgICAgICAgc1NjYWxlXHJcbiAgICAgICAgICA/IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShzU2NhbGUsIGFsbERhdGFbZC5wcm9wZXJ0aWVzLmluZGV4XSwgc2l6ZUZpZWxkLCAwKVxyXG4gICAgICAgICAgOiBkLnByb3BlcnRpZXMubGluZVdpZHRoIHx8IGRlZmF1bHRMaW5lV2lkdGgsXHJcbiAgICAgIGdldEVsZXZhdGlvbjogZCA9PlxyXG4gICAgICAgIGVTY2FsZVxyXG4gICAgICAgICAgPyB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoZVNjYWxlLCBhbGxEYXRhW2QucHJvcGVydGllcy5pbmRleF0sIGhlaWdodEZpZWxkLCAwKVxyXG4gICAgICAgICAgOiBkLnByb3BlcnRpZXMuZWxldmF0aW9uIHx8IGRlZmF1bHRFbGV2YXRpb24sXHJcbiAgICAgIGdldFJhZGl1czogZCA9PlxyXG4gICAgICAgIHJTY2FsZVxyXG4gICAgICAgICAgPyB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoclNjYWxlLCBhbGxEYXRhW2QucHJvcGVydGllcy5pbmRleF0sIHJhZGl1c0ZpZWxkLCAwKVxyXG4gICAgICAgICAgOiBkLnByb3BlcnRpZXMucmFkaXVzIHx8IGRlZmF1bHRSYWRpdXNcclxuICAgIH07XHJcbiAgfVxyXG4gIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xyXG5cclxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSkge1xyXG4gICAgY29uc3QgZ2V0RmVhdHVyZSA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xyXG4gICAgdGhpcy5kYXRhVG9GZWF0dXJlID0gZ2V0R2VvanNvbkRhdGFNYXBzKGFsbERhdGEsIGdldEZlYXR1cmUpO1xyXG5cclxuICAgIC8vIGdldCBib3VuZHMgZnJvbSBmZWF0dXJlc1xyXG4gICAgY29uc3QgYm91bmRzID0gZ2V0R2VvanNvbkJvdW5kcyh0aGlzLmRhdGFUb0ZlYXR1cmUpO1xyXG4gICAgLy8gaWYgYW55IG9mIHRoZSBmZWF0dXJlIGhhcyBwcm9wZXJ0aWVzLnJhZGl1cyBzZXQgdG8gYmUgdHJ1ZVxyXG4gICAgY29uc3QgZml4ZWRSYWRpdXMgPSBCb29sZWFuKFxyXG4gICAgICB0aGlzLmRhdGFUb0ZlYXR1cmUuZmluZChkID0+IGQgJiYgZC5wcm9wZXJ0aWVzICYmIGQucHJvcGVydGllcy5yYWRpdXMpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGtlZXAgYSByZWNvcmQgb2Ygd2hhdCB0eXBlIG9mIGdlb21ldHJ5IHRoZSBjb2xsZWN0aW9uIGhhc1xyXG4gICAgY29uc3QgZmVhdHVyZVR5cGVzID0gZ2V0R2VvanNvbkZlYXR1cmVUeXBlcyh0aGlzLmRhdGFUb0ZlYXR1cmUpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzLCBmaXhlZFJhZGl1cywgZmVhdHVyZVR5cGVzfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsTGF5ZXJDb25maWcoYWxsRGF0YSkge1xyXG4gICAgdGhpcy51cGRhdGVMYXllck1ldGEoYWxsRGF0YSk7XHJcblxyXG4gICAgY29uc3Qge2ZlYXR1cmVUeXBlc30gPSB0aGlzLm1ldGE7XHJcbiAgICAvLyBkZWZhdWx0IHNldHRpbmdzIGlzIHN0cm9rZTogdHJ1ZSwgZmlsbGVkOiBmYWxzZVxyXG4gICAgaWYgKGZlYXR1cmVUeXBlcyAmJiBmZWF0dXJlVHlwZXMucG9seWdvbikge1xyXG4gICAgICAvLyBzZXQgYm90aCBmaWxsIGFuZCBzdHJva2UgdG8gdHJ1ZVxyXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVMYXllclZpc0NvbmZpZyh7XHJcbiAgICAgICAgZmlsbGVkOiB0cnVlLFxyXG4gICAgICAgIHN0cm9rZWQ6IHRydWUsXHJcbiAgICAgICAgc3Ryb2tlQ29sb3I6IGNvbG9yTWFrZXIubmV4dCgpLnZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmZWF0dXJlVHlwZXMgJiYgZmVhdHVyZVR5cGVzLnBvaW50KSB7XHJcbiAgICAgIC8vIHNldCBmaWxsIHRvIHRydWUgaWYgZGV0ZWN0IHBvaW50XHJcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnKHtmaWxsZWQ6IHRydWUsIHN0cm9rZWQ6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMYXllcihvcHRzKSB7XHJcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBtYXBTdGF0ZX0gPSBvcHRzO1xyXG5cclxuICAgIGNvbnN0IHtmaXhlZFJhZGl1cywgZmVhdHVyZVR5cGVzfSA9IHRoaXMubWV0YTtcclxuICAgIGNvbnN0IHJhZGl1c1NjYWxlID0gdGhpcy5nZXRSYWRpdXNTY2FsZUJ5Wm9vbShtYXBTdGF0ZSwgZml4ZWRSYWRpdXMpO1xyXG4gICAgY29uc3Qgem9vbUZhY3RvciA9IHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XHJcbiAgICBjb25zdCBlbGVab29tRmFjdG9yID0gdGhpcy5nZXRFbGV2YXRpb25ab29tRmFjdG9yKG1hcFN0YXRlKTtcclxuXHJcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGxheWVyUHJvcHMgPSB7XHJcbiAgICAgIGxpbmVXaWR0aFNjYWxlOiB2aXNDb25maWcudGhpY2tuZXNzICogem9vbUZhY3RvciAqIDgsXHJcbiAgICAgIGVsZXZhdGlvblNjYWxlOiB2aXNDb25maWcuZWxldmF0aW9uU2NhbGUgKiBlbGVab29tRmFjdG9yLFxyXG4gICAgICBwb2ludFJhZGl1c1NjYWxlOiByYWRpdXNTY2FsZSxcclxuICAgICAgbGluZU1pdGVyTGltaXQ6IDRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlVHJpZ2dlcnMgPSB7XHJcbiAgICAgIGdldEVsZXZhdGlvbjoge1xyXG4gICAgICAgIGhlaWdodEZpZWxkOiB0aGlzLmNvbmZpZy5oZWlnaHRGaWVsZCxcclxuICAgICAgICBoZWlnaHRTY2FsZVR5cGU6IHRoaXMuY29uZmlnLmhlaWdodFNjYWxlLFxyXG4gICAgICAgIGhlaWdodFJhbmdlOiB2aXNDb25maWcuaGVpZ2h0UmFuZ2VcclxuICAgICAgfSxcclxuICAgICAgZ2V0RmlsbENvbG9yOiB7XHJcbiAgICAgICAgY29sb3I6IHRoaXMuY29uZmlnLmNvbG9yLFxyXG4gICAgICAgIGNvbG9yRmllbGQ6IHRoaXMuY29uZmlnLmNvbG9yRmllbGQsXHJcbiAgICAgICAgY29sb3JSYW5nZTogdmlzQ29uZmlnLmNvbG9yUmFuZ2UsXHJcbiAgICAgICAgY29sb3JTY2FsZTogdGhpcy5jb25maWcuY29sb3JTY2FsZVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRMaW5lQ29sb3I6IHtcclxuICAgICAgICBjb2xvcjogdmlzQ29uZmlnLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgIGNvbG9yRmllbGQ6IHRoaXMuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQsXHJcbiAgICAgICAgY29sb3JSYW5nZTogdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2UsXHJcbiAgICAgICAgY29sb3JTY2FsZTogdGhpcy5jb25maWcuc3Ryb2tlQ29sb3JTY2FsZVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRMaW5lV2lkdGg6IHtcclxuICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLnNpemVGaWVsZCxcclxuICAgICAgICBzaXplUmFuZ2U6IHZpc0NvbmZpZy5zaXplUmFuZ2VcclxuICAgICAgfSxcclxuICAgICAgZ2V0UmFkaXVzOiB7XHJcbiAgICAgICAgcmFkaXVzRmllbGQ6IHRoaXMuY29uZmlnLnJhZGl1c0ZpZWxkLFxyXG4gICAgICAgIHJhZGl1c1JhbmdlOiB2aXNDb25maWcucmFkaXVzUmFuZ2VcclxuICAgICAgfSxcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRMYXllclByb3BzID0gdGhpcy5nZXREZWZhdWx0RGVja0xheWVyUHJvcHMob3B0cyk7XHJcbiAgICBjb25zdCBvcGFPdmVyd3JpdGUgPSB7XHJcbiAgICAgIG9wYWNpdHk6IHZpc0NvbmZpZy5zdHJva2VPcGFjaXR5XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBEZWNrR0xHZW9Kc29uTGF5ZXIoe1xyXG4gICAgICAgIC4uLmRlZmF1bHRMYXllclByb3BzLFxyXG4gICAgICAgIC4uLmxheWVyUHJvcHMsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBoaWdobGlnaHRDb2xvcjogSElHSExJR0hfQ09MT1JfM0QsXHJcbiAgICAgICAgYXV0b0hpZ2hsaWdodDogdmlzQ29uZmlnLmVuYWJsZTNkLFxyXG4gICAgICAgIHN0cm9rZWQ6IHZpc0NvbmZpZy5zdHJva2VkLFxyXG4gICAgICAgIGZpbGxlZDogdmlzQ29uZmlnLmZpbGxlZCxcclxuICAgICAgICBleHRydWRlZDogdmlzQ29uZmlnLmVuYWJsZTNkLFxyXG4gICAgICAgIHdpcmVmcmFtZTogdmlzQ29uZmlnLndpcmVmcmFtZSxcclxuICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZSxcclxuICAgICAgICBsaW5lTWl0ZXJMaW1pdDogMixcclxuICAgICAgICByb3VuZGVkOiB0cnVlLFxyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzLFxyXG4gICAgICAgIF9zdWJMYXllclByb3BzOiB7XHJcbiAgICAgICAgICAuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyB7J3BvbHlnb25zLXN0cm9rZSc6IG9wYU92ZXJ3cml0ZX0gOiB7fSksXHJcbiAgICAgICAgICAuLi4oZmVhdHVyZVR5cGVzLmxpbmUgPyB7J2xpbmUtc3RyaW5ncyc6IG9wYU92ZXJ3cml0ZX0gOiB7fSksXHJcbiAgICAgICAgICAuLi4oZmVhdHVyZVR5cGVzLnBvaW50XHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmVPcGFjaXR5OiB2aXNDb25maWcuc3Ryb2tlT3BhY2l0eVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7fSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAuLi4odGhpcy5pc0xheWVySG92ZXJlZChvYmplY3RIb3ZlcmVkKSAmJiAhdmlzQ29uZmlnLmVuYWJsZTNkXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIG5ldyBEZWNrR0xHZW9Kc29uTGF5ZXIoe1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxyXG4gICAgICAgICAgICAgIC4uLmxheWVyUHJvcHMsXHJcbiAgICAgICAgICAgICAgd3JhcExvbmdpdHVkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGF0YTogW29iamVjdEhvdmVyZWQub2JqZWN0XSxcclxuICAgICAgICAgICAgICBnZXRMaW5lV2lkdGg6IGRhdGEuZ2V0TGluZVdpZHRoLFxyXG4gICAgICAgICAgICAgIGdldFJhZGl1czogZGF0YS5nZXRSYWRpdXMsXHJcbiAgICAgICAgICAgICAgZ2V0RWxldmF0aW9uOiBkYXRhLmdldEVsZXZhdGlvbixcclxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxyXG4gICAgICAgICAgICAgIGdldEZpbGxDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXHJcbiAgICAgICAgICAgICAgLy8gYWx3YXlzIGRyYXcgb3V0bGluZVxyXG4gICAgICAgICAgICAgIHN0cm9rZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgZmlsbGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIDogW10pXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG4iXX0=