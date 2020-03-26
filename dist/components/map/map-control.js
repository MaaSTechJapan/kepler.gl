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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _mapLayerSelector = _interopRequireDefault(require("../common/map-layer-selector"));

var _logo = _interopRequireDefault(require("../common/logo"));

var _mapLegend = _interopRequireDefault(require("./map-legend"));

var _icons = require("../common/icons");

var _verticalToolbar = _interopRequireDefault(require("../common/vertical-toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _defaultSettings = require("../../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ", ";\n  position: relative;\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  max-height: 500px;\n  min-height: 100px;\n  overflow: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  right: 0;\n  width: ", "px;\n  padding: ", "px;\n  z-index: 10;\n  top: ", "px;\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapControl = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.mapControl.width;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.top;
});

var StyledMapControlAction = _styledComponents["default"].div(_templateObject2());

var StyledMapControlPanel = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.mapPanelBackgroundColor;
});

var StyledMapControlPanelContent = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.dropdownScrollBar;
});

var StyledMapControlPanelHeader = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.titleTextColor;
});

var ActionPanel = function ActionPanel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlAction, {
    className: className
  }, children);
};

ActionPanel.displayName = 'ActionPanel';

var MapControlTooltip = _react["default"].memo(function (_ref2) {
  var id = _ref2.id,
      message = _ref2.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, message));
});

MapControlTooltip.displayName = 'MapControlTooltip';

var MapLegendTooltip = function MapLegendTooltip(_ref3) {
  var id = _ref3.id,
      message = _ref3.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, message));
};

var LayerSelectorPanel = _react["default"].memo(function (_ref4) {
  var items = _ref4.items,
      onMapToggleLayer = _ref4.onMapToggleLayer,
      isActive = _ref4.isActive,
      toggleMenuPanel = _ref4.toggleMenuPanel;
  return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 1,
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenuPanel();
    },
    className: "map-control-button toggle-layer",
    "data-tip": true,
    "data-for": "toggle-layer"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "toggle-layer",
    message: isActive ? 'Hide layer panel' : 'Show layer panel'
  })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
    header: "Visible layers",
    onClick: toggleMenuPanel
  }, /*#__PURE__*/_react["default"].createElement(_mapLayerSelector["default"], {
    layers: items,
    onMapToggleLayer: onMapToggleLayer
  }));
});

LayerSelectorPanel.displayName = 'LayerSelectorPanel';

var MapControlPanel = _react["default"].memo(function (_ref5) {
  var children = _ref5.children,
      header = _ref5.header,
      onClick = _ref5.onClick,
      _ref5$scale = _ref5.scale,
      scale = _ref5$scale === void 0 ? 1 : _ref5$scale,
      isExport = _ref5.isExport;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlPanel, {
    style: {
      transform: "scale(".concat(scale, ") translate(calc(-").concat(25 * (scale - 1), "% - ").concat(10 * scale, "px), calc(").concat(25 * (scale - 1), "% + ").concat(10 * scale, "px))"),
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelHeader, null, isExport ? /*#__PURE__*/_react["default"].createElement(_logo["default"], {
    version: false,
    appName: "kepler.gl"
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      verticalAlign: 'middle'
    }
  }, header), isExport ? null : /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
    height: "16px",
    onClick: onClick
  }))), /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelContent, null, children));
});

MapControlPanel.displayName = 'MapControlPanel';

var MapLegendPanel = function MapLegendPanel(_ref6) {
  var layers = _ref6.layers,
      isActive = _ref6.isActive,
      scale = _ref6.scale,
      onToggleMenuPanel = _ref6.onToggleMenuPanel,
      isExport = _ref6.isExport;
  return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 2,
    "data-tip": true,
    "data-for": "show-legend",
    className: "map-control-button show-legend",
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleMenuPanel();
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.Legend, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapLegendTooltip, {
    id: "show-legend",
    message: 'show legend'
  })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
    scale: scale,
    header: 'Layer Legend',
    onClick: onToggleMenuPanel,
    isExport: isExport
  }, /*#__PURE__*/_react["default"].createElement(_mapLegend["default"], {
    layers: layers
  }));
};

MapLegendPanel.displayName = 'MapControlPanel';

var SplitMapButton = _react["default"].memo(function (_ref7) {
  var isSplit = _ref7.isSplit,
      mapIndex = _ref7.mapIndex,
      onToggleSplitMap = _ref7.onToggleSplitMap;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    active: isSplit,
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleSplitMap(isSplit ? mapIndex : undefined);
    },
    key: "split-".concat(isSplit),
    className: "map-control-button split-map",
    "data-tip": true,
    "data-for": "action-toggle"
  }, isSplit ? /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
    height: "18px"
  }) : /*#__PURE__*/_react["default"].createElement(_icons.Split, {
    height: "18px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "action-toggle",
    message: isSplit ? 'Close current panel' : 'Switch to dual map view'
  }));
});

SplitMapButton.displayName = 'SplitMapButton';

var Toggle3dButton = _react["default"].memo(function (_ref8) {
  var dragRotate = _ref8.dragRotate,
      onTogglePerspective = _ref8.onTogglePerspective;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      onTogglePerspective();
    },
    active: dragRotate,
    "data-tip": true,
    "data-for": "action-3d"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Cube3d, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "action-3d",
    message: dragRotate ? 'Disable 3D Map' : '3D Map'
  }));
});

Toggle3dButton.displayName = 'Toggle3dButton';
var StyledToolbar = (0, _styledComponents["default"])(_verticalToolbar["default"])(_templateObject6());

var MapDrawPanel = _react["default"].memo(function (_ref9) {
  var editor = _ref9.editor,
      isActive = _ref9.isActive,
      onToggleMenuPanel = _ref9.onToggleMenuPanel,
      onSetEditorMode = _ref9.onSetEditorMode,
      onToggleEditorVisibility = _ref9.onToggleEditorVisibility;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, isActive ? /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
    show: isActive
  }, /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.EDIT);
    },
    label: "select",
    iconHeight: "22px",
    icon: _icons.CursorClick,
    active: editor.mode === _defaultSettings.EDITOR_MODES.EDIT
  }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_POLYGON);
    },
    label: "polygon",
    iconHeight: "22px",
    icon: _icons.Polygon,
    active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_POLYGON
  }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_RECTANGLE);
    },
    label: "rectangle",
    iconHeight: "22px",
    icon: _icons.Rectangle,
    active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_RECTANGLE
  }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    onClick: onToggleEditorVisibility,
    label: editor.visible ? 'hide' : 'show',
    iconHeight: "22px",
    icon: editor.visible ? _icons.EyeSeen : _icons.EyeUnseen
  })) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleMenuPanel();
    },
    active: isActive,
    "data-tip": true,
    "data-for": "map-draw"
  }, /*#__PURE__*/_react["default"].createElement(_icons.DrawPolygon, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "map-draw",
    message: "Draw on map"
  })));
});

MapDrawPanel.displayName = 'MapDrawPanel';

var MapControlFactory = function MapControlFactory() {
  var MapControl = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapControl, _Component);

    var _super = _createSuper(MapControl);

    function MapControl() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
        return props.layersToRender;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerPanelItemsSelector", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
        return layers.filter(function (l) {
          return l.config.isVisible;
        }).map(function (layer) {
          return {
            id: layer.id,
            name: layer.config.label,
            // layer
            isVisible: layersToRender[layer.id]
          };
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(MapControl, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            dragRotate = _this$props.dragRotate,
            layers = _this$props.layers,
            layersToRender = _this$props.layersToRender,
            isSplit = _this$props.isSplit,
            isExport = _this$props.isExport,
            mapIndex = _this$props.mapIndex,
            mapControls = _this$props.mapControls,
            onTogglePerspective = _this$props.onTogglePerspective,
            onToggleSplitMap = _this$props.onToggleSplitMap,
            onMapToggleLayer = _this$props.onMapToggleLayer,
            onToggleMapControl = _this$props.onToggleMapControl,
            editor = _this$props.editor,
            scale = _this$props.scale,
            readOnly = _this$props.readOnly;
        var _mapControls$visibleL = mapControls.visibleLayers,
            visibleLayers = _mapControls$visibleL === void 0 ? {} : _mapControls$visibleL,
            _mapControls$mapLegen = mapControls.mapLegend,
            mapLegend = _mapControls$mapLegen === void 0 ? {} : _mapControls$mapLegen,
            _mapControls$toggle3d = mapControls.toggle3d,
            toggle3d = _mapControls$toggle3d === void 0 ? {} : _mapControls$toggle3d,
            _mapControls$splitMap = mapControls.splitMap,
            splitMap = _mapControls$splitMap === void 0 ? {} : _mapControls$splitMap,
            _mapControls$mapDraw = mapControls.mapDraw,
            mapDraw = _mapControls$mapDraw === void 0 ? {} : _mapControls$mapDraw;
        return /*#__PURE__*/_react["default"].createElement(StyledMapControl, {
          className: "map-control"
        }, splitMap.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "split-map",
          key: 0
        }, /*#__PURE__*/_react["default"].createElement(SplitMapButton, {
          isSplit: isSplit,
          mapIndex: mapIndex,
          onToggleSplitMap: onToggleSplitMap
        })) : null, isSplit && visibleLayers.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "map-layers",
          key: 1
        }, /*#__PURE__*/_react["default"].createElement(LayerSelectorPanel, {
          items: this.layerPanelItemsSelector(this.props),
          onMapToggleLayer: onMapToggleLayer,
          isActive: visibleLayers.active,
          toggleMenuPanel: function toggleMenuPanel() {
            return onToggleMapControl('visibleLayers');
          }
        })) : null, toggle3d.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "toggle-3d",
          key: 2
        }, /*#__PURE__*/_react["default"].createElement(Toggle3dButton, {
          dragRotate: dragRotate,
          onTogglePerspective: onTogglePerspective
        })) : null, mapLegend.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "show-legend",
          key: 3
        }, /*#__PURE__*/_react["default"].createElement(MapLegendPanel, {
          layers: layers.filter(function (l) {
            return layersToRender[l.id];
          }),
          scale: scale,
          isExport: isExport,
          onMapToggleLayer: onMapToggleLayer,
          isActive: mapLegend.active,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLegend');
          }
        })) : null, mapDraw.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          key: 4
        }, /*#__PURE__*/_react["default"].createElement(MapDrawPanel, {
          isActive: mapDraw.active && mapDraw.activeMapIndex === mapIndex,
          editor: editor,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapDraw');
          },
          onSetEditorMode: this.props.onSetEditorMode,
          onToggleEditorVisibility: this.props.onToggleEditorVisibility
        })) : null);
      }
    }]);
    return MapControl;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapControl, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    dragRotate: _propTypes["default"].bool.isRequired,
    isSplit: _propTypes["default"].bool.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
    layersToRender: _propTypes["default"].object.isRequired,
    mapIndex: _propTypes["default"].number.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    onTogglePerspective: _propTypes["default"].func.isRequired,
    onToggleSplitMap: _propTypes["default"].func.isRequired,
    onToggleMapControl: _propTypes["default"].func.isRequired,
    onSetEditorMode: _propTypes["default"].func.isRequired,
    onToggleEditorVisibility: _propTypes["default"].func.isRequired,
    top: _propTypes["default"].number.isRequired,
    // optional
    readOnly: _propTypes["default"].bool,
    scale: _propTypes["default"].number,
    mapLayers: _propTypes["default"].object,
    editor: _propTypes["default"].object
  });
  (0, _defineProperty2["default"])(MapControl, "defaultProps", {
    isSplit: false,
    top: 0,
    mapIndex: 0
  });
  MapControl.displayName = 'MapControl';
  return MapControl;
};

var _default = MapControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJ3aWR0aCIsInBhZGRpbmciLCJ0b3AiLCJTdHlsZWRNYXBDb250cm9sQWN0aW9uIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsIiwibWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50IiwiZHJvcGRvd25TY3JvbGxCYXIiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXIiLCJtYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvciIsInRpdGxlVGV4dENvbG9yIiwiQWN0aW9uUGFuZWwiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRpc3BsYXlOYW1lIiwiTWFwQ29udHJvbFRvb2x0aXAiLCJSZWFjdCIsIm1lbW8iLCJpZCIsIm1lc3NhZ2UiLCJNYXBMZWdlbmRUb29sdGlwIiwiTGF5ZXJTZWxlY3RvclBhbmVsIiwiaXRlbXMiLCJvbk1hcFRvZ2dsZUxheWVyIiwiaXNBY3RpdmUiLCJ0b2dnbGVNZW51UGFuZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJNYXBDb250cm9sUGFuZWwiLCJoZWFkZXIiLCJvbkNsaWNrIiwic2NhbGUiLCJpc0V4cG9ydCIsInRyYW5zZm9ybSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJNYXBMZWdlbmRQYW5lbCIsImxheWVycyIsIm9uVG9nZ2xlTWVudVBhbmVsIiwiU3BsaXRNYXBCdXR0b24iLCJpc1NwbGl0IiwibWFwSW5kZXgiLCJvblRvZ2dsZVNwbGl0TWFwIiwidW5kZWZpbmVkIiwiVG9nZ2xlM2RCdXR0b24iLCJkcmFnUm90YXRlIiwib25Ub2dnbGVQZXJzcGVjdGl2ZSIsIlN0eWxlZFRvb2xiYXIiLCJWZXJ0aWNhbFRvb2xiYXIiLCJNYXBEcmF3UGFuZWwiLCJlZGl0b3IiLCJvblNldEVkaXRvck1vZGUiLCJvblRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJwb3NpdGlvbiIsIkVESVRPUl9NT0RFUyIsIkVESVQiLCJDdXJzb3JDbGljayIsIm1vZGUiLCJEUkFXX1BPTFlHT04iLCJQb2x5Z29uIiwiRFJBV19SRUNUQU5HTEUiLCJSZWN0YW5nbGUiLCJ2aXNpYmxlIiwiRXllU2VlbiIsIkV5ZVVuc2VlbiIsIk1hcENvbnRyb2xGYWN0b3J5IiwiTWFwQ29udHJvbCIsImxheWVyc1RvUmVuZGVyIiwibGF5ZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJsIiwiY29uZmlnIiwiaXNWaXNpYmxlIiwibWFwIiwibGF5ZXIiLCJuYW1lIiwibGFiZWwiLCJtYXBDb250cm9scyIsIm9uVG9nZ2xlTWFwQ29udHJvbCIsInJlYWRPbmx5IiwidmlzaWJsZUxheWVycyIsIm1hcExlZ2VuZCIsInRvZ2dsZTNkIiwic3BsaXRNYXAiLCJtYXBEcmF3Iiwic2hvdyIsImxheWVyUGFuZWxJdGVtc1NlbGVjdG9yIiwiYWN0aXZlIiwiYWN0aXZlTWFwSW5kZXgiLCJDb21wb25lbnQiLCJkYXRhc2V0cyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXlPZiIsIm51bWJlciIsImZ1bmMiLCJtYXBMYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFjQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUVYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBWixDQUF1QkMsS0FBM0I7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RThDLHNCQUFVTSxJQUFWLENBQWVKLFVBUm5CO0FBU2pCcEQsSUFBQUEsZ0JBQWdCLEVBQUVrRCxzQkFBVU0sSUFBVixDQUFlSixVQVRoQjtBQVVqQmYsSUFBQUEsa0JBQWtCLEVBQUVhLHNCQUFVTSxJQUFWLENBQWVKLFVBVmxCO0FBV2pCM0MsSUFBQUEsZUFBZSxFQUFFeUMsc0JBQVVNLElBQVYsQ0FBZUosVUFYZjtBQVlqQjFDLElBQUFBLHdCQUF3QixFQUFFd0Msc0JBQVVNLElBQVYsQ0FBZUosVUFaeEI7QUFhakI1RixJQUFBQSxHQUFHLEVBQUUwRixzQkFBVUssTUFBVixDQUFpQkgsVUFiTDtBQWVqQjtBQUNBZCxJQUFBQSxRQUFRLEVBQUVZLHNCQUFVRyxJQWhCSDtBQWlCakJoRSxJQUFBQSxLQUFLLEVBQUU2RCxzQkFBVUssTUFqQkE7QUFrQmpCRSxJQUFBQSxTQUFTLEVBQUVQLHNCQUFVQyxNQWxCSjtBQW1CakIzQyxJQUFBQSxNQUFNLEVBQUUwQyxzQkFBVUM7QUFuQkQsR0FGUztBQUFBLG1DQUN4QjNCLFVBRHdCLGtCQXdCTjtBQUNwQjFCLElBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCdEMsSUFBQUEsR0FBRyxFQUFFLENBRmU7QUFHcEJ1QyxJQUFBQSxRQUFRLEVBQUU7QUFIVSxHQXhCTTtBQXNJOUJ5QixFQUFBQSxVQUFVLENBQUNwRCxXQUFYLEdBQXlCLFlBQXpCO0FBRUEsU0FBT29ELFVBQVA7QUFDRCxDQXpJRDs7ZUEySWVELGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7VG9vbHRpcCwgSWNvblJvdW5kU21hbGwsIE1hcENvbnRyb2xCdXR0b259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNYXBMYXllclNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL21hcC1sYXllci1zZWxlY3Rvcic7XG5pbXBvcnQgS2VwbGVyR2xMb2dvIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvZ28nO1xuaW1wb3J0IE1hcExlZ2VuZCBmcm9tICcuL21hcC1sZWdlbmQnO1xuaW1wb3J0IHtcbiAgQ2xvc2UsXG4gIFNwbGl0LFxuICBMZWdlbmQsXG4gIEN1YmUzZCxcbiAgRGVsZXRlLFxuICBMYXllcnMsXG4gIERyYXdQb2x5Z29uLFxuICBQb2x5Z29uLFxuICBSZWN0YW5nbGUsXG4gIEN1cnNvckNsaWNrLFxuICBFeWVTZWVuLFxuICBFeWVVbnNlZW5cbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFZlcnRpY2FsVG9vbGJhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi92ZXJ0aWNhbC10b29sYmFyJztcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyLWl0ZW0nO1xuaW1wb3J0IHtFRElUT1JfTU9ERVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgU3R5bGVkTWFwQ29udHJvbCA9IHN0eWxlZC5kaXZgXG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBDb250cm9sLndpZHRofXB4O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wucGFkZGluZ31weDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogJHtwcm9wcyA9PiBwcm9wcy50b3B9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3J9O1xuICBmbGV4LWdyb3c6IDE7XG4gIHotaW5kZXg6IDE7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duU2Nyb2xsQmFyfTtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvcn07XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFjdGlvblBhbmVsID0gKHtjbGFzc05hbWUsIGNoaWxkcmVufSkgPT4gKFxuICA8U3R5bGVkTWFwQ29udHJvbEFjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvU3R5bGVkTWFwQ29udHJvbEFjdGlvbj5cbik7XG5cbkFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0FjdGlvblBhbmVsJztcblxuY29uc3QgTWFwQ29udHJvbFRvb2x0aXAgPSBSZWFjdC5tZW1vKCh7aWQsIG1lc3NhZ2V9KSA9PiAoXG4gIDxUb29sdGlwIGlkPXtpZH0gcGxhY2U9XCJsZWZ0XCIgZWZmZWN0PVwic29saWRcIj5cbiAgICA8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG4gIDwvVG9vbHRpcD5cbikpO1xuXG5NYXBDb250cm9sVG9vbHRpcC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sVG9vbHRpcCc7XG5cbmNvbnN0IE1hcExlZ2VuZFRvb2x0aXAgPSAoe2lkLCBtZXNzYWdlfSkgPT4gKFxuICA8VG9vbHRpcCBpZD17aWR9IHBsYWNlPVwibGVmdFwiIGVmZmVjdD1cInNvbGlkXCI+XG4gICAgPHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuICA8L1Rvb2x0aXA+XG4pO1xuXG5jb25zdCBMYXllclNlbGVjdG9yUGFuZWwgPSBSZWFjdC5tZW1vKCh7aXRlbXMsIG9uTWFwVG9nZ2xlTGF5ZXIsIGlzQWN0aXZlLCB0b2dnbGVNZW51UGFuZWx9KSA9PlxuICAhaXNBY3RpdmUgPyAoXG4gICAgPE1hcENvbnRyb2xCdXR0b25cbiAgICAgIGtleT17MX1cbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLWJ1dHRvbiB0b2dnbGUtbGF5ZXJcIlxuICAgICAgZGF0YS10aXBcbiAgICAgIGRhdGEtZm9yPVwidG9nZ2xlLWxheWVyXCJcbiAgICA+XG4gICAgICA8TGF5ZXJzIGhlaWdodD1cIjIycHhcIiAvPlxuICAgICAgPE1hcENvbnRyb2xUb29sdGlwXG4gICAgICAgIGlkPVwidG9nZ2xlLWxheWVyXCJcbiAgICAgICAgbWVzc2FnZT17aXNBY3RpdmUgPyAnSGlkZSBsYXllciBwYW5lbCcgOiAnU2hvdyBsYXllciBwYW5lbCd9XG4gICAgICAvPlxuICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgKSA6IChcbiAgICA8TWFwQ29udHJvbFBhbmVsIGhlYWRlcj1cIlZpc2libGUgbGF5ZXJzXCIgb25DbGljaz17dG9nZ2xlTWVudVBhbmVsfT5cbiAgICAgIDxNYXBMYXllclNlbGVjdG9yIGxheWVycz17aXRlbXN9IG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9IC8+XG4gICAgPC9NYXBDb250cm9sUGFuZWw+XG4gIClcbik7XG5cbkxheWVyU2VsZWN0b3JQYW5lbC5kaXNwbGF5TmFtZSA9ICdMYXllclNlbGVjdG9yUGFuZWwnO1xuXG5jb25zdCBNYXBDb250cm9sUGFuZWwgPSBSZWFjdC5tZW1vKCh7Y2hpbGRyZW4sIGhlYWRlciwgb25DbGljaywgc2NhbGUgPSAxLCBpc0V4cG9ydH0pID0+IChcbiAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbFxuICAgIHN0eWxlPXt7XG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlKGNhbGMoLSR7MjUgKiAoc2NhbGUgLSAxKX0lIC0gJHsxMCAqXG4gICAgICAgIHNjYWxlfXB4KSwgY2FsYygkezI1ICogKHNjYWxlIC0gMSl9JSArICR7MTAgKiBzY2FsZX1weCkpYCxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzhweCdcbiAgICB9fVxuICA+XG4gICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlcj5cbiAgICAgIHtpc0V4cG9ydCA/IChcbiAgICAgICAgPEtlcGxlckdsTG9nbyB2ZXJzaW9uPXtmYWxzZX0gYXBwTmFtZT1cImtlcGxlci5nbFwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0+e2hlYWRlcn08L3NwYW4+XG4gICAgICApfVxuICAgICAge2lzRXhwb3J0ID8gbnVsbCA6IChcbiAgICAgICAgPEljb25Sb3VuZFNtYWxsPlxuICAgICAgICAgIDxDbG9zZSBoZWlnaHQ9XCIxNnB4XCIgb25DbGljaz17b25DbGlja30gLz5cbiAgICAgICAgPC9JY29uUm91bmRTbWFsbD5cbiAgICAgICl9XG4gICAgPC9TdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXI+XG4gICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQ+e2NoaWxkcmVufTwvU3R5bGVkTWFwQ29udHJvbFBhbmVsQ29udGVudD5cbiAgPC9TdHlsZWRNYXBDb250cm9sUGFuZWw+XG4pKTtcblxuTWFwQ29udHJvbFBhbmVsLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xQYW5lbCc7XG5cbmNvbnN0IE1hcExlZ2VuZFBhbmVsID0gKHtsYXllcnMsIGlzQWN0aXZlLCBzY2FsZSwgb25Ub2dnbGVNZW51UGFuZWwsIGlzRXhwb3J0fSkgPT5cbiAgIWlzQWN0aXZlID8gKFxuICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICBrZXk9ezJ9XG4gICAgICBkYXRhLXRpcFxuICAgICAgZGF0YS1mb3I9XCJzaG93LWxlZ2VuZFwiXG4gICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gc2hvdy1sZWdlbmRcIlxuICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25Ub2dnbGVNZW51UGFuZWwoKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExlZ2VuZCBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgIDxNYXBMZWdlbmRUb29sdGlwIGlkPVwic2hvdy1sZWdlbmRcIiBtZXNzYWdlPXsnc2hvdyBsZWdlbmQnfSAvPlxuICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgKSA6IChcbiAgICA8TWFwQ29udHJvbFBhbmVsXG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWFkZXI9eydMYXllciBMZWdlbmQnfVxuICAgICAgb25DbGljaz17b25Ub2dnbGVNZW51UGFuZWx9XG4gICAgICBpc0V4cG9ydD17aXNFeHBvcnR9XG4gICAgPlxuICAgICAgPE1hcExlZ2VuZCBsYXllcnM9e2xheWVyc30gLz5cbiAgICA8L01hcENvbnRyb2xQYW5lbD5cbiAgKTtcblxuTWFwTGVnZW5kUGFuZWwuZGlzcGxheU5hbWUgPSAnTWFwQ29udHJvbFBhbmVsJztcblxuY29uc3QgU3BsaXRNYXBCdXR0b24gPSBSZWFjdC5tZW1vKCh7aXNTcGxpdCwgbWFwSW5kZXgsIG9uVG9nZ2xlU3BsaXRNYXB9KSA9PiAoXG4gIDxNYXBDb250cm9sQnV0dG9uXG4gICAgYWN0aXZlPXtpc1NwbGl0fVxuICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25Ub2dnbGVTcGxpdE1hcChpc1NwbGl0ID8gbWFwSW5kZXggOiB1bmRlZmluZWQpO1xuICAgIH19XG4gICAga2V5PXtgc3BsaXQtJHtpc1NwbGl0fWB9XG4gICAgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2wtYnV0dG9uIHNwbGl0LW1hcFwiXG4gICAgZGF0YS10aXBcbiAgICBkYXRhLWZvcj1cImFjdGlvbi10b2dnbGVcIlxuICA+XG4gICAge2lzU3BsaXQgPyA8RGVsZXRlIGhlaWdodD1cIjE4cHhcIiAvPiA6IDxTcGxpdCBoZWlnaHQ9XCIxOHB4XCIgLz59XG4gICAgPE1hcENvbnRyb2xUb29sdGlwXG4gICAgICBpZD1cImFjdGlvbi10b2dnbGVcIlxuICAgICAgbWVzc2FnZT17aXNTcGxpdCA/ICdDbG9zZSBjdXJyZW50IHBhbmVsJyA6ICdTd2l0Y2ggdG8gZHVhbCBtYXAgdmlldyd9XG4gICAgLz5cbiAgPC9NYXBDb250cm9sQnV0dG9uPlxuKSk7XG5cblNwbGl0TWFwQnV0dG9uLmRpc3BsYXlOYW1lID0gJ1NwbGl0TWFwQnV0dG9uJztcblxuY29uc3QgVG9nZ2xlM2RCdXR0b24gPSBSZWFjdC5tZW1vKCh7ZHJhZ1JvdGF0ZSwgb25Ub2dnbGVQZXJzcGVjdGl2ZX0pID0+IChcbiAgPE1hcENvbnRyb2xCdXR0b25cbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmUoKTtcbiAgICB9fVxuICAgIGFjdGl2ZT17ZHJhZ1JvdGF0ZX1cbiAgICBkYXRhLXRpcFxuICAgIGRhdGEtZm9yPVwiYWN0aW9uLTNkXCJcbiAgPlxuICAgIDxDdWJlM2QgaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgPE1hcENvbnRyb2xUb29sdGlwIGlkPVwiYWN0aW9uLTNkXCIgbWVzc2FnZT17ZHJhZ1JvdGF0ZSA/ICdEaXNhYmxlIDNEIE1hcCcgOiAnM0QgTWFwJ30gLz5cbiAgPC9NYXBDb250cm9sQnV0dG9uPlxuKSk7XG5cblRvZ2dsZTNkQnV0dG9uLmRpc3BsYXlOYW1lID0gJ1RvZ2dsZTNkQnV0dG9uJztcblxuY29uc3QgU3R5bGVkVG9vbGJhciA9IHN0eWxlZChWZXJ0aWNhbFRvb2xiYXIpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMnB4O1xuYDtcblxuY29uc3QgTWFwRHJhd1BhbmVsID0gUmVhY3QubWVtbyhcbiAgKHtlZGl0b3IsIGlzQWN0aXZlLCBvblRvZ2dsZU1lbnVQYW5lbCwgb25TZXRFZGl0b3JNb2RlLCBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHl9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17aXNBY3RpdmV9PlxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2V0RWRpdG9yTW9kZShFRElUT1JfTU9ERVMuRURJVCl9XG4gICAgICAgICAgICAgIGxhYmVsPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICBpY29uPXtDdXJzb3JDbGlja31cbiAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkVESVR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2V0RWRpdG9yTW9kZShFRElUT1JfTU9ERVMuRFJBV19QT0xZR09OKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJwb2x5Z29uXCJcbiAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICBpY29uPXtQb2x5Z29ufVxuICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRFJBV19QT0xZR09OfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUb29sYmFySXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUkVDVEFOR0xFKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJyZWN0YW5nbGVcIlxuICAgICAgICAgICAgICBpY29uSGVpZ2h0PVwiMjJweFwiXG4gICAgICAgICAgICAgIGljb249e1JlY3RhbmdsZX1cbiAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkRSQVdfUkVDVEFOR0xFfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUb29sYmFySXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUVkaXRvclZpc2liaWxpdHl9XG4gICAgICAgICAgICAgIGxhYmVsPXtlZGl0b3IudmlzaWJsZSA/ICdoaWRlJyA6ICdzaG93J31cbiAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICBpY29uPXtlZGl0b3IudmlzaWJsZSA/IEV5ZVNlZW4gOiBFeWVVbnNlZW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3R5bGVkVG9vbGJhcj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgIGRhdGEtZm9yPVwibWFwLWRyYXdcIlxuICAgICAgICA+XG4gICAgICAgICAgPERyYXdQb2x5Z29uIGhlaWdodD1cIjIycHhcIiAvPlxuICAgICAgICAgIDxNYXBDb250cm9sVG9vbHRpcCBpZD1cIm1hcC1kcmF3XCIgbWVzc2FnZT1cIkRyYXcgb24gbWFwXCIgLz5cbiAgICAgICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuTWFwRHJhd1BhbmVsLmRpc3BsYXlOYW1lID0gJ01hcERyYXdQYW5lbCc7XG5cbmNvbnN0IE1hcENvbnRyb2xGYWN0b3J5ID0gKCkgPT4ge1xuICBjbGFzcyBNYXBDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGRyYWdSb3RhdGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICBpc1NwbGl0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICAgIGxheWVyc1RvUmVuZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbWFwQ29udHJvbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvblRvZ2dsZVNwbGl0TWFwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25Ub2dnbGVNYXBDb250cm9sOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25TZXRFZGl0b3JNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAgIC8vIG9wdGlvbmFsXG4gICAgICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzY2FsZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcExheWVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgaXNTcGxpdDogZmFsc2UsXG4gICAgICB0b3A6IDAsXG4gICAgICBtYXBJbmRleDogMFxuICAgIH07XG5cbiAgICBsYXllclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzO1xuICAgIGxheWVyc1RvUmVuZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllcnNUb1JlbmRlcjtcbiAgICBsYXllclBhbmVsSXRlbXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllclNlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yLFxuICAgICAgKGxheWVycywgbGF5ZXJzVG9SZW5kZXIpID0+XG4gICAgICAgIGxheWVyc1xuICAgICAgICAgIC5maWx0ZXIobCA9PiBsLmNvbmZpZy5pc1Zpc2libGUpXG4gICAgICAgICAgLm1hcChsYXllciA9PiAoe1xuICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgbmFtZTogbGF5ZXIuY29uZmlnLmxhYmVsLFxuICAgICAgICAgICAgLy8gbGF5ZXJcbiAgICAgICAgICAgIGlzVmlzaWJsZTogbGF5ZXJzVG9SZW5kZXJbbGF5ZXIuaWRdXG4gICAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZHJhZ1JvdGF0ZSxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllcnNUb1JlbmRlcixcbiAgICAgICAgaXNTcGxpdCxcbiAgICAgICAgaXNFeHBvcnQsXG4gICAgICAgIG1hcEluZGV4LFxuICAgICAgICBtYXBDb250cm9scyxcbiAgICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZSxcbiAgICAgICAgb25Ub2dnbGVTcGxpdE1hcCxcbiAgICAgICAgb25NYXBUb2dnbGVMYXllcixcbiAgICAgICAgb25Ub2dnbGVNYXBDb250cm9sLFxuICAgICAgICBlZGl0b3IsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICByZWFkT25seVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlzaWJsZUxheWVycyA9IHt9LFxuICAgICAgICBtYXBMZWdlbmQgPSB7fSxcbiAgICAgICAgdG9nZ2xlM2QgPSB7fSxcbiAgICAgICAgc3BsaXRNYXAgPSB7fSxcbiAgICAgICAgbWFwRHJhdyA9IHt9XG4gICAgICB9ID0gbWFwQ29udHJvbHM7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNYXBDb250cm9sIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sXCI+XG4gICAgICAgICAgey8qIFNwbGl0IE1hcCAqL31cbiAgICAgICAgICB7c3BsaXRNYXAuc2hvdyAmJiByZWFkT25seSAhPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJzcGxpdC1tYXBcIiBrZXk9ezB9PlxuICAgICAgICAgICAgICA8U3BsaXRNYXBCdXR0b25cbiAgICAgICAgICAgICAgICBpc1NwbGl0PXtpc1NwbGl0fVxuICAgICAgICAgICAgICAgIG1hcEluZGV4PXttYXBJbmRleH1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZVNwbGl0TWFwPXtvblRvZ2dsZVNwbGl0TWFwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBNYXAgTGF5ZXJzICovfVxuICAgICAgICAgIHtpc1NwbGl0ICYmIHZpc2libGVMYXllcnMuc2hvdyAmJiByZWFkT25seSAhPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJtYXAtbGF5ZXJzXCIga2V5PXsxfT5cbiAgICAgICAgICAgICAgPExheWVyU2VsZWN0b3JQYW5lbFxuICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLmxheWVyUGFuZWxJdGVtc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3Zpc2libGVMYXllcnMuYWN0aXZlfVxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCd2aXNpYmxlTGF5ZXJzJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIDNEIE1hcCAqL31cbiAgICAgICAgICB7dG9nZ2xlM2Quc2hvdyA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJ0b2dnbGUtM2RcIiBrZXk9ezJ9PlxuICAgICAgICAgICAgICA8VG9nZ2xlM2RCdXR0b24gZHJhZ1JvdGF0ZT17ZHJhZ1JvdGF0ZX0gb25Ub2dnbGVQZXJzcGVjdGl2ZT17b25Ub2dnbGVQZXJzcGVjdGl2ZX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7LyogTWFwIExlZ2VuZCAqL31cbiAgICAgICAgICB7bWFwTGVnZW5kLnNob3cgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwic2hvdy1sZWdlbmRcIiBrZXk9ezN9PlxuICAgICAgICAgICAgICA8TWFwTGVnZW5kUGFuZWxcbiAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVycy5maWx0ZXIobCA9PiBsYXllcnNUb1JlbmRlcltsLmlkXSl9XG4gICAgICAgICAgICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgICAgICAgICAgIGlzRXhwb3J0PXtpc0V4cG9ydH1cbiAgICAgICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBMZWdlbmQuYWN0aXZlfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsPXsoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ21hcExlZ2VuZCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHttYXBEcmF3LnNob3cgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwga2V5PXs0fT5cbiAgICAgICAgICAgICAgPE1hcERyYXdQYW5lbFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBEcmF3LmFjdGl2ZSAmJiBtYXBEcmF3LmFjdGl2ZU1hcEluZGV4ID09PSBtYXBJbmRleH1cbiAgICAgICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCdtYXBEcmF3Jyl9XG4gICAgICAgICAgICAgICAgb25TZXRFZGl0b3JNb2RlPXt0aGlzLnByb3BzLm9uU2V0RWRpdG9yTW9kZX1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHk9e3RoaXMucHJvcHMub25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRNYXBDb250cm9sPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBNYXBDb250cm9sLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2wnO1xuXG4gIHJldHVybiBNYXBDb250cm9sO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwQ29udHJvbEZhY3Rvcnk7XG4iXX0=