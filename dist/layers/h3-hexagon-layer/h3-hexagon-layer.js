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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy1oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSIsIkhFWEFHT05fSURfRklFTERTIiwiaGV4X2lkIiwiaGV4SWRSZXF1aXJlZENvbHVtbnMiLCJoZXhJZEFjY2Vzc29yIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsImRlZmF1bHRFbGV2YXRpb24iLCJkZWZhdWx0Q292ZXJhZ2UiLCJIZXhhZ29uSWRWaXNDb25maWdzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJjb3ZlcmFnZSIsImVuYWJsZTNkIiwic2l6ZVJhbmdlIiwiY292ZXJhZ2VSYW5nZSIsImVsZXZhdGlvblNjYWxlIiwiSGV4YWdvbklkTGF5ZXIiLCJwcm9wcyIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImNvbmZpZyIsImNvbHVtbnMiLCJjb3ZlcmFnZUZpZWxkIiwiY292ZXJhZ2VEb21haW4iLCJjb3ZlcmFnZVNjYWxlIiwiZ2V0SGV4SWQiLCJhbGxEYXRhIiwiZmlsdGVyZWRJbmRleCIsImkiLCJsZW5ndGgiLCJpbmRleCIsImlkIiwiY2VudHJvaWQiLCJkYXRhVG9GZWF0dXJlIiwiY2VudHJvaWRzIiwicHVzaCIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJjU2NhbGUiLCJnZXRWaXNDaGFubmVsU2NhbGUiLCJjb2xvcnMiLCJtYXAiLCJjIiwic1NjYWxlIiwiY29TY2FsZSIsImdldEVsZXZhdGlvbiIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJnZXRDb3ZlcmFnZSIsImdldEZpbHRlclZhbHVlIiwiZmlsdGVyVmFsdWVBY2Nlc3NvciIsImJvdW5kcyIsImdldFBvaW50c0JvdW5kcyIsInVwZGF0ZU1ldGEiLCJvcHRzIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsImgzSGV4YWdvbkxheWVyVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiY29sdW1uTGF5ZXJUcmlnZ2VycyIsImRlZmF1bHRMYXllclByb3BzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwiSDNIZXhhZ29uTGF5ZXIiLCJ3cmFwTG9uZ2l0dWRlIiwiZ2V0SGV4YWdvbiIsIngiLCJhdXRvSGlnaGxpZ2h0IiwiaGlnaGxpZ2h0Q29sb3IiLCJISUdITElHSF9DT0xPUl8zRCIsImV4dHJ1ZGVkIiwidXBkYXRlVHJpZ2dlcnMiLCJfc3ViTGF5ZXJQcm9wcyIsInR5cGUiLCJFbmhhbmNlZENvbHVtbkxheWVyIiwiaXNMYXllckhvdmVyZWQiLCJHZW9Kc29uTGF5ZXIiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwiZ2V0TGluZUNvbG9yIiwibGluZVdpZHRoU2NhbGUiLCJIM0hleGFnb25MYXllckljb24iLCJzaXplIiwicHJvcGVydHkiLCJmaWVsZCIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJyYWRpdXMiLCJmaWVsZHMiLCJmb3VuZENvbHVtbnMiLCJmaW5kRGVmYXVsdENvbHVtbkZpZWxkIiwiaXNWaXNpYmxlIiwibGFiZWwiLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixHQUFHLENBQWpD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QUFBLEdBQUcsRUFBRSxVQU5HO0FBT1JDLFVBQUFBLGdCQUFnQixFQUFFQyxnQ0FBZUM7QUFQekI7QUFOWjtBQWdCRDs7O2lEQUUyQztBQUFBLCtCQUFkQyxNQUFjO0FBQUEsVUFBZEEsTUFBYyw2QkFBTCxFQUFLO0FBQzFDLFVBQU1DLFlBQVksR0FBRyxLQUFLQyxzQkFBTCxDQUE0QjdHLGlCQUE1QixFQUErQzJHLE1BQS9DLENBQXJCOztBQUNBLFVBQUksQ0FBQ0MsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5RSxNQUFuQyxFQUEyQztBQUN6QyxlQUFPO0FBQUNaLFVBQUFBLEtBQUssRUFBRTtBQUFSLFNBQVA7QUFDRDs7QUFFRCxhQUFPO0FBQ0xBLFFBQUFBLEtBQUssRUFBRTBGLFlBQVksQ0FBQ3RELEdBQWIsQ0FBaUIsVUFBQWhDLE9BQU87QUFBQSxpQkFBSztBQUNsQ3dGLFlBQUFBLFNBQVMsRUFBRSxJQUR1QjtBQUVsQ0MsWUFBQUEsS0FBSyxFQUFFLFlBRjJCO0FBR2xDekYsWUFBQUEsT0FBTyxFQUFQQTtBQUhrQyxXQUFMO0FBQUEsU0FBeEI7QUFERixPQUFQO0FBT0Q7OztFQXhEeUMwRixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCB7R2VvSnNvbkxheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuaW1wb3J0IHtIM0hleGFnb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvZ2VvLWxheWVycyc7XG5pbXBvcnQgRW5oYW5jZWRDb2x1bW5MYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2NvbHVtbi1sYXllci9lbmhhbmNlZC1jb2x1bW4tbGF5ZXInO1xuaW1wb3J0IHtnZXRDZW50cm9pZCwgaWRUb1BvbHlnb25HZW8sIGgzSXNWYWxpZH0gZnJvbSAnLi9oMy11dGlscyc7XG5pbXBvcnQgSDNIZXhhZ29uTGF5ZXJJY29uIGZyb20gJy4vaDMtaGV4YWdvbi1sYXllci1pY29uJztcbmltcG9ydCB7Q0hBTk5FTF9TQ0FMRVMsIEhJR0hMSUdIX0NPTE9SXzNEfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSA9IDg7XG5cbmV4cG9ydCBjb25zdCBIRVhBR09OX0lEX0ZJRUxEUyA9IHtcbiAgaGV4X2lkOiBbJ2hleF9pZCcsICdoZXhhZ29uX2lkJywgJ2gzX2lkJ11cbn07XG5cbmV4cG9ydCBjb25zdCBoZXhJZFJlcXVpcmVkQ29sdW1ucyA9IFsnaGV4X2lkJ107XG5leHBvcnQgY29uc3QgaGV4SWRBY2Nlc3NvciA9ICh7aGV4X2lkfSkgPT4gZCA9PiBkLmRhdGFbaGV4X2lkLmZpZWxkSWR4XTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0RWxldmF0aW9uID0gNTAwO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb3ZlcmFnZSA9IDE7XG5cbmV4cG9ydCBjb25zdCBIZXhhZ29uSWRWaXNDb25maWdzID0ge1xuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgY292ZXJhZ2U6ICdjb3ZlcmFnZScsXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnLFxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIGNvdmVyYWdlUmFuZ2U6ICdjb3ZlcmFnZVJhbmdlJyxcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb25JZExheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKEhleGFnb25JZFZpc0NvbmZpZ3MpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvciA9ICgpID0+IGhleElkQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2hleGFnb25JZCc7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ0gzJztcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gaGV4SWRSZXF1aXJlZENvbHVtbnM7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIC8vIHVzZSBoZXhhZ29uIGxheWVyIGljb24gZm9yIG5vd1xuICAgIHJldHVybiBIM0hleGFnb25MYXllckljb247XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxuICAgICAgc2l6ZToge1xuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxuICAgICAgICBwcm9wZXJ0eTogJ2hlaWdodCdcbiAgICAgIH0sXG4gICAgICBjb3ZlcmFnZToge1xuICAgICAgICBwcm9wZXJ0eTogJ2NvdmVyYWdlJyxcbiAgICAgICAgZmllbGQ6ICdjb3ZlcmFnZUZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdjb3ZlcmFnZVNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnY292ZXJhZ2VEb21haW4nLFxuICAgICAgICByYW5nZTogJ2NvdmVyYWdlUmFuZ2UnLFxuICAgICAgICBrZXk6ICdjb3ZlcmFnZScsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnJhZGl1c1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZHMgPSBbXX0pIHtcbiAgICBjb25zdCBmb3VuZENvbHVtbnMgPSB0aGlzLmZpbmREZWZhdWx0Q29sdW1uRmllbGQoSEVYQUdPTl9JRF9GSUVMRFMsIGZpZWxkcyk7XG4gICAgaWYgKCFmb3VuZENvbHVtbnMgfHwgIWZvdW5kQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7cHJvcHM6IFtdfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IGZvdW5kQ29sdW1ucy5tYXAoY29sdW1ucyA9PiAoe1xuICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnSDMgSGV4YWdvbicsXG4gICAgICAgIGNvbHVtbnNcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxuXG4gICAgICAvLyBhZGQgaGVpZ2h0IHZpc3VhbCBjaGFubmVsXG4gICAgICBjb3ZlcmFnZUZpZWxkOiBudWxsLFxuICAgICAgY292ZXJhZ2VEb21haW46IFswLCAxXSxcbiAgICAgIGNvdmVyYWdlU2NhbGU6ICdsaW5lYXInXG4gICAgfTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRIZXhJZCkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgaWQgPSBnZXRIZXhJZCh7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcbiAgICAgIGNvbnN0IGNlbnRyb2lkID0gdGhpcy5kYXRhVG9GZWF0dXJlLmNlbnRyb2lkc1tpbmRleF07XG5cbiAgICAgIGlmIChjZW50cm9pZCkge1xuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGRhdGEgaW5kZXhcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBjZW50cm9pZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBUT0RPOiBmaXggY29tcGxleGl0eVxuICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhLCBvcHQgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yU2NhbGUsXG4gICAgICBjb2xvckRvbWFpbixcbiAgICAgIGNvbG9yRmllbGQsXG4gICAgICBjb2xvcixcbiAgICAgIHNpemVGaWVsZCxcbiAgICAgIHNpemVTY2FsZSxcbiAgICAgIHNpemVEb21haW4sXG4gICAgICBjb3ZlcmFnZUZpZWxkLFxuICAgICAgY292ZXJhZ2VTY2FsZSxcbiAgICAgIGNvdmVyYWdlRG9tYWluLFxuICAgICAgdmlzQ29uZmlnOiB7c2l6ZVJhbmdlLCBjb2xvclJhbmdlLCBjb3ZlcmFnZVJhbmdlLCBlbmFibGUzZH1cbiAgICB9ID0gdGhpcy5jb25maWc7XG5cbiAgICBjb25zdCB7Z3B1RmlsdGVyfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XG4gICAgY29uc3QgZ2V0SGV4SWQgPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG4gICAgLy8gY29sb3JcbiAgICBjb25zdCBjU2NhbGUgPVxuICAgICAgY29sb3JGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoXG4gICAgICAgIGNvbG9yU2NhbGUsXG4gICAgICAgIGNvbG9yRG9tYWluLFxuICAgICAgICBjb2xvclJhbmdlLmNvbG9ycy5tYXAoYyA9PiBoZXhUb1JnYihjKSlcbiAgICAgICk7XG5cbiAgICAvLyBoZWlnaHRcbiAgICBjb25zdCBzU2NhbGUgPVxuICAgICAgc2l6ZUZpZWxkICYmIGVuYWJsZTNkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKHNpemVTY2FsZSwgc2l6ZURvbWFpbiwgc2l6ZVJhbmdlLCAwKTtcblxuICAgIC8vIGNvdmVyYWdlXG4gICAgY29uc3QgY29TY2FsZSA9XG4gICAgICBjb3ZlcmFnZUZpZWxkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGNvdmVyYWdlU2NhbGUsIGNvdmVyYWdlRG9tYWluLCBjb3ZlcmFnZVJhbmdlLCAwKTtcblxuICAgIGNvbnN0IGdldEVsZXZhdGlvbiA9IHNTY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShzU2NhbGUsIGQuZGF0YSwgc2l6ZUZpZWxkLCAwKVxuICAgICAgOiBkZWZhdWx0RWxldmF0aW9uO1xuXG4gICAgY29uc3QgZ2V0RmlsbENvbG9yID0gY1NjYWxlXG4gICAgICA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGNTY2FsZSwgZC5kYXRhLCBjb2xvckZpZWxkKVxuICAgICAgOiBjb2xvcjtcblxuICAgIGNvbnN0IGdldENvdmVyYWdlID0gY29TY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjb1NjYWxlLCBkLmRhdGEsIGNvdmVyYWdlRmllbGQsIDApXG4gICAgICA6IGRlZmF1bHRDb3ZlcmFnZTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgZ2V0RWxldmF0aW9uLFxuICAgICAgZ2V0RmlsbENvbG9yLFxuICAgICAgZ2V0SGV4SWQsXG4gICAgICBnZXRDb3ZlcmFnZSxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcigpXG4gICAgfTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0SGV4SWQpIHtcbiAgICBjb25zdCBjZW50cm9pZHMgPSBhbGxEYXRhLm1hcCgoZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0SGV4SWQoe2RhdGE6IGR9KTtcbiAgICAgIGlmICghaDNJc1ZhbGlkKGlkKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIHNhdmUgYSByZWZlcmVuY2Ugb2YgY2VudHJvaWRzIHRvIGRhdGFUb0ZlYXR1cmVcbiAgICAgIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gcmUgY2FsY3VsYXRlIGl0IGFnYWluXG4gICAgICByZXR1cm4gZ2V0Q2VudHJvaWQoe2lkfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhjZW50cm9pZHMpO1xuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IHtjZW50cm9pZHN9O1xuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XG4gIH1cblxuICByZW5kZXJMYXllcihvcHRzKSB7XG4gICAgY29uc3Qge2RhdGEsIGdwdUZpbHRlciwgb2JqZWN0SG92ZXJlZCwgbWFwU3RhdGV9ID0gb3B0cztcblxuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IGVsZVpvb21GYWN0b3IgPSB0aGlzLmdldEVsZXZhdGlvblpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcztcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IGgzSGV4YWdvbkxheWVyVHJpZ2dlcnMgPSB7XG4gICAgICBnZXRGaWxsQ29sb3I6IHtcbiAgICAgICAgY29sb3I6IGNvbmZpZy5jb2xvcixcbiAgICAgICAgY29sb3JGaWVsZDogY29uZmlnLmNvbG9yRmllbGQsXG4gICAgICAgIGNvbG9yUmFuZ2U6IHZpc0NvbmZpZy5jb2xvclJhbmdlLFxuICAgICAgICBjb2xvclNjYWxlOiBjb25maWcuY29sb3JTY2FsZVxuICAgICAgfSxcbiAgICAgIGdldEVsZXZhdGlvbjoge1xuICAgICAgICBzaXplRmllbGQ6IGNvbmZpZy5zaXplRmllbGQsXG4gICAgICAgIHNpemVSYW5nZTogdmlzQ29uZmlnLnNpemVSYW5nZSxcbiAgICAgICAgc2l6ZVNjYWxlOiBjb25maWcuc2l6ZVNjYWxlLFxuICAgICAgICBlbmFibGUzZDogdmlzQ29uZmlnLmVuYWJsZTNkXG4gICAgICB9LFxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbHVtbkxheWVyVHJpZ2dlcnMgPSB7XG4gICAgICBnZXRDb3ZlcmFnZToge1xuICAgICAgICBjb3ZlcmFnZUZpZWxkOiBjb25maWcuY292ZXJhZ2VGaWVsZCxcbiAgICAgICAgY292ZXJhZ2VSYW5nZTogdmlzQ29uZmlnLmNvdmVyYWdlUmFuZ2VcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgSDNIZXhhZ29uTGF5ZXIoe1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgd3JhcExvbmdpdHVkZTogZmFsc2UsXG5cbiAgICAgICAgZ2V0SGV4YWdvbjogeCA9PiB4LmlkLFxuXG4gICAgICAgIC8vIGNvdmVyYWdlXG4gICAgICAgIGNvdmVyYWdlOiBjb25maWcuY292ZXJhZ2VGaWVsZCA/IDEgOiB2aXNDb25maWcuY292ZXJhZ2UsXG5cbiAgICAgICAgLy8gaGlnaGxpZ2h0XG4gICAgICAgIGF1dG9IaWdobGlnaHQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcbiAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IEhJR0hMSUdIX0NPTE9SXzNELFxuXG4gICAgICAgIC8vIGVsZXZhdGlvblxuICAgICAgICBleHRydWRlZDogdmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBlbGV2YXRpb25TY2FsZTogdmlzQ29uZmlnLmVsZXZhdGlvblNjYWxlICogZWxlWm9vbUZhY3RvcixcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IGgzSGV4YWdvbkxheWVyVHJpZ2dlcnMsXG4gICAgICAgIF9zdWJMYXllclByb3BzOiB7XG4gICAgICAgICAgJ2hleGFnb24tY2VsbCc6IHtcbiAgICAgICAgICAgIHR5cGU6IEVuaGFuY2VkQ29sdW1uTGF5ZXIsXG4gICAgICAgICAgICBnZXRDb3ZlcmFnZTogZGF0YS5nZXRDb3ZlcmFnZSxcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzOiBjb2x1bW5MYXllclRyaWdnZXJzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpICYmICFjb25maWcuc2l6ZUZpZWxkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgbmV3IEdlb0pzb25MYXllcih7XG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxuICAgICAgICAgICAgICBkYXRhOiBbaWRUb1BvbHlnb25HZW8ob2JqZWN0SG92ZXJlZCldLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IGNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgbGluZVdpZHRoU2NhbGU6IERFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSAqIHpvb21GYWN0b3IsXG4gICAgICAgICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSlcbiAgICBdO1xuICB9XG59XG4iXX0=