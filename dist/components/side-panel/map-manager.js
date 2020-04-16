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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../common/styled-components");

var _mapStyleSelector = _interopRequireDefault(require("./map-style-panel/map-style-selector"));

var _mapLayerSelector = _interopRequireDefault(require("./map-style-panel/map-layer-selector"));

var _icons = require("../common/icons");

var _defaultSettings = require("../../constants/default-settings");

var _colorSelector = _interopRequireDefault(require("./layer-panel/color-selector"));

var _reselect = require("reselect");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

MapManagerFactory.deps = [_mapStyleSelector["default"], _mapLayerSelector["default"]];

function MapManagerFactory(MapStyleSelector, LayerGroupSelector) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapManager, _Component);

    var _super = _createSuper(MapManager);

    function MapManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSelecting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "buildingColorSelector", function (props) {
        return props.mapStyle.threeDBuildingColor;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setColorSelector", function (props) {
        return props.set3dBuildingColor;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colorSetSelector", (0, _reselect.createSelector)(_this.buildingColorSelector, _this.setColorSelector, function (selectedColor, setColor) {
        return [{
          selectedColor: selectedColor,
          setColor: setColor,
          isRange: false,
          label: '3D Building Color'
        }];
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (newProp) {
        var newConfig = _objectSpread({}, _this.props.mapStyle, {}, newProp);

        _this.props.onConfigChange(newConfig);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSelecting", function () {
        _this.setState({
          isSelecting: !_this.state.isSelecting
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectStyle", function (val) {
        _this.props.onStyleChange(val);

        _this._toggleSelecting();
      });
      return _this;
    }

    (0, _createClass2["default"])(MapManager, [{
      key: "render",
      value: function render() {
        var mapStyle = this.props.mapStyle;

        var editableLayers = _defaultSettings.DEFAULT_LAYER_GROUPS.map(function (lg) {
          return lg.slug;
        });

        var hasBuildingLayer = mapStyle.visibleLayerGroups['3d building'];
        var colorSets = this.colorSetSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "map-style-panel"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(MapStyleSelector, {
          mapStyle: mapStyle,
          isSelecting: this.state.isSelecting,
          onChange: this._selectStyle,
          toggleActive: this._toggleSelecting
        }), editableLayers.length ? /*#__PURE__*/_react["default"].createElement(LayerGroupSelector, {
          layers: mapStyle.visibleLayerGroups,
          editableLayers: editableLayers,
          topLayers: mapStyle.topLayerGroups,
          onChange: this._updateConfig
        }) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
          colorSets: colorSets,
          disabled: !hasBuildingLayer
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
          onClick: this.props.showAddMapStyleModal,
          secondary: true
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), "Add Map Style")));
      }
    }]);
    return MapManager;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    mapStyle: _propTypes["default"].object.isRequired,
    onConfigChange: _propTypes["default"].func.isRequired,
    onStyleChange: _propTypes["default"].func.isRequired,
    showAddMapStyleModal: _propTypes["default"].func.isRequired
  }), _temp;
}

var _default = MapManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiTWFwTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5IiwiTWFwU3R5bGVTZWxlY3RvciIsIkxheWVyR3JvdXBTZWxlY3RvciIsImlzU2VsZWN0aW5nIiwicHJvcHMiLCJtYXBTdHlsZSIsInRocmVlREJ1aWxkaW5nQ29sb3IiLCJzZXQzZEJ1aWxkaW5nQ29sb3IiLCJidWlsZGluZ0NvbG9yU2VsZWN0b3IiLCJzZXRDb2xvclNlbGVjdG9yIiwic2VsZWN0ZWRDb2xvciIsInNldENvbG9yIiwiaXNSYW5nZSIsImxhYmVsIiwibmV3UHJvcCIsIm5ld0NvbmZpZyIsIm9uQ29uZmlnQ2hhbmdlIiwic2V0U3RhdGUiLCJzdGF0ZSIsInZhbCIsIm9uU3R5bGVDaGFuZ2UiLCJfdG9nZ2xlU2VsZWN0aW5nIiwiZWRpdGFibGVMYXllcnMiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsIm1hcCIsImxnIiwic2x1ZyIsImhhc0J1aWxkaW5nTGF5ZXIiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJjb2xvclNldHMiLCJjb2xvclNldFNlbGVjdG9yIiwiX3NlbGVjdFN0eWxlIiwibGVuZ3RoIiwidG9wTGF5ZXJHcm91cHMiLCJfdXBkYXRlQ29uZmlnIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBQSxpQkFBaUIsQ0FBQ0MsSUFBbEIsR0FBeUIsQ0FBQ0MsNEJBQUQsRUFBMEJDLDRCQUExQixDQUF6Qjs7QUFF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LFVBREYsa0JBbEJGLENBREYsQ0FERjtBQTJCRDtBQTFFSDtBQUFBO0FBQUEsSUFBZ0NDLGdCQUFoQyx5REFDcUI7QUFDakIvQixJQUFBQSxRQUFRLEVBQUVnQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFEVjtBQUVqQnZCLElBQUFBLGNBQWMsRUFBRXFCLHNCQUFVRyxJQUFWLENBQWVELFVBRmQ7QUFHakJuQixJQUFBQSxhQUFhLEVBQUVpQixzQkFBVUcsSUFBVixDQUFlRCxVQUhiO0FBSWpCSixJQUFBQSxvQkFBb0IsRUFBRUUsc0JBQVVHLElBQVYsQ0FBZUQ7QUFKcEIsR0FEckI7QUE0RUQ7O2VBRWMxQyxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtCdXR0b24sIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNYXBTdHlsZVNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvcic7XG5pbXBvcnQgTGF5ZXJHcm91cFNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1sYXllci1zZWxlY3Rvcic7XG5cbmltcG9ydCB7QWRkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge0RFRkFVTFRfTEFZRVJfR1JPVVBTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tICcuL2xheWVyLXBhbmVsL2NvbG9yLXNlbGVjdG9yJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuTWFwTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtNYXBTdHlsZVNlbGVjdG9yRmFjdG9yeSwgTGF5ZXJHcm91cFNlbGVjdG9yRmFjdG9yeV07XG5cbmZ1bmN0aW9uIE1hcE1hbmFnZXJGYWN0b3J5KE1hcFN0eWxlU2VsZWN0b3IsIExheWVyR3JvdXBTZWxlY3Rvcikge1xuICByZXR1cm4gY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBvbkNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uU3R5bGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzaG93QWRkTWFwU3R5bGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIGlzU2VsZWN0aW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBidWlsZGluZ0NvbG9yU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5tYXBTdHlsZS50aHJlZURCdWlsZGluZ0NvbG9yO1xuICAgIHNldENvbG9yU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5zZXQzZEJ1aWxkaW5nQ29sb3I7XG4gICAgY29sb3JTZXRTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5idWlsZGluZ0NvbG9yU2VsZWN0b3IsXG4gICAgICB0aGlzLnNldENvbG9yU2VsZWN0b3IsXG4gICAgICAoc2VsZWN0ZWRDb2xvciwgc2V0Q29sb3IpID0+IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3IsXG4gICAgICAgICAgc2V0Q29sb3IsXG4gICAgICAgICAgaXNSYW5nZTogZmFsc2UsXG4gICAgICAgICAgbGFiZWw6ICczRCBCdWlsZGluZyBDb2xvcidcbiAgICAgICAgfVxuICAgICAgXVxuICAgICk7XG5cbiAgICBfdXBkYXRlQ29uZmlnID0gbmV3UHJvcCA9PiB7XG4gICAgICBjb25zdCBuZXdDb25maWcgPSB7Li4udGhpcy5wcm9wcy5tYXBTdHlsZSwgLi4ubmV3UHJvcH07XG4gICAgICB0aGlzLnByb3BzLm9uQ29uZmlnQ2hhbmdlKG5ld0NvbmZpZyk7XG4gICAgfTtcblxuICAgIF90b2dnbGVTZWxlY3RpbmcgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc1NlbGVjdGluZzogIXRoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9KTtcbiAgICB9O1xuXG4gICAgX3NlbGVjdFN0eWxlID0gdmFsID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25TdHlsZUNoYW5nZSh2YWwpO1xuICAgICAgdGhpcy5fdG9nZ2xlU2VsZWN0aW5nKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHttYXBTdHlsZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZWRpdGFibGVMYXllcnMgPSBERUZBVUxUX0xBWUVSX0dST1VQUy5tYXAobGcgPT4gbGcuc2x1Zyk7XG4gICAgICBjb25zdCBoYXNCdWlsZGluZ0xheWVyID0gbWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzWyczZCBidWlsZGluZyddO1xuICAgICAgY29uc3QgY29sb3JTZXRzID0gdGhpcy5jb2xvclNldFNlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1zdHlsZS1wYW5lbFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFwU3R5bGVTZWxlY3RvclxuICAgICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGV9XG4gICAgICAgICAgICAgIGlzU2VsZWN0aW5nPXt0aGlzLnN0YXRlLmlzU2VsZWN0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2VsZWN0U3R5bGV9XG4gICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZT17dGhpcy5fdG9nZ2xlU2VsZWN0aW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlZGl0YWJsZUxheWVycy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIDxMYXllckdyb3VwU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBsYXllcnM9e21hcFN0eWxlLnZpc2libGVMYXllckdyb3Vwc31cbiAgICAgICAgICAgICAgICBlZGl0YWJsZUxheWVycz17ZWRpdGFibGVMYXllcnN9XG4gICAgICAgICAgICAgICAgdG9wTGF5ZXJzPXttYXBTdHlsZS50b3BMYXllckdyb3Vwc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fdXBkYXRlQ29uZmlnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPENvbG9yU2VsZWN0b3IgY29sb3JTZXRzPXtjb2xvclNldHN9IGRpc2FibGVkPXshaGFzQnVpbGRpbmdMYXllcn0gLz5cbiAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zaG93QWRkTWFwU3R5bGVNb2RhbH0gc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgICBBZGQgTWFwIFN0eWxlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwTWFuYWdlckZhY3Rvcnk7XG4iXX0=