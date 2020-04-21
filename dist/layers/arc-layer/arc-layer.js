"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arcVisConfigs = exports.arcColumnLabels = exports.arcRequiredColumns = exports.arcPosAccessor = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _extensions = require("@deck.gl/extensions");

var _layers = require("@deck.gl/layers");

var _colorUtils = require("../../utils/color-utils");

var _arcLayerIcon = _interopRequireDefault(require("./arc-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var arcPosAccessor = function arcPosAccessor(_ref) {
  var lat0 = _ref.lat0,
      lng0 = _ref.lng0,
      lat1 = _ref.lat1,
      lng1 = _ref.lng1;
  return function (d) {
    return [d.data[lng0.fieldIdx], d.data[lat0.fieldIdx], 0, d.data[lng1.fieldIdx], d.data[lat1.fieldIdx], 0];
  };
};

exports.arcPosAccessor = arcPosAccessor;
var arcRequiredColumns = ['lat0', 'lng0', 'lat1', 'lng1'];
exports.arcRequiredColumns = arcRequiredColumns;
var arcColumnLabels = {
  lat0: 'source lat',
  lng0: 'source lng',
  lat1: 'target lat',
  lng1: 'target lng'
};
exports.arcColumnLabels = arcColumnLabels;
var arcVisConfigs = {
  opacity: 'opacity',
  thickness: 'thickness',
  colorRange: 'colorRange',
  sizeRange: 'strokeWidthRange',
  targetColor: 'targetColor'
};
exports.arcVisConfigs = arcVisConfigs;

var ArcLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(ArcLayer, _Layer);

  var _super = _createSuper(ArcLayer);

  function ArcLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ArcLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(arcVisConfigs);

    _this.getPositionAccessor = function () {
      return arcPosAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(ArcLayer, [{
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getPosition) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        // data = filteredIndex.reduce((accu, index) => {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            index: index,
            sourcePosition: [pos[0], pos[1], pos[2]],
            targetPosition: [pos[3], pos[4], pos[5]],
            data: allData[index]
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
          _this$config$visConfi = _this$config.visConfig,
          sizeRange = _this$config$visConfi.sizeRange,
          colorRange = _this$config$visConfi.colorRange,
          targetColor = _this$config$visConfi.targetColor;
      var gpuFilter = datasets[this.config.dataId].gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data; // arc color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // arc thickness

      var sScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange);
      var getStrokeWidth = sScale ? function (d) {
        return _this2.getEncodedChannelValue(sScale, d.data, sizeField, 0);
      } : 1;
      var getSourceColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getTargetColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : targetColor || color;
      return {
        data: data,
        getSourceColor: getSourceColor,
        getTargetColor: getTargetColor,
        getWidth: getStrokeWidth,
        getFilterValue: gpuFilter.filterValueAccessor()
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      // get bounds from arcs
      var getPosition = this.getPositionAccessor();
      var sBounds = this.getPointsBounds(allData, function (d) {
        var pos = getPosition({
          data: d
        });
        return [pos[0], pos[1]];
      });
      var tBounds = this.getPointsBounds(allData, function (d) {
        var pos = getPosition({
          data: d
        });
        return [pos[3], pos[4]];
      });
      var bounds = tBounds && sBounds ? [Math.min(sBounds[0], tBounds[0]), Math.min(sBounds[1], tBounds[1]), Math.max(sBounds[2], tBounds[2]), Math.max(sBounds[3], tBounds[3])] : sBounds || tBounds;
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
          interactionConfig = opts.interactionConfig;
      var colorUpdateTriggers = {
        color: this.config.color,
        colorField: this.config.colorField,
        colorRange: this.config.visConfig.colorRange,
        colorScale: this.config.colorScale,
        targetColor: this.config.visConfig.targetColor
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      return [new _layers.ArcLayer(_objectSpread({}, defaultLayerProps, {}, this.getBrushingExtensionProps(interactionConfig, 'source_target'), {}, data, {
        widthScale: this.config.visConfig.thickness,
        updateTriggers: {
          getFilterValue: gpuFilter.filterValueUpdateTriggers,
          getWidth: {
            sizeField: this.config.sizeField,
            sizeScale: this.config.sizeScale,
            sizeRange: this.config.visConfig.sizeRange
          },
          getSourceColor: colorUpdateTriggers,
          getTargetColor: colorUpdateTriggers
        },
        extensions: [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [new _extensions.BrushingExtension()])
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _layers.ArcLayer(_objectSpread({}, this.getDefaultHoverLayerProps(), {
        data: [objectHovered.object],
        widthScale: this.config.visConfig.thickness,
        getSourceColor: this.config.highlightColor,
        getTargetColor: this.config.highlightColor,
        getWidth: data.getWidth
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'arc';
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _arcLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return arcRequiredColumns;
    }
  }, {
    key: "columnLabels",
    get: function get() {
      return arcColumnLabels;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultLinkColumnPairs;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(ArcLayer.prototype), "visualChannels", this), {
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(ArcLayer.prototype), "visualChannels", this).size, {
          property: 'stroke'
        })
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fieldPairs = _ref3.fieldPairs,
          fieldPairs = _ref3$fieldPairs === void 0 ? [] : _ref3$fieldPairs;

      if (fieldPairs.length < 2) {
        return {
          props: []
        };
      }

      var props = {
        color: (0, _colorUtils.hexToRgb)(_defaultSettings.DEFAULT_LAYER_COLOR.tripArc)
      }; // connect the first two point layer with arc

      props.columns = {
        lat0: fieldPairs[0].pair.lat,
        lng0: fieldPairs[0].pair.lng,
        lat1: fieldPairs[1].pair.lat,
        lng1: fieldPairs[1].pair.lng
      };
      props.label = "".concat(fieldPairs[0].defaultName, " -> ").concat(fieldPairs[1].defaultName, " arc");
      return {
        props: [props]
      };
    }
  }]);
  return ArcLayer;
}(_baseLayer["default"]);

exports["default"] = ArcLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvYXJjLWxheWVyL2FyYy1sYXllci5qcyJdLCJuYW1lcyI6WyJhcmNQb3NBY2Nlc3NvciIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJkIiwiZGF0YSIsImZpZWxkSWR4IiwiYXJjUmVxdWlyZWRDb2x1bW5zIiwiYXJjQ29sdW1uTGFiZWxzIiwiYXJjVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJ0aGlja25lc3MiLCJjb2xvclJhbmdlIiwic2l6ZVJhbmdlIiwidGFyZ2V0Q29sb3IiLCJBcmNMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsImdldFBvc2l0aW9uIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJpIiwibGVuZ3RoIiwiaW5kZXgiLCJwb3MiLCJldmVyeSIsIk51bWJlciIsImlzRmluaXRlIiwicHVzaCIsInNvdXJjZVBvc2l0aW9uIiwidGFyZ2V0UG9zaXRpb24iLCJkYXRhc2V0cyIsIm9sZExheWVyRGF0YSIsIm9wdCIsImNvbG9yU2NhbGUiLCJjb2xvckRvbWFpbiIsImNvbG9yRmllbGQiLCJjb2xvciIsInNpemVGaWVsZCIsInNpemVTY2FsZSIsInNpemVEb21haW4iLCJ2aXNDb25maWciLCJncHVGaWx0ZXIiLCJkYXRhSWQiLCJ1cGRhdGVEYXRhIiwiY1NjYWxlIiwiZ2V0VmlzQ2hhbm5lbFNjYWxlIiwiY29sb3JzIiwibWFwIiwiaGV4VG9SZ2IiLCJzU2NhbGUiLCJnZXRTdHJva2VXaWR0aCIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRTb3VyY2VDb2xvciIsImdldFRhcmdldENvbG9yIiwiZ2V0V2lkdGgiLCJnZXRGaWx0ZXJWYWx1ZSIsImZpbHRlclZhbHVlQWNjZXNzb3IiLCJzQm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidEJvdW5kcyIsImJvdW5kcyIsIk1hdGgiLCJtaW4iLCJtYXgiLCJ1cGRhdGVNZXRhIiwib3B0cyIsIm9iamVjdEhvdmVyZWQiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImNvbG9yVXBkYXRlVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsIkRlY2tBcmNMYXllciIsImdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMiLCJ3aWR0aFNjYWxlIiwidXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZXh0ZW5zaW9ucyIsIkJydXNoaW5nRXh0ZW5zaW9uIiwiaXNMYXllckhvdmVyZWQiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwib2JqZWN0IiwiaGlnaGxpZ2h0Q29sb3IiLCJBcmNMYXllckljb24iLCJkZWZhdWx0TGlua0NvbHVtblBhaXJzIiwic2l6ZSIsInByb3BlcnR5IiwiZmllbGRQYWlycyIsIkRFRkFVTFRfTEFZRVJfQ09MT1IiLCJ0cmlwQXJjIiwicGFpciIsImxhdCIsImxuZyIsImxhYmVsIiwiZGVmYXVsdE5hbWUiLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxNQUFRQyxJQUFSLFFBQVFBLElBQVI7QUFBQSxNQUFjQyxJQUFkLFFBQWNBLElBQWQ7QUFBQSxNQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsU0FBOEIsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FDL0RBLENBQUMsQ0FBQ0MsSUFBRixDQUFPSixJQUFJLENBQUNLLFFBQVosQ0FEK0QsRUFFL0RGLENBQUMsQ0FBQ0MsSUFBRixDQUFPTCxJQUFJLENBQUNNLFFBQVosQ0FGK0QsRUFHL0QsQ0FIK0QsRUFJL0RGLENBQUMsQ0FBQ0MsSUFBRixDQUFPRixJQUFJLENBQUNHLFFBQVos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V0FBL0IsaUJBQWlEUCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNPLFdBQS9EO0FBRUEsYUFBTztBQUFDakYsUUFBQUEsS0FBSyxFQUFFLENBQUNBLEtBQUQ7QUFBUixPQUFQO0FBQ0Q7OztFQTVEbUNrRixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcclxuaW1wb3J0IHtCcnVzaGluZ0V4dGVuc2lvbn0gZnJvbSAnQGRlY2suZ2wvZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7QXJjTGF5ZXIgYXMgRGVja0FyY0xheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xyXG5cclxuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQgQXJjTGF5ZXJJY29uIGZyb20gJy4vYXJjLWxheWVyLWljb24nO1xyXG5pbXBvcnQge0RFRkFVTFRfTEFZRVJfQ09MT1J9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcmNQb3NBY2Nlc3NvciA9ICh7bGF0MCwgbG5nMCwgbGF0MSwgbG5nMX0pID0+IGQgPT4gW1xyXG4gIGQuZGF0YVtsbmcwLmZpZWxkSWR4XSxcclxuICBkLmRhdGFbbGF0MC5maWVsZElkeF0sXHJcbiAgMCxcclxuICBkLmRhdGFbbG5nMS5maWVsZElkeF0sXHJcbiAgZC5kYXRhW2xhdDEuZmllbGRJZHhdLFxyXG4gIDBcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmNSZXF1aXJlZENvbHVtbnMgPSBbJ2xhdDAnLCAnbG5nMCcsICdsYXQxJywgJ2xuZzEnXTtcclxuZXhwb3J0IGNvbnN0IGFyY0NvbHVtbkxhYmVscyA9IHtcclxuICBsYXQwOiAnc291cmNlIGxhdCcsXHJcbiAgbG5nMDogJ3NvdXJjZSBsbmcnLFxyXG4gIGxhdDE6ICd0YXJnZXQgbGF0JyxcclxuICBsbmcxOiAndGFyZ2V0IGxuZydcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmNWaXNDb25maWdzID0ge1xyXG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcclxuICB0aGlja25lc3M6ICd0aGlja25lc3MnLFxyXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcclxuICBzaXplUmFuZ2U6ICdzdHJva2VXaWR0aFJhbmdlJyxcclxuICB0YXJnZXRDb2xvcjogJ3RhcmdldENvbG9yJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjTGF5ZXIgZXh0ZW5kcyBMYXllciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGFyY1Zpc0NvbmZpZ3MpO1xyXG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gYXJjUG9zQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnYXJjJztcclxuICB9XHJcblxyXG4gIGdldCBpc0FnZ3JlZ2F0ZWQoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIEFyY0xheWVySWNvbjtcclxuICB9XHJcblxyXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcclxuICAgIHJldHVybiBhcmNSZXF1aXJlZENvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sdW1uTGFiZWxzKCkge1xyXG4gICAgcmV0dXJuIGFyY0NvbHVtbkxhYmVscztcclxuICB9XHJcbiAgZ2V0IGNvbHVtblBhaXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExpbmtDb2x1bW5QYWlycztcclxuICB9XHJcblxyXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSxcclxuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZSdcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkUGFpcnMgPSBbXX0pIHtcclxuICAgIGlmIChmaWVsZFBhaXJzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgcmV0dXJuIHtwcm9wczogW119O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICBjb2xvcjogaGV4VG9SZ2IoREVGQVVMVF9MQVlFUl9DT0xPUi50cmlwQXJjKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25uZWN0IHRoZSBmaXJzdCB0d28gcG9pbnQgbGF5ZXIgd2l0aCBhcmNcclxuICAgIHByb3BzLmNvbHVtbnMgPSB7XHJcbiAgICAgIGxhdDA6IGZpZWxkUGFpcnNbMF0ucGFpci5sYXQsXHJcbiAgICAgIGxuZzA6IGZpZWxkUGFpcnNbMF0ucGFpci5sbmcsXHJcbiAgICAgIGxhdDE6IGZpZWxkUGFpcnNbMV0ucGFpci5sYXQsXHJcbiAgICAgIGxuZzE6IGZpZWxkUGFpcnNbMV0ucGFpci5sbmdcclxuICAgIH07XHJcbiAgICBwcm9wcy5sYWJlbCA9IGAke2ZpZWxkUGFpcnNbMF0uZGVmYXVsdE5hbWV9IC0+ICR7ZmllbGRQYWlyc1sxXS5kZWZhdWx0TmFtZX0gYXJjYDtcclxuXHJcbiAgICByZXR1cm4ge3Byb3BzOiBbcHJvcHNdfTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZEluZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vIGRhdGEgPSBmaWx0ZXJlZEluZGV4LnJlZHVjZSgoYWNjdSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xyXG4gICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcclxuXHJcbiAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxyXG4gICAgICAvLyBkZWNrLmdsIGNhbid0IGhhbmRsZSBwb3NpdGlvbiA9IG51bGxcclxuICAgICAgaWYgKHBvcy5ldmVyeShOdW1iZXIuaXNGaW5pdGUpKSB7XHJcbiAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgc291cmNlUG9zaXRpb246IFtwb3NbMF0sIHBvc1sxXSwgcG9zWzJdXSxcclxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiBbcG9zWzNdLCBwb3NbNF0sIHBvc1s1XV0sXHJcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBmaXggY29tcGxleGl0eVxyXG4gIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cclxuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSwgb3B0ID0ge30pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sb3JTY2FsZSxcclxuICAgICAgY29sb3JEb21haW4sXHJcbiAgICAgIGNvbG9yRmllbGQsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBzaXplRmllbGQsXHJcbiAgICAgIHNpemVTY2FsZSxcclxuICAgICAgc2l6ZURvbWFpbixcclxuICAgICAgdmlzQ29uZmlnOiB7c2l6ZVJhbmdlLCBjb2xvclJhbmdlLCB0YXJnZXRDb2xvcn1cclxuICAgIH0gPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICBjb25zdCB7Z3B1RmlsdGVyfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XHJcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XHJcblxyXG4gICAgLy8gYXJjIGNvbG9yXHJcbiAgICBjb25zdCBjU2NhbGUgPVxyXG4gICAgICBjb2xvckZpZWxkICYmXHJcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGNvbG9yU2NhbGUsIGNvbG9yRG9tYWluLCBjb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpKTtcclxuXHJcbiAgICAvLyBhcmMgdGhpY2tuZXNzXHJcbiAgICBjb25zdCBzU2NhbGUgPSBzaXplRmllbGQgJiYgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoc2l6ZVNjYWxlLCBzaXplRG9tYWluLCBzaXplUmFuZ2UpO1xyXG5cclxuICAgIGNvbnN0IGdldFN0cm9rZVdpZHRoID0gc1NjYWxlXHJcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoc1NjYWxlLCBkLmRhdGEsIHNpemVGaWVsZCwgMClcclxuICAgICAgOiAxO1xyXG5cclxuICAgIGNvbnN0IGdldFNvdXJjZUNvbG9yID0gY1NjYWxlXHJcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY1NjYWxlLCBkLmRhdGEsIGNvbG9yRmllbGQpXHJcbiAgICAgIDogY29sb3I7XHJcblxyXG4gICAgY29uc3QgZ2V0VGFyZ2V0Q29sb3IgPSBjU2NhbGVcclxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjU2NhbGUsIGQuZGF0YSwgY29sb3JGaWVsZClcclxuICAgICAgOiB0YXJnZXRDb2xvciB8fCBjb2xvcjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBnZXRTb3VyY2VDb2xvcixcclxuICAgICAgZ2V0VGFyZ2V0Q29sb3IsXHJcbiAgICAgIGdldFdpZHRoOiBnZXRTdHJva2VXaWR0aCxcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKClcclxuICAgIH07XHJcbiAgfVxyXG4gIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xyXG5cclxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSkge1xyXG4gICAgLy8gZ2V0IGJvdW5kcyBmcm9tIGFyY3NcclxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcblxyXG4gICAgY29uc3Qgc0JvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4ge1xyXG4gICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YTogZH0pO1xyXG4gICAgICByZXR1cm4gW3Bvc1swXSwgcG9zWzFdXTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdEJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4ge1xyXG4gICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YTogZH0pO1xyXG4gICAgICByZXR1cm4gW3Bvc1szXSwgcG9zWzRdXTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyA9XHJcbiAgICAgIHRCb3VuZHMgJiYgc0JvdW5kc1xyXG4gICAgICAgID8gW1xyXG4gICAgICAgICAgICBNYXRoLm1pbihzQm91bmRzWzBdLCB0Qm91bmRzWzBdKSxcclxuICAgICAgICAgICAgTWF0aC5taW4oc0JvdW5kc1sxXSwgdEJvdW5kc1sxXSksXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHNCb3VuZHNbMl0sIHRCb3VuZHNbMl0pLFxyXG4gICAgICAgICAgICBNYXRoLm1heChzQm91bmRzWzNdLCB0Qm91bmRzWzNdKVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIDogc0JvdW5kcyB8fCB0Qm91bmRzO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMYXllcihvcHRzKSB7XHJcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBpbnRlcmFjdGlvbkNvbmZpZ30gPSBvcHRzO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yVXBkYXRlVHJpZ2dlcnMgPSB7XHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcclxuICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgY29sb3JSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLmNvbG9yUmFuZ2UsXHJcbiAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLmNvbG9yU2NhbGUsXHJcbiAgICAgIHRhcmdldENvbG9yOiB0aGlzLmNvbmZpZy52aXNDb25maWcudGFyZ2V0Q29sb3JcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXcgRGVja0FyY0xheWVyKHtcclxuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcclxuICAgICAgICAuLi50aGlzLmdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcsICdzb3VyY2VfdGFyZ2V0JyksXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICB3aWR0aFNjYWxlOiB0aGlzLmNvbmZpZy52aXNDb25maWcudGhpY2tuZXNzLFxyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzOiB7XHJcbiAgICAgICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMsXHJcbiAgICAgICAgICBnZXRXaWR0aDoge1xyXG4gICAgICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLnNpemVGaWVsZCxcclxuICAgICAgICAgICAgc2l6ZVNjYWxlOiB0aGlzLmNvbmZpZy5zaXplU2NhbGUsXHJcbiAgICAgICAgICAgIHNpemVSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnNpemVSYW5nZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGdldFNvdXJjZUNvbG9yOiBjb2xvclVwZGF0ZVRyaWdnZXJzLFxyXG4gICAgICAgICAgZ2V0VGFyZ2V0Q29sb3I6IGNvbG9yVXBkYXRlVHJpZ2dlcnNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4dGVuc2lvbnM6IFsuLi5kZWZhdWx0TGF5ZXJQcm9wcy5leHRlbnNpb25zLCBuZXcgQnJ1c2hpbmdFeHRlbnNpb24oKV1cclxuICAgICAgfSksXHJcbiAgICAgIC8vIGhvdmVyIGxheWVyXHJcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIG5ldyBEZWNrQXJjTGF5ZXIoe1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxyXG4gICAgICAgICAgICAgIGRhdGE6IFtvYmplY3RIb3ZlcmVkLm9iamVjdF0sXHJcbiAgICAgICAgICAgICAgd2lkdGhTY2FsZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnRoaWNrbmVzcyxcclxuICAgICAgICAgICAgICBnZXRTb3VyY2VDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXHJcbiAgICAgICAgICAgICAgZ2V0VGFyZ2V0Q29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxyXG4gICAgICAgICAgICAgIGdldFdpZHRoOiBkYXRhLmdldFdpZHRoXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgOiBbXSlcclxuICAgIF07XHJcbiAgfVxyXG59XHJcbiJdfQ==