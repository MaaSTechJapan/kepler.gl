"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlotContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _reactMapGl = require("react-map-gl");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _notificationsUtils = require("../utils/notifications-utils");

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _exportUtils = require("../utils/export-utils");

var _mapboxGlStyleEditor = require("../utils/map-style-utils/mapbox-gl-style-editor");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right {\n    display: none;\n  }\n\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  exportImageSetting: _propTypes["default"].object.isRequired,
  addNotification: _propTypes["default"].func.isRequired,
  mapFields: _propTypes["default"].object.isRequired
};
PlotContainerFactory.deps = [_mapContainer["default"]]; // Remove mapbox logo in exported map, because it contains non-ascii characters

var StyledPlotContainer = _styledComponents["default"].div(_templateObject());

var deckGlProps = {
  glOptions: {
    preserveDrawingBuffer: true,
    useDevicePixels: false
  }
};

function PlotContainerFactory(MapContainer) {
  var PlotContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PlotContainer, _Component);

    var _super = _createSuper(PlotContainer);

    function PlotContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, PlotContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "plottingAreaRef", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleSelector", function (props) {
        return props.mapFields.mapStyle;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapScaleSelector", function (props) {
        var imageSize = props.exportImageSetting.imageSize;
        var mapState = props.mapFields.mapState;

        if (imageSize.scale) {
          return imageSize.scale;
        }

        var scale = (0, _exportUtils.getScaleFromImageSize)(imageSize.imageW, imageSize.imageH, mapState.width * (mapState.isSplit ? 2 : 1), mapState.height);
        return scale > 0 ? scale : 1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaledMapStyleSelector", (0, _reselect.createSelector)(_this.mapStyleSelector, _this.mapScaleSelector, function (mapStyle, scale) {
        return _objectSpread({}, mapStyle, {
          bottomMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.bottomMapStyle, scale),
          topMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.topMapStyle, scale)
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapRender", function (map) {
        if (map.isStyleLoaded()) {
          _this._retrieveNewScreenshot();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_retrieveNewScreenshot", function () {
        if (_this.plottingAreaRef.current) {
          _this.props.startExportingImage();

          var filter = function filter(node) {
            return node.className !== 'mapboxgl-control-container';
          };

          (0, _exportUtils.convertToPng)(_this.plottingAreaRef.current, {
            filter: filter
          }).then(_this.props.setExportImageDataUri)["catch"](function (err) {
            _this.props.setExportImageError(err);

            _this.props.addNotification((0, _notificationsUtils.exportImageError)({
              err: err
            }));
          });
        }
      });
      _this._onMapRender = (0, _lodash["default"])(_this._onMapRender, 500);
      return _this;
    }

    (0, _createClass2["default"])(PlotContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.startExportingImage();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        // re-fetch the new screenshot only when ratio legend or resolution changes
        var checks = ['ratio', 'resolution', 'legend'];
        var shouldRetrieveScreenshot = checks.some(function (item) {
          return _this2.props.exportImageSetting[item] !== prevProps.exportImageSetting[item];
        });

        if (shouldRetrieveScreenshot) {
          this._retrieveNewScreenshot();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            exportImageSetting = _this$props.exportImageSetting,
            mapFields = _this$props.mapFields,
            splitMaps = _this$props.splitMaps;
        var _exportImageSetting$i = exportImageSetting.imageSize,
            imageSize = _exportImageSetting$i === void 0 ? {} : _exportImageSetting$i,
            legend = exportImageSetting.legend;
        var isSplit = splitMaps && splitMaps.length > 1;
        var size = {
          width: imageSize.imageW || 1,
          height: imageSize.imageH || 1
        };
        var scale = this.mapScaleSelector(this.props);

        var mapProps = _objectSpread({}, mapFields, {
          mapStyle: this.scaledMapStyleSelector(this.props),
          // override viewport based on export settings
          mapState: _objectSpread({}, mapFields.mapState, {
            width: size.width / (isSplit ? 2 : 1),
            height: size.height,
            zoom: mapFields.mapState.zoom + (Math.log2(scale) || 0)
          }),
          mapControls: {
            // override map legend visibility
            mapLegend: {
              show: legend,
              active: true
            }
          },
          MapComponent: _reactMapGl.StaticMap,
          onMapRender: this._onMapRender,
          isExport: true,
          deckGlProps: deckGlProps
        });

        var mapContainers = !isSplit ? /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          index: 0
        }, mapProps)) : splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapProps, {
            mapLayers: splitMaps[index].layers
          }));
        });
        return /*#__PURE__*/_react["default"].createElement(StyledPlotContainer, {
          style: {
            position: 'absolute',
            top: -9999,
            left: -9999
          },
          className: "export-map-instance"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: this.plottingAreaRef,
          style: {
            width: "".concat(size.width, "px"),
            height: "".concat(size.height, "px"),
            display: 'flex'
          }
        }, mapContainers));
      }
    }]);
    return PlotContainer;
  }(_react.Component);

  PlotContainer.propsTypes = propTypes;
  return PlotContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3Bsb3QtY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsIndpZHRoIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImhlaWdodCIsImV4cG9ydEltYWdlU2V0dGluZyIsIm9iamVjdCIsImFkZE5vdGlmaWNhdGlvbiIsImZ1bmMiLCJtYXBGaWVsZHMiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsImRlcHMiLCJNYXBDb250YWluZXJGYWN0b3J5IiwiU3R5bGVkUGxvdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImRlY2tHbFByb3BzIiwiZ2xPcHRpb25zIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwidXNlRGV2aWNlUGl4ZWxzIiwiTWFwQ29udGFpbmVyIiwiUGxvdENvbnRhaW5lciIsInByb3BzIiwibWFwU3R5bGUiLCJpbWFnZVNpemUiLCJtYXBTdGF0ZSIsInNjYWxlIiwiaW1hZ2VXIiwiaW1hZ2VIIiwiaXNTcGxpdCIsIm1hcFN0eWxlU2VsZWN0b3IiLCJtYXBTY2FsZVNlbGVjdG9yIiwiYm90dG9tTWFwU3R5bGUiLCJ0b3BNYXBTdHlsZSIsIm1hcCIsImlzU3R5bGVMb2FkZWQiLCJfcmV0cmlldmVOZXdTY3JlZW5zaG90IiwicGxvdHRpbmdBcmVhUmVmIiwiY3VycmVudCIsInN0YXJ0RXhwb3J0aW5nSW1hZ2UiLCJmaWx0ZXIiLCJub2RlIiwiY2xhc3NOYW1lIiwidGhlbiIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsImVyciIsInNldEV4cG9ydEltYWdlRXJyb3IiLCJfb25NYXBSZW5kZXIiLCJwcmV2UHJvcHMiLCJjaGVja3MiLCJzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QiLCJzb21lIiwiaXRlbSIsInNwbGl0TWFwcyIsImxlZ2VuZCIsImxlbmd0aCIsInNpemUiLCJtYXBQcm9wcyIsInNjYWxlZE1hcFN0eWxlU2VsZWN0b3IiLCJ6b29tIiwiTWF0aCIsImxvZzIiLCJtYXBDb250cm9scyIsIm1hcExlZ2VuZCIsInNob3ciLCJhY3RpdmUiLCJNYXBDb21wb25lbnQiLCJTdGF0aWNNYXAiLCJvbk1hcFJlbmRlciIsImlzRXhwb3J0IiwibWFwQ29udGFpbmVycyIsInNldHRpbmdzIiwiaW5kZXgiLCJsYXllcnMiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwicHJvcHNUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUVDLHNCQUFVQyxNQUFWLENBQWlCQyxVQURSO0FBRWhCQyxFQUFBQSxNQUFNLEVBQUVILHNCQUFVQyxNQUFWLENBQWlCQyxVQUZUO0FBR2hCRSxFQUFBQSxrQkFBa0IsRUFBRUosc0JBQVVLLE1BQVYsQ0FBaUJILFVBSHJCO0FBSWhCSSxFQUFBQSxlQUFlLEVBQUVOLHNCQUFVTyxJQUFWLENBQWVMLFVBSmhCO0FBS2hCTSxFQUFBQSxTQUFTLEVBQUVSLHNCQUFVSyxNQUFWLENBQWlCSDtBQUxaLENBQWxCO0FBUUFPLG9CQUFvQixDQUFDQyxJQUFyQixHQUE0QixDQUFDQyx3QkFBRCxDQUE1QixDLENBRUE7O0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUF6Qjs7QUFTQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxxQkFBcUIsRUFBRSxJQURkO0FBRVRDLElBQUFBLGVBQWUsRUFBRTtBQUZSO0FBRE8sQ0FBcEI7O0FBT2UsU0FBU1Qsb0JBQVQsQ0FBOEJVLFlBQTlCLEVBQTRDO0FBQUEsTUFDbkRDLGFBRG1EO0FBQUE7O0FBQUE7O0FBRXZELDJCQUFZQyxNQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFD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QUFBQSxPQUFPLEVBQUU7QUFISjtBQUZULFdBUUdQLGFBUkgsQ0FKRixDQURGO0FBaUJEO0FBeElzRDtBQUFBO0FBQUEsSUFDN0JRLGdCQUQ2Qjs7QUEySXpEekQsRUFBQUEsYUFBYSxDQUFDMEQsVUFBZCxHQUEyQmhGLFNBQTNCO0FBQ0EsU0FBT3NCLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIGxpYnJhcmllc1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1N0YXRpY01hcH0gZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XHJcbmltcG9ydCB7ZXhwb3J0SW1hZ2VFcnJvcn0gZnJvbSAndXRpbHMvbm90aWZpY2F0aW9ucy11dGlscyc7XHJcbmltcG9ydCBNYXBDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7Y29udmVydFRvUG5nfSBmcm9tICd1dGlscy9leHBvcnQtdXRpbHMnO1xyXG5pbXBvcnQge3NjYWxlTWFwU3R5bGVCeVJlc29sdXRpb259IGZyb20gJ3V0aWxzL21hcC1zdHlsZS11dGlscy9tYXBib3gtZ2wtc3R5bGUtZWRpdG9yJztcclxuaW1wb3J0IHtnZXRTY2FsZUZyb21JbWFnZVNpemV9IGZyb20gJ3V0aWxzL2V4cG9ydC11dGlscyc7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBleHBvcnRJbWFnZVNldHRpbmc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBhZGROb3RpZmljYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgbWFwRmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcblBsb3RDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwQ29udGFpbmVyRmFjdG9yeV07XHJcblxyXG4vLyBSZW1vdmUgbWFwYm94IGxvZ28gaW4gZXhwb3J0ZWQgbWFwLCBiZWNhdXNlIGl0IGNvbnRhaW5zIG5vbi1hc2NpaSBjaGFyYWN0ZXJzXHJcbmNvbnN0IFN0eWxlZFBsb3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5tYXBib3hnbC1jdHJsLWJvdHRvbS1sZWZ0LFxyXG4gIC5tYXBib3hnbC1jdHJsLWJvdHRvbS1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5gO1xyXG5cclxuY29uc3QgZGVja0dsUHJvcHMgPSB7XHJcbiAgZ2xPcHRpb25zOiB7XHJcbiAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXHJcbiAgICB1c2VEZXZpY2VQaXhlbHM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxvdENvbnRhaW5lckZhY3RvcnkoTWFwQ29udGFpbmVyKSB7XHJcbiAgY2xhc3MgUGxvdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuX29uTWFwUmVuZGVyID0gZGVib3VuY2UodGhpcy5fb25NYXBSZW5kZXIsIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuc3RhcnRFeHBvcnRpbmdJbWFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgLy8gcmUtZmV0Y2ggdGhlIG5ldyBzY3JlZW5zaG90IG9ubHkgd2hlbiByYXRpbyBsZWdlbmQgb3IgcmVzb2x1dGlvbiBjaGFuZ2VzXHJcbiAgICAgIGNvbnN0IGNoZWNrcyA9IFsncmF0aW8nLCAncmVzb2x1dGlvbicsICdsZWdlbmQnXTtcclxuICAgICAgY29uc3Qgc2hvdWxkUmV0cmlldmVTY3JlZW5zaG90ID0gY2hlY2tzLnNvbWUoXHJcbiAgICAgICAgaXRlbSA9PiB0aGlzLnByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXSAhPT0gcHJldlByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoc2hvdWxkUmV0cmlldmVTY3JlZW5zaG90KSB7XHJcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbG90dGluZ0FyZWFSZWYgPSBjcmVhdGVSZWYoKTtcclxuXHJcbiAgICBtYXBTdHlsZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubWFwRmllbGRzLm1hcFN0eWxlO1xyXG4gICAgbWFwU2NhbGVTZWxlY3RvciA9IHByb3BzID0+IHtcclxuICAgICAgY29uc3Qge2ltYWdlU2l6ZX0gPSBwcm9wcy5leHBvcnRJbWFnZVNldHRpbmc7XHJcbiAgICAgIGNvbnN0IHttYXBTdGF0ZX0gPSBwcm9wcy5tYXBGaWVsZHM7XHJcbiAgICAgIGlmIChpbWFnZVNpemUuc2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gaW1hZ2VTaXplLnNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlRnJvbUltYWdlU2l6ZShcclxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VXLFxyXG4gICAgICAgIGltYWdlU2l6ZS5pbWFnZUgsXHJcbiAgICAgICAgbWFwU3RhdGUud2lkdGggKiAobWFwU3RhdGUuaXNTcGxpdCA/IDIgOiAxKSxcclxuICAgICAgICBtYXBTdGF0ZS5oZWlnaHRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiBzY2FsZSA+IDAgPyBzY2FsZSA6IDE7XHJcbiAgICB9O1xyXG5cclxuICAgIHNjYWxlZE1hcFN0eWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgdGhpcy5tYXBTdHlsZVNlbGVjdG9yLFxyXG4gICAgICB0aGlzLm1hcFNjYWxlU2VsZWN0b3IsXHJcbiAgICAgIChtYXBTdHlsZSwgc2NhbGUpID0+ICh7XHJcbiAgICAgICAgLi4ubWFwU3R5bGUsXHJcbiAgICAgICAgYm90dG9tTWFwU3R5bGU6IHNjYWxlTWFwU3R5bGVCeVJlc29sdXRpb24obWFwU3R5bGUuYm90dG9tTWFwU3R5bGUsIHNjYWxlKSxcclxuICAgICAgICB0b3BNYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS50b3BNYXBTdHlsZSwgc2NhbGUpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIF9vbk1hcFJlbmRlciA9IG1hcCA9PiB7XHJcbiAgICAgIGlmIChtYXAuaXNTdHlsZUxvYWRlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX3JldHJpZXZlTmV3U2NyZWVuc2hvdCA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMucGxvdHRpbmdBcmVhUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnN0YXJ0RXhwb3J0aW5nSW1hZ2UoKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBub2RlID0+IG5vZGUuY2xhc3NOYW1lICE9PSAnbWFwYm94Z2wtY29udHJvbC1jb250YWluZXInO1xyXG5cclxuICAgICAgICBjb252ZXJ0VG9QbmcodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCwge2ZpbHRlcn0pXHJcbiAgICAgICAgICAudGhlbih0aGlzLnByb3BzLnNldEV4cG9ydEltYWdlRGF0YVVyaSlcclxuICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEV4cG9ydEltYWdlRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGROb3RpZmljYXRpb24oZXhwb3J0SW1hZ2VFcnJvcih7ZXJyfSkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7ZXhwb3J0SW1hZ2VTZXR0aW5nLCBtYXBGaWVsZHMsIHNwbGl0TWFwc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7aW1hZ2VTaXplID0ge30sIGxlZ2VuZH0gPSBleHBvcnRJbWFnZVNldHRpbmc7XHJcbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XHJcblxyXG4gICAgICBjb25zdCBzaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBpbWFnZVNpemUuaW1hZ2VXIHx8IDEsXHJcbiAgICAgICAgaGVpZ2h0OiBpbWFnZVNpemUuaW1hZ2VIIHx8IDFcclxuICAgICAgfTtcclxuICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLm1hcFNjYWxlU2VsZWN0b3IodGhpcy5wcm9wcyk7XHJcbiAgICAgIGNvbnN0IG1hcFByb3BzID0ge1xyXG4gICAgICAgIC4uLm1hcEZpZWxkcyxcclxuICAgICAgICBtYXBTdHlsZTogdGhpcy5zY2FsZWRNYXBTdHlsZVNlbGVjdG9yKHRoaXMucHJvcHMpLFxyXG5cclxuICAgICAgICAvLyBvdmVycmlkZSB2aWV3cG9ydCBiYXNlZCBvbiBleHBvcnQgc2V0dGluZ3NcclxuICAgICAgICBtYXBTdGF0ZToge1xyXG4gICAgICAgICAgLi4ubWFwRmllbGRzLm1hcFN0YXRlLFxyXG4gICAgICAgICAgd2lkdGg6IHNpemUud2lkdGggLyAoaXNTcGxpdCA/IDIgOiAxKSxcclxuICAgICAgICAgIGhlaWdodDogc2l6ZS5oZWlnaHQsXHJcbiAgICAgICAgICB6b29tOiBtYXBGaWVsZHMubWFwU3RhdGUuem9vbSArIChNYXRoLmxvZzIoc2NhbGUpIHx8IDApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXBDb250cm9sczoge1xyXG4gICAgICAgICAgLy8gb3ZlcnJpZGUgbWFwIGxlZ2VuZCB2aXNpYmlsaXR5XHJcbiAgICAgICAgICBtYXBMZWdlbmQ6IHtcclxuICAgICAgICAgICAgc2hvdzogbGVnZW5kLFxyXG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIE1hcENvbXBvbmVudDogU3RhdGljTWFwLFxyXG4gICAgICAgIG9uTWFwUmVuZGVyOiB0aGlzLl9vbk1hcFJlbmRlcixcclxuICAgICAgICBpc0V4cG9ydDogdHJ1ZSxcclxuICAgICAgICBkZWNrR2xQcm9wc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgbWFwQ29udGFpbmVycyA9ICFpc1NwbGl0ID8gKFxyXG4gICAgICAgIDxNYXBDb250YWluZXIgaW5kZXg9ezB9IHsuLi5tYXBQcm9wc30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxNYXBDb250YWluZXJcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICB7Li4ubWFwUHJvcHN9XHJcbiAgICAgICAgICAgIG1hcExheWVycz17c3BsaXRNYXBzW2luZGV4XS5sYXllcnN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRQbG90Q29udGFpbmVyXHJcbiAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IC05OTk5LCBsZWZ0OiAtOTk5OX19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJleHBvcnQtbWFwLWluc3RhbmNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5wbG90dGluZ0FyZWFSZWZ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3NpemUud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZS5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3R5bGVkUGxvdENvbnRhaW5lcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFBsb3RDb250YWluZXIucHJvcHNUeXBlcyA9IHByb3BUeXBlcztcclxuICByZXR1cm4gUGxvdENvbnRhaW5lcjtcclxufVxyXG4iXX0=