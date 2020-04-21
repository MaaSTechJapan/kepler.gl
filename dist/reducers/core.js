"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.providerStateLens = exports.uiStateLens = exports.visStateLens = exports.mapStyleLens = exports.mapStateLens = exports["default"] = exports.coreReducerFactory = void 0;

var _redux = require("redux");

var _visState = require("./vis-state");

var _mapState = require("./map-state");

var _mapStyle = require("./map-style");

var _uiState = require("./ui-state");

var _providerState = require("./provider-state");

var _composers = _interopRequireDefault(require("./composers"));

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
var combined = function combined() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.combineReducers)({
    visState: (0, _visState.visStateReducerFactory)(initialState.visState),
    mapState: (0, _mapState.mapStateReducerFactory)(initialState.mapState),
    mapStyle: (0, _mapStyle.mapStyleReducerFactory)(initialState.mapStyle),
    uiState: (0, _uiState.uiStateReducerFactory)(initialState.uiState),
    providerState: (0, _providerState.providerStateReducerFactory)(initialState.providerState)
  });
};

var coreReducerFactory = function coreReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (state, action) {
    if (_composers["default"][action.type]) {
      return _composers["default"][action.type](state, action);
    }

    return combined(initialState)(state, action);
  };
};

exports.coreReducerFactory = coreReducerFactory;

var _default = coreReducerFactory();
/**
 * Connect subreducer `mapState`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports["default"] = _default;

var mapStateLens = function mapStateLens(reduxState) {
  return {
    mapState: reduxState.mapState
  };
};
/**
 * Connect subreducer `mapStyle`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports.mapStateLens = mapStateLens;

var mapStyleLens = function mapStyleLens(reduxState) {
  return {
    mapStyle: reduxState.mapStyle
  };
};
/**
 * Connect subreducer `visState`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports.mapStyleLens = mapStyleLens;

var visStateLens = function visStateLens(reduxState) {
  return {
    visState: reduxState.visState
  };
};
/**
 * Connect subreducer `uiState`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports.visStateLens = visStateLens;

var uiStateLens = function uiStateLens(reduxState) {
  return {
    uiState: reduxState.uiState
  };
};
/**
 * Connect subreducer `providerState`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports.uiStateLens = uiStateLens;

var providerStateLens = function providerStateLens(reduxState) {
  return {
    providerState: reduxState.providerState
  };
};

exports.providerStateLens = providerStateLens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb3JlLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVkIiwiaW5pdGlhbFN0YXRlIiwidmlzU3RhdGUiLCJtYXBTdGF0ZSIsIm1hcFN0eWxlIiwidWlTdGF0ZSIsInByb3ZpZGVyU3RhdGUiLCJjb3JlUmVkdWNlckZhY3RvcnkiLCJzdGF0ZSIsImFjdGlvbiIsImNvbXBvc2VycyIsInR5cGUiLCJtYXBTdGF0ZUxlbnMiLCJyZWR1eFN0YXRlIiwibWFwU3R5bGVMZW5zIiwidmlzU3RhdGVMZW5zIiwidWlTdGF0ZUxlbnMiLCJwcm92aWRlclN0YXRlTGVucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQTVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBQ0MsWUFBRCx1RUFBZ0IsRUFBaEI7QUFBQSxTQUNmLDRCQUFnQjtBQUNkQyxJQUFBQSxRQUFRLEVBQUUsc0NBQXVCRCxZQUFZLENBQUNDLFFBQXBDLENBREk7QUFFZEMsSUFBQUEsUUFBUSxFQUFFLHNDQUF1QkYsWUFBWSxDQUFDRSxRQUFwQyxDQUZJO0FBR2RDLElBQUFBLFFBQVEsRUFBRSxzQ0FBdUJILFlBQVksQ0FBQ0csUUFBcEMsQ0FISTtBQUlkQyxJQUFBQSxPQUFPLEVBQUUsb0NBQXNCSixZQUFZLENBQUNJLE9BQW5DLENBSks7QUFLZEMsSUFBQUEsYUFBYSxFQUFFLGdEQUE0QkwsWUFBWSxDQUFDSyxhQUF6QztBQUxELEdBQWhCLENBRGU7QUFBQSxDQUFqQjs7QUFTTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBQ04sWUFBRCx1RUFBZ0IsRUFBaEI7QUFBQSxTQUF1QixVQUFDTyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDMUUsUUFBSUMsc0JBQVVELE1BQU0sQ0FBQ0UsSUFBakIsQ0FBSixFQUE0QjtBQUMxQixhQUFPRCxzQkFBVUQsTUFBTSxDQUFDRSxJQUFqQixFQUF1QkgsS0FBdkIsRUFBOEJDLE1BQTlCLENBQVA7QUFDRDs7QUFDRCxXQUFPVCxRQUFRLENBQUNDLFlBQUQsQ0FBUixDQUF1Qk8sS0FBdkIsRUFBOEJDLE1BQTlCLENBQVA7QUFDRCxHQUxpQztBQUFBLENBQTNCOzs7O2VBT1FGLGtCQUFrQixFO0FBRWpDOzs7Ozs7Ozs7OztBQU9PLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLFVBQVU7QUFBQSxTQUFLO0FBQUNWLElBQUFBLFFBQVEsRUFBRVUsVUFBVSxDQUFDVjtBQUF0QixHQUFMO0FBQUEsQ0FBL0I7QUFFUDs7Ozs7Ozs7Ozs7QUFPTyxJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBRCxVQUFVO0FBQUEsU0FBSztBQUFDVCxJQUFBQSxRQUFRLEVBQUVTLFVBQVUsQ0FBQ1Q7QUFBdEIsR0FBTDtBQUFBLENBQS9CO0FBRVA7Ozs7Ozs7Ozs7O0FBT08sSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUYsVUFBVTtBQUFBLFNBQUs7QUFBQ1gsSUFBQUEsUUFBUSxFQUFFVyxVQUFVLENBQUNYO0FBQXRCLEdBQUw7QUFBQSxDQUEvQjtBQUVQOzs7Ozs7Ozs7OztBQU9PLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFILFVBQVU7QUFBQSxTQUFLO0FBQUNSLElBQUFBLE9BQU8sRUFBRVEsVUFBVSxDQUFDUjtBQUFyQixHQUFMO0FBQUEsQ0FBOUI7QUFFUDs7Ozs7Ozs7Ozs7QUFPTyxJQUFNWSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFKLFVBQVU7QUFBQSxTQUFLO0FBQUNQLElBQUFBLGFBQWEsRUFBRU8sVUFBVSxDQUFDUDtBQUEzQixHQUFMO0FBQUEsQ0FBcEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHt2aXNTdGF0ZVJlZHVjZXJGYWN0b3J5fSBmcm9tICcuL3Zpcy1zdGF0ZSc7XHJcbmltcG9ydCB7bWFwU3RhdGVSZWR1Y2VyRmFjdG9yeX0gZnJvbSAnLi9tYXAtc3RhdGUnO1xyXG5pbXBvcnQge21hcFN0eWxlUmVkdWNlckZhY3Rvcnl9IGZyb20gJy4vbWFwLXN0eWxlJztcclxuaW1wb3J0IHt1aVN0YXRlUmVkdWNlckZhY3Rvcnl9IGZyb20gJy4vdWktc3RhdGUnO1xyXG5pbXBvcnQge3Byb3ZpZGVyU3RhdGVSZWR1Y2VyRmFjdG9yeX0gZnJvbSAnLi9wcm92aWRlci1zdGF0ZSc7XHJcblxyXG5pbXBvcnQgY29tcG9zZXJzIGZyb20gJy4vY29tcG9zZXJzJztcclxuXHJcbmNvbnN0IGNvbWJpbmVkID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PlxyXG4gIGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICB2aXNTdGF0ZTogdmlzU3RhdGVSZWR1Y2VyRmFjdG9yeShpbml0aWFsU3RhdGUudmlzU3RhdGUpLFxyXG4gICAgbWFwU3RhdGU6IG1hcFN0YXRlUmVkdWNlckZhY3RvcnkoaW5pdGlhbFN0YXRlLm1hcFN0YXRlKSxcclxuICAgIG1hcFN0eWxlOiBtYXBTdHlsZVJlZHVjZXJGYWN0b3J5KGluaXRpYWxTdGF0ZS5tYXBTdHlsZSksXHJcbiAgICB1aVN0YXRlOiB1aVN0YXRlUmVkdWNlckZhY3RvcnkoaW5pdGlhbFN0YXRlLnVpU3RhdGUpLFxyXG4gICAgcHJvdmlkZXJTdGF0ZTogcHJvdmlkZXJTdGF0ZVJlZHVjZXJGYWN0b3J5KGluaXRpYWxTdGF0ZS5wcm92aWRlclN0YXRlKVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvcmVSZWR1Y2VyRmFjdG9yeSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT4gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoY29tcG9zZXJzW2FjdGlvbi50eXBlXSkge1xyXG4gICAgcmV0dXJuIGNvbXBvc2Vyc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbik7XHJcbiAgfVxyXG4gIHJldHVybiBjb21iaW5lZChpbml0aWFsU3RhdGUpKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29yZVJlZHVjZXJGYWN0b3J5KCk7XHJcblxyXG4vKipcclxuICogQ29ubmVjdCBzdWJyZWR1Y2VyIGBtYXBTdGF0ZWAsIHVzZWQgd2l0aCBgaW5qZWN0Q29tcG9uZW50c2AuIExlYXJuIG1vcmUgYXRcclxuICogW1JlcGxhY2UgVUkgQ29tcG9uZW50XSguLi9hZHZhbmNlZC11c2FnZXMvcmVwbGFjZS11aS1jb21wb25lbnQubWQjcGFzcy1jdXN0b20tY29tcG9uZW50LXByb3BzKVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHJlZHV4U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlTGVucyA9IHJlZHV4U3RhdGUgPT4gKHttYXBTdGF0ZTogcmVkdXhTdGF0ZS5tYXBTdGF0ZX0pO1xyXG5cclxuLyoqXHJcbiAqIENvbm5lY3Qgc3VicmVkdWNlciBgbWFwU3R5bGVgLCB1c2VkIHdpdGggYGluamVjdENvbXBvbmVudHNgLiBMZWFybiBtb3JlIGF0XHJcbiAqIFtSZXBsYWNlIFVJIENvbXBvbmVudF0oLi4vYWR2YW5jZWQtdXNhZ2VzL3JlcGxhY2UtdWktY29tcG9uZW50Lm1kI3Bhc3MtY3VzdG9tLWNvbXBvbmVudC1wcm9wcylcclxuICpcclxuICogQHBhcmFtIHsqfSByZWR1eFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBtYXBTdHlsZUxlbnMgPSByZWR1eFN0YXRlID0+ICh7bWFwU3R5bGU6IHJlZHV4U3RhdGUubWFwU3R5bGV9KTtcclxuXHJcbi8qKlxyXG4gKiBDb25uZWN0IHN1YnJlZHVjZXIgYHZpc1N0YXRlYCwgdXNlZCB3aXRoIGBpbmplY3RDb21wb25lbnRzYC4gTGVhcm4gbW9yZSBhdFxyXG4gKiBbUmVwbGFjZSBVSSBDb21wb25lbnRdKC4uL2FkdmFuY2VkLXVzYWdlcy9yZXBsYWNlLXVpLWNvbXBvbmVudC5tZCNwYXNzLWN1c3RvbS1jb21wb25lbnQtcHJvcHMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcmVkdXhTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdmlzU3RhdGVMZW5zID0gcmVkdXhTdGF0ZSA9PiAoe3Zpc1N0YXRlOiByZWR1eFN0YXRlLnZpc1N0YXRlfSk7XHJcblxyXG4vKipcclxuICogQ29ubmVjdCBzdWJyZWR1Y2VyIGB1aVN0YXRlYCwgdXNlZCB3aXRoIGBpbmplY3RDb21wb25lbnRzYC4gTGVhcm4gbW9yZSBhdFxyXG4gKiBbUmVwbGFjZSBVSSBDb21wb25lbnRdKC4uL2FkdmFuY2VkLXVzYWdlcy9yZXBsYWNlLXVpLWNvbXBvbmVudC5tZCNwYXNzLWN1c3RvbS1jb21wb25lbnQtcHJvcHMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcmVkdXhTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdWlTdGF0ZUxlbnMgPSByZWR1eFN0YXRlID0+ICh7dWlTdGF0ZTogcmVkdXhTdGF0ZS51aVN0YXRlfSk7XHJcblxyXG4vKipcclxuICogQ29ubmVjdCBzdWJyZWR1Y2VyIGBwcm92aWRlclN0YXRlYCwgdXNlZCB3aXRoIGBpbmplY3RDb21wb25lbnRzYC4gTGVhcm4gbW9yZSBhdFxyXG4gKiBbUmVwbGFjZSBVSSBDb21wb25lbnRdKC4uL2FkdmFuY2VkLXVzYWdlcy9yZXBsYWNlLXVpLWNvbXBvbmVudC5tZCNwYXNzLWN1c3RvbS1jb21wb25lbnQtcHJvcHMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcmVkdXhTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcHJvdmlkZXJTdGF0ZUxlbnMgPSByZWR1eFN0YXRlID0+ICh7cHJvdmlkZXJTdGF0ZTogcmVkdXhTdGF0ZS5wcm92aWRlclN0YXRlfSk7XHJcbiJdfQ==