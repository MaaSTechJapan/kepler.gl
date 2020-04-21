"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _react2 = _interopRequireDefault(require("@deck.gl/react"));

var _reselect = require("reselect");

var _viewportMercatorProject = _interopRequireDefault(require("viewport-mercator-project"));

var _mapPopover = _interopRequireDefault(require("./map/map-popover"));

var _mapControl = _interopRequireDefault(require("./map/map-control"));

var _styledComponents = require("./common/styled-components");

var _editor = _interopRequireDefault(require("./editor/editor"));

var _mapboxUtils = require("../layers/mapbox-utils");

var _baseLayer = require("../layers/base-layer");

var _glUtils = require("../utils/gl-utils");

var _mapboxUtils2 = require("../utils/map-style-utils/mapbox-utils");

var _dBuildingLayer = _interopRequireDefault(require("../deckgl-layers/3d-building-layer/3d-building-layer"));

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MAP_STYLE = {
  container: {
    display: 'inline-block',
    position: 'relative'
  },
  top: {
    position: 'absolute',
    top: '0px',
    pointerEvents: 'none'
  }
};
var MAPBOXGL_STYLE_UPDATE = 'style.load';
var MAPBOXGL_RENDER = 'render';
var TRANSITION_DURATION = 0;
MapContainerFactory.deps = [_mapPopover["default"], _mapControl["default"]];

function MapContainerFactory(MapPopover, MapControl) {
  var MapContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapContainer, _Component);

    var _super = _createSuper(MapContainer);

    function MapContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerDataSelector", function (props) {
        return props.layerData;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapLayersSelector", function (props) {
        return props.mapLayers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerOrderSelector", function (props) {
        return props.layerOrder;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.mapLayersSelector, // {[id]: true \ false}
      function (layers, layerData, mapLayers) {
        return layers.reduce(function (accu, layer, idx) {
          return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, layer.id, layer.shouldRenderLayer(layerData[idx]) && _this._isVisibleMapLayer(layer, mapLayers)));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filtersSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "polygonFilters", (0, _reselect.createSelector)(_this.filtersSelector, function (filters) {
        return filters.filter(function (f) {
          return f.type === _defaultSettings.FILTER_TYPES.polygon;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapboxLayersSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.layerOrderSelector, _this.layersToRenderSelector, _mapboxUtils.generateMapboxLayers));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseMapPopover", function () {
        _this.props.visStateActions.onLayerClick(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLayerSetDomain", function (idx, colorDomain) {
        _this.props.visStateActions.layerConfigChange(_this.props.layers[idx], {
          colorDomain: colorDomain
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleMapToggleLayer", function (layerId) {
        var _this$props = _this.props,
            _this$props$index = _this$props.index,
            mapIndex = _this$props$index === void 0 ? 0 : _this$props$index,
            visStateActions = _this$props.visStateActions;
        visStateActions.toggleLayerForMap(mapIndex, layerId);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapboxStyleUpdate", function () {
        // force refresh mapboxgl layers
        _this.previousLayers = {};

        _this._updateMapboxLayers();

        if (typeof _this.props.onMapStyleLoaded === 'function') {
          _this.props.onMapStyleLoaded(_this._map);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setMapboxMap", function (mapbox) {
        if (!_this._map && mapbox) {
          _this._map = mapbox.getMap(); // i noticed in certain context we don't access the actual map element

          if (!_this._map) {
            return;
          } // bind mapboxgl event listener


          _this._map.on(MAPBOXGL_STYLE_UPDATE, _this._onMapboxStyleUpdate);

          _this._map.on(MAPBOXGL_RENDER, function () {
            if (typeof _this.props.onMapRender === 'function') {
              _this.props.onMapRender(_this._map);
            }
          });
        }

        if (_this.props.getMapboxRef) {
          // The parent component can gain access to our MapboxGlMap by
          // providing this callback. Note that 'mapbox' will be null when the
          // ref is unset (e.g. when a split map is closed).
          _this.props.getMapboxRef(mapbox, _this.props.index);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBeforeRender", function (_ref) {
        var gl = _ref.gl;
        (0, _glUtils.setLayerBlending)(gl, _this.props.layerBlending);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderLayer", function (overlays, idx) {
        var _this$props2 = _this.props,
            datasets = _this$props2.datasets,
            layers = _this$props2.layers,
            layerData = _this$props2.layerData,
            hoverInfo = _this$props2.hoverInfo,
            clicked = _this$props2.clicked,
            mapState = _this$props2.mapState,
            interactionConfig = _this$props2.interactionConfig,
            animationConfig = _this$props2.animationConfig;
        var layer = layers[idx];
        var data = layerData[idx];

        var _ref2 = datasets[layer.config.dataId] || {},
            gpuFilter = _ref2.gpuFilter;

        var objectHovered = clicked || hoverInfo;
        var layerCallbacks = {
          onSetLayerDomain: function onSetLayerDomain(val) {
            return _this._onLayerSetDomain(idx, val);
          }
        }; // Layer is Layer class

        var layerOverlay = layer.renderLayer({
          data: data,
          gpuFilter: gpuFilter,
          idx: idx,
          interactionConfig: interactionConfig,
          layerCallbacks: layerCallbacks,
          mapState: mapState,
          animationConfig: animationConfig,
          objectHovered: objectHovered
        });
        return overlays.concat(layerOverlay || []);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onViewportChange", function (viewState) {
        if (typeof _this.props.onViewStateChange === 'function') {
          _this.props.onViewStateChange(viewState);
        }

        _this.props.mapStateActions.updateMap(viewState);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleMapControl", function (panelId) {
        var _this$props3 = _this.props,
            index = _this$props3.index,
            uiStateActions = _this$props3.uiStateActions;
        uiStateActions.toggleMapControl(panelId, index);
      });
      _this.previousLayers = {// [layers.id]: mapboxLayerConfig
      };
      _this._deck = null;
      return _this;
    }

    (0, _createClass2["default"])(MapContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unbind mapboxgl event listener
        if (this._map) {
          this._map.off(MAPBOXGL_STYLE_UPDATE);

          this._map.off(MAPBOXGL_RENDER);
        }
      }
    }, {
      key: "_isVisibleMapLayer",

      /* component private functions */
      value: function _isVisibleMapLayer(layer, mapLayers) {
        // if layer.id is not in mapLayers, don't render it
        return !mapLayers || mapLayers && mapLayers[layer.id];
      }
    }, {
      key: "_renderMapPopover",

      /* component render functions */

      /* eslint-disable complexity */
      value: function _renderMapPopover(layersToRender) {
        // TODO: move this into reducer so it can be tested
        var _this$props4 = this.props,
            mapState = _this$props4.mapState,
            hoverInfo = _this$props4.hoverInfo,
            clicked = _this$props4.clicked,
            datasets = _this$props4.datasets,
            interactionConfig = _this$props4.interactionConfig,
            layers = _this$props4.layers,
            _this$props4$mousePos = _this$props4.mousePos,
            mousePosition = _this$props4$mousePos.mousePosition,
            coordinate = _this$props4$mousePos.coordinate,
            pinned = _this$props4$mousePos.pinned;

        if (!mousePosition) {
          return null;
        } // if clicked something, ignore hover behavior


        var objectInfo = clicked || hoverInfo;
        var layerHoverProp = null;
        var position = {
          x: mousePosition[0],
          y: mousePosition[1]
        };

        if (interactionConfig.tooltip.enabled && objectInfo && objectInfo.picked) {
          // if anything hovered
          var object = objectInfo.object,
              overlay = objectInfo.layer; // deckgl layer to kepler-gl layer

          var layer = layers[overlay.props.idx];

          if (layer.getHoverData && layersToRender[layer.id]) {
            // if layer is visible and have hovered data
            var dataId = layer.config.dataId;
            var _datasets$dataId = datasets[dataId],
                allData = _datasets$dataId.allData,
                fields = _datasets$dataId.fields;
            var data = layer.getHoverData(object, allData);
            var fieldsToShow = interactionConfig.tooltip.config.fieldsToShow[dataId];
            layerHoverProp = {
              data: data,
              fields: fields,
              fieldsToShow: fieldsToShow,
              layer: layer
            };
          }
        }

        if (pinned || clicked) {
          // project lnglat to screen so that tooltip follows the object on zoom
          var viewport = new _viewportMercatorProject["default"](mapState);
          var lngLat = clicked ? clicked.lngLat : pinned.coordinate;
          position = this._getHoverXY(viewport, lngLat);
        }

        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({}, position, {
          layerHoverProp: layerHoverProp,
          coordinate: interactionConfig.coordinate.enabled && ((pinned || {}).coordinate || coordinate),
          freezed: Boolean(clicked || pinned),
          onClose: this._onCloseMapPopover,
          mapW: mapState.width,
          mapH: mapState.height
        })));
      }
      /* eslint-enable complexity */

    }, {
      key: "_getHoverXY",
      value: function _getHoverXY(viewport, lngLat) {
        var screenCoord = !viewport || !lngLat ? null : viewport.project(lngLat);
        return screenCoord && {
          x: screenCoord[0],
          y: screenCoord[1]
        };
      }
    }, {
      key: "_renderDeckOverlay",
      value: function _renderDeckOverlay(layersToRender) {
        var _this2 = this;

        var _this$props5 = this.props,
            mapState = _this$props5.mapState,
            mapStyle = _this$props5.mapStyle,
            layerData = _this$props5.layerData,
            layerOrder = _this$props5.layerOrder,
            layers = _this$props5.layers,
            visStateActions = _this$props5.visStateActions,
            mapboxApiAccessToken = _this$props5.mapboxApiAccessToken,
            mapboxApiUrl = _this$props5.mapboxApiUrl;
        var deckGlLayers = []; // wait until data is ready before render data layers

        if (layerData && layerData.length) {
          // last layer render first
          deckGlLayers = layerOrder.slice().reverse().filter(function (idx) {
            return layers[idx].overlayType === _baseLayer.OVERLAY_TYPE.deckgl && layersToRender[layers[idx].id];
          }).reduce(this._renderLayer, []);
        }

        if (mapStyle.visibleLayerGroups['3d building']) {
          deckGlLayers.push(new _dBuildingLayer["default"]({
            id: '_keplergl_3d-building',
            mapboxApiAccessToken: mapboxApiAccessToken,
            mapboxApiUrl: mapboxApiUrl,
            threeDBuildingColor: mapStyle.threeDBuildingColor,
            updateTriggers: {
              getFillColor: mapStyle.threeDBuildingColor
            }
          }));
        }

        return /*#__PURE__*/_react["default"].createElement(_react2["default"], (0, _extends2["default"])({}, this.props.deckGlProps, {
          viewState: mapState,
          id: "default-deckgl-overlay",
          layers: deckGlLayers,
          onBeforeRender: this._onBeforeRender,
          onHover: visStateActions.onLayerHover,
          onClick: visStateActions.onLayerClick,
          ref: function ref(comp) {
            if (comp && comp.deck && !_this2._deck) {
              _this2._deck = comp.deck;
            }
          }
        }));
      }
    }, {
      key: "_updateMapboxLayers",
      value: function _updateMapboxLayers() {
        var mapboxLayers = this.mapboxLayersSelector(this.props);

        if (!Object.keys(mapboxLayers).length && !Object.keys(this.previousLayers).length) {
          return;
        }

        (0, _mapboxUtils.updateMapboxLayers)(this._map, mapboxLayers, this.previousLayers);
        this.previousLayers = mapboxLayers;
      }
    }, {
      key: "_renderMapboxOverlays",
      value: function _renderMapboxOverlays() {
        if (this._map && this._map.isStyleLoaded()) {
          this._updateMapboxLayers();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
            mapState = _this$props6.mapState,
            mapStyle = _this$props6.mapStyle,
            mapStateActions = _this$props6.mapStateActions,
            mapLayers = _this$props6.mapLayers,
            layers = _this$props6.layers,
            MapComponent = _this$props6.MapComponent,
            datasets = _this$props6.datasets,
            mapboxApiAccessToken = _this$props6.mapboxApiAccessToken,
            mapboxApiUrl = _this$props6.mapboxApiUrl,
            mapControls = _this$props6.mapControls,
            uiState = _this$props6.uiState,
            visStateActions = _this$props6.visStateActions,
            editor = _this$props6.editor,
            index = _this$props6.index;
        var layersToRender = this.layersToRenderSelector(this.props);

        if (!mapStyle.bottomMapStyle) {
          // style not yet loaded
          return /*#__PURE__*/_react["default"].createElement("div", null);
        }

        var mapProps = _objectSpread({}, mapState, {
          preserveDrawingBuffer: true,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          onViewportChange: this._onViewportChange,
          transformRequest: _mapboxUtils2.transformRequest
        });

        var isEdit = uiState.mapControls.mapDraw.active;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledMapContainer, {
          style: MAP_STYLE.container
        }, /*#__PURE__*/_react["default"].createElement(MapControl, {
          datasets: datasets,
          dragRotate: mapState.dragRotate,
          isSplit: Boolean(mapLayers),
          isExport: this.props.isExport,
          layers: layers,
          layersToRender: layersToRender,
          mapIndex: index,
          mapControls: mapControls,
          readOnly: this.props.readOnly,
          scale: mapState.scale || 1,
          top: 0,
          editor: editor,
          onTogglePerspective: mapStateActions.togglePerspective,
          onToggleSplitMap: mapStateActions.toggleSplitMap,
          onMapToggleLayer: this._handleMapToggleLayer,
          onToggleMapControl: this._toggleMapControl,
          onSetEditorMode: visStateActions.setEditorMode,
          onToggleEditorVisibility: visStateActions.toggleEditorVisibility
        }), /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "bottom",
          ref: this._setMapboxMap,
          mapStyle: mapStyle.bottomMapStyle,
          getCursor: this.props.hoverInfo ? function () {
            return 'pointer';
          } : undefined,
          transitionDuration: TRANSITION_DURATION,
          onMouseMove: this.props.visStateActions.onMouseMove
        }), this._renderDeckOverlay(layersToRender), this._renderMapboxOverlays(layersToRender), /*#__PURE__*/_react["default"].createElement(_editor["default"], {
          index: index,
          datasets: datasets,
          editor: editor,
          filters: this.polygonFilters(this.props),
          isEnabled: isEdit,
          layers: layers,
          layersToRender: layersToRender,
          onDeleteFeature: visStateActions.deleteFeature,
          onSelect: visStateActions.setSelectedFeature,
          onUpdate: visStateActions.setFeatures,
          onTogglePolygonFilter: visStateActions.setPolygonFilterLayer,
          style: {
            pointerEvents: isEdit ? 'all' : 'none',
            position: 'absolute',
            display: editor.visible ? 'block' : 'none'
          }
        })), mapStyle.topMapStyle && /*#__PURE__*/_react["default"].createElement("div", {
          style: MAP_STYLE.top
        }, /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "top",
          mapStyle: mapStyle.topMapStyle
        }))), this._renderMapPopover(layersToRender));
      }
    }]);
    return MapContainer;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapContainer, "propTypes", {
    // required
    datasets: _propTypes["default"].object,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerOrder: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerData: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    mapState: _propTypes["default"].object.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    uiState: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    mousePos: _propTypes["default"].object.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    // optional
    readOnly: _propTypes["default"].bool,
    isExport: _propTypes["default"].bool,
    clicked: _propTypes["default"].object,
    hoverInfo: _propTypes["default"].object,
    mapLayers: _propTypes["default"].object,
    onMapToggleLayer: _propTypes["default"].func,
    onMapStyleLoaded: _propTypes["default"].func,
    onMapRender: _propTypes["default"].func,
    getMapboxRef: _propTypes["default"].func,
    index: _propTypes["default"].number
  });
  (0, _defineProperty2["default"])(MapContainer, "defaultProps", {
    MapComponent: _reactMapGl["default"],
    deckGlProps: {},
    index: 0
  });
  MapContainer.displayName = 'MapContainer';
  return MapContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hcC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiTUFQX1NUWUxFIiwiY29udGFpbmVyIiwiZGlzcGxheSIsInBvc2l0aW9uIiwidG9wIiwicG9pbnRlckV2ZW50cyIsIk1BUEJPWEdMX1NUWUxFX1VQREFURSIsIk1BUEJPWEdMX1JFTkRFUiIsIlRSQU5TSVRJT05fRFVSQVRJT04iLCJNYXBDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcFBvcG92ZXJGYWN0b3J5IiwiTWFwQ29udHJvbEZhY3RvcnkiLCJNYXBQb3BvdmVyIiwiTWFwQ29udHJvbCIsIk1hcENvbnRhaW5lciIsInByb3BzIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibWFwTGF5ZXJzIiwibGF5ZXJPcmRlciIsImxheWVyc1NlbGVjdG9yIiwibGF5ZXJEYXRhU2VsZWN0b3IiLCJtYXBMYXllcnNTZWxlY3RvciIsInJlZHVjZSIsImFjY3UiLCJsYXllciIsImlkeCIsImlkIiwic2hvdWxkUmVuZGVyTGF5ZXIiLCJfaXNWaXNpYmxlTWFwTGF5ZXIiLCJmaWx0ZXJzIiwiZmlsdGVyc1NlbGVjdG9yIiwiZmlsdGVyIiwiZiIsInR5cGUiLCJGSUxURVJfVFlQRVMiLCJwb2x5Z29uIiwibGF5ZXJPcmRlclNlbGVjdG9yIiwibGF5ZXJzVG9SZW5kZXJTZWxlY3RvciIsImdlbmVyYXRlTWFwYm94TGF5ZXJzIiwidmlzU3RhdGVBY3Rpb25zIiwib25MYXllckNsaWNrIiwiY29sb3JEb21haW4iLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVySWQiLCJpbmRleCIsIm1hcEluZGV4IiwidG9nZ2xlTGF5ZXJGb3JNYXAiLCJwcmV2aW91c0xheWVycyIsIl91cGRhdGVNYXBib3hMYXllcnMiLCJvbk1hcFN0eWxlTG9hZGVkIiwiX21hcCIsIm1hcGJveCIsImdldE1hcCIsIm9uIiwiX29uTWFwYm94U3R5bGVVcGRhdGUiLCJvbk1hcFJlbmRlciIsImdldE1hcGJveFJlZiIsImdsIiwibGF5ZXJCbGVuZGluZyIsIm92ZXJsYXlzIiwiZGF0YXNldHMiLCJob3ZlckluZm8iLCJjbGlja2VkIiwibWFwU3RhdGUiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImFuaW1hdGlvbkNvbmZpZyIsImRhdGEiLCJjb25maWciLCJkYXRhSWQiLCJncHVGaWx0ZXIiLCJvYmplY3RIb3ZlcmVkIiwibGF5ZXJDYWxsYmFja3MiLCJvblNldExheWVyRG9tYWluIiwidmFsIiwiX29uTGF5ZXJTZXREb21haW4iLCJsYXllck92ZXJsYXkiLCJyZW5kZXJMYXllciIsImNvbmNhdCIsInZpZXdTdGF0ZSIsIm9uVmlld1N0YXRlQ2hhbmdlIiwibWFwU3RhdGVBY3Rpb25zIiwidXBkYXRlTWFwIiwicGFuZWxJZCIsInVpU3RhdGVBY3Rpb25zIiwidG9nZ2xlTWFwQ29udHJvbCIsIl9kZWNrIiwib2ZmIiwibGF5ZXJzVG9SZW5kZXIiLCJtb3VzZVBvcyIsIm1vdXNlUG9zaXRpb24iLCJjb29yZGluYXRlIiwicGlubmVkIiwib2JqZWN0SW5mbyIsImxheWVySG92ZXJQcm9wIiwieCIsInkiLCJ0b29sdGlwIiwiZW5hYmxlZCIsInBpY2tlZCIsIm9iamVjdCIsIm92ZXJsYXkiLCJnZXRIb3ZlckRhdGEiLCJhbGxEYXRhIiwiZmllbGRzIiwiZmllbGRzVG9TaG93Iiwidmlld3BvcnQiLCJXZWJNZXJjYXRvclZpZXdwb3J0IiwibG5nTGF0IiwiX2dldEhvdmVyWFkiLCJCb29sZWFuIiwiX29uQ2xvc2VNYXBQb3BvdmVyIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JlZW5Db29yZCIsInByb2plY3QiLCJtYXBTdHlsZSIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwiZGVja0dsTGF5ZXJzIiwibGVuZ3RoIiwic2xpY2UiLCJyZXZlcnNlIiwib3ZlcmxheVR5cGUiLCJPVkVSTEFZX1RZUEUiLCJkZWNrZ2wiLCJfcmVuZGVyTGF5ZXIiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJwdXNoIiwiVGhyZWVEQnVpbGRpbmdMYXllciIsInRocmVlREJ1aWxkaW5nQ29sb3IiLCJ1cGRhdGVUcmlnZ2VycyIsImdldEZpbGxDb2xvciIsImRlY2tHbFByb3BzIiwiX29uQmVmb3JlUmVuZGVyIiwib25MYXllckhvdmVyIiwiY29tcCIsImRlY2siLCJtYXBib3hMYXllcnMiLCJtYXBib3hMYXllcnNTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJpc1N0eWxlTG9hZGVkIiwiTWFwQ29tcG9uZW50IiwibWFwQ29udHJvbHMiLCJ1aVN0YXRlIiwiZWRpdG9yIiwiYm90dG9tTWFwU3R5bGUiLCJtYXBQcm9wcyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsIm9uVmlld3BvcnRDaGFuZ2UiLCJfb25WaWV3cG9ydENoYW5nZSIsInRyYW5zZm9ybVJlcXVlc3QiLCJpc0VkaXQiLCJtYXBEcmF3IiwiYWN0aXZlIiwiZHJhZ1JvdGF0ZSIsImlzRXhwb3J0IiwicmVhZE9ubHkiLCJzY2FsZSIsInRvZ2dsZVBlcnNwZWN0aXZlIiwidG9nZ2xlU3BsaXRNYXAiLCJfaGFuZGxlTWFwVG9nZ2xlTGF5ZXIiLCJfdG9nZ2xlTWFwQ29udHJvbCIsInNldEVkaXRvck1vZGUiLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5IiwiX3NldE1hcGJveE1hcCIsInVuZGVmaW5lZCIsIm9uTW91c2VNb3ZlIiwiX3JlbmRlckRlY2tPdmVybGF5IiwiX3JlbmRlck1hcGJveE92ZXJsYXlzIiwicG9seWdvbkZpbHRlcnMiLCJkZWxldGVGZWF0dXJlIiwic2V0U2VsZWN0ZWRGZWF0dXJlIiwic2V0RmVhdHVyZXMiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXIiLCJ2aXNpYmxlIiwidG9wTWFwU3R5bGUiLCJfcmVuZGVyTWFwUG9wb3ZlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwiYW55IiwiYm9vbCIsIm9uTWFwVG9nZ2xlTGF5ZXIiLCJmdW5jIiwibnVtYmVyIiwiTWFwYm94R0xNYXAiLCJkaXNwbGF5TmFt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Yy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vLyBsaWJyYXJpZXNcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBNYXBib3hHTE1hcCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgRGVja0dMIGZyb20gJ0BkZWNrLmdsL3JlYWN0JztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQgV2ViTWVyY2F0b3JWaWV3cG9ydCBmcm9tICd2aWV3cG9ydC1tZXJjYXRvci1wcm9qZWN0JztcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IE1hcFBvcG92ZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvbWFwL21hcC1wb3BvdmVyJztcclxuaW1wb3J0IE1hcENvbnRyb2xGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvbWFwL21hcC1jb250cm9sJztcclxuaW1wb3J0IHtTdHlsZWRNYXBDb250YWluZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IvZWRpdG9yJztcclxuXHJcbi8vIHV0aWxzXHJcbmltcG9ydCB7Z2VuZXJhdGVNYXBib3hMYXllcnMsIHVwZGF0ZU1hcGJveExheWVyc30gZnJvbSAnbGF5ZXJzL21hcGJveC11dGlscyc7XHJcbmltcG9ydCB7T1ZFUkxBWV9UWVBFfSBmcm9tICdsYXllcnMvYmFzZS1sYXllcic7XHJcbmltcG9ydCB7c2V0TGF5ZXJCbGVuZGluZ30gZnJvbSAndXRpbHMvZ2wtdXRpbHMnO1xyXG5pbXBvcnQge3RyYW5zZm9ybVJlcXVlc3R9IGZyb20gJ3V0aWxzL21hcC1zdHlsZS11dGlscy9tYXBib3gtdXRpbHMnO1xyXG5cclxuLy8gZGVmYXVsdC1zZXR0aW5nc1xyXG5pbXBvcnQgVGhyZWVEQnVpbGRpbmdMYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzLzNkLWJ1aWxkaW5nLWxheWVyLzNkLWJ1aWxkaW5nLWxheWVyJztcclxuaW1wb3J0IHtGSUxURVJfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IE1BUF9TVFlMRSA9IHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICB9LFxyXG4gIHRvcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcwcHgnLFxyXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgTUFQQk9YR0xfU1RZTEVfVVBEQVRFID0gJ3N0eWxlLmxvYWQnO1xyXG5jb25zdCBNQVBCT1hHTF9SRU5ERVIgPSAncmVuZGVyJztcclxuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDA7XHJcblxyXG5NYXBDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwUG9wb3ZlckZhY3RvcnksIE1hcENvbnRyb2xGYWN0b3J5XTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcENvbnRhaW5lckZhY3RvcnkoTWFwUG9wb3ZlciwgTWFwQ29udHJvbCkge1xyXG4gIGNsYXNzIE1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAvLyByZXF1aXJlZFxyXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllck9yZGVyOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllckRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxuICAgICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwQ29udHJvbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgdWlTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBtb3VzZVBvczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBib3hBcGlVcmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgdWlTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAgIC8vIG9wdGlvbmFsXHJcbiAgICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgaXNFeHBvcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICBjbGlja2VkOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBob3ZlckluZm86IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIG1hcExheWVyczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgb25NYXBUb2dnbGVMYXllcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIG9uTWFwU3R5bGVMb2FkZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICBvbk1hcFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIGdldE1hcGJveFJlZjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIE1hcENvbXBvbmVudDogTWFwYm94R0xNYXAsXHJcbiAgICAgIGRlY2tHbFByb3BzOiB7fSxcclxuICAgICAgaW5kZXg6IDBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IHtcclxuICAgICAgICAvLyBbbGF5ZXJzLmlkXTogbWFwYm94TGF5ZXJDb25maWdcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuX2RlY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAvLyB1bmJpbmQgbWFwYm94Z2wgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgaWYgKHRoaXMuX21hcCkge1xyXG4gICAgICAgIHRoaXMuX21hcC5vZmYoTUFQQk9YR0xfU1RZTEVfVVBEQVRFKTtcclxuICAgICAgICB0aGlzLl9tYXAub2ZmKE1BUEJPWEdMX1JFTkRFUik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYXllcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVycztcclxuICAgIGxheWVyRGF0YVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJEYXRhO1xyXG4gICAgbWFwTGF5ZXJzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5tYXBMYXllcnM7XHJcbiAgICBsYXllck9yZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllck9yZGVyO1xyXG4gICAgbGF5ZXJzVG9SZW5kZXJTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLmxheWVyc1NlbGVjdG9yLFxyXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxyXG4gICAgICB0aGlzLm1hcExheWVyc1NlbGVjdG9yLFxyXG4gICAgICAvLyB7W2lkXTogdHJ1ZSBcXCBmYWxzZX1cclxuICAgICAgKGxheWVycywgbGF5ZXJEYXRhLCBtYXBMYXllcnMpID0+XHJcbiAgICAgICAgbGF5ZXJzLnJlZHVjZShcclxuICAgICAgICAgIChhY2N1LCBsYXllciwgaWR4KSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgICAgICBbbGF5ZXIuaWRdOlxyXG4gICAgICAgICAgICAgIGxheWVyLnNob3VsZFJlbmRlckxheWVyKGxheWVyRGF0YVtpZHhdKSAmJiB0aGlzLl9pc1Zpc2libGVNYXBMYXllcihsYXllciwgbWFwTGF5ZXJzKVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICB7fVxyXG4gICAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgZmlsdGVyc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVycztcclxuICAgIHBvbHlnb25GaWx0ZXJzID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWx0ZXJzU2VsZWN0b3IsIGZpbHRlcnMgPT5cclxuICAgICAgZmlsdGVycy5maWx0ZXIoZiA9PiBmLnR5cGUgPT09IEZJTFRFUl9UWVBFUy5wb2x5Z29uKVxyXG4gICAgKTtcclxuXHJcbiAgICBtYXBib3hMYXllcnNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLmxheWVyc1NlbGVjdG9yLFxyXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxyXG4gICAgICB0aGlzLmxheWVyT3JkZXJTZWxlY3RvcixcclxuICAgICAgdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yLFxyXG4gICAgICBnZW5lcmF0ZU1hcGJveExheWVyc1xyXG4gICAgKTtcclxuXHJcbiAgICAvKiBjb21wb25lbnQgcHJpdmF0ZSBmdW5jdGlvbnMgKi9cclxuICAgIF9pc1Zpc2libGVNYXBMYXllcihsYXllciwgbWFwTGF5ZXJzKSB7XHJcbiAgICAgIC8vIGlmIGxheWVyLmlkIGlzIG5vdCBpbiBtYXBMYXllcnMsIGRvbid0IHJlbmRlciBpdFxyXG4gICAgICByZXR1cm4gIW1hcExheWVycyB8fCAobWFwTGF5ZXJzICYmIG1hcExheWVyc1tsYXllci5pZF0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkNsb3NlTWFwUG9wb3ZlciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMub25MYXllckNsaWNrKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25MYXllclNldERvbWFpbiA9IChpZHgsIGNvbG9yRG9tYWluKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXJzW2lkeF0sIHtcclxuICAgICAgICBjb2xvckRvbWFpblxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX2hhbmRsZU1hcFRvZ2dsZUxheWVyID0gbGF5ZXJJZCA9PiB7XHJcbiAgICAgIGNvbnN0IHtpbmRleDogbWFwSW5kZXggPSAwLCB2aXNTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUxheWVyRm9yTWFwKG1hcEluZGV4LCBsYXllcklkKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uTWFwYm94U3R5bGVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIC8vIGZvcmNlIHJlZnJlc2ggbWFwYm94Z2wgbGF5ZXJzXHJcbiAgICAgIHRoaXMucHJldmlvdXNMYXllcnMgPSB7fTtcclxuICAgICAgdGhpcy5fdXBkYXRlTWFwYm94TGF5ZXJzKCk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCh0aGlzLl9tYXApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9zZXRNYXBib3hNYXAgPSBtYXBib3ggPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuX21hcCAmJiBtYXBib3gpIHtcclxuICAgICAgICB0aGlzLl9tYXAgPSBtYXBib3guZ2V0TWFwKCk7XHJcbiAgICAgICAgLy8gaSBub3RpY2VkIGluIGNlcnRhaW4gY29udGV4dCB3ZSBkb24ndCBhY2Nlc3MgdGhlIGFjdHVhbCBtYXAgZWxlbWVudFxyXG4gICAgICAgIGlmICghdGhpcy5fbWFwKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJpbmQgbWFwYm94Z2wgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICB0aGlzLl9tYXAub24oTUFQQk9YR0xfU1RZTEVfVVBEQVRFLCB0aGlzLl9vbk1hcGJveFN0eWxlVXBkYXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1JFTkRFUiwgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uTWFwUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25NYXBSZW5kZXIodGhpcy5fbWFwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMucHJvcHMuZ2V0TWFwYm94UmVmKSB7XHJcbiAgICAgICAgLy8gVGhlIHBhcmVudCBjb21wb25lbnQgY2FuIGdhaW4gYWNjZXNzIHRvIG91ciBNYXBib3hHbE1hcCBieVxyXG4gICAgICAgIC8vIHByb3ZpZGluZyB0aGlzIGNhbGxiYWNrLiBOb3RlIHRoYXQgJ21hcGJveCcgd2lsbCBiZSBudWxsIHdoZW4gdGhlXHJcbiAgICAgICAgLy8gcmVmIGlzIHVuc2V0IChlLmcuIHdoZW4gYSBzcGxpdCBtYXAgaXMgY2xvc2VkKS5cclxuICAgICAgICB0aGlzLnByb3BzLmdldE1hcGJveFJlZihtYXBib3gsIHRoaXMucHJvcHMuaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbkJlZm9yZVJlbmRlciA9ICh7Z2x9KSA9PiB7XHJcbiAgICAgIHNldExheWVyQmxlbmRpbmcoZ2wsIHRoaXMucHJvcHMubGF5ZXJCbGVuZGluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb25zICovXHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xyXG4gICAgX3JlbmRlck1hcFBvcG92ZXIobGF5ZXJzVG9SZW5kZXIpIHtcclxuICAgICAgLy8gVE9ETzogbW92ZSB0aGlzIGludG8gcmVkdWNlciBzbyBpdCBjYW4gYmUgdGVzdGVkXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBtYXBTdGF0ZSxcclxuICAgICAgICBob3ZlckluZm8sXHJcbiAgICAgICAgY2xpY2tlZCxcclxuICAgICAgICBkYXRhc2V0cyxcclxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgbW91c2VQb3M6IHttb3VzZVBvc2l0aW9uLCBjb29yZGluYXRlLCBwaW5uZWR9XHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgaWYgKCFtb3VzZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgY2xpY2tlZCBzb21ldGhpbmcsIGlnbm9yZSBob3ZlciBiZWhhdmlvclxyXG4gICAgICBjb25zdCBvYmplY3RJbmZvID0gY2xpY2tlZCB8fCBob3ZlckluZm87XHJcbiAgICAgIGxldCBsYXllckhvdmVyUHJvcCA9IG51bGw7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IHt4OiBtb3VzZVBvc2l0aW9uWzBdLCB5OiBtb3VzZVBvc2l0aW9uWzFdfTtcclxuXHJcbiAgICAgIGlmIChpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmVuYWJsZWQgJiYgb2JqZWN0SW5mbyAmJiBvYmplY3RJbmZvLnBpY2tlZCkge1xyXG4gICAgICAgIC8vIGlmIGFueXRoaW5nIGhvdmVyZWRcclxuICAgICAgICBjb25zdCB7b2JqZWN0LCBsYXllcjogb3ZlcmxheX0gPSBvYmplY3RJbmZvO1xyXG5cclxuICAgICAgICAvLyBkZWNrZ2wgbGF5ZXIgdG8ga2VwbGVyLWdsIGxheWVyXHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbb3ZlcmxheS5wcm9wcy5pZHhdO1xyXG5cclxuICAgICAgICBpZiAobGF5ZXIuZ2V0SG92ZXJEYXRhICYmIGxheWVyc1RvUmVuZGVyW2xheWVyLmlkXSkge1xyXG4gICAgICAgICAgLy8gaWYgbGF5ZXIgaXMgdmlzaWJsZSBhbmQgaGF2ZSBob3ZlcmVkIGRhdGFcclxuICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY29uZmlnOiB7ZGF0YUlkfVxyXG4gICAgICAgICAgfSA9IGxheWVyO1xyXG4gICAgICAgICAgY29uc3Qge2FsbERhdGEsIGZpZWxkc30gPSBkYXRhc2V0c1tkYXRhSWRdO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGxheWVyLmdldEhvdmVyRGF0YShvYmplY3QsIGFsbERhdGEpO1xyXG4gICAgICAgICAgY29uc3QgZmllbGRzVG9TaG93ID0gaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF07XHJcblxyXG4gICAgICAgICAgbGF5ZXJIb3ZlclByb3AgPSB7XHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGZpZWxkcyxcclxuICAgICAgICAgICAgZmllbGRzVG9TaG93LFxyXG4gICAgICAgICAgICBsYXllclxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwaW5uZWQgfHwgY2xpY2tlZCkge1xyXG4gICAgICAgIC8vIHByb2plY3QgbG5nbGF0IHRvIHNjcmVlbiBzbyB0aGF0IHRvb2x0aXAgZm9sbG93cyB0aGUgb2JqZWN0IG9uIHpvb21cclxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IG5ldyBXZWJNZXJjYXRvclZpZXdwb3J0KG1hcFN0YXRlKTtcclxuICAgICAgICBjb25zdCBsbmdMYXQgPSBjbGlja2VkID8gY2xpY2tlZC5sbmdMYXQgOiBwaW5uZWQuY29vcmRpbmF0ZTtcclxuICAgICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldEhvdmVyWFkodmlld3BvcnQsIGxuZ0xhdCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE1hcFBvcG92ZXJcclxuICAgICAgICAgICAgey4uLnBvc2l0aW9ufVxyXG4gICAgICAgICAgICBsYXllckhvdmVyUHJvcD17bGF5ZXJIb3ZlclByb3B9XHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGU9e1xyXG4gICAgICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiAoKHBpbm5lZCB8fCB7fSkuY29vcmRpbmF0ZSB8fCBjb29yZGluYXRlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZyZWV6ZWQ9e0Jvb2xlYW4oY2xpY2tlZCB8fCBwaW5uZWQpfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9vbkNsb3NlTWFwUG9wb3Zlcn1cclxuICAgICAgICAgICAgbWFwVz17bWFwU3RhdGUud2lkdGh9XHJcbiAgICAgICAgICAgIG1hcEg9e21hcFN0YXRlLmhlaWdodH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXHJcblxyXG4gICAgX2dldEhvdmVyWFkodmlld3BvcnQsIGxuZ0xhdCkge1xyXG4gICAgICBjb25zdCBzY3JlZW5Db29yZCA9ICF2aWV3cG9ydCB8fCAhbG5nTGF0ID8gbnVsbCA6IHZpZXdwb3J0LnByb2plY3QobG5nTGF0KTtcclxuICAgICAgcmV0dXJuIHNjcmVlbkNvb3JkICYmIHt4OiBzY3JlZW5Db29yZFswXSwgeTogc2NyZWVuQ29vcmRbMV19O1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJMYXllciA9IChvdmVybGF5cywgaWR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhc2V0cyxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgbGF5ZXJEYXRhLFxyXG4gICAgICAgIGhvdmVySW5mbyxcclxuICAgICAgICBjbGlja2VkLFxyXG4gICAgICAgIG1hcFN0YXRlLFxyXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgICAgIGFuaW1hdGlvbkNvbmZpZ1xyXG4gICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbaWR4XTtcclxuICAgICAgY29uc3QgZGF0YSA9IGxheWVyRGF0YVtpZHhdO1xyXG4gICAgICBjb25zdCB7Z3B1RmlsdGVyfSA9IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdIHx8IHt9O1xyXG5cclxuICAgICAgY29uc3Qgb2JqZWN0SG92ZXJlZCA9IGNsaWNrZWQgfHwgaG92ZXJJbmZvO1xyXG4gICAgICBjb25zdCBsYXllckNhbGxiYWNrcyA9IHtcclxuICAgICAgICBvblNldExheWVyRG9tYWluOiB2YWwgPT4gdGhpcy5fb25MYXllclNldERvbWFpbihpZHgsIHZhbClcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIExheWVyIGlzIExheWVyIGNsYXNzXHJcbiAgICAgIGNvbnN0IGxheWVyT3ZlcmxheSA9IGxheWVyLnJlbmRlckxheWVyKHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGdwdUZpbHRlcixcclxuICAgICAgICBpZHgsXHJcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXHJcbiAgICAgICAgbGF5ZXJDYWxsYmFja3MsXHJcbiAgICAgICAgbWFwU3RhdGUsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxyXG4gICAgICAgIG9iamVjdEhvdmVyZWRcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gb3ZlcmxheXMuY29uY2F0KGxheWVyT3ZlcmxheSB8fCBbXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9yZW5kZXJEZWNrT3ZlcmxheShsYXllcnNUb1JlbmRlcikge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbWFwU3RhdGUsXHJcbiAgICAgICAgbWFwU3R5bGUsXHJcbiAgICAgICAgbGF5ZXJEYXRhLFxyXG4gICAgICAgIGxheWVyT3JkZXIsXHJcbiAgICAgICAgbGF5ZXJzLFxyXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcclxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcclxuICAgICAgICBtYXBib3hBcGlVcmxcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBsZXQgZGVja0dsTGF5ZXJzID0gW107XHJcbiAgICAgIC8vIHdhaXQgdW50aWwgZGF0YSBpcyByZWFkeSBiZWZvcmUgcmVuZGVyIGRhdGEgbGF5ZXJzXHJcbiAgICAgIGlmIChsYXllckRhdGEgJiYgbGF5ZXJEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIC8vIGxhc3QgbGF5ZXIgcmVuZGVyIGZpcnN0XHJcbiAgICAgICAgZGVja0dsTGF5ZXJzID0gbGF5ZXJPcmRlclxyXG4gICAgICAgICAgLnNsaWNlKClcclxuICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgIGlkeCA9PiBsYXllcnNbaWR4XS5vdmVybGF5VHlwZSA9PT0gT1ZFUkxBWV9UWVBFLmRlY2tnbCAmJiBsYXllcnNUb1JlbmRlcltsYXllcnNbaWR4XS5pZF1cclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5yZWR1Y2UodGhpcy5fcmVuZGVyTGF5ZXIsIFtdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1hcFN0eWxlLnZpc2libGVMYXllckdyb3Vwc1snM2QgYnVpbGRpbmcnXSkge1xyXG4gICAgICAgIGRlY2tHbExheWVycy5wdXNoKFxyXG4gICAgICAgICAgbmV3IFRocmVlREJ1aWxkaW5nTGF5ZXIoe1xyXG4gICAgICAgICAgICBpZDogJ19rZXBsZXJnbF8zZC1idWlsZGluZycsXHJcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICBtYXBib3hBcGlVcmwsXHJcbiAgICAgICAgICAgIHRocmVlREJ1aWxkaW5nQ29sb3I6IG1hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3IsXHJcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzOiB7XHJcbiAgICAgICAgICAgICAgZ2V0RmlsbENvbG9yOiBtYXBTdHlsZS50aHJlZURCdWlsZGluZ0NvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RGVja0dMXHJcbiAgICAgICAgICB7Li4udGhpcy5wcm9wcy5kZWNrR2xQcm9wc31cclxuICAgICAgICAgIHZpZXdTdGF0ZT17bWFwU3RhdGV9XHJcbiAgICAgICAgICBpZD1cImRlZmF1bHQtZGVja2dsLW92ZXJsYXlcIlxyXG4gICAgICAgICAgbGF5ZXJzPXtkZWNrR2xMYXllcnN9XHJcbiAgICAgICAgICBvbkJlZm9yZVJlbmRlcj17dGhpcy5fb25CZWZvcmVSZW5kZXJ9XHJcbiAgICAgICAgICBvbkhvdmVyPXt2aXNTdGF0ZUFjdGlvbnMub25MYXllckhvdmVyfVxyXG4gICAgICAgICAgb25DbGljaz17dmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJDbGlja31cclxuICAgICAgICAgIHJlZj17Y29tcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wICYmIGNvbXAuZGVjayAmJiAhdGhpcy5fZGVjaykge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2RlY2sgPSBjb21wLmRlY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlTWFwYm94TGF5ZXJzKCkge1xyXG4gICAgICBjb25zdCBtYXBib3hMYXllcnMgPSB0aGlzLm1hcGJveExheWVyc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xyXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG1hcGJveExheWVycykubGVuZ3RoICYmICFPYmplY3Qua2V5cyh0aGlzLnByZXZpb3VzTGF5ZXJzKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZU1hcGJveExheWVycyh0aGlzLl9tYXAsIG1hcGJveExheWVycywgdGhpcy5wcmV2aW91c0xheWVycyk7XHJcblxyXG4gICAgICB0aGlzLnByZXZpb3VzTGF5ZXJzID0gbWFwYm94TGF5ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJNYXBib3hPdmVybGF5cygpIHtcclxuICAgICAgaWYgKHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuaXNTdHlsZUxvYWRlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTWFwYm94TGF5ZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25WaWV3cG9ydENoYW5nZSA9IHZpZXdTdGF0ZSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblZpZXdTdGF0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25WaWV3U3RhdGVDaGFuZ2Uodmlld1N0YXRlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAodmlld1N0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgX3RvZ2dsZU1hcENvbnRyb2wgPSBwYW5lbElkID0+IHtcclxuICAgICAgY29uc3Qge2luZGV4LCB1aVN0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgdWlTdGF0ZUFjdGlvbnMudG9nZ2xlTWFwQ29udHJvbChwYW5lbElkLCBpbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG1hcFN0YXRlLFxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcclxuICAgICAgICBtYXBMYXllcnMsXHJcbiAgICAgICAgbGF5ZXJzLFxyXG4gICAgICAgIE1hcENvbXBvbmVudCxcclxuICAgICAgICBkYXRhc2V0cyxcclxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcclxuICAgICAgICBtYXBib3hBcGlVcmwsXHJcbiAgICAgICAgbWFwQ29udHJvbHMsXHJcbiAgICAgICAgdWlTdGF0ZSxcclxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgZWRpdG9yLFxyXG4gICAgICAgIGluZGV4XHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgY29uc3QgbGF5ZXJzVG9SZW5kZXIgPSB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IodGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICBpZiAoIW1hcFN0eWxlLmJvdHRvbU1hcFN0eWxlKSB7XHJcbiAgICAgICAgLy8gc3R5bGUgbm90IHlldCBsb2FkZWRcclxuICAgICAgICByZXR1cm4gPGRpdiAvPjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWFwUHJvcHMgPSB7XHJcbiAgICAgICAgLi4ubWFwU3RhdGUsXHJcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxyXG4gICAgICAgIG1hcGJveEFwaVVybCxcclxuICAgICAgICBvblZpZXdwb3J0Q2hhbmdlOiB0aGlzLl9vblZpZXdwb3J0Q2hhbmdlLFxyXG4gICAgICAgIHRyYW5zZm9ybVJlcXVlc3RcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGlzRWRpdCA9IHVpU3RhdGUubWFwQ29udHJvbHMubWFwRHJhdy5hY3RpdmU7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRNYXBDb250YWluZXIgc3R5bGU9e01BUF9TVFlMRS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPE1hcENvbnRyb2xcclxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICBkcmFnUm90YXRlPXttYXBTdGF0ZS5kcmFnUm90YXRlfVxyXG4gICAgICAgICAgICBpc1NwbGl0PXtCb29sZWFuKG1hcExheWVycyl9XHJcbiAgICAgICAgICAgIGlzRXhwb3J0PXt0aGlzLnByb3BzLmlzRXhwb3J0fVxyXG4gICAgICAgICAgICBsYXllcnM9e2xheWVyc31cclxuICAgICAgICAgICAgbGF5ZXJzVG9SZW5kZXI9e2xheWVyc1RvUmVuZGVyfVxyXG4gICAgICAgICAgICBtYXBJbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIG1hcENvbnRyb2xzPXttYXBDb250cm9sc31cclxuICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICAgIHNjYWxlPXttYXBTdGF0ZS5zY2FsZSB8fCAxfVxyXG4gICAgICAgICAgICB0b3A9ezB9XHJcbiAgICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxyXG4gICAgICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlPXttYXBTdGF0ZUFjdGlvbnMudG9nZ2xlUGVyc3BlY3RpdmV9XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXA9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVTcGxpdE1hcH1cclxuICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcj17dGhpcy5faGFuZGxlTWFwVG9nZ2xlTGF5ZXJ9XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbD17dGhpcy5fdG9nZ2xlTWFwQ29udHJvbH1cclxuICAgICAgICAgICAgb25TZXRFZGl0b3JNb2RlPXt2aXNTdGF0ZUFjdGlvbnMuc2V0RWRpdG9yTW9kZX1cclxuICAgICAgICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5PXt2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TWFwQ29tcG9uZW50XHJcbiAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cclxuICAgICAgICAgICAga2V5PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgcmVmPXt0aGlzLl9zZXRNYXBib3hNYXB9XHJcbiAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZS5ib3R0b21NYXBTdHlsZX1cclxuICAgICAgICAgICAgZ2V0Q3Vyc29yPXt0aGlzLnByb3BzLmhvdmVySW5mbyA/ICgpID0+ICdwb2ludGVyJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uPXtUUkFOU0lUSU9OX0RVUkFUSU9OfVxyXG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMub25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJEZWNrT3ZlcmxheShsYXllcnNUb1JlbmRlcil9XHJcbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBib3hPdmVybGF5cyhsYXllcnNUb1JlbmRlcil9XHJcbiAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgIGZpbHRlcnM9e3RoaXMucG9seWdvbkZpbHRlcnModGhpcy5wcm9wcyl9XHJcbiAgICAgICAgICAgICAgaXNFbmFibGVkPXtpc0VkaXR9XHJcbiAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XHJcbiAgICAgICAgICAgICAgbGF5ZXJzVG9SZW5kZXI9e2xheWVyc1RvUmVuZGVyfVxyXG4gICAgICAgICAgICAgIG9uRGVsZXRlRmVhdHVyZT17dmlzU3RhdGVBY3Rpb25zLmRlbGV0ZUZlYXR1cmV9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3Zpc1N0YXRlQWN0aW9ucy5zZXRTZWxlY3RlZEZlYXR1cmV9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGU9e3Zpc1N0YXRlQWN0aW9ucy5zZXRGZWF0dXJlc31cclxuICAgICAgICAgICAgICBvblRvZ2dsZVBvbHlnb25GaWx0ZXI9e3Zpc1N0YXRlQWN0aW9ucy5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGlzRWRpdCA/ICdhbGwnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBlZGl0b3IudmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXBDb21wb25lbnQ+XHJcbiAgICAgICAgICB7bWFwU3R5bGUudG9wTWFwU3R5bGUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtNQVBfU1RZTEUudG9wfT5cclxuICAgICAgICAgICAgICA8TWFwQ29tcG9uZW50IHsuLi5tYXBQcm9wc30ga2V5PVwidG9wXCIgbWFwU3R5bGU9e21hcFN0eWxlLnRvcE1hcFN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGhpcy5fcmVuZGVyTWFwUG9wb3ZlcihsYXllcnNUb1JlbmRlcil9XHJcbiAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBNYXBDb250YWluZXIuZGlzcGxheU5hbWUgPSAnTWFwQ29udGFpbmVyJztcclxuXHJcbiAgcmV0dXJuIE1hcENvbnRhaW5lcjtcclxufVxyXG4iXX0=