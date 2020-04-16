"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.uiStateReducerFactory = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxActions = require("redux-actions");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

var uiStateUpdaters = _interopRequireWildcard(require("./ui-state-updaters"));

var _actionHandler;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Important: Do not rename `actionHandler` or the assignment pattern of property value.
 * It is used to generate documentation
 */
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_SIDE_PANEL, uiStateUpdaters.toggleSidePanelUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_MODAL, uiStateUpdaters.toggleModalUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SHOW_EXPORT_DROPDOWN, uiStateUpdaters.showExportDropdownUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].HIDE_EXPORT_DROPDOWN, uiStateUpdaters.hideExportDropdownUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].OPEN_DELETE_MODAL, uiStateUpdaters.openDeleteModalUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_MAP_CONTROL, uiStateUpdaters.toggleMapControlUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_NOTIFICATION, uiStateUpdaters.addNotificationUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_NOTIFICATION, uiStateUpdaters.removeNotificationUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_IMAGE_SETTING, uiStateUpdaters.setExportImageSetting), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].START_EXPORTING_IMAGE, uiStateUpdaters.startExportingImage), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_IMAGE_DATA_URI, uiStateUpdaters.setExportImageDataUri), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_IMAGE_ERROR, uiStateUpdaters.setExportImageError), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].CLEANUP_EXPORT_IMAGE, uiStateUpdaters.cleanupExportImage), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_SELECTED_DATASET, uiStateUpdaters.setExportSelectedDatasetUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_DATA_TYPE, uiStateUpdaters.setExportDataTypeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_FILTERED, uiStateUpdaters.setExportFilteredUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_DATA, uiStateUpdaters.setExportDataUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_USER_MAPBOX_ACCESS_TOKEN, uiStateUpdaters.setUserMapboxAccessTokenUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_MAP_FORMAT, uiStateUpdaters.setExportMapFormatUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EXPORT_MAP_HTML_MODE, uiStateUpdaters.setExportMapHTMLMode), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES, uiStateUpdaters.loadFilesUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES_ERR, uiStateUpdaters.loadFilesErrUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_SPLIT_MAP, uiStateUpdaters.toggleSplitMapUpdater), _actionHandler);
/* Reducer */

var uiStateReducerFactory = function uiStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reduxActions.handleActions)(actionHandler, _objectSpread({}, uiStateUpdaters.INITIAL_UI_STATE, {}, initialState, {
    initialState: initialState
  }));
};

exports.uiStateReducerFactory = uiStateReducerFactory;

var _default = uiStateReducerFactory();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91aS1zdGF0ZS5qcyJdLCJuYW1lcyI6WyJhY3Rpb25IYW5kbGVyIiwiQWN0aW9uVHlwZXMiLCJUT0dHTEVfU0lERV9QQU5FTCIsInVpU3RhdGVVcGRhdGVycyIsInRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIiLCJUT0dHTEVfTU9EQUwiLCJ0b2dnbGVNb2RhbFVwZGF0ZXIiLCJTSE9XX0VYUE9SVF9EUk9QRE9XTiIsInNob3dFeHBvcnREcm9wZG93blVwZGF0ZXIiLCJISURFX0VYUE9SVF9EUk9QRE9XTiIsImhpZGVFeHBvcnREcm9wZG93blVwZGF0ZXIiLCJPUEVOX0RFTEVURV9NT0RBTCIsIm9wZW5EZWxldGVNb2RhbFVwZGF0ZXIiLCJUT0dHTEVfTUFQX0NPTlRST0wiLCJ0b2dnbGVNYXBDb250cm9sVXBkYXRlciIsIkFERF9OT1RJRklDQVRJT04iLCJhZGROb3RpZmljYXRpb25VcGRhdGVyIiwiUkVNT1ZFX05PVElGSUNBVElPTiIsInJlbW92ZU5vdGlmaWNhdGlvblVwZGF0ZXIiLCJTRVRfRVhQT1JUX0lNQUdFX1NFVFRJTkciLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJTVEFSVF9FWFBPUlRJTkdfSU1BR0UiLCJzdGFydEV4cG9ydGluZ0ltYWdlIiwiU0VUX0VYUE9SVF9JTUFHRV9EQVRBX1VSSSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsIlNFVF9FWFBPUlRfSU1BR0VfRVJST1IiLCJzZXRFeHBvcnRJbWFnZUVycm9yIiwiQ0xFQU5VUF9FWFBPUlRfSU1BR0UiLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJTRVRfRVhQT1JUX1NFTEVDVEVEX0RBVEFTRVQiLCJzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXRVcGRhdGVyIiwiU0VUX0VYUE9SVF9EQVRBX1RZUEUiLCJzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIiLCJTRVRfRVhQT1JUX0ZJTFRFUkVEIiwic2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyIiwiU0VUX0VYUE9SVF9EQVRBIiwic2V0RXhwb3J0RGF0YVVwZGF0ZXIiLCJTRVRfVVNFUl9NQVBCT1hfQUNDRVNTX1RPS0VOIiwic2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuVXBkYXRlciIsIlNFVF9FWFBPUlRfTUFQX0ZPUk1BVCIsInNldEV4cG9ydE1hcEZvcm1hdFVwZGF0ZXIiLCJTRVRfRVhQT1JUX01BUF9IVE1MX01PREUiLCJzZXRFeHBvcnRNYXBIVE1MTW9kZSIsIkxPQURfRklMRVMiLCJsb2FkRmlsZXNVcGRhdGVyIiwiTE9BRF9GSUxFU19FUlIiLCJsb2FkRmlsZXNFcnJVcGRhdGVyIiwiVE9HR0xFX1NQTElUX01BUCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciIsInVpU3RhdGVSZWR1Y2VyRmFjdG9yeSIsImluaXRpYWxTdGF0ZSIsIklOSVRJQUxfVUlfU1RBVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxhQUFhLDBFQUNoQkMsd0JBQVlDLGlCQURJLEVBQ2dCQyxlQUFlLENBQUNDLHNCQURoQyxvREFFaEJILHdCQUFZSSxZQUZJLEVBRVdGLGVBQWUsQ0FBQ0csa0JBRjNCLG9EQUdoQkwsd0JBQVlNLG9CQUhJLEVBR21CSixlQUFlLENBQUNLLHlCQUhuQyxvREFJaEJQLHdCQUFZUSxvQkFKSSxFQUltQk4sZUFBZSxDQUFDTyx5QkFKbkMsb0RBS2hCVCx3QkFBWVUsaUJBTEksRUFLZ0JSLGVBQWUsQ0FBQ1Msc0JBTGhDLG9EQU1oQlgsd0JBQVlZLGtCQU5JLEVBTWlCVixlQUFlLENBQUNXLHVCQU5qQyxvREFPaEJiLHdCQUFZYyxnQkFQSSxFQU9lWixlQUFlLENBQUNhLHNCQVAvQixvREFRaEJmLHdCQUFZZ0IsbUJBUkksRUFRa0JkLGVBQWUsQ0FBQ2UseUJBUmxDLG9EQVVoQmpCLHdCQUFZa0Isd0JBVkksRUFVdUJoQixlQUFlLENBQUNpQixxQkFWdkMsb0RBV2hCbkIsd0JBQVlvQixxQkFYSSxFQVdvQmxCLGVBQWUsQ0FBQ21CLG1CQVhwQyxvREFZaEJyQix3QkFBWXNCLHlCQVpJLEVBWXdCcEIsZUFBZSxDQUFDcUIscUJBWnhDLG9EQWFoQnZCLHdCQUFZd0Isc0JBYkksRUFhcUJ0QixlQUFlLENBQUN1QixtQkFickMsb0RBY2hCekIsd0JBQVkwQixvQkFkSSxFQWNtQnhCLGVBQWUsQ0FBQ3lCLGtCQWRuQyxvREFnQmhCM0Isd0JBQVk0QiwyQkFoQkksRUFnQjBCMUIsZUFBZSxDQUFDMkIsK0JBaEIxQyxvREFpQmhCN0Isd0JBQVk4QixvQkFqQkksRUFpQm1CNUIsZUFBZSxDQUFDNkIsd0JBakJuQyxvREFrQmhCL0Isd0JBQVlnQyxtQkFsQkksRUFrQmtCOUIsZUFBZSxDQUFDK0Isd0JBbEJsQyxvREFtQmhCakMsd0JBQVlrQyxlQW5CSSxFQW1CY2hDLGVBQWUsQ0FBQ2lDLG9CQW5COUIsb0RBb0JoQm5DLHdCQUFZb0MsNEJBcEJJLEVBb0IyQmxDLGVBQWUsQ0FBQ21DLCtCQXBCM0Msb0RBc0JoQnJDLHdCQUFZc0MscUJBdEJJLEVBc0JvQnBDLGVBQWUsQ0FBQ3FDLHlCQXRCcEMsb0RBd0JoQnZDLHdCQUFZd0Msd0JBeEJJLEVBd0J1QnRDLGVBQWUsQ0FBQ3VDLG9CQXhCdkMsb0RBeUJoQnpDLHdCQUFZMEMsVUF6QkksRUF5QlN4QyxlQUFlLENBQUN5QyxnQkF6QnpCLG9EQTBCaEIzQyx3QkFBWTRDLGNBMUJJLEVBMEJhMUMsZUFBZSxDQUFDMkMsbUJBMUI3QixvREE0QmhCN0Msd0JBQVk4QyxnQkE1QkksRUE0QmU1QyxlQUFlLENBQUM2QyxxQkE1Qi9CLGtCQUFuQjtBQStCQTs7QUFDTyxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO0FBQUEsTUFBQ0MsWUFBRCx1RUFBZ0IsRUFBaEI7QUFBQSxTQUNuQyxpQ0FBY2xELGFBQWQsb0JBQ0tHLGVBQWUsQ0FBQ2dELGdCQURyQixNQUVLRCxZQUZMO0FBR0VBLElBQUFBLFlBQVksRUFBWkE7QUFIRixLQURtQztBQUFBLENBQTlCOzs7O2VBT1FELHFCQUFxQixFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCAqIGFzIHVpU3RhdGVVcGRhdGVycyBmcm9tICcuL3VpLXN0YXRlLXVwZGF0ZXJzJztcblxuLyoqXG4gKiBJbXBvcnRhbnQ6IERvIG5vdCByZW5hbWUgYGFjdGlvbkhhbmRsZXJgIG9yIHRoZSBhc3NpZ25tZW50IHBhdHRlcm4gb2YgcHJvcGVydHkgdmFsdWUuXG4gKiBJdCBpcyB1c2VkIHRvIGdlbmVyYXRlIGRvY3VtZW50YXRpb25cbiAqL1xuY29uc3QgYWN0aW9uSGFuZGxlciA9IHtcbiAgW0FjdGlvblR5cGVzLlRPR0dMRV9TSURFX1BBTkVMXTogdWlTdGF0ZVVwZGF0ZXJzLnRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5UT0dHTEVfTU9EQUxdOiB1aVN0YXRlVXBkYXRlcnMudG9nZ2xlTW9kYWxVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuU0hPV19FWFBPUlRfRFJPUERPV05dOiB1aVN0YXRlVXBkYXRlcnMuc2hvd0V4cG9ydERyb3Bkb3duVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLkhJREVfRVhQT1JUX0RST1BET1dOXTogdWlTdGF0ZVVwZGF0ZXJzLmhpZGVFeHBvcnREcm9wZG93blVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5PUEVOX0RFTEVURV9NT0RBTF06IHVpU3RhdGVVcGRhdGVycy5vcGVuRGVsZXRlTW9kYWxVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuVE9HR0xFX01BUF9DT05UUk9MXTogdWlTdGF0ZVVwZGF0ZXJzLnRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuQUREX05PVElGSUNBVElPTl06IHVpU3RhdGVVcGRhdGVycy5hZGROb3RpZmljYXRpb25VcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuUkVNT1ZFX05PVElGSUNBVElPTl06IHVpU3RhdGVVcGRhdGVycy5yZW1vdmVOb3RpZmljYXRpb25VcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0lNQUdFX1NFVFRJTkddOiB1aVN0YXRlVXBkYXRlcnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nLFxuICBbQWN0aW9uVHlwZXMuU1RBUlRfRVhQT1JUSU5HX0lNQUdFXTogdWlTdGF0ZVVwZGF0ZXJzLnN0YXJ0RXhwb3J0aW5nSW1hZ2UsXG4gIFtBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0lNQUdFX0RBVEFfVVJJXTogdWlTdGF0ZVVwZGF0ZXJzLnNldEV4cG9ydEltYWdlRGF0YVVyaSxcbiAgW0FjdGlvblR5cGVzLlNFVF9FWFBPUlRfSU1BR0VfRVJST1JdOiB1aVN0YXRlVXBkYXRlcnMuc2V0RXhwb3J0SW1hZ2VFcnJvcixcbiAgW0FjdGlvblR5cGVzLkNMRUFOVVBfRVhQT1JUX0lNQUdFXTogdWlTdGF0ZVVwZGF0ZXJzLmNsZWFudXBFeHBvcnRJbWFnZSxcblxuICBbQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VUXTogdWlTdGF0ZVVwZGF0ZXJzLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldFVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0RBVEFfVFlQRV06IHVpU3RhdGVVcGRhdGVycy5zZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0ZJTFRFUkVEXTogdWlTdGF0ZVVwZGF0ZXJzLnNldEV4cG9ydEZpbHRlcmVkVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLlNFVF9FWFBPUlRfREFUQV06IHVpU3RhdGVVcGRhdGVycy5zZXRFeHBvcnREYXRhVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLlNFVF9VU0VSX01BUEJPWF9BQ0NFU1NfVE9LRU5dOiB1aVN0YXRlVXBkYXRlcnMuc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9NQVBfRk9STUFUXTogdWlTdGF0ZVVwZGF0ZXJzLnNldEV4cG9ydE1hcEZvcm1hdFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNFVF9FWFBPUlRfTUFQX0hUTUxfTU9ERV06IHVpU3RhdGVVcGRhdGVycy5zZXRFeHBvcnRNYXBIVE1MTW9kZSxcbiAgW0FjdGlvblR5cGVzLkxPQURfRklMRVNdOiB1aVN0YXRlVXBkYXRlcnMubG9hZEZpbGVzVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLkxPQURfRklMRVNfRVJSXTogdWlTdGF0ZVVwZGF0ZXJzLmxvYWRGaWxlc0VyclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlRPR0dMRV9TUExJVF9NQVBdOiB1aVN0YXRlVXBkYXRlcnMudG9nZ2xlU3BsaXRNYXBVcGRhdGVyXG59O1xuXG4vKiBSZWR1Y2VyICovXG5leHBvcnQgY29uc3QgdWlTdGF0ZVJlZHVjZXJGYWN0b3J5ID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PlxuICBoYW5kbGVBY3Rpb25zKGFjdGlvbkhhbmRsZXIsIHtcbiAgICAuLi51aVN0YXRlVXBkYXRlcnMuSU5JVElBTF9VSV9TVEFURSxcbiAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgaW5pdGlhbFN0YXRlXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCB1aVN0YXRlUmVkdWNlckZhY3RvcnkoKTtcbiJdfQ==