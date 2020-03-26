"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStateOnLayerVisibilityChange = updateStateOnLayerVisibilityChange;
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerTextLabelChangeUpdater = layerTextLabelChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.updateAnimationDomain = updateAnimationDomain;
exports.setFeaturesUpdater = setFeaturesUpdater;
exports.deleteFeatureUpdater = deleteFeatureUpdater;
exports.setPolygonFilterLayerUpdater = setPolygonFilterLayerUpdater;
exports.toggleEditorVisibility = toggleEditorVisibility;
exports.setSelectedFeatureUpdater = exports.setEditorModeUpdater = exports.setMapInfoUpdater = exports.applyCPUFilterUpdater = exports.loadFilesErrUpdater = exports.loadFileSuccessUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.toggleSplitMapUpdater = exports.mouseMoveUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.showDatasetTableUpdater = exports.updateLayerBlendingUpdater = exports.removeDatasetUpdater = exports.reorderLayerUpdater = exports.removeLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.toggleFilterFeatureUpdater = exports.enlargeFilterUpdater = exports.updateLayerAnimationSpeedUpdater = exports.updateAnimationTimeUpdater = exports.updateFilterAnimationSpeedUpdater = exports.toggleFilterAnimationUpdater = exports.layerColorUIChangeUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = exports.DEFAULT_EDITOR = exports.defaultAnimationConfig = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _window = require("global/window");

var _tasks = require("react-palm/tasks");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _lodash3 = _interopRequireDefault(require("lodash.get"));

var _lodash4 = _interopRequireDefault(require("lodash.xor"));

var _tasks2 = require("../tasks/tasks");

var _visStateActions = require("../actions/vis-state-actions");

var _actions = require("../actions");

var _interactionUtils = require("../utils/interaction-utils");

var _filterUtils = require("../utils/filter-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _datasetUtils = require("../utils/dataset-utils");

var _utils = require("../utils/utils");

var _layerUtils = require("../utils/layer-utils/layer-utils");

var _visStateMerger = require("./vis-state-merger");

var _splitMapUtils = require("../utils/split-map-utils");

var _layers = require("../layers");

var _layerFactory = require("../layers/layer-factory");

var _defaultSettings = require("../constants/default-settings");

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
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

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

var defaultAnimationConfig = {
  domain: null,
  currentTime: null,
  speed: 1
};
exports.defaultAnimationConfig = defaultAnimationConfig;
var DEFAULT_EDITOR = {
  mode: _defaultSettings.EDITOR_MODES.DRAW_POLYGON,
  features: [],
  selectedFeature: null,
  visible: true
};
/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @type {Object}
 * @property {Array} layers
 * @property {Array} layerData
 * @property {Array} layerToBeMerged
 * @property {Array} layerOrder
 * @property {Array} filters
 * @property {Array} filterToBeMerged
 * @property {Array} datasets
 * @property {string} editingDataset
 * @property {Object} interactionConfig
 * @property {Object} interactionToBeMerged
 * @property {string} layerBlending
 * @property {Object} hoverInfo
 * @property {Object} clicked
 * @property {Object} mousePos
 * @property {Array} splitMaps - a list of objects of layer availabilities and visibilities for each map
 * @property {Object} layerClasses
 * @property {Object} animationConfig
 * @property {Object} editor
 * @public
 */

exports.DEFAULT_EDITOR = DEFAULT_EDITOR;
var INITIAL_VIS_STATE = {
  // map info
  mapInfo: {
    title: '',
    description: ''
  },
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: (0, _interactionUtils.getDefaultInteraction)(),
  interactionToBeMerged: undefined,
  layerBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  mousePos: {},
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //      layers: {layer_id: true | false}
    //   }
    // ]
  ],
  //
  // defaults layer classes
  layerClasses: _layers.LayerClasses,
  // default animation
  // time in unix timestamp (milliseconds) (the number of seconds since the Unix Epoch)
  animationConfig: defaultAnimationConfig,
  editor: DEFAULT_EDITOR
};
exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return _objectSpread({}, state, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}

function updateStateOnLayerVisibilityChange(state, layer) {
  var newState = state;

  if (state.splitMaps.length) {
    newState = _objectSpread({}, state, {
      splitMaps: layer.config.isVisible ? (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, layer) : (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layer)
    });
  }

  if (layer.config.animation.enabled) {
    newState = updateAnimationDomain(state);
  }

  return newState;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {Object} action.newConfig new config
 * @returns {Object} nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);
  var newLayer = oldLayer.updateLayerConfig(action.newConfig);
  var layerData; // let newLayer;

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];
    var updateLayerDataResult = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData);
    layerData = updateLayerDataResult.layerData;
    newLayer = updateLayerDataResult.layer;
  }

  var newState = state;

  if ('isVisible' in action.newConfig) {
    newState = updateStateOnLayerVisibilityChange(state, newLayer);
  }

  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    layerData: layerData,
    idx: idx
  });
}

function addOrRemoveTextLabels(newFields, textLabel) {
  var newTextLabel = textLabel.slice();
  var currentFields = textLabel.map(function (tl) {
    return tl.field && tl.field.name;
  }).filter(function (d) {
    return d;
  });
  var addFields = newFields.filter(function (f) {
    return !currentFields.includes(f.name);
  });
  var deleteFields = currentFields.filter(function (f) {
    return !newFields.find(function (fd) {
      return fd.name === f;
    });
  }); // delete

  newTextLabel = newTextLabel.filter(function (tl) {
    return tl.field && !deleteFields.includes(tl.field.name);
  });
  newTextLabel = !newTextLabel.length ? [_layerFactory.DEFAULT_TEXT_LABEL] : newTextLabel; // add

  newTextLabel = [].concat((0, _toConsumableArray2["default"])(newTextLabel.filter(function (tl) {
    return tl.field;
  })), (0, _toConsumableArray2["default"])(addFields.map(function (af) {
    return _objectSpread({}, _layerFactory.DEFAULT_TEXT_LABEL, {
      field: af
    });
  })));
  return newTextLabel;
}

function updateTextLabelPropAndValue(idx, prop, value, textLabel) {
  if (!textLabel[idx].hasOwnProperty(prop)) {
    return textLabel;
  }

  var newTextLabel = textLabel.slice();

  if (prop && (value || textLabel.length === 1)) {
    newTextLabel = textLabel.map(function (tl, i) {
      return i === idx ? _objectSpread({}, tl, (0, _defineProperty2["default"])({}, prop, value)) : tl;
    });
  } else if (prop === 'field' && value === null && textLabel.length > 1) {
    // remove label when field value is set to null
    newTextLabel.splice(idx, 1);
  }

  return newTextLabel;
}

function layerTextLabelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      idx = action.idx,
      prop = action.prop,
      value = action.value;
  var textLabel = oldLayer.config.textLabel;
  var newTextLabel = textLabel.slice();

  if (!textLabel[idx] && idx === textLabel.length) {
    // if idx is set to length, add empty text label
    newTextLabel = [].concat((0, _toConsumableArray2["default"])(textLabel), [_layerFactory.DEFAULT_TEXT_LABEL]);
  }

  if (idx === 'all' && prop === 'fields') {
    newTextLabel = addOrRemoveTextLabels(value, textLabel);
  } else {
    newTextLabel = updateTextLabelPropAndValue(idx, prop, value, newTextLabel);
  } // update text label prop and value


  return layerConfigChangeUpdater(state, {
    oldLayer: oldLayer,
    newConfig: {
      textLabel: newTextLabel
    }
  });
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {string} action.newType new type
 * @returns {Object} nextState
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;

  if (!oldLayer) {
    return state;
  }

  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  } // get a mint layer, with new id and type
  // because deck.gl uses id to match between new and old layer.
  // If type has changed but id is the same, it will break


  var newLayer = new state.layerClasses[newType]();
  newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings); // if (newLayer.config.dataId) {
  //   const dataset = state.datasets[newLayer.config.dataId];
  //   newLayer.updateLayerDomain(dataset);
  // }

  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData = (0, _layerUtils.calculateLayerData)(newLayer, state),
      layerData = _calculateLayerData.layerData,
      layer = _calculateLayerData.layer;

  var newState = updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });

  if (layer.config.animation.enabled || oldLayer.config.animation.enabled) {
    newState = updateAnimationDomain(newState);
  } // update splitMap layer id


  if (state.splitMaps.length) {
    newState = _objectSpread({}, newState, {
      splitMaps: newState.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return oldId in settings.layers ? _objectSpread({}, settings, {
          layers: _objectSpread({}, otherLayers, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        }) : settings;
      })
    });
  }

  return newState;
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {Object} action.newConfig new visual channel config
 * @param {string} action.channel channel to be updated
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;
  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {Object} action.newVisConfig new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns {Object} nextState
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);

  var newVisConfig = _objectSpread({}, oldLayer.config.visConfig, {}, action.newVisConfig);

  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
        layerData = _calculateLayerData3.layerData,
        layer = _calculateLayerData3.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.config new config as key value map: `{tooltip: {enabled: true}}`
 * @returns {Object} nextState
 * @public
 */


function interactionConfigChangeUpdater(state, action) {
  var config = action.config;

  var interactionConfig = _objectSpread({}, state.interactionConfig, {}, (0, _defineProperty2["default"])({}, config.id, config)); // Don't enable tooltip and brush at the same time
  // but coordinates can be shown at all time


  var contradict = ['brush', 'tooltip'];

  if (contradict.includes(config.id) && config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    contradict.forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = _objectSpread({}, interactionConfig[k], {
          enabled: false
        });
      }
    });
  }

  return _objectSpread({}, state, {
    interactionConfig: interactionConfig
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx `idx` of filter to be updated
 * @param {string} action.prop `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param {*} action.value new value
 * @param {string} datasetId used when updating a prop (dataId, name) that can be linked to multiple datasets
 * @returns {Object} nextState
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value,
      _action$valueIndex = action.valueIndex,
      valueIndex = _action$valueIndex === void 0 ? 0 : _action$valueIndex;
  var oldFilter = state.filters[idx];
  var newFilter = (0, _utils.set)([prop], value, oldFilter);
  var newState = state;
  var _newFilter = newFilter,
      dataId = _newFilter.dataId; // Ensuring backward compatibility

  var datasetIds = (0, _utils.toArray)(dataId);

  switch (prop) {
    // TODO: Next PR for UI if we update dataId, we need to consider two cases:
    // 1. dataId is empty: create a default filter
    // 2. Add a new dataset id
    case _filterUtils.FILTER_UPDATER_PROPS.dataId:
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _filterUtils.updateFilterDataId)(dataId);
      break;

    case _filterUtils.FILTER_UPDATER_PROPS.name:
      // we are supporting the current functionality
      // TODO: Next PR for UI filter name will only update filter name but it won't have side effects
      // we are gonna use pair of datasets and fieldIdx to update the filter
      var datasetId = newFilter.dataId[valueIndex];

      var _applyFilterFieldName = (0, _filterUtils.applyFilterFieldName)(newFilter, state.datasets[datasetId], value, valueIndex, {
        mergeDomain: false
      }),
          updatedFilter = _applyFilterFieldName.filter,
          newDataset = _applyFilterFieldName.dataset;

      if (!updatedFilter) {
        return state;
      }

      newFilter = updatedFilter;

      if (newFilter.gpu) {
        newFilter = (0, _gpuFilterUtils.setFilterGpuMode)(newFilter, state.filters);
        newFilter = (0, _gpuFilterUtils.assignGpuChannel)(newFilter, state.filters);
      }

      newState = (0, _utils.set)(['datasets', datasetId], newDataset, state); // only filter the current dataset

      break;

    case _filterUtils.FILTER_UPDATER_PROPS.layerId:
      // We need to update only datasetId/s if we have added/removed layers
      // - check for layerId changes (XOR works because of string values)
      // if no differences between layerIds, don't do any filtering
      var layerIdDifference = (0, _lodash4["default"])(newFilter.layerId, oldFilter.layerId);
      var layerDataIds = (0, _lodash2["default"])(layerIdDifference.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      })); // only filter datasetsIds

      datasetIds = layerDataIds; // Update newFilter dataIds

      var newDataIds = (0, _lodash2["default"])(newFilter.layerId.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      }));
      newFilter = _objectSpread({}, newFilter, {
        dataId: newDataIds
      });
      break;

    default:
      break;
  }

  var enlargedFilter = state.filters.find(function (f) {
    return f.enlarged;
  });

  if (enlargedFilter && enlargedFilter.id !== newFilter.id) {
    // there should be only one enlarged filter
    newFilter.enlarged = false;
  } // save new filters to newState


  newState = (0, _utils.set)(['filters', idx], newFilter, newState); // if we are currently setting a prop that only requires to filter the current
  // dataset we will pass only the current dataset to applyFiltersToDatasets and
  // updateAllLayerDomainData otherwise we pass the all list of datasets as defined in dataId

  var datasetIdsToFilter = _filterUtils.LIMITED_FILTER_EFFECT_PROPS[prop] ? [datasetIds[valueIndex]] : datasetIds; // filter data

  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(datasetIdsToFilter, newState.datasets, newState.filters, newState.layers);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState); // dataId is an array
  // pass only the dataset we need to update

  newState = updateAllLayerDomainData(newState, datasetIdsToFilter, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx
 * @param {Object} action.newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @returns {Object} nextState
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref2) {
  var idx = _ref2.idx,
      newProp = _ref2.newProp;

  var newFilter = _objectSpread({}, state.filters[idx], {}, newProp);

  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _filterUtils.getDefaultFilterPlotType)(newFilter);

    if (plotType) {
      newFilter = _objectSpread({}, newFilter, {}, (0, _filterUtils.getFilterPlot)(_objectSpread({}, newFilter, {
        plotType: plotType
      }), state.datasets[newFilter.dataId].allData), {
        plotType: plotType
      });
    }
  }

  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.dataId dataset `id` this new filter is associated with
 * @returns {Object} nextState
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : _objectSpread({}, state, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _filterUtils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Set layer color palette ui state
 * @memberof visStateUpdaters
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.prop
 * @param {Object} action.newConfig
 */


exports.addFilterUpdater = addFilterUpdater;

var layerColorUIChangeUpdater = function layerColorUIChangeUpdater(state, _ref3) {
  var oldLayer = _ref3.oldLayer,
      prop = _ref3.prop,
      newConfig = _ref3.newConfig;
  var newLayer = oldLayer.updateLayerColorUI(prop, newConfig);
  return _objectSpread({}, state, {
    layers: state.layers.map(function (l) {
      return l.id === oldLayer.id ? newLayer : l;
    })
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx idx of filter
 * @returns {Object} nextState
 * @public
 */


exports.layerColorUIChangeUpdater = layerColorUIChangeUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread({}, f, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx  `idx` of filter
 * @param {Number} action.speed `speed` to change it to. `speed` is a multiplier
 * @returns {Object} nextState
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var updateFilterAnimationSpeedUpdater = function updateFilterAnimationSpeedUpdater(state, action) {
  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread({}, f, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Reset animation config current time to a specified value
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.value the value current time will be set to
 * @returns {Object} nextState
 * @public
 *
 */


exports.updateFilterAnimationSpeedUpdater = updateFilterAnimationSpeedUpdater;

var updateAnimationTimeUpdater = function updateAnimationTimeUpdater(state, _ref4) {
  var value = _ref4.value;
  return _objectSpread({}, state, {
    animationConfig: _objectSpread({}, state.animationConfig, {
      currentTime: value
    })
  });
};
/**
 * Update animation speed with the vertical speed slider
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.speed the updated speed of the animation
 * @returns {Object} nextState
 * @public
 *
 */


exports.updateAnimationTimeUpdater = updateAnimationTimeUpdater;

var updateLayerAnimationSpeedUpdater = function updateLayerAnimationSpeedUpdater(state, _ref5) {
  var speed = _ref5.speed;
  return _objectSpread({}, state, {
    animationConfig: _objectSpread({}, state.animationConfig, {
      speed: speed
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx index of filter to enlarge
 * @returns {Object} nextState
 * @public
 */


exports.updateLayerAnimationSpeedUpdater = updateLayerAnimationSpeedUpdater;

var enlargeFilterUpdater = function enlargeFilterUpdater(state, action) {
  var isEnlarged = state.filters[action.idx].enlarged;
  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      f.enlarged = !isEnlarged && i === action.idx;
      return f;
    })
  });
};
/**
 * Toggles filter feature visibility
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx index of filter to enlarge
 * @returns {Object} nextState
 */


exports.enlargeFilterUpdater = enlargeFilterUpdater;

var toggleFilterFeatureUpdater = function toggleFilterFeatureUpdater(state, action) {
  var filter = state.filters[action.idx];
  var isVisible = (0, _lodash3["default"])(filter, ['value', 'properties', 'isVisible']);

  var newFilter = _objectSpread({}, filter, {
    value: (0, _filterUtils.featureToFilterValue)(filter.value, filter.id, {
      isVisible: !isVisible
    })
  });

  return _objectSpread({}, state, {
    filters: Object.assign([].concat(state.filters), (0, _defineProperty2["default"])({}, action.idx, newFilter))
  });
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx index of filter to b e removed
 * @returns {Object} nextState
 * @public
 */


exports.toggleFilterFeatureUpdater = toggleFilterFeatureUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var _state$filters$idx = state.filters[idx],
      dataId = _state$filters$idx.dataId,
      id = _state$filters$idx.id;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(dataId, state.datasets, newFilters, state.layers);
  var newEditor = (0, _filterUtils.getFilterIdInFeature)(state.editor.selectedFeature) === id ? _objectSpread({}, state.editor, {
    selectedFeature: null
  }) : state.editor;
  var newState = (0, _utils.set)(['filters'], newFilters, state);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState);
  newState = (0, _utils.set)(['editor'], newEditor, newState);
  return updateAllLayerDomainData(newState, dataId);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.props - new layer props
 * @returns {Object} nextState
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var defaultDataset = Object.keys(state.datasets)[0];
  var newLayer = new _layers.Layer(_objectSpread({
    isVisible: true,
    isConfigActive: true,
    dataId: defaultDataset
  }, action.props));
  return _objectSpread({}, state, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [{}]),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(state.layerOrder), [state.layerOrder.length]),
    splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx index of layer to b e removed
 * @returns {Object} nextState
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

var removeLayerUpdater = function removeLayerUpdater(state, _ref6) {
  var idx = _ref6.idx;
  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layerToRemove);

  var newState = _objectSpread({}, state, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps // TODO: update filters, create helper to remove layer form filter (remove layerid and dataid) if mapped

  });

  return updateAnimationDomain(newState);
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Array<Number>} action.order an array of layer indexes
 * @returns {Object} nextState
 * @public
 */


exports.removeLayerUpdater = removeLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref7) {
  var order = _ref7.order;
  return _objectSpread({}, state, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.key dataset id
 * @returns {Object} nextState
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

var removeDatasetUpdater = function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.key;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var indexes = layers.reduce(function (listOfIndexes, layer, index) {
    if (layer.config.dataId === datasetKey) {
      listOfIndexes.push(index);
    }

    return listOfIndexes;
  }, []); // remove layers and datasets

  var _indexes$reduce = indexes.reduce(function (_ref8, idx) {
    var currentState = _ref8.newState,
        indexCounter = _ref8.indexCounter;
    var currentIndex = idx - indexCounter;
    currentState = removeLayerUpdater(currentState, {
      idx: currentIndex
    });
    indexCounter++;
    return {
      newState: currentState,
      indexCounter: indexCounter
    };
  }, {
    newState: _objectSpread({}, state, {
      datasets: newDatasets
    }),
    indexCounter: 0
  }),
      newState = _indexes$reduce.newState; // remove filters


  var filters = state.filters.filter(function (filter) {
    return !filter.dataId.includes(datasetKey);
  }); // update interactionConfig

  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[datasetKey],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [datasetKey].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = _objectSpread({}, interactionConfig, {
      tooltip: _objectSpread({}, tooltip, {
        config: _objectSpread({}, config, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return _objectSpread({}, newState, {
    filters: filters,
    interactionConfig: interactionConfig
  });
};
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.mode one of `additive`, `normal` and `subtractive`
 * @returns {Object} nextState
 * @public
 */


exports.removeDatasetUpdater = removeDatasetUpdater;

var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return _objectSpread({}, state, {
    layerBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.dataId dataset id to show in table
 * @returns {Object} nextState
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return _objectSpread({}, state, {
    editingDataset: action.dataId
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @returns {Object} nextState
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread({}, INITIAL_VIS_STATE, {}, state.initialState, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.payload map config to be propagated
 * @param {Object} action.payload.config map config to be propagated
 * @param {Object} action.payload.option {keepExistingConfig: true | false}
 * @returns {Object} nextState
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref9) {
  var _ref9$payload = _ref9.payload,
      _ref9$payload$config = _ref9$payload.config,
      config = _ref9$payload$config === void 0 ? {} : _ref9$payload$config,
      _ref9$payload$options = _ref9$payload.options,
      options = _ref9$payload$options === void 0 ? {} : _ref9$payload$options;

  if (!config.visState) {
    return state;
  }

  var _config$visState = config.visState,
      filters = _config$visState.filters,
      layers = _config$visState.layers,
      interactionConfig = _config$visState.interactionConfig,
      layerBlending = _config$visState.layerBlending,
      splitMaps = _config$visState.splitMaps,
      animationConfig = _config$visState.animationConfig;
  var keepExistingConfig = options.keepExistingConfig; // reset config if keepExistingConfig is falsy

  var mergedState = !keepExistingConfig ? resetMapConfigUpdater(state) : state;
  mergedState = (0, _visStateMerger.mergeLayers)(mergedState, layers);
  mergedState = (0, _visStateMerger.mergeFilters)(mergedState, filters);
  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionConfig);
  mergedState = (0, _visStateMerger.mergeLayerBlending)(mergedState, layerBlending);
  mergedState = (0, _visStateMerger.mergeSplitMaps)(mergedState, splitMaps);
  mergedState = (0, _visStateMerger.mergeAnimationConfig)(mergedState, animationConfig);
  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.info Object hovered, returned by deck.gl
 * @returns {Object} nextState
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return _objectSpread({}, state, {
    hoverInfo: action.info
  });
};
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.info Object clicked, returned by deck.gl
 * @returns {Object} nextState
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

var layerClickUpdater = function layerClickUpdater(state, action) {
  return _objectSpread({}, state, {
    mousePos: state.interactionConfig.coordinate.enabled ? _objectSpread({}, state.mousePos, {
      pinned: state.mousePos.pinned ? null : (0, _lodash["default"])(state.mousePos)
    }) : state.mousePos,
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @returns {Object} nextState
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state) {
  return _objectSpread({}, state, {
    clicked: null
  });
};

exports.mapClickUpdater = mapClickUpdater;

var mouseMoveUpdater = function mouseMoveUpdater(state, _ref10) {
  var evt = _ref10.evt;

  if (Object.values(state.interactionConfig).some(function (config) {
    return config.enabled;
  })) {
    return _objectSpread({}, state, {
      mousePos: _objectSpread({}, state.mousePos, {
        mousePosition: (0, _toConsumableArray2["default"])(evt.point),
        coordinate: (0, _toConsumableArray2["default"])(evt.lngLat)
      })
    });
  }

  return state;
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number|undefined} action.payload index of the split map
 * @returns {Object} nextState
 * @public
 */


exports.mouseMoveUpdater = mouseMoveUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? _objectSpread({}, state, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: (0, _splitMapUtils.computeSplitMapLayers)(state.layers)
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @param {Object} state
 * @param {Object} action
 * @param {Number} action.mapIndex index of the split map
 * @param {string} action.layerId id of the layer
 * @returns {Object} nextState
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, _ref11) {
  var mapIndex = _ref11.mapIndex,
      layerId = _ref11.layerId;
  var splitMaps = state.splitMaps;
  return _objectSpread({}, state, {
    splitMaps: splitMaps.map(function (sm, i) {
      return i === mapIndex ? _objectSpread({}, splitMaps[i], {
        layers: _objectSpread({}, splitMaps[i].layers, (0, _defineProperty2["default"])({}, layerId, !splitMaps[i].layers[layerId]))
      }) : sm;
    })
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Array<Object>|Object} action.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} action.datasets.info -info of a dataset
 * @param {string} action.datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} action.datasets.info.label - A display name of this dataset
 * @param {Object} action.datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} action.datasets.data.fields - ***required** Array of fields,
 * @param {string} action.datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} action.datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 * @param {Object} action.options option object `{centerMap: true, keepExistingConfig: false}`
 * @param {Object} action.config map config
 * @returns {Object} nextState
 * @public
 */

/* eslint-disable max-statements */


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var config = action.config,
      options = action.options;
  var datasets = (0, _utils.toArray)(action.datasets);
  var newDataEntries = datasets.reduce(function (accu, _ref12) {
    var _ref12$info = _ref12.info,
        info = _ref12$info === void 0 ? {} : _ref12$info,
        data = _ref12.data;
    return _objectSpread({}, accu, {}, (0, _datasetUtils.createNewDataEntry)({
      info: info,
      data: data
    }, state.datasets) || {});
  }, {});

  if (!Object.keys(newDataEntries).length) {
    return state;
  } // apply config if passed from action


  var previousState = config ? receiveMapConfigUpdater(state, {
    payload: {
      config: config,
      options: options
    }
  }) : state;

  var stateWithNewData = _objectSpread({}, previousState, {
    datasets: _objectSpread({}, previousState.datasets, {}, newDataEntries)
  }); // previously saved config before data loaded


  var _stateWithNewData$fil = stateWithNewData.filterToBeMerged,
      filterToBeMerged = _stateWithNewData$fil === void 0 ? [] : _stateWithNewData$fil,
      _stateWithNewData$lay = stateWithNewData.layerToBeMerged,
      layerToBeMerged = _stateWithNewData$lay === void 0 ? [] : _stateWithNewData$lay,
      _stateWithNewData$int = stateWithNewData.interactionToBeMerged,
      interactionToBeMerged = _stateWithNewData$int === void 0 ? {} : _stateWithNewData$int,
      _stateWithNewData$spl = stateWithNewData.splitMapsToBeMerged,
      splitMapsToBeMerged = _stateWithNewData$spl === void 0 ? [] : _stateWithNewData$spl; // We need to merge layers before filters because polygon filters requires layers to be loaded

  var mergedState = (0, _visStateMerger.mergeLayers)(stateWithNewData, layerToBeMerged);
  mergedState = (0, _visStateMerger.mergeFilters)(mergedState, filterToBeMerged); // merge state with saved splitMaps

  mergedState = (0, _visStateMerger.mergeSplitMaps)(mergedState, splitMapsToBeMerged);
  var newLayers = mergedState.layers.filter(function (l) {
    return l.config.dataId in newDataEntries;
  });

  if (!newLayers.length) {
    // no layer merged, find defaults
    var result = addDefaultLayers(mergedState, newDataEntries);
    mergedState = result.state;
    newLayers = result.newLayers;
  }

  if (mergedState.splitMaps.length) {
    // if map is split, add new layers to splitMaps
    newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId in newDataEntries;
    });
    mergedState = _objectSpread({}, mergedState, {
      splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(mergedState.splitMaps, newLayers)
    });
  } // merge state with saved interactions


  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionToBeMerged); // if no tooltips merged add default tooltips

  Object.keys(newDataEntries).forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDataEntries[dataId]);
    }
  });
  var updatedState = updateAllLayerDomainData(mergedState, Object.keys(newDataEntries)); // register layer animation domain,
  // need to be called after layer data is calculated

  updatedState = updateAnimationDomain(updatedState);
  return updatedState;
};
/* eslint-enable max-statements */

/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


exports.updateVisDataUpdater = updateVisDataUpdater;

function closeSpecificMapAtIndex(state, action) {
  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var mapLayers = state.splitMaps[indexToRetrieve].layers;
  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return !mapLayers[layer.id] && layer.config.isVisible ? layer.updateLayerConfig({
      // if layer.id is not in mapLayers, it should be inVisible
      isVisible: false
    }) : layer;
  }); // delete map

  return _objectSpread({}, state, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Array<Object>} action.files array of fileblob
 * @returns {Object} nextState
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files;

  if (!files.length) {
    return state;
  }

  var fileCache = [];
  return (0, _tasks.withTask)(_objectSpread({}, state, {
    fileLoading: true,
    fileLoadingProgress: 0
  }), makeLoadFileTask(files.length, files, fileCache));
};

exports.loadFilesUpdater = loadFilesUpdater;

function makeLoadFileTask(totalCount, filesToLoad, fileCache) {
  var file = filesToLoad.pop();
  return (0, _tasks2.LOAD_FILE_TASK)({
    file: file,
    fileCache: fileCache
  }).bimap( // success
  function (result) {
    return (0, _visStateActions.loadFileSuccess)({
      fileCache: result,
      filesToLoad: (0, _toConsumableArray2["default"])(filesToLoad),
      totalCount: totalCount
    });
  }, // error
  _visStateActions.loadFilesErr);
}

var loadFileSuccessUpdater = function loadFileSuccessUpdater(state, action) {
  var fileCache = action.fileCache,
      _action$filesToLoad = action.filesToLoad,
      filesToLoad = _action$filesToLoad === void 0 ? [] : _action$filesToLoad,
      totalCount = action.totalCount; // still more to load

  if (filesToLoad.length) {
    var fileLoadingProgress = (totalCount - filesToLoad.length) / totalCount * 100;
    return (0, _tasks.withTask)(_objectSpread({}, state, {
      fileLoadingProgress: fileLoadingProgress
    }), makeLoadFileTask(totalCount, filesToLoad, fileCache));
  }

  var result = fileCache.reduce(function (accu, file) {
    var data = file.data,
        _file$info = file.info,
        info = _file$info === void 0 ? {} : _file$info;
    var format = info.format;

    if (format) {
      if (format !== _defaultSettings.DATASET_FORMATS.keplergl) {
        var newDataset = {
          data: data,
          info: _objectSpread({
            id: (0, _utils.generateHashId)(4)
          }, info)
        };
        accu.datasets.push(newDataset);
        return accu;
      }

      return {
        datasets: accu.datasets.concat(data.datasets),
        // we need to deep merge this thing unless we find a better solution
        // this case will only happen if we allow to load multiple keplergl json files
        config: _objectSpread({}, accu.config, {}, data.config || {})
      };
    }

    return accu;
  }, {
    datasets: [],
    config: {}
  });
  var options = {
    centerMap: !(result.config && result.config.mapState)
  };
  return (0, _tasks.withTask)(_objectSpread({}, state, {
    fileLoading: false,
    fileLoadingProgress: 100
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.addDataToMap)(_objectSpread({}, result, {
      options: options
    }));
  }));
};
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {*} action.error
 * @returns {Object} nextState
 * @public
 */


exports.loadFileSuccessUpdater = loadFileSuccessUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref13) {
  var error = _ref13.error;
  return _objectSpread({}, state, {
    fileLoading: false,
    fileLoadingErr: error
  });
};
/**
 * When select dataset for export, apply cpu filter to selected dataset
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action
 * @param {string} action.dataId dataset id
 * @returns {Object} nextState
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var applyCPUFilterUpdater = function applyCPUFilterUpdater(state, _ref14) {
  var dataId = _ref14.dataId;
  // apply cpuFilter
  var dataIds = (0, _utils.toArray)(dataId);
  return dataIds.reduce(function (accu, id) {
    return (0, _filterUtils.filterDatasetCPU)(accu, id);
  }, state);
};
/**
 * User input to update the info of the map
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.info {title: 'hello'}
 * @returns {Object} nextState
 * @public
 */


exports.applyCPUFilterUpdater = applyCPUFilterUpdater;

var setMapInfoUpdater = function setMapInfoUpdater(state, action) {
  return _objectSpread({}, state, {
    mapInfo: _objectSpread({}, state.mapInfo, {}, action.info)
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Array<string>} datasets
 * @returns {Object} nextState
 */


exports.setMapInfoUpdater = setMapInfoUpdater;

function addDefaultLayers(state, datasets) {
  var defaultLayers = Object.values(datasets).reduce(function (accu, dataset) {
    return [].concat((0, _toConsumableArray2["default"])(accu), (0, _toConsumableArray2["default"])((0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses) || []));
  }, []);
  return {
    state: _objectSpread({}, state, {
      layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
      layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
        return state.layers.length + i;
      })), (0, _toConsumableArray2["default"])(state.layerOrder))
    }),
    newLayers: defaultLayers
  };
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(dataset);

  var merged = _objectSpread({}, state.interactionConfig.tooltip.config.fieldsToShow, {}, tooltipFields);

  return (0, _utils.set)(['interactionConfig', 'tooltip', 'config', 'fieldsToShow'], merged, state);
}
/**
 * Helper function to update layer domains for an array of datasets
 * @param {Object} state
 * @param {Array|Array<string>} dataId dataset id or array of dataset ids
 * @param {Object} updatedFilter if is called by setFilter, the filter that has updated
 * @returns {Object} nextState
 */


function updateAllLayerDomainData(state, dataId, updatedFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerData = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = updatedFilter && updatedFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets, updatedFilter);

      var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData4.layerData,
          layer = _calculateLayerData4.layer; // console.log('LayerData', layerData);


      newLayers.push(layer);
      newLayerData.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerData.push(state.layerData[i]);
    }
  });

  var newState = _objectSpread({}, state, {
    layers: newLayers,
    layerData: newLayerData
  });

  return newState;
}

function updateAnimationDomain(state) {
  // merge all animatable layer domain and update global config
  var animatableLayers = state.layers.filter(function (l) {
    return l.config.isVisible && l.config.animation && l.config.animation.enabled && Array.isArray(l.animationDomain);
  });

  if (!animatableLayers.length) {
    return _objectSpread({}, state, {
      animationConfig: defaultAnimationConfig
    });
  }

  var mergedDomain = animatableLayers.reduce(function (accu, layer) {
    return [Math.min(accu[0], layer.animationDomain[0]), Math.max(accu[1], layer.animationDomain[1])];
  }, [Number(Infinity), -Infinity]);
  return _objectSpread({}, state, {
    animationConfig: _objectSpread({}, state.animationConfig, {
      currentTime: (0, _filterUtils.isInRange)(state.animationConfig.currentTime, mergedDomain) ? state.animationConfig.currentTime : mergedDomain[0],
      domain: mergedDomain
    })
  });
}
/**
 * Update the status of the editor
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {string} mode to set to editor to
 * @return {Object} nextState
 */


var setEditorModeUpdater = function setEditorModeUpdater(state, _ref15) {
  var mode = _ref15.mode;
  return _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      mode: mode,
      selectedFeature: null
    })
  });
}; // const featureToFilterValue = (feature) => ({...feature, id: feature.id});

/**
 * Update editor features
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {[Object]} features to store
 * @return {Object} nextState
 */


exports.setEditorModeUpdater = setEditorModeUpdater;

function setFeaturesUpdater(state, _ref16) {
  var _ref16$features = _ref16.features,
      features = _ref16$features === void 0 ? [] : _ref16$features;
  var lastFeature = features.length && features[features.length - 1];

  var newState = _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      // only save none filter features to editor
      features: features.filter(function (f) {
        return !(0, _filterUtils.getFilterIdInFeature)(f);
      }),
      mode: lastFeature && lastFeature.properties.isClosed ? _defaultSettings.EDITOR_MODES.EDIT : state.editor.mode
    })
  }); // Retrieve existing feature


  var selectedFeature = state.editor.selectedFeature; // If no feature is selected we can simply return since no operations

  if (!selectedFeature) {
    return newState;
  } // TODO: check if the feature has changed


  var feature = features.find(function (f) {
    return f.id === selectedFeature.id;
  }); // if feature is part of a filter

  var filterId = feature && (0, _filterUtils.getFilterIdInFeature)(feature);

  if (filterId) {
    var featureValue = (0, _filterUtils.featureToFilterValue)(feature, filterId);
    var filterIdx = state.filters.findIndex(function (fil) {
      return fil.id === filterId;
    });
    return setFilterUpdater(newState, {
      idx: filterIdx,
      prop: 'value',
      value: featureValue
    });
  }

  return newState;
}
/**
 * Set the current selected feature
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {[Object]} features to store
 * @return {Object} nextState
 */


var setSelectedFeatureUpdater = function setSelectedFeatureUpdater(state, _ref17) {
  var feature = _ref17.feature;
  return _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      selectedFeature: feature
    })
  });
};
/**
 * Delete existing feature from filters
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {string} selectedFeatureId feature to delete
 * @return {Object} nextState
 */


exports.setSelectedFeatureUpdater = setSelectedFeatureUpdater;

function deleteFeatureUpdater(state, _ref18) {
  var feature = _ref18.feature;

  if (!feature) {
    return state;
  }

  var newState = _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      selectedFeature: null
    })
  });

  if ((0, _filterUtils.getFilterIdInFeature)(feature)) {
    var filterIdx = newState.filters.findIndex(function (f) {
      return f.id === (0, _filterUtils.getFilterIdInFeature)(feature);
    });
    return filterIdx > -1 ? removeFilterUpdater(newState, {
      idx: filterIdx
    }) : newState;
  } // modify editor object


  var newEditor = _objectSpread({}, state.editor, {
    features: state.editor.features.filter(function (f) {
      return f.id !== feature.id;
    }),
    selectedFeature: null
  });

  return _objectSpread({}, state, {
    editor: newEditor
  });
}
/**
 * Toggle feature as layer filter
 * @memberof visStateUpdaters
 * @param state
 * @param {Object} payload
 * @param {string} payload.featureId
 * @param {Object} payload.layer
 * @return {Object} nextState
 */


function setPolygonFilterLayerUpdater(state, payload) {
  var layer = payload.layer,
      feature = payload.feature;
  var filterId = (0, _filterUtils.getFilterIdInFeature)(feature); // let newFilter = null;

  var filterIdx;
  var newLayerId = [layer.id];
  var newState = state; // If polygon filter already exists, we need to find out if the current layer is already included

  if (filterId) {
    filterIdx = state.filters.findIndex(function (f) {
      return f.id === filterId;
    });

    if (!state.filters[filterIdx]) {
      // what if filter doesn't exist?... not possible.
      // because features in the editor is passed in from filters and editors.
      // but we will move this feature back to editor just in case
      var noneFilterFeature = _objectSpread({}, feature, {
        properties: _objectSpread({}, feature.properties, {
          filterId: null
        })
      });

      return _objectSpread({}, state, {
        editor: _objectSpread({}, state.editor, {
          features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), [noneFilterFeature]),
          selectedFeature: noneFilterFeature
        })
      });
    }

    var _ref19 = state.filters[filterIdx] || [],
        layerId = _ref19.layerId;

    var isLayerIncluded = layerId.includes(layer.id);
    var filter = state.filters[filterIdx];
    newLayerId = isLayerIncluded ? // if layer is included, remove it
    filter.layerId.filter(function (l) {
      return l !== layer.id;
    }) : [].concat((0, _toConsumableArray2["default"])(filter.layerId), [layer.id]);
  } else {
    // if we haven't create the polygon filter, create it
    var newFilter = (0, _filterUtils.generatePolygonFilter)([], feature);
    filterIdx = state.filters.length; // add feature, remove feature from eidtor

    newState = _objectSpread({}, state, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [newFilter]),
      editor: _objectSpread({}, state.editor, {
        features: state.editor.features.filter(function (f) {
          return f.id !== feature.id;
        }),
        selectedFeature: newFilter.value
      })
    });
  }

  return setFilterUpdater(newState, {
    idx: filterIdx,
    prop: 'layerId',
    value: newLayerId
  });
}
/**
 * Update editor
 * @param {Object} state `visState`
 * @param visible
 * @return {Object} nextState
 */


function toggleEditorVisibility(state, _ref20) {
  var visible = _ref20.visible;
  return _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      visible: !state.editor.visible
    })
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsImRlZmF1bHRBbmltYXRpb25Db25maWciLCJkb21haW4iLCJjdXJyZW50VGltZSIsInNwZWVkIiwiREVGQVVMVF9FRElUT1IiLCJtb2RlIiwiRURJVE9SX01PREVTIiwiRFJBV19QT0xZR09OIiwiZmVhdHVyZXMiLCJzZWxlY3RlZEZlYXR1cmUiLCJ2aXNpYmxlIiwiSU5JVElBTF9WSVNfU1RBVEUiLCJtYXBJbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxheWVycyIsImxheWVyRGF0YSIsImxheWVyVG9CZU1lcmdlZCIsImxheWVyT3JkZXIiLCJmaWx0ZXJzIiwiZmlsdGVyVG9CZU1lcmdlZCIsImRhdGFzZXRzIiwiZWRpdGluZ0RhdGFzZXQiLCJ1bmRlZmluZWQiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsImxheWVyQmxlbmRpbmciLCJob3ZlckluZm8iLCJjbGlja2VkIiwibW91c2VQb3MiLCJzcGxpdE1hcHMiLCJsYXllckNsYXNzZXMiLCJMYXllckNsYXNzZXMiLCJhbmltYXRpb25Db25maWciLCJlZGl0b3IiLCJ1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEiLCJzdGF0ZSIsImxheWVyIiwiaWR4IiwibWFwIiwibHlyIiwiaSIsImQiLCJ1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlIiwibmV3U3RhdGUiLCJsZW5ndGgiLCJjb25maWciLCJpc1Zpc2libGUiLCJhbmltYXRpb24iLCJlbmFibGVkIiwidXBkYXRlQW5pbWF0aW9uRG9tYWluIiwibGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyIiwiYWN0aW9uIiwib2xkTGF5ZXIiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJuZXdDb25maWciLCJuZXdMYXllciIsInVwZGF0ZUxheWVyQ29uZmlnIiwic2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhIiwib2xkTGF5ZXJEYXRhIiwidXBkYXRlTGF5ZXJEYXRhUmVzdWx0IiwiYWRkT3JSZW1vdmVUZXh0TGFiZWxzIiwibmV3RmllbGRzIiwidGV4dExhYmVsIiwibmV3VGV4dExhYmVsIiwic2xpY2UiLCJjdXJyZW50RmllbGRzIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJhZGRGaWVsZHMiLCJmIiwiaW5jbHVkZXMiLCJkZWxldGVGaWVsZHMiLCJmaW5kIiwiZmQiLCJERUZBVUxUX1RFWFRfTEFCRUwiLCJhZiIsInVwZGF0ZVRleHRMYWJlbFByb3BBbmRWYWx1ZSIsInByb3AiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5Iiwic3BsaWNlIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2VVcGRhdGVyIiwibGF5ZXJUeXBlQ2hhbmdlVXBkYXRlciIsIm5ld1R5cGUiLCJvbGRJZCIsIkNvbnNvbGUiLCJlcnJvciIsImFzc2lnbkNvbmZpZ1RvTGF5ZXIiLCJ2aXNDb25maWdTZXR0aW5ncyIsInVwZGF0ZUxheWVyRG9tYWluIiwic2V0dGluZ3MiLCJvbGRMYXllck1hcCIsIm90aGVyTGF5ZXJzIiwibGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlciIsImNoYW5uZWwiLCJkYXRhc2V0IiwiZGF0YUlkIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsIiwibGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyIiwibmV3VmlzQ29uZmlnIiwidmlzQ29uZmlnIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyIiwiY29udHJhZGljdCIsImZvckVhY2giLCJrIiwic2V0RmlsdGVyVXBkYXRlciIsInZhbHVlSW5kZXgiLCJvbGRGaWx0ZXIiLCJuZXdGaWx0ZXIiLCJkYXRhc2V0SWRzIiwiRklMVEVSX1VQREFURVJfUFJPUFMiLCJkYXRhc2V0SWQiLCJtZXJnZURvbWFpbiIsInVwZGF0ZWRGaWx0ZXIiLCJuZXdEYXRhc2V0IiwiZ3B1IiwibGF5ZXJJZCIsImxheWVySWREaWZmZXJlbmNlIiwibGF5ZXJEYXRhSWRzIiwibGlkIiwibmV3RGF0YUlkcyIsImVubGFyZ2VkRmlsdGVyIiwiZW5sYXJnZWQiLCJkYXRhc2V0SWRzVG9GaWx0ZXIiLCJMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFMiLCJmaWx0ZXJlZERhdGFzZXRzIiwidXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhIiwic2V0RmlsdGVyUGxvdFVwZGF0ZXIiLCJuZXdQcm9wIiwicGxvdFR5cGUiLCJhbGxEYXRhIiwiYWRkRmlsdGVyVXBkYXRlciIsImxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIiLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyIiwiaXNBbmltYXRpbmciLCJ1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJ1cGRhdGVBbmltYXRpb25UaW1lVXBkYXRlciIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwiZW5sYXJnZUZpbHRlclVwZGF0ZXIiLCJpc0VubGFyZ2VkIiwidG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIiLCJhc3NpZ24iLCJjb25jYXQiLCJyZW1vdmVGaWx0ZXJVcGRhdGVyIiwibmV3RmlsdGVycyIsIm5ld0VkaXRvciIsImFkZExheWVyVXBkYXRlciIsImRlZmF1bHREYXRhc2V0IiwiTGF5ZXIiLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyVXBkYXRlciIsImxheWVyVG9SZW1vdmUiLCJuZXdNYXBzIiwicGlkIiwiaXNMYXllckhvdmVyZWQiLCJyZW9yZGVyTGF5ZXJVcGRhdGVyIiwib3JkZXIiLCJyZW1vdmVEYXRhc2V0VXBkYXRlciIsImRhdGFzZXRLZXkiLCJrZXkiLCJuZXdEYXRhc2V0cyIsImluZGV4ZXMiLCJyZWR1Y2UiLCJsaXN0T2ZJbmRleGVzIiwiaW5kZXgiLCJwdXNoIiwiY3VycmVudFN0YXRlIiwiaW5kZXhDb3VudGVyIiwiY3VycmVudEluZGV4IiwidG9vbHRpcCIsImZpZWxkc1RvU2hvdyIsImZpZWxkcyIsInVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyIiwic2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIiLCJyZXNldE1hcENvbmZpZ1VwZGF0ZXIiLCJpbml0aWFsU3RhdGUiLCJyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciIsInBheWxvYWQiLCJvcHRpb25zIiwidmlzU3RhdGUiLCJrZWVwRXhpc3RpbmdDb25maWciLCJtZXJnZWRTdGF0ZSIsImxheWVySG92ZXJVcGRhdGVyIiwiaW5mbyIsImxheWVyQ2xpY2tVcGRhdGVyIiwiY29vcmRpbmF0ZSIsInBpbm5lZCIsInBpY2tlZCIsIm1hcENsaWNrVXBkYXRlciIsIm1vdXNlTW92ZVVwZGF0ZXIiLCJldnQiLCJ2YWx1ZXMiLCJzb21lIiwibW91c2VQb3NpdGlvbiIsInBvaW50IiwibG5nTGF0IiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwiY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcFVwZGF0ZXIiLCJtYXBJbmRleCIsInNtIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJuZXdEYXRhRW50cmllcyIsImFjY3UiLCJkYXRhIiwicHJldmlvdXNTdGF0ZSIsInN0YXRlV2l0aE5ld0RhdGEiLCJzcGxpdE1hcHNUb0JlTWVyZ2VkIiwibmV3TGF5ZXJzIiwicmVzdWx0IiwiYWRkRGVmYXVsdExheWVycyIsInRvb2x0aXBGaWVsZHMiLCJBcnJheSIsImlzQXJyYXkiLCJhZGREZWZhdWx0VG9vbHRpcHMiLCJ1cGRhdGVkU3RhdGUiLCJpbmRleFRvUmV0cmlldmUiLCJtYXBMYXllcnMiLCJsb2FkRmlsZXNVcGRhdGVyIiwiZmlsZXMiLCJmaWxlQ2FjaGUiLCJmaWxlTG9hZGluZyIsImZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJtYWtlTG9hZEZpbGVUYXNrIiwidG90YWxDb3VudCIsImZpbGVzVG9Mb2FkIiwiZmlsZSIsInBvcCIsImJpbWFwIiwibG9hZEZpbGVzRXJyIiwibG9hZEZpbGVTdWNjZXNzVXBkYXRlciIsImZvcm1hdCIsIkRBVEFTRVRfRk9STUFUUyIsImtlcGxlcmdsIiwiY2VudGVyTWFwIiwibWFwU3RhdGUiLCJfIiwibG9hZEZpbGVzRXJyVXBkYXRlciIsImZpbGVMb2FkaW5nRXJyIiwiYXBwbHlDUFVGaWx0ZXJVcGRhdGVyIiwiZGF0YUlkcyIsInNldE1hcEluZm9VcGRhdGVyIiwiZGVmYXVsdExheWVycyIsIm1lcmdlZCIsIm5ld0xheWVyRGF0YSIsImZpeGVkRG9tYWluIiwiYW5pbWF0YWJsZUxheWVycyIsImFuaW1hdGlvbkRvbWFpbiIsIm1lcmdlZERvbWFpbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJJbmZpbml0eSIsInNldEVkaXRvck1vZGVVcGRhdGVyIiwic2V0RmVhdHVyZXNVcGRhdGVyIiwibGFzdEZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiaXNDbG9zZWQiLCJFRElUIiwiZmVhdHVyZSIsImZpbHRlcklkIiwiZmVhdHVyZVZhbHVlIiwiZmlsdGVySWR4IiwiZmlsIiwic2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciIsImRlbGV0ZUZlYXR1cmVVcGRhdGVyIiwic2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlciIsIm5ld0xheWVySWQiLCJub25lRmlsdGVyRmVhdHVyZSIsImlzTGF5ZXJJbmNsdWRlZCIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFHQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFlQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFTQTs7QUFNQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHLElBQXpCO0FBQ0E7O0FBRU8sSUFBTUMsc0JB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U3FOLE9BQU8sQ0FBQ3JOLEVBQXJCO0FBQUEsU0FBOUIsQ0FGTjtBQUdKL0MsUUFBQUEsZUFBZSxFQUFFMkcsU0FBUyxDQUFDOUI7QUFIdkI7QUFIQSxNQUFSO0FBU0Q7O0FBRUQsU0FBTzJCLGdCQUFnQixDQUFDckUsUUFBRCxFQUFXO0FBQ2hDTixJQUFBQSxHQUFHLEVBQUUwTyxTQUQyQjtBQUVoQzNMLElBQUFBLElBQUksRUFBRSxTQUYwQjtBQUdoQ0MsSUFBQUEsS0FBSyxFQUFFK0w7QUFIeUIsR0FBWCxDQUF2QjtBQUtEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0csc0JBQVQsQ0FBZ0NwUCxLQUFoQyxVQUFrRDtBQUFBLE1BQVYxQixPQUFVLFVBQVZBLE9BQVU7QUFDdkQsMkJBQ0swQixLQURMO0FBRUVGLElBQUFBLE1BQU0sb0JBQ0RFLEtBQUssQ0FBQ0YsTUFETDtBQUVKeEIsTUFBQUEsT0FBTyxFQUFFLENBQUMwQixLQUFLLENBQUNGLE1BQU4sQ0FBYXhCO0FBRm5CO0FBRlI7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7ZGlzYWJsZVN0YWNrQ2FwdHVyaW5nLCB3aXRoVGFza30gZnJvbSAncmVhY3QtcGFsbS90YXNrcyc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCB4b3IgZnJvbSAnbG9kYXNoLnhvcic7XG5cbi8vIFRhc2tzXG5pbXBvcnQge0xPQURfRklMRV9UQVNLLCBBQ1RJT05fVEFTS30gZnJvbSAndGFza3MvdGFza3MnO1xuXG4vLyBBY3Rpb25zXG5pbXBvcnQge2xvYWRGaWxlc0VyciwgbG9hZEZpbGVTdWNjZXNzfSBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdhY3Rpb25zJztcblxuLy8gVXRpbHNcbmltcG9ydCB7Z2V0RGVmYXVsdEludGVyYWN0aW9uLCBmaW5kRmllbGRzVG9TaG93fSBmcm9tICd1dGlscy9pbnRlcmFjdGlvbi11dGlscyc7XG5pbXBvcnQge1xuICBGSUxURVJfVVBEQVRFUl9QUk9QUyxcbiAgTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTLFxuICBhcHBseUZpbHRlckZpZWxkTmFtZSxcbiAgYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyxcbiAgZ2VuZXJhdGVQb2x5Z29uRmlsdGVyLFxuICBmaWx0ZXJEYXRhc2V0Q1BVLFxuICBnZXREZWZhdWx0RmlsdGVyLFxuICBnZXRGaWx0ZXJQbG90LFxuICBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUsXG4gIGlzSW5SYW5nZSxcbiAgZ2V0RmlsdGVySWRJbkZlYXR1cmUsXG4gIGZlYXR1cmVUb0ZpbHRlclZhbHVlLFxuICB1cGRhdGVGaWx0ZXJEYXRhSWRcbn0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7c2V0RmlsdGVyR3B1TW9kZSwgYXNzaWduR3B1Q2hhbm5lbH0gZnJvbSAndXRpbHMvZ3B1LWZpbHRlci11dGlscyc7XG5pbXBvcnQge2NyZWF0ZU5ld0RhdGFFbnRyeX0gZnJvbSAndXRpbHMvZGF0YXNldC11dGlscyc7XG5pbXBvcnQge3NldCwgdG9BcnJheSwgZ2VuZXJhdGVIYXNoSWR9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtmaW5kRGVmYXVsdExheWVyLCBjYWxjdWxhdGVMYXllckRhdGF9IGZyb20gJ3V0aWxzL2xheWVyLXV0aWxzL2xheWVyLXV0aWxzJztcblxuaW1wb3J0IHtcbiAgbWVyZ2VGaWx0ZXJzLFxuICBtZXJnZUxheWVycyxcbiAgbWVyZ2VJbnRlcmFjdGlvbnMsXG4gIG1lcmdlTGF5ZXJCbGVuZGluZyxcbiAgbWVyZ2VTcGxpdE1hcHMsXG4gIG1lcmdlQW5pbWF0aW9uQ29uZmlnXG59IGZyb20gJy4vdmlzLXN0YXRlLW1lcmdlcic7XG5cbmltcG9ydCB7XG4gIGFkZE5ld0xheWVyc1RvU3BsaXRNYXAsXG4gIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwcyxcbiAgY29tcHV0ZVNwbGl0TWFwTGF5ZXJzXG59IGZyb20gJ3V0aWxzL3NwbGl0LW1hcC11dGlscyc7XG5cbmltcG9ydCB7TGF5ZXIsIExheWVyQ2xhc3Nlc30gZnJvbSAnbGF5ZXJzJztcbmltcG9ydCB7REVGQVVMVF9URVhUX0xBQkVMfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XG5pbXBvcnQge0VESVRPUl9NT0RFUywgREFUQVNFVF9GT1JNQVRTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbi8vIHJlYWN0LXBhbG1cbi8vIGRpc2FibGUgY2FwdHVyZSBleGNlcHRpb24gZm9yIHJlYWN0LXBhbG0gY2FsbCB0byB3aXRoVGFza1xuZGlzYWJsZVN0YWNrQ2FwdHVyaW5nKCk7XG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGB2aXNTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKlxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7dmlzU3RhdGVVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcbiAqIC8vIFJvb3QgUmVkdWNlclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXG4gKiAgYXBwOiBhcHBSZWR1Y2VyXG4gKiB9KTtcbiAqXG4gKiBjb25zdCBjb21wb3NlZFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICB2aXNTdGF0ZTogdmlzU3RhdGVVcGRhdGVycy5lbmxhcmdlRmlsdGVyVXBkYXRlcihcbiAqICAgICAgICAgICAgICAgc3RhdGUua2VwbGVyR2wuZm9vLnZpc1N0YXRlLFxuICogICAgICAgICAgICAgICB7aWR4OiAwfVxuICogICAgICAgICAgICAgKVxuICogICAgICAgICAgfVxuICogICAgICAgIH1cbiAqICAgICAgfTtcbiAqICB9XG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xuICogfTtcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCB2aXNTdGF0ZVVwZGF0ZXJzID0gbnVsbDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRBbmltYXRpb25Db25maWcgPSB7XG4gIGRvbWFpbjogbnVsbCxcbiAgY3VycmVudFRpbWU6IG51bGwsXG4gIHNwZWVkOiAxXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FRElUT1IgPSB7XG4gIG1vZGU6IEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04sXG4gIGZlYXR1cmVzOiBbXSxcbiAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsLFxuICB2aXNpYmxlOiB0cnVlXG59O1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgdmlzU3RhdGVgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtBcnJheX0gbGF5ZXJzXG4gKiBAcHJvcGVydHkge0FycmF5fSBsYXllckRhdGFcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGxheWVyVG9CZU1lcmdlZFxuICogQHByb3BlcnR5IHtBcnJheX0gbGF5ZXJPcmRlclxuICogQHByb3BlcnR5IHtBcnJheX0gZmlsdGVyc1xuICogQHByb3BlcnR5IHtBcnJheX0gZmlsdGVyVG9CZU1lcmdlZFxuICogQHByb3BlcnR5IHtBcnJheX0gZGF0YXNldHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlZGl0aW5nRGF0YXNldFxuICogQHByb3BlcnR5IHtPYmplY3R9IGludGVyYWN0aW9uQ29uZmlnXG4gKiBAcHJvcGVydHkge09iamVjdH0gaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGF5ZXJCbGVuZGluZ1xuICogQHByb3BlcnR5IHtPYmplY3R9IGhvdmVySW5mb1xuICogQHByb3BlcnR5IHtPYmplY3R9IGNsaWNrZWRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtb3VzZVBvc1xuICogQHByb3BlcnR5IHtBcnJheX0gc3BsaXRNYXBzIC0gYSBsaXN0IG9mIG9iamVjdHMgb2YgbGF5ZXIgYXZhaWxhYmlsaXRpZXMgYW5kIHZpc2liaWxpdGllcyBmb3IgZWFjaCBtYXBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBsYXllckNsYXNzZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBhbmltYXRpb25Db25maWdcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBlZGl0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfVklTX1NUQVRFID0ge1xuICAvLyBtYXAgaW5mb1xuICBtYXBJbmZvOiB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJ1xuICB9LFxuICAvLyBsYXllcnNcbiAgbGF5ZXJzOiBbXSxcbiAgbGF5ZXJEYXRhOiBbXSxcbiAgbGF5ZXJUb0JlTWVyZ2VkOiBbXSxcbiAgbGF5ZXJPcmRlcjogW10sXG5cbiAgLy8gZmlsdGVyc1xuICBmaWx0ZXJzOiBbXSxcbiAgZmlsdGVyVG9CZU1lcmdlZDogW10sXG5cbiAgLy8gYSBjb2xsZWN0aW9uIG9mIG11bHRpcGxlIGRhdGFzZXRcbiAgZGF0YXNldHM6IHt9LFxuICBlZGl0aW5nRGF0YXNldDogdW5kZWZpbmVkLFxuXG4gIGludGVyYWN0aW9uQ29uZmlnOiBnZXREZWZhdWx0SW50ZXJhY3Rpb24oKSxcbiAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkOiB1bmRlZmluZWQsXG5cbiAgbGF5ZXJCbGVuZGluZzogJ25vcm1hbCcsXG4gIGhvdmVySW5mbzogdW5kZWZpbmVkLFxuICBjbGlja2VkOiB1bmRlZmluZWQsXG4gIG1vdXNlUG9zOiB7fSxcblxuICAvLyB0aGlzIGlzIHVzZWQgd2hlbiB1c2VyIHNwbGl0IG1hcHNcbiAgc3BsaXRNYXBzOiBbXG4gICAgLy8gdGhpcyB3aWxsIGNvbnRhaW4gYSBsaXN0IG9mIG9iamVjdHMgdG9cbiAgICAvLyBkZXNjcmliZSB0aGUgc3RhdGUgb2YgbGF5ZXIgYXZhaWxhYmlsaXR5IGFuZCB2aXNpYmlsaXR5IGZvciBlYWNoIG1hcFxuICAgIC8vIFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgIGxheWVyczoge2xheWVyX2lkOiB0cnVlIHwgZmFsc2V9XG4gICAgLy8gICB9XG4gICAgLy8gXVxuICBdLFxuICAvL1xuICAvLyBkZWZhdWx0cyBsYXllciBjbGFzc2VzXG4gIGxheWVyQ2xhc3NlczogTGF5ZXJDbGFzc2VzLFxuXG4gIC8vIGRlZmF1bHQgYW5pbWF0aW9uXG4gIC8vIHRpbWUgaW4gdW5peCB0aW1lc3RhbXAgKG1pbGxpc2Vjb25kcykgKHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSB0aGUgVW5peCBFcG9jaClcbiAgYW5pbWF0aW9uQ29uZmlnOiBkZWZhdWx0QW5pbWF0aW9uQ29uZmlnLFxuXG4gIGVkaXRvcjogREVGQVVMVF9FRElUT1Jcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAoKGx5ciwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyIDogbHlyKSksXG4gICAgbGF5ZXJEYXRhOiBsYXllckRhdGFcbiAgICAgID8gc3RhdGUubGF5ZXJEYXRhLm1hcCgoZCwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyRGF0YSA6IGQpKVxuICAgICAgOiBzdGF0ZS5sYXllckRhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2Uoc3RhdGUsIGxheWVyKSB7XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICBpZiAoc3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIG5ld1N0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGxheWVyLmNvbmZpZy5pc1Zpc2libGVcbiAgICAgICAgPyBhZGROZXdMYXllcnNUb1NwbGl0TWFwKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgICAgIDogcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChsYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5vbGRMYXllciBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm5ld0NvbmZpZyBuZXcgY29uZmlnXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllcn0gPSBhY3Rpb247XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoYWN0aW9uLm5ld0NvbmZpZyk7XG4gIGxldCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKGFjdGlvbi5uZXdDb25maWcpO1xuXG4gIGxldCBsYXllckRhdGE7XG5cbiAgLy8gbGV0IG5ld0xheWVyO1xuICBpZiAobmV3TGF5ZXIuc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSkge1xuICAgIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuICAgIGNvbnN0IHVwZGF0ZUxheWVyRGF0YVJlc3VsdCA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSk7XG5cbiAgICBsYXllckRhdGEgPSB1cGRhdGVMYXllckRhdGFSZXN1bHQubGF5ZXJEYXRhO1xuICAgIG5ld0xheWVyID0gdXBkYXRlTGF5ZXJEYXRhUmVzdWx0LmxheWVyO1xuICB9XG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG4gIGlmICgnaXNWaXNpYmxlJyBpbiBhY3Rpb24ubmV3Q29uZmlnKSB7XG4gICAgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlKHN0YXRlLCBuZXdMYXllcik7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKG5ld1N0YXRlLCB7XG4gICAgbGF5ZXI6IG5ld0xheWVyLFxuICAgIGxheWVyRGF0YSxcbiAgICBpZHhcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE9yUmVtb3ZlVGV4dExhYmVscyhuZXdGaWVsZHMsIHRleHRMYWJlbCkge1xuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XG5cbiAgY29uc3QgY3VycmVudEZpZWxkcyA9IHRleHRMYWJlbC5tYXAodGwgPT4gdGwuZmllbGQgJiYgdGwuZmllbGQubmFtZSkuZmlsdGVyKGQgPT4gZCk7XG5cbiAgY29uc3QgYWRkRmllbGRzID0gbmV3RmllbGRzLmZpbHRlcihmID0+ICFjdXJyZW50RmllbGRzLmluY2x1ZGVzKGYubmFtZSkpO1xuICBjb25zdCBkZWxldGVGaWVsZHMgPSBjdXJyZW50RmllbGRzLmZpbHRlcihmID0+ICFuZXdGaWVsZHMuZmluZChmZCA9PiBmZC5uYW1lID09PSBmKSk7XG5cbiAgLy8gZGVsZXRlXG4gIG5ld1RleHRMYWJlbCA9IG5ld1RleHRMYWJlbC5maWx0ZXIodGwgPT4gdGwuZmllbGQgJiYgIWRlbGV0ZUZpZWxkcy5pbmNsdWRlcyh0bC5maWVsZC5uYW1lKSk7XG4gIG5ld1RleHRMYWJlbCA9ICFuZXdUZXh0TGFiZWwubGVuZ3RoID8gW0RFRkFVTFRfVEVYVF9MQUJFTF0gOiBuZXdUZXh0TGFiZWw7XG5cbiAgLy8gYWRkXG4gIG5ld1RleHRMYWJlbCA9IFtcbiAgICAuLi5uZXdUZXh0TGFiZWwuZmlsdGVyKHRsID0+IHRsLmZpZWxkKSxcbiAgICAuLi5hZGRGaWVsZHMubWFwKGFmID0+ICh7XG4gICAgICAuLi5ERUZBVUxUX1RFWFRfTEFCRUwsXG4gICAgICBmaWVsZDogYWZcbiAgICB9KSlcbiAgXTtcblxuICByZXR1cm4gbmV3VGV4dExhYmVsO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUoaWR4LCBwcm9wLCB2YWx1ZSwgdGV4dExhYmVsKSB7XG4gIGlmICghdGV4dExhYmVsW2lkeF0uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICByZXR1cm4gdGV4dExhYmVsO1xuICB9XG5cbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xuXG4gIGlmIChwcm9wICYmICh2YWx1ZSB8fCB0ZXh0TGFiZWwubGVuZ3RoID09PSAxKSkge1xuICAgIG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5tYXAoKHRsLCBpKSA9PiAoaSA9PT0gaWR4ID8gey4uLnRsLCBbcHJvcF06IHZhbHVlfSA6IHRsKSk7XG4gIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2ZpZWxkJyAmJiB2YWx1ZSA9PT0gbnVsbCAmJiB0ZXh0TGFiZWwubGVuZ3RoID4gMSkge1xuICAgIC8vIHJlbW92ZSBsYWJlbCB3aGVuIGZpZWxkIHZhbHVlIGlzIHNldCB0byBudWxsXG4gICAgbmV3VGV4dExhYmVsLnNwbGljZShpZHgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1RleHRMYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllciwgaWR4LCBwcm9wLCB2YWx1ZX0gPSBhY3Rpb247XG4gIGNvbnN0IHt0ZXh0TGFiZWx9ID0gb2xkTGF5ZXIuY29uZmlnO1xuXG4gIGxldCBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwuc2xpY2UoKTtcbiAgaWYgKCF0ZXh0TGFiZWxbaWR4XSAmJiBpZHggPT09IHRleHRMYWJlbC5sZW5ndGgpIHtcbiAgICAvLyBpZiBpZHggaXMgc2V0IHRvIGxlbmd0aCwgYWRkIGVtcHR5IHRleHQgbGFiZWxcbiAgICBuZXdUZXh0TGFiZWwgPSBbLi4udGV4dExhYmVsLCBERUZBVUxUX1RFWFRfTEFCRUxdO1xuICB9XG5cbiAgaWYgKGlkeCA9PT0gJ2FsbCcgJiYgcHJvcCA9PT0gJ2ZpZWxkcycpIHtcbiAgICBuZXdUZXh0TGFiZWwgPSBhZGRPclJlbW92ZVRleHRMYWJlbHModmFsdWUsIHRleHRMYWJlbCk7XG4gIH0gZWxzZSB7XG4gICAgbmV3VGV4dExhYmVsID0gdXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlKGlkeCwgcHJvcCwgdmFsdWUsIG5ld1RleHRMYWJlbCk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGV4dCBsYWJlbCBwcm9wIGFuZCB2YWx1ZVxuICByZXR1cm4gbGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7XG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3Q29uZmlnOiB7dGV4dExhYmVsOiBuZXdUZXh0TGFiZWx9XG4gIH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ub2xkTGF5ZXIgbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5uZXdUeXBlIG5ldyB0eXBlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXIsIG5ld1R5cGV9ID0gYWN0aW9uO1xuICBpZiAoIW9sZExheWVyKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IG9sZElkID0gb2xkTGF5ZXIuaWQ7XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRJZCk7XG5cbiAgaWYgKCFzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0pIHtcbiAgICBDb25zb2xlLmVycm9yKGAke25ld1R5cGV9IGlzIG5vdCBhIHZhbGlkIGxheWVyIHR5cGVgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvLyBnZXQgYSBtaW50IGxheWVyLCB3aXRoIG5ldyBpZCBhbmQgdHlwZVxuICAvLyBiZWNhdXNlIGRlY2suZ2wgdXNlcyBpZCB0byBtYXRjaCBiZXR3ZWVuIG5ldyBhbmQgb2xkIGxheWVyLlxuICAvLyBJZiB0eXBlIGhhcyBjaGFuZ2VkIGJ1dCBpZCBpcyB0aGUgc2FtZSwgaXQgd2lsbCBicmVha1xuICBjb25zdCBuZXdMYXllciA9IG5ldyBzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0oKTtcblxuICBuZXdMYXllci5hc3NpZ25Db25maWdUb0xheWVyKG9sZExheWVyLmNvbmZpZywgb2xkTGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MpO1xuXG4gIC8vIGlmIChuZXdMYXllci5jb25maWcuZGF0YUlkKSB7XG4gIC8vICAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW25ld0xheWVyLmNvbmZpZy5kYXRhSWRdO1xuICAvLyAgIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKGRhdGFzZXQpO1xuICAvLyB9XG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSk7XG4gIGxldCBuZXdTdGF0ZSA9IHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xuXG4gIGlmIChsYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgfHwgb2xkTGF5ZXIuY29uZmlnLmFuaW1hdGlvbi5lbmFibGVkKSB7XG4gICAgbmV3U3RhdGUgPSB1cGRhdGVBbmltYXRpb25Eb21haW4obmV3U3RhdGUpO1xuICB9XG5cbiAgLy8gdXBkYXRlIHNwbGl0TWFwIGxheWVyIGlkXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgIHNwbGl0TWFwczogbmV3U3RhdGUuc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiB7XG4gICAgICAgIGNvbnN0IHtbb2xkSWRdOiBvbGRMYXllck1hcCwgLi4ub3RoZXJMYXllcnN9ID0gc2V0dGluZ3MubGF5ZXJzO1xuICAgICAgICByZXR1cm4gb2xkSWQgaW4gc2V0dGluZ3MubGF5ZXJzXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgICAgICAgICBsYXllcnM6IHtcbiAgICAgICAgICAgICAgICAuLi5vdGhlckxheWVycyxcbiAgICAgICAgICAgICAgICBbbGF5ZXIuaWRdOiBvbGRMYXllck1hcFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBzZXR0aW5ncztcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdmlzdWFsIGNoYW5uZWxcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ub2xkTGF5ZXIgbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5uZXdDb25maWcgbmV3IHZpc3VhbCBjaGFubmVsIGNvbmZpZ1xuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5jaGFubmVsIGNoYW5uZWwgdG8gYmUgdXBkYXRlZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyLCBuZXdDb25maWcsIGNoYW5uZWx9ID0gYWN0aW9uO1xuICBjb25zdCBkYXRhc2V0ID0gc3RhdGUuZGF0YXNldHNbb2xkTGF5ZXIuY29uZmlnLmRhdGFJZF07XG5cbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbmZpZyhuZXdDb25maWcpO1xuXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbChkYXRhc2V0LCBjaGFubmVsKTtcblxuICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGB2aXNDb25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm9sZExheWVyIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ubmV3VmlzQ29uZmlnIG5ldyB2aXNDb25maWcgYXMgYSBrZXkgdmFsdWUgbWFwOiBlLmcuIGB7b3BhY2l0eTogMC44fWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyfSA9IGFjdGlvbjtcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhhY3Rpb24ubmV3VmlzQ29uZmlnKTtcbiAgY29uc3QgbmV3VmlzQ29uZmlnID0ge1xuICAgIC4uLm9sZExheWVyLmNvbmZpZy52aXNDb25maWcsXG4gICAgLi4uYWN0aW9uLm5ld1Zpc0NvbmZpZ1xuICB9O1xuXG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe3Zpc0NvbmZpZzogbmV3VmlzQ29uZmlnfSk7XG5cbiAgaWYgKG5ld0xheWVyLnNob3VsZENhbGN1bGF0ZUxheWVyRGF0YShwcm9wcykpIHtcbiAgICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcbiAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEpO1xuICAgIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcbiAgfVxuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllcjogbmV3TGF5ZXIsIGlkeH0pO1xufVxuXG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICogVXBkYXRlIGBpbnRlcmFjdGlvbkNvbmZpZ2BcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24uY29uZmlnIG5ldyBjb25maWcgYXMga2V5IHZhbHVlIG1hcDogYHt0b29sdGlwOiB7ZW5hYmxlZDogdHJ1ZX19YFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7Y29uZmlnfSA9IGFjdGlvbjtcblxuICBjb25zdCBpbnRlcmFjdGlvbkNvbmZpZyA9IHtcbiAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAuLi57W2NvbmZpZy5pZF06IGNvbmZpZ31cbiAgfTtcblxuICAvLyBEb24ndCBlbmFibGUgdG9vbHRpcCBhbmQgYnJ1c2ggYXQgdGhlIHNhbWUgdGltZVxuICAvLyBidXQgY29vcmRpbmF0ZXMgY2FuIGJlIHNob3duIGF0IGFsbCB0aW1lXG4gIGNvbnN0IGNvbnRyYWRpY3QgPSBbJ2JydXNoJywgJ3Rvb2x0aXAnXTtcblxuICBpZiAoXG4gICAgY29udHJhZGljdC5pbmNsdWRlcyhjb25maWcuaWQpICYmXG4gICAgY29uZmlnLmVuYWJsZWQgJiZcbiAgICAhc3RhdGUuaW50ZXJhY3Rpb25Db25maWdbY29uZmlnLmlkXS5lbmFibGVkXG4gICkge1xuICAgIC8vIG9ubHkgZW5hYmxlIG9uZSBpbnRlcmFjdGlvbiBhdCBhIHRpbWVcbiAgICBjb250cmFkaWN0LmZvckVhY2goayA9PiB7XG4gICAgICBpZiAoayAhPT0gY29uZmlnLmlkKSB7XG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnW2tdID0gey4uLmludGVyYWN0aW9uQ29uZmlnW2tdLCBlbmFibGVkOiBmYWxzZX07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHggYGlkeGAgb2YgZmlsdGVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucHJvcCBgcHJvcGAgb2YgZmlsdGVyLCBlLGcsIGBkYXRhSWRgLCBgbmFtZWAsIGB2YWx1ZWBcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uLnZhbHVlIG5ldyB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFzZXRJZCB1c2VkIHdoZW4gdXBkYXRpbmcgYSBwcm9wIChkYXRhSWQsIG5hbWUpIHRoYXQgY2FuIGJlIGxpbmtlZCB0byBtdWx0aXBsZSBkYXRhc2V0c1xuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2lkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXggPSAwfSA9IGFjdGlvbjtcblxuICBjb25zdCBvbGRGaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG4gIGxldCBuZXdGaWx0ZXIgPSBzZXQoW3Byb3BdLCB2YWx1ZSwgb2xkRmlsdGVyKTtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG5cbiAgY29uc3Qge2RhdGFJZH0gPSBuZXdGaWx0ZXI7XG5cbiAgLy8gRW5zdXJpbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBsZXQgZGF0YXNldElkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICBzd2l0Y2ggKHByb3ApIHtcbiAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBpZiB3ZSB1cGRhdGUgZGF0YUlkLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIHR3byBjYXNlczpcbiAgICAvLyAxLiBkYXRhSWQgaXMgZW1wdHk6IGNyZWF0ZSBhIGRlZmF1bHQgZmlsdGVyXG4gICAgLy8gMi4gQWRkIGEgbmV3IGRhdGFzZXQgaWRcbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLmRhdGFJZDpcbiAgICAgIC8vIGlmIHRyeWluZyB0byB1cGRhdGUgZmlsdGVyIGRhdGFJZC4gY3JlYXRlIGFuIGVtcHR5IG5ldyBmaWx0ZXJcbiAgICAgIG5ld0ZpbHRlciA9IHVwZGF0ZUZpbHRlckRhdGFJZChkYXRhSWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWU6XG4gICAgICAvLyB3ZSBhcmUgc3VwcG9ydGluZyB0aGUgY3VycmVudCBmdW5jdGlvbmFsaXR5XG4gICAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBmaWx0ZXIgbmFtZSB3aWxsIG9ubHkgdXBkYXRlIGZpbHRlciBuYW1lIGJ1dCBpdCB3b24ndCBoYXZlIHNpZGUgZWZmZWN0c1xuICAgICAgLy8gd2UgYXJlIGdvbm5hIHVzZSBwYWlyIG9mIGRhdGFzZXRzIGFuZCBmaWVsZElkeCB0byB1cGRhdGUgdGhlIGZpbHRlclxuICAgICAgY29uc3QgZGF0YXNldElkID0gbmV3RmlsdGVyLmRhdGFJZFt2YWx1ZUluZGV4XTtcbiAgICAgIGNvbnN0IHtmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIGRhdGFzZXQ6IG5ld0RhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXG4gICAgICAgIG5ld0ZpbHRlcixcbiAgICAgICAgc3RhdGUuZGF0YXNldHNbZGF0YXNldElkXSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbHVlSW5kZXgsXG4gICAgICAgIHttZXJnZURvbWFpbjogZmFsc2V9XG4gICAgICApO1xuICAgICAgaWYgKCF1cGRhdGVkRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlZEZpbHRlcjtcblxuICAgICAgaWYgKG5ld0ZpbHRlci5ncHUpIHtcbiAgICAgICAgbmV3RmlsdGVyID0gc2V0RmlsdGVyR3B1TW9kZShuZXdGaWx0ZXIsIHN0YXRlLmZpbHRlcnMpO1xuICAgICAgICBuZXdGaWx0ZXIgPSBhc3NpZ25HcHVDaGFubmVsKG5ld0ZpbHRlciwgc3RhdGUuZmlsdGVycyk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnLCBkYXRhc2V0SWRdLCBuZXdEYXRhc2V0LCBzdGF0ZSk7XG5cbiAgICAgIC8vIG9ubHkgZmlsdGVyIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMubGF5ZXJJZDpcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIG9ubHkgZGF0YXNldElkL3MgaWYgd2UgaGF2ZSBhZGRlZC9yZW1vdmVkIGxheWVyc1xuICAgICAgLy8gLSBjaGVjayBmb3IgbGF5ZXJJZCBjaGFuZ2VzIChYT1Igd29ya3MgYmVjYXVzZSBvZiBzdHJpbmcgdmFsdWVzKVxuICAgICAgLy8gaWYgbm8gZGlmZmVyZW5jZXMgYmV0d2VlbiBsYXllcklkcywgZG9uJ3QgZG8gYW55IGZpbHRlcmluZ1xuICAgICAgY29uc3QgbGF5ZXJJZERpZmZlcmVuY2UgPSB4b3IobmV3RmlsdGVyLmxheWVySWQsIG9sZEZpbHRlci5sYXllcklkKTtcblxuICAgICAgY29uc3QgbGF5ZXJEYXRhSWRzID0gdW5pcShcbiAgICAgICAgbGF5ZXJJZERpZmZlcmVuY2VcbiAgICAgICAgICAubWFwKGxpZCA9PlxuICAgICAgICAgICAgZ2V0KFxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxuICAgICAgKTtcblxuICAgICAgLy8gb25seSBmaWx0ZXIgZGF0YXNldHNJZHNcbiAgICAgIGRhdGFzZXRJZHMgPSBsYXllckRhdGFJZHM7XG5cbiAgICAgIC8vIFVwZGF0ZSBuZXdGaWx0ZXIgZGF0YUlkc1xuICAgICAgY29uc3QgbmV3RGF0YUlkcyA9IHVuaXEoXG4gICAgICAgIG5ld0ZpbHRlci5sYXllcklkXG4gICAgICAgICAgLm1hcChsaWQgPT5cbiAgICAgICAgICAgIGdldChcbiAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBsaWQpLFxuICAgICAgICAgICAgICBbJ2NvbmZpZycsICdkYXRhSWQnXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAuZmlsdGVyKGQgPT4gZClcbiAgICAgICk7XG5cbiAgICAgIG5ld0ZpbHRlciA9IHtcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxuICAgICAgICBkYXRhSWQ6IG5ld0RhdGFJZHNcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGVubGFyZ2VkRmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGYgPT4gZi5lbmxhcmdlZCk7XG5cbiAgaWYgKGVubGFyZ2VkRmlsdGVyICYmIGVubGFyZ2VkRmlsdGVyLmlkICE9PSBuZXdGaWx0ZXIuaWQpIHtcbiAgICAvLyB0aGVyZSBzaG91bGQgYmUgb25seSBvbmUgZW5sYXJnZWQgZmlsdGVyXG4gICAgbmV3RmlsdGVyLmVubGFyZ2VkID0gZmFsc2U7XG4gIH1cblxuICAvLyBzYXZlIG5ldyBmaWx0ZXJzIHRvIG5ld1N0YXRlXG4gIG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycycsIGlkeF0sIG5ld0ZpbHRlciwgbmV3U3RhdGUpO1xuXG4gIC8vIGlmIHdlIGFyZSBjdXJyZW50bHkgc2V0dGluZyBhIHByb3AgdGhhdCBvbmx5IHJlcXVpcmVzIHRvIGZpbHRlciB0aGUgY3VycmVudFxuICAvLyBkYXRhc2V0IHdlIHdpbGwgcGFzcyBvbmx5IHRoZSBjdXJyZW50IGRhdGFzZXQgdG8gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyBhbmRcbiAgLy8gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhIG90aGVyd2lzZSB3ZSBwYXNzIHRoZSBhbGwgbGlzdCBvZiBkYXRhc2V0cyBhcyBkZWZpbmVkIGluIGRhdGFJZFxuICBjb25zdCBkYXRhc2V0SWRzVG9GaWx0ZXIgPSBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFNbcHJvcF1cbiAgICA/IFtkYXRhc2V0SWRzW3ZhbHVlSW5kZXhdXVxuICAgIDogZGF0YXNldElkcztcblxuICAvLyBmaWx0ZXIgZGF0YVxuICBjb25zdCBmaWx0ZXJlZERhdGFzZXRzID0gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhcbiAgICBkYXRhc2V0SWRzVG9GaWx0ZXIsXG4gICAgbmV3U3RhdGUuZGF0YXNldHMsXG4gICAgbmV3U3RhdGUuZmlsdGVycyxcbiAgICBuZXdTdGF0ZS5sYXllcnNcbiAgKTtcblxuICBuZXdTdGF0ZSA9IHNldChbJ2RhdGFzZXRzJ10sIGZpbHRlcmVkRGF0YXNldHMsIG5ld1N0YXRlKTtcbiAgLy8gZGF0YUlkIGlzIGFuIGFycmF5XG4gIC8vIHBhc3Mgb25seSB0aGUgZGF0YXNldCB3ZSBuZWVkIHRvIHVwZGF0ZVxuICBuZXdTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YXNldElkc1RvRmlsdGVyLCBuZXdGaWx0ZXIpO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uaWR4XG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm5ld1Byb3Aga2V5IHZhbHVlIG1hcHBpbmcgb2YgbmV3IHByb3AgYHt5QXhpczogJ2hpc3RvZ3JhbSd9YFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRGaWx0ZXJQbG90VXBkYXRlciA9IChzdGF0ZSwge2lkeCwgbmV3UHJvcH0pID0+IHtcbiAgbGV0IG5ld0ZpbHRlciA9IHsuLi5zdGF0ZS5maWx0ZXJzW2lkeF0sIC4uLm5ld1Byb3B9O1xuICBjb25zdCBwcm9wID0gT2JqZWN0LmtleXMobmV3UHJvcClbMF07XG4gIGlmIChwcm9wID09PSAneUF4aXMnKSB7XG4gICAgY29uc3QgcGxvdFR5cGUgPSBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUobmV3RmlsdGVyKTtcblxuICAgIGlmIChwbG90VHlwZSkge1xuICAgICAgbmV3RmlsdGVyID0ge1xuICAgICAgICAuLi5uZXdGaWx0ZXIsXG4gICAgICAgIC4uLmdldEZpbHRlclBsb3Qoey4uLm5ld0ZpbHRlciwgcGxvdFR5cGV9LCBzdGF0ZS5kYXRhc2V0c1tuZXdGaWx0ZXIuZGF0YUlkXS5hbGxEYXRhKSxcbiAgICAgICAgcGxvdFR5cGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGlkeCA/IG5ld0ZpbHRlciA6IGYpKVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgYSBuZXcgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFJZCBkYXRhc2V0IGBpZGAgdGhpcyBuZXcgZmlsdGVyIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gICFhY3Rpb24uZGF0YUlkXG4gICAgPyBzdGF0ZVxuICAgIDoge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyczogWy4uLnN0YXRlLmZpbHRlcnMsIGdldERlZmF1bHRGaWx0ZXIoYWN0aW9uLmRhdGFJZCldXG4gICAgICB9O1xuXG4vKipcbiAqIFNldCBsYXllciBjb2xvciBwYWxldHRlIHVpIHN0YXRlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ubmV3Q29uZmlnXG4gKi9cbmV4cG9ydCBjb25zdCBsYXllckNvbG9yVUlDaGFuZ2VVcGRhdGVyID0gKHN0YXRlLCB7b2xkTGF5ZXIsIHByb3AsIG5ld0NvbmZpZ30pID0+IHtcbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbG9yVUkocHJvcCwgbmV3Q29uZmlnKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAobCA9PiAobC5pZCA9PT0gb2xkTGF5ZXIuaWQgPyBuZXdMYXllciA6IGwpKVxuICB9O1xufTtcblxuLyoqXG4gKiBTdGFydCBhbmQgZW5kIGZpbHRlciBhbmltYXRpb25cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uaWR4IGlkeCBvZiBmaWx0ZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBhY3Rpb24uaWR4ID8gey4uLmYsIGlzQW5pbWF0aW5nOiAhZi5pc0FuaW1hdGluZ30gOiBmKSlcbn0pO1xuXG4vKipcbiAqIENoYW5nZSBmaWx0ZXIgYW5pbWF0aW9uIHNwZWVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeCAgYGlkeGAgb2YgZmlsdGVyXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLnNwZWVkIGBzcGVlZGAgdG8gY2hhbmdlIGl0IHRvLiBgc3BlZWRgIGlzIGEgbXVsdGlwbGllclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBzcGVlZDogYWN0aW9uLnNwZWVkfSA6IGYpKVxufSk7XG5cbi8qKlxuICogUmVzZXQgYW5pbWF0aW9uIGNvbmZpZyBjdXJyZW50IHRpbWUgdG8gYSBzcGVjaWZpZWQgdmFsdWVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24udmFsdWUgdGhlIHZhbHVlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHNldCB0b1xuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKlxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQW5pbWF0aW9uVGltZVVwZGF0ZXIgPSAoc3RhdGUsIHt2YWx1ZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBhbmltYXRpb25Db25maWc6IHtcbiAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgY3VycmVudFRpbWU6IHZhbHVlXG4gIH1cbn0pO1xuXG4vKipcbiAqIFVwZGF0ZSBhbmltYXRpb24gc3BlZWQgd2l0aCB0aGUgdmVydGljYWwgc3BlZWQgc2xpZGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLnNwZWVkIHRoZSB1cGRhdGVkIHNwZWVkIG9mIHRoZSBhbmltYXRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyID0gKHN0YXRlLCB7c3BlZWR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICBzcGVlZFxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2hvdyBsYXJnZXIgdGltZSBmaWx0ZXIgYXQgYm90dG9tIGZvciB0aW1lIHBsYXliYWNrIChhcHBseSB0byB0aW1lIGZpbHRlciBvbmx5KVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHggaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZW5sYXJnZUZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBpc0VubGFyZ2VkID0gc3RhdGUuZmlsdGVyc1thY3Rpb24uaWR4XS5lbmxhcmdlZDtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiB7XG4gICAgICBmLmVubGFyZ2VkID0gIWlzRW5sYXJnZWQgJiYgaSA9PT0gYWN0aW9uLmlkeDtcbiAgICAgIHJldHVybiBmO1xuICAgIH0pXG4gIH07XG59O1xuXG4vKipcbiAqIFRvZ2dsZXMgZmlsdGVyIGZlYXR1cmUgdmlzaWJpbGl0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHggaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBmaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2FjdGlvbi5pZHhdO1xuICBjb25zdCBpc1Zpc2libGUgPSBnZXQoZmlsdGVyLCBbJ3ZhbHVlJywgJ3Byb3BlcnRpZXMnLCAnaXNWaXNpYmxlJ10pO1xuICBjb25zdCBuZXdGaWx0ZXIgPSB7XG4gICAgLi4uZmlsdGVyLFxuICAgIHZhbHVlOiBmZWF0dXJlVG9GaWx0ZXJWYWx1ZShmaWx0ZXIudmFsdWUsIGZpbHRlci5pZCwge1xuICAgICAgaXNWaXNpYmxlOiAhaXNWaXNpYmxlXG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbHRlcnM6IE9iamVjdC5hc3NpZ24oW10uY29uY2F0KHN0YXRlLmZpbHRlcnMpLCB7W2FjdGlvbi5pZHhdOiBuZXdGaWx0ZXJ9KVxuICB9O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uaWR4IGluZGV4IG9mIGZpbHRlciB0byBiIGUgcmVtb3ZlZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qge2lkeH0gPSBhY3Rpb247XG4gIGNvbnN0IHtkYXRhSWQsIGlkfSA9IHN0YXRlLmZpbHRlcnNbaWR4XTtcblxuICBjb25zdCBuZXdGaWx0ZXJzID0gW1xuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoMCwgaWR4KSxcbiAgICAuLi5zdGF0ZS5maWx0ZXJzLnNsaWNlKGlkeCArIDEsIHN0YXRlLmZpbHRlcnMubGVuZ3RoKVxuICBdO1xuXG4gIGNvbnN0IGZpbHRlcmVkRGF0YXNldHMgPSBhcHBseUZpbHRlcnNUb0RhdGFzZXRzKGRhdGFJZCwgc3RhdGUuZGF0YXNldHMsIG5ld0ZpbHRlcnMsIHN0YXRlLmxheWVycyk7XG4gIGNvbnN0IG5ld0VkaXRvciA9XG4gICAgZ2V0RmlsdGVySWRJbkZlYXR1cmUoc3RhdGUuZWRpdG9yLnNlbGVjdGVkRmVhdHVyZSkgPT09IGlkXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDogc3RhdGUuZWRpdG9yO1xuXG4gIGxldCBuZXdTdGF0ZSA9IHNldChbJ2ZpbHRlcnMnXSwgbmV3RmlsdGVycywgc3RhdGUpO1xuICBuZXdTdGF0ZSA9IHNldChbJ2RhdGFzZXRzJ10sIGZpbHRlcmVkRGF0YXNldHMsIG5ld1N0YXRlKTtcbiAgbmV3U3RhdGUgPSBzZXQoWydlZGl0b3InXSwgbmV3RWRpdG9yLCBuZXdTdGF0ZSk7XG5cbiAgcmV0dXJuIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YUlkKTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnByb3BzIC0gbmV3IGxheWVyIHByb3BzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZExheWVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHREYXRhc2V0ID0gT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldHMpWzBdO1xuICBjb25zdCBuZXdMYXllciA9IG5ldyBMYXllcih7XG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGlzQ29uZmlnQWN0aXZlOiB0cnVlLFxuICAgIGRhdGFJZDogZGVmYXVsdERhdGFzZXQsXG4gICAgLi4uYWN0aW9uLnByb3BzXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBbLi4uc3RhdGUubGF5ZXJzLCBuZXdMYXllcl0sXG4gICAgbGF5ZXJEYXRhOiBbLi4uc3RhdGUubGF5ZXJEYXRhLCB7fV0sXG4gICAgbGF5ZXJPcmRlcjogWy4uLnN0YXRlLmxheWVyT3JkZXIsIHN0YXRlLmxheWVyT3JkZXIubGVuZ3RoXSxcbiAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAoc3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcilcbiAgfTtcbn07XG5cbi8qKlxuICogcmVtb3ZlIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeCBpbmRleCBvZiBsYXllciB0byBiIGUgcmVtb3ZlZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVMYXllclVwZGF0ZXIgPSAoc3RhdGUsIHtpZHh9KSA9PiB7XG4gIGNvbnN0IHtsYXllcnMsIGxheWVyRGF0YSwgY2xpY2tlZCwgaG92ZXJJbmZvfSA9IHN0YXRlO1xuICBjb25zdCBsYXllclRvUmVtb3ZlID0gc3RhdGUubGF5ZXJzW2lkeF07XG4gIGNvbnN0IG5ld01hcHMgPSByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3RhdGUuc3BsaXRNYXBzLCBsYXllclRvUmVtb3ZlKTtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IFsuLi5sYXllcnMuc2xpY2UoMCwgaWR4KSwgLi4ubGF5ZXJzLnNsaWNlKGlkeCArIDEsIGxheWVycy5sZW5ndGgpXSxcbiAgICBsYXllckRhdGE6IFsuLi5sYXllckRhdGEuc2xpY2UoMCwgaWR4KSwgLi4ubGF5ZXJEYXRhLnNsaWNlKGlkeCArIDEsIGxheWVyRGF0YS5sZW5ndGgpXSxcbiAgICBsYXllck9yZGVyOiBzdGF0ZS5sYXllck9yZGVyLmZpbHRlcihpID0+IGkgIT09IGlkeCkubWFwKHBpZCA9PiAocGlkID4gaWR4ID8gcGlkIC0gMSA6IHBpZCkpLFxuICAgIGNsaWNrZWQ6IGxheWVyVG9SZW1vdmUuaXNMYXllckhvdmVyZWQoY2xpY2tlZCkgPyB1bmRlZmluZWQgOiBjbGlja2VkLFxuICAgIGhvdmVySW5mbzogbGF5ZXJUb1JlbW92ZS5pc0xheWVySG92ZXJlZChob3ZlckluZm8pID8gdW5kZWZpbmVkIDogaG92ZXJJbmZvLFxuICAgIHNwbGl0TWFwczogbmV3TWFwc1xuICAgIC8vIFRPRE86IHVwZGF0ZSBmaWx0ZXJzLCBjcmVhdGUgaGVscGVyIHRvIHJlbW92ZSBsYXllciBmb3JtIGZpbHRlciAocmVtb3ZlIGxheWVyaWQgYW5kIGRhdGFpZCkgaWYgbWFwcGVkXG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihuZXdTdGF0ZSk7XG59O1xuXG4vKipcbiAqIFJlb3JkZXIgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gYWN0aW9uLm9yZGVyIGFuIGFycmF5IG9mIGxheWVyIGluZGV4ZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVvcmRlckxheWVyVXBkYXRlciA9IChzdGF0ZSwge29yZGVyfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxheWVyT3JkZXI6IG9yZGVyXG59KTtcblxuLyoqXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5rZXkgZGF0YXNldCBpZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVEYXRhc2V0VXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vIGV4dHJhY3QgZGF0YXNldCBrZXlcbiAgY29uc3Qge2tleTogZGF0YXNldEtleX0gPSBhY3Rpb247XG4gIGNvbnN0IHtkYXRhc2V0c30gPSBzdGF0ZTtcblxuICAvLyBjaGVjayBpZiBkYXRhc2V0IGlzIHByZXNlbnRcbiAgaWYgKCFkYXRhc2V0c1tkYXRhc2V0S2V5XSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gIGNvbnN0IHtcbiAgICBsYXllcnMsXG4gICAgZGF0YXNldHM6IHtbZGF0YXNldEtleV06IGRhdGFzZXQsIC4uLm5ld0RhdGFzZXRzfVxuICB9ID0gc3RhdGU7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICBjb25zdCBpbmRleGVzID0gbGF5ZXJzLnJlZHVjZSgobGlzdE9mSW5kZXhlcywgbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgaWYgKGxheWVyLmNvbmZpZy5kYXRhSWQgPT09IGRhdGFzZXRLZXkpIHtcbiAgICAgIGxpc3RPZkluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0T2ZJbmRleGVzO1xuICB9LCBbXSk7XG5cbiAgLy8gcmVtb3ZlIGxheWVycyBhbmQgZGF0YXNldHNcbiAgY29uc3Qge25ld1N0YXRlfSA9IGluZGV4ZXMucmVkdWNlKFxuICAgICh7bmV3U3RhdGU6IGN1cnJlbnRTdGF0ZSwgaW5kZXhDb3VudGVyfSwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBpZHggLSBpbmRleENvdW50ZXI7XG4gICAgICBjdXJyZW50U3RhdGUgPSByZW1vdmVMYXllclVwZGF0ZXIoY3VycmVudFN0YXRlLCB7aWR4OiBjdXJyZW50SW5kZXh9KTtcbiAgICAgIGluZGV4Q291bnRlcisrO1xuICAgICAgcmV0dXJuIHtuZXdTdGF0ZTogY3VycmVudFN0YXRlLCBpbmRleENvdW50ZXJ9O1xuICAgIH0sXG4gICAge25ld1N0YXRlOiB7Li4uc3RhdGUsIGRhdGFzZXRzOiBuZXdEYXRhc2V0c30sIGluZGV4Q291bnRlcjogMH1cbiAgKTtcblxuICAvLyByZW1vdmUgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJzID0gc3RhdGUuZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+ICFmaWx0ZXIuZGF0YUlkLmluY2x1ZGVzKGRhdGFzZXRLZXkpKTtcblxuICAvLyB1cGRhdGUgaW50ZXJhY3Rpb25Db25maWdcbiAgbGV0IHtpbnRlcmFjdGlvbkNvbmZpZ30gPSBzdGF0ZTtcbiAgY29uc3Qge3Rvb2x0aXB9ID0gaW50ZXJhY3Rpb25Db25maWc7XG4gIGlmICh0b29sdGlwKSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSB0b29sdGlwO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1tkYXRhc2V0S2V5XTogZmllbGRzLCAuLi5maWVsZHNUb1Nob3d9ID0gY29uZmlnLmZpZWxkc1RvU2hvdztcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgaW50ZXJhY3Rpb25Db25maWcgPSB7XG4gICAgICAuLi5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgIHRvb2x0aXA6IHsuLi50b29sdGlwLCBjb25maWc6IHsuLi5jb25maWcsIGZpZWxkc1RvU2hvd319XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7Li4ubmV3U3RhdGUsIGZpbHRlcnMsIGludGVyYWN0aW9uQ29uZmlnfTtcbn07XG5cbi8qKlxuICogdXBkYXRlIGxheWVyIGJsZW5kaW5nIG1vZGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ubW9kZSBvbmUgb2YgYGFkZGl0aXZlYCwgYG5vcm1hbGAgYW5kIGBzdWJ0cmFjdGl2ZWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxheWVyQmxlbmRpbmc6IGFjdGlvbi5tb2RlXG59KTtcblxuLyoqXG4gKiBEaXNwbGF5IGRhdGFzZXQgdGFibGUgaW4gYSBtb2RhbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhSWQgZGF0YXNldCBpZCB0byBzaG93IGluIHRhYmxlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dEYXRhc2V0VGFibGVVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBlZGl0aW5nRGF0YXNldDogYWN0aW9uLmRhdGFJZFxuICB9O1xufTtcblxuLyoqXG4gKiByZXNldCB2aXNTdGF0ZSB0byBpbml0aWFsIFN0YXRlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVzZXRNYXBDb25maWdVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uSU5JVElBTF9WSVNfU1RBVEUsXG4gIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcbiAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcbn0pO1xuXG4vKipcbiAqIFByb3BhZ2F0ZSBgdmlzU3RhdGVgIHJlZHVjZXIgd2l0aCBhIG5ldyBjb25maWd1cmF0aW9uLiBDdXJyZW50IGNvbmZpZyB3aWxsIGJlIG92ZXJyaWRlLlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkIG1hcCBjb25maWcgdG8gYmUgcHJvcGFnYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkLmNvbmZpZyBtYXAgY29uZmlnIHRvIGJlIHByb3BhZ2F0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucGF5bG9hZC5vcHRpb24ge2tlZXBFeGlzdGluZ0NvbmZpZzogdHJ1ZSB8IGZhbHNlfVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHtjb25maWcgPSB7fSwgb3B0aW9ucyA9IHt9fX0pID0+IHtcbiAgaWYgKCFjb25maWcudmlzU3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCB7XG4gICAgZmlsdGVycyxcbiAgICBsYXllcnMsXG4gICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgbGF5ZXJCbGVuZGluZyxcbiAgICBzcGxpdE1hcHMsXG4gICAgYW5pbWF0aW9uQ29uZmlnXG4gIH0gPSBjb25maWcudmlzU3RhdGU7XG5cbiAgY29uc3Qge2tlZXBFeGlzdGluZ0NvbmZpZ30gPSBvcHRpb25zO1xuXG4gIC8vIHJlc2V0IGNvbmZpZyBpZiBrZWVwRXhpc3RpbmdDb25maWcgaXMgZmFsc3lcbiAgbGV0IG1lcmdlZFN0YXRlID0gIWtlZXBFeGlzdGluZ0NvbmZpZyA/IHJlc2V0TWFwQ29uZmlnVXBkYXRlcihzdGF0ZSkgOiBzdGF0ZTtcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUxheWVycyhtZXJnZWRTdGF0ZSwgbGF5ZXJzKTtcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUZpbHRlcnMobWVyZ2VkU3RhdGUsIGZpbHRlcnMpO1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlSW50ZXJhY3Rpb25zKG1lcmdlZFN0YXRlLCBpbnRlcmFjdGlvbkNvbmZpZyk7XG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VMYXllckJsZW5kaW5nKG1lcmdlZFN0YXRlLCBsYXllckJsZW5kaW5nKTtcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZVNwbGl0TWFwcyhtZXJnZWRTdGF0ZSwgc3BsaXRNYXBzKTtcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUFuaW1hdGlvbkNvbmZpZyhtZXJnZWRTdGF0ZSwgYW5pbWF0aW9uQ29uZmlnKTtcblxuICByZXR1cm4gbWVyZ2VkU3RhdGU7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgaG92ZXIgZXZlbnQgd2l0aCBob3ZlcmVkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5pbmZvIE9iamVjdCBob3ZlcmVkLCByZXR1cm5lZCBieSBkZWNrLmdsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxheWVySG92ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBob3ZlckluZm86IGFjdGlvbi5pbmZvXG59KTtcblxuLyoqXG4gKiBUcmlnZ2VyIGxheWVyIGNsaWNrIGV2ZW50IHdpdGggY2xpY2tlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24uaW5mbyBPYmplY3QgY2xpY2tlZCwgcmV0dXJuZWQgYnkgZGVjay5nbFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsYXllckNsaWNrVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbW91c2VQb3M6IHN0YXRlLmludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZFxuICAgID8ge1xuICAgICAgICAuLi5zdGF0ZS5tb3VzZVBvcyxcbiAgICAgICAgcGlubmVkOiBzdGF0ZS5tb3VzZVBvcy5waW5uZWQgPyBudWxsIDogY2xvbmVEZWVwKHN0YXRlLm1vdXNlUG9zKVxuICAgICAgfVxuICAgIDogc3RhdGUubW91c2VQb3MsXG4gIGNsaWNrZWQ6IGFjdGlvbi5pbmZvICYmIGFjdGlvbi5pbmZvLnBpY2tlZCA/IGFjdGlvbi5pbmZvIDogbnVsbFxufSk7XG5cbi8qKlxuICogVHJpZ2dlciBtYXAgY2xpY2sgZXZlbnQsIHVuc2VsZWN0IGNsaWNrZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbWFwQ2xpY2tVcGRhdGVyID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGNsaWNrZWQ6IG51bGxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3VzZU1vdmVVcGRhdGVyID0gKHN0YXRlLCB7ZXZ0fSkgPT4ge1xuICBpZiAoT2JqZWN0LnZhbHVlcyhzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZykuc29tZShjb25maWcgPT4gY29uZmlnLmVuYWJsZWQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgLi4uc3RhdGUubW91c2VQb3MsXG4gICAgICAgIG1vdXNlUG9zaXRpb246IFsuLi5ldnQucG9pbnRdLFxuICAgICAgICBjb29yZGluYXRlOiBbLi4uZXZ0LmxuZ0xhdF1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBmb3IgYSBzcGxpdCBtYXBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfHVuZGVmaW5lZH0gYWN0aW9uLnBheWxvYWQgaW5kZXggb2YgdGhlIHNwbGl0IG1hcFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT5cbiAgc3RhdGUuc3BsaXRNYXBzICYmIHN0YXRlLnNwbGl0TWFwcy5sZW5ndGggPT09IDBcbiAgICA/IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vIG1heWJlIHdlIHNob3VsZCB1c2UgYW4gYXJyYXkgdG8gc3RvcmUgc3RhdGUgZm9yIGEgc2luZ2xlIG1hcCBhcyB3ZWxsXG4gICAgICAgIC8vIGlmIGN1cnJlbnQgbWFwcyBsZW5ndGggaXMgZXF1YWwgdG8gMCBpdCBtZWFucyB0aGF0IHdlIGFyZSBhYm91dCB0byBzcGxpdCB0aGUgdmlld1xuICAgICAgICBzcGxpdE1hcHM6IGNvbXB1dGVTcGxpdE1hcExheWVycyhzdGF0ZS5sYXllcnMpXG4gICAgICB9XG4gICAgOiBjbG9zZVNwZWNpZmljTWFwQXRJbmRleChzdGF0ZSwgYWN0aW9uKTtcblxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLm1hcEluZGV4IGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ubGF5ZXJJZCBpZCBvZiB0aGUgbGF5ZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyID0gKHN0YXRlLCB7bWFwSW5kZXgsIGxheWVySWR9KSA9PiB7XG4gIGNvbnN0IHtzcGxpdE1hcHN9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBzcGxpdE1hcHM6IHNwbGl0TWFwcy5tYXAoKHNtLCBpKSA9PlxuICAgICAgaSA9PT0gbWFwSW5kZXhcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi5zcGxpdE1hcHNbaV0sXG4gICAgICAgICAgICBsYXllcnM6IHtcbiAgICAgICAgICAgICAgLi4uc3BsaXRNYXBzW2ldLmxheWVycyxcbiAgICAgICAgICAgICAgLy8gaWYgbGF5ZXJJZCBub3QgaW4gbGF5ZXJzLCBzZXQgaXQgdG8gdmlzaWJsZVxuICAgICAgICAgICAgICBbbGF5ZXJJZF06ICFzcGxpdE1hcHNbaV0ubGF5ZXJzW2xheWVySWRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA6IHNtXG4gICAgKVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgbmV3IGRhdGFzZXQgdG8gYHZpc1N0YXRlYCwgd2l0aCBvcHRpb24gdG8gbG9hZCBhIG1hcCBjb25maWcgYWxvbmcgd2l0aCB0aGUgZGF0YXNldHNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0PnxPYmplY3R9IGFjdGlvbi5kYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5kYXRhc2V0cy5pbmZvIC1pbmZvIG9mIGEgZGF0YXNldFxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhc2V0cy5pbmZvLmlkIC0gaWQgb2YgdGhpcyBkYXRhc2V0LiBJZiBjb25maWcgaXMgZGVmaW5lZCwgYGlkYCBzaG91bGQgbWF0Y2hlcyB0aGUgYGRhdGFJZGAgaW4gY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhc2V0cy5pbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmRhdGFzZXRzLmRhdGEgLSAqKipyZXF1aXJlZCoqIFRoZSBkYXRhIG9iamVjdCwgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIDIgcHJvcGVydGllcyBgZmllbGRzYCBhbmQgYHJvd3NgXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGFjdGlvbi5kYXRhc2V0cy5kYXRhLmZpZWxkcyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2YgZmllbGRzLFxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhc2V0cy5kYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhY3Rpb24uZGF0YXNldHMuZGF0YS5yb3dzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiByb3dzLCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggYGZpZWxkc2AgYW5kIGByb3dzYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5vcHRpb25zIG9wdGlvbiBvYmplY3QgYHtjZW50ZXJNYXA6IHRydWUsIGtlZXBFeGlzdGluZ0NvbmZpZzogZmFsc2V9YFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5jb25maWcgbWFwIGNvbmZpZ1xuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXG5leHBvcnQgY29uc3QgdXBkYXRlVmlzRGF0YVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyBkYXRhc2V0cyBjYW4gYmUgYSBzaW5nbGUgZGF0YSBlbnRyaWVzIG9yIGFuIGFycmF5IG9mIG11bHRpcGxlIGRhdGEgZW50cmllc1xuICBjb25zdCB7Y29uZmlnLCBvcHRpb25zfSA9IGFjdGlvbjtcblxuICBjb25zdCBkYXRhc2V0cyA9IHRvQXJyYXkoYWN0aW9uLmRhdGFzZXRzKTtcblxuICBjb25zdCBuZXdEYXRhRW50cmllcyA9IGRhdGFzZXRzLnJlZHVjZShcbiAgICAoYWNjdSwge2luZm8gPSB7fSwgZGF0YX0pID0+ICh7XG4gICAgICAuLi5hY2N1LFxuICAgICAgLi4uKGNyZWF0ZU5ld0RhdGFFbnRyeSh7aW5mbywgZGF0YX0sIHN0YXRlLmRhdGFzZXRzKSB8fCB7fSlcbiAgICB9KSxcbiAgICB7fVxuICApO1xuXG4gIGlmICghT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLmxlbmd0aCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8vIGFwcGx5IGNvbmZpZyBpZiBwYXNzZWQgZnJvbSBhY3Rpb25cbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IGNvbmZpZ1xuICAgID8gcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUsIHtcbiAgICAgICAgcGF5bG9hZDoge2NvbmZpZywgb3B0aW9uc31cbiAgICAgIH0pXG4gICAgOiBzdGF0ZTtcblxuICBjb25zdCBzdGF0ZVdpdGhOZXdEYXRhID0ge1xuICAgIC4uLnByZXZpb3VzU3RhdGUsXG4gICAgZGF0YXNldHM6IHtcbiAgICAgIC4uLnByZXZpb3VzU3RhdGUuZGF0YXNldHMsXG4gICAgICAuLi5uZXdEYXRhRW50cmllc1xuICAgIH1cbiAgfTtcblxuICAvLyBwcmV2aW91c2x5IHNhdmVkIGNvbmZpZyBiZWZvcmUgZGF0YSBsb2FkZWRcbiAgY29uc3Qge1xuICAgIGZpbHRlclRvQmVNZXJnZWQgPSBbXSxcbiAgICBsYXllclRvQmVNZXJnZWQgPSBbXSxcbiAgICBpbnRlcmFjdGlvblRvQmVNZXJnZWQgPSB7fSxcbiAgICBzcGxpdE1hcHNUb0JlTWVyZ2VkID0gW11cbiAgfSA9IHN0YXRlV2l0aE5ld0RhdGE7XG5cbiAgLy8gV2UgbmVlZCB0byBtZXJnZSBsYXllcnMgYmVmb3JlIGZpbHRlcnMgYmVjYXVzZSBwb2x5Z29uIGZpbHRlcnMgcmVxdWlyZXMgbGF5ZXJzIHRvIGJlIGxvYWRlZFxuICBsZXQgbWVyZ2VkU3RhdGUgPSBtZXJnZUxheWVycyhzdGF0ZVdpdGhOZXdEYXRhLCBsYXllclRvQmVNZXJnZWQpO1xuXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VGaWx0ZXJzKG1lcmdlZFN0YXRlLCBmaWx0ZXJUb0JlTWVyZ2VkKTtcblxuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIHNhdmVkIHNwbGl0TWFwc1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlU3BsaXRNYXBzKG1lcmdlZFN0YXRlLCBzcGxpdE1hcHNUb0JlTWVyZ2VkKTtcblxuICBsZXQgbmV3TGF5ZXJzID0gbWVyZ2VkU3RhdGUubGF5ZXJzLmZpbHRlcihsID0+IGwuY29uZmlnLmRhdGFJZCBpbiBuZXdEYXRhRW50cmllcyk7XG5cbiAgaWYgKCFuZXdMYXllcnMubGVuZ3RoKSB7XG4gICAgLy8gbm8gbGF5ZXIgbWVyZ2VkLCBmaW5kIGRlZmF1bHRzXG4gICAgY29uc3QgcmVzdWx0ID0gYWRkRGVmYXVsdExheWVycyhtZXJnZWRTdGF0ZSwgbmV3RGF0YUVudHJpZXMpO1xuICAgIG1lcmdlZFN0YXRlID0gcmVzdWx0LnN0YXRlO1xuICAgIG5ld0xheWVycyA9IHJlc3VsdC5uZXdMYXllcnM7XG4gIH1cblxuICBpZiAobWVyZ2VkU3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIC8vIGlmIG1hcCBpcyBzcGxpdCwgYWRkIG5ldyBsYXllcnMgdG8gc3BsaXRNYXBzXG4gICAgbmV3TGF5ZXJzID0gbWVyZ2VkU3RhdGUubGF5ZXJzLmZpbHRlcihsID0+IGwuY29uZmlnLmRhdGFJZCBpbiBuZXdEYXRhRW50cmllcyk7XG4gICAgbWVyZ2VkU3RhdGUgPSB7XG4gICAgICAuLi5tZXJnZWRTdGF0ZSxcbiAgICAgIHNwbGl0TWFwczogYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChtZXJnZWRTdGF0ZS5zcGxpdE1hcHMsIG5ld0xheWVycylcbiAgICB9O1xuICB9XG5cbiAgLy8gbWVyZ2Ugc3RhdGUgd2l0aCBzYXZlZCBpbnRlcmFjdGlvbnNcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUludGVyYWN0aW9ucyhtZXJnZWRTdGF0ZSwgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkKTtcblxuICAvLyBpZiBubyB0b29sdGlwcyBtZXJnZWQgYWRkIGRlZmF1bHQgdG9vbHRpcHNcbiAgT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLmZvckVhY2goZGF0YUlkID0+IHtcbiAgICBjb25zdCB0b29sdGlwRmllbGRzID0gbWVyZ2VkU3RhdGUuaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF07XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRvb2x0aXBGaWVsZHMpIHx8ICF0b29sdGlwRmllbGRzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkU3RhdGUgPSBhZGREZWZhdWx0VG9vbHRpcHMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzW2RhdGFJZF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShtZXJnZWRTdGF0ZSwgT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpKTtcblxuICAvLyByZWdpc3RlciBsYXllciBhbmltYXRpb24gZG9tYWluLFxuICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBsYXllciBkYXRhIGlzIGNhbGN1bGF0ZWRcbiAgdXBkYXRlZFN0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHVwZGF0ZWRTdGF0ZSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWRTdGF0ZTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICogV2hlbiBhIHVzZXIgY2xpY2tzIG9uIHRoZSBzcGVjaWZpYyBtYXAgY2xvc2luZyBpY29uXG4gKiB0aGUgYXBwbGljYXRpb24gd2lsbCBjbG9zZSB0aGUgc2VsZWN0ZWQgbWFwXG4gKiBhbmQgd2lsbCBtZXJnZSB0aGUgcmVtYWluaW5nIG9uZSB3aXRoIHRoZSBnbG9iYWwgc3RhdGVcbiAqIFRPRE86IGkgdGhpbmsgaW4gdGhlIGZ1dHVyZSB0aGlzIGFjdGlvbiBzaG91bGQgYmUgY2FsbGVkIG1lcmdlIG1hcCBsYXllcnMgd2l0aCBnbG9iYWwgc2V0dGluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pIHtcbiAgLy8gcmV0cmlldmUgbGF5ZXJzIG1ldGEgZGF0YSBmcm9tIHRoZSByZW1haW5pbmcgbWFwIHRoYXQgd2UgbmVlZCB0byBrZWVwXG4gIGNvbnN0IGluZGV4VG9SZXRyaWV2ZSA9IDEgLSBhY3Rpb24ucGF5bG9hZDtcbiAgY29uc3QgbWFwTGF5ZXJzID0gc3RhdGUuc3BsaXRNYXBzW2luZGV4VG9SZXRyaWV2ZV0ubGF5ZXJzO1xuICBjb25zdCB7bGF5ZXJzfSA9IHN0YXRlO1xuXG4gIC8vIHVwZGF0ZSBsYXllciB2aXNpYmlsaXR5XG4gIGNvbnN0IG5ld0xheWVycyA9IGxheWVycy5tYXAobGF5ZXIgPT5cbiAgICAhbWFwTGF5ZXJzW2xheWVyLmlkXSAmJiBsYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgICA/IGxheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgICAgICAvLyBpZiBsYXllci5pZCBpcyBub3QgaW4gbWFwTGF5ZXJzLCBpdCBzaG91bGQgYmUgaW5WaXNpYmxlXG4gICAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgOiBsYXllclxuICApO1xuXG4gIC8vIGRlbGV0ZSBtYXBcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBzcGxpdE1hcHM6IFtdXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBmaWxlIGxvYWRpbmcgZGlzcGF0Y2ggYGFkZERhdGFUb01hcGAgaWYgc3VjY2VlZCwgb3IgYGxvYWRGaWxlc0VycmAgaWYgZmFpbGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGFjdGlvbi5maWxlcyBhcnJheSBvZiBmaWxlYmxvYlxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qge2ZpbGVzfSA9IGFjdGlvbjtcbiAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBmaWxlQ2FjaGUgPSBbXTtcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmlsZUxvYWRpbmc6IHRydWUsXG4gICAgICBmaWxlTG9hZGluZ1Byb2dyZXNzOiAwXG4gICAgfSxcbiAgICBtYWtlTG9hZEZpbGVUYXNrKGZpbGVzLmxlbmd0aCwgZmlsZXMsIGZpbGVDYWNoZSlcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VMb2FkRmlsZVRhc2sodG90YWxDb3VudCwgZmlsZXNUb0xvYWQsIGZpbGVDYWNoZSkge1xuICBjb25zdCBmaWxlID0gZmlsZXNUb0xvYWQucG9wKCk7XG5cbiAgcmV0dXJuIExPQURfRklMRV9UQVNLKHtmaWxlLCBmaWxlQ2FjaGV9KS5iaW1hcChcbiAgICAvLyBzdWNjZXNzXG4gICAgcmVzdWx0ID0+XG4gICAgICBsb2FkRmlsZVN1Y2Nlc3Moe1xuICAgICAgICBmaWxlQ2FjaGU6IHJlc3VsdCxcbiAgICAgICAgZmlsZXNUb0xvYWQ6IFsuLi5maWxlc1RvTG9hZF0sXG4gICAgICAgIHRvdGFsQ291bnRcbiAgICAgIH0pLFxuICAgIC8vIGVycm9yXG4gICAgbG9hZEZpbGVzRXJyXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRmlsZVN1Y2Nlc3NVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qge2ZpbGVDYWNoZSwgZmlsZXNUb0xvYWQgPSBbXSwgdG90YWxDb3VudH0gPSBhY3Rpb247XG5cbiAgLy8gc3RpbGwgbW9yZSB0byBsb2FkXG4gIGlmIChmaWxlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICBjb25zdCBmaWxlTG9hZGluZ1Byb2dyZXNzID0gKCh0b3RhbENvdW50IC0gZmlsZXNUb0xvYWQubGVuZ3RoKSAvIHRvdGFsQ291bnQpICogMTAwO1xuXG4gICAgcmV0dXJuIHdpdGhUYXNrKFxuICAgICAge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzc1xuICAgICAgfSxcbiAgICAgIG1ha2VMb2FkRmlsZVRhc2sodG90YWxDb3VudCwgZmlsZXNUb0xvYWQsIGZpbGVDYWNoZSlcbiAgICApO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gZmlsZUNhY2hlLnJlZHVjZShcbiAgICAoYWNjdSwgZmlsZSkgPT4ge1xuICAgICAgY29uc3Qge2RhdGEsIGluZm8gPSB7fX0gPSBmaWxlO1xuICAgICAgY29uc3Qge2Zvcm1hdH0gPSBpbmZvO1xuXG4gICAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgIT09IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbCkge1xuICAgICAgICAgIGNvbnN0IG5ld0RhdGFzZXQgPSB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICBpZDogZ2VuZXJhdGVIYXNoSWQoNCksXG4gICAgICAgICAgICAgIC4uLmluZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYWNjdS5kYXRhc2V0cy5wdXNoKG5ld0RhdGFzZXQpO1xuICAgICAgICAgIHJldHVybiBhY2N1O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhc2V0czogYWNjdS5kYXRhc2V0cy5jb25jYXQoZGF0YS5kYXRhc2V0cyksXG4gICAgICAgICAgLy8gd2UgbmVlZCB0byBkZWVwIG1lcmdlIHRoaXMgdGhpbmcgdW5sZXNzIHdlIGZpbmQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICAgICAgICAvLyB0aGlzIGNhc2Ugd2lsbCBvbmx5IGhhcHBlbiBpZiB3ZSBhbGxvdyB0byBsb2FkIG11bHRpcGxlIGtlcGxlcmdsIGpzb24gZmlsZXNcbiAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIC4uLmFjY3UuY29uZmlnLFxuICAgICAgICAgICAgLi4uKGRhdGEuY29uZmlnIHx8IHt9KVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH0sXG4gICAge2RhdGFzZXRzOiBbXSwgY29uZmlnOiB7fX1cbiAgKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNlbnRlck1hcDogIShyZXN1bHQuY29uZmlnICYmIHJlc3VsdC5jb25maWcubWFwU3RhdGUpXG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzczogMTAwXG4gICAgfSxcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IGFkZERhdGFUb01hcCh7Li4ucmVzdWx0LCBvcHRpb25zfSkpXG4gICk7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgbG9hZGluZyBmaWxlIGVycm9yXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0geyp9IGFjdGlvbi5lcnJvclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNFcnJVcGRhdGVyID0gKHN0YXRlLCB7ZXJyb3J9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICBmaWxlTG9hZGluZ0VycjogZXJyb3Jcbn0pO1xuXG4vKipcbiAqIFdoZW4gc2VsZWN0IGRhdGFzZXQgZm9yIGV4cG9ydCwgYXBwbHkgY3B1IGZpbHRlciB0byBzZWxlY3RlZCBkYXRhc2V0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24uZGF0YUlkIGRhdGFzZXQgaWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYXBwbHlDUFVGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCB7ZGF0YUlkfSkgPT4ge1xuICAvLyBhcHBseSBjcHVGaWx0ZXJcbiAgY29uc3QgZGF0YUlkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICByZXR1cm4gZGF0YUlkcy5yZWR1Y2UoKGFjY3UsIGlkKSA9PiBmaWx0ZXJEYXRhc2V0Q1BVKGFjY3UsIGlkKSwgc3RhdGUpO1xufTtcblxuLyoqXG4gKiBVc2VyIGlucHV0IHRvIHVwZGF0ZSB0aGUgaW5mbyBvZiB0aGUgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmluZm8ge3RpdGxlOiAnaGVsbG8nfVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRNYXBJbmZvVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbWFwSW5mbzoge1xuICAgIC4uLnN0YXRlLm1hcEluZm8sXG4gICAgLi4uYWN0aW9uLmluZm9cbiAgfVxufSk7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgQWxsIGxheWVyIGRvbWFpbiBhbmQgbGF5ZXIgZGF0YSBvZiBzdGF0ZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGRhdGFzZXRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRMYXllcnMoc3RhdGUsIGRhdGFzZXRzKSB7XG4gIGNvbnN0IGRlZmF1bHRMYXllcnMgPSBPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5yZWR1Y2UoXG4gICAgKGFjY3UsIGRhdGFzZXQpID0+IFsuLi5hY2N1LCAuLi4oZmluZERlZmF1bHRMYXllcihkYXRhc2V0LCBzdGF0ZS5sYXllckNsYXNzZXMpIHx8IFtdKV0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGxheWVyczogWy4uLnN0YXRlLmxheWVycywgLi4uZGVmYXVsdExheWVyc10sXG4gICAgICBsYXllck9yZGVyOiBbXG4gICAgICAgIC8vIHB1dCBuZXcgbGF5ZXJzIG9uIHRvcCBvZiBvbGQgb25lc1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJzLm1hcCgoXywgaSkgPT4gc3RhdGUubGF5ZXJzLmxlbmd0aCArIGkpLFxuICAgICAgICAuLi5zdGF0ZS5sYXllck9yZGVyXG4gICAgICBdXG4gICAgfSxcbiAgICBuZXdMYXllcnM6IGRlZmF1bHRMYXllcnNcbiAgfTtcbn1cblxuLyoqXG4gKiBoZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBkZWZhdWx0IHRvb2x0aXBzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRUb29sdGlwcyhzdGF0ZSwgZGF0YXNldCkge1xuICBjb25zdCB0b29sdGlwRmllbGRzID0gZmluZEZpZWxkc1RvU2hvdyhkYXRhc2V0KTtcbiAgY29uc3QgbWVyZ2VkID0ge1xuICAgIC4uLnN0YXRlLmludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmZpZWxkc1RvU2hvdyxcbiAgICAuLi50b29sdGlwRmllbGRzXG4gIH07XG5cbiAgcmV0dXJuIHNldChbJ2ludGVyYWN0aW9uQ29uZmlnJywgJ3Rvb2x0aXAnLCAnY29uZmlnJywgJ2ZpZWxkc1RvU2hvdyddLCBtZXJnZWQsIHN0YXRlKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIGxheWVyIGRvbWFpbnMgZm9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7QXJyYXl8QXJyYXk8c3RyaW5nPn0gZGF0YUlkIGRhdGFzZXQgaWQgb3IgYXJyYXkgb2YgZGF0YXNldCBpZHNcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGVkRmlsdGVyIGlmIGlzIGNhbGxlZCBieSBzZXRGaWx0ZXIsIHRoZSBmaWx0ZXIgdGhhdCBoYXMgdXBkYXRlZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEoc3RhdGUsIGRhdGFJZCwgdXBkYXRlZEZpbHRlcikge1xuICBjb25zdCBkYXRhSWRzID0gdHlwZW9mIGRhdGFJZCA9PT0gJ3N0cmluZycgPyBbZGF0YUlkXSA6IGRhdGFJZDtcbiAgY29uc3QgbmV3TGF5ZXJzID0gW107XG4gIGNvbnN0IG5ld0xheWVyRGF0YSA9IFtdO1xuXG4gIHN0YXRlLmxheWVycy5mb3JFYWNoKChvbGRMYXllciwgaSkgPT4ge1xuICAgIGlmIChvbGRMYXllci5jb25maWcuZGF0YUlkICYmIGRhdGFJZHMuaW5jbHVkZXMob2xkTGF5ZXIuY29uZmlnLmRhdGFJZCkpIHtcbiAgICAgIC8vIE5vIG5lZWQgdG8gcmVjYWxjdWxhdGUgbGF5ZXIgZG9tYWluIGlmIGZpbHRlciBoYXMgZml4ZWQgZG9tYWluXG4gICAgICBjb25zdCBuZXdMYXllciA9XG4gICAgICAgIHVwZGF0ZWRGaWx0ZXIgJiYgdXBkYXRlZEZpbHRlci5maXhlZERvbWFpblxuICAgICAgICAgID8gb2xkTGF5ZXJcbiAgICAgICAgICA6IG9sZExheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzLCB1cGRhdGVkRmlsdGVyKTtcblxuICAgICAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgc3RhdGUubGF5ZXJEYXRhW2ldKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ0xheWVyRGF0YScsIGxheWVyRGF0YSk7XG4gICAgICBuZXdMYXllcnMucHVzaChsYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChsYXllckRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXllcnMucHVzaChvbGRMYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChzdGF0ZS5sYXllckRhdGFbaV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXG4gICAgbGF5ZXJEYXRhOiBuZXdMYXllckRhdGFcbiAgfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbmltYXRpb25Eb21haW4oc3RhdGUpIHtcbiAgLy8gbWVyZ2UgYWxsIGFuaW1hdGFibGUgbGF5ZXIgZG9tYWluIGFuZCB1cGRhdGUgZ2xvYmFsIGNvbmZpZ1xuICBjb25zdCBhbmltYXRhYmxlTGF5ZXJzID0gc3RhdGUubGF5ZXJzLmZpbHRlcihcbiAgICBsID0+XG4gICAgICBsLmNvbmZpZy5pc1Zpc2libGUgJiZcbiAgICAgIGwuY29uZmlnLmFuaW1hdGlvbiAmJlxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkobC5hbmltYXRpb25Eb21haW4pXG4gICk7XG5cbiAgaWYgKCFhbmltYXRhYmxlTGF5ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGFuaW1hdGlvbkNvbmZpZzogZGVmYXVsdEFuaW1hdGlvbkNvbmZpZ1xuICAgIH07XG4gIH1cblxuICBjb25zdCBtZXJnZWREb21haW4gPSBhbmltYXRhYmxlTGF5ZXJzLnJlZHVjZShcbiAgICAoYWNjdSwgbGF5ZXIpID0+IFtcbiAgICAgIE1hdGgubWluKGFjY3VbMF0sIGxheWVyLmFuaW1hdGlvbkRvbWFpblswXSksXG4gICAgICBNYXRoLm1heChhY2N1WzFdLCBsYXllci5hbmltYXRpb25Eb21haW5bMV0pXG4gICAgXSxcbiAgICBbTnVtYmVyKEluZmluaXR5KSwgLUluZmluaXR5XVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICBjdXJyZW50VGltZTogaXNJblJhbmdlKHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZSwgbWVyZ2VkRG9tYWluKVxuICAgICAgICA/IHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZVxuICAgICAgICA6IG1lcmdlZERvbWFpblswXSxcbiAgICAgIGRvbWFpbjogbWVyZ2VkRG9tYWluXG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdHVzIG9mIHRoZSBlZGl0b3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgdG8gc2V0IHRvIGVkaXRvciB0b1xuICogQHJldHVybiB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEVkaXRvck1vZGVVcGRhdGVyID0gKHN0YXRlLCB7bW9kZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBlZGl0b3I6IHtcbiAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgbW9kZSxcbiAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgfVxufSk7XG5cbi8vIGNvbnN0IGZlYXR1cmVUb0ZpbHRlclZhbHVlID0gKGZlYXR1cmUpID0+ICh7Li4uZmVhdHVyZSwgaWQ6IGZlYXR1cmUuaWR9KTtcbi8qKlxuICogVXBkYXRlIGVkaXRvciBmZWF0dXJlc1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge1tPYmplY3RdfSBmZWF0dXJlcyB0byBzdG9yZVxuICogQHJldHVybiB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZlYXR1cmVzVXBkYXRlcihzdGF0ZSwge2ZlYXR1cmVzID0gW119KSB7XG4gIGNvbnN0IGxhc3RGZWF0dXJlID0gZmVhdHVyZXMubGVuZ3RoICYmIGZlYXR1cmVzW2ZlYXR1cmVzLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgLy8gb25seSBzYXZlIG5vbmUgZmlsdGVyIGZlYXR1cmVzIHRvIGVkaXRvclxuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLmZpbHRlcihmID0+ICFnZXRGaWx0ZXJJZEluRmVhdHVyZShmKSksXG4gICAgICBtb2RlOiBsYXN0RmVhdHVyZSAmJiBsYXN0RmVhdHVyZS5wcm9wZXJ0aWVzLmlzQ2xvc2VkID8gRURJVE9SX01PREVTLkVESVQgOiBzdGF0ZS5lZGl0b3IubW9kZVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXRyaWV2ZSBleGlzdGluZyBmZWF0dXJlXG4gIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmV9ID0gc3RhdGUuZWRpdG9yO1xuXG4gIC8vIElmIG5vIGZlYXR1cmUgaXMgc2VsZWN0ZWQgd2UgY2FuIHNpbXBseSByZXR1cm4gc2luY2Ugbm8gb3BlcmF0aW9uc1xuICBpZiAoIXNlbGVjdGVkRmVhdHVyZSkge1xuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfVxuXG4gIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBmZWF0dXJlIGhhcyBjaGFuZ2VkXG4gIGNvbnN0IGZlYXR1cmUgPSBmZWF0dXJlcy5maW5kKGYgPT4gZi5pZCA9PT0gc2VsZWN0ZWRGZWF0dXJlLmlkKTtcblxuICAvLyBpZiBmZWF0dXJlIGlzIHBhcnQgb2YgYSBmaWx0ZXJcbiAgY29uc3QgZmlsdGVySWQgPSBmZWF0dXJlICYmIGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpO1xuICBpZiAoZmlsdGVySWQpIHtcbiAgICBjb25zdCBmZWF0dXJlVmFsdWUgPSBmZWF0dXJlVG9GaWx0ZXJWYWx1ZShmZWF0dXJlLCBmaWx0ZXJJZCk7XG4gICAgY29uc3QgZmlsdGVySWR4ID0gc3RhdGUuZmlsdGVycy5maW5kSW5kZXgoZmlsID0+IGZpbC5pZCA9PT0gZmlsdGVySWQpO1xuICAgIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7XG4gICAgICBpZHg6IGZpbHRlcklkeCxcbiAgICAgIHByb3A6ICd2YWx1ZScsXG4gICAgICB2YWx1ZTogZmVhdHVyZVZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IHNlbGVjdGVkIGZlYXR1cmVcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7W09iamVjdF19IGZlYXR1cmVzIHRvIHN0b3JlXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5leHRTdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciA9IChzdGF0ZSwge2ZlYXR1cmV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZWRpdG9yOiB7XG4gICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogZmVhdHVyZVxuICB9XG59KTtcblxuLyoqXG4gKiBEZWxldGUgZXhpc3RpbmcgZmVhdHVyZSBmcm9tIGZpbHRlcnNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdGVkRmVhdHVyZUlkIGZlYXR1cmUgdG8gZGVsZXRlXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRmVhdHVyZVVwZGF0ZXIoc3RhdGUsIHtmZWF0dXJlfSkge1xuICBpZiAoIWZlYXR1cmUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICAgIH1cbiAgfTtcblxuICBpZiAoZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSkpIHtcbiAgICBjb25zdCBmaWx0ZXJJZHggPSBuZXdTdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmID0+IGYuaWQgPT09IGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpKTtcblxuICAgIHJldHVybiBmaWx0ZXJJZHggPiAtMSA/IHJlbW92ZUZpbHRlclVwZGF0ZXIobmV3U3RhdGUsIHtpZHg6IGZpbHRlcklkeH0pIDogbmV3U3RhdGU7XG4gIH1cblxuICAvLyBtb2RpZnkgZWRpdG9yIG9iamVjdFxuICBjb25zdCBuZXdFZGl0b3IgPSB7XG4gICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgIGZlYXR1cmVzOiBzdGF0ZS5lZGl0b3IuZmVhdHVyZXMuZmlsdGVyKGYgPT4gZi5pZCAhPT0gZmVhdHVyZS5pZCksXG4gICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBlZGl0b3I6IG5ld0VkaXRvclxuICB9O1xufVxuXG4vKipcbiAqIFRvZ2dsZSBmZWF0dXJlIGFzIGxheWVyIGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXlsb2FkLmZlYXR1cmVJZFxuICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWQubGF5ZXJcbiAqIEByZXR1cm4ge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyKHN0YXRlLCBwYXlsb2FkKSB7XG4gIGNvbnN0IHtsYXllciwgZmVhdHVyZX0gPSBwYXlsb2FkO1xuICBjb25zdCBmaWx0ZXJJZCA9IGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpO1xuXG4gIC8vIGxldCBuZXdGaWx0ZXIgPSBudWxsO1xuICBsZXQgZmlsdGVySWR4O1xuICBsZXQgbmV3TGF5ZXJJZCA9IFtsYXllci5pZF07XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICAvLyBJZiBwb2x5Z29uIGZpbHRlciBhbHJlYWR5IGV4aXN0cywgd2UgbmVlZCB0byBmaW5kIG91dCBpZiB0aGUgY3VycmVudCBsYXllciBpcyBhbHJlYWR5IGluY2x1ZGVkXG4gIGlmIChmaWx0ZXJJZCkge1xuICAgIGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGYgPT4gZi5pZCA9PT0gZmlsdGVySWQpO1xuXG4gICAgaWYgKCFzdGF0ZS5maWx0ZXJzW2ZpbHRlcklkeF0pIHtcbiAgICAgIC8vIHdoYXQgaWYgZmlsdGVyIGRvZXNuJ3QgZXhpc3Q/Li4uIG5vdCBwb3NzaWJsZS5cbiAgICAgIC8vIGJlY2F1c2UgZmVhdHVyZXMgaW4gdGhlIGVkaXRvciBpcyBwYXNzZWQgaW4gZnJvbSBmaWx0ZXJzIGFuZCBlZGl0b3JzLlxuICAgICAgLy8gYnV0IHdlIHdpbGwgbW92ZSB0aGlzIGZlYXR1cmUgYmFjayB0byBlZGl0b3IganVzdCBpbiBjYXNlXG4gICAgICBjb25zdCBub25lRmlsdGVyRmVhdHVyZSA9IHtcbiAgICAgICAgLi4uZmVhdHVyZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIC4uLmZlYXR1cmUucHJvcGVydGllcyxcbiAgICAgICAgICBmaWx0ZXJJZDogbnVsbFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgICAgIGZlYXR1cmVzOiBbLi4uc3RhdGUuZWRpdG9yLmZlYXR1cmVzLCBub25lRmlsdGVyRmVhdHVyZV0sXG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBub25lRmlsdGVyRmVhdHVyZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHtsYXllcklkfSA9IHN0YXRlLmZpbHRlcnNbZmlsdGVySWR4XSB8fCBbXTtcbiAgICBjb25zdCBpc0xheWVySW5jbHVkZWQgPSBsYXllcklkLmluY2x1ZGVzKGxheWVyLmlkKTtcbiAgICBjb25zdCBmaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2ZpbHRlcklkeF07XG5cbiAgICBuZXdMYXllcklkID0gaXNMYXllckluY2x1ZGVkXG4gICAgICA/IC8vIGlmIGxheWVyIGlzIGluY2x1ZGVkLCByZW1vdmUgaXRcbiAgICAgICAgZmlsdGVyLmxheWVySWQuZmlsdGVyKGwgPT4gbCAhPT0gbGF5ZXIuaWQpXG4gICAgICA6IFsuLi5maWx0ZXIubGF5ZXJJZCwgbGF5ZXIuaWRdO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIHdlIGhhdmVuJ3QgY3JlYXRlIHRoZSBwb2x5Z29uIGZpbHRlciwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3RmlsdGVyID0gZ2VuZXJhdGVQb2x5Z29uRmlsdGVyKFtdLCBmZWF0dXJlKTtcbiAgICBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmxlbmd0aDtcblxuICAgIC8vIGFkZCBmZWF0dXJlLCByZW1vdmUgZmVhdHVyZSBmcm9tIGVpZHRvclxuICAgIG5ld1N0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBmaWx0ZXJzOiBbLi4uc3RhdGUuZmlsdGVycywgbmV3RmlsdGVyXSxcbiAgICAgIGVkaXRvcjoge1xuICAgICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICAgIGZlYXR1cmVzOiBzdGF0ZS5lZGl0b3IuZmVhdHVyZXMuZmlsdGVyKGYgPT4gZi5pZCAhPT0gZmVhdHVyZS5pZCksXG4gICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbmV3RmlsdGVyLnZhbHVlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7XG4gICAgaWR4OiBmaWx0ZXJJZHgsXG4gICAgcHJvcDogJ2xheWVySWQnLFxuICAgIHZhbHVlOiBuZXdMYXllcklkXG4gIH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBlZGl0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0gdmlzaWJsZVxuICogQHJldHVybiB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUVkaXRvclZpc2liaWxpdHkoc3RhdGUsIHt2aXNpYmxlfSkge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgdmlzaWJsZTogIXN0YXRlLmVkaXRvci52aXNpYmxlXG4gICAgfVxuICB9O1xufVxuIl19