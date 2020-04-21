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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiTWFwTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5IiwiTWFwU3R5bGVTZWxlY3RvciIsIkxheWVyR3JvdXBTZWxlY3RvciIsImlzU2VsZWN0aW5nIiwicHJvcHMiLCJtYXBTdHlsZSIsInRocmVlREJ1aWxkaW5nQ29sb3IiLCJzZXQzZEJ1aWxkaW5nQ29sb3IiLCJidWlsZGluZ0NvbG9yU2VsZWN0b3IiLCJzZXRDb2xvclNlbGVjdG9yIiwic2VsZWN0ZWRDb2xvciIsInNldENvbG9yIiwiaXNSYW5nZSIsImxhYmVsIiwibmV3UHJvcCIsIm5ld0NvbmZpZyIsIm9uQ29uZmlnQ2hhbmdlIiwic2V0U3RhdGUiLCJzdGF0ZSIsInZhbCIsIm9uU3R5bGVDaGFuZ2UiLCJfdG9nZ2xlU2VsZWN0aW5nIiwiZWRpdGFibGVMYXllcnMiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsIm1hcCIsImxnIiwic2x1ZyIsImhhc0J1aWxkaW5nTGF5ZXIiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJjb2xvclNldHMiLCJjb2xvclNldFNlbGVjdG9yIiwiX3NlbGVjdFN0eWxlIiwibGVuZ3RoIiwidG9wTGF5ZXJHcm91cHMiLCJfdXBkYXRlQ29uZmlnIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBQSxpQkFBaUIsQ0FBQ0MsSUFBbEIsR0FBeUIsQ0FBQ0MsNEJBQUQsRUFBMEJDLDRCQUExQixDQUF6Qjs7QUFFQSxTQUFTSCxpQkFBVCxDQUEyQkksZ0JBQTNCLEVBQTZDQyxrQkFBN0MsRUFBaUU7QUFBQTs7QUFDL0Q7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdHQVFVO0FBQ05DLFFBQUFBLFdBQVcsRUFBRTtBQURQLE9BUlY7QUFBQSxnSEFZMEIsVUFBQUMsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxtQkFBbkI7QUFBQSxPQVovQjtBQUFBLDJHQWFxQixVQUFBRixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDRyxrQkFBVjtBQUFBLE9BYjFCO0FBQUEsMkdBY3FCLDhCQUNqQixNQUFLQyxxQkFEWSxFQUVqQixNQUFLQyxnQkFGWSxFQUdqQixVQUFDQyxhQUFELEVBQWdCQyxRQUFoQjtBQUFBLGVBQTZCLENBQzNCO0FBQ0VELFVBQUFBLGFBQWEsRUFBYkEsYUFERjtBQUVFQyxVQUFBQSxRQUFRLEVBQVJBLFFBRkY7QUFHRUMsVUFBQUEsT0FBTyxFQUFFLEtBSFg7QUFJRUMsVUFBQUEsS0FBSyxFQUFFO0FBSlQsU0FEMkIsQ0FBN0I7QUFBQSxPQUhpQixDQWRyQjtBQUFBLHdHQTJCa0IsVUFBQUMsT0FBTyxFQUFJO0FBQ3pCLFlBQU1DLFNBQVMscUJBQU8sTUFBS1gsS0FBTCxDQUFXQyxRQUFsQixNQUErQlMsT0FBL0IsQ0FBZjs7QUFDQSxjQUFLVixLQUFMLENBQVdZLGNBQVgsQ0FBMEJELFNBQTFCO0FBQ0QsT0E5Qkg7QUFBQSwyR0FnQ3FCLFlBQU07QUFDdkIsY0FBS0UsUUFBTCxDQUFjO0FBQUNkLFVBQUFBLFdBQVcsRUFBRSxDQUFDLE1BQUtlLEtBQUwsQ0FBV2Y7QUFBMUIsU0FBZDtBQUNELE9BbENIO0FBQUEsdUdBb0NpQixVQUFBZ0IsR0FBRyxFQUFJO0FBQ3BCLGNBQUtmLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJELEdBQXpCOztBQUNBLGNBQUtFLGdCQUFMO0FBQ0QsT0F2Q0g7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkF5Q1c7QUFBQSxZQUNBaEIsUUFEQSxHQUNZLEtBQUtELEtBRGpCLENBQ0FDLFFBREE7O0FBRVAsWUFBTWlCLGNBQWMsR0FBR0Msc0NBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0MsSUFBUDtBQUFBLFNBQTNCLENBQXZCOztBQUNBLFlBQU1DLGdCQUFnQixHQUFHdEIsUUFBUSxDQUFDdUIsa0JBQVQsQ0FBNEIsYUFBNUIsQ0FBekI7QUFDQSxZQUFNQyxTQUFTLEdBQUcsS0FBS0MsZ0JBQUwsQ0FBc0IsS0FBSzFCLEtBQTNCLENBQWxCO0FBRUEsNEJBQ0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLHdCQUNFLDBEQUNFLGdDQUFDLGdCQUFEO0FBQ0UsVUFBQSxRQUFRLEVBQUVDLFFBRFo7QUFFRSxVQUFBLFdBQVcsRUFBRSxLQUFLYSxLQUFMLENBQVdmLFdBRjFCO0FBR0UsVUFBQSxRQUFRLEVBQUUsS0FBSzRCLFlBSGpCO0FBSUUsVUFBQSxZQUFZLEVBQUUsS0FBS1Y7QUFKckIsVUFERixFQU9HQyxjQUFjLENBQUNVLE1BQWYsZ0JBQ0MsZ0NBQUMsa0JBQUQ7QUFDRSxVQUFBLE1BQU0sRUFBRTNCLFFBQVEsQ0FBQ3VCLGtCQURuQjtBQUVFLFVBQUEsY0FBYyxFQUFFTixjQUZsQjtBQUdFLFVBQUEsU0FBUyxFQUFFakIsUUFBUSxDQUFDNEIsY0FIdEI7QUFJRSxVQUFBLFFBQVEsRUFBRSxLQUFLQztBQUpqQixVQURELEdBT0csSUFkTixlQWVFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLHlCQUFEO0FBQWUsVUFBQSxTQUFTLEVBQUVMLFNBQTFCO0FBQXFDLFVBQUEsUUFBUSxFQUFFLENBQUNGO0FBQWhELFVBREYsQ0FmRixlQWtCRSxnQ0FBQyx3QkFBRDtBQUFRLFVBQUEsT0FBTyxFQUFFLEtBQUt2QixLQUFMLENBQVcrQixvQkFBNUI7QUFBa0QsVUFBQSxTQUFTO0FBQTNELHdCQUNFLGdDQUFDLFVBQUQ7QUFBSyxVQUFBLE1BQU0sRUFBQztBQUFaLFVBREYsa0JBbEJGLENBREYsQ0FERjtBQTJCRDtBQTFFSDtBQUFBO0FBQUEsSUFBZ0NDLGdCQUFoQyx5REFDcUI7QUFDakIvQixJQUFBQSxRQUFRLEVBQUVnQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFEVjtBQUVqQnZCLElBQUFBLGNBQWMsRUFBRXFCLHNCQUFVRyxJQUFWLENBQWVELFVBRmQ7QUFHakJuQixJQUFBQSxhQUFhLEVBQUVpQixzQkFBVUcsSUFBVixDQUFlRCxVQUhiO0FBSWpCSixJQUFBQSxvQkFBb0IsRUFBRUUsc0JBQVVHLElBQVYsQ0FBZUQ7QUFKcEIsR0FEckI7QUE0RUQ7O2VBRWMxQyxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHtCdXR0b24sIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9tYXAtc3R5bGUtcGFuZWwvbWFwLXN0eWxlLXNlbGVjdG9yJztcclxuaW1wb3J0IExheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL21hcC1zdHlsZS1wYW5lbC9tYXAtbGF5ZXItc2VsZWN0b3InO1xyXG5cclxuaW1wb3J0IHtBZGR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IHtERUZBVUxUX0xBWUVSX0dST1VQU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tICcuL2xheWVyLXBhbmVsL2NvbG9yLXNlbGVjdG9yJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5cclxuTWFwTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtNYXBTdHlsZVNlbGVjdG9yRmFjdG9yeSwgTGF5ZXJHcm91cFNlbGVjdG9yRmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBNYXBNYW5hZ2VyRmFjdG9yeShNYXBTdHlsZVNlbGVjdG9yLCBMYXllckdyb3VwU2VsZWN0b3IpIHtcclxuICByZXR1cm4gY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICBtYXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBvbkNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25TdHlsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgc2hvd0FkZE1hcFN0eWxlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGlzU2VsZWN0aW5nOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBidWlsZGluZ0NvbG9yU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5tYXBTdHlsZS50aHJlZURCdWlsZGluZ0NvbG9yO1xyXG4gICAgc2V0Q29sb3JTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnNldDNkQnVpbGRpbmdDb2xvcjtcclxuICAgIGNvbG9yU2V0U2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgdGhpcy5idWlsZGluZ0NvbG9yU2VsZWN0b3IsXHJcbiAgICAgIHRoaXMuc2V0Q29sb3JTZWxlY3RvcixcclxuICAgICAgKHNlbGVjdGVkQ29sb3IsIHNldENvbG9yKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcixcclxuICAgICAgICAgIHNldENvbG9yLFxyXG4gICAgICAgICAgaXNSYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICBsYWJlbDogJzNEIEJ1aWxkaW5nIENvbG9yJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgKTtcclxuXHJcbiAgICBfdXBkYXRlQ29uZmlnID0gbmV3UHJvcCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHsuLi50aGlzLnByb3BzLm1hcFN0eWxlLCAuLi5uZXdQcm9wfTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpZ0NoYW5nZShuZXdDb25maWcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfdG9nZ2xlU2VsZWN0aW5nID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtpc1NlbGVjdGluZzogIXRoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9KTtcclxuICAgIH07XHJcblxyXG4gICAgX3NlbGVjdFN0eWxlID0gdmFsID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vblN0eWxlQ2hhbmdlKHZhbCk7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZVNlbGVjdGluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHttYXBTdHlsZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBlZGl0YWJsZUxheWVycyA9IERFRkFVTFRfTEFZRVJfR1JPVVBTLm1hcChsZyA9PiBsZy5zbHVnKTtcclxuICAgICAgY29uc3QgaGFzQnVpbGRpbmdMYXllciA9IG1hcFN0eWxlLnZpc2libGVMYXllckdyb3Vwc1snM2QgYnVpbGRpbmcnXTtcclxuICAgICAgY29uc3QgY29sb3JTZXRzID0gdGhpcy5jb2xvclNldFNlbGVjdG9yKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1zdHlsZS1wYW5lbFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1hcFN0eWxlU2VsZWN0b3JcclxuICAgICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGV9XHJcbiAgICAgICAgICAgICAgaXNTZWxlY3Rpbmc9e3RoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NlbGVjdFN0eWxlfVxyXG4gICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZT17dGhpcy5fdG9nZ2xlU2VsZWN0aW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZWRpdGFibGVMYXllcnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckdyb3VwU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGxheWVycz17bWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzfVxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGVMYXllcnM9e2VkaXRhYmxlTGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgdG9wTGF5ZXJzPXttYXBTdHlsZS50b3BMYXllckdyb3Vwc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl91cGRhdGVDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxDb2xvclNlbGVjdG9yIGNvbG9yU2V0cz17Y29sb3JTZXRzfSBkaXNhYmxlZD17IWhhc0J1aWxkaW5nTGF5ZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnNob3dBZGRNYXBTdHlsZU1vZGFsfSBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgPEFkZCBoZWlnaHQ9XCIxMnB4XCIgLz5cclxuICAgICAgICAgICAgICBBZGQgTWFwIFN0eWxlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwTWFuYWdlckZhY3Rvcnk7XHJcbiJdfQ==