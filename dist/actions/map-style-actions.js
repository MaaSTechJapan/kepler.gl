"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set3dBuildingColor = exports.loadCustomMapStyle = exports.mapStyleChange = exports.loadMapStyleErr = exports.loadMapStyles = exports.requestMapStyles = exports.mapConfigChange = exports.inputMapStyle = exports.addCustomMapStyle = void 0;

var _reduxActions = require("redux-actions");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

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
 * Add map style from user input to reducer and set it to current style
 * This action is called when user click confirm after putting in a valid style url in the custom map style dialog.
 * It should not be called from outside kepler.gl without a valid `inputStyle` in the `mapStyle` reducer.
 * param {void}
 * @memberof mapStyleActions
 * @public
 */
var addCustomMapStyle = (0, _reduxActions.createAction)(_actionTypes["default"].ADD_CUSTOM_MAP_STYLE);
/**
 * Input a custom map style object
 * @memberof mapStyleActions
 * @param {Object} inputStyle
 * @param {string} inputStyle.url - style url e.g. `'mapbox://styles/heshan/xxxxxyyyyzzz'`
 * @param {string} inputStyle.id - style url e.g. `'custom_style_1'`
 * @param {Object} inputStyle.style - actual mapbox style json
 * @param {string} inputStyle.name - style name
 * @param {Object} inputStyle.layerGroups - layer groups that can be used to set map layer visibility
 * @param {Object} inputStyle.icon - icon image data url
 * @param {Object} mapState - mapState is optional
 * @public
 */

exports.addCustomMapStyle = addCustomMapStyle;
var inputMapStyle = (0, _reduxActions.createAction)(_actionTypes["default"].INPUT_MAP_STYLE, function (inputStyle, mapState) {
  return {
    inputStyle: inputStyle,
    mapState: mapState
  };
});
/**
 * Update `visibleLayerGroups`to change layer group visibility
 * @memberof mapStyleActions
 * @param {Object} mapStyle new config `{visibleLayerGroups: {label: false, road: true, background: true}}`
 * @public
 */

exports.inputMapStyle = inputMapStyle;
var mapConfigChange = (0, _reduxActions.createAction)(_actionTypes["default"].MAP_CONFIG_CHANGE, function (mapStyle) {
  return mapStyle;
});
/**
 * Request map style style object based on style.url.
 * @memberof mapStyleActions
 * @param {Array<Object>} mapStyles
 * @public
 */

exports.mapConfigChange = mapConfigChange;
var requestMapStyles = (0, _reduxActions.createAction)(_actionTypes["default"].REQUEST_MAP_STYLES, function (mapStyles) {
  return mapStyles;
});
/**
 * Callback when load map style success
 * @memberof mapStyleActions
 * @param {Object} newStyles a `{[id]: style}` mapping
 * @public
 */

exports.requestMapStyles = requestMapStyles;
var loadMapStyles = (0, _reduxActions.createAction)(_actionTypes["default"].LOAD_MAP_STYLES, function (newStyles) {
  return newStyles;
});
/**
 * Callback when load map style error
 * @memberof mapStyleActions
 * @param {*} error
 * @public
 */

exports.loadMapStyles = loadMapStyles;
var loadMapStyleErr = (0, _reduxActions.createAction)(_actionTypes["default"].LOAD_MAP_STYLE_ERR, function (error) {
  return error;
});
/**
 * Change to another map style. The selected style should already been loaded into `mapStyle.mapStyles`
 * @memberof mapStyleActions
 * @param {string} styleType the style to change to
 * @public
 */

exports.loadMapStyleErr = loadMapStyleErr;
var mapStyleChange = (0, _reduxActions.createAction)(_actionTypes["default"].MAP_STYLE_CHANGE, function (styleType) {
  return styleType;
});
/**
 * Callback when a custom map style object is received
 * @memberof mapStyleActions
 * @param {Object} customMapStyle
 * @param {string} customMapStyle.icon
 * @param {Object} customMapStyle.style
 * @param {*} customMapStyle.error
 * @public
 */

exports.mapStyleChange = mapStyleChange;
var loadCustomMapStyle = (0, _reduxActions.createAction)(_actionTypes["default"].LOAD_CUSTOM_MAP_STYLE, function (customMapStyle) {
  return customMapStyle;
}); // SET_3D_BUILDING_COLOR

/**
 * Set 3d building layer group color
 * @memberof mapStyleActions
 * @param {Array} color - [r, g, b]
 * @public
 */

exports.loadCustomMapStyle = loadCustomMapStyle;
var set3dBuildingColor = (0, _reduxActions.createAction)(_actionTypes["default"].SET_3D_BUILDING_COLOR, function (color) {
  return color;
});
/**
 * Actions handled mostly by  `mapStyle` reducer.
 * They manage the display of base map, such as loading and receiving base map styles,
 * hiding and showing map layers, user input of custom map style url.
 *
 * @public
 */

/* eslint-disable no-unused-vars */

exports.set3dBuildingColor = set3dBuildingColor;
var mapStyleActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImFkZEN1c3RvbU1hcFN0eWxlIiwiQWN0aW9uVHlwZXMiLCJBRERfQ1VTVE9NX01BUF9TVFlMRSIsImlucHV0TWFwU3R5bGUiLCJJTlBVVF9NQVBfU1RZTEUiLCJpbnB1dFN0eWxlIiwibWFwU3RhdGUiLCJtYXBDb25maWdDaGFuZ2UiLCJNQVBfQ09ORklHX0NIQU5HRSIsIm1hcFN0eWxlIiwicmVxdWVzdE1hcFN0eWxlcyIsIlJFUVVFU1RfTUFQX1NUWUxFUyIsIm1hcFN0eWxlcyIsImxvYWRNYXBTdHlsZXMiLCJMT0FEX01BUF9TVFlMRVMiLCJuZXdTdHlsZXMiLCJsb2FkTWFwU3R5bGVFcnIiLCJMT0FEX01BUF9TVFlMRV9FUlIiLCJlcnJvciIsIm1hcFN0eWxlQ2hhbmdlIiwiTUFQX1NUWUxFX0NIQU5HRSIsInN0eWxlVHlwZSIsImxvYWRDdXN0b21NYXBTdHlsZSIsIkxPQURfQ1VTVE9NX01BUF9TVFlMRSIsImN1c3RvbU1hcFN0eWxlIiwic2V0M2RCdWlsZGluZ0NvbG9yIiwiU0VUXzNEX0JVSUxESU5HX0NPTE9SIiwiY29sb3IiLCJtYXBTdHlsZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7Ozs7O0FBUU8sSUFBTUEsaUJBQWlCLEdBQUcsZ0NBQWFDLHdCQUFZQyxvQkFBekIsQ0FBMUI7QUFFUDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sSUFBTUMsYUFBYSxHQUFHLGdDQUFhRix3QkFBWUcsZUFBekIsRUFBMEMsVUFBQ0MsVUFBRCxFQUFhQyxRQUFiO0FBQUEsU0FBMkI7QUFDaEdELElBQUFBLFVBQVUsRUFBVkEsVUFEZ0c7QUFFaEdDLElBQUFBLFFBQVEsRUFBUkE7QUFGZ0csR0FBM0I7QUFBQSxDQUExQyxDQUF0QjtBQUtQOzs7Ozs7OztBQU1PLElBQU1DLGVBQWUsR0FBRyxnQ0FBYU4sd0JBQVlPLGlCQUF6QixFQUE0QyxVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBSjtBQUFBLENBQXBELENBQXhCO0FBRVA7Ozs7Ozs7O0FBTU8sSUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQzlCVCx3QkFBWVUsa0JBRGtCLEVBRTlCLFVBQUFDLFNBQVM7QUFBQSxTQUFJQSxTQUFKO0FBQUEsQ0FGcUIsQ0FBekI7QUFJUDs7Ozs7Ozs7QUFNTyxJQUFNQyxhQUFhLEdBQUcsZ0NBQWFaLHdCQUFZYSxlQUF6QixFQUEwQyxVQUFBQyxTQUFTO0FBQUEsU0FBSUEsU0FBSjtBQUFBLENBQW5ELENBQXRCO0FBRVA7Ozs7Ozs7O0FBTU8sSUFBTUMsZUFBZSxHQUFHLGdDQUFhZix3QkFBWWdCLGtCQUF6QixFQUE2QyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSjtBQUFBLENBQWxELENBQXhCO0FBRVA7Ozs7Ozs7O0FBTU8sSUFBTUMsY0FBYyxHQUFHLGdDQUFhbEIsd0JBQVltQixnQkFBekIsRUFBMkMsVUFBQUMsU0FBUztBQUFBLFNBQUlBLFNBQUo7QUFBQSxDQUFwRCxDQUF2QjtBQUVQOzs7Ozs7Ozs7OztBQVNPLElBQU1DLGtCQUFrQixHQUFHLGdDQUNoQ3JCLHdCQUFZc0IscUJBRG9CLEVBRWhDLFVBQUFDLGNBQWM7QUFBQSxTQUFJQSxjQUFKO0FBQUEsQ0FGa0IsQ0FBM0IsQyxDQUtQOztBQUNBOzs7Ozs7OztBQU1PLElBQU1DLGtCQUFrQixHQUFHLGdDQUFheEIsd0JBQVl5QixxQkFBekIsRUFBZ0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUo7QUFBQSxDQUFyRCxDQUEzQjtBQUVQOzs7Ozs7OztBQU9BOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcclxuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBtYXAgc3R5bGUgZnJvbSB1c2VyIGlucHV0IHRvIHJlZHVjZXIgYW5kIHNldCBpdCB0byBjdXJyZW50IHN0eWxlXHJcbiAqIFRoaXMgYWN0aW9uIGlzIGNhbGxlZCB3aGVuIHVzZXIgY2xpY2sgY29uZmlybSBhZnRlciBwdXR0aW5nIGluIGEgdmFsaWQgc3R5bGUgdXJsIGluIHRoZSBjdXN0b20gbWFwIHN0eWxlIGRpYWxvZy5cclxuICogSXQgc2hvdWxkIG5vdCBiZSBjYWxsZWQgZnJvbSBvdXRzaWRlIGtlcGxlci5nbCB3aXRob3V0IGEgdmFsaWQgYGlucHV0U3R5bGVgIGluIHRoZSBgbWFwU3R5bGVgIHJlZHVjZXIuXHJcbiAqIHBhcmFtIHt2b2lkfVxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21NYXBTdHlsZSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5BRERfQ1VTVE9NX01BUF9TVFlMRSk7XHJcblxyXG4vKipcclxuICogSW5wdXQgYSBjdXN0b20gbWFwIHN0eWxlIG9iamVjdFxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnB1dFN0eWxlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFN0eWxlLnVybCAtIHN0eWxlIHVybCBlLmcuIGAnbWFwYm94Oi8vc3R5bGVzL2hlc2hhbi94eHh4eHl5eXl6enonYFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTdHlsZS5pZCAtIHN0eWxlIHVybCBlLmcuIGAnY3VzdG9tX3N0eWxlXzEnYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gaW5wdXRTdHlsZS5zdHlsZSAtIGFjdHVhbCBtYXBib3ggc3R5bGUganNvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTdHlsZS5uYW1lIC0gc3R5bGUgbmFtZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gaW5wdXRTdHlsZS5sYXllckdyb3VwcyAtIGxheWVyIGdyb3VwcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHNldCBtYXAgbGF5ZXIgdmlzaWJpbGl0eVxyXG4gKiBAcGFyYW0ge09iamVjdH0gaW5wdXRTdHlsZS5pY29uIC0gaWNvbiBpbWFnZSBkYXRhIHVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwU3RhdGUgLSBtYXBTdGF0ZSBpcyBvcHRpb25hbFxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5wdXRNYXBTdHlsZSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5JTlBVVF9NQVBfU1RZTEUsIChpbnB1dFN0eWxlLCBtYXBTdGF0ZSkgPT4gKHtcclxuICBpbnB1dFN0eWxlLFxyXG4gIG1hcFN0YXRlXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYHZpc2libGVMYXllckdyb3Vwc2B0byBjaGFuZ2UgbGF5ZXIgZ3JvdXAgdmlzaWJpbGl0eVxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXBTdHlsZSBuZXcgY29uZmlnIGB7dmlzaWJsZUxheWVyR3JvdXBzOiB7bGFiZWw6IGZhbHNlLCByb2FkOiB0cnVlLCBiYWNrZ3JvdW5kOiB0cnVlfX1gXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBtYXBDb25maWdDaGFuZ2UgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuTUFQX0NPTkZJR19DSEFOR0UsIG1hcFN0eWxlID0+IG1hcFN0eWxlKTtcclxuXHJcbi8qKlxyXG4gKiBSZXF1ZXN0IG1hcCBzdHlsZSBzdHlsZSBvYmplY3QgYmFzZWQgb24gc3R5bGUudXJsLlxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbWFwU3R5bGVzXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0TWFwU3R5bGVzID0gY3JlYXRlQWN0aW9uKFxyXG4gIEFjdGlvblR5cGVzLlJFUVVFU1RfTUFQX1NUWUxFUyxcclxuICBtYXBTdHlsZXMgPT4gbWFwU3R5bGVzXHJcbik7XHJcbi8qKlxyXG4gKiBDYWxsYmFjayB3aGVuIGxvYWQgbWFwIHN0eWxlIHN1Y2Nlc3NcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3U3R5bGVzIGEgYHtbaWRdOiBzdHlsZX1gIG1hcHBpbmdcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRNYXBTdHlsZXMgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuTE9BRF9NQVBfU1RZTEVTLCBuZXdTdHlsZXMgPT4gbmV3U3R5bGVzKTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsYmFjayB3aGVuIGxvYWQgbWFwIHN0eWxlIGVycm9yXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZUFjdGlvbnNcclxuICogQHBhcmFtIHsqfSBlcnJvclxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZE1hcFN0eWxlRXJyID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLkxPQURfTUFQX1NUWUxFX0VSUiwgZXJyb3IgPT4gZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIENoYW5nZSB0byBhbm90aGVyIG1hcCBzdHlsZS4gVGhlIHNlbGVjdGVkIHN0eWxlIHNob3VsZCBhbHJlYWR5IGJlZW4gbG9hZGVkIGludG8gYG1hcFN0eWxlLm1hcFN0eWxlc2BcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVUeXBlIHRoZSBzdHlsZSB0byBjaGFuZ2UgdG9cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hcFN0eWxlQ2hhbmdlID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLk1BUF9TVFlMRV9DSEFOR0UsIHN0eWxlVHlwZSA9PiBzdHlsZVR5cGUpO1xyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIHdoZW4gYSBjdXN0b20gbWFwIHN0eWxlIG9iamVjdCBpcyByZWNlaXZlZFxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdXN0b21NYXBTdHlsZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY3VzdG9tTWFwU3R5bGUuaWNvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gY3VzdG9tTWFwU3R5bGUuc3R5bGVcclxuICogQHBhcmFtIHsqfSBjdXN0b21NYXBTdHlsZS5lcnJvclxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEN1c3RvbU1hcFN0eWxlID0gY3JlYXRlQWN0aW9uKFxyXG4gIEFjdGlvblR5cGVzLkxPQURfQ1VTVE9NX01BUF9TVFlMRSxcclxuICBjdXN0b21NYXBTdHlsZSA9PiBjdXN0b21NYXBTdHlsZVxyXG4pO1xyXG5cclxuLy8gU0VUXzNEX0JVSUxESU5HX0NPTE9SXHJcbi8qKlxyXG4gKiBTZXQgM2QgYnVpbGRpbmcgbGF5ZXIgZ3JvdXAgY29sb3JcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBjb2xvciAtIFtyLCBnLCBiXVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0M2RCdWlsZGluZ0NvbG9yID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlNFVF8zRF9CVUlMRElOR19DT0xPUiwgY29sb3IgPT4gY29sb3IpO1xyXG5cclxuLyoqXHJcbiAqIEFjdGlvbnMgaGFuZGxlZCBtb3N0bHkgYnkgIGBtYXBTdHlsZWAgcmVkdWNlci5cclxuICogVGhleSBtYW5hZ2UgdGhlIGRpc3BsYXkgb2YgYmFzZSBtYXAsIHN1Y2ggYXMgbG9hZGluZyBhbmQgcmVjZWl2aW5nIGJhc2UgbWFwIHN0eWxlcyxcclxuICogaGlkaW5nIGFuZCBzaG93aW5nIG1hcCBsYXllcnMsIHVzZXIgaW5wdXQgb2YgY3VzdG9tIG1hcCBzdHlsZSB1cmwuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IG1hcFN0eWxlQWN0aW9ucyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuIl19