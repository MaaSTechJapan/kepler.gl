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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hcC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiTUFQX1NUWUxFIiwiY29udGFpbmVyIiwiZGlzcGxheSIsInBvc2l0aW9uIiwidG9wIiwicG9pbnRlckV2ZW50cyIsIk1BUEJPWEdMX1NUWUxFX1VQREFURSIsIk1BUEJPWEdMX1JFTkRFUiIsIlRSQU5TSVRJT05fRFVSQVRJT04iLCJNYXBDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcFBvcG92ZXJGYWN0b3J5IiwiTWFwQ29udHJvbEZhY3RvcnkiLCJNYXBQb3BvdmVyIiwiTWFwQ29udHJvbCIsIk1hcENvbnRhaW5lciIsInByb3BzIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibWFwTGF5ZXJzIiwibGF5ZXJPcmRlciIsImxheWVyc1NlbGVjdG9yIiwibGF5ZXJEYXRhU2VsZWN0b3IiLCJtYXBMYXllcnNTZWxlY3RvciIsInJlZHVjZSIsImFjY3UiLCJsYXllciIsImlkeCIsImlkIiwic2hvdWxkUmVuZGVyTGF5ZXIiLCJfaXNWaXNpYmxlTWFwTGF5ZXIiLCJmaWx0ZXJzIiwiZmlsdGVyc1NlbGVjdG9yIiwiZmlsdGVyIiwiZiIsInR5cGUiLCJGSUxURVJfVFlQRVMiLCJwb2x5Z29uIiwibGF5ZXJPcmRlclNlbGVjdG9yIiwibGF5ZXJzVG9SZW5kZXJTZWxlY3RvciIsImdlbmVyYXRlTWFwYm94TGF5ZXJzIiwidmlzU3RhdGVBY3Rpb25zIiwib25MYXllckNsaWNrIiwiY29sb3JEb21haW4iLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVySWQiLCJpbmRleCIsIm1hcEluZGV4IiwidG9nZ2xlTGF5ZXJGb3JNYXAiLCJwcmV2aW91c0xheWVycyIsIl91cGRhdGVNYXBib3hMYXllcnMiLCJvbk1hcFN0eWxlTG9hZGVkIiwiX21hcCIsIm1hcGJveCIsImdldE1hcCIsIm9uIiwiX29uTWFwYm94U3R5bGVVcGRhdGUiLCJvbk1hcFJlbmRlciIsImdldE1hcGJveFJlZiIsImdsIiwibGF5ZXJCbGVuZGluZyIsIm92ZXJsYXlzIiwiZGF0YXNldHMiLCJob3ZlckluZm8iLCJjbGlja2VkIiwibWFwU3RhdGUiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImFuaW1hdGlvbkNvbmZpZyIsImRhdGEiLCJjb25maWciLCJkYXRhSWQiLCJncHVGaWx0ZXIiLCJvYmplY3RIb3ZlcmVkIiwibGF5ZXJDYWxsYmFja3MiLCJvblNldExheWVyRG9tYWluIiwidmFsIiwiX29uTGF5ZXJTZXREb21haW4iLCJsYXllck92ZXJsYXkiLCJyZW5kZXJMYXllciIsImNvbmNhdCIsInZpZXdTdGF0ZSIsIm9uVmlld1N0YXRlQ2hhbmdlIiwibWFwU3RhdGVBY3Rpb25zIiwidXBkYXRlTWFwIiwicGFuZWxJZCIsInVpU3RhdGVBY3Rpb25zIiwidG9nZ2xlTWFwQ29udHJvbCIsIl9kZWNrIiwib2ZmIiwibGF5ZXJzVG9SZW5kZXIiLCJtb3VzZVBvcyIsIm1vdXNlUG9zaXRpb24iLCJjb29yZGluYXRlIiwicGlubmVkIiwib2JqZWN0SW5mbyIsImxheWVySG92ZXJQcm9wIiwieCIsInkiLCJ0b29sdGlwIiwiZW5hYmxlZCIsInBpY2tlZCIsIm9iamVjdCIsIm92ZXJsYXkiLCJnZXRIb3ZlckRhdGEiLCJhbGxEYXRhIiwiZmllbGRzIiwiZmllbGRzVG9TaG93Iiwidmlld3BvcnQiLCJXZWJNZXJjYXRvclZpZXdwb3J0IiwibG5nTGF0IiwiX2dldEhvdmVyWFkiLCJCb29sZWFuIiwiX29uQ2xvc2VNYXBQb3BvdmVyIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JlZW5Db29yZCIsInByb2plY3QiLCJtYXBTdHlsZSIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwiZGVja0dsTGF5ZXJzIiwibGVuZ3RoIiwic2xpY2UiLCJyZXZlcnNlIiwib3ZlcmxheVR5cGUiLCJPVkVSTEFZX1RZUEUiLCJkZWNrZ2wiLCJfcmVuZGVyTGF5ZXIiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJwdXNoIiwiVGhyZWVEQnVpbGRpbmdMYXllciIsInRocmVlREJ1aWxkaW5nQ29sb3IiLCJ1cGRhdGVUcmlnZ2VycyIsImdldEZpbGxDb2xvciIsImRlY2tHbFByb3BzIiwiX29uQmVmb3JlUmVuZGVyIiwib25MYXllckhvdmVyIiwiY29tcCIsImRlY2siLCJtYXBib3hMYXllcnMiLCJtYXBib3hMYXllcnNTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJpc1N0eWxlTG9hZGVkIiwiTWFwQ29tcG9uZW50IiwibWFwQ29udHJvbHMiLCJ1aVN0YXRlIiwiZWRpdG9yIiwiYm90dG9tTWFwU3R5bGUiLCJtYXBQcm9wcyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsIm9uVmlld3BvcnRDaGFuZ2UiLCJfb25WaWV3cG9ydENoYW5nZSIsInRyYW5zZm9ybVJlcXVlc3QiLCJpc0VkaXQiLCJtYXBEcmF3IiwiYWN0aXZlIiwiZHJhZ1JvdGF0ZSIsImlzRXhwb3J0IiwicmVhZE9ubHkiLCJzY2FsZSIsInRvZ2dsZVBlcnNwZWN0aXZlIiwidG9nZ2xlU3BsaXRNYXAiLCJfaGFuZGxlTWFwVG9nZ2xlTGF5ZXIiLCJfdG9nZ2xlTWFwQ29udHJvbCIsInNldEVkaXRvck1vZGUiLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5IiwiX3NldE1hcGJveE1hcCIsInVuZGVmaW5lZCIsIm9uTW91c2VNb3ZlIiwiX3JlbmRlckRlY2tPdmVybGF5IiwiX3JlbmRlck1hcGJveE92ZXJsYXlzIiwicG9seWdvbkZpbHRlcnMiLCJkZWxldGVGZWF0dXJlIiwic2V0U2VsZWN0ZWRGZWF0dXJlIiwic2V0RmVhdHVyZXMiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXIiLCJ2aXNpYmxlIiwidG9wTWFwU3R5bGUiLCJfcmVuZGVyTWFwUG9wb3ZlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwiYW55IiwiYm9vbCIsIm9uTWFwVG9nZ2xlTGF5ZXIiLCJmdW5jIiwibnVtYmVyIiwiTWFwYm94R0xNYXAiLCJkaXNwbGF5TmFt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Yy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vLyBsaWJyYXJpZXNcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBNYXBib3hHTE1hcCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IERlY2tHTCBmcm9tICdAZGVjay5nbC9yZWFjdCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgV2ViTWVyY2F0b3JWaWV3cG9ydCBmcm9tICd2aWV3cG9ydC1tZXJjYXRvci1wcm9qZWN0JztcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IE1hcFBvcG92ZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvbWFwL21hcC1wb3BvdmVyJztcbmltcG9ydCBNYXBDb250cm9sRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL21hcC9tYXAtY29udHJvbCc7XG5pbXBvcnQge1N0eWxlZE1hcENvbnRhaW5lcn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yL2VkaXRvcic7XG5cbi8vIHV0aWxzXG5pbXBvcnQge2dlbmVyYXRlTWFwYm94TGF5ZXJzLCB1cGRhdGVNYXBib3hMYXllcnN9IGZyb20gJ2xheWVycy9tYXBib3gtdXRpbHMnO1xuaW1wb3J0IHtPVkVSTEFZX1RZUEV9IGZyb20gJ2xheWVycy9iYXNlLWxheWVyJztcbmltcG9ydCB7c2V0TGF5ZXJCbGVuZGluZ30gZnJvbSAndXRpbHMvZ2wtdXRpbHMnO1xuaW1wb3J0IHt0cmFuc2Zvcm1SZXF1ZXN0fSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LXV0aWxzJztcblxuLy8gZGVmYXVsdC1zZXR0aW5nc1xuaW1wb3J0IFRocmVlREJ1aWxkaW5nTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy8zZC1idWlsZGluZy1sYXllci8zZC1idWlsZGluZy1sYXllcic7XG5pbXBvcnQge0ZJTFRFUl9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBNQVBfU1RZTEUgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRvcDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn07XG5cbmNvbnN0IE1BUEJPWEdMX1NUWUxFX1VQREFURSA9ICdzdHlsZS5sb2FkJztcbmNvbnN0IE1BUEJPWEdMX1JFTkRFUiA9ICdyZW5kZXInO1xuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDA7XG5cbk1hcENvbnRhaW5lckZhY3RvcnkuZGVwcyA9IFtNYXBQb3BvdmVyRmFjdG9yeSwgTWFwQ29udHJvbEZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBDb250YWluZXJGYWN0b3J5KE1hcFBvcG92ZXIsIE1hcENvbnRyb2wpIHtcbiAgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgLy8gcmVxdWlyZWRcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyT3JkZXI6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB1aVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbW91c2VQb3M6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdWlTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgICAgLy8gb3B0aW9uYWxcbiAgICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzRXhwb3J0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGNsaWNrZWQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBob3ZlckluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBvbk1hcFRvZ2dsZUxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uTWFwU3R5bGVMb2FkZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25NYXBSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZ2V0TWFwYm94UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBNYXBDb21wb25lbnQ6IE1hcGJveEdMTWFwLFxuICAgICAgZGVja0dsUHJvcHM6IHt9LFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IHtcbiAgICAgICAgLy8gW2xheWVycy5pZF06IG1hcGJveExheWVyQ29uZmlnXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kZWNrID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIHVuYmluZCBtYXBib3hnbCBldmVudCBsaXN0ZW5lclxuICAgICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICB0aGlzLl9tYXAub2ZmKE1BUEJPWEdMX1NUWUxFX1VQREFURSk7XG4gICAgICAgIHRoaXMuX21hcC5vZmYoTUFQQk9YR0xfUkVOREVSKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXllcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVycztcbiAgICBsYXllckRhdGFTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyRGF0YTtcbiAgICBtYXBMYXllcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLm1hcExheWVycztcbiAgICBsYXllck9yZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllck9yZGVyO1xuICAgIGxheWVyc1RvUmVuZGVyU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJzU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxuICAgICAgdGhpcy5tYXBMYXllcnNTZWxlY3RvcixcbiAgICAgIC8vIHtbaWRdOiB0cnVlIFxcIGZhbHNlfVxuICAgICAgKGxheWVycywgbGF5ZXJEYXRhLCBtYXBMYXllcnMpID0+XG4gICAgICAgIGxheWVycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjY3UsIGxheWVyLCBpZHgpID0+ICh7XG4gICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgW2xheWVyLmlkXTpcbiAgICAgICAgICAgICAgbGF5ZXIuc2hvdWxkUmVuZGVyTGF5ZXIobGF5ZXJEYXRhW2lkeF0pICYmIHRoaXMuX2lzVmlzaWJsZU1hcExheWVyKGxheWVyLCBtYXBMYXllcnMpXG4gICAgICAgICAgfSksXG4gICAgICAgICAge31cbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBmaWx0ZXJzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJzO1xuICAgIHBvbHlnb25GaWx0ZXJzID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWx0ZXJzU2VsZWN0b3IsIGZpbHRlcnMgPT5cbiAgICAgIGZpbHRlcnMuZmlsdGVyKGYgPT4gZi50eXBlID09PSBGSUxURVJfVFlQRVMucG9seWdvbilcbiAgICApO1xuXG4gICAgbWFwYm94TGF5ZXJzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJzU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllck9yZGVyU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IsXG4gICAgICBnZW5lcmF0ZU1hcGJveExheWVyc1xuICAgICk7XG5cbiAgICAvKiBjb21wb25lbnQgcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICBfaXNWaXNpYmxlTWFwTGF5ZXIobGF5ZXIsIG1hcExheWVycykge1xuICAgICAgLy8gaWYgbGF5ZXIuaWQgaXMgbm90IGluIG1hcExheWVycywgZG9uJ3QgcmVuZGVyIGl0XG4gICAgICByZXR1cm4gIW1hcExheWVycyB8fCAobWFwTGF5ZXJzICYmIG1hcExheWVyc1tsYXllci5pZF0pO1xuICAgIH1cblxuICAgIF9vbkNsb3NlTWFwUG9wb3ZlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJDbGljayhudWxsKTtcbiAgICB9O1xuXG4gICAgX29uTGF5ZXJTZXREb21haW4gPSAoaWR4LCBjb2xvckRvbWFpbikgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllcnNbaWR4XSwge1xuICAgICAgICBjb2xvckRvbWFpblxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9oYW5kbGVNYXBUb2dnbGVMYXllciA9IGxheWVySWQgPT4ge1xuICAgICAgY29uc3Qge2luZGV4OiBtYXBJbmRleCA9IDAsIHZpc1N0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUxheWVyRm9yTWFwKG1hcEluZGV4LCBsYXllcklkKTtcbiAgICB9O1xuXG4gICAgX29uTWFwYm94U3R5bGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAvLyBmb3JjZSByZWZyZXNoIG1hcGJveGdsIGxheWVyc1xuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IHt9O1xuICAgICAgdGhpcy5fdXBkYXRlTWFwYm94TGF5ZXJzKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk1hcFN0eWxlTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCh0aGlzLl9tYXApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfc2V0TWFwYm94TWFwID0gbWFwYm94ID0+IHtcbiAgICAgIGlmICghdGhpcy5fbWFwICYmIG1hcGJveCkge1xuICAgICAgICB0aGlzLl9tYXAgPSBtYXBib3guZ2V0TWFwKCk7XG4gICAgICAgIC8vIGkgbm90aWNlZCBpbiBjZXJ0YWluIGNvbnRleHQgd2UgZG9uJ3QgYWNjZXNzIHRoZSBhY3R1YWwgbWFwIGVsZW1lbnRcbiAgICAgICAgaWYgKCF0aGlzLl9tYXApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmluZCBtYXBib3hnbCBldmVudCBsaXN0ZW5lclxuICAgICAgICB0aGlzLl9tYXAub24oTUFQQk9YR0xfU1RZTEVfVVBEQVRFLCB0aGlzLl9vbk1hcGJveFN0eWxlVXBkYXRlKTtcblxuICAgICAgICB0aGlzLl9tYXAub24oTUFQQk9YR0xfUkVOREVSLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uTWFwUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTWFwUmVuZGVyKHRoaXMuX21hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuZ2V0TWFwYm94UmVmKSB7XG4gICAgICAgIC8vIFRoZSBwYXJlbnQgY29tcG9uZW50IGNhbiBnYWluIGFjY2VzcyB0byBvdXIgTWFwYm94R2xNYXAgYnlcbiAgICAgICAgLy8gcHJvdmlkaW5nIHRoaXMgY2FsbGJhY2suIE5vdGUgdGhhdCAnbWFwYm94JyB3aWxsIGJlIG51bGwgd2hlbiB0aGVcbiAgICAgICAgLy8gcmVmIGlzIHVuc2V0IChlLmcuIHdoZW4gYSBzcGxpdCBtYXAgaXMgY2xvc2VkKS5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRNYXBib3hSZWYobWFwYm94LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX29uQmVmb3JlUmVuZGVyID0gKHtnbH0pID0+IHtcbiAgICAgIHNldExheWVyQmxlbmRpbmcoZ2wsIHRoaXMucHJvcHMubGF5ZXJCbGVuZGluZyk7XG4gICAgfTtcblxuICAgIC8qIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb25zICovXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gICAgX3JlbmRlck1hcFBvcG92ZXIobGF5ZXJzVG9SZW5kZXIpIHtcbiAgICAgIC8vIFRPRE86IG1vdmUgdGhpcyBpbnRvIHJlZHVjZXIgc28gaXQgY2FuIGJlIHRlc3RlZFxuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbW91c2VQb3M6IHttb3VzZVBvc2l0aW9uLCBjb29yZGluYXRlLCBwaW5uZWR9XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCFtb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLy8gaWYgY2xpY2tlZCBzb21ldGhpbmcsIGlnbm9yZSBob3ZlciBiZWhhdmlvclxuICAgICAgY29uc3Qgb2JqZWN0SW5mbyA9IGNsaWNrZWQgfHwgaG92ZXJJbmZvO1xuICAgICAgbGV0IGxheWVySG92ZXJQcm9wID0gbnVsbDtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHt4OiBtb3VzZVBvc2l0aW9uWzBdLCB5OiBtb3VzZVBvc2l0aW9uWzFdfTtcblxuICAgICAgaWYgKGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuZW5hYmxlZCAmJiBvYmplY3RJbmZvICYmIG9iamVjdEluZm8ucGlja2VkKSB7XG4gICAgICAgIC8vIGlmIGFueXRoaW5nIGhvdmVyZWRcbiAgICAgICAgY29uc3Qge29iamVjdCwgbGF5ZXI6IG92ZXJsYXl9ID0gb2JqZWN0SW5mbztcblxuICAgICAgICAvLyBkZWNrZ2wgbGF5ZXIgdG8ga2VwbGVyLWdsIGxheWVyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW292ZXJsYXkucHJvcHMuaWR4XTtcblxuICAgICAgICBpZiAobGF5ZXIuZ2V0SG92ZXJEYXRhICYmIGxheWVyc1RvUmVuZGVyW2xheWVyLmlkXSkge1xuICAgICAgICAgIC8vIGlmIGxheWVyIGlzIHZpc2libGUgYW5kIGhhdmUgaG92ZXJlZCBkYXRhXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29uZmlnOiB7ZGF0YUlkfVxuICAgICAgICAgIH0gPSBsYXllcjtcbiAgICAgICAgICBjb25zdCB7YWxsRGF0YSwgZmllbGRzfSA9IGRhdGFzZXRzW2RhdGFJZF07XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGxheWVyLmdldEhvdmVyRGF0YShvYmplY3QsIGFsbERhdGEpO1xuICAgICAgICAgIGNvbnN0IGZpZWxkc1RvU2hvdyA9IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdO1xuXG4gICAgICAgICAgbGF5ZXJIb3ZlclByb3AgPSB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgbGF5ZXJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5uZWQgfHwgY2xpY2tlZCkge1xuICAgICAgICAvLyBwcm9qZWN0IGxuZ2xhdCB0byBzY3JlZW4gc28gdGhhdCB0b29sdGlwIGZvbGxvd3MgdGhlIG9iamVjdCBvbiB6b29tXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gbmV3IFdlYk1lcmNhdG9yVmlld3BvcnQobWFwU3RhdGUpO1xuICAgICAgICBjb25zdCBsbmdMYXQgPSBjbGlja2VkID8gY2xpY2tlZC5sbmdMYXQgOiBwaW5uZWQuY29vcmRpbmF0ZTtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLl9nZXRIb3ZlclhZKHZpZXdwb3J0LCBsbmdMYXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TWFwUG9wb3ZlclxuICAgICAgICAgICAgey4uLnBvc2l0aW9ufVxuICAgICAgICAgICAgbGF5ZXJIb3ZlclByb3A9e2xheWVySG92ZXJQcm9wfVxuICAgICAgICAgICAgY29vcmRpbmF0ZT17XG4gICAgICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiAoKHBpbm5lZCB8fCB7fSkuY29vcmRpbmF0ZSB8fCBjb29yZGluYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJlZXplZD17Qm9vbGVhbihjbGlja2VkIHx8IHBpbm5lZCl9XG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9vbkNsb3NlTWFwUG9wb3Zlcn1cbiAgICAgICAgICAgIG1hcFc9e21hcFN0YXRlLndpZHRofVxuICAgICAgICAgICAgbWFwSD17bWFwU3RhdGUuaGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxuICAgIF9nZXRIb3ZlclhZKHZpZXdwb3J0LCBsbmdMYXQpIHtcbiAgICAgIGNvbnN0IHNjcmVlbkNvb3JkID0gIXZpZXdwb3J0IHx8ICFsbmdMYXQgPyBudWxsIDogdmlld3BvcnQucHJvamVjdChsbmdMYXQpO1xuICAgICAgcmV0dXJuIHNjcmVlbkNvb3JkICYmIHt4OiBzY3JlZW5Db29yZFswXSwgeTogc2NyZWVuQ29vcmRbMV19O1xuICAgIH1cblxuICAgIF9yZW5kZXJMYXllciA9IChvdmVybGF5cywgaWR4KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkLFxuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGFuaW1hdGlvbkNvbmZpZ1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBsYXllciA9IGxheWVyc1tpZHhdO1xuICAgICAgY29uc3QgZGF0YSA9IGxheWVyRGF0YVtpZHhdO1xuICAgICAgY29uc3Qge2dwdUZpbHRlcn0gPSBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSB8fCB7fTtcblxuICAgICAgY29uc3Qgb2JqZWN0SG92ZXJlZCA9IGNsaWNrZWQgfHwgaG92ZXJJbmZvO1xuICAgICAgY29uc3QgbGF5ZXJDYWxsYmFja3MgPSB7XG4gICAgICAgIG9uU2V0TGF5ZXJEb21haW46IHZhbCA9PiB0aGlzLl9vbkxheWVyU2V0RG9tYWluKGlkeCwgdmFsKVxuICAgICAgfTtcblxuICAgICAgLy8gTGF5ZXIgaXMgTGF5ZXIgY2xhc3NcbiAgICAgIGNvbnN0IGxheWVyT3ZlcmxheSA9IGxheWVyLnJlbmRlckxheWVyKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZ3B1RmlsdGVyLFxuICAgICAgICBpZHgsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBsYXllckNhbGxiYWNrcyxcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIGFuaW1hdGlvbkNvbmZpZyxcbiAgICAgICAgb2JqZWN0SG92ZXJlZFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBvdmVybGF5cy5jb25jYXQobGF5ZXJPdmVybGF5IHx8IFtdKTtcbiAgICB9O1xuXG4gICAgX3JlbmRlckRlY2tPdmVybGF5KGxheWVyc1RvUmVuZGVyKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbGF5ZXJEYXRhLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG1hcGJveEFwaVVybFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGxldCBkZWNrR2xMYXllcnMgPSBbXTtcbiAgICAgIC8vIHdhaXQgdW50aWwgZGF0YSBpcyByZWFkeSBiZWZvcmUgcmVuZGVyIGRhdGEgbGF5ZXJzXG4gICAgICBpZiAobGF5ZXJEYXRhICYmIGxheWVyRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gbGFzdCBsYXllciByZW5kZXIgZmlyc3RcbiAgICAgICAgZGVja0dsTGF5ZXJzID0gbGF5ZXJPcmRlclxuICAgICAgICAgIC5zbGljZSgpXG4gICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICBpZHggPT4gbGF5ZXJzW2lkeF0ub3ZlcmxheVR5cGUgPT09IE9WRVJMQVlfVFlQRS5kZWNrZ2wgJiYgbGF5ZXJzVG9SZW5kZXJbbGF5ZXJzW2lkeF0uaWRdXG4gICAgICAgICAgKVxuICAgICAgICAgIC5yZWR1Y2UodGhpcy5fcmVuZGVyTGF5ZXIsIFtdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcFN0eWxlLnZpc2libGVMYXllckdyb3Vwc1snM2QgYnVpbGRpbmcnXSkge1xuICAgICAgICBkZWNrR2xMYXllcnMucHVzaChcbiAgICAgICAgICBuZXcgVGhyZWVEQnVpbGRpbmdMYXllcih7XG4gICAgICAgICAgICBpZDogJ19rZXBsZXJnbF8zZC1idWlsZGluZycsXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgICAgIHRocmVlREJ1aWxkaW5nQ29sb3I6IG1hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3IsXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2Vyczoge1xuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IG1hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGVja0dMXG4gICAgICAgICAgey4uLnRoaXMucHJvcHMuZGVja0dsUHJvcHN9XG4gICAgICAgICAgdmlld1N0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgICBpZD1cImRlZmF1bHQtZGVja2dsLW92ZXJsYXlcIlxuICAgICAgICAgIGxheWVycz17ZGVja0dsTGF5ZXJzfVxuICAgICAgICAgIG9uQmVmb3JlUmVuZGVyPXt0aGlzLl9vbkJlZm9yZVJlbmRlcn1cbiAgICAgICAgICBvbkhvdmVyPXt2aXNTdGF0ZUFjdGlvbnMub25MYXllckhvdmVyfVxuICAgICAgICAgIG9uQ2xpY2s9e3Zpc1N0YXRlQWN0aW9ucy5vbkxheWVyQ2xpY2t9XG4gICAgICAgICAgcmVmPXtjb21wID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wICYmIGNvbXAuZGVjayAmJiAhdGhpcy5fZGVjaykge1xuICAgICAgICAgICAgICB0aGlzLl9kZWNrID0gY29tcC5kZWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIF91cGRhdGVNYXBib3hMYXllcnMoKSB7XG4gICAgICBjb25zdCBtYXBib3hMYXllcnMgPSB0aGlzLm1hcGJveExheWVyc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhtYXBib3hMYXllcnMpLmxlbmd0aCAmJiAhT2JqZWN0LmtleXModGhpcy5wcmV2aW91c0xheWVycykubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlTWFwYm94TGF5ZXJzKHRoaXMuX21hcCwgbWFwYm94TGF5ZXJzLCB0aGlzLnByZXZpb3VzTGF5ZXJzKTtcblxuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IG1hcGJveExheWVycztcbiAgICB9XG5cbiAgICBfcmVuZGVyTWFwYm94T3ZlcmxheXMoKSB7XG4gICAgICBpZiAodGhpcy5fbWFwICYmIHRoaXMuX21hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWFwYm94TGF5ZXJzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX29uVmlld3BvcnRDaGFuZ2UgPSB2aWV3U3RhdGUgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uVmlld1N0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25WaWV3U3RhdGVDaGFuZ2Uodmlld1N0YXRlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMubWFwU3RhdGVBY3Rpb25zLnVwZGF0ZU1hcCh2aWV3U3RhdGUpO1xuICAgIH07XG5cbiAgICBfdG9nZ2xlTWFwQ29udHJvbCA9IHBhbmVsSWQgPT4ge1xuICAgICAgY29uc3Qge2luZGV4LCB1aVN0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICB1aVN0YXRlQWN0aW9ucy50b2dnbGVNYXBDb250cm9sKHBhbmVsSWQsIGluZGV4KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwTGF5ZXJzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIE1hcENvbXBvbmVudCxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcENvbnRyb2xzLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIGVkaXRvcixcbiAgICAgICAgaW5kZXhcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCBsYXllcnNUb1JlbmRlciA9IHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgaWYgKCFtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSkge1xuICAgICAgICAvLyBzdHlsZSBub3QgeWV0IGxvYWRlZFxuICAgICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwUHJvcHMgPSB7XG4gICAgICAgIC4uLm1hcFN0YXRlLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U6IHRoaXMuX29uVmlld3BvcnRDaGFuZ2UsXG4gICAgICAgIHRyYW5zZm9ybVJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlzRWRpdCA9IHVpU3RhdGUubWFwQ29udHJvbHMubWFwRHJhdy5hY3RpdmU7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNYXBDb250YWluZXIgc3R5bGU9e01BUF9TVFlMRS5jb250YWluZXJ9PlxuICAgICAgICAgIDxNYXBDb250cm9sXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBkcmFnUm90YXRlPXttYXBTdGF0ZS5kcmFnUm90YXRlfVxuICAgICAgICAgICAgaXNTcGxpdD17Qm9vbGVhbihtYXBMYXllcnMpfVxuICAgICAgICAgICAgaXNFeHBvcnQ9e3RoaXMucHJvcHMuaXNFeHBvcnR9XG4gICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgIGxheWVyc1RvUmVuZGVyPXtsYXllcnNUb1JlbmRlcn1cbiAgICAgICAgICAgIG1hcEluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIG1hcENvbnRyb2xzPXttYXBDb250cm9sc31cbiAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxuICAgICAgICAgICAgc2NhbGU9e21hcFN0YXRlLnNjYWxlIHx8IDF9XG4gICAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmU9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVQZXJzcGVjdGl2ZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXA9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVTcGxpdE1hcH1cbiAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e3RoaXMuX2hhbmRsZU1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgb25Ub2dnbGVNYXBDb250cm9sPXt0aGlzLl90b2dnbGVNYXBDb250cm9sfVxuICAgICAgICAgICAgb25TZXRFZGl0b3JNb2RlPXt2aXNTdGF0ZUFjdGlvbnMuc2V0RWRpdG9yTW9kZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eT17dmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUVkaXRvclZpc2liaWxpdHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWFwQ29tcG9uZW50XG4gICAgICAgICAgICB7Li4ubWFwUHJvcHN9XG4gICAgICAgICAgICBrZXk9XCJib3R0b21cIlxuICAgICAgICAgICAgcmVmPXt0aGlzLl9zZXRNYXBib3hNYXB9XG4gICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGUuYm90dG9tTWFwU3R5bGV9XG4gICAgICAgICAgICBnZXRDdXJzb3I9e3RoaXMucHJvcHMuaG92ZXJJbmZvID8gKCkgPT4gJ3BvaW50ZXInIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uPXtUUkFOU0lUSU9OX0RVUkFUSU9OfVxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLm9uTW91c2VNb3ZlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJEZWNrT3ZlcmxheShsYXllcnNUb1JlbmRlcil9XG4gICAgICAgICAgICB7dGhpcy5fcmVuZGVyTWFwYm94T3ZlcmxheXMobGF5ZXJzVG9SZW5kZXIpfVxuICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgICAgICAgIGZpbHRlcnM9e3RoaXMucG9seWdvbkZpbHRlcnModGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgIGlzRW5hYmxlZD17aXNFZGl0fVxuICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgICAgbGF5ZXJzVG9SZW5kZXI9e2xheWVyc1RvUmVuZGVyfVxuICAgICAgICAgICAgICBvbkRlbGV0ZUZlYXR1cmU9e3Zpc1N0YXRlQWN0aW9ucy5kZWxldGVGZWF0dXJlfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dmlzU3RhdGVBY3Rpb25zLnNldFNlbGVjdGVkRmVhdHVyZX1cbiAgICAgICAgICAgICAgb25VcGRhdGU9e3Zpc1N0YXRlQWN0aW9ucy5zZXRGZWF0dXJlc31cbiAgICAgICAgICAgICAgb25Ub2dnbGVQb2x5Z29uRmlsdGVyPXt2aXNTdGF0ZUFjdGlvbnMuc2V0UG9seWdvbkZpbHRlckxheWVyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGlzRWRpdCA/ICdhbGwnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGVkaXRvci52aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01hcENvbXBvbmVudD5cbiAgICAgICAgICB7bWFwU3R5bGUudG9wTWFwU3R5bGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFQX1NUWUxFLnRvcH0+XG4gICAgICAgICAgICAgIDxNYXBDb21wb25lbnQgey4uLm1hcFByb3BzfSBrZXk9XCJ0b3BcIiBtYXBTdHlsZT17bWFwU3R5bGUudG9wTWFwU3R5bGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBQb3BvdmVyKGxheWVyc1RvUmVuZGVyKX1cbiAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIE1hcENvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdNYXBDb250YWluZXInO1xuXG4gIHJldHVybiBNYXBDb250YWluZXI7XG59XG4iXX0=