"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideInitialState = provideInitialState;
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxActions = require("redux-actions");

var _actionWrapper = require("../actions/action-wrapper");

var _actions = require("../actions/actions");

var _core = require("./core");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// INITIAL_STATE
var initialCoreState = {};

function provideInitialState(initialState) {
  var coreReducer = (0, _core.coreReducerFactory)(initialState);

  var handleRegisterEntry = function handleRegisterEntry(state, _ref) {
    var _ref$payload = _ref.payload,
        id = _ref$payload.id,
        mint = _ref$payload.mint,
        mapboxApiAccessToken = _ref$payload.mapboxApiAccessToken,
        mapboxApiUrl = _ref$payload.mapboxApiUrl,
        mapStylesReplaceDefault = _ref$payload.mapStylesReplaceDefault;
    // by default, always create a mint state even if the same id already exist
    // if state.id exist and mint=false, keep the existing state
    var previousState = state[id] && mint === false ? state[id] : undefined;
    return _objectSpread({}, state, (0, _defineProperty2["default"])({}, id, coreReducer(previousState, (0, _actions.keplerGlInit)({
      mapboxApiAccessToken: mapboxApiAccessToken,
      mapboxApiUrl: mapboxApiUrl,
      mapStylesReplaceDefault: mapStylesReplaceDefault
    }))));
  };

  var handleDeleteEntry = function handleDeleteEntry(state, _ref2) {
    var id = _ref2.payload;
    return Object.keys(state).reduce(function (accu, curr) {
      return _objectSpread({}, accu, {}, curr === id ? {} : (0, _defineProperty2["default"])({}, curr, state[curr]));
    }, {});
  };

  var handleRenameEntry = function handleRenameEntry(state, _ref4) {
    var _ref4$payload = _ref4.payload,
        oldId = _ref4$payload.oldId,
        newId = _ref4$payload.newId;
    return Object.keys(state).reduce(function (accu, curr) {
      return _objectSpread({}, accu, {}, (0, _defineProperty2["default"])({}, curr === oldId ? newId : curr, state[curr]));
    }, {});
  };

  return function () {
    var _handleActions;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCoreState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // update child states
    Object.keys(state).forEach(function (id) {
      var updateItemState = coreReducer(state[id], (0, _actionWrapper._actionFor)(id, action));
      state = (0, _actionWrapper._updateProperty)(state, id, updateItemState);
    }); // perform additional state reducing (e.g. switch action.type etc...)

    return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty2["default"])(_handleActions, _actionTypes["default"].REGISTER_ENTRY, handleRegisterEntry), (0, _defineProperty2["default"])(_handleActions, _actionTypes["default"].DELETE_ENTRY, handleDeleteEntry), (0, _defineProperty2["default"])(_handleActions, _actionTypes["default"].RENAME_ENTRY, handleRenameEntry), _handleActions), initialCoreState)(state, action);
  };
}

var _keplerGlReducer = provideInitialState();

function mergeInitialState() {
  var saved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var provided = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = ['mapState', 'mapStyle', 'visState', 'uiState']; // shallow merge each reducer

  return keys.reduce(function (accu, key) {
    return _objectSpread({}, accu, {}, saved[key] && provided[key] ? (0, _defineProperty2["default"])({}, key, _objectSpread({}, saved[key], {}, provided[key])) : (0, _defineProperty2["default"])({}, key, saved[key] || provided[key] || {}));
  }, {});
}

function decorate(target) {
  var savedInitialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var targetInitialState = savedInitialState;
  /**
   * Returns a kepler.gl reducer that will also pass each action through additional reducers spiecified.
   * The parameter should be either a reducer map or a reducer function.
   * The state passed into the additional action handler is the instance state.
   * It will include all the subreducers `visState`, `uiState`, `mapState` and `mapStyle`.
   * `.plugin` is only meant to be called once when mounting the keplerGlReducer to the store.
   * **Note** This is an advanced option to give you more freedom to modify the internal state of the kepler.gl instance.
   * You should only use this to adding additional actions instead of replacing default actions.
   *
   * @mixin keplerGlReducer.plugin
   * @memberof keplerGlReducer
   * @param {Object|Function} customReducer - A reducer map or a reducer
   * @public
   * @example
   * const myKeplerGlReducer = keplerGlReducer
   *  .plugin({
   *    // 1. as reducer map
   *    HIDE_AND_SHOW_SIDE_PANEL: (state, action) => ({
   *      ...state,
   *      uiState: {
   *        ...state.uiState,
   *        readOnly: !state.uiState.readOnly
   *      }
   *    })
   *  })
   * .plugin(handleActions({
   *   // 2. as reducer
   *   'HIDE_MAP_CONTROLS': (state, action) => ({
   *     ...state,
   *     uiState: {
   *       ...state.uiState,
   *       mapControls: hiddenMapControl
   *     }
   *   })
   * }, {}));
   */

  target.plugin = function plugin(customReducer) {
    var _this = this;

    if ((0, _typeof2["default"])(customReducer) === 'object') {
      // if only provided a reducerMap, wrap it in a reducer
      customReducer = (0, _reduxActions.handleActions)(customReducer, {});
    } // use 'function' keyword to enable 'this'


    return decorate(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var nextState = _this(state, action); // for each entry in the staten


      Object.keys(nextState).forEach(function (id) {
        // update child states
        nextState = (0, _actionWrapper._updateProperty)(nextState, id, customReducer(nextState[id], (0, _actionWrapper._actionFor)(id, action)));
      });
      return nextState;
    });
  };
  /**
   * Return a reducer that initiated with custom initial state.
   * The parameter should be an object mapping from `subreducer` name to custom subreducer state,
   * which will be shallow **merged** with default initial state.
   *
   * Default subreducer state:
   *  - [`visState`](./vis-state.md#INITIAL_VIS_STATE)
   *  - [`mapState`](./map-state.md#INITIAL_MAP_STATE)
   *  - [`mapStyle`](./map-style.md#INITIAL_MAP_STYLE)
   *  - [`uiState`](./ui-state.md#INITIAL_UI_STATE)
   * @mixin keplerGlReducer.initialState
   * @memberof keplerGlReducer
   * @param {Object} iniSt - custom state to be merged with default initial state
   * @public
   * @example
   * const myKeplerGlReducer = keplerGlReducer
   *  .initialState({
   *    uiState: {readOnly: true}
   *  });
   */


  target.initialState = function initialState(iniSt) {
    var merged = mergeInitialState(targetInitialState, iniSt);
    var targetReducer = provideInitialState(merged);
    return decorate(targetReducer, merged);
  };

  return target;
}
/**
 * Kepler.gl reducer to be mounted to your store. You can mount `keplerGlReducer` at property `keplerGl`, if you choose
 * to mount it at another address e.g. `foo` you will need to specify it when you mount `KeplerGl` component in your app with `getState: state => state.foo`
 * @public
 * @example
 * import keplerGlReducer from 'kepler.gl/reducers';
 * import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
 * import {taskMiddleware} from 'react-palm/tasks';
 *
 * const initialState = {};
 * const reducers = combineReducers({
 *   // <-- mount kepler.gl reducer in your app
 *   keplerGl: keplerGlReducer,
 *
 *   // Your other reducers here
 *   app: appReducer
 * });
 *
 * // using createStore
 * export default createStore(reducer, initialState, applyMiddleware(taskMiddleware));
 */


var keplerGlReducer = decorate(_keplerGlReducer);
var _default = keplerGlReducer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yb290LmpzIl0sIm5hbWVzIjpbImluaXRpYWxDb3JlU3RhdGUiLCJwcm92aWRlSW5pdGlhbFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiY29yZVJlZHVjZXIiLCJoYW5kbGVSZWdpc3RlckVudHJ5Iiwic3RhdGUiLCJwYXlsb2FkIiwiaWQiLCJtaW50IiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCIsInByZXZpb3VzU3RhdGUiLCJ1bmRlZmluZWQiLCJoYW5kbGVEZWxldGVFbnRyeSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1IiwiY3VyciIsImhhbmRsZVJlbmFtZUVudHJ5Iiwib2xkSWQiLCJuZXdJZCIsImFjdGlvbiIsImZvckVhY2giLCJ1cGRhdGVJdGVtU3RhdGUiLCJBY3Rpb25UeXBlcyIsIlJFR0lTVEVSX0VOVFJZIiwiREVMRVRFX0VOVFJZIiwiUkVOQU1FX0VOVFJZIiwiX2tlcGxlckdsUmVkdWNlciIsIm1lcmdlSW5pdGlhbFN0YXRlIiwic2F2ZWQiLCJwcm92aWRlZCIsImtleSIsImRlY29yYXRlIiwidGFyZ2V0Iiwic2F2ZWRJbml0aWFsU3RhdGUiLCJ0YXJnZXRJbml0aWFsU3RhdGUiLCJwbHVnaW4iLCJjdXN0b21SZWR1Y2VyIiwibmV4dFN0YXRlIiwiaW5pU3QiLCJtZXJnZWQiLCJ0YXJnZXRSZWR1Y2VyIiwia2VwbGVyR2xSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFFTyxTQUFTQyxtQkFBVCxDQUE2QkMsWUFBN0IsRUFBMkM7QUFDaEQsTUFBTUMsV0FBVyxHQUFHLDhCQUFtQkQsWUFBbkIsQ0FBcEI7O0FBRUEsTUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUMx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QUErQixVQUFBakIsRUFBRSxFQUFJO0FBQ25DO0FBQ0FrQyxRQUFBQSxTQUFTLEdBQUcsb0NBQ1ZBLFNBRFUsRUFFVmxDLEVBRlUsRUFHVmlDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDbEMsRUFBRCxDQUFWLEVBQWdCLCtCQUFXQSxFQUFYLEVBQWVnQixNQUFmLENBQWhCLENBSEgsQ0FBWjtBQUtELE9BUEQ7QUFTQSxhQUFPa0IsU0FBUDtBQUNELEtBZGMsQ0FBZjtBQWVELEdBdEJEO0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBTCxFQUFBQSxNQUFNLENBQUNsQyxZQUFQLEdBQXNCLFNBQVNBLFlBQVQsQ0FBc0J3QyxLQUF0QixFQUE2QjtBQUNqRCxRQUFNQyxNQUFNLEdBQUdaLGlCQUFpQixDQUFDTyxrQkFBRCxFQUFxQkksS0FBckIsQ0FBaEM7QUFDQSxRQUFNRSxhQUFhLEdBQUczQyxtQkFBbUIsQ0FBQzBDLE1BQUQsQ0FBekM7QUFFQSxXQUFPUixRQUFRLENBQUNTLGFBQUQsRUFBZ0JELE1BQWhCLENBQWY7QUFDRCxHQUxEOztBQU9BLFNBQU9QLE1BQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxJQUFNUyxlQUFlLEdBQUdWLFFBQVEsQ0FBQ0wsZ0JBQUQsQ0FBaEM7ZUFDZWUsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQge19hY3Rpb25Gb3IsIF91cGRhdGVQcm9wZXJ0eX0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24td3JhcHBlcic7XHJcbmltcG9ydCB7a2VwbGVyR2xJbml0fSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMnO1xyXG5pbXBvcnQge2NvcmVSZWR1Y2VyRmFjdG9yeX0gZnJvbSAnLi9jb3JlJztcclxuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xyXG5cclxuLy8gSU5JVElBTF9TVEFURVxyXG5jb25zdCBpbml0aWFsQ29yZVN0YXRlID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBjb3JlUmVkdWNlciA9IGNvcmVSZWR1Y2VyRmFjdG9yeShpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWdpc3RlckVudHJ5ID0gKFxyXG4gICAgc3RhdGUsXHJcbiAgICB7cGF5bG9hZDoge2lkLCBtaW50LCBtYXBib3hBcGlBY2Nlc3NUb2tlbiwgbWFwYm94QXBpVXJsLCBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdH19XHJcbiAgKSA9PiB7XHJcbiAgICAvLyBieSBkZWZhdWx0LCBhbHdheXMgY3JlYXRlIGEgbWludCBzdGF0ZSBldmVuIGlmIHRoZSBzYW1lIGlkIGFscmVhZHkgZXhpc3RcclxuICAgIC8vIGlmIHN0YXRlLmlkIGV4aXN0IGFuZCBtaW50PWZhbHNlLCBrZWVwIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHN0YXRlW2lkXSAmJiBtaW50ID09PSBmYWxzZSA/IHN0YXRlW2lkXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyByZWdpc3RlciBlbnRyeSB0byBrZXBsZXIuZ2wgcGFzc2luZyBpbiBtYXBib3ggY29uZmlnIHRvIG1hcFN0eWxlXHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbaWRdOiBjb3JlUmVkdWNlcihcclxuICAgICAgICBwcmV2aW91c1N0YXRlLFxyXG4gICAgICAgIGtlcGxlckdsSW5pdCh7bWFwYm94QXBpQWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybCwgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHR9KVxyXG4gICAgICApXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUVudHJ5ID0gKHN0YXRlLCB7cGF5bG9hZDogaWR9KSA9PlxyXG4gICAgT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZShcclxuICAgICAgKGFjY3UsIGN1cnIpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAuLi4oY3VyciA9PT0gaWQgPyB7fSA6IHtbY3Vycl06IHN0YXRlW2N1cnJdfSlcclxuICAgICAgfSksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW5hbWVFbnRyeSA9IChzdGF0ZSwge3BheWxvYWQ6IHtvbGRJZCwgbmV3SWR9fSkgPT5cclxuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBjdXJyKSA9PiAoe1xyXG4gICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgLi4ue1tjdXJyID09PSBvbGRJZCA/IG5ld0lkIDogY3Vycl06IHN0YXRlW2N1cnJdfVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gIHJldHVybiAoc3RhdGUgPSBpbml0aWFsQ29yZVN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIC8vIHVwZGF0ZSBjaGlsZCBzdGF0ZXNcclxuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlSXRlbVN0YXRlID0gY29yZVJlZHVjZXIoc3RhdGVbaWRdLCBfYWN0aW9uRm9yKGlkLCBhY3Rpb24pKTtcclxuICAgICAgc3RhdGUgPSBfdXBkYXRlUHJvcGVydHkoc3RhdGUsIGlkLCB1cGRhdGVJdGVtU3RhdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGVyZm9ybSBhZGRpdGlvbmFsIHN0YXRlIHJlZHVjaW5nIChlLmcuIHN3aXRjaCBhY3Rpb24udHlwZSBldGMuLi4pXHJcbiAgICByZXR1cm4gaGFuZGxlQWN0aW9ucyhcclxuICAgICAge1xyXG4gICAgICAgIFtBY3Rpb25UeXBlcy5SRUdJU1RFUl9FTlRSWV06IGhhbmRsZVJlZ2lzdGVyRW50cnksXHJcbiAgICAgICAgW0FjdGlvblR5cGVzLkRFTEVURV9FTlRSWV06IGhhbmRsZURlbGV0ZUVudHJ5LFxyXG4gICAgICAgIFtBY3Rpb25UeXBlcy5SRU5BTUVfRU5UUlldOiBoYW5kbGVSZW5hbWVFbnRyeVxyXG4gICAgICB9LFxyXG4gICAgICBpbml0aWFsQ29yZVN0YXRlXHJcbiAgICApKHN0YXRlLCBhY3Rpb24pO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IF9rZXBsZXJHbFJlZHVjZXIgPSBwcm92aWRlSW5pdGlhbFN0YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBtZXJnZUluaXRpYWxTdGF0ZShzYXZlZCA9IHt9LCBwcm92aWRlZCA9IHt9KSB7XHJcbiAgY29uc3Qga2V5cyA9IFsnbWFwU3RhdGUnLCAnbWFwU3R5bGUnLCAndmlzU3RhdGUnLCAndWlTdGF0ZSddO1xyXG5cclxuICAvLyBzaGFsbG93IG1lcmdlIGVhY2ggcmVkdWNlclxyXG4gIHJldHVybiBrZXlzLnJlZHVjZShcclxuICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgIC4uLmFjY3UsXHJcbiAgICAgIC4uLihzYXZlZFtrZXldICYmIHByb3ZpZGVkW2tleV1cclxuICAgICAgICA/IHtba2V5XTogey4uLnNhdmVkW2tleV0sIC4uLnByb3ZpZGVkW2tleV19fVxyXG4gICAgICAgIDoge1trZXldOiBzYXZlZFtrZXldIHx8IHByb3ZpZGVkW2tleV0gfHwge319KVxyXG4gICAgfSksXHJcbiAgICB7fVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY29yYXRlKHRhcmdldCwgc2F2ZWRJbml0aWFsU3RhdGUgPSB7fSkge1xyXG4gIGNvbnN0IHRhcmdldEluaXRpYWxTdGF0ZSA9IHNhdmVkSW5pdGlhbFN0YXRlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEga2VwbGVyLmdsIHJlZHVjZXIgdGhhdCB3aWxsIGFsc28gcGFzcyBlYWNoIGFjdGlvbiB0aHJvdWdoIGFkZGl0aW9uYWwgcmVkdWNlcnMgc3BpZWNpZmllZC5cclxuICAgKiBUaGUgcGFyYW1ldGVyIHNob3VsZCBiZSBlaXRoZXIgYSByZWR1Y2VyIG1hcCBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXHJcbiAgICogVGhlIHN0YXRlIHBhc3NlZCBpbnRvIHRoZSBhZGRpdGlvbmFsIGFjdGlvbiBoYW5kbGVyIGlzIHRoZSBpbnN0YW5jZSBzdGF0ZS5cclxuICAgKiBJdCB3aWxsIGluY2x1ZGUgYWxsIHRoZSBzdWJyZWR1Y2VycyBgdmlzU3RhdGVgLCBgdWlTdGF0ZWAsIGBtYXBTdGF0ZWAgYW5kIGBtYXBTdHlsZWAuXHJcbiAgICogYC5wbHVnaW5gIGlzIG9ubHkgbWVhbnQgdG8gYmUgY2FsbGVkIG9uY2Ugd2hlbiBtb3VudGluZyB0aGUga2VwbGVyR2xSZWR1Y2VyIHRvIHRoZSBzdG9yZS5cclxuICAgKiAqKk5vdGUqKiBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbiB0byBnaXZlIHlvdSBtb3JlIGZyZWVkb20gdG8gbW9kaWZ5IHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUga2VwbGVyLmdsIGluc3RhbmNlLlxyXG4gICAqIFlvdSBzaG91bGQgb25seSB1c2UgdGhpcyB0byBhZGRpbmcgYWRkaXRpb25hbCBhY3Rpb25zIGluc3RlYWQgb2YgcmVwbGFjaW5nIGRlZmF1bHQgYWN0aW9ucy5cclxuICAgKlxyXG4gICAqIEBtaXhpbiBrZXBsZXJHbFJlZHVjZXIucGx1Z2luXHJcbiAgICogQG1lbWJlcm9mIGtlcGxlckdsUmVkdWNlclxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBjdXN0b21SZWR1Y2VyIC0gQSByZWR1Y2VyIG1hcCBvciBhIHJlZHVjZXJcclxuICAgKiBAcHVibGljXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBjb25zdCBteUtlcGxlckdsUmVkdWNlciA9IGtlcGxlckdsUmVkdWNlclxyXG4gICAqICAucGx1Z2luKHtcclxuICAgKiAgICAvLyAxLiBhcyByZWR1Y2VyIG1hcFxyXG4gICAqICAgIEhJREVfQU5EX1NIT1dfU0lERV9QQU5FTDogKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgICogICAgICAuLi5zdGF0ZSxcclxuICAgKiAgICAgIHVpU3RhdGU6IHtcclxuICAgKiAgICAgICAgLi4uc3RhdGUudWlTdGF0ZSxcclxuICAgKiAgICAgICAgcmVhZE9ubHk6ICFzdGF0ZS51aVN0YXRlLnJlYWRPbmx5XHJcbiAgICogICAgICB9XHJcbiAgICogICAgfSlcclxuICAgKiAgfSlcclxuICAgKiAucGx1Z2luKGhhbmRsZUFjdGlvbnMoe1xyXG4gICAqICAgLy8gMi4gYXMgcmVkdWNlclxyXG4gICAqICAgJ0hJREVfTUFQX0NPTlRST0xTJzogKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgICogICAgIC4uLnN0YXRlLFxyXG4gICAqICAgICB1aVN0YXRlOiB7XHJcbiAgICogICAgICAgLi4uc3RhdGUudWlTdGF0ZSxcclxuICAgKiAgICAgICBtYXBDb250cm9sczogaGlkZGVuTWFwQ29udHJvbFxyXG4gICAqICAgICB9XHJcbiAgICogICB9KVxyXG4gICAqIH0sIHt9KSk7XHJcbiAgICovXHJcbiAgdGFyZ2V0LnBsdWdpbiA9IGZ1bmN0aW9uIHBsdWdpbihjdXN0b21SZWR1Y2VyKSB7XHJcbiAgICBpZiAodHlwZW9mIGN1c3RvbVJlZHVjZXIgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8vIGlmIG9ubHkgcHJvdmlkZWQgYSByZWR1Y2VyTWFwLCB3cmFwIGl0IGluIGEgcmVkdWNlclxyXG4gICAgICBjdXN0b21SZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhjdXN0b21SZWR1Y2VyLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlICdmdW5jdGlvbicga2V5d29yZCB0byBlbmFibGUgJ3RoaXMnXHJcbiAgICByZXR1cm4gZGVjb3JhdGUoKHN0YXRlID0ge30sIGFjdGlvbiA9IHt9KSA9PiB7XHJcbiAgICAgIGxldCBuZXh0U3RhdGUgPSB0aGlzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgICAgLy8gZm9yIGVhY2ggZW50cnkgaW4gdGhlIHN0YXRlblxyXG4gICAgICBPYmplY3Qua2V5cyhuZXh0U3RhdGUpLmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCBzdGF0ZXNcclxuICAgICAgICBuZXh0U3RhdGUgPSBfdXBkYXRlUHJvcGVydHkoXHJcbiAgICAgICAgICBuZXh0U3RhdGUsXHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIGN1c3RvbVJlZHVjZXIobmV4dFN0YXRlW2lkXSwgX2FjdGlvbkZvcihpZCwgYWN0aW9uKSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gYSByZWR1Y2VyIHRoYXQgaW5pdGlhdGVkIHdpdGggY3VzdG9tIGluaXRpYWwgc3RhdGUuXHJcbiAgICogVGhlIHBhcmFtZXRlciBzaG91bGQgYmUgYW4gb2JqZWN0IG1hcHBpbmcgZnJvbSBgc3VicmVkdWNlcmAgbmFtZSB0byBjdXN0b20gc3VicmVkdWNlciBzdGF0ZSxcclxuICAgKiB3aGljaCB3aWxsIGJlIHNoYWxsb3cgKiptZXJnZWQqKiB3aXRoIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZS5cclxuICAgKlxyXG4gICAqIERlZmF1bHQgc3VicmVkdWNlciBzdGF0ZTpcclxuICAgKiAgLSBbYHZpc1N0YXRlYF0oLi92aXMtc3RhdGUubWQjSU5JVElBTF9WSVNfU1RBVEUpXHJcbiAgICogIC0gW2BtYXBTdGF0ZWBdKC4vbWFwLXN0YXRlLm1kI0lOSVRJQUxfTUFQX1NUQVRFKVxyXG4gICAqICAtIFtgbWFwU3R5bGVgXSguL21hcC1zdHlsZS5tZCNJTklUSUFMX01BUF9TVFlMRSlcclxuICAgKiAgLSBbYHVpU3RhdGVgXSguL3VpLXN0YXRlLm1kI0lOSVRJQUxfVUlfU1RBVEUpXHJcbiAgICogQG1peGluIGtlcGxlckdsUmVkdWNlci5pbml0aWFsU3RhdGVcclxuICAgKiBAbWVtYmVyb2Yga2VwbGVyR2xSZWR1Y2VyXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGluaVN0IC0gY3VzdG9tIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZVxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGNvbnN0IG15S2VwbGVyR2xSZWR1Y2VyID0ga2VwbGVyR2xSZWR1Y2VyXHJcbiAgICogIC5pbml0aWFsU3RhdGUoe1xyXG4gICAqICAgIHVpU3RhdGU6IHtyZWFkT25seTogdHJ1ZX1cclxuICAgKiAgfSk7XHJcbiAgICovXHJcbiAgdGFyZ2V0LmluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGluaXRpYWxTdGF0ZShpbmlTdCkge1xyXG4gICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VJbml0aWFsU3RhdGUodGFyZ2V0SW5pdGlhbFN0YXRlLCBpbmlTdCk7XHJcbiAgICBjb25zdCB0YXJnZXRSZWR1Y2VyID0gcHJvdmlkZUluaXRpYWxTdGF0ZShtZXJnZWQpO1xyXG5cclxuICAgIHJldHVybiBkZWNvcmF0ZSh0YXJnZXRSZWR1Y2VyLCBtZXJnZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBLZXBsZXIuZ2wgcmVkdWNlciB0byBiZSBtb3VudGVkIHRvIHlvdXIgc3RvcmUuIFlvdSBjYW4gbW91bnQgYGtlcGxlckdsUmVkdWNlcmAgYXQgcHJvcGVydHkgYGtlcGxlckdsYCwgaWYgeW91IGNob29zZVxyXG4gKiB0byBtb3VudCBpdCBhdCBhbm90aGVyIGFkZHJlc3MgZS5nLiBgZm9vYCB5b3Ugd2lsbCBuZWVkIHRvIHNwZWNpZnkgaXQgd2hlbiB5b3UgbW91bnQgYEtlcGxlckdsYCBjb21wb25lbnQgaW4geW91ciBhcHAgd2l0aCBgZ2V0U3RhdGU6IHN0YXRlID0+IHN0YXRlLmZvb2BcclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyIGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XHJcbiAqIGltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlfSBmcm9tICdyZWR1eCc7XHJcbiAqIGltcG9ydCB7dGFza01pZGRsZXdhcmV9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xyXG4gKlxyXG4gKiBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gKiAgIC8vIDwtLSBtb3VudCBrZXBsZXIuZ2wgcmVkdWNlciBpbiB5b3VyIGFwcFxyXG4gKiAgIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXHJcbiAqXHJcbiAqICAgLy8gWW91ciBvdGhlciByZWR1Y2VycyBoZXJlXHJcbiAqICAgYXBwOiBhcHBSZWR1Y2VyXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyB1c2luZyBjcmVhdGVTdG9yZVxyXG4gKiBleHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0YXNrTWlkZGxld2FyZSkpO1xyXG4gKi9cclxuY29uc3Qga2VwbGVyR2xSZWR1Y2VyID0gZGVjb3JhdGUoX2tlcGxlckdsUmVkdWNlcik7XHJcbmV4cG9ydCBkZWZhdWx0IGtlcGxlckdsUmVkdWNlcjtcclxuIl19