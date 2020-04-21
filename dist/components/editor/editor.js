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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGlDraw = require("react-map-gl-draw");

var _window = _interopRequireDefault(require("global/window"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _defaultSettings = require("../../constants/default-settings");

var _featureActionPanel = _interopRequireDefault(require("./feature-action-panel"));

var _featureStyles = require("./feature-styles");

var _handleStyle = require("./handle-style");

var _constants = require("../../constants");

var _reselect = require("reselect");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DELETE_KEY_EVENT_CODE = 46;
var BACKSPACE_KEY_EVENT_CODE = 8;
var ESCAPE_KEY_EVENT_CODE = 27;

var StyledWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.editor.mode === _constants.EDITOR_MODES.EDIT ? 'pointer' : 'crosshair';
});

var editorLayerFilter = function editorLayerFilter(layer) {
  return _defaultSettings.EDITOR_AVAILABLE_LAYERS.includes(layer.type);
};

var Editor = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Editor, _Component);

  var _super = _createSuper(Editor);

  function Editor() {
    var _this;

    (0, _classCallCheck2["default"])(this, Editor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showActions: false,
      lastPosition: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
      return props.layers;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
      return props.layersToRender;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterSelector", function (props) {
      return props.filters;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedFeatureIdSelector", function (props) {
      return (0, _lodash["default"])(props, ['editor', 'selectedFeature', 'id']);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "editorFeatureSelector", function (props) {
      return (0, _lodash["default"])(props, ['editor', 'features']);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "currentFilterSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.selectedFeatureIdSelector, function (filters, selectedFeatureId) {
      return filters.find(function (f) {
        return f.value && f.value.id === selectedFeatureId;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableLayersSeletor", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
      return layers.filter(editorLayerFilter).filter(function (layer) {
        return layersToRender[layer.id];
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "allFeaturesSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.editorFeatureSelector, function (filters, editorFeatures) {
      return filters.filter(function (f) {
        return f.type === _defaultSettings.FILTER_TYPES.polygon;
      }).map(function (f) {
        return f.value;
      }).concat(editorFeatures);
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyPressed", function (event) {
      var isEnabled = _this.props.isEnabled;

      if (!isEnabled) {
        return;
      }

      switch (event.which) {
        case DELETE_KEY_EVENT_CODE:
        case BACKSPACE_KEY_EVENT_CODE:
          _this._onDeleteSelectedFeature();

          break;

        case ESCAPE_KEY_EVENT_CODE:
          _this.props.onSelect(null);

          break;

        default:
          break;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelect", function (_ref) {
      var selectedFeatureId = _ref.selectedFeatureId,
          sourceEvent = _ref.sourceEvent;

      var allFeatures = _this.allFeaturesSelector(_this.props);

      _this.setState(_objectSpread({}, sourceEvent.rightButton ? {
        showActions: true,
        lastPosition: {
          x: sourceEvent.changedPointers[0].offsetX,
          y: sourceEvent.changedPointers[0].offsetY
        }
      } : null), function () {
        _this.props.onSelect(allFeatures.find(function (f) {
          return f.id === selectedFeatureId;
        }));
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onDeleteSelectedFeature", function () {
      if (_this.state.showActions) {
        _this.setState({
          showActions: false
        });
      }

      var editor = _this.props.editor;
      var _editor$selectedFeatu = editor.selectedFeature,
          selectedFeature = _editor$selectedFeatu === void 0 ? {} : _editor$selectedFeatu;

      _this.props.onDeleteFeature(selectedFeature);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeFeatureAction", function () {
      _this.setState({
        showActions: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onToggleLayer", function (layer) {
      var selectedFeature = _this.props.editor.selectedFeature;

      if (!selectedFeature) {
        return;
      }

      _this.props.onTogglePolygonFilter(layer, selectedFeature);
    });
    return _this;
  }

  (0, _createClass2["default"])(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _window["default"].addEventListener('keydown', this._onKeyPressed);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _window["default"].removeEventListener('keydown', this._onKeyPressed);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          clickRadius = _this$props.clickRadius,
          datasets = _this$props.datasets,
          editor = _this$props.editor,
          onUpdate = _this$props.onUpdate,
          style = _this$props.style;
      var _this$state = this.state,
          lastPosition = _this$state.lastPosition,
          showActions = _this$state.showActions;
      var selectedFeatureId = (0, _lodash["default"])(editor, ['selectedFeature', 'id']);
      var currentFilter = this.currentFilterSelector(this.props);
      var availableLayers = this.availableLayersSeletor(this.props);
      var allFeatures = this.allFeaturesSelector(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledWrapper, {
        editor: editor,
        className: (0, _classnames["default"])('editor', className),
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_reactMapGlDraw.Editor, {
        clickRadius: clickRadius,
        mode: editor.mode,
        features: allFeatures,
        selectedFeatureId: selectedFeatureId,
        onSelect: this._onSelect,
        onUpdate: onUpdate,
        getEditHandleShape: _handleStyle.getEditHandleShape,
        getFeatureStyle: _featureStyles.getStyle,
        getEditHandleStyle: _handleStyle.getStyle
      }), showActions && Boolean(selectedFeatureId) ? /*#__PURE__*/_react["default"].createElement(_featureActionPanel["default"], {
        datasets: datasets,
        layers: availableLayers,
        currentFilter: currentFilter,
        onClose: this._closeFeatureAction,
        onDeleteFeature: this._onDeleteSelectedFeature,
        onToggleLayer: this._onToggleLayer,
        position: lastPosition
      }) : null);
    }
  }]);
  return Editor;
}(_react.Component);

(0, _defineProperty2["default"])(Editor, "propTypes", {
  filters: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  layers: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  datasets: _propTypes["default"].object.isRequired,
  editor: _propTypes["default"].object.isRequired,
  layersToRender: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  onUpdate: _propTypes["default"].func.isRequired,
  onDeleteFeature: _propTypes["default"].func.isRequired,
  onTogglePolygonFilter: _propTypes["default"].func.isRequired,
  index: _propTypes["default"].number,
  classnames: _propTypes["default"].string,
  clickRadius: _propTypes["default"].number,
  isEnabled: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Editor, "defaultProps", {
  clickRadius: _featureStyles.DEFAULT_RADIUS
});
var _default = Editor;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuanMiXSwibmFtZXMiOlsiREVMRVRFX0tFWV9FVkVOVF9DT0RFIiwiQkFDS1NQQUNFX0tFWV9FVkVOVF9DT0RFIiwiRVNDQVBFX0tFWV9FVkVOVF9DT0RFIiwiU3R5bGVkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZWRpdG9yIiwibW9kZSIsIkVESVRPUl9NT0RFUyIsIkVESVQiLCJlZGl0b3JMYXllckZpbHRlciIsImxheWVyIiwiRURJVE9SX0FWQUlMQUJMRV9MQVlFUlMiLCJpbmNsdWRlcyIsInR5cGUiLCJFZGl0b3IiLCJzaG93QWN0aW9ucyIsImxhc3RQb3NpdGlvbiIsImxheWVycyIsImxheWVyc1RvUmVuZGVyIiwiZmlsdGVycyIsImZpbHRlclNlbGVjdG9yIiwic2VsZWN0ZWRGZWF0dXJlSWRTZWxlY3RvciIsInNlbGVjdGVkRmVhdHVyZUlkIiwiZmluZCIsImYiLCJ2YWx1ZSIsImlkIiwibGF5ZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJlZGl0b3JGZWF0dXJlU2VsZWN0b3IiLCJlZGl0b3JGZWF0dXJlcyIsIkZJTFRFUl9UWVBFUyIsInBvbHlnb24iLCJtYXAiLCJjb25jYXQiLCJldmVudCIsImlzRW5hYmxlZCIsIndoaWNoIiwiX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlIiwib25TZWxlY3QiLCJzb3VyY2VFdmVudCIsImFsbEZlYXR1cmVzIiwiYWxsRmVhdHVyZXNTZWxlY3RvciIsInNldFN0YXRlIiwicmlnaHRCdXR0b24iLCJ4IiwiY2hhbmdlZFBvaW50ZXJzIiwib2Zmc2V0WCIsInkiLCJvZmZzZXRZIiwic3RhdGUiLCJzZWxlY3RlZEZlYXR1cmUiLCJvbkRlbGV0ZUZlYXR1cmUiLCJvblRvZ2dsZVBvbHlnb25GaWx0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX29uS2V5UHJlc3NlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWUiLCJjbGlja1JhZGl1cyIsImRhdGFzZXRzIiwib25VcGRhdGUiLCJzdHlsZSIsImN1cnJlbnRGaWx0ZXIiLCJjdXJyZW50RmlsdGVyU2VsZWN0b3IiLCJhdmFpbGFibGVMYXllcnMiLCJhdmFpbGFibGVMYXllcnNTZWxldG9yIiwiX29uU2VsZWN0IiwiZ2V0RWRpdEhhbmRsZVNoYXBlIiwiZ2V0RmVhdHVyZVN0eWxlIiwiZ2V0RWRpdEhhbmRsZVN0eWxlIiwiQm9vbGVhbiIsIl9jbG9zZUZlYXR1cmVBY3Rpb24iLCJfb25Ub2dnbGVMYXllciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImluZGV4IiwibnVtYmVyIiwiY2xhc3NuYW1lcyIsInN0cmluZyIsImJvb2wiLCJERUZBVUxUX1JBRElVUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLEVBQTlCO0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUcsQ0FBakM7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxFQUE5Qjs7QUFFQSxJQUFNQyxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixLQUFzQkMsd0JBQWFDLElBQW5DLEdBQTBDLFNBQTFDLEdBQXNELFdBQTNEO0FBQUEsQ0FERSxDQUFuQjs7QUFLQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxTQUFJQyx5Q0FBd0JDLFFBQXhCLENBQWlDRixLQUFLLENBQUNHLElBQXZDLENBQUo7QUFBQSxDQUEvQjs7SUFFTUMsTTs7Ozs7Ozs7Ozs7Ozs7OzhGQXNCSTtBQUNOQyxNQUFBQSxXQUFXLEVBQUUsS0FEUDtBQUVOQyxNQUFBQSxZQUFZLEVBQUU7QUFGUixLO3NHQWFRLFVBQUFaLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNhLE1BQVY7QUFBQSxLOytHQUNJLFVBQUFiLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNjLGNBQVY7QUFBQSxLO3VHQUNiLFVBQUFkLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNlLE9BQVY7QUFBQSxLO2tIQUNNLFVBQUFmLEtBQUs7QUFBQSxhQUFJLHdCQUFJQSxLQUFKLEVBQVcsQ0FBQyxRQUFELEVBQVcsaUJBQVgsRUFBOEIsSUFBOUIsQ0FBWCxDQUFKO0FBQUEsSzs4R0FDVCxVQUFBQSxLQUFLO0FBQUEsYUFBSSx3QkFBSUEsS0FBSixFQUFXLENBQUMsUUFBRCxFQUFXLFVBQVgsQ0FBWCxDQUFKO0FBQUEsSzs4R0FFTCw4QkFDdEIsTUFBS2dCLGNBRGlCLEVBRXRCLE1BQUtDLHlCQUZpQixFQUd0QixVQUFDRixPQUFELEVBQVVHLGlCQUFWO0FBQUEsYUFBZ0NILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEtBQUYsSUFBV0QsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEVBQVIsS0FBZUosaUJBQTlCO0FBQUEsT0FBZCxDQUFoQztBQUFBLEtBSHNCLEM7K0dBTUMsOEJBQ3ZCLE1BQUtLLGFBRGtCLEVBRXZCLE1BQUtDLHNCQUZrQixFQUd2QixVQUFDWCxNQUFELEVBQVNDLGNBQVQ7QUFBQSxhQUNFRCxNQUFNLENBQUNZLE1BQVAsQ0FBY3BCLGlCQUFkLEVBQWlDb0IsTUFBakMsQ0FBd0MsVUFBQW5CLEtBQUssRUFBSTtBQUMvQyxlQUFPUSxjQUFjLENBQUNSLEtBQUssQ0FBQ2dCLEVBQVAsQ0FBckI7QUFDRCxPQUZELENBREY7QUFBQSxLQUh1QixDOzRHQVNILDhCQUNwQixNQUFLTixjQURlLEVBRXBCLE1BQUtVLHFCQUZlLEVBR3BCLFVBQUNYLE9BQUQsRUFBVVksY0FBVjtBQUFBLGFBQ0VaLE9BQU8sQ0FDSlUsTUFESCxDQUNVLFVBQUFMLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNYLElBQUYsS0FBV21CLDhCQUFhQyxPQUE1QjtBQUFBLE9BRFgsRUFFR0MsR0FGSCxDQUVPLFVBQUFWLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEtBQU47QUFBQSxPQUZSLEVBR0dVLE1BSEgsQ0FHVUosY0FIVixDQURGO0FBQUEsS0FIb0IsQztzR0FVTixVQUFBSyxLQUFLLEVBQUk7QUFBQSxVQUNoQkMsU0FEZ0IsR0FDSCxNQUFLakMsS0FERixDQUNoQmlDLFNBRGdCOztBQUd2QixVQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZDtBQUNEOztBQUVELGNBQVFELEtBQUssQ0FBQ0UsS0FBZDtBQUNFLGFBQUt4QyxxQkFBTDtBQUNBLGFBQUtDLHdCQUFMO0FBQ0UsZ0JBQUt3Qyx3QkFBTDs7QUFDQTs7QUFDRixhQUFLdkMscUJBQUw7QUFDRSxnQkFBS0ksS0FBTCxDQUFXb0MsUUFBWCxDQUFvQixJQUFwQjs7QUFDQTs7QUFDRjtBQUNFO0FBVEo7QUFXRCxLO2tHQUVXLGdCQUFzQztBQUFBLFVBQXBDbEIsaUJBQW9DLFFBQXBDQSxpQkFBb0M7QUFBQSxVQUFqQm1CLFdBQWlCLFFBQWpCQSxXQUFpQjs7QUFDaEQsVUFBTUMsV0FBVyxHQUFHLE1BQUtDLG1CQUFMLENBQXlCLE1BQUt2QyxLQUE5QixDQUFwQjs7QUFDQSxZQUFLd0MsUUFBTCxtQkFFUUgsV0FBVyxDQUFDSSxXQUFaLEdBQ0E7QUFDRTlCLFFBQUFBLFdBQVcsRUFBRSxJQURmO0FBRUVDLFFBQUFBLFlBQVksRUFBRTtBQUNaOEIsVUFBQUEsQ0FBQyxFQUFFTCxXQUFXLENBQUNNLGVBQVosQ0FBNEIsQ0FBNUIsRUFBK0JDLE9BRHRCO0FBRVpDLFVBQUFBLENBQUMsRUFBRVIsV0FBVyxDQUFDTSxlQUFaLENBQTRCLENBQTVCLEVBQStCRztBQUZ0QjtBQUZoQixPQURBLEdBUUEsSUFWUixHQVlFLFlBQU07QUFDSixjQUFLOUMsS0FBTCxDQUFXb0MsUUFBWCxDQUFvQkUsV0FBVyxDQUFDbkIsSUFBWixDQUFpQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0UsRUFBRixLQUFTSixpQkFBYjtBQUFBLFNBQWxCLENBQXBCO0FBQ0QsT0FkSDtBQWdCRCxLO2lIQUUwQixZQUFNO0FBQy9CLFVBQUksTUFBSzZCLEtBQUwsQ0FBV3BDLFdBQWYsRUFBNEI7QUFDMUIsY0FBSzZCLFFBQUwsQ0FBYztBQUFDN0IsVUFBQUEsV0FBVyxFQUFFO0FBQWQsU0FBZDtBQUNEOztBQUg4QixVQUt4QlYsTUFMd0IsR0FLZCxNQUFLRCxLQUxTLENBS3hCQyxNQUx3QjtBQUFBLGtDQU1BQSxNQU5BLENBTXhCK0MsZUFOd0I7QUFBQSxVQU14QkEsZUFOd0Isc0NBTU4sRUFOTTs7QUFPL0IsWUFBS2hELEtBQUwsQ0FBV2lELGVBQVgsQ0FBMkJELGVBQTNCO0FBQ0QsSzs0R0FFcUIsWUFBTTtBQUMxQixZQUFLUixRQUFMLENBQWM7QUFBQzdCLFFBQUFBLFdBQVcsRUFBRTtBQUFkLE9BQWQ7QUFDRCxLO3VHQUVnQixVQUFBTCxLQUFLLEVBQUk7QUFBQSxVQUNqQjBDLGVBRGlCLEdBQ0UsTUFBS2hELEtBQUwsQ0FBV0MsTUFEYixDQUNqQitDLGVBRGlCOztBQUV4QixVQUFJLENBQUNBLGVBQUwsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxZQUFLaEQsS0FBTCxDQUFXa0QscUJBQVgsQ0FBaUM1QyxLQUFqQyxFQUF3QzBDLGVBQXhDO0FBQ0QsSzs7Ozs7O3dDQXBHbUI7QUFDbEJHLHlCQUFPQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLQyxhQUF4QztBQUNEOzs7MkNBRXNCO0FBQ3JCRix5QkFBT0csbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsS0FBS0QsYUFBM0M7QUFDRDs7OzZCQWdHUTtBQUFBLHdCQUM2RCxLQUFLckQsS0FEbEU7QUFBQSxVQUNBdUQsU0FEQSxlQUNBQSxTQURBO0FBQUEsVUFDV0MsV0FEWCxlQUNXQSxXQURYO0FBQUEsVUFDd0JDLFFBRHhCLGVBQ3dCQSxRQUR4QjtBQUFBLFVBQ2tDeEQsTUFEbEMsZUFDa0NBLE1BRGxDO0FBQUEsVUFDMEN5RCxRQUQxQyxlQUMwQ0EsUUFEMUM7QUFBQSxVQUNvREMsS0FEcEQsZUFDb0RBLEtBRHBEO0FBQUEsd0JBRzZCLEtBQUtaLEtBSGxDO0FBQUEsVUFHQW5DLFlBSEEsZUFHQUEsWUFIQTtBQUFBLFVBR2NELFdBSGQsZUFHY0EsV0FIZDtBQUlQLFVBQU1PLGlCQUFpQixHQUFHLHdCQUFJakIsTUFBSixFQUFZLENBQUMsaUJBQUQsRUFBb0IsSUFBcEIsQ0FBWixDQUExQjtBQUNBLFVBQU0yRCxhQUFhLEdBQUcsS0FBS0MscUJBQUwsQ0FBMkIsS0FBSzdELEtBQWhDLENBQXRCO0FBQ0EsVUFBTThELGVBQWUsR0FBRyxLQUFLQyxzQkFBTCxDQUE0QixLQUFLL0QsS0FBakMsQ0FBeEI7QUFDQSxVQUFNc0MsV0FBVyxHQUFHLEtBQUtDLG1CQUFMLENBQXlCLEtBQUt2QyxLQUE5QixDQUFwQjtBQUVBLDBCQUNFLGdDQUFDLGFBQUQ7QUFBZSxRQUFBLE1BQU0sRUFBRUMsTUFBdkI7QUFBK0IsUUFBQSxTQUFTLEVBQUUsNEJBQVcsUUFBWCxFQUFxQnNELFNBQXJCLENBQTFDO0FBQTJFLFFBQUEsS0FBSyxFQUFFSTtBQUFsRixzQkFDRSxnQ0FBQyxzQkFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFSCxXQURmO0FBRUUsUUFBQSxJQUFJLEVBQUV2RCxNQUFNLENBQUNDLElBRmY7QUFHRSxRQUFBLFFBQVEsRUFBRW9DLFdBSFo7QUFJRSxRQUFBLGlCQUFpQixFQUFFcEIsaUJBSnJCO0FBS0UsUUFBQSxRQUFRLEVBQUUsS0FBSzhDLFNBTGpCO0FBTUUsUUFBQSxRQUFRLEVBQUVOLFFBTlo7QUFPRSxRQUFBLGtCQUFrQixFQUFFTywrQkFQdEI7QUFRRSxRQUFBLGVBQWUsRUFBRUMsdUJBUm5CO0FBU0UsUUFBQSxrQkFBa0IsRUFBRUM7QUFUdEIsUUFERixFQVlHeEQsV0FBVyxJQUFJeUQsT0FBTyxDQUFDbEQsaUJBQUQsQ0FBdEIsZ0JBQ0MsZ0NBQUMsOEJBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBRXVDLFFBRFo7QUFFRSxRQUFBLE1BQU0sRUFBRUssZUFGVjtBQUdFLFFBQUEsYUFBYSxFQUFFRixhQUhqQjtBQUlFLFFBQUEsT0FBTyxFQUFFLEtBQUtTLG1CQUpoQjtBQUtFLFFBQUEsZUFBZSxFQUFFLEtBQUtsQyx3QkFMeEI7QUFNRSxRQUFBLGFBQWEsRUFBRSxLQUFLbUMsY0FOdEI7QUFPRSxRQUFBLFFBQVEsRUFBRTFEO0FBUFosUUFERCxHQVVHLElBdEJOLENBREY7QUEwQkQ7OztFQXBLa0IyRCxnQjs7aUNBQWY3RCxNLGVBQ2U7QUFDakJLLEVBQUFBLE9BQU8sRUFBRXlELHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsRUFBb0NDLFVBRDVCO0FBRWpCOUQsRUFBQUEsTUFBTSxFQUFFMkQsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxNQUE1QixFQUFvQ0MsVUFGM0I7QUFHakJsQixFQUFBQSxRQUFRLEVBQUVlLHNCQUFVRSxNQUFWLENBQWlCQyxVQUhWO0FBSWpCMUUsRUFBQUEsTUFBTSxFQUFFdUUsc0JBQVVFLE1BQVYsQ0FBaUJDLFVBSlI7QUFLakI3RCxFQUFBQSxjQUFjLEVBQUUwRCxzQkFBVUUsTUFBVixDQUFpQkMsVUFMaEI7QUFNakJ2QyxFQUFBQSxRQUFRLEVBQUVvQyxzQkFBVUksSUFBVixDQUFlRCxVQU5SO0FBT2pCakIsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVUksSUFBVixDQUFlRCxVQVBSO0FBUWpCMUIsRUFBQUEsZUFBZSxFQUFFdUIsc0JBQVVJLElBQVYsQ0FBZUQsVUFSZjtBQVNqQnpCLEVBQUFBLHFCQUFxQixFQUFFc0Isc0JBQVVJLElBQVYsQ0FBZUQsVUFUckI7QUFXakJFLEVBQUFBLEtBQUssRUFBRUwsc0JBQVVNLE1BWEE7QUFZakJDLEVBQUFBLFVBQVUsRUFBRVAsc0JBQVVRLE1BWkw7QUFhakJ4QixFQUFBQSxXQUFXLEVBQUVnQixzQkFBVU0sTUFiTjtBQWNqQjdDLEVBQUFBLFNBQVMsRUFBRXVDLHNCQUFVUztBQWRKLEM7aUNBRGZ2RSxNLGtCQWtCa0I7QUFDcEI4QyxFQUFBQSxXQUFXLEVBQUUwQjtBQURPLEM7ZUFxSlR4RSxNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0VkaXRvciBhcyBEcmF3fSBmcm9tICdyZWFjdC1tYXAtZ2wtZHJhdyc7XHJcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xyXG5cclxuaW1wb3J0IHtFRElUT1JfQVZBSUxBQkxFX0xBWUVSU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQgRmVhdHVyZUFjdGlvblBhbmVsIGZyb20gJy4vZmVhdHVyZS1hY3Rpb24tcGFuZWwnO1xyXG5pbXBvcnQge0ZJTFRFUl9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuaW1wb3J0IHtERUZBVUxUX1JBRElVUywgZ2V0U3R5bGUgYXMgZ2V0RmVhdHVyZVN0eWxlfSBmcm9tICcuL2ZlYXR1cmUtc3R5bGVzJztcclxuaW1wb3J0IHtnZXRTdHlsZSBhcyBnZXRFZGl0SGFuZGxlU3R5bGUsIGdldEVkaXRIYW5kbGVTaGFwZX0gZnJvbSAnLi9oYW5kbGUtc3R5bGUnO1xyXG5pbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAnY29uc3RhbnRzJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5cclxuY29uc3QgREVMRVRFX0tFWV9FVkVOVF9DT0RFID0gNDY7XHJcbmNvbnN0IEJBQ0tTUEFDRV9LRVlfRVZFTlRfQ09ERSA9IDg7XHJcbmNvbnN0IEVTQ0FQRV9LRVlfRVZFTlRfQ09ERSA9IDI3O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5lZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkVESVQgPyAncG9pbnRlcicgOiAnY3Jvc3NoYWlyJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IGVkaXRvckxheWVyRmlsdGVyID0gbGF5ZXIgPT4gRURJVE9SX0FWQUlMQUJMRV9MQVlFUlMuaW5jbHVkZXMobGF5ZXIudHlwZSk7XHJcblxyXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgbGF5ZXJzVG9SZW5kZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkRlbGV0ZUZlYXR1cmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvblRvZ2dsZVBvbHlnb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBjbGFzc25hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xpY2tSYWRpdXM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBpc0VuYWJsZWQ6IFByb3BUeXBlcy5ib29sXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNsaWNrUmFkaXVzOiBERUZBVUxUX1JBRElVU1xyXG4gIH07XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgc2hvd0FjdGlvbnM6IGZhbHNlLFxyXG4gICAgbGFzdFBvc2l0aW9uOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5UHJlc3NlZCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlQcmVzc2VkKTtcclxuICB9XHJcblxyXG4gIGxheWVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllcnM7XHJcbiAgbGF5ZXJzVG9SZW5kZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyc1RvUmVuZGVyO1xyXG4gIGZpbHRlclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVycztcclxuICBzZWxlY3RlZEZlYXR1cmVJZFNlbGVjdG9yID0gcHJvcHMgPT4gZ2V0KHByb3BzLCBbJ2VkaXRvcicsICdzZWxlY3RlZEZlYXR1cmUnLCAnaWQnXSk7XHJcbiAgZWRpdG9yRmVhdHVyZVNlbGVjdG9yID0gcHJvcHMgPT4gZ2V0KHByb3BzLCBbJ2VkaXRvcicsICdmZWF0dXJlcyddKTtcclxuXHJcbiAgY3VycmVudEZpbHRlclNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxyXG4gICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVJZFNlbGVjdG9yLFxyXG4gICAgKGZpbHRlcnMsIHNlbGVjdGVkRmVhdHVyZUlkKSA9PiBmaWx0ZXJzLmZpbmQoZiA9PiBmLnZhbHVlICYmIGYudmFsdWUuaWQgPT09IHNlbGVjdGVkRmVhdHVyZUlkKVxyXG4gICk7XHJcblxyXG4gIGF2YWlsYWJsZUxheWVyc1NlbGV0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIHRoaXMubGF5ZXJTZWxlY3RvcixcclxuICAgIHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3RvcixcclxuICAgIChsYXllcnMsIGxheWVyc1RvUmVuZGVyKSA9PlxyXG4gICAgICBsYXllcnMuZmlsdGVyKGVkaXRvckxheWVyRmlsdGVyKS5maWx0ZXIobGF5ZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiBsYXllcnNUb1JlbmRlcltsYXllci5pZF07XHJcbiAgICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgYWxsRmVhdHVyZXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgdGhpcy5maWx0ZXJTZWxlY3RvcixcclxuICAgIHRoaXMuZWRpdG9yRmVhdHVyZVNlbGVjdG9yLFxyXG4gICAgKGZpbHRlcnMsIGVkaXRvckZlYXR1cmVzKSA9PlxyXG4gICAgICBmaWx0ZXJzXHJcbiAgICAgICAgLmZpbHRlcihmID0+IGYudHlwZSA9PT0gRklMVEVSX1RZUEVTLnBvbHlnb24pXHJcbiAgICAgICAgLm1hcChmID0+IGYudmFsdWUpXHJcbiAgICAgICAgLmNvbmNhdChlZGl0b3JGZWF0dXJlcylcclxuICApO1xyXG5cclxuICBfb25LZXlQcmVzc2VkID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3Qge2lzRW5hYmxlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGlmICghaXNFbmFibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XHJcbiAgICAgIGNhc2UgREVMRVRFX0tFWV9FVkVOVF9DT0RFOlxyXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfRVZFTlRfQ09ERTpcclxuICAgICAgICB0aGlzLl9vbkRlbGV0ZVNlbGVjdGVkRmVhdHVyZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfRVZFTlRfQ09ERTpcclxuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KG51bGwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9vblNlbGVjdCA9ICh7c2VsZWN0ZWRGZWF0dXJlSWQsIHNvdXJjZUV2ZW50fSkgPT4ge1xyXG4gICAgY29uc3QgYWxsRmVhdHVyZXMgPSB0aGlzLmFsbEZlYXR1cmVzU2VsZWN0b3IodGhpcy5wcm9wcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4uKHNvdXJjZUV2ZW50LnJpZ2h0QnV0dG9uXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICBzaG93QWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICBsYXN0UG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IHNvdXJjZUV2ZW50LmNoYW5nZWRQb2ludGVyc1swXS5vZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgeTogc291cmNlRXZlbnQuY2hhbmdlZFBvaW50ZXJzWzBdLm9mZnNldFlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogbnVsbClcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoYWxsRmVhdHVyZXMuZmluZChmID0+IGYuaWQgPT09IHNlbGVjdGVkRmVhdHVyZUlkKSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FjdGlvbnMpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0FjdGlvbnM6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge2VkaXRvcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZSA9IHt9fSA9IGVkaXRvcjtcclxuICAgIHRoaXMucHJvcHMub25EZWxldGVGZWF0dXJlKHNlbGVjdGVkRmVhdHVyZSk7XHJcbiAgfTtcclxuXHJcbiAgX2Nsb3NlRmVhdHVyZUFjdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBY3Rpb25zOiBmYWxzZX0pO1xyXG4gIH07XHJcblxyXG4gIF9vblRvZ2dsZUxheWVyID0gbGF5ZXIgPT4ge1xyXG4gICAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZX0gPSB0aGlzLnByb3BzLmVkaXRvcjtcclxuICAgIGlmICghc2VsZWN0ZWRGZWF0dXJlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlUG9seWdvbkZpbHRlcihsYXllciwgc2VsZWN0ZWRGZWF0dXJlKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Y2xhc3NOYW1lLCBjbGlja1JhZGl1cywgZGF0YXNldHMsIGVkaXRvciwgb25VcGRhdGUsIHN0eWxlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3Qge2xhc3RQb3NpdGlvbiwgc2hvd0FjdGlvbnN9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZUlkID0gZ2V0KGVkaXRvciwgWydzZWxlY3RlZEZlYXR1cmUnLCAnaWQnXSk7XHJcbiAgICBjb25zdCBjdXJyZW50RmlsdGVyID0gdGhpcy5jdXJyZW50RmlsdGVyU2VsZWN0b3IodGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCBhdmFpbGFibGVMYXllcnMgPSB0aGlzLmF2YWlsYWJsZUxheWVyc1NlbGV0b3IodGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCBhbGxGZWF0dXJlcyA9IHRoaXMuYWxsRmVhdHVyZXNTZWxlY3Rvcih0aGlzLnByb3BzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkV3JhcHBlciBlZGl0b3I9e2VkaXRvcn0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdlZGl0b3InLCBjbGFzc05hbWUpfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxEcmF3XHJcbiAgICAgICAgICBjbGlja1JhZGl1cz17Y2xpY2tSYWRpdXN9XHJcbiAgICAgICAgICBtb2RlPXtlZGl0b3IubW9kZX1cclxuICAgICAgICAgIGZlYXR1cmVzPXthbGxGZWF0dXJlc31cclxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZUlkPXtzZWxlY3RlZEZlYXR1cmVJZH1cclxuICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLl9vblNlbGVjdH1cclxuICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgIGdldEVkaXRIYW5kbGVTaGFwZT17Z2V0RWRpdEhhbmRsZVNoYXBlfVxyXG4gICAgICAgICAgZ2V0RmVhdHVyZVN0eWxlPXtnZXRGZWF0dXJlU3R5bGV9XHJcbiAgICAgICAgICBnZXRFZGl0SGFuZGxlU3R5bGU9e2dldEVkaXRIYW5kbGVTdHlsZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtzaG93QWN0aW9ucyAmJiBCb29sZWFuKHNlbGVjdGVkRmVhdHVyZUlkKSA/IChcclxuICAgICAgICAgIDxGZWF0dXJlQWN0aW9uUGFuZWxcclxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICBsYXllcnM9e2F2YWlsYWJsZUxheWVyc31cclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcj17Y3VycmVudEZpbHRlcn1cclxuICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VGZWF0dXJlQWN0aW9ufVxyXG4gICAgICAgICAgICBvbkRlbGV0ZUZlYXR1cmU9e3RoaXMuX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlfVxyXG4gICAgICAgICAgICBvblRvZ2dsZUxheWVyPXt0aGlzLl9vblRvZ2dsZUxheWVyfVxyXG4gICAgICAgICAgICBwb3NpdGlvbj17bGFzdFBvc2l0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIl19