"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.featureResolver = exports.featureAccessor = exports.geoJsonRequiredColumns = exports.tripVisConfigs = exports.defaultWidth = exports.defaultThickness = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _geoLayers = require("@deck.gl/geo-layers");

var _defaultSettings = require("../../constants/default-settings");

var _tripLayerIcon = _interopRequireDefault(require("./trip-layer-icon"));

var _geojsonUtils = require("../geojson-layer/geojson-utils");

var _tripUtils = require("./trip-utils");

var _colorUtils = require("../../utils/color-utils");

var _tripInfoModal = _interopRequireDefault(require("./trip-info-modal"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var zoomFactorValue = 8;
var defaultThickness = 0.5;
exports.defaultThickness = defaultThickness;
var defaultWidth = 1;
exports.defaultWidth = defaultWidth;
var tripVisConfigs = {
  opacity: 'opacity',
  thickness: {
    type: 'number',
    defaultValue: defaultThickness,
    label: 'Stroke Width',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: 'stroke',
    property: 'thickness'
  },
  colorRange: 'colorRange',
  trailLength: 'trailLength',
  sizeRange: 'strokeWidthRange'
};
exports.tripVisConfigs = tripVisConfigs;
var geoJsonRequiredColumns = ['geojson'];
exports.geoJsonRequiredColumns = geoJsonRequiredColumns;

var featureAccessor = function featureAccessor(_ref) {
  var geojson = _ref.geojson;
  return function (d) {
    return d[geojson.fieldIdx];
  };
};

exports.featureAccessor = featureAccessor;

var featureResolver = function featureResolver(_ref2) {
  var geojson = _ref2.geojson;
  return geojson.fieldIdx;
};

exports.featureResolver = featureResolver;

var TripLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(TripLayer, _Layer);

  var _super = _createSuper(TripLayer);

  function TripLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TripLayer);
    _this = _super.call(this, props);
    _this.dataToFeature = [];
    _this.dataToTimeStamp = [];

    _this.registerVisConfig(tripVisConfigs);

    _this.getFeature = (0, _lodash["default"])(featureAccessor, featureResolver);
    _this._layerInfoModal = (0, _tripInfoModal["default"])();
    return _this;
  }

  (0, _createClass2["default"])(TripLayer, [{
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getFeature(this.config.columns);
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig(props) {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(TripLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        animation: {
          enabled: true,
          domain: null
        }
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
    value: function calculateDataAttribute(_ref3, getPosition) {
      var _this2 = this;

      var allData = _ref3.allData,
          filteredIndex = _ref3.filteredIndex;
      return filteredIndex.map(function (i) {
        return _this2.dataToFeature[i];
      }).filter(function (d) {
        return d && d.geometry.type === 'LineString';
      });
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this3 = this;

      // to-do: parse segment from allData
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorField = _this$config.colorField,
          colorDomain = _this$config.colorDomain,
          color = _this$config.color,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          sizeField = _this$config.sizeField,
          visConfig = _this$config.visConfig;
      var colorRange = visConfig.colorRange,
          sizeRange = visConfig.sizeRange;
      var _datasets$this$config = datasets[this.config.dataId],
          allData = _datasets$this$config.allData,
          gpuFilter = _datasets$this$config.gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data; // color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // calculate stroke scale - if stroked = true

      var sScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange); // access feature properties from geojson sub layer

      var getDataForGpuFilter = function getDataForGpuFilter(f) {
        return allData[f.properties.index];
      };

      var getIndexForGpuFilter = function getIndexForGpuFilter(f) {
        return f.properties.index;
      };

      return {
        data: data,
        getFilterValue: gpuFilter.filterValueAccessor(getIndexForGpuFilter, getDataForGpuFilter),
        getPath: function getPath(d) {
          return d.geometry.coordinates;
        },
        getTimestamps: function getTimestamps(d) {
          return _this3.dataToTimeStamp[d.properties.index];
        },
        getColor: function getColor(d) {
          return cScale ? _this3.getEncodedChannelValue(cScale, allData[d.properties.index], colorField) : d.properties.fillColor || color;
        },
        getWidth: function getWidth(d) {
          return sScale ? _this3.getEncodedChannelValue(sScale, allData[d.properties.index], sizeField, 0) : d.properties.lineWidth || defaultWidth;
        }
      };
    }
  }, {
    key: "updateAnimationDomain",
    value: function updateAnimationDomain(domain) {
      this.updateLayerConfig({
        animation: _objectSpread({}, this.config.animation, {
          domain: domain
        })
      });
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getFeature = this.getPositionAccessor();

      if (getFeature === this.meta.getFeature) {
        // TODO: revisit this after gpu filtering
        return;
      }

      this.dataToFeature = (0, _geojsonUtils.getGeojsonDataMaps)(allData, getFeature);

      var _parseTripGeoJsonTime = (0, _tripUtils.parseTripGeoJsonTimestamp)(this.dataToFeature),
          dataToTimeStamp = _parseTripGeoJsonTime.dataToTimeStamp,
          animationDomain = _parseTripGeoJsonTime.animationDomain;

      this.dataToTimeStamp = dataToTimeStamp;
      this.updateAnimationDomain(animationDomain); // get bounds from features

      var bounds = (0, _geojsonUtils.getGeojsonBounds)(this.dataToFeature); // keep a record of what type of geometry the collection has

      var featureTypes = (0, _geojsonUtils.getGeojsonFeatureTypes)(this.dataToFeature);
      this.updateMeta({
        bounds: bounds,
        featureTypes: featureTypes,
        getFeature: getFeature
      });
    }
  }, {
    key: "setInitialLayerConfig",
    value: function setInitialLayerConfig(allData) {
      this.updateLayerMeta(allData);
      return this;
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          mapState = opts.mapState,
          animationConfig = opts.animationConfig;
      var visConfig = this.config.visConfig;
      var zoomFactor = this.getZoomFactor(mapState);
      var updateTriggers = {
        getColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: this.config.colorScale
        },
        getWidth: {
          sizeField: this.config.sizeField,
          sizeRange: visConfig.sizeRange
        },
        getTimestamps: {
          columns: this.config.columns,
          domain0: animationConfig.domain[0]
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      return [new _geoLayers.TripsLayer(_objectSpread({}, defaultLayerProps, {}, data, {
        getTimestamps: function getTimestamps(d) {
          return data.getTimestamps(d).map(function (ts) {
            return ts - animationConfig.domain[0];
          });
        },
        widthScale: this.config.visConfig.thickness * zoomFactor * zoomFactorValue,
        rounded: true,
        wrapLongitude: false,
        parameters: {
          depthTest: mapState.dragRotate,
          depthMask: false
        },
        trailLength: visConfig.trailLength,
        currentTime: animationConfig.currentTime - animationConfig.domain[0],
        updateTriggers: updateTriggers
      }))];
    }
  }, {
    key: "type",
    get: function get() {
      return 'trip';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Trip';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _tripLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return geoJsonRequiredColumns;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(TripLayer.prototype), "visualChannels", this), {
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(TripLayer.prototype), "visualChannels", this).size, {
          property: 'stroke',
          condition: function condition(config) {
            return config.visConfig.stroked;
          }
        })
      });
    }
  }, {
    key: "animationDomain",
    get: function get() {
      return this.config.animation.domain;
    }
  }, {
    key: "layerInfoModal",
    get: function get() {
      return {
        id: 'iconInfo',
        template: this._layerInfoModal,
        modalProps: {
          title: 'How to enable trip animation'
        }
      };
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4, foundLayers) {
      var _this4 = this;

      var label = _ref4.label,
          _ref4$fields = _ref4.fields,
          fields = _ref4$fields === void 0 ? [] : _ref4$fields,
          _ref4$allData = _ref4.allData,
          allData = _ref4$allData === void 0 ? [] : _ref4$allData,
          id = _ref4.id;
      var geojsonColumns = fields.filter(function (f) {
        return f.type === 'geojson';
      }).map(function (f) {
        return f.name;
      });
      var defaultColumns = {
        geojson: (0, _lodash2["default"])([].concat((0, _toConsumableArray2["default"])(_defaultSettings.GEOJSON_FIELDS.geojson), (0, _toConsumableArray2["default"])(geojsonColumns)))
      };
      var geoJsonColumns = this.findDefaultColumnField(defaultColumns, fields);
      var tripColumns = (geoJsonColumns || []).filter(function (col) {
        return (0, _tripUtils.isTripGeoJsonField)(allData, fields[col.geojson.fieldIdx]);
      });

      if (!tripColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: tripColumns.map(function (columns) {
          return {
            label: typeof label === 'string' && label.replace(/\.[^/.]+$/, '') || _this4.type,
            columns: columns,
            isVisible: true
          };
        }),
        // if a geojson layer is created from this column, delete it
        foundLayers: foundLayers.filter(function (prop) {
          return prop.type !== 'geojson' || prop.dataId !== id || !tripColumns.find(function (c) {
            return prop.columns.geojson.name === c.geojson.name;
          });
        })
      };
    }
  }]);
  return TripLayer;
}(_baseLayer["default"]);

exports["default"] = TripLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvdHJpcC1sYXllci90cmlwLWxheWVyLmpzIl0sIm5hbWVzIjpbInpvb21GYWN0b3JWYWx1ZSIsImRlZmF1bHRUaGlja25lc3MiLCJkZWZhdWx0V2lkdGgiLCJ0cmlwVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJ0aGlja25lc3MiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwibGFiZWwiLCJpc1JhbmdlZCIsInJhbmdlIiwic3RlcCIsImdyb3VwIiwicHJvcGVydHkiLCJjb2xvclJhbmdlIiwidHJhaWxMZW5ndGgiLCJzaXplUmFuZ2UiLCJnZW9Kc29uUmVxdWlyZWRDb2x1bW5zIiwiZmVhdHVyZUFjY2Vzc29yIiwiZ2VvanNvbiIsImQiLCJmaWVsZElkeCIsImZlYXR1cmVSZXNvbHZlciIsIlRyaXBMYXllciIsInByb3BzIiwiZGF0YVRvRmVhdHVyZSIsImRhdGFUb1RpbWVTdGFtcCIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0RmVhdHVyZSIsIl9sYXllckluZm9Nb2RhbCIsImNvbmZpZyIsImNvbHVtbnMiLCJhbmltYXRpb24iLCJlbmFibGVkIiwiZG9tYWluIiwib2JqZWN0IiwiYWxsRGF0YSIsInByb3BlcnRpZXMiLCJpbmRleCIsImdldFBvc2l0aW9uIiwiZmlsdGVyZWRJbmRleCIsIm1hcCIsImkiLCJmaWx0ZXIiLCJnZW9tZXRyeSIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwiY29sb3JTY2FsZSIsImNvbG9yRmllbGQiLCJjb2xvckRvbWFpbiIsImNvbG9yIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInNpemVGaWVsZCIsInZpc0NvbmZpZyIsImRhdGFJZCIsImdwdUZpbHRlciIsInVwZGF0ZURhdGEiLCJkYXRhIiwiY1NjYWxlIiwiZ2V0VmlzQ2hhbm5lbFNjYWxlIiwiY29sb3JzIiwiaGV4VG9SZ2IiLCJzU2NhbGUiLCJnZXREYXRhRm9yR3B1RmlsdGVyIiwiZiIsImdldEluZGV4Rm9yR3B1RmlsdGVyIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiZ2V0UGF0aCIsImNvb3JkaW5hdGVzIiwiZ2V0VGltZXN0YW1wcyIsImdldENvbG9yIiwiZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZSIsImZpbGxDb2xvciIsImdldFdpZHRoIiwibGluZVdpZHRoIiwidXBkYXRlTGF5ZXJDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwibWV0YSIsImFuaW1hdGlvbkRvbWFpbiIsInVwZGF0ZUFuaW1hdGlvbkRvbWFpbiIsImJvdW5kcyIsImZlYXR1cmVUeXBlcyIsInVwZGF0ZU1ldGEiLCJ1cGRhdGVMYXllck1ldGEiLCJvcHRzIiwibWFwU3RhdGUiLCJhbmltYXRpb25Db25maWciLCJ6b29tRmFjdG9yIiwiZ2V0Wm9vbUZhY3RvciIsInVwZGF0ZVRyaWdnZXJzIiwiZG9tYWluMCIsImZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsIkRlY2tHTFRyaXBzTGF5ZXIiLCJ0cyIsIndpZHRoU2NhbGUiLCJyb3VuZGVkIiwid3JhcExvbmdpdHVkZSIsInBhcmFtZXRlcnMiLCJkZXB0aFRlc3QiLCJkcmFnUm90YXRlIiwiZGVwdGhNYXNrIiwiY3VycmVudFRpbWUiLCJUcmlwTGF5ZXJJY29uIiwic2l6ZSIsImNvbmRpdGlvbiIsInN0cm9rZWQiLCJpZCIsInRlbXBsYXRlIiwibW9kYWxQcm9wcyIsInRpdGxlIiwiZm91bmRMYXllcnMiLCJmaWVsZHMiLCJnZW9qc29uQ29sdW1ucyIsIm5hbWUiLCJkZWZhdWx0Q29sdW1ucyIsIkdFT0pTT05fRklFTERTIiwiZ2VvSnNvbkNvbHVtbnMiLCJmaW5kRGVmYXVsdENvbHVtbkZpZWxkIiwidHJpcENvbHVtbnMiLCJjb2wiLCJsZW5ndGgiLCJyZXBsYWNlIiwiaXNWaXNpYmxlIiwicHJvcCIsImZpbmQiLCJjIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFQO0FBQ0Q7O0FBRUQsYUFBTztBQUNMQSxRQUFBQSxLQUFLLEVBQUVrRyxXQUFXLENBQUNqRixHQUFaLENBQWdCLFVBQUFWLE9BQU87QUFBQSxpQkFBSztBQUNqQ3ZCLFlBQUFBLEtBQUssRUFBRyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCQSxLQUFLLENBQUNxSCxPQUFOLENBQWMsV0FBZCxFQUEyQixFQUEzQixDQUE5QixJQUFpRSxNQUFJLENBQUN2SCxJQUQ1QztBQUVqQ3lCLFlBQUFBLE9BQU8sRUFBUEEsT0FGaUM7QUFHakMrRixZQUFBQSxTQUFTLEVBQUU7QUFIc0IsV0FBTDtBQUFBLFNBQXZCLENBREY7QUFPTDtBQUNBWixRQUFBQSxXQUFXLEVBQUVBLFdBQVcsQ0FBQ3ZFLE1BQVosQ0FDWCxVQUFBb0YsSUFBSTtBQUFBLGlCQUNGQSxJQUFJLENBQUN6SCxJQUFMLEtBQWMsU0FBZCxJQUNBeUgsSUFBSSxDQUFDeEUsTUFBTCxLQUFnQnVELEVBRGhCLElBRUEsQ0FBQ1ksV0FBVyxDQUFDTSxJQUFaLENBQWlCLFVBQUFDLENBQUM7QUFBQSxtQkFBSUYsSUFBSSxDQUFDaEcsT0FBTCxDQUFhWixPQUFiLENBQXFCa0csSUFBckIsS0FBOEJZLENBQUMsQ0FBQzlHLE9BQUYsQ0FBVWtHLElBQTVDO0FBQUEsV0FBbEIsQ0FIQztBQUFBLFNBRE87QUFSUixPQUFQO0FBZUQ7OztFQXpGb0NhLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xyXG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XHJcbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcclxuaW1wb3J0IHtUcmlwc0xheWVyIGFzIERlY2tHTFRyaXBzTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2dlby1sYXllcnMnO1xyXG5cclxuaW1wb3J0IHtHRU9KU09OX0ZJRUxEU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQgVHJpcExheWVySWNvbiBmcm9tICcuL3RyaXAtbGF5ZXItaWNvbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEdlb2pzb25EYXRhTWFwcyxcclxuICBnZXRHZW9qc29uQm91bmRzLFxyXG4gIGdldEdlb2pzb25GZWF0dXJlVHlwZXNcclxufSBmcm9tICdsYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLXV0aWxzJztcclxuXHJcbmltcG9ydCB7aXNUcmlwR2VvSnNvbkZpZWxkLCBwYXJzZVRyaXBHZW9Kc29uVGltZXN0YW1wfSBmcm9tICcuL3RyaXAtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQgVHJpcEluZm9Nb2RhbEZhY3RvcnkgZnJvbSAnLi90cmlwLWluZm8tbW9kYWwnO1xyXG5cclxuY29uc3Qgem9vbUZhY3RvclZhbHVlID0gODtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGhpY2tuZXNzID0gMC41O1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdFdpZHRoID0gMTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmlwVmlzQ29uZmlncyA9IHtcclxuICBvcGFjaXR5OiAnb3BhY2l0eScsXHJcbiAgdGhpY2tuZXNzOiB7XHJcbiAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFRoaWNrbmVzcyxcclxuICAgIGxhYmVsOiAnU3Ryb2tlIFdpZHRoJyxcclxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcclxuICAgIHJhbmdlOiBbMCwgMTAwXSxcclxuICAgIHN0ZXA6IDAuMSxcclxuICAgIGdyb3VwOiAnc3Ryb2tlJyxcclxuICAgIHByb3BlcnR5OiAndGhpY2tuZXNzJ1xyXG4gIH0sXHJcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxyXG4gIHRyYWlsTGVuZ3RoOiAndHJhaWxMZW5ndGgnLFxyXG4gIHNpemVSYW5nZTogJ3N0cm9rZVdpZHRoUmFuZ2UnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VvSnNvblJlcXVpcmVkQ29sdW1ucyA9IFsnZ2VvanNvbiddO1xyXG5leHBvcnQgY29uc3QgZmVhdHVyZUFjY2Vzc29yID0gKHtnZW9qc29ufSkgPT4gZCA9PiBkW2dlb2pzb24uZmllbGRJZHhdO1xyXG5leHBvcnQgY29uc3QgZmVhdHVyZVJlc29sdmVyID0gKHtnZW9qc29ufSkgPT4gZ2VvanNvbi5maWVsZElkeDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaXBMYXllciBleHRlbmRzIExheWVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhVG9UaW1lU3RhbXAgPSBbXTtcclxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcodHJpcFZpc0NvbmZpZ3MpO1xyXG4gICAgdGhpcy5nZXRGZWF0dXJlID0gbWVtb2l6ZShmZWF0dXJlQWNjZXNzb3IsIGZlYXR1cmVSZXNvbHZlcik7XHJcbiAgICB0aGlzLl9sYXllckluZm9Nb2RhbCA9IFRyaXBJbmZvTW9kYWxGYWN0b3J5KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAndHJpcCc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiAnVHJpcCc7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIFRyaXBMYXllckljb247XHJcbiAgfVxyXG5cclxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gZ2VvSnNvblJlcXVpcmVkQ29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxyXG5cclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLnNpemUsXHJcbiAgICAgICAgcHJvcGVydHk6ICdzdHJva2UnLFxyXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFuaW1hdGlvbkRvbWFpbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5hbmltYXRpb24uZG9tYWluO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheWVySW5mb01vZGFsKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6ICdpY29uSW5mbycsXHJcbiAgICAgIHRlbXBsYXRlOiB0aGlzLl9sYXllckluZm9Nb2RhbCxcclxuICAgICAgbW9kYWxQcm9wczoge1xyXG4gICAgICAgIHRpdGxlOiAnSG93IHRvIGVuYWJsZSB0cmlwIGFuaW1hdGlvbidcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uQWNjZXNzb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRGZWF0dXJlKHRoaXMuY29uZmlnLmNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyh7bGFiZWwsIGZpZWxkcyA9IFtdLCBhbGxEYXRhID0gW10sIGlkfSwgZm91bmRMYXllcnMpIHtcclxuICAgIGNvbnN0IGdlb2pzb25Db2x1bW5zID0gZmllbGRzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2dlb2pzb24nKS5tYXAoZiA9PiBmLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRDb2x1bW5zID0ge1xyXG4gICAgICBnZW9qc29uOiB1bmlxKFsuLi5HRU9KU09OX0ZJRUxEUy5nZW9qc29uLCAuLi5nZW9qc29uQ29sdW1uc10pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdlb0pzb25Db2x1bW5zID0gdGhpcy5maW5kRGVmYXVsdENvbHVtbkZpZWxkKGRlZmF1bHRDb2x1bW5zLCBmaWVsZHMpO1xyXG5cclxuICAgIGNvbnN0IHRyaXBDb2x1bW5zID0gKGdlb0pzb25Db2x1bW5zIHx8IFtdKS5maWx0ZXIoY29sID0+XHJcbiAgICAgIGlzVHJpcEdlb0pzb25GaWVsZChhbGxEYXRhLCBmaWVsZHNbY29sLmdlb2pzb24uZmllbGRJZHhdKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXRyaXBDb2x1bW5zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHRyaXBDb2x1bW5zLm1hcChjb2x1bW5zID0+ICh7XHJcbiAgICAgICAgbGFiZWw6ICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIGxhYmVsLnJlcGxhY2UoL1xcLlteLy5dKyQvLCAnJykpIHx8IHRoaXMudHlwZSxcclxuICAgICAgICBjb2x1bW5zLFxyXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9KSksXHJcblxyXG4gICAgICAvLyBpZiBhIGdlb2pzb24gbGF5ZXIgaXMgY3JlYXRlZCBmcm9tIHRoaXMgY29sdW1uLCBkZWxldGUgaXRcclxuICAgICAgZm91bmRMYXllcnM6IGZvdW5kTGF5ZXJzLmZpbHRlcihcclxuICAgICAgICBwcm9wID0+XHJcbiAgICAgICAgICBwcm9wLnR5cGUgIT09ICdnZW9qc29uJyB8fFxyXG4gICAgICAgICAgcHJvcC5kYXRhSWQgIT09IGlkIHx8XHJcbiAgICAgICAgICAhdHJpcENvbHVtbnMuZmluZChjID0+IHByb3AuY29sdW1ucy5nZW9qc29uLm5hbWUgPT09IGMuZ2VvanNvbi5uYW1lKVxyXG4gICAgICApXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxyXG4gICAgICBhbmltYXRpb246IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGRvbWFpbjogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SG92ZXJEYXRhKG9iamVjdCwgYWxsRGF0YSkge1xyXG4gICAgLy8gaW5kZXggb2YgYWxsRGF0YSBpcyBzYXZlZCB0byBmZWF0dXJlLnByb3BlcnRpZXNcclxuICAgIHJldHVybiBhbGxEYXRhW29iamVjdC5wcm9wZXJ0aWVzLmluZGV4XTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkSW5kZXhcclxuICAgICAgLm1hcChpID0+IHRoaXMuZGF0YVRvRmVhdHVyZVtpXSlcclxuICAgICAgLmZpbHRlcihkID0+IGQgJiYgZC5nZW9tZXRyeS50eXBlID09PSAnTGluZVN0cmluZycpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpIHtcclxuICAgIC8vIHRvLWRvOiBwYXJzZSBzZWdtZW50IGZyb20gYWxsRGF0YVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sb3JTY2FsZSxcclxuICAgICAgY29sb3JGaWVsZCxcclxuICAgICAgY29sb3JEb21haW4sXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBzaXplU2NhbGUsXHJcbiAgICAgIHNpemVEb21haW4sXHJcbiAgICAgIHNpemVGaWVsZCxcclxuICAgICAgdmlzQ29uZmlnXHJcbiAgICB9ID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgY29uc3Qge2NvbG9yUmFuZ2UsIHNpemVSYW5nZX0gPSB2aXNDb25maWc7XHJcbiAgICBjb25zdCB7YWxsRGF0YSwgZ3B1RmlsdGVyfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XHJcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XHJcblxyXG4gICAgLy8gY29sb3JcclxuICAgIGNvbnN0IGNTY2FsZSA9XHJcbiAgICAgIGNvbG9yRmllbGQgJiZcclxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoY29sb3JTY2FsZSwgY29sb3JEb21haW4sIGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYikpO1xyXG4gICAgLy8gY2FsY3VsYXRlIHN0cm9rZSBzY2FsZSAtIGlmIHN0cm9rZWQgPSB0cnVlXHJcbiAgICBjb25zdCBzU2NhbGUgPSBzaXplRmllbGQgJiYgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoc2l6ZVNjYWxlLCBzaXplRG9tYWluLCBzaXplUmFuZ2UpO1xyXG4gICAgLy8gYWNjZXNzIGZlYXR1cmUgcHJvcGVydGllcyBmcm9tIGdlb2pzb24gc3ViIGxheWVyXHJcbiAgICBjb25zdCBnZXREYXRhRm9yR3B1RmlsdGVyID0gZiA9PiBhbGxEYXRhW2YucHJvcGVydGllcy5pbmRleF07XHJcbiAgICBjb25zdCBnZXRJbmRleEZvckdwdUZpbHRlciA9IGYgPT4gZi5wcm9wZXJ0aWVzLmluZGV4O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcihnZXRJbmRleEZvckdwdUZpbHRlciwgZ2V0RGF0YUZvckdwdUZpbHRlciksXHJcbiAgICAgIGdldFBhdGg6IGQgPT4gZC5nZW9tZXRyeS5jb29yZGluYXRlcyxcclxuICAgICAgZ2V0VGltZXN0YW1wczogZCA9PiB0aGlzLmRhdGFUb1RpbWVTdGFtcFtkLnByb3BlcnRpZXMuaW5kZXhdLFxyXG4gICAgICBnZXRDb2xvcjogZCA9PlxyXG4gICAgICAgIGNTY2FsZVxyXG4gICAgICAgICAgPyB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY1NjYWxlLCBhbGxEYXRhW2QucHJvcGVydGllcy5pbmRleF0sIGNvbG9yRmllbGQpXHJcbiAgICAgICAgICA6IGQucHJvcGVydGllcy5maWxsQ29sb3IgfHwgY29sb3IsXHJcbiAgICAgIGdldFdpZHRoOiBkID0+XHJcbiAgICAgICAgc1NjYWxlXHJcbiAgICAgICAgICA/IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShzU2NhbGUsIGFsbERhdGFbZC5wcm9wZXJ0aWVzLmluZGV4XSwgc2l6ZUZpZWxkLCAwKVxyXG4gICAgICAgICAgOiBkLnByb3BlcnRpZXMubGluZVdpZHRoIHx8IGRlZmF1bHRXaWR0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihkb21haW4pIHtcclxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1xyXG4gICAgICBhbmltYXRpb246IHtcclxuICAgICAgICAuLi50aGlzLmNvbmZpZy5hbmltYXRpb24sXHJcbiAgICAgICAgZG9tYWluXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpIHtcclxuICAgIGNvbnN0IGdldEZlYXR1cmUgPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcclxuICAgIGlmIChnZXRGZWF0dXJlID09PSB0aGlzLm1ldGEuZ2V0RmVhdHVyZSkge1xyXG4gICAgICAvLyBUT0RPOiByZXZpc2l0IHRoaXMgYWZ0ZXIgZ3B1IGZpbHRlcmluZ1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRhVG9GZWF0dXJlID0gZ2V0R2VvanNvbkRhdGFNYXBzKGFsbERhdGEsIGdldEZlYXR1cmUpO1xyXG5cclxuICAgIGNvbnN0IHtkYXRhVG9UaW1lU3RhbXAsIGFuaW1hdGlvbkRvbWFpbn0gPSBwYXJzZVRyaXBHZW9Kc29uVGltZXN0YW1wKHRoaXMuZGF0YVRvRmVhdHVyZSk7XHJcblxyXG4gICAgdGhpcy5kYXRhVG9UaW1lU3RhbXAgPSBkYXRhVG9UaW1lU3RhbXA7XHJcbiAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvbkRvbWFpbihhbmltYXRpb25Eb21haW4pO1xyXG5cclxuICAgIC8vIGdldCBib3VuZHMgZnJvbSBmZWF0dXJlc1xyXG4gICAgY29uc3QgYm91bmRzID0gZ2V0R2VvanNvbkJvdW5kcyh0aGlzLmRhdGFUb0ZlYXR1cmUpO1xyXG5cclxuICAgIC8vIGtlZXAgYSByZWNvcmQgb2Ygd2hhdCB0eXBlIG9mIGdlb21ldHJ5IHRoZSBjb2xsZWN0aW9uIGhhc1xyXG4gICAgY29uc3QgZmVhdHVyZVR5cGVzID0gZ2V0R2VvanNvbkZlYXR1cmVUeXBlcyh0aGlzLmRhdGFUb0ZlYXR1cmUpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzLCBmZWF0dXJlVHlwZXMsIGdldEZlYXR1cmV9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxMYXllckNvbmZpZyhhbGxEYXRhKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUxheWVyTWV0YShhbGxEYXRhKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGF5ZXIob3B0cykge1xyXG4gICAgY29uc3Qge2RhdGEsIGdwdUZpbHRlciwgbWFwU3RhdGUsIGFuaW1hdGlvbkNvbmZpZ30gPSBvcHRzO1xyXG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcclxuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xyXG4gICAgICBnZXRDb2xvcjoge1xyXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcclxuICAgICAgICBjb2xvckZpZWxkOiB0aGlzLmNvbmZpZy5jb2xvckZpZWxkLFxyXG4gICAgICAgIGNvbG9yUmFuZ2U6IHZpc0NvbmZpZy5jb2xvclJhbmdlLFxyXG4gICAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLmNvbG9yU2NhbGVcclxuICAgICAgfSxcclxuICAgICAgZ2V0V2lkdGg6IHtcclxuICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLnNpemVGaWVsZCxcclxuICAgICAgICBzaXplUmFuZ2U6IHZpc0NvbmZpZy5zaXplUmFuZ2VcclxuICAgICAgfSxcclxuICAgICAgZ2V0VGltZXN0YW1wczoge1xyXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY29uZmlnLmNvbHVtbnMsXHJcbiAgICAgICAgZG9tYWluMDogYW5pbWF0aW9uQ29uZmlnLmRvbWFpblswXVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcclxuICAgIH07XHJcbiAgICBjb25zdCBkZWZhdWx0TGF5ZXJQcm9wcyA9IHRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBEZWNrR0xUcmlwc0xheWVyKHtcclxuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGdldFRpbWVzdGFtcHM6IGQgPT4gZGF0YS5nZXRUaW1lc3RhbXBzKGQpLm1hcCh0cyA9PiB0cyAtIGFuaW1hdGlvbkNvbmZpZy5kb21haW5bMF0pLFxyXG4gICAgICAgIHdpZHRoU2NhbGU6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy50aGlja25lc3MgKiB6b29tRmFjdG9yICogem9vbUZhY3RvclZhbHVlLFxyXG4gICAgICAgIHJvdW5kZWQ6IHRydWUsXHJcbiAgICAgICAgd3JhcExvbmdpdHVkZTogZmFsc2UsXHJcbiAgICAgICAgcGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgZGVwdGhUZXN0OiBtYXBTdGF0ZS5kcmFnUm90YXRlLFxyXG4gICAgICAgICAgZGVwdGhNYXNrOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhaWxMZW5ndGg6IHZpc0NvbmZpZy50cmFpbExlbmd0aCxcclxuICAgICAgICBjdXJyZW50VGltZTogYW5pbWF0aW9uQ29uZmlnLmN1cnJlbnRUaW1lIC0gYW5pbWF0aW9uQ29uZmlnLmRvbWFpblswXSxcclxuICAgICAgICB1cGRhdGVUcmlnZ2Vyc1xyXG4gICAgICB9KVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19