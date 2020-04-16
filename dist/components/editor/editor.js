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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuanMiXSwibmFtZXMiOlsiREVMRVRFX0tFWV9FVkVOVF9DT0RFIiwiQkFDS1NQQUNFX0tFWV9FVkVOVF9DT0RFIiwiRVNDQVBFX0tFWV9FVkVOVF9DT0RFIiwiU3R5bGVkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZWRpdG9yIiwibW9kZSIsIkVESVRPUl9NT0RFUyIsIkVESVQiLCJlZGl0b3JMYXllckZpbHRlciIsImxheWVyIiwiRURJVE9SX0FWQUlMQUJMRV9MQVlFUlMiLCJpbmNsdWRlcyIsInR5cGUiLCJFZGl0b3IiLCJzaG93QWN0aW9ucyIsImxhc3RQb3NpdGlvbiIsImxheWVycyIsImxheWVyc1RvUmVuZGVyIiwiZmlsdGVycyIsImZpbHRlclNlbGVjdG9yIiwic2VsZWN0ZWRGZWF0dXJlSWRTZWxlY3RvciIsInNlbGVjdGVkRmVhdHVyZUlkIiwiZmluZCIsImYiLCJ2YWx1ZSIsImlkIiwibGF5ZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJlZGl0b3JGZWF0dXJlU2VsZWN0b3IiLCJlZGl0b3JGZWF0dXJlcyIsIkZJTFRFUl9UWVBFUyIsInBvbHlnb24iLCJtYXAiLCJjb25jYXQiLCJldmVudCIsImlzRW5hYmxlZCIsIndoaWNoIiwiX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlIiwib25TZWxlY3QiLCJzb3VyY2VFdmVudCIsImFsbEZlYXR1cmVzIiwiYWxsRmVhdHVyZXNTZWxlY3RvciIsInNldFN0YXRlIiwicmlnaHRCdXR0b24iLCJ4IiwiY2hhbmdlZFBvaW50ZXJzIiwib2Zmc2V0WCIsInkiLCJvZmZzZXRZIiwic3RhdGUiLCJzZWxlY3RlZEZlYXR1cmUiLCJvbkRlbGV0ZUZlYXR1cmUiLCJvblRvZ2dsZVBvbHlnb25GaWx0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX29uS2V5UHJlc3NlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWUiLCJjbGlja1JhZGl1cyIsImRhdGFzZXRzIiwib25VcGRhdGUiLCJzdHlsZSIsImN1cnJlbnRGaWx0ZXIiLCJjdXJyZW50RmlsdGVyU2VsZWN0b3IiLCJhdmFpbGFibGVMYXllcnMiLCJhdmFpbGFibGVMYXllcnNTZWxldG9yIiwiX29uU2VsZWN0IiwiZ2V0RWRpdEhhbmRsZVNoYXBlIiwiZ2V0RmVhdHVyZVN0eWxlIiwiZ2V0RWRpdEhhbmRsZVN0eWxlIiwiQm9vbGVhbiIsIl9jbG9zZUZlYXR1cmVBY3Rpb24iLCJfb25Ub2dnbGVMYXllciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImluZGV4IiwibnVtYmVyIiwiY2xhc3NuYW1lcyIsInN0cmluZyIsImJvb2wiLCJERUZBVUxUX1JBRElVUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLEVBQTlCO0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUcsQ0FBakM7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxFQUE5Qjs7QUFFQSxJQUFNQyxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixLQUFzQkMsd0JBQWFDLElBQW5DLEdBQTBDLFNBQTFDLEdBQXNELFdBQTNEO0FBQUEsQ0FERSxDQUFuQjs7QUFLQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxTQUFJQyx5Q0FBd0JDLFFBQXhCLENBQWlDRixLQUFLLENBQUNHLElBQXZDLENBQUo7QUFBQSxDQUEvQjs7SUFFTUMsTTs7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VU0sTUFiTjtBQWNqQjdDLEVBQUFBLFNBQVMsRUFBRXVDLHNCQUFVUztBQWRKLEM7aUNBRGZ2RSxNLGtCQWtCa0I7QUFDcEI4QyxFQUFBQSxXQUFXLEVBQUUwQjtBQURPLEM7ZUFxSlR4RSxNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0VkaXRvciBhcyBEcmF3fSBmcm9tICdyZWFjdC1tYXAtZ2wtZHJhdyc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuXG5pbXBvcnQge0VESVRPUl9BVkFJTEFCTEVfTEFZRVJTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgRmVhdHVyZUFjdGlvblBhbmVsIGZyb20gJy4vZmVhdHVyZS1hY3Rpb24tcGFuZWwnO1xuaW1wb3J0IHtGSUxURVJfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuaW1wb3J0IHtERUZBVUxUX1JBRElVUywgZ2V0U3R5bGUgYXMgZ2V0RmVhdHVyZVN0eWxlfSBmcm9tICcuL2ZlYXR1cmUtc3R5bGVzJztcbmltcG9ydCB7Z2V0U3R5bGUgYXMgZ2V0RWRpdEhhbmRsZVN0eWxlLCBnZXRFZGl0SGFuZGxlU2hhcGV9IGZyb20gJy4vaGFuZGxlLXN0eWxlJztcbmltcG9ydCB7RURJVE9SX01PREVTfSBmcm9tICdjb25zdGFudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuXG5jb25zdCBERUxFVEVfS0VZX0VWRU5UX0NPREUgPSA0NjtcbmNvbnN0IEJBQ0tTUEFDRV9LRVlfRVZFTlRfQ09ERSA9IDg7XG5jb25zdCBFU0NBUEVfS0VZX0VWRU5UX0NPREUgPSAyNztcblxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGN1cnNvcjogJHtwcm9wcyA9PiAocHJvcHMuZWRpdG9yLm1vZGUgPT09IEVESVRPUl9NT0RFUy5FRElUID8gJ3BvaW50ZXInIDogJ2Nyb3NzaGFpcicpfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgZWRpdG9yTGF5ZXJGaWx0ZXIgPSBsYXllciA9PiBFRElUT1JfQVZBSUxBQkxFX0xBWUVSUy5pbmNsdWRlcyhsYXllci50eXBlKTtcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxheWVyc1RvUmVuZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25EZWxldGVGZWF0dXJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVG9nZ2xlUG9seWdvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsYXNzbmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xpY2tSYWRpdXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaXNFbmFibGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xpY2tSYWRpdXM6IERFRkFVTFRfUkFESVVTXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvd0FjdGlvbnM6IGZhbHNlLFxuICAgIGxhc3RQb3NpdGlvbjogbnVsbFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlQcmVzc2VkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlQcmVzc2VkKTtcbiAgfVxuXG4gIGxheWVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllcnM7XG4gIGxheWVyc1RvUmVuZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllcnNUb1JlbmRlcjtcbiAgZmlsdGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJzO1xuICBzZWxlY3RlZEZlYXR1cmVJZFNlbGVjdG9yID0gcHJvcHMgPT4gZ2V0KHByb3BzLCBbJ2VkaXRvcicsICdzZWxlY3RlZEZlYXR1cmUnLCAnaWQnXSk7XG4gIGVkaXRvckZlYXR1cmVTZWxlY3RvciA9IHByb3BzID0+IGdldChwcm9wcywgWydlZGl0b3InLCAnZmVhdHVyZXMnXSk7XG5cbiAgY3VycmVudEZpbHRlclNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5maWx0ZXJTZWxlY3RvcixcbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZUlkU2VsZWN0b3IsXG4gICAgKGZpbHRlcnMsIHNlbGVjdGVkRmVhdHVyZUlkKSA9PiBmaWx0ZXJzLmZpbmQoZiA9PiBmLnZhbHVlICYmIGYudmFsdWUuaWQgPT09IHNlbGVjdGVkRmVhdHVyZUlkKVxuICApO1xuXG4gIGF2YWlsYWJsZUxheWVyc1NlbGV0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICB0aGlzLmxheWVyU2VsZWN0b3IsXG4gICAgdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yLFxuICAgIChsYXllcnMsIGxheWVyc1RvUmVuZGVyKSA9PlxuICAgICAgbGF5ZXJzLmZpbHRlcihlZGl0b3JMYXllckZpbHRlcikuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyc1RvUmVuZGVyW2xheWVyLmlkXTtcbiAgICAgIH0pXG4gICk7XG5cbiAgYWxsRmVhdHVyZXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHRoaXMuZmlsdGVyU2VsZWN0b3IsXG4gICAgdGhpcy5lZGl0b3JGZWF0dXJlU2VsZWN0b3IsXG4gICAgKGZpbHRlcnMsIGVkaXRvckZlYXR1cmVzKSA9PlxuICAgICAgZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGYgPT4gZi50eXBlID09PSBGSUxURVJfVFlQRVMucG9seWdvbilcbiAgICAgICAgLm1hcChmID0+IGYudmFsdWUpXG4gICAgICAgIC5jb25jYXQoZWRpdG9yRmVhdHVyZXMpXG4gICk7XG5cbiAgX29uS2V5UHJlc3NlZCA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7aXNFbmFibGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgIGNhc2UgREVMRVRFX0tFWV9FVkVOVF9DT0RFOlxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0VWRU5UX0NPREU6XG4gICAgICAgIHRoaXMuX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0VWRU5UX0NPREU6XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIF9vblNlbGVjdCA9ICh7c2VsZWN0ZWRGZWF0dXJlSWQsIHNvdXJjZUV2ZW50fSkgPT4ge1xuICAgIGNvbnN0IGFsbEZlYXR1cmVzID0gdGhpcy5hbGxGZWF0dXJlc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIC4uLihzb3VyY2VFdmVudC5yaWdodEJ1dHRvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBzaG93QWN0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFzdFBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgeDogc291cmNlRXZlbnQuY2hhbmdlZFBvaW50ZXJzWzBdLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogc291cmNlRXZlbnQuY2hhbmdlZFBvaW50ZXJzWzBdLm9mZnNldFlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogbnVsbClcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoYWxsRmVhdHVyZXMuZmluZChmID0+IGYuaWQgPT09IHNlbGVjdGVkRmVhdHVyZUlkKSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBfb25EZWxldGVTZWxlY3RlZEZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FjdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBY3Rpb25zOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIGNvbnN0IHtlZGl0b3J9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7c2VsZWN0ZWRGZWF0dXJlID0ge319ID0gZWRpdG9yO1xuICAgIHRoaXMucHJvcHMub25EZWxldGVGZWF0dXJlKHNlbGVjdGVkRmVhdHVyZSk7XG4gIH07XG5cbiAgX2Nsb3NlRmVhdHVyZUFjdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QWN0aW9uczogZmFsc2V9KTtcbiAgfTtcblxuICBfb25Ub2dnbGVMYXllciA9IGxheWVyID0+IHtcbiAgICBjb25zdCB7c2VsZWN0ZWRGZWF0dXJlfSA9IHRoaXMucHJvcHMuZWRpdG9yO1xuICAgIGlmICghc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVBvbHlnb25GaWx0ZXIobGF5ZXIsIHNlbGVjdGVkRmVhdHVyZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjbGFzc05hbWUsIGNsaWNrUmFkaXVzLCBkYXRhc2V0cywgZWRpdG9yLCBvblVwZGF0ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtsYXN0UG9zaXRpb24sIHNob3dBY3Rpb25zfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlSWQgPSBnZXQoZWRpdG9yLCBbJ3NlbGVjdGVkRmVhdHVyZScsICdpZCddKTtcbiAgICBjb25zdCBjdXJyZW50RmlsdGVyID0gdGhpcy5jdXJyZW50RmlsdGVyU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlTGF5ZXJzID0gdGhpcy5hdmFpbGFibGVMYXllcnNTZWxldG9yKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGFsbEZlYXR1cmVzID0gdGhpcy5hbGxGZWF0dXJlc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRXcmFwcGVyIGVkaXRvcj17ZWRpdG9yfSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2VkaXRvcicsIGNsYXNzTmFtZSl9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxEcmF3XG4gICAgICAgICAgY2xpY2tSYWRpdXM9e2NsaWNrUmFkaXVzfVxuICAgICAgICAgIG1vZGU9e2VkaXRvci5tb2RlfVxuICAgICAgICAgIGZlYXR1cmVzPXthbGxGZWF0dXJlc31cbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVJZD17c2VsZWN0ZWRGZWF0dXJlSWR9XG4gICAgICAgICAgb25TZWxlY3Q9e3RoaXMuX29uU2VsZWN0fVxuICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICBnZXRFZGl0SGFuZGxlU2hhcGU9e2dldEVkaXRIYW5kbGVTaGFwZX1cbiAgICAgICAgICBnZXRGZWF0dXJlU3R5bGU9e2dldEZlYXR1cmVTdHlsZX1cbiAgICAgICAgICBnZXRFZGl0SGFuZGxlU3R5bGU9e2dldEVkaXRIYW5kbGVTdHlsZX1cbiAgICAgICAgLz5cbiAgICAgICAge3Nob3dBY3Rpb25zICYmIEJvb2xlYW4oc2VsZWN0ZWRGZWF0dXJlSWQpID8gKFxuICAgICAgICAgIDxGZWF0dXJlQWN0aW9uUGFuZWxcbiAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgIGxheWVycz17YXZhaWxhYmxlTGF5ZXJzfVxuICAgICAgICAgICAgY3VycmVudEZpbHRlcj17Y3VycmVudEZpbHRlcn1cbiAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX2Nsb3NlRmVhdHVyZUFjdGlvbn1cbiAgICAgICAgICAgIG9uRGVsZXRlRmVhdHVyZT17dGhpcy5fb25EZWxldGVTZWxlY3RlZEZlYXR1cmV9XG4gICAgICAgICAgICBvblRvZ2dsZUxheWVyPXt0aGlzLl9vblRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgcG9zaXRpb249e2xhc3RQb3NpdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiJdfQ==