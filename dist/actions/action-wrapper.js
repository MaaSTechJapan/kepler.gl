"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._updateProperty = exports.forwardTo = exports._actionFor = exports.unwrap = exports.isForwardAction = exports.wrapTo = exports.getActionForwardAddress = exports.ADDRESS_PREFIX = exports.FORWARD = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.curry"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var FORWARD = '@redux-forward/FORWARD';
exports.FORWARD = FORWARD;
var ADDRESS_PREFIX = '@@KG_';
exports.ADDRESS_PREFIX = ADDRESS_PREFIX;

var getActionForwardAddress = function getActionForwardAddress(id) {
  return "".concat(ADDRESS_PREFIX).concat(id.toUpperCase());
};
/**
 * Wrap an action into a forward action that only modify the state of a specific
 * kepler.gl instance. kepler.gl reducer will look for signatures in the action to
 * determine whether it needs to be forwarded to a specific instance reducer.
 *
 * wrapTo can be curried. You can create a curried action wrapper by only supply the `id` argument
 *
 * A forward action looks like this
 * ```js
 *  {
 *    type: "@@kepler.gl/LAYER_CONFIG_CHANGE",
 *    payload: {
 *      type: '@@kepler.gl/LAYER_CONFIG_CHANGE',
 *      payload: {},
 *      meta: {
 *       // id of instance
 *        _id_: id
 *       // other meta
 *      }
 *    },
 *    meta: {
 *      _forward_: '@redux-forward/FORWARD',
 *      _addr_: '@@KG_id'
 *    }
 *  };
 * ```
 *
 * @memberof forwardActions
 * @param {string} id - The id to forward to
 * @param {Object} action - the action object {type: string, payload: *}
 * @returns {{type: string, payload: {type: string: payload: *, meta: {_id_: string}, meta: {_forward_: string, _addr_: string}}}}
 * @public
 * @example
 *
 * import {wrapTo, togglePerspective} from 'kepler.gl/actions';
 *
 * // This action will only dispatch to the KeplerGl instance with `id: map_1`
 * this.props.dispatch(wrapTo('map_1', togglePerspective()));
 *
 * // You can also create a curried action for each instance
 * const wrapToMap1 = wrapTo('map_1');
 * this.props.dispatch(wrapToMap1(togglePerspective()));
 */


exports.getActionForwardAddress = getActionForwardAddress;
var wrapTo = (0, _lodash["default"])(function (id, action) {
  return {
    // keep original action.type
    type: action.type,
    // actual action
    payload: _objectSpread({}, action, {
      meta: _objectSpread({}, action.meta, {
        _id_: id
      })
    }),
    // add forward signature to meta
    meta: _objectSpread({}, action.meta || {}, {
      _forward_: FORWARD,
      _addr_: getActionForwardAddress(id)
    })
  };
});
/**
 * Whether an action is a forward action
 * @memberof forwardActions
 * @param {Object} action - the action object
 * @returns {boolean} boolean - whether the action is a forward action
 * @public
 */

exports.wrapTo = wrapTo;

var isForwardAction = function isForwardAction(action) {
  return Boolean(action && action.meta && action.meta._forward_ === FORWARD);
};
/**
 * Unwrap an action
 * @memberof forwardActions
 * @param {Object} action - the action object
 * @returns {Object} - unwrapped action
 * @public
 */


exports.isForwardAction = isForwardAction;

var unwrap = function unwrap(action) {
  return isForwardAction(action) ? unwrap(action.payload) : action;
};
/**
 * Given an id, returns the action for that id.
 * If the action is not a forward action, return the action
 * @memberof forwardActions
 * @param {String} id
 * @param {Object} action
 * @private
 */


exports.unwrap = unwrap;

var _actionFor = function _actionFor(id, action) {
  return isForwardAction(action) ? action.meta._addr_ === getActionForwardAddress(id) ? action.payload : {} : action;
};
/**
 * Returns an action dispatcher that wraps and forwards the actions to a specific instance
 * @memberof forwardActions
 * @param {string} id - instance id
 * @param {Function} dispatch - action dispatcher
 * @public
 * @example
 *
 * // action and forward dispatcher
 * import {toggleSplitMap, forwardTo} from 'kepler.gl/actions';
 * import {connect} from 'react-redux';
 *
 * const MapContainer = props => (
 *  <div>
 *   <button onClick={() => props.keplerGlDispatch(toggleSplitMap())}/>
 *  </div>
 * )
 *
 * const mapDispatchToProps = (dispatch, props) => ({
 *  dispatch,
 *  keplerGlDispatch: forwardTo(‘foo’, dispatch)
 * });
 *
 * export default connect(
 *  state => state,
 *  mapDispatchToProps
 * )(MapContainer);
 */


exports._actionFor = _actionFor;

var forwardTo = function forwardTo(id, dispatch) {
  return function (action) {
    return dispatch(wrapTo(id, action));
  };
};
/**
 * Update the state of a kepler.gl instance
 * @memberof forwardActions
 * @param {Object} state
 * @param {string} id
 * @param {Object} nextState
 * @private
 */


exports.forwardTo = forwardTo;

var _updateProperty = function _updateProperty(state, id, nextState) {
  return state[id] === nextState ? state : _objectSpread({}, state, (0, _defineProperty2["default"])({}, id, nextState));
};
/**
 * This declaration is needed to group actions in docs
 */

/**
 * A set of helpers to forward dispatch actions to a specific instance reducer
 * @public
 */

/* eslint-disable no-unused-vars */


exports._updateProperty = _updateProperty;
var forwardActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyLmpzIl0sIm5hbWVzIjpbIkZPUldBUkQiLCJBRERSRVNTX1BSRUZJWCIsImdldEFjdGlvbkZvcndhcmRBZGRyZXNzIiwiaWQiLCJ0b1VwcGVyQ2FzZSIsIndyYXBUbyIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWV0YSIsIl9pZF8iLCJfZm9yd2FyZF8iLCJfYWRkcl8iLCJpc0ZvcndhcmRBY3Rpb24iLCJCb29sZWFuIiwidW53cmFwIiwiX2FjdGlvbkZvciIsImZvcndhcmRUbyIsImRpc3BhdGNoIiwiX3VwZGF0ZVByb3BlcnR5Iiwic3RhdGUiLCJuZXh0U3RhdGUiLCJmb3J3YXJkQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUF1QkE7Ozs7OztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBRyx3QkFBaEI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLE9BQXZCOzs7QUFJQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEVBQUU7QUFBQSxtQkFBT0YsY0FBUCxTQUF3QkUsRUFBRSxDQUFDQyxXQUFILEVBQXhCO0FBQUEsQ0FBbEM7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDTyxJQUFNQyxNQUFNLEdBQUcsd0JBQU0sVUFBQ0YsRUFBRCxFQUFLRyxNQUFMO0FBQUEsU0FBaUI7QUFDM0M7QUFDQUMsSUFBQUEsSUFBSSxFQUFFRCxNQUFNLENBQUNDLElBRjhCO0FBSTNDO0FBQ0FDLElBQUFBLE9BQU8sb0JBQ0ZGLE1BREU7QUFFTEcsTUFBQUEsSUFBSSxvQkFDQ0gsTUFBTSxDQUFDRyxJQURSO0FBRUZDLFFBQUFBLElBQUksRUFBRVA7QUFGSjtBQUZDLE1BTG9DO0FBYTNDO0FBQ0FNLElBQUFBLElBQUksb0JBQ0VILE1BQU0sQ0FBQ0csSUFBUCxJQUFlLEVBRGpCO0FBRUZFLE1BQUFBLFNBQVMsRUFBRVgsT0FGVDtBQUdGWSxNQUFBQSxNQUFNLEVBQUVWLHVCQUF1QixDQUFDQyxFQUFEO0FBSDdCO0FBZHVDLEdBQWpCO0FBQUEsQ0FBTixDQUFmO0FBcUJQOzs7Ozs7Ozs7O0FBT08sSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBUCxNQUFNLEVBQUk7QUFDdkMsU0FBT1EsT0FBTyxDQUFDUixNQUFNLElBQUlBLE1BQU0sQ0FBQ0csSUFBakIsSUFBeUJILE1BQU0sQ0FBQ0csSUFBUCxDQUFZRSxTQUFaLEtBQTBCWCxPQUFwRCxDQUFkO0FBQ0QsQ0FGTTtBQUlQOzs7Ozs7Ozs7OztBQU9PLElBQU1lLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFULE1BQU07QUFBQSxTQUFLTyxlQUFlLENBQUNQLE1BQUQsQ0FBZixHQUEwQlMsTUFBTSxDQUFDVCxNQUFNLENBQUNFLE9BQVIsQ0FBaEMsR0FBbURGLE1BQXhEO0FBQUEsQ0FBckI7QUFFUDs7Ozs7Ozs7Ozs7O0FBUU8sSUFBTVUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2IsRUFBRCxFQUFLRyxNQUFMO0FBQUEsU0FDeEJPLGVBQWUsQ0FBQ1AsTUFBRCxDQUFmLEdBQ0lBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRyxNQUFaLEtBQXVCVix1QkFBdUIsQ0FBQ0MsRUFBRCxDQUE5QyxHQUNFRyxNQUFNLENBQUNFLE9BRFQsR0FFRSxFQUhOLEdBSUlGLE1BTG9CO0FBQUEsQ0FBbkI7QUFPUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Qk8sSUFBTVcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2QsRUFBRCxFQUFLZSxRQUFMO0FBQUEsU0FBa0IsVUFBQVosTUFBTTtBQUFBLFdBQUlZLFFBQVEsQ0FBQ2IsTUFBTSxDQUFDRixFQUFELEVBQUtHLE1BQUwsQ0FBUCxDQUFaO0FBQUEsR0FBeEI7QUFBQSxDQUFsQjtBQUVQOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUWpCLEVBQVIsRUFBWWtCLFNBQVo7QUFBQSxTQUM3QkQsS0FBSyxDQUFDakIsRUFBRCxDQUFMLEtBQWNrQixTQUFkLEdBQ0lELEtBREoscUJBR1NBLEtBSFQsdUNBSU9qQixFQUpQLEVBSVlrQixTQUpaLEVBRDZCO0FBQUEsQ0FBeEI7QUFRUDs7OztBQUdBOzs7OztBQUlBOzs7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLElBQXZCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5leHBvcnQgY29uc3QgRk9SV0FSRCA9ICdAcmVkdXgtZm9yd2FyZC9GT1JXQVJEJztcclxuZXhwb3J0IGNvbnN0IEFERFJFU1NfUFJFRklYID0gJ0BAS0dfJztcclxuXHJcbmltcG9ydCBjdXJyeSBmcm9tICdsb2Rhc2guY3VycnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGlvbkZvcndhcmRBZGRyZXNzID0gaWQgPT4gYCR7QUREUkVTU19QUkVGSVh9JHtpZC50b1VwcGVyQ2FzZSgpfWA7XHJcblxyXG4vKipcclxuICogV3JhcCBhbiBhY3Rpb24gaW50byBhIGZvcndhcmQgYWN0aW9uIHRoYXQgb25seSBtb2RpZnkgdGhlIHN0YXRlIG9mIGEgc3BlY2lmaWNcclxuICoga2VwbGVyLmdsIGluc3RhbmNlLiBrZXBsZXIuZ2wgcmVkdWNlciB3aWxsIGxvb2sgZm9yIHNpZ25hdHVyZXMgaW4gdGhlIGFjdGlvbiB0b1xyXG4gKiBkZXRlcm1pbmUgd2hldGhlciBpdCBuZWVkcyB0byBiZSBmb3J3YXJkZWQgdG8gYSBzcGVjaWZpYyBpbnN0YW5jZSByZWR1Y2VyLlxyXG4gKlxyXG4gKiB3cmFwVG8gY2FuIGJlIGN1cnJpZWQuIFlvdSBjYW4gY3JlYXRlIGEgY3VycmllZCBhY3Rpb24gd3JhcHBlciBieSBvbmx5IHN1cHBseSB0aGUgYGlkYCBhcmd1bWVudFxyXG4gKlxyXG4gKiBBIGZvcndhcmQgYWN0aW9uIGxvb2tzIGxpa2UgdGhpc1xyXG4gKiBgYGBqc1xyXG4gKiAge1xyXG4gKiAgICB0eXBlOiBcIkBAa2VwbGVyLmdsL0xBWUVSX0NPTkZJR19DSEFOR0VcIixcclxuICogICAgcGF5bG9hZDoge1xyXG4gKiAgICAgIHR5cGU6ICdAQGtlcGxlci5nbC9MQVlFUl9DT05GSUdfQ0hBTkdFJyxcclxuICogICAgICBwYXlsb2FkOiB7fSxcclxuICogICAgICBtZXRhOiB7XHJcbiAqICAgICAgIC8vIGlkIG9mIGluc3RhbmNlXHJcbiAqICAgICAgICBfaWRfOiBpZFxyXG4gKiAgICAgICAvLyBvdGhlciBtZXRhXHJcbiAqICAgICAgfVxyXG4gKiAgICB9LFxyXG4gKiAgICBtZXRhOiB7XHJcbiAqICAgICAgX2ZvcndhcmRfOiAnQHJlZHV4LWZvcndhcmQvRk9SV0FSRCcsXHJcbiAqICAgICAgX2FkZHJfOiAnQEBLR19pZCdcclxuICogICAgfVxyXG4gKiAgfTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBtZW1iZXJvZiBmb3J3YXJkQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBUaGUgaWQgdG8gZm9yd2FyZCB0b1xyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIC0gdGhlIGFjdGlvbiBvYmplY3Qge3R5cGU6IHN0cmluZywgcGF5bG9hZDogKn1cclxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHt0eXBlOiBzdHJpbmc6IHBheWxvYWQ6ICosIG1ldGE6IHtfaWRfOiBzdHJpbmd9LCBtZXRhOiB7X2ZvcndhcmRfOiBzdHJpbmcsIF9hZGRyXzogc3RyaW5nfX19fVxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCB7d3JhcFRvLCB0b2dnbGVQZXJzcGVjdGl2ZX0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKlxyXG4gKiAvLyBUaGlzIGFjdGlvbiB3aWxsIG9ubHkgZGlzcGF0Y2ggdG8gdGhlIEtlcGxlckdsIGluc3RhbmNlIHdpdGggYGlkOiBtYXBfMWBcclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh3cmFwVG8oJ21hcF8xJywgdG9nZ2xlUGVyc3BlY3RpdmUoKSkpO1xyXG4gKlxyXG4gKiAvLyBZb3UgY2FuIGFsc28gY3JlYXRlIGEgY3VycmllZCBhY3Rpb24gZm9yIGVhY2ggaW5zdGFuY2VcclxuICogY29uc3Qgd3JhcFRvTWFwMSA9IHdyYXBUbygnbWFwXzEnKTtcclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh3cmFwVG9NYXAxKHRvZ2dsZVBlcnNwZWN0aXZlKCkpKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCB3cmFwVG8gPSBjdXJyeSgoaWQsIGFjdGlvbikgPT4gKHtcclxuICAvLyBrZWVwIG9yaWdpbmFsIGFjdGlvbi50eXBlXHJcbiAgdHlwZTogYWN0aW9uLnR5cGUsXHJcblxyXG4gIC8vIGFjdHVhbCBhY3Rpb25cclxuICBwYXlsb2FkOiB7XHJcbiAgICAuLi5hY3Rpb24sXHJcbiAgICBtZXRhOiB7XHJcbiAgICAgIC4uLmFjdGlvbi5tZXRhLFxyXG4gICAgICBfaWRfOiBpZFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIGFkZCBmb3J3YXJkIHNpZ25hdHVyZSB0byBtZXRhXHJcbiAgbWV0YToge1xyXG4gICAgLi4uKGFjdGlvbi5tZXRhIHx8IHt9KSxcclxuICAgIF9mb3J3YXJkXzogRk9SV0FSRCxcclxuICAgIF9hZGRyXzogZ2V0QWN0aW9uRm9yd2FyZEFkZHJlc3MoaWQpXHJcbiAgfVxyXG59KSk7XHJcblxyXG4vKipcclxuICogV2hldGhlciBhbiBhY3Rpb24gaXMgYSBmb3J3YXJkIGFjdGlvblxyXG4gKiBAbWVtYmVyb2YgZm9yd2FyZEFjdGlvbnNcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiAtIHRoZSBhY3Rpb24gb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBib29sZWFuIC0gd2hldGhlciB0aGUgYWN0aW9uIGlzIGEgZm9yd2FyZCBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRm9yd2FyZEFjdGlvbiA9IGFjdGlvbiA9PiB7XHJcbiAgcmV0dXJuIEJvb2xlYW4oYWN0aW9uICYmIGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLl9mb3J3YXJkXyA9PT0gRk9SV0FSRCk7XHJcbn07XHJcblxyXG4vKipcclxuICogVW53cmFwIGFuIGFjdGlvblxyXG4gKiBAbWVtYmVyb2YgZm9yd2FyZEFjdGlvbnNcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiAtIHRoZSBhY3Rpb24gb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gdW53cmFwcGVkIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdW53cmFwID0gYWN0aW9uID0+IChpc0ZvcndhcmRBY3Rpb24oYWN0aW9uKSA/IHVud3JhcChhY3Rpb24ucGF5bG9hZCkgOiBhY3Rpb24pO1xyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGFuIGlkLCByZXR1cm5zIHRoZSBhY3Rpb24gZm9yIHRoYXQgaWQuXHJcbiAqIElmIHRoZSBhY3Rpb24gaXMgbm90IGEgZm9yd2FyZCBhY3Rpb24sIHJldHVybiB0aGUgYWN0aW9uXHJcbiAqIEBtZW1iZXJvZiBmb3J3YXJkQWN0aW9uc1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9hY3Rpb25Gb3IgPSAoaWQsIGFjdGlvbikgPT5cclxuICBpc0ZvcndhcmRBY3Rpb24oYWN0aW9uKVxyXG4gICAgPyBhY3Rpb24ubWV0YS5fYWRkcl8gPT09IGdldEFjdGlvbkZvcndhcmRBZGRyZXNzKGlkKVxyXG4gICAgICA/IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIDoge31cclxuICAgIDogYWN0aW9uO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gYWN0aW9uIGRpc3BhdGNoZXIgdGhhdCB3cmFwcyBhbmQgZm9yd2FyZHMgdGhlIGFjdGlvbnMgdG8gYSBzcGVjaWZpYyBpbnN0YW5jZVxyXG4gKiBAbWVtYmVyb2YgZm9yd2FyZEFjdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gaW5zdGFuY2UgaWRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggLSBhY3Rpb24gZGlzcGF0Y2hlclxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIC8vIGFjdGlvbiBhbmQgZm9yd2FyZCBkaXNwYXRjaGVyXHJcbiAqIGltcG9ydCB7dG9nZ2xlU3BsaXRNYXAsIGZvcndhcmRUb30gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKiBpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuICpcclxuICogY29uc3QgTWFwQ29udGFpbmVyID0gcHJvcHMgPT4gKFxyXG4gKiAgPGRpdj5cclxuICogICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmtlcGxlckdsRGlzcGF0Y2godG9nZ2xlU3BsaXRNYXAoKSl9Lz5cclxuICogIDwvZGl2PlxyXG4gKiApXHJcbiAqXHJcbiAqIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgcHJvcHMpID0+ICh7XHJcbiAqICBkaXNwYXRjaCxcclxuICogIGtlcGxlckdsRGlzcGF0Y2g6IGZvcndhcmRUbyjigJhmb2/igJksIGRpc3BhdGNoKVxyXG4gKiB9KTtcclxuICpcclxuICogZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICogIHN0YXRlID0+IHN0YXRlLFxyXG4gKiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbiAqICkoTWFwQ29udGFpbmVyKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3J3YXJkVG8gPSAoaWQsIGRpc3BhdGNoKSA9PiBhY3Rpb24gPT4gZGlzcGF0Y2god3JhcFRvKGlkLCBhY3Rpb24pKTtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgdGhlIHN0YXRlIG9mIGEga2VwbGVyLmdsIGluc3RhbmNlXHJcbiAqIEBtZW1iZXJvZiBmb3J3YXJkQWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHByaXZhdGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBfdXBkYXRlUHJvcGVydHkgPSAoc3RhdGUsIGlkLCBuZXh0U3RhdGUpID0+XHJcbiAgc3RhdGVbaWRdID09PSBuZXh0U3RhdGVcclxuICAgID8gc3RhdGVcclxuICAgIDoge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFtpZF06IG5leHRTdGF0ZVxyXG4gICAgICB9O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGVjbGFyYXRpb24gaXMgbmVlZGVkIHRvIGdyb3VwIGFjdGlvbnMgaW4gZG9jc1xyXG4gKi9cclxuLyoqXHJcbiAqIEEgc2V0IG9mIGhlbHBlcnMgdG8gZm9yd2FyZCBkaXNwYXRjaCBhY3Rpb25zIHRvIGEgc3BlY2lmaWMgaW5zdGFuY2UgcmVkdWNlclxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5jb25zdCBmb3J3YXJkQWN0aW9ucyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuIl19