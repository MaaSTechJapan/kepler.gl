"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.pointVisConfigs = exports.iconRequiredColumns = exports.iconAccessor = exports.iconPosAccessor = exports.SVG_ICON_URL = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _window = _interopRequireDefault(require("global/window"));

var _extensions = require("@deck.gl/extensions");

var _colorUtils = require("../../utils/color-utils");

var _svgIconLayer = _interopRequireDefault(require("../../deckgl-layers/svg-icon-layer/svg-icon-layer"));

var _iconLayerIcon = _interopRequireDefault(require("./icon-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _iconInfoModal = _interopRequireDefault(require("./icon-info-modal"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _layerTextLabel = require("../layer-text-label");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var brushingExtension = new _extensions.BrushingExtension();
var SVG_ICON_URL = "".concat(_defaultSettings.CLOUDFRONT, "/icons/svg-icons.json");
exports.SVG_ICON_URL = SVG_ICON_URL;

var iconPosAccessor = function iconPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return function (d) {
    return [d.data[lng.fieldIdx], d.data[lat.fieldIdx]];
  };
};

exports.iconPosAccessor = iconPosAccessor;

var iconAccessor = function iconAccessor(_ref2) {
  var icon = _ref2.icon;
  return function (d) {
    return d.data[icon.fieldIdx];
  };
};

exports.iconAccessor = iconAccessor;
var iconRequiredColumns = ['lat', 'lng', 'icon'];
exports.iconRequiredColumns = iconRequiredColumns;
var pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  colorRange: 'colorRange',
  radiusRange: 'radiusRange'
};
exports.pointVisConfigs = pointVisConfigs;

function flatterIconPositions(icon) {
  // had to flip y, since @luma modal has changed
  return icon.mesh.cells.reduce(function (prev, cell) {
    cell.forEach(function (p) {
      prev.push.apply(prev, [icon.mesh.positions[p][0], -icon.mesh.positions[p][1], icon.mesh.positions[p][2]]);
    });
    return prev;
  }, []);
}

var IconLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(IconLayer, _Layer);

  var _super = _createSuper(IconLayer);

  function IconLayer() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, IconLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(pointVisConfigs);

    _this.getPositionAccessor = function () {
      return iconPosAccessor(_this.config.columns);
    };

    _this.getIconAccessor = function () {
      return iconAccessor(_this.config.columns);
    }; // prepare layer info modal


    _this._layerInfoModal = (0, _iconInfoModal["default"])();
    _this.iconGeometry = props.iconGeometry || null;

    _this.getSvgIcons();

    return _this;
  }

  (0, _createClass2["default"])(IconLayer, [{
    key: "getSvgIcons",
    value: function getSvgIcons() {
      var _this2 = this;

      var fetchConfig = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
      };

      if (_window["default"].fetch) {
        _window["default"].fetch(SVG_ICON_URL, fetchConfig).then(function (response) {
          return response.json();
        }).then(function () {
          var parsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _parsed$svgIcons = parsed.svgIcons,
              svgIcons = _parsed$svgIcons === void 0 ? [] : _parsed$svgIcons;
          _this2.iconGeometry = svgIcons.reduce(function (accu, curr) {
            return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, curr.id, flatterIconPositions(curr)));
          }, {});
          _this2._layerInfoModal = (0, _iconInfoModal["default"])(svgIcons);
        });
      }
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref3, getPosition) {
      var allData = _ref3.allData,
          filteredIndex = _ref3.filteredIndex;
      var getIcon = this.getIconAccessor();
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        });
        var icon = getIcon({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite) && typeof icon === 'string') {
          data.push({
            index: index,
            icon: icon,
            data: allData[index]
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this3 = this;

      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorDomain = _this$config.colorDomain,
          colorField = _this$config.colorField,
          color = _this$config.color,
          sizeField = _this$config.sizeField,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          textLabel = _this$config.textLabel,
          _this$config$visConfi = _this$config.visConfig,
          radiusRange = _this$config$visConfi.radiusRange,
          colorRange = _this$config$visConfi.colorRange;
      var getPosition = this.getPositionAccessor();
      var gpuFilter = datasets[this.config.dataId].gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data,
          triggerChanged = _this$updateData.triggerChanged; // point color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // point radius

      var rScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, radiusRange, 0);
      var getRadius = rScale ? function (d) {
        return _this3.getEncodedChannelValue(rScale, d.data, sizeField);
      } : 1;
      var getFillColor = cScale ? function (d) {
        return _this3.getEncodedChannelValue(cScale, d.data, colorField);
      } : color; // get all distinct characters in the text labels

      var textLabels = (0, _layerTextLabel.formatTextLabelData)({
        textLabel: textLabel,
        triggerChanged: triggerChanged,
        oldLayerData: oldLayerData,
        data: data
      });
      return {
        data: data,
        getPosition: getPosition,
        getFillColor: getFillColor,
        getFilterValue: gpuFilter.filterValueAccessor(),
        getRadius: getRadius,
        textLabels: textLabels
      };
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({
          data: d
        });
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var _this4 = this;

      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          interactionConfig = opts.interactionConfig;
      var radiusScale = this.getRadiusScaleByZoom(mapState);

      var layerProps = _objectSpread({
        radiusScale: radiusScale
      }, this.config.visConfig.fixedRadius ? {} : {
        radiusMaxPixels: 500
      });

      var updateTriggers = {
        getFilterValue: gpuFilter.filterValueUpdateTriggers,
        getRadius: {
          sizeField: this.config.colorField,
          radiusRange: this.config.visConfig.radiusRange,
          sizeScale: this.config.sizeScale
        },
        getFillColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: this.config.visConfig.colorRange,
          colorScale: this.config.colorScale
        }
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var brushingProps = this.getBrushingExtensionProps(interactionConfig);
      var getPixelOffset = (0, _layerTextLabel.getTextOffsetByRadius)(radiusScale, data.getRadius, mapState);
      var extensions = [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [brushingExtension]); // shared Props between layer and label layer

      var sharedProps = _objectSpread({
        getFilterValue: data.getFilterValue,
        extensions: extensions,
        filterRange: defaultLayerProps.filterRange
      }, brushingProps);

      var labelLayers = (0, _toConsumableArray2["default"])(this.renderTextLabelLayer({
        getPosition: data.getPosition,
        sharedProps: sharedProps,
        getPixelOffset: getPixelOffset,
        updateTriggers: updateTriggers
      }, opts));
      return !this.iconGeometry ? [] : [new _svgIconLayer["default"](_objectSpread({}, defaultLayerProps, {}, brushingProps, {}, layerProps, {}, data, {
        getIconGeometry: function getIconGeometry(id) {
          return _this4.iconGeometry[id];
        },
        // update triggers
        updateTriggers: updateTriggers,
        extensions: extensions
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _svgIconLayer["default"](_objectSpread({}, this.getDefaultHoverLayerProps(), {}, layerProps, {
        data: [objectHovered.object],
        getPosition: data.getPosition,
        getRadius: data.getRadius,
        getFillColor: this.config.highlightColor,
        getIconGeometry: function getIconGeometry(id) {
          return _this4.iconGeometry[id];
        }
      }))] : []), (0, _toConsumableArray2["default"])(labelLayers));
    }
  }, {
    key: "type",
    get: function get() {
      return 'icon';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return iconRequiredColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _iconLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(IconLayer.prototype), "visualChannels", this), {
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(IconLayer.prototype), "visualChannels", this).size, {
          range: 'radiusRange',
          property: 'radius',
          channelScaleType: 'radius'
        })
      });
    }
  }, {
    key: "layerInfoModal",
    get: function get() {
      return {
        id: 'iconInfo',
        template: this._layerInfoModal,
        modalProps: {
          title: 'How to draw icons'
        }
      };
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4) {
      var _ref4$fieldPairs = _ref4.fieldPairs,
          fieldPairs = _ref4$fieldPairs === void 0 ? [] : _ref4$fieldPairs,
          _ref4$fields = _ref4.fields,
          fields = _ref4$fields === void 0 ? [] : _ref4$fields;
      var notFound = {
        props: []
      };

      if (!fieldPairs.length || !fields.length) {
        return notFound;
      }

      var iconFields = fields.filter(function (_ref5) {
        var name = _ref5.name;
        return name.replace(/[_,.]+/g, ' ').trim().split(' ').some(function (seg) {
          return _defaultSettings.ICON_FIELDS.icon.some(function (t) {
            return t.includes(seg);
          });
        });
      });

      if (!iconFields.length) {
        return notFound;
      } // create icon layers for first point pair


      var ptPair = fieldPairs[0];
      var props = iconFields.map(function (iconField) {
        return {
          label: iconField.name.replace(/[_,.]+/g, ' ').trim(),
          columns: {
            lat: ptPair.pair.lat,
            lng: ptPair.pair.lng,
            icon: {
              value: iconField.name,
              fieldIdx: iconField.tableFieldIndex - 1
            }
          },
          isVisible: true
        };
      });
      return {
        props: props
      };
    }
  }]);
  return IconLayer;
}(_baseLayer["default"]);

exports["default"] = IconLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaWNvbi1sYXllci9pY29uLWxheWVyLmpzIl0sIm5hbWVzIjpbImJydXNoaW5nRXh0ZW5zaW9uIiwiQnJ1c2hpbmdFeHRlbnNpb24iLCJTVkdfSUNPTl9VUkwiLCJDTE9VREZST05UIiwiaWNvblBvc0FjY2Vzc29yIiwibGF0IiwibG5nIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsImljb25BY2Nlc3NvciIsImljb24iLCJpY29uUmVxdWlyZWRDb2x1bW5zIiwicG9pbnRWaXNDb25maWdzIiwicmFkaXVzIiwiZml4ZWRSYWRpdXMiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsInJhZGl1c1JhbmdlIiwiZmxhdHRlckljb25Qb3NpdGlvbnMiLCJtZXNoIiwiY2VsbHMiLCJyZWR1Y2UiLCJwcmV2IiwiY2VsbCIsImZvckVhY2giLCJwIiwicHVzaCIsInBvc2l0aW9ucyIsIkljb25MYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsImdldEljb25BY2Nlc3NvciIsIl9sYXllckluZm9Nb2RhbCIsImljb25HZW9tZXRyeSIsImdldFN2Z0ljb25zIiwiZmV0Y2hDb25maWciLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwYXJzZWQiLCJzdmdJY29ucyIsImFjY3UiLCJjdXJyIiwiaWQiLCJnZXRQb3NpdGlvbiIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4IiwiZ2V0SWNvbiIsImkiLCJsZW5ndGgiLCJpbmRleCIsInBvcyIsImV2ZXJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJkYXRhc2V0cyIsIm9sZExheWVyRGF0YSIsIm9wdCIsImNvbG9yU2NhbGUiLCJjb2xvckRvbWFpbiIsImNvbG9yRmllbGQiLCJjb2xvciIsInNpemVGaWVsZCIsInNpemVTY2FsZSIsInNpemVEb21haW4iLCJ0ZXh0TGFiZWwiLCJ2aXNDb25maWciLCJncHVGaWx0ZXIiLCJkYXRhSWQiLCJ1cGRhdGVEYXRhIiwidHJpZ2dlckNoYW5nZWQiLCJjU2NhbGUiLCJnZXRWaXNDaGFubmVsU2NhbGUiLCJjb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsInJTY2FsZSIsImdldFJhZGl1cyIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJ0ZXh0TGFiZWxzIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsIm9wdHMiLCJvYmplY3RIb3ZlcmVkIiwibWFwU3RhdGUiLCJpbnRlcmFjdGlvbkNvbmZpZyIsInJhZGl1c1NjYWxlIiwiZ2V0UmFkaXVzU2NhbGVCeVpvb20iLCJsYXllclByb3BzIiwicmFkaXVzTWF4UGl4ZWxzIiwidXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZGVmYXVsdExheWVyUHJvcHMiLCJnZXREZWZhdWx0RGVja0xheWVyUHJvcHMiLCJicnVzaGluZ1Byb3BzIiwiZ2V0QnJ1c2hpbmdFeHRlbnNpb25Qcm9wcyIsImdldFBpeGVsT2Zmc2V0IiwiZXh0ZW5zaW9ucyIsInNoYXJlZFByb3BzIiwiZmlsdGVyUmFuZ2UiLCJsYWJlbExheWVycyIsInJlbmRlclRleHRMYWJlbExheWVyIiwiU3ZnSWNvbkxheWVyIiwiZ2V0SWNvbkdlb21ldHJ5IiwiaXNMYXllckhvdmVyZWQiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwib2JqZWN0IiwiaGlnaGxpZ2h0Q29sb3IiLCJkZWZhdWx0UG9pbnRDb2x1bW5QYWlycyIsIkljb25MYXllckljb24iLCJzaXplIiwicmFuZ2UiLCJwcm9wZXJ0eSIsImNoYW5uZWxTY2FsZVR5cGUiLCJ0ZW1wbGF0ZSIsIm1vZGFsUHJvcHMiLCJ0aXRsZSIsImZpZWxkUGFpcnMiLCJmaWVsZHMiLCJub3RGb3VuZCIsImljb25GaWVsZHMiLCJmaWx0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInRyaW0iLCJzcGxpdCIsInNvbWUiLCJzZWciLCJJQ09OX0ZJRUxEUyIsInQiLCJpbmNsdWRlcyIsInB0UGFpciIsImljb25GaWVsZCIsImxhYmVsIiwicGFpciIsInZhbHVlIiwidGFibGVGaWVsZEluZGV4IiwiaXNWaXNpYmxlIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUFJQyw2QkFBSixFQUExQjtBQUVPLElBQU1DLFlBQVksYUFBTUMsMkJBQU4sMEJBQWxCOzs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBRUMsR0FBRixRQUFFQSxHQUFGO0FBQUEsTUFBT0MsR0FBUCxRQUFPQSxHQUFQO0FBQUEsU0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxJQUFGLENBQU9GLEdBQUcsQ0FBQ0csUUFBWCxDQUFELEVBQXVCRixDQUFDLENBQUNDLElBQUYsQ0FBT0gsR0FBRyxDQUFDSSxRQUFYLENBQXZCLENBQUo7QUFBQSxHQUFqQjtBQUFBLENBQXhCOzs7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFFQyxJQUFGLFNBQUVBLElBQUY7QUFBQSxTQUFZLFVBQUFKLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0csSUFBSSxDQUFDRixRQUFaLENBQUo7QUFBQSxHQUFiO0FBQUEsQ0FBckI7OztBQUVBLElBQU1HLG1CQUFtQixHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLENBQTVCOztBQUVBLElBQU1DLGVBQWUsR0FBRztBQUM3QkMsRUFBQUEsTUFBTSxFQUFFLFFBRHFCO0FBRTdCQyxFQUFBQSxXQUFXLEVBQUUsYUFGZ0I7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IENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCB7QnJ1c2hpbmdFeHRlbnNpb259IGZyb20gJ0BkZWNrLmdsL2V4dGVuc2lvbnMnO1xyXG5cclxuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQgU3ZnSWNvbkxheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvc3ZnLWljb24tbGF5ZXIvc3ZnLWljb24tbGF5ZXInO1xyXG5pbXBvcnQgSWNvbkxheWVySWNvbiBmcm9tICcuL2ljb24tbGF5ZXItaWNvbic7XHJcbmltcG9ydCB7SUNPTl9GSUVMRFMsIENMT1VERlJPTlR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IEljb25JbmZvTW9kYWxGYWN0b3J5IGZyb20gJy4vaWNvbi1pbmZvLW1vZGFsJztcclxuaW1wb3J0IExheWVyIGZyb20gJy4uL2Jhc2UtbGF5ZXInO1xyXG5pbXBvcnQge2dldFRleHRPZmZzZXRCeVJhZGl1cywgZm9ybWF0VGV4dExhYmVsRGF0YX0gZnJvbSAnLi4vbGF5ZXItdGV4dC1sYWJlbCc7XHJcblxyXG5jb25zdCBicnVzaGluZ0V4dGVuc2lvbiA9IG5ldyBCcnVzaGluZ0V4dGVuc2lvbigpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNWR19JQ09OX1VSTCA9IGAke0NMT1VERlJPTlR9L2ljb25zL3N2Zy1pY29ucy5qc29uYDtcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uUG9zQWNjZXNzb3IgPSAoe2xhdCwgbG5nfSkgPT4gZCA9PiBbZC5kYXRhW2xuZy5maWVsZElkeF0sIGQuZGF0YVtsYXQuZmllbGRJZHhdXTtcclxuZXhwb3J0IGNvbnN0IGljb25BY2Nlc3NvciA9ICh7aWNvbn0pID0+IGQgPT4gZC5kYXRhW2ljb24uZmllbGRJZHhdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGljb25SZXF1aXJlZENvbHVtbnMgPSBbJ2xhdCcsICdsbmcnLCAnaWNvbiddO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvaW50VmlzQ29uZmlncyA9IHtcclxuICByYWRpdXM6ICdyYWRpdXMnLFxyXG4gIGZpeGVkUmFkaXVzOiAnZml4ZWRSYWRpdXMnLFxyXG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcclxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXHJcbiAgcmFkaXVzUmFuZ2U6ICdyYWRpdXNSYW5nZSdcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZXJJY29uUG9zaXRpb25zKGljb24pIHtcclxuICAvLyBoYWQgdG8gZmxpcCB5LCBzaW5jZSBAbHVtYSBtb2RhbCBoYXMgY2hhbmdlZFxyXG4gIHJldHVybiBpY29uLm1lc2guY2VsbHMucmVkdWNlKChwcmV2LCBjZWxsKSA9PiB7XHJcbiAgICBjZWxsLmZvckVhY2gocCA9PiB7XHJcbiAgICAgIHByZXYucHVzaChcclxuICAgICAgICAuLi5baWNvbi5tZXNoLnBvc2l0aW9uc1twXVswXSwgLWljb24ubWVzaC5wb3NpdGlvbnNbcF1bMV0sIGljb24ubWVzaC5wb3NpdGlvbnNbcF1bMl1dXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcmV2O1xyXG4gIH0sIFtdKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkxheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKHBvaW50VmlzQ29uZmlncyk7XHJcbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBpY29uUG9zQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XHJcbiAgICB0aGlzLmdldEljb25BY2Nlc3NvciA9ICgpID0+IGljb25BY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcclxuXHJcbiAgICAvLyBwcmVwYXJlIGxheWVyIGluZm8gbW9kYWxcclxuICAgIHRoaXMuX2xheWVySW5mb01vZGFsID0gSWNvbkluZm9Nb2RhbEZhY3RvcnkoKTtcclxuICAgIHRoaXMuaWNvbkdlb21ldHJ5ID0gcHJvcHMuaWNvbkdlb21ldHJ5IHx8IG51bGw7XHJcbiAgICB0aGlzLmdldFN2Z0ljb25zKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnaWNvbic7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gaWNvblJlcXVpcmVkQ29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldCBjb2x1bW5QYWlycygpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQb2ludENvbHVtblBhaXJzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheWVySWNvbigpIHtcclxuICAgIHJldHVybiBJY29uTGF5ZXJJY29uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMsXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxyXG4gICAgICAgIHJhbmdlOiAncmFkaXVzUmFuZ2UnLFxyXG4gICAgICAgIHByb3BlcnR5OiAncmFkaXVzJyxcclxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiAncmFkaXVzJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheWVySW5mb01vZGFsKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6ICdpY29uSW5mbycsXHJcbiAgICAgIHRlbXBsYXRlOiB0aGlzLl9sYXllckluZm9Nb2RhbCxcclxuICAgICAgbW9kYWxQcm9wczoge1xyXG4gICAgICAgIHRpdGxlOiAnSG93IHRvIGRyYXcgaWNvbnMnXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdmdJY29ucygpIHtcclxuICAgIGNvbnN0IGZldGNoQ29uZmlnID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh3aW5kb3cuZmV0Y2gpIHtcclxuICAgICAgd2luZG93XHJcbiAgICAgICAgLmZldGNoKFNWR19JQ09OX1VSTCwgZmV0Y2hDb25maWcpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChwYXJzZWQgPSB7fSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qge3N2Z0ljb25zID0gW119ID0gcGFyc2VkO1xyXG4gICAgICAgICAgdGhpcy5pY29uR2VvbWV0cnkgPSBzdmdJY29ucy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1LCBjdXJyKSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgICAgW2N1cnIuaWRdOiBmbGF0dGVySWNvblBvc2l0aW9ucyhjdXJyKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAge31cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgdGhpcy5fbGF5ZXJJbmZvTW9kYWwgPSBJY29uSW5mb01vZGFsRmFjdG9yeShzdmdJY29ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZFBhaXJzID0gW10sIGZpZWxkcyA9IFtdfSkge1xyXG4gICAgY29uc3Qgbm90Rm91bmQgPSB7cHJvcHM6IFtdfTtcclxuICAgIGlmICghZmllbGRQYWlycy5sZW5ndGggfHwgIWZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG5vdEZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGljb25GaWVsZHMgPSBmaWVsZHMuZmlsdGVyKCh7bmFtZX0pID0+XHJcbiAgICAgIG5hbWVcclxuICAgICAgICAucmVwbGFjZSgvW18sLl0rL2csICcgJylcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAuc29tZShzZWcgPT4gSUNPTl9GSUVMRFMuaWNvbi5zb21lKHQgPT4gdC5pbmNsdWRlcyhzZWcpKSlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFpY29uRmllbGRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gbm90Rm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIGljb24gbGF5ZXJzIGZvciBmaXJzdCBwb2ludCBwYWlyXHJcbiAgICBjb25zdCBwdFBhaXIgPSBmaWVsZFBhaXJzWzBdO1xyXG5cclxuICAgIGNvbnN0IHByb3BzID0gaWNvbkZpZWxkcy5tYXAoaWNvbkZpZWxkID0+ICh7XHJcbiAgICAgIGxhYmVsOiBpY29uRmllbGQubmFtZS5yZXBsYWNlKC9bXywuXSsvZywgJyAnKS50cmltKCksXHJcbiAgICAgIGNvbHVtbnM6IHtcclxuICAgICAgICBsYXQ6IHB0UGFpci5wYWlyLmxhdCxcclxuICAgICAgICBsbmc6IHB0UGFpci5wYWlyLmxuZyxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICB2YWx1ZTogaWNvbkZpZWxkLm5hbWUsXHJcbiAgICAgICAgICBmaWVsZElkeDogaWNvbkZpZWxkLnRhYmxlRmllbGRJbmRleCAtIDFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGlzVmlzaWJsZTogdHJ1ZVxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7cHJvcHN9O1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZSh7YWxsRGF0YSwgZmlsdGVyZWRJbmRleH0sIGdldFBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBnZXRJY29uID0gdGhpcy5nZXRJY29uQWNjZXNzb3IoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkSW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xyXG4gICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcclxuICAgICAgY29uc3QgaWNvbiA9IGdldEljb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XHJcblxyXG4gICAgICAvLyBpZiBkb2Vzbid0IGhhdmUgcG9pbnQgbGF0IG9yIGxuZywgZG8gbm90IGFkZCB0aGUgcG9pbnRcclxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXHJcbiAgICAgIGlmIChwb3MuZXZlcnkoTnVtYmVyLmlzRmluaXRlKSAmJiB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICBpY29uLFxyXG4gICAgICAgICAgZGF0YTogYWxsRGF0YVtpbmRleF1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEsIG9wdCA9IHt9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbG9yU2NhbGUsXHJcbiAgICAgIGNvbG9yRG9tYWluLFxyXG4gICAgICBjb2xvckZpZWxkLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgc2l6ZUZpZWxkLFxyXG4gICAgICBzaXplU2NhbGUsXHJcbiAgICAgIHNpemVEb21haW4sXHJcbiAgICAgIHRleHRMYWJlbCxcclxuICAgICAgdmlzQ29uZmlnOiB7cmFkaXVzUmFuZ2UsIGNvbG9yUmFuZ2V9XHJcbiAgICB9ID0gdGhpcy5jb25maWc7XHJcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xyXG5cclxuICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcclxuICAgIGNvbnN0IHtkYXRhLCB0cmlnZ2VyQ2hhbmdlZH0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XHJcblxyXG4gICAgLy8gcG9pbnQgY29sb3JcclxuICAgIGNvbnN0IGNTY2FsZSA9XHJcbiAgICAgIGNvbG9yRmllbGQgJiZcclxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoY29sb3JTY2FsZSwgY29sb3JEb21haW4sIGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYikpO1xyXG5cclxuICAgIC8vIHBvaW50IHJhZGl1c1xyXG4gICAgY29uc3QgclNjYWxlID0gc2l6ZUZpZWxkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKHNpemVTY2FsZSwgc2l6ZURvbWFpbiwgcmFkaXVzUmFuZ2UsIDApO1xyXG5cclxuICAgIGNvbnN0IGdldFJhZGl1cyA9IHJTY2FsZSA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKHJTY2FsZSwgZC5kYXRhLCBzaXplRmllbGQpIDogMTtcclxuXHJcbiAgICBjb25zdCBnZXRGaWxsQ29sb3IgPSBjU2NhbGVcclxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjU2NhbGUsIGQuZGF0YSwgY29sb3JGaWVsZClcclxuICAgICAgOiBjb2xvcjtcclxuXHJcbiAgICAvLyBnZXQgYWxsIGRpc3RpbmN0IGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgbGFiZWxzXHJcbiAgICBjb25zdCB0ZXh0TGFiZWxzID0gZm9ybWF0VGV4dExhYmVsRGF0YSh7XHJcbiAgICAgIHRleHRMYWJlbCxcclxuICAgICAgdHJpZ2dlckNoYW5nZWQsXHJcbiAgICAgIG9sZExheWVyRGF0YSxcclxuICAgICAgZGF0YVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YSxcclxuICAgICAgZ2V0UG9zaXRpb24sXHJcbiAgICAgIGdldEZpbGxDb2xvcixcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKCksXHJcbiAgICAgIGdldFJhZGl1cyxcclxuICAgICAgdGV4dExhYmVsc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xyXG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRQb2ludHNCb3VuZHMoYWxsRGF0YSwgZCA9PiBnZXRQb3NpdGlvbih7ZGF0YTogZH0pKTtcclxuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMYXllcihvcHRzKSB7XHJcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBtYXBTdGF0ZSwgaW50ZXJhY3Rpb25Db25maWd9ID0gb3B0cztcclxuXHJcbiAgICBjb25zdCByYWRpdXNTY2FsZSA9IHRoaXMuZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IGxheWVyUHJvcHMgPSB7XHJcbiAgICAgIHJhZGl1c1NjYWxlLFxyXG4gICAgICAuLi4odGhpcy5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzID8ge30gOiB7cmFkaXVzTWF4UGl4ZWxzOiA1MDB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzLFxyXG4gICAgICBnZXRSYWRpdXM6IHtcclxuICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLmNvbG9yRmllbGQsXHJcbiAgICAgICAgcmFkaXVzUmFuZ2U6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5yYWRpdXNSYW5nZSxcclxuICAgICAgICBzaXplU2NhbGU6IHRoaXMuY29uZmlnLnNpemVTY2FsZVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRGaWxsQ29sb3I6IHtcclxuICAgICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3IsXHJcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuY29sb3JSYW5nZSxcclxuICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5jb2xvclNjYWxlXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcclxuICAgIGNvbnN0IGJydXNoaW5nUHJvcHMgPSB0aGlzLmdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcpO1xyXG4gICAgY29uc3QgZ2V0UGl4ZWxPZmZzZXQgPSBnZXRUZXh0T2Zmc2V0QnlSYWRpdXMocmFkaXVzU2NhbGUsIGRhdGEuZ2V0UmFkaXVzLCBtYXBTdGF0ZSk7XHJcbiAgICBjb25zdCBleHRlbnNpb25zID0gWy4uLmRlZmF1bHRMYXllclByb3BzLmV4dGVuc2lvbnMsIGJydXNoaW5nRXh0ZW5zaW9uXTtcclxuXHJcbiAgICAvLyBzaGFyZWQgUHJvcHMgYmV0d2VlbiBsYXllciBhbmQgbGFiZWwgbGF5ZXJcclxuICAgIGNvbnN0IHNoYXJlZFByb3BzID0ge1xyXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZGF0YS5nZXRGaWx0ZXJWYWx1ZSxcclxuICAgICAgZXh0ZW5zaW9ucyxcclxuICAgICAgZmlsdGVyUmFuZ2U6IGRlZmF1bHRMYXllclByb3BzLmZpbHRlclJhbmdlLFxyXG4gICAgICAuLi5icnVzaGluZ1Byb3BzXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxhYmVsTGF5ZXJzID0gW1xyXG4gICAgICAuLi50aGlzLnJlbmRlclRleHRMYWJlbExheWVyKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdldFBvc2l0aW9uOiBkYXRhLmdldFBvc2l0aW9uLFxyXG4gICAgICAgICAgc2hhcmVkUHJvcHMsXHJcbiAgICAgICAgICBnZXRQaXhlbE9mZnNldCxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRzXHJcbiAgICAgIClcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuICF0aGlzLmljb25HZW9tZXRyeVxyXG4gICAgICA/IFtdXHJcbiAgICAgIDogW1xyXG4gICAgICAgICAgbmV3IFN2Z0ljb25MYXllcih7XHJcbiAgICAgICAgICAgIC4uLmRlZmF1bHRMYXllclByb3BzLFxyXG4gICAgICAgICAgICAuLi5icnVzaGluZ1Byb3BzLFxyXG4gICAgICAgICAgICAuLi5sYXllclByb3BzLFxyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBnZXRJY29uR2VvbWV0cnk6IGlkID0+IHRoaXMuaWNvbkdlb21ldHJ5W2lkXSxcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0cmlnZ2Vyc1xyXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2VycyxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uc1xyXG4gICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgLi4uKHRoaXMuaXNMYXllckhvdmVyZWQob2JqZWN0SG92ZXJlZClcclxuICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICBuZXcgU3ZnSWNvbkxheWVyKHtcclxuICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCksXHJcbiAgICAgICAgICAgICAgICAgIC4uLmxheWVyUHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFtvYmplY3RIb3ZlcmVkLm9iamVjdF0sXHJcbiAgICAgICAgICAgICAgICAgIGdldFBvc2l0aW9uOiBkYXRhLmdldFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBnZXRJY29uR2VvbWV0cnk6IGlkID0+IHRoaXMuaWNvbkdlb21ldHJ5W2lkXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIDogW10pLFxyXG5cclxuICAgICAgICAgIC8vIHRleHQgbGFiZWwgbGF5ZXJcclxuICAgICAgICAgIC4uLmxhYmVsTGF5ZXJzXHJcbiAgICAgICAgXTtcclxuICB9XHJcbn1cclxuIl19