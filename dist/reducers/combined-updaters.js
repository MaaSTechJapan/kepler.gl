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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb21iaW5lZC11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lZFVwZGF0ZXJzIiwiaXNWYWxpZENvbmZpZyIsImNvbmZpZyIsInZlcnNpb24iLCJkZWZhdWx0QWRkRGF0YVRvTWFwT3B0aW9ucyIsImNlbnRlck1hcCIsImtlZXBFeGlzdGluZ0NvbmZpZyIsImFkZERhdGFUb01hcFVwZGF0ZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJkYXRhc2V0cyIsImluZm8iLCJvcHRpb25zIiwicGFyc2VkQ29uZmlnIiwiS2VwbGVyR2xTY2hlbWEiLCJwYXJzZVNhdmVkQ29uZmlnIiwib2xkTGF5ZXJzIiwidmlzU3RhdGUiLCJsYXllcnMiLCJtZXJnZWRTdGF0ZSIsImJvdW5kcyIsIm5ld0xheWVycyIsImZpbHRlciIsIm5sIiwiZmluZCIsIm9sIiwibWFwU3RhdGUiLCJtYXBTdHlsZSIsInVpU3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInJlYWRPbmx5IiwiYWRkRGF0YVRvTWFwQ29tcG9zZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsSUFBekI7QUFDQTs7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE1BQU07QUFBQSxTQUNqQywwQkFBY0EsTUFBZCxLQUF5QiwwQkFBY0EsTUFBTSxDQUFDQSxNQUFyQixDQUF6QixJQUF5REEsTUFBTSxDQUFDQyxPQUQvQjtBQUFBLENBQTVCOzs7QUFFQSxJQUFNQywwQkFBMEIsR0FBRztBQUN4Q0MsRUFBQUEsU0FBUyxFQUFFLElBRDZCO0FBRXhDQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUZvQixDQUFuQztBQUlQOzs7Ozs7Ozs7Ozs7Ozs7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QUFyQyxHQUFvRSxFQUpuRTtBQUZFLElBQVg7QUFVQSxTQUFPWCxXQUFQO0FBQ0QsQ0F0RU07OztBQXdFQSxJQUFNWSxvQkFBb0IsR0FBR3hCLG1CQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7dG9nZ2xlTW9kYWxVcGRhdGVyLCBsb2FkRmlsZXNTdWNjZXNzVXBkYXRlcn0gZnJvbSAnLi91aS1zdGF0ZS11cGRhdGVycyc7XG5pbXBvcnQge1xuICB1cGRhdGVWaXNEYXRhVXBkYXRlciBhcyB2aXNTdGF0ZVVwZGF0ZVZpc0RhdGFVcGRhdGVyLFxuICBzZXRNYXBJbmZvVXBkYXRlclxufSBmcm9tICcuL3Zpcy1zdGF0ZS11cGRhdGVycyc7XG5pbXBvcnQge3JlY2VpdmVNYXBDb25maWdVcGRhdGVyIGFzIHN0YXRlTWFwQ29uZmlnVXBkYXRlcn0gZnJvbSAnLi9tYXAtc3RhdGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciBhcyBzdHlsZU1hcENvbmZpZ1VwZGF0ZXJ9IGZyb20gJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJztcbmltcG9ydCB7ZmluZE1hcEJvdW5kc30gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAnc2NoZW1hcyc7XG5pbXBvcnQge2lzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuLy8gY29tcG9zZSBhY3Rpb24gdG8gYXBwbHkgcmVzdWx0IG11bHRpcGxlIHJlZHVjZXJzLCB3aXRoIHRoZSBvdXRwdXQgb2Ygb25lXG5cbi8qKlxuICogU29tZSBhY3Rpb25zIHdpbGwgYWZmZWN0IHRoZSBlbnRpcmUga2VwbGVyLmxnIGluc3RhbmNlIHN0YXRlLlxuICogVGhlIHVwZGF0ZXJzIGZvciB0aGVzZSBhY3Rpb25zIGlzIGV4cG9ydGVkIGFzIGBjb21iaW5lZFVwZGF0ZXJzYC4gVGhlc2UgdXBkYXRlciB0YWtlIHRoZSBlbnRpcmUgaW5zdGFuY2Ugc3RhdGVcbiAqIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHtjb21iaW5lZFVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogLy8gUm9vdCBSZWR1Y2VyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgLy8gYWRkIGRhdGEgdG8gbWFwIGFmdGVyIHJlY2VpdmluZyBkYXRhIGZyb20gcmVtb3RlIHNvdXJjZXNcbiAqICAgIGNhc2UgJ0xPQURfUkVNT1RFX1JFU09VUkNFX1NVQ0NFU1MnOlxuICogICAgICByZXR1cm4ge1xuICogICAgICAgIC4uLnN0YXRlLFxuICogICAgICAgIGtlcGxlckdsOiB7XG4gKiAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbCxcbiAqICAgICAgICAgIC8vIHBhc3MgaW4ga2VwbGVyLmdsIGluc3RhbmNlIHN0YXRlIHRvIGNvbWJpbmVkVXBkYXRlcnNcbiAqICAgICAgICAgIG1hcDogIGNvbWJpbmVkVXBkYXRlcnMuYWRkRGF0YVRvTWFwVXBkYXRlcihcbiAqICAgICAgICAgICBzdGF0ZS5rZXBsZXJHbC5tYXAsXG4gKiAgICAgICAgICAge1xuICogICAgICAgICAgICAgcGF5bG9hZDoge1xuICogICAgICAgICAgICAgICBkYXRhc2V0czogYWN0aW9uLmRhdGFzZXRzLFxuICogICAgICAgICAgICAgICBvcHRpb25zOiB7cmVhZE9ubHk6IHRydWV9LFxuICogICAgICAgICAgICAgICBjb25maWc6IGFjdGlvbi5jb25maWdcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICAgIH1cbiAqICAgICAgICAgIClcbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgY29tYmluZWRVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkQ29uZmlnID0gY29uZmlnID0+XG4gIGlzUGxhaW5PYmplY3QoY29uZmlnKSAmJiBpc1BsYWluT2JqZWN0KGNvbmZpZy5jb25maWcpICYmIGNvbmZpZy52ZXJzaW9uO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRBZGREYXRhVG9NYXBPcHRpb25zID0ge1xuICBjZW50ZXJNYXA6IHRydWUsXG4gIGtlZXBFeGlzdGluZ0NvbmZpZzogZmFsc2Vcbn07XG4vKipcbiAqIENvbWJpbmUgZGF0YSBhbmQgZnVsbCBjb25maWd1cmF0aW9uIHVwZGF0ZSBpbiBhIHNpbmdsZSBhY3Rpb25cbiAqXG4gKiBAbWVtYmVyb2YgY29tYmluZWRVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGtlcGxlci5nbCBpbnN0YW5jZSBzdGF0ZSwgY29udGFpbmluZyBhbGwgc3VicmVkdWNlciBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkIGB7ZGF0YXNldHMsIG9wdGlvbnMsIGNvbmZpZ31gXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD58T2JqZWN0fSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkLmRhdGFzZXRzLmluZm8gLWluZm8gb2YgYSBkYXRhc2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQuZGF0YXNldHMuaW5mby5pZCAtIGlkIG9mIHRoaXMgZGF0YXNldC4gSWYgY29uZmlnIGlzIGRlZmluZWQsIGBpZGAgc2hvdWxkIG1hdGNoZXMgdGhlIGBkYXRhSWRgIGluIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cy5pbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQuZGF0YXNldHMuZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gYWN0aW9uLnBheWxvYWQuZGF0YXNldHMuZGF0YS5maWVsZHMgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIGZpZWxkcyxcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cy5kYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cy5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQub3B0aW9ucyBvcHRpb24gb2JqZWN0IGB7Y2VudGVyTWFwOiB0cnVlfWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZC5jb25maWcgbWFwIGNvbmZpZ1xuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhZGREYXRhVG9NYXBVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZH0pID0+IHtcbiAgY29uc3Qge2RhdGFzZXRzLCBjb25maWcsIGluZm99ID0gcGF5bG9hZDtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIC4uLmRlZmF1bHRBZGREYXRhVG9NYXBPcHRpb25zLFxuICAgIC4uLnBheWxvYWQub3B0aW9uc1xuICB9O1xuXG4gIGxldCBwYXJzZWRDb25maWcgPSBjb25maWc7XG5cbiAgaWYgKGlzVmFsaWRDb25maWcoY29uZmlnKSkge1xuICAgIC8vIGlmIHBhc3NlZCBpbiBzYXZlZCBjb25maWdcbiAgICBwYXJzZWRDb25maWcgPSBLZXBsZXJHbFNjaGVtYS5wYXJzZVNhdmVkQ29uZmlnKGNvbmZpZyk7XG4gIH1cbiAgY29uc3Qgb2xkTGF5ZXJzID0gc3RhdGUudmlzU3RhdGUubGF5ZXJzO1xuXG4gIC8vIFVwZGF0ZSB2aXNTdGF0ZSBzdG9yZVxuICBsZXQgbWVyZ2VkU3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgdmlzU3RhdGU6IHZpc1N0YXRlVXBkYXRlVmlzRGF0YVVwZGF0ZXIoc3RhdGUudmlzU3RhdGUsIHtcbiAgICAgIGRhdGFzZXRzLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNvbmZpZzogcGFyc2VkQ29uZmlnXG4gICAgfSlcbiAgfTtcblxuICAvLyBtZXJnZSBtYXAgaW5mb1xuICAvLyBzYXZlIHRpdGxlLCBkZXNjcmlwdGlvbiBwcm92aWRlciBhbmQgcXVlcnlQYXJhbXNcbiAgaWYgKGluZm8pIHtcbiAgICBtZXJnZWRTdGF0ZSA9IHtcbiAgICAgIC4uLm1lcmdlZFN0YXRlLFxuICAgICAgdmlzU3RhdGU6IHNldE1hcEluZm9VcGRhdGVyKG1lcmdlZFN0YXRlLnZpc1N0YXRlLCB7aW5mb30pXG4gICAgfTtcbiAgfVxuXG4gIGxldCBib3VuZHM7XG4gIGlmIChvcHRpb25zLmNlbnRlck1hcCkge1xuICAgIC8vIGZpbmQgbWFwIGJvdW5kcyBmb3IgbmV3IGxheWVyc1xuICAgIGNvbnN0IG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLnZpc1N0YXRlLmxheWVycy5maWx0ZXIobmwgPT4gIW9sZExheWVycy5maW5kKG9sID0+IG9sID09PSBubCkpO1xuICAgIGJvdW5kcyA9IGZpbmRNYXBCb3VuZHMobmV3TGF5ZXJzKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBtYXBTdGF0ZSBzdG9yZVxuICBtZXJnZWRTdGF0ZSA9IHtcbiAgICAuLi5tZXJnZWRTdGF0ZSxcbiAgICBtYXBTdGF0ZTogc3RhdGVNYXBDb25maWdVcGRhdGVyKG1lcmdlZFN0YXRlLm1hcFN0YXRlLCB7XG4gICAgICBwYXlsb2FkOiB7Y29uZmlnOiBwYXJzZWRDb25maWcsIG9wdGlvbnMsIGJvdW5kc31cbiAgICB9KVxuICB9O1xuXG4gIC8vIFVwZGF0ZSBtYXBTdHlsZSBzdG9yZVxuICBtZXJnZWRTdGF0ZSA9IHtcbiAgICAuLi5tZXJnZWRTdGF0ZSxcbiAgICBtYXBTdHlsZTogc3R5bGVNYXBDb25maWdVcGRhdGVyKG1lcmdlZFN0YXRlLm1hcFN0eWxlLCB7XG4gICAgICBwYXlsb2FkOiB7Y29uZmlnOiBwYXJzZWRDb25maWcsIG9wdGlvbnN9XG4gICAgfSlcbiAgfTtcblxuICAvLyBVcGRhdGUgdWlTdGF0ZVxuICBtZXJnZWRTdGF0ZSA9IHtcbiAgICAuLi5tZXJnZWRTdGF0ZSxcbiAgICB1aVN0YXRlOiB7XG4gICAgICAuLi50b2dnbGVNb2RhbFVwZGF0ZXIobG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIobWVyZ2VkU3RhdGUudWlTdGF0ZSksIHtcbiAgICAgICAgcGF5bG9hZDogbnVsbFxuICAgICAgfSksXG4gICAgICAuLi4ob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVhZE9ubHknKSA/IHtyZWFkT25seTogb3B0aW9ucy5yZWFkT25seX0gOiB7fSlcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIG1lcmdlZFN0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERhdGFUb01hcENvbXBvc2VkID0gYWRkRGF0YVRvTWFwVXBkYXRlcjtcbiJdfQ==