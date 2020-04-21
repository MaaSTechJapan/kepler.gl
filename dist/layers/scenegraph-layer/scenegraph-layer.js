"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.scenegraphVisConfigs = exports.scenegraphPosAccessor = exports.scenegraphOptionalColumns = exports.scenegraphRequiredColumns = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _meshLayers = require("@deck.gl/mesh-layers");

var _core = require("@loaders.gl/core");

var _gltf = require("@loaders.gl/gltf");

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _scenegraphLayerIcon = _interopRequireDefault(require("./scenegraph-layer-icon"));

var _scenegraphInfoModal = _interopRequireDefault(require("./scenegraph-info-modal"));

var _layerFactory = require("../layer-factory");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var scenegraphRequiredColumns = ['lat', 'lng'];
exports.scenegraphRequiredColumns = scenegraphRequiredColumns;
var scenegraphOptionalColumns = ['altitude'];
exports.scenegraphOptionalColumns = scenegraphOptionalColumns;

function fetch(url, _ref) {
  var propName = _ref.propName,
      layer = _ref.layer;

  if (propName === 'scenegraph') {
    return (0, _core.load)(url, _gltf.GLTFLoader, layer.getLoadOptions());
  }

  return fetch(url).then(function (response) {
    return response.json();
  });
}

var scenegraphPosAccessor = function scenegraphPosAccessor(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng,
      altitude = _ref2.altitude;
  return function (d) {
    return [// lng
    d.data[lng.fieldIdx], // lat
    d.data[lat.fieldIdx], // altitude
    altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0];
  };
};

exports.scenegraphPosAccessor = scenegraphPosAccessor;
var scenegraphVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  //
  sizeScale: 'sizeScale',
  angleX: _objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.angle, {
    property: 'angleX',
    label: 'angle X'
  }),
  angleY: _objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.angle, {
    property: 'angleY',
    label: 'angle Y'
  }),
  angleZ: _objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.angle, {
    property: 'angleZ',
    defaultValue: 90,
    label: 'angle Z'
  })
};
exports.scenegraphVisConfigs = scenegraphVisConfigs;
var DEFAULT_MODEL = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb';
var DEFAULT_TRANSITION = [0, 0, 0];
var DEFAULT_SCALE = [1, 1, 1];
var DEFAULT_COLOR = [255, 255, 255, 255];

var ScenegraphLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(ScenegraphLayer, _Layer);

  var _super = _createSuper(ScenegraphLayer);

  function ScenegraphLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScenegraphLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(scenegraphVisConfigs);

    _this.getPositionAccessor = function () {
      return scenegraphPosAccessor(_this.config.columns);
    }; // prepare layer info modal


    _this._layerInfoModal = (0, _scenegraphInfoModal["default"])();
    return _this;
  }

  (0, _createClass2["default"])(ScenegraphLayer, [{
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref3, getPosition) {
      var allData = _ref3.allData,
          filteredIndex = _ref3.filteredIndex;
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
      var gpuFilter = datasets[this.config.dataId].gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var getPosition = this.getPositionAccessor();
      return {
        data: data,
        getPosition: getPosition,
        getFilterValue: gpuFilter.filterValueAccessor()
      };
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {
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
          gpuFilter = opts.gpuFilter;
      var _this$config$visConfi = this.config.visConfig,
          _this$config$visConfi2 = _this$config$visConfi.sizeScale,
          sizeScale = _this$config$visConfi2 === void 0 ? 1 : _this$config$visConfi2,
          _this$config$visConfi3 = _this$config$visConfi.angleX,
          angleX = _this$config$visConfi3 === void 0 ? 0 : _this$config$visConfi3,
          _this$config$visConfi4 = _this$config$visConfi.angleY,
          angleY = _this$config$visConfi4 === void 0 ? 0 : _this$config$visConfi4,
          _this$config$visConfi5 = _this$config$visConfi.angleZ,
          angleZ = _this$config$visConfi5 === void 0 ? 90 : _this$config$visConfi5;
      return [new _meshLayers.ScenegraphLayer(_objectSpread({}, this.getDefaultDeckLayerProps(opts), {}, data, {
        fetch: fetch,
        scenegraph: this.config.visConfig.scenegraph || DEFAULT_MODEL,
        sizeScale: sizeScale,
        getTranslation: DEFAULT_TRANSITION,
        getScale: DEFAULT_SCALE,
        getOrientation: [angleX, angleY, angleZ],
        getColor: DEFAULT_COLOR,
        // parameters
        parameters: {
          depthTest: true,
          blend: false
        },
        // update triggers
        updateTriggers: {
          getOrientation: {
            angleX: angleX,
            angleY: angleY,
            angleZ: angleZ
          },
          getPosition: this.config.columns,
          getFilterValue: gpuFilter.filterValueUpdateTriggers
        }
      }))];
    }
  }, {
    key: "type",
    get: function get() {
      return '3D';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return scenegraphRequiredColumns;
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return scenegraphOptionalColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _scenegraphLayerIcon["default"];
    }
  }, {
    key: "layerInfoModal",
    get: function get() {
      return {
        id: 'scenegraphInfo',
        template: this._layerInfoModal,
        modalProps: {
          title: 'How to use Scenegraph'
        }
      };
    }
  }]);
  return ScenegraphLayer;
}(_baseLayer["default"]);

exports["default"] = ScenegraphLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc2NlbmVncmFwaC1sYXllci9zY2VuZWdyYXBoLWxheWVyLmpzIl0sIm5hbWVzIjpbInNjZW5lZ3JhcGhSZXF1aXJlZENvbHVtbnMiLCJzY2VuZWdyYXBoT3B0aW9uYWxDb2x1bW5zIiwiZmV0Y2giLCJ1cmwiLCJwcm9wTmFtZSIsImxheWVyIiwiR0xURkxvYWRlciIsImdldExvYWRPcHRpb25zIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNjZW5lZ3JhcGhQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInNjZW5lZ3JhcGhWaXNDb25maWdzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzaXplU2NhbGUiLCJhbmdsZVgiLCJMQVlFUl9WSVNfQ09ORklHUyIsImFuZ2xlIiwicHJvcGVydHkiLCJsYWJlbCIsImFuZ2xlWSIsImFuZ2xlWiIsImRlZmF1bHRWYWx1ZSIsIkRFRkFVTFRfTU9ERUwiLCJERUZBVUxUX1RSQU5TSVRJT04iLCJERUZBVUxUX1NDQUxFIiwiREVGQVVMVF9DT0xPUiIsIlNjZW5lZ3JhcGhMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsIl9sYXllckluZm9Nb2RhbCIsImdldFBvc2l0aW9uIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJpIiwibGVuZ3RoIiwiaW5kZXgiLCJwb3MiLCJldmVyeSIsIk51bWJlciIsImlzRmluaXRlIiwicHVzaCIsInBvc2l0aW9uIiwiZGF0YXNldHMiLCJvbGRMYXllckRhdGEiLCJncHVGaWx0ZXIiLCJkYXRhSWQiLCJ1cGRhdGVEYXRhIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsIm9wdHMiLCJ2aXNDb25maWciLCJEZWNrU2NlbmVncmFwaExheWVyIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwic2NlbmVncmFwaCIsImdldFRyYW5zbGF0aW9uIiwiZ2V0U2NhbGUiLCJnZXRPcmllbnRhdGlvbiIsImdldENvbG9yIiwicGFyYW1ldGVycyIsImRlcHRoVGVzdCIsImJsZW5kIiwidXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMiLCJTY2VuZWdyYXBoTGF5ZXJJY29uIiwiaWQiLCJ0ZW1wbGF0ZSIsIm1vZGFsUHJvcHMiLCJ0aXRsZSIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx5QkFBeUIsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxDOztBQUNBLElBQU1DLHlCQUF5QixHQUFHLENBQUMsVUFBRCxDQUFsQzs7O0FBRVAsU0FBU0MsS0FBVCxDQUFlQyxHQUFmLFFBQXVDO0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFDckMsTUFBSUQsUUFBUSxLQUFLLFlBQWpCLEVBQStCO0FBQzdCLFdBQU8sZ0JBQUtELEdBQUwsRUFBVUcsZ0JBQVYsRUFBc0JELEtBQUssQ0FBQ0UsY0FBTixFQUF0QixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0wsS0FBSyxDQUFDQyxHQUFELENBQUwsQ0FBV0ssSUFBWCxDQUFnQixVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQUF4QixDQUFQO0FBQ0Q7O0FBRU0sSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtBQUFBLE1BQUVDLEdBQUYsU0FBRUEsR0FBRjtBQUFBLE1BQU9DLEdBQVAsU0FBT0EsR0FBUDtBQUFBLE1BQVlDLFFBQVosU0FBWUEsUUFBWjtBQUFBLFNBQTBCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQ2xFO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPSCxHQUFHLENBQUNJLFFBQVgsQ0FGa0UsRUFHbEU7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9KLEdBQUcsQ0FBQ0ssUUFBWCxDQUprRSxFQUtsRTtBQUNBSCxJQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csUUFBVCxHQUFvQixDQUFDLENBQWpDLEdBQXFDRixDQUFDLENBQUNDLElBQUYsQ0FBT0YsUUFBUSxDQUFDRyxRQUFoQixDQUFyQyxHQUFpRSxDQU5DLENBQUo7QUFBQSxHQUEzQjtBQUFBLENBQTlCOzs7QUFTQSxJQUFNQyxvQkFBb0IsR0FBRztBQUNsQ0MsRUFBQUEsT0FBTyxFQUFFLFNBRHlCO0FBRWxDQyxFQUFBQSxVQUFVLEVBQUUsWUFGc0I7QUFHbEM7QUFDQUMsRUFBQUEsU0FBUyxFQUFFLFdBSnVCO0FBS2xDQyxFQUFBQSxNQUFNLG9CQUNEQyxnQ0FBa0JDLEtBRGpCO0FBRUpDLElBQUFBLFFBQVEsRUFBRSxRQUZOO0FBR0pDLElBQUFBLEtBQUssRUFBRTtBQUhILElBTDRCO0FBVWxDQyxFQUFBQSxNQUFNLG9CQUNESixnQ0FBa0JDLEtBRGpCO0FBRUpDLElBQUFBLFFBQVEsRUFBRSxRQUZOO0FBR0pDLElBQUFBLEtBQUssRUFBRTtBQUhILElBVjRCO0FBZWxDRSxFQUFBQSxNQUFNLG9CQUNETCxnQ0FBa0JDLEtBRGpCO0FBRUpDLElBQUFBLFFBQVEsRUFBRSxRQUZOO0FBR0pJLElBQUFBLFlBQVksRUFBRSxFQUhWO0FBSUpILElBQUFBLEtBQUssRUFBRTtBQUpIO0FBZjRCLENBQTdCOztBQXVCUCxJQUFNSSxhQUFhLEdBQ2pCLHdHQURGO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBM0I7QUFDQSxJQUFNQyxhQUFhLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBdEI7O0lBRXFCQyxlOzs7OztBQUNuQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOOztBQUVBLFVBQUtDLGlCQUFMLENBQXVCbEIsb0JBQXZCOztBQUNBLFVBQUttQixtQkFBTCxHQUEyQjtBQUFBLGFBQU0xQixxQkFBcUIsQ0FBQyxNQUFLMkIsTUFBTCxDQUFZQyxPQUFiLENBQTNCO0FBQUEsS0FBM0IsQ0FKaUIsQ0FNakI7OztBQUNBLFVBQUtDLGVBQUwsR0FBdUIsc0NBQXZCO0FBUGlCO0FBUWxCOzs7O2tEQWdDZ0RDLFcsRUFBYTtBQUFBLFVBQXRDQyxPQUFzQyxTQUF0Q0EsT0FBc0M7QUFBQSxVQUE3QkMsYUFBNkIsU0FBN0JBLGFBQTZCO0FBQzVELFVBQU0zQixJQUFJLEdBQUcsRUFBYjs7QUFFQSxXQUFLLElBQUk0QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxhQUFhLENBQUNFLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLFlBQU1FLEtBQUssR0FBR0gsYUFBYSxDQUFDQyxDQUFELENBQTNCO0FBQ0EsWUFBTUcsR0FBRyxHQUFHTixXQUFXLENBQUM7QUFBQ3pCLFVBQUFBLElBQUksRUFBRTBCLE9BQU8sQ0FBQ0ksS0FBRDtBQUFkLFNBQUQsQ0FBdkIsQ0FGNkMsQ0FJN0M7QUFDQTs7QUFDQSxZQUFJQyxHQUFHLENBQUNDLEtBQUosQ0FBVUMsTUFBTSxDQUFDQyxRQUFqQixDQUFKLEVBQWdDO0FBQzlCbEMsVUFBQUEsSUFBSSxDQUFDbUMsSUFBTCxDQUFVO0FBQ1JuQyxZQUFBQSxJQUFJLEVBQUUwQixPQUFPLENBQUNJLEtBQUQsQ0FETDtBQUVSTSxZQUFBQSxRQUFRLEVBQUVMLEdBRkY7QUFHUjtBQUNBRCxZQUFBQSxLQUFLLEVBQUxBO0FBSlEsV0FBVjtBQU1EO0FBQ0Y7O0FBQ0QsYUFBTzlCLElBQVA7QUFDRDs7O29DQUVlcUMsUSxFQUFVQyxZLEVBQWM7QUFBQSxVQUMvQkMsU0FEK0IsR0FDbEJGLFFBQVEsQ0FBQyxLQUFLZixNQUFMLENBQVlrQixNQUFiLENBRFUsQ0FDL0JELFNBRCtCOztBQUFBLDZCQUV2QixLQUFLRSxVQUFMLENBQWdCSixRQUFoQixFQUEwQkMsWUFBMUIsQ0FGdUI7QUFBQSxVQUUvQnRDLElBRitCLG9CQUUvQkEsSUFGK0I7O0FBR3RDLFVBQU15QixXQUFXLEdBQUcsS0FBS0osbUJBQUwsRUFBcEI7QUFDQSxhQUFPO0FBQ0xyQixRQUFBQSxJQUFJLEVBQUpBLElBREs7QUFFTHlCLFFBQUFBLFdBQVcsRUFBWEEsV0FGSztBQUdMaUIsUUFBQUEsY0FBYyxFQUFFSCxTQUFTLENBQUNJLG1CQUFWO0FBSFgsT0FBUDtBQUtEOzs7b0NBRWVqQixPLEVBQVNELFcsRUFBYTtBQUNwQyxVQUFNbUIsTUFBTSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUJuQixPQUFyQixFQUE4QixVQUFBM0IsQ0FBQztBQUFBLGVBQUkwQixXQUFXLENBQUM7QUFBQ3pCLFVBQUFBLElBQUksRUFBRUQ7QUFBUCxTQUFELENBQWY7QUFBQSxPQUEvQixDQUFmO0FBQ0EsV0FBSytDLFVBQUwsQ0FBZ0I7QUFBQ0YsUUFBQUEsTUFBTSxFQUFOQTtBQUFELE9BQWhCO0FBQ0Q7OztnQ0FFV0csSSxFQUFNO0FBQUEsVUFDVC9DLElBRFMsR0FDVStDLElBRFYsQ0FDVC9DLElBRFM7QUFBQSxVQUNIdUMsU0FERyxHQUNVUSxJQURWLENBQ0hSLFNBREc7QUFBQSxrQ0FLWixLQUFLakIsTUFMTyxDQUlkMEIsU0FKYztBQUFBLHlEQUlGM0MsU0FKRTtBQUFBLFVBSUZBLFNBSkUsdUNBSVUsQ0FKVjtBQUFBLHlEQUlhQyxNQUpiO0FBQUEsVUFJYUEsTUFKYix1Q0FJc0IsQ0FKdEI7QUFBQSx5REFJeUJLLE1BSnpCO0FBQUEsVUFJeUJBLE1BSnpCLHVDQUlrQyxDQUpsQztBQUFBLHlEQUlxQ0MsTUFKckM7QUFBQSxVQUlxQ0EsTUFKckMsdUNBSThDLEVBSjlDO0FBT2hCLGFBQU8sQ0FDTCxJQUFJcUMsMkJBQUosbUJBQ0ssS0FBS0Msd0JBQUwsQ0FBOEJILElBQTlCLENBREwsTUFFSy9DLElBRkw7QUFHRWQsUUFBQUEsS0FBSyxFQUFMQSxLQUhGO0FBSUVpRSxRQUFBQSxVQUFVLEVBQUUsS0FBSzdCLE1BQUwsQ0FBWTBCLFNBQVosQ0FBc0JHLFVBQXRCLElBQW9DckMsYUFKbEQ7QUFLRVQsUUFBQUEsU0FBUyxFQUFUQSxTQUxGO0FBTUUrQyxRQUFBQSxjQUFjLEVBQUVyQyxrQkFObEI7QUFPRXNDLFFBQUFBLFFBQVEsRUFBRXJDLGFBUFo7QUFRRXNDLFFBQUFBLGNBQWMsRUFBRSxDQUFDaEQsTUFBRCxFQUFTSyxNQUFULEVBQWlCQyxNQUFqQixDQVJsQjtBQVNFMkMsUUFBQUEsUUFBUSxFQUFFdEMsYUFUWjtBQVVFO0FBQ0F1QyxRQUFBQSxVQUFVLEVBQUU7QUFBQ0MsVUFBQUEsU0FBUyxFQUFFLElBQVo7QUFBa0JDLFVBQUFBLEtBQUssRUFBRTtBQUF6QixTQVhkO0FBWUU7QUFDQUMsUUFBQUEsY0FBYyxFQUFFO0FBQ2RMLFVBQUFBLGNBQWMsRUFBRTtBQUFDaEQsWUFBQUEsTUFBTSxFQUFOQSxNQUFEO0FBQVNLLFlBQUFBLE1BQU0sRUFBTkEsTUFBVDtBQUFpQkMsWUFBQUEsTUFBTSxFQUFOQTtBQUFqQixXQURGO0FBRWRhLFVBQUFBLFdBQVcsRUFBRSxLQUFLSCxNQUFMLENBQVlDLE9BRlg7QUFHZG1CLFVBQUFBLGNBQWMsRUFBRUgsU0FBUyxDQUFDcUI7QUFIWjtBQWJsQixTQURLLENBQVA7QUFxQkQ7Ozt3QkEvRlU7QUFDVCxhQUFPLElBQVA7QUFDRDs7O3dCQUUwQjtBQUN6QixhQUFPNUUseUJBQVA7QUFDRDs7O3dCQUVxQjtBQUNwQixhQUFPQyx5QkFBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sS0FBSzRFLHVCQUFaO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU9DLCtCQUFQO0FBQ0Q7Ozt3QkFFb0I7QUFDbkIsYUFBTztBQUNMQyxRQUFBQSxFQUFFLEVBQUUsZ0JBREM7QUFFTEMsUUFBQUEsUUFBUSxFQUFFLEtBQUt4QyxlQUZWO0FBR0x5QyxRQUFBQSxVQUFVLEVBQUU7QUFDVkMsVUFBQUEsS0FBSyxFQUFFO0FBREc7QUFIUCxPQUFQO0FBT0Q7OztFQXZDMENDLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtTY2VuZWdyYXBoTGF5ZXIgYXMgRGVja1NjZW5lZ3JhcGhMYXllcn0gZnJvbSAnQGRlY2suZ2wvbWVzaC1sYXllcnMnO1xyXG5pbXBvcnQge2xvYWR9IGZyb20gJ0Bsb2FkZXJzLmdsL2NvcmUnO1xyXG5pbXBvcnQge0dMVEZMb2FkZXJ9IGZyb20gJ0Bsb2FkZXJzLmdsL2dsdGYnO1xyXG5cclxuaW1wb3J0IExheWVyIGZyb20gJy4uL2Jhc2UtbGF5ZXInO1xyXG5pbXBvcnQgU2NlbmVncmFwaExheWVySWNvbiBmcm9tICcuL3NjZW5lZ3JhcGgtbGF5ZXItaWNvbic7XHJcbmltcG9ydCBTY2VuZWdyYXBoSW5mb01vZGFsRmFjdG9yeSBmcm9tICcuL3NjZW5lZ3JhcGgtaW5mby1tb2RhbCc7XHJcbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuZWdyYXBoUmVxdWlyZWRDb2x1bW5zID0gWydsYXQnLCAnbG5nJ107XHJcbmV4cG9ydCBjb25zdCBzY2VuZWdyYXBoT3B0aW9uYWxDb2x1bW5zID0gWydhbHRpdHVkZSddO1xyXG5cclxuZnVuY3Rpb24gZmV0Y2godXJsLCB7cHJvcE5hbWUsIGxheWVyfSkge1xyXG4gIGlmIChwcm9wTmFtZSA9PT0gJ3NjZW5lZ3JhcGgnKSB7XHJcbiAgICByZXR1cm4gbG9hZCh1cmwsIEdMVEZMb2FkZXIsIGxheWVyLmdldExvYWRPcHRpb25zKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2NlbmVncmFwaFBvc0FjY2Vzc29yID0gKHtsYXQsIGxuZywgYWx0aXR1ZGV9KSA9PiBkID0+IFtcclxuICAvLyBsbmdcclxuICBkLmRhdGFbbG5nLmZpZWxkSWR4XSxcclxuICAvLyBsYXRcclxuICBkLmRhdGFbbGF0LmZpZWxkSWR4XSxcclxuICAvLyBhbHRpdHVkZVxyXG4gIGFsdGl0dWRlICYmIGFsdGl0dWRlLmZpZWxkSWR4ID4gLTEgPyBkLmRhdGFbYWx0aXR1ZGUuZmllbGRJZHhdIDogMFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjZW5lZ3JhcGhWaXNDb25maWdzID0ge1xyXG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcclxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXHJcbiAgLy9cclxuICBzaXplU2NhbGU6ICdzaXplU2NhbGUnLFxyXG4gIGFuZ2xlWDoge1xyXG4gICAgLi4uTEFZRVJfVklTX0NPTkZJR1MuYW5nbGUsXHJcbiAgICBwcm9wZXJ0eTogJ2FuZ2xlWCcsXHJcbiAgICBsYWJlbDogJ2FuZ2xlIFgnXHJcbiAgfSxcclxuICBhbmdsZVk6IHtcclxuICAgIC4uLkxBWUVSX1ZJU19DT05GSUdTLmFuZ2xlLFxyXG4gICAgcHJvcGVydHk6ICdhbmdsZVknLFxyXG4gICAgbGFiZWw6ICdhbmdsZSBZJ1xyXG4gIH0sXHJcbiAgYW5nbGVaOiB7XHJcbiAgICAuLi5MQVlFUl9WSVNfQ09ORklHUy5hbmdsZSxcclxuICAgIHByb3BlcnR5OiAnYW5nbGVaJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogOTAsXHJcbiAgICBsYWJlbDogJ2FuZ2xlIFonXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9NT0RFTCA9XHJcbiAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9LaHJvbm9zR3JvdXAvZ2xURi1TYW1wbGUtTW9kZWxzL21hc3Rlci8yLjAvRHVjay9nbFRGLUJpbmFyeS9EdWNrLmdsYic7XHJcbmNvbnN0IERFRkFVTFRfVFJBTlNJVElPTiA9IFswLCAwLCAwXTtcclxuY29uc3QgREVGQVVMVF9TQ0FMRSA9IFsxLCAxLCAxXTtcclxuY29uc3QgREVGQVVMVF9DT0xPUiA9IFsyNTUsIDI1NSwgMjU1LCAyNTVdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVncmFwaExheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclZpc0NvbmZpZyhzY2VuZWdyYXBoVmlzQ29uZmlncyk7XHJcbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBzY2VuZWdyYXBoUG9zQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBsYXllciBpbmZvIG1vZGFsXHJcbiAgICB0aGlzLl9sYXllckluZm9Nb2RhbCA9IFNjZW5lZ3JhcGhJbmZvTW9kYWxGYWN0b3J5KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnM0QnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHNjZW5lZ3JhcGhSZXF1aXJlZENvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9uYWxDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHNjZW5lZ3JhcGhPcHRpb25hbENvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sdW1uUGFpcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UG9pbnRDb2x1bW5QYWlycztcclxuICB9XHJcblxyXG4gIGdldCBsYXllckljb24oKSB7XHJcbiAgICByZXR1cm4gU2NlbmVncmFwaExheWVySWNvbjtcclxuICB9XHJcblxyXG4gIGdldCBsYXllckluZm9Nb2RhbCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiAnc2NlbmVncmFwaEluZm8nLFxyXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5fbGF5ZXJJbmZvTW9kYWwsXHJcbiAgICAgIG1vZGFsUHJvcHM6IHtcclxuICAgICAgICB0aXRsZTogJ0hvdyB0byB1c2UgU2NlbmVncmFwaCdcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGZpbHRlcmVkSW5kZXhbaV07XHJcbiAgICAgIGNvbnN0IHBvcyA9IGdldFBvc2l0aW9uKHtkYXRhOiBhbGxEYXRhW2luZGV4XX0pO1xyXG5cclxuICAgICAgLy8gaWYgZG9lc24ndCBoYXZlIHBvaW50IGxhdCBvciBsbmcsIGRvIG5vdCBhZGQgdGhlIHBvaW50XHJcbiAgICAgIC8vIGRlY2suZ2wgY2FuJ3QgaGFuZGxlIHBvc2l0aW9uID0gbnVsbFxyXG4gICAgICBpZiAocG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcclxuICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgZGF0YTogYWxsRGF0YVtpbmRleF0sXHJcbiAgICAgICAgICBwb3NpdGlvbjogcG9zLFxyXG4gICAgICAgICAgLy8gaW5kZXggaXMgaW1wb3J0YW50IGZvciBmaWx0ZXJcclxuICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpIHtcclxuICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcclxuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMudXBkYXRlRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKTtcclxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBnZXRQb3NpdGlvbixcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0UG9zaXRpb24pIHtcclxuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4gZ2V0UG9zaXRpb24oe2RhdGE6IGR9KSk7XHJcbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kc30pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGF5ZXIob3B0cykge1xyXG4gICAgY29uc3Qge2RhdGEsIGdwdUZpbHRlcn0gPSBvcHRzO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgdmlzQ29uZmlnOiB7c2l6ZVNjYWxlID0gMSwgYW5nbGVYID0gMCwgYW5nbGVZID0gMCwgYW5nbGVaID0gOTB9XHJcbiAgICB9ID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgbmV3IERlY2tTY2VuZWdyYXBoTGF5ZXIoe1xyXG4gICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpLFxyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgZmV0Y2gsXHJcbiAgICAgICAgc2NlbmVncmFwaDogdGhpcy5jb25maWcudmlzQ29uZmlnLnNjZW5lZ3JhcGggfHwgREVGQVVMVF9NT0RFTCxcclxuICAgICAgICBzaXplU2NhbGUsXHJcbiAgICAgICAgZ2V0VHJhbnNsYXRpb246IERFRkFVTFRfVFJBTlNJVElPTixcclxuICAgICAgICBnZXRTY2FsZTogREVGQVVMVF9TQ0FMRSxcclxuICAgICAgICBnZXRPcmllbnRhdGlvbjogW2FuZ2xlWCwgYW5nbGVZLCBhbmdsZVpdLFxyXG4gICAgICAgIGdldENvbG9yOiBERUZBVUxUX0NPTE9SLFxyXG4gICAgICAgIC8vIHBhcmFtZXRlcnNcclxuICAgICAgICBwYXJhbWV0ZXJzOiB7ZGVwdGhUZXN0OiB0cnVlLCBibGVuZDogZmFsc2V9LFxyXG4gICAgICAgIC8vIHVwZGF0ZSB0cmlnZ2Vyc1xyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzOiB7XHJcbiAgICAgICAgICBnZXRPcmllbnRhdGlvbjoge2FuZ2xlWCwgYW5nbGVZLCBhbmdsZVp9LFxyXG4gICAgICAgICAgZ2V0UG9zaXRpb246IHRoaXMuY29uZmlnLmNvbHVtbnMsXHJcbiAgICAgICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG4iXX0=