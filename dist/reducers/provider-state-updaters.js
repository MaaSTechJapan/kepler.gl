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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcm92aWRlci1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJJTklUSUFMX1BST1ZJREVSX1NUQVRFIiwiaXNQcm92aWRlckxvYWRpbmciLCJpc0Nsb3VkTWFwTG9hZGluZyIsInByb3ZpZGVyRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJzdWNjZXNzSW5mbyIsIm1hcFNhdmVkIiwiY3JlYXRlQWN0aW9uVGFzayIsImFjdGlvbiIsInBheWxvYWQiLCJtYXAiLCJfIiwiX3ZhbGlkYXRlUHJvdmlkZXIiLCJwcm92aWRlciIsIm1ldGhvZCIsIkNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyIsInR5cGUiLCJtZXNzYWdlIiwiZGVsYXlDbG9zZSIsImlkIiwic3VjY2Vzc05vdGUiLCJERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyIsInN1Y2Nlc3MiLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsInRhc2siLCJleHBvcnRGaWxlVG9DbG91ZFVwZGF0ZXIiLCJzdGF0ZSIsIm1hcERhdGEiLCJvcHRpb25zIiwib25TdWNjZXNzIiwib25FcnJvciIsImNsb3NlTW9kYWwiLCJuZXdTdGF0ZSIsInVwbG9hZEZpbGVUYXNrIiwiYmltYXAiLCJyZXNwb25zZSIsImV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciIsImlzUHVibGljIiwidGFza3MiLCJmaWx0ZXIiLCJkIiwibGVuZ3RoIiwicG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXIiLCJleHBvcnRGaWxlRXJyb3JVcGRhdGVyIiwibG9hZENsb3VkTWFwVXBkYXRlciIsImxvYWRQYXJhbXMiLCJ3YXJuIiwiY2hlY2tMb2FkTWFwUmVzcG9uc2VFcnJvciIsIkVycm9yIiwiZGF0YXNldHMiLCJjb25maWciLCJnZXREYXRhc2V0SGFuZGxlciIsImZvcm1hdCIsImRlZmF1bHRIYW5kbGVyIiwiREFUQVNFVF9IQU5ETEVSUyIsIkRBVEFTRVRfRk9STUFUUyIsImNzdiIsInN1cHBvcnRlZEZvcm1hdCIsIk9iamVjdCIsImtleXMiLCJrIiwiam9pbiIsInBhcnNlTG9hZE1hcFJlc3BvbnNlIiwicHJvY2Vzc29yTWV0aG9kIiwicGFyc2VkRGF0YXNldHMiLCJkcyIsImkiLCJrZXBsZXJnbCIsImluZm8iLCJkYXRhIiwicGFyc2VkQ29uZmlnIiwiS2VwbGVyR2xTY2hlbWEiLCJwYXJzZVNhdmVkQ29uZmlnIiwibG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXIiLCJmb3JtYXRFcnJvciIsImxvYWRDbG91ZE1hcEVycm9yVXBkYXRlciIsInJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyIiwic2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIiLCJnZXRTYXZlZE1hcHNVcGRhdGVyIiwiZ2V0U2F2ZWRNYXBzVGFzayIsInZpc3VhbGl6YXRpb25zIiwiZ2V0U2F2ZWRNYXBzU3VjY2Vzc1VwZGF0ZXIiLCJnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBVUE7Ozs7OztBQVJPLElBQU1BLHNCQUFzQixHQUFHO0FBQ3BDQyxFQUFBQSxpQkFBaUIsRUFBRSxLQURpQjtBQUVwQ0MsRUFBQUEsaUJBQWlCLEVBQUUsS0FGaUI7QUFHcENDLEVBQUFBLGFBQWEsRUFBRSxJQUhxQjtBQUlwQ0MsRUFBQUEsZUFBZSxFQUFFLElBSm1CO0FBS3BDQyxFQUFBQSxXQUFXLEVBQUUsRUFMdUI7QUFNcENDLEVBQUFBLFFBQVEsRUFBRTtBQU4wQixDQUEvQjs7O0FBVVAsU0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxPQUFsQyxFQUEyQztBQUN6QyxNQUFJLE9BQU9ELE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDaEMsV0FBTywyQkFBY0UsR0FBZCxDQUFrQixVQUFBQyxDQUFDO0FBQUEs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NkJBQTZCLENBQUM7QUFBQ0MsSUFBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0JDLElBQUFBLE9BQU8sRUFBUEEsT0FBaEI7QUFBeUJDLElBQUFBLFVBQVUsRUFBRTtBQUFyQyxHQUFELENBRnhCLENBQVA7QUFJRCxDQWhCTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7d2l0aFRhc2t9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC9jb25zb2xlJztcbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWQsIGdldEVycm9yLCBpc1BsYWluT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge1xuICBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLLFxuICBBQ1RJT05fVEFTSyxcbiAgREVMQVlfVEFTSyxcbiAgTE9BRF9DTE9VRF9NQVBfVEFTSyxcbiAgR0VUX1NBVkVEX01BUFNfVEFTS1xufSBmcm9tICd0YXNrcy90YXNrcyc7XG5pbXBvcnQge1xuICBleHBvcnRGaWxlU3VjY2VzcyxcbiAgZXhwb3J0RmlsZUVycm9yLFxuICBwb3N0U2F2ZUxvYWRTdWNjZXNzLFxuICBsb2FkQ2xvdWRNYXBTdWNjZXNzLFxuICBnZXRTYXZlZE1hcHNTdWNjZXNzLFxuICBnZXRTYXZlZE1hcHNFcnJvcixcbiAgbG9hZENsb3VkTWFwRXJyb3IsXG4gIHJlc2V0UHJvdmlkZXJTdGF0dXNcbn0gZnJvbSAnYWN0aW9ucy9wcm92aWRlci1hY3Rpb25zJztcbmltcG9ydCB7cmVtb3ZlTm90aWZpY2F0aW9uLCB0b2dnbGVNb2RhbCwgYWRkTm90aWZpY2F0aW9ufSBmcm9tICdhY3Rpb25zL3VpLXN0YXRlLWFjdGlvbnMnO1xuaW1wb3J0IHthZGREYXRhVG9NYXB9IGZyb20gJ2FjdGlvbnMvYWN0aW9ucyc7XG5pbXBvcnQge1xuICBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyxcbiAgREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLFxuICBEQVRBU0VUX0ZPUk1BVFNcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHt0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAnc2NoZW1hcyc7XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1BST1ZJREVSX1NUQVRFID0ge1xuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxuICBzdWNjZXNzSW5mbzoge30sXG4gIG1hcFNhdmVkOiBudWxsXG59O1xuaW1wb3J0IHtEQVRBU0VUX0hBTkRMRVJTfSBmcm9tICdwcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yJztcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uVGFzayhhY3Rpb24sIHBheWxvYWQpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQUNUSU9OX1RBU0soKS5tYXAoXyA9PiBhY3Rpb24ocGF5bG9hZCkpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCBtZXRob2QpIHtcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIENvbnNvbGUuZXJyb3IoYHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm92aWRlclttZXRob2RdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgQ29uc29sZS5lcnJvcihgJHttZXRob2R9IGlzIG5vdCBhIGZ1bmN0aW9uIG9mIENsb3VkIHByb3ZpZGVyOiAke3Byb3ZpZGVyLm5hbWV9YCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlLCBtZXNzYWdlLCBkZWxheUNsb3NlID0gdHJ1ZX0pIHtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUhhc2hJZCgpO1xuICBjb25zdCBzdWNjZXNzTm90ZSA9IHtcbiAgICBpZCxcbiAgICB0eXBlOiBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFU1t0eXBlXSB8fCBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUy5zdWNjZXNzLFxuICAgIHRvcGljOiBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MuZ2xvYmFsLFxuICAgIG1lc3NhZ2VcbiAgfTtcbiAgY29uc3QgdGFzayA9IEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWRkTm90aWZpY2F0aW9uKHN1Y2Nlc3NOb3RlKSk7XG4gIHJldHVybiBkZWxheUNsb3NlID8gW3Rhc2ssIERFTEFZX1RBU0soMzAwMCkubWFwKF8gPT4gcmVtb3ZlTm90aWZpY2F0aW9uKGlkKSldIDogW3Rhc2tdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZXhwb3J0IHRoZSBjdXJyZW50IGtlcGxlciBjb25maWcgZmlsZSB0byB0aGUgY2hvc2VuIGNsb3VkIHByb2RlclxuICogYWRkIHJldHVybnMgYSBzaGFyZSBVUkxcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXRlXG4gKiBAcGFyYW0geyp9IGFjdGlvblxuICovXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZVRvQ2xvdWRVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qge21hcERhdGEsIHByb3ZpZGVyLCBvcHRpb25zID0ge30sIG9uU3VjY2Vzcywgb25FcnJvciwgY2xvc2VNb2RhbH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAndXBsb2FkTWFwJykpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogdHJ1ZSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IHByb3ZpZGVyLm5hbWVcbiAgfTtcblxuICAvLyBwYXlsb2FkIGNhbGxlZCBieSBwcm92aWRlci51cGxvYWRNYXBcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBtYXBEYXRhLFxuICAgIG9wdGlvbnNcbiAgfTtcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZH0pLmJpbWFwKFxuICAgIC8vIHN1Y2Nlc3NcbiAgICByZXNwb25zZSA9PiBleHBvcnRGaWxlU3VjY2Vzcyh7cmVzcG9uc2UsIHByb3ZpZGVyLCBvcHRpb25zLCBvblN1Y2Nlc3MsIGNsb3NlTW9kYWx9KSxcbiAgICAvLyBlcnJvclxuICAgIGVycm9yID0+IGV4cG9ydEZpbGVFcnJvcih7ZXJyb3IsIHByb3ZpZGVyLCBvcHRpb25zLCBvbkVycm9yfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIHVwbG9hZEZpbGVUYXNrKTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7Kn0gc3RhdGVcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBleHBvcnRGaWxlU3VjY2Vzc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7cmVzcG9uc2UsIHByb3ZpZGVyLCBvcHRpb25zLCBvblN1Y2Nlc3MsIGNsb3NlTW9kYWx9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICAgIC8vIFRPRE86IGRvIHdlIGFsd2F5cyBoYXZlIHRvIHN0b3JlIHRoaXM/XG4gICAgc3VjY2Vzc0luZm86IHJlc3BvbnNlLFxuICAgIC4uLighb3B0aW9ucy5pc1B1YmxpY1xuICAgICAgPyB7XG4gICAgICAgICAgbWFwU2F2ZWQ6IHByb3ZpZGVyLm5hbWVcbiAgICAgICAgfVxuICAgICAgOiB7fSlcbiAgfTtcblxuICBjb25zdCB0YXNrcyA9IFtcbiAgICBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9uc30pLFxuICAgIGNsb3NlTW9kYWwgJiZcbiAgICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIHNhdmVkIHRvICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfSFgKSlcbiAgXS5maWx0ZXIoZCA9PiBkKTtcblxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xufTtcblxuLyoqXG4gKiBDbG9zZSBtb2RhbCBvbiBzdWNjZXNzIGFuZCBkaXNwbGF5IG5vdGlmaWNhdGlvblxuICogQHBhcmFtIHsqfSBzdGF0ZVxuICogQHBhcmFtIHsqfSBhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkIHx8IGBTYXZlZCAvIExvYWQgdG8gJHtzdGF0ZS5jdXJyZW50UHJvdmlkZXJ9IFN1Y2Nlc3NgO1xuXG4gIGNvbnN0IHRhc2tzID0gW1xuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gdG9nZ2xlTW9kYWwobnVsbCkpLFxuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gcmVzZXRQcm92aWRlclN0YXR1cygpKSxcbiAgICAuLi5jcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7bWVzc2FnZX0pXG4gIF07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKHN0YXRlLCB0YXNrcyk7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXRlXG4gKiBAcGFyYW0geyp9IGFjdGlvblxuICovXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZUVycm9yVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtlcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICBwcm92aWRlckVycm9yOiBnZXRFcnJvcihlcnJvcilcbiAgfTtcblxuICBjb25zdCB0YXNrID0gY3JlYXRlQWN0aW9uVGFzayhvbkVycm9yLCB7ZXJyb3IsIHByb3ZpZGVyfSk7XG5cbiAgcmV0dXJuIHRhc2sgPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFzaykgOiBuZXdTdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qge2xvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XG4gIGlmICghbG9hZFBhcmFtcykge1xuICAgIENvbnNvbGUud2FybignbG9hZCBtYXAgZXJyb3I6IGxvYWRQYXJhbXMgaXMgdW5kZWZpbmVkJyk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmICghX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIsICdkb3dubG9hZE1hcCcpKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IHRydWUsXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IHRydWVcbiAgfTtcblxuICAvLyBwYXlsb2FkIGNhbGxlZCBieSBwcm92aWRlci5kb3dubG9hZE1hcFxuICBjb25zdCB1cGxvYWRGaWxlVGFzayA9IExPQURfQ0xPVURfTUFQX1RBU0soe3Byb3ZpZGVyLCBwYXlsb2FkOiBsb2FkUGFyYW1zfSkuYmltYXAoXG4gICAgLy8gc3VjY2Vzc1xuICAgIHJlc3BvbnNlID0+IGxvYWRDbG91ZE1hcFN1Y2Nlc3Moe3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzLCBvbkVycm9yfSksXG4gICAgLy8gZXJyb3JcbiAgICBlcnJvciA9PiBsb2FkQ2xvdWRNYXBFcnJvcih7ZXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIHVwbG9hZEZpbGVUYXNrKTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZSB8fCAhaXNQbGFpbk9iamVjdChyZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdMb2FkIG1hcCByZXNwb25zZSBpcyBlbXB0eScpO1xuICB9XG4gIGlmICghaXNQbGFpbk9iamVjdChyZXNwb25zZS5tYXApKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgTG9hZCBtYXAgcmVzcG9uc2Ugc2hvdWxkIGJlIGFuIG9iamVjdCBwcm9wZXJ0eSBcIm1hcFwiYCk7XG4gIH1cbiAgaWYgKCFyZXNwb25zZS5tYXAuZGF0YXNldHMgfHwgIXJlc3BvbnNlLm1hcC5jb25maWcpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBMb2FkIG1hcCByZXNwb25zZS5tYXAgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHByb3BlcnR5IGRhdGFzZXRzIG9yIGNvbmZpZ2ApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFzZXRIYW5kbGVyKGZvcm1hdCkge1xuICBjb25zdCBkZWZhdWx0SGFuZGxlciA9IERBVEFTRVRfSEFORExFUlNbREFUQVNFVF9GT1JNQVRTLmNzdl07XG4gIGlmICghZm9ybWF0KSB7XG4gICAgQ29uc29sZS53YXJuKCdmb3JtYXQgaXMgbm90IHByb3ZpZGVkIGluIGxvYWQgbWFwIHJlc3BvbnNlLCB3aWxsIHVzZSBjc3YgYnkgZGVmYXVsdCcpO1xuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcbiAgfVxuXG4gIGlmICghREFUQVNFVF9IQU5ETEVSU1tmb3JtYXRdKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkRm9ybWF0ID0gT2JqZWN0LmtleXMoREFUQVNFVF9GT1JNQVRTKVxuICAgICAgLm1hcChrID0+IGAnJHtrfSdgKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgQ29uc29sZS53YXJuKFxuICAgICAgYHVua25vd24gZm9ybWF0ICR7Zm9ybWF0fS4gUGxlYXNlIHVzZSBvbmUgb2YgJHtzdXBwb3J0ZWRGb3JtYXR9LCB3aWxsIHVzZSBjc3YgYnkgZGVmYXVsdGBcbiAgICApO1xuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcbiAgfVxuXG4gIHJldHVybiBEQVRBU0VUX0hBTkRMRVJTW2Zvcm1hdF07XG59XG5cbmZ1bmN0aW9uIHBhcnNlTG9hZE1hcFJlc3BvbnNlKHJlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcikge1xuICBjb25zdCB7bWFwLCBmb3JtYXR9ID0gcmVzcG9uc2U7XG4gIGNvbnN0IHByb2Nlc3Nvck1ldGhvZCA9IGdldERhdGFzZXRIYW5kbGVyKGZvcm1hdCk7XG5cbiAgY29uc3QgcGFyc2VkRGF0YXNldHMgPSB0b0FycmF5KG1hcC5kYXRhc2V0cykubWFwKChkcywgaSkgPT4ge1xuICAgIGlmIChmb3JtYXQgPT09IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbCkge1xuICAgICAgLy8gbm8gbmVlZCB0byBvYnRhaW4gaWQsIGRpcmVjdGx5IHBhc3MgdGhlbSBpblxuICAgICAgcmV0dXJuIHByb2Nlc3Nvck1ldGhvZChkcyk7XG4gICAgfVxuICAgIGNvbnN0IGluZm8gPSAoZHMgJiYgZHMuaW5mbykgfHwge2lkOiBnZW5lcmF0ZUhhc2hJZCg2KX07XG4gICAgY29uc3QgZGF0YSA9IHByb2Nlc3Nvck1ldGhvZChkcy5kYXRhIHx8IGRzKTtcbiAgICByZXR1cm4ge2luZm8sIGRhdGF9O1xuICB9KTtcblxuICBjb25zdCBwYXJzZWRDb25maWcgPSBtYXAuY29uZmlnID8gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZyhtYXAuY29uZmlnKSA6IG51bGw7XG5cbiAgY29uc3QgaW5mbyA9IHtcbiAgICAuLi5tYXAuaW5mbyxcbiAgICBwcm92aWRlcjogcHJvdmlkZXIubmFtZSxcbiAgICBsb2FkUGFyYW1zXG4gIH07XG4gIHJldHVybiB7ZGF0YXNldHM6IHBhcnNlZERhdGFzZXRzLCBjb25maWc6IHBhcnNlZENvbmZpZywgaW5mb307XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uU3VjY2Vzcywgb25FcnJvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBmb3JtYXRFcnJvciA9IGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpO1xuICBpZiAoZm9ybWF0RXJyb3IpIHtcbiAgICAvLyBpZiByZXNwb25zZSBmb3JtYXQgaXMgbm90IGNvcnJlY3RcbiAgICByZXR1cm4gZXhwb3J0RmlsZUVycm9yVXBkYXRlcihzdGF0ZSwge1xuICAgICAgcGF5bG9hZDoge2Vycm9yOiBmb3JtYXRFcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBtYXBTYXZlZDogcHJvdmlkZXIubmFtZSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUsXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHBheWxvYWQgPSBwYXJzZUxvYWRNYXBSZXNwb25zZShyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIpO1xuXG4gIGNvbnN0IHRhc2tzID0gW1xuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWRkRGF0YVRvTWFwKHBheWxvYWQpKSxcbiAgICBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcn0pLFxuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIGZyb20gJHtwcm92aWRlci5uYW1lfSBsb2FkZWRgKSlcbiAgXS5maWx0ZXIoZCA9PiBkKTtcblxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcEVycm9yVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBnZXRFcnJvcihhY3Rpb24ucGF5bG9hZC5lcnJvcikgfHwgYEVycm9yIGxvYWRpbmcgc2F2ZWQgbWFwYDtcblxuICBDb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgICBwcm92aWRlckVycm9yOiBudWxsXG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5ld1N0YXRlLFxuICAgIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlOiAnZXJyb3InLCBtZXNzYWdlLCBkZWxheUNsb3NlOiBmYWxzZX0pXG4gICk7XG59O1xuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBzdGF0ZVxuICogQHBhcmFtIHsqfSBhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXG4gIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgc3VjY2Vzc0luZm86IHt9XG59KTtcblxuLyoqXG4gKiBTZXQgY3VycmVudCBjbG91ZFByb3ZpZGVyXG4gKiBAcGFyYW0geyp9IHN0YXRlXG4gKiBAcGFyYW0geyp9IGFjdGlvblxuICovXG5leHBvcnQgY29uc3Qgc2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgc3VjY2Vzc0luZm86IHt9LFxuICBjdXJyZW50UHJvdmlkZXI6IGFjdGlvbi5wYXlsb2FkXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFNhdmVkTWFwc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBwcm92aWRlciA9IGFjdGlvbi5wYXlsb2FkO1xuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnbGlzdE1hcHMnKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGdldFNhdmVkTWFwc1Rhc2sgPSBHRVRfU0FWRURfTUFQU19UQVNLKHByb3ZpZGVyKS5iaW1hcChcbiAgICAvLyBzdWNjZXNzXG4gICAgdmlzdWFsaXphdGlvbnMgPT4gZ2V0U2F2ZWRNYXBzU3VjY2Vzcyh7dmlzdWFsaXphdGlvbnMsIHByb3ZpZGVyfSksXG4gICAgLy8gZXJyb3JcbiAgICBlcnJvciA9PiBnZXRTYXZlZE1hcHNFcnJvcih7ZXJyb3IsIHByb3ZpZGVyfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2soXG4gICAge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBpc1Byb3ZpZGVyTG9hZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgZ2V0U2F2ZWRNYXBzVGFza1xuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNhdmVkTWFwc1N1Y2Nlc3NVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gIHZpc3VhbGl6YXRpb25zOiBhY3Rpb24ucGF5bG9hZC52aXN1YWxpemF0aW9uc1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBtZXNzYWdlID1cbiAgICBnZXRFcnJvcihhY3Rpb24ucGF5bG9hZC5lcnJvcikgfHwgYEVycm9yIGdldHRpbmcgc2F2ZWQgbWFwcyBmcm9tICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfWA7XG5cbiAgQ29uc29sZS53YXJuKGFjdGlvbi5wYXlsb2FkLmVycm9yKTtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5ld1N0YXRlLFxuICAgIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlOiAnZXJyb3InLCBtZXNzYWdlLCBkZWxheUNsb3NlOiBmYWxzZX0pXG4gICk7XG59O1xuIl19