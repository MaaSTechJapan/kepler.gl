"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerConfigurator = _interopRequireDefault(require("./layer-configurator"));

var _layerPanelHeader = _interopRequireDefault(require("./layer-panel-header"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n  z-index: 1000;\n\n  &.dragging {\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PanelWrapper = _styledComponents["default"].div(_templateObject());

LayerPanelFactory.deps = [_layerConfigurator["default"]];

function LayerPanelFactory(LayerConfigurator) {
  var LayerPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerPanel, _Component);

    var _super = _createSuper(LayerPanel);

    function LayerPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerPanel);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(_args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerConfig", function (newProp) {
        _this.props.layerConfigChange(_this.props.layer, newProp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerType", function (newType) {
        _this.props.layerTypeChange(_this.props.layer, newType);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisConfig", function (newVisConfig) {
        _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerColorUI", function () {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_this$props = _this.props).layerColorUIChange.apply(_this$props, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerTextLabel", function () {
        var _this$props2;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        (_this$props2 = _this.props).layerTextLabelChange.apply(_this$props2, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisualChannelConfig", function (newConfig, channel, scaleKey) {
        _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel, scaleKey);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateLayerLabel", function (_ref) {
        var value = _ref.target.value;

        _this.updateLayerConfig({
          label: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleVisibility", function (e) {
        e.stopPropagation();
        var isVisible = !_this.props.layer.config.isVisible;

        _this.updateLayerConfig({
          isVisible: isVisible
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleEnableConfig", function (e) {
        e.stopPropagation();
        var isConfigActive = _this.props.layer.config.isConfigActive;

        _this.updateLayerConfig({
          isConfigActive: !isConfigActive
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeLayer", function (e) {
        e.stopPropagation();

        _this.props.removeLayer(_this.props.idx);
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerPanel, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            layer = _this$props3.layer,
            idx = _this$props3.idx,
            datasets = _this$props3.datasets,
            layerTypeOptions = _this$props3.layerTypeOptions;
        var config = layer.config;
        var isConfigActive = config.isConfigActive;
        return /*#__PURE__*/_react["default"].createElement(PanelWrapper, {
          active: isConfigActive,
          className: "layer-panel ".concat(this.props.className),
          style: this.props.style,
          onMouseDown: this.props.onMouseDown,
          onTouchStart: this.props.onTouchStart
        }, /*#__PURE__*/_react["default"].createElement(_layerPanelHeader["default"], {
          isConfigActive: isConfigActive,
          id: layer.id,
          idx: idx,
          isVisible: config.isVisible,
          label: config.label,
          labelRCGColorValues: datasets[config.dataId].color,
          layerType: layer.name,
          onToggleEnableConfig: this._toggleEnableConfig,
          onToggleVisibility: this._toggleVisibility,
          onUpdateLayerLabel: this._updateLayerLabel,
          onRemoveLayer: this._removeLayer
        }), isConfigActive && /*#__PURE__*/_react["default"].createElement(LayerConfigurator, {
          layer: layer,
          datasets: datasets,
          layerTypeOptions: layerTypeOptions,
          openModal: this.props.openModal,
          updateLayerColorUI: this.updateLayerColorUI,
          updateLayerConfig: this.updateLayerConfig,
          updateLayerVisualChannelConfig: this.updateLayerVisualChannelConfig,
          updateLayerType: this.updateLayerType,
          updateLayerTextLabel: this.updateLayerTextLabel,
          updateLayerVisConfig: this.updateLayerVisConfig
        }));
      }
    }]);
    return LayerPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerPanel, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    idx: _propTypes["default"].number.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    onCloseConfig: _propTypes["default"].func,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    updateAnimationTime: _propTypes["default"].func,
    updateLayerAnimationSpeed: _propTypes["default"].func
  });
  return LayerPanel;
}

var _default = LayerPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUGFuZWxXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGF5ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiTGF5ZXJDb25maWd1cmF0b3IiLCJMYXllclBhbmVsIiwibmV3UHJvcCIsInByb3BzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllciIsIm5ld1R5cGUiLCJsYXllclR5cGVDaGFuZ2UiLCJuZXdWaXNDb25maWciLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsImFyZ3MiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJsYXllclRleHRMYWJlbENoYW5nZSIsIm5ld0NvbmZpZyIsImNoYW5uZWwiLCJzY2FsZUtleSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlTGF5ZXJDb25maWciLCJsYWJlbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJjb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyIiwiaWR4IiwiZGF0YXNldHMiLCJsYXllclR5cGVPcHRpb25zIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbk1vdXNlRG93biIsIm9uVG91Y2hTdGFydCIsImlkIiwiZGF0YUlkIiwiY29sb3IiLCJuYW1lIiwiX3RvZ2dsZUVuYWJsZUNvbmZpZyIsIl90b2dnbGVWaXNpYmlsaXR5IiwiX3VwZGF0ZUxheWVyTGFiZWwiLCJfcmVtb3ZlTGF5ZXIiLCJvcGVuTW9kYWwiLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWciLCJ1cGRhdGVMYXllclR5cGUiLCJ1cGRhdGVMYXllclRleHRMYWJlbCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbkNsb3NlQ29uZmlnIiwiYXJyYXlPZiIsImFueSIsInVwZGF0ZUFuaW1hdGlvblRpbWUiLCJ1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFsQjs7QUFXQUMsaUJBQWlCLENBQUNDLElBQWxCLEdBQXlCLENBQUNDLDZCQUFELENBQXpCOztBQUVBLFNBQVNGLGlCQUFULENBQTJCRyxpQkFBM0IsRUFBOEM7QUFBQSxNQUN0Q0MsVUFEc0M7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRHQW1CdEIsVUFBQUMsT0FBTyxFQUFJO0FBQzdCLGNBQUtDLEtBQUwsQ0FBV0MsaUJBQVgsQ0FBNkIsTUFBS0QsS0FBTCxDQUFXRSxLQUF4QyxFQUErQ0gsT0FBL0M7QUFDRCxPQXJCeUM7QUFBQSwwR0F1QnhCLFVBQUFJLE9BQU8sRUFBSTtBQUMzQixjQUFLSCxLQUFMLENBQVdJLGVBQVgsQ0FBMkIsTUFBS0osS0FBTCxDQUFXRSxLQUF0QyxFQUE2Q0MsT0FBN0M7QUFDRCxPQXpCeUM7QUFBQSwrR0EyQm5CLFVBQUFFLFlBQVksRUFBSTtBQUNyQyxjQUFLTCxLQUFMLENBQVdNLG9CQUFYLENBQWdDLE1BQUtOLEtBQUwsQ0FBV0UsS0FBM0MsRUFBa0RHLFlBQWxEO0FBQ0QsT0E3QnlDO0FBQUEsNkdBK0JyQixZQUFhO0FBQUE7O0FBQUEsMkNBQVRFLElBQVM7QUFBVEEsVUFBQUEsSUFBUztBQUFBOztBQUNoQyw2QkFBS1AsS0FBTCxFQUFXUSxrQkFBWCxxQkFBOEIsTUFBS1IsS0FBTCxDQUFXRSxLQUF6QyxTQUFtREssSUFBbkQ7QUFDRCxPQWpDeUM7QUFB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O0FBUWpCRyxJQUFBQSxhQUFhLEVBQUVMLHNCQUFVSSxJQVJSO0FBU2pCeEIsSUFBQUEsZ0JBQWdCLEVBQUVvQixzQkFBVU0sT0FBVixDQUFrQk4sc0JBQVVPLEdBQTVCLENBVEQ7QUFVakIvQyxJQUFBQSxvQkFBb0IsRUFBRXdDLHNCQUFVSSxJQUFWLENBQWVGLFVBVnBCO0FBV2pCbkMsSUFBQUEsOEJBQThCLEVBQUVpQyxzQkFBVUksSUFBVixDQUFlRixVQVg5QjtBQVlqQnhDLElBQUFBLGtCQUFrQixFQUFFc0Msc0JBQVVJLElBQVYsQ0FBZUYsVUFabEI7QUFhakJNLElBQUFBLG1CQUFtQixFQUFFUixzQkFBVUksSUFiZDtBQWNqQkssSUFBQUEseUJBQXlCLEVBQUVULHNCQUFVSTtBQWRwQixHQUZ1QjtBQWlINUMsU0FBT3BELFVBQVA7QUFDRDs7ZUFFY0osaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IExheWVyQ29uZmlndXJhdG9yRmFjdG9yeSBmcm9tICcuL2xheWVyLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgTGF5ZXJQYW5lbEhlYWRlciBmcm9tICcuL2xheWVyLXBhbmVsLWhlYWRlcic7XG5cbmNvbnN0IFBhbmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgJi5kcmFnZ2luZyB7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG5gO1xuXG5MYXllclBhbmVsRmFjdG9yeS5kZXBzID0gW0xheWVyQ29uZmlndXJhdG9yRmFjdG9yeV07XG5cbmZ1bmN0aW9uIExheWVyUGFuZWxGYWN0b3J5KExheWVyQ29uZmlndXJhdG9yKSB7XG4gIGNsYXNzIExheWVyUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGlkeDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllclR5cGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uQ2xvc2VDb25maWc6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbGF5ZXJUeXBlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ29sb3JVSUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUFuaW1hdGlvblRpbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJDb25maWcgPSBuZXdQcm9wID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3UHJvcCk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVHlwZSA9IG5ld1R5cGUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclR5cGVDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VHlwZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnID0gbmV3VmlzQ29uZmlnID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VmlzQ29uZmlnKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJDb2xvclVJID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb2xvclVJQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclRleHRMYWJlbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWcgPSAobmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSk7XG4gICAgfTtcblxuICAgIF91cGRhdGVMYXllckxhYmVsID0gKHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtsYWJlbDogdmFsdWV9KTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZVZpc2liaWxpdHkgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBpc1Zpc2libGUgPSAhdGhpcy5wcm9wcy5sYXllci5jb25maWcuaXNWaXNpYmxlO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNWaXNpYmxlfSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVFbmFibGVDb25maWcgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxheWVyOiB7XG4gICAgICAgICAgY29uZmlnOiB7aXNDb25maWdBY3RpdmV9XG4gICAgICAgIH1cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNDb25maWdBY3RpdmU6ICFpc0NvbmZpZ0FjdGl2ZX0pO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlTGF5ZXIgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZUxheWVyKHRoaXMucHJvcHMuaWR4KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2xheWVyLCBpZHgsIGRhdGFzZXRzLCBsYXllclR5cGVPcHRpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xuICAgICAgY29uc3Qge2lzQ29uZmlnQWN0aXZlfSA9IGNvbmZpZztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhbmVsV3JhcHBlclxuICAgICAgICAgIGFjdGl2ZT17aXNDb25maWdBY3RpdmV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbGF5ZXItcGFuZWwgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gfVxuICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLm9uTW91c2VEb3dufVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5wcm9wcy5vblRvdWNoU3RhcnR9XG4gICAgICAgID5cbiAgICAgICAgICA8TGF5ZXJQYW5lbEhlYWRlclxuICAgICAgICAgICAgaXNDb25maWdBY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxuICAgICAgICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICBpc1Zpc2libGU9e2NvbmZpZy5pc1Zpc2libGV9XG4gICAgICAgICAgICBsYWJlbD17Y29uZmlnLmxhYmVsfVxuICAgICAgICAgICAgbGFiZWxSQ0dDb2xvclZhbHVlcz17ZGF0YXNldHNbY29uZmlnLmRhdGFJZF0uY29sb3J9XG4gICAgICAgICAgICBsYXllclR5cGU9e2xheWVyLm5hbWV9XG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZUNvbmZpZz17dGhpcy5fdG9nZ2xlRW5hYmxlQ29uZmlnfVxuICAgICAgICAgICAgb25Ub2dnbGVWaXNpYmlsaXR5PXt0aGlzLl90b2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICAgICAgb25VcGRhdGVMYXllckxhYmVsPXt0aGlzLl91cGRhdGVMYXllckxhYmVsfVxuICAgICAgICAgICAgb25SZW1vdmVMYXllcj17dGhpcy5fcmVtb3ZlTGF5ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aXNDb25maWdBY3RpdmUgJiYgKFxuICAgICAgICAgICAgPExheWVyQ29uZmlndXJhdG9yXG4gICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBsYXllclR5cGVPcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICBvcGVuTW9kYWw9e3RoaXMucHJvcHMub3Blbk1vZGFsfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbG9yVUk9e3RoaXMudXBkYXRlTGF5ZXJDb2xvclVJfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dGhpcy51cGRhdGVMYXllckNvbmZpZ31cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ31cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUeXBlPXt0aGlzLnVwZGF0ZUxheWVyVHlwZX1cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw9e3RoaXMudXBkYXRlTGF5ZXJUZXh0TGFiZWx9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmVsV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIExheWVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxGYWN0b3J5O1xuIl19