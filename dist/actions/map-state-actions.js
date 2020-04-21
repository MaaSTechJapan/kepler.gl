"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSplitMap = exports.updateMap = exports.fitBounds = exports.togglePerspective = void 0;

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
 *
 * Toggle between 3d and 2d map.
 * @memberof mapStateActions
 * @public
 * @example
 * import {togglePerspective} from 'kepler.gl/actions';
 * this.props.dispatch(togglePerspective());
 */
var togglePerspective = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_PERSPECTIVE);
/**
 * Fit map viewport to bounds
 * @memberof mapStateActions
 * @param {Array<Number>} bounds as `[lngMin, latMin, lngMax, latMax]`
 * @public
 * @example
 * import {fitBounds} from 'kepler.gl/actions';
 * this.props.dispatch(fitBounds([-122.23, 37.127, -122.11, 37.456]));
 */

exports.togglePerspective = togglePerspective;
var fitBounds = (0, _reduxActions.createAction)(_actionTypes["default"].FIT_BOUNDS, function (bounds) {
  return bounds;
});
/**
 * Update map viewport
 * @memberof mapStateActions
 * @param {Object} viewport viewport object container one or any of these properties `width`, `height`, `latitude` `longitude`, `zoom`, `pitch`, `bearing`, `dragRotate`
 * @param {Number} [viewport.width] Width of viewport
 * @param {Number} [viewport.height] Height of viewport
 * @param {Number} [viewport.zoom] Zoom of viewport
 * @param {Number} [viewport.pitch] Camera angle in degrees (0 is straight down)
 * @param {Number} [viewport.bearing] Map rotation in degrees (0 means north is up)
 * @param {Number} [viewport.latitude] Latitude center of viewport on map in mercator projection
 * @param {Number} [viewport.longitude] Longitude Center of viewport on map in mercator projection
 * @param {boolean} [viewport.dragRotate] Whether to enable drag and rotate map into perspective viewport
 * @public
 * @example
 * import {updateMap} from 'kepler.gl/actions';
 * this.props.dispatch(updateMap({latitude: 37.75043, longitude: -122.34679, width: 800, height: 1200}));
 */

exports.fitBounds = fitBounds;
var updateMap = (0, _reduxActions.createAction)(_actionTypes["default"].UPDATE_MAP, function (viewport) {
  return viewport;
});
/**
 * Toggle between single map or split maps
 * @memberof mapStateActions
 * @param {Number} [index] index is provided, close split map at index
 * @public
 * @example
 * import {toggleSplitMap} from 'kepler.gl/actions';
 * this.props.dispatch(toggleSplitMap());
 */

exports.updateMap = updateMap;
var toggleSplitMap = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_SPLIT_MAP, function (index) {
  return index;
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by  `mapState` reducer.
 * They manage map viewport update, toggle between 2d and 3d map,
 * toggle between single and split maps.
 *
 * @public
 */

/* eslint-disable no-unused-vars */

exports.toggleSplitMap = toggleSplitMap;
var mapStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbInRvZ2dsZVBlcnNwZWN0aXZlIiwiQWN0aW9uVHlwZXMiLCJUT0dHTEVfUEVSU1BFQ1RJVkUiLCJmaXRCb3VuZHMiLCJGSVRfQk9VTkRTIiwiYm91bmRzIiwidXBkYXRlTWFwIiwiVVBEQVRFX01BUCIsInZpZXdwb3J0IiwidG9nZ2xlU3BsaXRNYXAiLCJUT0dHTEVfU1BMSVRfTUFQIiwiaW5kZXgiLCJtYXBTdGF0ZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7Ozs7OztBQVNPLElBQU1BLGlCQUFpQixHQUFHLGdDQUFhQyx3QkFBWUMsa0JBQXpCLENBQTFCO0FBRVA7Ozs7Ozs7Ozs7O0FBU08sSUFBTUMsU0FBUyxHQUFHLGdDQUFhRix3QkFBWUcsVUFBekIsRUFBcUMsVUFBQUMsTUFBTTtBQUFBLFNBQUlBLE1BQUo7QUFBQSxDQUEzQyxDQUFsQjtBQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JPLElBQU1DLFNBQVMsR0FBRyxnQ0FBYUwsd0JBQVlNLFVBQXpCLEVBQXFDLFVBQUFDLFFBQVE7QUFBQSxTQUFJQSxRQUFKO0FBQUEsQ0FBN0MsQ0FBbEI7QUFFUDs7Ozs7Ozs7Ozs7QUFTTyxJQUFNQyxjQUFjLEdBQUcsZ0NBQWFSLHdCQUFZUyxnQkFBekIsRUFBMkMsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUo7QUFBQSxDQUFoRCxDQUF2QjtBQUVQOzs7O0FBR0E7Ozs7Ozs7O0FBT0E7OztBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xyXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XHJcblxyXG4vKipcclxuICpcclxuICogVG9nZ2xlIGJldHdlZW4gM2QgYW5kIDJkIG1hcC5cclxuICogQG1lbWJlcm9mIG1hcFN0YXRlQWN0aW9uc1xyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7dG9nZ2xlUGVyc3BlY3RpdmV9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVQZXJzcGVjdGl2ZSgpKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVQZXJzcGVjdGl2ZSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5UT0dHTEVfUEVSU1BFQ1RJVkUpO1xyXG5cclxuLyoqXHJcbiAqIEZpdCBtYXAgdmlld3BvcnQgdG8gYm91bmRzXHJcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBib3VuZHMgYXMgYFtsbmdNaW4sIGxhdE1pbiwgbG5nTWF4LCBsYXRNYXhdYFxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7Zml0Qm91bmRzfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2goZml0Qm91bmRzKFstMTIyLjIzLCAzNy4xMjcsIC0xMjIuMTEsIDM3LjQ1Nl0pKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaXRCb3VuZHMgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuRklUX0JPVU5EUywgYm91bmRzID0+IGJvdW5kcyk7XHJcblxyXG4vKipcclxuICogVXBkYXRlIG1hcCB2aWV3cG9ydFxyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3cG9ydCB2aWV3cG9ydCBvYmplY3QgY29udGFpbmVyIG9uZSBvciBhbnkgb2YgdGhlc2UgcHJvcGVydGllcyBgd2lkdGhgLCBgaGVpZ2h0YCwgYGxhdGl0dWRlYCBgbG9uZ2l0dWRlYCwgYHpvb21gLCBgcGl0Y2hgLCBgYmVhcmluZ2AsIGBkcmFnUm90YXRlYFxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LndpZHRoXSBXaWR0aCBvZiB2aWV3cG9ydFxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LmhlaWdodF0gSGVpZ2h0IG9mIHZpZXdwb3J0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdmlld3BvcnQuem9vbV0gWm9vbSBvZiB2aWV3cG9ydFxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LnBpdGNoXSBDYW1lcmEgYW5nbGUgaW4gZGVncmVlcyAoMCBpcyBzdHJhaWdodCBkb3duKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LmJlYXJpbmddIE1hcCByb3RhdGlvbiBpbiBkZWdyZWVzICgwIG1lYW5zIG5vcnRoIGlzIHVwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LmxhdGl0dWRlXSBMYXRpdHVkZSBjZW50ZXIgb2Ygdmlld3BvcnQgb24gbWFwIGluIG1lcmNhdG9yIHByb2plY3Rpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IFt2aWV3cG9ydC5sb25naXR1ZGVdIExvbmdpdHVkZSBDZW50ZXIgb2Ygdmlld3BvcnQgb24gbWFwIGluIG1lcmNhdG9yIHByb2plY3Rpb25cclxuICogQHBhcmFtIHtib29sZWFufSBbdmlld3BvcnQuZHJhZ1JvdGF0ZV0gV2hldGhlciB0byBlbmFibGUgZHJhZyBhbmQgcm90YXRlIG1hcCBpbnRvIHBlcnNwZWN0aXZlIHZpZXdwb3J0XHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICogaW1wb3J0IHt1cGRhdGVNYXB9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVNYXAoe2xhdGl0dWRlOiAzNy43NTA0MywgbG9uZ2l0dWRlOiAtMTIyLjM0Njc5LCB3aWR0aDogODAwLCBoZWlnaHQ6IDEyMDB9KSk7XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1hcCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5VUERBVEVfTUFQLCB2aWV3cG9ydCA9PiB2aWV3cG9ydCk7XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGJldHdlZW4gc2luZ2xlIG1hcCBvciBzcGxpdCBtYXBzXHJcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF0gaW5kZXggaXMgcHJvdmlkZWQsIGNsb3NlIHNwbGl0IG1hcCBhdCBpbmRleFxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7dG9nZ2xlU3BsaXRNYXB9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTcGxpdE1hcCgpKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5UT0dHTEVfU1BMSVRfTUFQLCBpbmRleCA9PiBpbmRleCk7XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXHJcbiAqL1xyXG4vKipcclxuICogQWN0aW9ucyBoYW5kbGVkIG1vc3RseSBieSAgYG1hcFN0YXRlYCByZWR1Y2VyLlxyXG4gKiBUaGV5IG1hbmFnZSBtYXAgdmlld3BvcnQgdXBkYXRlLCB0b2dnbGUgYmV0d2VlbiAyZCBhbmQgM2QgbWFwLFxyXG4gKiB0b2dnbGUgYmV0d2VlbiBzaW5nbGUgYW5kIHNwbGl0IG1hcHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IG1hcFN0YXRlQWN0aW9ucyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuIl19