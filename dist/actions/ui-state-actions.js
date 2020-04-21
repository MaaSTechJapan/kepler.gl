"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setExportHTMLMapMode = exports.setExportMapFormat = exports.setUserMapboxAccessToken = exports.setExportData = exports.setExportFiltered = exports.setExportDataType = exports.setExportSelectedDataset = exports.cleanupExportImage = exports.setExportImageError = exports.setExportImageDataUri = exports.startExportingImage = exports.setExportImageSetting = exports.removeNotification = exports.addNotification = exports.openDeleteModal = exports.toggleMapControl = exports.hideExportDropdown = exports.showExportDropdown = exports.toggleModal = exports.toggleSidePanel = void 0;

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
 * Toggle active side panel
 * @memberof uiStateActions
 * @param {string} id  id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`
 * @public
 */
var toggleSidePanel = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_SIDE_PANEL, function (id) {
  return id;
});
/**
 * Show and hide modal dialog
 * @memberof uiStateActions
 * @param {string|null} id - id of modal to be shown, null to hide modals. One of:
 *
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @public
 */

exports.toggleSidePanel = toggleSidePanel;
var toggleModal = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_MODAL, function (id) {
  return id;
});
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateActions
 * @param {string} id - id of the dropdown
 * @public
 */

exports.toggleModal = toggleModal;
var showExportDropdown = (0, _reduxActions.createAction)(_actionTypes["default"].SHOW_EXPORT_DROPDOWN, function (id) {
  return id;
});
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateActions
 * @public
 */

exports.showExportDropdown = showExportDropdown;
var hideExportDropdown = (0, _reduxActions.createAction)(_actionTypes["default"].HIDE_EXPORT_DROPDOWN);
/**
 * Toggle active map control panel
 * @memberof uiStateActions
 * @param {string} panelId - map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @public
 */

exports.hideExportDropdown = hideExportDropdown;
var toggleMapControl = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_MAP_CONTROL, function (panelId, index) {
  return {
    panelId: panelId,
    index: index
  };
});
/**
 * Toggle active map control panel
 * @memberof uiStateActions
 * @param {string} datasetId - `id` of the dataset to be deleted
 * @public
 */

exports.toggleMapControl = toggleMapControl;
var openDeleteModal = (0, _reduxActions.createAction)(_actionTypes["default"].OPEN_DELETE_MODAL, function (datasetId) {
  return datasetId;
});
/**
 * Add a notification to be displayed
 * @memberof uiStateActions
 * @param {Object} notification - The `notification` object to be added
 * @public
 */

exports.openDeleteModal = openDeleteModal;
var addNotification = (0, _reduxActions.createAction)(_actionTypes["default"].ADD_NOTIFICATION, function (notification) {
  return notification;
});
/**
 * Remove a notification
 * @memberof uiStateActions
 * @param {string} id - `id` of the notification to be removed
 * @public
 */

exports.addNotification = addNotification;
var removeNotification = (0, _reduxActions.createAction)(_actionTypes["default"].REMOVE_NOTIFICATION, function (id) {
  return id;
});
/**
 * Set `exportImage` settings: ratio, resolution, legend
 * @memberof uiStateActions
 * @param {Object} newSetting - {ratio: '1x'}
 * @public
 */

exports.removeNotification = removeNotification;
var setExportImageSetting = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_SETTING, function (newSetting) {
  return newSetting;
});
/**
 * Set `exportImage.exporting` to true
 * @memberof uiStateActions
 * @public
 */

exports.setExportImageSetting = setExportImageSetting;
var startExportingImage = (0, _reduxActions.createAction)(_actionTypes["default"].START_EXPORTING_IMAGE);
/**
 * Set `exportImage.setExportImageDataUri` to a dataUri
 * @memberof uiStateActions
 * @param {string} dataUri - export image data uri
 * @public
 */

exports.startExportingImage = startExportingImage;
var setExportImageDataUri = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_DATA_URI, function (dataUri) {
  return dataUri;
});
exports.setExportImageDataUri = setExportImageDataUri;
var setExportImageError = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_ERROR, function (error) {
  return error;
});
/**
 * Delete cached export image
 * @memberof uiStateActions
 * @public
 */

exports.setExportImageError = setExportImageError;
var cleanupExportImage = (0, _reduxActions.createAction)(_actionTypes["default"].CLEANUP_EXPORT_IMAGE);
/**
 * Set selected dataset for export
 * @memberof uiStateActions
 * @param {string} datasetId - dataset id
 * @public
 */

exports.cleanupExportImage = cleanupExportImage;
var setExportSelectedDataset = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_SELECTED_DATASET, function (datasetId) {
  return datasetId;
});
/**
 * Set data format for exporting data
 * @memberof uiStateActions
 * @param {string} dataType - one of `'text/csv'`
 * @public
 */

exports.setExportSelectedDataset = setExportSelectedDataset;
var setExportDataType = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_DATA_TYPE, function (dataType) {
  return dataType;
});
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateActions
 * @param {boolean} payload - set `true` to ony export filtered data
 * @public
 */

exports.setExportDataType = setExportDataType;
var setExportFiltered = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_FILTERED, function (payload) {
  return payload;
});
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateActions
 * @public
 */

exports.setExportFiltered = setExportFiltered;
var setExportData = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_DATA);
/**
 * Whether we export a mapbox access token used to create a single map html file
 * @memberof uiStateActions
 * @param {string} payload - mapbox access token
 * @public
 */

exports.setExportData = setExportData;
var setUserMapboxAccessToken = (0, _reduxActions.createAction)(_actionTypes["default"].SET_USER_MAPBOX_ACCESS_TOKEN, function (payload) {
  return payload;
});
/**
 * Set the export map format (html, json)
 * @memberOf uiStateActions
 * @param {string} payload - map format
 * @public
 */

exports.setUserMapboxAccessToken = setUserMapboxAccessToken;
var setExportMapFormat = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_MAP_FORMAT, function (payload) {
  return payload;
});
/**
 * Set the HTML mode to use to export HTML mode
 * @type {actionCreator}
 */

exports.setExportMapFormat = setExportMapFormat;
var setExportHTMLMapMode = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_MAP_HTML_MODE, function (payload) {
  return payload;
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by  `uiState` reducer.
 * They manage UI changes in tha app, such as open and close side panel,
 * switch between tabs in the side panel, open and close modal dialog for exporting data / images etc.
 * It also manges which settings are selected during image and map export
 *
 * @public
 */

/* eslint-disable no-unused-vars */

exports.setExportHTMLMapMode = setExportHTMLMapMode;
var uiStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3VpLXN0YXRlLWFjdGlvbnMuanMiXSwibmFtZXMiOlsidG9nZ2xlU2lkZVBhbmVsIiwiQWN0aW9uVHlwZXMiLCJUT0dHTEVfU0lERV9QQU5FTCIsImlkIiwidG9nZ2xlTW9kYWwiLCJUT0dHTEVfTU9EQUwiLCJzaG93RXhwb3J0RHJvcGRvd24iLCJTSE9XX0VYUE9SVF9EUk9QRE9XTiIsImhpZGVFeHBvcnREcm9wZG93biIsIkhJREVfRVhQT1JUX0RST1BET1dOIiwidG9nZ2xlTWFwQ29udHJvbCIsIlRPR0dMRV9NQVBfQ09OVFJPTCIsInBhbmVsSWQiLCJpbmRleCIsIm9wZW5EZWxldGVNb2RhbCIsIk9QRU5fREVMRVRFX01PREFMIiwiZGF0YXNldElkIiwiYWRkTm90aWZpY2F0aW9uIiwiQUREX05PVElGSUNBVElPTiIsIm5vdGlmaWNhdGlvbiIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIlJFTU9WRV9OT1RJRklDQVRJT04iLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJTRVRfRVhQT1JUX0lNQUdFX1NFVFRJTkciLCJuZXdTZXR0aW5nIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsIlNUQVJUX0VYUE9SVElOR19JTUFHRSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsIlNFVF9FWFBPUlRfSU1BR0VfREFUQV9VUkkiLCJkYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsIlNFVF9FWFBPUlRfSU1BR0VfRVJST1IiLCJlcnJvciIsImNsZWFudXBFeHBvcnRJbWFnZSIsIkNMRUFOVVBfRVhQT1JUX0lNQUdFIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0IiwiU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VUIiwic2V0RXhwb3J0RGF0YVR5cGUiLCJTRVRfRVhQT1JUX0RBVEFfVFlQRSIsImRhdGFUeXBlIiwic2V0RXhwb3J0RmlsdGVyZWQiLCJTRVRfRVhQT1JUX0ZJTFRFUkVEIiwicGF5bG9hZCIsInNldEV4cG9ydERhdGEiLCJTRVRfRVhQT1JUX0RBVEEiLCJzZXRVc2VyTWFwYm94QWNjZXNzVG9rZW4iLCJTRVRfVVNFUl9NQVBCT1hfQUNDRVNTX1RPS0VOIiwic2V0RXhwb3J0TWFwRm9ybWF0IiwiU0VUX0VYUE9SVF9NQVBfRk9STUFUIiwic2V0RXhwb3J0SFRNTE1hcE1vZGUiLCJTRVRfRVhQT1JUX01BUF9IVE1MX01PREUiLCJ1aVN0YXRlQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7O0FBTU8sSUFBTUEsZUFBZSxHQUFHLGdDQUFhQyx3QkFBWUMsaUJBQXpCLEVBQTRDLFVBQUFDLEVBQUU7QUFBQSxTQUFJQSxFQUFKO0FBQUEsQ0FBOUMsQ0FBeEI7QUFFUDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sSUFBTUMsV0FBVyxHQUFHLGdDQUFhSCx3QkFBWUksWUFBekIsRUFBdUMsVUFBQUYsRUFBRTtBQUFBLFNBQUlBLEVBQUo7QUFBQSxDQUF6QyxDQUFwQjtBQUVQOzs7Ozs7OztBQU1PLElBQU1HLGtCQUFrQixHQUFHLGdDQUFhTCx3QkFBWU0sb0JBQXpCLEVBQStDLFVBQUFKLEVBQUU7QUFBQSxTQUFJQSxFQUFKO0FBQUEsQ0FBakQsQ0FBM0I7QUFFUDs7Ozs7OztBQUtPLElBQU1LLGtCQUFrQixHQUFHLGdDQUFhUCx3QkFBWVEsb0JBQXpCLENBQTNCO0FBRVA7Ozs7Ozs7O0FBTU8sSUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQWFULHdCQUFZVSxrQkFBekIsRUFBNkMsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsU0FBcUI7QUFDaEdELElBQUFBLE9BQU8sRUFBUEEsT0FEZ0c7QUFFaEdDLElBQUFBLEtBQUssRUFBTEE7QUFGZ0csR0FBckI7QUFBQSxDQUE3QyxDQUF6QjtBQUtQOzs7Ozs7OztBQU1PLElBQU1DLGVBQWUsR0FBRyxnQ0FBYWIsd0JBQVljLGlCQUF6QixFQUE0QyxVQUFBQyxTQUFTO0FBQUEsU0FBSUEsU0FBSjtBQUFBLENBQXJELENBQXhCO0FBRVA7Ozs7Ozs7O0FBTU8sSUFBTUMsZUFBZSxHQUFHLGdDQUM3QmhCLHdCQUFZaUIsZ0JBRGlCLEVBRTdCLFVBQUFDLFlBQVk7QUFBQSxTQUFJQSxZQUFKO0FBQUEsQ0FGaUIsQ0FBeEI7QUFLUDs7Ozs7Ozs7QUFNTyxJQUFNQyxrQkFBa0IsR0FBRyxnQ0FBYW5CLHdCQUFZb0IsbUJBQXpCLEVBQThDLFVBQUFsQixFQUFFO0FBQUEsU0FBSUEsRUFBSjtBQUFBLENBQWhELENBQTNCO0FBRVA7Ozs7Ozs7O0FBTU8sSUFBTW1CLHFCQUFxQixHQUFHLGdDQUNuQ3JCLHdCQUFZc0Isd0JBRHVCLEVBRW5DLFVBQUFDLFVBQVU7QUFBQSxTQUFJQSxVQUFKO0FBQUEsQ0FGeUIsQ0FBOUI7QUFLUDs7Ozs7OztBQUtPLElBQU1DLG1CQUFtQixHQUFHLGdDQUFheEIsd0JBQVl5QixxQkFBekIsQ0FBNUI7QUFFUDs7Ozs7Ozs7QUFNTyxJQUFNQyxxQkFBcUIsR0FBRyxnQ0FDbkMxQix3QkFBWTJCLHlCQUR1QixFQUVuQyxVQUFBQyxPQUFPO0FBQUEsU0FBSUEsT0FBSjtBQUFBLENBRjRCLENBQTlCOztBQUtBLElBQU1DLG1CQUFtQixHQUFHLGdDQUFhN0Isd0JBQVk4QixzQkFBekIsRUFBaUQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUo7QUFBQSxDQUF0RCxDQUE1QjtBQUVQOzs7Ozs7O0FBS08sSUFBTUMsa0JBQWtCLEdBQUcsZ0NBQWFoQyx3QkFBWWlDLG9CQUF6QixDQUEzQjtBQUVQOzs7Ozs7OztBQU1PLElBQU1DLHdCQUF3QixHQUFHLGdDQUN0Q2xDLHdCQUFZbUMsMkJBRDBCLEVBRXRDLFVBQUFwQixTQUFTO0FBQUEsU0FBSUEsU0FBSjtBQUFBLENBRjZCLENBQWpDO0FBS1A7Ozs7Ozs7O0FBTU8sSUFBTXFCLGlCQUFpQixHQUFHLGdDQUMvQnBDLHdCQUFZcUMsb0JBRG1CLEVBRS9CLFVBQUFDLFFBQVE7QUFBQSxTQUFJQSxRQUFKO0FBQUEsQ0FGdUIsQ0FBMUI7QUFLUDs7Ozs7Ozs7QUFNTyxJQUFNQyxpQkFBaUIsR0FBRyxnQ0FBYXZDLHdCQUFZd0MsbUJBQXpCLEVBQThDLFVBQUFDLE9BQU87QUFBQSxTQUFJQSxPQUFKO0FBQUEsQ0FBckQsQ0FBMUI7QUFFUDs7Ozs7OztBQUtPLElBQU1DLGFBQWEsR0FBRyxnQ0FBYTFDLHdCQUFZMkMsZUFBekIsQ0FBdEI7QUFFUDs7Ozs7Ozs7QUFNTyxJQUFNQyx3QkFBd0IsR0FBRyxnQ0FDdEM1Qyx3QkFBWTZDLDRCQUQwQixFQUV0QyxVQUFBSixPQUFPO0FBQUEsU0FBSUEsT0FBSjtBQUFBLENBRitCLENBQWpDO0FBS1A7Ozs7Ozs7O0FBTU8sSUFBTUssa0JBQWtCLEdBQUcsZ0NBQ2hDOUMsd0JBQVkrQyxxQkFEb0IsRUFFaEMsVUFBQU4sT0FBTztBQUFBLFNBQUlBLE9BQUo7QUFBQSxDQUZ5QixDQUEzQjtBQUtQOzs7Ozs7QUFJTyxJQUFNTyxvQkFBb0IsR0FBRyxnQ0FDbENoRCx3QkFBWWlELHdCQURzQixFQUVsQyxVQUFBUixPQUFPO0FBQUEsU0FBSUEsT0FBSjtBQUFBLENBRjJCLENBQTdCO0FBS1A7Ozs7QUFHQTs7Ozs7Ozs7O0FBUUE7OztBQUNBLElBQU1TLGNBQWMsR0FBRyxJQUF2QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xyXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGFjdGl2ZSBzaWRlIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgIGlkIG9mIHNpZGUgcGFuZWwgdG8gYmUgc2hvd24sIG9uZSBvZiBgbGF5ZXJgLCBgZmlsdGVyYCwgYGludGVyYWN0aW9uYCwgYG1hcGBcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVNpZGVQYW5lbCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5UT0dHTEVfU0lERV9QQU5FTCwgaWQgPT4gaWQpO1xyXG5cclxuLyoqXHJcbiAqIFNob3cgYW5kIGhpZGUgbW9kYWwgZGlhbG9nXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBpZCAtIGlkIG9mIG1vZGFsIHRvIGJlIHNob3duLCBudWxsIHRvIGhpZGUgbW9kYWxzLiBPbmUgb2Y6XHJcbiAqXHJcbiAqICAtIFtgREFUQV9UQUJMRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2RhdGFfdGFibGVfaWQpXHJcbiAqICAtIFtgREVMRVRFX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNkZWxldGVfZGF0YV9pZClcclxuICogIC0gW2BBRERfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2FkZF9kYXRhX2lkKVxyXG4gKiAgLSBbYEVYUE9SVF9JTUFHRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2V4cG9ydF9pbWFnZV9pZClcclxuICogIC0gW2BFWFBPUlRfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2V4cG9ydF9kYXRhX2lkKVxyXG4gKiAgLSBbYEFERF9NQVBfU1RZTEVfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNhZGRfbWFwX3N0eWxlX2lkKVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlTW9kYWwgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuVE9HR0xFX01PREFMLCBpZCA9PiBpZCk7XHJcblxyXG4vKipcclxuICogSGlkZSBhbmQgc2hvdyBzaWRlIHBhbmVsIGhlYWRlciBkcm9wZG93biwgYWN0aXZhdGVkIGJ5IGNsaWNraW5nIHRoZSBzaGFyZSBsaW5rIG9uIHRvcCBvZiB0aGUgc2lkZSBwYW5lbFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gaWQgb2YgdGhlIGRyb3Bkb3duXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaG93RXhwb3J0RHJvcGRvd24gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU0hPV19FWFBPUlRfRFJPUERPV04sIGlkID0+IGlkKTtcclxuXHJcbi8qKlxyXG4gKiBIaWRlIHNpZGUgcGFuZWwgaGVhZGVyIGRyb3Bkb3duLCBhY3RpdmF0ZWQgYnkgY2xpY2tpbmcgdGhlIHNoYXJlIGxpbmsgb24gdG9wIG9mIHRoZSBzaWRlIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaGlkZUV4cG9ydERyb3Bkb3duID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLkhJREVfRVhQT1JUX0RST1BET1dOKTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFuZWxJZCAtIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVNYXBDb250cm9sID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlRPR0dMRV9NQVBfQ09OVFJPTCwgKHBhbmVsSWQsIGluZGV4KSA9PiAoe1xyXG4gIHBhbmVsSWQsXHJcbiAgaW5kZXhcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBhY3RpdmUgbWFwIGNvbnRyb2wgcGFuZWxcclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhc2V0SWQgLSBgaWRgIG9mIHRoZSBkYXRhc2V0IHRvIGJlIGRlbGV0ZWRcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG9wZW5EZWxldGVNb2RhbCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5PUEVOX0RFTEVURV9NT0RBTCwgZGF0YXNldElkID0+IGRhdGFzZXRJZCk7XHJcblxyXG4vKipcclxuICogQWRkIGEgbm90aWZpY2F0aW9uIHRvIGJlIGRpc3BsYXllZFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtPYmplY3R9IG5vdGlmaWNhdGlvbiAtIFRoZSBgbm90aWZpY2F0aW9uYCBvYmplY3QgdG8gYmUgYWRkZWRcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZE5vdGlmaWNhdGlvbiA9IGNyZWF0ZUFjdGlvbihcclxuICBBY3Rpb25UeXBlcy5BRERfTk9USUZJQ0FUSU9OLFxyXG4gIG5vdGlmaWNhdGlvbiA9PiBub3RpZmljYXRpb25cclxuKTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBub3RpZmljYXRpb25cclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIGBpZGAgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBiZSByZW1vdmVkXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZW1vdmVOb3RpZmljYXRpb24gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuUkVNT1ZFX05PVElGSUNBVElPTiwgaWQgPT4gaWQpO1xyXG5cclxuLyoqXHJcbiAqIFNldCBgZXhwb3J0SW1hZ2VgIHNldHRpbmdzOiByYXRpbywgcmVzb2x1dGlvbiwgbGVnZW5kXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3U2V0dGluZyAtIHtyYXRpbzogJzF4J31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlU2V0dGluZyA9IGNyZWF0ZUFjdGlvbihcclxuICBBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0lNQUdFX1NFVFRJTkcsXHJcbiAgbmV3U2V0dGluZyA9PiBuZXdTZXR0aW5nXHJcbik7XHJcblxyXG4vKipcclxuICogU2V0IGBleHBvcnRJbWFnZS5leHBvcnRpbmdgIHRvIHRydWVcclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdGFydEV4cG9ydGluZ0ltYWdlID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlNUQVJUX0VYUE9SVElOR19JTUFHRSk7XHJcblxyXG4vKipcclxuICogU2V0IGBleHBvcnRJbWFnZS5zZXRFeHBvcnRJbWFnZURhdGFVcmlgIHRvIGEgZGF0YVVyaVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFVcmkgLSBleHBvcnQgaW1hZ2UgZGF0YSB1cmlcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRGF0YVVyaSA9IGNyZWF0ZUFjdGlvbihcclxuICBBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0lNQUdFX0RBVEFfVVJJLFxyXG4gIGRhdGFVcmkgPT4gZGF0YVVyaVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRXJyb3IgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9JTUFHRV9FUlJPUiwgZXJyb3IgPT4gZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBjYWNoZWQgZXhwb3J0IGltYWdlXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2xlYW51cEV4cG9ydEltYWdlID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLkNMRUFOVVBfRVhQT1JUX0lNQUdFKTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgc2VsZWN0ZWQgZGF0YXNldCBmb3IgZXhwb3J0XHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldElkIC0gZGF0YXNldCBpZFxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0ID0gY3JlYXRlQWN0aW9uKFxyXG4gIEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfU0VMRUNURURfREFUQVNFVCxcclxuICBkYXRhc2V0SWQgPT4gZGF0YXNldElkXHJcbik7XHJcblxyXG4vKipcclxuICogU2V0IGRhdGEgZm9ybWF0IGZvciBleHBvcnRpbmcgZGF0YVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFUeXBlIC0gb25lIG9mIGAndGV4dC9jc3YnYFxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RGF0YVR5cGUgPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9EQVRBX1RZUEUsXHJcbiAgZGF0YVR5cGUgPT4gZGF0YVR5cGVcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRvIGV4cG9ydCBmaWx0ZXJlZCBkYXRhLCBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtib29sZWFufSBwYXlsb2FkIC0gc2V0IGB0cnVlYCB0byBvbnkgZXhwb3J0IGZpbHRlcmVkIGRhdGFcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEZpbHRlcmVkID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfRklMVEVSRUQsIHBheWxvYWQgPT4gcGF5bG9hZCk7XHJcblxyXG4vKipcclxuICogV2hldGhlciB0byBpbmNsdWRpbmcgZGF0YSBpbiBtYXAgY29uZmlnLCB0b2dnbGUgYmV0d2VlbiBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydERhdGEgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9EQVRBKTtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHdlIGV4cG9ydCBhIG1hcGJveCBhY2Nlc3MgdG9rZW4gdXNlZCB0byBjcmVhdGUgYSBzaW5nbGUgbWFwIGh0bWwgZmlsZVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQgLSBtYXBib3ggYWNjZXNzIHRva2VuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyTWFwYm94QWNjZXNzVG9rZW4gPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuU0VUX1VTRVJfTUFQQk9YX0FDQ0VTU19UT0tFTixcclxuICBwYXlsb2FkID0+IHBheWxvYWRcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGV4cG9ydCBtYXAgZm9ybWF0IChodG1sLCBqc29uKVxyXG4gKiBAbWVtYmVyT2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQgLSBtYXAgZm9ybWF0XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRNYXBGb3JtYXQgPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9NQVBfRk9STUFULFxyXG4gIHBheWxvYWQgPT4gcGF5bG9hZFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgSFRNTCBtb2RlIHRvIHVzZSB0byBleHBvcnQgSFRNTCBtb2RlXHJcbiAqIEB0eXBlIHthY3Rpb25DcmVhdG9yfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEhUTUxNYXBNb2RlID0gY3JlYXRlQWN0aW9uKFxyXG4gIEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfTUFQX0hUTUxfTU9ERSxcclxuICBwYXlsb2FkID0+IHBheWxvYWRcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRlY2xhcmF0aW9uIGlzIG5lZWRlZCB0byBncm91cCBhY3Rpb25zIGluIGRvY3NcclxuICovXHJcbi8qKlxyXG4gKiBBY3Rpb25zIGhhbmRsZWQgbW9zdGx5IGJ5ICBgdWlTdGF0ZWAgcmVkdWNlci5cclxuICogVGhleSBtYW5hZ2UgVUkgY2hhbmdlcyBpbiB0aGEgYXBwLCBzdWNoIGFzIG9wZW4gYW5kIGNsb3NlIHNpZGUgcGFuZWwsXHJcbiAqIHN3aXRjaCBiZXR3ZWVuIHRhYnMgaW4gdGhlIHNpZGUgcGFuZWwsIG9wZW4gYW5kIGNsb3NlIG1vZGFsIGRpYWxvZyBmb3IgZXhwb3J0aW5nIGRhdGEgLyBpbWFnZXMgZXRjLlxyXG4gKiBJdCBhbHNvIG1hbmdlcyB3aGljaCBzZXR0aW5ncyBhcmUgc2VsZWN0ZWQgZHVyaW5nIGltYWdlIGFuZCBtYXAgZXhwb3J0XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IHVpU3RhdGVBY3Rpb25zID0gbnVsbDtcclxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4iXX0=