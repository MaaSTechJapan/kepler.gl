"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.aggregateRequiredColumns = exports.getFilterDataFunc = exports.getValueAggrFunc = exports.pointPosResolver = exports.pointPosAccessor = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _baseLayer = _interopRequireDefault(require("./base-layer"));

var _colorUtils = require("../utils/color-utils");

var _aggregateUtils = require("../utils/aggregate-utils");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return function (d) {
    return [d.data[lng.fieldIdx], d.data[lat.fieldIdx]];
  };
};

exports.pointPosAccessor = pointPosAccessor;

var pointPosResolver = function pointPosResolver(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng;
  return "".concat(lat.fieldIdx, "-").concat(lng.fieldIdx);
};

exports.pointPosResolver = pointPosResolver;

var getValueAggrFunc = function getValueAggrFunc(field, aggregation) {
  return function (points) {
    return field ? (0, _aggregateUtils.aggregate)(points.map(function (p) {
      return p.data[field.tableFieldIndex - 1];
    }), aggregation) : points.length;
  };
};

exports.getValueAggrFunc = getValueAggrFunc;

var getFilterDataFunc = function getFilterDataFunc(filterRange, getFilterValue) {
  return function (pt) {
    return getFilterValue(pt).every(function (val, i) {
      return val >= filterRange[i][0] && val <= filterRange[i][1];
    });
  };
};

exports.getFilterDataFunc = getFilterDataFunc;

var getLayerColorRange = function getLayerColorRange(colorRange) {
  return colorRange.colors.map(_colorUtils.hexToRgb);
};

var aggregateRequiredColumns = ['lat', 'lng'];
exports.aggregateRequiredColumns = aggregateRequiredColumns;

var AggregationLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(AggregationLayer, _Layer);

  var _super = _createSuper(AggregationLayer);

  function AggregationLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AggregationLayer);
    _this = _super.call(this, props);

    _this.getPositionAccessor = function () {
      return pointPosAccessor(_this.config.columns);
    };

    _this.getColorRange = (0, _lodash["default"])(getLayerColorRange);
    return _this;
  }

  (0, _createClass2["default"])(AggregationLayer, [{
    key: "getVisualChannelDescription",

    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Average of ETA
      var _this$visualChannels$ = this.visualChannels[key],
          range = _this$visualChannels$.range,
          field = _this$visualChannels$.field,
          defaultMeasure = _this$visualChannels$.defaultMeasure,
          aggregation = _this$visualChannels$.aggregation;
      return {
        label: this.visConfigSettings[range].label,
        measure: this.config[field] ? "".concat(this.config.visConfig[aggregation], " of ").concat(this.config[field].name) : defaultMeasure
      };
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      // return aggregated object
      return object;
    }
    /**
     * Aggregation layer handles visual channel aggregation inside deck.gl layer
     */

  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(_ref3, channel) {
      var data = _ref3.data,
          allData = _ref3.allData;
      this.validateVisualChannel(channel);
    }
    /**
     * Validate aggregation type on top of basic layer visual channel validation
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      // field type decides aggregation type decides scale type
      this.validateFieldType(channel);
      this.validateAggregationType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate aggregation type based on selected field
     */

  }, {
    key: "validateAggregationType",
    value: function validateAggregationType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          aggregation = visualChannel.aggregation;
      var aggregationOptions = this.getAggregationOptions(channel);

      if (!aggregation) {
        return;
      }

      if (!aggregationOptions.length) {
        // if field cannot be aggregated, set field to null
        this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
      } else if (!aggregationOptions.includes(this.config.visConfig[aggregation])) {
        // current aggregation type is not supported by this field
        // set aggregation to the first supported option
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, aggregation, aggregationOptions[0]));
      }
    }
  }, {
    key: "getAggregationOptions",
    value: function getAggregationOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType;
      return Object.keys(this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : _defaultSettings.DEFAULT_AGGREGATION[channelScaleType]);
    }
    /**
     * Get scale options based on current field and aggregation type
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          aggregation = visualChannel.aggregation,
          channelScaleType = visualChannel.channelScaleType;
      var aggregationType = this.config.visConfig[aggregation];
      return this.config[field] ? // scale options based on aggregation
      _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType][aggregationType] : // default scale options for point count
      _defaultSettings.DEFAULT_AGGREGATION[channelScaleType][aggregationType];
    }
    /**
     * Aggregation layer handles visual channel aggregation inside deck.gl layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      return this;
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {
      // get bounds from points
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({
          data: d
        });
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref4, getPosition) {
      var allData = _ref4.allData,
          filteredIndex = _ref4.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            index: index,
            data: allData[index]
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var getPosition = this.getPositionAccessor(); // if (

      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getColorValue = getValueAggrFunc(this.config.colorField, this.config.visConfig.colorAggregation);
      var getElevationValue = getValueAggrFunc(this.config.sizeField, this.config.visConfig.sizeAggregation);
      var hasFilter = Object.values(gpuFilter.filterRange).some(function (arr) {
        return arr.some(function (v) {
          return v !== 0;
        });
      });
      var getFilterValue = gpuFilter.filterValueAccessor();
      var filterData = hasFilter ? getFilterDataFunc(gpuFilter.filterRange, getFilterValue) : undefined;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      return _objectSpread({
        data: data,
        getPosition: getPosition,
        _filterData: filterData
      }, getColorValue ? {
        getColorValue: getColorValue
      } : {}, {}, getElevationValue ? {
        getElevationValue: getElevationValue
      } : {});
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(opts) {
      var baseProp = (0, _get2["default"])((0, _getPrototypeOf2["default"])(AggregationLayer.prototype), "getDefaultDeckLayerProps", this).call(this, opts);
      return _objectSpread({}, baseProp, {
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // gpu data filtering is not supported in aggregation layer
        extensions: [],
        autoHighlight: this.config.visConfig.enable3d
      });
    }
  }, {
    key: "getDefaultAggregationLayerProp",
    value: function getDefaultAggregationLayerProp(opts) {
      var gpuFilter = opts.gpuFilter,
          mapState = opts.mapState,
          _opts$layerCallbacks = opts.layerCallbacks,
          layerCallbacks = _opts$layerCallbacks === void 0 ? {} : _opts$layerCallbacks;
      var visConfig = this.config.visConfig;
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var updateTriggers = {
        getColorValue: {
          colorField: this.config.colorField,
          colorAggregation: this.config.visConfig.colorAggregation
        },
        getElevationValue: {
          sizeField: this.config.sizeField,
          sizeAggregation: this.config.visConfig.sizeAggregation
        },
        _filterData: _objectSpread({
          filterRange: gpuFilter.filterRange
        }, gpuFilter.filterValueUpdateTriggers)
      };
      return _objectSpread({}, this.getDefaultDeckLayerProps(opts), {
        coverage: visConfig.coverage,
        // color
        colorRange: this.getColorRange(visConfig.colorRange),
        colorScaleType: this.config.colorScale,
        upperPercentile: visConfig.percentile[1],
        lowerPercentile: visConfig.percentile[0],
        colorAggregation: visConfig.colorAggregation,
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        elevationScaleType: this.config.sizeScale,
        elevationRange: visConfig.sizeRange,
        elevationLowerPercentile: visConfig.elevationPercentile[0],
        elevationUpperPercentile: visConfig.elevationPercentile[1],
        // updateTriggers
        updateTriggers: updateTriggers,
        // callbacks
        onSetColorDomain: layerCallbacks.onSetLayerDomain
      });
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return true;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return aggregateRequiredColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return [].concat((0, _toConsumableArray2["default"])((0, _get2["default"])((0, _getPrototypeOf2["default"])(AggregationLayer.prototype), "noneLayerDataAffectingProps", this)), ['enable3d', 'colorRange', 'colorDomain', 'sizeRange', 'sizeScale', 'sizeDomain', 'percentile', 'coverage', 'elevationPercentile', 'elevationScale']);
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
        },
        size: {
          aggregation: 'sizeAggregation',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.sizeAggr,
          condition: function condition(config) {
            return config.visConfig.enable3d;
          },
          defaultMeasure: 'Point Count',
          domain: 'sizeDomain',
          field: 'sizeField',
          key: 'size',
          property: 'height',
          range: 'sizeRange',
          scale: 'sizeScale'
        }
      };
    }
  }]);
  return AggregationLayer;
}(_baseLayer["default"]);

exports["default"] = AggregationLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYWdncmVnYXRpb24tbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImQiLCJkYXRhIiwiZmllbGRJZHgiLCJwb2ludFBvc1Jlc29sdmVyIiwiZ2V0VmFsdWVBZ2dyRnVuYyIsImZpZWxkIiwiYWdncmVnYXRpb24iLCJwb2ludHMiLCJtYXAiLCJwIiwidGFibGVGaWVsZEluZGV4IiwibGVuZ3RoIiwiZ2V0RmlsdGVyRGF0YUZ1bmMiLCJmaWx0ZXJSYW5nZSIsImdldEZpbHRlclZhbHVlIiwicHQiLCJldmVyeSIsInZhbCIsImkiLCJnZXRMYXllckNvbG9yUmFuZ2UiLCJjb2xvclJhbmdlIiwiY29sb3JzIiwiaGV4VG9SZ2IiLCJhZ2dyZWdhdGVSZXF1aXJlZENvbHVtbnMiLCJBZ2dyZWdhdGlvbkxheWVyIiwicHJvcHMiLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsImdldENvbG9yUmFuZ2UiLCJrZXkiLCJ2aXN1YWxDaGFubmVscyIsInJhbmdlIiwiZGVmYXVsdE1lYXN1cmUiLCJsYWJlbCIsInZpc0NvbmZpZ1NldHRpbmdzIiwibWVhc3VyZSIsInZpc0NvbmZpZyIsIm5hbWUiLCJvYmplY3QiLCJjaGFubmVsIiwiYWxsRGF0YSIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsInZhbGlkYXRlRmllbGRUeXBlIiwidmFsaWRhdGVBZ2dyZWdhdGlvblR5cGUiLCJ2YWxpZGF0ZVNjYWxlIiwidmlzdWFsQ2hhbm5lbCIsImFnZ3JlZ2F0aW9uT3B0aW9ucyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9ucyIsInVwZGF0ZUxheWVyQ29uZmlnIiwiaW5jbHVkZXMiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImNoYW5uZWxTY2FsZVR5cGUiLCJPYmplY3QiLCJrZXlzIiwiRklFTERfT1BUUyIsInR5cGUiLCJzY2FsZSIsIkRFRkFVTFRfQUdHUkVHQVRJT04iLCJhZ2dyZWdhdGlvblR5cGUiLCJkYXRhc2V0cyIsIm5ld0ZpbHRlciIsImdldFBvc2l0aW9uIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsImZpbHRlcmVkSW5kZXgiLCJpbmRleCIsInBvcyIsIk51bWJlciIsImlzRmluaXRlIiwicHVzaCIsIm9sZExheWVyRGF0YSIsImdwdUZpbHRlciIsImRhdGFJZCIsImdldENvbG9yVmFsdWUiLCJjb2xvckZpZWxkIiwiY29sb3JBZ2dyZWdhdGlvbiIsImdldEVsZXZhdGlvblZhbHVlIiwic2l6ZUZpZWxkIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaGFzRmlsdGVyIiwidmFsdWVzIiwic29tZSIsImFyciIsInYiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiZmlsdGVyRGF0YSIsInVuZGVmaW5lZCIsInVwZGF0ZURhdGEiLCJfZmlsdGVyRGF0YSIsIm9wdHMiLCJiYXNlUHJvcCIsImhpZ2hsaWdodENvbG9yIiwiSElHSExJR0hfQ09MT1JfM0QiLCJleHRlbnNpb25zIiwiYXV0b0hpZ2hsaWdodCIsImVuYWJsZTNkIiwibWFwU3RhdGUiLCJsYXllckNhbGxiYWNrcyIsImVsZVpvb21GYWN0b3IiLCJnZXRFbGV2YXRpb25ab29tRmFjdG9yIiwidXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwiY292ZXJhZ2UiLCJjb2xvclNjYWxlVHlwZSIsImNvbG9yU2NhbGUiLCJ1cHBlclBlcmNlbnRpbGUiLCJwZXJjZW50aWxlIiwibG93ZXJQZXJjZW50aWxlIiwiZXh0cnVkZWQiLCJlbGV2YXRpb25TY2FsZSIsImVsZXZhdGlvblNjYWxlVHlwZSIsInNpemVTY2FsZSIsImVsZXZhdGlvblJhbmdlIiwic2l6ZVJhbmdlIiwiZWxldmF0aW9uTG93ZXJQZXJjZW50aWxlIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImVsZXZhdGlvblVwcGVyUGVyY2VudGlsZSIsIm9uU2V0Q29sb3JEb21haW4iLCJvblNldExheWVyRG9tYWluIiwiZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMiLCJjb2xvciIsIkNIQU5ORUxfU0NBTEVTIiwiY29sb3JBZ2dyIiwiZG9tYWluIiwicHJvcGVydHkiLCJzaXplIiwic2l6ZUFnZ3IiLCJjb25kaXRpb24iLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUlPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFQyxHQUFGLFFBQUVBLEdBQUY7QUFBQSxNQUFPQyxHQUFQLFFBQU9BLEdBQVA7QUFBQSxTQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSSxDQUFDQSxDQUFDLENBQUNDLElBQUYsQ0FBT0YsR0FBRyxDQUFDRyxRQUFYLENBQUQsRUFBdUJGLENBQUMsQ0FBQ0MsSUFBRixDQUFPSCxHQUFHLENBQUNJLFFBQVgsQ0FBdkIsQ0FBSjtBQUFBLEdBQWpCO0FBQUEsQ0FBekI7Ozs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRUwsR0FBRixTQUFFQSxHQUFGO0FBQUEsTUFBT0MsR0FBUCxTQUFPQSxHQUFQO0FBQUEsbUJBQW1CRCxHQUFHLENBQUNJLFFBQXZCLGNBQW1DSCxHQUFHLENBQUNHLFFBQXZDO0FBQUEsQ0FBekI7Ozs7QUFFQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUF3QjtBQUN0RCxTQUFPLFVBQUFDLE1BQU0sRUFBSTtBQUNmLFdBQU9GLEtBQUssR0FDUiwrQkFDRUUsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ1IsSUFBRixDQUFPSSxLQUFLLENBQUNLLGVBQU4sR0FBd0IsQ0FBL0IsQ0FBSjtBQUFBLEtBQVosQ0FERixFQUVFSixXQUZGLENBRFEsR0FLUkMsTUFBTSxDQUFDSSxNQUxY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QVVKeUIsVUFBQUEsS0FBSyxFQUFFO0FBVkg7QUFaRCxPQUFQO0FBeUJEOzs7RUE5RDJDMEUscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gubWVtb2l6ZSc7XG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi9iYXNlLWxheWVyJztcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7YWdncmVnYXRlfSBmcm9tICd1dGlscy9hZ2dyZWdhdGUtdXRpbHMnO1xuaW1wb3J0IHtISUdITElHSF9DT0xPUl8zRH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge0NIQU5ORUxfU0NBTEVTLCBGSUVMRF9PUFRTLCBERUZBVUxUX0FHR1JFR0FUSU9OfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmV4cG9ydCBjb25zdCBwb2ludFBvc0FjY2Vzc29yID0gKHtsYXQsIGxuZ30pID0+IGQgPT4gW2QuZGF0YVtsbmcuZmllbGRJZHhdLCBkLmRhdGFbbGF0LmZpZWxkSWR4XV07XG5cbmV4cG9ydCBjb25zdCBwb2ludFBvc1Jlc29sdmVyID0gKHtsYXQsIGxuZ30pID0+IGAke2xhdC5maWVsZElkeH0tJHtsbmcuZmllbGRJZHh9YDtcblxuZXhwb3J0IGNvbnN0IGdldFZhbHVlQWdnckZ1bmMgPSAoZmllbGQsIGFnZ3JlZ2F0aW9uKSA9PiB7XG4gIHJldHVybiBwb2ludHMgPT4ge1xuICAgIHJldHVybiBmaWVsZFxuICAgICAgPyBhZ2dyZWdhdGUoXG4gICAgICAgICAgcG9pbnRzLm1hcChwID0+IHAuZGF0YVtmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxXSksXG4gICAgICAgICAgYWdncmVnYXRpb25cbiAgICAgICAgKVxuICAgICAgOiBwb2ludHMubGVuZ3RoO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZpbHRlckRhdGFGdW5jID0gKGZpbHRlclJhbmdlLCBnZXRGaWx0ZXJWYWx1ZSkgPT4gcHQgPT5cbiAgZ2V0RmlsdGVyVmFsdWUocHQpLmV2ZXJ5KCh2YWwsIGkpID0+IHZhbCA+PSBmaWx0ZXJSYW5nZVtpXVswXSAmJiB2YWwgPD0gZmlsdGVyUmFuZ2VbaV1bMV0pO1xuXG5jb25zdCBnZXRMYXllckNvbG9yUmFuZ2UgPSBjb2xvclJhbmdlID0+IGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYik7XG5cbmV4cG9ydCBjb25zdCBhZ2dyZWdhdGVSZXF1aXJlZENvbHVtbnMgPSBbJ2xhdCcsICdsbmcnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdncmVnYXRpb25MYXllciBleHRlbmRzIExheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBwb2ludFBvc0FjY2Vzc29yKHRoaXMuY29uZmlnLmNvbHVtbnMpO1xuICAgIHRoaXMuZ2V0Q29sb3JSYW5nZSA9IG1lbW9pemUoZ2V0TGF5ZXJDb2xvclJhbmdlKTtcbiAgfVxuXG4gIGdldCBpc0FnZ3JlZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZVJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCBjb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UG9pbnRDb2x1bW5QYWlycztcbiAgfVxuXG4gIGdldCBub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnN1cGVyLm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcyxcbiAgICAgICdlbmFibGUzZCcsXG4gICAgICAnY29sb3JSYW5nZScsXG4gICAgICAnY29sb3JEb21haW4nLFxuICAgICAgJ3NpemVSYW5nZScsXG4gICAgICAnc2l6ZVNjYWxlJyxcbiAgICAgICdzaXplRG9tYWluJyxcbiAgICAgICdwZXJjZW50aWxlJyxcbiAgICAgICdjb3ZlcmFnZScsXG4gICAgICAnZWxldmF0aW9uUGVyY2VudGlsZScsXG4gICAgICAnZWxldmF0aW9uU2NhbGUnXG4gICAgXTtcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHtcbiAgICAgICAgYWdncmVnYXRpb246ICdjb2xvckFnZ3JlZ2F0aW9uJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyLFxuICAgICAgICBkZWZhdWx0TWVhc3VyZTogJ1BvaW50IENvdW50JyxcbiAgICAgICAgZG9tYWluOiAnY29sb3JEb21haW4nLFxuICAgICAgICBmaWVsZDogJ2NvbG9yRmllbGQnLFxuICAgICAgICBrZXk6ICdjb2xvcicsXG4gICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgICAgICByYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICAgICAgICBzY2FsZTogJ2NvbG9yU2NhbGUnXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBhZ2dyZWdhdGlvbjogJ3NpemVBZ2dyZWdhdGlvbicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnNpemVBZ2dyLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBkZWZhdWx0TWVhc3VyZTogJ1BvaW50IENvdW50JyxcbiAgICAgICAgZG9tYWluOiAnc2l6ZURvbWFpbicsXG4gICAgICAgIGZpZWxkOiAnc2l6ZUZpZWxkJyxcbiAgICAgICAga2V5OiAnc2l6ZScsXG4gICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcbiAgICAgICAgcmFuZ2U6ICdzaXplUmFuZ2UnLFxuICAgICAgICBzY2FsZTogJ3NpemVTY2FsZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aXN1YWxDaGFubmVsIGNvbmZpZ1xuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zIHt7bGFiZWw6IHN0cmluZywgbWVhc3VyZTogKHN0cmluZ3xzdHJpbmcpfX1cbiAgICovXG4gIGdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbihrZXkpIHtcbiAgICAvLyBlLmcuIGxhYmVsOiBDb2xvciwgbWVhc3VyZTogQXZlcmFnZSBvZiBFVEFcbiAgICBjb25zdCB7cmFuZ2UsIGZpZWxkLCBkZWZhdWx0TWVhc3VyZSwgYWdncmVnYXRpb259ID0gdGhpcy52aXN1YWxDaGFubmVsc1trZXldO1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogdGhpcy52aXNDb25maWdTZXR0aW5nc1tyYW5nZV0ubGFiZWwsXG4gICAgICBtZWFzdXJlOiB0aGlzLmNvbmZpZ1tmaWVsZF1cbiAgICAgICAgPyBgJHt0aGlzLmNvbmZpZy52aXNDb25maWdbYWdncmVnYXRpb25dfSBvZiAke3RoaXMuY29uZmlnW2ZpZWxkXS5uYW1lfWBcbiAgICAgICAgOiBkZWZhdWx0TWVhc3VyZVxuICAgIH07XG4gIH1cblxuICBnZXRIb3ZlckRhdGEob2JqZWN0KSB7XG4gICAgLy8gcmV0dXJuIGFnZ3JlZ2F0ZWQgb2JqZWN0XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGlvbiBsYXllciBoYW5kbGVzIHZpc3VhbCBjaGFubmVsIGFnZ3JlZ2F0aW9uIGluc2lkZSBkZWNrLmdsIGxheWVyXG4gICAqL1xuICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWwoe2RhdGEsIGFsbERhdGF9LCBjaGFubmVsKSB7XG4gICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgYWdncmVnYXRpb24gdHlwZSBvbiB0b3Agb2YgYmFzaWMgbGF5ZXIgdmlzdWFsIGNoYW5uZWwgdmFsaWRhdGlvblxuICAgKiBAcGFyYW0gY2hhbm5lbFxuICAgKi9cbiAgdmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAvLyBmaWVsZCB0eXBlIGRlY2lkZXMgYWdncmVnYXRpb24gdHlwZSBkZWNpZGVzIHNjYWxlIHR5cGVcbiAgICB0aGlzLnZhbGlkYXRlRmllbGRUeXBlKGNoYW5uZWwpO1xuICAgIHRoaXMudmFsaWRhdGVBZ2dyZWdhdGlvblR5cGUoY2hhbm5lbCk7XG4gICAgdGhpcy52YWxpZGF0ZVNjYWxlKGNoYW5uZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGFnZ3JlZ2F0aW9uIHR5cGUgYmFzZWQgb24gc2VsZWN0ZWQgZmllbGRcbiAgICovXG4gIHZhbGlkYXRlQWdncmVnYXRpb25UeXBlKGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICBjb25zdCB7ZmllbGQsIGFnZ3JlZ2F0aW9ufSA9IHZpc3VhbENoYW5uZWw7XG4gICAgY29uc3QgYWdncmVnYXRpb25PcHRpb25zID0gdGhpcy5nZXRBZ2dyZWdhdGlvbk9wdGlvbnMoY2hhbm5lbCk7XG5cbiAgICBpZiAoIWFnZ3JlZ2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFhZ2dyZWdhdGlvbk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAvLyBpZiBmaWVsZCBjYW5ub3QgYmUgYWdncmVnYXRlZCwgc2V0IGZpZWxkIHRvIG51bGxcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tmaWVsZF06IG51bGx9KTtcbiAgICB9IGVsc2UgaWYgKCFhZ2dyZWdhdGlvbk9wdGlvbnMuaW5jbHVkZXModGhpcy5jb25maWcudmlzQ29uZmlnW2FnZ3JlZ2F0aW9uXSkpIHtcbiAgICAgIC8vIGN1cnJlbnQgYWdncmVnYXRpb24gdHlwZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgZmllbGRcbiAgICAgIC8vIHNldCBhZ2dyZWdhdGlvbiB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG9wdGlvblxuICAgICAgdGhpcy51cGRhdGVMYXllclZpc0NvbmZpZyh7W2FnZ3JlZ2F0aW9uXTogYWdncmVnYXRpb25PcHRpb25zWzBdfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWdncmVnYXRpb25PcHRpb25zKGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICBjb25zdCB7ZmllbGQsIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhcbiAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXVxuICAgICAgICA/IEZJRUxEX09QVFNbdGhpcy5jb25maWdbZmllbGRdLnR5cGVdLnNjYWxlW2NoYW5uZWxTY2FsZVR5cGVdXG4gICAgICAgIDogREVGQVVMVF9BR0dSRUdBVElPTltjaGFubmVsU2NhbGVUeXBlXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjYWxlIG9wdGlvbnMgYmFzZWQgb24gY3VycmVudCBmaWVsZCBhbmQgYWdncmVnYXRpb24gdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBnZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgYWdncmVnYXRpb24sIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcbiAgICBjb25zdCBhZ2dyZWdhdGlvblR5cGUgPSB0aGlzLmNvbmZpZy52aXNDb25maWdbYWdncmVnYXRpb25dO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tmaWVsZF1cbiAgICAgID8gLy8gc2NhbGUgb3B0aW9ucyBiYXNlZCBvbiBhZ2dyZWdhdGlvblxuICAgICAgICBGSUVMRF9PUFRTW3RoaXMuY29uZmlnW2ZpZWxkXS50eXBlXS5zY2FsZVtjaGFubmVsU2NhbGVUeXBlXVthZ2dyZWdhdGlvblR5cGVdXG4gICAgICA6IC8vIGRlZmF1bHQgc2NhbGUgb3B0aW9ucyBmb3IgcG9pbnQgY291bnRcbiAgICAgICAgREVGQVVMVF9BR0dSRUdBVElPTltjaGFubmVsU2NhbGVUeXBlXVthZ2dyZWdhdGlvblR5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0aW9uIGxheWVyIGhhbmRsZXMgdmlzdWFsIGNoYW5uZWwgYWdncmVnYXRpb24gaW5zaWRlIGRlY2suZ2wgbGF5ZXJcbiAgICovXG4gIHVwZGF0ZUxheWVyRG9tYWluKGRhdGFzZXRzLCBuZXdGaWx0ZXIpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xuICAgIC8vIGdldCBib3VuZHMgZnJvbSBwb2ludHNcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBkID0+IGdldFBvc2l0aW9uKHtkYXRhOiBkfSkpO1xuXG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG5cbiAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICBpZiAocG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKSB7XG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTsgLy8gaWYgKFxuICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcblxuICAgIGNvbnN0IGdldENvbG9yVmFsdWUgPSBnZXRWYWx1ZUFnZ3JGdW5jKFxuICAgICAgdGhpcy5jb25maWcuY29sb3JGaWVsZCxcbiAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZy5jb2xvckFnZ3JlZ2F0aW9uXG4gICAgKTtcblxuICAgIGNvbnN0IGdldEVsZXZhdGlvblZhbHVlID0gZ2V0VmFsdWVBZ2dyRnVuYyhcbiAgICAgIHRoaXMuY29uZmlnLnNpemVGaWVsZCxcbiAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZy5zaXplQWdncmVnYXRpb25cbiAgICApO1xuICAgIGNvbnN0IGhhc0ZpbHRlciA9IE9iamVjdC52YWx1ZXMoZ3B1RmlsdGVyLmZpbHRlclJhbmdlKS5zb21lKGFyciA9PiBhcnIuc29tZSh2ID0+IHYgIT09IDApKTtcbiAgICBjb25zdCBnZXRGaWx0ZXJWYWx1ZSA9IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKCk7XG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGhhc0ZpbHRlclxuICAgICAgPyBnZXRGaWx0ZXJEYXRhRnVuYyhncHVGaWx0ZXIuZmlsdGVyUmFuZ2UsIGdldEZpbHRlclZhbHVlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgX2ZpbHRlckRhdGE6IGZpbHRlckRhdGEsXG4gICAgICAuLi4oZ2V0Q29sb3JWYWx1ZSA/IHtnZXRDb2xvclZhbHVlfSA6IHt9KSxcbiAgICAgIC4uLihnZXRFbGV2YXRpb25WYWx1ZSA/IHtnZXRFbGV2YXRpb25WYWx1ZX0gOiB7fSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpIHtcbiAgICBjb25zdCBiYXNlUHJvcCA9IHN1cGVyLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYmFzZVByb3AsXG4gICAgICBoaWdobGlnaHRDb2xvcjogSElHSExJR0hfQ09MT1JfM0QsXG4gICAgICAvLyBncHUgZGF0YSBmaWx0ZXJpbmcgaXMgbm90IHN1cHBvcnRlZCBpbiBhZ2dyZWdhdGlvbiBsYXllclxuICAgICAgZXh0ZW5zaW9uczogW10sXG4gICAgICBhdXRvSGlnaGxpZ2h0OiB0aGlzLmNvbmZpZy52aXNDb25maWcuZW5hYmxlM2RcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdEFnZ3JlZ2F0aW9uTGF5ZXJQcm9wKG9wdHMpIHtcbiAgICBjb25zdCB7Z3B1RmlsdGVyLCBtYXBTdGF0ZSwgbGF5ZXJDYWxsYmFja3MgPSB7fX0gPSBvcHRzO1xuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgZWxlWm9vbUZhY3RvciA9IHRoaXMuZ2V0RWxldmF0aW9uWm9vbUZhY3RvcihtYXBTdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcbiAgICAgIGdldENvbG9yVmFsdWU6IHtcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcbiAgICAgICAgY29sb3JBZ2dyZWdhdGlvbjogdGhpcy5jb25maWcudmlzQ29uZmlnLmNvbG9yQWdncmVnYXRpb25cbiAgICAgIH0sXG4gICAgICBnZXRFbGV2YXRpb25WYWx1ZToge1xuICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLnNpemVGaWVsZCxcbiAgICAgICAgc2l6ZUFnZ3JlZ2F0aW9uOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc2l6ZUFnZ3JlZ2F0aW9uXG4gICAgICB9LFxuICAgICAgX2ZpbHRlckRhdGE6IHtcbiAgICAgICAgZmlsdGVyUmFuZ2U6IGdwdUZpbHRlci5maWx0ZXJSYW5nZSxcbiAgICAgICAgLi4uZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpLFxuICAgICAgY292ZXJhZ2U6IHZpc0NvbmZpZy5jb3ZlcmFnZSxcblxuICAgICAgLy8gY29sb3JcbiAgICAgIGNvbG9yUmFuZ2U6IHRoaXMuZ2V0Q29sb3JSYW5nZSh2aXNDb25maWcuY29sb3JSYW5nZSksXG4gICAgICBjb2xvclNjYWxlVHlwZTogdGhpcy5jb25maWcuY29sb3JTY2FsZSxcbiAgICAgIHVwcGVyUGVyY2VudGlsZTogdmlzQ29uZmlnLnBlcmNlbnRpbGVbMV0sXG4gICAgICBsb3dlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5wZXJjZW50aWxlWzBdLFxuICAgICAgY29sb3JBZ2dyZWdhdGlvbjogdmlzQ29uZmlnLmNvbG9yQWdncmVnYXRpb24sXG5cbiAgICAgIC8vIGVsZXZhdGlvblxuICAgICAgZXh0cnVkZWQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcbiAgICAgIGVsZXZhdGlvblNjYWxlOiB2aXNDb25maWcuZWxldmF0aW9uU2NhbGUgKiBlbGVab29tRmFjdG9yLFxuICAgICAgZWxldmF0aW9uU2NhbGVUeXBlOiB0aGlzLmNvbmZpZy5zaXplU2NhbGUsXG4gICAgICBlbGV2YXRpb25SYW5nZTogdmlzQ29uZmlnLnNpemVSYW5nZSxcbiAgICAgIGVsZXZhdGlvbkxvd2VyUGVyY2VudGlsZTogdmlzQ29uZmlnLmVsZXZhdGlvblBlcmNlbnRpbGVbMF0sXG4gICAgICBlbGV2YXRpb25VcHBlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25QZXJjZW50aWxlWzFdLFxuXG4gICAgICAvLyB1cGRhdGVUcmlnZ2Vyc1xuICAgICAgdXBkYXRlVHJpZ2dlcnMsXG5cbiAgICAgIC8vIGNhbGxiYWNrc1xuICAgICAgb25TZXRDb2xvckRvbWFpbjogbGF5ZXJDYWxsYmFja3Mub25TZXRMYXllckRvbWFpblxuICAgIH07XG4gIH1cbn1cbiJdfQ==