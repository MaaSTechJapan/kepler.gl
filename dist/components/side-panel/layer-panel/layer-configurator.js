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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsImdldExheWVyRmllbGRzIiwiZGF0YXNldHMiLCJsYXllciIsImNvbmZpZyIsImRhdGFJZCIsImZpZWxkcyIsImdldExheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJwcm9wcyIsIm9uQ2hhbmdlIiwidXBkYXRlTGF5ZXJDb25maWciLCJzZXRDb2xvclVJIiwidXBkYXRlTGF5ZXJDb2xvclVJIiwiZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHMiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiZGVwcyIsIlNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkiLCJTb3VyY2VEYXRhU2VsZWN0b3IiLCJMYXllckNvbmZpZ3VyYXRvciIsIl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImNvbG9yRmllbGQiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwib3BhY2l0eSIsInR5cGUiLCJMQVlFUl9UWVBFUyIsInBvaW50Iiwib3V0bGluZSIsInN0cm9rZUNvbG9yRmllbGQiLCJ2aXNDb25maWciLCJzdHJva2VDb2xvciIsInRoaWNrbmVzcyIsInNpemVGaWVsZCIsInJhZGl1cyIsIkJvb2xlYW4iLCJyYWRpdXNSYW5nZSIsImZpeGVkUmFkaXVzIiwic2l6ZSIsInVwZGF0ZUxheWVyVGV4dExhYmVsIiwidGV4dExhYmVsIiwiY29sb3JQYWxldHRlIiwic2V0Q29sb3JQYWxldHRlVUkiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiY29uZGl0aW9uIiwiY2x1c3RlclJhZGl1cyIsIndlaWdodCIsIl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnIiwiZW5hYmxlM2QiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwicGVyY2VudGlsZSIsIndvcmxkVW5pdFNpemUiLCJjb3ZlcmFnZSIsImVsZXZhdGlvblNjYWxlIiwic2l6ZVJhbmdlIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImNvdmVyYWdlRmllbGQiLCJjb3ZlcmFnZVJhbmdlIiwiYXJncyIsIl9yZW5kZXJMaW5lTGF5ZXJDb25maWciLCJtZXRhIiwiZmVhdHVyZVR5cGVzIiwicG9seWdvbiIsInN0cm9rZWQiLCJ0cmFpbExlbmd0aCIsInN0cm9rZU9wYWNpdHkiLCJoZWlnaHQiLCJ3aXJlZnJhbWUiLCJyYWRpdXNGaWVsZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInNjZW5lZ3JhcGgiLCJzaXplU2NhbGUiLCJhbmdsZVgiLCJhbmdsZVkiLCJhbmdsZVoiLCJoZWlnaHRSYW5nZSIsImxheWVyVHlwZU9wdGlvbnMiLCJ1cGRhdGVMYXllclR5cGUiLCJmaWVsZFBhaXJzIiwicmVuZGVyVGVtcGxhdGUiLCJsYXllckluZm9Nb2RhbCIsIm9wZW5Nb2RhbCIsImhhc0FsbENvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaWQiLCJjb2x1bW5zIiwidmFsdWUiLCJjb2x1bW5QYWlycyIsImFzc2lnbkNvbHVtblBhaXJzIiwiYmluZCIsImFzc2lnbkNvbHVtbiIsImNvbHVtbkxhYmVscyIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiYW55IiwiZnVuYyIsIlN0eWxlZEhvd1RvQnV0dG9uIiwiSG93VG9CdXR0b24iLCJvbkNsaWNrIiwiTGF5ZXJDb2xvclNlbGVjdG9yIiwibGFiZWwiLCJzZWxlY3RlZENvbG9yIiwicHJvcGVydHkiLCJzZXRDb2xvciIsInJnYlZhbHVlIiwiY29sb3JVSSIsIm5ld0NvbmZpZyIsIkFyY0xheWVyQ29sb3JTZWxlY3RvciIsIm9uQ2hhbmdlQ29uZmlnIiwib25DaGFuZ2VWaXNDb25maWciLCJ0YXJnZXRDb2xvciIsIkxheWVyQ29sb3JSYW5nZVNlbGVjdG9yIiwiaXNSYW5nZSIsImNvbG9yUmFuZ2UiLCJDaGFubmVsQnlWYWx1ZVNlbGVjdG9yIiwiY2hhbm5lbCIsImRlc2NyaXB0aW9uIiwiY2hhbm5lbFNjYWxlVHlwZSIsImRvbWFpbiIsImZpZWxkIiwia2V5IiwicmFuZ2UiLCJzY2FsZSIsImRlZmF1bHRNZWFzdXJlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic3VwcG9ydGVkRmllbGRzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJzaG93U2NhbGUiLCJpc0FnZ3JlZ2F0ZWQiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJ2YWwiLCJBZ2dyU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsIkFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yIiwiYWdncmVnYXRpb24iLCJzZWxlY3RlZEZpZWxkIiwiYWdncmVnYXRpb25PcHRpb25zIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFD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LEVBQUUsS0FIZjtBQUlFLElBQUEsVUFBVSxFQUFFLEtBSmQ7QUFLRSxJQUFBLFFBQVEsRUFBRSxrQkFBQTNELEtBQUs7QUFBQSxhQUNiN0YsVUFBUSxDQUNOO0FBQ0U0QixRQUFBQSxTQUFTLG9CQUNKbEMsS0FBSyxDQUFDQyxNQUFOLENBQWFpQyxTQURULHVDQUVOMEgsV0FGTSxFQUVRekQsS0FGUjtBQURYLE9BRE0sRUFPTmdDLE9BQU8sQ0FBQ0ssR0FQRixDQURLO0FBQUE7QUFMakIsSUFGRixDQURGO0FBc0JELENBOUJNO0FBK0JQIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHtCdXR0b24sIFBhbmVsTGFiZWwsIFNpZGVQYW5lbFNlY3Rpb24sIElucHV0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcclxuXHJcbmltcG9ydCBWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IgZnJvbSAnLi92aXMtY29uZmlnLWJ5LWZpZWxkLXNlbGVjdG9yJztcclxuaW1wb3J0IExheWVyQ29sdW1uQ29uZmlnIGZyb20gJy4vbGF5ZXItY29sdW1uLWNvbmZpZyc7XHJcbmltcG9ydCBMYXllclR5cGVTZWxlY3RvciBmcm9tICcuL2xheWVyLXR5cGUtc2VsZWN0b3InO1xyXG5pbXBvcnQgRGltZW5zaW9uU2NhbGVTZWxlY3RvciBmcm9tICcuL2RpbWVuc2lvbi1zY2FsZS1zZWxlY3Rvcic7XHJcbmltcG9ydCBDb2xvclNlbGVjdG9yIGZyb20gJy4vY29sb3Itc2VsZWN0b3InO1xyXG5pbXBvcnQgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL3NvdXJjZS1kYXRhLXNlbGVjdG9yJztcclxuaW1wb3J0IFZpc0NvbmZpZ1N3aXRjaCBmcm9tICcuL3Zpcy1jb25maWctc3dpdGNoJztcclxuaW1wb3J0IFZpc0NvbmZpZ1NsaWRlciBmcm9tICcuL3Zpcy1jb25maWctc2xpZGVyJztcclxuaW1wb3J0IExheWVyQ29uZmlnR3JvdXAsIHtDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudH0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xyXG5pbXBvcnQgVGV4dExhYmVsUGFuZWwgZnJvbSAnLi90ZXh0LWxhYmVsLXBhbmVsJztcclxuXHJcbmltcG9ydCB7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyfSBmcm9tICd1dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQge0xBWUVSX1RZUEVTLCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IFN0eWxlZExheWVyQ29uZmlndXJhdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZydcclxufSlgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWdfX3Zpc3VhbEMtY29uZmlnJ1xyXG59KWBcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheWVyRmllbGRzID0gKGRhdGFzZXRzLCBsYXllcikgPT5cclxuICBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdLmZpZWxkcyA6IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheWVyQ29uZmlndXJhdG9yUHJvcHMgPSBwcm9wcyA9PiAoe1xyXG4gIGxheWVyOiBwcm9wcy5sYXllcixcclxuICBmaWVsZHM6IGdldExheWVyRmllbGRzKHByb3BzLmRhdGFzZXRzLCBwcm9wcy5sYXllciksXHJcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyQ29uZmlnLFxyXG4gIHNldENvbG9yVUk6IHByb3BzLnVwZGF0ZUxheWVyQ29sb3JVSVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWaXNDb25maWd1cmF0b3JQcm9wcyA9IHByb3BzID0+ICh7XHJcbiAgbGF5ZXI6IHByb3BzLmxheWVyLFxyXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcclxuICBvbkNoYW5nZTogcHJvcHMudXBkYXRlTGF5ZXJWaXNDb25maWcsXHJcbiAgc2V0Q29sb3JVSTogcHJvcHMudXBkYXRlTGF5ZXJDb2xvclVJXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzID0gcHJvcHMgPT4gKHtcclxuICBsYXllcjogcHJvcHMubGF5ZXIsXHJcbiAgZmllbGRzOiBnZXRMYXllckZpZWxkcyhwcm9wcy5kYXRhc2V0cywgcHJvcHMubGF5ZXIpLFxyXG4gIG9uQ2hhbmdlOiBwcm9wcy51cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWdcclxufSk7XHJcblxyXG5MYXllckNvbmZpZ3VyYXRvckZhY3RvcnkuZGVwcyA9IFtTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5XTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheWVyQ29uZmlndXJhdG9yRmFjdG9yeShTb3VyY2VEYXRhU2VsZWN0b3IpIHtcclxuICBjbGFzcyBMYXllckNvbmZpZ3VyYXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllclR5cGVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxyXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHVwZGF0ZUxheWVyQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB1cGRhdGVMYXllclR5cGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHVwZGF0ZUxheWVyQ29sb3JVSTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBfcmVuZGVyUG9pbnRMYXllckNvbmZpZyhwcm9wcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyhwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckljb25MYXllckNvbmZpZyhwcm9wcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyhwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcoe1xyXG4gICAgICBsYXllcixcclxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzLFxyXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzXHJcbiAgICB9KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAgey8qIEZpbGwgQ29sb3IgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcblxyXG4gICAgICAgICAgey8qIG91dGxpbmUgY29sb3IgKi99XHJcbiAgICAgICAgICB7bGF5ZXIudHlwZSA9PT0gTEFZRVJfVFlQRVMucG9pbnQgPyAoXHJcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXHJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm91dGxpbmV9XHJcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQgPyAoXHJcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc3Ryb2tlQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncmFkaXVzJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnNpemVGaWVsZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGQgfHwgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmZpeGVkUmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiB0ZXh0IGxhYmVsICovfVxyXG4gICAgICAgICAgPFRleHRMYWJlbFBhbmVsXHJcbiAgICAgICAgICAgIGZpZWxkcz17dmlzQ29uZmlndXJhdG9yUHJvcHMuZmllbGRzfVxyXG4gICAgICAgICAgICB1cGRhdGVMYXllclRleHRMYWJlbD17dGhpcy5wcm9wcy51cGRhdGVMYXllclRleHRMYWJlbH1cclxuICAgICAgICAgICAgdGV4dExhYmVsPXtsYXllci5jb25maWcudGV4dExhYmVsfVxyXG4gICAgICAgICAgICBjb2xvclBhbGV0dGU9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLmNvbG9yUGFsZXR0ZX1cclxuICAgICAgICAgICAgc2V0Q29sb3JQYWxldHRlVUk9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLnNldENvbG9yUGFsZXR0ZVVJfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJDbHVzdGVyTGF5ZXJDb25maWcoe1xyXG4gICAgICBsYXllcixcclxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXHJcbiAgICB9KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAgey8qIENvbG9yICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPEFnZ3JTY2FsZVNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn0gLz5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcclxuICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBDbHVzdGVyIFJhZGl1cyAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncmFkaXVzJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNsdXN0ZXJSYWRpdXN9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVySGVhdG1hcExheWVyQ29uZmlnKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xyXG4gICAgfSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBDb2xvciAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnY29sb3InfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9PlxyXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c31cclxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAgey8qIFdlaWdodCAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnd2VpZ2h0J30+XHJcbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMud2VpZ2h0fVxyXG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJHcmlkTGF5ZXJDb25maWcocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJIZXhhZ29uTGF5ZXJDb25maWcocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xyXG4gICAgfSkge1xyXG4gICAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdmlzQ29uZmlnOiB7ZW5hYmxlM2R9XHJcbiAgICAgIH0gPSBjb25maWc7XHJcbiAgICAgIGNvbnN0IGVsZXZhdGlvbkJ5RGVzY3JpcHRpb24gPSAnV2hlbiBvZmYsIGhlaWdodCBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnO1xyXG4gICAgICBjb25zdCBjb2xvckJ5RGVzY3JpcHRpb24gPSAnV2hlbiBvZmYsIGNvbG9yIGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cyc7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBDb2xvciAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnY29sb3InfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxBZ2dyU2NhbGVTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb24uY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXHJcbiAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb259XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbG9yQnlEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlICYmXHJcbiAgICAgICAgICAgICAgbGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZS5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGV9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBDZWxsIHNpemUgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53b3JsZFVuaXRTaXplfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb3ZlcmFnZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XHJcbiAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2QgPyAoXHJcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXHJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEFnZ3JTY2FsZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWxldmF0aW9uQnlEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGUzZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxyXG4gICAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZS5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcclxuICAgICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25QZXJjZW50aWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogU2hhbiBtb3ZlIHRoZXNlIGludG8gbGF5ZXIgY2xhc3NcclxuICAgIF9yZW5kZXJIZXhhZ29uSWRMYXllckNvbmZpZyh7XHJcbiAgICAgIGxheWVyLFxyXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcclxuICAgIH0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICAgICB7LyogQ29sb3IgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcblxyXG4gICAgICAgICAgey8qIENvdmVyYWdlICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb3ZlcmFnZSd9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5jb3ZlcmFnZUZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb3ZlcmFnZX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb3ZlcmFnZVJhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY292ZXJhZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogaGVpZ2h0ICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cclxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIZWlnaHQgUmFuZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyQXJjTGF5ZXJDb25maWcoYXJncykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyTGluZUxheWVyQ29uZmlnKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJMaW5lTGF5ZXJDb25maWcoe1xyXG4gICAgICBsYXllcixcclxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXHJcbiAgICB9KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAgey8qIENvbG9yICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8QXJjTGF5ZXJDb2xvclNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICBzZXRDb2xvclVJPXtsYXllckNvbmZpZ3VyYXRvclByb3BzLnNldENvbG9yVUl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbmZpZz17bGF5ZXJDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlVmlzQ29uZmlnPXt2aXNDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiB0aGlja25lc3MgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3N0cm9rZSd9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcuc2l6ZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJUcmlwTGF5ZXJDb25maWcoe1xyXG4gICAgICBsYXllcixcclxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXHJcbiAgICB9KSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBtZXRhOiB7ZmVhdHVyZVR5cGVzID0ge319XHJcbiAgICAgIH0gPSBsYXllcjtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAgey8qIENvbG9yICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IGxhYmVsPVwiU3Ryb2tlIFdpZHRoXCIgY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogVHJhaWwgTGVuZ3RoKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRyYWlsIExlbmd0aFwiXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTnVtYmVyIG9mIHNlY29uZHMgZm9yIGEgcGF0aCB0byBjb21wbGV0ZWx5IGZhZGUgb3V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50cmFpbExlbmd0aH1cclxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckdlb2pzb25MYXllckNvbmZpZyh7XHJcbiAgICAgIGxheWVyLFxyXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcclxuICAgIH0pIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG1ldGE6IHtmZWF0dXJlVHlwZXMgPSB7fX0sXHJcbiAgICAgICAgY29uZmlnOiB7dmlzQ29uZmlnfVxyXG4gICAgICB9ID0gbGF5ZXI7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBGaWxsIENvbG9yICovfVxyXG4gICAgICAgICAge2ZlYXR1cmVUeXBlcy5wb2x5Z29uIHx8IGZlYXR1cmVUeXBlcy5wb2ludCA/IChcclxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBsYWJlbD1cIkZpbGwgQ29sb3JcIlxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXHJcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgey8qIHN0cm9rZSBjb2xvciAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXHJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkfVxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3Ryb2tlIENvbG9yXCJcclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcn1cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc3Ryb2tlQ29sb3J9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxyXG4gICAgICAgICAgICBsYWJlbD1cIlN0cm9rZSBXaWR0aFwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XHJcbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvbHlnb24gPyAoXHJcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXHJcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXZpc0NvbmZpZy5maWxsZWR9XHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2ggey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud2lyZWZyYW1lfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XHJcbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxyXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkID8gKFxyXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcucmFkaXVzRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMucmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcjNETGF5ZXJDb25maWcoe2xheWVyLCB2aXNDb25maWd1cmF0b3JQcm9wc30pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17JzNEIE1vZGVsJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuZ2xiLC5nbHRmXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLm9uQ2hhbmdlKHtzY2VuZWdyYXBoOiB1cmx9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eyczRCBNb2RlbCBPcHRpb25zJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVNjYWxlfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVYfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVZfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVafVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyUzJMYXllckNvbmZpZyh7XHJcbiAgICAgIGxheWVyLFxyXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcclxuICAgIH0pIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGNvbmZpZzoge3Zpc0NvbmZpZ31cclxuICAgICAgfSA9IGxheWVyO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICAgICB7LyogQ29sb3IgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlsbCBDb2xvclwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcblxyXG4gICAgICAgICAgey8qIFN0cm9rZSAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXHJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkfVxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3Ryb2tlIENvbG9yXCJcclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcn1cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc3Ryb2tlQ29sb3J9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogU3Ryb2tlIFdpZHRoICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cIlN0cm9rZSBXaWR0aFwiIGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshdmlzQ29uZmlnLmZpbGxlZH1cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBsYWJlbD1cIkVsZXZhdGlvbiBTY2FsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuaGVpZ2h0UmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhlaWdodCBSYW5nZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLndpcmVmcmFtZX0gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2xheWVyLCBkYXRhc2V0cywgdXBkYXRlTGF5ZXJDb25maWcsIGxheWVyVHlwZU9wdGlvbnMsIHVwZGF0ZUxheWVyVHlwZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7ZmllbGRzID0gW10sIGZpZWxkUGFpcnN9ID0gbGF5ZXIuY29uZmlnLmRhdGFJZCA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdIDoge307XHJcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gbGF5ZXI7XHJcblxyXG4gICAgICBjb25zdCB2aXNDb25maWd1cmF0b3JQcm9wcyA9IGdldFZpc0NvbmZpZ3VyYXRvclByb3BzKHRoaXMucHJvcHMpO1xyXG4gICAgICBjb25zdCBsYXllckNvbmZpZ3VyYXRvclByb3BzID0gZ2V0TGF5ZXJDb25maWd1cmF0b3JQcm9wcyh0aGlzLnByb3BzKTtcclxuICAgICAgY29uc3QgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMgPSBnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlclRlbXBsYXRlID0gbGF5ZXIudHlwZSAmJiBgX3JlbmRlciR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxheWVyLnR5cGUpfUxheWVyQ29uZmlnYDtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAge2xheWVyLmxheWVySW5mb01vZGFsID8gKFxyXG4gICAgICAgICAgICA8SG93VG9CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuTW9kYWwobGF5ZXIubGF5ZXJJbmZvTW9kYWwpfSAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2Jhc2ljJ30gY29sbGFwc2libGUgZXhwYW5kZWQ9eyFsYXllci5oYXNBbGxDb2x1bW5zKCl9PlxyXG4gICAgICAgICAgICA8TGF5ZXJUeXBlU2VsZWN0b3JcclxuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XHJcbiAgICAgICAgICAgICAgbGF5ZXJUeXBlT3B0aW9ucz17bGF5ZXJUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlTGF5ZXJUeXBlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGFzZXRzKS5sZW5ndGggPiAxICYmIChcclxuICAgICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgICAgICBpZD17bGF5ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsYXllci50eXBlICYmIGNvbmZpZy5jb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhSWQ9e2NvbmZpZy5kYXRhSWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2YWx1ZSA9PiB1cGRhdGVMYXllckNvbmZpZyh7ZGF0YUlkOiB2YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxMYXllckNvbHVtbkNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgY29sdW1uUGFpcnM9e2xheWVyLmNvbHVtblBhaXJzfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17bGF5ZXIuY29uZmlnLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25Db2x1bW5QYWlycz17bGF5ZXIuYXNzaWduQ29sdW1uUGFpcnMuYmluZChsYXllcil9XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25Db2x1bW49e2xheWVyLmFzc2lnbkNvbHVtbi5iaW5kKGxheWVyKX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbkxhYmVscz17bGF5ZXIuY29sdW1uTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJDb25maWc9e3VwZGF0ZUxheWVyQ29uZmlnfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUeXBlPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyVHlwZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAge3RoaXNbcmVuZGVyVGVtcGxhdGVdICYmXHJcbiAgICAgICAgICAgIHRoaXNbcmVuZGVyVGVtcGxhdGVdKHtcclxuICAgICAgICAgICAgICBsYXllcixcclxuICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgICAgICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcclxuICAgICAgICAgICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTGF5ZXJDb25maWd1cmF0b3I7XHJcbn1cclxuLypcclxuICogQ29tcG9uZW50aXplIGNvbmZpZyBjb21wb25lbnQgaW50byBwdXJlIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmNvbnN0IFN0eWxlZEhvd1RvQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgdG9wOiAtNHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvd1RvQnV0dG9uID0gKHtvbkNsaWNrfSkgPT4gKFxyXG4gIDxTdHlsZWRIb3dUb0J1dHRvbj5cclxuICAgIDxCdXR0b24gbGluayBzbWFsbCBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgSG93IHRvXHJcbiAgICA8L0J1dHRvbj5cclxuICA8L1N0eWxlZEhvd1RvQnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExheWVyQ29sb3JTZWxlY3RvciA9ICh7XHJcbiAgbGF5ZXIsXHJcbiAgb25DaGFuZ2UsXHJcbiAgbGFiZWwsXHJcbiAgc2VsZWN0ZWRDb2xvcixcclxuICBwcm9wZXJ0eSA9ICdjb2xvcicsXHJcbiAgc2V0Q29sb3JVSVxyXG59KSA9PiAoXHJcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICA8Q29sb3JTZWxlY3RvclxyXG4gICAgICBjb2xvclNldHM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBzZWxlY3RlZENvbG9yIHx8IGxheWVyLmNvbmZpZy5jb2xvcixcclxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogcmdiVmFsdWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgXX1cclxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxyXG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cclxuICAgIC8+XHJcbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFyY0xheWVyQ29sb3JTZWxlY3RvciA9ICh7XHJcbiAgbGF5ZXIsXHJcbiAgb25DaGFuZ2VDb25maWcsXHJcbiAgb25DaGFuZ2VWaXNDb25maWcsXHJcbiAgcHJvcGVydHkgPSAnY29sb3InLFxyXG4gIHNldENvbG9yVUlcclxufSkgPT4gKFxyXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgPENvbG9yU2VsZWN0b3JcclxuICAgICAgY29sb3JTZXRzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLmNvbG9yLFxyXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlQ29uZmlnKHtjb2xvcjogcmdiVmFsdWV9KSxcclxuICAgICAgICAgIGxhYmVsOiAnU291cmNlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy50YXJnZXRDb2xvciB8fCBsYXllci5jb25maWcuY29sb3IsXHJcbiAgICAgICAgICBzZXRDb2xvcjogcmdiVmFsdWUgPT4gb25DaGFuZ2VWaXNDb25maWcoe3RhcmdldENvbG9yOiByZ2JWYWx1ZX0pLFxyXG4gICAgICAgICAgbGFiZWw6ICdUYXJnZXQnXHJcbiAgICAgICAgfVxyXG4gICAgICBdfVxyXG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XHJcbiAgICAgIHNldENvbG9yVUk9e25ld0NvbmZpZyA9PiBzZXRDb2xvclVJKHByb3BlcnR5LCBuZXdDb25maWcpfVxyXG4gICAgLz5cclxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclJhbmdlU2VsZWN0b3IgPSAoe2xheWVyLCBvbkNoYW5nZSwgcHJvcGVydHkgPSAnY29sb3JSYW5nZScsIHNldENvbG9yVUl9KSA9PiAoXHJcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICA8Q29sb3JTZWxlY3RvclxyXG4gICAgICBjb2xvclNldHM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XSxcclxuICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXHJcbiAgICAgICAgICBzZXRDb2xvcjogY29sb3JSYW5nZSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogY29sb3JSYW5nZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICBdfVxyXG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XHJcbiAgICAgIHNldENvbG9yVUk9e25ld0NvbmZpZyA9PiBzZXRDb2xvclVJKHByb3BlcnR5LCBuZXdDb25maWcpfVxyXG4gICAgLz5cclxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciA9ICh7bGF5ZXIsIGNoYW5uZWwsIG9uQ2hhbmdlLCBmaWVsZHMsIGRlc2NyaXB0aW9ufSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoYW5uZWxTY2FsZVR5cGUsXHJcbiAgICBkb21haW4sXHJcbiAgICBmaWVsZCxcclxuICAgIGtleSxcclxuICAgIHByb3BlcnR5LFxyXG4gICAgcmFuZ2UsXHJcbiAgICBzY2FsZSxcclxuICAgIGRlZmF1bHRNZWFzdXJlLFxyXG4gICAgc3VwcG9ydGVkRmllbGRUeXBlc1xyXG4gIH0gPSBjaGFubmVsO1xyXG4gIGNvbnN0IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzID1cclxuICAgIHN1cHBvcnRlZEZpZWxkVHlwZXMgfHwgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTW2NoYW5uZWxTY2FsZVR5cGVdO1xyXG4gIGNvbnN0IHN1cHBvcnRlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKHt0eXBlfSkgPT4gY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMuaW5jbHVkZXModHlwZSkpO1xyXG4gIGNvbnN0IHNjYWxlT3B0aW9ucyA9IGxheWVyLmdldFNjYWxlT3B0aW9ucyhjaGFubmVsLmtleSk7XHJcbiAgY29uc3Qgc2hvd1NjYWxlID0gIWxheWVyLmlzQWdncmVnYXRlZCAmJiBsYXllci5jb25maWdbc2NhbGVdICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxO1xyXG4gIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9IGBDYWxjdWxhdGUgJHtwcm9wZXJ0eX0gYmFzZWQgb24gc2VsZWN0ZWQgZmllbGRgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvclxyXG4gICAgICBjaGFubmVsPXtjaGFubmVsLmtleX1cclxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmlwdGlvbn1cclxuICAgICAgZG9tYWluPXtsYXllci5jb25maWdbZG9tYWluXX1cclxuICAgICAgZmllbGRzPXtzdXBwb3J0ZWRGaWVsZHN9XHJcbiAgICAgIGlkPXtsYXllci5pZH1cclxuICAgICAga2V5PXtgJHtrZXl9LWNoYW5uZWwtc2VsZWN0b3JgfVxyXG4gICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVhc3VyZSB8fCAnU2VsZWN0IGEgZmllbGQnfVxyXG4gICAgICByYW5nZT17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV19XHJcbiAgICAgIHNjYWxlT3B0aW9ucz17c2NhbGVPcHRpb25zfVxyXG4gICAgICBzY2FsZVR5cGU9e3NjYWxlID8gbGF5ZXIuY29uZmlnW3NjYWxlXSA6IG51bGx9XHJcbiAgICAgIHNlbGVjdGVkRmllbGQ9e2xheWVyLmNvbmZpZ1tmaWVsZF19XHJcbiAgICAgIHNob3dTY2FsZT17c2hvd1NjYWxlfVxyXG4gICAgICB1cGRhdGVGaWVsZD17dmFsID0+IG9uQ2hhbmdlKHtbZmllbGRdOiB2YWx9LCBrZXkpfVxyXG4gICAgICB1cGRhdGVTY2FsZT17dmFsID0+IG9uQ2hhbmdlKHtbc2NhbGVdOiB2YWx9LCBrZXkpfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFnZ3JTY2FsZVNlbGVjdG9yID0gKHtjaGFubmVsLCBsYXllciwgb25DaGFuZ2V9KSA9PiB7XHJcbiAgY29uc3Qge3NjYWxlLCBrZXl9ID0gY2hhbm5lbDtcclxuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoa2V5KTtcclxuXHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2NhbGVPcHRpb25zKSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMSA/IChcclxuICAgIDxEaW1lbnNpb25TY2FsZVNlbGVjdG9yXHJcbiAgICAgIGxhYmVsPXtgJHtrZXl9IFNjYWxlYH1cclxuICAgICAgb3B0aW9ucz17c2NhbGVPcHRpb25zfVxyXG4gICAgICBzY2FsZVR5cGU9e2xheWVyLmNvbmZpZ1tzY2FsZV19XHJcbiAgICAgIG9uU2VsZWN0PXt2YWwgPT4gb25DaGFuZ2Uoe1tzY2FsZV06IHZhbH0sIGtleSl9XHJcbiAgICAvPlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yID0gKHtsYXllciwgY2hhbm5lbCwgb25DaGFuZ2V9KSA9PiB7XHJcbiAgY29uc3Qge2ZpZWxkLCBhZ2dyZWdhdGlvbiwga2V5fSA9IGNoYW5uZWw7XHJcbiAgY29uc3Qgc2VsZWN0ZWRGaWVsZCA9IGxheWVyLmNvbmZpZ1tmaWVsZF07XHJcbiAgY29uc3Qge3Zpc0NvbmZpZ30gPSBsYXllci5jb25maWc7XHJcblxyXG4gIC8vIGFnZ3JlZ2F0aW9uIHNob3VsZCBvbmx5IGJlIHNlbGVjdGFibGUgd2hlbiBmaWVsZCBpcyBzZWxlY3RlZFxyXG4gIGNvbnN0IGFnZ3JlZ2F0aW9uT3B0aW9ucyA9IGxheWVyLmdldEFnZ3JlZ2F0aW9uT3B0aW9ucyhrZXkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgIDxQYW5lbExhYmVsPntgQWdncmVnYXRlICR7c2VsZWN0ZWRGaWVsZC5uYW1lfSBieWB9PC9QYW5lbExhYmVsPlxyXG4gICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17dmlzQ29uZmlnW2FnZ3JlZ2F0aW9uXX1cclxuICAgICAgICBvcHRpb25zPXthZ2dyZWdhdGlvbk9wdGlvbnN9XHJcbiAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxyXG4gICAgICAgICAgb25DaGFuZ2UoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2aXNDb25maWc6IHtcclxuICAgICAgICAgICAgICAgIC4uLmxheWVyLmNvbmZpZy52aXNDb25maWcsXHJcbiAgICAgICAgICAgICAgICBbYWdncmVnYXRpb25dOiB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbm5lbC5rZXlcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXHJcbiJdfQ==