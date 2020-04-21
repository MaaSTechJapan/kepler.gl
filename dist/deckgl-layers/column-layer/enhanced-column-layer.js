"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _shaderUtils = require("../layer-utils/shader-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function addInstanceCoverage(vs) {
  var addDecl = (0, _shaderUtils.editShader)(vs, 'hexagon cell vs add instance', 'attribute vec3 instancePickingColors;', "attribute vec3 instancePickingColors;\n     attribute float instanceCoverage;");
  return (0, _shaderUtils.editShader)(addDecl, 'hexagon cell vs add instance', 'float dotRadius = radius * coverage * shouldRender;', 'float dotRadius = radius * coverage * instanceCoverage * shouldRender;');
} // TODO: export all deck.gl layers from kepler.gl


var EnhancedColumnLayer = /*#__PURE__*/function (_ColumnLayer) {
  (0, _inherits2["default"])(EnhancedColumnLayer, _ColumnLayer);

  var _super = _createSuper(EnhancedColumnLayer);

  function EnhancedColumnLayer() {
    (0, _classCallCheck2["default"])(this, EnhancedColumnLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EnhancedColumnLayer, [{
    key: "getShaders",
    value: function getShaders() {
      var shaders = (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedColumnLayer.prototype), "getShaders", this).call(this);
      return _objectSpread({}, shaders, {
        vs: addInstanceCoverage(shaders.vs)
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedColumnLayer.prototype), "initializeState", this).call(this);
      this.getAttributeManager().addInstanced({
        instanceCoverage: {
          size: 1,
          accessor: 'getCoverage'
        }
      });
    }
  }]);
  return EnhancedColumnLayer;
}(_layers.ColumnLayer);

EnhancedColumnLayer.layerName = 'EnhancedColumnLayer';
var _default = EnhancedColumnLayer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2NvbHVtbi1sYXllci9lbmhhbmNlZC1jb2x1bW4tbGF5ZXIuanMiXSwibmFtZXMiOlsiYWRkSW5zdGFuY2VDb3ZlcmFnZSIsInZzIiwiYWRkRGVjbCIsIkVuaGFuY2VkQ29sdW1uTGF5ZXIiLCJzaGFkZXJzIiwiZ2V0QXR0cmlidXRlTWFuYWdlciIsImFkZEluc3RhbmNlZCIsImluc3RhbmNlQ292ZXJhZ2UiLCJzaXplIiwiYWNjZXNzb3IiLCJDb2x1bW5MYXllciIsImxheWVyTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxtQkFBVCxDQUE2QkMsRUFBN0IsRUFBaUM7QUFDL0IsTUFBTUMsT0FBTyxHQUFHLDZCQUNkRCxFQURjLEVBRWQsOEJBRmMsRUFHZCx1Q0FIYyxrRkFBaEI7QUFRQSxTQUFPLDZCQUNMQyxPQURLLEVBRUwsOEJBRkssRUFHTCxxREFISyxFQUlMLHdFQUpLLENBQVA7QUFNRCxDLENBRUQ7OztJQUNNQyxtQjs7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsT0FBTyx3SEFBYjtBQUVBLCtCQUNLQSxPQURMO0FBRUVILFFBQUFBLEVBQUUsRUFBRUQsbUJBQW1CLENBQUNJLE9BQU8sQ0FBQ0gsRUFBVDtBQUZ6QjtBQUlEOzs7c0NBRWlCO0FBQ2hCO0FBRUEsV0FBS0ksbUJBQUwsR0FBMkJDLFlBQTNCLENBQXdDO0FBQ3RDQyxRQUFBQSxnQkFBZ0IsRUFBRTtBQUFDQyxVQUFBQSxJQUFJLEVBQUUsQ0FBUDtBQUFVQyxVQUFBQSxRQUFRLEVBQUU7QUFBcEI7QUFEb0IsT0FBeEM7QUFHRDs7O0VBaEIrQkMsbUI7O0FBbUJsQ1AsbUJBQW1CLENBQUNRLFNBQXBCLEdBQWdDLHFCQUFoQztlQUVlUixtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Q29sdW1uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XHJcbmltcG9ydCB7ZWRpdFNoYWRlcn0gZnJvbSAnZGVja2dsLWxheWVycy9sYXllci11dGlscy9zaGFkZXItdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gYWRkSW5zdGFuY2VDb3ZlcmFnZSh2cykge1xyXG4gIGNvbnN0IGFkZERlY2wgPSBlZGl0U2hhZGVyKFxyXG4gICAgdnMsXHJcbiAgICAnaGV4YWdvbiBjZWxsIHZzIGFkZCBpbnN0YW5jZScsXHJcbiAgICAnYXR0cmlidXRlIHZlYzMgaW5zdGFuY2VQaWNraW5nQ29sb3JzOycsXHJcbiAgICBgYXR0cmlidXRlIHZlYzMgaW5zdGFuY2VQaWNraW5nQ29sb3JzO1xyXG4gICAgIGF0dHJpYnV0ZSBmbG9hdCBpbnN0YW5jZUNvdmVyYWdlO2BcclxuICApO1xyXG5cclxuICByZXR1cm4gZWRpdFNoYWRlcihcclxuICAgIGFkZERlY2wsXHJcbiAgICAnaGV4YWdvbiBjZWxsIHZzIGFkZCBpbnN0YW5jZScsXHJcbiAgICAnZmxvYXQgZG90UmFkaXVzID0gcmFkaXVzICogY292ZXJhZ2UgKiBzaG91bGRSZW5kZXI7JyxcclxuICAgICdmbG9hdCBkb3RSYWRpdXMgPSByYWRpdXMgKiBjb3ZlcmFnZSAqIGluc3RhbmNlQ292ZXJhZ2UgKiBzaG91bGRSZW5kZXI7J1xyXG4gICk7XHJcbn1cclxuXHJcbi8vIFRPRE86IGV4cG9ydCBhbGwgZGVjay5nbCBsYXllcnMgZnJvbSBrZXBsZXIuZ2xcclxuY2xhc3MgRW5oYW5jZWRDb2x1bW5MYXllciBleHRlbmRzIENvbHVtbkxheWVyIHtcclxuICBnZXRTaGFkZXJzKCkge1xyXG4gICAgY29uc3Qgc2hhZGVycyA9IHN1cGVyLmdldFNoYWRlcnMoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zaGFkZXJzLFxyXG4gICAgICB2czogYWRkSW5zdGFuY2VDb3ZlcmFnZShzaGFkZXJzLnZzKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVTdGF0ZSgpIHtcclxuICAgIHN1cGVyLmluaXRpYWxpemVTdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuZ2V0QXR0cmlidXRlTWFuYWdlcigpLmFkZEluc3RhbmNlZCh7XHJcbiAgICAgIGluc3RhbmNlQ292ZXJhZ2U6IHtzaXplOiAxLCBhY2Nlc3NvcjogJ2dldENvdmVyYWdlJ31cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuRW5oYW5jZWRDb2x1bW5MYXllci5sYXllck5hbWUgPSAnRW5oYW5jZWRDb2x1bW5MYXllcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbmhhbmNlZENvbHVtbkxheWVyO1xyXG4iXX0=