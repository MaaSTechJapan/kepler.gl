"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidePanelFactory;
exports.PanelTitleFactory = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _lodash = _interopRequireDefault(require("lodash.get"));

var _sideBar = _interopRequireDefault(require("./side-panel/side-bar"));

var _panelHeader = _interopRequireDefault(require("./side-panel/panel-header"));

var _layerManager = _interopRequireDefault(require("./side-panel/layer-manager"));

var _filterManager = _interopRequireDefault(require("./side-panel/filter-manager"));

var _interactionManager = _interopRequireDefault(require("./side-panel/interaction-manager"));

var _mapManager = _interopRequireDefault(require("./side-panel/map-manager"));

var _panelToggle = _interopRequireDefault(require("./side-panel/panel-toggle"));

var _customPanel = _interopRequireDefault(require("./side-panel/custom-panel"));

var _defaultSettings = require("../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  flex-grow: 1;\n  padding: ", "px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SidePanelContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.sidePanelInnerPadding;
});

var PanelTitleFactory = function PanelTitleFactory() {
  return _styledComponents["default"].div(_templateObject2(), function (props) {
    return props.theme.titleTextColor;
  });
};

exports.PanelTitleFactory = PanelTitleFactory;
SidePanelFactory.deps = [_sideBar["default"], _panelHeader["default"], _panelToggle["default"], PanelTitleFactory, _layerManager["default"], _filterManager["default"], _interactionManager["default"], _mapManager["default"], _customPanel["default"]];
/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */

function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager, CustomPanels) {
  var customPanels = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'panels']) || [];

  var getCustomPanelProps = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'getProps']) || function () {
    return {};
  };

  var SidePanel = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(SidePanel, _PureComponent);

    var _super = _createSuper(SidePanel);

    function SidePanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, SidePanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDatasetTable", function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);

        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddDataModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddMapStyleModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeDataset", function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportImage", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportData", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveToStorage", function () {
        _this.props.uiStateActions.toggleModal(_this.props.mapSaved ? _defaultSettings.OVERWRITE_MAP_ID : _defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveAsToStorage", function () {
        // add (copy) to file name
        _this.props.visStateActions.setMapInfo({
          title: "".concat(_this.props.mapInfo.title || 'Kepler.gl', " (Copy)")
        });

        _this.props.uiStateActions.toggleModal(_defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickShareMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.SHARE_MAP_ID);
      });
      return _this;
    }

    (0, _createClass2["default"])(SidePanel, [{
      key: "render",
      // eslint-disable-next-line complexity
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            datasets = _this$props.datasets,
            filters = _this$props.filters,
            layers = _this$props.layers,
            layerBlending = _this$props.layerBlending,
            layerClasses = _this$props.layerClasses,
            uiState = _this$props.uiState,
            layerOrder = _this$props.layerOrder,
            interactionConfig = _this$props.interactionConfig,
            visStateActions = _this$props.visStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            availableProviders = _this$props.availableProviders;
        var activeSidePanel = uiState.activeSidePanel;
        var isOpen = Boolean(activeSidePanel);
        var panels = [].concat((0, _toConsumableArray2["default"])(this.props.panels), (0, _toConsumableArray2["default"])(customPanels));
        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerColorUIChange: visStateActions.layerColorUIChange,
          layerTextLabelChange: visStateActions.layerTextLabelChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset,
          openModal: uiStateActions.toggleModal
        };
        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleFilterAnimation,
          enlargeFilter: visStateActions.enlargeFilter,
          toggleFilterFeature: visStateActions.toggleFilterFeature
        };
        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };
        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          set3dBuildingColor: mapStyleActions.set3dBuildingColor,
          showAddMapStyleModal: this._showAddMapStyleModal
        };
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Sidebar, {
          width: this.props.width,
          isOpen: isOpen,
          minifiedWidth: 0,
          onOpenOrClose: this._onOpenOrClose
        }, /*#__PURE__*/_react["default"].createElement(PanelHeader, {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          visibleDropdown: uiState.visibleDropdown,
          showExportDropdown: uiStateActions.showExportDropdown,
          hideExportDropdown: uiStateActions.hideExportDropdown,
          onExportImage: this._onClickExportImage,
          onExportData: this._onClickExportData,
          onExportMap: this._onClickExportMap,
          onSaveMap: this.props.onSaveMap,
          onSaveToStorage: availableProviders.hasStorage ? this._onClickSaveToStorage : null,
          onSaveAsToStorage: availableProviders.hasStorage && this.props.mapSaved ? this._onClickSaveAsToStorage : null,
          onShareMap: availableProviders.hasShare ? this._onClickShareMap : null
        }), /*#__PURE__*/_react["default"].createElement(PanelToggle, {
          panels: panels,
          activePanel: activeSidePanel,
          togglePanel: uiStateActions.toggleSidePanel
        }), /*#__PURE__*/_react["default"].createElement(SidePanelContent, {
          className: "side-panel__content"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(PanelTitle, {
          className: "side-panel__content__title"
        }, (panels.find(function (_ref) {
          var id = _ref.id;
          return id === activeSidePanel;
        }) || {}).label), activeSidePanel === 'layer' && /*#__PURE__*/_react["default"].createElement(LayerManager, (0, _extends2["default"])({}, layerManagerActions, {
          datasets: datasets,
          layers: layers,
          layerClasses: layerClasses,
          layerOrder: layerOrder,
          layerBlending: layerBlending,
          colorPalette: uiState.colorPalette
        })), activeSidePanel === 'filter' && /*#__PURE__*/_react["default"].createElement(FilterManager, (0, _extends2["default"])({}, filterManagerActions, {
          datasets: datasets,
          layers: layers,
          filters: filters
        })), activeSidePanel === 'interaction' && /*#__PURE__*/_react["default"].createElement(InteractionManager, (0, _extends2["default"])({}, interactionManagerActions, {
          datasets: datasets,
          interactionConfig: interactionConfig
        })), activeSidePanel === 'map' && /*#__PURE__*/_react["default"].createElement(MapManager, (0, _extends2["default"])({}, mapManagerActions, {
          mapStyle: this.props.mapStyle
        })), (customPanels || []).find(function (p) {
          return p.id === activeSidePanel;
        }) ? /*#__PURE__*/_react["default"].createElement(CustomPanels, (0, _extends2["default"])({}, getCustomPanelProps(this.props), {
          activeSidePanel: activeSidePanel
        })) : null))));
      }
    }]);
    return SidePanel;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(SidePanel, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    width: _propTypes["default"].number.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    availableProviders: _propTypes["default"].object,
    mapSaved: _propTypes["default"].string,
    panels: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  (0, _defineProperty2["default"])(SidePanel, "defaultProps", {
    panels: _defaultSettings.SIDEBAR_PANELS,
    uiState: {},
    visStateActions: {},
    mapStyleActions: {},
    uiStateActions: {},
    availableProviders: {}
  });
  return SidePanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJzaWRlUGFuZWxJbm5lclBhZGRpbmciLCJQYW5lbFRpdGxlRmFjdG9yeSIsInRpdGxlVGV4dENvbG9yIiwiU2lkZVBhbmVsRmFjdG9yeSIsImRlcHMiLCJTaWRlYmFyRmFjdG9yeSIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIkxheWVyTWFuYWdlckZhY3RvcnkiLCJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsIkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkiLCJNYXBNYW5hZ2VyRmFjdG9yeSIsIkN1c3RvbVBhbmVsc0ZhY3RvcnkiLCJTaWRlYmFyIiwiUGFuZWxIZWFkZXIiLCJQYW5lbFRvZ2dsZSIsIlBhbmVsVGl0bGUiLCJMYXllck1hbmFnZXIiLCJGaWx0ZXJNYW5hZ2VyIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwiTWFwTWFuYWdlciIsIkN1c3RvbVBhbmVscyIsImN1c3RvbVBhbmVscyIsImdldEN1c3RvbVBhbmVsUHJvcHMiLCJTaWRlUGFuZWwiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZVNpZGVQYW5lbCIsInVpU3RhdGUiLCJhY3RpdmVTaWRlUGFuZWwiLCJkYXRhSWQiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJzaG93RGF0YXNldFRhYmxlIiwidG9nZ2xlTW9kYWwiLCJEQVRBX1RBQkxFX0lEIiwiQUREX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwia2V5Iiwib3BlbkRlbGV0ZU1vZGFsIiwiRVhQT1JUX0lNQUdFX0lEIiwiRVhQT1JUX0RBVEFfSUQiLCJFWFBPUlRfTUFQX0lEIiwibWFwU2F2ZWQiLCJPVkVSV1JJVEVfTUFQX0lEIiwiU0FWRV9NQVBfSUQiLCJzZXRNYXBJbmZvIiwidGl0bGUiLCJtYXBJbmZvIiwiU0hBUkVfTUFQX0lEIiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiZGF0YXNldHMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImxheWVyT3JkZXIiLCJpbnRlcmFjdGlvbkNvbmZpZyIsIm1hcFN0eWxlQWN0aW9ucyIsImF2YWlsYWJsZVByb3ZpZGVycyIsImlzT3BlbiIsIkJvb2xlYW4iLCJwYW5lbHMiLCJsYXllck1hbmFnZXJBY3Rpb25zIiwiYWRkTGF5ZXIiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJPcmRlciIsInJlb3JkZXJMYXllciIsIl9zaG93RGF0YXNldFRhYmxlIiwic2hvd0FkZERhdGFNb2RhbCIsIl9zaG93QWRkRGF0YU1vZGFsIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVEYXRhc2V0IiwiX3JlbW92ZURhdGFzZXQiLCJvcGVuTW9kYWwiLCJmaWx0ZXJNYW5hZ2VyQWN0aW9ucyIsImFkZEZpbHRlciIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsInRvZ2dsZUFuaW1hdGlvbiIsInRvZ2dsZUZpbHRlckFuaW1hdGlvbiIsImVubGFyZ2VGaWx0ZXIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwiaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyIsIm9uQ29uZmlnQ2hhbmdlIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UiLCJtYXBNYW5hZ2VyQWN0aW9ucyIsImFkZE1hcFN0eWxlVXJsIiwibWFwQ29uZmlnQ2hhbmdlIiwib25TdHlsZUNoYW5nZSIsIm1hcFN0eWxlQ2hhbmdlIiwib25CdWlsZGluZ0NoYW5nZSIsIm1hcEJ1aWxkaW5nQ2hhbmdlIiwic2V0M2RCdWlsZGluZ0NvbG9yIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJfc2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJ3aWR0aCIsIl9vbk9wZW5PckNsb3NlIiwidmlzaWJsZURyb3Bkb3duIiwic2hvd0V4cG9ydERyb3Bkb3duIiwiaGlkZUV4cG9ydERyb3Bkb3duIiwiX29uQ2xpY2tFeHBvcnRJbWFnZSIsIl9vbkNsaWNrRXhwb3J0RGF0YSIsIl9vbkNsaWNrRXhwb3J0TWFwIiwib25TYXZlTWFwIiwiaGFzU3RvcmFnZSIsIl9vbkNsaWNrU2F2ZVRvU3RvcmFnZSIsIl9vbkNsaWNrU2F2ZUFzVG9TdG9yYWdlIiwiaGFzU2hhcmUiLCJfb25DbGlja1NoYXJlTWFwIiwiZmluZCIsImlkIiwibGFiZWwiLCJjb2xvclBhbGV0dGUiLCJtYXBTdHlsZSIsInAiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJudW1iZXIiLCJTSURFQkFSX1BBTkVMUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNsQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGtCQUFoQjtBQUFBLENBRGEsRUFHVCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLHFCQUFoQjtBQUFBLENBSEksQ0FBdEI7O0FBUU8sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFNBQU1OLDZCQUFPQyxHQUFiLHFCQUN0QixVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxLQUFO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QVJWO0FBU2pCaEcsSUFBQUEsZUFBZSxFQUFFNkYsc0JBQVVJLE1BQVYsQ0FBaUJELFVBVGpCO0FBVWpCcEUsSUFBQUEsZUFBZSxFQUFFaUUsc0JBQVVJLE1BQVYsQ0FBaUJELFVBVmpCO0FBV2pCbkUsSUFBQUEsa0JBQWtCLEVBQUVnRSxzQkFBVUksTUFYYjtBQVlqQnRGLElBQUFBLFFBQVEsRUFBRWtGLHNCQUFVSyxNQVpIO0FBYWpCbEUsSUFBQUEsTUFBTSxFQUFFNkQsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVSSxNQUE1QjtBQWJTLEdBTHJCO0FBQUEsbUNBSU12RyxTQUpOLGtCQXFCd0I7QUFDcEJzQyxJQUFBQSxNQUFNLEVBQUVvRSwrQkFEWTtBQUVwQnZHLElBQUFBLE9BQU8sRUFBRSxFQUZXO0FBR3BCRyxJQUFBQSxlQUFlLEVBQUUsRUFIRztBQUlwQjRCLElBQUFBLGVBQWUsRUFBRSxFQUpHO0FBS3BCakMsSUFBQUEsY0FBYyxFQUFFLEVBTEk7QUFNcEJrQyxJQUFBQSxrQkFBa0IsRUFBRTtBQU5BLEdBckJ4QjtBQTZOQSxTQUFPbkMsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcblxuaW1wb3J0IFNpZGViYXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLWJhcic7XG5pbXBvcnQgUGFuZWxIZWFkZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXInO1xuaW1wb3J0IExheWVyTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2xheWVyLW1hbmFnZXInO1xuaW1wb3J0IEZpbHRlck1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9maWx0ZXItbWFuYWdlcic7XG5pbXBvcnQgSW50ZXJhY3Rpb25NYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tbWFuYWdlcic7XG5pbXBvcnQgTWFwTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL21hcC1tYW5hZ2VyJztcbmltcG9ydCBQYW5lbFRvZ2dsZUZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLXRvZ2dsZSc7XG5pbXBvcnQgQ3VzdG9tUGFuZWxzRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvY3VzdG9tLXBhbmVsJztcblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIEFERF9NQVBfU1RZTEVfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9NQVBfSUQsXG4gIFNBVkVfTUFQX0lELFxuICBTSEFSRV9NQVBfSUQsXG4gIFNJREVCQVJfUEFORUxTLFxuICBPVkVSV1JJVEVfTUFQX0lEXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgU2lkZVBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFyfTtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbElubmVyUGFkZGluZ31weDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxUaXRsZUZhY3RvcnkgPSAoKSA9PiBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbmA7XG5cblNpZGVQYW5lbEZhY3RvcnkuZGVwcyA9IFtcbiAgU2lkZWJhckZhY3RvcnksXG4gIFBhbmVsSGVhZGVyRmFjdG9yeSxcbiAgUGFuZWxUb2dnbGVGYWN0b3J5LFxuICBQYW5lbFRpdGxlRmFjdG9yeSxcbiAgTGF5ZXJNYW5hZ2VyRmFjdG9yeSxcbiAgRmlsdGVyTWFuYWdlckZhY3RvcnksXG4gIEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnksXG4gIE1hcE1hbmFnZXJGYWN0b3J5LFxuICBDdXN0b21QYW5lbHNGYWN0b3J5XG5dO1xuXG4vKipcbiAqXG4gKiBWZXJ0aWNhbCBzaWRlYmFyIGNvbnRhaW5pbmcgaW5wdXQgY29tcG9uZW50cyBmb3IgdGhlIHJlbmRlcmluZyBsYXllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZVBhbmVsRmFjdG9yeShcbiAgU2lkZWJhcixcbiAgUGFuZWxIZWFkZXIsXG4gIFBhbmVsVG9nZ2xlLFxuICBQYW5lbFRpdGxlLFxuICBMYXllck1hbmFnZXIsXG4gIEZpbHRlck1hbmFnZXIsXG4gIEludGVyYWN0aW9uTWFuYWdlcixcbiAgTWFwTWFuYWdlcixcbiAgQ3VzdG9tUGFuZWxzXG4pIHtcbiAgY29uc3QgY3VzdG9tUGFuZWxzID0gZ2V0KEN1c3RvbVBhbmVscywgWydkZWZhdWx0UHJvcHMnLCAncGFuZWxzJ10pIHx8IFtdO1xuICBjb25zdCBnZXRDdXN0b21QYW5lbFByb3BzID0gZ2V0KEN1c3RvbVBhbmVscywgWydkZWZhdWx0UHJvcHMnLCAnZ2V0UHJvcHMnXSkgfHwgKCgpID0+ICh7fSkpO1xuXG4gIGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGF2YWlsYWJsZVByb3ZpZGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG1hcFNhdmVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgcGFuZWxzOiBTSURFQkFSX1BBTkVMUyxcbiAgICAgIHVpU3RhdGU6IHt9LFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiB7fSxcbiAgICAgIG1hcFN0eWxlQWN0aW9uczoge30sXG4gICAgICB1aVN0YXRlQWN0aW9uczoge30sXG4gICAgICBhdmFpbGFibGVQcm92aWRlcnM6IHt9XG4gICAgfTtcblxuICAgIC8qIGNvbXBvbmVudCBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuICAgIF9vbk9wZW5PckNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVTaWRlUGFuZWwoXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5hY3RpdmVTaWRlUGFuZWwgPyBudWxsIDogJ2xheWVyJ1xuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3Nob3dEYXRhc2V0VGFibGUgPSBkYXRhSWQgPT4ge1xuICAgICAgLy8gdGhpcyB3aWxsIG9wZW4gZGF0YSB0YWJsZSBtb2RhbFxuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpO1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChEQVRBX1RBQkxFX0lEKTtcbiAgICB9O1xuXG4gICAgX3Nob3dBZGREYXRhTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9EQVRBX0lEKTtcbiAgICB9O1xuXG4gICAgX3Nob3dBZGRNYXBTdHlsZU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChBRERfTUFQX1NUWUxFX0lEKTtcbiAgICB9O1xuXG4gICAgX3JlbW92ZURhdGFzZXQgPSBrZXkgPT4ge1xuICAgICAgLy8gdGhpcyB3aWxsIHNob3cgdGhlIG1vZGFsIGRpYWxvZyB0byBjb25maXJtIGRlbGV0aW9uXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLm9wZW5EZWxldGVNb2RhbChrZXkpO1xuICAgIH07XG5cbiAgICBfb25DbGlja0V4cG9ydEltYWdlID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfSU1BR0VfSUQpO1xuXG4gICAgX29uQ2xpY2tFeHBvcnREYXRhID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfREFUQV9JRCk7XG5cbiAgICBfb25DbGlja0V4cG9ydE1hcCA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX01BUF9JRCk7XG5cbiAgICBfb25DbGlja1NhdmVUb1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKHRoaXMucHJvcHMubWFwU2F2ZWQgPyBPVkVSV1JJVEVfTUFQX0lEIDogU0FWRV9NQVBfSUQpO1xuICAgIH07XG5cbiAgICBfb25DbGlja1NhdmVBc1RvU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIC8vIGFkZCAoY29weSkgdG8gZmlsZSBuYW1lXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvKHtcbiAgICAgICAgdGl0bGU6IGAke3RoaXMucHJvcHMubWFwSW5mby50aXRsZSB8fCAnS2VwbGVyLmdsJ30gKENvcHkpYFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKFNBVkVfTUFQX0lEKTtcbiAgICB9O1xuXG4gICAgX29uQ2xpY2tTaGFyZU1hcCA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoU0hBUkVfTUFQX0lEKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICBhcHBXZWJzaXRlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllckJsZW5kaW5nLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIHVpU3RhdGUsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIGF2YWlsYWJsZVByb3ZpZGVyc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHthY3RpdmVTaWRlUGFuZWx9ID0gdWlTdGF0ZTtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IEJvb2xlYW4oYWN0aXZlU2lkZVBhbmVsKTtcbiAgICAgIGNvbnN0IHBhbmVscyA9IFsuLi50aGlzLnByb3BzLnBhbmVscywgLi4uY3VzdG9tUGFuZWxzXTtcblxuICAgICAgY29uc3QgbGF5ZXJNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRMYXllcixcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJDb2xvclVJQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJDb2xvclVJQ2hhbmdlLFxuICAgICAgICBsYXllclRleHRMYWJlbENoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVGV4dExhYmVsQ2hhbmdlLFxuICAgICAgICBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVHlwZUNoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclZpc0NvbmZpZ0NoYW5nZSxcbiAgICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZzogdmlzU3RhdGVBY3Rpb25zLnVwZGF0ZUxheWVyQmxlbmRpbmcsXG4gICAgICAgIHVwZGF0ZUxheWVyT3JkZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW9yZGVyTGF5ZXIsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWw6IHRoaXMuX3Nob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHJlbW92ZUxheWVyOiB2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlTGF5ZXIsXG4gICAgICAgIHJlbW92ZURhdGFzZXQ6IHRoaXMuX3JlbW92ZURhdGFzZXQsXG4gICAgICAgIG9wZW5Nb2RhbDogdWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZpbHRlck1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRGaWx0ZXIsXG4gICAgICAgIHJlbW92ZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLnJlbW92ZUZpbHRlcixcbiAgICAgICAgc2V0RmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuc2V0RmlsdGVyLFxuICAgICAgICBzaG93RGF0YXNldFRhYmxlOiB0aGlzLl9zaG93RGF0YXNldFRhYmxlLFxuICAgICAgICBzaG93QWRkRGF0YU1vZGFsOiB0aGlzLl9zaG93QWRkRGF0YU1vZGFsLFxuICAgICAgICB0b2dnbGVBbmltYXRpb246IHZpc1N0YXRlQWN0aW9ucy50b2dnbGVGaWx0ZXJBbmltYXRpb24sXG4gICAgICAgIGVubGFyZ2VGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5lbmxhcmdlRmlsdGVyLFxuICAgICAgICB0b2dnbGVGaWx0ZXJGZWF0dXJlOiB2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlRmlsdGVyRmVhdHVyZVxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5pbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVxuICAgICAgfTtcblxuICAgICAgY29uc3QgbWFwTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZE1hcFN0eWxlVXJsOiBtYXBTdHlsZUFjdGlvbnMuYWRkTWFwU3R5bGVVcmwsXG4gICAgICAgIG9uQ29uZmlnQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwQ29uZmlnQ2hhbmdlLFxuICAgICAgICBvblN0eWxlQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwU3R5bGVDaGFuZ2UsXG4gICAgICAgIG9uQnVpbGRpbmdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBCdWlsZGluZ0NoYW5nZSxcbiAgICAgICAgc2V0M2RCdWlsZGluZ0NvbG9yOiBtYXBTdHlsZUFjdGlvbnMuc2V0M2RCdWlsZGluZ0NvbG9yLFxuICAgICAgICBzaG93QWRkTWFwU3R5bGVNb2RhbDogdGhpcy5fc2hvd0FkZE1hcFN0eWxlTW9kYWxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICBtaW5pZmllZFdpZHRoPXswfVxuICAgICAgICAgICAgb25PcGVuT3JDbG9zZT17dGhpcy5fb25PcGVuT3JDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJcbiAgICAgICAgICAgICAgYXBwTmFtZT17YXBwTmFtZX1cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgICAgYXBwV2Vic2l0ZT17YXBwV2Vic2l0ZX1cbiAgICAgICAgICAgICAgdmlzaWJsZURyb3Bkb3duPXt1aVN0YXRlLnZpc2libGVEcm9wZG93bn1cbiAgICAgICAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duPXt1aVN0YXRlQWN0aW9ucy5zaG93RXhwb3J0RHJvcGRvd259XG4gICAgICAgICAgICAgIGhpZGVFeHBvcnREcm9wZG93bj17dWlTdGF0ZUFjdGlvbnMuaGlkZUV4cG9ydERyb3Bkb3dufVxuICAgICAgICAgICAgICBvbkV4cG9ydEltYWdlPXt0aGlzLl9vbkNsaWNrRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgIG9uRXhwb3J0RGF0YT17dGhpcy5fb25DbGlja0V4cG9ydERhdGF9XG4gICAgICAgICAgICAgIG9uRXhwb3J0TWFwPXt0aGlzLl9vbkNsaWNrRXhwb3J0TWFwfVxuICAgICAgICAgICAgICBvblNhdmVNYXA9e3RoaXMucHJvcHMub25TYXZlTWFwfVxuICAgICAgICAgICAgICBvblNhdmVUb1N0b3JhZ2U9e2F2YWlsYWJsZVByb3ZpZGVycy5oYXNTdG9yYWdlID8gdGhpcy5fb25DbGlja1NhdmVUb1N0b3JhZ2UgOiBudWxsfVxuICAgICAgICAgICAgICBvblNhdmVBc1RvU3RvcmFnZT17XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlUHJvdmlkZXJzLmhhc1N0b3JhZ2UgJiYgdGhpcy5wcm9wcy5tYXBTYXZlZFxuICAgICAgICAgICAgICAgICAgPyB0aGlzLl9vbkNsaWNrU2F2ZUFzVG9TdG9yYWdlXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvblNoYXJlTWFwPXthdmFpbGFibGVQcm92aWRlcnMuaGFzU2hhcmUgPyB0aGlzLl9vbkNsaWNrU2hhcmVNYXAgOiBudWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYW5lbFRvZ2dsZVxuICAgICAgICAgICAgICBwYW5lbHM9e3BhbmVsc31cbiAgICAgICAgICAgICAgYWN0aXZlUGFuZWw9e2FjdGl2ZVNpZGVQYW5lbH1cbiAgICAgICAgICAgICAgdG9nZ2xlUGFuZWw9e3VpU3RhdGVBY3Rpb25zLnRvZ2dsZVNpZGVQYW5lbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2lkZVBhbmVsQ29udGVudCBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBhbmVsVGl0bGUgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fY29udGVudF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHsocGFuZWxzLmZpbmQoKHtpZH0pID0+IGlkID09PSBhY3RpdmVTaWRlUGFuZWwpIHx8IHt9KS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1BhbmVsVGl0bGU+XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ2xheWVyJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8TGF5ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllck1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICBsYXllckNsYXNzZXM9e2xheWVyQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcmRlcj17bGF5ZXJPcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJCbGVuZGluZz17bGF5ZXJCbGVuZGluZ31cbiAgICAgICAgICAgICAgICAgICAgY29sb3JQYWxldHRlPXt1aVN0YXRlLmNvbG9yUGFsZXR0ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnZmlsdGVyJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8RmlsdGVyTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmlsdGVyTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ2ludGVyYWN0aW9uJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8SW50ZXJhY3Rpb25NYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5pbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnPXtpbnRlcmFjdGlvbkNvbmZpZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbWFwJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8TWFwTWFuYWdlciB7Li4ubWFwTWFuYWdlckFjdGlvbnN9IG1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyhjdXN0b21QYW5lbHMgfHwgW10pLmZpbmQocCA9PiBwLmlkID09PSBhY3RpdmVTaWRlUGFuZWwpID8gKFxuICAgICAgICAgICAgICAgICAgPEN1c3RvbVBhbmVsc1xuICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0Q3VzdG9tUGFuZWxQcm9wcyh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lkZVBhbmVsPXthY3RpdmVTaWRlUGFuZWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2lkZVBhbmVsQ29udGVudD5cbiAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gU2lkZVBhbmVsO1xufVxuIl19