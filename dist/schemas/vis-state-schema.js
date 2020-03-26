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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Zpcy1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiZGltZW5zaW9uUHJvcHNWMCIsImdlb2pzb25TaXplRmllbGRWMFRvVjEiLCJjb25maWciLCJkZWZhdWx0UmFpdWRzIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwidmlzQ29uZmlnIiwiZXh0cnVkZWQiLCJzdHJva2VkIiwicmFkaXVzIiwicmFkaXVzUmFuZ2UiLCJzb21lIiwiZCIsImkiLCJEaW1lbnNpb25GaWVsZFNjaGVtYVYwIiwiVkVSU0lPTlMiLCJ2MCIsImZpZWxkIiwia2V5Iiwic2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwicGFyZW50cyIsImFjY3VtdWxhdGVkIiwic2xpY2UiLCJmaWVsZE5hbWUiLCJ0eXBlIiwidmlzdWFsQ2hhbm5lbHMiLCJTY2hlbWEiLCJEaW1lbnNpb25TY2FsZVNjaGVtYVYwIiwic2NhbGUiLCJMYXllckNvbmZpZ1NjaGVtYVYwIiwic2F2ZWQiLCJMYXllckNvbHVtbnNTY2hlbWFWMCIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsInZhbHVlIiwiTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0ZWRDb25maWciLCJMYXllclZpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0b3IiLCJyZW5hbWUiLCJnZW9qc29uIiwiZWxldmF0aW9uUmFuZ2UiLCJwcm9wVG9SZW5hbWUiLCJMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIiwibGF5ZXJQcm9wc1YwIiwiaWQiLCJkYXRhSWQiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiY29sb3JGaWVsZCIsInByb3BlcnRpZXMiLCJjb2xvclNjYWxlIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiZW5hYmxlM2QiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaXNBZ2dyZWdhdGVkIiwiQ29sdW1uU2NoZW1hVjEiLCJzdGF0ZSIsImNrZXkiLCJUZXh0TGFiZWxTY2hlbWFWMSIsInRleHRMYWJlbCIsIm1hcCIsInRsIiwiQXJyYXkiLCJpc0FycmF5IiwidmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxIiwicG9pbnQiLCJ2YyIsImxheWVyIiwib3V0bGluZSIsImhhc093blByb3BlcnR5Iiwic3Ryb2tlQ29sb3JGaWVsZCIsInN0cm9rZUNvbG9yU2NhbGUiLCJpc09sZCIsImlzUG9pbnQiLCJyYWRpdXNGaWVsZCIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIiwibW9kaWZpZWQiLCJ2aXNDb25maWdNb2RpZmljYXRpb25WMSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlQ29sb3JSYW5nZSIsImNvbG9yUmFuZ2UiLCJmaWxsZWQiLCJWaXNDb25maWdTY2hlbWFWMSIsImxheWVyUHJvcHNWMSIsInZlcnNpb24iLCJ2MSIsIkxheWVyU2NoZW1hVjAiLCJsYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVyT3JkZXIiLCJpbmRleCIsImlzVmFsaWRUb1NhdmUiLCJwdXNoIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwiRmlsdGVyU2NoZW1hVjAiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaW50ZXJhY3Rpb25Qcm9wc1YwIiwiSW50ZXJhY3Rpb25TY2hlbWFWMCIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlZCIsIkJvb2xlYW4iLCJpbnRlcmFjdGlvblByb3BzVjEiLCJJbnRlcmFjdGlvblNjaGVtYVYxIiwiZmlsdGVyUHJvcHNWMCIsIm5hbWUiLCJlbmxhcmdlZCIsIkRpbWVuc2lvbkZpZWxkU2NoZW1hIiwiU3BsaXRNYXBzU2NoZW1hIiwiaXNBdmFpbGFibGUiLCJzcGxpdE1hcHMiLCJsZW5ndGgiLCJzZXR0aW5ncyIsImVudHJpZXMiLCJjb252ZXJ0TGF5ZXJTZXR0aW5ncyIsImZpbHRlclByb3BzVjEiLCJwbG90VHlwZSIsInlBeGlzIiwibGF5ZXJJZCIsInByb3BlcnRpZXNWMCIsImxheWVyQmxlbmRpbmciLCJwcm9wZXJ0aWVzVjEiLCJhbmltYXRpb25Db25maWciLCJjdXJyZW50VGltZSIsInNwZWVkIiwidmlzU3RhdGVTY2hlbWFWMCIsInZpc1N0YXRlU2NoZW1hVjEiLCJ2aXNTdGF0ZVNjaGVtYSIsInNhdmUiLCJ0b1NhdmUiLCJsb2FkIiwidG9Mb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7QUFJTyxJQUFNQSxnQkFBZ0IsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULENBQXpCLEMsQ0FFUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxTQUFTQyxzQkFBVCxDQUFnQ0MsTUFBaEMsRUFBd0M7QUFDdEMsTUFBTUMsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixDQUEzQixDQUZzQyxDQUl0Qzs7QUFDQSxNQUFJRixNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLFFBQXJCLEVBQStCO0FBQzdCLFdBQU8sYUFBUDtBQUNELEdBUHFDLENBU3RDOzs7QUFDQSxNQUFJSixNQUFNLENBQUNHLFNBQVAsQ0FBaUJFLE9BQXJCLEVBQThCO0FBQzVCLFdBQU8sV0FBUDtBQUNELEdBWnFDLENBY3RDO0FBQ0E7OztBQUNBLE1BQ0VMLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkcsTUFBakIsS0FBNEJMLGFBQTVCLElBQ0FELE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkksV0FBakIsQ0FBNkJDLElBQTdCLENBQWtDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsS0FBS1Asa0JBQWtCLENBQUNRLENBQUQsQ0FBbEM7QUFBQSxHQUFsQyxDQUZGLEVBR0U7QUFDQSxXQUFPLGFBQVA7QUFDRDs7QUFFRCxTQUFPLFdBQVA7QUFDRCxDLENBRUQ7OztJQUNNQyxzQjs7Ozs7Ozs7Ozs7Ozs7O2dHQUNNQyxtQkFBU0MsRTs7Ozs7O3lCQUNkQyxLLEVBQU87QUFDVjtBQUNBLGtEQUNHLEtBQUtDLEdBRFIsRUFDY0QsS0FBSyxLQUFLLElBQVYsR0FBaUIsS0FBS0UsMkJBQUwsQ0FBaUNGLEtBQWpDLEVBQXdDLEtBQUtDLEdBQTdDLENBQWpCLEdBQXFFLElBRG5GO0FBR0Q7Ozt5QkFFSUQsSyxFQUFPRyxPLEVBQVNDLFcsRUFBYTtBQUFBLDJCQUNmRCxPQUFPLENBQUNFLEtBQVIsQ0FBYyxDQUFDLENBQWYsQ0FEZTtBQUFBO0FBQUEsVUFDekJuQixNQUR5Qjs7QUFFaEMsVUFBSW9CLFNBQVMsR0FBRyxLQUFLTCxHQUFyQjs7QUFDQSxVQUFJZixNQUFNLENBQUNxQixJQUFQLEtBQWdCLFNBQWhCLElBQTZCLEtBQUtOLEdBQUwsS0FBYSxXQUExQyxJQUF5REQsS0FBN0QsRUFBb0U7QUFDbEVNLFFBQUFBLFNBQVMsR0FBR3JCLHNCQUFzQixDQUFDQyxNQUFELENBQWxDO0FBQ0QsT0FMK0IsQ0FNaEM7OztBQUNBLGFBQU87QUFDTHNCLFFBQUFBLGNBQWMsb0JBQ1JKLFdBQVcsQ0FBQ0ksY0FBWixJQUE4QixFQUR0Qix1Q0FFWEYsU0FGVyxFQUVDTixLQUZEO0FBRFQsT0FBUDtBQU1EOzs7RUF0QmtDUyxrQjs7SUF5Qi9CQyxzQjs7Ozs7Ozs7Ozs7Ozs7O2lHQUNNWixtQkFBU0MsRTs7Ozs7O3lCQUNkWSxLLEVBQU87QUFDVixrREFBUyxLQUFLVixHQUFkLEVBQW9CVSxLQUFwQjtBQUNEOzs7eUJBQ0lBLEssRUFBT1IsTyxFQUFTQyxXLEVBQWE7QUFBQSw0QkFDZkQsT0FBTyxDQUFDRSxLQUFSLENBQWMsQ0FBQyxDQUFmLENBRGU7QUFBQTtBQUFBLFVBQ3pCbkIsTUFEeUIsdUJBRWhDOzs7QUFDQSxVQUFJLEtBQUtlLEdBQUwsS0FBYSxXQUFiLElBQTRCZixNQUFNLENBQUNxQixJQUFQLEtBQWdCLFNBQWhELEVBQTJEO0FBQ3pEO0FBQ0E7QUFDQSxlQUFPLEVBQVA7QUFDRDs7QUFFRCxhQUFPO0FBQ0xDLFFBQUFBLGNBQWMsb0JBQ1JKLFdBQVcsQ0FBQ0ksY0FBWixJQUE4QixFQUR0Qix1Q0FFWCxLQUFLUCxHQUZNLEVBRUFVLEtBRkE7QUFEVCxPQUFQO0FBTUQ7OztFQXBCa0NGLGtCLEdBdUJyQzs7O0lBQ01HLG1COzs7Ozs7Ozs7Ozs7Ozs7aUdBQ01kLG1CQUFTQyxFOzs7Ozs7eUJBQ2RjLEssRUFBT1YsTyxFQUFTQyxXLEVBQWE7QUFDaEM7QUFDQSxhQUFPO0FBQ0xsQixRQUFBQSxNQUFNLG9CQUNBa0IsV0FBVyxDQUFDbEIsTUFBWixJQUFzQixFQUR0Qix1Q0FFSCxLQUFLZSxHQUZGLEVBRVFZLEtBRlI7QUFERCxPQUFQO0FBTUQ7OztFQVYrQkosa0IsR0FhbEM7QUFDQTs7O0lBQ01LLG9COzs7Ozs7Ozs7Ozs7Ozs7aUdBQ01oQixtQkFBU0MsRTs7Ozs7O3lCQUNkYyxLLEVBQU9WLE8sRUFBU0MsVyxFQUFhO0FBQ2hDO0FBQ0EsYUFBTztBQUNMbEIsUUFBQUEsTUFBTSxvQkFDQWtCLFdBQVcsQ0FBQ2xCLE1BQVosSUFBc0IsRUFEdEI7QUFFSjZCLFVBQUFBLE9BQU8sRUFBRUMsTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLE1BQW5CLENBQ1AsVUFBQ0MsSUFBRCxFQUFPbEIsR0FBUDtBQUFBLHFDQUNLa0IsSUFETCx1Q0FFR2xCLEdBRkgsRUFFU1ksS0FBSyxDQUFDWixHQUFELENBQUwsQ0FBV21CLEtBRnBCO0FBQUEsV0FETyxFQUtQLEVBTE87QUFGTDtBQURELE9BQVA7QUFZRDs7O0VBaEJnQ1gsa0IsR0FtQm5DOzs7SUFDTVksOEI7Ozs7Ozs7Ozs7Ozs7OztpR0FDTXZCLG1CQUFTQyxFOzs7Ozs7eUJBQ2RjLEssRUFBT1YsTyxFQUFTQyxXLEVBQWE7QUFDaEM7QUFDQSxVQUFNa0IsaUJBQWlCLEdBQUdsQixXQUFXLENBQUNsQixNQUFaLElBQXNCLEVBQWhEO0FBQ0EsYUFBTztBQUNMQSxRQUFBQSxNQUFNLG9CQUNEb0MsaUJBREM7QUFFSmpDLFVBQUFBLFNBQVMsb0JBQ0hpQyxpQkFBaUIsQ0FBQ2pDLFNBQWxCLElBQStCLEVBRDVCLHVDQUVOLEtBQUtZLEdBRkMsRUFFS1ksS0FGTDtBQUZMO0FBREQsT0FBUDtBQVNEOzs7RUFkMENKLGtCOztJQWlCdkNjLHNCOzs7Ozs7Ozs7Ozs7Ozs7aUdBQ016QixtQkFBU0MsRTs2RkFDYixXOzs7Ozs7eUJBRURWLFMsRUFBV2MsTyxFQUFTcUIsVyxFQUFhO0FBQUEsNEJBQ25CckIsT0FBTyxDQUFDRSxLQUFSLENBQWMsQ0FBQyxDQUFmLENBRG1CO0FBQUE7QUFBQSxVQUM3Qm5CLE1BRDZCOztBQUVwQyxVQUFNdUMsTUFBTSxHQUFHO0FBQ2JDLFFBQUFBLE9BQU8sRUFBRTtBQUNQcEMsVUFBQUEsUUFBUSxFQUFFLFVBREg7QUFFUHFDLFVBQUFBLGNBQWMsRUFBRTtBQUZUO0FBREksT0FBZjs7QUFPQSxVQUFJekMsTUFBTSxDQUFDcUIsSUFBUCxJQUFla0IsTUFBbkIsRUFBMkI7QUFDekIsWUFBTUcsWUFBWSxHQUFHSCxNQUFNLENBQUN2QyxNQUFNLENBQUNxQixJQUFSLENBQTNCO0FBQ0EsZUFBTztBQUNMckIsVUFBQUEsTUFBTSxvQkFDQXNDLFdBQVcsQ0FBQ3RDLE1BQVosSUFBc0IsRUFEdEI7QUFFSkcsWUFBQUEsU0FBUyxFQUFFMkIsTUFBTSxDQUFDQyxJQUFQLENBQVk1QixTQUFaLEVBQXVCNkIsTUFBdkIsQ0FDVCxVQUFDQyxJQUFELEVBQU9sQixHQUFQO0FBQUEsdUNBQ0trQixJQURMLE1BRU1TLFlBQVksQ0FBQzNCLEdBQUQsQ0FBWix3Q0FDRTJCLFlBQVksQ0FBQzNCLEdBQUQsQ0FEZCxFQUNzQlosU0FBUyxDQUFDWSxHQUFELENBRC9CLHlDQUVFQSxHQUZGLEVBRVFaLFNBQVMsQ0FBQ1ksR0FBRCxDQUZqQixDQUZOO0FBQUEsYUFEUyxFQU9ULEVBUFM7QUFGUDtBQURELFNBQVA7QUFjRDs7QUFFRCxhQUFPO0FBQ0xmLFFBQUFBLE1BQU0sb0JBQ0FzQyxXQUFXLENBQUN0QyxNQUFaLElBQXNCLEVBRHRCO0FBRUpHLFVBQUFBLFNBQVMsRUFBVEE7QUFGSTtBQURELE9BQVA7QUFNRDs7O0VBckNrQ29CLGtCOztJQXdDL0JvQix5Qjs7Ozs7Ozs7Ozs7Ozs7O2lHQUNNL0IsbUJBQVNDLEU7Ozs7Ozt5QkFDZHFCLEssRUFBTztBQUNWLGFBQU8sRUFBUDtBQUNEOzs7RUFKcUNYLGtCO0FBT3hDOzs7Ozs7Ozs7Ozs7QUFXTyxJQUFNcUIsWUFBWSxHQUFHO0FBQzFCQyxFQUFBQSxFQUFFLEVBQUUsSUFEc0I7QUFFMUJ4QixFQUFBQSxJQUFJLEVBQUUsSUFGb0I7QUFJMUI7QUFDQXlCLEVBQUFBLE1BQU0sRUFBRSxJQUFJcEIsbUJBQUosQ0FBd0I7QUFBQ1gsSUFBQUEsR0FBRyxFQUFFO0FBQU4sR0FBeEIsQ0FMa0I7QUFNMUJnQyxFQUFBQSxLQUFLLEVBQUUsSUFBSXJCLG1CQUFKLENBQXdCO0FBQUNYLElBQUFBLEdBQUcsRUFBRTtBQUFOLEdBQXhCLENBTm1CO0FBTzFCaUMsRUFBQUEsS0FBSyxFQUFFLElBQUl0QixtQkFBSixDQUF3QjtBQUFDWCxJQUFBQSxHQUFHLEVBQUU7QUFBTixHQUF4QixDQVBtQjtBQVExQmtDLEVBQUFBLFNBQVMsRUFBRSxJQUFJdkIsbUJBQUosQ0FBd0I7QUFBQ1gsSUFBQUEsR0FBRyxFQUFFO0FBQU4sR0FBeEIsQ0FSZTtBQVUxQjtBQUNBWixFQUFBQSxTQUFTLEVBQUUsSUFBSWtDLHNCQUFKLENBQTJCO0FBQUN0QixJQUFBQSxHQUFHLEVBQUU7QUFBTixHQUEzQixDQVhlO0FBYTFCO0FBQ0E7QUFDQWMsRUFBQUEsT0FBTyxFQUFFLElBQUlELG9CQUFKLEVBZmlCO0FBaUIxQjtBQUNBc0IsRUFBQUEsVUFBVSxFQUFFLElBQUl2QyxzQkFBSixDQUEyQjtBQUNyQ3dDLElBQUFBLFVBQVUsRUFBRXJELGdCQUR5QjtBQUVyQ2lCLElBQUFBLEdBQUcsRUFBRTtBQUZnQyxHQUEzQixDQWxCYztBQXNCMUJxQyxFQUFBQSxVQUFVLEVBQUUsSUFBSTVCLHNCQUFKLENBQTJCO0FBQ3JDVCxJQUFBQSxHQUFHLEVBQUU7QUFEZ0MsR0FBM0IsQ0F0QmM7QUF5QjFCc0MsRUFBQUEsU0FBUyxFQUFFLElBQUkxQyxzQkFBSixDQUEyQjtBQUNwQ3dDLElBQUFBLFVBQVUsRUFBRXJELGdCQUR3QjtBQUVwQ2lCLElBQUFBLEdBQUcsRUFBRTtBQUYrQixHQUEzQixDQXpCZTtBQTZCMUJ1QyxFQUFBQSxTQUFTLEVBQUUsSUFBSTlCLHNCQUFKLENBQTJCO0FBQ3BDVCxJQUFBQSxHQUFHLEVBQUU7QUFEK0IsR0FBM0IsQ0E3QmU7QUFpQzFCO0FBQ0F3QyxFQUFBQSxRQUFRLEVBQUUsSUFBSXBCLDhCQUFKLENBQW1DO0FBQUNwQixJQUFBQSxHQUFHLEVBQUU7QUFBTixHQUFuQyxDQWxDZ0I7QUFtQzFCeUMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFBSXJCLDhCQUFKLENBQW1DO0FBQ25EcEIsSUFBQUEsR0FBRyxFQUFFO0FBRDhDLEdBQW5DLENBbkNRO0FBc0MxQjBDLEVBQUFBLGVBQWUsRUFBRSxJQUFJdEIsOEJBQUosQ0FBbUM7QUFBQ3BCLElBQUFBLEdBQUcsRUFBRTtBQUFOLEdBQW5DLENBdENTO0FBd0MxQjtBQUNBMkMsRUFBQUEsWUFBWSxFQUFFLElBQUlmLHlCQUFKO0FBekNZLENBQXJCO0FBNENQOzs7Ozs7SUFHTWdCLGM7Ozs7Ozs7Ozs7Ozt5QkFDQzlCLE8sRUFBUytCLEssRUFBTztBQUNuQjtBQUNBO0FBQ0Esa0RBQ0csS0FBSzdDLEdBRFIsRUFDY2UsTUFBTSxDQUFDQyxJQUFQLENBQVlGLE9BQVosRUFBcUJHLE1BQXJCLENBQ1YsVUFBQ0MsSUFBRCxFQUFPNEIsSUFBUDtBQUFBLGlDQUNLNUIsSUFETCx1Q0FFRzRCLElBRkgsRUFFVWhDLE9BQU8sQ0FBQ2dDLElBQUQsQ0FBUCxDQUFjM0IsS0FGeEI7QUFBQSxPQURVLEVBS1YsRUFMVSxDQURkO0FBU0Q7Ozt5QkFFSUwsTyxFQUFTO0FBQ1osYUFBTztBQUFDQSxRQUFBQSxPQUFPLEVBQVBBO0FBQUQsT0FBUDtBQUNEOzs7RUFqQjBCTixrQjs7SUFvQnZCdUMsaUI7Ozs7Ozs7Ozs7Ozt5QkFDQ0MsUyxFQUFXO0FBQ2Qsa0RBQ0csS0FBS2hELEdBRFIsRUFDY2dELFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUFDLEVBQUU7QUFBQSxpQ0FDdkJBLEVBRHVCO0FBRTFCbkQsVUFBQUEsS0FBSyxFQUFFbUQsRUFBRSxDQUFDbkQsS0FBSCxHQUFXLHdCQUFLbUQsRUFBRSxDQUFDbkQsS0FBUixFQUFlLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBZixDQUFYLEdBQThDO0FBRjNCO0FBQUEsT0FBaEIsQ0FEZDtBQU1EOzs7eUJBRUlpRCxTLEVBQVc7QUFDZCxhQUFPO0FBQUNBLFFBQUFBLFNBQVMsRUFBRUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLFNBQWQsSUFBMkJBLFNBQTNCLEdBQXVDLENBQUNBLFNBQUQ7QUFBbkQsT0FBUDtBQUNEOzs7RUFaNkJ4QyxrQjs7QUFlaEMsSUFBTTZDLDJCQUEyQixHQUFHO0FBQ2xDQyxFQUFBQSxLQUFLLEVBQUUsZUFBQ0MsRUFBRCxFQUFLckQsT0FBTCxFQUFjcUIsV0FBZCxFQUE4QjtBQUFBLDBCQUNuQnJCLE9BQU8sQ0FBQ0UsS0FBUixDQUFjLENBQUMsQ0FBZixDQURtQjtBQUFBO0FBQUEsUUFDNUJvRCxLQUQ0Qjs7QUFHbkMsUUFBSUEsS0FBSyxDQUFDdkUsTUFBTixDQUFhRyxTQUFiLENBQXVCcUUsT0FBdkIsSUFBa0NGLEVBQUUsQ0FBQ3BCLFVBQXJDLElBQW1ELENBQUNvQixFQUFFLENBQUNHLGNBQUgsQ0FBa0Isa0JBQWxCLENBQXhELEVBQStGO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLGFBQU87QUFDTEMsUUFBQUEsZ0JBQWdCLEVBQUVKLEVBQUUsQ0FBQ3BCLFVBRGhCO0FBRUx5QixRQUFBQSxnQkFBZ0IsRUFBRUwsRUFBRSxDQUFDbEIsVUFGaEI7QUFHTEYsUUFBQUEsVUFBVSxFQUFFLElBSFA7QUFJTEUsUUFBQUEsVUFBVSxFQUFFO0FBSlAsT0FBUDtBQU1EOztBQUNELFdBQU8sRUFBUDtBQUNELEdBaEJpQztBQWlCbENaLEVBQUFBLE9BQU8sRUFBRSxpQkFBQzhCLEVBQUQsRUFBS3JELE9BQUwsRUFBY3FCLFdBQWQsRUFBOEI7QUFBQSwwQkFDckJyQixPQUFPLENBQUNFLEtBQVIsQ0FBYyxDQUFDLENBQWYsQ0FEcUI7QUFBQTtBQUFBLFFBQzlCb0QsS0FEOEI7O0FBRXJDLFFBQU1LLEtBQUssR0FBRyxDQUFDTixFQUFFLENBQUNHLGNBQUgsQ0FBa0Isa0JBQWxCLENBQWYsQ0FGcUMsQ0FHckM7O0FBQ0EsUUFBTUksT0FBTyxHQUNYUCxFQUFFLENBQUNRLFdBQUgsSUFBa0JQLEtBQUssQ0FBQ3ZFLE1BQU4sQ0FBYUcsU0FBYixDQUF1QkcsTUFBdkIsS0FBa0N5RSxnQ0FBa0J6RSxNQUFsQixDQUF5QjBFLFlBRC9FOztBQUdBLFFBQUlKLEtBQUssSUFBSSxDQUFDQyxPQUFWLElBQXFCTixLQUFLLENBQUN2RSxNQUFOLENBQWFHLFNBQWIsQ0FBdUJFLE9BQWhELEVBQXlEO0FBQ3ZEO0FBQ0EsYUFBTztBQUNMcUUsUUFBQUEsZ0JBQWdCLEVBQUVKLEVBQUUsQ0FBQ3BCLFVBRGhCO0FBRUx5QixRQUFBQSxnQkFBZ0IsRUFBRUwsRUFBRSxDQUFDbEI7QUFGaEIsT0FBUDtBQUlEOztBQUNELFdBQU8sRUFBUDtBQUNEO0FBaENpQyxDQUFwQztBQWtDQTs7OztJQUdNNkIscUI7Ozs7Ozs7Ozs7Ozt5QkFDQzNELGMsRUFBZ0JMLE8sRUFBUztBQUM1QjtBQUQ0Qiw2QkFFWkEsT0FBTyxDQUFDRSxLQUFSLENBQWMsQ0FBQyxDQUFmLENBRlk7QUFBQTtBQUFBLFVBRXJCb0QsS0FGcUI7O0FBRzVCLGtEQUNHLEtBQUt4RCxHQURSLEVBQ2NlLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVCxjQUFaLEVBQTRCVSxNQUE1QixFQUNWO0FBQ0EsZ0JBQUNDLElBQUQsRUFBT2xCLEdBQVA7QUFBQTs7QUFBQSxpQ0FDS2tCLElBREwseUVBRUdYLGNBQWMsQ0FBQ1AsR0FBRCxDQUFkLENBQW9CRCxLQUZ2QixFQUUrQnlELEtBQUssQ0FBQ3ZFLE1BQU4sQ0FBYXNCLGNBQWMsQ0FBQ1AsR0FBRCxDQUFkLENBQW9CRCxLQUFqQyxJQUN6Qix3QkFBS3lELEtBQUssQ0FBQ3ZFLE1BQU4sQ0FBYXNCLGNBQWMsQ0FBQ1AsR0FBRCxDQUFkLENBQW9CRCxLQUFqQyxDQUFMLEVBQThDLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBOUMsQ0FEeUIsR0FFekIsSUFKTixvREFLR1EsY0FBYyxDQUFDUCxHQUFELENBQWQsQ0FBb0JVLEtBTHZCLEVBSytCOEMsS0FBSyxDQUFDdkUsTUFBTixDQUFhc0IsY0FBYyxDQUFDUCxHQUFELENBQWQsQ0FBb0JVLEtBQWpDLENBTC9CO0FBQUEsT0FGVSxFQVNWLEVBVFUsQ0FEZDtBQWFEOzs7eUJBQ0k2QyxFLEVBQUlyRCxPLEVBQVNxQixXLEVBQWE7QUFDN0I7QUFENkIsNkJBRWJyQixPQUFPLENBQUNFLEtBQVIsQ0FBYyxDQUFDLENBQWYsQ0FGYTtBQUFBO0FBQUEsVUFFdEJvRCxLQUZzQjs7QUFHN0IsVUFBTVcsUUFBUSxHQUFHZCwyQkFBMkIsQ0FBQ0csS0FBSyxDQUFDbEQsSUFBUCxDQUEzQixHQUNiK0MsMkJBQTJCLENBQUNHLEtBQUssQ0FBQ2xELElBQVAsQ0FBM0IsQ0FBd0NpRCxFQUF4QyxFQUE0Q3JELE9BQTVDLEVBQXFEcUIsV0FBckQsQ0FEYSxHQUViLEVBRko7QUFJQSwrQkFDS0EsV0FETDtBQUVFdEMsUUFBQUEsTUFBTSxvQkFDQXNDLFdBQVcsQ0FBQ3RDLE1BQVosSUFBc0IsRUFEdEIsTUFFRHNFLEVBRkMsTUFHRFksUUFIQztBQUZSO0FBUUQ7OztFQWpDaUMzRCxrQjs7QUFtQ3BDLElBQU00RCx1QkFBdUIsR0FBRztBQUM5QmQsRUFBQUEsS0FBSyxFQUFFLGVBQUNsRSxTQUFELEVBQVljLE9BQVosRUFBcUJDLFdBQXJCLEVBQXFDO0FBQzFDLFFBQU1nRSxRQUFRLEdBQUcsRUFBakI7O0FBRDBDLDJCQUUxQmpFLE9BQU8sQ0FBQ0UsS0FBUixDQUFjLENBQUMsQ0FBZixFQUFrQixDQUFDLENBQW5CLENBRjBCO0FBQUE7QUFBQSxRQUVuQ29ELEtBRm1DOztBQUcxQyxRQUFNSyxLQUFLLEdBQ1QsQ0FBQ3pFLFNBQVMsQ0FBQ3NFLGNBQVYsQ0FBeUIsUUFBekIsQ0FBRCxJQUF1QyxDQUFDdEUsU0FBUyxDQUFDaUYsV0FBbEQsSUFBaUUsQ0FBQ2pGLFNBQVMsQ0FBQ2tGLGdCQUQ5RTs7QUFFQSxRQUFJVCxLQUFKLEVBQVc7QUFDVDtBQUNBTSxNQUFBQSxRQUFRLENBQUNFLFdBQVQsR0FBdUJiLEtBQUssQ0FBQ3ZFLE1BQU4sQ0FBYWdELEtBQXBDO0FBQ0FrQyxNQUFBQSxRQUFRLENBQUNHLGdCQUFULEdBQTRCLHlCQUFVbEYsU0FBUyxDQUFDbUYsVUFBcEIsQ0FBNUI7O0FBQ0EsVUFBSW5GLFNBQVMsQ0FBQ3FFLE9BQWQsRUFBdUI7QUFDckI7QUFDQTtBQUNBO0FBQ0FVLFFBQUFBLFFBQVEsQ0FBQ0ssTUFBVCxHQUFrQixLQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT0wsUUFBUDtBQUNELEdBbkI2QjtBQW9COUIxQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNyQyxTQUFELEVBQVljLE9BQVosRUFBcUJDLFdBQXJCLEVBQXFDO0FBQzVDO0FBQ0EsUUFBTWdFLFFBQVEsR0FBRyxFQUFqQjs7QUFGNEMsMkJBRzVCakUsT0FBTyxDQUFDRSxLQUFSLENBQWMsQ0FBQyxDQUFmLEVBQWtCLENBQUMsQ0FBbkIsQ0FINEI7QUFBQTtBQUFBLFFBR3JDb0QsS0FIcUM7O0FBSTVDLFFBQU1LLEtBQUssR0FDVEwsS0FBSyxDQUFDakQsY0FBTixJQUNBLENBQUNpRCxLQUFLLENBQUNqRCxjQUFOLENBQXFCbUQsY0FBckIsQ0FBb0Msa0JBQXBDLENBREQsSUFFQSxDQUFDdEUsU0FBUyxDQUFDaUYsV0FGWCxJQUdBLENBQUNqRixTQUFTLENBQUNrRixnQkFKYixDQUo0QyxDQVM1Qzs7QUFDQSxRQUFNUixPQUFPLEdBQ1ZOLEtBQUssQ0FBQ2pELGNBQU4sSUFBd0JpRCxLQUFLLENBQUNqRCxjQUFOLENBQXFCd0QsV0FBOUMsSUFDQzNFLFNBQVMsSUFBSUEsU0FBUyxDQUFDRyxNQUFWLEtBQXFCeUUsZ0NBQWtCekUsTUFBbEIsQ0FBeUIwRSxZQUY5RDs7QUFJQSxRQUFJSixLQUFKLEVBQVc7QUFDVDtBQUNBTSxNQUFBQSxRQUFRLENBQUNFLFdBQVQsR0FBdUJiLEtBQUssQ0FBQ3ZFLE1BQU4sQ0FBYWdELEtBQXBDO0FBQ0FrQyxNQUFBQSxRQUFRLENBQUNHLGdCQUFULEdBQTRCLHlCQUFVbEYsU0FBUyxDQUFDbUYsVUFBcEIsQ0FBNUI7O0FBQ0EsVUFBSVQsT0FBSixFQUFhO0FBQ1g7QUFDQUssUUFBQUEsUUFBUSxDQUFDSyxNQUFULEdBQWtCLElBQWxCO0FBQ0FMLFFBQUFBLFFBQVEsQ0FBQzdFLE9BQVQsR0FBbUIsS0FBbkI7QUFDRDtBQUNGOztBQUVELFdBQU82RSxRQUFQO0FBQ0Q7QUE5QzZCLENBQWhDOztJQWlETU0saUI7Ozs7Ozs7Ozs7Ozs7Ozs2RkFDRSxXOzs7Ozs7eUJBRURyRixTLEVBQVdjLE8sRUFBU0MsVyxFQUFhO0FBQUEsNkJBQ3BCRCxPQUFPLENBQUNFLEtBQVIsQ0FBYyxDQUFDLENBQWYsRUFBa0IsQ0FBQyxDQUFuQixDQURvQjtBQUFBO0FBQUEsVUFDN0JvRCxLQUQ2Qjs7QUFFcEMsVUFBTVcsUUFBUSxHQUFHQyx1QkFBdUIsQ0FBQ1osS0FBSyxDQUFDbEQsSUFBUCxDQUF2QixHQUNiOEQsdUJBQXVCLENBQUNaLEtBQUssQ0FBQ2xELElBQVAsQ0FBdkIsQ0FBb0NsQixTQUFwQyxFQUErQ2MsT0FBL0MsRUFBd0RDLFdBQXhELENBRGEsR0FFYixFQUZKO0FBSUEsYUFBTztBQUNMZixRQUFBQSxTQUFTLG9CQUNKQSxTQURJLE1BRUorRSxRQUZJO0FBREosT0FBUDtBQU1EOzs7RUFmNkIzRCxrQjs7QUFrQnpCLElBQU1rRSxZQUFZLEdBQUc7QUFDMUI1QyxFQUFBQSxFQUFFLEVBQUUsSUFEc0I7QUFFMUJ4QixFQUFBQSxJQUFJLEVBQUUsSUFGb0I7QUFHMUJyQixFQUFBQSxNQUFNLEVBQUUsSUFBSXVCLGtCQUFKLENBQVc7QUFDakJtRSxJQUFBQSxPQUFPLEVBQUU5RSxtQkFBUytFLEVBREQ7QUFFakI1RSxJQUFBQSxHQUFHLEVBQUUsUUFGWTtBQUdqQm9DLElBQUFBLFVBQVUsRUFBRTtBQUNWTCxNQUFBQSxNQUFNLEVBQUUsSUFERTtBQUVWQyxNQUFBQSxLQUFLLEVBQUUsSUFGRztBQUdWQyxNQUFBQSxLQUFLLEVBQUUsSUFIRztBQUlWbkIsTUFBQUEsT0FBTyxFQUFFLElBQUk4QixjQUFKLENBQW1CO0FBQzFCK0IsUUFBQUEsT0FBTyxFQUFFOUUsbUJBQVMrRSxFQURRO0FBRTFCNUUsUUFBQUEsR0FBRyxFQUFFO0FBRnFCLE9BQW5CLENBSkM7QUFRVmtDLE1BQUFBLFNBQVMsRUFBRSxJQVJEO0FBU1Y5QyxNQUFBQSxTQUFTLEVBQUUsSUFBSXFGLGlCQUFKLENBQXNCO0FBQy9CRSxRQUFBQSxPQUFPLEVBQUU5RSxtQkFBUytFO0FBRGEsT0FBdEIsQ0FURDtBQVlWNUIsTUFBQUEsU0FBUyxFQUFFLElBQUlELGlCQUFKLENBQXNCO0FBQy9CNEIsUUFBQUEsT0FBTyxFQUFFOUUsbUJBQVMrRSxFQURhO0FBRS9CNUUsUUFBQUEsR0FBRyxFQUFFO0FBRjBCLE9BQXRCO0FBWkQ7QUFISyxHQUFYLENBSGtCO0FBd0IxQk8sRUFBQUEsY0FBYyxFQUFFLElBQUkyRCxxQkFBSixDQUEwQjtBQUN4Q1MsSUFBQUEsT0FBTyxFQUFFOUUsbUJBQVMrRSxFQURzQjtBQUV4QzVFLElBQUFBLEdBQUcsRUFBRTtBQUZtQyxHQUExQjtBQXhCVSxDQUFyQjs7O0lBOEJENkUsYTs7Ozs7Ozs7Ozs7Ozs7OzZGQUNFLFE7Ozs7Ozt5QkFFREMsTSxFQUFRNUUsTyxFQUFTO0FBQUE7O0FBQUEsNkJBQ0RBLE9BQU8sQ0FBQ0UsS0FBUixDQUFjLENBQUMsQ0FBZixDQURDO0FBQUE7QUFBQSxVQUNiMkUsUUFEYTs7QUFHcEIsa0RBQ0csS0FBSy9FLEdBRFIsRUFDYytFLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQi9ELE1BQXBCLENBQTJCLFVBQUNMLEtBQUQsRUFBUXFFLEtBQVIsRUFBa0I7QUFDdkQ7QUFDQSxZQUFNekIsS0FBSyxHQUFHc0IsTUFBTSxDQUFDRyxLQUFELENBQXBCOztBQUNBLFlBQUl6QixLQUFLLENBQUMwQixhQUFOLEVBQUosRUFBMkI7QUFDekJ0RSxVQUFBQSxLQUFLLENBQUN1RSxJQUFOLENBQVcsT0FBSSxDQUFDbEYsMkJBQUwsQ0FBaUN1RCxLQUFqQyxFQUF3Q3NCLE1BQW5EO0FBQ0Q7O0FBQ0QsZUFBT2xFLEtBQVA7QUFDRCxPQVBXLEVBT1QsRUFQUyxDQURkO0FBVUQ7Ozt5QkFFSWtFLE0sRUFBUTtBQUFBOztBQUNYLGtEQUNHLEtBQUs5RSxHQURSLEVBQ2M4RSxNQUFNLENBQUM3QixHQUFQLENBQVcsVUFBQU8sS0FBSztBQUFBLGVBQUksT0FBSSxDQUFDNEIsMkJBQUwsQ0FBaUM1QixLQUFqQyxFQUF3Q3NCLE1BQXhDLEVBQWdEQSxNQUFwRDtBQUFBLE9BQWhCLENBRGQ7QUFHRDs7O0VBdEJ5QnRFLGtCOztJQXlCdEI2RSxjOzs7Ozs7Ozs7Ozs7Ozs7OEZBQ0UsUzs7Ozs7O3lCQUNEQyxPLEVBQVM7QUFBQTs7QUFDWixhQUFPO0FBQ0xBLFFBQUFBLE9BQU8sRUFBRUEsT0FBTyxDQUNiQyxNQURNLENBQ0NDLCtCQURELEVBRU52QyxHQUZNLENBRUYsVUFBQXNDLE1BQU07QUFBQSxpQkFBSSxPQUFJLENBQUN0RiwyQkFBTCxDQUFpQ3NGLE1BQWpDLEVBQXlDRCxPQUE3QztBQUFBLFNBRko7QUFESixPQUFQO0FBS0Q7Ozt5QkFDSUEsTyxFQUFTO0FBQ1osYUFBTztBQUFDQSxRQUFBQSxPQUFPLEVBQVBBO0FBQUQsT0FBUDtBQUNEOzs7RUFYMEI5RSxrQjs7QUFjN0IsSUFBTWlGLGtCQUFrQixHQUFHLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBM0I7O0lBRU1DLG1COzs7Ozs7Ozs7Ozs7Ozs7OEZBQ0UsbUI7Ozs7Ozt5QkFFREMsaUIsRUFBbUI7QUFDdEIsa0RBQ0csS0FBSzNGLEdBRFIsRUFDYyxLQUFLb0MsVUFBTCxDQUFnQm5CLE1BQWhCLENBQ1YsVUFBQ0MsSUFBRCxFQUFPbEIsR0FBUDtBQUFBLGlDQUNLa0IsSUFETCxNQUVNeUUsaUJBQWlCLENBQUMzRixHQUFELENBQWpCLENBQXVCNEYsT0FBdkIsd0NBQW1DNUYsR0FBbkMsRUFBeUMyRixpQkFBaUIsQ0FBQzNGLEdBQUQsQ0FBakIsQ0FBdUJmLE1BQWhFLElBQTBFLEVBRmhGO0FBQUEsT0FEVSxFQUtWLEVBTFUsQ0FEZDtBQVNEOzs7eUJBQ0kwRyxpQixFQUFtQjtBQUN0QjtBQUNBO0FBQ0Esa0RBQ0csS0FBSzNGLEdBRFIsRUFDYyxLQUFLb0MsVUFBTCxDQUFnQm5CLE1BQWhCLENBQ1YsVUFBQ0MsSUFBRCxFQUFPbEIsR0FBUDtBQUFBLGlDQUNLa0IsSUFETCwyQ0FHS2xCLEdBSEwsb0JBSVUyRixpQkFBaUIsQ0FBQzNGLEdBQUQsQ0FBakIsSUFBMEIsRUFKcEM7QUFLTTRGLFVBQUFBLE9BQU8sRUFBRUMsT0FBTyxDQUFDRixpQkFBaUIsQ0FBQzNGLEdBQUQsQ0FBbEI7QUFMdEI7QUFBQSxPQURVLEVBVVYsRUFWVSxDQURkO0FBY0Q7OztFQS9CK0JRLGtCOztBQWtDbEMsSUFBTXNGLGtCQUFrQixhQUFPTCxrQkFBUCxHQUEyQixZQUEzQixFQUF4Qjs7SUFFTU0sbUI7Ozs7Ozs7Ozs7Ozs7Ozs4RkFDRSxtQjs7Ozs7O3lCQUVESixpQixFQUFtQjtBQUN0QjtBQUNBLGtEQUNHLEtBQUszRixHQURSLEVBQ2MsS0FBS29DLFVBQUwsQ0FBZ0JuQixNQUFoQixDQUNWLFVBQUNDLElBQUQsRUFBT2xCLEdBQVA7QUFBQSxpQ0FDS2tCLElBREwsdUNBRUdsQixHQUZILG9CQUdPMkYsaUJBQWlCLENBQUMzRixHQUFELENBQWpCLENBQXVCZixNQUg5QjtBQUlJMkcsVUFBQUEsT0FBTyxFQUFFRCxpQkFBaUIsQ0FBQzNGLEdBQUQsQ0FBakIsQ0FBdUI0RjtBQUpwQztBQUFBLE9BRFUsRUFRVixFQVJVLENBRGQ7QUFZRDs7O3lCQUNJRCxpQixFQUFtQjtBQUN0QixrREFBUyxLQUFLM0YsR0FBZCxFQUFvQjJGLGlCQUFwQjtBQUNEOzs7RUFwQitCbkYsa0I7O0FBdUIzQixJQUFNd0YsYUFBYSxHQUFHO0FBQzNCakUsRUFBQUEsTUFBTSxFQUFFLElBRG1CO0FBRTNCRCxFQUFBQSxFQUFFLEVBQUUsSUFGdUI7QUFHM0JtRSxFQUFBQSxJQUFJLEVBQUUsSUFIcUI7QUFJM0IzRixFQUFBQSxJQUFJLEVBQUUsSUFKcUI7QUFLM0JhLEVBQUFBLEtBQUssRUFBRSxJQUxvQjtBQU0zQitFLEVBQUFBLFFBQVEsRUFBRTtBQU5pQixDQUF0Qjs7O0lBU01DLG9COzs7Ozs7Ozs7Ozs7eUJBQ05wRyxLLEVBQU87QUFDVixrREFDRyxLQUFLQyxHQURSLEVBQ2NELEtBQUssR0FBRyxLQUFLRSwyQkFBTCxDQUFpQ0YsS0FBakMsRUFBd0MsS0FBS0MsR0FBN0MsQ0FBSCxHQUF1RCxJQUQxRTtBQUdEOzs7eUJBRUlELEssRUFBTztBQUNWLGtEQUFTLEtBQUtDLEdBQWQsRUFBb0JELEtBQXBCO0FBQ0Q7OztFQVR1Q1Msa0I7Ozs7SUFZN0I0RixlOzs7Ozs7Ozs7Ozs7eUNBQ1VsRixJLFVBQW9CO0FBQUE7QUFBQSxVQUFibEIsR0FBYTtBQUFBLFVBQVJtQixLQUFROztBQUN2QyxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUIsaUNBQ0tELElBREwsdUNBRUdsQixHQUZILEVBRVNtQixLQUZUO0FBSUQsT0FMRCxNQUtPLElBQUlBLEtBQUssSUFBSSx5QkFBT0EsS0FBUCxNQUFpQixRQUExQixJQUFzQ0EsS0FBSyxDQUFDa0YsV0FBaEQsRUFBNkQ7QUFDbEUsaUNBQ0tuRixJQURMLHVDQUVHbEIsR0FGSCxFQUVTNkYsT0FBTyxDQUFDMUUsS0FBSyxDQUFDZSxTQUFQLENBRmhCO0FBSUQ7O0FBQ0QsYUFBT2hCLElBQVA7QUFDRDs7O3lCQUVJb0YsUyxFQUFXO0FBQUE7O0FBQ2Q7QUFFQSxVQUFJLENBQUNuRCxLQUFLLENBQUNDLE9BQU4sQ0FBY2tELFNBQWQsQ0FBRCxJQUE2QixDQUFDQSxTQUFTLENBQUNDLE1BQTVDLEVBQW9EO0FBQ2xELGVBQU87QUFBQ0QsVUFBQUEsU0FBUyxFQUFFO0FBQVosU0FBUDtBQUNEOztBQUVELGFBQU87QUFDTEEsUUFBQUEsU0FBUyxFQUFFQSxTQUFTLENBQUNyRCxHQUFWLENBQWMsVUFBQXVELFFBQVE7QUFBQSxtQ0FDNUJBLFFBRDRCO0FBRS9CMUIsWUFBQUEsTUFBTSxFQUFFL0QsTUFBTSxDQUFDMEYsT0FBUCxDQUFlRCxRQUFRLENBQUMxQixNQUFULElBQW1CLEVBQWxDLEVBQXNDN0QsTUFBdEMsQ0FBNkMsT0FBSSxDQUFDeUYsb0JBQWxELEVBQXdFLEVBQXhFO0FBRnVCO0FBQUEsU0FBdEI7QUFETixPQUFQO0FBTUQ7OztFQTdCa0NsRyxrQjs7OztBQWdDOUIsSUFBTW1HLGFBQWEscUJBQ3JCWCxhQURxQjtBQUV4QlksRUFBQUEsUUFBUSxFQUFFLElBRmM7QUFHeEJDLEVBQUFBLEtBQUssRUFBRSxJQUFJVixvQkFBSixDQUF5QjtBQUM5QnhCLElBQUFBLE9BQU8sRUFBRTlFLG1CQUFTK0UsRUFEWTtBQUU5QjVFLElBQUFBLEdBQUcsRUFBRSxPQUZ5QjtBQUc5Qm9DLElBQUFBLFVBQVUsRUFBRTtBQUNWNkQsTUFBQUEsSUFBSSxFQUFFLElBREk7QUFFVjNGLE1BQUFBLElBQUksRUFBRTtBQUZJO0FBSGtCLEdBQXpCLENBSGlCO0FBWXhCO0FBQ0F3RyxFQUFBQSxPQUFPLEVBQUU7QUFiZSxFQUFuQjs7O0FBZ0JBLElBQU1DLFlBQVksR0FBRztBQUMxQnpCLEVBQUFBLE9BQU8sRUFBRSxJQUFJRCxjQUFKLENBQW1CO0FBQzFCVixJQUFBQSxPQUFPLEVBQUU5RSxtQkFBU0MsRUFEUTtBQUUxQnNDLElBQUFBLFVBQVUsRUFBRTREO0FBRmMsR0FBbkIsQ0FEaUI7QUFLMUJsQixFQUFBQSxNQUFNLEVBQUUsSUFBSUQsYUFBSixDQUFrQjtBQUN4QkYsSUFBQUEsT0FBTyxFQUFFOUUsbUJBQVNDLEVBRE07QUFFeEJzQyxJQUFBQSxVQUFVLEVBQUVQO0FBRlksR0FBbEIsQ0FMa0I7QUFTMUI4RCxFQUFBQSxpQkFBaUIsRUFBRSxJQUFJRCxtQkFBSixDQUF3QjtBQUN6Q2YsSUFBQUEsT0FBTyxFQUFFOUUsbUJBQVNDLEVBRHVCO0FBRXpDc0MsSUFBQUEsVUFBVSxFQUFFcUQ7QUFGNkIsR0FBeEIsQ0FUTztBQWExQnVCLEVBQUFBLGFBQWEsRUFBRTtBQWJXLENBQXJCOztBQWdCQSxJQUFNQyxZQUFZLEdBQUc7QUFDMUIzQixFQUFBQSxPQUFPLEVBQUUsSUFBSUQsY0FBSixDQUFtQjtBQUMxQlYsSUFBQUEsT0FBTyxFQUFFOUUsbUJBQVMrRSxFQURRO0FBRTFCeEMsSUFBQUEsVUFBVSxFQUFFdUU7QUFGYyxHQUFuQixDQURpQjtBQUsxQjdCLEVBQUFBLE1BQU0sRUFBRSxJQUFJRCxhQUFKLENBQWtCO0FBQ3hCRixJQUFBQSxPQUFPLEVBQUU5RSxtQkFBUytFLEVBRE07QUFFeEJ4QyxJQUFBQSxVQUFVLEVBQUVzQztBQUZZLEdBQWxCLENBTGtCO0FBUzFCaUIsRUFBQUEsaUJBQWlCLEVBQUUsSUFBSUksbUJBQUosQ0FBd0I7QUFDekNwQixJQUFBQSxPQUFPLEVBQUU5RSxtQkFBUytFLEVBRHVCO0FBRXpDeEMsSUFBQUEsVUFBVSxFQUFFMEQ7QUFGNkIsR0FBeEIsQ0FUTztBQWExQmtCLEVBQUFBLGFBQWEsRUFBRSxJQWJXO0FBYzFCVixFQUFBQSxTQUFTLEVBQUUsSUFBSUYsZUFBSixDQUFvQjtBQUM3QnBHLElBQUFBLEdBQUcsRUFBRSxXQUR3QjtBQUU3QjJFLElBQUFBLE9BQU8sRUFBRTlFLG1CQUFTK0U7QUFGVyxHQUFwQixDQWRlO0FBa0IxQnNDLEVBQUFBLGVBQWUsRUFBRSxJQUFJMUcsa0JBQUosQ0FBVztBQUMxQm1FLElBQUFBLE9BQU8sRUFBRTlFLG1CQUFTK0UsRUFEUTtBQUUxQnhDLElBQUFBLFVBQVUsRUFBRTtBQUNWK0UsTUFBQUEsV0FBVyxFQUFFLElBREg7QUFFVkMsTUFBQUEsS0FBSyxFQUFFO0FBRkcsS0FGYztBQU0xQnBILElBQUFBLEdBQUcsRUFBRTtBQU5xQixHQUFYO0FBbEJTLENBQXJCOztBQTRCQSxJQUFNcUgsZ0JBQWdCLEdBQUcsSUFBSTdHLGtCQUFKLENBQVc7QUFDekNtRSxFQUFBQSxPQUFPLEVBQUU5RSxtQkFBU0MsRUFEdUI7QUFFekNzQyxFQUFBQSxVQUFVLEVBQUUyRSxZQUY2QjtBQUd6Qy9HLEVBQUFBLEdBQUcsRUFBRTtBQUhvQyxDQUFYLENBQXpCOztBQU1BLElBQU1zSCxnQkFBZ0IsR0FBRyxJQUFJOUcsa0JBQUosQ0FBVztBQUN6Q21FLEVBQUFBLE9BQU8sRUFBRTlFLG1CQUFTK0UsRUFEdUI7QUFFekN4QyxFQUFBQSxVQUFVLEVBQUU2RSxZQUY2QjtBQUd6Q2pILEVBQUFBLEdBQUcsRUFBRTtBQUhvQyxDQUFYLENBQXpCOztBQU1BLElBQU11SCxjQUFjLDRFQUN4QjFILG1CQUFTQyxFQURlLEVBQ1Y7QUFDYjBILEVBQUFBLElBQUksRUFBRSxjQUFBQyxNQUFNO0FBQUEsV0FBSUosZ0JBQWdCLENBQUNHLElBQWpCLENBQXNCQyxNQUF0QixDQUFKO0FBQUEsR0FEQztBQUViQyxFQUFBQSxJQUFJLEVBQUUsY0FBQUMsTUFBTTtBQUFBLFdBQUlMLGdCQUFnQixDQUFDSSxJQUFqQixDQUFzQkwsZ0JBQWdCLENBQUNLLElBQWpCLENBQXNCQyxNQUF0QixFQUE4QjVDLFFBQXBELENBQUo7QUFBQTtBQUZDLENBRFUscURBS3hCbEYsbUJBQVMrRSxFQUxlLEVBS1YwQyxnQkFMVSxtQkFBcEIsQyxDQVFQOzs7ZUFDZUMsYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcbmltcG9ydCB7VkVSU0lPTlN9IGZyb20gJy4vdmVyc2lvbnMnO1xuaW1wb3J0IHtpc1ZhbGlkRmlsdGVyVmFsdWV9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCc7XG5cbi8qKlxuICogVjAgU2NoZW1hXG4gKi9cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvblByb3BzVjAgPSBbJ25hbWUnLCAndHlwZSddO1xuXG4vLyBpbiB2MCBnZW9qc29uIHRoZXJlIGlzIG9ubHkgc2l6ZUZpZWxkXG5cbi8vIGluIHYxIGdlb2pzb25cbi8vIHN0cm9rZSBiYXNlIG9uIC0+IHNpemVGaWVsZFxuLy8gaGVpZ2h0IGJhc2VkIG9uIC0+IGhlaWdodEZpZWxkXG4vLyByYWRpdXMgYmFzZWQgb24gLT4gcmFkaXVzRmllbGRcbi8vIGhlcmUgd2UgbWFrZSBvdXIgd2lyZWRzdCBndWVzcyBvbiB3aGljaCBjaGFubmVsIHNpemVGaWVsZCBiZWxvbmdzIHRvXG5mdW5jdGlvbiBnZW9qc29uU2l6ZUZpZWxkVjBUb1YxKGNvbmZpZykge1xuICBjb25zdCBkZWZhdWx0UmFpdWRzID0gMTA7XG4gIGNvbnN0IGRlZmF1bHRSYWRpdXNSYW5nZSA9IFswLCA1MF07XG5cbiAgLy8gaWYgZXh0cnVkZWQsIHNpemVGaWVsZCBpcyBtb3N0IGxpa2VseSB1c2VkIGZvciBoZWlnaHRcbiAgaWYgKGNvbmZpZy52aXNDb25maWcuZXh0cnVkZWQpIHtcbiAgICByZXR1cm4gJ2hlaWdodEZpZWxkJztcbiAgfVxuXG4gIC8vIGlmIHNob3cgc3Ryb2tlIGVuYWJsZWQsIHNpemVGaWVsZCBpcyBtb3N0IGxpa2VseSB1c2VkIGZvciBzdHJva2VcbiAgaWYgKGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xuICAgIHJldHVybiAnc2l6ZUZpZWxkJztcbiAgfVxuXG4gIC8vIGlmIHJhZGl1cyBjaGFuZ2VkLCBvciByYWRpdXMgUmFuZ2UgQ2hhbmdlZCwgc2l6ZUZpZWxkIGlzIG1vc3QgbGlrZWx5IHVzZWQgZm9yIHJhZGl1c1xuICAvLyB0aGlzIGlzIHRoZSBtb3N0IHVucmVsaWFibGUgZ3Vlc3MsIHRoYXQncyB3aHkgd2UgcHV0IGl0IGluIHRoZSBlbmRcbiAgaWYgKFxuICAgIGNvbmZpZy52aXNDb25maWcucmFkaXVzICE9PSBkZWZhdWx0UmFpdWRzIHx8XG4gICAgY29uZmlnLnZpc0NvbmZpZy5yYWRpdXNSYW5nZS5zb21lKChkLCBpKSA9PiBkICE9PSBkZWZhdWx0UmFkaXVzUmFuZ2VbaV0pXG4gICkge1xuICAgIHJldHVybiAncmFkaXVzRmllbGQnO1xuICB9XG5cbiAgcmV0dXJuICdzaXplRmllbGQnO1xufVxuXG4vLyBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZ1xuY2xhc3MgRGltZW5zaW9uRmllbGRTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgc2F2ZShmaWVsZCkge1xuICAgIC8vIHNob3VsZCBub3QgYmUgY2FsbGVkIGFueW1vcmVcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogZmllbGQgIT09IG51bGwgPyB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWVsZClbdGhpcy5rZXldIDogbnVsbFxuICAgIH07XG4gIH1cblxuICBsb2FkKGZpZWxkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIGNvbnN0IFtjb25maWddID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgbGV0IGZpZWxkTmFtZSA9IHRoaXMua2V5O1xuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2dlb2pzb24nICYmIHRoaXMua2V5ID09PSAnc2l6ZUZpZWxkJyAmJiBmaWVsZCkge1xuICAgICAgZmllbGROYW1lID0gZ2VvanNvblNpemVGaWVsZFYwVG9WMShjb25maWcpO1xuICAgIH1cbiAgICAvLyBmb2xkIGludG8gdmlzdWFsQ2hhbm5lbHMgdG8gYmUgbG9hZCBieSBWaXN1YWxDaGFubmVsU2NoZW1hVjFcbiAgICByZXR1cm4ge1xuICAgICAgdmlzdWFsQ2hhbm5lbHM6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLnZpc3VhbENoYW5uZWxzIHx8IHt9KSxcbiAgICAgICAgW2ZpZWxkTmFtZV06IGZpZWxkXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBEaW1lbnNpb25TY2FsZVNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBzYXZlKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtbdGhpcy5rZXldOiBzY2FsZX07XG4gIH1cbiAgbG9hZChzY2FsZSwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIC8vIGZvbGQgaW50byB2aXN1YWxDaGFubmVscyB0byBiZSBsb2FkIGJ5IFZpc3VhbENoYW5uZWxTY2hlbWFWMVxuICAgIGlmICh0aGlzLmtleSA9PT0gJ3NpemVTY2FsZScgJiYgY29uZmlnLnR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgLy8gc2l6ZVNjYWxlIG5vdyBzcGxpdCBpbnRvIHJhZGl1c1NjYWxlLCBoZWlnaHRTY2FsZVxuICAgICAgLy8gbm8gdXNlciBjdXN0b21pemF0aW9uLCBqdXN0IHVzZSBkZWZhdWx0XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc3VhbENoYW5uZWxzOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC52aXN1YWxDaGFubmVscyB8fCB7fSksXG4gICAgICAgIFt0aGlzLmtleV06IHNjYWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG4vLyB1c2VkIHRvIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29uZmlnXG5jbGFzcyBMYXllckNvbmZpZ1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBsb2FkKHNhdmVkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIC8vIGZvbGQgdjAgbGF5ZXIgcHJvcGVydHkgaW50byBjb25maWcua2V5XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi4oYWNjdW11bGF0ZWQuY29uZmlnIHx8IHt9KSxcbiAgICAgICAgW3RoaXMua2V5XTogc2F2ZWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbi8vIHVzZWQgdG8gY29udmVydCB2MCB0byB2MSBsYXllciBjb2x1bW5zXG4vLyBvbmx5IHJldHVybiBjb2x1bW4gdmFsdWUgZm9yIGVhY2ggY29sdW1uXG5jbGFzcyBMYXllckNvbHVtbnNTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgbG9hZChzYXZlZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICAvLyBmb2xkIHYwIGxheWVyIHByb3BlcnR5IGludG8gY29uZmlnLmtleSwgZmxhdHRlbiBjb2x1bW5zXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi4oYWNjdW11bGF0ZWQuY29uZmlnIHx8IHt9KSxcbiAgICAgICAgY29sdW1uczogT2JqZWN0LmtleXMoc2F2ZWQpLnJlZHVjZShcbiAgICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgIFtrZXldOiBzYXZlZFtrZXldLnZhbHVlXG4gICAgICAgICAgfSksXG4gICAgICAgICAge31cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZy52aXNDb25maWdcbmNsYXNzIExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgbG9hZChzYXZlZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICAvLyBmb2xkIHYwIGxheWVyIHByb3BlcnR5IGludG8gY29uZmlnLnZpc0NvbmZpZ1xuICAgIGNvbnN0IGFjY3VtdWxhdGVkQ29uZmlnID0gYWNjdW11bGF0ZWQuY29uZmlnIHx8IHt9O1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uYWNjdW11bGF0ZWRDb25maWcsXG4gICAgICAgIHZpc0NvbmZpZzoge1xuICAgICAgICAgIC4uLihhY2N1bXVsYXRlZENvbmZpZy52aXNDb25maWcgfHwge30pLFxuICAgICAgICAgIFt0aGlzLmtleV06IHNhdmVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIExheWVyVmlzQ29uZmlnU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGtleSA9ICd2aXNDb25maWcnO1xuXG4gIGxvYWQodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikge1xuICAgIGNvbnN0IFtjb25maWddID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgY29uc3QgcmVuYW1lID0ge1xuICAgICAgZ2VvanNvbjoge1xuICAgICAgICBleHRydWRlZDogJ2VuYWJsZTNkJyxcbiAgICAgICAgZWxldmF0aW9uUmFuZ2U6ICdoZWlnaHRSYW5nZSdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy50eXBlIGluIHJlbmFtZSkge1xuICAgICAgY29uc3QgcHJvcFRvUmVuYW1lID0gcmVuYW1lW2NvbmZpZy50eXBlXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIC4uLihhY2N1bXVsYXRvci5jb25maWcgfHwge30pLFxuICAgICAgICAgIHZpc0NvbmZpZzogT2JqZWN0LmtleXModmlzQ29uZmlnKS5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgICAuLi4ocHJvcFRvUmVuYW1lW2tleV1cbiAgICAgICAgICAgICAgICA/IHtbcHJvcFRvUmVuYW1lW2tleV1dOiB2aXNDb25maWdba2V5XX1cbiAgICAgICAgICAgICAgICA6IHtba2V5XTogdmlzQ29uZmlnW2tleV19KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7fVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRvci5jb25maWcgfHwge30pLFxuICAgICAgICB2aXNDb25maWdcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIExheWVyQ29uZmlnU2NoZW1hRGVsZXRlVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGxvYWQodmFsdWUpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuLyoqXG4gKiBWMCAtPiBWMSBDaGFuZ2VzXG4gKiAtIGxheWVyIGlzIG5vdyBhIGNsYXNzXG4gKiAtIGNvbmZpZyBzYXZlZCBpbiBhIGNvbmZpZyBvYmplY3RcbiAqIC0gaWQsIHR5cGUsIGlzQWdncmVnYXRlZCBpcyBvdXRzaWRlIGxheWVyLmNvbmZpZ1xuICogLSB2aXN1YWxDaGFubmVscyBpcyBvdXRzaWRlIGNvbmZpZywgaXQgZGVmaW5lcyBhdmFpbGFibGUgdmlzdWFsIGNoYW5uZWwgYW5kXG4gKiAgIHByb3BlcnR5IG5hbWVzIGZvciBmaWVsZCwgc2NhbGUsIGRvbWFpbiBhbmQgcmFuZ2Ugb2YgZWFjaCB2aXN1YWwgY2hhbmVsLlxuICogLSBlbmFibGUzZCwgY29sb3JBZ2dyZWdhdGlvbiBhbmQgc2l6ZUFnZ3JlZ2F0aW9uIGFyZSBtb3ZlZCBpbnRvIHZpc0NvbmZpZ1xuICogLSBHZW9qc29uTGF5ZXIgLSBhZGRlZCBoZWlnaHQsIHJhZGl1cyBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxheWVyUHJvcHNWMCA9IHtcbiAgaWQ6IG51bGwsXG4gIHR5cGU6IG51bGwsXG5cbiAgLy8gbW92ZSBpbnRvIGxheWVyLmNvbmZpZ1xuICBkYXRhSWQ6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdkYXRhSWQnfSksXG4gIGxhYmVsOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnbGFiZWwnfSksXG4gIGNvbG9yOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnY29sb3InfSksXG4gIGlzVmlzaWJsZTogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2lzVmlzaWJsZSd9KSxcblxuICAvLyBjb252ZXJ0IHZpc0NvbmZpZ1xuICB2aXNDb25maWc6IG5ldyBMYXllclZpc0NvbmZpZ1NjaGVtYVYwKHtrZXk6ICd2aXNDb25maWcnfSksXG5cbiAgLy8gbW92ZSBpbnRvIGxheWVyLmNvbmZpZ1xuICAvLyBmbGF0dGVuXG4gIGNvbHVtbnM6IG5ldyBMYXllckNvbHVtbnNTY2hlbWFWMCgpLFxuXG4gIC8vIHNhdmUgaW50byB2aXN1YWxDaGFubmVsc1xuICBjb2xvckZpZWxkOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWFWMCh7XG4gICAgcHJvcGVydGllczogZGltZW5zaW9uUHJvcHNWMCxcbiAgICBrZXk6ICdjb2xvckZpZWxkJ1xuICB9KSxcbiAgY29sb3JTY2FsZTogbmV3IERpbWVuc2lvblNjYWxlU2NoZW1hVjAoe1xuICAgIGtleTogJ2NvbG9yU2NhbGUnXG4gIH0pLFxuICBzaXplRmllbGQ6IG5ldyBEaW1lbnNpb25GaWVsZFNjaGVtYVYwKHtcbiAgICBwcm9wZXJ0aWVzOiBkaW1lbnNpb25Qcm9wc1YwLFxuICAgIGtleTogJ3NpemVGaWVsZCdcbiAgfSksXG4gIHNpemVTY2FsZTogbmV3IERpbWVuc2lvblNjYWxlU2NoZW1hVjAoe1xuICAgIGtleTogJ3NpemVTY2FsZSdcbiAgfSksXG5cbiAgLy8gbW92ZSBpbnRvIGNvbmZpZy52aXNDb25maWdcbiAgZW5hYmxlM2Q6IG5ldyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAoe2tleTogJ2VuYWJsZTNkJ30pLFxuICBjb2xvckFnZ3JlZ2F0aW9uOiBuZXcgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwKHtcbiAgICBrZXk6ICdjb2xvckFnZ3JlZ2F0aW9uJ1xuICB9KSxcbiAgc2l6ZUFnZ3JlZ2F0aW9uOiBuZXcgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwKHtrZXk6ICdzaXplQWdncmVnYXRpb24nfSksXG5cbiAgLy8gZGVsZXRlXG4gIGlzQWdncmVnYXRlZDogbmV3IExheWVyQ29uZmlnU2NoZW1hRGVsZXRlVjAoKVxufTtcblxuLyoqXG4gKiBWMSBTY2hlbWFcbiAqL1xuY2xhc3MgQ29sdW1uU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKGNvbHVtbnMsIHN0YXRlKSB7XG4gICAgLy8gc3RhcnRpbmcgZnJvbSB2MSwgb25seSBzYXZlIGNvbHVtbiB2YWx1ZVxuICAgIC8vIGZpZWxkSWR4IHdpbGwgYmUgY2FsY3VsYXRlZCBkdXJpbmcgbWVyZ2VcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogT2JqZWN0LmtleXMoY29sdW1ucykucmVkdWNlKFxuICAgICAgICAoYWNjdSwgY2tleSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgIFtja2V5XTogY29sdW1uc1tja2V5XS52YWx1ZVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgbG9hZChjb2x1bW5zKSB7XG4gICAgcmV0dXJuIHtjb2x1bW5zfTtcbiAgfVxufVxuXG5jbGFzcyBUZXh0TGFiZWxTY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XG4gIHNhdmUodGV4dExhYmVsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHRleHRMYWJlbC5tYXAodGwgPT4gKHtcbiAgICAgICAgLi4udGwsXG4gICAgICAgIGZpZWxkOiB0bC5maWVsZCA/IHBpY2sodGwuZmllbGQsIFsnbmFtZScsICd0eXBlJ10pIDogbnVsbFxuICAgICAgfSkpXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQodGV4dExhYmVsKSB7XG4gICAgcmV0dXJuIHt0ZXh0TGFiZWw6IEFycmF5LmlzQXJyYXkodGV4dExhYmVsKSA/IHRleHRMYWJlbCA6IFt0ZXh0TGFiZWxdfTtcbiAgfVxufVxuXG5jb25zdCB2aXN1YWxDaGFubmVsTW9kaWZpY2F0aW9uVjEgPSB7XG4gIHBvaW50OiAodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSA9PiB7XG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuXG4gICAgaWYgKGxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZSAmJiB2Yy5jb2xvckZpZWxkICYmICF2Yy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpKSB7XG4gICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXG4gICAgICAvLyBmb3Igb2xkZXIgc2NoZW1hIHdoZXJlIGZpbGxlZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gcG9pbnQgbGF5ZXJcbiAgICAgIC8vIGNvcHkgY29sb3JGaWVsZCwgY29sb3JTY2FsZSB0byBzdHJva2VDb2xvckZpZWxkLCBhbmQgc3Ryb2tlQ29sb3JTY2FsZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogdmMuY29sb3JGaWVsZCxcbiAgICAgICAgc3Ryb2tlQ29sb3JTY2FsZTogdmMuY29sb3JTY2FsZSxcbiAgICAgICAgY29sb3JGaWVsZDogbnVsbCxcbiAgICAgICAgY29sb3JTY2FsZTogJ3F1YW50aWxlJ1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBnZW9qc29uOiAodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSA9PiB7XG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGNvbnN0IGlzT2xkID0gIXZjLmhhc093blByb3BlcnR5KCdzdHJva2VDb2xvckZpZWxkJyk7XG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcbiAgICBjb25zdCBpc1BvaW50ID1cbiAgICAgIHZjLnJhZGl1c0ZpZWxkIHx8IGxheWVyLmNvbmZpZy52aXNDb25maWcucmFkaXVzICE9PSBMQVlFUl9WSVNfQ09ORklHUy5yYWRpdXMuZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKGlzT2xkICYmICFpc1BvaW50ICYmIGxheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xuICAgICAgLy8gaWYgc3Ryb2tlZCBpcyB0cnVlLCBjb3B5IGNvbG9yIGNvbmZpZyB0byBzdHJva2UgY29sb3IgY29uZmlnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHJva2VDb2xvckZpZWxkOiB2Yy5jb2xvckZpZWxkLFxuICAgICAgICBzdHJva2VDb2xvclNjYWxlOiB2Yy5jb2xvclNjYWxlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbn07XG4vKipcbiAqIFYxOiBzYXZlIFtmaWVsZF06IHtuYW1lLCB0eXBlfSwgW3NjYWxlXTogJycgZm9yIGVhY2ggY2hhbm5lbFxuICovXG5jbGFzcyBWaXN1YWxDaGFubmVsU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKHZpc3VhbENoYW5uZWxzLCBwYXJlbnRzKSB7XG4gICAgLy8gb25seSBzYXZlIGZpZWxkIGFuZCBzY2FsZSBvZiBlYWNoIGNoYW5uZWxcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IE9iamVjdC5rZXlzKHZpc3VhbENoYW5uZWxzKS5yZWR1Y2UoXG4gICAgICAgIC8vICBzYXZlIGNoYW5uZWwgdG8gbnVsbCBpZiBkaWRuJ3Qgc2VsZWN0IGFueSBmaWVsZFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF1cbiAgICAgICAgICAgID8gcGljayhsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF0sIFsnbmFtZScsICd0eXBlJ10pXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uc2NhbGVdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5zY2FsZV1cbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuICBsb2FkKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikge1xuICAgIC8vIGZvbGQgY2hhbm5lbHMgaW50byBjb25maWdcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgY29uc3QgbW9kaWZpZWQgPSB2aXN1YWxDaGFubmVsTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcilcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjdW11bGF0b3IsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIC4uLnZjLFxuICAgICAgICAuLi5tb2RpZmllZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmNvbnN0IHZpc0NvbmZpZ01vZGlmaWNhdGlvblYxID0ge1xuICBwb2ludDogKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpID0+IHtcbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgaXNPbGQgPVxuICAgICAgIXZpc0NvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZmlsbGVkJykgJiYgIXZpc0NvbmZpZy5zdHJva2VDb2xvciAmJiAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2U7XG4gICAgaWYgKGlzT2xkKSB7XG4gICAgICAvLyBjb2xvciBjb2xvciAmIGNvbG9yIHJhbmdlIHRvIHN0cm9rZSBjb2xvclxuICAgICAgbW9kaWZpZWQuc3Ryb2tlQ29sb3IgPSBsYXllci5jb25maWcuY29sb3I7XG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvclJhbmdlID0gY2xvbmVEZWVwKHZpc0NvbmZpZy5jb2xvclJhbmdlKTtcbiAgICAgIGlmICh2aXNDb25maWcub3V0bGluZSkge1xuICAgICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXG4gICAgICAgIC8vIGZvciBvbGRlciBzY2hlbWEgd2hlcmUgZmlsbGVkIGhhcyBub3QgYmVlbiBhZGRlZCB0byBwb2ludCBsYXllclxuICAgICAgICAvLyBzZXQgaXQgdG8gZmFsc2VcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGlmaWVkO1xuICB9LFxuICBnZW9qc29uOiAodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkgPT4ge1xuICAgIC8vIGlzIHBvaW50cz9cbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgaXNPbGQgPVxuICAgICAgbGF5ZXIudmlzdWFsQ2hhbm5lbHMgJiZcbiAgICAgICFsYXllci52aXN1YWxDaGFubmVscy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpICYmXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yICYmXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2U7XG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcbiAgICBjb25zdCBpc1BvaW50ID1cbiAgICAgIChsYXllci52aXN1YWxDaGFubmVscyAmJiBsYXllci52aXN1YWxDaGFubmVscy5yYWRpdXNGaWVsZCkgfHxcbiAgICAgICh2aXNDb25maWcgJiYgdmlzQ29uZmlnLnJhZGl1cyAhPT0gTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzLmRlZmF1bHRWYWx1ZSk7XG5cbiAgICBpZiAoaXNPbGQpIHtcbiAgICAgIC8vIGNvbG9yIGNvbG9yICYgY29sb3IgcmFuZ2UgdG8gc3Ryb2tlIGNvbG9yXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvciA9IGxheWVyLmNvbmZpZy5jb2xvcjtcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yUmFuZ2UgPSBjbG9uZURlZXAodmlzQ29uZmlnLmNvbG9yUmFuZ2UpO1xuICAgICAgaWYgKGlzUG9pbnQpIHtcbiAgICAgICAgLy8gaWYgaXMgcG9pbnQsIHNldCBzdHJva2UgdG8gZmFsc2VcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgbW9kaWZpZWQuc3Ryb2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2RpZmllZDtcbiAgfVxufTtcblxuY2xhc3MgVmlzQ29uZmlnU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAndmlzQ29uZmlnJztcblxuICBsb2FkKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xuICAgIGNvbnN0IG1vZGlmaWVkID0gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV0odmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZClcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgIC4uLnZpc0NvbmZpZyxcbiAgICAgICAgLi4ubW9kaWZpZWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsYXllclByb3BzVjEgPSB7XG4gIGlkOiBudWxsLFxuICB0eXBlOiBudWxsLFxuICBjb25maWc6IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ2NvbmZpZycsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZGF0YUlkOiBudWxsLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICBjb2xvcjogbnVsbCxcbiAgICAgIGNvbHVtbnM6IG5ldyBDb2x1bW5TY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgICAgICBrZXk6ICdjb2x1bW5zJ1xuICAgICAgfSksXG4gICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICB2aXNDb25maWc6IG5ldyBWaXNDb25maWdTY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxXG4gICAgICB9KSxcbiAgICAgIHRleHRMYWJlbDogbmV3IFRleHRMYWJlbFNjaGVtYVYxKHtcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgICAgIGtleTogJ3RleHRMYWJlbCdcbiAgICAgIH0pXG4gICAgfVxuICB9KSxcbiAgdmlzdWFsQ2hhbm5lbHM6IG5ldyBWaXN1YWxDaGFubmVsU2NoZW1hVjEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3Zpc3VhbENoYW5uZWxzJ1xuICB9KVxufTtcblxuY2xhc3MgTGF5ZXJTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIGtleSA9ICdsYXllcnMnO1xuXG4gIHNhdmUobGF5ZXJzLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgW3Zpc1N0YXRlXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHZpc1N0YXRlLmxheWVyT3JkZXIucmVkdWNlKChzYXZlZCwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gc2F2ZSBsYXllcnMgYWNjb3JkaW5nIHRvIHRoZWlyIHJlbmRlcmluZyBvcmRlclxuICAgICAgICBjb25zdCBsYXllciA9IGxheWVyc1tpbmRleF07XG4gICAgICAgIGlmIChsYXllci5pc1ZhbGlkVG9TYXZlKCkpIHtcbiAgICAgICAgICBzYXZlZC5wdXNoKHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGxheWVyKS5sYXllcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzYXZlZDtcbiAgICAgIH0sIFtdKVxuICAgIH07XG4gIH1cblxuICBsb2FkKGxheWVycykge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiBsYXllcnMubWFwKGxheWVyID0+IHRoaXMubG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGxheWVyLCBsYXllcnMpLmxheWVycylcbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIEZpbHRlclNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ZpbHRlcnMnO1xuICBzYXZlKGZpbHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsdGVyczogZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGlzVmFsaWRGaWx0ZXJWYWx1ZSlcbiAgICAgICAgLm1hcChmaWx0ZXIgPT4gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZmlsdGVyKS5maWx0ZXJzKVxuICAgIH07XG4gIH1cbiAgbG9hZChmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHtmaWx0ZXJzfTtcbiAgfVxufVxuXG5jb25zdCBpbnRlcmFjdGlvblByb3BzVjAgPSBbJ3Rvb2x0aXAnLCAnYnJ1c2gnXTtcblxuY2xhc3MgSW50ZXJhY3Rpb25TY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIGtleSA9ICdpbnRlcmFjdGlvbkNvbmZpZyc7XG5cbiAgc2F2ZShpbnRlcmFjdGlvbkNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgLi4uKGludGVyYWN0aW9uQ29uZmlnW2tleV0uZW5hYmxlZCA/IHtba2V5XTogaW50ZXJhY3Rpb25Db25maWdba2V5XS5jb25maWd9IDoge30pXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgbG9hZChpbnRlcmFjdGlvbkNvbmZpZykge1xuICAgIC8vIGNvbnZlcnQgdjAgLT4gdjFcbiAgICAvLyByZXR1cm4gZW5hYmxlZDogZmFsc2UgaWYgZGlzYWJsZWQsXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllcy5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAuLi57XG4gICAgICAgICAgICBba2V5XToge1xuICAgICAgICAgICAgICAuLi4oaW50ZXJhY3Rpb25Db25maWdba2V5XSB8fCB7fSksXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IEJvb2xlYW4oaW50ZXJhY3Rpb25Db25maWdba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cblxuY29uc3QgaW50ZXJhY3Rpb25Qcm9wc1YxID0gWy4uLmludGVyYWN0aW9uUHJvcHNWMCwgJ2Nvb3JkaW5hdGUnXTtcblxuY2xhc3MgSW50ZXJhY3Rpb25TY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XG4gIGtleSA9ICdpbnRlcmFjdGlvbkNvbmZpZyc7XG5cbiAgc2F2ZShpbnRlcmFjdGlvbkNvbmZpZykge1xuICAgIC8vIHNhdmUgY29uZmlnIGV2ZW4gaWYgZGlzYWJsZWQsXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllcy5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICBba2V5XToge1xuICAgICAgICAgICAgLi4uaW50ZXJhY3Rpb25Db25maWdba2V5XS5jb25maWcsXG4gICAgICAgICAgICBlbmFibGVkOiBpbnRlcmFjdGlvbkNvbmZpZ1trZXldLmVuYWJsZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgbG9hZChpbnRlcmFjdGlvbkNvbmZpZykge1xuICAgIHJldHVybiB7W3RoaXMua2V5XTogaW50ZXJhY3Rpb25Db25maWd9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJQcm9wc1YwID0ge1xuICBkYXRhSWQ6IG51bGwsXG4gIGlkOiBudWxsLFxuICBuYW1lOiBudWxsLFxuICB0eXBlOiBudWxsLFxuICB2YWx1ZTogbnVsbCxcbiAgZW5sYXJnZWQ6IG51bGxcbn07XG5cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25GaWVsZFNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIHNhdmUoZmllbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogZmllbGQgPyB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWVsZClbdGhpcy5rZXldIDogbnVsbFxuICAgIH07XG4gIH1cblxuICBsb2FkKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtbdGhpcy5rZXldOiBmaWVsZH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwbGl0TWFwc1NjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIGNvbnZlcnRMYXllclNldHRpbmdzKGFjY3UsIFtrZXksIHZhbHVlXSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5pc0F2YWlsYWJsZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgW2tleV06IEJvb2xlYW4odmFsdWUuaXNWaXNpYmxlKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3U7XG4gIH1cblxuICBsb2FkKHNwbGl0TWFwcykge1xuICAgIC8vIHByZXZpb3VzIHNwbGl0TWFwcyBTY2hlbWEge2xheWVyczoge2xheWVySWQ6IHtpc1Zpc2libGUsIGlzQXZhaWxhYmxlfX19XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3BsaXRNYXBzKSB8fCAhc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtzcGxpdE1hcHM6IFtdfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3BsaXRNYXBzOiBzcGxpdE1hcHMubWFwKHNldHRpbmdzID0+ICh7XG4gICAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgICBsYXllcnM6IE9iamVjdC5lbnRyaWVzKHNldHRpbmdzLmxheWVycyB8fCB7fSkucmVkdWNlKHRoaXMuY29udmVydExheWVyU2V0dGluZ3MsIHt9KVxuICAgICAgfSkpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyUHJvcHNWMSA9IHtcbiAgLi4uZmlsdGVyUHJvcHNWMCxcbiAgcGxvdFR5cGU6IG51bGwsXG4gIHlBeGlzOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3lBeGlzJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgdHlwZTogbnVsbFxuICAgIH1cbiAgfSksXG5cbiAgLy8gcG9seWdvbiBmaWx0ZXIgcHJvcGVydGllc1xuICBsYXllcklkOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvcGVydGllc1YwID0ge1xuICBmaWx0ZXJzOiBuZXcgRmlsdGVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IGZpbHRlclByb3BzVjBcbiAgfSksXG4gIGxheWVyczogbmV3IExheWVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IGxheWVyUHJvcHNWMFxuICB9KSxcbiAgaW50ZXJhY3Rpb25Db25maWc6IG5ldyBJbnRlcmFjdGlvblNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgICBwcm9wZXJ0aWVzOiBpbnRlcmFjdGlvblByb3BzVjBcbiAgfSksXG4gIGxheWVyQmxlbmRpbmc6IG51bGxcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzVjEgPSB7XG4gIGZpbHRlcnM6IG5ldyBGaWx0ZXJTY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogZmlsdGVyUHJvcHNWMVxuICB9KSxcbiAgbGF5ZXJzOiBuZXcgTGF5ZXJTY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogbGF5ZXJQcm9wc1YxXG4gIH0pLFxuICBpbnRlcmFjdGlvbkNvbmZpZzogbmV3IEludGVyYWN0aW9uU2NoZW1hVjEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IGludGVyYWN0aW9uUHJvcHNWMVxuICB9KSxcbiAgbGF5ZXJCbGVuZGluZzogbnVsbCxcbiAgc3BsaXRNYXBzOiBuZXcgU3BsaXRNYXBzU2NoZW1hKHtcbiAgICBrZXk6ICdzcGxpdE1hcHMnLFxuICAgIHZlcnNpb246IFZFUlNJT05TLnYxXG4gIH0pLFxuICBhbmltYXRpb25Db25maWc6IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGN1cnJlbnRUaW1lOiBudWxsLFxuICAgICAgc3BlZWQ6IG51bGxcbiAgICB9LFxuICAgIGtleTogJ2FuaW1hdGlvbkNvbmZpZydcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYVYwID0gbmV3IFNjaGVtYSh7XG4gIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjAsXG4gIGtleTogJ3Zpc1N0YXRlJ1xufSk7XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYVYxID0gbmV3IFNjaGVtYSh7XG4gIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjEsXG4gIGtleTogJ3Zpc1N0YXRlJ1xufSk7XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYSA9IHtcbiAgW1ZFUlNJT05TLnYwXToge1xuICAgIHNhdmU6IHRvU2F2ZSA9PiB2aXNTdGF0ZVNjaGVtYVYwLnNhdmUodG9TYXZlKSxcbiAgICBsb2FkOiB0b0xvYWQgPT4gdmlzU3RhdGVTY2hlbWFWMS5sb2FkKHZpc1N0YXRlU2NoZW1hVjAubG9hZCh0b0xvYWQpLnZpc1N0YXRlKVxuICB9LFxuICBbVkVSU0lPTlMudjFdOiB2aXNTdGF0ZVNjaGVtYVYxXG59O1xuXG4vLyB0ZXN0IGxvYWQgdjBcbmV4cG9ydCBkZWZhdWx0IHZpc1N0YXRlU2NoZW1hO1xuIl19