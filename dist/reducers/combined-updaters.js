"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDataToMapComposed = exports.addDataToMapUpdater = exports.defaultAddDataToMapOptions = exports.isValidConfig = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uiStateUpdaters = require("./ui-state-updaters");

var _visStateUpdaters = require("./vis-state-updaters");

var _mapStateUpdaters = require("./map-state-updaters");

var _mapStyleUpdaters = require("./map-style-updaters");

var _dataUtils = require("../utils/data-utils");

var _schemas = _interopRequireDefault(require("../schemas"));

var _utils = require("../utils/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// compose action to apply result multiple reducers, with the output of one

/**
 * Some actions will affect the entire kepler.lg instance state.
 * The updaters for these actions is exported as `combinedUpdaters`. These updater take the entire instance state
 * as the first argument. Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {combinedUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // add data to map after receiving data from remote sources
 *    case 'LOAD_REMOTE_RESOURCE_SUCCESS':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          // pass in kepler.gl instance state to combinedUpdaters
 *          map:  combinedUpdaters.addDataToMapUpdater(
 *           state.keplerGl.map,
 *           {
 *             payload: {
 *               datasets: action.datasets,
 *               options: {readOnly: true},
 *               config: action.config
 *              }
 *            }
 *          )
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
var combinedUpdaters = null;
/* eslint-enable no-unused-vars */

var isValidConfig = function isValidConfig(config) {
  return (0, _utils.isPlainObject)(config) && (0, _utils.isPlainObject)(config.config) && config.version;
};

exports.isValidConfig = isValidConfig;
var defaultAddDataToMapOptions = {
  centerMap: true,
  keepExistingConfig: false
};
/**
 * Combine data and full configuration update in a single action
 *
 * @memberof combinedUpdaters
 * @param {Object} state kepler.gl instance state, containing all subreducer state
 * @param {Object} action
 * @param {Object} action.payload `{datasets, options, config}`
 * @param {Array<Object>|Object} action.payload.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} action.payload.datasets.info -info of a dataset
 * @param {string} action.payload.datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} action.payload.datasets.info.label - A display name of this dataset
 * @param {Object} action.payload.datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} action.payload.datasets.data.fields - ***required** Array of fields,
 * @param {string} action.payload.datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} action.payload.datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 * @param {Object} action.payload.options option object `{centerMap: true}`
 * @param {Object} action.payload.config map config
 * @returns {Object} nextState
 * @public
 */

exports.defaultAddDataToMapOptions = defaultAddDataToMapOptions;

var addDataToMapUpdater = function addDataToMapUpdater(state, _ref) {
  var payload = _ref.payload;
  var datasets = payload.datasets,
      config = payload.config,
      info = payload.info;

  var options = _objectSpread({}, defaultAddDataToMapOptions, {}, payload.options);

  var parsedConfig = config;

  if (isValidConfig(config)) {
    // if passed in saved config
    parsedConfig = _schemas["default"].parseSavedConfig(config);
  }

  var oldLayers = state.visState.layers; // Update visState store

  var mergedState = _objectSpread({}, state, {
    visState: (0, _visStateUpdaters.updateVisDataUpdater)(state.visState, {
      datasets: datasets,
      options: options,
      config: parsedConfig
    })
  }); // merge map info
  // save title, description provider and queryParams


  if (info) {
    mergedState = _objectSpread({}, mergedState, {
      visState: (0, _visStateUpdaters.setMapInfoUpdater)(mergedState.visState, {
        info: info
      })
    });
  }

  var bounds;

  if (options.centerMap) {
    // find map bounds for new layers
    var newLayers = mergedState.visState.layers.filter(function (nl) {
      return !oldLayers.find(function (ol) {
        return ol === nl;
      });
    });
    bounds = (0, _dataUtils.findMapBounds)(newLayers);
  } // Update mapState store


  mergedState = _objectSpread({}, mergedState, {
    mapState: (0, _mapStateUpdaters.receiveMapConfigUpdater)(mergedState.mapState, {
      payload: {
        config: parsedConfig,
        options: options,
        bounds: bounds
      }
    })
  }); // Update mapStyle store

  mergedState = _objectSpread({}, mergedState, {
    mapStyle: (0, _mapStyleUpdaters.receiveMapConfigUpdater)(mergedState.mapStyle, {
      payload: {
        config: parsedConfig,
        options: options
      }
    })
  }); // Update uiState

  mergedState = _objectSpread({}, mergedState, {
    uiState: _objectSpread({}, (0, _uiStateUpdaters.toggleModalUpdater)((0, _uiStateUpdaters.loadFilesSuccessUpdater)(mergedState.uiState), {
      payload: null
    }), {}, options.hasOwnProperty('readOnly') ? {
      readOnly: options.readOnly
    } : {})
  });
  return mergedState;
};

exports.addDataToMapUpdater = addDataToMapUpdater;
var addDataToMapComposed = addDataToMapUpdater;
exports.addDataToMapComposed = addDataToMapComposed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb21iaW5lZC11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lZFVwZGF0ZXJzIiwiaXNWYWxpZENvbmZpZyIsImNvbmZpZyIsInZlcnNpb24iLCJkZWZhdWx0QWRkRGF0YVRvTWFwT3B0aW9ucyIsImNlbnRlck1hcCIsImtlZXBFeGlzdGluZ0NvbmZpZyIsImFkZERhdGFUb01hcFVwZGF0ZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJkYXRhc2V0cyIsImluZm8iLCJvcHRpb25zIiwicGFyc2VkQ29uZmlnIiwiS2VwbGVyR2xTY2hlbWEiLCJwYXJzZVNhdmVkQ29uZmlnIiwib2xkTGF5ZXJzIiwidmlzU3RhdGUiLCJsYXllcnMiLCJtZXJnZWRTdGF0ZSIsImJvdW5kcyIsIm5ld0xheWVycyIsImZpbHRlciIsIm5sIiwiZmluZCIsIm9sIiwibWFwU3RhdGUiLCJtYXBTdHlsZSIsInVpU3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInJlYWRPbmx5IiwiYWRkRGF0YVRvTWFwQ29tcG9zZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsSUFBekI7QUFDQTs7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE1BQU07QUFBQSxTQUNqQywwQkFBY0EsTUFBZCxLQUF5QiwwQkFBY0EsTUFBTSxDQUFDQSxNQUFyQixDQUF6QixJQUF5REEsTUFBTSxDQUFDQyxPQUQvQjtBQUFBLENBQTVCOzs7QUFFQSxJQUFNQywwQkFBMEIsR0FBRztBQUN4Q0MsRUFBQUEsU0FBUyxFQUFFLElBRDZCO0FBRXhDQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUZvQixDQUFuQztBQUlQOzs7Ozs7Ozs7Ozs7Ozs7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QUFyQyxHQUFvRSxFQUpuRTtBQUZFLElBQVg7QUFVQSxTQUFPWCxXQUFQO0FBQ0QsQ0F0RU07OztBQXdFQSxJQUFNWSxvQkFBb0IsR0FBR3hCLG1CQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7dG9nZ2xlTW9kYWxVcGRhdGVyLCBsb2FkRmlsZXNTdWNjZXNzVXBkYXRlcn0gZnJvbSAnLi91aS1zdGF0ZS11cGRhdGVycyc7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlVmlzRGF0YVVwZGF0ZXIgYXMgdmlzU3RhdGVVcGRhdGVWaXNEYXRhVXBkYXRlcixcclxuICBzZXRNYXBJbmZvVXBkYXRlclxyXG59IGZyb20gJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJztcclxuaW1wb3J0IHtyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciBhcyBzdGF0ZU1hcENvbmZpZ1VwZGF0ZXJ9IGZyb20gJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJztcclxuaW1wb3J0IHtyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciBhcyBzdHlsZU1hcENvbmZpZ1VwZGF0ZXJ9IGZyb20gJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJztcclxuaW1wb3J0IHtmaW5kTWFwQm91bmRzfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xyXG5pbXBvcnQge2lzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuXHJcbi8vIGNvbXBvc2UgYWN0aW9uIHRvIGFwcGx5IHJlc3VsdCBtdWx0aXBsZSByZWR1Y2Vycywgd2l0aCB0aGUgb3V0cHV0IG9mIG9uZVxyXG5cclxuLyoqXHJcbiAqIFNvbWUgYWN0aW9ucyB3aWxsIGFmZmVjdCB0aGUgZW50aXJlIGtlcGxlci5sZyBpbnN0YW5jZSBzdGF0ZS5cclxuICogVGhlIHVwZGF0ZXJzIGZvciB0aGVzZSBhY3Rpb25zIGlzIGV4cG9ydGVkIGFzIGBjb21iaW5lZFVwZGF0ZXJzYC4gVGhlc2UgdXBkYXRlciB0YWtlIHRoZSBlbnRpcmUgaW5zdGFuY2Ugc3RhdGVcclxuICogYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7Y29tYmluZWRVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcclxuICogLy8gUm9vdCBSZWR1Y2VyXHJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXHJcbiAqICBhcHA6IGFwcFJlZHVjZXJcclxuICogfSk7XHJcbiAqXHJcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAqICAgIC8vIGFkZCBkYXRhIHRvIG1hcCBhZnRlciByZWNlaXZpbmcgZGF0YSBmcm9tIHJlbW90ZSBzb3VyY2VzXHJcbiAqICAgIGNhc2UgJ0xPQURfUkVNT1RFX1JFU09VUkNFX1NVQ0NFU1MnOlxyXG4gKiAgICAgIHJldHVybiB7XHJcbiAqICAgICAgICAuLi5zdGF0ZSxcclxuICogICAgICAgIGtlcGxlckdsOiB7XHJcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxyXG4gKiAgICAgICAgICAvLyBwYXNzIGluIGtlcGxlci5nbCBpbnN0YW5jZSBzdGF0ZSB0byBjb21iaW5lZFVwZGF0ZXJzXHJcbiAqICAgICAgICAgIG1hcDogIGNvbWJpbmVkVXBkYXRlcnMuYWRkRGF0YVRvTWFwVXBkYXRlcihcclxuICogICAgICAgICAgIHN0YXRlLmtlcGxlckdsLm1hcCxcclxuICogICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gKiAgICAgICAgICAgICAgIGRhdGFzZXRzOiBhY3Rpb24uZGF0YXNldHMsXHJcbiAqICAgICAgICAgICAgICAgb3B0aW9uczoge3JlYWRPbmx5OiB0cnVlfSxcclxuICogICAgICAgICAgICAgICBjb25maWc6IGFjdGlvbi5jb25maWdcclxuICogICAgICAgICAgICAgIH1cclxuICogICAgICAgICAgICB9XHJcbiAqICAgICAgICAgIClcclxuICogICAgICAgIH1cclxuICogICAgICB9O1xyXG4gKiAgfVxyXG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xyXG4gKiB9O1xyXG4gKlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5jb25zdCBjb21iaW5lZFVwZGF0ZXJzID0gbnVsbDtcclxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRDb25maWcgPSBjb25maWcgPT5cclxuICBpc1BsYWluT2JqZWN0KGNvbmZpZykgJiYgaXNQbGFpbk9iamVjdChjb25maWcuY29uZmlnKSAmJiBjb25maWcudmVyc2lvbjtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRBZGREYXRhVG9NYXBPcHRpb25zID0ge1xyXG4gIGNlbnRlck1hcDogdHJ1ZSxcclxuICBrZWVwRXhpc3RpbmdDb25maWc6IGZhbHNlXHJcbn07XHJcbi8qKlxyXG4gKiBDb21iaW5lIGRhdGEgYW5kIGZ1bGwgY29uZmlndXJhdGlvbiB1cGRhdGUgaW4gYSBzaW5nbGUgYWN0aW9uXHJcbiAqXHJcbiAqIEBtZW1iZXJvZiBjb21iaW5lZFVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBrZXBsZXIuZ2wgaW5zdGFuY2Ugc3RhdGUsIGNvbnRhaW5pbmcgYWxsIHN1YnJlZHVjZXIgc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQgYHtkYXRhc2V0cywgb3B0aW9ucywgY29uZmlnfWBcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fE9iamVjdH0gYWN0aW9uLnBheWxvYWQuZGF0YXNldHMgLSAqKipyZXF1aXJlZCoqIGRhdGFzZXRzIGNhbiBiZSBhIGRhdGFzZXQgb3IgYW4gYXJyYXkgb2YgZGF0YXNldHNcclxuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQuZGF0YXNldHMuaW5mbyAtaW5mbyBvZiBhIGRhdGFzZXRcclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkLmRhdGFzZXRzLmluZm8uaWQgLSBpZCBvZiB0aGlzIGRhdGFzZXQuIElmIGNvbmZpZyBpcyBkZWZpbmVkLCBgaWRgIHNob3VsZCBtYXRjaGVzIHRoZSBgZGF0YUlkYCBpbiBjb25maWcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cy5pbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cy5kYXRhIC0gKioqcmVxdWlyZWQqKiBUaGUgZGF0YSBvYmplY3QsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCAyIHByb3BlcnRpZXMgYGZpZWxkc2AgYW5kIGByb3dzYFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGFjdGlvbi5wYXlsb2FkLmRhdGFzZXRzLmRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cy5kYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcclxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFjdGlvbi5wYXlsb2FkLmRhdGFzZXRzLmRhdGEucm93cyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2Ygcm93cywgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkLm9wdGlvbnMgb3B0aW9uIG9iamVjdCBge2NlbnRlck1hcDogdHJ1ZX1gXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZC5jb25maWcgbWFwIGNvbmZpZ1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZERhdGFUb01hcFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkfSkgPT4ge1xyXG4gIGNvbnN0IHtkYXRhc2V0cywgY29uZmlnLCBpbmZvfSA9IHBheWxvYWQ7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAuLi5kZWZhdWx0QWRkRGF0YVRvTWFwT3B0aW9ucyxcclxuICAgIC4uLnBheWxvYWQub3B0aW9uc1xyXG4gIH07XHJcblxyXG4gIGxldCBwYXJzZWRDb25maWcgPSBjb25maWc7XHJcblxyXG4gIGlmIChpc1ZhbGlkQ29uZmlnKGNvbmZpZykpIHtcclxuICAgIC8vIGlmIHBhc3NlZCBpbiBzYXZlZCBjb25maWdcclxuICAgIHBhcnNlZENvbmZpZyA9IEtlcGxlckdsU2NoZW1hLnBhcnNlU2F2ZWRDb25maWcoY29uZmlnKTtcclxuICB9XHJcbiAgY29uc3Qgb2xkTGF5ZXJzID0gc3RhdGUudmlzU3RhdGUubGF5ZXJzO1xyXG5cclxuICAvLyBVcGRhdGUgdmlzU3RhdGUgc3RvcmVcclxuICBsZXQgbWVyZ2VkU3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIHZpc1N0YXRlOiB2aXNTdGF0ZVVwZGF0ZVZpc0RhdGFVcGRhdGVyKHN0YXRlLnZpc1N0YXRlLCB7XHJcbiAgICAgIGRhdGFzZXRzLFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICBjb25maWc6IHBhcnNlZENvbmZpZ1xyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICAvLyBtZXJnZSBtYXAgaW5mb1xyXG4gIC8vIHNhdmUgdGl0bGUsIGRlc2NyaXB0aW9uIHByb3ZpZGVyIGFuZCBxdWVyeVBhcmFtc1xyXG4gIGlmIChpbmZvKSB7XHJcbiAgICBtZXJnZWRTdGF0ZSA9IHtcclxuICAgICAgLi4ubWVyZ2VkU3RhdGUsXHJcbiAgICAgIHZpc1N0YXRlOiBzZXRNYXBJbmZvVXBkYXRlcihtZXJnZWRTdGF0ZS52aXNTdGF0ZSwge2luZm99KVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxldCBib3VuZHM7XHJcbiAgaWYgKG9wdGlvbnMuY2VudGVyTWFwKSB7XHJcbiAgICAvLyBmaW5kIG1hcCBib3VuZHMgZm9yIG5ldyBsYXllcnNcclxuICAgIGNvbnN0IG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLnZpc1N0YXRlLmxheWVycy5maWx0ZXIobmwgPT4gIW9sZExheWVycy5maW5kKG9sID0+IG9sID09PSBubCkpO1xyXG4gICAgYm91bmRzID0gZmluZE1hcEJvdW5kcyhuZXdMYXllcnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIG1hcFN0YXRlIHN0b3JlXHJcbiAgbWVyZ2VkU3RhdGUgPSB7XHJcbiAgICAuLi5tZXJnZWRTdGF0ZSxcclxuICAgIG1hcFN0YXRlOiBzdGF0ZU1hcENvbmZpZ1VwZGF0ZXIobWVyZ2VkU3RhdGUubWFwU3RhdGUsIHtcclxuICAgICAgcGF5bG9hZDoge2NvbmZpZzogcGFyc2VkQ29uZmlnLCBvcHRpb25zLCBib3VuZHN9XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIC8vIFVwZGF0ZSBtYXBTdHlsZSBzdG9yZVxyXG4gIG1lcmdlZFN0YXRlID0ge1xyXG4gICAgLi4ubWVyZ2VkU3RhdGUsXHJcbiAgICBtYXBTdHlsZTogc3R5bGVNYXBDb25maWdVcGRhdGVyKG1lcmdlZFN0YXRlLm1hcFN0eWxlLCB7XHJcbiAgICAgIHBheWxvYWQ6IHtjb25maWc6IHBhcnNlZENvbmZpZywgb3B0aW9uc31cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgLy8gVXBkYXRlIHVpU3RhdGVcclxuICBtZXJnZWRTdGF0ZSA9IHtcclxuICAgIC4uLm1lcmdlZFN0YXRlLFxyXG4gICAgdWlTdGF0ZToge1xyXG4gICAgICAuLi50b2dnbGVNb2RhbFVwZGF0ZXIobG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIobWVyZ2VkU3RhdGUudWlTdGF0ZSksIHtcclxuICAgICAgICBwYXlsb2FkOiBudWxsXHJcbiAgICAgIH0pLFxyXG4gICAgICAuLi4ob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVhZE9ubHknKSA/IHtyZWFkT25seTogb3B0aW9ucy5yZWFkT25seX0gOiB7fSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gbWVyZ2VkU3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRGF0YVRvTWFwQ29tcG9zZWQgPSBhZGREYXRhVG9NYXBVcGRhdGVyO1xyXG4iXX0=