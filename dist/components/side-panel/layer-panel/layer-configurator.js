"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LayerConfiguratorFactory;
exports.AggregationTypeSelector = exports.AggrScaleSelector = exports.ChannelByValueSelector = exports.LayerColorRangeSelector = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.HowToButton = exports.getLayerChannelConfigProps = exports.getVisConfiguratorProps = exports.getLayerConfiguratorProps = exports.getLayerFields = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _visConfigByFieldSelector = _interopRequireDefault(require("./vis-config-by-field-selector"));

var _layerColumnConfig = _interopRequireDefault(require("./layer-column-config"));

var _layerTypeSelector = _interopRequireDefault(require("./layer-type-selector"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _sourceDataSelector = _interopRequireDefault(require("../common/source-data-selector"));

var _visConfigSwitch = _interopRequireDefault(require("./vis-config-switch"));

var _visConfigSlider = _interopRequireDefault(require("./vis-config-slider"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _textLabelPanel = _interopRequireDefault(require("./text-label-panel"));

var _utils = require("../../../utils/utils");

var _defaultSettings = require("../../../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 12px;\n  top: -4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-top: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config'
})(_templateObject());

var StyledLayerVisualConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject2());

var getLayerFields = function getLayerFields(datasets, layer) {
  return datasets[layer.config.dataId] ? datasets[layer.config.dataId].fields : [];
};

exports.getLayerFields = getLayerFields;

var getLayerConfiguratorProps = function getLayerConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getLayerConfiguratorProps = getLayerConfiguratorProps;

var getVisConfiguratorProps = function getVisConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getVisConfiguratorProps = getVisConfiguratorProps;

var getLayerChannelConfigProps = function getLayerChannelConfigProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisualChannelConfig
  };
};

exports.getLayerChannelConfigProps = getLayerChannelConfigProps;
LayerConfiguratorFactory.deps = [_sourceDataSelector["default"]];

function LayerConfiguratorFactory(SourceDataSelector) {
  var LayerConfigurator = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerConfigurator, _Component);

    var _super = _createSuper(LayerConfigurator);

    function LayerConfigurator() {
      (0, _classCallCheck2["default"])(this, LayerConfigurator);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(LayerConfigurator, [{
      key: "_renderPointLayerConfig",
      value: function _renderPointLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderIconLayerConfig",
      value: function _renderIconLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderScatterplotLayerConfig",
      value: function _renderScatterplotLayerConfig(_ref) {
        var layer = _ref.layer,
            visConfiguratorProps = _ref.visConfiguratorProps,
            layerChannelConfigProps = _ref.layerChannelConfigProps,
            layerConfiguratorProps = _ref.layerConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), layer.type === _defaultSettings.LAYER_TYPES.point ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.outline, visConfiguratorProps, {
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.visConfig.outline
        })))) : null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'radius',
          collapsible: true
        }, !layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.sizeField)
        })) : /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, layer.visConfigSettings.fixedRadius, visConfiguratorProps)) : null)), /*#__PURE__*/_react["default"].createElement(_textLabelPanel["default"], {
          fields: visConfiguratorProps.fields,
          updateLayerTextLabel: this.props.updateLayerTextLabel,
          textLabel: layer.config.textLabel,
          colorPalette: visConfiguratorProps.colorPalette,
          setColorPaletteUI: visConfiguratorProps.setColorPaletteUI
        }));
      }
    }, {
      key: "_renderClusterLayerConfig",
      value: function _renderClusterLayerConfig(_ref2) {
        var layer = _ref2.layer,
            visConfiguratorProps = _ref2.visConfiguratorProps,
            layerConfiguratorProps = _ref2.layerConfiguratorProps,
            layerChannelConfigProps = _ref2.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.color
        })) : null, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps)))));
      }
    }, {
      key: "_renderHeatmapLayerConfig",
      value: function _renderHeatmapLayerConfig(_ref3) {
        var layer = _ref3.layer,
            visConfiguratorProps = _ref3.visConfiguratorProps,
            layerConfiguratorProps = _ref3.layerConfiguratorProps,
            layerChannelConfigProps = _ref3.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'radius'
        }, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false
        }))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'weight'
        }, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.weight
        }, layerChannelConfigProps))));
      }
    }, {
      key: "_renderGridLayerConfig",
      value: function _renderGridLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderHexagonLayerConfig",
      value: function _renderHexagonLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderAggregationLayerConfig",
      value: function _renderAggregationLayerConfig(_ref4) {
        var layer = _ref4.layer,
            visConfiguratorProps = _ref4.visConfiguratorProps,
            layerConfiguratorProps = _ref4.layerConfiguratorProps,
            layerChannelConfigProps = _ref4.layerChannelConfigProps;
        var config = layer.config;
        var enable3d = config.visConfig.enable3d;
        var elevationByDescription = 'When off, height is based on count of points';
        var colorByDescription = 'When off, color is based on count of points';
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          description: colorByDescription,
          channel: layer.visualChannels.color
        })) : null, layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps)))), layer.visConfigSettings.enable3d ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.size
        })), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({}, layerChannelConfigProps, {
          channel: layer.visualChannels.size,
          description: elevationByDescription,
          disabled: !enable3d
        })), layer.visConfigSettings.sizeAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.size
        })) : null, layer.visConfigSettings.elevationPercentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null)) : null);
      } // TODO: Shan move these into layer class

    }, {
      key: "_renderHexagonIdLayerConfig",
      value: function _renderHexagonIdLayerConfig(_ref5) {
        var layer = _ref5.layer,
            visConfiguratorProps = _ref5.visConfiguratorProps,
            layerConfiguratorProps = _ref5.layerConfiguratorProps,
            layerChannelConfigProps = _ref5.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'coverage',
          collapsible: true
        }, !layer.config.coverageField ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.coverageRange, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.coverage
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: "Height Range"
        })))));
      }
    }, {
      key: "_renderArcLayerConfig",
      value: function _renderArcLayerConfig(args) {
        return this._renderLineLayerConfig(args);
      }
    }, {
      key: "_renderLineLayerConfig",
      value: function _renderLineLayerConfig(_ref6) {
        var layer = _ref6.layer,
            visConfiguratorProps = _ref6.visConfiguratorProps,
            layerConfiguratorProps = _ref6.layerConfiguratorProps,
            layerChannelConfigProps = _ref6.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(ArcLayerColorSelector, {
          layer: layer,
          setColorUI: layerConfiguratorProps.setColorUI,
          onChangeConfig: layerConfiguratorProps.onChange,
          onChangeVisConfig: visConfiguratorProps.onChange
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'stroke',
          collapsible: true
        }, layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          disabled: !layer.config.sizeField,
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))));
      }
    }, {
      key: "_renderTripLayerConfig",
      value: function _renderTripLayerConfig(_ref7) {
        var layer = _ref7.layer,
            visConfiguratorProps = _ref7.visConfiguratorProps,
            layerConfiguratorProps = _ref7.layerConfiguratorProps,
            layerChannelConfigProps = _ref7.layerChannelConfigProps;
        var _layer$meta$featureTy = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy === void 0 ? {} : _layer$meta$featureTy;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "Stroke Width",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "Trail Length",
          description: "Number of seconds for a path to completely fade out"
        }), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.trailLength, visConfiguratorProps, {
          label: false
        }))));
      }
    }, {
      key: "_renderGeojsonLayerConfig",
      value: function _renderGeojsonLayerConfig(_ref8) {
        var layer = _ref8.layer,
            visConfiguratorProps = _ref8.visConfiguratorProps,
            layerConfiguratorProps = _ref8.layerConfiguratorProps,
            layerChannelConfigProps = _ref8.layerChannelConfigProps;
        var _layer$meta$featureTy2 = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy2 === void 0 ? {} : _layer$meta$featureTy2,
            visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, featureTypes.polygon || featureTypes.point ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "Fill Color",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))) : null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "Stroke Color",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.strokeOpacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "Stroke Width",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), featureTypes.polygon ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))) : null, featureTypes.point ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'radius',
          collapsible: true
        }, !layer.config.radiusField ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.radiusField)
        })) : /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.radiusField
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.radius
        }, layerChannelConfigProps)))) : null);
      }
    }, {
      key: "_render3DLayerConfig",
      value: function _render3DLayerConfig(_ref9) {
        var layer = _ref9.layer,
            visConfiguratorProps = _ref9.visConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: '3D Model',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
          type: "file",
          accept: ".glb,.gltf",
          onChange: function onChange(e) {
            if (e.target.files && e.target.files[0]) {
              var url = URL.createObjectURL(e.target.files[0]);
              visConfiguratorProps.onChange({
                scenegraph: url
              });
            }
          }
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: '3D Model Options',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.sizeScale, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.angleX, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.angleY, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.angleZ, visConfiguratorProps, {
          disabled: false
        }))));
      }
    }, {
      key: "_renderS2LayerConfig",
      value: function _renderS2LayerConfig(_ref10) {
        var layer = _ref10.layer,
            visConfiguratorProps = _ref10.visConfiguratorProps,
            layerConfiguratorProps = _ref10.layerConfiguratorProps,
            layerChannelConfigProps = _ref10.layerChannelConfigProps;
        var visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "Fill Color",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "Stroke Color",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "Stroke Width",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: "Elevation Scale"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.heightRange, visConfiguratorProps, {
          label: "Height Range"
        })), /*#__PURE__*/_react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            layer = _this$props.layer,
            datasets = _this$props.datasets,
            updateLayerConfig = _this$props.updateLayerConfig,
            layerTypeOptions = _this$props.layerTypeOptions,
            updateLayerType = _this$props.updateLayerType;

        var _ref11 = layer.config.dataId ? datasets[layer.config.dataId] : {},
            _ref11$fields = _ref11.fields,
            fields = _ref11$fields === void 0 ? [] : _ref11$fields,
            fieldPairs = _ref11.fieldPairs;

        var config = layer.config;
        var visConfiguratorProps = getVisConfiguratorProps(this.props);
        var layerConfiguratorProps = getLayerConfiguratorProps(this.props);
        var layerChannelConfigProps = getLayerChannelConfigProps(this.props);
        var renderTemplate = layer.type && "_render".concat((0, _utils.capitalizeFirstLetter)(layer.type), "LayerConfig");
        return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigurator, null, layer.layerInfoModal ? /*#__PURE__*/_react["default"].createElement(HowToButton, {
          onClick: function onClick() {
            return _this.props.openModal(layer.layerInfoModal);
          }
        }) : null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'basic',
          collapsible: true,
          expanded: !layer.hasAllColumns()
        }, /*#__PURE__*/_react["default"].createElement(_layerTypeSelector["default"], {
          layer: layer,
          layerTypeOptions: layerTypeOptions,
          onSelect: updateLayerType
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
          datasets: datasets,
          id: layer.id,
          disabled: layer.type && config.columns,
          dataId: config.dataId,
          onSelect: function onSelect(value) {
            return updateLayerConfig({
              dataId: value
            });
          }
        }), /*#__PURE__*/_react["default"].createElement(_layerColumnConfig["default"], {
          columnPairs: layer.columnPairs,
          columns: layer.config.columns,
          assignColumnPairs: layer.assignColumnPairs.bind(layer),
          assignColumn: layer.assignColumn.bind(layer),
          columnLabels: layer.columnLabels,
          fields: fields,
          fieldPairs: fieldPairs,
          updateLayerConfig: updateLayerConfig,
          updateLayerType: this.props.updateLayerType
        }))), this[renderTemplate] && this[renderTemplate]({
          layer: layer,
          visConfiguratorProps: visConfiguratorProps,
          layerChannelConfigProps: layerChannelConfigProps,
          layerConfiguratorProps: layerConfiguratorProps
        }));
      }
    }]);
    return LayerConfigurator;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerConfigurator, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    openModal: _propTypes["default"].func.isRequired,
    updateLayerConfig: _propTypes["default"].func.isRequired,
    updateLayerType: _propTypes["default"].func.isRequired,
    updateLayerVisConfig: _propTypes["default"].func.isRequired,
    updateLayerVisualChannelConfig: _propTypes["default"].func.isRequired,
    updateLayerColorUI: _propTypes["default"].func.isRequired
  });
  return LayerConfigurator;
}
/*
 * Componentize config component into pure functional components
 */


var StyledHowToButton = _styledComponents["default"].div(_templateObject3());

var HowToButton = function HowToButton(_ref12) {
  var onClick = _ref12.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledHowToButton, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, "How to"));
};

exports.HowToButton = HowToButton;

var LayerColorSelector = function LayerColorSelector(_ref13) {
  var layer = _ref13.layer,
      onChange = _ref13.onChange,
      label = _ref13.label,
      selectedColor = _ref13.selectedColor,
      _ref13$property = _ref13.property,
      property = _ref13$property === void 0 ? 'color' : _ref13$property,
      _setColorUI = _ref13.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: selectedColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChange((0, _defineProperty2["default"])({}, property, rgbValue));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI(property, newConfig);
    }
  }));
};

exports.LayerColorSelector = LayerColorSelector;

var ArcLayerColorSelector = function ArcLayerColorSelector(_ref14) {
  var layer = _ref14.layer,
      onChangeConfig = _ref14.onChangeConfig,
      onChangeVisConfig = _ref14.onChangeVisConfig,
      _ref14$property = _ref14.property,
      property = _ref14$property === void 0 ? 'color' : _ref14$property,
      _setColorUI2 = _ref14.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeConfig({
          color: rgbValue
        });
      },
      label: 'Source'
    }, {
      selectedColor: layer.config.visConfig.targetColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeVisConfig({
          targetColor: rgbValue
        });
      },
      label: 'Target'
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI2(property, newConfig);
    }
  }));
};

exports.ArcLayerColorSelector = ArcLayerColorSelector;

var LayerColorRangeSelector = function LayerColorRangeSelector(_ref15) {
  var layer = _ref15.layer,
      onChange = _ref15.onChange,
      _ref15$property = _ref15.property,
      property = _ref15$property === void 0 ? 'colorRange' : _ref15$property,
      _setColorUI3 = _ref15.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.visConfig[property],
      isRange: true,
      setColor: function setColor(colorRange) {
        return onChange((0, _defineProperty2["default"])({}, property, colorRange));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI3(property, newConfig);
    }
  }));
};

exports.LayerColorRangeSelector = LayerColorRangeSelector;

var ChannelByValueSelector = function ChannelByValueSelector(_ref16) {
  var layer = _ref16.layer,
      channel = _ref16.channel,
      onChange = _ref16.onChange,
      fields = _ref16.fields,
      description = _ref16.description;
  var channelScaleType = channel.channelScaleType,
      domain = channel.domain,
      field = channel.field,
      key = channel.key,
      property = channel.property,
      range = channel.range,
      scale = channel.scale,
      defaultMeasure = channel.defaultMeasure,
      supportedFieldTypes = channel.supportedFieldTypes;
  var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
  var supportedFields = fields.filter(function (_ref17) {
    var type = _ref17.type;
    return channelSupportedFieldTypes.includes(type);
  });
  var scaleOptions = layer.getScaleOptions(channel.key);
  var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
  var defaultDescription = "Calculate ".concat(property, " based on selected field");
  return /*#__PURE__*/_react["default"].createElement(_visConfigByFieldSelector["default"], {
    channel: channel.key,
    description: description || defaultDescription,
    domain: layer.config[domain],
    fields: supportedFields,
    id: layer.id,
    key: "".concat(key, "-channel-selector"),
    property: property,
    placeholder: defaultMeasure || 'Select a field',
    range: layer.config.visConfig[range],
    scaleOptions: scaleOptions,
    scaleType: scale ? layer.config[scale] : null,
    selectedField: layer.config[field],
    showScale: showScale,
    updateField: function updateField(val) {
      return onChange((0, _defineProperty2["default"])({}, field, val), key);
    },
    updateScale: function updateScale(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  });
};

exports.ChannelByValueSelector = ChannelByValueSelector;

var AggrScaleSelector = function AggrScaleSelector(_ref18) {
  var channel = _ref18.channel,
      layer = _ref18.layer,
      onChange = _ref18.onChange;
  var scale = channel.scale,
      key = channel.key;
  var scaleOptions = layer.getScaleOptions(key);
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
    label: "".concat(key, " Scale"),
    options: scaleOptions,
    scaleType: layer.config[scale],
    onSelect: function onSelect(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  }) : null;
};

exports.AggrScaleSelector = AggrScaleSelector;

var AggregationTypeSelector = function AggregationTypeSelector(_ref19) {
  var layer = _ref19.layer,
      channel = _ref19.channel,
      _onChange6 = _ref19.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;
  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig; // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "Aggregate ".concat(selectedField.name, " by")), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: visConfig[aggregation],
    options: aggregationOptions,
    multiSelect: false,
    searchable: false,
    onChange: function onChange(value) {
      return _onChange6({
        visConfig: _objectSpread({}, layer.config.visConfig, (0, _defineProperty2["default"])({}, aggregation, value))
      }, channel.key);
    }
  }));
};
/* eslint-enable max-params */


exports.AggregationTypeSelector = AggregationTypeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsImdldExheWVyRmllbGRzIiwiZGF0YXNldHMiLCJsYXllciIsImNvbmZpZyIsImRhdGFJZCIsImZpZWxkcyIsImdldExheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJwcm9wcyIsIm9uQ2hhbmdlIiwidXBkYXRlTGF5ZXJDb25maWciLCJzZXRDb2xvclVJIiwidXBkYXRlTGF5ZXJDb2xvclVJIiwiZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHMiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiZGVwcyIsIlNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkiLCJTb3VyY2VEYXRhU2VsZWN0b3IiLCJMYXllckNvbmZpZ3VyYXRvciIsIl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImNvbG9yRmllbGQiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwib3BhY2l0eSIsInR5cGUiLCJMQVlFUl9UWVBFUyIsInBvaW50Iiwib3V0bGluZSIsInN0cm9rZUNvbG9yRmllbGQiLCJ2aXNDb25maWciLCJzdHJva2VDb2xvciIsInRoaWNrbmVzcyIsInNpemVGaWVsZCIsInJhZGl1cyIsIkJvb2xlYW4iLCJyYWRpdXNSYW5nZSIsImZpeGVkUmFkaXVzIiwic2l6ZSIsInVwZGF0ZUxheWVyVGV4dExhYmVsIiwidGV4dExhYmVsIiwiY29sb3JQYWxldHRlIiwic2V0Q29sb3JQYWxldHRlVUkiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiY29uZGl0aW9uIiwiY2x1c3RlclJhZGl1cyIsIndlaWdodCIsIl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnIiwiZW5hYmxlM2QiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwicGVyY2VudGlsZSIsIndvcmxkVW5pdFNpemUiLCJjb3ZlcmFnZSIsImVsZXZhdGlvblNjYWxlIiwic2l6ZVJhbmdlIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImNvdmVyYWdlRmllbGQiLCJjb3ZlcmFnZVJhbmdlIiwiYXJncyIsIl9yZW5kZXJMaW5lTGF5ZXJDb25maWciLCJtZXRhIiwiZmVhdHVyZVR5cGVzIiwicG9seWdvbiIsInN0cm9rZWQiLCJ0cmFpbExlbmd0aCIsInN0cm9rZU9wYWNpdHkiLCJoZWlnaHQiLCJ3aXJlZnJhbWUiLCJyYWRpdXNGaWVsZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInNjZW5lZ3JhcGgiLCJzaXplU2NhbGUiLCJhbmdsZVgiLCJhbmdsZVkiLCJhbmdsZVoiLCJoZWlnaHRSYW5nZSIsImxheWVyVHlwZU9wdGlvbnMiLCJ1cGRhdGVMYXllclR5cGUiLCJmaWVsZFBhaXJzIiwicmVuZGVyVGVtcGxhdGUiLCJsYXllckluZm9Nb2RhbCIsIm9wZW5Nb2RhbCIsImhhc0FsbENvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaWQiLCJjb2x1bW5zIiwidmFsdWUiLCJjb2x1bW5QYWlycyIsImFzc2lnbkNvbHVtblBhaXJzIiwiYmluZCIsImFzc2lnbkNvbHVtbiIsImNvbHVtbkxhYmVscyIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiYW55IiwiZnVuYyIsIlN0eWxlZEhvd1RvQnV0dG9uIiwiSG93VG9CdXR0b24iLCJvbkNsaWNrIiwiTGF5ZXJDb2xvclNlbGVjdG9yIiwibGFiZWwiLCJzZWxlY3RlZENvbG9yIiwicHJvcGVydHkiLCJzZXRDb2xvciIsInJnYlZhbHVlIiwiY29sb3JVSSIsIm5ld0NvbmZpZyIsIkFyY0xheWVyQ29sb3JTZWxlY3RvciIsIm9uQ2hhbmdlQ29uZmlnIiwib25DaGFuZ2VWaXNDb25maWciLCJ0YXJnZXRDb2xvciIsIkxheWVyQ29sb3JSYW5nZVNlbGVjdG9yIiwiaXNSYW5nZSIsImNvbG9yUmFuZ2UiLCJDaGFubmVsQnlWYWx1ZVNlbGVjdG9yIiwiY2hhbm5lbCIsImRlc2NyaXB0aW9uIiwiY2hhbm5lbFNjYWxlVHlwZSIsImRvbWFpbiIsImZpZWxkIiwia2V5IiwicmFuZ2UiLCJzY2FsZSIsImRlZmF1bHRNZWFzdXJlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic3VwcG9ydGVkRmllbGRzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJzaG93U2NhbGUiLCJpc0FnZ3JlZ2F0ZWQiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJ2YWwiLCJBZ2dyU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsIkFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yIiwiYWdncmVnYXRpb24iLCJzZWxlY3RlZEZpZWxkIiwiYWdncmVnYXRpb25PcHRpb25zIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFD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LEVBQUUsS0FIZjtBQUlFLElBQUEsVUFBVSxFQUFFLEtBSmQ7QUFLRSxJQUFBLFFBQVEsRUFBRSxrQkFBQTNELEtBQUs7QUFBQSxhQUNiN0YsVUFBUSxDQUNOO0FBQ0U0QixRQUFBQSxTQUFTLG9CQUNKbEMsS0FBSyxDQUFDQyxNQUFOLENBQWFpQyxTQURULHVDQUVOMEgsV0FGTSxFQUVRekQsS0FGUjtBQURYLE9BRE0sRUFPTmdDLE9BQU8sQ0FBQ0ssR0FQRixDQURLO0FBQUE7QUFMakIsSUFGRixDQURGO0FBc0JELENBOUJNO0FBK0JQIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge0J1dHRvbiwgUGFuZWxMYWJlbCwgU2lkZVBhbmVsU2VjdGlvbiwgSW5wdXR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcblxuaW1wb3J0IFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvciBmcm9tICcuL3Zpcy1jb25maWctYnktZmllbGQtc2VsZWN0b3InO1xuaW1wb3J0IExheWVyQ29sdW1uQ29uZmlnIGZyb20gJy4vbGF5ZXItY29sdW1uLWNvbmZpZyc7XG5pbXBvcnQgTGF5ZXJUeXBlU2VsZWN0b3IgZnJvbSAnLi9sYXllci10eXBlLXNlbGVjdG9yJztcbmltcG9ydCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yIGZyb20gJy4vZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yJztcbmltcG9ydCBDb2xvclNlbGVjdG9yIGZyb20gJy4vY29sb3Itc2VsZWN0b3InO1xuaW1wb3J0IFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL2NvbW1vbi9zb3VyY2UtZGF0YS1zZWxlY3Rvcic7XG5pbXBvcnQgVmlzQ29uZmlnU3dpdGNoIGZyb20gJy4vdmlzLWNvbmZpZy1zd2l0Y2gnO1xuaW1wb3J0IFZpc0NvbmZpZ1NsaWRlciBmcm9tICcuL3Zpcy1jb25maWctc2xpZGVyJztcbmltcG9ydCBMYXllckNvbmZpZ0dyb3VwLCB7Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnR9IGZyb20gJy4vbGF5ZXItY29uZmlnLWdyb3VwJztcbmltcG9ydCBUZXh0TGFiZWxQYW5lbCBmcm9tICcuL3RleHQtbGFiZWwtcGFuZWwnO1xuXG5pbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQge0xBWUVSX1RZUEVTLCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgU3R5bGVkTGF5ZXJDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZydcbn0pYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG5gO1xuXG5jb25zdCBTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdsYXllci1wYW5lbF9fY29uZmlnX192aXN1YWxDLWNvbmZpZydcbn0pYFxuICBtYXJnaW4tdG9wOiAxMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyRmllbGRzID0gKGRhdGFzZXRzLCBsYXllcikgPT5cbiAgZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0gPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXS5maWVsZHMgOiBbXTtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyQ29uZmlndXJhdG9yUHJvcHMgPSBwcm9wcyA9PiAoe1xuICBsYXllcjogcHJvcHMubGF5ZXIsXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyQ29uZmlnLFxuICBzZXRDb2xvclVJOiBwcm9wcy51cGRhdGVMYXllckNvbG9yVUlcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHMgPSBwcm9wcyA9PiAoe1xuICBsYXllcjogcHJvcHMubGF5ZXIsXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyVmlzQ29uZmlnLFxuICBzZXRDb2xvclVJOiBwcm9wcy51cGRhdGVMYXllckNvbG9yVUlcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMgPSBwcm9wcyA9PiAoe1xuICBsYXllcjogcHJvcHMubGF5ZXIsXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ1xufSk7XG5cbkxheWVyQ29uZmlndXJhdG9yRmFjdG9yeS5kZXBzID0gW1NvdXJjZURhdGFTZWxlY3RvckZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXllckNvbmZpZ3VyYXRvckZhY3RvcnkoU291cmNlRGF0YVNlbGVjdG9yKSB7XG4gIGNsYXNzIExheWVyQ29uZmlndXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllclR5cGVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllclR5cGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllclZpc0NvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyQ29sb3JVSTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBfcmVuZGVyUG9pbnRMYXllckNvbmZpZyhwcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcocHJvcHMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJJY29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBGaWxsIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIG91dGxpbmUgY29sb3IgKi99XG4gICAgICAgICAge2xheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLnBvaW50ID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm91dGxpbmV9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcudmlzQ29uZmlnLm91dGxpbmV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydyYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcuc2l6ZUZpZWxkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGQgfHwgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maXhlZFJhZGl1c31cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIHRleHQgbGFiZWwgKi99XG4gICAgICAgICAgPFRleHRMYWJlbFBhbmVsXG4gICAgICAgICAgICBmaWVsZHM9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLmZpZWxkc31cbiAgICAgICAgICAgIHVwZGF0ZUxheWVyVGV4dExhYmVsPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyVGV4dExhYmVsfVxuICAgICAgICAgICAgdGV4dExhYmVsPXtsYXllci5jb25maWcudGV4dExhYmVsfVxuICAgICAgICAgICAgY29sb3JQYWxldHRlPXt2aXNDb25maWd1cmF0b3JQcm9wcy5jb2xvclBhbGV0dGV9XG4gICAgICAgICAgICBzZXRDb2xvclBhbGV0dGVVST17dmlzQ29uZmlndXJhdG9yUHJvcHMuc2V0Q29sb3JQYWxldHRlVUl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckNsdXN0ZXJMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8QWdnclNjYWxlU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfSAvPlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb24uY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBDbHVzdGVyIFJhZGl1cyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY2x1c3RlclJhZGl1c30gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXNSYW5nZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJIZWF0bWFwTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9PlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgIHsvKiBXZWlnaHQgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eyd3ZWlnaHQnfT5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLndlaWdodH1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJHcmlkTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVySGV4YWdvbkxheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyhwcm9wcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gbGF5ZXI7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpc0NvbmZpZzoge2VuYWJsZTNkfVxuICAgICAgfSA9IGNvbmZpZztcbiAgICAgIGNvbnN0IGVsZXZhdGlvbkJ5RGVzY3JpcHRpb24gPSAnV2hlbiBvZmYsIGhlaWdodCBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnO1xuICAgICAgY29uc3QgY29sb3JCeURlc2NyaXB0aW9uID0gJ1doZW4gb2ZmLCBjb2xvciBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxBZ2dyU2NhbGVTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9IC8+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbG9yQnlEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZSAmJlxuICAgICAgICAgICAgICBsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBDZWxsIHNpemUgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydyYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLndvcmxkVW5pdFNpemV9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIEVsZXZhdGlvbiAqL31cbiAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2QgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8QWdnclNjYWxlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsZXZhdGlvbkJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZTNkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25QZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZX1cbiAgICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogU2hhbiBtb3ZlIHRoZXNlIGludG8gbGF5ZXIgY2xhc3NcbiAgICBfcmVuZGVySGV4YWdvbklkTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBDb3ZlcmFnZSAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvdmVyYWdlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5jb3ZlcmFnZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY292ZXJhZ2V9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogaGVpZ2h0ICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIZWlnaHQgUmFuZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJBcmNMYXllckNvbmZpZyhhcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyTGluZUxheWVyQ29uZmlnKGFyZ3MpO1xuICAgIH1cblxuICAgIF9yZW5kZXJMaW5lTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEFyY0xheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgICBzZXRDb2xvclVJPXtsYXllckNvbmZpZ3VyYXRvclByb3BzLnNldENvbG9yVUl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb25maWc9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VWaXNDb25maWc9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIHRoaWNrbmVzcyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3N0cm9rZSd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGR9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlclRyaXBMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtZXRhOiB7ZmVhdHVyZVR5cGVzID0ge319XG4gICAgICB9ID0gbGF5ZXI7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cIlN0cm9rZSBXaWR0aFwiIGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogVHJhaWwgTGVuZ3RoKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxuICAgICAgICAgICAgbGFiZWw9XCJUcmFpbCBMZW5ndGhcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJOdW1iZXIgb2Ygc2Vjb25kcyBmb3IgYSBwYXRoIHRvIGNvbXBsZXRlbHkgZmFkZSBvdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRyYWlsTGVuZ3RofVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyR2VvanNvbkxheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgICB9KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1ldGE6IHtmZWF0dXJlVHlwZXMgPSB7fX0sXG4gICAgICAgIGNvbmZpZzoge3Zpc0NvbmZpZ31cbiAgICAgIH0gPSBsYXllcjtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBGaWxsIENvbG9yICovfVxuICAgICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiB8fCBmZWF0dXJlVHlwZXMucG9pbnQgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPVwiRmlsbCBDb2xvclwiXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7Lyogc3Ryb2tlIGNvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPVwiU3Ryb2tlIENvbG9yXCJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxuICAgICAgICAgICAgbGFiZWw9XCJTdHJva2UgV2lkdGhcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXZpc0NvbmZpZy5maWxsZWR9XG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLndpcmVmcmFtZX0gLz5cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XG4gICAgICAgICAge2ZlYXR1cmVUeXBlcy5wb2ludCA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncmFkaXVzJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkID8gKFxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcucmFkaXVzRmllbGQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcucmFkaXVzRmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlcjNETGF5ZXJDb25maWcoe2xheWVyLCB2aXNDb25maWd1cmF0b3JQcm9wc30pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17JzNEIE1vZGVsJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuZ2xiLC5nbHRmXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZSh7c2NlbmVncmFwaDogdXJsfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eyczRCBNb2RlbCBPcHRpb25zJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplU2NhbGV9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmFuZ2xlWH1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVZfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5hbmdsZVp9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJTMkxheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgICB9KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbmZpZzoge3Zpc0NvbmZpZ31cbiAgICAgIH0gPSBsYXllcjtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmZpbGxlZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPVwiRmlsbCBDb2xvclwiXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogU3Ryb2tlICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPVwiU3Ryb2tlIENvbG9yXCJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cIlN0cm9rZSBXaWR0aFwiIGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIEVsZXZhdGlvbiAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2aXNDb25maWcuZmlsbGVkfVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5oZWlnaHR9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBsYWJlbD1cIkVsZXZhdGlvbiBTY2FsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmhlaWdodFJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhlaWdodCBSYW5nZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2ggey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud2lyZWZyYW1lfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtsYXllciwgZGF0YXNldHMsIHVwZGF0ZUxheWVyQ29uZmlnLCBsYXllclR5cGVPcHRpb25zLCB1cGRhdGVMYXllclR5cGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtmaWVsZHMgPSBbXSwgZmllbGRQYWlyc30gPSBsYXllci5jb25maWcuZGF0YUlkID8gZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0gOiB7fTtcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gbGF5ZXI7XG5cbiAgICAgIGNvbnN0IHZpc0NvbmZpZ3VyYXRvclByb3BzID0gZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBsYXllckNvbmZpZ3VyYXRvclByb3BzID0gZ2V0TGF5ZXJDb25maWd1cmF0b3JQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgIGNvbnN0IGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzID0gZ2V0TGF5ZXJDaGFubmVsQ29uZmlnUHJvcHModGhpcy5wcm9wcyk7XG5cbiAgICAgIGNvbnN0IHJlbmRlclRlbXBsYXRlID0gbGF5ZXIudHlwZSAmJiBgX3JlbmRlciR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxheWVyLnR5cGUpfUxheWVyQ29uZmlnYDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHtsYXllci5sYXllckluZm9Nb2RhbCA/IChcbiAgICAgICAgICAgIDxIb3dUb0J1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5Nb2RhbChsYXllci5sYXllckluZm9Nb2RhbCl9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydiYXNpYyd9IGNvbGxhcHNpYmxlIGV4cGFuZGVkPXshbGF5ZXIuaGFzQWxsQ29sdW1ucygpfT5cbiAgICAgICAgICAgIDxMYXllclR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgIGxheWVyVHlwZU9wdGlvbnM9e2xheWVyVHlwZU9wdGlvbnN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt1cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgIGlkPXtsYXllci5pZH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsYXllci50eXBlICYmIGNvbmZpZy5jb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgZGF0YUlkPXtjb25maWcuZGF0YUlkfVxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbHVlID0+IHVwZGF0ZUxheWVyQ29uZmlnKHtkYXRhSWQ6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPExheWVyQ29sdW1uQ29uZmlnXG4gICAgICAgICAgICAgICAgY29sdW1uUGFpcnM9e2xheWVyLmNvbHVtblBhaXJzfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2xheWVyLmNvbmZpZy5jb2x1bW5zfVxuICAgICAgICAgICAgICAgIGFzc2lnbkNvbHVtblBhaXJzPXtsYXllci5hc3NpZ25Db2x1bW5QYWlycy5iaW5kKGxheWVyKX1cbiAgICAgICAgICAgICAgICBhc3NpZ25Db2x1bW49e2xheWVyLmFzc2lnbkNvbHVtbi5iaW5kKGxheWVyKX1cbiAgICAgICAgICAgICAgICBjb2x1bW5MYWJlbHM9e2xheWVyLmNvbHVtbkxhYmVsc31cbiAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyQ29uZmlnPXt1cGRhdGVMYXllckNvbmZpZ31cbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllclR5cGU9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAge3RoaXNbcmVuZGVyVGVtcGxhdGVdICYmXG4gICAgICAgICAgICB0aGlzW3JlbmRlclRlbXBsYXRlXSh7XG4gICAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgICAgICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMsXG4gICAgICAgICAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHNcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTGF5ZXJDb25maWd1cmF0b3I7XG59XG4vKlxuICogQ29tcG9uZW50aXplIGNvbmZpZyBjb21wb25lbnQgaW50byBwdXJlIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICovXG5cbmNvbnN0IFN0eWxlZEhvd1RvQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAtNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhvd1RvQnV0dG9uID0gKHtvbkNsaWNrfSkgPT4gKFxuICA8U3R5bGVkSG93VG9CdXR0b24+XG4gICAgPEJ1dHRvbiBsaW5rIHNtYWxsIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgSG93IHRvXG4gICAgPC9CdXR0b24+XG4gIDwvU3R5bGVkSG93VG9CdXR0b24+XG4pO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclNlbGVjdG9yID0gKHtcbiAgbGF5ZXIsXG4gIG9uQ2hhbmdlLFxuICBsYWJlbCxcbiAgc2VsZWN0ZWRDb2xvcixcbiAgcHJvcGVydHkgPSAnY29sb3InLFxuICBzZXRDb2xvclVJXG59KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IHNlbGVjdGVkQ29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogcmdiVmFsdWV9KVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFyY0xheWVyQ29sb3JTZWxlY3RvciA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZUNvbmZpZyxcbiAgb25DaGFuZ2VWaXNDb25maWcsXG4gIHByb3BlcnR5ID0gJ2NvbG9yJyxcbiAgc2V0Q29sb3JVSVxufSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8Q29sb3JTZWxlY3RvclxuICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlQ29uZmlnKHtjb2xvcjogcmdiVmFsdWV9KSxcbiAgICAgICAgICBsYWJlbDogJ1NvdXJjZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWcudGFyZ2V0Q29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZVZpc0NvbmZpZyh7dGFyZ2V0Q29sb3I6IHJnYlZhbHVlfSksXG4gICAgICAgICAgbGFiZWw6ICdUYXJnZXQnXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclJhbmdlU2VsZWN0b3IgPSAoe2xheWVyLCBvbkNoYW5nZSwgcHJvcGVydHkgPSAnY29sb3JSYW5nZScsIHNldENvbG9yVUl9KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldLFxuICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgc2V0Q29sb3I6IGNvbG9yUmFuZ2UgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IGNvbG9yUmFuZ2V9KVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IENoYW5uZWxCeVZhbHVlU2VsZWN0b3IgPSAoe2xheWVyLCBjaGFubmVsLCBvbkNoYW5nZSwgZmllbGRzLCBkZXNjcmlwdGlvbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGNoYW5uZWxTY2FsZVR5cGUsXG4gICAgZG9tYWluLFxuICAgIGZpZWxkLFxuICAgIGtleSxcbiAgICBwcm9wZXJ0eSxcbiAgICByYW5nZSxcbiAgICBzY2FsZSxcbiAgICBkZWZhdWx0TWVhc3VyZSxcbiAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzXG4gIH0gPSBjaGFubmVsO1xuICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XG4gICAgc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XG4gIGNvbnN0IHN1cHBvcnRlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKHt0eXBlfSkgPT4gY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMuaW5jbHVkZXModHlwZSkpO1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbC5rZXkpO1xuICBjb25zdCBzaG93U2NhbGUgPSAhbGF5ZXIuaXNBZ2dyZWdhdGVkICYmIGxheWVyLmNvbmZpZ1tzY2FsZV0gJiYgc2NhbGVPcHRpb25zLmxlbmd0aCA+IDE7XG4gIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9IGBDYWxjdWxhdGUgJHtwcm9wZXJ0eX0gYmFzZWQgb24gc2VsZWN0ZWQgZmllbGRgO1xuXG4gIHJldHVybiAoXG4gICAgPFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvclxuICAgICAgY2hhbm5lbD17Y2hhbm5lbC5rZXl9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgICAgZG9tYWluPXtsYXllci5jb25maWdbZG9tYWluXX1cbiAgICAgIGZpZWxkcz17c3VwcG9ydGVkRmllbGRzfVxuICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAga2V5PXtgJHtrZXl9LWNoYW5uZWwtc2VsZWN0b3JgfVxuICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZWFzdXJlIHx8ICdTZWxlY3QgYSBmaWVsZCd9XG4gICAgICByYW5nZT17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV19XG4gICAgICBzY2FsZU9wdGlvbnM9e3NjYWxlT3B0aW9uc31cbiAgICAgIHNjYWxlVHlwZT17c2NhbGUgPyBsYXllci5jb25maWdbc2NhbGVdIDogbnVsbH1cbiAgICAgIHNlbGVjdGVkRmllbGQ9e2xheWVyLmNvbmZpZ1tmaWVsZF19XG4gICAgICBzaG93U2NhbGU9e3Nob3dTY2FsZX1cbiAgICAgIHVwZGF0ZUZpZWxkPXt2YWwgPT4gb25DaGFuZ2Uoe1tmaWVsZF06IHZhbH0sIGtleSl9XG4gICAgICB1cGRhdGVTY2FsZT17dmFsID0+IG9uQ2hhbmdlKHtbc2NhbGVdOiB2YWx9LCBrZXkpfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQWdnclNjYWxlU2VsZWN0b3IgPSAoe2NoYW5uZWwsIGxheWVyLCBvbkNoYW5nZX0pID0+IHtcbiAgY29uc3Qge3NjYWxlLCBrZXl9ID0gY2hhbm5lbDtcbiAgY29uc3Qgc2NhbGVPcHRpb25zID0gbGF5ZXIuZ2V0U2NhbGVPcHRpb25zKGtleSk7XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2NhbGVPcHRpb25zKSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMSA/IChcbiAgICA8RGltZW5zaW9uU2NhbGVTZWxlY3RvclxuICAgICAgbGFiZWw9e2Ake2tleX0gU2NhbGVgfVxuICAgICAgb3B0aW9ucz17c2NhbGVPcHRpb25zfVxuICAgICAgc2NhbGVUeXBlPXtsYXllci5jb25maWdbc2NhbGVdfVxuICAgICAgb25TZWxlY3Q9e3ZhbCA9PiBvbkNoYW5nZSh7W3NjYWxlXTogdmFsfSwga2V5KX1cbiAgICAvPlxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBBZ2dyZWdhdGlvblR5cGVTZWxlY3RvciA9ICh7bGF5ZXIsIGNoYW5uZWwsIG9uQ2hhbmdlfSkgPT4ge1xuICBjb25zdCB7ZmllbGQsIGFnZ3JlZ2F0aW9uLCBrZXl9ID0gY2hhbm5lbDtcbiAgY29uc3Qgc2VsZWN0ZWRGaWVsZCA9IGxheWVyLmNvbmZpZ1tmaWVsZF07XG4gIGNvbnN0IHt2aXNDb25maWd9ID0gbGF5ZXIuY29uZmlnO1xuXG4gIC8vIGFnZ3JlZ2F0aW9uIHNob3VsZCBvbmx5IGJlIHNlbGVjdGFibGUgd2hlbiBmaWVsZCBpcyBzZWxlY3RlZFxuICBjb25zdCBhZ2dyZWdhdGlvbk9wdGlvbnMgPSBsYXllci5nZXRBZ2dyZWdhdGlvbk9wdGlvbnMoa2V5KTtcblxuICByZXR1cm4gKFxuICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPFBhbmVsTGFiZWw+e2BBZ2dyZWdhdGUgJHtzZWxlY3RlZEZpZWxkLm5hbWV9IGJ5YH08L1BhbmVsTGFiZWw+XG4gICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e3Zpc0NvbmZpZ1thZ2dyZWdhdGlvbl19XG4gICAgICAgIG9wdGlvbnM9e2FnZ3JlZ2F0aW9uT3B0aW9uc31cbiAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+XG4gICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZpc0NvbmZpZzoge1xuICAgICAgICAgICAgICAgIC4uLmxheWVyLmNvbmZpZy52aXNDb25maWcsXG4gICAgICAgICAgICAgICAgW2FnZ3JlZ2F0aW9uXTogdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5uZWwua2V5XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgKTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1wYXJhbXMgKi9cbiJdfQ==