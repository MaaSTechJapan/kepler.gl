"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keplerGlInit = exports.receiveMapConfig = exports.resetMapConfig = exports.addDataToMap = void 0;

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

var _reduxActions = require("redux-actions");

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

/**
 * Add data to kepler.gl reducer, prepare map with preset configuration if config is passed.
 * Kepler.gl provides a handy set of utils to parse data from different formats to the `data` object required in dataset. You rarely need to manually format the data obejct.
 *
 * Use `KeplerGlSchema.getConfigToSave` to generate a json blob of the currents instance config.
 * The config object value will always have higher precedence than the options properties.
 *
 * Kepler.gl uses `dataId` in the config to match with loaded dataset. If you pass a config object, you need
 * to match the `info.id` of your dataset to the `dataId` in each `layer`, `filter` and `interactionConfig.tooltips.fieldsToShow`
 *
 * @memberof main
 * @param {Object} data
 * @param {Array<Object>|Object} data.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} data.datasets.info -info of a dataset
 * @param {string} data.datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} data.datasets.info.label - A display name of this dataset
 * @param {Object} data.datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} data.datasets.data.fields - ***required** Array of fields,
 * @param {string} data.datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} data.datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 *
 * @param {Object} data.options
 * @param {boolean} data.options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries.  `options.centerMap` will override `config.mapState` if passed in.
 * @param {boolean} data.options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {boolean} data.options.keepExistingConfig whether to keep exiting map data and associated layer filter  interaction config `default: false`.
 * @param {Object} data.config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @public
 * @example
 *
 * // app.js
 * import {addDataToMap} from 'kepler.gl/actions';
 *
 * const sampleTripData = {
 *  fields: [
 *    {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
 *    {name: 'pickup_longitude', format: '', type: 'real'},
 *    {name: 'pickup_latitude', format: '', type: 'real'}
 *  ],
 *  rows: [
 *    ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
 *    ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
 *    ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576],
 *  ]
 * };
 *
 * const sampleConfig = {
 *   visState: {
 *     filters: [
 *       {
 *         id: 'me',
 *         dataId: 'test_trip_data',
 *         name: 'tpep_pickup_datetime',
 *         type: 'timeRange',
 *         enlarged: true
 *       }
 *     ]
 *   }
 * }
 *
 * this.props.dispatch(
 *   addDataToMap({
 *     datasets: {
 *       info: {
 *         label: 'Sample Taxi Trips in New York City',
 *         id: 'test_trip_data'
 *       },
 *       data: sampleTripData
 *     },
 *     option: {
 *       centerMap: true,
 *       readOnly: false,
 *       keepExistingConfig: false
 *     },
 *     info: {
 *       title: 'Taro and Blue',
 *       description: 'This is my map'
 *     }
 *     config: sampleConfig
 *   })
 * );
 */
var addDataToMap = (0, _reduxActions.createAction)(_actionTypes["default"].ADD_DATA_TO_MAP, function (data) {
  return data;
});
/**
 * Reset all sub-reducers to its initial state. This can be used to clear out all configuration in the reducer.
 * @memberof main
 * @public
 */

exports.addDataToMap = addDataToMap;
var resetMapConfig = (0, _reduxActions.createAction)(_actionTypes["default"].RESET_MAP_CONFIG);
/**
 * Pass config to kepler.gl instance, prepare the state with preset configs.
 * Calling `KeplerGlSchema.parseSavedConfig` to convert saved config before passing it in is required.
 *
 * You can call `receiveMapConfig` before passing in any data. The reducer will store layer and filter config, waiting for
 * data to come in. When data arrives, you can call `addDataToMap` without passing any config, and the reducer will try to match
 * preloaded configs. This behavior is designed to allow asynchronous data loading.
 *
 * It is also useful when you want to prepare the kepler.gl instance with some preset layer and filter settings.
 * **Note** Sequence is important, `receiveMapConfig` needs to be called __before__ data is loaded. Currently kepler.gl doesn't allow calling `receiveMapConfig` after data is loaded.
 * It will reset current configuration first then apply config to it.
 * @memberof main
 * @param {Object} config - ***required** The Config Object
 * @param {Object} options - ***optional** The Option object
 * @param {boolean} options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param {boolean} options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {boolean} options.keepExistingConfig whether to keep exiting layer filter and interaction config `default: false`.
 * @public
 * @example
 * import {receiveMapConfig} from 'kepler.gl/actions';
 * import KeplerGlSchema from 'kepler.gl/schemas';
 *
 * const parsedConfig = KeplerGlSchema.parseSavedConfig(config);
 * this.props.dispatch(receiveMapConfig(parsedConfig));
 */

exports.resetMapConfig = resetMapConfig;
var receiveMapConfig = (0, _reduxActions.createAction)(_actionTypes["default"].RECEIVE_MAP_CONFIG, function (config, options) {
  return {
    config: config,
    options: options
  };
});
/**
 * Initialize kepler.gl reducer. It is used to pass in `mapboxApiAccessToken` to `mapStyle` reducer.
 * @memberof main
 * @param {Object} payload
 * @param {string} payload.mapboxApiAccessToken - mapboxApiAccessToken to be saved to mapStyle reducer
 * @param {string} payload.mapboxApiUrl - mapboxApiUrl to be saved to mapStyle reducer.
 * @param {Boolean} payload.mapStylesReplaceDefault - mapStylesReplaceDefault to be saved to mapStyle reducer
 * @public
 */

exports.receiveMapConfig = receiveMapConfig;
var keplerGlInit = (0, _reduxActions.createAction)(_actionTypes["default"].INIT, function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      mapboxApiUrl = _ref.mapboxApiUrl,
      mapStylesReplaceDefault = _ref.mapStylesReplaceDefault;

  return {
    mapboxApiAccessToken: mapboxApiAccessToken,
    mapboxApiUrl: mapboxApiUrl,
    mapStylesReplaceDefault: mapStylesReplaceDefault
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Main kepler.gl actions, these actions handles loading data and config into kepler.gl reducer. These actions
 * is listened by all subreducers,
 * @public
 */

/* eslint-disable no-unused-vars */

exports.keplerGlInit = keplerGlInit;
var main = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2FjdGlvbnMuanMiXSwibmFtZXMiOlsiYWRkRGF0YVRvTWFwIiwiQWN0aW9uVHlwZXMiLCJBRERfREFUQV9UT19NQVAiLCJkYXRhIiwicmVzZXRNYXBDb25maWciLCJSRVNFVF9NQVBfQ09ORklHIiwicmVjZWl2ZU1hcENvbmZpZyIsIlJFQ0VJVkVfTUFQX0NPTkZJRyIsImNvbmZpZyIsIm9wdGlvbnMiLCJrZXBsZXJHbEluaXQiLCJJTklUIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GTyxJQUFNQSxZQUFZLEdBQUcsZ0NBQWFDLHdCQUFZQyxlQUF6QixFQUEwQyxVQUFBQyxJQUFJO0FBQUEsU0FBSUEsSUFBSjtBQUFBLENBQTlDLENBQXJCO0FBRVA7Ozs7Ozs7QUFLTyxJQUFNQyxjQUFjLEdBQUcsZ0NBQWFILHdCQUFZSSxnQkFBekIsQ0FBdkI7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQk8sSUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQWFMLHdCQUFZTSxrQkFBekIsRUFBNkMsVUFBQ0MsTUFBRCxFQUFTQyxPQUFUO0FBQUEsU0FBc0I7QUFDakdELElBQUFBLE1BQU0sRUFBTkEsTUFEaUc7QUFFakdDLElBQUFBLE9BQU8sRUFBUEE7QUFGaUcsR0FBdEI7QUFBQSxDQUE3QyxDQUF6QjtBQUtQOzs7Ozs7Ozs7OztBQVNPLElBQU1DLFlBQVksR0FBRyxnQ0FDMUJULHdCQUFZVSxJQURjLEVBRTFCO0FBQUEsaUZBQWlFLEVBQWpFO0FBQUEsTUFBRUMsb0JBQUYsUUFBRUEsb0JBQUY7QUFBQSxNQUF3QkMsWUFBeEIsUUFBd0JBLFlBQXhCO0FBQUEsTUFBc0NDLHVCQUF0QyxRQUFzQ0EsdUJBQXRDOztBQUFBLFNBQXlFO0FBQ3ZFRixJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUR1RTtBQUV2RUMsSUFBQUEsWUFBWSxFQUFaQSxZQUZ1RTtBQUd2RUMsSUFBQUEsdUJBQXVCLEVBQXZCQTtBQUh1RSxHQUF6RTtBQUFBLENBRjBCLENBQXJCO0FBU1A7Ozs7QUFHQTs7Ozs7O0FBS0E7OztBQUNBLElBQU1DLElBQUksR0FBRyxJQUFiO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XHJcbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBBZGQgZGF0YSB0byBrZXBsZXIuZ2wgcmVkdWNlciwgcHJlcGFyZSBtYXAgd2l0aCBwcmVzZXQgY29uZmlndXJhdGlvbiBpZiBjb25maWcgaXMgcGFzc2VkLlxyXG4gKiBLZXBsZXIuZ2wgcHJvdmlkZXMgYSBoYW5keSBzZXQgb2YgdXRpbHMgdG8gcGFyc2UgZGF0YSBmcm9tIGRpZmZlcmVudCBmb3JtYXRzIHRvIHRoZSBgZGF0YWAgb2JqZWN0IHJlcXVpcmVkIGluIGRhdGFzZXQuIFlvdSByYXJlbHkgbmVlZCB0byBtYW51YWxseSBmb3JtYXQgdGhlIGRhdGEgb2JlamN0LlxyXG4gKlxyXG4gKiBVc2UgYEtlcGxlckdsU2NoZW1hLmdldENvbmZpZ1RvU2F2ZWAgdG8gZ2VuZXJhdGUgYSBqc29uIGJsb2Igb2YgdGhlIGN1cnJlbnRzIGluc3RhbmNlIGNvbmZpZy5cclxuICogVGhlIGNvbmZpZyBvYmplY3QgdmFsdWUgd2lsbCBhbHdheXMgaGF2ZSBoaWdoZXIgcHJlY2VkZW5jZSB0aGFuIHRoZSBvcHRpb25zIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEtlcGxlci5nbCB1c2VzIGBkYXRhSWRgIGluIHRoZSBjb25maWcgdG8gbWF0Y2ggd2l0aCBsb2FkZWQgZGF0YXNldC4gSWYgeW91IHBhc3MgYSBjb25maWcgb2JqZWN0LCB5b3UgbmVlZFxyXG4gKiB0byBtYXRjaCB0aGUgYGluZm8uaWRgIG9mIHlvdXIgZGF0YXNldCB0byB0aGUgYGRhdGFJZGAgaW4gZWFjaCBgbGF5ZXJgLCBgZmlsdGVyYCBhbmQgYGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXBzLmZpZWxkc1RvU2hvd2BcclxuICpcclxuICogQG1lbWJlcm9mIG1haW5cclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fE9iamVjdH0gZGF0YS5kYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xyXG4gKiBFYWNoIGRhdGFzZXQgb2JqZWN0IG5lZWRzIHRvIGhhdmUgYGluZm9gIGFuZCBgZGF0YWAgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLmRhdGFzZXRzLmluZm8gLWluZm8gb2YgYSBkYXRhc2V0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmRhdGFzZXRzLmluZm8uaWQgLSBpZCBvZiB0aGlzIGRhdGFzZXQuIElmIGNvbmZpZyBpcyBkZWZpbmVkLCBgaWRgIHNob3VsZCBtYXRjaGVzIHRoZSBgZGF0YUlkYCBpbiBjb25maWcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmRhdGFzZXRzLmluZm8ubGFiZWwgLSBBIGRpc3BsYXkgbmFtZSBvZiB0aGlzIGRhdGFzZXRcclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEuZGF0YXNldHMuZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBkYXRhLmRhdGFzZXRzLmRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmRhdGFzZXRzLmRhdGEuZmllbGRzLm5hbWUgLSAqKipyZXF1aXJlZCoqIE5hbWUgb2YgdGhlIGZpZWxkLFxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gZGF0YS5kYXRhc2V0cy5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLm9wdGlvbnNcclxuICogQHBhcmFtIHtib29sZWFufSBkYXRhLm9wdGlvbnMuY2VudGVyTWFwIGBkZWZhdWx0OiB0cnVlYCBpZiBgY2VudGVyTWFwYCBpcyBzZXQgdG8gYHRydWVgIGtlcGxlci5nbCB3aWxsXHJcbiAqIHBsYWNlIHRoZSBtYXAgdmlldyB3aXRoaW4gdGhlIGRhdGEgcG9pbnRzIGJvdW5kYXJpZXMuICBgb3B0aW9ucy5jZW50ZXJNYXBgIHdpbGwgb3ZlcnJpZGUgYGNvbmZpZy5tYXBTdGF0ZWAgaWYgcGFzc2VkIGluLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRhdGEub3B0aW9ucy5yZWFkT25seSBgZGVmYXVsdDogZmFsc2VgIGlmIGByZWFkT25seWAgaXMgc2V0IHRvIGB0cnVlYFxyXG4gKiB0aGUgbGVmdCBzZXR0aW5nIHBhbmVsIHdpbGwgYmUgaGlkZGVuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YS5vcHRpb25zLmtlZXBFeGlzdGluZ0NvbmZpZyB3aGV0aGVyIHRvIGtlZXAgZXhpdGluZyBtYXAgZGF0YSBhbmQgYXNzb2NpYXRlZCBsYXllciBmaWx0ZXIgIGludGVyYWN0aW9uIGNvbmZpZyBgZGVmYXVsdDogZmFsc2VgLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YS5jb25maWcgdGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBmdWxsIGtlcGxlci5nbCBpbnN0YW5jZSBjb25maWd1cmF0aW9uIHttYXBTdGF0ZSwgbWFwU3R5bGUsIHZpc1N0YXRlfVxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIC8vIGFwcC5qc1xyXG4gKiBpbXBvcnQge2FkZERhdGFUb01hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKlxyXG4gKiBjb25zdCBzYW1wbGVUcmlwRGF0YSA9IHtcclxuICogIGZpZWxkczogW1xyXG4gKiAgICB7bmFtZTogJ3RwZXBfcGlja3VwX2RhdGV0aW1lJywgZm9ybWF0OiAnWVlZWS1NLUQgSDptOnMnLCB0eXBlOiAndGltZXN0YW1wJ30sXHJcbiAqICAgIHtuYW1lOiAncGlja3VwX2xvbmdpdHVkZScsIGZvcm1hdDogJycsIHR5cGU6ICdyZWFsJ30sXHJcbiAqICAgIHtuYW1lOiAncGlja3VwX2xhdGl0dWRlJywgZm9ybWF0OiAnJywgdHlwZTogJ3JlYWwnfVxyXG4gKiAgXSxcclxuICogIHJvd3M6IFtcclxuICogICAgWycyMDE1LTAxLTE1IDE5OjA1OjM5ICswMDowMCcsIC03My45OTM4OTY0OCwgNDAuNzUwMTEwNjNdLFxyXG4gKiAgICBbJzIwMTUtMDEtMTUgMTk6MDU6MzkgKzAwOjAwJywgLTczLjk3NjQyNTE3LCA0MC43Mzk4MTA5NF0sXHJcbiAqICAgIFsnMjAxNS0wMS0xNSAxOTowNTo0MCArMDA6MDAnLCAtNzMuOTY4NzA0MjIsIDQwLjc1NDI0NTc2XSxcclxuICogIF1cclxuICogfTtcclxuICpcclxuICogY29uc3Qgc2FtcGxlQ29uZmlnID0ge1xyXG4gKiAgIHZpc1N0YXRlOiB7XHJcbiAqICAgICBmaWx0ZXJzOiBbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBpZDogJ21lJyxcclxuICogICAgICAgICBkYXRhSWQ6ICd0ZXN0X3RyaXBfZGF0YScsXHJcbiAqICAgICAgICAgbmFtZTogJ3RwZXBfcGlja3VwX2RhdGV0aW1lJyxcclxuICogICAgICAgICB0eXBlOiAndGltZVJhbmdlJyxcclxuICogICAgICAgICBlbmxhcmdlZDogdHJ1ZVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAqICAgYWRkRGF0YVRvTWFwKHtcclxuICogICAgIGRhdGFzZXRzOiB7XHJcbiAqICAgICAgIGluZm86IHtcclxuICogICAgICAgICBsYWJlbDogJ1NhbXBsZSBUYXhpIFRyaXBzIGluIE5ldyBZb3JrIENpdHknLFxyXG4gKiAgICAgICAgIGlkOiAndGVzdF90cmlwX2RhdGEnXHJcbiAqICAgICAgIH0sXHJcbiAqICAgICAgIGRhdGE6IHNhbXBsZVRyaXBEYXRhXHJcbiAqICAgICB9LFxyXG4gKiAgICAgb3B0aW9uOiB7XHJcbiAqICAgICAgIGNlbnRlck1hcDogdHJ1ZSxcclxuICogICAgICAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gKiAgICAgICBrZWVwRXhpc3RpbmdDb25maWc6IGZhbHNlXHJcbiAqICAgICB9LFxyXG4gKiAgICAgaW5mbzoge1xyXG4gKiAgICAgICB0aXRsZTogJ1Rhcm8gYW5kIEJsdWUnLFxyXG4gKiAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgbWFwJ1xyXG4gKiAgICAgfVxyXG4gKiAgICAgY29uZmlnOiBzYW1wbGVDb25maWdcclxuICogICB9KVxyXG4gKiApO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZERhdGFUb01hcCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5BRERfREFUQV9UT19NQVAsIGRhdGEgPT4gZGF0YSk7XHJcblxyXG4vKipcclxuICogUmVzZXQgYWxsIHN1Yi1yZWR1Y2VycyB0byBpdHMgaW5pdGlhbCBzdGF0ZS4gVGhpcyBjYW4gYmUgdXNlZCB0byBjbGVhciBvdXQgYWxsIGNvbmZpZ3VyYXRpb24gaW4gdGhlIHJlZHVjZXIuXHJcbiAqIEBtZW1iZXJvZiBtYWluXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldE1hcENvbmZpZyA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5SRVNFVF9NQVBfQ09ORklHKTtcclxuXHJcbi8qKlxyXG4gKiBQYXNzIGNvbmZpZyB0byBrZXBsZXIuZ2wgaW5zdGFuY2UsIHByZXBhcmUgdGhlIHN0YXRlIHdpdGggcHJlc2V0IGNvbmZpZ3MuXHJcbiAqIENhbGxpbmcgYEtlcGxlckdsU2NoZW1hLnBhcnNlU2F2ZWRDb25maWdgIHRvIGNvbnZlcnQgc2F2ZWQgY29uZmlnIGJlZm9yZSBwYXNzaW5nIGl0IGluIGlzIHJlcXVpcmVkLlxyXG4gKlxyXG4gKiBZb3UgY2FuIGNhbGwgYHJlY2VpdmVNYXBDb25maWdgIGJlZm9yZSBwYXNzaW5nIGluIGFueSBkYXRhLiBUaGUgcmVkdWNlciB3aWxsIHN0b3JlIGxheWVyIGFuZCBmaWx0ZXIgY29uZmlnLCB3YWl0aW5nIGZvclxyXG4gKiBkYXRhIHRvIGNvbWUgaW4uIFdoZW4gZGF0YSBhcnJpdmVzLCB5b3UgY2FuIGNhbGwgYGFkZERhdGFUb01hcGAgd2l0aG91dCBwYXNzaW5nIGFueSBjb25maWcsIGFuZCB0aGUgcmVkdWNlciB3aWxsIHRyeSB0byBtYXRjaFxyXG4gKiBwcmVsb2FkZWQgY29uZmlncy4gVGhpcyBiZWhhdmlvciBpcyBkZXNpZ25lZCB0byBhbGxvdyBhc3luY2hyb25vdXMgZGF0YSBsb2FkaW5nLlxyXG4gKlxyXG4gKiBJdCBpcyBhbHNvIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIHByZXBhcmUgdGhlIGtlcGxlci5nbCBpbnN0YW5jZSB3aXRoIHNvbWUgcHJlc2V0IGxheWVyIGFuZCBmaWx0ZXIgc2V0dGluZ3MuXHJcbiAqICoqTm90ZSoqIFNlcXVlbmNlIGlzIGltcG9ydGFudCwgYHJlY2VpdmVNYXBDb25maWdgIG5lZWRzIHRvIGJlIGNhbGxlZCBfX2JlZm9yZV9fIGRhdGEgaXMgbG9hZGVkLiBDdXJyZW50bHkga2VwbGVyLmdsIGRvZXNuJ3QgYWxsb3cgY2FsbGluZyBgcmVjZWl2ZU1hcENvbmZpZ2AgYWZ0ZXIgZGF0YSBpcyBsb2FkZWQuXHJcbiAqIEl0IHdpbGwgcmVzZXQgY3VycmVudCBjb25maWd1cmF0aW9uIGZpcnN0IHRoZW4gYXBwbHkgY29uZmlnIHRvIGl0LlxyXG4gKiBAbWVtYmVyb2YgbWFpblxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gKioqcmVxdWlyZWQqKiBUaGUgQ29uZmlnIE9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtICoqKm9wdGlvbmFsKiogVGhlIE9wdGlvbiBvYmplY3RcclxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNlbnRlck1hcCBgZGVmYXVsdDogdHJ1ZWAgaWYgYGNlbnRlck1hcGAgaXMgc2V0IHRvIGB0cnVlYCBrZXBsZXIuZ2wgd2lsbFxyXG4gKiBwbGFjZSB0aGUgbWFwIHZpZXcgd2l0aGluIHRoZSBkYXRhIHBvaW50cyBib3VuZGFyaWVzXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5yZWFkT25seSBgZGVmYXVsdDogZmFsc2VgIGlmIGByZWFkT25seWAgaXMgc2V0IHRvIGB0cnVlYFxyXG4gKiB0aGUgbGVmdCBzZXR0aW5nIHBhbmVsIHdpbGwgYmUgaGlkZGVuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5rZWVwRXhpc3RpbmdDb25maWcgd2hldGhlciB0byBrZWVwIGV4aXRpbmcgbGF5ZXIgZmlsdGVyIGFuZCBpbnRlcmFjdGlvbiBjb25maWcgYGRlZmF1bHQ6IGZhbHNlYC5cclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBpbXBvcnQge3JlY2VpdmVNYXBDb25maWd9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcclxuICogaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ2tlcGxlci5nbC9zY2hlbWFzJztcclxuICpcclxuICogY29uc3QgcGFyc2VkQ29uZmlnID0gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZyhjb25maWcpO1xyXG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2VpdmVNYXBDb25maWcocGFyc2VkQ29uZmlnKSk7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1hcENvbmZpZyA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5SRUNFSVZFX01BUF9DT05GSUcsIChjb25maWcsIG9wdGlvbnMpID0+ICh7XHJcbiAgY29uZmlnLFxyXG4gIG9wdGlvbnNcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUga2VwbGVyLmdsIHJlZHVjZXIuIEl0IGlzIHVzZWQgdG8gcGFzcyBpbiBgbWFwYm94QXBpQWNjZXNzVG9rZW5gIHRvIGBtYXBTdHlsZWAgcmVkdWNlci5cclxuICogQG1lbWJlcm9mIG1haW5cclxuICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcclxuICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQubWFwYm94QXBpQWNjZXNzVG9rZW4gLSBtYXBib3hBcGlBY2Nlc3NUb2tlbiB0byBiZSBzYXZlZCB0byBtYXBTdHlsZSByZWR1Y2VyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXlsb2FkLm1hcGJveEFwaVVybCAtIG1hcGJveEFwaVVybCB0byBiZSBzYXZlZCB0byBtYXBTdHlsZSByZWR1Y2VyLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBheWxvYWQubWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgLSBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCB0byBiZSBzYXZlZCB0byBtYXBTdHlsZSByZWR1Y2VyXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBrZXBsZXJHbEluaXQgPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuSU5JVCxcclxuICAoe21hcGJveEFwaUFjY2Vzc1Rva2VuLCBtYXBib3hBcGlVcmwsIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0fSA9IHt9KSA9PiAoe1xyXG4gICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICBtYXBib3hBcGlVcmwsXHJcbiAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdFxyXG4gIH0pXHJcbik7XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXHJcbiAqL1xyXG4vKipcclxuICogTWFpbiBrZXBsZXIuZ2wgYWN0aW9ucywgdGhlc2UgYWN0aW9ucyBoYW5kbGVzIGxvYWRpbmcgZGF0YSBhbmQgY29uZmlnIGludG8ga2VwbGVyLmdsIHJlZHVjZXIuIFRoZXNlIGFjdGlvbnNcclxuICogaXMgbGlzdGVuZWQgYnkgYWxsIHN1YnJlZHVjZXJzLFxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5jb25zdCBtYWluID0gbnVsbDtcclxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4iXX0=