"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameEntry = exports.deleteEntry = exports.registerEntry = void 0;

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
 * Add a new kepler.gl instance in `keplerGlReducer`. This action is called under-the-hood when a `KeplerGl` component is **mounted** to the dom.
 * Note that if you dispatch actions such as adding data to a kepler.gl instance before the React component is mounted, the action will not be
 * performed. Instance reducer can only handle actions when it is instantiated.
 * @memberof rootActions
 * @param {Object} payload
 * @param {string} payload.id - ***required** The id of the instance
 * @param {boolean} payload.mint - Whether to use a fresh empty state, when `mint: true` it will *always* load a fresh state when the component is re-mounted.
 * When `mint: false` it will register with existing instance state under the same `id`, when the component is unmounted then mounted again. Default: `true`
 * @param {string} payload.mapboxApiAccessToken - mapboxApiAccessToken to be saved in `map-style` reducer.
 * @param {string} payload.mapboxApiUrl - mapboxApiUrl to be saved in `map-style` reducer.
 * @param {Boolean} payload.mapStylesReplaceDefault - mapStylesReplaceDefault to be saved in `map-style` reducer.
 * @public
 */
var registerEntry = (0, _reduxActions.createAction)(_actionTypes["default"].REGISTER_ENTRY, function (_ref) {
  var id = _ref.id,
      mint = _ref.mint,
      mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      mapboxApiUrl = _ref.mapboxApiUrl,
      mapStylesReplaceDefault = _ref.mapStylesReplaceDefault;
  return {
    id: id,
    mint: mint,
    mapboxApiAccessToken: mapboxApiAccessToken,
    mapboxApiUrl: mapboxApiUrl,
    mapStylesReplaceDefault: mapStylesReplaceDefault
  };
});
/**
 *
 * Delete an instance from `keplerGlReducer`. This action is called under-the-hood when a `KeplerGl` component is **un-mounted** to the dom.
 * If `mint` is set to be `true` in the component prop, the instance state will be deleted from the root reducer. Otherwise, the root reducer will keep
 * the instance state and later transfer it to a newly mounted component with the same `id`
 * @memberof rootActions
 * @param {string} id - the id of the instance to be deleted
 * @public
 */

exports.registerEntry = registerEntry;
var deleteEntry = (0, _reduxActions.createAction)(_actionTypes["default"].DELETE_ENTRY, function (id) {
  return id;
});
/**
 *
 * Rename an instance in the root reducer, keep its entire state
 *
 * @memberof rootActions
 * @param {string} oldId - ***required** old id
 * @param {string} newId - ***required** new id
 * @public
 */

exports.deleteEntry = deleteEntry;
var renameEntry = (0, _reduxActions.createAction)(_actionTypes["default"].RENAME_ENTRY, function (oldId, newId) {
  return {
    oldId: oldId,
    newId: newId
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Root actions managers adding and removing instances in root reducer.
 * Under-the-hood, when a `KeplerGl` component is mounted or unmounted,
 * it will automatically calls these actions to add itself to the root reducer.
 * However, sometimes the data is ready before the component is registered in the reducer,
 * in this case, you can manually call these actions or the corresponding updater to add it to the reducer.
 *
 * @public
 */

/* eslint-disable no-unused-vars */

exports.renameEntry = renameEntry;
var rootActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2lkZW50aXR5LWFjdGlvbnMuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJFbnRyeSIsIkFjdGlvblR5cGVzIiwiUkVHSVNURVJfRU5UUlkiLCJpZCIsIm1pbnQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIm1hcGJveEFwaVVybCIsIm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IiwiZGVsZXRlRW50cnkiLCJERUxFVEVfRU5UUlkiLCJyZW5hbWVFbnRyeSIsIlJFTkFNRV9FTlRSWSIsIm9sZElkIiwibmV3SWQiLCJyb290QWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sSUFBTUEsYUFBYSxHQUFHLGdDQUMzQkMsd0JBQVlDLGNBRGUsRUFFM0I7QUFBQSxNQUFFQyxFQUFGLFFBQUVBLEVBQUY7QUFBQSxNQUFNQyxJQUFOLFFBQU1BLElBQU47QUFBQSxNQUFZQyxvQkFBWixRQUFZQSxvQkFBWjtBQUFBLE1BQWtDQyxZQUFsQyxRQUFrQ0EsWUFBbEM7QUFBQSxNQUFnREMsdUJBQWhELFFBQWdEQSx1QkFBaEQ7QUFBQSxTQUE4RTtBQUM1RUosSUFBQUEsRUFBRSxFQUFGQSxFQUQ0RTtBQUU1RUMsSUFBQUEsSUFBSSxFQUFKQSxJQUY0RTtBQUc1RUMsSUFBQUEsb0JBQW9CLEVBQXBCQSxvQkFINEU7QUFJNUVDLElBQUFBLFlBQVksRUFBWkEsWUFKNEU7QUFLNUVDLElBQUFBLHVCQUF1QixFQUF2QkE7QUFMNEUsR0FBOUU7QUFBQSxDQUYyQixDQUF0QjtBQVdQOzs7Ozs7Ozs7OztBQVNPLElBQU1DLFdBQVcsR0FBRyxnQ0FBYVAsd0JBQVlRLFlBQXpCLEVBQXVDLFVBQUFOLEVBQUU7QUFBQSxTQUFJQSxFQUFKO0FBQUEsQ0FBekMsQ0FBcEI7QUFFUDs7Ozs7Ozs7Ozs7QUFTTyxJQUFNTyxXQUFXLEdBQUcsZ0NBQWFULHdCQUFZVSxZQUF6QixFQUF1QyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxTQUFtQjtBQUNuRkQsSUFBQUEsS0FBSyxFQUFMQSxLQURtRjtBQUVuRkMsSUFBQUEsS0FBSyxFQUFMQTtBQUZtRixHQUFuQjtBQUFBLENBQXZDLENBQXBCO0FBS1A7Ozs7QUFHQTs7Ozs7Ozs7OztBQVNBOzs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBcEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcclxuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEFkZCBhIG5ldyBrZXBsZXIuZ2wgaW5zdGFuY2UgaW4gYGtlcGxlckdsUmVkdWNlcmAuIFRoaXMgYWN0aW9uIGlzIGNhbGxlZCB1bmRlci10aGUtaG9vZCB3aGVuIGEgYEtlcGxlckdsYCBjb21wb25lbnQgaXMgKiptb3VudGVkKiogdG8gdGhlIGRvbS5cclxuICogTm90ZSB0aGF0IGlmIHlvdSBkaXNwYXRjaCBhY3Rpb25zIHN1Y2ggYXMgYWRkaW5nIGRhdGEgdG8gYSBrZXBsZXIuZ2wgaW5zdGFuY2UgYmVmb3JlIHRoZSBSZWFjdCBjb21wb25lbnQgaXMgbW91bnRlZCwgdGhlIGFjdGlvbiB3aWxsIG5vdCBiZVxyXG4gKiBwZXJmb3JtZWQuIEluc3RhbmNlIHJlZHVjZXIgY2FuIG9ubHkgaGFuZGxlIGFjdGlvbnMgd2hlbiBpdCBpcyBpbnN0YW50aWF0ZWQuXHJcbiAqIEBtZW1iZXJvZiByb290QWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZC5pZCAtICoqKnJlcXVpcmVkKiogVGhlIGlkIG9mIHRoZSBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBheWxvYWQubWludCAtIFdoZXRoZXIgdG8gdXNlIGEgZnJlc2ggZW1wdHkgc3RhdGUsIHdoZW4gYG1pbnQ6IHRydWVgIGl0IHdpbGwgKmFsd2F5cyogbG9hZCBhIGZyZXNoIHN0YXRlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZS1tb3VudGVkLlxyXG4gKiBXaGVuIGBtaW50OiBmYWxzZWAgaXQgd2lsbCByZWdpc3RlciB3aXRoIGV4aXN0aW5nIGluc3RhbmNlIHN0YXRlIHVuZGVyIHRoZSBzYW1lIGBpZGAsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQgdGhlbiBtb3VudGVkIGFnYWluLiBEZWZhdWx0OiBgdHJ1ZWBcclxuICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQubWFwYm94QXBpQWNjZXNzVG9rZW4gLSBtYXBib3hBcGlBY2Nlc3NUb2tlbiB0byBiZSBzYXZlZCBpbiBgbWFwLXN0eWxlYCByZWR1Y2VyLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZC5tYXBib3hBcGlVcmwgLSBtYXBib3hBcGlVcmwgdG8gYmUgc2F2ZWQgaW4gYG1hcC1zdHlsZWAgcmVkdWNlci5cclxuICogQHBhcmFtIHtCb29sZWFufSBwYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IC0gbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgdG8gYmUgc2F2ZWQgaW4gYG1hcC1zdHlsZWAgcmVkdWNlci5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyRW50cnkgPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuUkVHSVNURVJfRU5UUlksXHJcbiAgKHtpZCwgbWludCwgbWFwYm94QXBpQWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybCwgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHR9KSA9PiAoe1xyXG4gICAgaWQsXHJcbiAgICBtaW50LFxyXG4gICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICBtYXBib3hBcGlVcmwsXHJcbiAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdFxyXG4gIH0pXHJcbik7XHJcblxyXG4vKipcclxuICpcclxuICogRGVsZXRlIGFuIGluc3RhbmNlIGZyb20gYGtlcGxlckdsUmVkdWNlcmAuIFRoaXMgYWN0aW9uIGlzIGNhbGxlZCB1bmRlci10aGUtaG9vZCB3aGVuIGEgYEtlcGxlckdsYCBjb21wb25lbnQgaXMgKip1bi1tb3VudGVkKiogdG8gdGhlIGRvbS5cclxuICogSWYgYG1pbnRgIGlzIHNldCB0byBiZSBgdHJ1ZWAgaW4gdGhlIGNvbXBvbmVudCBwcm9wLCB0aGUgaW5zdGFuY2Ugc3RhdGUgd2lsbCBiZSBkZWxldGVkIGZyb20gdGhlIHJvb3QgcmVkdWNlci4gT3RoZXJ3aXNlLCB0aGUgcm9vdCByZWR1Y2VyIHdpbGwga2VlcFxyXG4gKiB0aGUgaW5zdGFuY2Ugc3RhdGUgYW5kIGxhdGVyIHRyYW5zZmVyIGl0IHRvIGEgbmV3bHkgbW91bnRlZCBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBgaWRgXHJcbiAqIEBtZW1iZXJvZiByb290QWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgaWQgb2YgdGhlIGluc3RhbmNlIHRvIGJlIGRlbGV0ZWRcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUVudHJ5ID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLkRFTEVURV9FTlRSWSwgaWQgPT4gaWQpO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIFJlbmFtZSBhbiBpbnN0YW5jZSBpbiB0aGUgcm9vdCByZWR1Y2VyLCBrZWVwIGl0cyBlbnRpcmUgc3RhdGVcclxuICpcclxuICogQG1lbWJlcm9mIHJvb3RBY3Rpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvbGRJZCAtICoqKnJlcXVpcmVkKiogb2xkIGlkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdJZCAtICoqKnJlcXVpcmVkKiogbmV3IGlkXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZW5hbWVFbnRyeSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5SRU5BTUVfRU5UUlksIChvbGRJZCwgbmV3SWQpID0+ICh7XHJcbiAgb2xkSWQsXHJcbiAgbmV3SWRcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGVjbGFyYXRpb24gaXMgbmVlZGVkIHRvIGdyb3VwIGFjdGlvbnMgaW4gZG9jc1xyXG4gKi9cclxuLyoqXHJcbiAqIFJvb3QgYWN0aW9ucyBtYW5hZ2VycyBhZGRpbmcgYW5kIHJlbW92aW5nIGluc3RhbmNlcyBpbiByb290IHJlZHVjZXIuXHJcbiAqIFVuZGVyLXRoZS1ob29kLCB3aGVuIGEgYEtlcGxlckdsYCBjb21wb25lbnQgaXMgbW91bnRlZCBvciB1bm1vdW50ZWQsXHJcbiAqIGl0IHdpbGwgYXV0b21hdGljYWxseSBjYWxscyB0aGVzZSBhY3Rpb25zIHRvIGFkZCBpdHNlbGYgdG8gdGhlIHJvb3QgcmVkdWNlci5cclxuICogSG93ZXZlciwgc29tZXRpbWVzIHRoZSBkYXRhIGlzIHJlYWR5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgaW4gdGhlIHJlZHVjZXIsXHJcbiAqIGluIHRoaXMgY2FzZSwgeW91IGNhbiBtYW51YWxseSBjYWxsIHRoZXNlIGFjdGlvbnMgb3IgdGhlIGNvcnJlc3BvbmRpbmcgdXBkYXRlciB0byBhZGQgaXQgdG8gdGhlIHJlZHVjZXIuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IHJvb3RBY3Rpb25zID0gbnVsbDtcclxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4iXX0=