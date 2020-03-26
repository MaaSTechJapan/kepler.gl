"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.colorMaker = exports.layerColors = exports.OVERLAY_TYPE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _window = require("global/window");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _extensions = require("@deck.gl/extensions");

var _core = require("@deck.gl/core");

var _layers = require("@deck.gl/layers");

var _defaultLayerIcon = _interopRequireDefault(require("./default-layer-icon"));

var _layerUpdate = require("./layer-update");

var _defaultSettings = require("../constants/default-settings");

var _colorRanges = require("../constants/color-ranges");

var _customColorRanges = require("../constants/custom-color-ranges");

var _layerFactory = require("./layer-factory");

var _utils = require("../utils/utils");

var _dataUtils = require("../utils/data-utils");

var _dataScaleUtils = require("../utils/data-scale-utils");

var _colorUtils = require("../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

/**
 * Approx. number of points to sample in a large data set
 * @type {number}
 */
var MAX_SAMPLE_SIZE = 5000;
var dataFilterExtension = new _extensions.DataFilterExtension({
  filterSize: _defaultSettings.MAX_GPU_FILTERS
});

var identity = function identity(d) {
  return d;
};

var OVERLAY_TYPE = (0, _keymirror["default"])({
  deckgl: null,
  mapboxgl: null
});
exports.OVERLAY_TYPE = OVERLAY_TYPE;
var layerColors = Object.values(_customColorRanges.DataVizColors).map(_colorUtils.hexToRgb);
exports.layerColors = layerColors;

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < layerColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === layerColors.length) {
            index = 0;
          }

          _context.next = 5;
          return layerColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var colorMaker = generateColor();
exports.colorMaker = colorMaker;

var defaultGetFieldValue = function defaultGetFieldValue(field, d) {
  return d[field.tableFieldIndex - 1];
};

var Layer = /*#__PURE__*/function () {
  function Layer() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Layer);
    this.id = props.id || (0, _utils.generateHashId)(6); // meta

    this.meta = {}; // visConfigSettings

    this.visConfigSettings = {};
    this.config = this.getDefaultLayerConfig(_objectSpread({
      columns: this.getLayerColumns()
    }, props));
  }

  (0, _createClass2["default"])(Layer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        dataId: props.dataId || null,
        label: props.label || 'new layer',
        color: props.color || colorMaker.next().value,
        columns: props.columns || null,
        isVisible: props.isVisible || false,
        isConfigActive: props.isConfigActive || false,
        highlightColor: props.highlightColor || [252, 242, 26, 255],
        // TODO: refactor this into separate visual Channel config
        // color by field, domain is set by filters, field, scale type
        colorField: null,
        colorDomain: [0, 1],
        colorScale: _defaultSettings.SCALE_TYPES.quantile,
        // color by size, domain is set by filters, field, scale type
        sizeDomain: [0, 1],
        sizeScale: _defaultSettings.SCALE_TYPES.linear,
        sizeField: null,
        visConfig: {},
        textLabel: [_layerFactory.DEFAULT_TEXT_LABEL],
        colorUI: {
          color: _layerFactory.DEFAULT_COLOR_UI,
          colorRange: _layerFactory.DEFAULT_COLOR_UI
        },
        animation: {
          enabled: false
        }
      };
    }
    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */

  }, {
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Vehicle Type
      return {
        label: this.visConfigSettings[this.visualChannels[key].range].label,
        measure: this.config[this.visualChannels[key].field] ? this.config[this.visualChannels[key].field].name : this.visualChannels[key].defaultMeasure
      };
    }
    /**
     * Assign a field to layer column, return column config
     * @param key - Column Key
     * @param field - Selected field
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumn",
    value: function assignColumn(key, field) {
      // field value could be null for optional columns
      var update = field ? {
        value: field.name,
        fieldIdx: field.tableFieldIndex - 1
      } : {
        value: null,
        fieldIdx: -1
      };
      return _objectSpread({}, this.config.columns, (0, _defineProperty2["default"])({}, key, _objectSpread({}, this.config.columns[key], {}, update)));
    }
    /**
     * Assign a field pair to column config, return column config
     * @param key - Column Key
     * @param pair - field Pair
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumnPairs",
    value: function assignColumnPairs(key, pair) {
      var _objectSpread3;

      if (!this.columnPairs || !this.columnPairs[key]) {
        // should not end in this state
        return this.config.columns;
      }

      var _this$columnPairs$key = this.columnPairs[key],
          partnerKey = _this$columnPairs$key.pair,
          fieldPairKey = _this$columnPairs$key.fieldPairKey;
      var partnerFieldPairKey = this.columnPairs[partnerKey].fieldPairKey;
      return _objectSpread({}, this.config.columns, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, pair[fieldPairKey]), (0, _defineProperty2["default"])(_objectSpread3, partnerKey, pair[partnerFieldPairKey]), _objectSpread3));
    }
    /**
     * Calculate a radius zoom multiplier to render points, so they are visible in all zoom level
     * @param mapState
     * @param mapState.zoom - actual zoom
     * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getZoomFactor",
    value: function getZoomFactor(_ref) {
      var zoom = _ref.zoom,
          _ref$zoomOffset = _ref.zoomOffset,
          zoomOffset = _ref$zoomOffset === void 0 ? 0 : _ref$zoomOffset;
      return Math.pow(2, Math.max(14 - zoom + zoomOffset, 0));
    }
    /**
     * Calculate a elevation zoom multiplier to render points, so they are visible in all zoom level
     * @param mapState
     * @param mapState.zoom - actual zoom
     * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getElevationZoomFactor",
    value: function getElevationZoomFactor(_ref2) {
      var zoom = _ref2.zoom,
          _ref2$zoomOffset = _ref2.zoomOffset,
          zoomOffset = _ref2$zoomOffset === void 0 ? 0 : _ref2$zoomOffset;
      return Math.pow(2, Math.max(8 - zoom + zoomOffset, 0));
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, filteredIndex) {
      return {};
    }
  }, {
    key: "renderLayer",
    value: function renderLayer() {
      return [];
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      if (!object) {
        return null;
      } // by default, each entry of layerData should have a data property points
      // to the original item in the allData array
      // each layer can implement its own getHoverData method


      return object.data;
    }
    /**
     * When change layer type, try to copy over layer configs as much as possible
     * @param configToCopy - config to copy over
     * @param visConfigSettings - visConfig settings of config to copy
     */

  }, {
    key: "assignConfigToLayer",
    value: function assignConfigToLayer(configToCopy, visConfigSettings) {
      var _this = this;

      // don't deep merge visualChannel field
      // don't deep merge color range, reversed: is not a key by default
      var shallowCopy = ['colorRange', 'strokeColorRange'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.field;
      })); // don't copy over domain and animation

      var notToCopy = ['animation'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.domain;
      })); // if range is for the same property group copy it, otherwise, not to copy

      Object.values(this.visualChannels).forEach(function (v) {
        if (configToCopy.visConfig[v.range] && visConfigSettings[v.range].group !== _this.visConfigSettings[v.range].group) {
          notToCopy.push(v.range);
        }
      }); // don't copy over visualChannel range

      var currentConfig = this.config;
      var copied = this.copyLayerConfig(currentConfig, configToCopy, {
        shallowCopy: shallowCopy,
        notToCopy: notToCopy
      });
      this.updateLayerConfig(copied); // validate visualChannel field type and scale types

      Object.keys(this.visualChannels).forEach(function (channel) {
        _this.validateVisualChannel(channel);
      });
    }
    /*
     * Recursively copy config over to an empty layer
     * when received saved config, or copy config over from a different layer type
     * make sure to only copy over value to existing keys
     * @param {object} currentConfig - existing config to be override
     * @param {object} configToCopy - new Config to copy over
     * @param {string[]} shallowCopy - array of properties to not to be deep copied
     * @param {string[]} notToCopy - array of properties not to copy
     * @returns {object} - copied config
     */

  }, {
    key: "copyLayerConfig",
    value: function copyLayerConfig(currentConfig, configToCopy) {
      var _this2 = this;

      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$shallowCopy = _ref3.shallowCopy,
          shallowCopy = _ref3$shallowCopy === void 0 ? [] : _ref3$shallowCopy,
          _ref3$notToCopy = _ref3.notToCopy,
          notToCopy = _ref3$notToCopy === void 0 ? [] : _ref3$notToCopy;

      var copied = {};
      Object.keys(currentConfig).forEach(function (key) {
        if ((0, _utils.isPlainObject)(currentConfig[key]) && (0, _utils.isPlainObject)(configToCopy[key]) && !shallowCopy.includes(key) && !notToCopy.includes(key)) {
          // recursively assign object value
          copied[key] = _this2.copyLayerConfig(currentConfig[key], configToCopy[key], {
            shallowCopy: shallowCopy,
            notToCopy: notToCopy
          });
        } else if ((0, _dataUtils.notNullorUndefined)(configToCopy[key]) && !notToCopy.includes(key)) {
          // copy
          copied[key] = configToCopy[key];
        } else {
          // keep existing
          copied[key] = currentConfig[key];
        }
      });
      return copied;
    }
  }, {
    key: "registerVisConfig",
    value: function registerVisConfig(layerVisConfigs) {
      var _this3 = this;

      Object.keys(layerVisConfigs).forEach(function (item) {
        if (typeof item === 'string' && _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]]) {
          // if assigned one of default LAYER_CONFIGS
          _this3.config.visConfig[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]].defaultValue;
          _this3.visConfigSettings[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]];
        } else if (['type', 'defaultValue'].every(function (p) {
          return layerVisConfigs[item].hasOwnProperty(p);
        })) {
          // if provided customized visConfig, and has type && defaultValue
          // TODO: further check if customized visConfig is valid
          _this3.config.visConfig[item] = layerVisConfigs[item].defaultValue;
          _this3.visConfigSettings[item] = layerVisConfigs[item];
        }
      });
    }
  }, {
    key: "getLayerColumns",
    value: function getLayerColumns() {
      var required = this.requiredLayerColumns.reduce(function (accu, key) {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1
        }));
      }, {});
      var optional = this.optionalColumns.reduce(function (accu, key) {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1,
          optional: true
        }));
      }, {});
      return _objectSpread({}, required, {}, optional);
    }
  }, {
    key: "updateLayerConfig",
    value: function updateLayerConfig(newConfig) {
      this.config = _objectSpread({}, this.config, {}, newConfig);
      return this;
    }
  }, {
    key: "updateLayerVisConfig",
    value: function updateLayerVisConfig(newVisConfig) {
      this.config.visConfig = _objectSpread({}, this.config.visConfig, {}, newVisConfig);
      return this;
    }
  }, {
    key: "updateLayerColorUI",
    value: function updateLayerColorUI(prop, newConfig) {
      var _this$config = this.config,
          previous = _this$config.colorUI,
          visConfig = _this$config.visConfig;

      if (!(0, _utils.isPlainObject)(newConfig) || typeof prop !== 'string') {
        return this;
      }

      var colorUIProp = Object.entries(newConfig).reduce(function (accu, _ref4) {
        var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, (0, _utils.isPlainObject)(accu[key]) && (0, _utils.isPlainObject)(value) ? _objectSpread({}, accu[key], {}, value) : value));
      }, previous[prop] || _layerFactory.DEFAULT_COLOR_UI);

      var colorUI = _objectSpread({}, previous, (0, _defineProperty2["default"])({}, prop, colorUIProp));

      this.updateLayerConfig({
        colorUI: colorUI
      }); // if colorUI[prop] is colorRange

      var isColorRange = visConfig[prop] && visConfig[prop].colors;

      if (isColorRange) {
        this.updateColorUIByColorRange(newConfig, prop);
        this.updateColorRangeByColorUI(newConfig, previous, prop);
        this.updateCustomPalette(newConfig, previous, prop);
      }

      return this;
    }
  }, {
    key: "updateCustomPalette",
    value: function updateCustomPalette(newConfig, previous, prop) {
      if (!newConfig.colorRangeConfig || !newConfig.colorRangeConfig.custom) {
        return;
      }

      var _this$config2 = this.config,
          colorUI = _this$config2.colorUI,
          visConfig = _this$config2.visConfig;
      if (!visConfig[prop]) return;
      var colors = visConfig[prop].colors;

      var customPalette = _objectSpread({}, colorUI[prop].customPalette, {
        name: 'Custom Palette',
        colors: (0, _toConsumableArray2["default"])(colors)
      });

      this.updateLayerConfig({
        colorUI: _objectSpread({}, colorUI, (0, _defineProperty2["default"])({}, prop, _objectSpread({}, colorUI[prop], {
          customPalette: customPalette
        })))
      });
    }
    /**
     * if open dropdown and prop is color range
     * Automatically set colorRangeConfig's step and reversed
     * @param {*} newConfig
     * @param {*} prop
     */

  }, {
    key: "updateColorUIByColorRange",
    value: function updateColorUIByColorRange(newConfig, prop) {
      if (typeof newConfig.showDropdown !== 'number') return;
      var _this$config3 = this.config,
          colorUI = _this$config3.colorUI,
          visConfig = _this$config3.visConfig;
      this.updateLayerConfig({
        colorUI: _objectSpread({}, colorUI, (0, _defineProperty2["default"])({}, prop, _objectSpread({}, colorUI[prop], {
          colorRangeConfig: _objectSpread({}, colorUI[prop].colorRangeConfig, {
            steps: visConfig[prop].colors.length,
            reversed: Boolean(visConfig[prop].reversed)
          })
        })))
      });
    }
  }, {
    key: "updateColorRangeByColorUI",
    value: function updateColorRangeByColorUI(newConfig, previous, prop) {
      // only update colorRange if changes in UI is made to 'reversed', 'steps' or steps
      var shouldUpdate = newConfig.colorRangeConfig && ['reversed', 'steps'].some(function (key) {
        return newConfig.colorRangeConfig.hasOwnProperty(key) && newConfig.colorRangeConfig[key] !== (previous[prop] || _layerFactory.DEFAULT_COLOR_UI).colorRangeConfig[key];
      });
      if (!shouldUpdate) return;
      var _this$config4 = this.config,
          colorUI = _this$config4.colorUI,
          visConfig = _this$config4.visConfig;
      var _colorUI$prop$colorRa = colorUI[prop].colorRangeConfig,
          steps = _colorUI$prop$colorRa.steps,
          reversed = _colorUI$prop$colorRa.reversed;
      var colorRange = visConfig[prop]; // find based on step or reversed

      var update;

      if (newConfig.colorRangeConfig.hasOwnProperty('steps')) {
        var group = (0, _colorUtils.getColorGroupByName)(colorRange);

        if (group) {
          var sameGroup = _colorRanges.COLOR_RANGES.filter(function (cr) {
            return (0, _colorUtils.getColorGroupByName)(cr) === group;
          });

          update = sameGroup.find(function (cr) {
            return cr.colors.length === steps;
          });

          if (update && colorRange.reversed) {
            update = (0, _colorUtils.reverseColorRange)(true, update);
          }
        }
      }

      if (newConfig.colorRangeConfig.hasOwnProperty('reversed')) {
        update = (0, _colorUtils.reverseColorRange)(reversed, update || colorRange);
      }

      if (update) {
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, prop, update));
      }
    }
    /**
     * Check whether layer has all columns
     *
     * @param {object} layer
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasAllColumns",
    value: function hasAllColumns() {
      var columns = this.config.columns;
      return columns && Object.values(columns).every(function (v) {
        return Boolean(v.optional || v.value && v.fieldIdx > -1);
      });
    }
    /**
     * Check whether layer has data
     *
     * @param {object} layer
     * @param {Array | Object} layerData
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasLayerData",
    value: function hasLayerData(layerData) {
      if (!layerData) {
        return false;
      }

      return Boolean(layerData.data && layerData.data.length);
    }
  }, {
    key: "isValidToSave",
    value: function isValidToSave() {
      return this.type && this.hasAllColumns();
    }
  }, {
    key: "shouldRenderLayer",
    value: function shouldRenderLayer(data) {
      return this.type && this.config.isVisible && this.hasAllColumns() && this.hasLayerData(data) && typeof this.renderLayer === 'function';
    }
  }, {
    key: "getVisChannelScale",
    value: function getVisChannelScale(scale, domain, range, fixed) {
      return _defaultSettings.SCALE_FUNC[fixed ? 'linear' : scale]().domain(domain).range(fixed ? domain : range);
    }
  }, {
    key: "getPointsBounds",
    value: function getPointsBounds(allData) {
      var getPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      // no need to loop through the entire dataset
      // get a sample of data to calculate bounds
      var sampleData = allData.length > MAX_SAMPLE_SIZE ? (0, _dataUtils.getSampleData)(allData, MAX_SAMPLE_SIZE) : allData;
      var points = sampleData.map(getPosition);
      var latBounds = (0, _dataUtils.getLatLngBounds)(points, 1, [-90, 90]);
      var lngBounds = (0, _dataUtils.getLatLngBounds)(points, 0, [-180, 180]);

      if (!latBounds || !lngBounds) {
        return null;
      }

      return [lngBounds[0], latBounds[0], lngBounds[1], latBounds[1]];
    }
  }, {
    key: "getChangedTriggers",
    value: function getChangedTriggers(dataUpdateTriggers) {
      var triggerChanged = (0, _layerUpdate.diffUpdateTriggers)(dataUpdateTriggers, this._oldDataUpdateTriggers);
      this._oldDataUpdateTriggers = dataUpdateTriggers;
      return triggerChanged;
    }
  }, {
    key: "getEncodedChannelValue",
    value: function getEncodedChannelValue(scale, data, field) {
      var nullValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultSettings.NO_VALUE_COLOR;
      var getValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultGetFieldValue;
      var type = field.type;
      var value = getValue(field, data);

      if (!(0, _dataUtils.notNullorUndefined)(value)) {
        return nullValue;
      }

      var attributeValue;

      if (type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
        // shouldn't need to convert here
        // scale Function should take care of it
        attributeValue = scale(new Date(value));
      } else {
        attributeValue = scale(value);
      }

      if (!(0, _dataUtils.notNullorUndefined)(attributeValue)) {
        attributeValue = nullValue;
      }

      return attributeValue;
    }
  }, {
    key: "updateMeta",
    value: function updateMeta(meta) {
      this.meta = _objectSpread({}, this.meta, {}, meta);
    }
  }, {
    key: "getDataUpdateTriggers",
    value: function getDataUpdateTriggers(_ref6) {
      var filteredIndex = _ref6.filteredIndex,
          id = _ref6.id;
      var columns = this.config.columns;
      return _objectSpread({
        getData: {
          datasetId: id,
          columns: columns,
          filteredIndex: filteredIndex
        },
        getMeta: {
          datasetId: id,
          columns: columns
        }
      }, (this.config.textLabel || []).reduce(function (accu, tl, i) {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, "getLabelCharacterSet-".concat(i), tl.field ? tl.field.name : null));
      }, {}));
    }
  }, {
    key: "updateData",
    value: function updateData(datasets, oldLayerData) {
      var layerDataset = datasets[this.config.dataId];
      var allData = datasets[this.config.dataId].allData;
      var getPosition = this.getPositionAccessor();
      var dataUpdateTriggers = this.getDataUpdateTriggers(layerDataset);
      var triggerChanged = this.getChangedTriggers(dataUpdateTriggers);

      if (triggerChanged.getMeta) {
        this.updateLayerMeta(allData, getPosition);
      }

      var data = [];

      if (!triggerChanged.getData) {
        // same data
        data = oldLayerData.data;
      } else {
        data = this.calculateDataAttribute(layerDataset, getPosition);
      }

      return {
        data: data,
        triggerChanged: triggerChanged
      };
    }
    /**
     * helper function to update one layer domain when state.data changed
     * if state.data change is due ot update filter, newFiler will be passed
     * called by updateAllLayerDomainData
     * @param {Object} dataset
     * @param {Object} newFilter
     * @returns {object} layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      var _this4 = this;

      var dataset = this.getDataset(datasets);

      if (!dataset) {
        return this;
      }

      Object.values(this.visualChannels).forEach(function (channel) {
        var scale = channel.scale;
        var scaleType = _this4.config[scale]; // ordinal domain is based on allData, if only filter changed
        // no need to update ordinal domain

        if (!newFilter || scaleType !== _defaultSettings.SCALE_TYPES.ordinal) {
          var domain = channel.domain;

          var updatedDomain = _this4.calculateLayerDomain(dataset, channel);

          _this4.updateLayerConfig((0, _defineProperty2["default"])({}, domain, updatedDomain));
        }
      });
      return this;
    }
  }, {
    key: "getDataset",
    value: function getDataset(datasets) {
      return datasets[this.config.dataId];
    }
    /**
     * Validate visual channel field and scales based on supported field & scale type
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      this.validateFieldType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate field type based on channelScaleType
     */

  }, {
    key: "validateFieldType",
    value: function validateFieldType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType,
          supportedFieldTypes = visualChannel.supportedFieldTypes;

      if (this.config[field]) {
        // if field is selected, check if field type is supported
        var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];

        if (!channelSupportedFieldTypes.includes(this.config[field].type)) {
          // field type is not supported, set it back to null
          // set scale back to default
          this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
        }
      }
    }
    /**
     * Validate scale type based on aggregation
     */

  }, {
    key: "validateScale",
    value: function validateScale(channel) {
      var visualChannel = this.visualChannels[channel];
      var scale = visualChannel.scale;

      if (!scale) {
        // visualChannel doesn't have scale
        return;
      }

      var scaleOptions = this.getScaleOptions(channel); // check if current selected scale is
      // supported, if not, change to default

      if (!scaleOptions.includes(this.config[scale])) {
        this.updateLayerConfig((0, _defineProperty2["default"])({}, scale, scaleOptions[0]));
      }
    }
    /**
     * Get scale options based on current field
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          scale = visualChannel.scale,
          channelScaleType = visualChannel.channelScaleType;
      return this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : [this.getDefaultLayerConfig()[scale]];
    }
  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(dataset, channel) {
      var visualChannel = this.visualChannels[channel];
      this.validateVisualChannel(channel); // calculate layer channel domain

      var updatedDomain = this.calculateLayerDomain(dataset, visualChannel);
      this.updateLayerConfig((0, _defineProperty2["default"])({}, visualChannel.domain, updatedDomain));
    }
  }, {
    key: "calculateLayerDomain",
    value: function calculateLayerDomain(dataset, visualChannel) {
      var allData = dataset.allData,
          filteredIndexForDomain = dataset.filteredIndexForDomain;
      var defaultDomain = [0, 1];
      var scale = visualChannel.scale;
      var scaleType = this.config[scale];
      var field = this.config[visualChannel.field];

      if (!field) {
        // if colorField or sizeField were set back to null
        return defaultDomain;
      }

      if (!_defaultSettings.SCALE_TYPES[scaleType]) {
        _window.console.error("scale type ".concat(scaleType, " not supported"));

        return defaultDomain;
      } // TODO: refactor to add valueAccessor to field


      var fieldIdx = field.tableFieldIndex - 1;
      var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;

      var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);

      var indexValueAccessor = function indexValueAccessor(i) {
        return valueAccessor(allData[i]);
      };

      var sortFunction = (0, _dataUtils.getSortingFunction)(field.type);

      switch (scaleType) {
        case _defaultSettings.SCALE_TYPES.ordinal:
        case _defaultSettings.SCALE_TYPES.point:
          // do not recalculate ordinal domain based on filtered data
          // don't need to update ordinal domain every time
          return (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor);

        case _defaultSettings.SCALE_TYPES.quantile:
          return (0, _dataScaleUtils.getQuantileDomain)(filteredIndexForDomain, indexValueAccessor, sortFunction);

        case _defaultSettings.SCALE_TYPES.log:
          return (0, _dataScaleUtils.getLogDomain)(filteredIndexForDomain, indexValueAccessor);

        case _defaultSettings.SCALE_TYPES.quantize:
        case _defaultSettings.SCALE_TYPES.linear:
        case _defaultSettings.SCALE_TYPES.sqrt:
        default:
          return (0, _dataScaleUtils.getLinearDomain)(filteredIndexForDomain, indexValueAccessor);
      }
    }
  }, {
    key: "isLayerHovered",
    value: function isLayerHovered(objectInfo) {
      return objectInfo && objectInfo.layer && objectInfo.picked && objectInfo.layer.props.id === this.id;
    }
  }, {
    key: "getRadiusScaleByZoom",
    value: function getRadiusScaleByZoom(mapState, fixedRadius) {
      var radiusChannel = Object.values(this.visualChannels).find(function (vc) {
        return vc.property === 'radius';
      });

      if (!radiusChannel) {
        return 1;
      }

      var field = radiusChannel.field;
      var fixed = fixedRadius === undefined ? this.config.visConfig.fixedRadius : fixedRadius;
      var radius = this.config.visConfig.radius;
      return fixed ? 1 : (this.config[field] ? 1 : radius) * this.getZoomFactor(mapState);
    }
  }, {
    key: "shouldCalculateLayerData",
    value: function shouldCalculateLayerData(props) {
      var _this5 = this;

      return props.some(function (p) {
        return !_this5.noneLayerDataAffectingProps.includes(p);
      });
    }
  }, {
    key: "getBrushingExtensionProps",
    value: function getBrushingExtensionProps(interactionConfig, brushingTarget) {
      var brush = interactionConfig.brush;
      return {
        // brushing
        autoHighlight: !brush.enabled,
        brushingRadius: brush.config.size * 1000,
        brushingTarget: brushingTarget || 'source',
        brushingEnabled: brush.enabled
      };
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(_ref7) {
      var idx = _ref7.idx,
          gpuFilter = _ref7.gpuFilter,
          mapState = _ref7.mapState;
      return {
        id: this.id,
        idx: idx,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT,
        pickable: true,
        wrapLongitude: true,
        parameters: {
          depthTest: Boolean(mapState.dragRotate || this.config.visConfig.enable3d)
        },
        // visconfig
        opacity: this.config.visConfig.opacity,
        highlightColor: this.config.highlightColor,
        // data filtering
        extensions: [dataFilterExtension],
        filterRange: gpuFilter.filterRange
      };
    }
  }, {
    key: "getDefaultHoverLayerProps",
    value: function getDefaultHoverLayerProps() {
      return {
        id: "".concat(this.id, "-hovered"),
        pickable: false,
        wrapLongitude: true,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT
      };
    }
  }, {
    key: "renderTextLabelLayer",
    value: function renderTextLabelLayer(_ref8, renderOpts) {
      var _this6 = this;

      var getPosition = _ref8.getPosition,
          getPixelOffset = _ref8.getPixelOffset,
          updateTriggers = _ref8.updateTriggers,
          sharedProps = _ref8.sharedProps;
      var data = renderOpts.data,
          mapState = renderOpts.mapState;
      var textLabel = this.config.textLabel;
      return data.textLabels.reduce(function (accu, d, i) {
        if (d.getText) {
          accu.push(new _layers.TextLayer(_objectSpread({}, sharedProps, {
            id: "".concat(_this6.id, "-label-").concat(textLabel[i].field.name),
            data: data.data,
            getText: d.getText,
            getPosition: getPosition,
            characterSet: d.characterSet,
            getPixelOffset: getPixelOffset(textLabel[i]),
            getSize: 1,
            sizeScale: textLabel[i].size,
            getTextAnchor: textLabel[i].anchor,
            getAlignmentBaseline: textLabel[i].alignment,
            getColor: textLabel[i].color,
            parameters: {
              // text will always show on top of all layers
              depthTest: false
            },
            getFilterValue: data.getFilterValue,
            updateTriggers: _objectSpread({}, updateTriggers, {
              getText: textLabel[i].field.name,
              getPixelOffset: _objectSpread({}, updateTriggers.getRadius, {
                mapState: mapState,
                anchor: textLabel[i].anchor,
                alignment: textLabel[i].alignment
              }),
              getTextAnchor: textLabel[i].anchor,
              getAlignmentBaseline: textLabel[i].alignment,
              getColor: textLabel[i].color
            })
          })));
        }

        return accu;
      }, []);
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _defaultLayerIcon["default"];
    }
  }, {
    key: "overlayType",
    get: function get() {
      return OVERLAY_TYPE.deckgl;
    }
  }, {
    key: "type",
    get: function get() {
      return null;
    }
  }, {
    key: "name",
    get: function get() {
      return this.type;
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return ['label', 'opacity', 'thickness', 'isVisible'];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: {
          property: 'size',
          field: 'sizeField',
          scale: 'sizeScale',
          domain: 'sizeDomain',
          range: 'sizeRange',
          key: 'size',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }
    /*
     * Column pairs maps layer column to a specific field pairs,
     * By default, it is set to null
     */

  }, {
    key: "columnPairs",
    get: function get() {
      return null;
    }
    /*
     * Default point column pairs, can be used for point based layers: point, icon etc.
     */

  }, {
    key: "defaultPointColumnPairs",
    get: function get() {
      return {
        lat: {
          pair: 'lng',
          fieldPairKey: 'lat'
        },
        lng: {
          pair: 'lat',
          fieldPairKey: 'lng'
        }
      };
    }
    /*
     * Default link column pairs, can be used for link based layers: arc, line etc
     */

  }, {
    key: "defaultLinkColumnPairs",
    get: function get() {
      return {
        lat0: {
          pair: 'lng0',
          fieldPairKey: 'lat'
        },
        lng0: {
          pair: 'lat0',
          fieldPairKey: 'lng'
        },
        lat1: {
          pair: 'lng1',
          fieldPairKey: 'lat'
        },
        lng1: {
          pair: 'lat1',
          fieldPairKey: 'lng'
        }
      };
    }
    /**
     * Return a React component for to render layer instructions in a modal
     * @returns {object} - an object
     * @example
     *  return {
     *    id: 'iconInfo',
     *    template: IconInfoModal,
     *    modalProps: {
     *      title: 'How to draw icons'
     *   };
     * }
     */

  }, {
    key: "layerInfoModal",
    get: function get() {
      return null;
    }
    /*
     * Given a dataset, automatically find props to create layer based on it
     * and return the props and previous found layers.
     * By default, no layers will be found
     */

  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(dataset, foundLayers) {
      return {
        props: [],
        foundLayers: foundLayers
      };
    }
    /**
     * Given a array of preset required column names
     * found field that has the same name to set as layer column
     *
     * @param {object} defaultFields
     * @param {object[]} allFields
     * @returns {object[] | null} all possible required layer column pairs
     */

  }, {
    key: "findDefaultColumnField",
    value: function findDefaultColumnField(defaultFields, allFields) {
      // find all matched fields for each required col
      var requiredColumns = Object.keys(defaultFields).reduce(function (prev, key) {
        var requiredFields = allFields.filter(function (f) {
          return f.name === defaultFields[key] || defaultFields[key].includes(f.name);
        });
        prev[key] = requiredFields.length ? requiredFields.map(function (f) {
          return {
            value: f.name,
            fieldIdx: f.tableFieldIndex - 1
          };
        }) : null;
        return prev;
      }, {});

      if (!Object.values(requiredColumns).every(Boolean)) {
        // if any field missing, return null
        return null;
      }

      return this.getAllPossibleColumnParis(requiredColumns);
    }
  }, {
    key: "getAllPossibleColumnParis",
    value: function getAllPossibleColumnParis(requiredColumns) {
      // for multiple matched field for one required column, return multiple
      // combinations, e. g. if column a has 2 matched, column b has 3 matched
      // 6 possible column pairs will be returned
      var allKeys = Object.keys(requiredColumns);
      var pointers = allKeys.map(function (k, i) {
        return i === allKeys.length - 1 ? -1 : 0;
      });
      var countPerKey = allKeys.map(function (k) {
        return requiredColumns[k].length;
      });
      var pairs = [];
      /* eslint-disable no-loop-func */

      while (incrementPointers(pointers, countPerKey, pointers.length - 1)) {
        var newPair = pointers.reduce(function (prev, cuur, i) {
          prev[allKeys[i]] = requiredColumns[allKeys[i]][cuur];
          return prev;
        }, {});
        pairs.push(newPair);
      }
      /* eslint-enable no-loop-func */
      // recursively increment pointers


      function incrementPointers(pts, counts, index) {
        if (index === 0 && pts[0] === counts[0] - 1) {
          // nothing to increment
          return false;
        }

        if (pts[index] + 1 < counts[index]) {
          pts[index] = pts[index] + 1;
          return true;
        }

        pts[index] = 0;
        return incrementPointers(pts, counts, index - 1);
      }

      return pairs;
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(c) {
      return (0, _colorUtils.hexToRgb)(c);
    }
  }]);
  return Layer;
}();

exports["default"] = Layer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYmFzZS1sYXllci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNvbG9yIiwiTUFYX1NBTVBMRV9TSVpFIiwiZGF0YUZpbHRlckV4dGVuc2lvbiIsIkRhdGFGaWx0ZXJFeHRlbnNpb24iLCJmaWx0ZXJTaXplIiwiTUFYX0dQVV9GSUxURVJTIiwiaWRlbnRpdHkiLCJkIiwiT1ZFUkxBWV9UWVBFIiwiZGVja2dsIiwibWFwYm94Z2wiLCJsYXllckNvbG9ycyIsIk9iamVjdCIsInZhbHVlcyIsIkRhdGFWaXpDb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImluZGV4IiwibGVuZ3RoIiwiY29sb3JNYWtlciIsImRlZmF1bHRHZXRGaWVsZFZhbHVlIiwiZmllbGQiLCJ0YWJsZUZpZWxkSW5kZXgiLCJMYXllciIsInByb3BzIiwiaWQiLCJtZXRhIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJjb25maWciLCJnZXREZWZhdWx0TGF5ZXJDb25maWciLCJjb2x1bW5zIiwiZ2V0TGF5ZXJDb2x1bW5zIiwiZGF0YUlkIiwibGFiZWwiLCJjb2xvciIsIm5leHQiLCJ2YWx1ZSIsImlzVmlzaWJsZSIsImlzQ29uZmlnQWN0aXZlIiwiaGlnaGxpZ2h0Q29sb3IiLCJjb2xvckZpZWxkIiwiY29sb3JEb21haW4iLCJjb2xvclNjYWxlIiwiU0NBTEVfVFlQRVMiLCJxdWFudGlsZSIsInNpemVEb21haW4iLCJzaXplU2NhbGUiLCJsaW5lYXIiLCJzaXplRmllbGQiLCJ2aXNDb25maWciLCJ0ZXh0TGFiZWwiLCJERUZBVUxUX1RFWFRfTEFCRUwiLCJjb2xvclVJIiwiREVGQVVMVF9DT0xPUl9VSSIsImNvbG9yUmFuZ2UiLCJhbmltYXRpb24iLCJlbmFibGVkIiwia2V5IiwidmlzdWFsQ2hhbm5lbHMiLCJyYW5nZSIsIm1lYXN1cmUiLCJuYW1lIiwiZGVmYXVsdE1lYXN1cmUiLCJ1cGRhdGUiLCJmaWVsZElkeCIsInBhaXIiLCJjb2x1bW5QYWlycyIsInBhcnRuZXJLZXkiLCJmaWVsZFBhaXJLZXkiLCJwYXJ0bmVyRmllbGRQYWlyS2V5Iiwiem9vbSIsInpvb21PZmZzZXQiLCJNYXRoIiwicG93IiwibWF4IiwiZGF0YXNldHMiLCJmaWx0ZXJlZEluZGV4Iiwib2JqZWN0IiwiZGF0YSIsImNvbmZpZ1RvQ29weSIsInNoYWxsb3dDb3B5IiwiY29uY2F0IiwidiIsIm5vdFRvQ29weSIsImRvbWFpbiIsImZvckVhY2giLCJncm91cCIsInB1c2giLCJjdXJyZW50Q29uZmlnIiwiY29waWVkIiwiY29weUxheWVyQ29uZmlnIiwidXBkYXRlTGF5ZXJDb25maWciLCJrZXlzIiwiY2hhbm5lbCIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsImluY2x1ZGVzIiwibGF5ZXJWaXNDb25maWdzIiwiaXRlbSIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiZXZlcnkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJyZXF1aXJlZCIsInJlcXVpcmVkTGF5ZXJDb2x1bW5zIiwicmVkdWNlIiwiYWNjdSIsIm9wdGlvbmFsIiwib3B0aW9uYWxDb2x1bW5zIiwibmV3Q29uZmlnIiwibmV3VmlzQ29uZmlnIiwicHJvcCIsInByZXZpb3VzIiwiY29sb3JVSVByb3AiLCJlbnRyaWVzIiwiaXNDb2xvclJhbmdlIiwiY29sb3JzIiwidXBkYXRlQ29sb3JVSUJ5Q29sb3JSYW5nZSIsInVwZGF0ZUNvbG9yUmFuZ2VCeUNvbG9yVUkiLCJ1cGRhdGVDdXN0b21QYWxldHRlIiwiY29sb3JSYW5nZUNvbmZpZyIsImN1c3RvbSIsImN1c3RvbVBhbGV0dGUiLCJzaG93RHJvcGRvd24iLCJzdGVwcyIsInJldmVyc2VkIiwiQm9vbGVhbiIsInNob3VsZFVwZGF0ZSIsInNvbWUiLCJzYW1lR3JvdXAiLCJDT0xPUl9SQU5HRVMiLCJmaWx0ZXIiLCJjciIsImZpbmQiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImxheWVyRGF0YSIsInR5cGUiLCJoYXNBbGxDb2x1bW5zIiwiaGFzTGF5ZXJEYXRhIiwicmVuZGVyTGF5ZXIiLCJzY2FsZSIsImZpeGVkIiwiU0NBTEVfRlVOQyIsImFsbERhdGEiLCJnZXRQb3NpdGlvbiIsInNhbXBsZURhdGEiLCJwb2ludHMiLCJsYXRCb3VuZHMiLCJsbmdCb3VuZHMiLCJkYXRhVXBkYXRlVHJpZ2dlcnMiLCJ0cmlnZ2VyQ2hhbmdlZCIsIl9vbGREYXRhVXBkYXRlVHJpZ2dlcnMiLCJudWxsVmFsdWUiLCJOT19WQUxVRV9DT0xPUiIsImdldFZhbHVlIiwiYXR0cmlidXRlVmFsdWUiLCJBTExfRklFTERfVFlQRVMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0RGF0YSIsImRhdGFzZXRJZCIsImdldE1ldGEiLCJ0bCIsImkiLCJvbGRMYXllckRhdGEiLCJsYXllckRhdGFzZXQiLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiZ2V0RGF0YVVwZGF0ZVRyaWdnZXJzIiwiZ2V0Q2hhbmdlZFRyaWdnZXJzIiwidXBkYXRlTGF5ZXJNZXRhIiwiY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZSIsIm5ld0ZpbHRlciIsImRhdGFzZXQiLCJnZXREYXRhc2V0Iiwic2NhbGVUeXBlIiwib3JkaW5hbCIsInVwZGF0ZWREb21haW4iLCJjYWxjdWxhdGVMYXllckRvbWFpbiIsInZhbGlkYXRlRmllbGRUeXBlIiwidmFsaWRhdGVTY2FsZSIsInZpc3VhbENoYW5uZWwiLCJjaGFubmVsU2NhbGVUeXBlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic2NhbGVPcHRpb25zIiwiZ2V0U2NhbGVPcHRpb25zIiwiRklFTERfT1BUUyIsImZpbHRlcmVkSW5kZXhGb3JEb21haW4iLCJkZWZhdWx0RG9tYWluIiwiQ29uc29sZSIsImVycm9yIiwiaXNUaW1lIiwidmFsdWVBY2Nlc3NvciIsIm1heWJlVG9EYXRlIiwiYmluZCIsImZvcm1hdCIsImluZGV4VmFsdWVBY2Nlc3NvciIsInNvcnRGdW5jdGlvbiIsInBvaW50IiwibG9nIiwicXVhbnRpemUiLCJzcXJ0Iiwib2JqZWN0SW5mbyIsImxheWVyIiwicGlja2VkIiwibWFwU3RhdGUiLCJmaXhlZFJhZGl1cyIsInJhZGl1c0NoYW5uZWwiLCJ2YyIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwicmFkaXVzIiwiZ2V0Wm9vbUZhY3RvciIsIm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcyIsImludGVyYWN0aW9uQ29uZmlnIiwiYnJ1c2hpbmdUYXJnZXQiLCJicnVzaCIsImF1dG9IaWdobGlnaHQiLCJicnVzaGluZ1JhZGl1cyIsInNpemUiLCJicnVzaGluZ0VuYWJsZWQiLCJpZHgiLCJncHVGaWx0ZXIiLCJjb29yZGluYXRlU3lzdGVtIiwiQ09PUkRJTkFURV9TWVNURU0iLCJMTkdMQVQiLCJwaWNrYWJsZSIsIndyYXBMb25naXR1ZGUiLCJwYXJhbWV0ZXJzIiwiZGVwdGhUZXN0IiwiZHJhZ1JvdGF0ZSIsImVuYWJsZTNkIiwib3BhY2l0eSIsImV4dGVuc2lvbnMiLCJmaWx0ZXJSYW5nZSIsInJlbmRlck9wdHMiLCJnZXRQaXhlbE9mZnNldCIsInVwZGF0ZVRyaWdnZXJzIiwic2hhcmVkUHJvcHMiLCJ0ZXh0TGFiZWxzIiwiZ2V0VGV4dCIsIlRleHRMYXllciIsImNoYXJhY3RlclNldCIsImdldFNpemUiLCJnZXRUZXh0QW5jaG9yIiwiYW5jaG9yIiwiZ2V0QWxpZ25tZW50QmFzZWxpbmUiLCJhbGlnbm1lbnQiLCJnZXRDb2xvciIsImdldEZpbHRlclZhbHVlIiwiZ2V0UmFkaXVzIiwiRGVmYXVsdExheWVySWNvbiIsIkNIQU5ORUxfU0NBTEVTIiwibGF0IiwibG5nIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImZvdW5kTGF5ZXJzIiwiZGVmYXVsdEZpZWxkcyIsImFsbEZpZWxkcyIsInJlcXVpcmVkQ29sdW1ucyIsInByZXYiLCJyZXF1aXJlZEZpZWxkcyIsImYiLCJnZXRBbGxQb3NzaWJsZUNvbHVtblBhcmlzIiwiYWxsS2V5cyIsInBvaW50ZXJzIiwiayIsImNvdW50UGVyS2V5IiwicGFpcnMiLCJpbmNyZW1lbnRQb2ludGVycyIsIm5ld1BhaXIiLCJjdXVyIiwicHRzIiwiY291bnRzIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQVVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQVFBOztBQU1BOzs7Ozs7d0RBZ0JVQSxhOztBQWRWOzs7O0FBSUEsSUFBTUMsZUFBZSxHQUFHLElBQXhCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsSUFBSUMsK0JBQUosQ0FBd0I7QUFBQ0MsRUFBQUEsVUFBVSxFQUFFQztBQUFiLENBQXhCLENBQTVCOztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLENBQUM7QUFBQSxTQUFJQSxDQUFKO0FBQUEsQ0FBbEI7O0FBRU8sSUFBTUMsWUFBWSxHQUFHLDJCQUFVO0FBQ3BDQyxFQUFBQSxNQUFNLEVBQUUsSUFENEI7QUFFcENDLEVBQUFBLFFBQVEsRUFBRTtBQUYwQixDQUFWLENBQXJCOztBQUtBLElBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGdDQUFkLEVBQTZCQyxHQUE3QixDQUFpQ0Msb0JBQWpDLENBQXBCOzs7QUFDUCxTQUFVaEIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTWlCLFVBQUFBLEtBRE4sR0FDYyxDQURkOztBQUFBO0FBQUEsZ0JBRVNBLEtBQUssR0FBR04sV0FBVyxDQUFDTyxNQUFaLEdBQXFCLENBRnRDO0FBQUE7QUFBQTtBQUFBOztBQUdJLGNBQUlELEtBQUssS0FBS04sV0FBVyxDQUFDTyxNQUExQixFQUFrQztBQUNoQ0QsWUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDRDs7QUFMTDtBQU1JLGlCQUFNTixXQUFXLENBQUNNLEtBQUssRUFBTixDQUFqQjs7QUFOSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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Q25RLEtBQUQsQ0FBSCxHQUFhLENBQTFCO0FBQ0EsaUJBQU8sSUFBUDtBQUNEOztBQUVEbVEsUUFBQUEsR0FBRyxDQUFDblEsS0FBRCxDQUFILEdBQWEsQ0FBYjtBQUNBLGVBQU9nUSxpQkFBaUIsQ0FBQ0csR0FBRCxFQUFNQyxNQUFOLEVBQWNwUSxLQUFLLEdBQUcsQ0FBdEIsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPK1AsS0FBUDtBQUNEOzs7NkJBRWVNLEMsRUFBRztBQUNqQixhQUFPLDBCQUFTQSxDQUFULENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCBrZXltaXJyb3IgZnJvbSAna2V5bWlycm9yJztcbmltcG9ydCB7RGF0YUZpbHRlckV4dGVuc2lvbn0gZnJvbSAnQGRlY2suZ2wvZXh0ZW5zaW9ucyc7XG5pbXBvcnQge0NPT1JESU5BVEVfU1lTVEVNfSBmcm9tICdAZGVjay5nbC9jb3JlJztcbmltcG9ydCB7VGV4dExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuXG5pbXBvcnQgRGVmYXVsdExheWVySWNvbiBmcm9tICcuL2RlZmF1bHQtbGF5ZXItaWNvbic7XG5pbXBvcnQge2RpZmZVcGRhdGVUcmlnZ2Vyc30gZnJvbSAnLi9sYXllci11cGRhdGUnO1xuXG5pbXBvcnQge1xuICBBTExfRklFTERfVFlQRVMsXG4gIE5PX1ZBTFVFX0NPTE9SLFxuICBTQ0FMRV9UWVBFUyxcbiAgQ0hBTk5FTF9TQ0FMRVMsXG4gIEZJRUxEX09QVFMsXG4gIFNDQUxFX0ZVTkMsXG4gIENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyxcbiAgTUFYX0dQVV9GSUxURVJTXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7Q09MT1JfUkFOR0VTfSBmcm9tICdjb25zdGFudHMvY29sb3ItcmFuZ2VzJztcbmltcG9ydCB7RGF0YVZpekNvbG9yc30gZnJvbSAnY29uc3RhbnRzL2N1c3RvbS1jb2xvci1yYW5nZXMnO1xuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHUywgREVGQVVMVF9URVhUX0xBQkVMLCBERUZBVUxUX0NPTE9SX1VJfSBmcm9tICcuL2xheWVyLWZhY3RvcnknO1xuXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBpc1BsYWluT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmltcG9ydCB7XG4gIGdldFNhbXBsZURhdGEsXG4gIGdldExhdExuZ0JvdW5kcyxcbiAgbWF5YmVUb0RhdGUsXG4gIGdldFNvcnRpbmdGdW5jdGlvbixcbiAgbm90TnVsbG9yVW5kZWZpbmVkXG59IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5pbXBvcnQge1xuICBnZXRRdWFudGlsZURvbWFpbixcbiAgZ2V0T3JkaW5hbERvbWFpbixcbiAgZ2V0TG9nRG9tYWluLFxuICBnZXRMaW5lYXJEb21haW5cbn0gZnJvbSAndXRpbHMvZGF0YS1zY2FsZS11dGlscyc7XG5pbXBvcnQge2hleFRvUmdiLCBnZXRDb2xvckdyb3VwQnlOYW1lLCByZXZlcnNlQ29sb3JSYW5nZX0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuXG4vKipcbiAqIEFwcHJveC4gbnVtYmVyIG9mIHBvaW50cyB0byBzYW1wbGUgaW4gYSBsYXJnZSBkYXRhIHNldFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgTUFYX1NBTVBMRV9TSVpFID0gNTAwMDtcbmNvbnN0IGRhdGFGaWx0ZXJFeHRlbnNpb24gPSBuZXcgRGF0YUZpbHRlckV4dGVuc2lvbih7ZmlsdGVyU2l6ZTogTUFYX0dQVV9GSUxURVJTfSk7XG5jb25zdCBpZGVudGl0eSA9IGQgPT4gZDtcblxuZXhwb3J0IGNvbnN0IE9WRVJMQVlfVFlQRSA9IGtleW1pcnJvcih7XG4gIGRlY2tnbDogbnVsbCxcbiAgbWFwYm94Z2w6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgbGF5ZXJDb2xvcnMgPSBPYmplY3QudmFsdWVzKERhdGFWaXpDb2xvcnMpLm1hcChoZXhUb1JnYik7XG5mdW5jdGlvbiogZ2VuZXJhdGVDb2xvcigpIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgd2hpbGUgKGluZGV4IDwgbGF5ZXJDb2xvcnMubGVuZ3RoICsgMSkge1xuICAgIGlmIChpbmRleCA9PT0gbGF5ZXJDb2xvcnMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIHlpZWxkIGxheWVyQ29sb3JzW2luZGV4KytdO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvck1ha2VyID0gZ2VuZXJhdGVDb2xvcigpO1xuY29uc3QgZGVmYXVsdEdldEZpZWxkVmFsdWUgPSAoZmllbGQsIGQpID0+IGRbZmllbGQudGFibGVGaWVsZEluZGV4IC0gMV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHRoaXMuaWQgPSBwcm9wcy5pZCB8fCBnZW5lcmF0ZUhhc2hJZCg2KTtcblxuICAgIC8vIG1ldGFcbiAgICB0aGlzLm1ldGEgPSB7fTtcblxuICAgIC8vIHZpc0NvbmZpZ1NldHRpbmdzXG4gICAgdGhpcy52aXNDb25maWdTZXR0aW5ncyA9IHt9O1xuXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmdldERlZmF1bHRMYXllckNvbmZpZyh7XG4gICAgICBjb2x1bW5zOiB0aGlzLmdldExheWVyQ29sdW1ucygpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIERlZmF1bHRMYXllckljb247XG4gIH1cblxuICBnZXQgb3ZlcmxheVR5cGUoKSB7XG4gICAgcmV0dXJuIE9WRVJMQVlfVFlQRS5kZWNrZ2w7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXQgaXNBZ2dyZWdhdGVkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXQgb3B0aW9uYWxDb2x1bW5zKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldCBub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMoKSB7XG4gICAgcmV0dXJuIFsnbGFiZWwnLCAnb3BhY2l0eScsICd0aGlja25lc3MnLCAnaXNWaXNpYmxlJ107XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgICAgICBmaWVsZDogJ2NvbG9yRmllbGQnLFxuICAgICAgICBzY2FsZTogJ2NvbG9yU2NhbGUnLFxuICAgICAgICBkb21haW46ICdjb2xvckRvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnY29sb3JSYW5nZScsXG4gICAgICAgIGtleTogJ2NvbG9yJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3JcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIHByb3BlcnR5OiAnc2l6ZScsXG4gICAgICAgIGZpZWxkOiAnc2l6ZUZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdzaXplU2NhbGUnLFxuICAgICAgICBkb21haW46ICdzaXplRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdzaXplUmFuZ2UnLFxuICAgICAgICBrZXk6ICdzaXplJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuc2l6ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKlxuICAgKiBDb2x1bW4gcGFpcnMgbWFwcyBsYXllciBjb2x1bW4gdG8gYSBzcGVjaWZpYyBmaWVsZCBwYWlycyxcbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG51bGxcbiAgICovXG4gIGdldCBjb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qXG4gICAqIERlZmF1bHQgcG9pbnQgY29sdW1uIHBhaXJzLCBjYW4gYmUgdXNlZCBmb3IgcG9pbnQgYmFzZWQgbGF5ZXJzOiBwb2ludCwgaWNvbiBldGMuXG4gICAqL1xuICBnZXQgZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdDoge3BhaXI6ICdsbmcnLCBmaWVsZFBhaXJLZXk6ICdsYXQnfSxcbiAgICAgIGxuZzoge3BhaXI6ICdsYXQnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfVxuICAgIH07XG4gIH1cblxuICAvKlxuICAgKiBEZWZhdWx0IGxpbmsgY29sdW1uIHBhaXJzLCBjYW4gYmUgdXNlZCBmb3IgbGluayBiYXNlZCBsYXllcnM6IGFyYywgbGluZSBldGNcbiAgICovXG4gIGdldCBkZWZhdWx0TGlua0NvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXQwOiB7cGFpcjogJ2xuZzAnLCBmaWVsZFBhaXJLZXk6ICdsYXQnfSxcbiAgICAgIGxuZzA6IHtwYWlyOiAnbGF0MCcsIGZpZWxkUGFpcktleTogJ2xuZyd9LFxuICAgICAgbGF0MToge3BhaXI6ICdsbmcxJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmcxOiB7cGFpcjogJ2xhdDEnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgUmVhY3QgY29tcG9uZW50IGZvciB0byByZW5kZXIgbGF5ZXIgaW5zdHJ1Y3Rpb25zIGluIGEgbW9kYWxcbiAgICogQHJldHVybnMge29iamVjdH0gLSBhbiBvYmplY3RcbiAgICogQGV4YW1wbGVcbiAgICogIHJldHVybiB7XG4gICAqICAgIGlkOiAnaWNvbkluZm8nLFxuICAgKiAgICB0ZW1wbGF0ZTogSWNvbkluZm9Nb2RhbCxcbiAgICogICAgbW9kYWxQcm9wczoge1xuICAgKiAgICAgIHRpdGxlOiAnSG93IHRvIGRyYXcgaWNvbnMnXG4gICAqICAgfTtcbiAgICogfVxuICAgKi9cbiAgZ2V0IGxheWVySW5mb01vZGFsKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qXG4gICAqIEdpdmVuIGEgZGF0YXNldCwgYXV0b21hdGljYWxseSBmaW5kIHByb3BzIHRvIGNyZWF0ZSBsYXllciBiYXNlZCBvbiBpdFxuICAgKiBhbmQgcmV0dXJuIHRoZSBwcm9wcyBhbmQgcHJldmlvdXMgZm91bmQgbGF5ZXJzLlxuICAgKiBCeSBkZWZhdWx0LCBubyBsYXllcnMgd2lsbCBiZSBmb3VuZFxuICAgKi9cbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyhkYXRhc2V0LCBmb3VuZExheWVycykge1xuICAgIHJldHVybiB7cHJvcHM6IFtdLCBmb3VuZExheWVyc307XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBhcnJheSBvZiBwcmVzZXQgcmVxdWlyZWQgY29sdW1uIG5hbWVzXG4gICAqIGZvdW5kIGZpZWxkIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgdG8gc2V0IGFzIGxheWVyIGNvbHVtblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdEZpZWxkc1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBhbGxGaWVsZHNcbiAgICogQHJldHVybnMge29iamVjdFtdIHwgbnVsbH0gYWxsIHBvc3NpYmxlIHJlcXVpcmVkIGxheWVyIGNvbHVtbiBwYWlyc1xuICAgKi9cbiAgc3RhdGljIGZpbmREZWZhdWx0Q29sdW1uRmllbGQoZGVmYXVsdEZpZWxkcywgYWxsRmllbGRzKSB7XG4gICAgLy8gZmluZCBhbGwgbWF0Y2hlZCBmaWVsZHMgZm9yIGVhY2ggcmVxdWlyZWQgY29sXG4gICAgY29uc3QgcmVxdWlyZWRDb2x1bW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdEZpZWxkcykucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gYWxsRmllbGRzLmZpbHRlcihcbiAgICAgICAgZiA9PiBmLm5hbWUgPT09IGRlZmF1bHRGaWVsZHNba2V5XSB8fCBkZWZhdWx0RmllbGRzW2tleV0uaW5jbHVkZXMoZi5uYW1lKVxuICAgICAgKTtcblxuICAgICAgcHJldltrZXldID0gcmVxdWlyZWRGaWVsZHMubGVuZ3RoXG4gICAgICAgID8gcmVxdWlyZWRGaWVsZHMubWFwKGYgPT4gKHtcbiAgICAgICAgICAgIHZhbHVlOiBmLm5hbWUsXG4gICAgICAgICAgICBmaWVsZElkeDogZi50YWJsZUZpZWxkSW5kZXggLSAxXG4gICAgICAgICAgfSkpXG4gICAgICAgIDogbnVsbDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcblxuICAgIGlmICghT2JqZWN0LnZhbHVlcyhyZXF1aXJlZENvbHVtbnMpLmV2ZXJ5KEJvb2xlYW4pKSB7XG4gICAgICAvLyBpZiBhbnkgZmllbGQgbWlzc2luZywgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldEFsbFBvc3NpYmxlQ29sdW1uUGFyaXMocmVxdWlyZWRDb2x1bW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxQb3NzaWJsZUNvbHVtblBhcmlzKHJlcXVpcmVkQ29sdW1ucykge1xuICAgIC8vIGZvciBtdWx0aXBsZSBtYXRjaGVkIGZpZWxkIGZvciBvbmUgcmVxdWlyZWQgY29sdW1uLCByZXR1cm4gbXVsdGlwbGVcbiAgICAvLyBjb21iaW5hdGlvbnMsIGUuIGcuIGlmIGNvbHVtbiBhIGhhcyAyIG1hdGNoZWQsIGNvbHVtbiBiIGhhcyAzIG1hdGNoZWRcbiAgICAvLyA2IHBvc3NpYmxlIGNvbHVtbiBwYWlycyB3aWxsIGJlIHJldHVybmVkXG4gICAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkQ29sdW1ucyk7XG4gICAgY29uc3QgcG9pbnRlcnMgPSBhbGxLZXlzLm1hcCgoaywgaSkgPT4gKGkgPT09IGFsbEtleXMubGVuZ3RoIC0gMSA/IC0xIDogMCkpO1xuICAgIGNvbnN0IGNvdW50UGVyS2V5ID0gYWxsS2V5cy5tYXAoayA9PiByZXF1aXJlZENvbHVtbnNba10ubGVuZ3RoKTtcbiAgICBjb25zdCBwYWlycyA9IFtdO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4gICAgd2hpbGUgKGluY3JlbWVudFBvaW50ZXJzKHBvaW50ZXJzLCBjb3VudFBlcktleSwgcG9pbnRlcnMubGVuZ3RoIC0gMSkpIHtcbiAgICAgIGNvbnN0IG5ld1BhaXIgPSBwb2ludGVycy5yZWR1Y2UoKHByZXYsIGN1dXIsIGkpID0+IHtcbiAgICAgICAgcHJldlthbGxLZXlzW2ldXSA9IHJlcXVpcmVkQ29sdW1uc1thbGxLZXlzW2ldXVtjdXVyXTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIHBhaXJzLnB1c2gobmV3UGFpcik7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cbiAgICAvLyByZWN1cnNpdmVseSBpbmNyZW1lbnQgcG9pbnRlcnNcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnRQb2ludGVycyhwdHMsIGNvdW50cywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBwdHNbMF0gPT09IGNvdW50c1swXSAtIDEpIHtcbiAgICAgICAgLy8gbm90aGluZyB0byBpbmNyZW1lbnRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHRzW2luZGV4XSArIDEgPCBjb3VudHNbaW5kZXhdKSB7XG4gICAgICAgIHB0c1tpbmRleF0gPSBwdHNbaW5kZXhdICsgMTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHB0c1tpbmRleF0gPSAwO1xuICAgICAgcmV0dXJuIGluY3JlbWVudFBvaW50ZXJzKHB0cywgY291bnRzLCBpbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBwYWlycztcbiAgfVxuXG4gIHN0YXRpYyBoZXhUb1JnYihjKSB7XG4gICAgcmV0dXJuIGhleFRvUmdiKGMpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YUlkOiBwcm9wcy5kYXRhSWQgfHwgbnVsbCxcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCB8fCAnbmV3IGxheWVyJyxcbiAgICAgIGNvbG9yOiBwcm9wcy5jb2xvciB8fCBjb2xvck1ha2VyLm5leHQoKS52YWx1ZSxcbiAgICAgIGNvbHVtbnM6IHByb3BzLmNvbHVtbnMgfHwgbnVsbCxcbiAgICAgIGlzVmlzaWJsZTogcHJvcHMuaXNWaXNpYmxlIHx8IGZhbHNlLFxuICAgICAgaXNDb25maWdBY3RpdmU6IHByb3BzLmlzQ29uZmlnQWN0aXZlIHx8IGZhbHNlLFxuICAgICAgaGlnaGxpZ2h0Q29sb3I6IHByb3BzLmhpZ2hsaWdodENvbG9yIHx8IFsyNTIsIDI0MiwgMjYsIDI1NV0sXG5cbiAgICAgIC8vIFRPRE86IHJlZmFjdG9yIHRoaXMgaW50byBzZXBhcmF0ZSB2aXN1YWwgQ2hhbm5lbCBjb25maWdcbiAgICAgIC8vIGNvbG9yIGJ5IGZpZWxkLCBkb21haW4gaXMgc2V0IGJ5IGZpbHRlcnMsIGZpZWxkLCBzY2FsZSB0eXBlXG4gICAgICBjb2xvckZpZWxkOiBudWxsLFxuICAgICAgY29sb3JEb21haW46IFswLCAxXSxcbiAgICAgIGNvbG9yU2NhbGU6IFNDQUxFX1RZUEVTLnF1YW50aWxlLFxuXG4gICAgICAvLyBjb2xvciBieSBzaXplLCBkb21haW4gaXMgc2V0IGJ5IGZpbHRlcnMsIGZpZWxkLCBzY2FsZSB0eXBlXG4gICAgICBzaXplRG9tYWluOiBbMCwgMV0sXG4gICAgICBzaXplU2NhbGU6IFNDQUxFX1RZUEVTLmxpbmVhcixcbiAgICAgIHNpemVGaWVsZDogbnVsbCxcblxuICAgICAgdmlzQ29uZmlnOiB7fSxcblxuICAgICAgdGV4dExhYmVsOiBbREVGQVVMVF9URVhUX0xBQkVMXSxcblxuICAgICAgY29sb3JVSToge1xuICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUl9VSSxcbiAgICAgICAgY29sb3JSYW5nZTogREVGQVVMVF9DT0xPUl9VSVxuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbjoge2VuYWJsZWQ6IGZhbHNlfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiBhIHZpc3VhbENoYW5uZWwgY29uZmlnXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMge3tsYWJlbDogc3RyaW5nLCBtZWFzdXJlOiAoc3RyaW5nfHN0cmluZyl9fVxuICAgKi9cbiAgZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKGtleSkge1xuICAgIC8vIGUuZy4gbGFiZWw6IENvbG9yLCBtZWFzdXJlOiBWZWhpY2xlIFR5cGVcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLnJhbmdlXS5sYWJlbCxcbiAgICAgIG1lYXN1cmU6IHRoaXMuY29uZmlnW3RoaXMudmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF1cbiAgICAgICAgPyB0aGlzLmNvbmZpZ1t0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdLm5hbWVcbiAgICAgICAgOiB0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZGVmYXVsdE1lYXN1cmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBhIGZpZWxkIHRvIGxheWVyIGNvbHVtbiwgcmV0dXJuIGNvbHVtbiBjb25maWdcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcbiAgICogQHBhcmFtIGZpZWxkIC0gU2VsZWN0ZWQgZmllbGRcbiAgICogQHJldHVybnMge3t9fSAtIENvbHVtbiBjb25maWdcbiAgICovXG4gIGFzc2lnbkNvbHVtbihrZXksIGZpZWxkKSB7XG4gICAgLy8gZmllbGQgdmFsdWUgY291bGQgYmUgbnVsbCBmb3Igb3B0aW9uYWwgY29sdW1uc1xuICAgIGNvbnN0IHVwZGF0ZSA9IGZpZWxkXG4gICAgICA/IHtcbiAgICAgICAgICB2YWx1ZTogZmllbGQubmFtZSxcbiAgICAgICAgICBmaWVsZElkeDogZmllbGQudGFibGVGaWVsZEluZGV4IC0gMVxuICAgICAgICB9XG4gICAgICA6IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgW2tleV06IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcuY29sdW1uc1trZXldLFxuICAgICAgICAuLi51cGRhdGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBhIGZpZWxkIHBhaXIgdG8gY29sdW1uIGNvbmZpZywgcmV0dXJuIGNvbHVtbiBjb25maWdcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcbiAgICogQHBhcmFtIHBhaXIgLSBmaWVsZCBQYWlyXG4gICAqIEByZXR1cm5zIHt7fX0gLSBDb2x1bW4gY29uZmlnXG4gICAqL1xuICBhc3NpZ25Db2x1bW5QYWlycyhrZXksIHBhaXIpIHtcbiAgICBpZiAoIXRoaXMuY29sdW1uUGFpcnMgfHwgIXRoaXMuY29sdW1uUGFpcnNba2V5XSkge1xuICAgICAgLy8gc2hvdWxkIG5vdCBlbmQgaW4gdGhpcyBzdGF0ZVxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3Qge3BhaXI6IHBhcnRuZXJLZXksIGZpZWxkUGFpcktleX0gPSB0aGlzLmNvbHVtblBhaXJzW2tleV07XG4gICAgY29uc3Qge2ZpZWxkUGFpcktleTogcGFydG5lckZpZWxkUGFpcktleX0gPSB0aGlzLmNvbHVtblBhaXJzW3BhcnRuZXJLZXldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBba2V5XTogcGFpcltmaWVsZFBhaXJLZXldLFxuICAgICAgW3BhcnRuZXJLZXldOiBwYWlyW3BhcnRuZXJGaWVsZFBhaXJLZXldXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYSByYWRpdXMgem9vbSBtdWx0aXBsaWVyIHRvIHJlbmRlciBwb2ludHMsIHNvIHRoZXkgYXJlIHZpc2libGUgaW4gYWxsIHpvb20gbGV2ZWxcbiAgICogQHBhcmFtIG1hcFN0YXRlXG4gICAqIEBwYXJhbSBtYXBTdGF0ZS56b29tIC0gYWN0dWFsIHpvb21cbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb21PZmZzZXQgLSB6b29tT2Zmc2V0IHdoZW4gcmVuZGVyIGluIHRoZSBwbG90IGNvbnRhaW5lciBmb3IgZXhwb3J0IGltYWdlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRab29tRmFjdG9yKHt6b29tLCB6b29tT2Zmc2V0ID0gMH0pIHtcbiAgICByZXR1cm4gTWF0aC5wb3coMiwgTWF0aC5tYXgoMTQgLSB6b29tICsgem9vbU9mZnNldCwgMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhIGVsZXZhdGlvbiB6b29tIG11bHRpcGxpZXIgdG8gcmVuZGVyIHBvaW50cywgc28gdGhleSBhcmUgdmlzaWJsZSBpbiBhbGwgem9vbSBsZXZlbFxuICAgKiBAcGFyYW0gbWFwU3RhdGVcbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb20gLSBhY3R1YWwgem9vbVxuICAgKiBAcGFyYW0gbWFwU3RhdGUuem9vbU9mZnNldCAtIHpvb21PZmZzZXQgd2hlbiByZW5kZXIgaW4gdGhlIHBsb3QgY29udGFpbmVyIGZvciBleHBvcnQgaW1hZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEVsZXZhdGlvblpvb21GYWN0b3Ioe3pvb20sIHpvb21PZmZzZXQgPSAwfSkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCg4IC0gem9vbSArIHpvb21PZmZzZXQsIDApKTtcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgZmlsdGVyZWRJbmRleCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldEhvdmVyRGF0YShvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIGJ5IGRlZmF1bHQsIGVhY2ggZW50cnkgb2YgbGF5ZXJEYXRhIHNob3VsZCBoYXZlIGEgZGF0YSBwcm9wZXJ0eSBwb2ludHNcbiAgICAvLyB0byB0aGUgb3JpZ2luYWwgaXRlbSBpbiB0aGUgYWxsRGF0YSBhcnJheVxuICAgIC8vIGVhY2ggbGF5ZXIgY2FuIGltcGxlbWVudCBpdHMgb3duIGdldEhvdmVyRGF0YSBtZXRob2RcbiAgICByZXR1cm4gb2JqZWN0LmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBjaGFuZ2UgbGF5ZXIgdHlwZSwgdHJ5IHRvIGNvcHkgb3ZlciBsYXllciBjb25maWdzIGFzIG11Y2ggYXMgcG9zc2libGVcbiAgICogQHBhcmFtIGNvbmZpZ1RvQ29weSAtIGNvbmZpZyB0byBjb3B5IG92ZXJcbiAgICogQHBhcmFtIHZpc0NvbmZpZ1NldHRpbmdzIC0gdmlzQ29uZmlnIHNldHRpbmdzIG9mIGNvbmZpZyB0byBjb3B5XG4gICAqL1xuICBhc3NpZ25Db25maWdUb0xheWVyKGNvbmZpZ1RvQ29weSwgdmlzQ29uZmlnU2V0dGluZ3MpIHtcbiAgICAvLyBkb24ndCBkZWVwIG1lcmdlIHZpc3VhbENoYW5uZWwgZmllbGRcbiAgICAvLyBkb24ndCBkZWVwIG1lcmdlIGNvbG9yIHJhbmdlLCByZXZlcnNlZDogaXMgbm90IGEga2V5IGJ5IGRlZmF1bHRcbiAgICBjb25zdCBzaGFsbG93Q29weSA9IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ10uY29uY2F0KFxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5tYXAodiA9PiB2LmZpZWxkKVxuICAgICk7XG5cbiAgICAvLyBkb24ndCBjb3B5IG92ZXIgZG9tYWluIGFuZCBhbmltYXRpb25cbiAgICBjb25zdCBub3RUb0NvcHkgPSBbJ2FuaW1hdGlvbiddLmNvbmNhdChPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLm1hcCh2ID0+IHYuZG9tYWluKSk7XG4gICAgLy8gaWYgcmFuZ2UgaXMgZm9yIHRoZSBzYW1lIHByb3BlcnR5IGdyb3VwIGNvcHkgaXQsIG90aGVyd2lzZSwgbm90IHRvIGNvcHlcbiAgICBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2godiA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbmZpZ1RvQ29weS52aXNDb25maWdbdi5yYW5nZV0gJiZcbiAgICAgICAgdmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXAgIT09IHRoaXMudmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXBcbiAgICAgICkge1xuICAgICAgICBub3RUb0NvcHkucHVzaCh2LnJhbmdlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGRvbid0IGNvcHkgb3ZlciB2aXN1YWxDaGFubmVsIHJhbmdlXG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNvcGllZCA9IHRoaXMuY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWcsIGNvbmZpZ1RvQ29weSwge1xuICAgICAgc2hhbGxvd0NvcHksXG4gICAgICBub3RUb0NvcHlcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoY29waWVkKTtcbiAgICAvLyB2YWxpZGF0ZSB2aXN1YWxDaGFubmVsIGZpZWxkIHR5cGUgYW5kIHNjYWxlIHR5cGVzXG4gICAgT2JqZWN0LmtleXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogUmVjdXJzaXZlbHkgY29weSBjb25maWcgb3ZlciB0byBhbiBlbXB0eSBsYXllclxuICAgKiB3aGVuIHJlY2VpdmVkIHNhdmVkIGNvbmZpZywgb3IgY29weSBjb25maWcgb3ZlciBmcm9tIGEgZGlmZmVyZW50IGxheWVyIHR5cGVcbiAgICogbWFrZSBzdXJlIHRvIG9ubHkgY29weSBvdmVyIHZhbHVlIHRvIGV4aXN0aW5nIGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGN1cnJlbnRDb25maWcgLSBleGlzdGluZyBjb25maWcgdG8gYmUgb3ZlcnJpZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1RvQ29weSAtIG5ldyBDb25maWcgdG8gY29weSBvdmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWxsb3dDb3B5IC0gYXJyYXkgb2YgcHJvcGVydGllcyB0byBub3QgdG8gYmUgZGVlcCBjb3BpZWRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbm90VG9Db3B5IC0gYXJyYXkgb2YgcHJvcGVydGllcyBub3QgdG8gY29weVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIGNvcGllZCBjb25maWdcbiAgICovXG4gIGNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnLCBjb25maWdUb0NvcHksIHtzaGFsbG93Q29weSA9IFtdLCBub3RUb0NvcHkgPSBbXX0gPSB7fSkge1xuICAgIGNvbnN0IGNvcGllZCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGN1cnJlbnRDb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNQbGFpbk9iamVjdChjdXJyZW50Q29uZmlnW2tleV0pICYmXG4gICAgICAgIGlzUGxhaW5PYmplY3QoY29uZmlnVG9Db3B5W2tleV0pICYmXG4gICAgICAgICFzaGFsbG93Q29weS5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICFub3RUb0NvcHkuaW5jbHVkZXMoa2V5KVxuICAgICAgKSB7XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGFzc2lnbiBvYmplY3QgdmFsdWVcbiAgICAgICAgY29waWVkW2tleV0gPSB0aGlzLmNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnW2tleV0sIGNvbmZpZ1RvQ29weVtrZXldLCB7XG4gICAgICAgICAgc2hhbGxvd0NvcHksXG4gICAgICAgICAgbm90VG9Db3B5XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChub3ROdWxsb3JVbmRlZmluZWQoY29uZmlnVG9Db3B5W2tleV0pICYmICFub3RUb0NvcHkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAvLyBjb3B5XG4gICAgICAgIGNvcGllZFtrZXldID0gY29uZmlnVG9Db3B5W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBrZWVwIGV4aXN0aW5nXG4gICAgICAgIGNvcGllZFtrZXldID0gY3VycmVudENvbmZpZ1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvcGllZDtcbiAgfVxuXG4gIHJlZ2lzdGVyVmlzQ29uZmlnKGxheWVyVmlzQ29uZmlncykge1xuICAgIE9iamVjdC5rZXlzKGxheWVyVmlzQ29uZmlncykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXSkge1xuICAgICAgICAvLyBpZiBhc3NpZ25lZCBvbmUgb2YgZGVmYXVsdCBMQVlFUl9DT05GSUdTXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IExBWUVSX1ZJU19DT05GSUdTW2xheWVyVmlzQ29uZmlnc1tpdGVtXV0uZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW2l0ZW1dID0gTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXTtcbiAgICAgIH0gZWxzZSBpZiAoWyd0eXBlJywgJ2RlZmF1bHRWYWx1ZSddLmV2ZXJ5KHAgPT4gbGF5ZXJWaXNDb25maWdzW2l0ZW1dLmhhc093blByb3BlcnR5KHApKSkge1xuICAgICAgICAvLyBpZiBwcm92aWRlZCBjdXN0b21pemVkIHZpc0NvbmZpZywgYW5kIGhhcyB0eXBlICYmIGRlZmF1bHRWYWx1ZVxuICAgICAgICAvLyBUT0RPOiBmdXJ0aGVyIGNoZWNrIGlmIGN1c3RvbWl6ZWQgdmlzQ29uZmlnIGlzIHZhbGlkXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IGxheWVyVmlzQ29uZmlnc1tpdGVtXS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbaXRlbV0gPSBsYXllclZpc0NvbmZpZ3NbaXRlbV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMYXllckNvbHVtbnMoKSB7XG4gICAgY29uc3QgcmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkTGF5ZXJDb2x1bW5zLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMX1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuICAgIGNvbnN0IG9wdGlvbmFsID0gdGhpcy5vcHRpb25hbENvbHVtbnMucmVkdWNlKFxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgW2tleV06IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xLCBvcHRpb25hbDogdHJ1ZX1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuXG4gICAgcmV0dXJuIHsuLi5yZXF1aXJlZCwgLi4ub3B0aW9uYWx9O1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJDb25maWcobmV3Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLm5ld0NvbmZpZ307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVMYXllclZpc0NvbmZpZyhuZXdWaXNDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZy52aXNDb25maWcgPSB7Li4udGhpcy5jb25maWcudmlzQ29uZmlnLCAuLi5uZXdWaXNDb25maWd9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJDb2xvclVJKHByb3AsIG5ld0NvbmZpZykge1xuICAgIGNvbnN0IHtjb2xvclVJOiBwcmV2aW91cywgdmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KG5ld0NvbmZpZykgfHwgdHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvclVJUHJvcCA9IE9iamVjdC5lbnRyaWVzKG5ld0NvbmZpZykucmVkdWNlKChhY2N1LCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiBpc1BsYWluT2JqZWN0KGFjY3Vba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyB7Li4uYWNjdVtrZXldLCAuLi52YWx1ZX0gOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LCBwcmV2aW91c1twcm9wXSB8fCBERUZBVUxUX0NPTE9SX1VJKTtcblxuICAgIGNvbnN0IGNvbG9yVUkgPSB7XG4gICAgICAuLi5wcmV2aW91cyxcbiAgICAgIFtwcm9wXTogY29sb3JVSVByb3BcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7Y29sb3JVSX0pO1xuICAgIC8vIGlmIGNvbG9yVUlbcHJvcF0gaXMgY29sb3JSYW5nZVxuICAgIGNvbnN0IGlzQ29sb3JSYW5nZSA9IHZpc0NvbmZpZ1twcm9wXSAmJiB2aXNDb25maWdbcHJvcF0uY29sb3JzO1xuXG4gICAgaWYgKGlzQ29sb3JSYW5nZSkge1xuICAgICAgdGhpcy51cGRhdGVDb2xvclVJQnlDb2xvclJhbmdlKG5ld0NvbmZpZywgcHJvcCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUmFuZ2VCeUNvbG9yVUkobmV3Q29uZmlnLCBwcmV2aW91cywgcHJvcCk7XG4gICAgICB0aGlzLnVwZGF0ZUN1c3RvbVBhbGV0dGUobmV3Q29uZmlnLCBwcmV2aW91cywgcHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVDdXN0b21QYWxldHRlKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApIHtcbiAgICBpZiAoIW5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnIHx8ICFuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZy5jdXN0b20pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7Y29sb3JVSSwgdmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgaWYgKCF2aXNDb25maWdbcHJvcF0pIHJldHVybjtcbiAgICBjb25zdCB7Y29sb3JzfSA9IHZpc0NvbmZpZ1twcm9wXTtcbiAgICBjb25zdCBjdXN0b21QYWxldHRlID0ge1xuICAgICAgLi4uY29sb3JVSVtwcm9wXS5jdXN0b21QYWxldHRlLFxuICAgICAgbmFtZTogJ0N1c3RvbSBQYWxldHRlJyxcbiAgICAgIGNvbG9yczogWy4uLmNvbG9yc11cbiAgICB9O1xuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgICAgY29sb3JVSToge1xuICAgICAgICAuLi5jb2xvclVJLFxuICAgICAgICBbcHJvcF06IHtcbiAgICAgICAgICAuLi5jb2xvclVJW3Byb3BdLFxuICAgICAgICAgIGN1c3RvbVBhbGV0dGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBpZiBvcGVuIGRyb3Bkb3duIGFuZCBwcm9wIGlzIGNvbG9yIHJhbmdlXG4gICAqIEF1dG9tYXRpY2FsbHkgc2V0IGNvbG9yUmFuZ2VDb25maWcncyBzdGVwIGFuZCByZXZlcnNlZFxuICAgKiBAcGFyYW0geyp9IG5ld0NvbmZpZ1xuICAgKiBAcGFyYW0geyp9IHByb3BcbiAgICovXG4gIHVwZGF0ZUNvbG9yVUlCeUNvbG9yUmFuZ2UobmV3Q29uZmlnLCBwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDb25maWcuc2hvd0Ryb3Bkb3duICE9PSAnbnVtYmVyJykgcmV0dXJuO1xuXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgIGNvbG9yVUk6IHtcbiAgICAgICAgLi4uY29sb3JVSSxcbiAgICAgICAgW3Byb3BdOiB7XG4gICAgICAgICAgLi4uY29sb3JVSVtwcm9wXSxcbiAgICAgICAgICBjb2xvclJhbmdlQ29uZmlnOiB7XG4gICAgICAgICAgICAuLi5jb2xvclVJW3Byb3BdLmNvbG9yUmFuZ2VDb25maWcsXG4gICAgICAgICAgICBzdGVwczogdmlzQ29uZmlnW3Byb3BdLmNvbG9ycy5sZW5ndGgsXG4gICAgICAgICAgICByZXZlcnNlZDogQm9vbGVhbih2aXNDb25maWdbcHJvcF0ucmV2ZXJzZWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb2xvclJhbmdlQnlDb2xvclVJKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApIHtcbiAgICAvLyBvbmx5IHVwZGF0ZSBjb2xvclJhbmdlIGlmIGNoYW5nZXMgaW4gVUkgaXMgbWFkZSB0byAncmV2ZXJzZWQnLCAnc3RlcHMnIG9yIHN0ZXBzXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cbiAgICAgIG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnICYmXG4gICAgICBbJ3JldmVyc2VkJywgJ3N0ZXBzJ10uc29tZShcbiAgICAgICAga2V5ID0+XG4gICAgICAgICAgbmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgICAgIG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnW2tleV0gIT09XG4gICAgICAgICAgICAocHJldmlvdXNbcHJvcF0gfHwgREVGQVVMVF9DT0xPUl9VSSkuY29sb3JSYW5nZUNvbmZpZ1trZXldXG4gICAgICApO1xuICAgIGlmICghc2hvdWxkVXBkYXRlKSByZXR1cm47XG5cbiAgICBjb25zdCB7Y29sb3JVSSwgdmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHtzdGVwcywgcmV2ZXJzZWR9ID0gY29sb3JVSVtwcm9wXS5jb2xvclJhbmdlQ29uZmlnO1xuICAgIGNvbnN0IGNvbG9yUmFuZ2UgPSB2aXNDb25maWdbcHJvcF07XG4gICAgLy8gZmluZCBiYXNlZCBvbiBzdGVwIG9yIHJldmVyc2VkXG4gICAgbGV0IHVwZGF0ZTtcbiAgICBpZiAobmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoJ3N0ZXBzJykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZ2V0Q29sb3JHcm91cEJ5TmFtZShjb2xvclJhbmdlKTtcblxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGNvbnN0IHNhbWVHcm91cCA9IENPTE9SX1JBTkdFUy5maWx0ZXIoY3IgPT4gZ2V0Q29sb3JHcm91cEJ5TmFtZShjcikgPT09IGdyb3VwKTtcblxuICAgICAgICB1cGRhdGUgPSBzYW1lR3JvdXAuZmluZChjciA9PiBjci5jb2xvcnMubGVuZ3RoID09PSBzdGVwcyk7XG5cbiAgICAgICAgaWYgKHVwZGF0ZSAmJiBjb2xvclJhbmdlLnJldmVyc2VkKSB7XG4gICAgICAgICAgdXBkYXRlID0gcmV2ZXJzZUNvbG9yUmFuZ2UodHJ1ZSwgdXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgncmV2ZXJzZWQnKSkge1xuICAgICAgdXBkYXRlID0gcmV2ZXJzZUNvbG9yUmFuZ2UocmV2ZXJzZWQsIHVwZGF0ZSB8fCBjb2xvclJhbmdlKTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnKHtbcHJvcF06IHVwZGF0ZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGxheWVyIGhhcyBhbGwgY29sdW1uc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gbGF5ZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHllcyBvciBub1xuICAgKi9cbiAgaGFzQWxsQ29sdW1ucygpIHtcbiAgICBjb25zdCB7Y29sdW1uc30gPSB0aGlzLmNvbmZpZztcbiAgICByZXR1cm4gKFxuICAgICAgY29sdW1ucyAmJlxuICAgICAgT2JqZWN0LnZhbHVlcyhjb2x1bW5zKS5ldmVyeSh2ID0+IHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odi5vcHRpb25hbCB8fCAodi52YWx1ZSAmJiB2LmZpZWxkSWR4ID4gLTEpKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGxheWVyIGhhcyBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBsYXllclxuICAgKiBAcGFyYW0ge0FycmF5IHwgT2JqZWN0fSBsYXllckRhdGFcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHllcyBvciBub1xuICAgKi9cbiAgaGFzTGF5ZXJEYXRhKGxheWVyRGF0YSkge1xuICAgIGlmICghbGF5ZXJEYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJvb2xlYW4obGF5ZXJEYXRhLmRhdGEgJiYgbGF5ZXJEYXRhLmRhdGEubGVuZ3RoKTtcbiAgfVxuXG4gIGlzVmFsaWRUb1NhdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSAmJiB0aGlzLmhhc0FsbENvbHVtbnMoKTtcbiAgfVxuXG4gIHNob3VsZFJlbmRlckxheWVyKGRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy50eXBlICYmXG4gICAgICB0aGlzLmNvbmZpZy5pc1Zpc2libGUgJiZcbiAgICAgIHRoaXMuaGFzQWxsQ29sdW1ucygpICYmXG4gICAgICB0aGlzLmhhc0xheWVyRGF0YShkYXRhKSAmJlxuICAgICAgdHlwZW9mIHRoaXMucmVuZGVyTGF5ZXIgPT09ICdmdW5jdGlvbidcbiAgICApO1xuICB9XG5cbiAgZ2V0VmlzQ2hhbm5lbFNjYWxlKHNjYWxlLCBkb21haW4sIHJhbmdlLCBmaXhlZCkge1xuICAgIHJldHVybiBTQ0FMRV9GVU5DW2ZpeGVkID8gJ2xpbmVhcicgOiBzY2FsZV0oKVxuICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAucmFuZ2UoZml4ZWQgPyBkb21haW4gOiByYW5nZSk7XG4gIH1cblxuICBnZXRQb2ludHNCb3VuZHMoYWxsRGF0YSwgZ2V0UG9zaXRpb24gPSBpZGVudGl0eSkge1xuICAgIC8vIG5vIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbnRpcmUgZGF0YXNldFxuICAgIC8vIGdldCBhIHNhbXBsZSBvZiBkYXRhIHRvIGNhbGN1bGF0ZSBib3VuZHNcbiAgICBjb25zdCBzYW1wbGVEYXRhID1cbiAgICAgIGFsbERhdGEubGVuZ3RoID4gTUFYX1NBTVBMRV9TSVpFID8gZ2V0U2FtcGxlRGF0YShhbGxEYXRhLCBNQVhfU0FNUExFX1NJWkUpIDogYWxsRGF0YTtcbiAgICBjb25zdCBwb2ludHMgPSBzYW1wbGVEYXRhLm1hcChnZXRQb3NpdGlvbik7XG5cbiAgICBjb25zdCBsYXRCb3VuZHMgPSBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCAxLCBbLTkwLCA5MF0pO1xuICAgIGNvbnN0IGxuZ0JvdW5kcyA9IGdldExhdExuZ0JvdW5kcyhwb2ludHMsIDAsIFstMTgwLCAxODBdKTtcblxuICAgIGlmICghbGF0Qm91bmRzIHx8ICFsbmdCb3VuZHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBbbG5nQm91bmRzWzBdLCBsYXRCb3VuZHNbMF0sIGxuZ0JvdW5kc1sxXSwgbGF0Qm91bmRzWzFdXTtcbiAgfVxuXG4gIGdldENoYW5nZWRUcmlnZ2VycyhkYXRhVXBkYXRlVHJpZ2dlcnMpIHtcbiAgICBjb25zdCB0cmlnZ2VyQ2hhbmdlZCA9IGRpZmZVcGRhdGVUcmlnZ2VycyhkYXRhVXBkYXRlVHJpZ2dlcnMsIHRoaXMuX29sZERhdGFVcGRhdGVUcmlnZ2Vycyk7XG4gICAgdGhpcy5fb2xkRGF0YVVwZGF0ZVRyaWdnZXJzID0gZGF0YVVwZGF0ZVRyaWdnZXJzO1xuXG4gICAgcmV0dXJuIHRyaWdnZXJDaGFuZ2VkO1xuICB9XG5cbiAgZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShcbiAgICBzY2FsZSxcbiAgICBkYXRhLFxuICAgIGZpZWxkLFxuICAgIG51bGxWYWx1ZSA9IE5PX1ZBTFVFX0NPTE9SLFxuICAgIGdldFZhbHVlID0gZGVmYXVsdEdldEZpZWxkVmFsdWVcbiAgKSB7XG4gICAgY29uc3Qge3R5cGV9ID0gZmllbGQ7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShmaWVsZCwgZGF0YSk7XG5cbiAgICBpZiAoIW5vdE51bGxvclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsVmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGlmICh0eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wKSB7XG4gICAgICAvLyBzaG91bGRuJ3QgbmVlZCB0byBjb252ZXJ0IGhlcmVcbiAgICAgIC8vIHNjYWxlIEZ1bmN0aW9uIHNob3VsZCB0YWtlIGNhcmUgb2YgaXRcbiAgICAgIGF0dHJpYnV0ZVZhbHVlID0gc2NhbGUobmV3IERhdGUodmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cmlidXRlVmFsdWUgPSBzY2FsZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFub3ROdWxsb3JVbmRlZmluZWQoYXR0cmlidXRlVmFsdWUpKSB7XG4gICAgICBhdHRyaWJ1dGVWYWx1ZSA9IG51bGxWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICB1cGRhdGVNZXRhKG1ldGEpIHtcbiAgICB0aGlzLm1ldGEgPSB7Li4udGhpcy5tZXRhLCAuLi5tZXRhfTtcbiAgfVxuXG4gIGdldERhdGFVcGRhdGVUcmlnZ2Vycyh7ZmlsdGVyZWRJbmRleCwgaWR9KSB7XG4gICAgY29uc3Qge2NvbHVtbnN9ID0gdGhpcy5jb25maWc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0RGF0YToge2RhdGFzZXRJZDogaWQsIGNvbHVtbnMsIGZpbHRlcmVkSW5kZXh9LFxuICAgICAgZ2V0TWV0YToge2RhdGFzZXRJZDogaWQsIGNvbHVtbnN9LFxuICAgICAgLi4uKHRoaXMuY29uZmlnLnRleHRMYWJlbCB8fCBbXSkucmVkdWNlKFxuICAgICAgICAoYWNjdSwgdGwsIGkpID0+ICh7XG4gICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICBbYGdldExhYmVsQ2hhcmFjdGVyU2V0LSR7aX1gXTogdGwuZmllbGQgPyB0bC5maWVsZC5uYW1lIDogbnVsbFxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKSB7XG4gICAgY29uc3QgbGF5ZXJEYXRhc2V0ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcbiAgICBjb25zdCB7YWxsRGF0YX0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xuXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcbiAgICBjb25zdCBkYXRhVXBkYXRlVHJpZ2dlcnMgPSB0aGlzLmdldERhdGFVcGRhdGVUcmlnZ2VycyhsYXllckRhdGFzZXQpO1xuICAgIGNvbnN0IHRyaWdnZXJDaGFuZ2VkID0gdGhpcy5nZXRDaGFuZ2VkVHJpZ2dlcnMoZGF0YVVwZGF0ZVRyaWdnZXJzKTtcblxuICAgIGlmICh0cmlnZ2VyQ2hhbmdlZC5nZXRNZXRhKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBpZiAoIXRyaWdnZXJDaGFuZ2VkLmdldERhdGEpIHtcbiAgICAgIC8vIHNhbWUgZGF0YVxuICAgICAgZGF0YSA9IG9sZExheWVyRGF0YS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gdGhpcy5jYWxjdWxhdGVEYXRhQXR0cmlidXRlKGxheWVyRGF0YXNldCwgZ2V0UG9zaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB7ZGF0YSwgdHJpZ2dlckNoYW5nZWR9O1xuICB9XG4gIC8qKlxuICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIG9uZSBsYXllciBkb21haW4gd2hlbiBzdGF0ZS5kYXRhIGNoYW5nZWRcbiAgICogaWYgc3RhdGUuZGF0YSBjaGFuZ2UgaXMgZHVlIG90IHVwZGF0ZSBmaWx0ZXIsIG5ld0ZpbGVyIHdpbGwgYmUgcGFzc2VkXG4gICAqIGNhbGxlZCBieSB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXRcbiAgICogQHBhcmFtIHtPYmplY3R9IG5ld0ZpbHRlclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBsYXllclxuICAgKi9cbiAgdXBkYXRlTGF5ZXJEb21haW4oZGF0YXNldHMsIG5ld0ZpbHRlcikge1xuICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLmdldERhdGFzZXQoZGF0YXNldHMpO1xuICAgIGlmICghZGF0YXNldCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIGNvbnN0IHtzY2FsZX0gPSBjaGFubmVsO1xuICAgICAgY29uc3Qgc2NhbGVUeXBlID0gdGhpcy5jb25maWdbc2NhbGVdO1xuICAgICAgLy8gb3JkaW5hbCBkb21haW4gaXMgYmFzZWQgb24gYWxsRGF0YSwgaWYgb25seSBmaWx0ZXIgY2hhbmdlZFxuICAgICAgLy8gbm8gbmVlZCB0byB1cGRhdGUgb3JkaW5hbCBkb21haW5cbiAgICAgIGlmICghbmV3RmlsdGVyIHx8IHNjYWxlVHlwZSAhPT0gU0NBTEVfVFlQRVMub3JkaW5hbCkge1xuICAgICAgICBjb25zdCB7ZG9tYWlufSA9IGNoYW5uZWw7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWREb21haW4gPSB0aGlzLmNhbGN1bGF0ZUxheWVyRG9tYWluKGRhdGFzZXQsIGNoYW5uZWwpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tkb21haW5dOiB1cGRhdGVkRG9tYWlufSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldERhdGFzZXQoZGF0YXNldHMpIHtcbiAgICByZXR1cm4gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2aXN1YWwgY2hhbm5lbCBmaWVsZCBhbmQgc2NhbGVzIGJhc2VkIG9uIHN1cHBvcnRlZCBmaWVsZCAmIHNjYWxlIHR5cGVcbiAgICogQHBhcmFtIGNoYW5uZWxcbiAgICovXG4gIHZhbGlkYXRlVmlzdWFsQ2hhbm5lbChjaGFubmVsKSB7XG4gICAgdGhpcy52YWxpZGF0ZUZpZWxkVHlwZShjaGFubmVsKTtcbiAgICB0aGlzLnZhbGlkYXRlU2NhbGUoY2hhbm5lbCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgZmllbGQgdHlwZSBiYXNlZCBvbiBjaGFubmVsU2NhbGVUeXBlXG4gICAqL1xuICB2YWxpZGF0ZUZpZWxkVHlwZShjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgY29uc3Qge2ZpZWxkLCBjaGFubmVsU2NhbGVUeXBlLCBzdXBwb3J0ZWRGaWVsZFR5cGVzfSA9IHZpc3VhbENoYW5uZWw7XG5cbiAgICBpZiAodGhpcy5jb25maWdbZmllbGRdKSB7XG4gICAgICAvLyBpZiBmaWVsZCBpcyBzZWxlY3RlZCwgY2hlY2sgaWYgZmllbGQgdHlwZSBpcyBzdXBwb3J0ZWRcbiAgICAgIGNvbnN0IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzID1cbiAgICAgICAgc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XG5cbiAgICAgIGlmICghY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMuaW5jbHVkZXModGhpcy5jb25maWdbZmllbGRdLnR5cGUpKSB7XG4gICAgICAgIC8vIGZpZWxkIHR5cGUgaXMgbm90IHN1cHBvcnRlZCwgc2V0IGl0IGJhY2sgdG8gbnVsbFxuICAgICAgICAvLyBzZXQgc2NhbGUgYmFjayB0byBkZWZhdWx0XG4gICAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tmaWVsZF06IG51bGx9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgc2NhbGUgdHlwZSBiYXNlZCBvbiBhZ2dyZWdhdGlvblxuICAgKi9cbiAgdmFsaWRhdGVTY2FsZShjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgY29uc3Qge3NjYWxlfSA9IHZpc3VhbENoYW5uZWw7XG4gICAgaWYgKCFzY2FsZSkge1xuICAgICAgLy8gdmlzdWFsQ2hhbm5lbCBkb2Vzbid0IGhhdmUgc2NhbGVcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2NhbGVPcHRpb25zID0gdGhpcy5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCk7XG4gICAgLy8gY2hlY2sgaWYgY3VycmVudCBzZWxlY3RlZCBzY2FsZSBpc1xuICAgIC8vIHN1cHBvcnRlZCwgaWYgbm90LCBjaGFuZ2UgdG8gZGVmYXVsdFxuICAgIGlmICghc2NhbGVPcHRpb25zLmluY2x1ZGVzKHRoaXMuY29uZmlnW3NjYWxlXSkpIHtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tzY2FsZV06IHNjYWxlT3B0aW9uc1swXX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2NhbGUgb3B0aW9ucyBiYXNlZCBvbiBjdXJyZW50IGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFubmVsXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIGdldFNjYWxlT3B0aW9ucyhjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgY29uc3Qge2ZpZWxkLCBzY2FsZSwgY2hhbm5lbFNjYWxlVHlwZX0gPSB2aXN1YWxDaGFubmVsO1xuXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2ZpZWxkXVxuICAgICAgPyBGSUVMRF9PUFRTW3RoaXMuY29uZmlnW2ZpZWxkXS50eXBlXS5zY2FsZVtjaGFubmVsU2NhbGVUeXBlXVxuICAgICAgOiBbdGhpcy5nZXREZWZhdWx0TGF5ZXJDb25maWcoKVtzY2FsZV1dO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsKGRhdGFzZXQsIGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICB0aGlzLnZhbGlkYXRlVmlzdWFsQ2hhbm5lbChjaGFubmVsKTtcbiAgICAvLyBjYWxjdWxhdGUgbGF5ZXIgY2hhbm5lbCBkb21haW5cbiAgICBjb25zdCB1cGRhdGVkRG9tYWluID0gdGhpcy5jYWxjdWxhdGVMYXllckRvbWFpbihkYXRhc2V0LCB2aXN1YWxDaGFubmVsKTtcbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbdmlzdWFsQ2hhbm5lbC5kb21haW5dOiB1cGRhdGVkRG9tYWlufSk7XG4gIH1cblxuICBjYWxjdWxhdGVMYXllckRvbWFpbihkYXRhc2V0LCB2aXN1YWxDaGFubmVsKSB7XG4gICAgY29uc3Qge2FsbERhdGEsIGZpbHRlcmVkSW5kZXhGb3JEb21haW59ID0gZGF0YXNldDtcbiAgICBjb25zdCBkZWZhdWx0RG9tYWluID0gWzAsIDFdO1xuICAgIGNvbnN0IHtzY2FsZX0gPSB2aXN1YWxDaGFubmVsO1xuICAgIGNvbnN0IHNjYWxlVHlwZSA9IHRoaXMuY29uZmlnW3NjYWxlXTtcblxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5jb25maWdbdmlzdWFsQ2hhbm5lbC5maWVsZF07XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgLy8gaWYgY29sb3JGaWVsZCBvciBzaXplRmllbGQgd2VyZSBzZXQgYmFjayB0byBudWxsXG4gICAgICByZXR1cm4gZGVmYXVsdERvbWFpbjtcbiAgICB9XG5cbiAgICBpZiAoIVNDQUxFX1RZUEVTW3NjYWxlVHlwZV0pIHtcbiAgICAgIENvbnNvbGUuZXJyb3IoYHNjYWxlIHR5cGUgJHtzY2FsZVR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgIHJldHVybiBkZWZhdWx0RG9tYWluO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHJlZmFjdG9yIHRvIGFkZCB2YWx1ZUFjY2Vzc29yIHRvIGZpZWxkXG4gICAgY29uc3QgZmllbGRJZHggPSBmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxO1xuICAgIGNvbnN0IGlzVGltZSA9IGZpZWxkLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA7XG4gICAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IG1heWJlVG9EYXRlLmJpbmQobnVsbCwgaXNUaW1lLCBmaWVsZElkeCwgZmllbGQuZm9ybWF0KTtcbiAgICBjb25zdCBpbmRleFZhbHVlQWNjZXNzb3IgPSBpID0+IHZhbHVlQWNjZXNzb3IoYWxsRGF0YVtpXSk7XG5cbiAgICBjb25zdCBzb3J0RnVuY3Rpb24gPSBnZXRTb3J0aW5nRnVuY3Rpb24oZmllbGQudHlwZSk7XG5cbiAgICBzd2l0Y2ggKHNjYWxlVHlwZSkge1xuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5vcmRpbmFsOlxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5wb2ludDpcbiAgICAgICAgLy8gZG8gbm90IHJlY2FsY3VsYXRlIG9yZGluYWwgZG9tYWluIGJhc2VkIG9uIGZpbHRlcmVkIGRhdGFcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byB1cGRhdGUgb3JkaW5hbCBkb21haW4gZXZlcnkgdGltZVxuICAgICAgICByZXR1cm4gZ2V0T3JkaW5hbERvbWFpbihhbGxEYXRhLCB2YWx1ZUFjY2Vzc29yKTtcblxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5xdWFudGlsZTpcbiAgICAgICAgcmV0dXJuIGdldFF1YW50aWxlRG9tYWluKGZpbHRlcmVkSW5kZXhGb3JEb21haW4sIGluZGV4VmFsdWVBY2Nlc3Nvciwgc29ydEZ1bmN0aW9uKTtcblxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5sb2c6XG4gICAgICAgIHJldHVybiBnZXRMb2dEb21haW4oZmlsdGVyZWRJbmRleEZvckRvbWFpbiwgaW5kZXhWYWx1ZUFjY2Vzc29yKTtcblxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5xdWFudGl6ZTpcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMubGluZWFyOlxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5zcXJ0OlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGdldExpbmVhckRvbWFpbihmaWx0ZXJlZEluZGV4Rm9yRG9tYWluLCBpbmRleFZhbHVlQWNjZXNzb3IpO1xuICAgIH1cbiAgfVxuXG4gIGlzTGF5ZXJIb3ZlcmVkKG9iamVjdEluZm8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgb2JqZWN0SW5mbyAmJiBvYmplY3RJbmZvLmxheWVyICYmIG9iamVjdEluZm8ucGlja2VkICYmIG9iamVjdEluZm8ubGF5ZXIucHJvcHMuaWQgPT09IHRoaXMuaWRcbiAgICApO1xuICB9XG5cbiAgZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUsIGZpeGVkUmFkaXVzKSB7XG4gICAgY29uc3QgcmFkaXVzQ2hhbm5lbCA9IE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykuZmluZCh2YyA9PiB2Yy5wcm9wZXJ0eSA9PT0gJ3JhZGl1cycpO1xuXG4gICAgaWYgKCFyYWRpdXNDaGFubmVsKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IHJhZGl1c0NoYW5uZWwuZmllbGQ7XG4gICAgY29uc3QgZml4ZWQgPSBmaXhlZFJhZGl1cyA9PT0gdW5kZWZpbmVkID8gdGhpcy5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzIDogZml4ZWRSYWRpdXM7XG4gICAgY29uc3Qge3JhZGl1c30gPSB0aGlzLmNvbmZpZy52aXNDb25maWc7XG5cbiAgICByZXR1cm4gZml4ZWQgPyAxIDogKHRoaXMuY29uZmlnW2ZpZWxkXSA/IDEgOiByYWRpdXMpICogdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgfVxuXG4gIHNob3VsZENhbGN1bGF0ZUxheWVyRGF0YShwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5zb21lKHAgPT4gIXRoaXMubm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzLmluY2x1ZGVzKHApKTtcbiAgfVxuXG4gIGdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcsIGJydXNoaW5nVGFyZ2V0KSB7XG4gICAgY29uc3Qge2JydXNofSA9IGludGVyYWN0aW9uQ29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGJydXNoaW5nXG4gICAgICBhdXRvSGlnaGxpZ2h0OiAhYnJ1c2guZW5hYmxlZCxcbiAgICAgIGJydXNoaW5nUmFkaXVzOiBicnVzaC5jb25maWcuc2l6ZSAqIDEwMDAsXG4gICAgICBicnVzaGluZ1RhcmdldDogYnJ1c2hpbmdUYXJnZXQgfHwgJ3NvdXJjZScsXG4gICAgICBicnVzaGluZ0VuYWJsZWQ6IGJydXNoLmVuYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKHtpZHgsIGdwdUZpbHRlciwgbWFwU3RhdGV9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgaWR4LFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogQ09PUkRJTkFURV9TWVNURU0uTE5HTEFULFxuICAgICAgcGlja2FibGU6IHRydWUsXG4gICAgICB3cmFwTG9uZ2l0dWRlOiB0cnVlLFxuICAgICAgcGFyYW1ldGVyczoge2RlcHRoVGVzdDogQm9vbGVhbihtYXBTdGF0ZS5kcmFnUm90YXRlIHx8IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5lbmFibGUzZCl9LFxuICAgICAgLy8gdmlzY29uZmlnXG4gICAgICBvcGFjaXR5OiB0aGlzLmNvbmZpZy52aXNDb25maWcub3BhY2l0eSxcbiAgICAgIGhpZ2hsaWdodENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgIC8vIGRhdGEgZmlsdGVyaW5nXG4gICAgICBleHRlbnNpb25zOiBbZGF0YUZpbHRlckV4dGVuc2lvbl0sXG4gICAgICBmaWx0ZXJSYW5nZTogZ3B1RmlsdGVyLmZpbHRlclJhbmdlXG4gICAgfTtcbiAgfVxuXG4gIGdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBgJHt0aGlzLmlkfS1ob3ZlcmVkYCxcbiAgICAgIHBpY2thYmxlOiBmYWxzZSxcbiAgICAgIHdyYXBMb25naXR1ZGU6IHRydWUsXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiBDT09SRElOQVRFX1NZU1RFTS5MTkdMQVRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyVGV4dExhYmVsTGF5ZXIoe2dldFBvc2l0aW9uLCBnZXRQaXhlbE9mZnNldCwgdXBkYXRlVHJpZ2dlcnMsIHNoYXJlZFByb3BzfSwgcmVuZGVyT3B0cykge1xuICAgIGNvbnN0IHtkYXRhLCBtYXBTdGF0ZX0gPSByZW5kZXJPcHRzO1xuICAgIGNvbnN0IHt0ZXh0TGFiZWx9ID0gdGhpcy5jb25maWc7XG5cbiAgICByZXR1cm4gZGF0YS50ZXh0TGFiZWxzLnJlZHVjZSgoYWNjdSwgZCwgaSkgPT4ge1xuICAgICAgaWYgKGQuZ2V0VGV4dCkge1xuICAgICAgICBhY2N1LnB1c2goXG4gICAgICAgICAgbmV3IFRleHRMYXllcih7XG4gICAgICAgICAgICAuLi5zaGFyZWRQcm9wcyxcbiAgICAgICAgICAgIGlkOiBgJHt0aGlzLmlkfS1sYWJlbC0ke3RleHRMYWJlbFtpXS5maWVsZC5uYW1lfWAsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICAgICAgICBnZXRUZXh0OiBkLmdldFRleHQsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGNoYXJhY3RlclNldDogZC5jaGFyYWN0ZXJTZXQsXG4gICAgICAgICAgICBnZXRQaXhlbE9mZnNldDogZ2V0UGl4ZWxPZmZzZXQodGV4dExhYmVsW2ldKSxcbiAgICAgICAgICAgIGdldFNpemU6IDEsXG4gICAgICAgICAgICBzaXplU2NhbGU6IHRleHRMYWJlbFtpXS5zaXplLFxuICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGV4dExhYmVsW2ldLmFuY2hvcixcbiAgICAgICAgICAgIGdldEFsaWdubWVudEJhc2VsaW5lOiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50LFxuICAgICAgICAgICAgZ2V0Q29sb3I6IHRleHRMYWJlbFtpXS5jb2xvcixcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgLy8gdGV4dCB3aWxsIGFsd2F5cyBzaG93IG9uIHRvcCBvZiBhbGwgbGF5ZXJzXG4gICAgICAgICAgICAgIGRlcHRoVGVzdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEZpbHRlclZhbHVlOiBkYXRhLmdldEZpbHRlclZhbHVlLFxuICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgLi4udXBkYXRlVHJpZ2dlcnMsXG4gICAgICAgICAgICAgIGdldFRleHQ6IHRleHRMYWJlbFtpXS5maWVsZC5uYW1lLFxuICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDoge1xuICAgICAgICAgICAgICAgIC4uLnVwZGF0ZVRyaWdnZXJzLmdldFJhZGl1cyxcbiAgICAgICAgICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgICAgICAgICBhbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgICAgYWxpZ25tZW50OiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdldFRleHRBbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgIGdldEFsaWdubWVudEJhc2VsaW5lOiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50LFxuICAgICAgICAgICAgICBnZXRDb2xvcjogdGV4dExhYmVsW2ldLmNvbG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH0sIFtdKTtcbiAgfVxufVxuIl19