"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.visStateSchema = exports.visStateSchemaV1 = exports.visStateSchemaV0 = exports.propertiesV1 = exports.propertiesV0 = exports.filterPropsV1 = exports.SplitMapsSchema = exports.DimensionFieldSchema = exports.filterPropsV0 = exports.layerPropsV1 = exports.layerPropsV0 = exports.dimensionPropsV0 = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _versions = require("./versions");

var _filterUtils = require("../utils/filter-utils");

var _layerFactory = require("../layers/layer-factory");

var _schema = _interopRequireDefault(require("./schema"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _visStateSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * V0 Schema
 */
var dimensionPropsV0 = ['name', 'type']; // in v0 geojson there is only sizeField
// in v1 geojson
// stroke base on -> sizeField
// height based on -> heightField
// radius based on -> radiusField
// here we make our wiredst guess on which channel sizeField belongs to

exports.dimensionPropsV0 = dimensionPropsV0;

function geojsonSizeFieldV0ToV1(config) {
  var defaultRaiuds = 10;
  var defaultRadiusRange = [0, 50]; // if extruded, sizeField is most likely used for height

  if (config.visConfig.extruded) {
    return 'heightField';
  } // if show stroke enabled, sizeField is most likely used for stroke


  if (config.visConfig.stroked) {
    return 'sizeField';
  } // if radius changed, or radius Range Changed, sizeField is most likely used for radius
  // this is the most unreliable guess, that's why we put it in the end


  if (config.visConfig.radius !== defaultRaiuds || config.visConfig.radiusRange.some(function (d, i) {
    return d !== defaultRadiusRange[i];
  })) {
    return 'radiusField';
  }

  return 'sizeField';
} // convert v0 to v1 layer config


var DimensionFieldSchemaV0 = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(DimensionFieldSchemaV0, _Schema);

  var _super = _createSuper(DimensionFieldSchemaV0);

  function DimensionFieldSchemaV0() {
    var _this;

    (0, _classCallCheck2["default"])(this, DimensionFieldSchemaV0);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "version", _versions.VERSIONS.v0);
    return _this;
  }

  (0, _createClass2["default"])(DimensionFieldSchemaV0, [{
    key: "save",
    value: function save(field) {
      // should not be called anymore
      return (0, _defineProperty2["default"])({}, this.key, field !== null ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field, parents, accumulated) {
      var _parents$slice = parents.slice(-1),
          _parents$slice2 = (0, _slicedToArray2["default"])(_parents$slice, 1),
          config = _parents$slice2[0];

      var fieldName = this.key;

      if (config.type === 'geojson' && this.key === 'sizeField' && field) {
        fieldName = geojsonSizeFieldV0ToV1(config);
      } // fold into visualChannels to be load by VisualChannelSchemaV1


      return {
        visualChannels: _objectSpread({}, accumulated.visualChannels || {}, (0, _defineProperty2["default"])({}, fieldName, field))
      };
    }
  }]);
  return DimensionFieldSchemaV0;
}(_schema["default"]);

var DimensionScaleSchemaV0 = /*#__PURE__*/function (_Schema2) {
  (0, _inherits2["default"])(DimensionScaleSchemaV0, _Schema2);

  var _super2 = _createSuper(DimensionScaleSchemaV0);

  function DimensionScaleSchemaV0() {
    var _this2;

    (0, _classCallCheck2["default"])(this, DimensionScaleSchemaV0);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "version", _versions.VERSIONS.v0);
    return _this2;
  }

  (0, _createClass2["default"])(DimensionScaleSchemaV0, [{
    key: "save",
    value: function save(scale) {
      return (0, _defineProperty2["default"])({}, this.key, scale);
    }
  }, {
    key: "load",
    value: function load(scale, parents, accumulated) {
      var _parents$slice3 = parents.slice(-1),
          _parents$slice4 = (0, _slicedToArray2["default"])(_parents$slice3, 1),
          config = _parents$slice4[0]; // fold into visualChannels to be load by VisualChannelSchemaV1


      if (this.key === 'sizeScale' && config.type === 'geojson') {
        // sizeScale now split into radiusScale, heightScale
        // no user customization, just use default
        return {};
      }

      return {
        visualChannels: _objectSpread({}, accumulated.visualChannels || {}, (0, _defineProperty2["default"])({}, this.key, scale))
      };
    }
  }]);
  return DimensionScaleSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config


var LayerConfigSchemaV0 = /*#__PURE__*/function (_Schema3) {
  (0, _inherits2["default"])(LayerConfigSchemaV0, _Schema3);

  var _super3 = _createSuper(LayerConfigSchemaV0);

  function LayerConfigSchemaV0() {
    var _this3;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaV0);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "version", _versions.VERSIONS.v0);
    return _this3;
  }

  (0, _createClass2["default"])(LayerConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key
      return {
        config: _objectSpread({}, accumulated.config || {}, (0, _defineProperty2["default"])({}, this.key, saved))
      };
    }
  }]);
  return LayerConfigSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer columns
// only return column value for each column


var LayerColumnsSchemaV0 = /*#__PURE__*/function (_Schema4) {
  (0, _inherits2["default"])(LayerColumnsSchemaV0, _Schema4);

  var _super4 = _createSuper(LayerColumnsSchemaV0);

  function LayerColumnsSchemaV0() {
    var _this4;

    (0, _classCallCheck2["default"])(this, LayerColumnsSchemaV0);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "version", _versions.VERSIONS.v0);
    return _this4;
  }

  (0, _createClass2["default"])(LayerColumnsSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key, flatten columns
      return {
        config: _objectSpread({}, accumulated.config || {}, {
          columns: Object.keys(saved).reduce(function (accu, key) {
            return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, saved[key].value));
          }, {})
        })
      };
    }
  }]);
  return LayerColumnsSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config.visConfig


var LayerConfigToVisConfigSchemaV0 = /*#__PURE__*/function (_Schema5) {
  (0, _inherits2["default"])(LayerConfigToVisConfigSchemaV0, _Schema5);

  var _super5 = _createSuper(LayerConfigToVisConfigSchemaV0);

  function LayerConfigToVisConfigSchemaV0() {
    var _this5;

    (0, _classCallCheck2["default"])(this, LayerConfigToVisConfigSchemaV0);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "version", _versions.VERSIONS.v0);
    return _this5;
  }

  (0, _createClass2["default"])(LayerConfigToVisConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.visConfig
      var accumulatedConfig = accumulated.config || {};
      return {
        config: _objectSpread({}, accumulatedConfig, {
          visConfig: _objectSpread({}, accumulatedConfig.visConfig || {}, (0, _defineProperty2["default"])({}, this.key, saved))
        })
      };
    }
  }]);
  return LayerConfigToVisConfigSchemaV0;
}(_schema["default"]);

var LayerVisConfigSchemaV0 = /*#__PURE__*/function (_Schema6) {
  (0, _inherits2["default"])(LayerVisConfigSchemaV0, _Schema6);

  var _super6 = _createSuper(LayerVisConfigSchemaV0);

  function LayerVisConfigSchemaV0() {
    var _this6;

    (0, _classCallCheck2["default"])(this, LayerVisConfigSchemaV0);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this6 = _super6.call.apply(_super6, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "version", _versions.VERSIONS.v0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "key", 'visConfig');
    return _this6;
  }

  (0, _createClass2["default"])(LayerVisConfigSchemaV0, [{
    key: "load",
    value: function load(visConfig, parents, accumulator) {
      var _parents$slice5 = parents.slice(-1),
          _parents$slice6 = (0, _slicedToArray2["default"])(_parents$slice5, 1),
          config = _parents$slice6[0];

      var rename = {
        geojson: {
          extruded: 'enable3d',
          elevationRange: 'heightRange'
        }
      };

      if (config.type in rename) {
        var propToRename = rename[config.type];
        return {
          config: _objectSpread({}, accumulator.config || {}, {
            visConfig: Object.keys(visConfig).reduce(function (accu, key) {
              return _objectSpread({}, accu, {}, propToRename[key] ? (0, _defineProperty2["default"])({}, propToRename[key], visConfig[key]) : (0, _defineProperty2["default"])({}, key, visConfig[key]));
            }, {})
          })
        };
      }

      return {
        config: _objectSpread({}, accumulator.config || {}, {
          visConfig: visConfig
        })
      };
    }
  }]);
  return LayerVisConfigSchemaV0;
}(_schema["default"]);

var LayerConfigSchemaDeleteV0 = /*#__PURE__*/function (_Schema7) {
  (0, _inherits2["default"])(LayerConfigSchemaDeleteV0, _Schema7);

  var _super7 = _createSuper(LayerConfigSchemaDeleteV0);

  function LayerConfigSchemaDeleteV0() {
    var _this7;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaDeleteV0);

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    _this7 = _super7.call.apply(_super7, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "version", _versions.VERSIONS.v0);
    return _this7;
  }

  (0, _createClass2["default"])(LayerConfigSchemaDeleteV0, [{
    key: "load",
    value: function load(value) {
      return {};
    }
  }]);
  return LayerConfigSchemaDeleteV0;
}(_schema["default"]);
/**
 * V0 -> V1 Changes
 * - layer is now a class
 * - config saved in a config object
 * - id, type, isAggregated is outside layer.config
 * - visualChannels is outside config, it defines available visual channel and
 *   property names for field, scale, domain and range of each visual chanel.
 * - enable3d, colorAggregation and sizeAggregation are moved into visConfig
 * - GeojsonLayer - added height, radius specific properties
 */


var layerPropsV0 = {
  id: null,
  type: null,
  // move into layer.config
  dataId: new LayerConfigSchemaV0({
    key: 'dataId'
  }),
  label: new LayerConfigSchemaV0({
    key: 'label'
  }),
  color: new LayerConfigSchemaV0({
    key: 'color'
  }),
  isVisible: new LayerConfigSchemaV0({
    key: 'isVisible'
  }),
  // convert visConfig
  visConfig: new LayerVisConfigSchemaV0({
    key: 'visConfig'
  }),
  // move into layer.config
  // flatten
  columns: new LayerColumnsSchemaV0(),
  // save into visualChannels
  colorField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'colorField'
  }),
  colorScale: new DimensionScaleSchemaV0({
    key: 'colorScale'
  }),
  sizeField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'sizeField'
  }),
  sizeScale: new DimensionScaleSchemaV0({
    key: 'sizeScale'
  }),
  // move into config.visConfig
  enable3d: new LayerConfigToVisConfigSchemaV0({
    key: 'enable3d'
  }),
  colorAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'colorAggregation'
  }),
  sizeAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'sizeAggregation'
  }),
  // delete
  isAggregated: new LayerConfigSchemaDeleteV0()
};
/**
 * V1 Schema
 */

exports.layerPropsV0 = layerPropsV0;

var ColumnSchemaV1 = /*#__PURE__*/function (_Schema8) {
  (0, _inherits2["default"])(ColumnSchemaV1, _Schema8);

  var _super8 = _createSuper(ColumnSchemaV1);

  function ColumnSchemaV1() {
    (0, _classCallCheck2["default"])(this, ColumnSchemaV1);
    return _super8.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColumnSchemaV1, [{
    key: "save",
    value: function save(columns, state) {
      // starting from v1, only save column value
      // fieldIdx will be calculated during merge
      return (0, _defineProperty2["default"])({}, this.key, Object.keys(columns).reduce(function (accu, ckey) {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, ckey, columns[ckey].value));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(columns) {
      return {
        columns: columns
      };
    }
  }]);
  return ColumnSchemaV1;
}(_schema["default"]);

var TextLabelSchemaV1 = /*#__PURE__*/function (_Schema9) {
  (0, _inherits2["default"])(TextLabelSchemaV1, _Schema9);

  var _super9 = _createSuper(TextLabelSchemaV1);

  function TextLabelSchemaV1() {
    (0, _classCallCheck2["default"])(this, TextLabelSchemaV1);
    return _super9.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextLabelSchemaV1, [{
    key: "save",
    value: function save(textLabel) {
      return (0, _defineProperty2["default"])({}, this.key, textLabel.map(function (tl) {
        return _objectSpread({}, tl, {
          field: tl.field ? (0, _lodash["default"])(tl.field, ['name', 'type']) : null
        });
      }));
    }
  }, {
    key: "load",
    value: function load(textLabel) {
      return {
        textLabel: Array.isArray(textLabel) ? textLabel : [textLabel]
      };
    }
  }]);
  return TextLabelSchemaV1;
}(_schema["default"]);

var visualChannelModificationV1 = {
  point: function point(vc, parents, accumulator) {
    var _parents$slice7 = parents.slice(-1),
        _parents$slice8 = (0, _slicedToArray2["default"])(_parents$slice7, 1),
        layer = _parents$slice8[0];

    if (layer.config.visConfig.outline && vc.colorField && !vc.hasOwnProperty('strokeColorField')) {
      // point layer now supports both outline and fill
      // for older schema where filled has not been added to point layer
      // copy colorField, colorScale to strokeColorField, and strokeColorScale
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale,
        colorField: null,
        colorScale: 'quantile'
      };
    }

    return {};
  },
  geojson: function geojson(vc, parents, accumulator) {
    var _parents$slice9 = parents.slice(-1),
        _parents$slice10 = (0, _slicedToArray2["default"])(_parents$slice9, 1),
        layer = _parents$slice10[0];

    var isOld = !vc.hasOwnProperty('strokeColorField'); // make our best guess if this geojson layer contains point

    var isPoint = vc.radiusField || layer.config.visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld && !isPoint && layer.config.visConfig.stroked) {
      // if stroked is true, copy color config to stroke color config
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale
      };
    }

    return {};
  }
};
/**
 * V1: save [field]: {name, type}, [scale]: '' for each channel
 */

var VisualChannelSchemaV1 = /*#__PURE__*/function (_Schema10) {
  (0, _inherits2["default"])(VisualChannelSchemaV1, _Schema10);

  var _super10 = _createSuper(VisualChannelSchemaV1);

  function VisualChannelSchemaV1() {
    (0, _classCallCheck2["default"])(this, VisualChannelSchemaV1);
    return _super10.apply(this, arguments);
  }

  (0, _createClass2["default"])(VisualChannelSchemaV1, [{
    key: "save",
    value: function save(visualChannels, parents) {
      // only save field and scale of each channel
      var _parents$slice11 = parents.slice(-1),
          _parents$slice12 = (0, _slicedToArray2["default"])(_parents$slice11, 1),
          layer = _parents$slice12[0];

      return (0, _defineProperty2["default"])({}, this.key, Object.keys(visualChannels).reduce( //  save channel to null if didn't select any field
      function (accu, key) {
        var _objectSpread8;

        return _objectSpread({}, accu, (_objectSpread8 = {}, (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].field, layer.config[visualChannels[key].field] ? (0, _lodash["default"])(layer.config[visualChannels[key].field], ['name', 'type']) : null), (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].scale, layer.config[visualChannels[key].scale]), _objectSpread8));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(vc, parents, accumulator) {
      // fold channels into config
      var _parents$slice13 = parents.slice(-1),
          _parents$slice14 = (0, _slicedToArray2["default"])(_parents$slice13, 1),
          layer = _parents$slice14[0];

      var modified = visualChannelModificationV1[layer.type] ? visualChannelModificationV1[layer.type](vc, parents, accumulator) : {};
      return _objectSpread({}, accumulator, {
        config: _objectSpread({}, accumulator.config || {}, {}, vc, {}, modified)
      });
    }
  }]);
  return VisualChannelSchemaV1;
}(_schema["default"]);

var visConfigModificationV1 = {
  point: function point(visConfig, parents, accumulated) {
    var modified = {};

    var _parents$slice15 = parents.slice(-2, -1),
        _parents$slice16 = (0, _slicedToArray2["default"])(_parents$slice15, 1),
        layer = _parents$slice16[0];

    var isOld = !visConfig.hasOwnProperty('filled') && !visConfig.strokeColor && !visConfig.strokeColorRange;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (visConfig.outline) {
        // point layer now supports both outline and fill
        // for older schema where filled has not been added to point layer
        // set it to false
        modified.filled = false;
      }
    }

    return modified;
  },
  geojson: function geojson(visConfig, parents, accumulated) {
    // is points?
    var modified = {};

    var _parents$slice17 = parents.slice(-2, -1),
        _parents$slice18 = (0, _slicedToArray2["default"])(_parents$slice17, 1),
        layer = _parents$slice18[0];

    var isOld = layer.visualChannels && !layer.visualChannels.hasOwnProperty('strokeColorField') && !visConfig.strokeColor && !visConfig.strokeColorRange; // make our best guess if this geojson layer contains point

    var isPoint = layer.visualChannels && layer.visualChannels.radiusField || visConfig && visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (isPoint) {
        // if is point, set stroke to false
        modified.filled = true;
        modified.stroked = false;
      }
    }

    return modified;
  }
};

var VisConfigSchemaV1 = /*#__PURE__*/function (_Schema11) {
  (0, _inherits2["default"])(VisConfigSchemaV1, _Schema11);

  var _super11 = _createSuper(VisConfigSchemaV1);

  function VisConfigSchemaV1() {
    var _this8;

    (0, _classCallCheck2["default"])(this, VisConfigSchemaV1);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this8 = _super11.call.apply(_super11, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this8), "key", 'visConfig');
    return _this8;
  }

  (0, _createClass2["default"])(VisConfigSchemaV1, [{
    key: "load",
    value: function load(visConfig, parents, accumulated) {
      var _parents$slice19 = parents.slice(-2, -1),
          _parents$slice20 = (0, _slicedToArray2["default"])(_parents$slice19, 1),
          layer = _parents$slice20[0];

      var modified = visConfigModificationV1[layer.type] ? visConfigModificationV1[layer.type](visConfig, parents, accumulated) : {};
      return {
        visConfig: _objectSpread({}, visConfig, {}, modified)
      };
    }
  }]);
  return VisConfigSchemaV1;
}(_schema["default"]);

var layerPropsV1 = {
  id: null,
  type: null,
  config: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    key: 'config',
    properties: {
      dataId: null,
      label: null,
      color: null,
      columns: new ColumnSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'columns'
      }),
      isVisible: null,
      visConfig: new VisConfigSchemaV1({
        version: _versions.VERSIONS.v1
      }),
      textLabel: new TextLabelSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'textLabel'
      })
    }
  }),
  visualChannels: new VisualChannelSchemaV1({
    version: _versions.VERSIONS.v1,
    key: 'visualChannels'
  })
};
exports.layerPropsV1 = layerPropsV1;

var LayerSchemaV0 = /*#__PURE__*/function (_Schema12) {
  (0, _inherits2["default"])(LayerSchemaV0, _Schema12);

  var _super12 = _createSuper(LayerSchemaV0);

  function LayerSchemaV0() {
    var _this9;

    (0, _classCallCheck2["default"])(this, LayerSchemaV0);

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    _this9 = _super12.call.apply(_super12, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "key", 'layers');
    return _this9;
  }

  (0, _createClass2["default"])(LayerSchemaV0, [{
    key: "save",
    value: function save(layers, parents) {
      var _this10 = this;

      var _parents$slice21 = parents.slice(-1),
          _parents$slice22 = (0, _slicedToArray2["default"])(_parents$slice21, 1),
          visState = _parents$slice22[0];

      return (0, _defineProperty2["default"])({}, this.key, visState.layerOrder.reduce(function (saved, index) {
        // save layers according to their rendering order
        var layer = layers[index];

        if (layer.isValidToSave()) {
          saved.push(_this10.savePropertiesOrApplySchema(layer).layers);
        }

        return saved;
      }, []));
    }
  }, {
    key: "load",
    value: function load(layers) {
      var _this11 = this;

      return (0, _defineProperty2["default"])({}, this.key, layers.map(function (layer) {
        return _this11.loadPropertiesOrApplySchema(layer, layers).layers;
      }));
    }
  }]);
  return LayerSchemaV0;
}(_schema["default"]);

var FilterSchemaV0 = /*#__PURE__*/function (_Schema13) {
  (0, _inherits2["default"])(FilterSchemaV0, _Schema13);

  var _super13 = _createSuper(FilterSchemaV0);

  function FilterSchemaV0() {
    var _this12;

    (0, _classCallCheck2["default"])(this, FilterSchemaV0);

    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    _this12 = _super13.call.apply(_super13, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this12), "key", 'filters');
    return _this12;
  }

  (0, _createClass2["default"])(FilterSchemaV0, [{
    key: "save",
    value: function save(filters) {
      var _this13 = this;

      return {
        filters: filters.filter(_filterUtils.isValidFilterValue).map(function (filter) {
          return _this13.savePropertiesOrApplySchema(filter).filters;
        })
      };
    }
  }, {
    key: "load",
    value: function load(filters) {
      return {
        filters: filters
      };
    }
  }]);
  return FilterSchemaV0;
}(_schema["default"]);

var interactionPropsV0 = ['tooltip', 'brush'];

var InteractionSchemaV0 = /*#__PURE__*/function (_Schema14) {
  (0, _inherits2["default"])(InteractionSchemaV0, _Schema14);

  var _super14 = _createSuper(InteractionSchemaV0);

  function InteractionSchemaV0() {
    var _this14;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV0);

    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    _this14 = _super14.call.apply(_super14, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "key", 'interactionConfig');
    return _this14;
  }

  (0, _createClass2["default"])(InteractionSchemaV0, [{
    key: "save",
    value: function save(interactionConfig) {
      return (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread({}, accu, {}, interactionConfig[key].enabled ? (0, _defineProperty2["default"])({}, key, interactionConfig[key].config) : {});
      }, {}));
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      // convert v0 -> v1
      // return enabled: false if disabled,
      return (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread({}, accu, {}, (0, _defineProperty2["default"])({}, key, _objectSpread({}, interactionConfig[key] || {}, {
          enabled: Boolean(interactionConfig[key])
        })));
      }, {}));
    }
  }]);
  return InteractionSchemaV0;
}(_schema["default"]);

var interactionPropsV1 = [].concat(interactionPropsV0, ['coordinate']);

var InteractionSchemaV1 = /*#__PURE__*/function (_Schema15) {
  (0, _inherits2["default"])(InteractionSchemaV1, _Schema15);

  var _super15 = _createSuper(InteractionSchemaV1);

  function InteractionSchemaV1() {
    var _this15;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV1);

    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    _this15 = _super15.call.apply(_super15, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this15), "key", 'interactionConfig');
    return _this15;
  }

  (0, _createClass2["default"])(InteractionSchemaV1, [{
    key: "save",
    value: function save(interactionConfig) {
      // save config even if disabled,
      return (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, _objectSpread({}, interactionConfig[key].config, {
          enabled: interactionConfig[key].enabled
        })));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      return (0, _defineProperty2["default"])({}, this.key, interactionConfig);
    }
  }]);
  return InteractionSchemaV1;
}(_schema["default"]);

var filterPropsV0 = {
  dataId: null,
  id: null,
  name: null,
  type: null,
  value: null,
  enlarged: null
};
exports.filterPropsV0 = filterPropsV0;

var DimensionFieldSchema = /*#__PURE__*/function (_Schema16) {
  (0, _inherits2["default"])(DimensionFieldSchema, _Schema16);

  var _super16 = _createSuper(DimensionFieldSchema);

  function DimensionFieldSchema() {
    (0, _classCallCheck2["default"])(this, DimensionFieldSchema);
    return _super16.apply(this, arguments);
  }

  (0, _createClass2["default"])(DimensionFieldSchema, [{
    key: "save",
    value: function save(field) {
      return (0, _defineProperty2["default"])({}, this.key, field ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field) {
      return (0, _defineProperty2["default"])({}, this.key, field);
    }
  }]);
  return DimensionFieldSchema;
}(_schema["default"]);

exports.DimensionFieldSchema = DimensionFieldSchema;

var SplitMapsSchema = /*#__PURE__*/function (_Schema17) {
  (0, _inherits2["default"])(SplitMapsSchema, _Schema17);

  var _super17 = _createSuper(SplitMapsSchema);

  function SplitMapsSchema() {
    (0, _classCallCheck2["default"])(this, SplitMapsSchema);
    return _super17.apply(this, arguments);
  }

  (0, _createClass2["default"])(SplitMapsSchema, [{
    key: "convertLayerSettings",
    value: function convertLayerSettings(accu, _ref17) {
      var _ref18 = (0, _slicedToArray2["default"])(_ref17, 2),
          key = _ref18[0],
          value = _ref18[1];

      if (typeof value === 'boolean') {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, value));
      } else if (value && (0, _typeof2["default"])(value) === 'object' && value.isAvailable) {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, Boolean(value.isVisible)));
      }

      return accu;
    }
  }, {
    key: "load",
    value: function load(splitMaps) {
      var _this16 = this;

      // previous splitMaps Schema {layers: {layerId: {isVisible, isAvailable}}}
      if (!Array.isArray(splitMaps) || !splitMaps.length) {
        return {
          splitMaps: []
        };
      }

      return {
        splitMaps: splitMaps.map(function (settings) {
          return _objectSpread({}, settings, {
            layers: Object.entries(settings.layers || {}).reduce(_this16.convertLayerSettings, {})
          });
        })
      };
    }
  }]);
  return SplitMapsSchema;
}(_schema["default"]);

exports.SplitMapsSchema = SplitMapsSchema;

var filterPropsV1 = _objectSpread({}, filterPropsV0, {
  plotType: null,
  yAxis: new DimensionFieldSchema({
    version: _versions.VERSIONS.v1,
    key: 'yAxis',
    properties: {
      name: null,
      type: null
    }
  }),
  // polygon filter properties
  layerId: null
});

exports.filterPropsV1 = filterPropsV1;
var propertiesV0 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: filterPropsV0
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: layerPropsV0
  }),
  interactionConfig: new InteractionSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: interactionPropsV0
  }),
  layerBlending: null
};
exports.propertiesV0 = propertiesV0;
var propertiesV1 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: filterPropsV1
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: layerPropsV1
  }),
  interactionConfig: new InteractionSchemaV1({
    version: _versions.VERSIONS.v1,
    properties: interactionPropsV1
  }),
  layerBlending: null,
  splitMaps: new SplitMapsSchema({
    key: 'splitMaps',
    version: _versions.VERSIONS.v1
  }),
  animationConfig: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    properties: {
      currentTime: null,
      speed: null
    },
    key: 'animationConfig'
  })
};
exports.propertiesV1 = propertiesV1;
var visStateSchemaV0 = new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'visState'
});
exports.visStateSchemaV0 = visStateSchemaV0;
var visStateSchemaV1 = new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'visState'
});
exports.visStateSchemaV1 = visStateSchemaV1;
var visStateSchema = (_visStateSchema = {}, (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v0, {
  save: function save(toSave) {
    return visStateSchemaV0.save(toSave);
  },
  load: function load(toLoad) {
    return visStateSchemaV1.load(visStateSchemaV0.load(toLoad).visState);
  }
}), (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v1, visStateSchemaV1), _visStateSchema); // test load v0

exports.visStateSchema = visStateSchema;
var _default = visStateSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Zpcy1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiZGltZW5zaW9uUHJvcHNWMCIsImdlb2pzb25TaXplRmllbGRWMFRvVjEiLCJjb25maWciLCJkZWZhdWx0UmFpdWRzIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwidmlzQ29uZmlnIiwiZXh0cnVkZWQiLCJzdHJva2VkIiwicmFkaXVzIiwicmFkaXVzUmFuZ2UiLCJzb21lIiwiZCIsImkiLCJEaW1lbnNpb25GaWVsZFNjaGVtYVYwIiwiVkVSU0lPTlMiLCJ2MCIsImZpZWxkIiwia2V5Iiwic2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwicGFyZW50cyIsImFjY3VtdWxhdGVkIiwic2xpY2UiLCJmaWVsZE5hbWUiLCJ0eXBlIiwidmlzdWFsQ2hhbm5lbHMiLCJTY2hlbWEiLCJEaW1lbnNpb25TY2FsZVNjaGVtYVYwIiwic2NhbGUiLCJMYXllckNvbmZpZ1NjaGVtYVYwIiwic2F2ZWQiLCJMYXllckNvbHVtbnNTY2hlbWFWMCIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsInZhbHVlIiwiTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0ZWRDb25maWciLCJMYXllclZpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0b3IiLCJyZW5hbWUiLCJnZW9qc29uIiwiZWxldmF0aW9uUmFuZ2UiLCJwcm9wVG9SZW5hbWUiLCJMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIiwibGF5ZXJQcm9wc1YwIiwiaWQiLCJkYXRhSWQiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiY29sb3JGaWVsZCIsInByb3BlcnRpZXMiLCJjb2xvclNjYWxlIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiZW5hYmxlM2QiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaXNBZ2dyZWdhdGVkIiwiQ29sdW1uU2NoZW1hVjEiLCJzdGF0ZSIsImNrZXkiLCJUZXh0TGFiZWxTY2hlbWFWMSIsInRleHRMYWJlbCIsIm1hcCIsInRsIiwiQXJyYXkiLCJpc0FycmF5IiwidmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxIiwicG9pbnQiLCJ2YyIsImxheWVyIiwib3V0bGluZSIsImhhc093blByb3BlcnR5Iiwic3Ryb2tlQ29sb3JGaWVsZCIsInN0cm9rZUNvbG9yU2NhbGUiLCJpc09sZCIsImlzUG9pbnQiLCJyYWRpdXNGaWVsZCIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIiwibW9kaWZpZWQiLCJ2aXNDb25maWdNb2RpZmljYXRpb25WMSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlQ29sb3JSYW5nZSIsImNvbG9yUmFuZ2UiLCJmaWxsZWQiLCJWaXNDb25maWdTY2hlbWFWMSIsImxheWVyUHJvcHNWMSIsInZlcnNpb24iLCJ2MSIsIkxheWVyU2NoZW1hVjAiLCJsYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVyT3JkZXIiLCJpbmRleCIsImlzVmFsaWRUb1NhdmUiLCJwdXNoIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwiRmlsdGVyU2NoZW1hVjAiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaW50ZXJhY3Rpb25Qcm9wc1YwIiwiSW50ZXJhY3Rpb25TY2hlbWFWMCIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlZCIsIkJvb2xlYW4iLCJpbnRlcmFjdGlvblByb3BzVjEiLCJJbnRlcmFjdGlvblNjaGVtYVYxIiwiZmlsdGVyUHJvcHNWMCIsIm5hbWUiLCJlbmxhcmdlZCIsIkRpbWVuc2lvbkZpZWxkU2NoZW1hIiwiU3BsaXRNYXBzU2NoZW1hIiwiaXNBdmFpbGFibGUiLCJzcGxpdE1hcHMiLCJsZW5ndGgiLCJzZXR0aW5ncyIsImVudHJpZXMiLCJjb252ZXJ0TGF5ZXJTZXR0aW5ncyIsImZpbHRlclByb3BzVjEiLCJwbG90VHlwZSIsInlBeGlzIiwibGF5ZXJJZCIsInByb3BlcnRpZXNWMCIsImxheWVyQmxlbmRpbmciLCJwcm9wZXJ0aWVzVjEiLCJhbmltYXRpb25Db25maWciLCJjdXJyZW50VGltZSIsInNwZWVkIiwidmlzU3RhdGVTY2hlbWFWMCIsInZpc1N0YXRlU2NoZW1hVjEiLCJ2aXNTdGF0ZVNjaGVtYSIsInNhdmUiLCJ0b1NhdmUiLCJsb2FkIiwidG9Mb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7QUFJTyxJQUFNQSxnQkFBZ0IsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULENBQXpCLEMsQ0FFUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxTQUFTQyxzQkFBVCxDQUFnQ0MsTUFBaEMsRUFBd0M7QUFDdEMsTUFBTUMsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixDQUEzQixDQUZzQyxDQUl0Qzs7QUFDQSxNQUFJRixNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLFFBQXJCLEVBQStCO0FBQzdCLFdBQU8sYUFBUDtBQUNELEdBUHFDLENBU3RDOzs7QUFDQSxNQUFJSixNQUFNLENBQUNHLFNBQVAsQ0FBaUJFLE9BQXJCLEVBQThCO0FBQzVCLFdBQU8sV0FBUDtBQUNELEdBWnFDLENBY3RDO0FBQ0E7OztBQUNBLE1BQ0VMLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkcsTUFBakIsS0FBNEJMLGFBQTVCLElBQ0FELE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkksV0FBakIsQ0FBNkJDLElBQTdCLENBQWtDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsS0FBS1Asa0JBQWtCLENBQUNRLENBQUQsQ0FBbEM7QUFBQSxHQUFsQyxDQUZGLEVBR0U7QUFDQSxXQUFPLGFBQVA7QUFDRDs7QUFFRCxTQUFPLFdBQVA7QUFD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RTtBQU5xQixHQUFYO0FBbEJTLENBQXJCOztBQTRCQSxJQUFNcUgsZ0JBQWdCLEdBQUcsSUFBSTdHLGtCQUFKLENBQVc7QUFDekNtRSxFQUFBQSxPQUFPLEVBQUU5RSxtQkFBU0MsRUFEdUI7QUFFekNzQyxFQUFBQSxVQUFVLEVBQUUyRSxZQUY2QjtBQUd6Qy9HLEVBQUFBLEdBQUcsRUFBRTtBQUhvQyxDQUFYLENBQXpCOztBQU1BLElBQU1zSCxnQkFBZ0IsR0FBRyxJQUFJOUcsa0JBQUosQ0FBVztBQUN6Q21FLEVBQUFBLE9BQU8sRUFBRTlFLG1CQUFTK0UsRUFEdUI7QUFFekN4QyxFQUFBQSxVQUFVLEVBQUU2RSxZQUY2QjtBQUd6Q2pILEVBQUFBLEdBQUcsRUFBRTtBQUhvQyxDQUFYLENBQXpCOztBQU1BLElBQU11SCxjQUFjLDRFQUN4QjFILG1CQUFTQyxFQURlLEVBQ1Y7QUFDYjBILEVBQUFBLElBQUksRUFBRSxjQUFBQyxNQUFNO0FBQUEsV0FBSUosZ0JBQWdCLENBQUNHLElBQWpCLENBQXNCQyxNQUF0QixDQUFKO0FBQUEsR0FEQztBQUViQyxFQUFBQSxJQUFJLEVBQUUsY0FBQUMsTUFBTTtBQUFBLFdBQUlMLGdCQUFnQixDQUFDSSxJQUFqQixDQUFzQkwsZ0JBQWdCLENBQUNLLElBQWpCLENBQXNCQyxNQUF0QixFQUE4QjVDLFFBQXBELENBQUo7QUFBQTtBQUZDLENBRFUscURBS3hCbEYsbUJBQVMrRSxFQUxlLEVBS1YwQyxnQkFMVSxtQkFBcEIsQyxDQVFQOzs7ZUFDZUMsYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcclxuaW1wb3J0IHtWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XHJcbmltcG9ydCB7aXNWYWxpZEZpbHRlclZhbHVlfSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xyXG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XHJcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xyXG5cclxuLyoqXHJcbiAqIFYwIFNjaGVtYVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBkaW1lbnNpb25Qcm9wc1YwID0gWyduYW1lJywgJ3R5cGUnXTtcclxuXHJcbi8vIGluIHYwIGdlb2pzb24gdGhlcmUgaXMgb25seSBzaXplRmllbGRcclxuXHJcbi8vIGluIHYxIGdlb2pzb25cclxuLy8gc3Ryb2tlIGJhc2Ugb24gLT4gc2l6ZUZpZWxkXHJcbi8vIGhlaWdodCBiYXNlZCBvbiAtPiBoZWlnaHRGaWVsZFxyXG4vLyByYWRpdXMgYmFzZWQgb24gLT4gcmFkaXVzRmllbGRcclxuLy8gaGVyZSB3ZSBtYWtlIG91ciB3aXJlZHN0IGd1ZXNzIG9uIHdoaWNoIGNoYW5uZWwgc2l6ZUZpZWxkIGJlbG9uZ3MgdG9cclxuZnVuY3Rpb24gZ2VvanNvblNpemVGaWVsZFYwVG9WMShjb25maWcpIHtcclxuICBjb25zdCBkZWZhdWx0UmFpdWRzID0gMTA7XHJcbiAgY29uc3QgZGVmYXVsdFJhZGl1c1JhbmdlID0gWzAsIDUwXTtcclxuXHJcbiAgLy8gaWYgZXh0cnVkZWQsIHNpemVGaWVsZCBpcyBtb3N0IGxpa2VseSB1c2VkIGZvciBoZWlnaHRcclxuICBpZiAoY29uZmlnLnZpc0NvbmZpZy5leHRydWRlZCkge1xyXG4gICAgcmV0dXJuICdoZWlnaHRGaWVsZCc7XHJcbiAgfVxyXG5cclxuICAvLyBpZiBzaG93IHN0cm9rZSBlbmFibGVkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3Igc3Ryb2tlXHJcbiAgaWYgKGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xyXG4gICAgcmV0dXJuICdzaXplRmllbGQnO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgcmFkaXVzIGNoYW5nZWQsIG9yIHJhZGl1cyBSYW5nZSBDaGFuZ2VkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3IgcmFkaXVzXHJcbiAgLy8gdGhpcyBpcyB0aGUgbW9zdCB1bnJlbGlhYmxlIGd1ZXNzLCB0aGF0J3Mgd2h5IHdlIHB1dCBpdCBpbiB0aGUgZW5kXHJcbiAgaWYgKFxyXG4gICAgY29uZmlnLnZpc0NvbmZpZy5yYWRpdXMgIT09IGRlZmF1bHRSYWl1ZHMgfHxcclxuICAgIGNvbmZpZy52aXNDb25maWcucmFkaXVzUmFuZ2Uuc29tZSgoZCwgaSkgPT4gZCAhPT0gZGVmYXVsdFJhZGl1c1JhbmdlW2ldKVxyXG4gICkge1xyXG4gICAgcmV0dXJuICdyYWRpdXNGaWVsZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJ3NpemVGaWVsZCc7XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29uZmlnXHJcbmNsYXNzIERpbWVuc2lvbkZpZWxkU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcclxuICBzYXZlKGZpZWxkKSB7XHJcbiAgICAvLyBzaG91bGQgbm90IGJlIGNhbGxlZCBhbnltb3JlXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbdGhpcy5rZXldOiBmaWVsZCAhPT0gbnVsbCA/IHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGZpZWxkKVt0aGlzLmtleV0gOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbG9hZChmaWVsZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcclxuICAgIGNvbnN0IFtjb25maWddID0gcGFyZW50cy5zbGljZSgtMSk7XHJcbiAgICBsZXQgZmllbGROYW1lID0gdGhpcy5rZXk7XHJcbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdnZW9qc29uJyAmJiB0aGlzLmtleSA9PT0gJ3NpemVGaWVsZCcgJiYgZmllbGQpIHtcclxuICAgICAgZmllbGROYW1lID0gZ2VvanNvblNpemVGaWVsZFYwVG9WMShjb25maWcpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9sZCBpbnRvIHZpc3VhbENoYW5uZWxzIHRvIGJlIGxvYWQgYnkgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aXN1YWxDaGFubmVsczoge1xyXG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC52aXN1YWxDaGFubmVscyB8fCB7fSksXHJcbiAgICAgICAgW2ZpZWxkTmFtZV06IGZpZWxkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBEaW1lbnNpb25TY2FsZVNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcclxuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XHJcbiAgc2F2ZShzY2FsZSkge1xyXG4gICAgcmV0dXJuIHtbdGhpcy5rZXldOiBzY2FsZX07XHJcbiAgfVxyXG4gIGxvYWQoc2NhbGUsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XHJcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xyXG4gICAgLy8gZm9sZCBpbnRvIHZpc3VhbENoYW5uZWxzIHRvIGJlIGxvYWQgYnkgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXHJcbiAgICBpZiAodGhpcy5rZXkgPT09ICdzaXplU2NhbGUnICYmIGNvbmZpZy50eXBlID09PSAnZ2VvanNvbicpIHtcclxuICAgICAgLy8gc2l6ZVNjYWxlIG5vdyBzcGxpdCBpbnRvIHJhZGl1c1NjYWxlLCBoZWlnaHRTY2FsZVxyXG4gICAgICAvLyBubyB1c2VyIGN1c3RvbWl6YXRpb24sIGp1c3QgdXNlIGRlZmF1bHRcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZpc3VhbENoYW5uZWxzOiB7XHJcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLnZpc3VhbENoYW5uZWxzIHx8IHt9KSxcclxuICAgICAgICBbdGhpcy5rZXldOiBzY2FsZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZ1xyXG5jbGFzcyBMYXllckNvbmZpZ1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcclxuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XHJcbiAgbG9hZChzYXZlZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcclxuICAgIC8vIGZvbGQgdjAgbGF5ZXIgcHJvcGVydHkgaW50byBjb25maWcua2V5XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICAuLi4oYWNjdW11bGF0ZWQuY29uZmlnIHx8IHt9KSxcclxuICAgICAgICBbdGhpcy5rZXldOiBzYXZlZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbHVtbnNcclxuLy8gb25seSByZXR1cm4gY29sdW1uIHZhbHVlIGZvciBlYWNoIGNvbHVtblxyXG5jbGFzcyBMYXllckNvbHVtbnNTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xyXG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XHJcbiAgICAvLyBmb2xkIHYwIGxheWVyIHByb3BlcnR5IGludG8gY29uZmlnLmtleSwgZmxhdHRlbiBjb2x1bW5zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICAuLi4oYWNjdW11bGF0ZWQuY29uZmlnIHx8IHt9KSxcclxuICAgICAgICBjb2x1bW5zOiBPYmplY3Qua2V5cyhzYXZlZCkucmVkdWNlKFxyXG4gICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgICAgW2tleV06IHNhdmVkW2tleV0udmFsdWVcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAge31cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyB1c2VkIHRvIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29uZmlnLnZpc0NvbmZpZ1xyXG5jbGFzcyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcclxuICBsb2FkKHNhdmVkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xyXG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy52aXNDb25maWdcclxuICAgIGNvbnN0IGFjY3VtdWxhdGVkQ29uZmlnID0gYWNjdW11bGF0ZWQuY29uZmlnIHx8IHt9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgLi4uYWNjdW11bGF0ZWRDb25maWcsXHJcbiAgICAgICAgdmlzQ29uZmlnOiB7XHJcbiAgICAgICAgICAuLi4oYWNjdW11bGF0ZWRDb25maWcudmlzQ29uZmlnIHx8IHt9KSxcclxuICAgICAgICAgIFt0aGlzLmtleV06IHNhdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTGF5ZXJWaXNDb25maWdTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xyXG4gIGtleSA9ICd2aXNDb25maWcnO1xyXG5cclxuICBsb2FkKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0b3IpIHtcclxuICAgIGNvbnN0IFtjb25maWddID0gcGFyZW50cy5zbGljZSgtMSk7XHJcbiAgICBjb25zdCByZW5hbWUgPSB7XHJcbiAgICAgIGdlb2pzb246IHtcclxuICAgICAgICBleHRydWRlZDogJ2VuYWJsZTNkJyxcclxuICAgICAgICBlbGV2YXRpb25SYW5nZTogJ2hlaWdodFJhbmdlJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25maWcudHlwZSBpbiByZW5hbWUpIHtcclxuICAgICAgY29uc3QgcHJvcFRvUmVuYW1lID0gcmVuYW1lW2NvbmZpZy50eXBlXTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIC4uLihhY2N1bXVsYXRvci5jb25maWcgfHwge30pLFxyXG4gICAgICAgICAgdmlzQ29uZmlnOiBPYmplY3Qua2V5cyh2aXNDb25maWcpLnJlZHVjZShcclxuICAgICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgICAgICAgIC4uLihwcm9wVG9SZW5hbWVba2V5XVxyXG4gICAgICAgICAgICAgICAgPyB7W3Byb3BUb1JlbmFtZVtrZXldXTogdmlzQ29uZmlnW2tleV19XHJcbiAgICAgICAgICAgICAgICA6IHtba2V5XTogdmlzQ29uZmlnW2tleV19KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAge31cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXHJcbiAgICAgICAgdmlzQ29uZmlnXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIGV4dGVuZHMgU2NoZW1hIHtcclxuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XHJcbiAgbG9hZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFYwIC0+IFYxIENoYW5nZXNcclxuICogLSBsYXllciBpcyBub3cgYSBjbGFzc1xyXG4gKiAtIGNvbmZpZyBzYXZlZCBpbiBhIGNvbmZpZyBvYmplY3RcclxuICogLSBpZCwgdHlwZSwgaXNBZ2dyZWdhdGVkIGlzIG91dHNpZGUgbGF5ZXIuY29uZmlnXHJcbiAqIC0gdmlzdWFsQ2hhbm5lbHMgaXMgb3V0c2lkZSBjb25maWcsIGl0IGRlZmluZXMgYXZhaWxhYmxlIHZpc3VhbCBjaGFubmVsIGFuZFxyXG4gKiAgIHByb3BlcnR5IG5hbWVzIGZvciBmaWVsZCwgc2NhbGUsIGRvbWFpbiBhbmQgcmFuZ2Ugb2YgZWFjaCB2aXN1YWwgY2hhbmVsLlxyXG4gKiAtIGVuYWJsZTNkLCBjb2xvckFnZ3JlZ2F0aW9uIGFuZCBzaXplQWdncmVnYXRpb24gYXJlIG1vdmVkIGludG8gdmlzQ29uZmlnXHJcbiAqIC0gR2VvanNvbkxheWVyIC0gYWRkZWQgaGVpZ2h0LCByYWRpdXMgc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsYXllclByb3BzVjAgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgdHlwZTogbnVsbCxcclxuXHJcbiAgLy8gbW92ZSBpbnRvIGxheWVyLmNvbmZpZ1xyXG4gIGRhdGFJZDogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2RhdGFJZCd9KSxcclxuICBsYWJlbDogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2xhYmVsJ30pLFxyXG4gIGNvbG9yOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnY29sb3InfSksXHJcbiAgaXNWaXNpYmxlOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnaXNWaXNpYmxlJ30pLFxyXG5cclxuICAvLyBjb252ZXJ0IHZpc0NvbmZpZ1xyXG4gIHZpc0NvbmZpZzogbmV3IExheWVyVmlzQ29uZmlnU2NoZW1hVjAoe2tleTogJ3Zpc0NvbmZpZyd9KSxcclxuXHJcbiAgLy8gbW92ZSBpbnRvIGxheWVyLmNvbmZpZ1xyXG4gIC8vIGZsYXR0ZW5cclxuICBjb2x1bW5zOiBuZXcgTGF5ZXJDb2x1bW5zU2NoZW1hVjAoKSxcclxuXHJcbiAgLy8gc2F2ZSBpbnRvIHZpc3VhbENoYW5uZWxzXHJcbiAgY29sb3JGaWVsZDogbmV3IERpbWVuc2lvbkZpZWxkU2NoZW1hVjAoe1xyXG4gICAgcHJvcGVydGllczogZGltZW5zaW9uUHJvcHNWMCxcclxuICAgIGtleTogJ2NvbG9yRmllbGQnXHJcbiAgfSksXHJcbiAgY29sb3JTY2FsZTogbmV3IERpbWVuc2lvblNjYWxlU2NoZW1hVjAoe1xyXG4gICAga2V5OiAnY29sb3JTY2FsZSdcclxuICB9KSxcclxuICBzaXplRmllbGQ6IG5ldyBEaW1lbnNpb25GaWVsZFNjaGVtYVYwKHtcclxuICAgIHByb3BlcnRpZXM6IGRpbWVuc2lvblByb3BzVjAsXHJcbiAgICBrZXk6ICdzaXplRmllbGQnXHJcbiAgfSksXHJcbiAgc2l6ZVNjYWxlOiBuZXcgRGltZW5zaW9uU2NhbGVTY2hlbWFWMCh7XHJcbiAgICBrZXk6ICdzaXplU2NhbGUnXHJcbiAgfSksXHJcblxyXG4gIC8vIG1vdmUgaW50byBjb25maWcudmlzQ29uZmlnXHJcbiAgZW5hYmxlM2Q6IG5ldyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAoe2tleTogJ2VuYWJsZTNkJ30pLFxyXG4gIGNvbG9yQWdncmVnYXRpb246IG5ldyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAoe1xyXG4gICAga2V5OiAnY29sb3JBZ2dyZWdhdGlvbidcclxuICB9KSxcclxuICBzaXplQWdncmVnYXRpb246IG5ldyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAoe2tleTogJ3NpemVBZ2dyZWdhdGlvbid9KSxcclxuXHJcbiAgLy8gZGVsZXRlXHJcbiAgaXNBZ2dyZWdhdGVkOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFEZWxldGVWMCgpXHJcbn07XHJcblxyXG4vKipcclxuICogVjEgU2NoZW1hXHJcbiAqL1xyXG5jbGFzcyBDb2x1bW5TY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XHJcbiAgc2F2ZShjb2x1bW5zLCBzdGF0ZSkge1xyXG4gICAgLy8gc3RhcnRpbmcgZnJvbSB2MSwgb25seSBzYXZlIGNvbHVtbiB2YWx1ZVxyXG4gICAgLy8gZmllbGRJZHggd2lsbCBiZSBjYWxjdWxhdGVkIGR1cmluZyBtZXJnZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogT2JqZWN0LmtleXMoY29sdW1ucykucmVkdWNlKFxyXG4gICAgICAgIChhY2N1LCBja2V5KSA9PiAoe1xyXG4gICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgIFtja2V5XTogY29sdW1uc1tja2V5XS52YWx1ZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsb2FkKGNvbHVtbnMpIHtcclxuICAgIHJldHVybiB7Y29sdW1uc307XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUZXh0TGFiZWxTY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XHJcbiAgc2F2ZSh0ZXh0TGFiZWwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt0aGlzLmtleV06IHRleHRMYWJlbC5tYXAodGwgPT4gKHtcclxuICAgICAgICAuLi50bCxcclxuICAgICAgICBmaWVsZDogdGwuZmllbGQgPyBwaWNrKHRsLmZpZWxkLCBbJ25hbWUnLCAndHlwZSddKSA6IG51bGxcclxuICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbG9hZCh0ZXh0TGFiZWwpIHtcclxuICAgIHJldHVybiB7dGV4dExhYmVsOiBBcnJheS5pc0FycmF5KHRleHRMYWJlbCkgPyB0ZXh0TGFiZWwgOiBbdGV4dExhYmVsXX07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB2aXN1YWxDaGFubmVsTW9kaWZpY2F0aW9uVjEgPSB7XHJcbiAgcG9pbnQ6ICh2YywgcGFyZW50cywgYWNjdW11bGF0b3IpID0+IHtcclxuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0xKTtcclxuXHJcbiAgICBpZiAobGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5vdXRsaW5lICYmIHZjLmNvbG9yRmllbGQgJiYgIXZjLmhhc093blByb3BlcnR5KCdzdHJva2VDb2xvckZpZWxkJykpIHtcclxuICAgICAgLy8gcG9pbnQgbGF5ZXIgbm93IHN1cHBvcnRzIGJvdGggb3V0bGluZSBhbmQgZmlsbFxyXG4gICAgICAvLyBmb3Igb2xkZXIgc2NoZW1hIHdoZXJlIGZpbGxlZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gcG9pbnQgbGF5ZXJcclxuICAgICAgLy8gY29weSBjb2xvckZpZWxkLCBjb2xvclNjYWxlIHRvIHN0cm9rZUNvbG9yRmllbGQsIGFuZCBzdHJva2VDb2xvclNjYWxlXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogdmMuY29sb3JGaWVsZCxcclxuICAgICAgICBzdHJva2VDb2xvclNjYWxlOiB2Yy5jb2xvclNjYWxlLFxyXG4gICAgICAgIGNvbG9yRmllbGQ6IG51bGwsXHJcbiAgICAgICAgY29sb3JTY2FsZTogJ3F1YW50aWxlJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgZ2VvanNvbjogKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikgPT4ge1xyXG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xyXG4gICAgY29uc3QgaXNPbGQgPSAhdmMuaGFzT3duUHJvcGVydHkoJ3N0cm9rZUNvbG9yRmllbGQnKTtcclxuICAgIC8vIG1ha2Ugb3VyIGJlc3QgZ3Vlc3MgaWYgdGhpcyBnZW9qc29uIGxheWVyIGNvbnRhaW5zIHBvaW50XHJcbiAgICBjb25zdCBpc1BvaW50ID1cclxuICAgICAgdmMucmFkaXVzRmllbGQgfHwgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5yYWRpdXMgIT09IExBWUVSX1ZJU19DT05GSUdTLnJhZGl1cy5kZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgaWYgKGlzT2xkICYmICFpc1BvaW50ICYmIGxheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xyXG4gICAgICAvLyBpZiBzdHJva2VkIGlzIHRydWUsIGNvcHkgY29sb3IgY29uZmlnIHRvIHN0cm9rZSBjb2xvciBjb25maWdcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdHJva2VDb2xvckZpZWxkOiB2Yy5jb2xvckZpZWxkLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yU2NhbGU6IHZjLmNvbG9yU2NhbGVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiBWMTogc2F2ZSBbZmllbGRdOiB7bmFtZSwgdHlwZX0sIFtzY2FsZV06ICcnIGZvciBlYWNoIGNoYW5uZWxcclxuICovXHJcbmNsYXNzIFZpc3VhbENoYW5uZWxTY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XHJcbiAgc2F2ZSh2aXN1YWxDaGFubmVscywgcGFyZW50cykge1xyXG4gICAgLy8gb25seSBzYXZlIGZpZWxkIGFuZCBzY2FsZSBvZiBlYWNoIGNoYW5uZWxcclxuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0xKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt0aGlzLmtleV06IE9iamVjdC5rZXlzKHZpc3VhbENoYW5uZWxzKS5yZWR1Y2UoXHJcbiAgICAgICAgLy8gIHNhdmUgY2hhbm5lbCB0byBudWxsIGlmIGRpZG4ndCBzZWxlY3QgYW55IGZpZWxkXHJcbiAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICBbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF06IGxheWVyLmNvbmZpZ1t2aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXVxyXG4gICAgICAgICAgICA/IHBpY2sobGF5ZXIuY29uZmlnW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdLCBbJ25hbWUnLCAndHlwZSddKVxyXG4gICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICBbdmlzdWFsQ2hhbm5lbHNba2V5XS5zY2FsZV06IGxheWVyLmNvbmZpZ1t2aXN1YWxDaGFubmVsc1trZXldLnNjYWxlXVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG4gIGxvYWQodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSB7XHJcbiAgICAvLyBmb2xkIGNoYW5uZWxzIGludG8gY29uZmlnXHJcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XHJcbiAgICBjb25zdCBtb2RpZmllZCA9IHZpc3VhbENoYW5uZWxNb2RpZmljYXRpb25WMVtsYXllci50eXBlXVxyXG4gICAgICA/IHZpc3VhbENoYW5uZWxNb2RpZmljYXRpb25WMVtsYXllci50eXBlXSh2YywgcGFyZW50cywgYWNjdW11bGF0b3IpXHJcbiAgICAgIDoge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uYWNjdW11bGF0b3IsXHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIC4uLihhY2N1bXVsYXRvci5jb25maWcgfHwge30pLFxyXG4gICAgICAgIC4uLnZjLFxyXG4gICAgICAgIC4uLm1vZGlmaWVkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbmNvbnN0IHZpc0NvbmZpZ01vZGlmaWNhdGlvblYxID0ge1xyXG4gIHBvaW50OiAodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkgPT4ge1xyXG4gICAgY29uc3QgbW9kaWZpZWQgPSB7fTtcclxuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XHJcbiAgICBjb25zdCBpc09sZCA9XHJcbiAgICAgICF2aXNDb25maWcuaGFzT3duUHJvcGVydHkoJ2ZpbGxlZCcpICYmICF2aXNDb25maWcuc3Ryb2tlQ29sb3IgJiYgIXZpc0NvbmZpZy5zdHJva2VDb2xvclJhbmdlO1xyXG4gICAgaWYgKGlzT2xkKSB7XHJcbiAgICAgIC8vIGNvbG9yIGNvbG9yICYgY29sb3IgcmFuZ2UgdG8gc3Ryb2tlIGNvbG9yXHJcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yID0gbGF5ZXIuY29uZmlnLmNvbG9yO1xyXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvclJhbmdlID0gY2xvbmVEZWVwKHZpc0NvbmZpZy5jb2xvclJhbmdlKTtcclxuICAgICAgaWYgKHZpc0NvbmZpZy5vdXRsaW5lKSB7XHJcbiAgICAgICAgLy8gcG9pbnQgbGF5ZXIgbm93IHN1cHBvcnRzIGJvdGggb3V0bGluZSBhbmQgZmlsbFxyXG4gICAgICAgIC8vIGZvciBvbGRlciBzY2hlbWEgd2hlcmUgZmlsbGVkIGhhcyBub3QgYmVlbiBhZGRlZCB0byBwb2ludCBsYXllclxyXG4gICAgICAgIC8vIHNldCBpdCB0byBmYWxzZVxyXG4gICAgICAgIG1vZGlmaWVkLmZpbGxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vZGlmaWVkO1xyXG4gIH0sXHJcbiAgZ2VvanNvbjogKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpID0+IHtcclxuICAgIC8vIGlzIHBvaW50cz9cclxuICAgIGNvbnN0IG1vZGlmaWVkID0ge307XHJcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xyXG4gICAgY29uc3QgaXNPbGQgPVxyXG4gICAgICBsYXllci52aXN1YWxDaGFubmVscyAmJlxyXG4gICAgICAhbGF5ZXIudmlzdWFsQ2hhbm5lbHMuaGFzT3duUHJvcGVydHkoJ3N0cm9rZUNvbG9yRmllbGQnKSAmJlxyXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yICYmXHJcbiAgICAgICF2aXNDb25maWcuc3Ryb2tlQ29sb3JSYW5nZTtcclxuICAgIC8vIG1ha2Ugb3VyIGJlc3QgZ3Vlc3MgaWYgdGhpcyBnZW9qc29uIGxheWVyIGNvbnRhaW5zIHBvaW50XHJcbiAgICBjb25zdCBpc1BvaW50ID1cclxuICAgICAgKGxheWVyLnZpc3VhbENoYW5uZWxzICYmIGxheWVyLnZpc3VhbENoYW5uZWxzLnJhZGl1c0ZpZWxkKSB8fFxyXG4gICAgICAodmlzQ29uZmlnICYmIHZpc0NvbmZpZy5yYWRpdXMgIT09IExBWUVSX1ZJU19DT05GSUdTLnJhZGl1cy5kZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgIGlmIChpc09sZCkge1xyXG4gICAgICAvLyBjb2xvciBjb2xvciAmIGNvbG9yIHJhbmdlIHRvIHN0cm9rZSBjb2xvclxyXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvciA9IGxheWVyLmNvbmZpZy5jb2xvcjtcclxuICAgICAgbW9kaWZpZWQuc3Ryb2tlQ29sb3JSYW5nZSA9IGNsb25lRGVlcCh2aXNDb25maWcuY29sb3JSYW5nZSk7XHJcbiAgICAgIGlmIChpc1BvaW50KSB7XHJcbiAgICAgICAgLy8gaWYgaXMgcG9pbnQsIHNldCBzdHJva2UgdG8gZmFsc2VcclxuICAgICAgICBtb2RpZmllZC5maWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1vZGlmaWVkLnN0cm9rZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtb2RpZmllZDtcclxuICB9XHJcbn07XHJcblxyXG5jbGFzcyBWaXNDb25maWdTY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XHJcbiAga2V5ID0gJ3Zpc0NvbmZpZyc7XHJcblxyXG4gIGxvYWQodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xyXG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTIsIC0xKTtcclxuICAgIGNvbnN0IG1vZGlmaWVkID0gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cclxuICAgICAgPyB2aXNDb25maWdNb2RpZmljYXRpb25WMVtsYXllci50eXBlXSh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdGVkKVxyXG4gICAgICA6IHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZpc0NvbmZpZzoge1xyXG4gICAgICAgIC4uLnZpc0NvbmZpZyxcclxuICAgICAgICAuLi5tb2RpZmllZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxheWVyUHJvcHNWMSA9IHtcclxuICBpZDogbnVsbCxcclxuICB0eXBlOiBudWxsLFxyXG4gIGNvbmZpZzogbmV3IFNjaGVtYSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgIGtleTogJ2NvbmZpZycsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIGRhdGFJZDogbnVsbCxcclxuICAgICAgbGFiZWw6IG51bGwsXHJcbiAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICBjb2x1bW5zOiBuZXcgQ29sdW1uU2NoZW1hVjEoe1xyXG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxyXG4gICAgICAgIGtleTogJ2NvbHVtbnMnXHJcbiAgICAgIH0pLFxyXG4gICAgICBpc1Zpc2libGU6IG51bGwsXHJcbiAgICAgIHZpc0NvbmZpZzogbmV3IFZpc0NvbmZpZ1NjaGVtYVYxKHtcclxuICAgICAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MVxyXG4gICAgICB9KSxcclxuICAgICAgdGV4dExhYmVsOiBuZXcgVGV4dExhYmVsU2NoZW1hVjEoe1xyXG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxyXG4gICAgICAgIGtleTogJ3RleHRMYWJlbCdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KSxcclxuICB2aXN1YWxDaGFubmVsczogbmV3IFZpc3VhbENoYW5uZWxTY2hlbWFWMSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgIGtleTogJ3Zpc3VhbENoYW5uZWxzJ1xyXG4gIH0pXHJcbn07XHJcblxyXG5jbGFzcyBMYXllclNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcclxuICBrZXkgPSAnbGF5ZXJzJztcclxuXHJcbiAgc2F2ZShsYXllcnMsIHBhcmVudHMpIHtcclxuICAgIGNvbnN0IFt2aXNTdGF0ZV0gPSBwYXJlbnRzLnNsaWNlKC0xKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbdGhpcy5rZXldOiB2aXNTdGF0ZS5sYXllck9yZGVyLnJlZHVjZSgoc2F2ZWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gc2F2ZSBsYXllcnMgYWNjb3JkaW5nIHRvIHRoZWlyIHJlbmRlcmluZyBvcmRlclxyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW2luZGV4XTtcclxuICAgICAgICBpZiAobGF5ZXIuaXNWYWxpZFRvU2F2ZSgpKSB7XHJcbiAgICAgICAgICBzYXZlZC5wdXNoKHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGxheWVyKS5sYXllcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2F2ZWQ7XHJcbiAgICAgIH0sIFtdKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxvYWQobGF5ZXJzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbdGhpcy5rZXldOiBsYXllcnMubWFwKGxheWVyID0+IHRoaXMubG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGxheWVyLCBsYXllcnMpLmxheWVycylcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGaWx0ZXJTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAga2V5ID0gJ2ZpbHRlcnMnO1xyXG4gIHNhdmUoZmlsdGVycykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZmlsdGVyczogZmlsdGVyc1xyXG4gICAgICAgIC5maWx0ZXIoaXNWYWxpZEZpbHRlclZhbHVlKVxyXG4gICAgICAgIC5tYXAoZmlsdGVyID0+IHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGZpbHRlcikuZmlsdGVycylcclxuICAgIH07XHJcbiAgfVxyXG4gIGxvYWQoZmlsdGVycykge1xyXG4gICAgcmV0dXJuIHtmaWx0ZXJzfTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGludGVyYWN0aW9uUHJvcHNWMCA9IFsndG9vbHRpcCcsICdicnVzaCddO1xyXG5cclxuY2xhc3MgSW50ZXJhY3Rpb25TY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcclxuXHJcbiAgc2F2ZShpbnRlcmFjdGlvbkNvbmZpZykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogdGhpcy5wcm9wZXJ0aWVzLnJlZHVjZShcclxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xyXG4gICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgIC4uLihpbnRlcmFjdGlvbkNvbmZpZ1trZXldLmVuYWJsZWQgPyB7W2tleV06IGludGVyYWN0aW9uQ29uZmlnW2tleV0uY29uZmlnfSA6IHt9KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG4gIGxvYWQoaW50ZXJhY3Rpb25Db25maWcpIHtcclxuICAgIC8vIGNvbnZlcnQgdjAgLT4gdjFcclxuICAgIC8vIHJldHVybiBlbmFibGVkOiBmYWxzZSBpZiBkaXNhYmxlZCxcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllcy5yZWR1Y2UoXHJcbiAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgIFtrZXldOiB7XHJcbiAgICAgICAgICAgICAgLi4uKGludGVyYWN0aW9uQ29uZmlnW2tleV0gfHwge30pLFxyXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IEJvb2xlYW4oaW50ZXJhY3Rpb25Db25maWdba2V5XSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbnRlcmFjdGlvblByb3BzVjEgPSBbLi4uaW50ZXJhY3Rpb25Qcm9wc1YwLCAnY29vcmRpbmF0ZSddO1xyXG5cclxuY2xhc3MgSW50ZXJhY3Rpb25TY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XHJcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcclxuXHJcbiAgc2F2ZShpbnRlcmFjdGlvbkNvbmZpZykge1xyXG4gICAgLy8gc2F2ZSBjb25maWcgZXZlbiBpZiBkaXNhYmxlZCxcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllcy5yZWR1Y2UoXHJcbiAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICBba2V5XToge1xyXG4gICAgICAgICAgICAuLi5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZyxcclxuICAgICAgICAgICAgZW5hYmxlZDogaW50ZXJhY3Rpb25Db25maWdba2V5XS5lbmFibGVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAge31cclxuICAgICAgKVxyXG4gICAgfTtcclxuICB9XHJcbiAgbG9hZChpbnRlcmFjdGlvbkNvbmZpZykge1xyXG4gICAgcmV0dXJuIHtbdGhpcy5rZXldOiBpbnRlcmFjdGlvbkNvbmZpZ307XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyUHJvcHNWMCA9IHtcclxuICBkYXRhSWQ6IG51bGwsXHJcbiAgaWQ6IG51bGwsXHJcbiAgbmFtZTogbnVsbCxcclxuICB0eXBlOiBudWxsLFxyXG4gIHZhbHVlOiBudWxsLFxyXG4gIGVubGFyZ2VkOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uRmllbGRTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIHNhdmUoZmllbGQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt0aGlzLmtleV06IGZpZWxkID8gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZmllbGQpW3RoaXMua2V5XSA6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsb2FkKGZpZWxkKSB7XHJcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IGZpZWxkfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGxpdE1hcHNTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIGNvbnZlcnRMYXllclNldHRpbmdzKGFjY3UsIFtrZXksIHZhbHVlXSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5pc0F2YWlsYWJsZSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgW2tleV06IEJvb2xlYW4odmFsdWUuaXNWaXNpYmxlKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY3U7XHJcbiAgfVxyXG5cclxuICBsb2FkKHNwbGl0TWFwcykge1xyXG4gICAgLy8gcHJldmlvdXMgc3BsaXRNYXBzIFNjaGVtYSB7bGF5ZXJzOiB7bGF5ZXJJZDoge2lzVmlzaWJsZSwgaXNBdmFpbGFibGV9fX1cclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3BsaXRNYXBzKSB8fCAhc3BsaXRNYXBzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge3NwbGl0TWFwczogW119O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwbGl0TWFwczogc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiAoe1xyXG4gICAgICAgIC4uLnNldHRpbmdzLFxyXG4gICAgICAgIGxheWVyczogT2JqZWN0LmVudHJpZXMoc2V0dGluZ3MubGF5ZXJzIHx8IHt9KS5yZWR1Y2UodGhpcy5jb252ZXJ0TGF5ZXJTZXR0aW5ncywge30pXHJcbiAgICAgIH0pKVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJQcm9wc1YxID0ge1xyXG4gIC4uLmZpbHRlclByb3BzVjAsXHJcbiAgcGxvdFR5cGU6IG51bGwsXHJcbiAgeUF4aXM6IG5ldyBEaW1lbnNpb25GaWVsZFNjaGVtYSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgIGtleTogJ3lBeGlzJyxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgdHlwZTogbnVsbFxyXG4gICAgfVxyXG4gIH0pLFxyXG5cclxuICAvLyBwb2x5Z29uIGZpbHRlciBwcm9wZXJ0aWVzXHJcbiAgbGF5ZXJJZDogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMCA9IHtcclxuICBmaWx0ZXJzOiBuZXcgRmlsdGVyU2NoZW1hVjAoe1xyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXHJcbiAgICBwcm9wZXJ0aWVzOiBmaWx0ZXJQcm9wc1YwXHJcbiAgfSksXHJcbiAgbGF5ZXJzOiBuZXcgTGF5ZXJTY2hlbWFWMCh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcclxuICAgIHByb3BlcnRpZXM6IGxheWVyUHJvcHNWMFxyXG4gIH0pLFxyXG4gIGludGVyYWN0aW9uQ29uZmlnOiBuZXcgSW50ZXJhY3Rpb25TY2hlbWFWMCh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcclxuICAgIHByb3BlcnRpZXM6IGludGVyYWN0aW9uUHJvcHNWMFxyXG4gIH0pLFxyXG4gIGxheWVyQmxlbmRpbmc6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzVjEgPSB7XHJcbiAgZmlsdGVyczogbmV3IEZpbHRlclNjaGVtYVYwKHtcclxuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxyXG4gICAgcHJvcGVydGllczogZmlsdGVyUHJvcHNWMVxyXG4gIH0pLFxyXG4gIGxheWVyczogbmV3IExheWVyU2NoZW1hVjAoe1xyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAgICBwcm9wZXJ0aWVzOiBsYXllclByb3BzVjFcclxuICB9KSxcclxuICBpbnRlcmFjdGlvbkNvbmZpZzogbmV3IEludGVyYWN0aW9uU2NoZW1hVjEoe1xyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAgICBwcm9wZXJ0aWVzOiBpbnRlcmFjdGlvblByb3BzVjFcclxuICB9KSxcclxuICBsYXllckJsZW5kaW5nOiBudWxsLFxyXG4gIHNwbGl0TWFwczogbmV3IFNwbGl0TWFwc1NjaGVtYSh7XHJcbiAgICBrZXk6ICdzcGxpdE1hcHMnLFxyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjFcclxuICB9KSxcclxuICBhbmltYXRpb25Db25maWc6IG5ldyBTY2hlbWEoe1xyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIGN1cnJlbnRUaW1lOiBudWxsLFxyXG4gICAgICBzcGVlZDogbnVsbFxyXG4gICAgfSxcclxuICAgIGtleTogJ2FuaW1hdGlvbkNvbmZpZydcclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlU2NoZW1hVjAgPSBuZXcgU2NoZW1hKHtcclxuICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcclxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjAsXHJcbiAga2V5OiAndmlzU3RhdGUnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlU2NoZW1hVjEgPSBuZXcgU2NoZW1hKHtcclxuICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjEsXHJcbiAga2V5OiAndmlzU3RhdGUnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlU2NoZW1hID0ge1xyXG4gIFtWRVJTSU9OUy52MF06IHtcclxuICAgIHNhdmU6IHRvU2F2ZSA9PiB2aXNTdGF0ZVNjaGVtYVYwLnNhdmUodG9TYXZlKSxcclxuICAgIGxvYWQ6IHRvTG9hZCA9PiB2aXNTdGF0ZVNjaGVtYVYxLmxvYWQodmlzU3RhdGVTY2hlbWFWMC5sb2FkKHRvTG9hZCkudmlzU3RhdGUpXHJcbiAgfSxcclxuICBbVkVSU0lPTlMudjFdOiB2aXNTdGF0ZVNjaGVtYVYxXHJcbn07XHJcblxyXG4vLyB0ZXN0IGxvYWQgdjBcclxuZXhwb3J0IGRlZmF1bHQgdmlzU3RhdGVTY2hlbWE7XHJcbiJdfQ==