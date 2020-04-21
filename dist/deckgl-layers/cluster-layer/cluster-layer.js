"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clusterAggregation = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _aggregationLayers = require("@deck.gl/aggregation-layers");

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

var _cpuAggregator = _interopRequireWildcard(require("../layer-utils/cpu-aggregator"));

var _viewportMercatorProject = require("viewport-mercator-project");

var _d3Array = require("d3-array");

var _colorRanges = require("../../constants/color-ranges");

var _layerFactory = require("../../layers/layer-factory");

var _defaultSettings = require("../../constants/default-settings");

var _clusterUtils = _interopRequireWildcard(require("../layer-utils/cluster-utils"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultRadius = _layerFactory.LAYER_VIS_CONFIGS.clusterRadius.defaultValue;
var defaultRadiusRange = _layerFactory.LAYER_VIS_CONFIGS.clusterRadiusRange.defaultValue;

var defaultGetColorValue = function defaultGetColorValue(points) {
  return points.length;
};

var defaultGetRadiusValue = function defaultGetRadiusValue(cell) {
  return cell.filteredPoints ? cell.filteredPoints.length : cell.points.length;
};

function processGeoJSON(step, props, aggregation, _ref) {
  var viewport = _ref.viewport;
  var data = props.data,
      getPosition = props.getPosition,
      filterData = props.filterData;
  var geoJSON = (0, _clusterUtils.getGeoJSON)(data, getPosition, filterData);
  var clusterBuilder = new _clusterUtils["default"]();
  this.setState({
    geoJSON: geoJSON,
    clusterBuilder: clusterBuilder
  });
}

function getClusters(step, props, aggregation, _ref2) {
  var viewport = _ref2.viewport;
  var _this$state = this.state,
      geoJSON = _this$state.geoJSON,
      clusterBuilder = _this$state.clusterBuilder;
  var clusterRadius = props.clusterRadius,
      zoom = props.zoom,
      width = props.width,
      height = props.height;
  var longitude = viewport.longitude,
      latitude = viewport.latitude; // zoom needs to be an integer for the different map utils. Also helps with cache key.

  var bbox = _geoViewport["default"].bounds([longitude, latitude], zoom, [width, height]);

  var clusters = clusterBuilder.clustersAtZoom({
    bbox: bbox,
    clusterRadius: clusterRadius,
    geoJSON: geoJSON,
    zoom: zoom
  });
  this.setState({
    layerData: {
      data: clusters
    }
  });
}

function getSubLayerRadius(dimensionState, dimension, layerProps) {
  return function (cell) {
    var getRadiusValue = layerProps.getRadiusValue;
    var scaleFunc = dimensionState.scaleFunc;
    return scaleFunc(getRadiusValue(cell));
  };
}

var clusterAggregation = {
  key: 'position',
  updateSteps: [{
    key: 'geojson',
    triggers: {
      position: {
        prop: 'getPosition',
        updateTrigger: 'getPosition'
      },
      filterData: {
        prop: 'filterData',
        updateTrigger: 'filterData'
      }
    },
    updater: processGeoJSON
  }, {
    key: 'clustering',
    triggers: {
      clusterRadius: {
        prop: 'clusterRadius'
      },
      zoom: {
        prop: 'zoom'
      },
      width: {
        prop: 'width'
      },
      height: {
        prop: 'height'
      }
    },
    updater: getClusters
  }]
};
exports.clusterAggregation = clusterAggregation;

function getRadiusValueDomain(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var getRadiusValue = props.getRadiusValue;
  var layerData = this.state.layerData;
  var valueDomain = [0, (0, _d3Array.max)(layerData.data, getRadiusValue)];

  this._setDimensionState(key, {
    valueDomain: valueDomain
  });
}

var clusterLayerDimensions = [_cpuAggregator.defaultColorDimension, {
  key: 'radius',
  accessor: 'getRadius',
  nullValue: 0,
  updateSteps: [{
    key: 'getDomain',
    triggers: {
      value: {
        prop: 'getRadiusValue',
        updateTrigger: 'getRadiusValue'
      }
    },
    updater: getRadiusValueDomain
  }, {
    key: 'getScaleFunc',
    triggers: {
      domain: {
        prop: 'radiusDomain'
      },
      range: {
        prop: 'radiusRange'
      },
      scaleType: {
        prop: 'radiusScaleType'
      }
    },
    updater: _cpuAggregator.getDimensionScale
  }],
  getSubLayerAccessor: getSubLayerRadius,
  getPickingInfo: function getPickingInfo(dimensionState, cell, layerProps) {
    var radiusValue = layerProps.getRadiusValue(cell);
    return {
      radiusValue: radiusValue
    };
  }
}];
var defaultProps = {
  clusterRadius: defaultRadius,
  colorDomain: null,
  colorRange: _colorRanges.DefaultColorRange,
  colorScaleType: _defaultSettings.SCALE_TYPES.quantize,
  radiusScaleType: _defaultSettings.SCALE_TYPES.sqrt,
  radiusRange: defaultRadiusRange,
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  getColorValue: {
    type: 'accessor',
    value: defaultGetColorValue
  },
  getRadiusValue: {
    type: 'accessor',
    value: defaultGetRadiusValue
  }
};

var ClusterLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(ClusterLayer, _AggregationLayer);

  var _super = _createSuper(ClusterLayer);

  function ClusterLayer() {
    (0, _classCallCheck2["default"])(this, ClusterLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ClusterLayer, [{
    key: "initializeState",
    value: function initializeState() {
      var cpuAggregator = new _cpuAggregator["default"]({
        aggregation: clusterAggregation,
        dimensions: clusterLayerDimensions
      });
      this.state = {
        cpuAggregator: cpuAggregator,
        aggregatorState: cpuAggregator.state
      };
      var attributeManager = this.getAttributeManager();
      attributeManager.add({
        positions: {
          size: 3,
          accessor: 'getPosition'
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref3) {
      var oldProps = _ref3.oldProps,
          props = _ref3.props,
          changeFlags = _ref3.changeFlags;
      this.setState({
        // make a copy of the internal state of cpuAggregator for testing
        aggregatorState: this.state.cpuAggregator.updateState({
          oldProps: oldProps,
          props: props,
          changeFlags: changeFlags
        }, {
          viewport: this.context.viewport,
          attributes: this.getAttributes(),
          numInstances: this.getNumInstances(props)
        })
      });
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref4) {
      var info = _ref4.info;
      return this.state.cpuAggregator.getPickingInfo({
        info: info
      }, this.props);
    }
  }, {
    key: "_getSublayerUpdateTriggers",
    value: function _getSublayerUpdateTriggers() {
      return this.state.cpuAggregator.getUpdateTriggers(this.props);
    }
  }, {
    key: "_getSubLayerAccessors",
    value: function _getSubLayerAccessors() {
      return {
        getRadius: this.state.cpuAggregator.getAccessor('radius', this.props),
        getFillColor: this.state.cpuAggregator.getAccessor('fillColor', this.props)
      };
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      // for subclassing, override this method to return
      // customized sub layer props
      var _this$props = this.props,
          id = _this$props.id,
          radiusScale = _this$props.radiusScale;
      var cpuAggregator = this.state.cpuAggregator; // base layer props

      var _this$props2 = this.props,
          opacity = _this$props2.opacity,
          pickable = _this$props2.pickable,
          autoHighlight = _this$props2.autoHighlight,
          highlightColor = _this$props2.highlightColor;

      var updateTriggers = this._getSublayerUpdateTriggers();

      var accessors = this._getSubLayerAccessors();

      var distanceScale = (0, _viewportMercatorProject.getDistanceScales)(this.context.viewport);
      var metersPerPixel = distanceScale.metersPerPixel[0]; // return props to the sublayer constructor

      return new _layers.ScatterplotLayer(_objectSpread({
        id: "".concat(id, "-cluster"),
        data: cpuAggregator.state.layerData.data,
        radiusScale: metersPerPixel * radiusScale,
        opacity: opacity,
        pickable: pickable,
        autoHighlight: autoHighlight,
        highlightColor: highlightColor,
        updateTriggers: updateTriggers
      }, accessors));
    }
  }]);
  return ClusterLayer;
}(_aggregationLayers._AggregationLayer);

exports["default"] = ClusterLayer;
ClusterLayer.layerName = 'ClusterLayer';
ClusterLayer.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2NsdXN0ZXItbGF5ZXIvY2x1c3Rlci1sYXllci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmFkaXVzIiwiTEFZRVJfVklTX0NPTkZJR1MiLCJjbHVzdGVyUmFkaXVzIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1c1JhbmdlIiwiZGVmYXVsdEdldENvbG9yVmFsdWUiLCJwb2ludHMiLCJsZW5ndGgiLCJkZWZhdWx0R2V0UmFkaXVzVmFsdWUiLCJjZWxsIiwiZmlsdGVyZWRQb2ludHMiLCJwcm9jZXNzR2VvSlNPTiIsInN0ZXAiLCJwcm9wcyIsImFnZ3JlZ2F0aW9uIiwidmlld3BvcnQiLCJkYXRhIiwiZ2V0UG9zaXRpb24iLCJmaWx0ZXJEYXRhIiwiZ2VvSlNPTiIsImNsdXN0ZXJCdWlsZGVyIiwiQ2x1c3RlckJ1aWxkZXIiLCJzZXRTdGF0ZSIsImdldENsdXN0ZXJzIiwic3RhdGUiLCJ6b29tIiwid2lkdGgiLCJoZWlnaHQiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImJib3giLCJnZW9WaWV3cG9ydCIsImJvdW5kcyIsImNsdXN0ZXJzIiwiY2x1c3RlcnNBdFpvb20iLCJsYXllckRhdGEiLCJnZXRTdWJMYXllclJhZGl1cyIsImRpbWVuc2lvblN0YXRlIiwiZGltZW5zaW9uIiwibGF5ZXJQcm9wcyIsImdldFJhZGl1c1ZhbHVlIiwic2NhbGVGdW5jIiwiY2x1c3RlckFnZ3JlZ2F0aW9uIiwia2V5IiwidXBkYXRlU3RlcHMiLCJ0cmlnZ2VycyIsInBvc2l0aW9uIiwicHJvcCIsInVwZGF0ZVRyaWdnZXIiLCJ1cGRhdGVyIiwiZ2V0UmFkaXVzVmFsdWVEb21haW4iLCJkaW1lbnNpb25VcGRhdGVyIiwidmFsdWVEb21haW4iLCJfc2V0RGltZW5zaW9uU3RhdGUiLCJjbHVzdGVyTGF5ZXJEaW1lbnNpb25zIiwiZGVmYXVsdENvbG9yRGltZW5zaW9uIiwiYWNjZXNzb3IiLCJudWxsVmFsdWUiLCJ2YWx1ZSIsImRvbWFpbiIsInJhbmdlIiwic2NhbGVUeXBlIiwiZ2V0RGltZW5zaW9uU2NhbGUiLCJnZXRTdWJMYXllckFjY2Vzc29yIiwiZ2V0UGlja2luZ0luZm8iLCJyYWRpdXNWYWx1ZSIsImRlZmF1bHRQcm9wcyIsImNvbG9yRG9tYWluIiwiY29sb3JSYW5nZSIsIkRlZmF1bHRDb2xvclJhbmdlIiwiY29sb3JTY2FsZVR5cGUiLCJTQ0FMRV9UWVBFUyIsInF1YW50aXplIiwicmFkaXVzU2NhbGVUeXBlIiwic3FydCIsInJhZGl1c1JhbmdlIiwidHlwZSIsIngiLCJnZXRDb2xvclZhbHVlIiwiQ2x1c3RlckxheWVyIiwiY3B1QWdncmVnYXRvciIsIkNQVUFnZ3JlZ2F0b3IiLCJkaW1lbnNpb25zIiwiYWdncmVnYXRvclN0YXRlIiwiYXR0cmlidXRlTWFuYWdlciIsImdldEF0dHJpYnV0ZU1hbmFnZXIiLCJhZGQiLCJwb3NpdGlvbnMiLCJzaXplIiwib2xkUHJvcHMiLCJjaGFuZ2VGbGFncyIsInVwZGF0ZVN0YXRlIiwiY29udGV4dCIsImF0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGVzIiwibnVtSW5zdGFuY2VzIiwiZ2V0TnVtSW5zdGFuY2VzIiwiaW5mbyIsImdldFVwZGF0ZVRyaWdnZXJzIiwiZ2V0UmFkaXVzIiwiZ2V0QWNjZXNzb3IiLCJnZXRGaWxsQ29sb3IiLCJpZCIsInJhZGl1c1NjYWxlIiwib3BhY2l0eSIsInBpY2thYmxlIiwiYXV0b0hpZ2hsaWdodCIsImhpZ2hsaWdodENvbG9yIiwidXBkYXRlVHJpZ2dlcnMiLCJfZ2V0U3VibGF5ZXJVcGRhdGVUcmlnZ2VycyIsImFjY2Vzc29ycyIsIl9nZXRTdWJMYXllckFjY2Vzc29ycyIsImRpc3RhbmNlU2NhbGUiLCJtZXRlcnNQZXJQaXhlbCIsIlNjYXR0ZXJwbG90TGF5ZXIiLCJBZ2dyZWdhdGlvbkxheWVyIiwibGF5ZXJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFD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RUFBUkEsUUFMSztBQU1MQyxRQUFBQSxhQUFhLEVBQWJBLGFBTks7QUFPTEMsUUFBQUEsY0FBYyxFQUFkQSxjQVBLO0FBUUxDLFFBQUFBLGNBQWMsRUFBZEE7QUFSSyxTQVNGRSxTQVRFLEVBQVA7QUFXRDs7O0VBeEV1Q0ssb0M7OztBQTJFMUNwQyxZQUFZLENBQUNxQyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FyQyxZQUFZLENBQUNiLFlBQWIsR0FBNEJBLFlBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtTY2F0dGVycGxvdExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xyXG5pbXBvcnQge19BZ2dyZWdhdGlvbkxheWVyIGFzIEFnZ3JlZ2F0aW9uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2FnZ3JlZ2F0aW9uLWxheWVycyc7XHJcblxyXG5pbXBvcnQgZ2VvVmlld3BvcnQgZnJvbSAnQG1hcGJveC9nZW8tdmlld3BvcnQnO1xyXG5pbXBvcnQgQ1BVQWdncmVnYXRvciwge1xyXG4gIGRlZmF1bHRDb2xvckRpbWVuc2lvbixcclxuICBnZXREaW1lbnNpb25TY2FsZVxyXG59IGZyb20gJy4uL2xheWVyLXV0aWxzL2NwdS1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtnZXREaXN0YW5jZVNjYWxlc30gZnJvbSAndmlld3BvcnQtbWVyY2F0b3ItcHJvamVjdCc7XHJcbmltcG9ydCB7bWF4fSBmcm9tICdkMy1hcnJheSc7XHJcblxyXG5pbXBvcnQge0RlZmF1bHRDb2xvclJhbmdlfSBmcm9tICdjb25zdGFudHMvY29sb3ItcmFuZ2VzJztcclxuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHU30gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xyXG5pbXBvcnQge1NDQUxFX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQgQ2x1c3RlckJ1aWxkZXIsIHtnZXRHZW9KU09OfSBmcm9tICcuLi9sYXllci11dGlscy9jbHVzdGVyLXV0aWxzJztcclxuXHJcbmNvbnN0IGRlZmF1bHRSYWRpdXMgPSBMQVlFUl9WSVNfQ09ORklHUy5jbHVzdGVyUmFkaXVzLmRlZmF1bHRWYWx1ZTtcclxuY29uc3QgZGVmYXVsdFJhZGl1c1JhbmdlID0gTEFZRVJfVklTX0NPTkZJR1MuY2x1c3RlclJhZGl1c1JhbmdlLmRlZmF1bHRWYWx1ZTtcclxuXHJcbmNvbnN0IGRlZmF1bHRHZXRDb2xvclZhbHVlID0gcG9pbnRzID0+IHBvaW50cy5sZW5ndGg7XHJcbmNvbnN0IGRlZmF1bHRHZXRSYWRpdXNWYWx1ZSA9IGNlbGwgPT5cclxuICBjZWxsLmZpbHRlcmVkUG9pbnRzID8gY2VsbC5maWx0ZXJlZFBvaW50cy5sZW5ndGggOiBjZWxsLnBvaW50cy5sZW5ndGg7XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzR2VvSlNPTihzdGVwLCBwcm9wcywgYWdncmVnYXRpb24sIHt2aWV3cG9ydH0pIHtcclxuICBjb25zdCB7ZGF0YSwgZ2V0UG9zaXRpb24sIGZpbHRlckRhdGF9ID0gcHJvcHM7XHJcbiAgY29uc3QgZ2VvSlNPTiA9IGdldEdlb0pTT04oZGF0YSwgZ2V0UG9zaXRpb24sIGZpbHRlckRhdGEpO1xyXG4gIGNvbnN0IGNsdXN0ZXJCdWlsZGVyID0gbmV3IENsdXN0ZXJCdWlsZGVyKCk7XHJcblxyXG4gIHRoaXMuc2V0U3RhdGUoe2dlb0pTT04sIGNsdXN0ZXJCdWlsZGVyfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENsdXN0ZXJzKHN0ZXAsIHByb3BzLCBhZ2dyZWdhdGlvbiwge3ZpZXdwb3J0fSkge1xyXG4gIGNvbnN0IHtnZW9KU09OLCBjbHVzdGVyQnVpbGRlcn0gPSB0aGlzLnN0YXRlO1xyXG4gIGNvbnN0IHtjbHVzdGVyUmFkaXVzLCB6b29tLCB3aWR0aCwgaGVpZ2h0fSA9IHByb3BzO1xyXG4gIGNvbnN0IHtsb25naXR1ZGUsIGxhdGl0dWRlfSA9IHZpZXdwb3J0O1xyXG5cclxuICAvLyB6b29tIG5lZWRzIHRvIGJlIGFuIGludGVnZXIgZm9yIHRoZSBkaWZmZXJlbnQgbWFwIHV0aWxzLiBBbHNvIGhlbHBzIHdpdGggY2FjaGUga2V5LlxyXG4gIGNvbnN0IGJib3ggPSBnZW9WaWV3cG9ydC5ib3VuZHMoW2xvbmdpdHVkZSwgbGF0aXR1ZGVdLCB6b29tLCBbd2lkdGgsIGhlaWdodF0pO1xyXG4gIGNvbnN0IGNsdXN0ZXJzID0gY2x1c3RlckJ1aWxkZXIuY2x1c3RlcnNBdFpvb20oe2Jib3gsIGNsdXN0ZXJSYWRpdXMsIGdlb0pTT04sIHpvb219KTtcclxuXHJcbiAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICBsYXllckRhdGE6IHtkYXRhOiBjbHVzdGVyc31cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3ViTGF5ZXJSYWRpdXMoZGltZW5zaW9uU3RhdGUsIGRpbWVuc2lvbiwgbGF5ZXJQcm9wcykge1xyXG4gIHJldHVybiBjZWxsID0+IHtcclxuICAgIGNvbnN0IHtnZXRSYWRpdXNWYWx1ZX0gPSBsYXllclByb3BzO1xyXG4gICAgY29uc3Qge3NjYWxlRnVuY30gPSBkaW1lbnNpb25TdGF0ZTtcclxuICAgIHJldHVybiBzY2FsZUZ1bmMoZ2V0UmFkaXVzVmFsdWUoY2VsbCkpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbHVzdGVyQWdncmVnYXRpb24gPSB7XHJcbiAga2V5OiAncG9zaXRpb24nLFxyXG4gIHVwZGF0ZVN0ZXBzOiBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dlb2pzb24nLFxyXG4gICAgICB0cmlnZ2Vyczoge1xyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICBwcm9wOiAnZ2V0UG9zaXRpb24nLFxyXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ2dldFBvc2l0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgICAgcHJvcDogJ2ZpbHRlckRhdGEnLFxyXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ2ZpbHRlckRhdGEnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVyOiBwcm9jZXNzR2VvSlNPTlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnY2x1c3RlcmluZycsXHJcbiAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgY2x1c3RlclJhZGl1czoge1xyXG4gICAgICAgICAgcHJvcDogJ2NsdXN0ZXJSYWRpdXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICBwcm9wOiAnem9vbSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICBwcm9wOiAnd2lkdGgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgIHByb3A6ICdoZWlnaHQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVyOiBnZXRDbHVzdGVyc1xyXG4gICAgfVxyXG4gIF1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGl1c1ZhbHVlRG9tYWluKHN0ZXAsIHByb3BzLCBkaW1lbnNpb25VcGRhdGVyKSB7XHJcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xyXG4gIGNvbnN0IHtnZXRSYWRpdXNWYWx1ZX0gPSBwcm9wcztcclxuICBjb25zdCB7bGF5ZXJEYXRhfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gIGNvbnN0IHZhbHVlRG9tYWluID0gWzAsIG1heChsYXllckRhdGEuZGF0YSwgZ2V0UmFkaXVzVmFsdWUpXTtcclxuICB0aGlzLl9zZXREaW1lbnNpb25TdGF0ZShrZXksIHt2YWx1ZURvbWFpbn0pO1xyXG59XHJcblxyXG5jb25zdCBjbHVzdGVyTGF5ZXJEaW1lbnNpb25zID0gW1xyXG4gIGRlZmF1bHRDb2xvckRpbWVuc2lvbixcclxuICB7XHJcbiAgICBrZXk6ICdyYWRpdXMnLFxyXG4gICAgYWNjZXNzb3I6ICdnZXRSYWRpdXMnLFxyXG4gICAgbnVsbFZhbHVlOiAwLFxyXG4gICAgdXBkYXRlU3RlcHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2dldERvbWFpbicsXHJcbiAgICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHByb3A6ICdnZXRSYWRpdXNWYWx1ZScsXHJcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdnZXRSYWRpdXNWYWx1ZSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZXI6IGdldFJhZGl1c1ZhbHVlRG9tYWluXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdnZXRTY2FsZUZ1bmMnLFxyXG4gICAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgICBkb21haW46IHtwcm9wOiAncmFkaXVzRG9tYWluJ30sXHJcbiAgICAgICAgICByYW5nZToge3Byb3A6ICdyYWRpdXNSYW5nZSd9LFxyXG4gICAgICAgICAgc2NhbGVUeXBlOiB7cHJvcDogJ3JhZGl1c1NjYWxlVHlwZSd9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVyOiBnZXREaW1lbnNpb25TY2FsZVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgZ2V0U3ViTGF5ZXJBY2Nlc3NvcjogZ2V0U3ViTGF5ZXJSYWRpdXMsXHJcbiAgICBnZXRQaWNraW5nSW5mbzogKGRpbWVuc2lvblN0YXRlLCBjZWxsLCBsYXllclByb3BzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJhZGl1c1ZhbHVlID0gbGF5ZXJQcm9wcy5nZXRSYWRpdXNWYWx1ZShjZWxsKTtcclxuICAgICAgcmV0dXJuIHtyYWRpdXNWYWx1ZX07XHJcbiAgICB9XHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gIGNsdXN0ZXJSYWRpdXM6IGRlZmF1bHRSYWRpdXMsXHJcbiAgY29sb3JEb21haW46IG51bGwsXHJcbiAgY29sb3JSYW5nZTogRGVmYXVsdENvbG9yUmFuZ2UsXHJcbiAgY29sb3JTY2FsZVR5cGU6IFNDQUxFX1RZUEVTLnF1YW50aXplLFxyXG4gIHJhZGl1c1NjYWxlVHlwZTogU0NBTEVfVFlQRVMuc3FydCxcclxuICByYWRpdXNSYW5nZTogZGVmYXVsdFJhZGl1c1JhbmdlLFxyXG4gIGdldFBvc2l0aW9uOiB7dHlwZTogJ2FjY2Vzc29yJywgdmFsdWU6IHggPT4geC5wb3NpdGlvbn0sXHJcbiAgZ2V0Q29sb3JWYWx1ZToge3R5cGU6ICdhY2Nlc3NvcicsIHZhbHVlOiBkZWZhdWx0R2V0Q29sb3JWYWx1ZX0sXHJcbiAgZ2V0UmFkaXVzVmFsdWU6IHt0eXBlOiAnYWNjZXNzb3InLCB2YWx1ZTogZGVmYXVsdEdldFJhZGl1c1ZhbHVlfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2x1c3RlckxheWVyIGV4dGVuZHMgQWdncmVnYXRpb25MYXllciB7XHJcbiAgaW5pdGlhbGl6ZVN0YXRlKCkge1xyXG4gICAgY29uc3QgY3B1QWdncmVnYXRvciA9IG5ldyBDUFVBZ2dyZWdhdG9yKHtcclxuICAgICAgYWdncmVnYXRpb246IGNsdXN0ZXJBZ2dyZWdhdGlvbixcclxuICAgICAgZGltZW5zaW9uczogY2x1c3RlckxheWVyRGltZW5zaW9uc1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY3B1QWdncmVnYXRvcixcclxuICAgICAgYWdncmVnYXRvclN0YXRlOiBjcHVBZ2dyZWdhdG9yLnN0YXRlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXR0cmlidXRlTWFuYWdlciA9IHRoaXMuZ2V0QXR0cmlidXRlTWFuYWdlcigpO1xyXG4gICAgYXR0cmlidXRlTWFuYWdlci5hZGQoe1xyXG4gICAgICBwb3NpdGlvbnM6IHtzaXplOiAzLCBhY2Nlc3NvcjogJ2dldFBvc2l0aW9uJ31cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhdGUoe29sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3N9KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIGludGVybmFsIHN0YXRlIG9mIGNwdUFnZ3JlZ2F0b3IgZm9yIHRlc3RpbmdcclxuICAgICAgYWdncmVnYXRvclN0YXRlOiB0aGlzLnN0YXRlLmNwdUFnZ3JlZ2F0b3IudXBkYXRlU3RhdGUoXHJcbiAgICAgICAge29sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3N9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZpZXdwb3J0OiB0aGlzLmNvbnRleHQudmlld3BvcnQsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0aGlzLmdldEF0dHJpYnV0ZXMoKSxcclxuICAgICAgICAgIG51bUluc3RhbmNlczogdGhpcy5nZXROdW1JbnN0YW5jZXMocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFBpY2tpbmdJbmZvKHtpbmZvfSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY3B1QWdncmVnYXRvci5nZXRQaWNraW5nSW5mbyh7aW5mb30sIHRoaXMucHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgX2dldFN1YmxheWVyVXBkYXRlVHJpZ2dlcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jcHVBZ2dyZWdhdG9yLmdldFVwZGF0ZVRyaWdnZXJzKHRoaXMucHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgX2dldFN1YkxheWVyQWNjZXNzb3JzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2V0UmFkaXVzOiB0aGlzLnN0YXRlLmNwdUFnZ3JlZ2F0b3IuZ2V0QWNjZXNzb3IoJ3JhZGl1cycsIHRoaXMucHJvcHMpLFxyXG4gICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuc3RhdGUuY3B1QWdncmVnYXRvci5nZXRBY2Nlc3NvcignZmlsbENvbG9yJywgdGhpcy5wcm9wcylcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJMYXllcnMoKSB7XHJcbiAgICAvLyBmb3Igc3ViY2xhc3NpbmcsIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVyblxyXG4gICAgLy8gY3VzdG9taXplZCBzdWIgbGF5ZXIgcHJvcHNcclxuICAgIGNvbnN0IHtpZCwgcmFkaXVzU2NhbGV9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHtjcHVBZ2dyZWdhdG9yfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gYmFzZSBsYXllciBwcm9wc1xyXG4gICAgY29uc3Qge29wYWNpdHksIHBpY2thYmxlLCBhdXRvSGlnaGxpZ2h0LCBoaWdobGlnaHRDb2xvcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdXBkYXRlVHJpZ2dlcnMgPSB0aGlzLl9nZXRTdWJsYXllclVwZGF0ZVRyaWdnZXJzKCk7XHJcbiAgICBjb25zdCBhY2Nlc3NvcnMgPSB0aGlzLl9nZXRTdWJMYXllckFjY2Vzc29ycygpO1xyXG5cclxuICAgIGNvbnN0IGRpc3RhbmNlU2NhbGUgPSBnZXREaXN0YW5jZVNjYWxlcyh0aGlzLmNvbnRleHQudmlld3BvcnQpO1xyXG4gICAgY29uc3QgbWV0ZXJzUGVyUGl4ZWwgPSBkaXN0YW5jZVNjYWxlLm1ldGVyc1BlclBpeGVsWzBdO1xyXG5cclxuICAgIC8vIHJldHVybiBwcm9wcyB0byB0aGUgc3VibGF5ZXIgY29uc3RydWN0b3JcclxuICAgIHJldHVybiBuZXcgU2NhdHRlcnBsb3RMYXllcih7XHJcbiAgICAgIGlkOiBgJHtpZH0tY2x1c3RlcmAsXHJcbiAgICAgIGRhdGE6IGNwdUFnZ3JlZ2F0b3Iuc3RhdGUubGF5ZXJEYXRhLmRhdGEsXHJcbiAgICAgIHJhZGl1c1NjYWxlOiBtZXRlcnNQZXJQaXhlbCAqIHJhZGl1c1NjYWxlLFxyXG4gICAgICBvcGFjaXR5LFxyXG4gICAgICBwaWNrYWJsZSxcclxuICAgICAgYXV0b0hpZ2hsaWdodCxcclxuICAgICAgaGlnaGxpZ2h0Q29sb3IsXHJcbiAgICAgIHVwZGF0ZVRyaWdnZXJzLFxyXG4gICAgICAuLi5hY2Nlc3NvcnNcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuQ2x1c3RlckxheWVyLmxheWVyTmFtZSA9ICdDbHVzdGVyTGF5ZXInO1xyXG5DbHVzdGVyTGF5ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG4iXX0=