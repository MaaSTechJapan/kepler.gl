"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapStyles = getMapStyles;
exports.getInitialInputStyle = getInitialInputStyle;
exports.set3dBuildingColorUpdater = exports.addCustomMapStyleUpdater = exports.inputMapStyleUpdater = exports.loadCustomMapStyleUpdater = exports.resetMapConfigMapStyleUpdater = exports.receiveMapConfigUpdater = exports.requestMapStylesUpdater = exports.loadMapStyleErrUpdater = exports.loadMapStylesUpdater = exports.mapStyleChangeUpdater = exports.mapConfigChangeUpdater = exports.initMapStyleUpdater = exports.INITIAL_MAP_STYLE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tasks = _interopRequireWildcard(require("react-palm/tasks"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _mapboxGlStyleEditor = require("../utils/map-style-utils/mapbox-gl-style-editor");

var _defaultSettings = require("../constants/default-settings");

var _utils = require("../utils/utils");

var _tasks2 = require("../tasks/tasks");

var _mapStyleActions = require("../actions/map-style-actions");

var _d3Color = require("d3-color");

var _colorUtils = require("../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_BLDG_COLOR = '#D1CEC7';

var getDefaultState = function getDefaultState() {
  var visibleLayerGroups = {};
  var styleType = 'dark';
  var topLayerGroups = {};
  return {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    topLayerGroups: topLayerGroups,
    mapStyles: _defaultSettings.DEFAULT_MAP_STYLES.reduce(function (accu, curr) {
      return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, curr.id, curr));
    }, {}),
    // save mapbox access token
    mapboxApiAccessToken: null,
    mapboxApiUrl: _defaultSettings.DEFAULT_MAPBOX_API_URL,
    mapStylesReplaceDefault: false,
    inputStyle: getInitialInputStyle(),
    threeDBuildingColor: (0, _colorUtils.hexToRgb)(DEFAULT_BLDG_COLOR),
    custom3DBuildingColor: false
  };
};
/**
 * Updaters for `mapStyle`. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStyleUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to hide label from background map
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapStyle: mapStyleUpdaters.mapConfigChangeUpdater(
 *               mapStyle,
 *               {payload: {visibleLayerGroups: {label: false, road: true, background: true}}}
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


var mapStyleUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapStyle`
 * @memberof mapStyleUpdaters
 * @constant
 * @property {string} styleType - Default: `'dark'`
 * @property {Object} visibleLayerGroups - Default: `{}`
 * @property {Object} topLayerGroups - Default: `{}`
 * @property {Object} mapStyles - mapping from style key to style object
 * @property {string} mapboxApiAccessToken - Default: `null`
 * @Property {string} mapboxApiUrl - Default null
 * @Property {Boolean} mapStylesReplaceDefault - Default: `false`
 * @property {Object} inputStyle - Default: `{}`
 * @property {Array} threeDBuildingColor - Default: `[r, g, b]`
 * @public
 */

var INITIAL_MAP_STYLE = getDefaultState();
/**
 * Create two map styles from preset map style, one for top map one for bottom
 *
 * @param {string} styleType - current map style
 * @param {Object} visibleLayerGroups - visible layers of bottom map
 * @param {Object} topLayerGroups - visible layers of top map
 * @param {Object} mapStyles - a dictionary of all map styles
 * @returns {Object} bottomMapStyle | topMapStyle | isRaster
 */

exports.INITIAL_MAP_STYLE = INITIAL_MAP_STYLE;

function getMapStyles(_ref) {
  var styleType = _ref.styleType,
      visibleLayerGroups = _ref.visibleLayerGroups,
      topLayerGroups = _ref.topLayerGroups,
      mapStyles = _ref.mapStyles;
  var mapStyle = mapStyles[styleType]; // style might not be loaded yet

  if (!mapStyle || !mapStyle.style) {
    return {};
  }

  var editable = Object.keys(visibleLayerGroups).length;
  var bottomMapStyle = !editable ? mapStyle.style : (0, _mapboxGlStyleEditor.editBottomMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: visibleLayerGroups
  });
  var hasTopLayer = editable && Object.values(topLayerGroups).some(function (v) {
    return v;
  }); // mute top layer if not visible in bottom layer

  var topLayers = hasTopLayer && Object.keys(topLayerGroups).reduce(function (accu, key) {
    return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, topLayerGroups[key] && visibleLayerGroups[key]));
  }, {});
  var topMapStyle = hasTopLayer ? (0, _mapboxGlStyleEditor.editTopMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: topLayers
  }) : null;
  return {
    bottomMapStyle: bottomMapStyle,
    topMapStyle: topMapStyle,
    editable: editable
  };
}

function findLayerFillColor(layer) {
  return layer && layer.paint && layer.paint['background-color'];
}

function get3DBuildingColor(style) {
  // set building color to be the same as the background color.
  if (!style.style) {
    return (0, _colorUtils.hexToRgb)(DEFAULT_BLDG_COLOR);
  }

  var backgroundLayer = (style.style.layers || []).find(function (_ref2) {
    var id = _ref2.id;
    return id === 'background';
  });
  var buildingLayer = (style.style.layers || []).find(function (_ref3) {
    var id = _ref3.id;
    return id.match(/building/);
  });
  var buildingColor = findLayerFillColor(buildingLayer) || findLayerFillColor(backgroundLayer) || DEFAULT_BLDG_COLOR; // brighten or darken building based on style

  var operation = style.id.match(/(?=(dark|night))/) ? 'brighter' : 'darker';
  var alpha = 0.2;
  var rgbObj = (0, _d3Color.rgb)(buildingColor)[operation]([alpha]);
  return [rgbObj.r, rgbObj.g, rgbObj.b];
}

function getLayerGroupsFromStyle(style) {
  return Array.isArray(style.layers) ? _defaultSettings.DEFAULT_LAYER_GROUPS.filter(function (lg) {
    return style.layers.filter(lg.filter).length;
  }) : [];
} // Updaters

/**
 * Propagate `mapStyle` reducer with `mapboxApiAccessToken` and `mapStylesReplaceDefault`.
 * if mapStylesReplaceDefault is true mapStyles is emptied; loadMapStylesUpdater() will
 * populate mapStyles.
 *
 * @memberof mapStyleUpdaters
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.payload
 * @param {string} action.payload.mapboxApiAccessToken
 * @returns {Object} nextState
 * @public
 */


var initMapStyleUpdater = function initMapStyleUpdater(state, action) {
  return _objectSpread({}, state, {
    // save mapbox access token to map style state
    mapboxApiAccessToken: (action.payload || {}).mapboxApiAccessToken,
    mapboxApiUrl: (action.payload || {}).mapboxApiUrl || state.mapboxApiUrl,
    mapStyles: action.payload && !action.payload.mapStylesReplaceDefault ? state.mapStyles : {},
    mapStylesReplaceDefault: action.payload.mapStylesReplaceDefault || false
  });
}; // });

/**
 * Update `visibleLayerGroups`to change layer group visibility
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @param {Object} action
 * @param {Object} action.payload new config `{visibleLayerGroups: {label: false, road: true, background: true}}`
 * @returns {Object} nextState
 * @public
 */


exports.initMapStyleUpdater = initMapStyleUpdater;

var mapConfigChangeUpdater = function mapConfigChangeUpdater(state, action) {
  return _objectSpread({}, state, {}, action.payload, {}, getMapStyles(_objectSpread({}, state, {}, action.payload)));
};
/**
 * Change to another map style. The selected style should already been loaded into `mapStyle.mapStyles`
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @param {Object} action
 * @param {string} action.payload
 * @returns {Object} nextState
 * @public
 */


exports.mapConfigChangeUpdater = mapConfigChangeUpdater;

var mapStyleChangeUpdater = function mapStyleChangeUpdater(state, _ref4) {
  var styleType = _ref4.payload;

  if (!state.mapStyles[styleType]) {
    // we might not have received the style yet
    return state;
  }

  var defaultLGVisibility = (0, _mapboxGlStyleEditor.getDefaultLayerGroupVisibility)(state.mapStyles[styleType]);
  var visibleLayerGroups = (0, _mapboxGlStyleEditor.mergeLayerGroupVisibility)(defaultLGVisibility, state.visibleLayerGroups);
  var threeDBuildingColor = state.custom3DBuildingColor ? state.threeDBuildingColor : get3DBuildingColor(state.mapStyles[styleType]);
  return _objectSpread({}, state, {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    threeDBuildingColor: threeDBuildingColor
  }, getMapStyles(_objectSpread({}, state, {
    visibleLayerGroups: visibleLayerGroups,
    styleType: styleType
  })));
};
/**
 * Callback when load map style success
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @param {Object} action
 * @param {Object} action.payload a `{[id]: style}` mapping
 * @return {Object} nextState
 * @public
 */


exports.mapStyleChangeUpdater = mapStyleChangeUpdater;

var loadMapStylesUpdater = function loadMapStylesUpdater(state, action) {
  var newStyles = action.payload || {};
  var addLayerGroups = Object.keys(newStyles).reduce(function (accu, id) {
    return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, id, _objectSpread({}, newStyles[id], {
      layerGroups: newStyles[id].layerGroups || getLayerGroupsFromStyle(newStyles[id].style)
    })));
  }, {}); // add new styles to state

  var newState = _objectSpread({}, state, {
    mapStyles: _objectSpread({}, state.mapStyles, {}, addLayerGroups)
  });

  return newStyles[state.styleType] ? mapStyleChangeUpdater(newState, {
    payload: state.styleType
  }) : newState;
};
/**
 * Callback when load map style error
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @param {Object} action
 * @param {*} action.payload error
 * @returns {Object} nextState
 * @public
 */
// do nothing for now, if didn't load, skip it


exports.loadMapStylesUpdater = loadMapStylesUpdater;

var loadMapStyleErrUpdater = function loadMapStyleErrUpdater(state) {
  return state;
};

exports.loadMapStyleErrUpdater = loadMapStyleErrUpdater;

var requestMapStylesUpdater = function requestMapStylesUpdater(state, _ref5) {
  var mapStyles = _ref5.payload;
  var loadMapStyleTasks = getLoadMapStyleTasks(mapStyles, state.mapboxApiAccessToken, state.mapboxApiUrl);
  return (0, _tasks.withTask)(state, loadMapStyleTasks);
};
/**
 * Load map style object when pass in saved map config
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @param {Object} action
 * @param {Object} action.payload saved map config `{mapStyle, visState, mapState}`
 * @returns {Object} nextState or `react-pam` tasks to load map style object
 */


exports.requestMapStylesUpdater = requestMapStylesUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref6) {
  var _ref6$payload$config = _ref6.payload.config,
      config = _ref6$payload$config === void 0 ? {} : _ref6$payload$config;

  var _ref7 = config || {},
      mapStyle = _ref7.mapStyle;

  if (!mapStyle) {
    return state;
  } // if saved custom mapStyles load the style object


  var loadMapStyleTasks = mapStyle.mapStyles ? getLoadMapStyleTasks(mapStyle.mapStyles, state.mapboxApiAccessToken, state.mapboxApiUrl) : null; // merge default mapStyles

  var merged = mapStyle.mapStyles ? _objectSpread({}, mapStyle, {
    mapStyles: _objectSpread({}, mapStyle.mapStyles, {}, state.mapStyles)
  }) : mapStyle; // set custom3DBuildingColor: true if mapStyle contains threeDBuildingColor

  merged.custom3DBuildingColor = Boolean(mapStyle.threeDBuildingColor) || merged.custom3DBuildingColor;
  var newState = mapConfigChangeUpdater(state, {
    payload: merged
  });
  return loadMapStyleTasks ? (0, _tasks.withTask)(newState, loadMapStyleTasks) : newState;
};

exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

function getLoadMapStyleTasks(mapStyles, mapboxApiAccessToken, mapboxApiUrl) {
  return [_tasks["default"].all(Object.values(mapStyles).map(function (_ref8) {
    var id = _ref8.id,
        url = _ref8.url,
        accessToken = _ref8.accessToken;
    return {
      id: id,
      url: (0, _mapboxGlStyleEditor.isValidStyleUrl)(url) ? (0, _mapboxGlStyleEditor.getStyleDownloadUrl)(url, accessToken || mapboxApiAccessToken, mapboxApiUrl) : url
    };
  }).map(_tasks2.LOAD_MAP_STYLE_TASK)).bimap( // success
  function (results) {
    return (0, _mapStyleActions.loadMapStyles)(results.reduce(function (accu, _ref9) {
      var id = _ref9.id,
          style = _ref9.style;
      return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, id, _objectSpread({}, mapStyles[id], {
        style: style
      })));
    }, {}));
  }, // error
  _mapStyleActions.loadMapStyleErr)];
}
/**
 * Reset map style config to initial state
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @returns {Object} nextState
 * @public
 */


var resetMapConfigMapStyleUpdater = function resetMapConfigMapStyleUpdater(state) {
  var emptyConfig = _objectSpread({}, INITIAL_MAP_STYLE, {
    mapboxApiAccessToken: state.mapboxApiAccessToken,
    mapboxApiUrl: state.mapboxApiUrl,
    mapStylesReplaceDefault: state.mapStylesReplaceDefault
  }, state.initialState, {
    mapStyles: state.mapStyles,
    initialState: state.initialState
  });

  return mapStyleChangeUpdater(emptyConfig, {
    payload: emptyConfig.styleType
  });
};
/**
 * Callback when a custom map style object is received
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @param {Object} action
 * @param {Object} action.payload
 * @param {string} action.payload.icon
 * @param {Object} action.payload.style
 * @param {*} action.payload.error
 * @returns {Object} nextState
 * @public
 */


exports.resetMapConfigMapStyleUpdater = resetMapConfigMapStyleUpdater;

var loadCustomMapStyleUpdater = function loadCustomMapStyleUpdater(state, _ref10) {
  var _ref10$payload = _ref10.payload,
      icon = _ref10$payload.icon,
      style = _ref10$payload.style,
      error = _ref10$payload.error;
  return _objectSpread({}, state, {
    inputStyle: _objectSpread({}, state.inputStyle, {}, style ? {
      id: style.id || (0, _utils.generateHashId)(),
      // make a copy of the style object
      style: (0, _lodash["default"])(style),
      label: style.name,
      // gathering layer group info from style json
      layerGroups: getLayerGroupsFromStyle(style)
    } : {}, {}, icon ? {
      icon: icon
    } : {}, {}, error !== undefined ? {
      error: error
    } : {})
  });
};
/**
 * Input a custom map style object
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @param {Object} action action object
 * @param {Object} action.payload inputStyle
 * @param {string} action.payload.url style url e.g. `'mapbox://styles/heshan/xxxxxyyyyzzz'`
 * @param {string} action.payload.id style url e.g. `'custom_style_1'`
 * @param {Object} action.payload.style actual mapbox style json
 * @param {string} action.payload.name style name
 * @param {Object} action.payload.layerGroups layer groups that can be used to set map layer visibility
 * @param {Object} action.payload.icon icon image data url
 * @returns {Object} nextState
 * @public
 */


exports.loadCustomMapStyleUpdater = loadCustomMapStyleUpdater;

var inputMapStyleUpdater = function inputMapStyleUpdater(state, _ref11) {
  var _ref11$payload = _ref11.payload,
      inputStyle = _ref11$payload.inputStyle,
      mapState = _ref11$payload.mapState;

  var updated = _objectSpread({}, state.inputStyle, {}, inputStyle);

  var isValid = (0, _mapboxGlStyleEditor.isValidStyleUrl)(updated.url);
  var icon = isValid ? (0, _mapboxGlStyleEditor.getStyleImageIcon)({
    mapState: mapState,
    styleUrl: updated.url,
    mapboxApiAccessToken: updated.accessToken || state.mapboxApiAccessToken,
    mapboxApiUrl: state.mapboxApiUrl || _defaultSettings.DEFAULT_MAPBOX_API_URL
  }) : state.inputStyle.icon;
  return _objectSpread({}, state, {
    inputStyle: _objectSpread({}, updated, {
      isValid: isValid,
      icon: icon
    })
  });
};
/**
 * Add map style from user input to reducer and set it to current style
 * This action is called when user click confirm after putting in a valid style url in the custom map style dialog.
 * It should not be called from outside kepler.gl without a valid `inputStyle` in the `mapStyle` reducer.
 * @memberof mapStyleUpdaters
 * @param {Object} state `mapStyle`
 * @returns {Object} nextState
 */


exports.inputMapStyleUpdater = inputMapStyleUpdater;

var addCustomMapStyleUpdater = function addCustomMapStyleUpdater(state) {
  var styleId = state.inputStyle.id;

  var newState = _objectSpread({}, state, {
    mapStyles: _objectSpread({}, state.mapStyles, (0, _defineProperty2["default"])({}, styleId, state.inputStyle)),
    // set to default
    inputStyle: getInitialInputStyle()
  }); // set new style


  return mapStyleChangeUpdater(newState, {
    payload: styleId
  });
};
/**
 * Updates 3d building color
 * @memberof mapStyleUpdaters
 * @param state
 * @param color
 * @return {Object} nextState
 */


exports.addCustomMapStyleUpdater = addCustomMapStyleUpdater;

var set3dBuildingColorUpdater = function set3dBuildingColorUpdater(state, _ref12) {
  var color = _ref12.payload;
  return _objectSpread({}, state, {
    threeDBuildingColor: color,
    custom3DBuildingColor: true
  });
};
/**
 * Return the initial input style
 * @return Object
 */


exports.set3dBuildingColorUpdater = set3dBuildingColorUpdater;

function getInitialInputStyle() {
  return {
    accessToken: null,
    error: false,
    isValid: false,
    label: null,
    style: null,
    url: null,
    icon: null,
    custom: true
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3R5bGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsiREVGQVVMVF9CTERHX0NPTE9SIiwiZ2V0RGVmYXVsdFN0YXRlIiwidmlzaWJsZUxheWVyR3JvdXBzIiwic3R5bGVUeXBlIiwidG9wTGF5ZXJHcm91cHMiLCJtYXBTdHlsZXMiLCJERUZBVUxUX01BUF9TVFlMRVMiLCJyZWR1Y2UiLCJhY2N1IiwiY3VyciIsImlkIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJERUZBVUxUX01BUEJPWF9BUElfVVJMIiwibWFwU3R5bGVzUmVwbGFjZURlZmF1bHQiLCJpbnB1dFN0eWxlIiwiZ2V0SW5pdGlhbElucHV0U3R5bGUiLCJ0aHJlZURCdWlsZGluZ0NvbG9yIiwiY3VzdG9tM0RCdWlsZGluZ0NvbG9yIiwibWFwU3R5bGVVcGRhdGVycyIsIklOSVRJQUxfTUFQX1NUWUxFIiwiZ2V0TWFwU3R5bGVzIiwibWFwU3R5bGUiLCJzdHlsZSIsImVkaXRhYmxlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImJvdHRvbU1hcFN0eWxlIiwiaGFzVG9wTGF5ZXIiLCJ2YWx1ZXMiLCJzb21lIiwidiIsInRvcExheWVycyIsImtleSIsInRvcE1hcFN0eWxlIiwiZmluZExheWVyRmlsbENvbG9yIiwibGF5ZXIiLCJwYWludCIsImdldDNEQnVpbGRpbmdDb2xvciIsImJhY2tncm91bmRMYXllciIsImxheWVycyIsImZpbmQiLCJidWlsZGluZ0xheWVyIiwibWF0Y2giLCJidWlsZGluZ0NvbG9yIiwib3BlcmF0aW9uIiwiYWxwaGEiLCJyZ2JPYmoiLCJyIiwiZyIsImIiLCJnZXRMYXllckdyb3Vwc0Zyb21TdHlsZSIsIkFycmF5IiwiaXNBcnJheSIsIkRFRkFVTFRfTEFZRVJfR1JPVVBTIiwiZmlsdGVyIiwibGciLCJpbml0TWFwU3R5bGVVcGRhdGVyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibWFwQ29uZmlnQ2hhbmdlVXBkYXRlciIsIm1hcFN0eWxlQ2hhbmdlVXBkYXRlciIsImRlZmF1bHRMR1Zpc2liaWxpdHkiLCJsb2FkTWFwU3R5bGVzVXBkYXRlciIsIm5ld1N0eWxlcyIsImFkZExheWVyR3JvdXBzIiwibGF5ZXJHcm91cHMiLCJuZXdTdGF0ZSIsImxvYWRNYXBTdHlsZUVyclVwZGF0ZXIiLCJyZXF1ZXN0TWFwU3R5bGVzVXBkYXRlciIsImxvYWRNYXBTdHlsZVRhc2tzIiwiZ2V0TG9hZE1hcFN0eWxlVGFza3MiLCJyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciIsImNvbmZpZyIsIm1lcmdlZCIsIkJvb2xlYW4iLCJUYXNrIiwiYWxsIiwibWFwIiwidXJsIiwiYWNjZXNzVG9rZW4iLCJMT0FEX01BUF9TVFlMRV9UQVNLIiwiYmltYXAiLCJyZXN1bHRzIiwibG9hZE1hcFN0eWxlRXJyIiwicmVzZXRNYXBDb25maWdNYXBTdHlsZVVwZGF0ZXIiLCJlbXB0eUNvbmZpZyIsImluaXRpYWxTdGF0ZSIsImxvYWRDdXN0b21NYXBTdHlsZVVwZGF0ZXIiLCJpY29uIiwiZXJyb3IiLCJsYWJlbCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJpbnB1dE1hcFN0eWxlVXBkYXRlciIsIm1hcFN0YXRlIiwidXBkYXRlZCIsImlzVmFsaWQiLCJzdHlsZVVybCIsImFkZEN1c3RvbU1hcFN0eWxlVXBkYXRlciIsInN0eWxlSWQiLCJzZXQzZEJ1aWxkaW5nQ29sb3JVcGRhdGVyIiwiY29sb3IiLCJjdXN0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFHQTs7QUFTQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBM0I7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQU1DLGtCQUFrQixHQUFHLEVBQTNCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQWxCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVB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LEVBQVc7QUFBQ1IsSUFBQUEsT0FBTyxFQUFFeUM7QUFBVixHQUFYLENBQTVCO0FBQ0QsQ0FiTTtBQWVQOzs7Ozs7Ozs7OztBQU9PLElBQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQzVDLEtBQUQ7QUFBQSxNQUFrQjZDLEtBQWxCLFVBQVMzQyxPQUFUO0FBQUEsMkJBQ3BDRixLQURvQztBQUV2QzFDLElBQUFBLG1CQUFtQixFQUFFdUYsS0FGa0I7QUFHdkN0RixJQUFBQSxxQkFBcUIsRUFBRTtBQUhnQjtBQUFBLENBQWxDO0FBTVA7Ozs7Ozs7O0FBSU8sU0FBU0Ysb0JBQVQsR0FBZ0M7QUFDckMsU0FBTztBQUNMa0UsSUFBQUEsV0FBVyxFQUFFLElBRFI7QUFFTFUsSUFBQUEsS0FBSyxFQUFFLEtBRkY7QUFHTE8sSUFBQUEsT0FBTyxFQUFFLEtBSEo7QUFJTE4sSUFBQUEsS0FBSyxFQUFFLElBSkY7QUFLTHRFLElBQUFBLEtBQUssRUFBRSxJQUxGO0FBTUwwRCxJQUFBQSxHQUFHLEVBQUUsSUFOQTtBQU9MVSxJQUFBQSxJQUFJLEVBQUUsSUFQRDtBQVFMYyxJQUFBQSxNQUFNLEVBQUU7QUFSSCxHQUFQO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgVGFzaywge3dpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcclxuXHJcbi8vIFV0aWxzXHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdExheWVyR3JvdXBWaXNpYmlsaXR5LFxyXG4gIGlzVmFsaWRTdHlsZVVybCxcclxuICBnZXRTdHlsZURvd25sb2FkVXJsLFxyXG4gIG1lcmdlTGF5ZXJHcm91cFZpc2liaWxpdHksXHJcbiAgZWRpdFRvcE1hcFN0eWxlLFxyXG4gIGVkaXRCb3R0b21NYXBTdHlsZSxcclxuICBnZXRTdHlsZUltYWdlSWNvblxyXG59IGZyb20gJ3V0aWxzL21hcC1zdHlsZS11dGlscy9tYXBib3gtZ2wtc3R5bGUtZWRpdG9yJztcclxuaW1wb3J0IHtcclxuICBERUZBVUxUX01BUF9TVFlMRVMsXHJcbiAgREVGQVVMVF9MQVlFUl9HUk9VUFMsXHJcbiAgREVGQVVMVF9NQVBCT1hfQVBJX1VSTFxyXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZH0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQge0xPQURfTUFQX1NUWUxFX1RBU0t9IGZyb20gJ3Rhc2tzL3Rhc2tzJztcclxuaW1wb3J0IHtsb2FkTWFwU3R5bGVzLCBsb2FkTWFwU3R5bGVFcnJ9IGZyb20gJ2FjdGlvbnMvbWFwLXN0eWxlLWFjdGlvbnMnO1xyXG5pbXBvcnQge3JnYn0gZnJvbSAnZDMtY29sb3InO1xyXG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XHJcblxyXG5jb25zdCBERUZBVUxUX0JMREdfQ09MT1IgPSAnI0QxQ0VDNyc7XHJcblxyXG5jb25zdCBnZXREZWZhdWx0U3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdmlzaWJsZUxheWVyR3JvdXBzID0ge307XHJcbiAgY29uc3Qgc3R5bGVUeXBlID0gJ2RhcmsnO1xyXG4gIGNvbnN0IHRvcExheWVyR3JvdXBzID0ge307XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdHlsZVR5cGUsXHJcbiAgICB2aXNpYmxlTGF5ZXJHcm91cHMsXHJcbiAgICB0b3BMYXllckdyb3VwcyxcclxuICAgIG1hcFN0eWxlczogREVGQVVMVF9NQVBfU1RZTEVTLnJlZHVjZShcclxuICAgICAgKGFjY3UsIGN1cnIpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBbY3Vyci5pZF06IGN1cnJcclxuICAgICAgfSksXHJcbiAgICAgIHt9XHJcbiAgICApLFxyXG4gICAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuXHJcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgIG1hcGJveEFwaVVybDogREVGQVVMVF9NQVBCT1hfQVBJX1VSTCxcclxuICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0OiBmYWxzZSxcclxuICAgIGlucHV0U3R5bGU6IGdldEluaXRpYWxJbnB1dFN0eWxlKCksXHJcbiAgICB0aHJlZURCdWlsZGluZ0NvbG9yOiBoZXhUb1JnYihERUZBVUxUX0JMREdfQ09MT1IpLFxyXG4gICAgY3VzdG9tM0RCdWlsZGluZ0NvbG9yOiBmYWxzZVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogVXBkYXRlcnMgZm9yIGBtYXBTdHlsZWAuIENhbiBiZSB1c2VkIGluIHlvdXIgcm9vdCByZWR1Y2VyIHRvIGRpcmVjdGx5IG1vZGlmeSBrZXBsZXIuZ2wncyBzdGF0ZS5cclxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge21hcFN0eWxlVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XHJcbiAqIC8vIFJvb3QgUmVkdWNlclxyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxyXG4gKiAgYXBwOiBhcHBSZWR1Y2VyXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBjb25zdCBjb21wb3NlZFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gKiAgICAvLyBjbGljayBidXR0b24gdG8gaGlkZSBsYWJlbCBmcm9tIGJhY2tncm91bmQgbWFwXHJcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XHJcbiAqICAgICAgcmV0dXJuIHtcclxuICogICAgICAgIC4uLnN0YXRlLFxyXG4gKiAgICAgICAga2VwbGVyR2w6IHtcclxuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXHJcbiAqICAgICAgICAgIGZvbzoge1xyXG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXHJcbiAqICAgICAgICAgICAgIG1hcFN0eWxlOiBtYXBTdHlsZVVwZGF0ZXJzLm1hcENvbmZpZ0NoYW5nZVVwZGF0ZXIoXHJcbiAqICAgICAgICAgICAgICAgbWFwU3R5bGUsXHJcbiAqICAgICAgICAgICAgICAge3BheWxvYWQ6IHt2aXNpYmxlTGF5ZXJHcm91cHM6IHtsYWJlbDogZmFsc2UsIHJvYWQ6IHRydWUsIGJhY2tncm91bmQ6IHRydWV9fX1cclxuICogICAgICAgICAgICAgKVxyXG4gKiAgICAgICAgICB9XHJcbiAqICAgICAgICB9XHJcbiAqICAgICAgfTtcclxuICogIH1cclxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcclxuICogfTtcclxuICpcclxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuY29uc3QgbWFwU3R5bGVVcGRhdGVycyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyoqXHJcbiAqIERlZmF1bHQgaW5pdGlhbCBgbWFwU3R5bGVgXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3R5bGVUeXBlIC0gRGVmYXVsdDogYCdkYXJrJ2BcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHZpc2libGVMYXllckdyb3VwcyAtIERlZmF1bHQ6IGB7fWBcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHRvcExheWVyR3JvdXBzIC0gRGVmYXVsdDogYHt9YFxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbWFwU3R5bGVzIC0gbWFwcGluZyBmcm9tIHN0eWxlIGtleSB0byBzdHlsZSBvYmplY3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1hcGJveEFwaUFjY2Vzc1Rva2VuIC0gRGVmYXVsdDogYG51bGxgXHJcbiAqIEBQcm9wZXJ0eSB7c3RyaW5nfSBtYXBib3hBcGlVcmwgLSBEZWZhdWx0IG51bGxcclxuICogQFByb3BlcnR5IHtCb29sZWFufSBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCAtIERlZmF1bHQ6IGBmYWxzZWBcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGlucHV0U3R5bGUgLSBEZWZhdWx0OiBge31gXHJcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IHRocmVlREJ1aWxkaW5nQ29sb3IgLSBEZWZhdWx0OiBgW3IsIGcsIGJdYFxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSU5JVElBTF9NQVBfU1RZTEUgPSBnZXREZWZhdWx0U3RhdGUoKTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgdHdvIG1hcCBzdHlsZXMgZnJvbSBwcmVzZXQgbWFwIHN0eWxlLCBvbmUgZm9yIHRvcCBtYXAgb25lIGZvciBib3R0b21cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0eWxlVHlwZSAtIGN1cnJlbnQgbWFwIHN0eWxlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aXNpYmxlTGF5ZXJHcm91cHMgLSB2aXNpYmxlIGxheWVycyBvZiBib3R0b20gbWFwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b3BMYXllckdyb3VwcyAtIHZpc2libGUgbGF5ZXJzIG9mIHRvcCBtYXBcclxuICogQHBhcmFtIHtPYmplY3R9IG1hcFN0eWxlcyAtIGEgZGljdGlvbmFyeSBvZiBhbGwgbWFwIHN0eWxlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBib3R0b21NYXBTdHlsZSB8IHRvcE1hcFN0eWxlIHwgaXNSYXN0ZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBTdHlsZXMoe3N0eWxlVHlwZSwgdmlzaWJsZUxheWVyR3JvdXBzLCB0b3BMYXllckdyb3VwcywgbWFwU3R5bGVzfSkge1xyXG4gIGNvbnN0IG1hcFN0eWxlID0gbWFwU3R5bGVzW3N0eWxlVHlwZV07XHJcblxyXG4gIC8vIHN0eWxlIG1pZ2h0IG5vdCBiZSBsb2FkZWQgeWV0XHJcbiAgaWYgKCFtYXBTdHlsZSB8fCAhbWFwU3R5bGUuc3R5bGUpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRhYmxlID0gT2JqZWN0LmtleXModmlzaWJsZUxheWVyR3JvdXBzKS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGJvdHRvbU1hcFN0eWxlID0gIWVkaXRhYmxlXHJcbiAgICA/IG1hcFN0eWxlLnN0eWxlXHJcbiAgICA6IGVkaXRCb3R0b21NYXBTdHlsZSh7XHJcbiAgICAgICAgaWQ6IHN0eWxlVHlwZSxcclxuICAgICAgICBtYXBTdHlsZSxcclxuICAgICAgICB2aXNpYmxlTGF5ZXJHcm91cHNcclxuICAgICAgfSk7XHJcblxyXG4gIGNvbnN0IGhhc1RvcExheWVyID0gZWRpdGFibGUgJiYgT2JqZWN0LnZhbHVlcyh0b3BMYXllckdyb3Vwcykuc29tZSh2ID0+IHYpO1xyXG5cclxuICAvLyBtdXRlIHRvcCBsYXllciBpZiBub3QgdmlzaWJsZSBpbiBib3R0b20gbGF5ZXJcclxuICBjb25zdCB0b3BMYXllcnMgPVxyXG4gICAgaGFzVG9wTGF5ZXIgJiZcclxuICAgIE9iamVjdC5rZXlzKHRvcExheWVyR3JvdXBzKS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBba2V5XTogdG9wTGF5ZXJHcm91cHNba2V5XSAmJiB2aXNpYmxlTGF5ZXJHcm91cHNba2V5XVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHRvcE1hcFN0eWxlID0gaGFzVG9wTGF5ZXJcclxuICAgID8gZWRpdFRvcE1hcFN0eWxlKHtcclxuICAgICAgICBpZDogc3R5bGVUeXBlLFxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIHZpc2libGVMYXllckdyb3VwczogdG9wTGF5ZXJzXHJcbiAgICAgIH0pXHJcbiAgICA6IG51bGw7XHJcblxyXG4gIHJldHVybiB7Ym90dG9tTWFwU3R5bGUsIHRvcE1hcFN0eWxlLCBlZGl0YWJsZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRMYXllckZpbGxDb2xvcihsYXllcikge1xyXG4gIHJldHVybiBsYXllciAmJiBsYXllci5wYWludCAmJiBsYXllci5wYWludFsnYmFja2dyb3VuZC1jb2xvciddO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQzREJ1aWxkaW5nQ29sb3Ioc3R5bGUpIHtcclxuICAvLyBzZXQgYnVpbGRpbmcgY29sb3IgdG8gYmUgdGhlIHNhbWUgYXMgdGhlIGJhY2tncm91bmQgY29sb3IuXHJcbiAgaWYgKCFzdHlsZS5zdHlsZSkge1xyXG4gICAgcmV0dXJuIGhleFRvUmdiKERFRkFVTFRfQkxER19DT0xPUik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kTGF5ZXIgPSAoc3R5bGUuc3R5bGUubGF5ZXJzIHx8IFtdKS5maW5kKCh7aWR9KSA9PiBpZCA9PT0gJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgY29uc3QgYnVpbGRpbmdMYXllciA9IChzdHlsZS5zdHlsZS5sYXllcnMgfHwgW10pLmZpbmQoKHtpZH0pID0+IGlkLm1hdGNoKC9idWlsZGluZy8pKTtcclxuXHJcbiAgY29uc3QgYnVpbGRpbmdDb2xvciA9XHJcbiAgICBmaW5kTGF5ZXJGaWxsQ29sb3IoYnVpbGRpbmdMYXllcikgfHwgZmluZExheWVyRmlsbENvbG9yKGJhY2tncm91bmRMYXllcikgfHwgREVGQVVMVF9CTERHX0NPTE9SO1xyXG5cclxuICAvLyBicmlnaHRlbiBvciBkYXJrZW4gYnVpbGRpbmcgYmFzZWQgb24gc3R5bGVcclxuICBjb25zdCBvcGVyYXRpb24gPSBzdHlsZS5pZC5tYXRjaCgvKD89KGRhcmt8bmlnaHQpKS8pID8gJ2JyaWdodGVyJyA6ICdkYXJrZXInO1xyXG5cclxuICBjb25zdCBhbHBoYSA9IDAuMjtcclxuICBjb25zdCByZ2JPYmogPSByZ2IoYnVpbGRpbmdDb2xvcilbb3BlcmF0aW9uXShbYWxwaGFdKTtcclxuICByZXR1cm4gW3JnYk9iai5yLCByZ2JPYmouZywgcmdiT2JqLmJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYXllckdyb3Vwc0Zyb21TdHlsZShzdHlsZSkge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHN0eWxlLmxheWVycylcclxuICAgID8gREVGQVVMVF9MQVlFUl9HUk9VUFMuZmlsdGVyKGxnID0+IHN0eWxlLmxheWVycy5maWx0ZXIobGcuZmlsdGVyKS5sZW5ndGgpXHJcbiAgICA6IFtdO1xyXG59XHJcblxyXG4vLyBVcGRhdGVyc1xyXG4vKipcclxuICogUHJvcGFnYXRlIGBtYXBTdHlsZWAgcmVkdWNlciB3aXRoIGBtYXBib3hBcGlBY2Nlc3NUb2tlbmAgYW5kIGBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdGAuXHJcbiAqIGlmIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IGlzIHRydWUgbWFwU3R5bGVzIGlzIGVtcHRpZWQ7IGxvYWRNYXBTdHlsZXNVcGRhdGVyKCkgd2lsbFxyXG4gKiBwb3B1bGF0ZSBtYXBTdHlsZXMuXHJcbiAqXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQubWFwYm94QXBpQWNjZXNzVG9rZW5cclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0TWFwU3R5bGVVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuIHRvIG1hcCBzdHlsZSBzdGF0ZVxyXG4gIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiAoYWN0aW9uLnBheWxvYWQgfHwge30pLm1hcGJveEFwaUFjY2Vzc1Rva2VuLFxyXG4gIG1hcGJveEFwaVVybDogKGFjdGlvbi5wYXlsb2FkIHx8IHt9KS5tYXBib3hBcGlVcmwgfHwgc3RhdGUubWFwYm94QXBpVXJsLFxyXG4gIG1hcFN0eWxlczogYWN0aW9uLnBheWxvYWQgJiYgIWFjdGlvbi5wYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0ID8gc3RhdGUubWFwU3R5bGVzIDoge30sXHJcbiAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQ6IGFjdGlvbi5wYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IHx8IGZhbHNlXHJcbn0pO1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYHZpc2libGVMYXllckdyb3Vwc2B0byBjaGFuZ2UgbGF5ZXIgZ3JvdXAgdmlzaWJpbGl0eVxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYG1hcFN0eWxlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZCBuZXcgY29uZmlnIGB7dmlzaWJsZUxheWVyR3JvdXBzOiB7bGFiZWw6IGZhbHNlLCByb2FkOiB0cnVlLCBiYWNrZ3JvdW5kOiB0cnVlfX1gXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFwQ29uZmlnQ2hhbmdlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gIC4uLmdldE1hcFN0eWxlcyh7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgfSlcclxufSk7XHJcblxyXG4vKipcclxuICogQ2hhbmdlIHRvIGFub3RoZXIgbWFwIHN0eWxlLiBUaGUgc2VsZWN0ZWQgc3R5bGUgc2hvdWxkIGFscmVhZHkgYmVlbiBsb2FkZWQgaW50byBgbWFwU3R5bGUubWFwU3R5bGVzYFxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYG1hcFN0eWxlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hcFN0eWxlQ2hhbmdlVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHN0eWxlVHlwZX0pID0+IHtcclxuICBpZiAoIXN0YXRlLm1hcFN0eWxlc1tzdHlsZVR5cGVdKSB7XHJcbiAgICAvLyB3ZSBtaWdodCBub3QgaGF2ZSByZWNlaXZlZCB0aGUgc3R5bGUgeWV0XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG4gIGNvbnN0IGRlZmF1bHRMR1Zpc2liaWxpdHkgPSBnZXREZWZhdWx0TGF5ZXJHcm91cFZpc2liaWxpdHkoc3RhdGUubWFwU3R5bGVzW3N0eWxlVHlwZV0pO1xyXG5cclxuICBjb25zdCB2aXNpYmxlTGF5ZXJHcm91cHMgPSBtZXJnZUxheWVyR3JvdXBWaXNpYmlsaXR5KFxyXG4gICAgZGVmYXVsdExHVmlzaWJpbGl0eSxcclxuICAgIHN0YXRlLnZpc2libGVMYXllckdyb3Vwc1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRocmVlREJ1aWxkaW5nQ29sb3IgPSBzdGF0ZS5jdXN0b20zREJ1aWxkaW5nQ29sb3JcclxuICAgID8gc3RhdGUudGhyZWVEQnVpbGRpbmdDb2xvclxyXG4gICAgOiBnZXQzREJ1aWxkaW5nQ29sb3Ioc3RhdGUubWFwU3R5bGVzW3N0eWxlVHlwZV0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBzdHlsZVR5cGUsXHJcbiAgICB2aXNpYmxlTGF5ZXJHcm91cHMsXHJcbiAgICB0aHJlZURCdWlsZGluZ0NvbG9yLFxyXG4gICAgLi4uZ2V0TWFwU3R5bGVzKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHZpc2libGVMYXllckdyb3VwcyxcclxuICAgICAgc3R5bGVUeXBlXHJcbiAgICB9KVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQ2FsbGJhY2sgd2hlbiBsb2FkIG1hcCBzdHlsZSBzdWNjZXNzXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgbWFwU3R5bGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkIGEgYHtbaWRdOiBzdHlsZX1gIG1hcHBpbmdcclxuICogQHJldHVybiB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRNYXBTdHlsZXNVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBuZXdTdHlsZXMgPSBhY3Rpb24ucGF5bG9hZCB8fCB7fTtcclxuICBjb25zdCBhZGRMYXllckdyb3VwcyA9IE9iamVjdC5rZXlzKG5ld1N0eWxlcykucmVkdWNlKFxyXG4gICAgKGFjY3UsIGlkKSA9PiAoe1xyXG4gICAgICAuLi5hY2N1LFxyXG4gICAgICBbaWRdOiB7XHJcbiAgICAgICAgLi4ubmV3U3R5bGVzW2lkXSxcclxuICAgICAgICBsYXllckdyb3VwczogbmV3U3R5bGVzW2lkXS5sYXllckdyb3VwcyB8fCBnZXRMYXllckdyb3Vwc0Zyb21TdHlsZShuZXdTdHlsZXNbaWRdLnN0eWxlKVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIHt9XHJcbiAgKTtcclxuXHJcbiAgLy8gYWRkIG5ldyBzdHlsZXMgdG8gc3RhdGVcclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbWFwU3R5bGVzOiB7XHJcbiAgICAgIC4uLnN0YXRlLm1hcFN0eWxlcyxcclxuICAgICAgLi4uYWRkTGF5ZXJHcm91cHNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gbmV3U3R5bGVzW3N0YXRlLnN0eWxlVHlwZV1cclxuICAgID8gbWFwU3R5bGVDaGFuZ2VVcGRhdGVyKG5ld1N0YXRlLCB7cGF5bG9hZDogc3RhdGUuc3R5bGVUeXBlfSlcclxuICAgIDogbmV3U3RhdGU7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2FsbGJhY2sgd2hlbiBsb2FkIG1hcCBzdHlsZSBlcnJvclxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYG1hcFN0eWxlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uLnBheWxvYWQgZXJyb3JcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8vIGRvIG5vdGhpbmcgZm9yIG5vdywgaWYgZGlkbid0IGxvYWQsIHNraXAgaXRcclxuZXhwb3J0IGNvbnN0IGxvYWRNYXBTdHlsZUVyclVwZGF0ZXIgPSBzdGF0ZSA9PiBzdGF0ZTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0TWFwU3R5bGVzVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IG1hcFN0eWxlc30pID0+IHtcclxuICBjb25zdCBsb2FkTWFwU3R5bGVUYXNrcyA9IGdldExvYWRNYXBTdHlsZVRhc2tzKFxyXG4gICAgbWFwU3R5bGVzLFxyXG4gICAgc3RhdGUubWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICBzdGF0ZS5tYXBib3hBcGlVcmxcclxuICApO1xyXG4gIHJldHVybiB3aXRoVGFzayhzdGF0ZSwgbG9hZE1hcFN0eWxlVGFza3MpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvYWQgbWFwIHN0eWxlIG9iamVjdCB3aGVuIHBhc3MgaW4gc2F2ZWQgbWFwIGNvbmZpZ1xyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYG1hcFN0eWxlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZCBzYXZlZCBtYXAgY29uZmlnIGB7bWFwU3R5bGUsIHZpc1N0YXRlLCBtYXBTdGF0ZX1gXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZSBvciBgcmVhY3QtcGFtYCB0YXNrcyB0byBsb2FkIG1hcCBzdHlsZSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHtjb25maWcgPSB7fX19KSA9PiB7XHJcbiAgY29uc3Qge21hcFN0eWxlfSA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgaWYgKCFtYXBTdHlsZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgc2F2ZWQgY3VzdG9tIG1hcFN0eWxlcyBsb2FkIHRoZSBzdHlsZSBvYmplY3RcclxuICBjb25zdCBsb2FkTWFwU3R5bGVUYXNrcyA9IG1hcFN0eWxlLm1hcFN0eWxlc1xyXG4gICAgPyBnZXRMb2FkTWFwU3R5bGVUYXNrcyhtYXBTdHlsZS5tYXBTdHlsZXMsIHN0YXRlLm1hcGJveEFwaUFjY2Vzc1Rva2VuLCBzdGF0ZS5tYXBib3hBcGlVcmwpXHJcbiAgICA6IG51bGw7XHJcblxyXG4gIC8vIG1lcmdlIGRlZmF1bHQgbWFwU3R5bGVzXHJcbiAgY29uc3QgbWVyZ2VkID0gbWFwU3R5bGUubWFwU3R5bGVzXHJcbiAgICA/IHtcclxuICAgICAgICAuLi5tYXBTdHlsZSxcclxuICAgICAgICBtYXBTdHlsZXM6IHtcclxuICAgICAgICAgIC4uLm1hcFN0eWxlLm1hcFN0eWxlcyxcclxuICAgICAgICAgIC4uLnN0YXRlLm1hcFN0eWxlc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgOiBtYXBTdHlsZTtcclxuXHJcbiAgLy8gc2V0IGN1c3RvbTNEQnVpbGRpbmdDb2xvcjogdHJ1ZSBpZiBtYXBTdHlsZSBjb250YWlucyB0aHJlZURCdWlsZGluZ0NvbG9yXHJcbiAgbWVyZ2VkLmN1c3RvbTNEQnVpbGRpbmdDb2xvciA9XHJcbiAgICBCb29sZWFuKG1hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3IpIHx8IG1lcmdlZC5jdXN0b20zREJ1aWxkaW5nQ29sb3I7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSBtYXBDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7cGF5bG9hZDogbWVyZ2VkfSk7XHJcblxyXG4gIHJldHVybiBsb2FkTWFwU3R5bGVUYXNrcyA/IHdpdGhUYXNrKG5ld1N0YXRlLCBsb2FkTWFwU3R5bGVUYXNrcykgOiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldExvYWRNYXBTdHlsZVRhc2tzKG1hcFN0eWxlcywgbWFwYm94QXBpQWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybCkge1xyXG4gIHJldHVybiBbXHJcbiAgICBUYXNrLmFsbChcclxuICAgICAgT2JqZWN0LnZhbHVlcyhtYXBTdHlsZXMpXHJcbiAgICAgICAgLm1hcCgoe2lkLCB1cmwsIGFjY2Vzc1Rva2VufSkgPT4gKHtcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgdXJsOiBpc1ZhbGlkU3R5bGVVcmwodXJsKVxyXG4gICAgICAgICAgICA/IGdldFN0eWxlRG93bmxvYWRVcmwodXJsLCBhY2Nlc3NUb2tlbiB8fCBtYXBib3hBcGlBY2Nlc3NUb2tlbiwgbWFwYm94QXBpVXJsKVxyXG4gICAgICAgICAgICA6IHVybFxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5tYXAoTE9BRF9NQVBfU1RZTEVfVEFTSylcclxuICAgICkuYmltYXAoXHJcbiAgICAgIC8vIHN1Y2Nlc3NcclxuICAgICAgcmVzdWx0cyA9PlxyXG4gICAgICAgIGxvYWRNYXBTdHlsZXMoXHJcbiAgICAgICAgICByZXN1bHRzLnJlZHVjZShcclxuICAgICAgICAgICAgKGFjY3UsIHtpZCwgc3R5bGV9KSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgICAgW2lkXToge1xyXG4gICAgICAgICAgICAgICAgLi4ubWFwU3R5bGVzW2lkXSxcclxuICAgICAgICAgICAgICAgIHN0eWxlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAge31cclxuICAgICAgICAgIClcclxuICAgICAgICApLFxyXG4gICAgICAvLyBlcnJvclxyXG4gICAgICBsb2FkTWFwU3R5bGVFcnJcclxuICAgIClcclxuICBdO1xyXG59XHJcbi8qKlxyXG4gKiBSZXNldCBtYXAgc3R5bGUgY29uZmlnIHRvIGluaXRpYWwgc3RhdGVcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGBtYXBTdHlsZWBcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldE1hcENvbmZpZ01hcFN0eWxlVXBkYXRlciA9IHN0YXRlID0+IHtcclxuICBjb25zdCBlbXB0eUNvbmZpZyA9IHtcclxuICAgIC4uLklOSVRJQUxfTUFQX1NUWUxFLFxyXG4gICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IHN0YXRlLm1hcGJveEFwaUFjY2Vzc1Rva2VuLFxyXG4gICAgbWFwYm94QXBpVXJsOiBzdGF0ZS5tYXBib3hBcGlVcmwsXHJcbiAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdDogc3RhdGUubWFwU3R5bGVzUmVwbGFjZURlZmF1bHQsXHJcbiAgICAuLi5zdGF0ZS5pbml0aWFsU3RhdGUsXHJcbiAgICBtYXBTdHlsZXM6IHN0YXRlLm1hcFN0eWxlcyxcclxuICAgIGluaXRpYWxTdGF0ZTogc3RhdGUuaW5pdGlhbFN0YXRlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG1hcFN0eWxlQ2hhbmdlVXBkYXRlcihlbXB0eUNvbmZpZywge3BheWxvYWQ6IGVtcHR5Q29uZmlnLnN0eWxlVHlwZX0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIHdoZW4gYSBjdXN0b20gbWFwIHN0eWxlIG9iamVjdCBpcyByZWNlaXZlZFxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYG1hcFN0eWxlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQuaWNvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQuc3R5bGVcclxuICogQHBhcmFtIHsqfSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRDdXN0b21NYXBTdHlsZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB7aWNvbiwgc3R5bGUsIGVycm9yfX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgaW5wdXRTdHlsZToge1xyXG4gICAgLi4uc3RhdGUuaW5wdXRTdHlsZSxcclxuICAgIC8vIHN0eWxlIGpzb24gYW5kIGljb24gd2lsbCBsb2FkIGFzeW5jaHJvbm91c2x5XHJcbiAgICAuLi4oc3R5bGVcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBpZDogc3R5bGUuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoKSxcclxuICAgICAgICAgIC8vIG1ha2UgYSBjb3B5IG9mIHRoZSBzdHlsZSBvYmplY3RcclxuICAgICAgICAgIHN0eWxlOiBjbG9uZURlZXAoc3R5bGUpLFxyXG4gICAgICAgICAgbGFiZWw6IHN0eWxlLm5hbWUsXHJcbiAgICAgICAgICAvLyBnYXRoZXJpbmcgbGF5ZXIgZ3JvdXAgaW5mbyBmcm9tIHN0eWxlIGpzb25cclxuICAgICAgICAgIGxheWVyR3JvdXBzOiBnZXRMYXllckdyb3Vwc0Zyb21TdHlsZShzdHlsZSlcclxuICAgICAgICB9XHJcbiAgICAgIDoge30pLFxyXG4gICAgLi4uKGljb24gPyB7aWNvbn0gOiB7fSksXHJcbiAgICAuLi4oZXJyb3IgIT09IHVuZGVmaW5lZCA/IHtlcnJvcn0gOiB7fSlcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIElucHV0IGEgY3VzdG9tIG1hcCBzdHlsZSBvYmplY3RcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGBtYXBTdHlsZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb24gb2JqZWN0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZCBpbnB1dFN0eWxlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZC51cmwgc3R5bGUgdXJsIGUuZy4gYCdtYXBib3g6Ly9zdHlsZXMvaGVzaGFuL3h4eHh4eXl5eXp6eidgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZC5pZCBzdHlsZSB1cmwgZS5nLiBgJ2N1c3RvbV9zdHlsZV8xJ2BcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkLnN0eWxlIGFjdHVhbCBtYXBib3ggc3R5bGUganNvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQubmFtZSBzdHlsZSBuYW1lXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZC5sYXllckdyb3VwcyBsYXllciBncm91cHMgdGhhdCBjYW4gYmUgdXNlZCB0byBzZXQgbWFwIGxheWVyIHZpc2liaWxpdHlcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkLmljb24gaWNvbiBpbWFnZSBkYXRhIHVybFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlucHV0TWFwU3R5bGVVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge2lucHV0U3R5bGUsIG1hcFN0YXRlfX0pID0+IHtcclxuICBjb25zdCB1cGRhdGVkID0ge1xyXG4gICAgLi4uc3RhdGUuaW5wdXRTdHlsZSxcclxuICAgIC4uLmlucHV0U3R5bGVcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1ZhbGlkID0gaXNWYWxpZFN0eWxlVXJsKHVwZGF0ZWQudXJsKTtcclxuICBjb25zdCBpY29uID0gaXNWYWxpZFxyXG4gICAgPyBnZXRTdHlsZUltYWdlSWNvbih7XHJcbiAgICAgICAgbWFwU3RhdGUsXHJcbiAgICAgICAgc3R5bGVVcmw6IHVwZGF0ZWQudXJsLFxyXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiB1cGRhdGVkLmFjY2Vzc1Rva2VuIHx8IHN0YXRlLm1hcGJveEFwaUFjY2Vzc1Rva2VuLFxyXG4gICAgICAgIG1hcGJveEFwaVVybDogc3RhdGUubWFwYm94QXBpVXJsIHx8IERFRkFVTFRfTUFQQk9YX0FQSV9VUkxcclxuICAgICAgfSlcclxuICAgIDogc3RhdGUuaW5wdXRTdHlsZS5pY29uO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpbnB1dFN0eWxlOiB7XHJcbiAgICAgIC4uLnVwZGF0ZWQsXHJcbiAgICAgIGlzVmFsaWQsXHJcbiAgICAgIGljb25cclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBtYXAgc3R5bGUgZnJvbSB1c2VyIGlucHV0IHRvIHJlZHVjZXIgYW5kIHNldCBpdCB0byBjdXJyZW50IHN0eWxlXHJcbiAqIFRoaXMgYWN0aW9uIGlzIGNhbGxlZCB3aGVuIHVzZXIgY2xpY2sgY29uZmlybSBhZnRlciBwdXR0aW5nIGluIGEgdmFsaWQgc3R5bGUgdXJsIGluIHRoZSBjdXN0b20gbWFwIHN0eWxlIGRpYWxvZy5cclxuICogSXQgc2hvdWxkIG5vdCBiZSBjYWxsZWQgZnJvbSBvdXRzaWRlIGtlcGxlci5nbCB3aXRob3V0IGEgdmFsaWQgYGlucHV0U3R5bGVgIGluIHRoZSBgbWFwU3R5bGVgIHJlZHVjZXIuXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgbWFwU3R5bGVgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbU1hcFN0eWxlVXBkYXRlciA9IHN0YXRlID0+IHtcclxuICBjb25zdCBzdHlsZUlkID0gc3RhdGUuaW5wdXRTdHlsZS5pZDtcclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbWFwU3R5bGVzOiB7XHJcbiAgICAgIC4uLnN0YXRlLm1hcFN0eWxlcyxcclxuICAgICAgW3N0eWxlSWRdOiBzdGF0ZS5pbnB1dFN0eWxlXHJcbiAgICB9LFxyXG4gICAgLy8gc2V0IHRvIGRlZmF1bHRcclxuICAgIGlucHV0U3R5bGU6IGdldEluaXRpYWxJbnB1dFN0eWxlKClcclxuICB9O1xyXG4gIC8vIHNldCBuZXcgc3R5bGVcclxuICByZXR1cm4gbWFwU3R5bGVDaGFuZ2VVcGRhdGVyKG5ld1N0YXRlLCB7cGF5bG9hZDogc3R5bGVJZH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZXMgM2QgYnVpbGRpbmcgY29sb3JcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcclxuICogQHBhcmFtIHN0YXRlXHJcbiAqIEBwYXJhbSBjb2xvclxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldDNkQnVpbGRpbmdDb2xvclVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBjb2xvcn0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgdGhyZWVEQnVpbGRpbmdDb2xvcjogY29sb3IsXHJcbiAgY3VzdG9tM0RCdWlsZGluZ0NvbG9yOiB0cnVlXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgaW5pdGlhbCBpbnB1dCBzdHlsZVxyXG4gKiBAcmV0dXJuIE9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxJbnB1dFN0eWxlKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgbGFiZWw6IG51bGwsXHJcbiAgICBzdHlsZTogbnVsbCxcclxuICAgIHVybDogbnVsbCxcclxuICAgIGljb246IG51bGwsXHJcbiAgICBjdXN0b206IHRydWVcclxuICB9O1xyXG59XHJcbiJdfQ==