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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91aS1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMIiwiREVGQVVMVF9NT0RBTCIsIkFERF9EQVRBX0lEIiwidWlTdGF0ZVVwZGF0ZXJzIiwiREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVMiLCJzaG93IiwiYWN0aXZlIiwiYWN0aXZlTWFwSW5kZXgiLCJERUZBVUxUX01BUF9DT05UUk9MUyIsInJlZHVjZSIsImZpbmFsIiwiY3VycmVudCIsIkRFRkFVTFRfRVhQT1JUX0lNQUdFIiwicmF0aW8iLCJFWFBPUlRfSU1HX1JBVElPUyIsIlNDUkVFTiIsInJlc29sdXRpb24iLCJSRVNPTFVUSU9OUyIsIk9ORV9YIiwibGVnZW5kIiwibWFwSCIsIm1hcFciLCJpbWFnZVNpemUiLCJ6b29tT2Zmc2V0Iiwic2NhbGUiLCJpbWFnZVciLCJpbWFnZUgiLCJpbWFnZURhdGFVcmkiLCJleHBvcnRpbmciLCJlcnJvciIsIkRFRkFVTFRfTE9BRF9GSUxFUyIsImZpbGVMb2FkaW5nIiwiREVGQVVMVF9FWFBPUlRfREFUQSIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFUeXBlIiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsImZpbHRlcmVkIiwiREVGQVVMVF9OT1RJRklDQVRJT05TIiwiREVGQVVMVF9FWFBPUlRfSFRNTCIsImV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIiwidXNlck1hcGJveFRva2VuIiwibW9kZSIsIkVYUE9SVF9IVE1MX01BUF9NT0RFUyIsIlJFQUQiLCJERUZBVUxUX0VYUE9SVF9KU09OIiwiaGFzRGF0YSIsIkRFRkFVTFRfRVhQT1JUX01BUCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiSU5JVElBTF9VSV9TVEFURSIsInJlYWRPbmx5IiwiYWN0aXZlU2lkZVBhbmVsIiwiY3VycmVudE1vZGFsIiwiZGF0YXNldEtleVRvUmVtb3ZlIiwidmlzaWJsZURyb3Bkb3duIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwibWFwQ29udHJvbHMiLCJub3RpZmljYXRpb25zIiwibG9hZEZpbGVzIiwidG9nZ2xlU2lkZVBhbmVsVXBkYXRlciIsInN0YXRlIiwiaWQiLCJwYXlsb2FkIiwidG9nZ2xlTW9kYWxVcGRhdGVyIiwic2hvd0V4cG9ydERyb3Bkb3duVXBkYXRlciIsImhpZGVFeHBvcnREcm9wZG93blVwZGF0ZXIiLCJ0b2dnbGVNYXBDb250cm9sVXBkYXRlciIsInBhbmVsSWQiLCJpbmRleCIsIm9wZW5EZWxldGVNb2RhbFVwZGF0ZXIiLCJERUxFVEVfREFUQV9JRCIsInNldEV4cG9ydEltYWdlU2V0dGluZyIsIm5ld1NldHRpbmciLCJ1cGRhdGVkIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsImRhdGFVcmkiLCJzZXRFeHBvcnRJbWFnZUVycm9yIiwiY2xlYW51cEV4cG9ydEltYWdlIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0VXBkYXRlciIsImRhdGFzZXQiLCJzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIiLCJzZXRFeHBvcnRGaWx0ZXJlZFVwZGF0ZXIiLCJzZXRFeHBvcnREYXRhVXBkYXRlciIsInNldFVzZXJNYXBib3hBY2Nlc3NUb2tlblVwZGF0ZXIiLCJzZXRFeHBvcnRNYXBGb3JtYXRVcGRhdGVyIiwiZm9ybWF0Iiwic2V0RXhwb3J0TWFwSFRNTE1vZGUiLCJhZGROb3RpZmljYXRpb25VcGRhdGVyIiwicmVtb3ZlTm90aWZpY2F0aW9uVXBkYXRlciIsImZpbHRlciIsIm4iLCJsb2FkRmlsZXNVcGRhdGVyIiwibG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIiLCJsb2FkRmlsZXNFcnJVcGRhdGVyIiwibWVzc2FnZSIsInRvcGljIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTIiwiZ2xvYmFsIiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwiT2JqZWN0IiwiZW50cmllcyIsImFj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VixFQUFjc0UsT0FBZCxJQUF5Qix3QkFEVDtBQUV6QkMsTUFBQUEsS0FBSyxFQUFFQyw2Q0FBNEJDO0FBRlYsS0FBbEI7QUFEWCxHQVJvQixDQURXO0FBQUEsQ0FBNUI7QUFpQlA7Ozs7Ozs7Ozs7O0FBT08sSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBdkMsS0FBSztBQUFBLDJCQUNyQ0EsS0FEcUM7QUFFeENKLElBQUFBLFdBQVcsRUFBRTRDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlekMsS0FBSyxDQUFDSixXQUFyQixFQUFrQ25ELE1BQWxDLENBQ1gsVUFBQ2lHLEdBQUQsRUFBTUMsS0FBTjtBQUFBLCtCQUNLRCxHQURMLHVDQUVHQyxLQUFLLENBQUMsQ0FBRCxDQUZSLG9CQUdPQSxLQUFLLENBQUMsQ0FBRCxDQUhaO0FBSUlwRyxRQUFBQSxjQUFjLEVBQUU7QUFKcEI7QUFBQSxLQURXLEVBUVgsRUFSVztBQUYyQjtBQUFBLENBQW5DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyxcbiAgREVMRVRFX0RBVEFfSUQsXG4gIEVYUE9SVF9EQVRBX1RZUEUsXG4gIEVYUE9SVF9IVE1MX01BUF9NT0RFUyxcbiAgRVhQT1JUX0lNR19SQVRJT1MsXG4gIEVYUE9SVF9NQVBfRk9STUFUUyxcbiAgUkVTT0xVVElPTlNcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtjcmVhdGVOb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9ufSBmcm9tICd1dGlscy9ub3RpZmljYXRpb25zLXV0aWxzJztcbmltcG9ydCB7Y2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplfSBmcm9tICd1dGlscy9leHBvcnQtdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVkVfU0lERV9QQU5FTCA9ICdsYXllcic7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NT0RBTCA9IEFERF9EQVRBX0lEO1xuXG4vKipcbiAqIFVwZGF0ZXJzIGZvciBgdWlTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKlxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7dWlTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogLy8gUm9vdCBSZWR1Y2VyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgLy8gY2xpY2sgYnV0dG9uIHRvIGNsb3NlIHNpZGUgcGFuZWxcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICB1aVN0YXRlOiB1aVN0YXRlVXBkYXRlcnMudG9nZ2xlU2lkZVBhbmVsVXBkYXRlcihcbiAqICAgICAgICAgICAgICAgdWlTdGF0ZSwge3BheWxvYWQ6IG51bGx9XG4gKiAgICAgICAgICAgICApXG4gKiAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgICB9O1xuICogIH1cbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XG4gKiB9O1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IHVpU3RhdGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQSBsaXN0IG9mIG1hcCBjb250cm9sIHZpc2liaWxpdHkgYW5kIHdoZXRoZXIgaXMgaXQgYWN0aXZlLlxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtPYmplY3R9IHZpc2libGVMYXllcnMgRGVmYXVsdDogYHtzaG93OiB0cnVlLCBhY3RpdmU6IGZhbHNlfWBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtYXBMZWdlbmQgRGVmYXVsdDogYHtzaG93OiB0cnVlLCBhY3RpdmU6IGZhbHNlfWBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0b2dnbGUzZCBEZWZhdWx0OiBge3Nob3c6IHRydWV9YFxuICogQHByb3BlcnR5IHtPYmplY3R9IHNwbGl0TWFwIERlZmF1bHQ6IGB7c2hvdzogdHJ1ZX1gXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IERFRkFVTFRfTUFQX0NPTlRST0xTX0ZFQVRVUkVTID0ge1xuICBzaG93OiB0cnVlLFxuICBhY3RpdmU6IGZhbHNlLFxuICAvLyBkZWZpbmVzIHdoaWNoIG1hcCBpbmRleCB1c2VycyBhcmUgaW50ZXJhY3Rpbmcgd2l0aCAodGhyb3VnaCBtYXAgY29udHJvbHMpXG4gIGFjdGl2ZU1hcEluZGV4OiAwXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVBfQ09OVFJPTFMgPSBbXG4gICd2aXNpYmxlTGF5ZXJzJyxcbiAgJ21hcExlZ2VuZCcsXG4gICd0b2dnbGUzZCcsXG4gICdzcGxpdE1hcCcsXG4gICdtYXBEcmF3J1xuXS5yZWR1Y2UoXG4gIChmaW5hbCwgY3VycmVudCkgPT4gKHtcbiAgICAuLi5maW5hbCxcbiAgICBbY3VycmVudF06IERFRkFVTFRfTUFQX0NPTlRST0xTX0ZFQVRVUkVTXG4gIH0pLFxuICB7fVxuKTtcblxuLyoqXG4gKiBEZWZhdWx0IGltYWdlIGV4cG9ydCBjb25maWdcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBjb25zdGFudFxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByYXRpbyBEZWZhdWx0OiBgJ1NDUkVFTidgLFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlc29sdXRpb24gRGVmYXVsdDogYCdPTkVfWCdgLFxuICogQHByb3BlcnR5IHtib29sZWFufSBsZWdlbmQgRGVmYXVsdDogYGZhbHNlYCxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpbWFnZURhdGFVcmkgRGVmYXVsdDogYCcnYCxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXhwb3J0aW5nIERlZmF1bHQ6IGBmYWxzZWBcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXJyb3IgRGVmYXVsdDogYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfSU1BR0UgPSB7XG4gIC8vIHVzZXIgb3B0aW9uc1xuICByYXRpbzogRVhQT1JUX0lNR19SQVRJT1MuU0NSRUVOLFxuICByZXNvbHV0aW9uOiBSRVNPTFVUSU9OUy5PTkVfWCxcbiAgbGVnZW5kOiBmYWxzZSxcbiAgbWFwSDogMCxcbiAgbWFwVzogMCxcbiAgaW1hZ2VTaXplOiB7XG4gICAgem9vbU9mZnNldDogMCxcbiAgICBzY2FsZTogMSxcbiAgICBpbWFnZVc6IDAsXG4gICAgaW1hZ2VIOiAwXG4gIH0sXG4gIC8vIGV4cG9ydGluZyBzdGF0ZVxuICBpbWFnZURhdGFVcmk6ICcnLFxuICBleHBvcnRpbmc6IGZhbHNlLFxuICBlcnJvcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPQURfRklMRVMgPSB7XG4gIGZpbGVMb2FkaW5nOiBmYWxzZVxufTtcblxuLyoqXG4gKiBEZWZhdWx0IGluaXRpYWwgYGV4cG9ydERhdGFgIHNldHRpbmdzXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2VsZWN0ZWREYXRhc2V0IERlZmF1bHQ6IGAnJ2AsXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZGF0YVR5cGUgRGVmYXVsdDogYCdjc3YnYCxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlsdGVyZWQgRGVmYXVsdDogYHRydWVgLFxuICogQHByb3BlcnR5IHtib29sZWFufSBjb25maWcgZGVwcmVjYXRlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIHVzZWQgaW4gbW9kYWwgY29uZmlnIGV4cG9ydC4gRGVmYXVsdDogYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfREFUQSA9IHtcbiAgc2VsZWN0ZWREYXRhc2V0OiAnJyxcbiAgZGF0YVR5cGU6IEVYUE9SVF9EQVRBX1RZUEUuQ1NWLFxuICBmaWx0ZXJlZDogdHJ1ZVxufTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTk9USUZJQ0FUSU9OUyA9IFtdO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBleHBvcnRNYXBib3hBY2Nlc3NUb2tlbiAtIERlZmF1bHQ6IG51bGwsIHRoaXMgaXMgdXNlZCB3aGVuIHdlIHByb3ZpZGUgYSBkZWZhdWx0IG1hcGJveCB0b2tlbiBmb3IgdXNlcnMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2ZcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1c2VyTWFwYm94VG9rZW4gLSBEZWZhdWx0OiAnJywgbWFwYm94IHRva2VuIHByb3ZpZGVkIGJ5IHVzZXIgdGhyb3VnaCBpbnB1dCBmaWVsZFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfSFRNTCA9IHtcbiAgZXhwb3J0TWFwYm94QWNjZXNzVG9rZW46IG51bGwsXG4gIHVzZXJNYXBib3hUb2tlbjogJycsXG4gIG1vZGU6IEVYUE9SVF9IVE1MX01BUF9NT0RFUy5SRUFEXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfSlNPTiA9IHtcbiAgaGFzRGF0YTogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX01BUCA9IHtcbiAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXTogREVGQVVMVF9FWFBPUlRfSFRNTCxcbiAgW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXTogREVGQVVMVF9FWFBPUlRfSlNPTixcbiAgZm9ybWF0OiBFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTFxufTtcblxuLyoqXG4gKiBEZWZhdWx0IGluaXRpYWwgYHVpU3RhdGVgXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlYWRPbmx5IERlZmF1bHQ6IGBmYWxzZWBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhY3RpdmVTaWRlUGFuZWwgRGVmYXVsdDogYCdsYXllcidgXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBjdXJyZW50TW9kYWwgRGVmYXVsdDogYCdhZGREYXRhJ2BcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IGRhdGFzZXRLZXlUb1JlbW92ZSBEZWZhdWx0OiBgbnVsbGBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHZpc2libGVEcm9wZG93biBEZWZhdWx0OiBgbnVsbGBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBleHBvcnRJbWFnZSBEZWZhdWx0OiBbYERFRkFVTFRfRVhQT1JUX0lNQUdFYF0oI2RlZmF1bHRfZXhwb3J0X2ltYWdlKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGV4cG9ydERhdGEgRGVmYXVsdDogW2BERUZBVUxUX0VYUE9SVF9EQVRBYF0oI2RlZmF1bHRfZXhwb3J0X2RhdGEpXG4gKiBAcHJvcGVydHkge09iamVjdH0gbWFwQ29udHJvbHMgRGVmYXVsdDogW2BERUZBVUxUX01BUF9DT05UUk9MU2BdKCNkZWZhdWx0X21hcF9jb250cm9scylcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhY3RpdmVNYXBJbmRleCBkZWZpbmVzIHdoaWNoIG1hcCB0aGUgdXNlciBjbGlja2VkIG9uLiBEZWZhdWx0OiAwXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBJTklUSUFMX1VJX1NUQVRFID0ge1xuICByZWFkT25seTogZmFsc2UsXG4gIGFjdGl2ZVNpZGVQYW5lbDogREVGQVVMVF9BQ1RJVkVfU0lERV9QQU5FTCxcbiAgY3VycmVudE1vZGFsOiBERUZBVUxUX01PREFMLFxuICBkYXRhc2V0S2V5VG9SZW1vdmU6IG51bGwsXG4gIHZpc2libGVEcm9wZG93bjogbnVsbCxcbiAgLy8gZXhwb3J0IGltYWdlIG1vZGFsIHVpXG4gIGV4cG9ydEltYWdlOiBERUZBVUxUX0VYUE9SVF9JTUFHRSxcbiAgLy8gZXhwb3J0IGRhdGEgbW9kYWwgdWlcbiAgZXhwb3J0RGF0YTogREVGQVVMVF9FWFBPUlRfREFUQSxcbiAgLy8gaHRtbCBleHBvcnRcbiAgZXhwb3J0TWFwOiBERUZBVUxUX0VYUE9SVF9NQVAsXG4gIC8vIG1hcCBjb250cm9sIHBhbmVsc1xuICBtYXBDb250cm9sczogREVGQVVMVF9NQVBfQ09OVFJPTFMsXG4gIC8vIHVpIG5vdGlmaWNhdGlvbnNcbiAgbm90aWZpY2F0aW9uczogREVGQVVMVF9OT1RJRklDQVRJT05TLFxuICAvLyBsb2FkIGZpbGVzXG4gIGxvYWRGaWxlczogREVGQVVMVF9MT0FEX0ZJTEVTXG59O1xuXG4vKiBVcGRhdGVycyAqL1xuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGFjdGlvbi5wYXlsb2FkIGlkIG9mIHNpZGUgcGFuZWwgdG8gYmUgc2hvd24sIG9uZSBvZiBgbGF5ZXJgLCBgZmlsdGVyYCwgYGludGVyYWN0aW9uYCwgYG1hcGAuIGNsb3NlIHNpZGUgcGFuZWwgaWYgYG51bGxgXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+IHtcbiAgcmV0dXJuIGlkID09PSBzdGF0ZS5hY3RpdmVTaWRlUGFuZWxcbiAgICA/IHN0YXRlXG4gICAgOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVTaWRlUGFuZWw6IGlkXG4gICAgICB9O1xufTtcblxuLyoqXG4gKiBTaG93IGFuZCBoaWRlIG1vZGFsIGRpYWxvZ1xuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gYWN0aW9uLnBheWxvYWQgaWQgb2YgbW9kYWwgdG8gYmUgc2hvd24sIG51bGwgdG8gaGlkZSBtb2RhbHMuIE9uZSBvZjpcbiAqXG4gKiAgLSBbYERBVEFfVEFCTEVfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNkYXRhX3RhYmxlX2lkKVxuICogIC0gW2BERUxFVEVfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2RlbGV0ZV9kYXRhX2lkKVxuICogIC0gW2BBRERfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2FkZF9kYXRhX2lkKVxuICogIC0gW2BFWFBPUlRfSU1BR0VfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNleHBvcnRfaW1hZ2VfaWQpXG4gKiAgLSBbYEVYUE9SVF9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZXhwb3J0X2RhdGFfaWQpXG4gKiAgLSBbYEFERF9NQVBfU1RZTEVfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNhZGRfbWFwX3N0eWxlX2lkKVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVNb2RhbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBjdXJyZW50TW9kYWw6IGlkXG59KTtcblxuLyoqXG4gKiBIaWRlIGFuZCBzaG93IHNpZGUgcGFuZWwgaGVhZGVyIGRyb3Bkb3duLCBhY3RpdmF0ZWQgYnkgY2xpY2tpbmcgdGhlIHNoYXJlIGxpbmsgb24gdG9wIG9mIHRoZSBzaWRlIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQgaWQgb2YgdGhlIGRyb3Bkb3duXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dFeHBvcnREcm9wZG93blVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICB2aXNpYmxlRHJvcGRvd246IGlkXG59KTtcblxuLyoqXG4gKiBIaWRlIHNpZGUgcGFuZWwgaGVhZGVyIGRyb3Bkb3duLCBhY3RpdmF0ZWQgYnkgY2xpY2tpbmcgdGhlIHNoYXJlIGxpbmsgb24gdG9wIG9mIHRoZSBzaWRlIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVFeHBvcnREcm9wZG93blVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgdmlzaWJsZURyb3Bkb3duOiBudWxsXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge3BhbmVsSWQsIGluZGV4ID0gMH19KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbWFwQ29udHJvbHM6IHtcbiAgICAuLi5zdGF0ZS5tYXBDb250cm9scyxcbiAgICBbcGFuZWxJZF06IHtcbiAgICAgIC4uLnN0YXRlLm1hcENvbnRyb2xzW3BhbmVsSWRdLFxuICAgICAgLy8gdGhpcyBoYW5kbGVzIHNwbGl0IG1hcCBpbnRlcmFjdGlvblxuICAgICAgLy8gVG9nZ2xpbmcgZnJvbSB3aXRoaW4gdGhlIHNhbWUgbWFwIHdpbGwgc2ltcGx5IHRvZ2dsZSB0aGUgYWN0aXZlIHByb3BlcnR5XG4gICAgICAvLyBUb2dnbGluZyBmcm9tIHdpdGhpbiBkaWZmZXJlbnQgbWFwcyB3ZSBzZXQgdGhlIGFjdGl2ZSBwcm9wZXJ0eSB0byB0cnVlXG4gICAgICBhY3RpdmU6XG4gICAgICAgIGluZGV4ID09PSBzdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXS5hY3RpdmVNYXBJbmRleFxuICAgICAgICAgID8gIXN0YXRlLm1hcENvbnRyb2xzW3BhbmVsSWRdLmFjdGl2ZVxuICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIGFjdGl2ZU1hcEluZGV4OiBpbmRleFxuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogVG9nZ2xlIGFjdGl2ZSBtYXAgY29udHJvbCBwYW5lbFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIGRhdGFzZXQgaWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgb3BlbkRlbGV0ZU1vZGFsVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGRhdGFzZXRLZXlUb1JlbW92ZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBjdXJyZW50TW9kYWw6IERFTEVURV9EQVRBX0lELFxuICBkYXRhc2V0S2V5VG9SZW1vdmVcbn0pO1xuXG4vKipcbiAqIFNldCBgZXhwb3J0SW1hZ2UubGVnZW5kYCB0byBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRJbWFnZVNldHRpbmcgPSAoc3RhdGUsIHtwYXlsb2FkOiBuZXdTZXR0aW5nfSkgPT4ge1xuICBjb25zdCB1cGRhdGVkID0gey4uLnN0YXRlLmV4cG9ydEltYWdlLCAuLi5uZXdTZXR0aW5nfTtcbiAgY29uc3QgaW1hZ2VTaXplID0gY2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplKHVwZGF0ZWQpIHx8IHN0YXRlLmV4cG9ydEltYWdlLmltYWdlU2l6ZTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGV4cG9ydEltYWdlOiB7XG4gICAgICAuLi51cGRhdGVkLFxuICAgICAgaW1hZ2VTaXplXG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBTZXQgYGV4cG9ydEltYWdlLmV4cG9ydGluZ2AgdG8gYHRydWVgXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0RXhwb3J0aW5nSW1hZ2UgPSBzdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICBleHBvcnRpbmc6IHRydWUsXG4gICAgaW1hZ2VEYXRhVXJpOiAnJ1xuICB9XG59KTtcblxuLyoqXG4gKiBTZXQgYGV4cG9ydEltYWdlLnNldEV4cG9ydEltYWdlRGF0YVVyaWAgdG8gYSBpbWFnZSBkYXRhVXJpXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQgZXhwb3J0IGltYWdlIGRhdGEgdXJpXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRGF0YVVyaSA9IChzdGF0ZSwge3BheWxvYWQ6IGRhdGFVcml9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICBleHBvcnRpbmc6IGZhbHNlLFxuICAgIGltYWdlRGF0YVVyaTogZGF0YVVyaVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRXJyb3IgPSAoc3RhdGUsIHtwYXlsb2FkOiBlcnJvcn0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRJbWFnZToge1xuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxuICAgIGV4cG9ydGluZzogZmFsc2UsXG4gICAgZXJyb3JcbiAgfVxufSk7XG5cbi8qKlxuICogRGVsZXRlIGNhY2hlZCBleHBvcnQgaW1hZ2VcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgY2xlYW51cEV4cG9ydEltYWdlID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydEltYWdlOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0SW1hZ2UsXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcbiAgICBpbWFnZURhdGFVcmk6ICcnLFxuICAgIGVycm9yOiBmYWxzZVxuICB9XG59KTtcblxuLyoqXG4gKiBTZXQgc2VsZWN0ZWQgZGF0YXNldCBmb3IgZXhwb3J0XG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQgZGF0YXNldCBpZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZGF0YXNldH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnREYXRhOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcbiAgICBzZWxlY3RlZERhdGFzZXQ6IGRhdGFzZXRcbiAgfVxufSk7XG5cbi8qKlxuICogU2V0IGRhdGEgZm9ybWF0IGZvciBleHBvcnRpbmcgZGF0YVxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIG9uZSBvZiBgJ3RleHQvY3N2J2BcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RGF0YVR5cGVVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZGF0YVR5cGV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0RGF0YToge1xuICAgIC4uLnN0YXRlLmV4cG9ydERhdGEsXG4gICAgZGF0YVR5cGVcbiAgfVxufSk7XG5cbi8qKlxuICogV2hldGhlciB0byBleHBvcnQgZmlsdGVyZWQgZGF0YSwgYHRydWVgIG9yIGBmYWxzZWBcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aW9uLnBheWxvYWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZmlsdGVyZWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0RGF0YToge1xuICAgIC4uLnN0YXRlLmV4cG9ydERhdGEsXG4gICAgZmlsdGVyZWRcbiAgfVxufSk7XG5cbi8qKlxuICogV2hldGhlciB0byBpbmNsdWRpbmcgZGF0YSBpbiBtYXAgY29uZmlnLCB0b2dnbGUgYmV0d2VlbiBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRNYXA6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXG4gICAgW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXToge1xuICAgICAgLi4uc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXSxcbiAgICAgIGhhc0RhdGE6ICFzdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVRTLkpTT05dLmhhc0RhdGFcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIHdoZXRoZXIgdG8gZXhwb3J0IGEgbWFwYm94IGFjY2VzcyB0byBIVE1MIHNpbmdsZSBwYWdlXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRVc2VyTWFwYm94QWNjZXNzVG9rZW5VcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogdXNlck1hcGJveFRva2VufSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydE1hcDoge1xuICAgIC4uLnN0YXRlLmV4cG9ydE1hcCxcbiAgICBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdOiB7XG4gICAgICAuLi5zdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdLFxuICAgICAgdXNlck1hcGJveFRva2VuXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBTZXRzIHRoZSBleHBvcnQgbWFwIGZvcm1hdFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gYHVpU3RhdGVgXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IHRvIHVzZSB0byBleHBvcnQgdGhlIG1hcCBvbnRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5leHRTdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0TWFwRm9ybWF0VXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGZvcm1hdH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRNYXA6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXG4gICAgZm9ybWF0XG4gIH1cbn0pO1xuXG4vKipcbiAqIFNldCB0aGUgZXhwb3J0IGh0bWwgbWFwIG1vZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIGB1aVN0YXRlYFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgdG8gYmUgc2V0IChhdmFpbGFibGUgbW9kZXM6IEVYUE9SVF9IVE1MX01BUF9NT0RFUylcbiAqIEByZXR1cm4ge3tbcDogc3RyaW5nXTogKn19XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRNYXBIVE1MTW9kZSA9IChzdGF0ZSwge3BheWxvYWQ6IG1vZGV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0TWFwOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxuICAgIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF06IHtcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF0sXG4gICAgICBtb2RlXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBBZGQgYSBub3RpZmljYXRpb24gdG8gYmUgZGlzcGxheWVkXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbm90aWZpY2F0aW9uczogWy4uLihzdGF0ZS5ub3RpZmljYXRpb25zIHx8IFtdKSwgY3JlYXRlTm90aWZpY2F0aW9uKHBheWxvYWQpXVxufSk7XG5cbi8qKlxuICogUmVtb3ZlIGEgbm90aWZpY2F0aW9uXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uLnBheWxvYWQgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGlmaWNhdGlvblVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBub3RpZmljYXRpb25zOiBzdGF0ZS5ub3RpZmljYXRpb25zLmZpbHRlcihuID0+IG4uaWQgIT09IGlkKVxufSk7XG5cbi8qKlxuICogRmlyZWQgd2hlbiBmaWxlIGxvYWRpbmcgYmVnaW5cbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBsb2FkRmlsZXM6IHtcbiAgICAuLi5zdGF0ZS5sb2FkRmlsZXMsXG4gICAgZmlsZUxvYWRpbmc6IHRydWVcbiAgfVxufSk7XG5cbi8qKlxuICogSGFuZGxlcyBsb2FkaW5nIGZpbGUgc3VjY2VzcyBhbmQgc2V0IGZpbGVMb2FkaW5nIHByb3BlcnR5IHRvIGZhbHNlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxvYWRGaWxlczoge1xuICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcbiAgICBmaWxlTG9hZGluZzogZmFsc2VcbiAgfVxufSk7XG5cbi8qKlxuICogSGFuZGxlcyBsb2FkIGZpbGUgZXJyb3IgYW5kIHNldCBmaWxlTG9hZGluZyBwcm9wZXJ0eSB0byBmYWxzZVxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gZXJyb3JcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzRXJyVXBkYXRlciA9IChzdGF0ZSwge2Vycm9yfSkgPT5cbiAgYWRkTm90aWZpY2F0aW9uVXBkYXRlcihcbiAgICB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGxvYWRGaWxlczoge1xuICAgICAgICAuLi5zdGF0ZS5sb2FkRmlsZXMsXG4gICAgICAgIGZpbGVMb2FkaW5nOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcGF5bG9hZDogZXJyb3JOb3RpZmljYXRpb24oe1xuICAgICAgICBtZXNzYWdlOiAoZXJyb3IgfHwge30pLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byB1cGxvYWQgZmlsZXMnLFxuICAgICAgICB0b3BpYzogREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLmdsb2JhbFxuICAgICAgfSlcbiAgICB9XG4gICk7XG5cbi8qKlxuICogSGFuZGxlcyB0b2dnbGUgbWFwIHNwbGl0IGFuZCByZXNldCBhbGwgbWFwIGNvbnRyb2wgaW5kZXggdG8gMFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNwbGl0TWFwVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBtYXBDb250cm9sczogT2JqZWN0LmVudHJpZXMoc3RhdGUubWFwQ29udHJvbHMpLnJlZHVjZShcbiAgICAoYWNjLCBlbnRyeSkgPT4gKHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtlbnRyeVswXV06IHtcbiAgICAgICAgLi4uZW50cnlbMV0sXG4gICAgICAgIGFjdGl2ZU1hcEluZGV4OiAwXG4gICAgICB9XG4gICAgfSksXG4gICAge31cbiAgKVxufSk7XG4iXX0=