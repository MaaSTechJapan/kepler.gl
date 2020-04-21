"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extensions = require("@deck.gl/extensions");

var _lineLayerIcon = _interopRequireDefault(require("./line-layer-icon"));

var _arcLayer = _interopRequireDefault(require("../arc-layer/arc-layer"));

var _lineLayer = _interopRequireDefault(require("../../deckgl-layers/line-layer/line-layer"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LineLayer = /*#__PURE__*/function (_ArcLayer) {
  (0, _inherits2["default"])(LineLayer, _ArcLayer);

  var _super = _createSuper(LineLayer);

  function LineLayer() {
    (0, _classCallCheck2["default"])(this, LineLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LineLayer, [{
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          interactionConfig = opts.interactionConfig;
      var layerProps = {
        widthScale: this.config.visConfig.thickness
      };
      var colorUpdateTriggers = {
        color: this.config.color,
        colorField: this.config.colorField,
        colorRange: this.config.visConfig.colorRange,
        colorScale: this.config.colorScale,
        targetColor: this.config.visConfig.targetColor
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      return [// base layer
      new _lineLayer["default"](_objectSpread({}, defaultLayerProps, {}, this.getBrushingExtensionProps(interactionConfig, 'source_target'), {}, data, {}, layerProps, {
        getColor: data.getSourceColor,
        updateTriggers: {
          getFilterValue: gpuFilter.filterValueUpdateTriggers,
          getWidth: {
            sizeField: this.config.sizeField,
            sizeRange: this.config.visConfig.sizeRange,
            sizeScale: this.config.sizeScale
          },
          getColor: colorUpdateTriggers,
          getTargetColor: colorUpdateTriggers
        },
        extensions: [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [new _extensions.BrushingExtension()])
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _lineLayer["default"](_objectSpread({}, this.getDefaultHoverLayerProps(), {}, layerProps, {
        data: [objectHovered.object],
        getColor: this.config.highlightColor,
        getTargetColor: this.config.highlightColor,
        getWidth: data.getWidth
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'line';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _lineLayerIcon["default"];
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref) {
      var _ref$fieldPairs = _ref.fieldPairs,
          fieldPairs = _ref$fieldPairs === void 0 ? [] : _ref$fieldPairs;

      if (fieldPairs.length < 2) {
        return {
          props: []
        };
      }

      var props = {}; // connect the first two point layer with arc

      props.columns = {
        lat0: fieldPairs[0].pair.lat,
        lng0: fieldPairs[0].pair.lng,
        lat1: fieldPairs[1].pair.lat,
        lng1: fieldPairs[1].pair.lng
      };
      props.label = "".concat(fieldPairs[0].defaultName, " -> ").concat(fieldPairs[1].defaultName, " line");
      return {
        props: [props]
      };
    }
  }]);
  return LineLayer;
}(_arcLayer["default"]);

exports["default"] = LineLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvbGluZS1sYXllci9saW5lLWxheWVyLmpzIl0sIm5hbWVzIjpbIkxpbmVMYXllciIsIm9wdHMiLCJkYXRhIiwiZ3B1RmlsdGVyIiwib2JqZWN0SG92ZXJlZCIsImludGVyYWN0aW9uQ29uZmlnIiwibGF5ZXJQcm9wcyIsIndpZHRoU2NhbGUiLCJjb25maWciLCJ2aXNDb25maWciLCJ0aGlja25lc3MiLCJjb2xvclVwZGF0ZVRyaWdnZXJzIiwiY29sb3IiLCJjb2xvckZpZWxkIiwiY29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJ0YXJnZXRDb2xvciIsImRlZmF1bHRMYXllclByb3BzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwiRW5oYW5jZWRMaW5lTGF5ZXIiLCJnZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzIiwiZ2V0Q29sb3IiLCJnZXRTb3VyY2VDb2xvciIsInVwZGF0ZVRyaWdnZXJzIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZ2V0V2lkdGgiLCJzaXplRmllbGQiLCJzaXplUmFuZ2UiLCJzaXplU2NhbGUiLCJnZXRUYXJnZXRDb2xvciIsImV4dGVuc2lvbnMiLCJCcnVzaGluZ0V4dGVuc2lvbiIsImlzTGF5ZXJIb3ZlcmVkIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsIm9iamVjdCIsImhpZ2hsaWdodENvbG9yIiwiTGluZUxheWVySWNvbiIsImZpZWxkUGFpcnMiLCJsZW5ndGgiLCJwcm9wcyIsImNvbHVtbnMiLCJsYXQwIiwicGFpciIsImxhdCIsImxuZzAiLCJsbmciLCJsYXQxIiwibG5nMSIsImxhYmVsIiwiZGVmYXVsdE5hbWUiLCJBcmNMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztnQ0EyQlBDLEksRUFBTTtBQUFBLFVBQ1RD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Q0FBRCxDQUFWLENBQWNLLElBQWQsQ0FBbUJHLEdBRlg7QUFHZEMsUUFBQUEsSUFBSSxFQUFFVCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNLLElBQWQsQ0FBbUJDLEdBSFg7QUFJZEksUUFBQUEsSUFBSSxFQUFFVixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNLLElBQWQsQ0FBbUJHO0FBSlgsT0FBaEI7QUFNQU4sTUFBQUEsS0FBSyxDQUFDUyxLQUFOLGFBQWlCWCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNZLFdBQS9CLGlCQUFpRFosVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjWSxXQUEvRDtBQUVBLGFBQU87QUFBQ1YsUUFBQUEsS0FBSyxFQUFFLENBQUNBLEtBQUQ7QUFBUixPQUFQO0FBQ0Q7OztFQXpCb0NXLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtCcnVzaGluZ0V4dGVuc2lvbn0gZnJvbSAnQGRlY2suZ2wvZXh0ZW5zaW9ucyc7XHJcblxyXG5pbXBvcnQgTGluZUxheWVySWNvbiBmcm9tICcuL2xpbmUtbGF5ZXItaWNvbic7XHJcbmltcG9ydCBBcmNMYXllciBmcm9tICcuLi9hcmMtbGF5ZXIvYXJjLWxheWVyJztcclxuaW1wb3J0IEVuaGFuY2VkTGluZUxheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvbGluZS1sYXllci9saW5lLWxheWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVMYXllciBleHRlbmRzIEFyY0xheWVyIHtcclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnbGluZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIExpbmVMYXllckljb247XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZFBhaXJzID0gW119KSB7XHJcbiAgICBpZiAoZmllbGRQYWlycy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHJldHVybiB7cHJvcHM6IFtdfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb3BzID0ge307XHJcblxyXG4gICAgLy8gY29ubmVjdCB0aGUgZmlyc3QgdHdvIHBvaW50IGxheWVyIHdpdGggYXJjXHJcbiAgICBwcm9wcy5jb2x1bW5zID0ge1xyXG4gICAgICBsYXQwOiBmaWVsZFBhaXJzWzBdLnBhaXIubGF0LFxyXG4gICAgICBsbmcwOiBmaWVsZFBhaXJzWzBdLnBhaXIubG5nLFxyXG4gICAgICBsYXQxOiBmaWVsZFBhaXJzWzFdLnBhaXIubGF0LFxyXG4gICAgICBsbmcxOiBmaWVsZFBhaXJzWzFdLnBhaXIubG5nXHJcbiAgICB9O1xyXG4gICAgcHJvcHMubGFiZWwgPSBgJHtmaWVsZFBhaXJzWzBdLmRlZmF1bHROYW1lfSAtPiAke2ZpZWxkUGFpcnNbMV0uZGVmYXVsdE5hbWV9IGxpbmVgO1xyXG5cclxuICAgIHJldHVybiB7cHJvcHM6IFtwcm9wc119O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGF5ZXIob3B0cykge1xyXG4gICAgY29uc3Qge2RhdGEsIGdwdUZpbHRlciwgb2JqZWN0SG92ZXJlZCwgaW50ZXJhY3Rpb25Db25maWd9ID0gb3B0cztcclxuXHJcbiAgICBjb25zdCBsYXllclByb3BzID0ge1xyXG4gICAgICB3aWR0aFNjYWxlOiB0aGlzLmNvbmZpZy52aXNDb25maWcudGhpY2tuZXNzXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbG9yVXBkYXRlVHJpZ2dlcnMgPSB7XHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcclxuICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgY29sb3JSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLmNvbG9yUmFuZ2UsXHJcbiAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLmNvbG9yU2NhbGUsXHJcbiAgICAgIHRhcmdldENvbG9yOiB0aGlzLmNvbmZpZy52aXNDb25maWcudGFyZ2V0Q29sb3JcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIC8vIGJhc2UgbGF5ZXJcclxuICAgICAgbmV3IEVuaGFuY2VkTGluZUxheWVyKHtcclxuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcclxuICAgICAgICAuLi50aGlzLmdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcsICdzb3VyY2VfdGFyZ2V0JyksXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAuLi5sYXllclByb3BzLFxyXG4gICAgICAgIGdldENvbG9yOiBkYXRhLmdldFNvdXJjZUNvbG9yLFxyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzOiB7XHJcbiAgICAgICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMsXHJcbiAgICAgICAgICBnZXRXaWR0aDoge1xyXG4gICAgICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLnNpemVGaWVsZCxcclxuICAgICAgICAgICAgc2l6ZVJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc2l6ZVJhbmdlLFxyXG4gICAgICAgICAgICBzaXplU2NhbGU6IHRoaXMuY29uZmlnLnNpemVTY2FsZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGdldENvbG9yOiBjb2xvclVwZGF0ZVRyaWdnZXJzLFxyXG4gICAgICAgICAgZ2V0VGFyZ2V0Q29sb3I6IGNvbG9yVXBkYXRlVHJpZ2dlcnNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4dGVuc2lvbnM6IFsuLi5kZWZhdWx0TGF5ZXJQcm9wcy5leHRlbnNpb25zLCBuZXcgQnJ1c2hpbmdFeHRlbnNpb24oKV1cclxuICAgICAgfSksXHJcbiAgICAgIC8vIGhvdmVyIGxheWVyXHJcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIG5ldyBFbmhhbmNlZExpbmVMYXllcih7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCksXHJcbiAgICAgICAgICAgICAgLi4ubGF5ZXJQcm9wcyxcclxuICAgICAgICAgICAgICBkYXRhOiBbb2JqZWN0SG92ZXJlZC5vYmplY3RdLFxyXG4gICAgICAgICAgICAgIGdldENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcclxuICAgICAgICAgICAgICBnZXRUYXJnZXRDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXHJcbiAgICAgICAgICAgICAgZ2V0V2lkdGg6IGRhdGEuZ2V0V2lkdGhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIF1cclxuICAgICAgICA6IFtdKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19