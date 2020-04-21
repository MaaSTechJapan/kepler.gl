"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _window = require("global/window");

var _redux = require("redux");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _keplerglConnect = require("../connect/keplergl-connect");

var VisStateActions = _interopRequireWildcard(require("../actions/vis-state-actions"));

var MapStateActions = _interopRequireWildcard(require("../actions/map-state-actions"));

var MapStyleActions = _interopRequireWildcard(require("../actions/map-style-actions"));

var UIStateActions = _interopRequireWildcard(require("../actions/ui-state-actions"));

var ProviderActions = _interopRequireWildcard(require("../actions/provider-actions"));

var _defaultSettings = require("../constants/default-settings");

var _userFeedbacks = require("../constants/user-feedbacks");

var _sidePanel = _interopRequireDefault(require("./side-panel"));

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _bottomWidget = _interopRequireDefault(require("./bottom-widget"));

var _modalContainer = _interopRequireDefault(require("./modal-container"));

var _plotContainer = _interopRequireDefault(require("./plot-container"));

var _notificationPanel = _interopRequireDefault(require("./notification-panel"));

var _utils = require("../utils/utils");

var _mapboxUtils = require("../utils/mapbox-utils");

var _base = require("../styles/base");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Maybe we should think about exporting this or creating a variable
// as part of the base.js theme
var GlobalStyle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.labelColor;
});

KeplerGlFactory.deps = [_bottomWidget["default"], _mapContainer["default"], _modalContainer["default"], _sidePanel["default"], _plotContainer["default"], _notificationPanel["default"]];

function KeplerGlFactory(BottomWidget, MapContainer, ModalContainer, SidePanel, PlotContainer, NotificationPanel) {
  var KeplerGL = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(KeplerGL, _Component);

    var _super = _createSuper(KeplerGL);

    function KeplerGL() {
      var _this;

      (0, _classCallCheck2["default"])(this, KeplerGL);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
        return props.theme;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableThemeSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
        return (0, _typeof2["default"])(theme) === 'object' ? _objectSpread({}, _base.theme, {}, theme) : theme === _defaultSettings.THEME.light ? _base.themeLT : theme === _defaultSettings.THEME.base ? _base.themeBS : theme;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableProviders", (0, _reselect.createSelector)(function (props) {
        return props.cloudProviders;
      }, function (providers) {
        return Array.isArray(providers) && providers.length ? {
          hasStorage: providers.some(function (p) {
            return p.hasPrivateStorage();
          }),
          hasShare: providers.some(function (p) {
            return p.hasSharingUrl();
          })
        } : {};
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_loadMapStyle", function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles); // add id to custom map styles if not given

        var customStyles = (_this.props.mapStyles || []).map(function (ms) {
          return _objectSpread({}, ms, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });
        var allStyles = [].concat((0, _toConsumableArray2["default"])(customStyles), (0, _toConsumableArray2["default"])(defaultStyles)).reduce(function (accu, style) {
          var hasStyleObject = style.style && (0, _typeof2["default"])(style.style) === 'object';
          accu[hasStyleObject ? 'toLoad' : 'toRequest'][style.id] = style;
          return accu;
        }, {
          toLoad: {},
          toRequest: {}
        });

        _this.props.mapStyleActions.loadMapStyles(allStyles.toLoad);

        _this.props.mapStyleActions.requestMapStyles(allStyles.toRequest);
      });
      return _this;
    }

    (0, _createClass2["default"])(KeplerGL, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._validateMapboxToken();

        this._loadMapStyle(this.props.mapStyles);

        this._handleResize(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if ( // if dimension props has changed
        this.props.height !== prevProps.height || this.props.width !== prevProps.width || // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        this.props.height !== this.props.mapState.height) {
          this._handleResize(this.props);
        }
      }
    }, {
      key: "_validateMapboxToken",

      /* private methods */
      value: function _validateMapboxToken() {
        var mapboxApiAccessToken = this.props.mapboxApiAccessToken;

        if (!(0, _mapboxUtils.validateToken)(mapboxApiAccessToken)) {
          _window.console.warn(_userFeedbacks.MISSING_MAPBOX_TOKEN);
        }
      }
    }, {
      key: "_handleResize",
      value: function _handleResize(_ref) {
        var width = _ref.width,
            height = _ref.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');

          return;
        }

        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            appName = _this$props.appName,
            version = _this$props.version,
            appWebsite = _this$props.appWebsite,
            onSaveMap = _this$props.onSaveMap,
            onViewStateChange = _this$props.onViewStateChange,
            width = _this$props.width,
            height = _this$props.height,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            getMapboxRef = _this$props.getMapboxRef,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            providerState = _this$props.providerState,
            visStateActions = _this$props.visStateActions,
            mapStateActions = _this$props.mapStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            providerActions = _this$props.providerActions;
        var availableProviders = this.availableProviders(this.props);
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked,
            mousePos = visState.mousePos,
            animationConfig = visState.animationConfig,
            mapInfo = visState.mapInfo;
        var notificationPanelFields = {
          removeNotification: uiStateActions.removeNotification,
          notifications: uiState.notifications
        };
        var sideFields = {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          mapInfo: mapInfo,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: this.props.sidePanelWidth,
          availableProviders: availableProviders,
          mapSaved: providerState.mapSaved
        };
        var mapFields = {
          datasets: datasets,
          getMapboxRef: getMapboxRef,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapState: mapState,
          uiState: uiState,
          editor: visState.editor,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          filters: filters,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          mousePos: mousePos,
          readOnly: uiState.readOnly,
          onViewStateChange: onViewStateChange,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions,
          animationConfig: animationConfig
        };
        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);
        var mapContainers = !isSplit ? [/*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: null
        }))] : splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers
          }));
        });
        var isExporting = uiState.currentModal === _defaultSettings.EXPORT_IMAGE_ID || uiState.currentModal === _defaultSettings.SAVE_MAP_ID || uiState.currentModal === _defaultSettings.SHARE_MAP_ID || uiState.currentModal === _defaultSettings.OVERWRITE_MAP_ID;
        var theme = this.availableThemeSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/_react["default"].createElement(GlobalStyle, {
          width: width,
          height: height,
          className: "kepler-gl",
          id: "kepler-gl__".concat(id),
          ref: this.root
        }, /*#__PURE__*/_react["default"].createElement(NotificationPanel, notificationPanelFields), !uiState.readOnly && /*#__PURE__*/_react["default"].createElement(SidePanel, sideFields), /*#__PURE__*/_react["default"].createElement("div", {
          className: "maps",
          style: {
            display: 'flex'
          }
        }, mapContainers), isExporting && /*#__PURE__*/_react["default"].createElement(PlotContainer, {
          width: width,
          height: height,
          exportImageSetting: uiState.exportImage,
          mapFields: mapFields,
          addNotification: uiStateActions.addNotification,
          startExportingImage: uiStateActions.startExportingImage,
          setExportImageDataUri: uiStateActions.setExportImageDataUri,
          setExportImageError: uiStateActions.setExportImageError
        }), /*#__PURE__*/_react["default"].createElement(BottomWidget, {
          filters: filters,
          datasets: datasets,
          uiState: uiState,
          layers: layers,
          animationConfig: animationConfig,
          visStateActions: visStateActions,
          sidePanelWidth: uiState.readOnly ? 0 : this.props.sidePanelWidth + _defaultSettings.DIMENSIONS.sidePanel.margin.left,
          containerW: containerW
        }), /*#__PURE__*/_react["default"].createElement(ModalContainer, {
          mapStyle: mapStyle,
          visState: visState,
          mapState: mapState,
          uiState: uiState,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          mapStyleActions: mapStyleActions,
          providerActions: providerActions,
          rootNode: this.root.current,
          containerW: containerW,
          containerH: mapState.height,
          providerState: this.props.providerState // User defined cloud provider props
          ,
          cloudProviders: this.props.cloudProviders,
          onExportToCloudSuccess: this.props.onExportToCloudSuccess,
          onLoadCloudMapSuccess: this.props.onLoadCloudMapSuccess,
          onLoadCloudMapError: this.props.onLoadCloudMapError,
          onExportToCloudError: this.props.onExportToCloudError
        })));
      }
    }]);
    return KeplerGL;
  }(_react.Component);

  (0, _defineProperty2["default"])(KeplerGL, "defaultProps", {
    mapStyles: [],
    mapStylesReplaceDefault: false,
    mapboxApiUrl: _defaultSettings.DEFAULT_MAPBOX_API_URL,
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION,
    sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width,
    theme: {},
    cloudProviders: []
  });
  return (0, _keplerglConnect.connect)(mapStateToProps, makeMapDispatchToProps)((0, _styledComponents.withTheme)(KeplerGL));
}

function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 ? arguments[1] : undefined;
  return _objectSpread({}, props, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState,
    providerState: state.providerState
  });
}

var defaultUserActions = {};

var getDispatch = function getDispatch(dispatch) {
  return dispatch;
};

var getUserActions = function getUserActions(dispatch, props) {
  return props.actions || defaultUserActions;
};

function makeGetActionCreators() {
  return (0, _reselect.createSelector)([getDispatch, getUserActions], function (dispatch, userActions) {
    var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions, ProviderActions].map(function (actions) {
      return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
    }),
        _map2 = (0, _slicedToArray2["default"])(_map, 5),
        visStateActions = _map2[0],
        mapStateActions = _map2[1],
        mapStyleActions = _map2[2],
        uiStateActions = _map2[3],
        providerActions = _map2[4];

    return {
      visStateActions: visStateActions,
      mapStateActions: mapStateActions,
      mapStyleActions: mapStyleActions,
      uiStateActions: uiStateActions,
      providerActions: providerActions,
      dispatch: dispatch
    };
  });
}

function makeMapDispatchToProps() {
  var getActionCreators = makeGetActionCreators();

  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var groupedActionCreators = getActionCreators(dispatch, ownProps);
    return _objectSpread({}, groupedActionCreators, {
      dispatch: dispatch
    });
  };

  return mapDispatchToProps;
}
/**
 * Override default kepler.gl actions with user defined actions using the same key
 */


function mergeActions(actions, userActions) {
  var overrides = {};

  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return _objectSpread({}, actions, {}, overrides);
}

var _default = KeplerGlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxhYmVsQ29sb3IiLCJLZXBsZXJHbEZhY3RvcnkiLCJkZXBzIiwiQm90dG9tV2lkZ2V0RmFjdG9yeSIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJNb2RhbENvbnRhaW5lckZhY3RvcnkiLCJTaWRlUGFuZWxGYWN0b3J5IiwiUGxvdENvbnRhaW5lckZhY3RvcnkiLCJOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkiLCJCb3R0b21XaWRnZXQiLCJNYXBDb250YWluZXIiLCJNb2RhbENvbnRhaW5lciIsIlNpZGVQYW5lbCIsIlBsb3RDb250YWluZXIiLCJOb3RpZmljYXRpb25QYW5lbCIsIktlcGxlckdMIiwidGhlbWVTZWxlY3RvciIsImJhc2ljVGhlbWUiLCJUSEVNRSIsImxpZ2h0IiwidGhlbWVMVCIsImJhc2UiLCJ0aGVtZUJTIiwiY2xvdWRQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJoYXNTdG9yYWdlIiwic29tZSIsInAiLCJoYXNQcml2YXRlU3RvcmFnZSIsImhhc1NoYXJlIiwiaGFzU2hhcmluZ1VybCIsImRlZmF1bHRTdHlsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXBTdHlsZSIsIm1hcFN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1hcCIsIm1zIiwiaWQiLCJhbGxTdHlsZXMiLCJyZWR1Y2UiLCJhY2N1Iiwic3R5bGUiLCJoYXNTdHlsZU9iamVjdCIsInRvTG9hZCIsInRvUmVxdWVzdCIsIm1hcFN0eWxlQWN0aW9ucyIsImxvYWRNYXBTdHlsZXMiLCJyZXF1ZXN0TWFwU3R5bGVzIiwiX3ZhbGlkYXRlTWFwYm94VG9rZW4iLCJfbG9hZE1hcFN0eWxlIiwiX2hhbmRsZVJlc2l6ZSIsInByZXZQcm9wcyIsImhlaWdodCIsIndpZHRoIiwibWFwU3RhdGUiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIkNvbnNvbGUiLCJ3YXJuIiwiTUlTU0lOR19NQVBCT1hfVE9LRU4iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm1hcFN0YXRlQWN0aW9ucyIsInVwZGF0ZU1hcCIsImlzU3BsaXQiLCJhcHBOYW1lIiwidmVyc2lvbiIsImFwcFdlYnNpdGUiLCJvblNhdmVNYXAiLCJvblZpZXdTdGF0ZUNoYW5nZSIsIm1hcGJveEFwaVVybCIsImdldE1hcGJveFJlZiIsInVpU3RhdGUiLCJ2aXNTdGF0ZSIsInByb3ZpZGVyU3RhdGUiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJ1aVN0YXRlQWN0aW9ucyIsInByb3ZpZGVyQWN0aW9ucyIsImF2YWlsYWJsZVByb3ZpZGVycyIsImZpbHRlcnMiLCJsYXllcnMiLCJzcGxpdE1hcHMiLCJsYXllck9yZGVyIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImludGVyYWN0aW9uQ29uZmlnIiwiZGF0YXNldHMiLCJsYXllckRhdGEiLCJob3ZlckluZm8iLCJjbGlja2VkIiwibW91c2VQb3MiLCJhbmltYXRpb25Db25maWciLCJtYXBJbmZvIiwibm90aWZpY2F0aW9uUGFuZWxGaWVsZHMiLCJyZW1vdmVOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25zIiwic2lkZUZpZWxkcyIsInNpZGVQYW5lbFdpZHRoIiwibWFwU2F2ZWQiLCJtYXBGaWVsZHMiLCJlZGl0b3IiLCJtYXBDb250cm9scyIsInJlYWRPbmx5IiwiY29udGFpbmVyVyIsIm1hcENvbnRhaW5lcnMiLCJzZXR0aW5ncyIsImluZGV4IiwiaXNFeHBvcnRpbmciLCJjdXJyZW50TW9kYWwiLCJFWFBPUlRfSU1BR0VfSUQiLCJTQVZFX01BUF9JRCIsIlNIQVJFX01BUF9JRCIsIk9WRVJXUklURV9NQVBfSUQiLCJhdmFpbGFibGVUaGVtZVNlbGVjdG9yIiwicm9vdCIsImRpc3BsYXkiLCJleHBvcnRJbWFnZSIsImFkZE5vdGlmaWNhdGlvbiIsInN0YXJ0RXhwb3J0aW5nSW1hZ2UiLCJzZXRFeHBvcnRJbWFnZURhdGFVcmkiLCJzZXRFeHBvcnRJbWFnZUVycm9yIiwiRElNRU5TSU9OUyIsInNpZGVQYW5lbCIsIm1hcmdpbiIsImxlZnQiLCJjdXJyZW50Iiwib25FeHBvcnRUb0Nsb3VkU3VjY2VzcyIsIm9uTG9hZENsb3VkTWFwU3VjY2VzcyIsIm9uTG9hZENsb3VkTWFwRXJyb3IiLCJvbkV4cG9ydFRvQ2xvdWRFcnJvciIsIkNvbXBvbmVudCIsIm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYWtlTWFwRGlzcGF0Y2hUb1Byb3BzIiwic3RhdGUiLCJkZWZhdWx0VXNlckFjdGlvbnMiLCJnZXREaXNwYXRjaCIsImRpc3BhdGNoIiwiZ2V0VXNlckFjdGlvbnMiLCJhY3Rpb25zIiwibWFrZUdldEFjdGlvbkNyZWF0b3JzIiwidXNlckFjdGlvbnMiLCJWaXNTdGF0ZUFjdGlvbnMiLCJNYXBTdGF0ZUFjdGlvbnMiLCJNYXBTdHlsZUFjdGlvbnMiLCJVSVN0YXRlQWN0aW9ucyIsIlByb3ZpZGVyQWN0aW9ucyIsIm1lcmdlQWN0aW9ucyIsImdldEFjdGlvbkNyZWF0b3JzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwib3duUHJvcHMiLCJncm91cGVkQWN0aW9uQ3JlYXRvcnMiLCJvdmVycmlkZXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBV0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7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LENBQUNDLEdBQUQsQ0FBVCxHQUFpQlosV0FBVyxDQUFDWSxHQUFELENBQTVCO0FBQ0Q7QUFDRjs7QUFFRCwyQkFBV2QsT0FBWCxNQUF1QmEsU0FBdkI7QUFDRDs7ZUFFYzlKLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQsIHtUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3QgYXMga2VwbGVyR2xDb25uZWN0fSBmcm9tICdjb25uZWN0L2tlcGxlcmdsLWNvbm5lY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgVmlzU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvdmlzLXN0YXRlLWFjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBNYXBTdGF0ZUFjdGlvbnMgZnJvbSAnYWN0aW9ucy9tYXAtc3RhdGUtYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIE1hcFN0eWxlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgVUlTdGF0ZUFjdGlvbnMgZnJvbSAnYWN0aW9ucy91aS1zdGF0ZS1hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgUHJvdmlkZXJBY3Rpb25zIGZyb20gJ2FjdGlvbnMvcHJvdmlkZXItYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEVYUE9SVF9JTUFHRV9JRCxcclxuICBESU1FTlNJT05TLFxyXG4gIEtFUExFUl9HTF9OQU1FLFxyXG4gIEtFUExFUl9HTF9WRVJTSU9OLFxyXG4gIFRIRU1FLFxyXG4gIERFRkFVTFRfTUFQQk9YX0FQSV9VUkwsXHJcbiAgU0FWRV9NQVBfSUQsXHJcbiAgU0hBUkVfTUFQX0lELFxyXG4gIE9WRVJXUklURV9NQVBfSURcclxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7TUlTU0lOR19NQVBCT1hfVE9LRU59IGZyb20gJ2NvbnN0YW50cy91c2VyLWZlZWRiYWNrcyc7XHJcblxyXG5pbXBvcnQgU2lkZVBhbmVsRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwnO1xyXG5pbXBvcnQgTWFwQ29udGFpbmVyRmFjdG9yeSBmcm9tICcuL21hcC1jb250YWluZXInO1xyXG5pbXBvcnQgQm90dG9tV2lkZ2V0RmFjdG9yeSBmcm9tICcuL2JvdHRvbS13aWRnZXQnO1xyXG5pbXBvcnQgTW9kYWxDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcclxuaW1wb3J0IFBsb3RDb250YWluZXJGYWN0b3J5IGZyb20gJy4vcGxvdC1jb250YWluZXInO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uUGFuZWxGYWN0b3J5IGZyb20gJy4vbm90aWZpY2F0aW9uLXBhbmVsJztcclxuXHJcbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWR9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHt2YWxpZGF0ZVRva2VufSBmcm9tICd1dGlscy9tYXBib3gtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHt0aGVtZSBhcyBiYXNpY1RoZW1lLCB0aGVtZUxULCB0aGVtZUJTfSBmcm9tICdzdHlsZXMvYmFzZSc7XHJcblxyXG4vLyBNYXliZSB3ZSBzaG91bGQgdGhpbmsgYWJvdXQgZXhwb3J0aW5nIHRoaXMgb3IgY3JlYXRpbmcgYSB2YXJpYWJsZVxyXG4vLyBhcyBwYXJ0IG9mIHRoZSBiYXNlLmpzIHRoZW1lXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcclxuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0fTtcclxuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFNpemV9O1xyXG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHR9O1xyXG5cclxuICAqLFxyXG4gICo6YmVmb3JlLFxyXG4gICo6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xyXG4gIH1cclxuYDtcclxuXHJcbktlcGxlckdsRmFjdG9yeS5kZXBzID0gW1xyXG4gIEJvdHRvbVdpZGdldEZhY3RvcnksXHJcbiAgTWFwQ29udGFpbmVyRmFjdG9yeSxcclxuICBNb2RhbENvbnRhaW5lckZhY3RvcnksXHJcbiAgU2lkZVBhbmVsRmFjdG9yeSxcclxuICBQbG90Q29udGFpbmVyRmFjdG9yeSxcclxuICBOb3RpZmljYXRpb25QYW5lbEZhY3RvcnlcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEtlcGxlckdsRmFjdG9yeShcclxuICBCb3R0b21XaWRnZXQsXHJcbiAgTWFwQ29udGFpbmVyLFxyXG4gIE1vZGFsQ29udGFpbmVyLFxyXG4gIFNpZGVQYW5lbCxcclxuICBQbG90Q29udGFpbmVyLFxyXG4gIE5vdGlmaWNhdGlvblBhbmVsXHJcbikge1xyXG4gIGNsYXNzIEtlcGxlckdMIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIG1hcFN0eWxlczogW10sXHJcbiAgICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgbWFwYm94QXBpVXJsOiBERUZBVUxUX01BUEJPWF9BUElfVVJMLFxyXG4gICAgICB3aWR0aDogODAwLFxyXG4gICAgICBoZWlnaHQ6IDgwMCxcclxuICAgICAgYXBwTmFtZTogS0VQTEVSX0dMX05BTUUsXHJcbiAgICAgIHZlcnNpb246IEtFUExFUl9HTF9WRVJTSU9OLFxyXG4gICAgICBzaWRlUGFuZWxXaWR0aDogRElNRU5TSU9OUy5zaWRlUGFuZWwud2lkdGgsXHJcbiAgICAgIHRoZW1lOiB7fSxcclxuICAgICAgY2xvdWRQcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLl92YWxpZGF0ZU1hcGJveFRva2VuKCk7XHJcbiAgICAgIHRoaXMuX2xvYWRNYXBTdHlsZSh0aGlzLnByb3BzLm1hcFN0eWxlcyk7XHJcbiAgICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSh0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAvLyBpZiBkaW1lbnNpb24gcHJvcHMgaGFzIGNoYW5nZWRcclxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gcHJldlByb3BzLmhlaWdodCB8fFxyXG4gICAgICAgIHRoaXMucHJvcHMud2lkdGggIT09IHByZXZQcm9wcy53aWR0aCB8fFxyXG4gICAgICAgIC8vIHJlYWN0LW1hcC1nbCB3aWxsIGRpc3BhdGNoIHVwZGF0ZVZpZXdwb3J0IGFmdGVyIHRoaXMuX2hhbmRsZVJlc2l6ZSBpcyBjYWxsZWRcclxuICAgICAgICAvLyBoZXJlIHdlIGNoZWNrIGlmIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0IGlzIHN5bmMgd2l0aCBwcm9wcy5oZWlnaHRcclxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5tYXBTdGF0ZS5oZWlnaHRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlUmVzaXplKHRoaXMucHJvcHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcm9vdCA9IGNyZWF0ZVJlZigpO1xyXG5cclxuICAgIC8qIHNlbGVjdG9ycyAqL1xyXG4gICAgdGhlbWVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnRoZW1lO1xyXG4gICAgYXZhaWxhYmxlVGhlbWVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMudGhlbWVTZWxlY3RvciwgdGhlbWUgPT5cclxuICAgICAgdHlwZW9mIHRoZW1lID09PSAnb2JqZWN0J1xyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICAuLi5iYXNpY1RoZW1lLFxyXG4gICAgICAgICAgICAuLi50aGVtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdGhlbWUgPT09IFRIRU1FLmxpZ2h0XHJcbiAgICAgICAgPyB0aGVtZUxUXHJcbiAgICAgICAgOiB0aGVtZSA9PT0gVEhFTUUuYmFzZVxyXG4gICAgICAgID8gdGhlbWVCU1xyXG4gICAgICAgIDogdGhlbWVcclxuICAgICk7XHJcblxyXG4gICAgYXZhaWxhYmxlUHJvdmlkZXJzID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgIHByb3BzID0+IHByb3BzLmNsb3VkUHJvdmlkZXJzLFxyXG4gICAgICBwcm92aWRlcnMgPT5cclxuICAgICAgICBBcnJheS5pc0FycmF5KHByb3ZpZGVycykgJiYgcHJvdmlkZXJzLmxlbmd0aFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgaGFzU3RvcmFnZTogcHJvdmlkZXJzLnNvbWUocCA9PiBwLmhhc1ByaXZhdGVTdG9yYWdlKCkpLFxyXG4gICAgICAgICAgICAgIGhhc1NoYXJlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzU2hhcmluZ1VybCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHt9XHJcbiAgICApO1xyXG5cclxuICAgIC8qIHByaXZhdGUgbWV0aG9kcyAqL1xyXG4gICAgX3ZhbGlkYXRlTWFwYm94VG9rZW4oKSB7XHJcbiAgICAgIGNvbnN0IHttYXBib3hBcGlBY2Nlc3NUb2tlbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBpZiAoIXZhbGlkYXRlVG9rZW4obWFwYm94QXBpQWNjZXNzVG9rZW4pKSB7XHJcbiAgICAgICAgQ29uc29sZS53YXJuKE1JU1NJTkdfTUFQQk9YX1RPS0VOKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVSZXNpemUoe3dpZHRoLCBoZWlnaHR9KSB7XHJcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHdpZHRoKSB8fCAhTnVtYmVyLmlzRmluaXRlKGhlaWdodCkpIHtcclxuICAgICAgICBDb25zb2xlLndhcm4oJ3dpZHRoIGFuZCBoZWlnaHQgaXMgcmVxdWlyZWQnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wcm9wcy5tYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwKHtcclxuICAgICAgICB3aWR0aDogd2lkdGggLyAoMSArIE51bWJlcih0aGlzLnByb3BzLm1hcFN0YXRlLmlzU3BsaXQpKSxcclxuICAgICAgICBoZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWRNYXBTdHlsZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZGVmYXVsdFN0eWxlcyA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5tYXBTdHlsZS5tYXBTdHlsZXMpO1xyXG4gICAgICAvLyBhZGQgaWQgdG8gY3VzdG9tIG1hcCBzdHlsZXMgaWYgbm90IGdpdmVuXHJcbiAgICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9ICh0aGlzLnByb3BzLm1hcFN0eWxlcyB8fCBbXSkubWFwKG1zID0+ICh7XHJcbiAgICAgICAgLi4ubXMsXHJcbiAgICAgICAgaWQ6IG1zLmlkIHx8IGdlbmVyYXRlSGFzaElkKClcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgY29uc3QgYWxsU3R5bGVzID0gWy4uLmN1c3RvbVN0eWxlcywgLi4uZGVmYXVsdFN0eWxlc10ucmVkdWNlKFxyXG4gICAgICAgIChhY2N1LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGFzU3R5bGVPYmplY3QgPSBzdHlsZS5zdHlsZSAmJiB0eXBlb2Ygc3R5bGUuc3R5bGUgPT09ICdvYmplY3QnO1xyXG4gICAgICAgICAgYWNjdVtoYXNTdHlsZU9iamVjdCA/ICd0b0xvYWQnIDogJ3RvUmVxdWVzdCddW3N0eWxlLmlkXSA9IHN0eWxlO1xyXG5cclxuICAgICAgICAgIHJldHVybiBhY2N1O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge3RvTG9hZDoge30sIHRvUmVxdWVzdDoge319XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkTWFwU3R5bGVzKGFsbFN0eWxlcy50b0xvYWQpO1xyXG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5yZXF1ZXN0TWFwU3R5bGVzKGFsbFN0eWxlcy50b1JlcXVlc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICAvLyBwcm9wc1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFwcE5hbWUsXHJcbiAgICAgICAgdmVyc2lvbixcclxuICAgICAgICBhcHBXZWJzaXRlLFxyXG4gICAgICAgIG9uU2F2ZU1hcCxcclxuICAgICAgICBvblZpZXdTdGF0ZUNoYW5nZSxcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICAgICAgbWFwYm94QXBpVXJsLFxyXG4gICAgICAgIGdldE1hcGJveFJlZixcclxuXHJcbiAgICAgICAgLy8gcmVkdXggc3RhdGVcclxuICAgICAgICBtYXBTdHlsZSxcclxuICAgICAgICBtYXBTdGF0ZSxcclxuICAgICAgICB1aVN0YXRlLFxyXG4gICAgICAgIHZpc1N0YXRlLFxyXG4gICAgICAgIHByb3ZpZGVyU3RhdGUsXHJcblxyXG4gICAgICAgIC8vIGFjdGlvbnMsXHJcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcclxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXHJcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgcHJvdmlkZXJBY3Rpb25zXHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgY29uc3QgYXZhaWxhYmxlUHJvdmlkZXJzID0gdGhpcy5hdmFpbGFibGVQcm92aWRlcnModGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgZmlsdGVycyxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgc3BsaXRNYXBzLCAvLyB0aGlzIHdpbGwgc3RvcmUgc3VwcG9ydCBmb3Igc3BsaXQgbWFwIHZpZXcgaXMgbmVjZXNzYXJ5XHJcbiAgICAgICAgbGF5ZXJPcmRlcixcclxuICAgICAgICBsYXllckJsZW5kaW5nLFxyXG4gICAgICAgIGxheWVyQ2xhc3NlcyxcclxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcclxuICAgICAgICBkYXRhc2V0cyxcclxuICAgICAgICBsYXllckRhdGEsXHJcbiAgICAgICAgaG92ZXJJbmZvLFxyXG4gICAgICAgIGNsaWNrZWQsXHJcbiAgICAgICAgbW91c2VQb3MsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxyXG4gICAgICAgIG1hcEluZm9cclxuICAgICAgfSA9IHZpc1N0YXRlO1xyXG5cclxuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uUGFuZWxGaWVsZHMgPSB7XHJcbiAgICAgICAgcmVtb3ZlTm90aWZpY2F0aW9uOiB1aVN0YXRlQWN0aW9ucy5yZW1vdmVOb3RpZmljYXRpb24sXHJcbiAgICAgICAgbm90aWZpY2F0aW9uczogdWlTdGF0ZS5ub3RpZmljYXRpb25zXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBzaWRlRmllbGRzID0ge1xyXG4gICAgICAgIGFwcE5hbWUsXHJcbiAgICAgICAgdmVyc2lvbixcclxuICAgICAgICBhcHBXZWJzaXRlLFxyXG4gICAgICAgIGRhdGFzZXRzLFxyXG4gICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgbGF5ZXJzLFxyXG4gICAgICAgIGxheWVyT3JkZXIsXHJcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxyXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIG1hcEluZm8sXHJcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcclxuICAgICAgICBvblNhdmVNYXAsXHJcbiAgICAgICAgdWlTdGF0ZSxcclxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXHJcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpZGVQYW5lbFdpZHRoLFxyXG4gICAgICAgIGF2YWlsYWJsZVByb3ZpZGVycyxcclxuICAgICAgICBtYXBTYXZlZDogcHJvdmlkZXJTdGF0ZS5tYXBTYXZlZFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgbWFwRmllbGRzID0ge1xyXG4gICAgICAgIGRhdGFzZXRzLFxyXG4gICAgICAgIGdldE1hcGJveFJlZixcclxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcclxuICAgICAgICBtYXBib3hBcGlVcmwsXHJcbiAgICAgICAgbWFwU3RhdGUsXHJcbiAgICAgICAgdWlTdGF0ZSxcclxuICAgICAgICBlZGl0b3I6IHZpc1N0YXRlLmVkaXRvcixcclxuICAgICAgICBtYXBTdHlsZSxcclxuICAgICAgICBtYXBDb250cm9sczogdWlTdGF0ZS5tYXBDb250cm9scyxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgbGF5ZXJPcmRlcixcclxuICAgICAgICBsYXllckRhdGEsXHJcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcclxuICAgICAgICBmaWx0ZXJzLFxyXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgICAgIGhvdmVySW5mbyxcclxuICAgICAgICBjbGlja2VkLFxyXG4gICAgICAgIG1vdXNlUG9zLFxyXG4gICAgICAgIHJlYWRPbmx5OiB1aVN0YXRlLnJlYWRPbmx5LFxyXG4gICAgICAgIG9uVmlld1N0YXRlQ2hhbmdlLFxyXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcclxuICAgICAgICBtYXBTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBpc1NwbGl0ID0gc3BsaXRNYXBzICYmIHNwbGl0TWFwcy5sZW5ndGggPiAxO1xyXG4gICAgICBjb25zdCBjb250YWluZXJXID0gbWFwU3RhdGUud2lkdGggKiAoTnVtYmVyKGlzU3BsaXQpICsgMSk7XHJcblxyXG4gICAgICBjb25zdCBtYXBDb250YWluZXJzID0gIWlzU3BsaXRcclxuICAgICAgICA/IFs8TWFwQ29udGFpbmVyIGtleT17MH0gaW5kZXg9ezB9IHsuLi5tYXBGaWVsZHN9IG1hcExheWVycz17bnVsbH0gLz5dXHJcbiAgICAgICAgOiBzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPE1hcENvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHsuLi5tYXBGaWVsZHN9XHJcbiAgICAgICAgICAgICAgbWFwTGF5ZXJzPXtzcGxpdE1hcHNbaW5kZXhdLmxheWVyc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpO1xyXG5cclxuICAgICAgY29uc3QgaXNFeHBvcnRpbmcgPVxyXG4gICAgICAgIHVpU3RhdGUuY3VycmVudE1vZGFsID09PSBFWFBPUlRfSU1BR0VfSUQgfHxcclxuICAgICAgICB1aVN0YXRlLmN1cnJlbnRNb2RhbCA9PT0gU0FWRV9NQVBfSUQgfHxcclxuICAgICAgICB1aVN0YXRlLmN1cnJlbnRNb2RhbCA9PT0gU0hBUkVfTUFQX0lEIHx8XHJcbiAgICAgICAgdWlTdGF0ZS5jdXJyZW50TW9kYWwgPT09IE9WRVJXUklURV9NQVBfSUQ7XHJcblxyXG4gICAgICBjb25zdCB0aGVtZSA9IHRoaXMuYXZhaWxhYmxlVGhlbWVTZWxlY3Rvcih0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgIDxHbG9iYWxTdHlsZVxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZXBsZXItZ2xcIlxyXG4gICAgICAgICAgICBpZD17YGtlcGxlci1nbF9fJHtpZH1gfVxyXG4gICAgICAgICAgICByZWY9e3RoaXMucm9vdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblBhbmVsIHsuLi5ub3RpZmljYXRpb25QYW5lbEZpZWxkc30gLz5cclxuICAgICAgICAgICAgeyF1aVN0YXRlLnJlYWRPbmx5ICYmIDxTaWRlUGFuZWwgey4uLnNpZGVGaWVsZHN9IC8+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcHNcIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxyXG4gICAgICAgICAgICAgIHttYXBDb250YWluZXJzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzRXhwb3J0aW5nICYmIChcclxuICAgICAgICAgICAgICA8UGxvdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBleHBvcnRJbWFnZVNldHRpbmc9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBtYXBGaWVsZHM9e21hcEZpZWxkc31cclxuICAgICAgICAgICAgICAgIGFkZE5vdGlmaWNhdGlvbj17dWlTdGF0ZUFjdGlvbnMuYWRkTm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgc3RhcnRFeHBvcnRpbmdJbWFnZT17dWlTdGF0ZUFjdGlvbnMuc3RhcnRFeHBvcnRpbmdJbWFnZX1cclxuICAgICAgICAgICAgICAgIHNldEV4cG9ydEltYWdlRGF0YVVyaT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpfVxyXG4gICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VFcnJvcj17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VFcnJvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Qm90dG9tV2lkZ2V0XHJcbiAgICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cclxuICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XHJcbiAgICAgICAgICAgICAgdWlTdGF0ZT17dWlTdGF0ZX1cclxuICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cclxuICAgICAgICAgICAgICBhbmltYXRpb25Db25maWc9e2FuaW1hdGlvbkNvbmZpZ31cclxuICAgICAgICAgICAgICB2aXNTdGF0ZUFjdGlvbnM9e3Zpc1N0YXRlQWN0aW9uc31cclxuICAgICAgICAgICAgICBzaWRlUGFuZWxXaWR0aD17XHJcbiAgICAgICAgICAgICAgICB1aVN0YXRlLnJlYWRPbmx5ID8gMCA6IHRoaXMucHJvcHMuc2lkZVBhbmVsV2lkdGggKyBESU1FTlNJT05TLnNpZGVQYW5lbC5tYXJnaW4ubGVmdFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb250YWluZXJXPXtjb250YWluZXJXfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TW9kYWxDb250YWluZXJcclxuICAgICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGV9XHJcbiAgICAgICAgICAgICAgdmlzU3RhdGU9e3Zpc1N0YXRlfVxyXG4gICAgICAgICAgICAgIG1hcFN0YXRlPXttYXBTdGF0ZX1cclxuICAgICAgICAgICAgICB1aVN0YXRlPXt1aVN0YXRlfVxyXG4gICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXttYXBib3hBcGlBY2Nlc3NUb2tlbn1cclxuICAgICAgICAgICAgICBtYXBib3hBcGlVcmw9e21hcGJveEFwaVVybH1cclxuICAgICAgICAgICAgICB2aXNTdGF0ZUFjdGlvbnM9e3Zpc1N0YXRlQWN0aW9uc31cclxuICAgICAgICAgICAgICB1aVN0YXRlQWN0aW9ucz17dWlTdGF0ZUFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgbWFwU3R5bGVBY3Rpb25zPXttYXBTdHlsZUFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgcHJvdmlkZXJBY3Rpb25zPXtwcm92aWRlckFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgcm9vdE5vZGU9e3RoaXMucm9vdC5jdXJyZW50fVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XHJcbiAgICAgICAgICAgICAgY29udGFpbmVySD17bWFwU3RhdGUuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgIHByb3ZpZGVyU3RhdGU9e3RoaXMucHJvcHMucHJvdmlkZXJTdGF0ZX1cclxuICAgICAgICAgICAgICAvLyBVc2VyIGRlZmluZWQgY2xvdWQgcHJvdmlkZXIgcHJvcHNcclxuICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVyc31cclxuICAgICAgICAgICAgICBvbkV4cG9ydFRvQ2xvdWRTdWNjZXNzPXt0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgb25Mb2FkQ2xvdWRNYXBTdWNjZXNzPXt0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwU3VjY2Vzc31cclxuICAgICAgICAgICAgICBvbkxvYWRDbG91ZE1hcEVycm9yPXt0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwRXJyb3J9XHJcbiAgICAgICAgICAgICAgb25FeHBvcnRUb0Nsb3VkRXJyb3I9e3RoaXMucHJvcHMub25FeHBvcnRUb0Nsb3VkRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dsb2JhbFN0eWxlPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBrZXBsZXJHbENvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYWtlTWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoVGhlbWUoS2VwbGVyR0wpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlID0ge30sIHByb3BzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnByb3BzLFxyXG4gICAgdmlzU3RhdGU6IHN0YXRlLnZpc1N0YXRlLFxyXG4gICAgbWFwU3R5bGU6IHN0YXRlLm1hcFN0eWxlLFxyXG4gICAgbWFwU3RhdGU6IHN0YXRlLm1hcFN0YXRlLFxyXG4gICAgdWlTdGF0ZTogc3RhdGUudWlTdGF0ZSxcclxuICAgIHByb3ZpZGVyU3RhdGU6IHN0YXRlLnByb3ZpZGVyU3RhdGVcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0VXNlckFjdGlvbnMgPSB7fTtcclxuY29uc3QgZ2V0RGlzcGF0Y2ggPSBkaXNwYXRjaCA9PiBkaXNwYXRjaDtcclxuY29uc3QgZ2V0VXNlckFjdGlvbnMgPSAoZGlzcGF0Y2gsIHByb3BzKSA9PiBwcm9wcy5hY3Rpb25zIHx8IGRlZmF1bHRVc2VyQWN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIG1ha2VHZXRBY3Rpb25DcmVhdG9ycygpIHtcclxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoW2dldERpc3BhdGNoLCBnZXRVc2VyQWN0aW9uc10sIChkaXNwYXRjaCwgdXNlckFjdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IFt2aXNTdGF0ZUFjdGlvbnMsIG1hcFN0YXRlQWN0aW9ucywgbWFwU3R5bGVBY3Rpb25zLCB1aVN0YXRlQWN0aW9ucywgcHJvdmlkZXJBY3Rpb25zXSA9IFtcclxuICAgICAgVmlzU3RhdGVBY3Rpb25zLFxyXG4gICAgICBNYXBTdGF0ZUFjdGlvbnMsXHJcbiAgICAgIE1hcFN0eWxlQWN0aW9ucyxcclxuICAgICAgVUlTdGF0ZUFjdGlvbnMsXHJcbiAgICAgIFByb3ZpZGVyQWN0aW9uc1xyXG4gICAgXS5tYXAoYWN0aW9ucyA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMobWVyZ2VBY3Rpb25zKGFjdGlvbnMsIHVzZXJBY3Rpb25zKSwgZGlzcGF0Y2gpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aXNTdGF0ZUFjdGlvbnMsXHJcbiAgICAgIG1hcFN0YXRlQWN0aW9ucyxcclxuICAgICAgbWFwU3R5bGVBY3Rpb25zLFxyXG4gICAgICB1aVN0YXRlQWN0aW9ucyxcclxuICAgICAgcHJvdmlkZXJBY3Rpb25zLFxyXG4gICAgICBkaXNwYXRjaFxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU1hcERpc3BhdGNoVG9Qcm9wcygpIHtcclxuICBjb25zdCBnZXRBY3Rpb25DcmVhdG9ycyA9IG1ha2VHZXRBY3Rpb25DcmVhdG9ycygpO1xyXG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGdyb3VwZWRBY3Rpb25DcmVhdG9ycyA9IGdldEFjdGlvbkNyZWF0b3JzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZ3JvdXBlZEFjdGlvbkNyZWF0b3JzLFxyXG4gICAgICBkaXNwYXRjaFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzO1xyXG59XHJcblxyXG4vKipcclxuICogT3ZlcnJpZGUgZGVmYXVsdCBrZXBsZXIuZ2wgYWN0aW9ucyB3aXRoIHVzZXIgZGVmaW5lZCBhY3Rpb25zIHVzaW5nIHRoZSBzYW1lIGtleVxyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2VBY3Rpb25zKGFjdGlvbnMsIHVzZXJBY3Rpb25zKSB7XHJcbiAgY29uc3Qgb3ZlcnJpZGVzID0ge307XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gdXNlckFjdGlvbnMpIHtcclxuICAgIGlmICh1c2VyQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBvdmVycmlkZXNba2V5XSA9IHVzZXJBY3Rpb25zW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gey4uLmFjdGlvbnMsIC4uLm92ZXJyaWRlc307XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtlcGxlckdsRmFjdG9yeTtcclxuIl19