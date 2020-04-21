"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapDimForSplitMap = getMapDimForSplitMap;
exports.toggleSplitMapUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.togglePerspectiveUpdater = exports.fitBoundsUpdater = exports.updateMapUpdater = exports.INITIAL_MAP_STATE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Updaters for `mapState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapState: mapStateUpdaters.fitBoundsUpdater(
 *               mapState, {payload: [127.34, 31.09, 127.56, 31.59]]}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
var mapStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapState`
 * @memberof mapStateUpdaters
 * @constant
 * @property {number} pitch Default: `0`
 * @property {number} bearing Default: `0`
 * @property {number} latitude Default: `37.75043`
 * @property {number} longitude Default: `-122.34679`
 * @property {number} zoom Default: `9`
 * @property {boolean} dragRotate Default: `false`
 * @property {number} width Default: `800`
 * @property {number} height Default: `800`
 * @property {boolean} isSplit Default: `false`
 * @public
 */

var INITIAL_MAP_STATE = {
  pitch: 0,
  bearing: 0,
  latitude: 37.75043,
  longitude: -122.34679,
  zoom: 9,
  dragRotate: false,
  width: 800,
  height: 800,
  isSplit: false
};
/* Updaters */

/**
 * Update map viewport
 * @memberof mapStateUpdaters
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.payload - viewport
 * @returns {Object} nextState
 * @public
 */

exports.INITIAL_MAP_STATE = INITIAL_MAP_STATE;

var updateMapUpdater = function updateMapUpdater(state, action) {
  return _objectSpread({}, state, {}, action.payload || {});
};
/**
 * Fit map viewport to bounds
 * @memberof mapStateUpdaters
 * @param {Object} state
 * @param {Object} action
 * @param {number[]} action.payload - bounds as `[lngMin, latMin, lngMax, latMax]`
 * @returns {Object} nextState
 * @public
 */


exports.updateMapUpdater = updateMapUpdater;

var fitBoundsUpdater = function fitBoundsUpdater(state, action) {
  var bounds = action.payload;

  var _geoViewport$viewport = _geoViewport["default"].viewport(bounds, [state.width, state.height]),
      center = _geoViewport$viewport.center,
      zoom = _geoViewport$viewport.zoom;

  return _objectSpread({}, state, {
    latitude: center[1],
    longitude: center[0],
    zoom: zoom
  });
};
/**
 * Toggle between 3d and 2d map.
 * @memberof mapStateUpdaters
 * @param {Object} state
 * @returns {Object} nextState
 * @public
 */


exports.fitBoundsUpdater = fitBoundsUpdater;

var togglePerspectiveUpdater = function togglePerspectiveUpdater(state) {
  return _objectSpread({}, state, {}, {
    pitch: state.dragRotate ? 0 : 50,
    bearing: state.dragRotate ? 0 : 24
  }, {
    dragRotate: !state.dragRotate
  });
};
/**
 * reset mapState to initial State
 * @memberof mapStateUpdaters
 * @param {Object} state `mapState`
 * @returns {Object} nextState
 * @public
 */


exports.togglePerspectiveUpdater = togglePerspectiveUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread({}, INITIAL_MAP_STATE, {}, state.initialState, {
    initialState: state.initialState
  });
}; // consider case where you have a split map and user wants to reset

/**
 * Update `mapState` to propagate a new config
 * @memberof mapStateUpdaters
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.payload - saved map config
 * @returns {Object} nextState
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref) {
  var _ref$payload = _ref.payload,
      _ref$payload$config = _ref$payload.config,
      config = _ref$payload$config === void 0 ? {} : _ref$payload$config,
      _ref$payload$options = _ref$payload.options,
      options = _ref$payload$options === void 0 ? {} : _ref$payload$options,
      _ref$payload$bounds = _ref$payload.bounds,
      bounds = _ref$payload$bounds === void 0 ? null : _ref$payload$bounds;

  var _ref2 = config || {},
      mapState = _ref2.mapState; // merged received mapstate with previous state


  var mergedState = _objectSpread({}, state, {}, mapState); // if center map
  // center map will override mapState config


  if (options.centerMap && bounds) {
    mergedState = fitBoundsUpdater(mergedState, {
      payload: bounds
    });
  }

  return _objectSpread({}, mergedState, {}, getMapDimForSplitMap(mergedState.isSplit, state));
};
/**
 * Toggle between one or split maps
 * @memberof mapStateUpdaters
 * @param {Object} state
 * @returns {Object} nextState
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread({}, state, {
    isSplit: !state.isSplit
  }, getMapDimForSplitMap(!state.isSplit, state));
}; // Helpers


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

function getMapDimForSplitMap(isSplit, state) {
  // cases:
  // 1. state split: true - isSplit: true
  // do nothing
  // 2. state split: false - isSplit: false
  // do nothing
  if (state.isSplit === isSplit) {
    return {};
  }

  var width = state.isSplit && !isSplit ? // 3. state split: true - isSplit: false
  // double width
  state.width * 2 : // 4. state split: false - isSplit: true
  // split width
  state.width / 2;
  return {
    width: width
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVVcGRhdGVycyIsIklOSVRJQUxfTUFQX1NUQVRFIiwicGl0Y2giLCJiZWFyaW5nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwiZHJhZ1JvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNTcGxpdCIsInVwZGF0ZU1hcFVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaXRCb3VuZHNVcGRhdGVyIiwiYm91bmRzIiwiZ2VvVmlld3BvcnQiLCJ2aWV3cG9ydCIsImNlbnRlciIsInRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlciIsInJlc2V0TWFwQ29uZmlnVXBkYXRlciIsImluaXRpYWxTdGF0ZSIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwiY29uZmlnIiwib3B0aW9ucyIsIm1hcFN0YXRlIiwibWVyZ2VkU3RhdGUiLCJjZW50ZXJNYXAiLCJnZXRNYXBEaW1Gb3JTcGxpdE1hcCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsSUFBekI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVPLElBQU1DLGlCQUFpQixHQUFHO0FBQy9CQyxFQUFBQSxLQUFLLEVBQUUsQ0FEd0I7QUFFL0JDLEVBQUFBLE9BQU8sRUFBRSxDQUZzQjtBQUcvQkMsRUFBQUEsUUFBUSxFQUFFLFFBSHFCO0FBSS9CQyxFQUFBQSxTQUFTLEVBQUUsQ0FBQyxTQUptQjtBQUsvQkMsRUFBQUEsSUFBSSxFQUFFLENBTHlCO0FBTS9CQyxFQUFBQSxVQUFVLEVBQUUsS0FObUI7QUFPL0JDLEVBQUFBLEtBQUssRUFBRSxHQVB3QjtBQVEvQkMsRUFBQUEsTUFBTSxFQUFFLEdB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QUNqQixLQUFLLENBQUNGLE9BQVIsRUFBaUJFLEtBQWpCLENBSGlCO0FBQUEsQ0FBbkMsQyxDQU1QOzs7OztBQUNPLFNBQVNpQixvQkFBVCxDQUE4Qm5CLE9BQTlCLEVBQXVDRSxLQUF2QyxFQUE4QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSUEsS0FBSyxDQUFDRixPQUFOLEtBQWtCQSxPQUF0QixFQUErQjtBQUM3QixXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNRixLQUFLLEdBQ1RJLEtBQUssQ0FBQ0YsT0FBTixJQUFpQixDQUFDQSxPQUFsQixHQUNJO0FBQ0E7QUFDQUUsRUFBQUEsS0FBSyxDQUFDSixLQUFOLEdBQWMsQ0FIbEIsR0FJSTtBQUNBO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0osS0FBTixHQUFjLENBUHBCO0FBU0EsU0FBTztBQUNMQSxJQUFBQSxLQUFLLEVBQUxBO0FBREssR0FBUDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IGdlb1ZpZXdwb3J0IGZyb20gJ0BtYXBib3gvZ2VvLXZpZXdwb3J0JztcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGVycyBmb3IgYG1hcFN0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXHJcbiAqIFJlYWQgbW9yZSBhYm91dCBbVXNpbmcgdXBkYXRlcnNdKC4uL2FkdmFuY2VkLXVzYWdlL3VzaW5nLXVwZGF0ZXJzLm1kKVxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHttYXBTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xyXG4gKiAvLyBSb290IFJlZHVjZXJcclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcclxuICogIGFwcDogYXBwUmVkdWNlclxyXG4gKiB9KTtcclxuICpcclxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICogICAgLy8gY2xpY2sgYnV0dG9uIHRvIGNsb3NlIHNpZGUgcGFuZWxcclxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcclxuICogICAgICByZXR1cm4ge1xyXG4gKiAgICAgICAgLi4uc3RhdGUsXHJcbiAqICAgICAgICBrZXBsZXJHbDoge1xyXG4gKiAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbCxcclxuICogICAgICAgICAgZm9vOiB7XHJcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcclxuICogICAgICAgICAgICAgbWFwU3RhdGU6IG1hcFN0YXRlVXBkYXRlcnMuZml0Qm91bmRzVXBkYXRlcihcclxuICogICAgICAgICAgICAgICBtYXBTdGF0ZSwge3BheWxvYWQ6IFsxMjcuMzQsIDMxLjA5LCAxMjcuNTYsIDMxLjU5XV19XHJcbiAqICAgICAgICAgICAgIClcclxuICogICAgICAgICAgfVxyXG4gKiAgICAgICAgfVxyXG4gKiAgICAgIH07XHJcbiAqICB9XHJcbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XHJcbiAqIH07XHJcbiAqXHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IG1hcFN0YXRlVXBkYXRlcnMgPSBudWxsO1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBpbml0aWFsIGBtYXBTdGF0ZWBcclxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcclxuICogQGNvbnN0YW50XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwaXRjaCBEZWZhdWx0OiBgMGBcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJlYXJpbmcgRGVmYXVsdDogYDBgXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXRpdHVkZSBEZWZhdWx0OiBgMzcuNzUwNDNgXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsb25naXR1ZGUgRGVmYXVsdDogYC0xMjIuMzQ2NzlgXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB6b29tIERlZmF1bHQ6IGA5YFxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRyYWdSb3RhdGUgRGVmYXVsdDogYGZhbHNlYFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggRGVmYXVsdDogYDgwMGBcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodCBEZWZhdWx0OiBgODAwYFxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzU3BsaXQgRGVmYXVsdDogYGZhbHNlYFxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSU5JVElBTF9NQVBfU1RBVEUgPSB7XHJcbiAgcGl0Y2g6IDAsXHJcbiAgYmVhcmluZzogMCxcclxuICBsYXRpdHVkZTogMzcuNzUwNDMsXHJcbiAgbG9uZ2l0dWRlOiAtMTIyLjM0Njc5LFxyXG4gIHpvb206IDksXHJcbiAgZHJhZ1JvdGF0ZTogZmFsc2UsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBoZWlnaHQ6IDgwMCxcclxuICBpc1NwbGl0OiBmYWxzZVxyXG59O1xyXG5cclxuLyogVXBkYXRlcnMgKi9cclxuLyoqXHJcbiAqIFVwZGF0ZSBtYXAgdmlld3BvcnRcclxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkIC0gdmlld3BvcnRcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgLi4uKGFjdGlvbi5wYXlsb2FkIHx8IHt9KVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBGaXQgbWFwIHZpZXdwb3J0IHRvIGJvdW5kc1xyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhY3Rpb24ucGF5bG9hZCAtIGJvdW5kcyBhcyBgW2xuZ01pbiwgbGF0TWluLCBsbmdNYXgsIGxhdE1heF1gXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZml0Qm91bmRzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgYm91bmRzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgY29uc3Qge2NlbnRlciwgem9vbX0gPSBnZW9WaWV3cG9ydC52aWV3cG9ydChib3VuZHMsIFtzdGF0ZS53aWR0aCwgc3RhdGUuaGVpZ2h0XSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxhdGl0dWRlOiBjZW50ZXJbMV0sXHJcbiAgICBsb25naXR1ZGU6IGNlbnRlclswXSxcclxuICAgIHpvb21cclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBiZXR3ZWVuIDNkIGFuZCAyZCBtYXAuXHJcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgLi4ue1xyXG4gICAgcGl0Y2g6IHN0YXRlLmRyYWdSb3RhdGUgPyAwIDogNTAsXHJcbiAgICBiZWFyaW5nOiBzdGF0ZS5kcmFnUm90YXRlID8gMCA6IDI0XHJcbiAgfSxcclxuICBkcmFnUm90YXRlOiAhc3RhdGUuZHJhZ1JvdGF0ZVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiByZXNldCBtYXBTdGF0ZSB0byBpbml0aWFsIFN0YXRlXHJcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgbWFwU3RhdGVgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVzZXRNYXBDb25maWdVcGRhdGVyID0gc3RhdGUgPT4gKHtcclxuICAuLi5JTklUSUFMX01BUF9TVEFURSxcclxuICAuLi5zdGF0ZS5pbml0aWFsU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcclxufSk7XHJcblxyXG4vLyBjb25zaWRlciBjYXNlIHdoZXJlIHlvdSBoYXZlIGEgc3BsaXQgbWFwIGFuZCB1c2VyIHdhbnRzIHRvIHJlc2V0XHJcbi8qKlxyXG4gKiBVcGRhdGUgYG1hcFN0YXRlYCB0byBwcm9wYWdhdGUgYSBuZXcgY29uZmlnXHJcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZCAtIHNhdmVkIG1hcCBjb25maWdcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChcclxuICBzdGF0ZSxcclxuICB7cGF5bG9hZDoge2NvbmZpZyA9IHt9LCBvcHRpb25zID0ge30sIGJvdW5kcyA9IG51bGx9fVxyXG4pID0+IHtcclxuICBjb25zdCB7bWFwU3RhdGV9ID0gY29uZmlnIHx8IHt9O1xyXG5cclxuICAvLyBtZXJnZWQgcmVjZWl2ZWQgbWFwc3RhdGUgd2l0aCBwcmV2aW91cyBzdGF0ZVxyXG4gIGxldCBtZXJnZWRTdGF0ZSA9IHsuLi5zdGF0ZSwgLi4ubWFwU3RhdGV9O1xyXG5cclxuICAvLyBpZiBjZW50ZXIgbWFwXHJcbiAgLy8gY2VudGVyIG1hcCB3aWxsIG92ZXJyaWRlIG1hcFN0YXRlIGNvbmZpZ1xyXG4gIGlmIChvcHRpb25zLmNlbnRlck1hcCAmJiBib3VuZHMpIHtcclxuICAgIG1lcmdlZFN0YXRlID0gZml0Qm91bmRzVXBkYXRlcihtZXJnZWRTdGF0ZSwge1xyXG4gICAgICBwYXlsb2FkOiBib3VuZHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLm1lcmdlZFN0YXRlLFxyXG4gICAgLy8gdXBkYXRlIHdpZHRoIGlmIGBpc1NwbGl0YCBoYXMgY2hhbmdlZFxyXG4gICAgLi4uZ2V0TWFwRGltRm9yU3BsaXRNYXAobWVyZ2VkU3RhdGUuaXNTcGxpdCwgc3RhdGUpXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgYmV0d2VlbiBvbmUgb3Igc3BsaXQgbWFwc1xyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGlzU3BsaXQ6ICFzdGF0ZS5pc1NwbGl0LFxyXG4gIC4uLmdldE1hcERpbUZvclNwbGl0TWFwKCFzdGF0ZS5pc1NwbGl0LCBzdGF0ZSlcclxufSk7XHJcblxyXG4vLyBIZWxwZXJzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBEaW1Gb3JTcGxpdE1hcChpc1NwbGl0LCBzdGF0ZSkge1xyXG4gIC8vIGNhc2VzOlxyXG4gIC8vIDEuIHN0YXRlIHNwbGl0OiB0cnVlIC0gaXNTcGxpdDogdHJ1ZVxyXG4gIC8vIGRvIG5vdGhpbmdcclxuICAvLyAyLiBzdGF0ZSBzcGxpdDogZmFsc2UgLSBpc1NwbGl0OiBmYWxzZVxyXG4gIC8vIGRvIG5vdGhpbmdcclxuICBpZiAoc3RhdGUuaXNTcGxpdCA9PT0gaXNTcGxpdCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2lkdGggPVxyXG4gICAgc3RhdGUuaXNTcGxpdCAmJiAhaXNTcGxpdFxyXG4gICAgICA/IC8vIDMuIHN0YXRlIHNwbGl0OiB0cnVlIC0gaXNTcGxpdDogZmFsc2VcclxuICAgICAgICAvLyBkb3VibGUgd2lkdGhcclxuICAgICAgICBzdGF0ZS53aWR0aCAqIDJcclxuICAgICAgOiAvLyA0LiBzdGF0ZSBzcGxpdDogZmFsc2UgLSBpc1NwbGl0OiB0cnVlXHJcbiAgICAgICAgLy8gc3BsaXQgd2lkdGhcclxuICAgICAgICBzdGF0ZS53aWR0aCAvIDI7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aFxyXG4gIH07XHJcbn1cclxuIl19