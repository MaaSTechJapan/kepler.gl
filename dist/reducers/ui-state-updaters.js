"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSplitMapUpdater = exports.loadFilesErrUpdater = exports.loadFilesSuccessUpdater = exports.loadFilesUpdater = exports.removeNotificationUpdater = exports.addNotificationUpdater = exports.setExportMapHTMLMode = exports.setExportMapFormatUpdater = exports.setUserMapboxAccessTokenUpdater = exports.setExportDataUpdater = exports.setExportFilteredUpdater = exports.setExportDataTypeUpdater = exports.setExportSelectedDatasetUpdater = exports.cleanupExportImage = exports.setExportImageError = exports.setExportImageDataUri = exports.startExportingImage = exports.setExportImageSetting = exports.openDeleteModalUpdater = exports.toggleMapControlUpdater = exports.hideExportDropdownUpdater = exports.showExportDropdownUpdater = exports.toggleModalUpdater = exports.toggleSidePanelUpdater = exports.INITIAL_UI_STATE = exports.DEFAULT_EXPORT_MAP = exports.DEFAULT_EXPORT_JSON = exports.DEFAULT_EXPORT_HTML = exports.DEFAULT_NOTIFICATIONS = exports.DEFAULT_EXPORT_DATA = exports.DEFAULT_LOAD_FILES = exports.DEFAULT_EXPORT_IMAGE = exports.DEFAULT_MAP_CONTROLS = exports.DEFAULT_MODAL = exports.DEFAULT_ACTIVE_SIDE_PANEL = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _defaultSettings = require("../constants/default-settings");

var _notificationsUtils = require("../utils/notifications-utils");

var _exportUtils = require("../utils/export-utils");

var _DEFAULT_EXPORT_MAP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_ACTIVE_SIDE_PANEL = 'layer';
exports.DEFAULT_ACTIVE_SIDE_PANEL = DEFAULT_ACTIVE_SIDE_PANEL;
var DEFAULT_MODAL = _defaultSettings.ADD_DATA_ID;
/**
 * Updaters for `uiState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {uiStateUpdaters} from 'kepler.gl/reducers';
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
 *             uiState: uiStateUpdaters.toggleSidePanelUpdater(
 *               uiState, {payload: null}
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

exports.DEFAULT_MODAL = DEFAULT_MODAL;
var uiStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * A list of map control visibility and whether is it active.
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {Object} visibleLayers Default: `{show: true, active: false}`
 * @property {Object} mapLegend Default: `{show: true, active: false}`
 * @property {Object} toggle3d Default: `{show: true}`
 * @property {Object} splitMap Default: `{show: true}`
 * @public
 */

var DEFAULT_MAP_CONTROLS_FEATURES = {
  show: true,
  active: false,
  // defines which map index users are interacting with (through map controls)
  activeMapIndex: 0
};
var DEFAULT_MAP_CONTROLS = ['visibleLayers', 'mapLegend', 'toggle3d', 'splitMap', 'mapDraw'].reduce(function (_final, current) {
  return _objectSpread({}, _final, (0, _defineProperty2["default"])({}, current, DEFAULT_MAP_CONTROLS_FEATURES));
}, {});
/**
 * Default image export config
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {string} ratio Default: `'SCREEN'`,
 * @property {string} resolution Default: `'ONE_X'`,
 * @property {boolean} legend Default: `false`,
 * @property {string} imageDataUri Default: `''`,
 * @property {boolean} exporting Default: `false`
 * @property {boolean} error Default: `false`
 * @public
 */

exports.DEFAULT_MAP_CONTROLS = DEFAULT_MAP_CONTROLS;
var DEFAULT_EXPORT_IMAGE = {
  // user options
  ratio: _defaultSettings.EXPORT_IMG_RATIOS.SCREEN,
  resolution: _defaultSettings.RESOLUTIONS.ONE_X,
  legend: false,
  mapH: 0,
  mapW: 0,
  imageSize: {
    zoomOffset: 0,
    scale: 1,
    imageW: 0,
    imageH: 0
  },
  // exporting state
  imageDataUri: '',
  exporting: false,
  error: false
};
exports.DEFAULT_EXPORT_IMAGE = DEFAULT_EXPORT_IMAGE;
var DEFAULT_LOAD_FILES = {
  fileLoading: false
};
/**
 * Default initial `exportData` settings
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {string} selectedDataset Default: `''`,
 * @property {string} dataType Default: `'csv'`,
 * @property {boolean} filtered Default: `true`,
 * @property {boolean} config deprecated
 * @property {boolean} data used in modal config export. Default: `false`
 * @public
 */

exports.DEFAULT_LOAD_FILES = DEFAULT_LOAD_FILES;
var DEFAULT_EXPORT_DATA = {
  selectedDataset: '',
  dataType: _defaultSettings.EXPORT_DATA_TYPE.CSV,
  filtered: true
};
/**
 * @constant
 * @type {Array}
 */

exports.DEFAULT_EXPORT_DATA = DEFAULT_EXPORT_DATA;
var DEFAULT_NOTIFICATIONS = [];
/**
 * @constant
 * @type {Object}
 * @property {string} exportMapboxAccessToken - Default: null, this is used when we provide a default mapbox token for users to take advantage of
 * @property {string} userMapboxToken - Default: '', mapbox token provided by user through input field
 * @public
 */

exports.DEFAULT_NOTIFICATIONS = DEFAULT_NOTIFICATIONS;
var DEFAULT_EXPORT_HTML = {
  exportMapboxAccessToken: null,
  userMapboxToken: '',
  mode: _defaultSettings.EXPORT_HTML_MAP_MODES.READ
};
exports.DEFAULT_EXPORT_HTML = DEFAULT_EXPORT_HTML;
var DEFAULT_EXPORT_JSON = {
  hasData: true
};
exports.DEFAULT_EXPORT_JSON = DEFAULT_EXPORT_JSON;
var DEFAULT_EXPORT_MAP = (_DEFAULT_EXPORT_MAP = {}, (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMATS.HTML, DEFAULT_EXPORT_HTML), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMATS.JSON, DEFAULT_EXPORT_JSON), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, "format", _defaultSettings.EXPORT_MAP_FORMATS.HTML), _DEFAULT_EXPORT_MAP);
/**
 * Default initial `uiState`
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {boolean} readOnly Default: `false`
 * @property {string} activeSidePanel Default: `'layer'`
 * @property {string|null} currentModal Default: `'addData'`
 * @property {string|null} datasetKeyToRemove Default: `null`
 * @property {string|null} visibleDropdown Default: `null`
 * @property {Object} exportImage Default: [`DEFAULT_EXPORT_IMAGE`](#default_export_image)
 * @property {Object} exportData Default: [`DEFAULT_EXPORT_DATA`](#default_export_data)
 * @property {Object} mapControls Default: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @property {number} activeMapIndex defines which map the user clicked on. Default: 0
 * @public
 */

exports.DEFAULT_EXPORT_MAP = DEFAULT_EXPORT_MAP;
var INITIAL_UI_STATE = {
  readOnly: false,
  activeSidePanel: DEFAULT_ACTIVE_SIDE_PANEL,
  currentModal: DEFAULT_MODAL,
  datasetKeyToRemove: null,
  visibleDropdown: null,
  // export image modal ui
  exportImage: DEFAULT_EXPORT_IMAGE,
  // export data modal ui
  exportData: DEFAULT_EXPORT_DATA,
  // html export
  exportMap: DEFAULT_EXPORT_MAP,
  // map control panels
  mapControls: DEFAULT_MAP_CONTROLS,
  // ui notifications
  notifications: DEFAULT_NOTIFICATIONS,
  // load files
  loadFiles: DEFAULT_LOAD_FILES
};
/* Updaters */

/**
 * Toggle active side panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string|null} action.payload id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`. close side panel if `null`
 * @returns {Object} nextState
 * @public
 */

exports.INITIAL_UI_STATE = INITIAL_UI_STATE;

var toggleSidePanelUpdater = function toggleSidePanelUpdater(state, _ref) {
  var id = _ref.payload;
  return id === state.activeSidePanel ? state : _objectSpread({}, state, {
    activeSidePanel: id
  });
};
/**
 * Show and hide modal dialog
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string|null} action.payload id of modal to be shown, null to hide modals. One of:
 *
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @returns {Object} nextState
 * @public
 */


exports.toggleSidePanelUpdater = toggleSidePanelUpdater;

var toggleModalUpdater = function toggleModalUpdater(state, _ref2) {
  var id = _ref2.payload;
  return _objectSpread({}, state, {
    currentModal: id
  });
};
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload id of the dropdown
 * @returns {Object} nextState
 * @public
 */


exports.toggleModalUpdater = toggleModalUpdater;

var showExportDropdownUpdater = function showExportDropdownUpdater(state, _ref3) {
  var id = _ref3.payload;
  return _objectSpread({}, state, {
    visibleDropdown: id
  });
};
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.showExportDropdownUpdater = showExportDropdownUpdater;

var hideExportDropdownUpdater = function hideExportDropdownUpdater(state) {
  return _objectSpread({}, state, {
    visibleDropdown: null
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action action
 * @param {string} action.payload map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @returns {Object} nextState
 * @public
 */


exports.hideExportDropdownUpdater = hideExportDropdownUpdater;

var toggleMapControlUpdater = function toggleMapControlUpdater(state, _ref4) {
  var _ref4$payload = _ref4.payload,
      panelId = _ref4$payload.panelId,
      _ref4$payload$index = _ref4$payload.index,
      index = _ref4$payload$index === void 0 ? 0 : _ref4$payload$index;
  return _objectSpread({}, state, {
    mapControls: _objectSpread({}, state.mapControls, (0, _defineProperty2["default"])({}, panelId, _objectSpread({}, state.mapControls[panelId], {
      // this handles split map interaction
      // Toggling from within the same map will simply toggle the active property
      // Toggling from within different maps we set the active property to true
      active: index === state.mapControls[panelId].activeMapIndex ? !state.mapControls[panelId].active : true,
      activeMapIndex: index
    })))
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload dataset id
 * @returns {Object} nextState
 * @public
 */


exports.toggleMapControlUpdater = toggleMapControlUpdater;

var openDeleteModalUpdater = function openDeleteModalUpdater(state, _ref5) {
  var datasetKeyToRemove = _ref5.payload;
  return _objectSpread({}, state, {
    currentModal: _defaultSettings.DELETE_DATA_ID,
    datasetKeyToRemove: datasetKeyToRemove
  });
};
/**
 * Set `exportImage.legend` to `true` or `false`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.openDeleteModalUpdater = openDeleteModalUpdater;

var setExportImageSetting = function setExportImageSetting(state, _ref6) {
  var newSetting = _ref6.payload;

  var updated = _objectSpread({}, state.exportImage, {}, newSetting);

  var imageSize = (0, _exportUtils.calculateExportImageSize)(updated) || state.exportImage.imageSize;
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, updated, {
      imageSize: imageSize
    })
  });
};
/**
 * Set `exportImage.exporting` to `true`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.setExportImageSetting = setExportImageSetting;

var startExportingImage = function startExportingImage(state) {
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, state.exportImage, {
      exporting: true,
      imageDataUri: ''
    })
  });
};
/**
 * Set `exportImage.setExportImageDataUri` to a image dataUri
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload export image data uri
 * @returns {Object} nextState
 * @public
 */


exports.startExportingImage = startExportingImage;

var setExportImageDataUri = function setExportImageDataUri(state, _ref7) {
  var dataUri = _ref7.payload;
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, state.exportImage, {
      exporting: false,
      imageDataUri: dataUri
    })
  });
};

exports.setExportImageDataUri = setExportImageDataUri;

var setExportImageError = function setExportImageError(state, _ref8) {
  var error = _ref8.payload;
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, state.exportImage, {
      exporting: false,
      error: error
    })
  });
};
/**
 * Delete cached export image
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.setExportImageError = setExportImageError;

var cleanupExportImage = function cleanupExportImage(state) {
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, state.exportImage, {
      exporting: false,
      imageDataUri: '',
      error: false
    })
  });
};
/**
 * Set selected dataset for export
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload dataset id
 * @returns {Object} nextState
 * @public
 */


exports.cleanupExportImage = cleanupExportImage;

var setExportSelectedDatasetUpdater = function setExportSelectedDatasetUpdater(state, _ref9) {
  var dataset = _ref9.payload;
  return _objectSpread({}, state, {
    exportData: _objectSpread({}, state.exportData, {
      selectedDataset: dataset
    })
  });
};
/**
 * Set data format for exporting data
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload one of `'text/csv'`
 * @returns {Object} nextState
 * @public
 */


exports.setExportSelectedDatasetUpdater = setExportSelectedDatasetUpdater;

var setExportDataTypeUpdater = function setExportDataTypeUpdater(state, _ref10) {
  var dataType = _ref10.payload;
  return _objectSpread({}, state, {
    exportData: _objectSpread({}, state.exportData, {
      dataType: dataType
    })
  });
};
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {boolean} action.payload
 * @returns {Object} nextState
 * @public
 */


exports.setExportDataTypeUpdater = setExportDataTypeUpdater;

var setExportFilteredUpdater = function setExportFilteredUpdater(state, _ref11) {
  var filtered = _ref11.payload;
  return _objectSpread({}, state, {
    exportData: _objectSpread({}, state.exportData, {
      filtered: filtered
    })
  });
};
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.setExportFilteredUpdater = setExportFilteredUpdater;

var setExportDataUpdater = function setExportDataUpdater(state) {
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.JSON, _objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.JSON], {
      hasData: !state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.JSON].hasData
    })))
  });
};
/**
 * whether to export a mapbox access to HTML single page
 * @param {Object} state - `uiState`
 * @param {Object} action
 * @param {string} action.payload
 * @returns {Object} nextState
 * @public
 */


exports.setExportDataUpdater = setExportDataUpdater;

var setUserMapboxAccessTokenUpdater = function setUserMapboxAccessTokenUpdater(state, _ref12) {
  var userMapboxToken = _ref12.payload;
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.HTML, _objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.HTML], {
      userMapboxToken: userMapboxToken
    })))
  });
};
/**
 * Sets the export map format
 * @param {Object} state - `uiState`
 * @param {string} format to use to export the map onto
 * @return {Object} nextState
 */


exports.setUserMapboxAccessTokenUpdater = setUserMapboxAccessTokenUpdater;

var setExportMapFormatUpdater = function setExportMapFormatUpdater(state, _ref13) {
  var format = _ref13.payload;
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, {
      format: format
    })
  });
};
/**
 * Set the export html map mode
 * @param {Object} state - `uiState`
 * @param {string} mode to be set (available modes: EXPORT_HTML_MAP_MODES)
 * @return {{[p: string]: *}}
 */


exports.setExportMapFormatUpdater = setExportMapFormatUpdater;

var setExportMapHTMLMode = function setExportMapHTMLMode(state, _ref14) {
  var mode = _ref14.payload;
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.HTML, _objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.HTML], {
      mode: mode
    })))
  });
};
/**
 * Add a notification to be displayed
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {Object} action.payload
 * @returns {Object} nextState
 * @public
 */


exports.setExportMapHTMLMode = setExportMapHTMLMode;

var addNotificationUpdater = function addNotificationUpdater(state, _ref15) {
  var payload = _ref15.payload;
  return _objectSpread({}, state, {
    notifications: [].concat((0, _toConsumableArray2["default"])(state.notifications || []), [(0, _notificationsUtils.createNotification)(payload)])
  });
};
/**
 * Remove a notification
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {String} action.payload id of the notification to be removed
 * @returns {Object} nextState
 * @public
 */


exports.addNotificationUpdater = addNotificationUpdater;

var removeNotificationUpdater = function removeNotificationUpdater(state, _ref16) {
  var id = _ref16.payload;
  return _objectSpread({}, state, {
    notifications: state.notifications.filter(function (n) {
      return n.id !== id;
    })
  });
};
/**
 * Fired when file loading begin
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.removeNotificationUpdater = removeNotificationUpdater;

var loadFilesUpdater = function loadFilesUpdater(state) {
  return _objectSpread({}, state, {
    loadFiles: _objectSpread({}, state.loadFiles, {
      fileLoading: true
    })
  });
};
/**
 * Handles loading file success and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 */


exports.loadFilesUpdater = loadFilesUpdater;

var loadFilesSuccessUpdater = function loadFilesSuccessUpdater(state) {
  return _objectSpread({}, state, {
    loadFiles: _objectSpread({}, state.loadFiles, {
      fileLoading: false
    })
  });
};
/**
 * Handles load file error and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param state
 * @param error
 * @returns {Object} nextState
 * @public
 */


exports.loadFilesSuccessUpdater = loadFilesSuccessUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref17) {
  var error = _ref17.error;
  return addNotificationUpdater(_objectSpread({}, state, {
    loadFiles: _objectSpread({}, state.loadFiles, {
      fileLoading: false
    })
  }), {
    payload: (0, _notificationsUtils.errorNotification)({
      message: (error || {}).message || 'Failed to upload files',
      topic: _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global
    })
  });
};
/**
 * Handles toggle map split and reset all map control index to 0
 * @memberof uiStateUpdaters
 * @param state
 * @returns {Object} nextState
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread({}, state, {
    mapControls: Object.entries(state.mapControls).reduce(function (acc, entry) {
      return _objectSpread({}, acc, (0, _defineProperty2["default"])({}, entry[0], _objectSpread({}, entry[1], {
        activeMapIndex: 0
      })));
    }, {})
  });
};

exports.toggleSplitMapUpdater = toggleSplitMapUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91aS1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMIiwiREVGQVVMVF9NT0RBTCIsIkFERF9EQVRBX0lEIiwidWlTdGF0ZVVwZGF0ZXJzIiwiREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVMiLCJzaG93IiwiYWN0aXZlIiwiYWN0aXZlTWFwSW5kZXgiLCJERUZBVUxUX01BUF9DT05UUk9MUyIsInJlZHVjZSIsImZpbmFsIiwiY3VycmVudCIsIkRFRkFVTFRfRVhQT1JUX0lNQUdFIiwicmF0aW8iLCJFWFBPUlRfSU1HX1JBVElPUyIsIlNDUkVFTiIsInJlc29sdXRpb24iLCJSRVNPTFVUSU9OUyIsIk9ORV9YIiwibGVnZW5kIiwibWFwSCIsIm1hcFciLCJpbWFnZVNpemUiLCJ6b29tT2Zmc2V0Iiwic2NhbGUiLCJpbWFnZVciLCJpbWFnZUgiLCJpbWFnZURhdGFVcmkiLCJleHBvcnRpbmciLCJlcnJvciIsIkRFRkFVTFRfTE9BRF9GSUxFUyIsImZpbGVMb2FkaW5nIiwiREVGQVVMVF9FWFBPUlRfREFUQSIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFUeXBlIiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsImZpbHRlcmVkIiwiREVGQVVMVF9OT1RJRklDQVRJT05TIiwiREVGQVVMVF9FWFBPUlRfSFRNTCIsImV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIiwidXNlck1hcGJveFRva2VuIiwibW9kZSIsIkVYUE9SVF9IVE1MX01BUF9NT0RFUyIsIlJFQUQiLCJERUZBVUxUX0VYUE9SVF9KU09OIiwiaGFzRGF0YSIsIkRFRkFVTFRfRVhQT1JUX01BUCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiSU5JVElBTF9VSV9TVEFURSIsInJlYWRPbmx5IiwiYWN0aXZlU2lkZVBhbmVsIiwiY3VycmVudE1vZGFsIiwiZGF0YXNldEtleVRvUmVtb3ZlIiwidmlzaWJsZURyb3Bkb3duIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwibWFwQ29udHJvbHMiLCJub3RpZmljYXRpb25zIiwibG9hZEZpbGVzIiwidG9nZ2xlU2lkZVBhbmVsVXBkYXRlciIsInN0YXRlIiwiaWQiLCJwYXlsb2FkIiwidG9nZ2xlTW9kYWxVcGRhdGVyIiwic2hvd0V4cG9ydERyb3Bkb3duVXBkYXRlciIsImhpZGVFeHBvcnREcm9wZG93blVwZGF0ZXIiLCJ0b2dnbGVNYXBDb250cm9sVXBkYXRlciIsInBhbmVsSWQiLCJpbmRleCIsIm9wZW5EZWxldGVNb2RhbFVwZGF0ZXIiLCJERUxFVEVfREFUQV9JRCIsInNldEV4cG9ydEltYWdlU2V0dGluZyIsIm5ld1NldHRpbmciLCJ1cGRhdGVkIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsImRhdGFVcmkiLCJzZXRFeHBvcnRJbWFnZUVycm9yIiwiY2xlYW51cEV4cG9ydEltYWdlIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0VXBkYXRlciIsImRhdGFzZXQiLCJzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIiLCJzZXRFeHBvcnRGaWx0ZXJlZFVwZGF0ZXIiLCJzZXRFeHBvcnREYXRhVXBkYXRlciIsInNldFVzZXJNYXBib3hBY2Nlc3NUb2tlblVwZGF0ZXIiLCJzZXRFeHBvcnRNYXBGb3JtYXRVcGRhdGVyIiwiZm9ybWF0Iiwic2V0RXhwb3J0TWFwSFRNTE1vZGUiLCJhZGROb3RpZmljYXRpb25VcGRhdGVyIiwicmVtb3ZlTm90aWZpY2F0aW9uVXBkYXRlciIsImZpbHRlciIsIm4iLCJsb2FkRmlsZXNVcGRhdGVyIiwibG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIiLCJsb2FkRmlsZXNFcnJVcGRhdGVyIiwibWVzc2FnZSIsInRvcGljIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTIiwiZ2xvYmFsIiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwiT2JqZWN0IiwiZW50cmllcyIsImFjYyIsImVudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQVVBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLHlCQUF5QixHQUFHLE9BQWxDOztBQUNBLElBQU1DLGFBQWEsR0FBR0MsNEJBQXRCO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7OztBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFXQSxJQUFNQyw2QkFBNkIsR0FBRztBQUNwQ0MsRUFBQUEsSUFBSSxFQUFFLElBRDhCO0FBRXBDQyxFQUFBQSxNQUFNLEVBQUUsS0FGNEI7QUFHcEM7QUFDQUMsRUFBQUEsY0FBYyxFQUFFO0FBSm9CLENBQXRDO0FBT08sSUFBTUMsb0JBQW9CLEdBQUcsQ0FDbEMsZUFEa0MsRUFFbEMsV0FGa0MsRUFHbEMsVUFIa0MsRUFJbEMsVUFKa0MsRUFLbEMsU0FMa0MsRUFNbENDLE1BTmtDLENBT2xDLFVBQUNDLE1BQUQsRUFBUUMsT0FBUjtBQUFBLDJCQUNLRCxNQURMLHVDQUVHQyxPQUZILEVBRWFQLDZCQUZiO0FBQUEsQ0FQa0MsRUFXbEMsRUFYa0MsQ0FBN0I7QUFjUDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sSUFBTVEsb0JBQW9CLEdBQUc7QUFDbEM7QUFDQUMsRUFBQUEsS0FBSyxFQUFFQyxtQ0FBa0JDLE1BRlM7QUFHbENDLEVBQUFBLFVBQVUsRUFBRUMsNkJBQVlDLEtBSFU7QUFJbENDLEVBQUFBLE1BQU0sRUFBRSxLQUowQjtBQUtsQ0MsRUFBQUEsSUFBSSxFQUFFLENBTDRCO0FBTWxDQyxFQUFBQSxJQUFJLEVBQUUsQ0FONEI7QUFPbENDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxVQUFVLEVBQUUsQ0FESDtBQUVUQyxJQUFBQSxLQUFLLEVBQUUsQ0FGRTtBQUdUQyxJQUFBQSxNQUFNLEVBQUUsQ0FIQztBQUlUQyxJQUFBQSxNQUFNLEVBQUU7QUFKQyxHQVB1QjtBQWFsQztBQUNBQyxFQUFBQSxZQUFZLEVBQUUsRUFkb0I7QUFlbENDLEVBQUFBLFNBQVMsRUFBRSxLQWZ1QjtBQWdCbENDLEVBQUFBLEtBQUssRUFBRTtBQWhCMkIsQ0FBN0I7O0FBbUJBLElBQU1DLGtCQUFrQixHQUFHO0FBQ2hDQyxFQUFBQSxXQUFXLEVBQUU7QUFEbUIsQ0FBM0I7QUFJUDs7Ozs7Ozs7Ozs7Ozs7QUFZTyxJQUFNQyxtQkFBbUIsR0FBRztBQUNqQ0MsRUFBQUEsZUFBZSxFQUFFLEVBRGdCO0FBRWpDQyxFQUFBQSxRQUFRLEVBQUVDLGtDQUFpQkMsR0FGTTtBQUdqQ0MsRUFBQUEsUUFBUSxFQUFFO0FBSHVCLENBQTVCO0FBTVA7Ozs7OztBQUlPLElBQU1DLHFCQUFxQixHQUFHLEVBQTlCO0FBRVA7Ozs7Ozs7OztBQU9PLElBQU1DLG1CQUFtQixHQUFHO0FBQ2pDQyxFQUFBQSx1QkFBdUIsRUFBRSxJQURRO0FBRWpDQyxFQUFBQSxlQUFlLEVBQUUsRUFGZ0I7QUFHakNDLEVBQUFBLElBQUksRUFBRUMsdUNBQXNCQztBQUhLLENBQTVCOztBQU1BLElBQU1DLG1CQUFtQixHQUFHO0FBQ2pDQyxFQUFBQSxPQUFPLEVBQUU7QUFEd0IsQ0FBNUI7O0FBSUEsSUFBTUMsa0JBQWtCLG9GQUM1QkMsb0NBQW1CQyxJQURTLEVBQ0ZWLG1CQURFLHlEQUU1QlMsb0NBQW1CRSxJQUZTLEVBRUZMLG1CQUZFLG1FQUdyQkcsb0NBQW1CQyxJQUhFLHVCQUF4QjtBQU1QOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sSUFBTUUsZ0JBQWdCLEdBQUc7QUFDOUJDLEVBQUFBLFFBQVEsRUFBRSxLQURvQjtBQUU5QkMsRUFBQUEsZUFBZSxFQUFFckQseUJBRmE7QUFHOUJzRCxFQUFBQSxZQUFZLEVBQUVyRCxhQUhnQjtBQUk5QnNELEVBQUFBLGtCQUFrQixFQUFFLElBSlU7QUFLOUJDLEVBQUFBLGVBQWUsRUFBRSxJQUxhO0FBTTlCO0FBQ0FDLEVBQUFBLFdBQVcsRUFBRTdDLG9CQVBpQjtBQVE5QjtBQUNBOEMsRUFBQUEsVUFBVSxFQUFFMUIsbUJBVGtCO0FBVTlCO0FBQ0EyQixFQUFBQSxTQUFTLEVBQUVaLGtCQVhtQjtBQVk5QjtBQUNBYSxFQUFBQSxXQUFXLEVBQUVwRCxvQkFiaUI7QUFjOUI7QUFDQXFELEVBQUFBLGFBQWEsRUFBRXZCLHFCQWZlO0FBZ0I5QjtBQUNBd0IsRUFBQUEsU0FBUyxFQUFFaEM7QUFqQm1CLENBQXpCO0FBb0JQOztBQUNBOzs7Ozs7Ozs7Ozs7QUFTTyxJQUFNaUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxLQUFELFFBQTBCO0FBQUEsTUFBUkMsRUFBUSxRQUFqQkMsT0FBaUI7QUFDOUQsU0FBT0QsRUFBRSxLQUFLRCxLQUFLLENBQUNYLGVBQWIsR0FDSFcsS0FERyxxQkFHRUEsS0FIRjtBQUlEWCxJQUFBQSxlQUFlLEVBQUVZO0FBSmhCLElBQVA7QUFNRCxDQVBNO0FBU1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0gsS0FBRDtBQUFBLE1BQWtCQyxFQUFsQixTQUFTQyxPQUFUO0FBQUEsMkJBQzdCRixLQUQ2QjtBQUVoQ1YsSUFBQUEsWUFBWSxFQUFFVztBQUZrQjtBQUFBLENBQTNCO0FBS1A7Ozs7Ozs7Ozs7Ozs7QUFTTyxJQUFNRyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNKLEtBQUQ7QUFBQSxNQUFrQkMsRUFBbEIsU0FBU0MsT0FBVDtBQUFBLDJCQUNwQ0YsS0FEb0M7QUFFdkNSLElBQUFBLGVBQWUsRUFBRVM7QUFGc0I7QUFBQSxDQUFsQztBQUtQOzs7Ozs7Ozs7OztBQU9PLElBQU1JLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQUwsS0FBSztBQUFBLDJCQUN6Q0EsS0FEeUM7QUFFNUNSLElBQUFBLGVBQWUsRUFBRTtBQUYyQjtBQUFBLENBQXZDO0FBS1A7Ozs7Ozs7Ozs7Ozs7QUFTTyxJQUFNYyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNOLEtBQUQ7QUFBQSw0QkFBU0UsT0FBVDtBQUFBLE1BQW1CSyxPQUFuQixpQkFBbUJBLE9BQW5CO0FBQUEsMENBQTRCQyxLQUE1QjtBQUFBLE1BQTRCQSxLQUE1QixvQ0FBb0MsQ0FBcEM7QUFBQSwyQkFDbENSLEtBRGtDO0FBRXJDSixJQUFBQSxXQUFXLG9CQUNOSSxLQUFLLENBQUNKLFdBREEsdUNBRVJXLE9BRlEsb0JBR0pQLEtBQUssQ0FBQ0osV0FBTixDQUFrQlcsT0FBbEIsQ0FISTtBQUlQO0FBQ0E7QUFDQTtBQUNBakUsTUFBQUEsTUFBTSxFQUNKa0UsS0FBSyxLQUFLUixLQUFLLENBQUNKLFdBQU4sQ0FBa0JXLE9BQWxCLEVBQTJCaEUsY0FBckMsR0FDSSxDQUFDeUQsS0FBSyxDQUFDSixXQUFOLENBQWtCVyxPQUFsQixFQUEyQmpFLE1BRGhDLEdBRUksSUFWQztBQVdQQyxNQUFBQSxjQUFjLEVBQUVpRTtBQVhUO0FBRjBCO0FBQUEsQ0FBaEM7QUFrQlA7Ozs7Ozs7Ozs7Ozs7QUFTTyxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNULEtBQUQ7QUFBQSxNQUFrQlQsa0JBQWxCLFNBQVNXLE9BQVQ7QUFBQSwyQkFDakNGLEtBRGlDO0FBRXBDVixJQUFBQSxZQUFZLEVBQUVvQiwrQkFGc0I7QUFHcENuQixJQUFBQSxrQkFBa0IsRUFBbEJBO0FBSG9DO0FBQUEsQ0FBL0I7QUFNUDs7Ozs7Ozs7Ozs7QUFPTyxJQUFNb0IscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDWCxLQUFELFNBQWtDO0FBQUEsTUFBaEJZLFVBQWdCLFNBQXpCVixPQUF5Qjs7QUFDckUsTUFBTVcsT0FBTyxxQkFBT2IsS0FBSyxDQUFDUCxXQUFiLE1BQTZCbUIsVUFBN0IsQ0FBYjs7QUFDQSxNQUFNdEQsU0FBUyxHQUFHLDJDQUF5QnVELE9BQXpCLEtBQXFDYixLQUFLLENBQUNQLFdBQU4sQ0FBa0JuQyxTQUF6RTtBQUVBLDJCQUNLMEMsS0FETDtBQUVFUCxJQUFBQSxXQUFXLG9CQUNOb0IsT0FETTtBQUVUdkQsTUFBQUEsU0FBUyxFQUFUQTtBQUZTO0FBRmI7QUFPRCxDQVhNO0FBYVA7Ozs7Ozs7Ozs7O0FBT08sSUFBTXdELG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQWQsS0FBSztBQUFBLDJCQUNuQ0EsS0FEbUM7QUFFdENQLElBQUFBLFdBQVcsb0JBQ05PLEtBQUssQ0FBQ1AsV0FEQTtBQUVUN0IsTUFBQUEsU0FBUyxFQUFFLElBRkY7QUFHVEQsTUFBQUEsWUFBWSxFQUFFO0FBSEw7QUFGMkI7QUFBQSxDQUFqQztBQVNQOzs7Ozs7Ozs7Ozs7O0FBU08sSUFBTW9ELHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ2YsS0FBRDtBQUFBLE1BQWtCZ0IsT0FBbEIsU0FBU2QsT0FBVDtBQUFBLDJCQUNoQ0YsS0FEZ0M7QUFFbkNQLElBQUFBLFdBQVcsb0JBQ05PLEtBQUssQ0FBQ1AsV0FEQTtBQUVUN0IsTUFBQUEsU0FBUyxFQUFFLEtBRkY7QUFHVEQsTUFBQUEsWUFBWSxFQUFFcUQ7QUFITDtBQUZ3QjtBQUFBLENBQTlCOzs7O0FBU0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDakIsS0FBRDtBQUFBLE1BQWtCbkMsS0FBbEIsU0FBU3FDLE9BQVQ7QUFBQSwyQkFDOUJGLEtBRDhCO0FBRWpDUCxJQUFBQSxXQUFXLG9CQUNOTyxLQUFLLENBQUNQLFdBREE7QUFFVDdCLE1BQUFBLFNBQVMsRUFBRSxLQUZGO0FBR1RDLE1BQUFBLEtBQUssRUFBTEE7QUFIUztBQUZzQjtBQUFBLENBQTVCO0FBU1A7Ozs7Ozs7Ozs7O0FBT08sSUFBTXFELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQWxCLEtBQUs7QUFBQSwyQkFDbENBLEtBRGtDO0FBRXJDUCxJQUFBQSxXQUFXLG9CQUNOTyxLQUFLLENBQUNQLFdBREE7QUFFVDdCLE1BQUFBLFNBQVMsRUFBRSxLQUZGO0FBR1RELE1BQUFBLFlBQVksRUFBRSxFQUhMO0FBSVRFLE1BQUFBLEtBQUssRUFBRTtBQUpFO0FBRjBCO0FBQUEsQ0FBaEM7QUFVUDs7Ozs7Ozs7Ozs7OztBQVNPLElBQU1zRCwrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQWtDLENBQUNuQixLQUFEO0FBQUEsTUFBa0JvQixPQUFsQixTQUFTbEIsT0FBVDtBQUFBLDJCQUMxQ0YsS0FEMEM7QUFFN0NOLElBQUFBLFVBQVUsb0JBQ0xNLEtBQUssQ0FBQ04sVUFERDtBQUVSekIsTUFBQUEsZUFBZSxFQUFFbUQ7QUFGVDtBQUZtQztBQUFBLENBQXhDO0FBUVA7Ozs7Ozs7Ozs7Ozs7QUFTTyxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNyQixLQUFEO0FBQUEsTUFBa0I5QixRQUFsQixVQUFTZ0MsT0FBVDtBQUFBLDJCQUNuQ0YsS0FEbUM7QUFFdENOLElBQUFBLFVBQVUsb0JBQ0xNLEtBQUssQ0FBQ04sVUFERDtBQUVSeEIsTUFBQUEsUUFBUSxFQUFSQTtBQUZRO0FBRjRCO0FBQUEsQ0FBakM7QUFRUDs7Ozs7Ozs7Ozs7OztBQVNPLElBQU1vRCx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUN0QixLQUFEO0FBQUEsTUFBa0IzQixRQUFsQixVQUFTNkIsT0FBVDtBQUFBLDJCQUNuQ0YsS0FEbUM7QUFFdENOLElBQUFBLFVBQVUsb0JBQ0xNLEtBQUssQ0FBQ04sVUFERDtBQUVSckIsTUFBQUEsUUFBUSxFQUFSQTtBQUZRO0FBRjRCO0FBQUEsQ0FBakM7QUFRUDs7Ozs7Ozs7Ozs7QUFPTyxJQUFNa0Qsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBdkIsS0FBSztBQUFBLDJCQUNwQ0EsS0FEb0M7QUFFdkNMLElBQUFBLFNBQVMsb0JBQ0pLLEtBQUssQ0FBQ0wsU0FERix1Q0FFTlgsb0NBQW1CRSxJQUZiLG9CQUdGYyxLQUFLLENBQUNMLFNBQU4sQ0FBZ0JYLG9DQUFtQkUsSUFBbkMsQ0FIRTtBQUlMSixNQUFBQSxPQUFPLEVBQUUsQ0FBQ2tCLEtBQUssQ0FBQ0wsU0FBTixDQUFnQlgsb0NBQW1CRSxJQUFuQyxFQUF5Q0o7QUFKOUM7QUFGOEI7QUFBQSxDQUFsQztBQVdQOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNMEMsK0JBQStCLEdBQUcsU0FBbENBLCtCQUFrQyxDQUFDeEIsS0FBRDtBQUFBLE1BQWtCdkIsZUFBbEIsVUFBU3lCLE9BQVQ7QUFBQSwyQkFDMUNGLEtBRDBDO0FBRTdDTCxJQUFBQSxTQUFTLG9CQUNKSyxLQUFLLENBQUNMLFNBREYsdUNBRU5YLG9DQUFtQkMsSUFGYixvQkFHRmUsS0FBSyxDQUFDTCxTQUFOLENBQWdCWCxvQ0FBbUJDLElBQW5DLENBSEU7QUFJTFIsTUFBQUEsZUFBZSxFQUFmQTtBQUpLO0FBRm9DO0FBQUEsQ0FBeEM7QUFXUDs7Ozs7Ozs7OztBQU1PLElBQU1nRCx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUN6QixLQUFEO0FBQUEsTUFBa0IwQixNQUFsQixVQUFTeEIsT0FBVDtBQUFBLDJCQUNwQ0YsS0FEb0M7QUFFdkNMLElBQUFBLFNBQVMsb0JBQ0pLLEtBQUssQ0FBQ0wsU0FERjtBQUVQK0IsTUFBQUEsTUFBTSxFQUFOQTtBQUZPO0FBRjhCO0FBQUEsQ0FBbEM7QUFRUDs7Ozs7Ozs7OztBQU1PLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQzNCLEtBQUQ7QUFBQSxNQUFrQnRCLElBQWxCLFVBQVN3QixPQUFUO0FBQUEsMkJBQy9CRixLQUQrQjtBQUVsQ0wsSUFBQUEsU0FBUyxvQkFDSkssS0FBSyxDQUFDTCxTQURGLHVDQUVOWCxvQ0FBbUJDLElBRmIsb0JBR0ZlLEtBQUssQ0FBQ0wsU0FBTixDQUFnQlgsb0NBQW1CQyxJQUFuQyxDQUhFO0FBSUxQLE1BQUFBLElBQUksRUFBSkE7QUFKSztBQUZ5QjtBQUFBLENBQTdCO0FBV1A7Ozs7Ozs7Ozs7Ozs7QUFTTyxJQUFNa0Qsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDNUIsS0FBRDtBQUFBLE1BQVNFLE9BQVQsVUFBU0EsT0FBVDtBQUFBLDJCQUNqQ0YsS0FEaUM7QUFFcENILElBQUFBLGFBQWEsZ0RBQU9HLEtBQUssQ0FBQ0gsYUFBTixJQUF1QixFQUE5QixJQUFtQyw0Q0FBbUJLLE9BQW5CLENBQW5DO0FBRnVCO0FBQUEsQ0FBL0I7QUFLUDs7Ozs7Ozs7Ozs7OztBQVNPLElBQU0yQix5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUM3QixLQUFEO0FBQUEsTUFBa0JDLEVBQWxCLFVBQVNDLE9BQVQ7QUFBQSwyQkFDcENGLEtBRG9DO0FBRXZDSCxJQUFBQSxhQUFhLEVBQUVHLEtBQUssQ0FBQ0gsYUFBTixDQUFvQmlDLE1BQXBCLENBQTJCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUM5QixFQUFGLEtBQVNBLEVBQWI7QUFBQSxLQUE1QjtBQUZ3QjtBQUFBLENBQWxDO0FBS1A7Ozs7Ozs7Ozs7O0FBT08sSUFBTStCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQWhDLEtBQUs7QUFBQSwyQkFDaENBLEtBRGdDO0FBRW5DRixJQUFBQSxTQUFTLG9CQUNKRSxLQUFLLENBQUNGLFNBREY7QUFFUC9CLE1BQUFBLFdBQVcsRUFBRTtBQUZOO0FBRjBCO0FBQUEsQ0FBOUI7QUFRUDs7Ozs7Ozs7OztBQU1PLElBQU1rRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFqQyxLQUFLO0FBQUEsMkJBQ3ZDQSxLQUR1QztBQUUxQ0YsSUFBQUEsU0FBUyxvQkFDSkUsS0FBSyxDQUFDRixTQURGO0FBRVAvQixNQUFBQSxXQUFXLEVBQUU7QUFGTjtBQUZpQztBQUFBLENBQXJDO0FBUVA7Ozs7Ozs7Ozs7OztBQVFPLElBQU1tRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNsQyxLQUFEO0FBQUEsTUFBU25DLEtBQVQsVUFBU0EsS0FBVDtBQUFBLFNBQ2pDK0Qsc0JBQXNCLG1CQUVmNUIsS0FGZTtBQUdsQkYsSUFBQUEsU0FBUyxvQkFDSkUsS0FBSyxDQUFDRixTQURGO0FBRVAvQixNQUFBQSxXQUFXLEVBQUU7QUFGTjtBQUhTLE1BUXBCO0FBQ0VtQyxJQUFBQSxPQUFPLEVBQUUsMkNBQWtCO0FBQ3pCaUMsTUFBQUEsT0FBTyxFQUFFLENBQUN0RSxLQUFLLElBQUksRUFBVixFQUFjc0UsT0FBZCxJQUF5Qix3QkFEVDtBQUV6QkMsTUFBQUEsS0FBSyxFQUFFQyw2Q0FBNEJDO0FBRlYsS0FBbEI7QUFEWCxHQVJvQixDQURXO0FBQUEsQ0FBNUI7QUFpQlA7Ozs7Ozs7Ozs7O0FBT08sSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBdkMsS0FBSztBQUFBLDJCQUNyQ0EsS0FEcUM7QUFFeENKLElBQUFBLFdBQVcsRUFBRTRDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlekMsS0FBSyxDQUFDSixXQUFyQixFQUFrQ25ELE1BQWxDLENBQ1gsVUFBQ2lHLEdBQUQsRUFBTUMsS0FBTjtBQUFBLCtCQUNLRCxHQURMLHVDQUVHQyxLQUFLLENBQUMsQ0FBRCxDQUZSLG9CQUdPQSxLQUFLLENBQUMsQ0FBRCxDQUhaO0FBSUlwRyxRQUFBQSxjQUFjLEVBQUU7QUFKcEI7QUFBQSxLQURXLEVBUVgsRUFSVztBQUYyQjtBQUFBLENBQW5DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtcclxuICBBRERfREFUQV9JRCxcclxuICBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MsXHJcbiAgREVMRVRFX0RBVEFfSUQsXHJcbiAgRVhQT1JUX0RBVEFfVFlQRSxcclxuICBFWFBPUlRfSFRNTF9NQVBfTU9ERVMsXHJcbiAgRVhQT1JUX0lNR19SQVRJT1MsXHJcbiAgRVhQT1JUX01BUF9GT1JNQVRTLFxyXG4gIFJFU09MVVRJT05TXHJcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge2NyZWF0ZU5vdGlmaWNhdGlvbiwgZXJyb3JOb3RpZmljYXRpb259IGZyb20gJ3V0aWxzL25vdGlmaWNhdGlvbnMtdXRpbHMnO1xyXG5pbXBvcnQge2NhbGN1bGF0ZUV4cG9ydEltYWdlU2l6ZX0gZnJvbSAndXRpbHMvZXhwb3J0LXV0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMID0gJ2xheWVyJztcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9EQUwgPSBBRERfREFUQV9JRDtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGVycyBmb3IgYHVpU3RhdGVgIHJlZHVjZXIuIENhbiBiZSB1c2VkIGluIHlvdXIgcm9vdCByZWR1Y2VyIHRvIGRpcmVjdGx5IG1vZGlmeSBrZXBsZXIuZ2wncyBzdGF0ZS5cclxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge3VpU3RhdGVVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcclxuICogLy8gUm9vdCBSZWR1Y2VyXHJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXHJcbiAqICBhcHA6IGFwcFJlZHVjZXJcclxuICogfSk7XHJcbiAqXHJcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAqICAgIC8vIGNsaWNrIGJ1dHRvbiB0byBjbG9zZSBzaWRlIHBhbmVsXHJcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XHJcbiAqICAgICAgcmV0dXJuIHtcclxuICogICAgICAgIC4uLnN0YXRlLFxyXG4gKiAgICAgICAga2VwbGVyR2w6IHtcclxuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXHJcbiAqICAgICAgICAgIGZvbzoge1xyXG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXHJcbiAqICAgICAgICAgICAgIHVpU3RhdGU6IHVpU3RhdGVVcGRhdGVycy50b2dnbGVTaWRlUGFuZWxVcGRhdGVyKFxyXG4gKiAgICAgICAgICAgICAgIHVpU3RhdGUsIHtwYXlsb2FkOiBudWxsfVxyXG4gKiAgICAgICAgICAgICApXHJcbiAqICAgICAgICAgIH1cclxuICogICAgICAgIH1cclxuICogICAgICB9O1xyXG4gKiAgfVxyXG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xyXG4gKiB9O1xyXG4gKlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5jb25zdCB1aVN0YXRlVXBkYXRlcnMgPSBudWxsO1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4vKipcclxuICogQSBsaXN0IG9mIG1hcCBjb250cm9sIHZpc2liaWxpdHkgYW5kIHdoZXRoZXIgaXMgaXQgYWN0aXZlLlxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gdmlzaWJsZUxheWVycyBEZWZhdWx0OiBge3Nob3c6IHRydWUsIGFjdGl2ZTogZmFsc2V9YFxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbWFwTGVnZW5kIERlZmF1bHQ6IGB7c2hvdzogdHJ1ZSwgYWN0aXZlOiBmYWxzZX1gXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0b2dnbGUzZCBEZWZhdWx0OiBge3Nob3c6IHRydWV9YFxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gc3BsaXRNYXAgRGVmYXVsdDogYHtzaG93OiB0cnVlfWBcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVMgPSB7XHJcbiAgc2hvdzogdHJ1ZSxcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIC8vIGRlZmluZXMgd2hpY2ggbWFwIGluZGV4IHVzZXJzIGFyZSBpbnRlcmFjdGluZyB3aXRoICh0aHJvdWdoIG1hcCBjb250cm9scylcclxuICBhY3RpdmVNYXBJbmRleDogMFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFQX0NPTlRST0xTID0gW1xyXG4gICd2aXNpYmxlTGF5ZXJzJyxcclxuICAnbWFwTGVnZW5kJyxcclxuICAndG9nZ2xlM2QnLFxyXG4gICdzcGxpdE1hcCcsXHJcbiAgJ21hcERyYXcnXHJcbl0ucmVkdWNlKFxyXG4gIChmaW5hbCwgY3VycmVudCkgPT4gKHtcclxuICAgIC4uLmZpbmFsLFxyXG4gICAgW2N1cnJlbnRdOiBERUZBVUxUX01BUF9DT05UUk9MU19GRUFUVVJFU1xyXG4gIH0pLFxyXG4gIHt9XHJcbik7XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBpbWFnZSBleHBvcnQgY29uZmlnXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByYXRpbyBEZWZhdWx0OiBgJ1NDUkVFTidgLFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVzb2x1dGlvbiBEZWZhdWx0OiBgJ09ORV9YJ2AsXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbGVnZW5kIERlZmF1bHQ6IGBmYWxzZWAsXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpbWFnZURhdGFVcmkgRGVmYXVsdDogYCcnYCxcclxuICogQHByb3BlcnR5IHtib29sZWFufSBleHBvcnRpbmcgRGVmYXVsdDogYGZhbHNlYFxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGVycm9yIERlZmF1bHQ6IGBmYWxzZWBcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0lNQUdFID0ge1xyXG4gIC8vIHVzZXIgb3B0aW9uc1xyXG4gIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5TQ1JFRU4sXHJcbiAgcmVzb2x1dGlvbjogUkVTT0xVVElPTlMuT05FX1gsXHJcbiAgbGVnZW5kOiBmYWxzZSxcclxuICBtYXBIOiAwLFxyXG4gIG1hcFc6IDAsXHJcbiAgaW1hZ2VTaXplOiB7XHJcbiAgICB6b29tT2Zmc2V0OiAwLFxyXG4gICAgc2NhbGU6IDEsXHJcbiAgICBpbWFnZVc6IDAsXHJcbiAgICBpbWFnZUg6IDBcclxuICB9LFxyXG4gIC8vIGV4cG9ydGluZyBzdGF0ZVxyXG4gIGltYWdlRGF0YVVyaTogJycsXHJcbiAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICBlcnJvcjogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPQURfRklMRVMgPSB7XHJcbiAgZmlsZUxvYWRpbmc6IGZhbHNlXHJcbn07XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBpbml0aWFsIGBleHBvcnREYXRhYCBzZXR0aW5nc1xyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2VsZWN0ZWREYXRhc2V0IERlZmF1bHQ6IGAnJ2AsXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXRhVHlwZSBEZWZhdWx0OiBgJ2NzdidgLFxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbHRlcmVkIERlZmF1bHQ6IGB0cnVlYCxcclxuICogQHByb3BlcnR5IHtib29sZWFufSBjb25maWcgZGVwcmVjYXRlZFxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgdXNlZCBpbiBtb2RhbCBjb25maWcgZXhwb3J0LiBEZWZhdWx0OiBgZmFsc2VgXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYUE9SVF9EQVRBID0ge1xyXG4gIHNlbGVjdGVkRGF0YXNldDogJycsXHJcbiAgZGF0YVR5cGU6IEVYUE9SVF9EQVRBX1RZUEUuQ1NWLFxyXG4gIGZpbHRlcmVkOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtBcnJheX1cclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTlMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge09iamVjdH1cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIC0gRGVmYXVsdDogbnVsbCwgdGhpcyBpcyB1c2VkIHdoZW4gd2UgcHJvdmlkZSBhIGRlZmF1bHQgbWFwYm94IHRva2VuIGZvciB1c2VycyB0byB0YWtlIGFkdmFudGFnZSBvZlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXNlck1hcGJveFRva2VuIC0gRGVmYXVsdDogJycsIG1hcGJveCB0b2tlbiBwcm92aWRlZCBieSB1c2VyIHRocm91Z2ggaW5wdXQgZmllbGRcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0hUTUwgPSB7XHJcbiAgZXhwb3J0TWFwYm94QWNjZXNzVG9rZW46IG51bGwsXHJcbiAgdXNlck1hcGJveFRva2VuOiAnJyxcclxuICBtb2RlOiBFWFBPUlRfSFRNTF9NQVBfTU9ERVMuUkVBRFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0pTT04gPSB7XHJcbiAgaGFzRGF0YTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX01BUCA9IHtcclxuICBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdOiBERUZBVUxUX0VYUE9SVF9IVE1MLFxyXG4gIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSlNPTl06IERFRkFVTFRfRVhQT1JUX0pTT04sXHJcbiAgZm9ybWF0OiBFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgaW5pdGlhbCBgdWlTdGF0ZWBcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge09iamVjdH1cclxuICogQHByb3BlcnR5IHtib29sZWFufSByZWFkT25seSBEZWZhdWx0OiBgZmFsc2VgXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhY3RpdmVTaWRlUGFuZWwgRGVmYXVsdDogYCdsYXllcidgXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IGN1cnJlbnRNb2RhbCBEZWZhdWx0OiBgJ2FkZERhdGEnYFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBkYXRhc2V0S2V5VG9SZW1vdmUgRGVmYXVsdDogYG51bGxgXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHZpc2libGVEcm9wZG93biBEZWZhdWx0OiBgbnVsbGBcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGV4cG9ydEltYWdlIERlZmF1bHQ6IFtgREVGQVVMVF9FWFBPUlRfSU1BR0VgXSgjZGVmYXVsdF9leHBvcnRfaW1hZ2UpXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBleHBvcnREYXRhIERlZmF1bHQ6IFtgREVGQVVMVF9FWFBPUlRfREFUQWBdKCNkZWZhdWx0X2V4cG9ydF9kYXRhKVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbWFwQ29udHJvbHMgRGVmYXVsdDogW2BERUZBVUxUX01BUF9DT05UUk9MU2BdKCNkZWZhdWx0X21hcF9jb250cm9scylcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFjdGl2ZU1hcEluZGV4IGRlZmluZXMgd2hpY2ggbWFwIHRoZSB1c2VyIGNsaWNrZWQgb24uIERlZmF1bHQ6IDBcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfVUlfU1RBVEUgPSB7XHJcbiAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gIGFjdGl2ZVNpZGVQYW5lbDogREVGQVVMVF9BQ1RJVkVfU0lERV9QQU5FTCxcclxuICBjdXJyZW50TW9kYWw6IERFRkFVTFRfTU9EQUwsXHJcbiAgZGF0YXNldEtleVRvUmVtb3ZlOiBudWxsLFxyXG4gIHZpc2libGVEcm9wZG93bjogbnVsbCxcclxuICAvLyBleHBvcnQgaW1hZ2UgbW9kYWwgdWlcclxuICBleHBvcnRJbWFnZTogREVGQVVMVF9FWFBPUlRfSU1BR0UsXHJcbiAgLy8gZXhwb3J0IGRhdGEgbW9kYWwgdWlcclxuICBleHBvcnREYXRhOiBERUZBVUxUX0VYUE9SVF9EQVRBLFxyXG4gIC8vIGh0bWwgZXhwb3J0XHJcbiAgZXhwb3J0TWFwOiBERUZBVUxUX0VYUE9SVF9NQVAsXHJcbiAgLy8gbWFwIGNvbnRyb2wgcGFuZWxzXHJcbiAgbWFwQ29udHJvbHM6IERFRkFVTFRfTUFQX0NPTlRST0xTLFxyXG4gIC8vIHVpIG5vdGlmaWNhdGlvbnNcclxuICBub3RpZmljYXRpb25zOiBERUZBVUxUX05PVElGSUNBVElPTlMsXHJcbiAgLy8gbG9hZCBmaWxlc1xyXG4gIGxvYWRGaWxlczogREVGQVVMVF9MT0FEX0ZJTEVTXHJcbn07XHJcblxyXG4vKiBVcGRhdGVycyAqL1xyXG4vKipcclxuICogVG9nZ2xlIGFjdGl2ZSBzaWRlIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGFjdGlvbi5wYXlsb2FkIGlkIG9mIHNpZGUgcGFuZWwgdG8gYmUgc2hvd24sIG9uZSBvZiBgbGF5ZXJgLCBgZmlsdGVyYCwgYGludGVyYWN0aW9uYCwgYG1hcGAuIGNsb3NlIHNpZGUgcGFuZWwgaWYgYG51bGxgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlU2lkZVBhbmVsVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT4ge1xyXG4gIHJldHVybiBpZCA9PT0gc3RhdGUuYWN0aXZlU2lkZVBhbmVsXHJcbiAgICA/IHN0YXRlXHJcbiAgICA6IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhY3RpdmVTaWRlUGFuZWw6IGlkXHJcbiAgICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogU2hvdyBhbmQgaGlkZSBtb2RhbCBkaWFsb2dcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gYWN0aW9uLnBheWxvYWQgaWQgb2YgbW9kYWwgdG8gYmUgc2hvd24sIG51bGwgdG8gaGlkZSBtb2RhbHMuIE9uZSBvZjpcclxuICpcclxuICogIC0gW2BEQVRBX1RBQkxFX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZGF0YV90YWJsZV9pZClcclxuICogIC0gW2BERUxFVEVfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2RlbGV0ZV9kYXRhX2lkKVxyXG4gKiAgLSBbYEFERF9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjYWRkX2RhdGFfaWQpXHJcbiAqICAtIFtgRVhQT1JUX0lNQUdFX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZXhwb3J0X2ltYWdlX2lkKVxyXG4gKiAgLSBbYEVYUE9SVF9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZXhwb3J0X2RhdGFfaWQpXHJcbiAqICAtIFtgQUREX01BUF9TVFlMRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2FkZF9tYXBfc3R5bGVfaWQpXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlTW9kYWxVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogaWR9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGN1cnJlbnRNb2RhbDogaWRcclxufSk7XHJcblxyXG4vKipcclxuICogSGlkZSBhbmQgc2hvdyBzaWRlIHBhbmVsIGhlYWRlciBkcm9wZG93biwgYWN0aXZhdGVkIGJ5IGNsaWNraW5nIHRoZSBzaGFyZSBsaW5rIG9uIHRvcCBvZiB0aGUgc2lkZSBwYW5lbFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQgaWQgb2YgdGhlIGRyb3Bkb3duXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2hvd0V4cG9ydERyb3Bkb3duVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICB2aXNpYmxlRHJvcGRvd246IGlkXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEhpZGUgc2lkZSBwYW5lbCBoZWFkZXIgZHJvcGRvd24sIGFjdGl2YXRlZCBieSBjbGlja2luZyB0aGUgc2hhcmUgbGluayBvbiB0b3Agb2YgdGhlIHNpZGUgcGFuZWxcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaGlkZUV4cG9ydERyb3Bkb3duVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgdmlzaWJsZURyb3Bkb3duOiBudWxsXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBhY3RpdmUgbWFwIGNvbnRyb2wgcGFuZWxcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZCBtYXAgY29udHJvbCBwYW5lbCBpZCwgb25lIG9mIHRoZSBrZXlzIG9mOiBbYERFRkFVTFRfTUFQX0NPTlRST0xTYF0oI2RlZmF1bHRfbWFwX2NvbnRyb2xzKVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge3BhbmVsSWQsIGluZGV4ID0gMH19KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIG1hcENvbnRyb2xzOiB7XHJcbiAgICAuLi5zdGF0ZS5tYXBDb250cm9scyxcclxuICAgIFtwYW5lbElkXToge1xyXG4gICAgICAuLi5zdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXSxcclxuICAgICAgLy8gdGhpcyBoYW5kbGVzIHNwbGl0IG1hcCBpbnRlcmFjdGlvblxyXG4gICAgICAvLyBUb2dnbGluZyBmcm9tIHdpdGhpbiB0aGUgc2FtZSBtYXAgd2lsbCBzaW1wbHkgdG9nZ2xlIHRoZSBhY3RpdmUgcHJvcGVydHlcclxuICAgICAgLy8gVG9nZ2xpbmcgZnJvbSB3aXRoaW4gZGlmZmVyZW50IG1hcHMgd2Ugc2V0IHRoZSBhY3RpdmUgcHJvcGVydHkgdG8gdHJ1ZVxyXG4gICAgICBhY3RpdmU6XHJcbiAgICAgICAgaW5kZXggPT09IHN0YXRlLm1hcENvbnRyb2xzW3BhbmVsSWRdLmFjdGl2ZU1hcEluZGV4XHJcbiAgICAgICAgICA/ICFzdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXS5hY3RpdmVcclxuICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgYWN0aXZlTWFwSW5kZXg6IGluZGV4XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZCBkYXRhc2V0IGlkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb3BlbkRlbGV0ZU1vZGFsVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGRhdGFzZXRLZXlUb1JlbW92ZX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgY3VycmVudE1vZGFsOiBERUxFVEVfREFUQV9JRCxcclxuICBkYXRhc2V0S2V5VG9SZW1vdmVcclxufSk7XHJcblxyXG4vKipcclxuICogU2V0IGBleHBvcnRJbWFnZS5sZWdlbmRgIHRvIGB0cnVlYCBvciBgZmFsc2VgXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlU2V0dGluZyA9IChzdGF0ZSwge3BheWxvYWQ6IG5ld1NldHRpbmd9KSA9PiB7XHJcbiAgY29uc3QgdXBkYXRlZCA9IHsuLi5zdGF0ZS5leHBvcnRJbWFnZSwgLi4ubmV3U2V0dGluZ307XHJcbiAgY29uc3QgaW1hZ2VTaXplID0gY2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplKHVwZGF0ZWQpIHx8IHN0YXRlLmV4cG9ydEltYWdlLmltYWdlU2l6ZTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXhwb3J0SW1hZ2U6IHtcclxuICAgICAgLi4udXBkYXRlZCxcclxuICAgICAgaW1hZ2VTaXplXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgYGV4cG9ydEltYWdlLmV4cG9ydGluZ2AgdG8gYHRydWVgXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0YXJ0RXhwb3J0aW5nSW1hZ2UgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydEltYWdlOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcclxuICAgIGV4cG9ydGluZzogdHJ1ZSxcclxuICAgIGltYWdlRGF0YVVyaTogJydcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNldCBgZXhwb3J0SW1hZ2Uuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpYCB0byBhIGltYWdlIGRhdGFVcmlcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIGV4cG9ydCBpbWFnZSBkYXRhIHVyaVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRGF0YVVyaSA9IChzdGF0ZSwge3BheWxvYWQ6IGRhdGFVcml9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydEltYWdlOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcclxuICAgIGV4cG9ydGluZzogZmFsc2UsXHJcbiAgICBpbWFnZURhdGFVcmk6IGRhdGFVcmlcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRXJyb3IgPSAoc3RhdGUsIHtwYXlsb2FkOiBlcnJvcn0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0SW1hZ2U6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxyXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICAgIGVycm9yXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgY2FjaGVkIGV4cG9ydCBpbWFnZVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBjbGVhbnVwRXhwb3J0SW1hZ2UgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydEltYWdlOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcclxuICAgIGV4cG9ydGluZzogZmFsc2UsXHJcbiAgICBpbWFnZURhdGFVcmk6ICcnLFxyXG4gICAgZXJyb3I6IGZhbHNlXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgc2VsZWN0ZWQgZGF0YXNldCBmb3IgZXhwb3J0XHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZCBkYXRhc2V0IGlkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0VXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGRhdGFzZXR9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydERhdGE6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydERhdGEsXHJcbiAgICBzZWxlY3RlZERhdGFzZXQ6IGRhdGFzZXRcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNldCBkYXRhIGZvcm1hdCBmb3IgZXhwb3J0aW5nIGRhdGFcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIG9uZSBvZiBgJ3RleHQvY3N2J2BcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhVHlwZX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0RGF0YToge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcclxuICAgIGRhdGFUeXBlXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRvIGV4cG9ydCBmaWx0ZXJlZCBkYXRhLCBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGFjdGlvbi5wYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZmlsdGVyZWR9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydERhdGE6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydERhdGEsXHJcbiAgICBmaWx0ZXJlZFxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogV2hldGhlciB0byBpbmNsdWRpbmcgZGF0YSBpbiBtYXAgY29uZmlnLCB0b2dnbGUgYmV0d2VlbiBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0TWFwOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXHJcbiAgICBbRVhQT1JUX01BUF9GT1JNQVRTLkpTT05dOiB7XHJcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVFMuSlNPTl0sXHJcbiAgICAgIGhhc0RhdGE6ICFzdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVRTLkpTT05dLmhhc0RhdGFcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIHdoZXRoZXIgdG8gZXhwb3J0IGEgbWFwYm94IGFjY2VzcyB0byBIVE1MIHNpbmdsZSBwYWdlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldFVzZXJNYXBib3hBY2Nlc3NUb2tlblVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB1c2VyTWFwYm94VG9rZW59KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydE1hcDoge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxyXG4gICAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXToge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdLFxyXG4gICAgICB1c2VyTWFwYm94VG9rZW5cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGV4cG9ydCBtYXAgZm9ybWF0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IHRvIHVzZSB0byBleHBvcnQgdGhlIG1hcCBvbnRvXHJcbiAqIEByZXR1cm4ge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0TWFwRm9ybWF0VXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGZvcm1hdH0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0TWFwOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXHJcbiAgICBmb3JtYXRcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgZXhwb3J0IGh0bWwgbWFwIG1vZGVcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIGJlIHNldCAoYXZhaWxhYmxlIG1vZGVzOiBFWFBPUlRfSFRNTF9NQVBfTU9ERVMpXHJcbiAqIEByZXR1cm4ge3tbcDogc3RyaW5nXTogKn19XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0TWFwSFRNTE1vZGUgPSAoc3RhdGUsIHtwYXlsb2FkOiBtb2RlfSkgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBleHBvcnRNYXA6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydE1hcCxcclxuICAgIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF06IHtcclxuICAgICAgLi4uc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXSxcclxuICAgICAgbW9kZVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogQWRkIGEgbm90aWZpY2F0aW9uIHRvIGJlIGRpc3BsYXllZFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWRcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGROb3RpZmljYXRpb25VcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZH0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbm90aWZpY2F0aW9uczogWy4uLihzdGF0ZS5ub3RpZmljYXRpb25zIHx8IFtdKSwgY3JlYXRlTm90aWZpY2F0aW9uKHBheWxvYWQpXVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBub3RpZmljYXRpb25cclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cclxuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbi5wYXlsb2FkIGlkIG9mIHRoZSBub3RpZmljYXRpb24gdG8gYmUgcmVtb3ZlZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGlmaWNhdGlvblVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbm90aWZpY2F0aW9uczogc3RhdGUubm90aWZpY2F0aW9ucy5maWx0ZXIobiA9PiBuLmlkICE9PSBpZClcclxufSk7XHJcblxyXG4vKipcclxuICogRmlyZWQgd2hlbiBmaWxlIGxvYWRpbmcgYmVnaW5cclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbG9hZEZpbGVzOiB7XHJcbiAgICAuLi5zdGF0ZS5sb2FkRmlsZXMsXHJcbiAgICBmaWxlTG9hZGluZzogdHJ1ZVxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBsb2FkaW5nIGZpbGUgc3VjY2VzcyBhbmQgc2V0IGZpbGVMb2FkaW5nIHByb3BlcnR5IHRvIGZhbHNlXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNTdWNjZXNzVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbG9hZEZpbGVzOiB7XHJcbiAgICAuLi5zdGF0ZS5sb2FkRmlsZXMsXHJcbiAgICBmaWxlTG9hZGluZzogZmFsc2VcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgbG9hZCBmaWxlIGVycm9yIGFuZCBzZXQgZmlsZUxvYWRpbmcgcHJvcGVydHkgdG8gZmFsc2VcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0gc3RhdGVcclxuICogQHBhcmFtIGVycm9yXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzRXJyVXBkYXRlciA9IChzdGF0ZSwge2Vycm9yfSkgPT5cclxuICBhZGROb3RpZmljYXRpb25VcGRhdGVyKFxyXG4gICAge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgbG9hZEZpbGVzOiB7XHJcbiAgICAgICAgLi4uc3RhdGUubG9hZEZpbGVzLFxyXG4gICAgICAgIGZpbGVMb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXlsb2FkOiBlcnJvck5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgbWVzc2FnZTogKGVycm9yIHx8IHt9KS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gdXBsb2FkIGZpbGVzJyxcclxuICAgICAgICB0b3BpYzogREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLmdsb2JhbFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyB0b2dnbGUgbWFwIHNwbGl0IGFuZCByZXNldCBhbGwgbWFwIGNvbnRyb2wgaW5kZXggdG8gMFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVNwbGl0TWFwVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbWFwQ29udHJvbHM6IE9iamVjdC5lbnRyaWVzKHN0YXRlLm1hcENvbnRyb2xzKS5yZWR1Y2UoXHJcbiAgICAoYWNjLCBlbnRyeSkgPT4gKHtcclxuICAgICAgLi4uYWNjLFxyXG4gICAgICBbZW50cnlbMF1dOiB7XHJcbiAgICAgICAgLi4uZW50cnlbMV0sXHJcbiAgICAgICAgYWN0aXZlTWFwSW5kZXg6IDBcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICB7fVxyXG4gIClcclxufSk7XHJcbiJdfQ==