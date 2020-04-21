"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.S2VisConfigs = exports.defaultLineWidth = exports.defaultElevation = exports.S2TokenAccessor = exports.s2RequiredColumns = exports.S2_TOKEN_FIELDS = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _geoLayers = require("@deck.gl/geo-layers");

var _colorUtils = require("../../utils/color-utils");

var _defaultSettings = require("../../constants/default-settings");

var _layerFactory = require("../layer-factory");

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _s2LayerIcon = _interopRequireDefault(require("./s2-layer-icon"));

var _s2Utils = require("./s2-utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var zoomFactorValue = 8;
var S2_TOKEN_FIELDS = {
  token: ['s2', 's2_token']
};
exports.S2_TOKEN_FIELDS = S2_TOKEN_FIELDS;
var s2RequiredColumns = ['token'];
exports.s2RequiredColumns = s2RequiredColumns;

var S2TokenAccessor = function S2TokenAccessor(_ref) {
  var token = _ref.token;
  return function (d) {
    return d[token.fieldIdx];
  };
};

exports.S2TokenAccessor = S2TokenAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultLineWidth = 1;
exports.defaultLineWidth = defaultLineWidth;
var S2VisConfigs = {
  // Filled color
  opacity: 'opacity',
  colorRange: 'colorRange',
  filled: {
    type: 'boolean',
    label: 'Fill Color',
    defaultValue: true,
    property: 'filled'
  },
  // stroke
  thickness: _objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.thickness, {
    defaultValue: 0.5
  }),
  strokeColor: 'strokeColor',
  strokeColorRange: 'strokeColorRange',
  sizeRange: 'strokeWidthRange',
  stroked: 'stroked',
  // height
  enable3d: 'enable3d',
  elevationScale: 'elevationScale',
  heightRange: 'elevationRange',
  // wireframe
  wireframe: 'wireframe'
};
exports.S2VisConfigs = S2VisConfigs;

var S2GeometryLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(S2GeometryLayer, _Layer);

  var _super = _createSuper(S2GeometryLayer);

  function S2GeometryLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, S2GeometryLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(S2VisConfigs);

    _this.getPositionAccessor = function () {
      return S2TokenAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(S2GeometryLayer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(S2GeometryLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        // add height visual channel
        heightField: null,
        heightDomain: [0, 1],
        heightScale: 'linear',
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getS2Token) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var token = getS2Token(allData[index]);

        if (token) {
          data.push({
            // keep a reference to the original data index
            index: index,
            data: allData[index],
            token: token
          });
        }
      }

      return data;
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getS2Token) {
      var centroids = allData.reduce(function (acc, entry) {
        var s2Token = getS2Token(entry);
        return s2Token ? [].concat((0, _toConsumableArray2["default"])(acc), [(0, _s2Utils.getS2Center)(s2Token)]) : acc;
      }, []);
      var bounds = this.getPointsBounds(centroids);
      this.dataToFeature = {
        centroids: centroids
      };
      this.updateMeta({
        bounds: bounds
      });
    }
    /* eslint-disable complexity */

  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this2 = this;

      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorDomain = _this$config.colorDomain,
          colorField = _this$config.colorField,
          color = _this$config.color,
          heightField = _this$config.heightField,
          heightDomain = _this$config.heightDomain,
          heightScale = _this$config.heightScale,
          strokeColorField = _this$config.strokeColorField,
          strokeColorScale = _this$config.strokeColorScale,
          strokeColorDomain = _this$config.strokeColorDomain,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          sizeField = _this$config.sizeField,
          visConfig = _this$config.visConfig;
      var enable3d = visConfig.enable3d,
          stroked = visConfig.stroked,
          colorRange = visConfig.colorRange,
          heightRange = visConfig.heightRange,
          sizeRange = visConfig.sizeRange,
          strokeColorRange = visConfig.strokeColorRange,
          strokeColor = visConfig.strokeColor;
      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getS2Token = this.getPositionAccessor();

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // calculate elevation scale - if extruded = true

      var eScale = heightField && enable3d && this.getVisChannelScale(heightScale, heightDomain, heightRange); // stroke color

      var scScale = strokeColorField && this.getVisChannelScale(strokeColorScale, strokeColorDomain, strokeColorRange.colors.map(_colorUtils.hexToRgb)); // calculate stroke scale - if stroked = true

      var sScale = sizeField && stroked && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange);
      return {
        data: data,
        getS2Token: getS2Token,
        getLineColor: function getLineColor(d) {
          return scScale ? _this2.getEncodedChannelValue(scScale, d.data, strokeColorField) : strokeColor || color;
        },
        getLineWidth: function getLineWidth(d) {
          return sScale ? _this2.getEncodedChannelValue(sScale, d.data, sizeField, 0) : defaultLineWidth;
        },
        getFillColor: function getFillColor(d) {
          return cScale ? _this2.getEncodedChannelValue(cScale, d.data, colorField) : color;
        },
        getElevation: function getElevation(d) {
          return eScale ? _this2.getEncodedChannelValue(eScale, d.data, heightField, 0) : defaultElevation;
        },
        getFilterValue: gpuFilter.filterValueAccessor()
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          interactionConfig = opts.interactionConfig,
          mapState = opts.mapState;
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var zoomFactor = this.getZoomFactor(mapState);
      var config = this.config;
      var visConfig = config.visConfig;
      var updateTriggers = {
        getLineColor: {
          color: visConfig.strokeColor,
          colorField: config.strokeColorField,
          colorRange: visConfig.strokeColorRange,
          colorScale: config.strokeColorScale
        },
        getLineWidth: {
          sizeField: config.sizeField,
          sizeRange: visConfig.sizeRange
        },
        getFillColor: {
          color: config.color,
          colorField: config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: config.colorScale
        },
        getElevation: {
          heightField: config.heightField,
          heightScaleType: config.heightScale,
          heightRange: visConfig.heightRange
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      return [new _geoLayers.S2Layer(_objectSpread({}, defaultLayerProps, {}, interactionConfig, {}, data, {
        getS2Token: function getS2Token(d) {
          return d.token;
        },
        autoHighlight: visConfig.enable3d,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // stroke
        lineWidthScale: visConfig.thickness * zoomFactor * zoomFactorValue,
        stroked: visConfig.stroked,
        lineMiterLimit: 2,
        // Filled color
        filled: visConfig.filled,
        opacity: visConfig.opacity,
        wrapLongitude: false,
        // Elevation
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        extruded: visConfig.enable3d,
        wireframe: visConfig.wireframe,
        pickable: true,
        updateTriggers: updateTriggers
      }))];
    }
  }, {
    key: "type",
    get: function get() {
      return 's2';
    }
  }, {
    key: "name",
    get: function get() {
      return 'S2';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return s2RequiredColumns;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _s2LayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(S2GeometryLayer.prototype), "visualChannels", this), {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(S2GeometryLayer.prototype), "visualChannels", this).size, {
          property: 'stroke',
          condition: function condition(config) {
            return config.visConfig.stroked;
          }
        }),
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
        }
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fields = _ref3.fields,
          fields = _ref3$fields === void 0 ? [] : _ref3$fields;
      var foundColumns = this.findDefaultColumnField(S2_TOKEN_FIELDS, fields);

      if (!foundColumns || !foundColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: foundColumns.map(function (columns) {
          return {
            isVisible: true,
            label: 'S2',
            columns: columns
          };
        })
      };
    }
  }]);
  return S2GeometryLayer;
}(_baseLayer["default"]);

exports["default"] = S2GeometryLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvczItZ2VvbWV0cnktbGF5ZXIvczItZ2VvbWV0cnktbGF5ZXIuanMiXSwibmFtZXMiOlsiem9vbUZhY3RvclZhbHVlIiwiUzJfVE9LRU5fRklFTERTIiwidG9rZW4iLCJzMlJlcXVpcmVkQ29sdW1ucyIsIlMyVG9rZW5BY2Nlc3NvciIsImQiLCJmaWVsZElkeCIsImRlZmF1bHRFbGV2YXRpb24iLCJkZWZhdWx0TGluZVdpZHRoIiwiUzJWaXNDb25maWdzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJmaWxsZWQiLCJ0eXBlIiwibGFiZWwiLCJkZWZhdWx0VmFsdWUiLCJwcm9wZXJ0eSIsInRoaWNrbmVzcyIsIkxBWUVSX1ZJU19DT05GSUdTIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VDb2xvclJhbmdlIiwic2l6ZVJhbmdlIiwic3Ryb2tlZCIsImVuYWJsZTNkIiwiZWxldmF0aW9uU2NhbGUiLCJoZWlnaHRSYW5nZSIsIndpcmVmcmFtZSIsIlMyR2VvbWV0cnlMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsImhlaWdodEZpZWxkIiwiaGVpZ2h0RG9tYWluIiwiaGVpZ2h0U2NhbGUiLCJzdHJva2VDb2xvckZpZWxkIiwic3Ryb2tlQ29sb3JEb21haW4iLCJzdHJva2VDb2xvclNjYWxlIiwiZ2V0UzJUb2tlbiIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4IiwiZGF0YSIsImkiLCJsZW5ndGgiLCJpbmRleCIsInB1c2giLCJjZW50cm9pZHMiLCJyZWR1Y2UiLCJhY2MiLCJlbnRyeSIsInMyVG9rZW4iLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJkYXRhVG9GZWF0dXJlIiwidXBkYXRlTWV0YSIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInNpemVGaWVsZCIsInZpc0NvbmZpZyIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJjU2NhbGUiLCJnZXRWaXNDaGFubmVsU2NhbGUiLCJjb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImVTY2FsZSIsInNjU2NhbGUiLCJzU2NhbGUiLCJnZXRMaW5lQ29sb3IiLCJnZXRFbmNvZGVkQ2hhbm5lbFZhbHVlIiwiZ2V0TGluZVdpZHRoIiwiZ2V0RmlsbENvbG9yIiwiZ2V0RWxldmF0aW9uIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwib3B0cyIsImludGVyYWN0aW9uQ29uZmlnIiwibWFwU3RhdGUiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsImVsZVpvb21GYWN0b3IiLCJnZXRFbGV2YXRpb25ab29tRmFjdG9yIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJ1cGRhdGVUcmlnZ2VycyIsImhlaWdodFNjYWxlVHlwZSIsImZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMiLCJTMkxheWVyIiwiYXV0b0hpZ2hsaWdodCIsImhpZ2hsaWdodENvbG9yIiwiSElHSExJR0hfQ09MT1JfM0QiLCJsaW5lV2lkdGhTY2FsZSIsImxpbmVNaXRlckxpbWl0Iiwid3JhcExvbmdpdHVkZSIsImV4dHJ1ZGVkIiwicGlja2FibGUiLCJTMkxheWVySWNvbiIsImZpZWxkIiwic2NhbGUiLCJkb21haW4iLCJyYW5nZSIsImtleSIsImNoYW5uZWxTY2FsZVR5cGUiLCJDSEFOTkVMX1NDQUxFUyIsInNpemUiLCJjb25kaXRpb24iLCJoZWlnaHQiLCJmaWVsZHMiLCJmb3VuZENvbHVtbnMiLCJmaW5kRGVmYXVsdENvbHVtbkZpZWxkIiwiaXNWaXNpYmxlIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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WSxDQUFDN0MsR0FBYixDQUFpQixVQUFBekMsT0FBTztBQUFBLGlCQUFLO0FBQ2xDd0YsWUFBQUEsU0FBUyxFQUFFLElBRHVCO0FBRWxDMUcsWUFBQUEsS0FBSyxFQUFFLElBRjJCO0FBR2xDa0IsWUFBQUEsT0FBTyxFQUFQQTtBQUhrQyxXQUFMO0FBQUEsU0FBeEI7QUFERixPQUFQO0FBT0Q7OztFQTVGMEN5RixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7UzJMYXllcn0gZnJvbSAnQGRlY2suZ2wvZ2VvLWxheWVycyc7XHJcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcclxuaW1wb3J0IHtISUdITElHSF9DT0xPUl8zRCwgQ0hBTk5FTF9TQ0FMRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHU30gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XHJcbmltcG9ydCBTMkxheWVySWNvbiBmcm9tICcuL3MyLWxheWVyLWljb24nO1xyXG5pbXBvcnQge2dldFMyQ2VudGVyfSBmcm9tICcuL3MyLXV0aWxzJztcclxuXHJcbmNvbnN0IHpvb21GYWN0b3JWYWx1ZSA9IDg7XHJcblxyXG5leHBvcnQgY29uc3QgUzJfVE9LRU5fRklFTERTID0ge1xyXG4gIHRva2VuOiBbJ3MyJywgJ3MyX3Rva2VuJ11cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzMlJlcXVpcmVkQ29sdW1ucyA9IFsndG9rZW4nXTtcclxuZXhwb3J0IGNvbnN0IFMyVG9rZW5BY2Nlc3NvciA9ICh7dG9rZW59KSA9PiBkID0+IGRbdG9rZW4uZmllbGRJZHhdO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEVsZXZhdGlvbiA9IDUwMDtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMaW5lV2lkdGggPSAxO1xyXG5cclxuZXhwb3J0IGNvbnN0IFMyVmlzQ29uZmlncyA9IHtcclxuICAvLyBGaWxsZWQgY29sb3JcclxuICBvcGFjaXR5OiAnb3BhY2l0eScsXHJcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxyXG4gIGZpbGxlZDoge1xyXG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgbGFiZWw6ICdGaWxsIENvbG9yJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcclxuICAgIHByb3BlcnR5OiAnZmlsbGVkJ1xyXG4gIH0sXHJcblxyXG4gIC8vIHN0cm9rZVxyXG4gIHRoaWNrbmVzczoge1xyXG4gICAgLi4uTEFZRVJfVklTX0NPTkZJR1MudGhpY2tuZXNzLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAwLjVcclxuICB9LFxyXG4gIHN0cm9rZUNvbG9yOiAnc3Ryb2tlQ29sb3InLFxyXG4gIHN0cm9rZUNvbG9yUmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcclxuICBzaXplUmFuZ2U6ICdzdHJva2VXaWR0aFJhbmdlJyxcclxuICBzdHJva2VkOiAnc3Ryb2tlZCcsXHJcblxyXG4gIC8vIGhlaWdodFxyXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnLFxyXG4gIGVsZXZhdGlvblNjYWxlOiAnZWxldmF0aW9uU2NhbGUnLFxyXG4gIGhlaWdodFJhbmdlOiAnZWxldmF0aW9uUmFuZ2UnLFxyXG5cclxuICAvLyB3aXJlZnJhbWVcclxuICB3aXJlZnJhbWU6ICd3aXJlZnJhbWUnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTMkdlb21ldHJ5TGF5ZXIgZXh0ZW5kcyBMYXllciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoUzJWaXNDb25maWdzKTtcclxuICAgIHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvciA9ICgpID0+IFMyVG9rZW5BY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdzMic7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiAnUzInO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHMyUmVxdWlyZWRDb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheWVySWNvbigpIHtcclxuICAgIHJldHVybiBTMkxheWVySWNvbjtcclxuICB9XHJcblxyXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxyXG4gICAgICBjb2xvcjoge1xyXG4gICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxyXG4gICAgICAgIGZpZWxkOiAnY29sb3JGaWVsZCcsXHJcbiAgICAgICAgc2NhbGU6ICdjb2xvclNjYWxlJyxcclxuICAgICAgICBkb21haW46ICdjb2xvckRvbWFpbicsXHJcbiAgICAgICAgcmFuZ2U6ICdjb2xvclJhbmdlJyxcclxuICAgICAgICBrZXk6ICdjb2xvcicsXHJcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3JcclxuICAgICAgfSxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLnNpemUsXHJcbiAgICAgICAgcHJvcGVydHk6ICdzdHJva2UnLFxyXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZFxyXG4gICAgICB9LFxyXG4gICAgICBzdHJva2VDb2xvcjoge1xyXG4gICAgICAgIHByb3BlcnR5OiAnc3Ryb2tlQ29sb3InLFxyXG4gICAgICAgIGZpZWxkOiAnc3Ryb2tlQ29sb3JGaWVsZCcsXHJcbiAgICAgICAgc2NhbGU6ICdzdHJva2VDb2xvclNjYWxlJyxcclxuICAgICAgICBkb21haW46ICdzdHJva2VDb2xvckRvbWFpbicsXHJcbiAgICAgICAgcmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcclxuICAgICAgICBrZXk6ICdzdHJva2VDb2xvcicsXHJcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3IsXHJcbiAgICAgICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5zdHJva2VkXHJcbiAgICAgIH0sXHJcbiAgICAgIGhlaWdodDoge1xyXG4gICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcclxuICAgICAgICBmaWVsZDogJ2hlaWdodEZpZWxkJyxcclxuICAgICAgICBzY2FsZTogJ2hlaWdodFNjYWxlJyxcclxuICAgICAgICBkb21haW46ICdoZWlnaHREb21haW4nLFxyXG4gICAgICAgIHJhbmdlOiAnaGVpZ2h0UmFuZ2UnLFxyXG4gICAgICAgIGtleTogJ2hlaWdodCcsXHJcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuc2l6ZSxcclxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmVuYWJsZTNkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcclxuXHJcbiAgICAgIC8vIGFkZCBoZWlnaHQgdmlzdWFsIGNoYW5uZWxcclxuICAgICAgaGVpZ2h0RmllbGQ6IG51bGwsXHJcbiAgICAgIGhlaWdodERvbWFpbjogWzAsIDFdLFxyXG4gICAgICBoZWlnaHRTY2FsZTogJ2xpbmVhcicsXHJcblxyXG4gICAgICAvLyBhZGQgc3Ryb2tlIGNvbG9yIHZpc3VhbCBjaGFubmVsXHJcbiAgICAgIHN0cm9rZUNvbG9yRmllbGQ6IG51bGwsXHJcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluOiBbMCwgMV0sXHJcbiAgICAgIHN0cm9rZUNvbG9yU2NhbGU6ICdxdWFudGlsZSdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZHMgPSBbXX0pIHtcclxuICAgIGNvbnN0IGZvdW5kQ29sdW1ucyA9IHRoaXMuZmluZERlZmF1bHRDb2x1bW5GaWVsZChTMl9UT0tFTl9GSUVMRFMsIGZpZWxkcyk7XHJcbiAgICBpZiAoIWZvdW5kQ29sdW1ucyB8fCAhZm91bmRDb2x1bW5zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IGZvdW5kQ29sdW1ucy5tYXAoY29sdW1ucyA9PiAoe1xyXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ1MyJyxcclxuICAgICAgICBjb2x1bW5zXHJcbiAgICAgIH0pKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRTMlRva2VuKSB7XHJcbiAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkSW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGdldFMyVG9rZW4oYWxsRGF0YVtpbmRleF0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGRhdGEgaW5kZXhcclxuICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgZGF0YTogYWxsRGF0YVtpbmRleF0sXHJcbiAgICAgICAgICB0b2tlblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRTMlRva2VuKSB7XHJcbiAgICBjb25zdCBjZW50cm9pZHMgPSBhbGxEYXRhLnJlZHVjZSgoYWNjLCBlbnRyeSkgPT4ge1xyXG4gICAgICBjb25zdCBzMlRva2VuID0gZ2V0UzJUb2tlbihlbnRyeSk7XHJcbiAgICAgIHJldHVybiBzMlRva2VuID8gWy4uLmFjYywgZ2V0UzJDZW50ZXIoczJUb2tlbildIDogYWNjO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGNlbnRyb2lkcyk7XHJcbiAgICB0aGlzLmRhdGFUb0ZlYXR1cmUgPSB7Y2VudHJvaWRzfTtcclxuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XHJcbiAgfVxyXG5cclxuICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXHJcbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEsIG9wdCA9IHt9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbG9yU2NhbGUsXHJcbiAgICAgIGNvbG9yRG9tYWluLFxyXG4gICAgICBjb2xvckZpZWxkLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgaGVpZ2h0RmllbGQsXHJcbiAgICAgIGhlaWdodERvbWFpbixcclxuICAgICAgaGVpZ2h0U2NhbGUsXHJcbiAgICAgIHN0cm9rZUNvbG9yRmllbGQsXHJcbiAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXHJcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluLFxyXG4gICAgICBzaXplU2NhbGUsXHJcbiAgICAgIHNpemVEb21haW4sXHJcbiAgICAgIHNpemVGaWVsZCxcclxuICAgICAgdmlzQ29uZmlnXHJcbiAgICB9ID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBlbmFibGUzZCxcclxuICAgICAgc3Ryb2tlZCxcclxuICAgICAgY29sb3JSYW5nZSxcclxuICAgICAgaGVpZ2h0UmFuZ2UsXHJcbiAgICAgIHNpemVSYW5nZSxcclxuICAgICAgc3Ryb2tlQ29sb3JSYW5nZSxcclxuICAgICAgc3Ryb2tlQ29sb3JcclxuICAgIH0gPSB2aXNDb25maWc7XHJcblxyXG4gICAgY29uc3Qge2dwdUZpbHRlcn0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xyXG4gICAgY29uc3QgZ2V0UzJUb2tlbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xyXG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy51cGRhdGVEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpO1xyXG5cclxuICAgIGNvbnN0IGNTY2FsZSA9XHJcbiAgICAgIGNvbG9yRmllbGQgJiZcclxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoY29sb3JTY2FsZSwgY29sb3JEb21haW4sIGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYikpO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBlbGV2YXRpb24gc2NhbGUgLSBpZiBleHRydWRlZCA9IHRydWVcclxuICAgIGNvbnN0IGVTY2FsZSA9XHJcbiAgICAgIGhlaWdodEZpZWxkICYmIGVuYWJsZTNkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGhlaWdodFNjYWxlLCBoZWlnaHREb21haW4sIGhlaWdodFJhbmdlKTtcclxuXHJcbiAgICAvLyBzdHJva2UgY29sb3JcclxuICAgIGNvbnN0IHNjU2NhbGUgPVxyXG4gICAgICBzdHJva2VDb2xvckZpZWxkICYmXHJcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxyXG4gICAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXHJcbiAgICAgICAgc3Ryb2tlQ29sb3JEb21haW4sXHJcbiAgICAgICAgc3Ryb2tlQ29sb3JSYW5nZS5jb2xvcnMubWFwKGhleFRvUmdiKVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBzdHJva2Ugc2NhbGUgLSBpZiBzdHJva2VkID0gdHJ1ZVxyXG4gICAgY29uc3Qgc1NjYWxlID1cclxuICAgICAgc2l6ZUZpZWxkICYmIHN0cm9rZWQgJiYgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoc2l6ZVNjYWxlLCBzaXplRG9tYWluLCBzaXplUmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGdldFMyVG9rZW4sXHJcbiAgICAgIGdldExpbmVDb2xvcjogZCA9PlxyXG4gICAgICAgIHNjU2NhbGVcclxuICAgICAgICAgID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKHNjU2NhbGUsIGQuZGF0YSwgc3Ryb2tlQ29sb3JGaWVsZClcclxuICAgICAgICAgIDogc3Ryb2tlQ29sb3IgfHwgY29sb3IsXHJcbiAgICAgIGdldExpbmVXaWR0aDogZCA9PlxyXG4gICAgICAgIHNTY2FsZSA/IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShzU2NhbGUsIGQuZGF0YSwgc2l6ZUZpZWxkLCAwKSA6IGRlZmF1bHRMaW5lV2lkdGgsXHJcbiAgICAgIGdldEZpbGxDb2xvcjogZCA9PiAoY1NjYWxlID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGNTY2FsZSwgZC5kYXRhLCBjb2xvckZpZWxkKSA6IGNvbG9yKSxcclxuICAgICAgZ2V0RWxldmF0aW9uOiBkID0+XHJcbiAgICAgICAgZVNjYWxlID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGVTY2FsZSwgZC5kYXRhLCBoZWlnaHRGaWVsZCwgMCkgOiBkZWZhdWx0RWxldmF0aW9uLFxyXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlQWNjZXNzb3IoKVxyXG4gICAgfTtcclxuICB9XHJcbiAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXHJcblxyXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcclxuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIGludGVyYWN0aW9uQ29uZmlnLCBtYXBTdGF0ZX0gPSBvcHRzO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRMYXllclByb3BzID0gdGhpcy5nZXREZWZhdWx0RGVja0xheWVyUHJvcHMob3B0cyk7XHJcblxyXG4gICAgY29uc3QgZWxlWm9vbUZhY3RvciA9IHRoaXMuZ2V0RWxldmF0aW9uWm9vbUZhY3RvcihtYXBTdGF0ZSk7XHJcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcclxuICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcztcclxuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xyXG4gICAgICBnZXRMaW5lQ29sb3I6IHtcclxuICAgICAgICBjb2xvcjogdmlzQ29uZmlnLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgIGNvbG9yRmllbGQ6IGNvbmZpZy5zdHJva2VDb2xvckZpZWxkLFxyXG4gICAgICAgIGNvbG9yUmFuZ2U6IHZpc0NvbmZpZy5zdHJva2VDb2xvclJhbmdlLFxyXG4gICAgICAgIGNvbG9yU2NhbGU6IGNvbmZpZy5zdHJva2VDb2xvclNjYWxlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldExpbmVXaWR0aDoge1xyXG4gICAgICAgIHNpemVGaWVsZDogY29uZmlnLnNpemVGaWVsZCxcclxuICAgICAgICBzaXplUmFuZ2U6IHZpc0NvbmZpZy5zaXplUmFuZ2VcclxuICAgICAgfSxcclxuICAgICAgZ2V0RmlsbENvbG9yOiB7XHJcbiAgICAgICAgY29sb3I6IGNvbmZpZy5jb2xvcixcclxuICAgICAgICBjb2xvckZpZWxkOiBjb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgICBjb2xvclJhbmdlOiB2aXNDb25maWcuY29sb3JSYW5nZSxcclxuICAgICAgICBjb2xvclNjYWxlOiBjb25maWcuY29sb3JTY2FsZVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRFbGV2YXRpb246IHtcclxuICAgICAgICBoZWlnaHRGaWVsZDogY29uZmlnLmhlaWdodEZpZWxkLFxyXG4gICAgICAgIGhlaWdodFNjYWxlVHlwZTogY29uZmlnLmhlaWdodFNjYWxlLFxyXG4gICAgICAgIGhlaWdodFJhbmdlOiB2aXNDb25maWcuaGVpZ2h0UmFuZ2VcclxuICAgICAgfSxcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBTMkxheWVyKHtcclxuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcclxuICAgICAgICAuLi5pbnRlcmFjdGlvbkNvbmZpZyxcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGdldFMyVG9rZW46IGQgPT4gZC50b2tlbixcclxuXHJcbiAgICAgICAgYXV0b0hpZ2hsaWdodDogdmlzQ29uZmlnLmVuYWJsZTNkLFxyXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcclxuXHJcbiAgICAgICAgLy8gc3Ryb2tlXHJcbiAgICAgICAgbGluZVdpZHRoU2NhbGU6IHZpc0NvbmZpZy50aGlja25lc3MgKiB6b29tRmFjdG9yICogem9vbUZhY3RvclZhbHVlLFxyXG4gICAgICAgIHN0cm9rZWQ6IHZpc0NvbmZpZy5zdHJva2VkLFxyXG4gICAgICAgIGxpbmVNaXRlckxpbWl0OiAyLFxyXG5cclxuICAgICAgICAvLyBGaWxsZWQgY29sb3JcclxuICAgICAgICBmaWxsZWQ6IHZpc0NvbmZpZy5maWxsZWQsXHJcbiAgICAgICAgb3BhY2l0eTogdmlzQ29uZmlnLm9wYWNpdHksXHJcbiAgICAgICAgd3JhcExvbmdpdHVkZTogZmFsc2UsXHJcblxyXG4gICAgICAgIC8vIEVsZXZhdGlvblxyXG4gICAgICAgIGVsZXZhdGlvblNjYWxlOiB2aXNDb25maWcuZWxldmF0aW9uU2NhbGUgKiBlbGVab29tRmFjdG9yLFxyXG4gICAgICAgIGV4dHJ1ZGVkOiB2aXNDb25maWcuZW5hYmxlM2QsXHJcblxyXG4gICAgICAgIHdpcmVmcmFtZTogdmlzQ29uZmlnLndpcmVmcmFtZSxcclxuXHJcbiAgICAgICAgcGlja2FibGU6IHRydWUsXHJcblxyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzXHJcbiAgICAgIH0pXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG4iXX0=