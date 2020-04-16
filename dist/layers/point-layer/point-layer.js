"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.pointVisConfigs = exports.pointOptionalColumns = exports.pointRequiredColumns = exports.pointPosAccessor = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extensions = require("@deck.gl/extensions");

var _layers = require("@deck.gl/layers");

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _colorUtils = require("../../utils/color-utils");

var _pointLayerIcon = _interopRequireDefault(require("./point-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _layerTextLabel = require("../layer-text-label");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng,
      altitude = _ref.altitude;
  return function (d) {
    return [// lng
    d.data[lng.fieldIdx], // lat
    d.data[lat.fieldIdx], altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0];
  };
};

exports.pointPosAccessor = pointPosAccessor;
var pointRequiredColumns = ['lat', 'lng'];
exports.pointRequiredColumns = pointRequiredColumns;
var pointOptionalColumns = ['altitude'];
exports.pointOptionalColumns = pointOptionalColumns;
var brushingExtension = new _extensions.BrushingExtension();
var pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  outline: 'outline',
  thickness: 'thickness',
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radiusRange: 'radiusRange',
  filled: {
    type: 'boolean',
    label: 'Fill Color',
    defaultValue: true,
    property: 'filled'
  }
};
exports.pointVisConfigs = pointVisConfigs;

var PointLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(PointLayer, _Layer);

  var _super = _createSuper(PointLayer);

  function PointLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PointLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(pointVisConfigs);

    _this.getPositionAccessor = function () {
      return pointPosAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(PointLayer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getPosition) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            data: allData[index],
            position: pos,
            // index is important for filter
            index: index
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this2 = this;

      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorDomain = _this$config.colorDomain,
          colorField = _this$config.colorField,
          strokeColorField = _this$config.strokeColorField,
          strokeColorScale = _this$config.strokeColorScale,
          strokeColorDomain = _this$config.strokeColorDomain,
          color = _this$config.color,
          sizeField = _this$config.sizeField,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          textLabel = _this$config.textLabel,
          _this$config$visConfi = _this$config.visConfig,
          radiusRange = _this$config$visConfi.radiusRange,
          fixedRadius = _this$config$visConfi.fixedRadius,
          colorRange = _this$config$visConfi.colorRange,
          strokeColorRange = _this$config$visConfi.strokeColorRange,
          strokeColor = _this$config$visConfi.strokeColor;
      var gpuFilter = datasets[this.config.dataId].gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data,
          triggerChanged = _this$updateData.triggerChanged;

      var getPosition = this.getPositionAccessor(); // point color

      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // stroke color

      var scScale = strokeColorField && this.getVisChannelScale(strokeColorScale, strokeColorDomain, strokeColorRange.colors.map(_colorUtils.hexToRgb)); // point radius

      var rScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, radiusRange, fixedRadius);
      var getRadius = rScale ? function (d) {
        return _this2.getEncodedChannelValue(rScale, d.data, sizeField, 0);
      } : 1;
      var getFillColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getLineColor = scScale ? function (d) {
        return _this2.getEncodedChannelValue(scScale, d.data, strokeColorField);
      } : strokeColor || color; // get all distinct characters in the text labels

      var textLabels = (0, _layerTextLabel.formatTextLabelData)({
        textLabel: textLabel,
        triggerChanged: triggerChanged,
        oldLayerData: oldLayerData,
        data: data
      });
      return {
        data: data,
        getPosition: getPosition,
        getFillColor: getFillColor,
        getLineColor: getLineColor,
        getFilterValue: gpuFilter.filterValueAccessor(),
        getRadius: getRadius,
        textLabels: textLabels
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getPosition = this.getPositionAccessor();
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
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          interactionConfig = opts.interactionConfig;
      var radiusScale = this.getRadiusScaleByZoom(mapState);

      var layerProps = _objectSpread({
        stroked: this.config.visConfig.outline,
        filled: this.config.visConfig.filled,
        lineWidthScale: this.config.visConfig.thickness,
        radiusScale: radiusScale
      }, this.config.visConfig.fixedRadius ? {} : {
        radiusMaxPixels: 500
      });

      var updateTriggers = {
        getPosition: this.config.columns,
        getRadius: {
          sizeField: this.config.sizeField,
          radiusRange: this.config.visConfig.radiusRange,
          fixedRadius: this.config.visConfig.fixedRadius,
          sizeScale: this.config.sizeScale
        },
        getFillColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: this.config.visConfig.colorRange,
          colorScale: this.config.colorScale
        },
        getLineColor: {
          color: this.config.visConfig.strokeColor,
          colorField: this.config.strokeColorField,
          colorRange: this.config.visConfig.strokeColorRange,
          colorScale: this.config.strokeColorScale
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var brushingProps = this.getBrushingExtensionProps(interactionConfig);
      var getPixelOffset = (0, _layerTextLabel.getTextOffsetByRadius)(radiusScale, data.getRadius, mapState);
      var extensions = [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [brushingExtension]);

      var sharedProps = _objectSpread({
        getFilterValue: data.getFilterValue,
        extensions: extensions,
        filterRange: defaultLayerProps.filterRange
      }, brushingProps);

      return [new _layers.ScatterplotLayer(_objectSpread({}, defaultLayerProps, {}, brushingProps, {}, layerProps, {}, data, {
        parameters: {
          // circles will be flat on the map when the altitude column is not used
          depthTest: this.config.columns.altitude.fieldIdx > -1
        },
        updateTriggers: updateTriggers,
        extensions: extensions
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _layers.ScatterplotLayer(_objectSpread({}, this.getDefaultHoverLayerProps(), {}, layerProps, {
        data: [objectHovered.object],
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        getRadius: data.getRadius,
        getPosition: data.getPosition
      }))] : []), (0, _toConsumableArray2["default"])(this.renderTextLabelLayer({
        getPosition: data.getPosition,
        sharedProps: sharedProps,
        getPixelOffset: getPixelOffset,
        updateTriggers: updateTriggers
      }, opts)));
    }
  }, {
    key: "type",
    get: function get() {
      return 'point';
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _pointLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return pointRequiredColumns;
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return pointOptionalColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return [].concat((0, _toConsumableArray2["default"])((0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "noneLayerDataAffectingProps", this)), ['radius']);
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "visualChannels", this).color, {
          condition: function condition(config) {
            return config.visConfig.filled;
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
            return config.visConfig.outline;
          }
        },
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "visualChannels", this).size, {
          range: 'radiusRange',
          property: 'radius',
          channelScaleType: 'radius'
        })
      };
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fieldPairs = _ref3.fieldPairs,
          fieldPairs = _ref3$fieldPairs === void 0 ? [] : _ref3$fieldPairs;
      var props = []; // Make layer for each pair

      fieldPairs.forEach(function (pair) {
        // find fields for tableFieldIndex
        var latField = pair.pair.lat;
        var lngField = pair.pair.lng;
        var layerName = pair.defaultName;
        var prop = {
          label: layerName.length ? layerName : 'Point'
        }; // default layer color for begintrip and dropoff point

        if (latField.value in _defaultSettings.DEFAULT_LAYER_COLOR) {
          prop.color = (0, _colorUtils.hexToRgb)(_defaultSettings.DEFAULT_LAYER_COLOR[latField.value]);
        } // set the first layer to be visible


        if (props.length === 0) {
          prop.isVisible = true;
        }

        prop.columns = {
          lat: latField,
          lng: lngField,
          altitude: {
            value: null,
            fieldIdx: -1,
            optional: true
          }
        };
        props.push(prop);
      });
      return {
        props: props
      };
    }
  }]);
  return PointLayer;
}(_baseLayer["default"]);

exports["default"] = PointLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInBvaW50UmVxdWlyZWRDb2x1bW5zIiwicG9pbnRPcHRpb25hbENvbHVtbnMiLCJicnVzaGluZ0V4dGVuc2lvbiIsIkJydXNoaW5nRXh0ZW5zaW9uIiwicG9pbnRWaXNDb25maWdzIiwicmFkaXVzIiwiZml4ZWRSYWRpdXMiLCJvcGFjaXR5Iiwib3V0bGluZSIsInRoaWNrbmVzcyIsInN0cm9rZUNvbG9yIiwiY29sb3JSYW5nZSIsInN0cm9rZUNvbG9yUmFuZ2UiLCJyYWRpdXNSYW5nZSIsImZpbGxlZCIsInR5cGUiLCJsYWJlbCIsImRlZmF1bHRWYWx1ZSIsInByb3BlcnR5IiwiUG9pbnRMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsInN0cm9rZUNvbG9yRmllbGQiLCJzdHJva2VDb2xvckRvbWFpbiIsInN0cm9rZUNvbG9yU2NhbGUiLCJnZXRQb3NpdGlvbiIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4IiwiaSIsImxlbmd0aCIsImluZGV4IiwicG9zIiwiZXZlcnkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInB1c2giLCJwb3NpdGlvbiIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInRleHRMYWJlbCIsInZpc0NvbmZpZyIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJ0cmlnZ2VyQ2hhbmdlZCIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsIm1hcCIsImhleFRvUmdiIiwic2NTY2FsZSIsInJTY2FsZSIsImdldFJhZGl1cyIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJnZXRMaW5lQ29sb3IiLCJ0ZXh0TGFiZWxzIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsIm9wdHMiLCJvYmplY3RIb3ZlcmVkIiwibWFwU3RhdGUiLCJpbnRlcmFjdGlvbkNvbmZpZyIsInJhZGl1c1NjYWxlIiwiZ2V0UmFkaXVzU2NhbGVCeVpvb20iLCJsYXllclByb3BzIiwic3Ryb2tlZCIsImxpbmVXaWR0aFNjYWxlIiwicmFkaXVzTWF4UGl4ZWxzIiwidXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZGVmYXVsdExheWVyUHJvcHMiLCJnZXREZWZhdWx0RGVja0xheWVyUHJvcHMiLCJicnVzaGluZ1Byb3BzIiwiZ2V0QnJ1c2hpbmdFeHRlbnNpb25Qcm9wcyIsImdldFBpeGVsT2Zmc2V0IiwiZXh0ZW5zaW9ucyIsInNoYXJlZFByb3BzIiwiZmlsdGVyUmFuZ2UiLCJTY2F0dGVycGxvdExheWVyIiwicGFyYW1ldGVycyIsImRlcHRoVGVzdCIsImlzTGF5ZXJIb3ZlcmVkIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsIm9iamVjdCIsImhpZ2hsaWdodENvbG9yIiwicmVuZGVyVGV4dExhYmVsTGF5ZXIiLCJQb2ludExheWVySWNvbiIsImRlZmF1bHRQb2ludENvbHVtblBhaXJzIiwiY29uZGl0aW9uIiwiZmllbGQiLCJzY2FsZSIsImRvbWFpbiIsInJhbmdlIiwia2V5IiwiY2hhbm5lbFNjYWxlVHlwZSIsIkNIQU5ORUxfU0NBTEVTIiwic2l6ZSIsImZpZWxkUGFpcnMiLCJmb3JFYWNoIiwicGFpciIsImxhdEZpZWxkIiwibG5nRmllbGQiLCJsYXllck5hbWUiLCJkZWZhdWx0TmFtZSIsInByb3AiLCJ2YWx1ZSIs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YykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7QnJ1c2hpbmdFeHRlbnNpb259IGZyb20gJ0BkZWNrLmdsL2V4dGVuc2lvbnMnO1xuaW1wb3J0IHtTY2F0dGVycGxvdExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQgUG9pbnRMYXllckljb24gZnJvbSAnLi9wb2ludC1sYXllci1pY29uJztcbmltcG9ydCB7REVGQVVMVF9MQVlFUl9DT0xPUiwgQ0hBTk5FTF9TQ0FMRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuaW1wb3J0IHtnZXRUZXh0T2Zmc2V0QnlSYWRpdXMsIGZvcm1hdFRleHRMYWJlbERhdGF9IGZyb20gJy4uL2xheWVyLXRleHQtbGFiZWwnO1xuXG5leHBvcnQgY29uc3QgcG9pbnRQb3NBY2Nlc3NvciA9ICh7bGF0LCBsbmcsIGFsdGl0dWRlfSkgPT4gZCA9PiBbXG4gIC8vIGxuZ1xuICBkLmRhdGFbbG5nLmZpZWxkSWR4XSxcbiAgLy8gbGF0XG4gIGQuZGF0YVtsYXQuZmllbGRJZHhdLFxuICBhbHRpdHVkZSAmJiBhbHRpdHVkZS5maWVsZElkeCA+IC0xID8gZC5kYXRhW2FsdGl0dWRlLmZpZWxkSWR4XSA6IDBcbl07XG5cbmV4cG9ydCBjb25zdCBwb2ludFJlcXVpcmVkQ29sdW1ucyA9IFsnbGF0JywgJ2xuZyddO1xuZXhwb3J0IGNvbnN0IHBvaW50T3B0aW9uYWxDb2x1bW5zID0gWydhbHRpdHVkZSddO1xuXG5jb25zdCBicnVzaGluZ0V4dGVuc2lvbiA9IG5ldyBCcnVzaGluZ0V4dGVuc2lvbigpO1xuXG5leHBvcnQgY29uc3QgcG9pbnRWaXNDb25maWdzID0ge1xuICByYWRpdXM6ICdyYWRpdXMnLFxuICBmaXhlZFJhZGl1czogJ2ZpeGVkUmFkaXVzJyxcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBvdXRsaW5lOiAnb3V0bGluZScsXG4gIHRoaWNrbmVzczogJ3RoaWNrbmVzcycsXG4gIHN0cm9rZUNvbG9yOiAnc3Ryb2tlQ29sb3InLFxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXG4gIHN0cm9rZUNvbG9yUmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcbiAgcmFkaXVzUmFuZ2U6ICdyYWRpdXNSYW5nZScsXG4gIGZpbGxlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBsYWJlbDogJ0ZpbGwgQ29sb3InLFxuICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAgICBwcm9wZXJ0eTogJ2ZpbGxlZCdcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRMYXllciBleHRlbmRzIExheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKHBvaW50VmlzQ29uZmlncyk7XG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gcG9pbnRQb3NBY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncG9pbnQnO1xuICB9XG5cbiAgZ2V0IGlzQWdncmVnYXRlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBQb2ludExheWVySWNvbjtcbiAgfVxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHBvaW50UmVxdWlyZWRDb2x1bW5zO1xuICB9XG5cbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcbiAgICByZXR1cm4gcG9pbnRPcHRpb25hbENvbHVtbnM7XG4gIH1cblxuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBvaW50Q29sdW1uUGFpcnM7XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbLi4uc3VwZXIubm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzLCAncmFkaXVzJ107XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLmNvbG9yLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmZpbGxlZFxuICAgICAgfSxcbiAgICAgIHN0cm9rZUNvbG9yOiB7XG4gICAgICAgIHByb3BlcnR5OiAnc3Ryb2tlQ29sb3InLFxuICAgICAgICBmaWVsZDogJ3N0cm9rZUNvbG9yRmllbGQnLFxuICAgICAgICBzY2FsZTogJ3N0cm9rZUNvbG9yU2NhbGUnLFxuICAgICAgICBkb21haW46ICdzdHJva2VDb2xvckRvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnc3Ryb2tlQ29sb3JSYW5nZScsXG4gICAgICAgIGtleTogJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3IsXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcub3V0bGluZVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSxcbiAgICAgICAgcmFuZ2U6ICdyYWRpdXNSYW5nZScsXG4gICAgICAgIHByb3BlcnR5OiAncmFkaXVzJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogJ3JhZGl1cydcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyh7ZmllbGRQYWlycyA9IFtdfSkge1xuICAgIGNvbnN0IHByb3BzID0gW107XG5cbiAgICAvLyBNYWtlIGxheWVyIGZvciBlYWNoIHBhaXJcbiAgICBmaWVsZFBhaXJzLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAvLyBmaW5kIGZpZWxkcyBmb3IgdGFibGVGaWVsZEluZGV4XG4gICAgICBjb25zdCBsYXRGaWVsZCA9IHBhaXIucGFpci5sYXQ7XG4gICAgICBjb25zdCBsbmdGaWVsZCA9IHBhaXIucGFpci5sbmc7XG4gICAgICBjb25zdCBsYXllck5hbWUgPSBwYWlyLmRlZmF1bHROYW1lO1xuXG4gICAgICBjb25zdCBwcm9wID0ge1xuICAgICAgICBsYWJlbDogbGF5ZXJOYW1lLmxlbmd0aCA/IGxheWVyTmFtZSA6ICdQb2ludCdcbiAgICAgIH07XG5cbiAgICAgIC8vIGRlZmF1bHQgbGF5ZXIgY29sb3IgZm9yIGJlZ2ludHJpcCBhbmQgZHJvcG9mZiBwb2ludFxuICAgICAgaWYgKGxhdEZpZWxkLnZhbHVlIGluIERFRkFVTFRfTEFZRVJfQ09MT1IpIHtcbiAgICAgICAgcHJvcC5jb2xvciA9IGhleFRvUmdiKERFRkFVTFRfTEFZRVJfQ09MT1JbbGF0RmllbGQudmFsdWVdKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBmaXJzdCBsYXllciB0byBiZSB2aXNpYmxlXG4gICAgICBpZiAocHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHByb3AuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvcC5jb2x1bW5zID0ge1xuICAgICAgICBsYXQ6IGxhdEZpZWxkLFxuICAgICAgICBsbmc6IGxuZ0ZpZWxkLFxuICAgICAgICBhbHRpdHVkZToge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTEsIG9wdGlvbmFsOiB0cnVlfVxuICAgICAgfTtcblxuICAgICAgcHJvcHMucHVzaChwcm9wKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7cHJvcHN9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcblxuICAgICAgLy8gYWRkIHN0cm9rZSBjb2xvciB2aXN1YWwgY2hhbm5lbFxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogbnVsbCxcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluOiBbMCwgMV0sXG4gICAgICBzdHJva2VDb2xvclNjYWxlOiAncXVhbnRpbGUnXG4gICAgfTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG5cbiAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICBpZiAocG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcbiAgICAgICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgICAgIC8vIGluZGV4IGlzIGltcG9ydGFudCBmb3IgZmlsdGVyXG4gICAgICAgICAgaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvclNjYWxlLFxuICAgICAgY29sb3JEb21haW4sXG4gICAgICBjb2xvckZpZWxkLFxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZCxcbiAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXG4gICAgICBzdHJva2VDb2xvckRvbWFpbixcbiAgICAgIGNvbG9yLFxuICAgICAgc2l6ZUZpZWxkLFxuICAgICAgc2l6ZVNjYWxlLFxuICAgICAgc2l6ZURvbWFpbixcbiAgICAgIHRleHRMYWJlbCxcbiAgICAgIHZpc0NvbmZpZzoge3JhZGl1c1JhbmdlLCBmaXhlZFJhZGl1cywgY29sb3JSYW5nZSwgc3Ryb2tlQ29sb3JSYW5nZSwgc3Ryb2tlQ29sb3J9XG4gICAgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgY29uc3Qge2dwdUZpbHRlcn0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xuICAgIGNvbnN0IHtkYXRhLCB0cmlnZ2VyQ2hhbmdlZH0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcbiAgICAvLyBwb2ludCBjb2xvclxuXG4gICAgY29uc3QgY1NjYWxlID1cbiAgICAgIGNvbG9yRmllbGQgJiZcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGNvbG9yU2NhbGUsIGNvbG9yRG9tYWluLCBjb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpKTtcblxuICAgIC8vIHN0cm9rZSBjb2xvclxuICAgIGNvbnN0IHNjU2NhbGUgPVxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoXG4gICAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXG4gICAgICAgIHN0cm9rZUNvbG9yRG9tYWluLFxuICAgICAgICBzdHJva2VDb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpXG4gICAgICApO1xuXG4gICAgLy8gcG9pbnQgcmFkaXVzXG4gICAgY29uc3QgclNjYWxlID1cbiAgICAgIHNpemVGaWVsZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShzaXplU2NhbGUsIHNpemVEb21haW4sIHJhZGl1c1JhbmdlLCBmaXhlZFJhZGl1cyk7XG5cbiAgICBjb25zdCBnZXRSYWRpdXMgPSByU2NhbGUgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShyU2NhbGUsIGQuZGF0YSwgc2l6ZUZpZWxkLCAwKSA6IDE7XG5cbiAgICBjb25zdCBnZXRGaWxsQ29sb3IgPSBjU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY1NjYWxlLCBkLmRhdGEsIGNvbG9yRmllbGQpXG4gICAgICA6IGNvbG9yO1xuXG4gICAgY29uc3QgZ2V0TGluZUNvbG9yID0gc2NTY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShzY1NjYWxlLCBkLmRhdGEsIHN0cm9rZUNvbG9yRmllbGQpXG4gICAgICA6IHN0cm9rZUNvbG9yIHx8IGNvbG9yO1xuXG4gICAgLy8gZ2V0IGFsbCBkaXN0aW5jdCBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0IGxhYmVsc1xuICAgIGNvbnN0IHRleHRMYWJlbHMgPSBmb3JtYXRUZXh0TGFiZWxEYXRhKHtcbiAgICAgIHRleHRMYWJlbCxcbiAgICAgIHRyaWdnZXJDaGFuZ2VkLFxuICAgICAgb2xkTGF5ZXJEYXRhLFxuICAgICAgZGF0YVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBnZXRQb3NpdGlvbixcbiAgICAgIGdldEZpbGxDb2xvcixcbiAgICAgIGdldExpbmVDb2xvcixcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcigpLFxuICAgICAgZ2V0UmFkaXVzLFxuICAgICAgdGV4dExhYmVsc1xuICAgIH07XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpIHtcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4gZ2V0UG9zaXRpb24oe2RhdGE6IGR9KSk7XG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBtYXBTdGF0ZSwgaW50ZXJhY3Rpb25Db25maWd9ID0gb3B0cztcblxuICAgIGNvbnN0IHJhZGl1c1NjYWxlID0gdGhpcy5nZXRSYWRpdXNTY2FsZUJ5Wm9vbShtYXBTdGF0ZSk7XG5cbiAgICBjb25zdCBsYXllclByb3BzID0ge1xuICAgICAgc3Ryb2tlZDogdGhpcy5jb25maWcudmlzQ29uZmlnLm91dGxpbmUsXG4gICAgICBmaWxsZWQ6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maWxsZWQsXG4gICAgICBsaW5lV2lkdGhTY2FsZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnRoaWNrbmVzcyxcbiAgICAgIHJhZGl1c1NjYWxlLFxuICAgICAgLi4uKHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyA/IHt9IDoge3JhZGl1c01heFBpeGVsczogNTAwfSlcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVHJpZ2dlcnMgPSB7XG4gICAgICBnZXRQb3NpdGlvbjogdGhpcy5jb25maWcuY29sdW1ucyxcbiAgICAgIGdldFJhZGl1czoge1xuICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLnNpemVGaWVsZCxcbiAgICAgICAgcmFkaXVzUmFuZ2U6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5yYWRpdXNSYW5nZSxcbiAgICAgICAgZml4ZWRSYWRpdXM6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyxcbiAgICAgICAgc2l6ZVNjYWxlOiB0aGlzLmNvbmZpZy5zaXplU2NhbGVcbiAgICAgIH0sXG4gICAgICBnZXRGaWxsQ29sb3I6IHtcbiAgICAgICAgY29sb3I6IHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgICBjb2xvckZpZWxkOiB0aGlzLmNvbmZpZy5jb2xvckZpZWxkLFxuICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuY29sb3JSYW5nZSxcbiAgICAgICAgY29sb3JTY2FsZTogdGhpcy5jb25maWcuY29sb3JTY2FsZVxuICAgICAgfSxcbiAgICAgIGdldExpbmVDb2xvcjoge1xuICAgICAgICBjb2xvcjogdGhpcy5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yLFxuICAgICAgICBjb2xvckZpZWxkOiB0aGlzLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkLFxuICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3JSYW5nZSxcbiAgICAgICAgY29sb3JTY2FsZTogdGhpcy5jb25maWcuc3Ryb2tlQ29sb3JTY2FsZVxuICAgICAgfSxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc1xuICAgIH07XG5cbiAgICBjb25zdCBkZWZhdWx0TGF5ZXJQcm9wcyA9IHRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpO1xuICAgIGNvbnN0IGJydXNoaW5nUHJvcHMgPSB0aGlzLmdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcpO1xuICAgIGNvbnN0IGdldFBpeGVsT2Zmc2V0ID0gZ2V0VGV4dE9mZnNldEJ5UmFkaXVzKHJhZGl1c1NjYWxlLCBkYXRhLmdldFJhZGl1cywgbWFwU3RhdGUpO1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBbLi4uZGVmYXVsdExheWVyUHJvcHMuZXh0ZW5zaW9ucywgYnJ1c2hpbmdFeHRlbnNpb25dO1xuXG4gICAgY29uc3Qgc2hhcmVkUHJvcHMgPSB7XG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZGF0YS5nZXRGaWx0ZXJWYWx1ZSxcbiAgICAgIGV4dGVuc2lvbnMsXG4gICAgICBmaWx0ZXJSYW5nZTogZGVmYXVsdExheWVyUHJvcHMuZmlsdGVyUmFuZ2UsXG4gICAgICAuLi5icnVzaGluZ1Byb3BzXG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgU2NhdHRlcnBsb3RMYXllcih7XG4gICAgICAgIC4uLmRlZmF1bHRMYXllclByb3BzLFxuICAgICAgICAuLi5icnVzaGluZ1Byb3BzLFxuICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgLy8gY2lyY2xlcyB3aWxsIGJlIGZsYXQgb24gdGhlIG1hcCB3aGVuIHRoZSBhbHRpdHVkZSBjb2x1bW4gaXMgbm90IHVzZWRcbiAgICAgICAgICBkZXB0aFRlc3Q6IHRoaXMuY29uZmlnLmNvbHVtbnMuYWx0aXR1ZGUuZmllbGRJZHggPiAtMVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUcmlnZ2VycyxcbiAgICAgICAgZXh0ZW5zaW9uc1xuICAgICAgfSksXG4gICAgICAvLyBob3ZlciBsYXllclxuICAgICAgLi4uKHRoaXMuaXNMYXllckhvdmVyZWQob2JqZWN0SG92ZXJlZClcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgU2NhdHRlcnBsb3RMYXllcih7XG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxuICAgICAgICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAgICAgICBkYXRhOiBbb2JqZWN0SG92ZXJlZC5vYmplY3RdLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pLFxuICAgICAgLy8gdGV4dCBsYWJlbCBsYXllclxuICAgICAgLi4udGhpcy5yZW5kZXJUZXh0TGFiZWxMYXllcihcbiAgICAgICAge1xuICAgICAgICAgIGdldFBvc2l0aW9uOiBkYXRhLmdldFBvc2l0aW9uLFxuICAgICAgICAgIHNoYXJlZFByb3BzLFxuICAgICAgICAgIGdldFBpeGVsT2Zmc2V0LFxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzXG4gICAgICAgIH0sXG4gICAgICAgIG9wdHNcbiAgICAgIClcbiAgICBdO1xuICB9XG59XG4iXX0=