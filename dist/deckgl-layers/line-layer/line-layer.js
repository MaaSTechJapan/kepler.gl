"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _layers = require("@deck.gl/layers");

var _constants = _interopRequireDefault(require("@luma.gl/constants"));

var _shaderUtils = require("../layer-utils/shader-utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _layers.LineLayer.defaultProps, {
  getTargetColor: function getTargetColor(x) {
    return x.color || [0, 0, 0, 255];
  }
});

function addInstanceColorShader(vs) {
  var targetColorVs = (0, _shaderUtils.editShader)(vs, 'line target color vs', 'attribute vec4 instanceColors;', 'attribute vec4 instanceColors; attribute vec4 instanceTargetColors;');
  return (0, _shaderUtils.editShader)(targetColorVs, 'line color vs', 'vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);', "vec4 color = mix(instanceColors, instanceTargetColors, positions.x);" + "vColor = vec4(color.rgb, color.a * opacity);");
}

var EnhancedLineLayer = /*#__PURE__*/function (_LineLayer) {
  (0, _inherits2["default"])(EnhancedLineLayer, _LineLayer);

  var _super = _createSuper(EnhancedLineLayer);

  function EnhancedLineLayer() {
    (0, _classCallCheck2["default"])(this, EnhancedLineLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EnhancedLineLayer, [{
    key: "getShaders",
    value: function getShaders() {
      var shaders = (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedLineLayer.prototype), "getShaders", this).call(this);
      return _objectSpread({}, shaders, {
        vs: addInstanceColorShader(shaders.vs)
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedLineLayer.prototype), "initializeState", this).call(this);
      var attributeManager = this.state.attributeManager;
      attributeManager.addInstanced({
        instanceTargetColors: {
          size: this.props.colorFormat.length,
          type: _constants["default"].UNSIGNED_BYTE,
          normalized: true,
          transition: true,
          accessor: 'getTargetColor',
          defaultValue: [0, 0, 0, 255]
        }
      });
    }
  }]);
  return EnhancedLineLayer;
}(_layers.LineLayer);

exports["default"] = EnhancedLineLayer;
EnhancedLineLayer.layerName = 'EnhancedLineLayer';
EnhancedLineLayer.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1sYXllci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJMaW5lTGF5ZXIiLCJnZXRUYXJnZXRDb2xvciIsIngiLCJjb2xvciIsImFkZEluc3RhbmNlQ29sb3JTaGFkZXIiLCJ2cyIsInRhcmdldENvbG9yVnMiLCJFbmhhbmNlZExpbmVMYXllciIsInNoYWRlcnMiLCJhdHRyaWJ1dGVNYW5hZ2VyIiwic3RhdGUiLCJhZGRJbnN0YW5jZWQiLCJpbnN0YW5jZVRhcmdldENvbG9ycyIsInNpemUiLCJwcm9wcyIsImNvbG9yRm9ybWF0IiwibGVuZ3RoIiwidHlwZSIsIkdMIiwiVU5TSUdORURfQllURSIsIm5vcm1hbGl6ZWQiLCJ0cmFuc2l0aW9uIiwiYWNjZXNzb3IiLCJkZWZhdWx0VmFsdWUiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxxQkFDYkMsa0JBQVVELFlBREc7QUFFaEJFLEVBQUFBLGNBQWMsRUFBRSx3QkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsS0FBRixJQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsR0FBVixDQUFmO0FBQUE7QUFGRCxFQUFsQjs7QUFLQSxTQUFTQyxzQkFBVCxDQUFnQ0MsRUFBaEMsRUFBb0M7QUFDbEMsTUFBTUMsYUFBYSxHQUFHLDZCQUNwQkQsRUFEb0IsRUFFcEIsc0JBRm9CLEVBR3BCLGdDQUhvQixFQUlwQixxRUFKb0IsQ0FBdEI7QUFPQSxTQUFPLDZCQUNMQyxhQURLLEVBRUwsZUFGSyxFQUdMLGdFQUhLLEVBSUwsdUhBSkssQ0FBUDtBQU9EOztJQUVvQkMsaUI7Ozs7Ozs7Ozs7OztpQ0FDTjtBQUNYLFVBQU1DLE9BQU8sc0hBQWI7QUFFQSwrQkFDS0EsT0FETDtBQUVFSCxRQUFBQSxFQUFFLEVBQUVELHNCQUFzQixDQUFDSSxPQUFPLENBQUNILEVBQVQ7QUFGNUI7QUFJRDs7O3NDQUVpQjtBQUNoQjtBQURnQixVQUVUSSxnQkFGUyxHQUVXLEtBQUtDLEtBRmhCLENBRVRELGdCQUZTO0FBR2hCQSxNQUFBQSxnQkFBZ0IsQ0FBQ0UsWUFBakIsQ0FBOEI7QUFDNUJDLFFBQUFBLG9CQUFvQixFQUFFO0FBQ3BCQyxVQUFBQSxJQUFJLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCQyxNQURUO0FBRXBCQyxVQUFBQSxJQUFJLEVBQUVDLHNCQUFHQyxhQUZXO0FBR3BCQyxVQUFBQSxVQUFVLEVBQUUsSUFIUTtBQUlwQkMsVUFBQUEsVUFBVSxFQUFFLElBSlE7QUFLcEJDLFVBQUFBLFFBQVEsRUFBRSxnQkFMVTtBQU1wQkMsVUFBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsR0FBVjtBQU5NO0FBRE0sT0FBOUI7QUFVRDs7O0VBdkI0Q3ZCLGlCOzs7QUEwQi9DTyxpQkFBaUIsQ0FBQ2lCLFNBQWxCLEdBQThCLG1CQUE5QjtBQUNBakIsaUJBQWlCLENBQUNSLFlBQWxCLEdBQWlDQSxZQUFqQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TGluZUxheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xyXG5pbXBvcnQgR0wgZnJvbSAnQGx1bWEuZ2wvY29uc3RhbnRzJztcclxuaW1wb3J0IHtlZGl0U2hhZGVyfSBmcm9tICdkZWNrZ2wtbGF5ZXJzL2xheWVyLXV0aWxzL3NoYWRlci11dGlscyc7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgLi4uTGluZUxheWVyLmRlZmF1bHRQcm9wcyxcclxuICBnZXRUYXJnZXRDb2xvcjogeCA9PiB4LmNvbG9yIHx8IFswLCAwLCAwLCAyNTVdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRJbnN0YW5jZUNvbG9yU2hhZGVyKHZzKSB7XHJcbiAgY29uc3QgdGFyZ2V0Q29sb3JWcyA9IGVkaXRTaGFkZXIoXHJcbiAgICB2cyxcclxuICAgICdsaW5lIHRhcmdldCBjb2xvciB2cycsXHJcbiAgICAnYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VDb2xvcnM7JyxcclxuICAgICdhdHRyaWJ1dGUgdmVjNCBpbnN0YW5jZUNvbG9yczsgYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VUYXJnZXRDb2xvcnM7J1xyXG4gICk7XHJcblxyXG4gIHJldHVybiBlZGl0U2hhZGVyKFxyXG4gICAgdGFyZ2V0Q29sb3JWcyxcclxuICAgICdsaW5lIGNvbG9yIHZzJyxcclxuICAgICd2Q29sb3IgPSB2ZWM0KGluc3RhbmNlQ29sb3JzLnJnYiwgaW5zdGFuY2VDb2xvcnMuYSAqIG9wYWNpdHkpOycsXHJcbiAgICBgdmVjNCBjb2xvciA9IG1peChpbnN0YW5jZUNvbG9ycywgaW5zdGFuY2VUYXJnZXRDb2xvcnMsIHBvc2l0aW9ucy54KTtgICtcclxuICAgICAgYHZDb2xvciA9IHZlYzQoY29sb3IucmdiLCBjb2xvci5hICogb3BhY2l0eSk7YFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuaGFuY2VkTGluZUxheWVyIGV4dGVuZHMgTGluZUxheWVyIHtcclxuICBnZXRTaGFkZXJzKCkge1xyXG4gICAgY29uc3Qgc2hhZGVycyA9IHN1cGVyLmdldFNoYWRlcnMoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zaGFkZXJzLFxyXG4gICAgICB2czogYWRkSW5zdGFuY2VDb2xvclNoYWRlcihzaGFkZXJzLnZzKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVTdGF0ZSgpIHtcclxuICAgIHN1cGVyLmluaXRpYWxpemVTdGF0ZSgpO1xyXG4gICAgY29uc3Qge2F0dHJpYnV0ZU1hbmFnZXJ9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGF0dHJpYnV0ZU1hbmFnZXIuYWRkSW5zdGFuY2VkKHtcclxuICAgICAgaW5zdGFuY2VUYXJnZXRDb2xvcnM6IHtcclxuICAgICAgICBzaXplOiB0aGlzLnByb3BzLmNvbG9yRm9ybWF0Lmxlbmd0aCxcclxuICAgICAgICB0eXBlOiBHTC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgIG5vcm1hbGl6ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJ1ZSxcclxuICAgICAgICBhY2Nlc3NvcjogJ2dldFRhcmdldENvbG9yJyxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFswLCAwLCAwLCAyNTVdXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuRW5oYW5jZWRMaW5lTGF5ZXIubGF5ZXJOYW1lID0gJ0VuaGFuY2VkTGluZUxheWVyJztcclxuRW5oYW5jZWRMaW5lTGF5ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG4iXX0=