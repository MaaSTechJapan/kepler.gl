"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HexagonIdVisConfigs = exports.defaultCoverage = exports.defaultElevation = exports.hexIdAccessor = exports.hexIdRequiredColumns = exports.HEXAGON_ID_FIELDS = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _layers = require("@deck.gl/layers");

var _geoLayers = require("@deck.gl/geo-layers");

var _enhancedColumnLayer = _interopRequireDefault(require("../../deckgl-layers/column-layer/enhanced-column-layer"));

var _h3Utils = require("./h3-utils");

var _h3HexagonLayerIcon = _interopRequireDefault(require("./h3-hexagon-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _colorUtils = require("../../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_LINE_SCALE_VALUE = 8;
var HEXAGON_ID_FIELDS = {
  hex_id: ['hex_id', 'hexagon_id', 'h3_id']
};
exports.HEXAGON_ID_FIELDS = HEXAGON_ID_FIELDS;
var hexIdRequiredColumns = ['hex_id'];
exports.hexIdRequiredColumns = hexIdRequiredColumns;

var hexIdAccessor = function hexIdAccessor(_ref) {
  var hex_id = _ref.hex_id;
  return function (d) {
    return d.data[hex_id.fieldIdx];
  };
};

exports.hexIdAccessor = hexIdAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultCoverage = 1;
exports.defaultCoverage = defaultCoverage;
var HexagonIdVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  coverage: 'coverage',
  enable3d: 'enable3d',
  sizeRange: 'elevationRange',
  coverageRange: 'coverageRange',
  elevationScale: 'elevationScale'
};
exports.HexagonIdVisConfigs = HexagonIdVisConfigs;

var HexagonIdLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(HexagonIdLayer, _Layer);

  var _super = _createSuper(HexagonIdLayer);

  function HexagonIdLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonIdLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(HexagonIdVisConfigs);

    _this.getPositionAccessor = function () {
      return hexIdAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(HexagonIdLayer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        // add height visual channel
        coverageField: null,
        coverageDomain: [0, 1],
        coverageScale: 'linear'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getHexId) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var id = getHexId({
          data: allData[index]
        });
        var centroid = this.dataToFeature.centroids[index];

        if (centroid) {
          data.push({
            // keep a reference to the original data index
            index: index,
            data: allData[index],
            id: id,
            centroid: centroid
          });
        }
      }

      return data;
    } // TODO: fix complexity

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
          sizeField = _this$config.sizeField,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          coverageField = _this$config.coverageField,
          coverageScale = _this$config.coverageScale,
          coverageDomain = _this$config.coverageDomain,
          _this$config$visConfi = _this$config.visConfig,
          sizeRange = _this$config$visConfi.sizeRange,
          colorRange = _this$config$visConfi.colorRange,
          coverageRange = _this$config$visConfi.coverageRange,
          enable3d = _this$config$visConfi.enable3d;
      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getHexId = this.getPositionAccessor();

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data; // color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(function (c) {
        return (0, _colorUtils.hexToRgb)(c);
      })); // height

      var sScale = sizeField && enable3d && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange, 0); // coverage

      var coScale = coverageField && this.getVisChannelScale(coverageScale, coverageDomain, coverageRange, 0);
      var getElevation = sScale ? function (d) {
        return _this2.getEncodedChannelValue(sScale, d.data, sizeField, 0);
      } : defaultElevation;
      var getFillColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getCoverage = coScale ? function (d) {
        return _this2.getEncodedChannelValue(coScale, d.data, coverageField, 0);
      } : defaultCoverage;
      return {
        data: data,
        getElevation: getElevation,
        getFillColor: getFillColor,
        getHexId: getHexId,
        getCoverage: getCoverage,
        getFilterValue: gpuFilter.filterValueAccessor()
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getHexId) {
      var centroids = allData.map(function (d, index) {
        var id = getHexId({
          data: d
        });

        if (!(0, _h3Utils.h3IsValid)(id)) {
          return null;
        } // save a reference of centroids to dataToFeature
        // so we don't have to re calculate it again


        return (0, _h3Utils.getCentroid)({
          id: id
        });
      });
      var bounds = this.getPointsBounds(centroids);
      this.dataToFeature = {
        centroids: centroids
      };
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var config = this.config;
      var visConfig = config.visConfig;
      var h3HexagonLayerTriggers = {
        getFillColor: {
          color: config.color,
          colorField: config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: config.colorScale
        },
        getElevation: {
          sizeField: config.sizeField,
          sizeRange: visConfig.sizeRange,
          sizeScale: config.sizeScale,
          enable3d: visConfig.enable3d
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var columnLayerTriggers = {
        getCoverage: {
          coverageField: config.coverageField,
          coverageRange: visConfig.coverageRange
        }
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      return [new _geoLayers.H3HexagonLayer(_objectSpread({}, defaultLayerProps, {}, data, {
        wrapLongitude: false,
        getHexagon: function getHexagon(x) {
          return x.id;
        },
        // coverage
        coverage: config.coverageField ? 1 : visConfig.coverage,
        // highlight
        autoHighlight: visConfig.enable3d,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        // render
        updateTriggers: h3HexagonLayerTriggers,
        _subLayerProps: {
          'hexagon-cell': {
            type: _enhancedColumnLayer["default"],
            getCoverage: data.getCoverage,
            updateTriggers: columnLayerTriggers
          }
        }
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !config.sizeField ? [new _layers.GeoJsonLayer(_objectSpread({}, this.getDefaultHoverLayerProps(), {
        data: [(0, _h3Utils.idToPolygonGeo)(objectHovered)],
        getLineColor: config.highlightColor,
        lineWidthScale: DEFAULT_LINE_SCALE_VALUE * zoomFactor,
        wrapLongitude: false
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'hexagonId';
    }
  }, {
    key: "name",
    get: function get() {
      return 'H3';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return hexIdRequiredColumns;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      // use hexagon layer icon for now
      return _h3HexagonLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "visualChannels", this), {
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "visualChannels", this).size, {
          property: 'height'
        }),
        coverage: {
          property: 'coverage',
          field: 'coverageField',
          scale: 'coverageScale',
          domain: 'coverageDomain',
          range: 'coverageRange',
          key: 'coverage',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius
        }
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fields = _ref3.fields,
          fields = _ref3$fields === void 0 ? [] : _ref3$fields;
      var foundColumns = this.findDefaultColumnField(HEXAGON_ID_FIELDS, fields);

      if (!foundColumns || !foundColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: foundColumns.map(function (columns) {
          return {
            isVisible: true,
            label: 'H3 Hexagon',
            columns: columns
          };
        })
      };
    }
  }]);
  return HexagonIdLayer;
}(_baseLayer["default"]);

exports["default"] = HexagonIdLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy1oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSIsIkhFWEFHT05fSURfRklFTERTIiwiaGV4X2lkIiwiaGV4SWRSZXF1aXJlZENvbHVtbnMiLCJoZXhJZEFjY2Vzc29yIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsImRlZmF1bHRFbGV2YXRpb24iLCJkZWZhdWx0Q292ZXJhZ2UiLCJIZXhhZ29uSWRWaXNDb25maWdzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJjb3ZlcmFnZSIsImVuYWJsZTNkIiwic2l6ZVJhbmdlIiwiY292ZXJhZ2VSYW5nZSIsImVsZXZhdGlvblNjYWxlIiwiSGV4YWdvbklkTGF5ZXIiLCJwcm9wcyIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImNvbmZpZyIsImNvbHVtbnMiLCJjb3ZlcmFnZUZpZWxkIiwiY292ZXJhZ2VEb21haW4iLCJjb3ZlcmFnZVNjYWxlIiwiZ2V0SGV4SWQiLCJhbGxEYXRhIiwiZmlsdGVyZWRJbmRleCIsImkiLCJsZW5ndGgiLCJpbmRleCIsImlkIiwiY2VudHJvaWQiLCJkYXRhVG9GZWF0dXJlIiwiY2VudHJvaWRzIiwicHVzaCIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJjU2NhbGUiLCJnZXRWaXNDaGFubmVsU2NhbGUiLCJjb2xvcnMiLCJtYXAiLCJjIiwic1NjYWxlIiwiY29TY2FsZSIsImdldEVsZXZhdGlvbiIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJnZXRDb3ZlcmFnZSIsImdldEZpbHRlclZhbHVlIiwiZmlsdGVyVmFsdWVBY2Nlc3NvciIsImJvdW5kcyIsImdldFBvaW50c0JvdW5kcyIsInVwZGF0ZU1ldGEiLCJvcHRzIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsImgzSGV4YWdvbkxheWVyVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiY29sdW1uTGF5ZXJUcmlnZ2VycyIsImRlZmF1bHRMYXllclByb3BzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwiSDNIZXhhZ29uTGF5ZXIiLCJ3cmFwTG9uZ2l0dWRlIiwiZ2V0SGV4YWdvbiIsIngiLCJhdXRvSGlnaGxpZ2h0IiwiaGlnaGxpZ2h0Q29sb3IiLCJISUdITElHSF9DT0xPUl8zRCIsImV4dHJ1ZGVkIiwidXBkYXRlVHJpZ2dlcnMiLCJfc3ViTGF5ZXJQcm9wcyIsInR5cGUiLCJFbmhhbmNlZENvbHVtbkxheWVyIiwiaXNMYXllckhvdmVyZWQiLCJHZW9Kc29uTGF5ZXIiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwiZ2V0TGluZUNvbG9yIiwibGluZVdpZHRoU2NhbGUiLCJIM0hleGFnb25MYXllckljb24iLCJzaXplIiwicHJvcGVydHkiLCJmaWVsZCIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJyYWRpdXMiLCJmaWVsZHMiLCJmb3VuZENvbHVtbnMiLCJmaW5kRGVmYXVsdENvbHVtbkZpZWxkIiwiaXNWaXNpYmxlIiwibGFiZWwiLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixHQUFHLENBQWpD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QUFBLEdBQUcsRUFBRSxVQU5HO0FBT1JDLFVBQUFBLGdCQUFnQixFQUFFQyxnQ0FBZUM7QUFQekI7QUFOWjtBQWdCRDs7O2lEQUUyQztBQUFBLCtCQUFkQyxNQUFjO0FBQUEsVUFBZEEsTUFBYyw2QkFBTCxFQUFLO0FBQzFDLFVBQU1DLFlBQVksR0FBRyxLQUFLQyxzQkFBTCxDQUE0QjdHLGlCQUE1QixFQUErQzJHLE1BQS9DLENBQXJCOztBQUNBLFVBQUksQ0FBQ0MsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5RSxNQUFuQyxFQUEyQztBQUN6QyxlQUFPO0FBQUNaLFVBQUFBLEtBQUssRUFBRTtBQUFSLFNBQVA7QUFDRDs7QUFFRCxhQUFPO0FBQ0xBLFFBQUFBLEtBQUssRUFBRTBGLFlBQVksQ0FBQ3RELEdBQWIsQ0FBaUIsVUFBQWhDLE9BQU87QUFBQSxpQkFBSztBQUNsQ3dGLFlBQUFBLFNBQVMsRUFBRSxJQUR1QjtBQUVsQ0MsWUFBQUEsS0FBSyxFQUFFLFlBRjJCO0FBR2xDekYsWUFBQUEsT0FBTyxFQUFQQTtBQUhrQyxXQUFMO0FBQUEsU0FBeEI7QUFERixPQUFQO0FBT0Q7OztFQXhEeUMwRixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcclxuaW1wb3J0IHtHZW9Kc29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XHJcbmltcG9ydCB7SDNIZXhhZ29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2dlby1sYXllcnMnO1xyXG5pbXBvcnQgRW5oYW5jZWRDb2x1bW5MYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2NvbHVtbi1sYXllci9lbmhhbmNlZC1jb2x1bW4tbGF5ZXInO1xyXG5pbXBvcnQge2dldENlbnRyb2lkLCBpZFRvUG9seWdvbkdlbywgaDNJc1ZhbGlkfSBmcm9tICcuL2gzLXV0aWxzJztcclxuaW1wb3J0IEgzSGV4YWdvbkxheWVySWNvbiBmcm9tICcuL2gzLWhleGFnb24tbGF5ZXItaWNvbic7XHJcbmltcG9ydCB7Q0hBTk5FTF9TQ0FMRVMsIEhJR0hMSUdIX0NPTE9SXzNEfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSA9IDg7XHJcblxyXG5leHBvcnQgY29uc3QgSEVYQUdPTl9JRF9GSUVMRFMgPSB7XHJcbiAgaGV4X2lkOiBbJ2hleF9pZCcsICdoZXhhZ29uX2lkJywgJ2gzX2lkJ11cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZXhJZFJlcXVpcmVkQ29sdW1ucyA9IFsnaGV4X2lkJ107XHJcbmV4cG9ydCBjb25zdCBoZXhJZEFjY2Vzc29yID0gKHtoZXhfaWR9KSA9PiBkID0+IGQuZGF0YVtoZXhfaWQuZmllbGRJZHhdO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEVsZXZhdGlvbiA9IDUwMDtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb3ZlcmFnZSA9IDE7XHJcblxyXG5leHBvcnQgY29uc3QgSGV4YWdvbklkVmlzQ29uZmlncyA9IHtcclxuICBvcGFjaXR5OiAnb3BhY2l0eScsXHJcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxyXG4gIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxyXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnLFxyXG4gIHNpemVSYW5nZTogJ2VsZXZhdGlvblJhbmdlJyxcclxuICBjb3ZlcmFnZVJhbmdlOiAnY292ZXJhZ2VSYW5nZScsXHJcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZSdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb25JZExheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKEhleGFnb25JZFZpc0NvbmZpZ3MpO1xyXG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gaGV4SWRBY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdoZXhhZ29uSWQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gJ0gzJztcclxuICB9XHJcblxyXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcclxuICAgIHJldHVybiBoZXhJZFJlcXVpcmVkQ29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldCBsYXllckljb24oKSB7XHJcbiAgICAvLyB1c2UgaGV4YWdvbiBsYXllciBpY29uIGZvciBub3dcclxuICAgIHJldHVybiBIM0hleGFnb25MYXllckljb247XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscyxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLnNpemUsXHJcbiAgICAgICAgcHJvcGVydHk6ICdoZWlnaHQnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgICAgcHJvcGVydHk6ICdjb3ZlcmFnZScsXHJcbiAgICAgICAgZmllbGQ6ICdjb3ZlcmFnZUZpZWxkJyxcclxuICAgICAgICBzY2FsZTogJ2NvdmVyYWdlU2NhbGUnLFxyXG4gICAgICAgIGRvbWFpbjogJ2NvdmVyYWdlRG9tYWluJyxcclxuICAgICAgICByYW5nZTogJ2NvdmVyYWdlUmFuZ2UnLFxyXG4gICAgICAgIGtleTogJ2NvdmVyYWdlJyxcclxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5yYWRpdXNcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkcyA9IFtdfSkge1xyXG4gICAgY29uc3QgZm91bmRDb2x1bW5zID0gdGhpcy5maW5kRGVmYXVsdENvbHVtbkZpZWxkKEhFWEFHT05fSURfRklFTERTLCBmaWVsZHMpO1xyXG4gICAgaWYgKCFmb3VuZENvbHVtbnMgfHwgIWZvdW5kQ29sdW1ucy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHtwcm9wczogW119O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiBmb3VuZENvbHVtbnMubWFwKGNvbHVtbnMgPT4gKHtcclxuICAgICAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdIMyBIZXhhZ29uJyxcclxuICAgICAgICBjb2x1bW5zXHJcbiAgICAgIH0pKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyA9IHt9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxyXG5cclxuICAgICAgLy8gYWRkIGhlaWdodCB2aXN1YWwgY2hhbm5lbFxyXG4gICAgICBjb3ZlcmFnZUZpZWxkOiBudWxsLFxyXG4gICAgICBjb3ZlcmFnZURvbWFpbjogWzAsIDFdLFxyXG4gICAgICBjb3ZlcmFnZVNjYWxlOiAnbGluZWFyJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRIZXhJZCkge1xyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGZpbHRlcmVkSW5kZXhbaV07XHJcbiAgICAgIGNvbnN0IGlkID0gZ2V0SGV4SWQoe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XHJcbiAgICAgIGNvbnN0IGNlbnRyb2lkID0gdGhpcy5kYXRhVG9GZWF0dXJlLmNlbnRyb2lkc1tpbmRleF07XHJcblxyXG4gICAgICBpZiAoY2VudHJvaWQpIHtcclxuICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgZGF0YSBpbmRleFxyXG4gICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgY2VudHJvaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBmaXggY29tcGxleGl0eVxyXG4gIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cclxuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSwgb3B0ID0ge30pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sb3JTY2FsZSxcclxuICAgICAgY29sb3JEb21haW4sXHJcbiAgICAgIGNvbG9yRmllbGQsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBzaXplRmllbGQsXHJcbiAgICAgIHNpemVTY2FsZSxcclxuICAgICAgc2l6ZURvbWFpbixcclxuICAgICAgY292ZXJhZ2VGaWVsZCxcclxuICAgICAgY292ZXJhZ2VTY2FsZSxcclxuICAgICAgY292ZXJhZ2VEb21haW4sXHJcbiAgICAgIHZpc0NvbmZpZzoge3NpemVSYW5nZSwgY29sb3JSYW5nZSwgY292ZXJhZ2VSYW5nZSwgZW5hYmxlM2R9XHJcbiAgICB9ID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgY29uc3Qge2dwdUZpbHRlcn0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xyXG4gICAgY29uc3QgZ2V0SGV4SWQgPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcclxuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMudXBkYXRlRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKTtcclxuICAgIC8vIGNvbG9yXHJcbiAgICBjb25zdCBjU2NhbGUgPVxyXG4gICAgICBjb2xvckZpZWxkICYmXHJcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxyXG4gICAgICAgIGNvbG9yU2NhbGUsXHJcbiAgICAgICAgY29sb3JEb21haW4sXHJcbiAgICAgICAgY29sb3JSYW5nZS5jb2xvcnMubWFwKGMgPT4gaGV4VG9SZ2IoYykpXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gaGVpZ2h0XHJcbiAgICBjb25zdCBzU2NhbGUgPVxyXG4gICAgICBzaXplRmllbGQgJiYgZW5hYmxlM2QgJiYgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoc2l6ZVNjYWxlLCBzaXplRG9tYWluLCBzaXplUmFuZ2UsIDApO1xyXG5cclxuICAgIC8vIGNvdmVyYWdlXHJcbiAgICBjb25zdCBjb1NjYWxlID1cclxuICAgICAgY292ZXJhZ2VGaWVsZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShjb3ZlcmFnZVNjYWxlLCBjb3ZlcmFnZURvbWFpbiwgY292ZXJhZ2VSYW5nZSwgMCk7XHJcblxyXG4gICAgY29uc3QgZ2V0RWxldmF0aW9uID0gc1NjYWxlXHJcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoc1NjYWxlLCBkLmRhdGEsIHNpemVGaWVsZCwgMClcclxuICAgICAgOiBkZWZhdWx0RWxldmF0aW9uO1xyXG5cclxuICAgIGNvbnN0IGdldEZpbGxDb2xvciA9IGNTY2FsZVxyXG4gICAgICA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGNTY2FsZSwgZC5kYXRhLCBjb2xvckZpZWxkKVxyXG4gICAgICA6IGNvbG9yO1xyXG5cclxuICAgIGNvbnN0IGdldENvdmVyYWdlID0gY29TY2FsZVxyXG4gICAgICA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGNvU2NhbGUsIGQuZGF0YSwgY292ZXJhZ2VGaWVsZCwgMClcclxuICAgICAgOiBkZWZhdWx0Q292ZXJhZ2U7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YSxcclxuICAgICAgZ2V0RWxldmF0aW9uLFxyXG4gICAgICBnZXRGaWxsQ29sb3IsXHJcbiAgICAgIGdldEhleElkLFxyXG4gICAgICBnZXRDb3ZlcmFnZSxcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKClcclxuICAgIH07XHJcbiAgfVxyXG4gIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xyXG5cclxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0SGV4SWQpIHtcclxuICAgIGNvbnN0IGNlbnRyb2lkcyA9IGFsbERhdGEubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGdldEhleElkKHtkYXRhOiBkfSk7XHJcbiAgICAgIGlmICghaDNJc1ZhbGlkKGlkKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHNhdmUgYSByZWZlcmVuY2Ugb2YgY2VudHJvaWRzIHRvIGRhdGFUb0ZlYXR1cmVcclxuICAgICAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byByZSBjYWxjdWxhdGUgaXQgYWdhaW5cclxuICAgICAgcmV0dXJuIGdldENlbnRyb2lkKHtpZH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRQb2ludHNCb3VuZHMoY2VudHJvaWRzKTtcclxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IHtjZW50cm9pZHN9O1xyXG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcclxuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlfSA9IG9wdHM7XHJcblxyXG4gICAgY29uc3Qgem9vbUZhY3RvciA9IHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XHJcbiAgICBjb25zdCBlbGVab29tRmFjdG9yID0gdGhpcy5nZXRFbGV2YXRpb25ab29tRmFjdG9yKG1hcFN0YXRlKTtcclxuICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcztcclxuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGgzSGV4YWdvbkxheWVyVHJpZ2dlcnMgPSB7XHJcbiAgICAgIGdldEZpbGxDb2xvcjoge1xyXG4gICAgICAgIGNvbG9yOiBjb25maWcuY29sb3IsXHJcbiAgICAgICAgY29sb3JGaWVsZDogY29uZmlnLmNvbG9yRmllbGQsXHJcbiAgICAgICAgY29sb3JSYW5nZTogdmlzQ29uZmlnLmNvbG9yUmFuZ2UsXHJcbiAgICAgICAgY29sb3JTY2FsZTogY29uZmlnLmNvbG9yU2NhbGVcclxuICAgICAgfSxcclxuICAgICAgZ2V0RWxldmF0aW9uOiB7XHJcbiAgICAgICAgc2l6ZUZpZWxkOiBjb25maWcuc2l6ZUZpZWxkLFxyXG4gICAgICAgIHNpemVSYW5nZTogdmlzQ29uZmlnLnNpemVSYW5nZSxcclxuICAgICAgICBzaXplU2NhbGU6IGNvbmZpZy5zaXplU2NhbGUsXHJcbiAgICAgICAgZW5hYmxlM2Q6IHZpc0NvbmZpZy5lbmFibGUzZFxyXG4gICAgICB9LFxyXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29sdW1uTGF5ZXJUcmlnZ2VycyA9IHtcclxuICAgICAgZ2V0Q292ZXJhZ2U6IHtcclxuICAgICAgICBjb3ZlcmFnZUZpZWxkOiBjb25maWcuY292ZXJhZ2VGaWVsZCxcclxuICAgICAgICBjb3ZlcmFnZVJhbmdlOiB2aXNDb25maWcuY292ZXJhZ2VSYW5nZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRMYXllclByb3BzID0gdGhpcy5nZXREZWZhdWx0RGVja0xheWVyUHJvcHMob3B0cyk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgbmV3IEgzSGV4YWdvbkxheWVyKHtcclxuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxyXG5cclxuICAgICAgICBnZXRIZXhhZ29uOiB4ID0+IHguaWQsXHJcblxyXG4gICAgICAgIC8vIGNvdmVyYWdlXHJcbiAgICAgICAgY292ZXJhZ2U6IGNvbmZpZy5jb3ZlcmFnZUZpZWxkID8gMSA6IHZpc0NvbmZpZy5jb3ZlcmFnZSxcclxuXHJcbiAgICAgICAgLy8gaGlnaGxpZ2h0XHJcbiAgICAgICAgYXV0b0hpZ2hsaWdodDogdmlzQ29uZmlnLmVuYWJsZTNkLFxyXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcclxuXHJcbiAgICAgICAgLy8gZWxldmF0aW9uXHJcbiAgICAgICAgZXh0cnVkZWQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcclxuICAgICAgICBlbGV2YXRpb25TY2FsZTogdmlzQ29uZmlnLmVsZXZhdGlvblNjYWxlICogZWxlWm9vbUZhY3RvcixcclxuXHJcbiAgICAgICAgLy8gcmVuZGVyXHJcbiAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IGgzSGV4YWdvbkxheWVyVHJpZ2dlcnMsXHJcbiAgICAgICAgX3N1YkxheWVyUHJvcHM6IHtcclxuICAgICAgICAgICdoZXhhZ29uLWNlbGwnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEVuaGFuY2VkQ29sdW1uTGF5ZXIsXHJcbiAgICAgICAgICAgIGdldENvdmVyYWdlOiBkYXRhLmdldENvdmVyYWdlLFxyXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2VyczogY29sdW1uTGF5ZXJUcmlnZ2Vyc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpICYmICFjb25maWcuc2l6ZUZpZWxkXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIG5ldyBHZW9Kc29uTGF5ZXIoe1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxyXG4gICAgICAgICAgICAgIGRhdGE6IFtpZFRvUG9seWdvbkdlbyhvYmplY3RIb3ZlcmVkKV0sXHJcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiBjb25maWcuaGlnaGxpZ2h0Q29sb3IsXHJcbiAgICAgICAgICAgICAgbGluZVdpZHRoU2NhbGU6IERFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSAqIHpvb21GYWN0b3IsXHJcbiAgICAgICAgICAgICAgd3JhcExvbmdpdHVkZTogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIF1cclxuICAgICAgICA6IFtdKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19