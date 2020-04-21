"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewLayersToSplitMap = addNewLayersToSplitMap;
exports.removeLayerFromSplitMaps = removeLayerFromSplitMaps;
exports.getInitialMapLayersForSplitMap = getInitialMapLayersForSplitMap;
exports.computeSplitMapLayers = computeSplitMapLayers;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Add new layers to both existing maps
 * @param {Object} splitMaps
 * @param {Object|Array<Object>} layers
 * @returns {Array<Object>} new splitMaps
 */
function addNewLayersToSplitMap(splitMaps, layers) {
  var newLayers = Array.isArray(layers) ? layers : [layers];

  if (!splitMaps.length || !newLayers.length) {
    return splitMaps;
  } // add new layer to both maps,
  // don't override, if layer.id is already in splitMaps


  return splitMaps.map(function (settings) {
    return _objectSpread({}, settings, {
      layers: _objectSpread({}, settings.layers, {}, newLayers.reduce(function (accu, newLayer) {
        return [newLayer.id] in settings.layers || !newLayer.config.isVisible ? accu : _objectSpread({}, accu, (0, _defineProperty2["default"])({}, newLayer.id, newLayer.config.isVisible));
      }, {}))
    });
  });
}
/**
 * Remove an existing layer from split map settings
 * @param {Object} splitMaps
 * @param {Object} layer
 * @returns {Object} Maps of custom layer objects
 */


function removeLayerFromSplitMaps(splitMaps, layer) {
  if (!splitMaps.length) {
    return splitMaps;
  }

  return splitMaps.map(function (settings) {
    // eslint-disable-next-line no-unused-vars
    var _settings$layers = settings.layers,
        _layer$id = layer.id,
        _ = _settings$layers[_layer$id],
        newLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [_layer$id].map(_toPropertyKey));
    return _objectSpread({}, settings, {
      layers: newLayers
    });
  });
}
/**
 * This method will compute the default maps layer settings
 * based on the current layers visibility
 * @param {Array<Object>} layers
 * @returns {Array<Object>} layer visibility for each panel
 */


function getInitialMapLayersForSplitMap(layers) {
  return layers.filter(function (layer) {
    return layer.config.isVisible;
  }).reduce(function (newLayers, currentLayer) {
    return _objectSpread({}, newLayers, (0, _defineProperty2["default"])({}, currentLayer.id, currentLayer.config.isVisible));
  }, {});
}
/**
 * This method will get default splitMap settings based on existing layers
 * @param {Array<Object>} layers
 * @returns {Array<Object>} split map settings
 */


function computeSplitMapLayers(layers) {
  var mapLayers = getInitialMapLayersForSplitMap(layers);
  return [{
    layers: mapLayers
  }, {
    layers: (0, _lodash["default"])(mapLayers)
  }];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zcGxpdC1tYXAtdXRpbHMuanMiXSwibmFtZXMiOlsiYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcCIsInNwbGl0TWFwcyIsImxheWVycyIsIm5ld0xheWVycyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1hcCIsInNldHRpbmdzIiwicmVkdWNlIiwiYWNjdSIsIm5ld0xheWVyIiwiaWQiLCJjb25maWciLCJpc1Zpc2libGUiLCJyZW1vdmVMYXllckZyb21TcGxpdE1hcHMiLCJsYXllciIsIl8iLCJnZXRJbml0aWFsTWFwTGF5ZXJzRm9yU3BsaXRNYXAiLCJmaWx0ZXIiLCJjdXJyZW50TGF5ZXIiLCJjb21wdXRlU3BsaXRNYXBMYXllcnMiLCJtYXBMYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxzQkFBVCxDQUFnQ0MsU0FBaEMsRUFBMkNDLE1BQTNDLEVBQW1EO0FBQ3hELE1BQU1DLFNBQVMsR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILE1BQWQsSUFBd0JBLE1BQXhCLEdBQWlDLENBQUNBLE1BQUQsQ0FBbkQ7O0FBRUEsTUFBSSxDQUFDRCxTQUFTLENBQUNLLE1BQVgsSUFBcUIsQ0FBQ0gsU0FBUyxDQUFDRyxNQUFwQyxFQUE0QztBQUMxQyxXQUFPTCxTQUFQO0FBQ0QsR0FMdUQsQ0FPeEQ7QUFDQTs7O0FBQ0EsU0FBT0EsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQUMsUUFBUTtBQUFBLDZCQUN4QkEsUUFEd0I7QUFFM0JOLE1BQUFBLE1BQU0sb0JBQ0RNLFFBQVEsQ0FBQ04sTUFEUixNQUVEQyxTQUFTLENBQUNNLE1BQVYsQ0FDRCxVQUFDQyxJQUFELEVBQU9DLFFBQVA7QUFBQSxlQUNFLENBQUNBLFFBQVEsQ0FBQ0MsRUFBVixLQUFpQkosUUFBUSxDQUFDTixNQUExQixJQUFvQyxDQUFDUyxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDLFNBQXJELEdBQ0lKLElBREoscUJBR1NBLElBSFQsdUNBSU9DLFFBQVEsQ0FBQ0MsRUFKaEIsRUFJcUJELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkMsU0FKckMsRUFERjtBQUFBLE9BREMsRUFRRCxFQVJDLENBRkM7QUFGcUI7QUFBQSxHQUF0QixDQUFQO0FBZ0JEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0Msd0JBQVQsQ0FBa0NkLFNBQWxDLEVBQTZDZSxLQUE3QyxFQUFvRDtBQUN6RCxNQUFJLENBQUNmLFNBQVMsQ0FBQ0ssTUFBZixFQUF1QjtBQUNyQixXQUFPTCxTQUFQO0FBQ0Q7O0FBQ0QsU0FBT0EsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQUMsUUFBUSxFQUFJO0FBQy9CO0FBRCtCLDJCQUVPQSxRQUFRLENBQUNOLE1BRmhCO0FBQUEsb0JBRXZCYyxLQUFLLENBQUNKLEVBRmlCO0FBQUEsUUFFWkssQ0FGWTtBQUFBLFFBRU5kLFNBRk07QUFHL0IsNkJBQ0tLLFFBREw7QUFFRU4sTUFBQUEsTUFBTSxFQUFFQztBQUZWO0FBSUQsR0FQTSxDQUFQO0FBUUQ7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTZSw4QkFBVCxDQUF3Q2hCLE1BQXhDLEVBQWdEO0FBQ3JELFNBQU9BLE1BQU0sQ0FDVmlCLE1BREksQ0FDRyxVQUFBSCxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSCxNQUFOLENBQWFDLFNBQWpCO0FBQUEsR0FEUixFQUVKTCxNQUZJLENBR0gsVUFBQ04sU0FBRCxFQUFZaUIsWUFBWjtBQUFBLDZCQUNLakIsU0FETCx1Q0FFR2lCLFlBQVksQ0FBQ1IsRUFGaEIsRUFFcUJRLFlBQVksQ0FBQ1AsTUFBYixDQUFvQkMsU0FGekM7QUFBQSxHQUhHLEVBT0gsRUFQRyxDQUFQO0FBU0Q7QUFFRDs7Ozs7OztBQUtPLFNBQVNPLHFCQUFULENBQStCbkIsTUFBL0IsRUFBdUM7QUFDNUMsTUFBTW9CLFNBQVMsR0FBR0osOEJBQThCLENBQUNoQixNQUFELENBQWhEO0FBRUEsU0FBTyxDQUFDO0FBQUNBLElBQUFBLE1BQU0sRUFBRW9CO0FBQVQsR0FBRCxFQUFzQjtBQUFDcEIsSUFBQUEsTUFBTSxFQUFFLHdCQUFVb0IsU0FBVjtBQUFULEdBQXRCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCc7XHJcblxyXG4vKipcclxuICogQWRkIG5ldyBsYXllcnMgdG8gYm90aCBleGlzdGluZyBtYXBzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcGxpdE1hcHNcclxuICogQHBhcmFtIHtPYmplY3R8QXJyYXk8T2JqZWN0Pn0gbGF5ZXJzXHJcbiAqIEByZXR1cm5zIHtBcnJheTxPYmplY3Q+fSBuZXcgc3BsaXRNYXBzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzcGxpdE1hcHMsIGxheWVycykge1xyXG4gIGNvbnN0IG5ld0xheWVycyA9IEFycmF5LmlzQXJyYXkobGF5ZXJzKSA/IGxheWVycyA6IFtsYXllcnNdO1xyXG5cclxuICBpZiAoIXNwbGl0TWFwcy5sZW5ndGggfHwgIW5ld0xheWVycy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBzcGxpdE1hcHM7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgbmV3IGxheWVyIHRvIGJvdGggbWFwcyxcclxuICAvLyBkb24ndCBvdmVycmlkZSwgaWYgbGF5ZXIuaWQgaXMgYWxyZWFkeSBpbiBzcGxpdE1hcHNcclxuICByZXR1cm4gc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiAoe1xyXG4gICAgLi4uc2V0dGluZ3MsXHJcbiAgICBsYXllcnM6IHtcclxuICAgICAgLi4uc2V0dGluZ3MubGF5ZXJzLFxyXG4gICAgICAuLi5uZXdMYXllcnMucmVkdWNlKFxyXG4gICAgICAgIChhY2N1LCBuZXdMYXllcikgPT5cclxuICAgICAgICAgIFtuZXdMYXllci5pZF0gaW4gc2V0dGluZ3MubGF5ZXJzIHx8ICFuZXdMYXllci5jb25maWcuaXNWaXNpYmxlXHJcbiAgICAgICAgICAgID8gYWNjdVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgICAgICBbbmV3TGF5ZXIuaWRdOiBuZXdMYXllci5jb25maWcuaXNWaXNpYmxlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7fVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSkpO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGFuIGV4aXN0aW5nIGxheWVyIGZyb20gc3BsaXQgbWFwIHNldHRpbmdzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcGxpdE1hcHNcclxuICogQHBhcmFtIHtPYmplY3R9IGxheWVyXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE1hcHMgb2YgY3VzdG9tIGxheWVyIG9iamVjdHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3BsaXRNYXBzLCBsYXllcikge1xyXG4gIGlmICghc3BsaXRNYXBzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHNwbGl0TWFwcztcclxuICB9XHJcbiAgcmV0dXJuIHNwbGl0TWFwcy5tYXAoc2V0dGluZ3MgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCB7W2xheWVyLmlkXTogXywgLi4ubmV3TGF5ZXJzfSA9IHNldHRpbmdzLmxheWVycztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnNldHRpbmdzLFxyXG4gICAgICBsYXllcnM6IG5ld0xheWVyc1xyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHdpbGwgY29tcHV0ZSB0aGUgZGVmYXVsdCBtYXBzIGxheWVyIHNldHRpbmdzXHJcbiAqIGJhc2VkIG9uIHRoZSBjdXJyZW50IGxheWVycyB2aXNpYmlsaXR5XHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbGF5ZXJzXHJcbiAqIEByZXR1cm5zIHtBcnJheTxPYmplY3Q+fSBsYXllciB2aXNpYmlsaXR5IGZvciBlYWNoIHBhbmVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwKGxheWVycykge1xyXG4gIHJldHVybiBsYXllcnNcclxuICAgIC5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIuY29uZmlnLmlzVmlzaWJsZSlcclxuICAgIC5yZWR1Y2UoXHJcbiAgICAgIChuZXdMYXllcnMsIGN1cnJlbnRMYXllcikgPT4gKHtcclxuICAgICAgICAuLi5uZXdMYXllcnMsXHJcbiAgICAgICAgW2N1cnJlbnRMYXllci5pZF06IGN1cnJlbnRMYXllci5jb25maWcuaXNWaXNpYmxlXHJcbiAgICAgIH0pLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZ2V0IGRlZmF1bHQgc3BsaXRNYXAgc2V0dGluZ3MgYmFzZWQgb24gZXhpc3RpbmcgbGF5ZXJzXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbGF5ZXJzXHJcbiAqIEByZXR1cm5zIHtBcnJheTxPYmplY3Q+fSBzcGxpdCBtYXAgc2V0dGluZ3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlU3BsaXRNYXBMYXllcnMobGF5ZXJzKSB7XHJcbiAgY29uc3QgbWFwTGF5ZXJzID0gZ2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwKGxheWVycyk7XHJcblxyXG4gIHJldHVybiBbe2xheWVyczogbWFwTGF5ZXJzfSwge2xheWVyczogY2xvbmVEZWVwKG1hcExheWVycyl9XTtcclxufVxyXG4iXX0=