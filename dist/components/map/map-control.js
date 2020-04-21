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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJ3aWR0aCIsInBhZGRpbmciLCJ0b3AiLCJTdHlsZWRNYXBDb250cm9sQWN0aW9uIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsIiwibWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50IiwiZHJvcGRvd25TY3JvbGxCYXIiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXIiLCJtYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvciIsInRpdGxlVGV4dENvbG9yIiwiQWN0aW9uUGFuZWwiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRpc3BsYXlOYW1lIiwiTWFwQ29udHJvbFRvb2x0aXAiLCJSZWFjdCIsIm1lbW8iLCJpZCIsIm1lc3NhZ2UiLCJNYXBMZWdlbmRUb29sdGlwIiwiTGF5ZXJTZWxlY3RvclBhbmVsIiwiaXRlbXMiLCJvbk1hcFRvZ2dsZUxheWVyIiwiaXNBY3RpdmUiLCJ0b2dnbGVNZW51UGFuZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJNYXBDb250cm9sUGFuZWwiLCJoZWFkZXIiLCJvbkNsaWNrIiwic2NhbGUiLCJpc0V4cG9ydCIsInRyYW5zZm9ybSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJNYXBMZWdlbmRQYW5lbCIsImxheWVycyIsIm9uVG9nZ2xlTWVudVBhbmVsIiwiU3BsaXRNYXBCdXR0b24iLCJpc1NwbGl0IiwibWFwSW5kZXgiLCJvblRvZ2dsZVNwbGl0TWFwIiwidW5kZWZpbmVkIiwiVG9nZ2xlM2RCdXR0b24iLCJkcmFnUm90YXRlIiwib25Ub2dnbGVQZXJzcGVjdGl2ZSIsIlN0eWxlZFRvb2xiYXIiLCJWZXJ0aWNhbFRvb2xiYXIiLCJNYXBEcmF3UGFuZWwiLCJlZGl0b3IiLCJvblNldEVkaXRvck1vZGUiLCJvblRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJwb3NpdGlvbiIsIkVESVRPUl9NT0RFUyIsIkVESVQiLCJDdXJzb3JDbGljayIsIm1vZGUiLCJEUkFXX1BPTFlHT04iLCJQb2x5Z29uIiwiRFJBV19SRUNUQU5HTEUiLCJSZWN0YW5nbGUiLCJ2aXNpYmxlIiwiRXllU2VlbiIsIkV5ZVVuc2VlbiIsIk1hcENvbnRyb2xGYWN0b3J5IiwiTWFwQ29udHJvbCIsImxheWVyc1RvUmVuZGVyIiwibGF5ZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJsIiwiY29uZmlnIiwiaXNWaXNpYmxlIiwibWFwIiwibGF5ZXIiLCJuYW1lIiwibGFiZWwiLCJtYXBDb250cm9scyIsIm9uVG9nZ2xlTWFwQ29udHJvbCIsInJlYWRPbmx5IiwidmlzaWJsZUxheWVycyIsIm1hcExlZ2VuZCIsInRvZ2dsZTNkIiwic3BsaXRNYXAiLCJtYXBEcmF3Iiwic2hvdyIsImxheWVyUGFuZWxJdGVtc1NlbGVjdG9yIiwiYWN0aXZlIiwiYWN0aXZlTWFwSW5kZXgiLCJDb21wb25lbnQiLCJkYXRhc2V0cyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXlPZiIsIm51bWJlciIsImZ1bmMiLCJtYXBMYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFjQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUVYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBWixDQUF1QkMsS0FBM0I7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RThDLHNCQUFVTSxJQUFWLENBQWVKLFVBUm5CO0FBU2pCcEQsSUFBQUEsZ0JBQWdCLEVBQUVrRCxzQkFBVU0sSUFBVixDQUFlSixVQVRoQjtBQVVqQmYsSUFBQUEsa0JBQWtCLEVBQUVhLHNCQUFVTSxJQUFWLENBQWVKLFVBVmxCO0FBV2pCM0MsSUFBQUEsZUFBZSxFQUFFeUMsc0JBQVVNLElBQVYsQ0FBZUosVUFYZjtBQVlqQjFDLElBQUFBLHdCQUF3QixFQUFFd0Msc0JBQVVNLElBQVYsQ0FBZUosVUFaeEI7QUFhakI1RixJQUFBQSxHQUFHLEVBQUUwRixzQkFBVUssTUFBVixDQUFpQkgsVUFiTDtBQWVqQjtBQUNBZCxJQUFBQSxRQUFRLEVBQUVZLHNCQUFVRyxJQWhCSDtBQWlCakJoRSxJQUFBQSxLQUFLLEVBQUU2RCxzQkFBVUssTUFqQkE7QUFrQmpCRSxJQUFBQSxTQUFTLEVBQUVQLHNCQUFVQyxNQWxCSjtBQW1CakIzQyxJQUFBQSxNQUFNLEVBQUUwQyxzQkFBVUM7QUFuQkQsR0FGUztBQUFBLG1DQUN4QjNCLFVBRHdCLGtCQXdCTjtBQUNwQjFCLElBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCdEMsSUFBQUEsR0FBRyxFQUFFLENBRmU7QUFHcEJ1QyxJQUFBQSxRQUFRLEVBQUU7QUFIVSxHQXhCTTtBQXNJOUJ5QixFQUFBQSxVQUFVLENBQUNwRCxXQUFYLEdBQXlCLFlBQXpCO0FBRUEsU0FBT29ELFVBQVA7QUFDRCxDQXpJRDs7ZUEySWVELGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQge1Rvb2x0aXAsIEljb25Sb3VuZFNtYWxsLCBNYXBDb250cm9sQnV0dG9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYXBMYXllclNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL21hcC1sYXllci1zZWxlY3Rvcic7XHJcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XHJcbmltcG9ydCBNYXBMZWdlbmQgZnJvbSAnLi9tYXAtbGVnZW5kJztcclxuaW1wb3J0IHtcclxuICBDbG9zZSxcclxuICBTcGxpdCxcclxuICBMZWdlbmQsXHJcbiAgQ3ViZTNkLFxyXG4gIERlbGV0ZSxcclxuICBMYXllcnMsXHJcbiAgRHJhd1BvbHlnb24sXHJcbiAgUG9seWdvbixcclxuICBSZWN0YW5nbGUsXHJcbiAgQ3Vyc29yQ2xpY2ssXHJcbiAgRXllU2VlbixcclxuICBFeWVVbnNlZW5cclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCBWZXJ0aWNhbFRvb2xiYXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vdmVydGljYWwtdG9vbGJhcic7XHJcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyLWl0ZW0nO1xyXG5pbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuY29uc3QgU3R5bGVkTWFwQ29udHJvbCA9IHN0eWxlZC5kaXZgXHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC53aWR0aH1weDtcclxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wucGFkZGluZ31weDtcclxuICB6LWluZGV4OiAxMDtcclxuICB0b3A6ICR7cHJvcHMgPT4gcHJvcHMudG9wfXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBQYW5lbEJhY2tncm91bmRDb2xvcn07XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25TY3JvbGxCYXJ9O1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yfTtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBY3Rpb25QYW5lbCA9ICh7Y2xhc3NOYW1lLCBjaGlsZHJlbn0pID0+IChcclxuICA8U3R5bGVkTWFwQ29udHJvbEFjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvU3R5bGVkTWFwQ29udHJvbEFjdGlvbj5cclxuKTtcclxuXHJcbkFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0FjdGlvblBhbmVsJztcclxuXHJcbmNvbnN0IE1hcENvbnRyb2xUb29sdGlwID0gUmVhY3QubWVtbygoe2lkLCBtZXNzYWdlfSkgPT4gKFxyXG4gIDxUb29sdGlwIGlkPXtpZH0gcGxhY2U9XCJsZWZ0XCIgZWZmZWN0PVwic29saWRcIj5cclxuICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cclxuICA8L1Rvb2x0aXA+XHJcbikpO1xyXG5cclxuTWFwQ29udHJvbFRvb2x0aXAuZGlzcGxheU5hbWUgPSAnTWFwQ29udHJvbFRvb2x0aXAnO1xyXG5cclxuY29uc3QgTWFwTGVnZW5kVG9vbHRpcCA9ICh7aWQsIG1lc3NhZ2V9KSA9PiAoXHJcbiAgPFRvb2x0aXAgaWQ9e2lkfSBwbGFjZT1cImxlZnRcIiBlZmZlY3Q9XCJzb2xpZFwiPlxyXG4gICAgPHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxyXG4gIDwvVG9vbHRpcD5cclxuKTtcclxuXHJcbmNvbnN0IExheWVyU2VsZWN0b3JQYW5lbCA9IFJlYWN0Lm1lbW8oKHtpdGVtcywgb25NYXBUb2dnbGVMYXllciwgaXNBY3RpdmUsIHRvZ2dsZU1lbnVQYW5lbH0pID0+XHJcbiAgIWlzQWN0aXZlID8gKFxyXG4gICAgPE1hcENvbnRyb2xCdXR0b25cclxuICAgICAga2V5PXsxfVxyXG4gICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlTWVudVBhbmVsKCk7XHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLWJ1dHRvbiB0b2dnbGUtbGF5ZXJcIlxyXG4gICAgICBkYXRhLXRpcFxyXG4gICAgICBkYXRhLWZvcj1cInRvZ2dsZS1sYXllclwiXHJcbiAgICA+XHJcbiAgICAgIDxMYXllcnMgaGVpZ2h0PVwiMjJweFwiIC8+XHJcbiAgICAgIDxNYXBDb250cm9sVG9vbHRpcFxyXG4gICAgICAgIGlkPVwidG9nZ2xlLWxheWVyXCJcclxuICAgICAgICBtZXNzYWdlPXtpc0FjdGl2ZSA/ICdIaWRlIGxheWVyIHBhbmVsJyA6ICdTaG93IGxheWVyIHBhbmVsJ31cclxuICAgICAgLz5cclxuICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cclxuICApIDogKFxyXG4gICAgPE1hcENvbnRyb2xQYW5lbCBoZWFkZXI9XCJWaXNpYmxlIGxheWVyc1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVQYW5lbH0+XHJcbiAgICAgIDxNYXBMYXllclNlbGVjdG9yIGxheWVycz17aXRlbXN9IG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9IC8+XHJcbiAgICA8L01hcENvbnRyb2xQYW5lbD5cclxuICApXHJcbik7XHJcblxyXG5MYXllclNlbGVjdG9yUGFuZWwuZGlzcGxheU5hbWUgPSAnTGF5ZXJTZWxlY3RvclBhbmVsJztcclxuXHJcbmNvbnN0IE1hcENvbnRyb2xQYW5lbCA9IFJlYWN0Lm1lbW8oKHtjaGlsZHJlbiwgaGVhZGVyLCBvbkNsaWNrLCBzY2FsZSA9IDEsIGlzRXhwb3J0fSkgPT4gKFxyXG4gIDxTdHlsZWRNYXBDb250cm9sUGFuZWxcclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KSB0cmFuc2xhdGUoY2FsYygtJHsyNSAqIChzY2FsZSAtIDEpfSUgLSAkezEwICpcclxuICAgICAgICBzY2FsZX1weCksIGNhbGMoJHsyNSAqIChzY2FsZSAtIDEpfSUgKyAkezEwICogc2NhbGV9cHgpKWAsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzhweCdcclxuICAgIH19XHJcbiAgPlxyXG4gICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlcj5cclxuICAgICAge2lzRXhwb3J0ID8gKFxyXG4gICAgICAgIDxLZXBsZXJHbExvZ28gdmVyc2lvbj17ZmFsc2V9IGFwcE5hbWU9XCJrZXBsZXIuZ2xcIiAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fT57aGVhZGVyfTwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAge2lzRXhwb3J0ID8gbnVsbCA6IChcclxuICAgICAgICA8SWNvblJvdW5kU21hbGw+XHJcbiAgICAgICAgICA8Q2xvc2UgaGVpZ2h0PVwiMTZweFwiIG9uQ2xpY2s9e29uQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9JY29uUm91bmRTbWFsbD5cclxuICAgICAgKX1cclxuICAgIDwvU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyPlxyXG4gICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQ+e2NoaWxkcmVufTwvU3R5bGVkTWFwQ29udHJvbFBhbmVsQ29udGVudD5cclxuICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbD5cclxuKSk7XHJcblxyXG5NYXBDb250cm9sUGFuZWwuZGlzcGxheU5hbWUgPSAnTWFwQ29udHJvbFBhbmVsJztcclxuXHJcbmNvbnN0IE1hcExlZ2VuZFBhbmVsID0gKHtsYXllcnMsIGlzQWN0aXZlLCBzY2FsZSwgb25Ub2dnbGVNZW51UGFuZWwsIGlzRXhwb3J0fSkgPT5cclxuICAhaXNBY3RpdmUgPyAoXHJcbiAgICA8TWFwQ29udHJvbEJ1dHRvblxyXG4gICAgICBrZXk9ezJ9XHJcbiAgICAgIGRhdGEtdGlwXHJcbiAgICAgIGRhdGEtZm9yPVwic2hvdy1sZWdlbmRcIlxyXG4gICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gc2hvdy1sZWdlbmRcIlxyXG4gICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25Ub2dnbGVNZW51UGFuZWwoKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPExlZ2VuZCBoZWlnaHQ9XCIyMnB4XCIgLz5cclxuICAgICAgPE1hcExlZ2VuZFRvb2x0aXAgaWQ9XCJzaG93LWxlZ2VuZFwiIG1lc3NhZ2U9eydzaG93IGxlZ2VuZCd9IC8+XHJcbiAgICA8L01hcENvbnRyb2xCdXR0b24+XHJcbiAgKSA6IChcclxuICAgIDxNYXBDb250cm9sUGFuZWxcclxuICAgICAgc2NhbGU9e3NjYWxlfVxyXG4gICAgICBoZWFkZXI9eydMYXllciBMZWdlbmQnfVxyXG4gICAgICBvbkNsaWNrPXtvblRvZ2dsZU1lbnVQYW5lbH1cclxuICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxyXG4gICAgPlxyXG4gICAgICA8TWFwTGVnZW5kIGxheWVycz17bGF5ZXJzfSAvPlxyXG4gICAgPC9NYXBDb250cm9sUGFuZWw+XHJcbiAgKTtcclxuXHJcbk1hcExlZ2VuZFBhbmVsLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xQYW5lbCc7XHJcblxyXG5jb25zdCBTcGxpdE1hcEJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHtpc1NwbGl0LCBtYXBJbmRleCwgb25Ub2dnbGVTcGxpdE1hcH0pID0+IChcclxuICA8TWFwQ29udHJvbEJ1dHRvblxyXG4gICAgYWN0aXZlPXtpc1NwbGl0fVxyXG4gICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgb25Ub2dnbGVTcGxpdE1hcChpc1NwbGl0ID8gbWFwSW5kZXggOiB1bmRlZmluZWQpO1xyXG4gICAgfX1cclxuICAgIGtleT17YHNwbGl0LSR7aXNTcGxpdH1gfVxyXG4gICAgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2wtYnV0dG9uIHNwbGl0LW1hcFwiXHJcbiAgICBkYXRhLXRpcFxyXG4gICAgZGF0YS1mb3I9XCJhY3Rpb24tdG9nZ2xlXCJcclxuICA+XHJcbiAgICB7aXNTcGxpdCA/IDxEZWxldGUgaGVpZ2h0PVwiMThweFwiIC8+IDogPFNwbGl0IGhlaWdodD1cIjE4cHhcIiAvPn1cclxuICAgIDxNYXBDb250cm9sVG9vbHRpcFxyXG4gICAgICBpZD1cImFjdGlvbi10b2dnbGVcIlxyXG4gICAgICBtZXNzYWdlPXtpc1NwbGl0ID8gJ0Nsb3NlIGN1cnJlbnQgcGFuZWwnIDogJ1N3aXRjaCB0byBkdWFsIG1hcCB2aWV3J31cclxuICAgIC8+XHJcbiAgPC9NYXBDb250cm9sQnV0dG9uPlxyXG4pKTtcclxuXHJcblNwbGl0TWFwQnV0dG9uLmRpc3BsYXlOYW1lID0gJ1NwbGl0TWFwQnV0dG9uJztcclxuXHJcbmNvbnN0IFRvZ2dsZTNkQnV0dG9uID0gUmVhY3QubWVtbygoe2RyYWdSb3RhdGUsIG9uVG9nZ2xlUGVyc3BlY3RpdmV9KSA9PiAoXHJcbiAgPE1hcENvbnRyb2xCdXR0b25cclxuICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmUoKTtcclxuICAgIH19XHJcbiAgICBhY3RpdmU9e2RyYWdSb3RhdGV9XHJcbiAgICBkYXRhLXRpcFxyXG4gICAgZGF0YS1mb3I9XCJhY3Rpb24tM2RcIlxyXG4gID5cclxuICAgIDxDdWJlM2QgaGVpZ2h0PVwiMjJweFwiIC8+XHJcbiAgICA8TWFwQ29udHJvbFRvb2x0aXAgaWQ9XCJhY3Rpb24tM2RcIiBtZXNzYWdlPXtkcmFnUm90YXRlID8gJ0Rpc2FibGUgM0QgTWFwJyA6ICczRCBNYXAnfSAvPlxyXG4gIDwvTWFwQ29udHJvbEJ1dHRvbj5cclxuKSk7XHJcblxyXG5Ub2dnbGUzZEJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdUb2dnbGUzZEJ1dHRvbic7XHJcblxyXG5jb25zdCBTdHlsZWRUb29sYmFyID0gc3R5bGVkKFZlcnRpY2FsVG9vbGJhcilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgTWFwRHJhd1BhbmVsID0gUmVhY3QubWVtbyhcclxuICAoe2VkaXRvciwgaXNBY3RpdmUsIG9uVG9nZ2xlTWVudVBhbmVsLCBvblNldEVkaXRvck1vZGUsIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxyXG4gICAgICAgIHtpc0FjdGl2ZSA/IChcclxuICAgICAgICAgIDxTdHlsZWRUb29sYmFyIHNob3c9e2lzQWN0aXZlfT5cclxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZXRFZGl0b3JNb2RlKEVESVRPUl9NT0RFUy5FRElUKX1cclxuICAgICAgICAgICAgICBsYWJlbD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxyXG4gICAgICAgICAgICAgIGljb249e0N1cnNvckNsaWNrfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17ZWRpdG9yLm1vZGUgPT09IEVESVRPUl9NT0RFUy5FRElUfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VG9vbGJhckl0ZW1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTil9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJwb2x5Z29uXCJcclxuICAgICAgICAgICAgICBpY29uSGVpZ2h0PVwiMjJweFwiXHJcbiAgICAgICAgICAgICAgaWNvbj17UG9seWdvbn1cclxuICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRFJBV19QT0xZR09OfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VG9vbGJhckl0ZW1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUkVDVEFOR0xFKX1cclxuICAgICAgICAgICAgICBsYWJlbD1cInJlY3RhbmdsZVwiXHJcbiAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxyXG4gICAgICAgICAgICAgIGljb249e1JlY3RhbmdsZX1cclxuICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRFJBV19SRUNUQU5HTEV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUb29sYmFySXRlbVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICBsYWJlbD17ZWRpdG9yLnZpc2libGUgPyAnaGlkZScgOiAnc2hvdyd9XHJcbiAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxyXG4gICAgICAgICAgICAgIGljb249e2VkaXRvci52aXNpYmxlID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3R5bGVkVG9vbGJhcj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8TWFwQ29udHJvbEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWwoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhY3RpdmU9e2lzQWN0aXZlfVxyXG4gICAgICAgICAgZGF0YS10aXBcclxuICAgICAgICAgIGRhdGEtZm9yPVwibWFwLWRyYXdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEcmF3UG9seWdvbiBoZWlnaHQ9XCIyMnB4XCIgLz5cclxuICAgICAgICAgIDxNYXBDb250cm9sVG9vbHRpcCBpZD1cIm1hcC1kcmF3XCIgbWVzc2FnZT1cIkRyYXcgb24gbWFwXCIgLz5cclxuICAgICAgICA8L01hcENvbnRyb2xCdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcblxyXG5NYXBEcmF3UGFuZWwuZGlzcGxheU5hbWUgPSAnTWFwRHJhd1BhbmVsJztcclxuXHJcbmNvbnN0IE1hcENvbnRyb2xGYWN0b3J5ID0gKCkgPT4ge1xyXG4gIGNsYXNzIE1hcENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgZHJhZ1JvdGF0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgaXNTcGxpdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgbGF5ZXJzVG9SZW5kZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwQ29udHJvbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25Ub2dnbGVTcGxpdE1hcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25Ub2dnbGVNYXBDb250cm9sOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBvblNldEVkaXRvck1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgICAvLyBvcHRpb25hbFxyXG4gICAgICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICBpc1NwbGl0OiBmYWxzZSxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBtYXBJbmRleDogMFxyXG4gICAgfTtcclxuXHJcbiAgICBsYXllclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzO1xyXG4gICAgbGF5ZXJzVG9SZW5kZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyc1RvUmVuZGVyO1xyXG4gICAgbGF5ZXJQYW5lbEl0ZW1zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgdGhpcy5sYXllclNlbGVjdG9yLFxyXG4gICAgICB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IsXHJcbiAgICAgIChsYXllcnMsIGxheWVyc1RvUmVuZGVyKSA9PlxyXG4gICAgICAgIGxheWVyc1xyXG4gICAgICAgICAgLmZpbHRlcihsID0+IGwuY29uZmlnLmlzVmlzaWJsZSlcclxuICAgICAgICAgIC5tYXAobGF5ZXIgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBsYXllci5jb25maWcubGFiZWwsXHJcbiAgICAgICAgICAgIC8vIGxheWVyXHJcbiAgICAgICAgICAgIGlzVmlzaWJsZTogbGF5ZXJzVG9SZW5kZXJbbGF5ZXIuaWRdXHJcbiAgICAgICAgICB9KSlcclxuICAgICk7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgZHJhZ1JvdGF0ZSxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXHJcbiAgICAgICAgaXNTcGxpdCxcclxuICAgICAgICBpc0V4cG9ydCxcclxuICAgICAgICBtYXBJbmRleCxcclxuICAgICAgICBtYXBDb250cm9scyxcclxuICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlLFxyXG4gICAgICAgIG9uVG9nZ2xlU3BsaXRNYXAsXHJcbiAgICAgICAgb25NYXBUb2dnbGVMYXllcixcclxuICAgICAgICBvblRvZ2dsZU1hcENvbnRyb2wsXHJcbiAgICAgICAgZWRpdG9yLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHZpc2libGVMYXllcnMgPSB7fSxcclxuICAgICAgICBtYXBMZWdlbmQgPSB7fSxcclxuICAgICAgICB0b2dnbGUzZCA9IHt9LFxyXG4gICAgICAgIHNwbGl0TWFwID0ge30sXHJcbiAgICAgICAgbWFwRHJhdyA9IHt9XHJcbiAgICAgIH0gPSBtYXBDb250cm9scztcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZE1hcENvbnRyb2wgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2xcIj5cclxuICAgICAgICAgIHsvKiBTcGxpdCBNYXAgKi99XHJcbiAgICAgICAgICB7c3BsaXRNYXAuc2hvdyAmJiByZWFkT25seSAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGNsYXNzTmFtZT1cInNwbGl0LW1hcFwiIGtleT17MH0+XHJcbiAgICAgICAgICAgICAgPFNwbGl0TWFwQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpc1NwbGl0PXtpc1NwbGl0fVxyXG4gICAgICAgICAgICAgICAgbWFwSW5kZXg9e21hcEluZGV4fVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVTcGxpdE1hcD17b25Ub2dnbGVTcGxpdE1hcH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgey8qIE1hcCBMYXllcnMgKi99XHJcbiAgICAgICAgICB7aXNTcGxpdCAmJiB2aXNpYmxlTGF5ZXJzLnNob3cgJiYgcmVhZE9ubHkgIT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJtYXAtbGF5ZXJzXCIga2V5PXsxfT5cclxuICAgICAgICAgICAgICA8TGF5ZXJTZWxlY3RvclBhbmVsXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5sYXllclBhbmVsSXRlbXNTZWxlY3Rvcih0aGlzLnByb3BzKX1cclxuICAgICAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17dmlzaWJsZUxheWVycy5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgndmlzaWJsZUxheWVycycpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7LyogM0QgTWFwICovfVxyXG4gICAgICAgICAge3RvZ2dsZTNkLnNob3cgPyAoXHJcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJ0b2dnbGUtM2RcIiBrZXk9ezJ9PlxyXG4gICAgICAgICAgICAgIDxUb2dnbGUzZEJ1dHRvbiBkcmFnUm90YXRlPXtkcmFnUm90YXRlfSBvblRvZ2dsZVBlcnNwZWN0aXZlPXtvblRvZ2dsZVBlcnNwZWN0aXZlfSAvPlxyXG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgey8qIE1hcCBMZWdlbmQgKi99XHJcbiAgICAgICAgICB7bWFwTGVnZW5kLnNob3cgPyAoXHJcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJzaG93LWxlZ2VuZFwiIGtleT17M30+XHJcbiAgICAgICAgICAgICAgPE1hcExlZ2VuZFBhbmVsXHJcbiAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVycy5maWx0ZXIobCA9PiBsYXllcnNUb1JlbmRlcltsLmlkXSl9XHJcbiAgICAgICAgICAgICAgICBzY2FsZT17c2NhbGV9XHJcbiAgICAgICAgICAgICAgICBpc0V4cG9ydD17aXNFeHBvcnR9XHJcbiAgICAgICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e21hcExlZ2VuZC5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCdtYXBMZWdlbmQnKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAge21hcERyYXcuc2hvdyA/IChcclxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGtleT17NH0+XHJcbiAgICAgICAgICAgICAgPE1hcERyYXdQYW5lbFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e21hcERyYXcuYWN0aXZlICYmIG1hcERyYXcuYWN0aXZlTWFwSW5kZXggPT09IG1hcEluZGV4fVxyXG4gICAgICAgICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCdtYXBEcmF3Jyl9XHJcbiAgICAgICAgICAgICAgICBvblNldEVkaXRvck1vZGU9e3RoaXMucHJvcHMub25TZXRFZGl0b3JNb2RlfVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5PXt0aGlzLnByb3BzLm9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9TdHlsZWRNYXBDb250cm9sPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgTWFwQ29udHJvbC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sJztcclxuXHJcbiAgcmV0dXJuIE1hcENvbnRyb2w7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBDb250cm9sRmFjdG9yeTtcclxuIl19