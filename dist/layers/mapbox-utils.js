"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMapboxLayers = generateMapboxLayers;
exports.updateMapboxLayers = updateMapboxLayers;
exports.geoJsonFromData = geoJsonFromData;
exports.gpuFilterToMapboxFilter = gpuFilterToMapboxFilter;
exports.prefixGpuField = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _baseLayer = require("./base-layer");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This function will convert layers to mapbox layers
 * @param {Array<Object>} layers the layers to be converted
 * @param {Array<Object>} layerData extra layer information
 * @param {Array<Number>} layerOrder the order by which we should convert layers
 * @param {Object} layersToRender {[id]: true | false} object whether each layer should be rendered
 * @returns {Object} {[id]: layer}
 */
function generateMapboxLayers() {
  var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var layerData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var layerOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var layersToRender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (layerData.length > 0) {
    return layerOrder.slice().reverse().filter(function (idx) {
      return layers[idx].overlayType === _baseLayer.OVERLAY_TYPE.mapboxgl && layersToRender[layers[idx].id];
    }).reduce(function (accu, index) {
      var layer = layers[index];
      return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, layer.id, {
        id: layer.id,
        data: layerData[index].data,
        isVisible: layer.config.isVisible,
        config: layerData[index].config,
        sourceId: layerData[index].config.source
      }));
    }, {});
  }

  return {};
}
/**
 * Update mapbox layers on the given map
 * @param {Object} map
 * @param {Object} newLayers Map of new mapbox layers to be displayed
 * @param {Object} oldLayers Map of the old layers to be compare with the current ones to detect deleted layers
 *                  {layerId: sourceId}
 */


function updateMapboxLayers(map) {
  var newLayers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var oldLayers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // delete no longer existed old layers
  if (oldLayers) {
    checkAndRemoveOldLayers(map, oldLayers, newLayers);
  } // insert or update new layer


  Object.values(newLayers).forEach(function (overlay) {
    var layerId = overlay.id,
        config = overlay.config,
        data = overlay.data,
        sourceId = overlay.sourceId,
        isVisible = overlay.isVisible;

    if (!data && !config) {
      return;
    }

    var _ref = oldLayers && oldLayers[layerId] || {},
        oldData = _ref.data,
        oldConfig = _ref.config;

    if (data && data !== oldData) {
      updateSourceData(map, sourceId, data);
    } // compare with previous configs


    if (oldConfig !== config) {
      updateLayerConfig(map, layerId, config, isVisible);
    }
  });
}

function checkAndRemoveOldLayers(map, oldLayers, newLayers) {
  Object.keys(oldLayers).forEach(function (layerId) {
    if (!newLayers[layerId]) {
      map.removeLayer(layerId);
    }
  });
}

function updateLayerConfig(map, layerId, config, isVisible) {
  var mapboxLayer = map.getLayer(layerId);

  if (mapboxLayer) {
    // check if layer already is set
    // remove it if exists
    map.removeLayer(layerId);
  }

  map.addLayer(config);
  map.setLayoutProperty(layerId, 'visibility', isVisible ? 'visible' : 'none');
}

function updateSourceData(map, sourceId, data) {
  var source = map.getSource(sourceId);

  if (!source) {
    map.addSource(sourceId, {
      type: 'geojson',
      data: data
    });
  } else {
    source.setData(data);
  }
}
/**
 *
 * @param points
 * @param columns {
 * lat: {fieldIdx},
 * lng: {fieldIdx},
 * alt: {fieldIdx}
 * }
 * @param properties [{label: {fieldIdx}]
 * @returns {{type: string, properties: {}, features: {type: string, properties: {}, geometry: {type: string, coordinates: *[]}}[]}}
 */


function geoJsonFromData() {
  var allData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filteredIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var getGeometry = arguments.length > 2 ? arguments[2] : undefined;
  var getProperties = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (d, i) {};
  var geojson = {
    type: 'FeatureCollection',
    features: []
  };

  for (var i = 0; i < filteredIndex.length; i++) {
    var index = filteredIndex[i];
    var point = allData[index];
    var geometry = getGeometry(point);

    if (geometry) {
      geojson.features.push({
        type: 'Feature',
        properties: _objectSpread({
          index: index
        }, getProperties(point, index)),
        geometry: geometry
      });
    }
  }

  return geojson;
}

var prefixGpuField = function prefixGpuField(name) {
  return "gpu:".concat(name);
};

exports.prefixGpuField = prefixGpuField;

function gpuFilterToMapboxFilter(gpuFilter) {
  var filterRange = gpuFilter.filterRange,
      filterValueUpdateTriggers = gpuFilter.filterValueUpdateTriggers;
  var hasFilter = Object.values(filterValueUpdateTriggers).filter(function (d) {
    return d;
  });

  if (!hasFilter.length) {
    return null;
  }

  var condition = ['all']; // [">=", key, value]
  // ["<=", key, value]

  var expressions = Object.values(filterValueUpdateTriggers).reduce(function (accu, name, i) {
    return name ? [].concat((0, _toConsumableArray2["default"])(accu), [['>=', prefixGpuField(name), filterRange[i][0]], ['<=', prefixGpuField(name), filterRange[i][1]]]) : accu;
  }, condition);
  return expressions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvbWFwYm94LXV0aWxzLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlTWFwYm94TGF5ZXJzIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibGF5ZXJPcmRlciIsImxheWVyc1RvUmVuZGVyIiwibGVuZ3RoIiwic2xpY2UiLCJyZXZlcnNlIiwiZmlsdGVyIiwiaWR4Iiwib3ZlcmxheVR5cGUiLCJPVkVSTEFZX1RZUEUiLCJtYXBib3hnbCIsImlkIiwicmVkdWNlIiwiYWNjdSIsImluZGV4IiwibGF5ZXIiLCJkYXRhIiwiaXNWaXNpYmxlIiwiY29uZmlnIiwic291cmNlSWQiLCJzb3VyY2UiLCJ1cGRhdGVNYXBib3hMYXllcnMiLCJtYXAiLCJuZXdMYXllcnMiLCJvbGRMYXllcnMiLCJjaGVja0FuZFJlbW92ZU9sZExheWVycyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJvdmVybGF5IiwibGF5ZXJJZCIsIm9sZERhdGEiLCJvbGRDb25maWciLCJ1cGRhdGVTb3VyY2VEYXRhIiwidXBkYXRlTGF5ZXJDb25maWciLCJrZXlzIiwicmVtb3ZlTGF5ZXIiLCJtYXBib3hMYXllciIsImdldExheWVyIiwiYWRkTGF5ZXIiLCJzZXRMYXlvdXRQcm9wZXJ0eSIsImdldFNvdXJjZSIsImFkZFNvdXJjZSIsInR5cGUiLCJzZXREYXRhIiwiZ2VvSnNvbkZyb21EYXRhIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJnZXRHZW9tZXRyeSIsImdldFByb3BlcnRpZXMiLCJkIiwiaSIsImdlb2pzb24iLCJmZWF0dXJlcyIsInBvaW50IiwiZ2VvbWV0cnkiLCJwdXNoIiwicHJvcGVydGllcyIsInByZWZpeEdwdUZpZWxkIiwibmFtZSIsImdwdUZpbHRlclRvTWFwYm94RmlsdGVyIiwiZ3B1RmlsdGVyIiwiZmlsdGVyUmFuZ2UiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiaGFzRmlsdGVyIiwiY29uZGl0aW9uIiwiZXhwcmVzc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRTyxTQUFTQSxvQkFBVCxHQUtMO0FBQUEsTUFKQUMsTUFJQSx1RUFKUyxFQUlUO0FBQUEsTUFIQUMsU0FHQSx1RUFIWSxFQUdaO0FBQUEsTUFGQUMsVUFFQSx1RUFGYSxFQUViO0FBQUEsTUFEQUMsY0FDQSx1RUFEaUIsRUFDakI7O0FBQ0EsTUFBSUYsU0FBUyxDQUFDRyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLFdBQU9GLFVBQVUsQ0FDZEcsS0FESSxHQUVKQyxPQUZJLEdBR0pDLE1BSEksQ0FJSCxVQUFBQyxHQUFHO0FBQUEsYUFBSVIsTUFBTSxDQUFDUSxHQUFELENBQU4sQ0FBWUMsV0FBWixLQUE0QkMsd0JBQWFDLFFBQXpDLElBQXFEUixjQUFjLENBQUNILE1BQU0sQ0FBQ1EsR0FBRCxDQUFOLENBQVlJLEVBQWIsQ0FBdkU7QUFBQSxLQUpBLEVBTUpDLE1BTkksQ0FNRyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdkIsVUFBTUMsS0FBSyxHQUFHaEIsTUFBTSxDQUFDZSxLQUFELENBQXBCO0FBQ0EsK0JBQ0tELElBREwsdUNBRUdFLEtBQUssQ0FBQ0osRUFGVCxFQUVjO0FBQ1ZBLFFBQUFBLEVBQUUsRUFBRUksS0FBSyxDQUFDSixFQURBO0FBRVZLLFFBQUFBLElBQUksRUFBRWhCLFNBQVMsQ0FBQ2MsS0FBRCxDQUFULENBQWlCRSxJQUZiO0FBR1ZDLFFBQUFBLFNBQVMsRUFBRUYsS0FBSyxDQUFDRyxNQUFOLENBQWFELFNBSGQ7QUFJVkMsUUFBQUEsTUFBTSxFQUFFbEIsU0FBUyxDQUFDYyxLQUFELENBQVQsQ0FBaUJJLE1BSmY7QUFLVkMsUUFBQUEsUUFBUSxFQUFFbkIsU0FBUyxDQUFDYyxLQUFELENBQVQsQ0FBaUJJLE1BQWpCLENBQXdCRTtBQUx4QixPQUZkO0FBVUQsS0FsQkksRUFrQkYsRUFsQkUsQ0FBUDtBQW1CRDs7QUFFRCxTQUFPLEVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPTyxTQUFTQyxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBbUU7QUFBQSxNQUFsQ0MsU0FBa0MsdUVBQXRCLEVBQXNCO0FBQUEsTUFBbEJDLFNBQWtCLHVFQUFOLElBQU07O0FBQ3hFO0FBQ0EsTUFBSUEsU0FBSixFQUFlO0FBQ2JDLElBQUFBLHVCQUF1QixDQUFDSCxHQUFELEVBQU1FLFNBQU4sRUFBaUJELFNBQWpCLENBQXZCO0FBQ0QsR0FKdUUsQ0FNeEU7OztBQUNBRyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0osU0FBZCxFQUF5QkssT0FBekIsQ0FBaUMsVUFBQUMsT0FBTyxFQUFJO0FBQUEsUUFDL0JDLE9BRCtCLEdBQ2VELE9BRGYsQ0FDbkNsQixFQURtQztBQUFBLFFBQ3RCTyxNQURzQixHQUNlVyxPQURmLENBQ3RCWCxNQURzQjtBQUFBLFFBQ2RGLElBRGMsR0FDZWEsT0FEZixDQUNkYixJQURjO0FBQUEsUUFDUkcsUUFEUSxHQUNlVSxPQURmLENBQ1JWLFFBRFE7QUFBQSxRQUNFRixTQURGLEdBQ2VZLE9BRGYsQ0FDRVosU0FERjs7QUFFMUMsUUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0UsTUFBZCxFQUFzQjtBQUNwQjtBQUNEOztBQUp5QyxlQU1FTSxTQUFTLElBQUlBLFNBQVMsQ0FBQ00sT0FBRCxDQUF2QixJQUFxQyxFQU50QztBQUFBLFFBTTdCQyxPQU42QixRQU1uQ2YsSUFObUM7QUFBQSxRQU1aZ0IsU0FOWSxRQU1wQmQsTUFOb0I7O0FBUTFDLFFBQUlGLElBQUksSUFBSUEsSUFBSSxLQUFLZSxPQUFyQixFQUE4QjtBQUM1QkUsTUFBQUEsZ0JBQWdCLENBQUNYLEdBQUQsRUFBTUgsUUFBTixFQUFnQkgsSUFBaEIsQ0FBaEI7QUFDRCxLQVZ5QyxDQVkxQzs7O0FBQ0EsUUFBSWdCLFNBQVMsS0FBS2QsTUFBbEIsRUFBMEI7QUFDeEJnQixNQUFBQSxpQkFBaUIsQ0FBQ1osR0FBRCxFQUFNUSxPQUFOLEVBQWVaLE1BQWYsRUFBdUJELFNBQXZCLENBQWpCO0FBQ0Q7QUFDRixHQWhCRDtBQWlCRDs7QUFFRCxTQUFTUSx1QkFBVCxDQUFpQ0gsR0FBakMsRUFBc0NFLFNBQXRDLEVBQWlERCxTQUFqRCxFQUE0RDtBQUMxREcsRUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVlYLFNBQVosRUFBdUJJLE9BQXZCLENBQStCLFVBQUFFLE9BQU8sRUFBSTtBQUN4QyxRQUFJLENBQUNQLFNBQVMsQ0FBQ08sT0FBRCxDQUFkLEVBQXlCO0FBQ3ZCUixNQUFBQSxHQUFHLENBQUNjLFdBQUosQ0FBZ0JOLE9BQWhCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU0ksaUJBQVQsQ0FBMkJaLEdBQTNCLEVBQWdDUSxPQUFoQyxFQUF5Q1osTUFBekMsRUFBaURELFNBQWpELEVBQTREO0FBQzFELE1BQU1vQixXQUFXLEdBQUdmLEdBQUcsQ0FBQ2dCLFFBQUosQ0FBYVIsT0FBYixDQUFwQjs7QUFFQSxNQUFJTyxXQUFKLEVBQWlCO0FBQ2Y7QUFDQTtBQUNBZixJQUFBQSxHQUFHLENBQUNjLFdBQUosQ0FBZ0JOLE9BQWhCO0FBQ0Q7O0FBRURSLEVBQUFBLEdBQUcsQ0FBQ2lCLFFBQUosQ0FBYXJCLE1BQWI7QUFDQUksRUFBQUEsR0FBRyxDQUFDa0IsaUJBQUosQ0FBc0JWLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDYixTQUFTLEdBQUcsU0FBSCxHQUFlLE1BQXJFO0FBQ0Q7O0FBRUQsU0FBU2dCLGdCQUFULENBQTBCWCxHQUExQixFQUErQkgsUUFBL0IsRUFBeUNILElBQXpDLEVBQStDO0FBQzdDLE1BQU1JLE1BQU0sR0FBR0UsR0FBRyxDQUFDbUIsU0FBSixDQUFjdEIsUUFBZCxDQUFmOztBQUVBLE1BQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1hFLElBQUFBLEdBQUcsQ0FBQ29CLFNBQUosQ0FBY3ZCLFFBQWQsRUFBd0I7QUFDdEJ3QixNQUFBQSxJQUFJLEVBQUUsU0FEZ0I7QUFFdEIzQixNQUFBQSxJQUFJLEVBQUpBO0FBRnNCLEtBQXhCO0FBSUQsR0FMRCxNQUtPO0FBQ0xJLElBQUFBLE1BQU0sQ0FBQ3dCLE9BQVAsQ0FBZTVCLElBQWY7QUFDRDtBQUNGO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUFXTyxTQUFTNkIsZUFBVCxHQUtMO0FBQUEsTUFKQUMsT0FJQSx1RUFKVSxFQUlWO0FBQUEsTUFIQUMsYUFHQSx1RUFIZ0IsRUFHaEI7QUFBQSxNQUZBQyxXQUVBO0FBQUEsTUFEQUMsYUFDQSx1RUFEZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVUsQ0FBRSxDQUM1QjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUNkVCxJQUFBQSxJQUFJLEVBQUUsbUJBRFE7QUFFZFUsSUFBQUEsUUFBUSxFQUFFO0FBRkksR0FBaEI7O0FBS0EsT0FBSyxJQUFJRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixhQUFhLENBQUM1QyxNQUFsQyxFQUEwQ2dELENBQUMsRUFBM0MsRUFBK0M7QUFDN0MsUUFBTXJDLEtBQUssR0FBR2lDLGFBQWEsQ0FBQ0ksQ0FBRCxDQUEzQjtBQUNBLFFBQU1HLEtBQUssR0FBR1IsT0FBTyxDQUFDaEMsS0FBRCxDQUFyQjtBQUNBLFFBQU15QyxRQUFRLEdBQUdQLFdBQVcsQ0FBQ00sS0FBRCxDQUE1Qjs7QUFFQSxRQUFJQyxRQUFKLEVBQWM7QUFDWkgsTUFBQUEsT0FBTyxDQUFDQyxRQUFSLENBQWlCRyxJQUFqQixDQUFzQjtBQUNwQmIsUUFBQUEsSUFBSSxFQUFFLFNBRGM7QUFFcEJjLFFBQUFBLFVBQVU7QUFDUjNDLFVBQUFBLEtBQUssRUFBTEE7QUFEUSxXQUVMbUMsYUFBYSxDQUFDSyxLQUFELEVBQVF4QyxLQUFSLENBRlIsQ0FGVTtBQU1wQnlDLFFBQUFBLFFBQVEsRUFBUkE7QUFOb0IsT0FBdEI7QUFRRDtBQUNGOztBQUVELFNBQU9ILE9BQVA7QUFDRDs7QUFFTSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLElBQUk7QUFBQSx1QkFBV0EsSUFBWDtBQUFBLENBQTNCOzs7O0FBRUEsU0FBU0MsdUJBQVQsQ0FBaUNDLFNBQWpDLEVBQTRDO0FBQUEsTUFDMUNDLFdBRDBDLEdBQ0FELFNBREEsQ0FDMUNDLFdBRDBDO0FBQUEsTUFDN0JDLHlCQUQ2QixHQUNBRixTQURBLENBQzdCRSx5QkFENkI7QUFHakQsTUFBTUMsU0FBUyxHQUFHdEMsTUFBTSxDQUFDQyxNQUFQLENBQWNvQyx5QkFBZCxFQUF5Q3pELE1BQXpDLENBQWdELFVBQUE0QyxDQUFDO0FBQUEsV0FBSUEsQ0FBSjtBQUFBLEdBQWpELENBQWxCOztBQUVBLE1BQUksQ0FBQ2MsU0FBUyxDQUFDN0QsTUFBZixFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFNOEQsU0FBUyxHQUFHLENBQUMsS0FBRCxDQUFsQixDQVRpRCxDQVdqRDtBQUNBOztBQUNBLE1BQU1DLFdBQVcsR0FBR3hDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjb0MseUJBQWQsRUFBeUNuRCxNQUF6QyxDQUNsQixVQUFDQyxJQUFELEVBQU84QyxJQUFQLEVBQWFSLENBQWI7QUFBQSxXQUNFUSxJQUFJLGlEQUVLOUMsSUFGTCxJQUdFLENBQUMsSUFBRCxFQUFPNkMsY0FBYyxDQUFDQyxJQUFELENBQXJCLEVBQTZCRyxXQUFXLENBQUNYLENBQUQsQ0FBWCxDQUFlLENBQWYsQ0FBN0IsQ0FIRixFQUlFLENBQUMsSUFBRCxFQUFPTyxjQUFjLENBQUNDLElBQUQsQ0FBckIsRUFBNkJHLFdBQVcsQ0FBQ1gsQ0FBRCxDQUFYLENBQWUsQ0FBZixDQUE3QixDQUpGLEtBTUF0QyxJQVBOO0FBQUEsR0FEa0IsRUFTbEJvRCxTQVRrQixDQUFwQjtBQVlBLFNBQU9DLFdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7T1ZFUkxBWV9UWVBFfSBmcm9tICcuL2Jhc2UtbGF5ZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGxheWVycyB0byBtYXBib3ggbGF5ZXJzXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbGF5ZXJzIHRoZSBsYXllcnMgdG8gYmUgY29udmVydGVkXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbGF5ZXJEYXRhIGV4dHJhIGxheWVyIGluZm9ybWF0aW9uXHJcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbGF5ZXJPcmRlciB0aGUgb3JkZXIgYnkgd2hpY2ggd2Ugc2hvdWxkIGNvbnZlcnQgbGF5ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBsYXllcnNUb1JlbmRlciB7W2lkXTogdHJ1ZSB8IGZhbHNlfSBvYmplY3Qgd2hldGhlciBlYWNoIGxheWVyIHNob3VsZCBiZSByZW5kZXJlZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB7W2lkXTogbGF5ZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNYXBib3hMYXllcnMoXHJcbiAgbGF5ZXJzID0gW10sXHJcbiAgbGF5ZXJEYXRhID0gW10sXHJcbiAgbGF5ZXJPcmRlciA9IFtdLFxyXG4gIGxheWVyc1RvUmVuZGVyID0ge31cclxuKSB7XHJcbiAgaWYgKGxheWVyRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gbGF5ZXJPcmRlclxyXG4gICAgICAuc2xpY2UoKVxyXG4gICAgICAucmV2ZXJzZSgpXHJcbiAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgaWR4ID0+IGxheWVyc1tpZHhdLm92ZXJsYXlUeXBlID09PSBPVkVSTEFZX1RZUEUubWFwYm94Z2wgJiYgbGF5ZXJzVG9SZW5kZXJbbGF5ZXJzW2lkeF0uaWRdXHJcbiAgICAgIClcclxuICAgICAgLnJlZHVjZSgoYWNjdSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBsYXllciA9IGxheWVyc1tpbmRleF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICBbbGF5ZXIuaWRdOiB7XHJcbiAgICAgICAgICAgIGlkOiBsYXllci5pZCxcclxuICAgICAgICAgICAgZGF0YTogbGF5ZXJEYXRhW2luZGV4XS5kYXRhLFxyXG4gICAgICAgICAgICBpc1Zpc2libGU6IGxheWVyLmNvbmZpZy5pc1Zpc2libGUsXHJcbiAgICAgICAgICAgIGNvbmZpZzogbGF5ZXJEYXRhW2luZGV4XS5jb25maWcsXHJcbiAgICAgICAgICAgIHNvdXJjZUlkOiBsYXllckRhdGFbaW5kZXhdLmNvbmZpZy5zb3VyY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge307XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbWFwYm94IGxheWVycyBvbiB0aGUgZ2l2ZW4gbWFwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXBcclxuICogQHBhcmFtIHtPYmplY3R9IG5ld0xheWVycyBNYXAgb2YgbmV3IG1hcGJveCBsYXllcnMgdG8gYmUgZGlzcGxheWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllcnMgTWFwIG9mIHRoZSBvbGQgbGF5ZXJzIHRvIGJlIGNvbXBhcmUgd2l0aCB0aGUgY3VycmVudCBvbmVzIHRvIGRldGVjdCBkZWxldGVkIGxheWVyc1xyXG4gKiAgICAgICAgICAgICAgICAgIHtsYXllcklkOiBzb3VyY2VJZH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNYXBib3hMYXllcnMobWFwLCBuZXdMYXllcnMgPSB7fSwgb2xkTGF5ZXJzID0gbnVsbCkge1xyXG4gIC8vIGRlbGV0ZSBubyBsb25nZXIgZXhpc3RlZCBvbGQgbGF5ZXJzXHJcbiAgaWYgKG9sZExheWVycykge1xyXG4gICAgY2hlY2tBbmRSZW1vdmVPbGRMYXllcnMobWFwLCBvbGRMYXllcnMsIG5ld0xheWVycyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbnNlcnQgb3IgdXBkYXRlIG5ldyBsYXllclxyXG4gIE9iamVjdC52YWx1ZXMobmV3TGF5ZXJzKS5mb3JFYWNoKG92ZXJsYXkgPT4ge1xyXG4gICAgY29uc3Qge2lkOiBsYXllcklkLCBjb25maWcsIGRhdGEsIHNvdXJjZUlkLCBpc1Zpc2libGV9ID0gb3ZlcmxheTtcclxuICAgIGlmICghZGF0YSAmJiAhY29uZmlnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7ZGF0YTogb2xkRGF0YSwgY29uZmlnOiBvbGRDb25maWd9ID0gKG9sZExheWVycyAmJiBvbGRMYXllcnNbbGF5ZXJJZF0pIHx8IHt9O1xyXG5cclxuICAgIGlmIChkYXRhICYmIGRhdGEgIT09IG9sZERhdGEpIHtcclxuICAgICAgdXBkYXRlU291cmNlRGF0YShtYXAsIHNvdXJjZUlkLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wYXJlIHdpdGggcHJldmlvdXMgY29uZmlnc1xyXG4gICAgaWYgKG9sZENvbmZpZyAhPT0gY29uZmlnKSB7XHJcbiAgICAgIHVwZGF0ZUxheWVyQ29uZmlnKG1hcCwgbGF5ZXJJZCwgY29uZmlnLCBpc1Zpc2libGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0FuZFJlbW92ZU9sZExheWVycyhtYXAsIG9sZExheWVycywgbmV3TGF5ZXJzKSB7XHJcbiAgT2JqZWN0LmtleXMob2xkTGF5ZXJzKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgaWYgKCFuZXdMYXllcnNbbGF5ZXJJZF0pIHtcclxuICAgICAgbWFwLnJlbW92ZUxheWVyKGxheWVySWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMYXllckNvbmZpZyhtYXAsIGxheWVySWQsIGNvbmZpZywgaXNWaXNpYmxlKSB7XHJcbiAgY29uc3QgbWFwYm94TGF5ZXIgPSBtYXAuZ2V0TGF5ZXIobGF5ZXJJZCk7XHJcblxyXG4gIGlmIChtYXBib3hMYXllcikge1xyXG4gICAgLy8gY2hlY2sgaWYgbGF5ZXIgYWxyZWFkeSBpcyBzZXRcclxuICAgIC8vIHJlbW92ZSBpdCBpZiBleGlzdHNcclxuICAgIG1hcC5yZW1vdmVMYXllcihsYXllcklkKTtcclxuICB9XHJcblxyXG4gIG1hcC5hZGRMYXllcihjb25maWcpO1xyXG4gIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShsYXllcklkLCAndmlzaWJpbGl0eScsIGlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdub25lJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNvdXJjZURhdGEobWFwLCBzb3VyY2VJZCwgZGF0YSkge1xyXG4gIGNvbnN0IHNvdXJjZSA9IG1hcC5nZXRTb3VyY2Uoc291cmNlSWQpO1xyXG5cclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgbWFwLmFkZFNvdXJjZShzb3VyY2VJZCwge1xyXG4gICAgICB0eXBlOiAnZ2VvanNvbicsXHJcbiAgICAgIGRhdGFcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzb3VyY2Uuc2V0RGF0YShkYXRhKTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBwb2ludHNcclxuICogQHBhcmFtIGNvbHVtbnMge1xyXG4gKiBsYXQ6IHtmaWVsZElkeH0sXHJcbiAqIGxuZzoge2ZpZWxkSWR4fSxcclxuICogYWx0OiB7ZmllbGRJZHh9XHJcbiAqIH1cclxuICogQHBhcmFtIHByb3BlcnRpZXMgW3tsYWJlbDoge2ZpZWxkSWR4fV1cclxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmcsIHByb3BlcnRpZXM6IHt9LCBmZWF0dXJlczoge3R5cGU6IHN0cmluZywgcHJvcGVydGllczoge30sIGdlb21ldHJ5OiB7dHlwZTogc3RyaW5nLCBjb29yZGluYXRlczogKltdfX1bXX19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VvSnNvbkZyb21EYXRhKFxyXG4gIGFsbERhdGEgPSBbXSxcclxuICBmaWx0ZXJlZEluZGV4ID0gW10sXHJcbiAgZ2V0R2VvbWV0cnksXHJcbiAgZ2V0UHJvcGVydGllcyA9IChkLCBpKSA9PiB7fVxyXG4pIHtcclxuICBjb25zdCBnZW9qc29uID0ge1xyXG4gICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcclxuICAgIGZlYXR1cmVzOiBbXVxyXG4gIH07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xyXG4gICAgY29uc3QgcG9pbnQgPSBhbGxEYXRhW2luZGV4XTtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2V0R2VvbWV0cnkocG9pbnQpO1xyXG5cclxuICAgIGlmIChnZW9tZXRyeSkge1xyXG4gICAgICBnZW9qc29uLmZlYXR1cmVzLnB1c2goe1xyXG4gICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIC4uLmdldFByb3BlcnRpZXMocG9pbnQsIGluZGV4KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VvbWV0cnlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2VvanNvbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByZWZpeEdwdUZpZWxkID0gbmFtZSA9PiBgZ3B1OiR7bmFtZX1gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdwdUZpbHRlclRvTWFwYm94RmlsdGVyKGdwdUZpbHRlcikge1xyXG4gIGNvbnN0IHtmaWx0ZXJSYW5nZSwgZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc30gPSBncHVGaWx0ZXI7XHJcblxyXG4gIGNvbnN0IGhhc0ZpbHRlciA9IE9iamVjdC52YWx1ZXMoZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycykuZmlsdGVyKGQgPT4gZCk7XHJcblxyXG4gIGlmICghaGFzRmlsdGVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb25kaXRpb24gPSBbJ2FsbCddO1xyXG5cclxuICAvLyBbXCI+PVwiLCBrZXksIHZhbHVlXVxyXG4gIC8vIFtcIjw9XCIsIGtleSwgdmFsdWVdXHJcbiAgY29uc3QgZXhwcmVzc2lvbnMgPSBPYmplY3QudmFsdWVzKGZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMpLnJlZHVjZShcclxuICAgIChhY2N1LCBuYW1lLCBpKSA9PlxyXG4gICAgICBuYW1lXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgIFsnPj0nLCBwcmVmaXhHcHVGaWVsZChuYW1lKSwgZmlsdGVyUmFuZ2VbaV1bMF1dLFxyXG4gICAgICAgICAgICBbJzw9JywgcHJlZml4R3B1RmllbGQobmFtZSksIGZpbHRlclJhbmdlW2ldWzFdXVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIDogYWNjdSxcclxuICAgIGNvbmRpdGlvblxyXG4gICk7XHJcblxyXG4gIHJldHVybiBleHByZXNzaW9ucztcclxufVxyXG4iXX0=