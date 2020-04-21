"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSavedMapsErrorUpdater = exports.getSavedMapsSuccessUpdater = exports.getSavedMapsUpdater = exports.setCloudProviderUpdater = exports.resetProviderStatusUpdater = exports.loadCloudMapErrorUpdater = exports.loadCloudMapSuccessUpdater = exports.loadCloudMapUpdater = exports.exportFileErrorUpdater = exports.postSaveLoadSuccessUpdater = exports.exportFileSuccessUpdater = exports.exportFileToCloudUpdater = exports.INITIAL_PROVIDER_STATE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tasks = require("react-palm/tasks");

var _console = _interopRequireDefault(require("global/console"));

var _utils = require("../utils/utils");

var _tasks2 = require("../tasks/tasks");

var _providerActions = require("../actions/provider-actions");

var _uiStateActions = require("../actions/ui-state-actions");

var _actions = require("../actions/actions");

var _defaultSettings = require("../constants/default-settings");

var _schemas = _interopRequireDefault(require("../schemas"));

var _dataProcessor = require("../processors/data-processor");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var INITIAL_PROVIDER_STATE = {
  isProviderLoading: false,
  isCloudMapLoading: false,
  providerError: null,
  currentProvider: null,
  successInfo: {},
  mapSaved: null
};
exports.INITIAL_PROVIDER_STATE = INITIAL_PROVIDER_STATE;

function createActionTask(action, payload) {
  if (typeof action === 'function') {
    return (0, _tasks2.ACTION_TASK)().map(function (_) {
      return action(payload);
    });
  }

  return null;
}

function _validateProvider(provider, method) {
  if (!provider) {
    _console["default"].error("provider is not defined");

    return false;
  }

  if (typeof provider[method] !== 'function') {
    _console["default"].error("".concat(method, " is not a function of Cloud provider: ").concat(provider.name));

    return false;
  }

  return true;
}

function createGlobalNotificationTasks(_ref) {
  var type = _ref.type,
      message = _ref.message,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? true : _ref$delayClose;
  var id = (0, _utils.generateHashId)();
  var successNote = {
    id: id,
    type: _defaultSettings.DEFAULT_NOTIFICATION_TYPES[type] || _defaultSettings.DEFAULT_NOTIFICATION_TYPES.success,
    topic: _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global,
    message: message
  };
  var task = (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _uiStateActions.addNotification)(successNote);
  });
  return delayClose ? [task, (0, _tasks2.DELAY_TASK)(3000).map(function (_) {
    return (0, _uiStateActions.removeNotification)(id);
  })] : [task];
}
/**
 * This method will export the current kepler config file to the chosen cloud proder
 * add returns a share URL
 *
 * @param {*} state
 * @param {*} action
 */


var exportFileToCloudUpdater = function exportFileToCloudUpdater(state, action) {
  var _action$payload = action.payload,
      mapData = _action$payload.mapData,
      provider = _action$payload.provider,
      _action$payload$optio = _action$payload.options,
      options = _action$payload$optio === void 0 ? {} : _action$payload$optio,
      onSuccess = _action$payload.onSuccess,
      onError = _action$payload.onError,
      closeModal = _action$payload.closeModal;

  if (!_validateProvider(provider, 'uploadMap')) {
    return state;
  }

  var newState = _objectSpread({}, state, {
    isProviderLoading: true,
    currentProvider: provider.name
  }); // payload called by provider.uploadMap


  var payload = {
    mapData: mapData,
    options: options
  };
  var uploadFileTask = (0, _tasks2.EXPORT_FILE_TO_CLOUD_TASK)({
    provider: provider,
    payload: payload
  }).bimap( // success
  function (response) {
    return (0, _providerActions.exportFileSuccess)({
      response: response,
      provider: provider,
      options: options,
      onSuccess: onSuccess,
      closeModal: closeModal
    });
  }, // error
  function (error) {
    return (0, _providerActions.exportFileError)({
      error: error,
      provider: provider,
      options: options,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};
/**
 *
 * @param {*} state
 * @param {*} action
 */


exports.exportFileToCloudUpdater = exportFileToCloudUpdater;

var exportFileSuccessUpdater = function exportFileSuccessUpdater(state, action) {
  var _action$payload2 = action.payload,
      response = _action$payload2.response,
      provider = _action$payload2.provider,
      options = _action$payload2.options,
      onSuccess = _action$payload2.onSuccess,
      closeModal = _action$payload2.closeModal;

  var newState = _objectSpread({}, state, {
    isProviderLoading: false,
    // TODO: do we always have to store this?
    successInfo: response
  }, !options.isPublic ? {
    mapSaved: provider.name
  } : {});

  var tasks = [createActionTask(onSuccess, {
    response: response,
    provider: provider,
    options: options
  }), closeModal && (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.postSaveLoadSuccess)("Map saved to ".concat(state.currentProvider, "!"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
/**
 * Close modal on success and display notification
 * @param {*} state
 * @param {*} action
 */


exports.exportFileSuccessUpdater = exportFileSuccessUpdater;

var postSaveLoadSuccessUpdater = function postSaveLoadSuccessUpdater(state, action) {
  var message = action.payload || "Saved / Load to ".concat(state.currentProvider, " Success");
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _uiStateActions.toggleModal)(null);
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.resetProviderStatus)();
  })].concat((0, _toConsumableArray2["default"])(createGlobalNotificationTasks({
    message: message
  })));
  return (0, _tasks.withTask)(state, tasks);
};
/**
 *
 * @param {*} state
 * @param {*} action
 */


exports.postSaveLoadSuccessUpdater = postSaveLoadSuccessUpdater;

var exportFileErrorUpdater = function exportFileErrorUpdater(state, action) {
  var _action$payload3 = action.payload,
      error = _action$payload3.error,
      provider = _action$payload3.provider,
      onError = _action$payload3.onError;

  var newState = _objectSpread({}, state, {
    isProviderLoading: false,
    providerError: (0, _utils.getError)(error)
  });

  var task = createActionTask(onError, {
    error: error,
    provider: provider
  });
  return task ? (0, _tasks.withTask)(newState, task) : newState;
};

exports.exportFileErrorUpdater = exportFileErrorUpdater;

var loadCloudMapUpdater = function loadCloudMapUpdater(state, action) {
  var _action$payload4 = action.payload,
      loadParams = _action$payload4.loadParams,
      provider = _action$payload4.provider,
      onSuccess = _action$payload4.onSuccess,
      onError = _action$payload4.onError;

  if (!loadParams) {
    _console["default"].warn('load map error: loadParams is undefined');

    return state;
  }

  if (!_validateProvider(provider, 'downloadMap')) {
    return state;
  }

  var newState = _objectSpread({}, state, {
    isProviderLoading: true,
    isCloudMapLoading: true
  }); // payload called by provider.downloadMap


  var uploadFileTask = (0, _tasks2.LOAD_CLOUD_MAP_TASK)({
    provider: provider,
    payload: loadParams
  }).bimap( // success
  function (response) {
    return (0, _providerActions.loadCloudMapSuccess)({
      response: response,
      loadParams: loadParams,
      provider: provider,
      onSuccess: onSuccess,
      onError: onError
    });
  }, // error
  function (error) {
    return (0, _providerActions.loadCloudMapError)({
      error: error,
      provider: provider,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};

exports.loadCloudMapUpdater = loadCloudMapUpdater;

function checkLoadMapResponseError(response) {
  if (!response || !(0, _utils.isPlainObject)(response)) {
    return new Error('Load map response is empty');
  }

  if (!(0, _utils.isPlainObject)(response.map)) {
    return new Error("Load map response should be an object property \"map\"");
  }

  if (!response.map.datasets || !response.map.config) {
    return new Error("Load map response.map should be an object with property datasets or config");
  }

  return null;
}

function getDatasetHandler(format) {
  var defaultHandler = _dataProcessor.DATASET_HANDLERS[_defaultSettings.DATASET_FORMATS.csv];

  if (!format) {
    _console["default"].warn('format is not provided in load map response, will use csv by default');

    return defaultHandler;
  }

  if (!_dataProcessor.DATASET_HANDLERS[format]) {
    var supportedFormat = Object.keys(_defaultSettings.DATASET_FORMATS).map(function (k) {
      return "'".concat(k, "'");
    }).join(', ');

    _console["default"].warn("unknown format ".concat(format, ". Please use one of ").concat(supportedFormat, ", will use csv by default"));

    return defaultHandler;
  }

  return _dataProcessor.DATASET_HANDLERS[format];
}

function parseLoadMapResponse(response, loadParams, provider) {
  var map = response.map,
      format = response.format;
  var processorMethod = getDatasetHandler(format);
  var parsedDatasets = (0, _utils.toArray)(map.datasets).map(function (ds, i) {
    if (format === _defaultSettings.DATASET_FORMATS.keplergl) {
      // no need to obtain id, directly pass them in
      return processorMethod(ds);
    }

    var info = ds && ds.info || {
      id: (0, _utils.generateHashId)(6)
    };
    var data = processorMethod(ds.data || ds);
    return {
      info: info,
      data: data
    };
  });
  var parsedConfig = map.config ? _schemas["default"].parseSavedConfig(map.config) : null;

  var info = _objectSpread({}, map.info, {
    provider: provider.name,
    loadParams: loadParams
  });

  return {
    datasets: parsedDatasets,
    config: parsedConfig,
    info: info
  };
}

var loadCloudMapSuccessUpdater = function loadCloudMapSuccessUpdater(state, action) {
  var _action$payload5 = action.payload,
      response = _action$payload5.response,
      loadParams = _action$payload5.loadParams,
      provider = _action$payload5.provider,
      onSuccess = _action$payload5.onSuccess,
      onError = _action$payload5.onError;
  var formatError = checkLoadMapResponseError(response);

  if (formatError) {
    // if response format is not correct
    return exportFileErrorUpdater(state, {
      payload: {
        error: formatError,
        provider: provider,
        onError: onError
      }
    });
  }

  var newState = _objectSpread({}, state, {
    mapSaved: provider.name,
    currentProvider: provider.name,
    isCloudMapLoading: false,
    isProviderLoading: false
  });

  var payload = parseLoadMapResponse(response, loadParams, provider);
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.addDataToMap)(payload);
  }), createActionTask(onSuccess, {
    response: response,
    loadParams: loadParams,
    provider: provider
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.postSaveLoadSuccess)("Map from ".concat(provider.name, " loaded"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};

exports.loadCloudMapSuccessUpdater = loadCloudMapSuccessUpdater;

var loadCloudMapErrorUpdater = function loadCloudMapErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error loading saved map";

  _console["default"].warn(message);

  var newState = _objectSpread({}, state, {
    isProviderLoading: false,
    isCloudMapLoading: false,
    providerError: null
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};
/**
 *
 * @param {*} state
 * @param {*} action
 */


exports.loadCloudMapErrorUpdater = loadCloudMapErrorUpdater;

var resetProviderStatusUpdater = function resetProviderStatusUpdater(state, action) {
  return _objectSpread({}, state, {
    isProviderLoading: false,
    providerError: null,
    isCloudMapLoading: false,
    successInfo: {}
  });
};
/**
 * Set current cloudProvider
 * @param {*} state
 * @param {*} action
 */


exports.resetProviderStatusUpdater = resetProviderStatusUpdater;

var setCloudProviderUpdater = function setCloudProviderUpdater(state, action) {
  return _objectSpread({}, state, {
    isProviderLoading: false,
    providerError: null,
    successInfo: {},
    currentProvider: action.payload
  });
};

exports.setCloudProviderUpdater = setCloudProviderUpdater;

var getSavedMapsUpdater = function getSavedMapsUpdater(state, action) {
  var provider = action.payload;

  if (!_validateProvider(provider, 'listMaps')) {
    return state;
  }

  var getSavedMapsTask = (0, _tasks2.GET_SAVED_MAPS_TASK)(provider).bimap( // success
  function (visualizations) {
    return (0, _providerActions.getSavedMapsSuccess)({
      visualizations: visualizations,
      provider: provider
    });
  }, // error
  function (error) {
    return (0, _providerActions.getSavedMapsError)({
      error: error,
      provider: provider
    });
  });
  return (0, _tasks.withTask)(_objectSpread({}, state, {
    isProviderLoading: true
  }), getSavedMapsTask);
};

exports.getSavedMapsUpdater = getSavedMapsUpdater;

var getSavedMapsSuccessUpdater = function getSavedMapsSuccessUpdater(state, action) {
  return _objectSpread({}, state, {
    isProviderLoading: false,
    visualizations: action.payload.visualizations
  });
};

exports.getSavedMapsSuccessUpdater = getSavedMapsSuccessUpdater;

var getSavedMapsErrorUpdater = function getSavedMapsErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error getting saved maps from ".concat(state.currentProvider);

  _console["default"].warn(action.payload.error);

  var newState = _objectSpread({}, state, {
    currentProvider: null,
    isProviderLoading: false
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};

exports.getSavedMapsErrorUpdater = getSavedMapsErrorUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcm92aWRlci1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJJTklUSUFMX1BST1ZJREVSX1NUQVRFIiwiaXNQcm92aWRlckxvYWRpbmciLCJpc0Nsb3VkTWFwTG9hZGluZyIsInByb3ZpZGVyRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJzdWNjZXNzSW5mbyIsIm1hcFNhdmVkIiwiY3JlYXRlQWN0aW9uVGFzayIsImFjdGlvbiIsInBheWxvYWQiLCJtYXAiLCJfIiwiX3ZhbGlkYXRlUHJvdmlkZXIiLCJwcm92aWRlciIsIm1ldGhvZCIsIkNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyIsInR5cGUiLCJtZXNzYWdlIiwiZGVsYXlDbG9zZSIsImlkIiwic3VjY2Vzc05vdGUiLCJERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyIsInN1Y2Nlc3MiLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsInRhc2siLCJleHBvcnRGaWxlVG9DbG91ZFVwZGF0ZXIiLCJzdGF0ZSIsIm1hcERhdGEiLCJvcHRpb25zIiwib25TdWNjZXNzIiwib25FcnJvciIsImNsb3NlTW9kYWwiLCJuZXdTdGF0ZSIsInVwbG9hZEZpbGVUYXNrIiwiYmltYXAiLCJyZXNwb25zZSIsImV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciIsImlzUHVibGljIiwidGFza3MiLCJmaWx0ZXIiLCJkIiwibGVuZ3RoIiwicG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXIiLCJleHBvcnRGaWxlRXJyb3JVcGRhdGVyIiwibG9hZENsb3VkTWFwVXBkYXRlciIsImxvYWRQYXJhbXMiLCJ3YXJuIiwiY2hlY2tMb2FkTWFwUmVzcG9uc2VFcnJvciIsIkVycm9yIiwiZGF0YXNldHMiLCJjb25maWciLCJnZXREYXRhc2V0SGFuZGxlciIsImZvcm1hdCIsImRlZmF1bHRIYW5kbGVyIiwiREFUQVNFVF9IQU5ETEVSUyIsIkRBVEFTRVRfRk9STUFUUyIsImNzdiIsInN1cHBvcnRlZEZvcm1hdCIsIk9iamVjdCIsImtleXMiLCJrIiwiam9pbiIsInBhcnNlTG9hZE1hcFJlc3BvbnNlIiwicHJvY2Vzc29yTWV0aG9kIiwicGFyc2VkRGF0YXNldHMiLCJkcyIsImkiLCJrZXBsZXJnbCIsImluZm8iLCJkYXRhIiwicGFyc2VkQ29uZmlnIiwiS2VwbGVyR2xTY2hlbWEiLCJwYXJzZVNhdmVkQ29uZmlnIiwibG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXIiLCJmb3JtYXRFcnJvciIsImxvYWRDbG91ZE1hcEVycm9yVXBkYXRlciIsInJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyIiwic2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIiLCJnZXRTYXZlZE1hcHNVcGRhdGVyIiwiZ2V0U2F2ZWRNYXBzVGFzayIsInZpc3VhbGl6YXRpb25zIiwiZ2V0U2F2ZWRNYXBzU3VjY2Vzc1VwZGF0ZXIiLCJnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBVUE7Ozs7OztBQVJPLElBQU1BLHNCQUFzQixHQUFHO0FBQ3BDQyxFQUFBQSxpQkFBaUIsRUFBRSxLQURpQjtBQUVwQ0MsRUFBQUEsaUJBQWlCLEVBQUUsS0FGaUI7QUFHcENDLEVBQUFBLGFBQWEsRUFBRSxJQUhxQjtBQUlwQ0MsRUFBQUEsZUFBZSxFQUFFLElBSm1CO0FBS3BDQyxFQUFBQSxXQUFXLEVBQUUsRUFMdUI7QUFNcENDLEVBQUFBLFFBQVEsRUFBRTtBQU4wQixDQUEvQjs7O0FBVVAsU0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxPQUFsQyxFQUEyQztBQUN6QyxNQUFJLE9BQU9ELE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDaEMsV0FBTywyQkFBY0UsR0FBZCxDQUFrQixVQUFBQyxDQUFDO0FBQUEs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NkJBQTZCLENBQUM7QUFBQ0MsSUFBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0JDLElBQUFBLE9BQU8sRUFBUEEsT0FBaEI7QUFBeUJDLElBQUFBLFVBQVUsRUFBRTtBQUFyQyxHQUFELENBRnhCLENBQVA7QUFJRCxDQWhCTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7d2l0aFRhc2t9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL2NvbnNvbGUnO1xyXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBnZXRFcnJvciwgaXNQbGFpbk9iamVjdH0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQge1xyXG4gIEVYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0ssXHJcbiAgQUNUSU9OX1RBU0ssXHJcbiAgREVMQVlfVEFTSyxcclxuICBMT0FEX0NMT1VEX01BUF9UQVNLLFxyXG4gIEdFVF9TQVZFRF9NQVBTX1RBU0tcclxufSBmcm9tICd0YXNrcy90YXNrcyc7XHJcbmltcG9ydCB7XHJcbiAgZXhwb3J0RmlsZVN1Y2Nlc3MsXHJcbiAgZXhwb3J0RmlsZUVycm9yLFxyXG4gIHBvc3RTYXZlTG9hZFN1Y2Nlc3MsXHJcbiAgbG9hZENsb3VkTWFwU3VjY2VzcyxcclxuICBnZXRTYXZlZE1hcHNTdWNjZXNzLFxyXG4gIGdldFNhdmVkTWFwc0Vycm9yLFxyXG4gIGxvYWRDbG91ZE1hcEVycm9yLFxyXG4gIHJlc2V0UHJvdmlkZXJTdGF0dXNcclxufSBmcm9tICdhY3Rpb25zL3Byb3ZpZGVyLWFjdGlvbnMnO1xyXG5pbXBvcnQge3JlbW92ZU5vdGlmaWNhdGlvbiwgdG9nZ2xlTW9kYWwsIGFkZE5vdGlmaWNhdGlvbn0gZnJvbSAnYWN0aW9ucy91aS1zdGF0ZS1hY3Rpb25zJztcclxuaW1wb3J0IHthZGREYXRhVG9NYXB9IGZyb20gJ2FjdGlvbnMvYWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRVMsXHJcbiAgREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLFxyXG4gIERBVEFTRVRfRk9STUFUU1xyXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHt0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XHJcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJTklUSUFMX1BST1ZJREVSX1NUQVRFID0ge1xyXG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcclxuICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXHJcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcclxuICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXHJcbiAgc3VjY2Vzc0luZm86IHt9LFxyXG4gIG1hcFNhdmVkOiBudWxsXHJcbn07XHJcbmltcG9ydCB7REFUQVNFVF9IQU5ETEVSU30gZnJvbSAncHJvY2Vzc29ycy9kYXRhLXByb2Nlc3Nvcic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25UYXNrKGFjdGlvbiwgcGF5bG9hZCkge1xyXG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gQUNUSU9OX1RBU0soKS5tYXAoXyA9PiBhY3Rpb24ocGF5bG9hZCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCBtZXRob2QpIHtcclxuICBpZiAoIXByb3ZpZGVyKSB7XHJcbiAgICBDb25zb2xlLmVycm9yKGBwcm92aWRlciBpcyBub3QgZGVmaW5lZGApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBwcm92aWRlclttZXRob2RdICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBDb25zb2xlLmVycm9yKGAke21ldGhvZH0gaXMgbm90IGEgZnVuY3Rpb24gb2YgQ2xvdWQgcHJvdmlkZXI6ICR7cHJvdmlkZXIubmFtZX1gKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7dHlwZSwgbWVzc2FnZSwgZGVsYXlDbG9zZSA9IHRydWV9KSB7XHJcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUhhc2hJZCgpO1xyXG4gIGNvbnN0IHN1Y2Nlc3NOb3RlID0ge1xyXG4gICAgaWQsXHJcbiAgICB0eXBlOiBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFU1t0eXBlXSB8fCBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUy5zdWNjZXNzLFxyXG4gICAgdG9waWM6IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUy5nbG9iYWwsXHJcbiAgICBtZXNzYWdlXHJcbiAgfTtcclxuICBjb25zdCB0YXNrID0gQUNUSU9OX1RBU0soKS5tYXAoXyA9PiBhZGROb3RpZmljYXRpb24oc3VjY2Vzc05vdGUpKTtcclxuICByZXR1cm4gZGVsYXlDbG9zZSA/IFt0YXNrLCBERUxBWV9UQVNLKDMwMDApLm1hcChfID0+IHJlbW92ZU5vdGlmaWNhdGlvbihpZCkpXSA6IFt0YXNrXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZXhwb3J0IHRoZSBjdXJyZW50IGtlcGxlciBjb25maWcgZmlsZSB0byB0aGUgY2hvc2VuIGNsb3VkIHByb2RlclxyXG4gKiBhZGQgcmV0dXJucyBhIHNoYXJlIFVSTFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHN0YXRlXHJcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZVRvQ2xvdWRVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7bWFwRGF0YSwgcHJvdmlkZXIsIG9wdGlvbnMgPSB7fSwgb25TdWNjZXNzLCBvbkVycm9yLCBjbG9zZU1vZGFsfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAndXBsb2FkTWFwJykpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogdHJ1ZSxcclxuICAgIGN1cnJlbnRQcm92aWRlcjogcHJvdmlkZXIubmFtZVxyXG4gIH07XHJcblxyXG4gIC8vIHBheWxvYWQgY2FsbGVkIGJ5IHByb3ZpZGVyLnVwbG9hZE1hcFxyXG4gIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICBtYXBEYXRhLFxyXG4gICAgb3B0aW9uc1xyXG4gIH07XHJcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZH0pLmJpbWFwKFxyXG4gICAgLy8gc3VjY2Vzc1xyXG4gICAgcmVzcG9uc2UgPT4gZXhwb3J0RmlsZVN1Y2Nlc3Moe3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9ucywgb25TdWNjZXNzLCBjbG9zZU1vZGFsfSksXHJcbiAgICAvLyBlcnJvclxyXG4gICAgZXJyb3IgPT4gZXhwb3J0RmlsZUVycm9yKHtlcnJvciwgcHJvdmlkZXIsIG9wdGlvbnMsIG9uRXJyb3J9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB3aXRoVGFzayhuZXdTdGF0ZSwgdXBsb2FkRmlsZVRhc2spO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gc3RhdGVcclxuICogQHBhcmFtIHsqfSBhY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBleHBvcnRGaWxlU3VjY2Vzc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnMsIG9uU3VjY2VzcywgY2xvc2VNb2RhbH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgIC8vIFRPRE86IGRvIHdlIGFsd2F5cyBoYXZlIHRvIHN0b3JlIHRoaXM/XHJcbiAgICBzdWNjZXNzSW5mbzogcmVzcG9uc2UsXHJcbiAgICAuLi4oIW9wdGlvbnMuaXNQdWJsaWNcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBtYXBTYXZlZDogcHJvdmlkZXIubmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fSlcclxuICB9O1xyXG5cclxuICBjb25zdCB0YXNrcyA9IFtcclxuICAgIGNyZWF0ZUFjdGlvblRhc2sob25TdWNjZXNzLCB7cmVzcG9uc2UsIHByb3ZpZGVyLCBvcHRpb25zfSksXHJcbiAgICBjbG9zZU1vZGFsICYmXHJcbiAgICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIHNhdmVkIHRvICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfSFgKSlcclxuICBdLmZpbHRlcihkID0+IGQpO1xyXG5cclxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsb3NlIG1vZGFsIG9uIHN1Y2Nlc3MgYW5kIGRpc3BsYXkgbm90aWZpY2F0aW9uXHJcbiAqIEBwYXJhbSB7Kn0gc3RhdGVcclxuICogQHBhcmFtIHsqfSBhY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBwb3N0U2F2ZUxvYWRTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkIHx8IGBTYXZlZCAvIExvYWQgdG8gJHtzdGF0ZS5jdXJyZW50UHJvdmlkZXJ9IFN1Y2Nlc3NgO1xyXG5cclxuICBjb25zdCB0YXNrcyA9IFtcclxuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gdG9nZ2xlTW9kYWwobnVsbCkpLFxyXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoXyA9PiByZXNldFByb3ZpZGVyU3RhdHVzKCkpLFxyXG4gICAgLi4uY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe21lc3NhZ2V9KVxyXG4gIF07XHJcblxyXG4gIHJldHVybiB3aXRoVGFzayhzdGF0ZSwgdGFza3MpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gc3RhdGVcclxuICogQHBhcmFtIHsqfSBhY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBleHBvcnRGaWxlRXJyb3JVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7ZXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICBwcm92aWRlckVycm9yOiBnZXRFcnJvcihlcnJvcilcclxuICB9O1xyXG5cclxuICBjb25zdCB0YXNrID0gY3JlYXRlQWN0aW9uVGFzayhvbkVycm9yLCB7ZXJyb3IsIHByb3ZpZGVyfSk7XHJcblxyXG4gIHJldHVybiB0YXNrID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2spIDogbmV3U3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3Qge2xvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgaWYgKCFsb2FkUGFyYW1zKSB7XHJcbiAgICBDb25zb2xlLndhcm4oJ2xvYWQgbWFwIGVycm9yOiBsb2FkUGFyYW1zIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnZG93bmxvYWRNYXAnKSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiB0cnVlLFxyXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IHRydWVcclxuICB9O1xyXG5cclxuICAvLyBwYXlsb2FkIGNhbGxlZCBieSBwcm92aWRlci5kb3dubG9hZE1hcFxyXG4gIGNvbnN0IHVwbG9hZEZpbGVUYXNrID0gTE9BRF9DTE9VRF9NQVBfVEFTSyh7cHJvdmlkZXIsIHBheWxvYWQ6IGxvYWRQYXJhbXN9KS5iaW1hcChcclxuICAgIC8vIHN1Y2Nlc3NcclxuICAgIHJlc3BvbnNlID0+IGxvYWRDbG91ZE1hcFN1Y2Nlc3Moe3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzLCBvbkVycm9yfSksXHJcbiAgICAvLyBlcnJvclxyXG4gICAgZXJyb3IgPT4gbG9hZENsb3VkTWFwRXJyb3Ioe2Vycm9yLCBwcm92aWRlciwgb25FcnJvcn0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHdpdGhUYXNrKG5ld1N0YXRlLCB1cGxvYWRGaWxlVGFzayk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVja0xvYWRNYXBSZXNwb25zZUVycm9yKHJlc3BvbnNlKSB7XHJcbiAgaWYgKCFyZXNwb25zZSB8fCAhaXNQbGFpbk9iamVjdChyZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvYWQgbWFwIHJlc3BvbnNlIGlzIGVtcHR5Jyk7XHJcbiAgfVxyXG4gIGlmICghaXNQbGFpbk9iamVjdChyZXNwb25zZS5tYXApKSB7XHJcbiAgICByZXR1cm4gbmV3IEVycm9yKGBMb2FkIG1hcCByZXNwb25zZSBzaG91bGQgYmUgYW4gb2JqZWN0IHByb3BlcnR5IFwibWFwXCJgKTtcclxuICB9XHJcbiAgaWYgKCFyZXNwb25zZS5tYXAuZGF0YXNldHMgfHwgIXJlc3BvbnNlLm1hcC5jb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgRXJyb3IoYExvYWQgbWFwIHJlc3BvbnNlLm1hcCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggcHJvcGVydHkgZGF0YXNldHMgb3IgY29uZmlnYCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YXNldEhhbmRsZXIoZm9ybWF0KSB7XHJcbiAgY29uc3QgZGVmYXVsdEhhbmRsZXIgPSBEQVRBU0VUX0hBTkRMRVJTW0RBVEFTRVRfRk9STUFUUy5jc3ZdO1xyXG4gIGlmICghZm9ybWF0KSB7XHJcbiAgICBDb25zb2xlLndhcm4oJ2Zvcm1hdCBpcyBub3QgcHJvdmlkZWQgaW4gbG9hZCBtYXAgcmVzcG9uc2UsIHdpbGwgdXNlIGNzdiBieSBkZWZhdWx0Jyk7XHJcbiAgICByZXR1cm4gZGVmYXVsdEhhbmRsZXI7XHJcbiAgfVxyXG5cclxuICBpZiAoIURBVEFTRVRfSEFORExFUlNbZm9ybWF0XSkge1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkRm9ybWF0ID0gT2JqZWN0LmtleXMoREFUQVNFVF9GT1JNQVRTKVxyXG4gICAgICAubWFwKGsgPT4gYCcke2t9J2ApXHJcbiAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgQ29uc29sZS53YXJuKFxyXG4gICAgICBgdW5rbm93biBmb3JtYXQgJHtmb3JtYXR9LiBQbGVhc2UgdXNlIG9uZSBvZiAke3N1cHBvcnRlZEZvcm1hdH0sIHdpbGwgdXNlIGNzdiBieSBkZWZhdWx0YFxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBEQVRBU0VUX0hBTkRMRVJTW2Zvcm1hdF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTG9hZE1hcFJlc3BvbnNlKHJlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcikge1xyXG4gIGNvbnN0IHttYXAsIGZvcm1hdH0gPSByZXNwb25zZTtcclxuICBjb25zdCBwcm9jZXNzb3JNZXRob2QgPSBnZXREYXRhc2V0SGFuZGxlcihmb3JtYXQpO1xyXG5cclxuICBjb25zdCBwYXJzZWREYXRhc2V0cyA9IHRvQXJyYXkobWFwLmRhdGFzZXRzKS5tYXAoKGRzLCBpKSA9PiB7XHJcbiAgICBpZiAoZm9ybWF0ID09PSBEQVRBU0VUX0ZPUk1BVFMua2VwbGVyZ2wpIHtcclxuICAgICAgLy8gbm8gbmVlZCB0byBvYnRhaW4gaWQsIGRpcmVjdGx5IHBhc3MgdGhlbSBpblxyXG4gICAgICByZXR1cm4gcHJvY2Vzc29yTWV0aG9kKGRzKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGluZm8gPSAoZHMgJiYgZHMuaW5mbykgfHwge2lkOiBnZW5lcmF0ZUhhc2hJZCg2KX07XHJcbiAgICBjb25zdCBkYXRhID0gcHJvY2Vzc29yTWV0aG9kKGRzLmRhdGEgfHwgZHMpO1xyXG4gICAgcmV0dXJuIHtpbmZvLCBkYXRhfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGFyc2VkQ29uZmlnID0gbWFwLmNvbmZpZyA/IEtlcGxlckdsU2NoZW1hLnBhcnNlU2F2ZWRDb25maWcobWFwLmNvbmZpZykgOiBudWxsO1xyXG5cclxuICBjb25zdCBpbmZvID0ge1xyXG4gICAgLi4ubWFwLmluZm8sXHJcbiAgICBwcm92aWRlcjogcHJvdmlkZXIubmFtZSxcclxuICAgIGxvYWRQYXJhbXNcclxuICB9O1xyXG4gIHJldHVybiB7ZGF0YXNldHM6IHBhcnNlZERhdGFzZXRzLCBjb25maWc6IHBhcnNlZENvbmZpZywgaW5mb307XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3Qge3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzLCBvbkVycm9yfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICBjb25zdCBmb3JtYXRFcnJvciA9IGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpO1xyXG4gIGlmIChmb3JtYXRFcnJvcikge1xyXG4gICAgLy8gaWYgcmVzcG9uc2UgZm9ybWF0IGlzIG5vdCBjb3JyZWN0XHJcbiAgICByZXR1cm4gZXhwb3J0RmlsZUVycm9yVXBkYXRlcihzdGF0ZSwge1xyXG4gICAgICBwYXlsb2FkOiB7ZXJyb3I6IGZvcm1hdEVycm9yLCBwcm92aWRlciwgb25FcnJvcn1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIG1hcFNhdmVkOiBwcm92aWRlci5uYW1lLFxyXG4gICAgY3VycmVudFByb3ZpZGVyOiBwcm92aWRlci5uYW1lLFxyXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGF5bG9hZCA9IHBhcnNlTG9hZE1hcFJlc3BvbnNlKHJlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcik7XHJcblxyXG4gIGNvbnN0IHRhc2tzID0gW1xyXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoXyA9PiBhZGREYXRhVG9NYXAocGF5bG9hZCkpLFxyXG4gICAgY3JlYXRlQWN0aW9uVGFzayhvblN1Y2Nlc3MsIHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXJ9KSxcclxuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIGZyb20gJHtwcm92aWRlci5uYW1lfSBsb2FkZWRgKSlcclxuICBdLmZpbHRlcihkID0+IGQpO1xyXG5cclxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcEVycm9yVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGdldEVycm9yKGFjdGlvbi5wYXlsb2FkLmVycm9yKSB8fCBgRXJyb3IgbG9hZGluZyBzYXZlZCBtYXBgO1xyXG5cclxuICBDb25zb2xlLndhcm4obWVzc2FnZSk7XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXHJcbiAgICBwcm92aWRlckVycm9yOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdpdGhUYXNrKFxyXG4gICAgbmV3U3RhdGUsXHJcbiAgICBjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7dHlwZTogJ2Vycm9yJywgbWVzc2FnZSwgZGVsYXlDbG9zZTogZmFsc2V9KVxyXG4gICk7XHJcbn07XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHN0YXRlXHJcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVzZXRQcm92aWRlclN0YXR1c1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcclxuICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXHJcbiAgc3VjY2Vzc0luZm86IHt9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNldCBjdXJyZW50IGNsb3VkUHJvdmlkZXJcclxuICogQHBhcmFtIHsqfSBzdGF0ZVxyXG4gKiBAcGFyYW0geyp9IGFjdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldENsb3VkUHJvdmlkZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxyXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXHJcbiAgc3VjY2Vzc0luZm86IHt9LFxyXG4gIGN1cnJlbnRQcm92aWRlcjogYWN0aW9uLnBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2F2ZWRNYXBzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnbGlzdE1hcHMnKSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2F2ZWRNYXBzVGFzayA9IEdFVF9TQVZFRF9NQVBTX1RBU0socHJvdmlkZXIpLmJpbWFwKFxyXG4gICAgLy8gc3VjY2Vzc1xyXG4gICAgdmlzdWFsaXphdGlvbnMgPT4gZ2V0U2F2ZWRNYXBzU3VjY2Vzcyh7dmlzdWFsaXphdGlvbnMsIHByb3ZpZGVyfSksXHJcbiAgICAvLyBlcnJvclxyXG4gICAgZXJyb3IgPT4gZ2V0U2F2ZWRNYXBzRXJyb3Ioe2Vycm9yLCBwcm92aWRlcn0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHdpdGhUYXNrKFxyXG4gICAge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgaXNQcm92aWRlckxvYWRpbmc6IHRydWVcclxuICAgIH0sXHJcbiAgICBnZXRTYXZlZE1hcHNUYXNrXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTYXZlZE1hcHNTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcclxuICB2aXN1YWxpemF0aW9uczogYWN0aW9uLnBheWxvYWQudmlzdWFsaXphdGlvbnNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2F2ZWRNYXBzRXJyb3JVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBtZXNzYWdlID1cclxuICAgIGdldEVycm9yKGFjdGlvbi5wYXlsb2FkLmVycm9yKSB8fCBgRXJyb3IgZ2V0dGluZyBzYXZlZCBtYXBzIGZyb20gJHtzdGF0ZS5jdXJyZW50UHJvdmlkZXJ9YDtcclxuXHJcbiAgQ29uc29sZS53YXJuKGFjdGlvbi5wYXlsb2FkLmVycm9yKTtcclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGN1cnJlbnRQcm92aWRlcjogbnVsbCxcclxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB3aXRoVGFzayhcclxuICAgIG5ld1N0YXRlLFxyXG4gICAgY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe3R5cGU6ICdlcnJvcicsIG1lc3NhZ2UsIGRlbGF5Q2xvc2U6IGZhbHNlfSlcclxuICApO1xyXG59O1xyXG4iXX0=