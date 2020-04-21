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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsImRlZmF1bHRBbmltYXRpb25Db25maWciLCJkb21haW4iLCJjdXJyZW50VGltZSIsInNwZWVkIiwiREVGQVVMVF9FRElUT1IiLCJtb2RlIiwiRURJVE9SX01PREVTIiwiRFJBV19QT0xZR09OIiwiZmVhdHVyZXMiLCJzZWxlY3RlZEZlYXR1cmUiLCJ2aXNpYmxlIiwiSU5JVElBTF9WSVNfU1RBVEUiLCJtYXBJbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxheWVycyIsImxheWVyRGF0YSIsImxheWVyVG9CZU1lcmdlZCIsImxheWVyT3JkZXIiLCJmaWx0ZXJzIiwiZmlsdGVyVG9CZU1lcmdlZCIsImRhdGFzZXRzIiwiZWRpdGluZ0RhdGFzZXQiLCJ1bmRlZmluZWQiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsImxheWVyQmxlbmRpbmciLCJob3ZlckluZm8iLCJjbGlja2VkIiwibW91c2VQb3MiLCJzcGxpdE1hcHMiLCJsYXllckNsYXNzZXMiLCJMYXllckNsYXNzZXMiLCJhbmltYXRpb25Db25maWciLCJlZGl0b3IiLCJ1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEiLCJzdGF0ZSIsImxheWVyIiwiaWR4IiwibWFwIiwibHlyIiwiaSIsImQiLCJ1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlIiwibmV3U3RhdGUiLCJsZW5ndGgiLCJjb25maWciLCJpc1Zpc2libGUiLCJhbmltYXRpb24iLCJlbmFibGVkIiwidXBkYXRlQW5pbWF0aW9uRG9tYWluIiwibGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyIiwiYWN0aW9uIiwib2xkTGF5ZXIiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJuZXdDb25maWciLCJuZXdMYXllciIsInVwZGF0ZUxheWVyQ29uZmlnIiwic2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhIiwib2xkTGF5ZXJEYXRhIiwidXBkYXRlTGF5ZXJEYXRhUmVzdWx0IiwiYWRkT3JSZW1vdmVUZXh0TGFiZWxzIiwibmV3RmllbGRzIiwidGV4dExhYmVsIiwibmV3VGV4dExhYmVsIiwic2xpY2UiLCJjdXJyZW50RmllbGRzIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJhZGRGaWVsZHMiLCJmIiwiaW5jbHVkZXMiLCJkZWxldGVGaWVsZHMiLCJmaW5kIiwiZmQiLCJERUZBVUxUX1RFWFRfTEFCRUwiLCJhZiIsInVwZGF0ZVRleHRMYWJlbFByb3BBbmRWYWx1ZSIsInByb3AiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5Iiwic3BsaWNlIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2VVcGRhdGVyIiwibGF5ZXJUeXBlQ2hhbmdlVXBkYXRlciIsIm5ld1R5cGUiLCJvbGRJZCIsIkNvbnNvbGUiLCJlcnJvciIsImFzc2lnbkNvbmZpZ1RvTGF5ZXIiLCJ2aXNDb25maWdTZXR0aW5ncyIsInVwZGF0ZUxheWVyRG9tYWluIiwic2V0dGluZ3MiLCJvbGRMYXllck1hcCIsIm90aGVyTGF5ZXJzIiwibGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlciIsImNoYW5uZWwiLCJkYXRhc2V0IiwiZGF0YUlkIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsIiwibGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyIiwibmV3VmlzQ29uZmlnIiwidmlzQ29uZmlnIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyIiwiY29udHJhZGljdCIsImZvckVhY2giLCJrIiwic2V0RmlsdGVyVXBkYXRlciIsInZhbHVlSW5kZXgiLCJvbGRGaWx0ZXIiLCJuZXdGaWx0ZXIiLCJkYXRhc2V0SWRzIiwiRklMVEVSX1VQREFURVJfUFJPUFMiLCJkYXRhc2V0SWQiLCJtZXJnZURvbWFpbiIsInVwZGF0ZWRGaWx0ZXIiLCJuZXdEYXRhc2V0IiwiZ3B1IiwibGF5ZXJJZCIsImxheWVySWREaWZmZXJlbmNlIiwibGF5ZXJEYXRhSWRzIiwibGlkIiwibmV3RGF0YUlkcyIsImVubGFyZ2VkRmlsdGVyIiwiZW5sYXJnZWQiLCJkYXRhc2V0SWRzVG9GaWx0ZXIiLCJMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFMiLCJmaWx0ZXJlZERhdGFzZXRzIiwidXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhIiwic2V0RmlsdGVyUGxvdFVwZGF0ZXIiLCJuZXdQcm9wIiwicGxvdFR5cGUiLCJhbGxEYXRhIiwiYWRkRmlsdGVyVXBkYXRlciIsImxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIiLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyIiwiaXNBbmltYXRpbmciLCJ1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJ1cGRhdGVBbmltYXRpb25UaW1lVXBkYXRlciIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwiZW5sYXJnZUZpbHRlclVwZGF0ZXIiLCJpc0VubGFyZ2VkIiwidG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIiLCJhc3NpZ24iLCJjb25jYXQiLCJyZW1vdmVGaWx0ZXJVcGRhdGVyIiwibmV3RmlsdGVycyIsIm5ld0VkaXRvciIsImFkZExheWVyVXBkYXRlciIsImRlZmF1bHREYXRhc2V0IiwiTGF5ZXIiLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyVXBkYXRlciIsImxheWVyVG9SZW1vdmUiLCJuZXdNYXBzIiwicGlkIiwiaXNMYXllckhvdmVyZWQiLCJyZW9yZGVyTGF5ZXJVcGRhdGVyIiwib3JkZXIiLCJyZW1vdmVEYXRhc2V0VXBkYXRlciIsImRhdGFzZXRLZXkiLCJrZXkiLCJuZXdEYXRhc2V0cyIsImluZGV4ZXMiLCJyZWR1Y2UiLCJsaXN0T2ZJbmRleGVzIiwiaW5kZXgiLCJwdXNoIiwiY3VycmVudFN0YXRlIiwiaW5kZXhDb3VudGVyIiwiY3VycmVudEluZGV4IiwidG9vbHRpcCIsImZpZWxkc1RvU2hvdyIsImZpZWxkcyIsInVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyIiwic2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIiLCJyZXNldE1hcENvbmZpZ1VwZGF0ZXIiLCJpbml0aWFsU3RhdGUiLCJyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciIsInBheWxvYWQiLCJvcHRpb25zIiwidmlzU3RhdGUiLCJrZWVwRXhpc3RpbmdDb25maWciLCJtZXJnZWRTdGF0ZSIsImxheWVySG92ZXJVcGRhdGVyIiwiaW5mbyIsImxheWVyQ2xpY2tVcGRhdGVyIiwiY29vcmRpbmF0ZSIsInBpbm5lZCIsInBpY2tlZCIsIm1hcENsaWNrVXBkYXRlciIsIm1vdXNlTW92ZVVwZGF0ZXIiLCJldnQiLCJ2YWx1ZXMiLCJzb21lIiwibW91c2VQb3NpdGlvbiIsInBvaW50IiwibG5nTGF0IiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwiY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcFVwZGF0ZXIiLCJtYXBJbmRleCIsInNtIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJuZXdEYXRhRW50cmllcyIsImFjY3UiLCJkYXRhIiwicHJldmlvdXNTdGF0ZSIsInN0YXRlV2l0aE5ld0RhdGEiLCJzcGxpdE1hcHNUb0JlTWVyZ2VkIiwibmV3TGF5ZXJzIiwicmVzdWx0IiwiYWRkRGVmYXVsdExheWVycyIsInRvb2x0aXBGaWVsZHMiLCJBcnJheSIsImlzQXJyYXkiLCJhZGREZWZhdWx0VG9vbHRpcHMiLCJ1cGRhdGVkU3RhdGUiLCJpbmRleFRvUmV0cmlldmUiLCJtYXBMYXllcnMiLCJsb2FkRmlsZXNVcGRhdGVyIiwiZmlsZXMiLCJmaWxlQ2FjaGUiLCJmaWxlTG9hZGluZyIsImZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJtYWtlTG9hZEZpbGVUYXNrIiwidG90YWxDb3VudCIsImZpbGVzVG9Mb2FkIiwiZmlsZSIsInBvcCIsImJpbWFwIiwibG9hZEZpbGVzRXJyIiwibG9hZEZpbGVTdWNjZXNzVXBkYXRlciIsImZvcm1hdCIsIkRBVEFTRVRfRk9STUFUUyIsImtlcGxlcmdsIiwiY2VudGVyTWFwIiwibWFwU3RhdGUiLCJfIiwibG9hZEZpbGVzRXJyVXBkYXRlciIsImZpbGVMb2FkaW5nRXJyIiwiYXBwbHlDUFVGaWx0ZXJVcGRhdGVyIiwiZGF0YUlkcyIsInNldE1hcEluZm9VcGRhdGVyIiwiZGVmYXVsdExheWVycyIsIm1lcmdlZCIsIm5ld0xheWVyRGF0YSIsImZpeGVkRG9tYWluIiwiYW5pbWF0YWJsZUxheWVycyIsImFuaW1hdGlvbkRvbWFpbiIsIm1lcmdlZERvbWFpbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJJbmZpbml0eSIsInNldEVkaXRvck1vZGVVcGRhdGVyIiwic2V0RmVhdHVyZXNVcGRhdGVyIiwibGFzdEZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiaXNDbG9zZWQiLCJFRElUIiwiZmVhdHVyZSIsImZpbHRlcklkIiwiZmVhdHVyZVZhbHVlIiwiZmlsdGVySWR4IiwiZmlsIiwic2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciIsImRlbGV0ZUZlYXR1cmVVcGRhdGVyIiwic2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlciIsIm5ld0xheWVySWQiLCJub25lRmlsdGVyRmVhdHVyZSIsImlzTGF5ZXJJbmNsdWRlZCIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFHQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFlQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFTQTs7QUFNQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHLElBQXpCO0FBQ0E7O0FBRU8sSUFBTUMsc0JB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U3FOLE9BQU8sQ0FBQ3JOLEVBQXJCO0FBQUEsU0FBOUIsQ0FGTjtBQUdKL0MsUUFBQUEsZUFBZSxFQUFFMkcsU0FBUyxDQUFDOUI7QUFIdkI7QUFIQSxNQUFSO0FBU0Q7O0FBRUQsU0FBTzJCLGdCQUFnQixDQUFDckUsUUFBRCxFQUFXO0FBQ2hDTixJQUFBQSxHQUFHLEVBQUUwTyxTQUQyQjtBQUVoQzNMLElBQUFBLElBQUksRUFBRSxTQUYwQjtBQUdoQ0MsSUFBQUEsS0FBSyxFQUFFK0w7QUFIeUIsR0FBWCxDQUF2QjtBQUtEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0csc0JBQVQsQ0FBZ0NwUCxLQUFoQyxVQUFrRDtBQUFBLE1BQVYxQixPQUFVLFVBQVZBLE9BQVU7QUFDdkQsMkJBQ0swQixLQURMO0FBRUVGLElBQUFBLE1BQU0sb0JBQ0RFLEtBQUssQ0FBQ0YsTUFETDtBQUVKeEIsTUFBQUEsT0FBTyxFQUFFLENBQUMwQixLQUFLLENBQUNGLE1BQU4sQ0FBYXhCO0FBRm5CO0FBRlI7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcclxuaW1wb3J0IHtkaXNhYmxlU3RhY2tDYXB0dXJpbmcsIHdpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcclxuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xyXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xyXG5pbXBvcnQgeG9yIGZyb20gJ2xvZGFzaC54b3InO1xyXG5cclxuLy8gVGFza3NcclxuaW1wb3J0IHtMT0FEX0ZJTEVfVEFTSywgQUNUSU9OX1RBU0t9IGZyb20gJ3Rhc2tzL3Rhc2tzJztcclxuXHJcbi8vIEFjdGlvbnNcclxuaW1wb3J0IHtsb2FkRmlsZXNFcnIsIGxvYWRGaWxlU3VjY2Vzc30gZnJvbSAnYWN0aW9ucy92aXMtc3RhdGUtYWN0aW9ucyc7XHJcbmltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdhY3Rpb25zJztcclxuXHJcbi8vIFV0aWxzXHJcbmltcG9ydCB7Z2V0RGVmYXVsdEludGVyYWN0aW9uLCBmaW5kRmllbGRzVG9TaG93fSBmcm9tICd1dGlscy9pbnRlcmFjdGlvbi11dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgRklMVEVSX1VQREFURVJfUFJPUFMsXHJcbiAgTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTLFxyXG4gIGFwcGx5RmlsdGVyRmllbGROYW1lLFxyXG4gIGFwcGx5RmlsdGVyc1RvRGF0YXNldHMsXHJcbiAgZ2VuZXJhdGVQb2x5Z29uRmlsdGVyLFxyXG4gIGZpbHRlckRhdGFzZXRDUFUsXHJcbiAgZ2V0RGVmYXVsdEZpbHRlcixcclxuICBnZXRGaWx0ZXJQbG90LFxyXG4gIGdldERlZmF1bHRGaWx0ZXJQbG90VHlwZSxcclxuICBpc0luUmFuZ2UsXHJcbiAgZ2V0RmlsdGVySWRJbkZlYXR1cmUsXHJcbiAgZmVhdHVyZVRvRmlsdGVyVmFsdWUsXHJcbiAgdXBkYXRlRmlsdGVyRGF0YUlkXHJcbn0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcclxuaW1wb3J0IHtzZXRGaWx0ZXJHcHVNb2RlLCBhc3NpZ25HcHVDaGFubmVsfSBmcm9tICd1dGlscy9ncHUtZmlsdGVyLXV0aWxzJztcclxuaW1wb3J0IHtjcmVhdGVOZXdEYXRhRW50cnl9IGZyb20gJ3V0aWxzL2RhdGFzZXQtdXRpbHMnO1xyXG5pbXBvcnQge3NldCwgdG9BcnJheSwgZ2VuZXJhdGVIYXNoSWR9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCB7ZmluZERlZmF1bHRMYXllciwgY2FsY3VsYXRlTGF5ZXJEYXRhfSBmcm9tICd1dGlscy9sYXllci11dGlscy9sYXllci11dGlscyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIG1lcmdlRmlsdGVycyxcclxuICBtZXJnZUxheWVycyxcclxuICBtZXJnZUludGVyYWN0aW9ucyxcclxuICBtZXJnZUxheWVyQmxlbmRpbmcsXHJcbiAgbWVyZ2VTcGxpdE1hcHMsXHJcbiAgbWVyZ2VBbmltYXRpb25Db25maWdcclxufSBmcm9tICcuL3Zpcy1zdGF0ZS1tZXJnZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBhZGROZXdMYXllcnNUb1NwbGl0TWFwLFxyXG4gIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwcyxcclxuICBjb21wdXRlU3BsaXRNYXBMYXllcnNcclxufSBmcm9tICd1dGlscy9zcGxpdC1tYXAtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtMYXllciwgTGF5ZXJDbGFzc2VzfSBmcm9tICdsYXllcnMnO1xyXG5pbXBvcnQge0RFRkFVTFRfVEVYVF9MQUJFTH0gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xyXG5pbXBvcnQge0VESVRPUl9NT0RFUywgREFUQVNFVF9GT1JNQVRTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG4vLyByZWFjdC1wYWxtXHJcbi8vIGRpc2FibGUgY2FwdHVyZSBleGNlcHRpb24gZm9yIHJlYWN0LXBhbG0gY2FsbCB0byB3aXRoVGFza1xyXG5kaXNhYmxlU3RhY2tDYXB0dXJpbmcoKTtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGVycyBmb3IgYHZpc1N0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXHJcbiAqIFJlYWQgbW9yZSBhYm91dCBbVXNpbmcgdXBkYXRlcnNdKC4uL2FkdmFuY2VkLXVzYWdlL3VzaW5nLXVwZGF0ZXJzLm1kKVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHt2aXNTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xyXG4gKiAvLyBSb290IFJlZHVjZXJcclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcclxuICogIGFwcDogYXBwUmVkdWNlclxyXG4gKiB9KTtcclxuICpcclxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcclxuICogICAgICByZXR1cm4ge1xyXG4gKiAgICAgICAgLi4uc3RhdGUsXHJcbiAqICAgICAgICBrZXBsZXJHbDoge1xyXG4gKiAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbCxcclxuICogICAgICAgICAgZm9vOiB7XHJcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcclxuICogICAgICAgICAgICAgdmlzU3RhdGU6IHZpc1N0YXRlVXBkYXRlcnMuZW5sYXJnZUZpbHRlclVwZGF0ZXIoXHJcbiAqICAgICAgICAgICAgICAgc3RhdGUua2VwbGVyR2wuZm9vLnZpc1N0YXRlLFxyXG4gKiAgICAgICAgICAgICAgIHtpZHg6IDB9XHJcbiAqICAgICAgICAgICAgIClcclxuICogICAgICAgICAgfVxyXG4gKiAgICAgICAgfVxyXG4gKiAgICAgIH07XHJcbiAqICB9XHJcbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XHJcbiAqIH07XHJcbiAqXHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IHZpc1N0YXRlVXBkYXRlcnMgPSBudWxsO1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEFuaW1hdGlvbkNvbmZpZyA9IHtcclxuICBkb21haW46IG51bGwsXHJcbiAgY3VycmVudFRpbWU6IG51bGwsXHJcbiAgc3BlZWQ6IDFcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VESVRPUiA9IHtcclxuICBtb2RlOiBFRElUT1JfTU9ERVMuRFJBV19QT0xZR09OLFxyXG4gIGZlYXR1cmVzOiBbXSxcclxuICBzZWxlY3RlZEZlYXR1cmU6IG51bGwsXHJcbiAgdmlzaWJsZTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgaW5pdGlhbCBgdmlzU3RhdGVgXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBsYXllcnNcclxuICogQHByb3BlcnR5IHtBcnJheX0gbGF5ZXJEYXRhXHJcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGxheWVyVG9CZU1lcmdlZFxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBsYXllck9yZGVyXHJcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGZpbHRlcnNcclxuICogQHByb3BlcnR5IHtBcnJheX0gZmlsdGVyVG9CZU1lcmdlZFxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBkYXRhc2V0c1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZWRpdGluZ0RhdGFzZXRcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGludGVyYWN0aW9uQ29uZmlnXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBpbnRlcmFjdGlvblRvQmVNZXJnZWRcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxheWVyQmxlbmRpbmdcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGhvdmVySW5mb1xyXG4gKiBAcHJvcGVydHkge09iamVjdH0gY2xpY2tlZFxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbW91c2VQb3NcclxuICogQHByb3BlcnR5IHtBcnJheX0gc3BsaXRNYXBzIC0gYSBsaXN0IG9mIG9iamVjdHMgb2YgbGF5ZXIgYXZhaWxhYmlsaXRpZXMgYW5kIHZpc2liaWxpdGllcyBmb3IgZWFjaCBtYXBcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGxheWVyQ2xhc3Nlc1xyXG4gKiBAcHJvcGVydHkge09iamVjdH0gYW5pbWF0aW9uQ29uZmlnXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBlZGl0b3JcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfVklTX1NUQVRFID0ge1xyXG4gIC8vIG1hcCBpbmZvXHJcbiAgbWFwSW5mbzoge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnXHJcbiAgfSxcclxuICAvLyBsYXllcnNcclxuICBsYXllcnM6IFtdLFxyXG4gIGxheWVyRGF0YTogW10sXHJcbiAgbGF5ZXJUb0JlTWVyZ2VkOiBbXSxcclxuICBsYXllck9yZGVyOiBbXSxcclxuXHJcbiAgLy8gZmlsdGVyc1xyXG4gIGZpbHRlcnM6IFtdLFxyXG4gIGZpbHRlclRvQmVNZXJnZWQ6IFtdLFxyXG5cclxuICAvLyBhIGNvbGxlY3Rpb24gb2YgbXVsdGlwbGUgZGF0YXNldFxyXG4gIGRhdGFzZXRzOiB7fSxcclxuICBlZGl0aW5nRGF0YXNldDogdW5kZWZpbmVkLFxyXG5cclxuICBpbnRlcmFjdGlvbkNvbmZpZzogZ2V0RGVmYXVsdEludGVyYWN0aW9uKCksXHJcbiAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkOiB1bmRlZmluZWQsXHJcblxyXG4gIGxheWVyQmxlbmRpbmc6ICdub3JtYWwnLFxyXG4gIGhvdmVySW5mbzogdW5kZWZpbmVkLFxyXG4gIGNsaWNrZWQ6IHVuZGVmaW5lZCxcclxuICBtb3VzZVBvczoge30sXHJcblxyXG4gIC8vIHRoaXMgaXMgdXNlZCB3aGVuIHVzZXIgc3BsaXQgbWFwc1xyXG4gIHNwbGl0TWFwczogW1xyXG4gICAgLy8gdGhpcyB3aWxsIGNvbnRhaW4gYSBsaXN0IG9mIG9iamVjdHMgdG9cclxuICAgIC8vIGRlc2NyaWJlIHRoZSBzdGF0ZSBvZiBsYXllciBhdmFpbGFiaWxpdHkgYW5kIHZpc2liaWxpdHkgZm9yIGVhY2ggbWFwXHJcbiAgICAvLyBbXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICAgbGF5ZXJzOiB7bGF5ZXJfaWQ6IHRydWUgfCBmYWxzZX1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gXVxyXG4gIF0sXHJcbiAgLy9cclxuICAvLyBkZWZhdWx0cyBsYXllciBjbGFzc2VzXHJcbiAgbGF5ZXJDbGFzc2VzOiBMYXllckNsYXNzZXMsXHJcblxyXG4gIC8vIGRlZmF1bHQgYW5pbWF0aW9uXHJcbiAgLy8gdGltZSBpbiB1bml4IHRpbWVzdGFtcCAobWlsbGlzZWNvbmRzKSAodGhlIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBVbml4IEVwb2NoKVxyXG4gIGFuaW1hdGlvbkNvbmZpZzogZGVmYXVsdEFuaW1hdGlvbkNvbmZpZyxcclxuXHJcbiAgZWRpdG9yOiBERUZBVUxUX0VESVRPUlxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSkge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxheWVyczogc3RhdGUubGF5ZXJzLm1hcCgobHlyLCBpKSA9PiAoaSA9PT0gaWR4ID8gbGF5ZXIgOiBseXIpKSxcclxuICAgIGxheWVyRGF0YTogbGF5ZXJEYXRhXHJcbiAgICAgID8gc3RhdGUubGF5ZXJEYXRhLm1hcCgoZCwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyRGF0YSA6IGQpKVxyXG4gICAgICA6IHN0YXRlLmxheWVyRGF0YVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlKHN0YXRlLCBsYXllcikge1xyXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xyXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XHJcbiAgICBuZXdTdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHNwbGl0TWFwczogbGF5ZXIuY29uZmlnLmlzVmlzaWJsZVxyXG4gICAgICAgID8gYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzdGF0ZS5zcGxpdE1hcHMsIGxheWVyKVxyXG4gICAgICAgIDogcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCkge1xyXG4gICAgbmV3U3RhdGUgPSB1cGRhdGVBbmltYXRpb25Eb21haW4oc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm9sZExheWVyIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5uZXdDb25maWcgbmV3IGNvbmZpZ1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHtvbGRMYXllcn0gPSBhY3Rpb247XHJcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcclxuICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKGFjdGlvbi5uZXdDb25maWcpO1xyXG4gIGxldCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKGFjdGlvbi5uZXdDb25maWcpO1xyXG5cclxuICBsZXQgbGF5ZXJEYXRhO1xyXG5cclxuICAvLyBsZXQgbmV3TGF5ZXI7XHJcbiAgaWYgKG5ld0xheWVyLnNob3VsZENhbGN1bGF0ZUxheWVyRGF0YShwcm9wcykpIHtcclxuICAgIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xyXG4gICAgY29uc3QgdXBkYXRlTGF5ZXJEYXRhUmVzdWx0ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcclxuXHJcbiAgICBsYXllckRhdGEgPSB1cGRhdGVMYXllckRhdGFSZXN1bHQubGF5ZXJEYXRhO1xyXG4gICAgbmV3TGF5ZXIgPSB1cGRhdGVMYXllckRhdGFSZXN1bHQubGF5ZXI7XHJcbiAgfVxyXG5cclxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcclxuICBpZiAoJ2lzVmlzaWJsZScgaW4gYWN0aW9uLm5ld0NvbmZpZykge1xyXG4gICAgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlKHN0YXRlLCBuZXdMYXllcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKG5ld1N0YXRlLCB7XHJcbiAgICBsYXllcjogbmV3TGF5ZXIsXHJcbiAgICBsYXllckRhdGEsXHJcbiAgICBpZHhcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT3JSZW1vdmVUZXh0TGFiZWxzKG5ld0ZpZWxkcywgdGV4dExhYmVsKSB7XHJcbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xyXG5cclxuICBjb25zdCBjdXJyZW50RmllbGRzID0gdGV4dExhYmVsLm1hcCh0bCA9PiB0bC5maWVsZCAmJiB0bC5maWVsZC5uYW1lKS5maWx0ZXIoZCA9PiBkKTtcclxuXHJcbiAgY29uc3QgYWRkRmllbGRzID0gbmV3RmllbGRzLmZpbHRlcihmID0+ICFjdXJyZW50RmllbGRzLmluY2x1ZGVzKGYubmFtZSkpO1xyXG4gIGNvbnN0IGRlbGV0ZUZpZWxkcyA9IGN1cnJlbnRGaWVsZHMuZmlsdGVyKGYgPT4gIW5ld0ZpZWxkcy5maW5kKGZkID0+IGZkLm5hbWUgPT09IGYpKTtcclxuXHJcbiAgLy8gZGVsZXRlXHJcbiAgbmV3VGV4dExhYmVsID0gbmV3VGV4dExhYmVsLmZpbHRlcih0bCA9PiB0bC5maWVsZCAmJiAhZGVsZXRlRmllbGRzLmluY2x1ZGVzKHRsLmZpZWxkLm5hbWUpKTtcclxuICBuZXdUZXh0TGFiZWwgPSAhbmV3VGV4dExhYmVsLmxlbmd0aCA/IFtERUZBVUxUX1RFWFRfTEFCRUxdIDogbmV3VGV4dExhYmVsO1xyXG5cclxuICAvLyBhZGRcclxuICBuZXdUZXh0TGFiZWwgPSBbXHJcbiAgICAuLi5uZXdUZXh0TGFiZWwuZmlsdGVyKHRsID0+IHRsLmZpZWxkKSxcclxuICAgIC4uLmFkZEZpZWxkcy5tYXAoYWYgPT4gKHtcclxuICAgICAgLi4uREVGQVVMVF9URVhUX0xBQkVMLFxyXG4gICAgICBmaWVsZDogYWZcclxuICAgIH0pKVxyXG4gIF07XHJcblxyXG4gIHJldHVybiBuZXdUZXh0TGFiZWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRleHRMYWJlbFByb3BBbmRWYWx1ZShpZHgsIHByb3AsIHZhbHVlLCB0ZXh0TGFiZWwpIHtcclxuICBpZiAoIXRleHRMYWJlbFtpZHhdLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICByZXR1cm4gdGV4dExhYmVsO1xyXG4gIH1cclxuXHJcbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xyXG5cclxuICBpZiAocHJvcCAmJiAodmFsdWUgfHwgdGV4dExhYmVsLmxlbmd0aCA9PT0gMSkpIHtcclxuICAgIG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5tYXAoKHRsLCBpKSA9PiAoaSA9PT0gaWR4ID8gey4uLnRsLCBbcHJvcF06IHZhbHVlfSA6IHRsKSk7XHJcbiAgfSBlbHNlIGlmIChwcm9wID09PSAnZmllbGQnICYmIHZhbHVlID09PSBudWxsICYmIHRleHRMYWJlbC5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyByZW1vdmUgbGFiZWwgd2hlbiBmaWVsZCB2YWx1ZSBpcyBzZXQgdG8gbnVsbFxyXG4gICAgbmV3VGV4dExhYmVsLnNwbGljZShpZHgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1RleHRMYWJlbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3Qge29sZExheWVyLCBpZHgsIHByb3AsIHZhbHVlfSA9IGFjdGlvbjtcclxuICBjb25zdCB7dGV4dExhYmVsfSA9IG9sZExheWVyLmNvbmZpZztcclxuXHJcbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xyXG4gIGlmICghdGV4dExhYmVsW2lkeF0gJiYgaWR4ID09PSB0ZXh0TGFiZWwubGVuZ3RoKSB7XHJcbiAgICAvLyBpZiBpZHggaXMgc2V0IHRvIGxlbmd0aCwgYWRkIGVtcHR5IHRleHQgbGFiZWxcclxuICAgIG5ld1RleHRMYWJlbCA9IFsuLi50ZXh0TGFiZWwsIERFRkFVTFRfVEVYVF9MQUJFTF07XHJcbiAgfVxyXG5cclxuICBpZiAoaWR4ID09PSAnYWxsJyAmJiBwcm9wID09PSAnZmllbGRzJykge1xyXG4gICAgbmV3VGV4dExhYmVsID0gYWRkT3JSZW1vdmVUZXh0TGFiZWxzKHZhbHVlLCB0ZXh0TGFiZWwpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuZXdUZXh0TGFiZWwgPSB1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUoaWR4LCBwcm9wLCB2YWx1ZSwgbmV3VGV4dExhYmVsKTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSB0ZXh0IGxhYmVsIHByb3AgYW5kIHZhbHVlXHJcbiAgcmV0dXJuIGxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwge1xyXG4gICAgb2xkTGF5ZXIsXHJcbiAgICBuZXdDb25maWc6IHt0ZXh0TGFiZWw6IG5ld1RleHRMYWJlbH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5vbGRMYXllciBsYXllciB0byBiZSB1cGRhdGVkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ubmV3VHlwZSBuZXcgdHlwZVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHtvbGRMYXllciwgbmV3VHlwZX0gPSBhY3Rpb247XHJcbiAgaWYgKCFvbGRMYXllcikge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICBjb25zdCBvbGRJZCA9IG9sZExheWVyLmlkO1xyXG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRJZCk7XHJcblxyXG4gIGlmICghc3RhdGUubGF5ZXJDbGFzc2VzW25ld1R5cGVdKSB7XHJcbiAgICBDb25zb2xlLmVycm9yKGAke25ld1R5cGV9IGlzIG5vdCBhIHZhbGlkIGxheWVyIHR5cGVgKTtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIGdldCBhIG1pbnQgbGF5ZXIsIHdpdGggbmV3IGlkIGFuZCB0eXBlXHJcbiAgLy8gYmVjYXVzZSBkZWNrLmdsIHVzZXMgaWQgdG8gbWF0Y2ggYmV0d2VlbiBuZXcgYW5kIG9sZCBsYXllci5cclxuICAvLyBJZiB0eXBlIGhhcyBjaGFuZ2VkIGJ1dCBpZCBpcyB0aGUgc2FtZSwgaXQgd2lsbCBicmVha1xyXG4gIGNvbnN0IG5ld0xheWVyID0gbmV3IHN0YXRlLmxheWVyQ2xhc3Nlc1tuZXdUeXBlXSgpO1xyXG5cclxuICBuZXdMYXllci5hc3NpZ25Db25maWdUb0xheWVyKG9sZExheWVyLmNvbmZpZywgb2xkTGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MpO1xyXG5cclxuICAvLyBpZiAobmV3TGF5ZXIuY29uZmlnLmRhdGFJZCkge1xyXG4gIC8vICAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW25ld0xheWVyLmNvbmZpZy5kYXRhSWRdO1xyXG4gIC8vICAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oZGF0YXNldCk7XHJcbiAgLy8gfVxyXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcclxuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlKTtcclxuICBsZXQgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcclxuXHJcbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCB8fCBvbGRMYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcclxuICAgIG5ld1N0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKG5ld1N0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSBzcGxpdE1hcCBsYXllciBpZFxyXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XHJcbiAgICBuZXdTdGF0ZSA9IHtcclxuICAgICAgLi4ubmV3U3RhdGUsXHJcbiAgICAgIHNwbGl0TWFwczogbmV3U3RhdGUuc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgY29uc3Qge1tvbGRJZF06IG9sZExheWVyTWFwLCAuLi5vdGhlckxheWVyc30gPSBzZXR0aW5ncy5sYXllcnM7XHJcbiAgICAgICAgcmV0dXJuIG9sZElkIGluIHNldHRpbmdzLmxheWVyc1xyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgbGF5ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5vdGhlckxheWVycyxcclxuICAgICAgICAgICAgICAgIFtsYXllci5pZF06IG9sZExheWVyTWFwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHNldHRpbmdzO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBsYXllciB2aXN1YWwgY2hhbm5lbFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm9sZExheWVyIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5uZXdDb25maWcgbmV3IHZpc3VhbCBjaGFubmVsIGNvbmZpZ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmNoYW5uZWwgY2hhbm5lbCB0byBiZSB1cGRhdGVkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3Qge29sZExheWVyLCBuZXdDb25maWcsIGNoYW5uZWx9ID0gYWN0aW9uO1xyXG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tvbGRMYXllci5jb25maWcuZGF0YUlkXTtcclxuXHJcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcclxuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKG5ld0NvbmZpZyk7XHJcblxyXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbChkYXRhc2V0LCBjaGFubmVsKTtcclxuXHJcbiAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XHJcbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIGB2aXNDb25maWdgXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ub2xkTGF5ZXIgbGF5ZXIgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm5ld1Zpc0NvbmZpZyBuZXcgdmlzQ29uZmlnIGFzIGEga2V5IHZhbHVlIG1hcDogZS5nLiBge29wYWNpdHk6IDAuOH1gXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBjb25zdCB7b2xkTGF5ZXJ9ID0gYWN0aW9uO1xyXG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XHJcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhhY3Rpb24ubmV3VmlzQ29uZmlnKTtcclxuICBjb25zdCBuZXdWaXNDb25maWcgPSB7XHJcbiAgICAuLi5vbGRMYXllci5jb25maWcudmlzQ29uZmlnLFxyXG4gICAgLi4uYWN0aW9uLm5ld1Zpc0NvbmZpZ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe3Zpc0NvbmZpZzogbmV3VmlzQ29uZmlnfSk7XHJcblxyXG4gIGlmIChuZXdMYXllci5zaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpKSB7XHJcbiAgICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcclxuICAgIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSk7XHJcbiAgICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXI6IG5ld0xheWVyLCBpZHh9KTtcclxufVxyXG5cclxuLyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBgaW50ZXJhY3Rpb25Db25maWdgXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24uY29uZmlnIG5ldyBjb25maWcgYXMga2V5IHZhbHVlIG1hcDogYHt0b29sdGlwOiB7ZW5hYmxlZDogdHJ1ZX19YFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3Qge2NvbmZpZ30gPSBhY3Rpb247XHJcblxyXG4gIGNvbnN0IGludGVyYWN0aW9uQ29uZmlnID0ge1xyXG4gICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWcsXHJcbiAgICAuLi57W2NvbmZpZy5pZF06IGNvbmZpZ31cclxuICB9O1xyXG5cclxuICAvLyBEb24ndCBlbmFibGUgdG9vbHRpcCBhbmQgYnJ1c2ggYXQgdGhlIHNhbWUgdGltZVxyXG4gIC8vIGJ1dCBjb29yZGluYXRlcyBjYW4gYmUgc2hvd24gYXQgYWxsIHRpbWVcclxuICBjb25zdCBjb250cmFkaWN0ID0gWydicnVzaCcsICd0b29sdGlwJ107XHJcblxyXG4gIGlmIChcclxuICAgIGNvbnRyYWRpY3QuaW5jbHVkZXMoY29uZmlnLmlkKSAmJlxyXG4gICAgY29uZmlnLmVuYWJsZWQgJiZcclxuICAgICFzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1tjb25maWcuaWRdLmVuYWJsZWRcclxuICApIHtcclxuICAgIC8vIG9ubHkgZW5hYmxlIG9uZSBpbnRlcmFjdGlvbiBhdCBhIHRpbWVcclxuICAgIGNvbnRyYWRpY3QuZm9yRWFjaChrID0+IHtcclxuICAgICAgaWYgKGsgIT09IGNvbmZpZy5pZCkge1xyXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnW2tdID0gey4uLmludGVyYWN0aW9uQ29uZmlnW2tdLCBlbmFibGVkOiBmYWxzZX07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgaW50ZXJhY3Rpb25Db25maWdcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeCBgaWR4YCBvZiBmaWx0ZXIgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnByb3AgYHByb3BgIG9mIGZpbHRlciwgZSxnLCBgZGF0YUlkYCwgYG5hbWVgLCBgdmFsdWVgXHJcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uLnZhbHVlIG5ldyB2YWx1ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldElkIHVzZWQgd2hlbiB1cGRhdGluZyBhIHByb3AgKGRhdGFJZCwgbmFtZSkgdGhhdCBjYW4gYmUgbGlua2VkIHRvIG11bHRpcGxlIGRhdGFzZXRzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3Qge2lkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXggPSAwfSA9IGFjdGlvbjtcclxuXHJcbiAgY29uc3Qgb2xkRmlsdGVyID0gc3RhdGUuZmlsdGVyc1tpZHhdO1xyXG4gIGxldCBuZXdGaWx0ZXIgPSBzZXQoW3Byb3BdLCB2YWx1ZSwgb2xkRmlsdGVyKTtcclxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgY29uc3Qge2RhdGFJZH0gPSBuZXdGaWx0ZXI7XHJcblxyXG4gIC8vIEVuc3VyaW5nIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICBsZXQgZGF0YXNldElkcyA9IHRvQXJyYXkoZGF0YUlkKTtcclxuXHJcbiAgc3dpdGNoIChwcm9wKSB7XHJcbiAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBpZiB3ZSB1cGRhdGUgZGF0YUlkLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIHR3byBjYXNlczpcclxuICAgIC8vIDEuIGRhdGFJZCBpcyBlbXB0eTogY3JlYXRlIGEgZGVmYXVsdCBmaWx0ZXJcclxuICAgIC8vIDIuIEFkZCBhIG5ldyBkYXRhc2V0IGlkXHJcbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLmRhdGFJZDpcclxuICAgICAgLy8gaWYgdHJ5aW5nIHRvIHVwZGF0ZSBmaWx0ZXIgZGF0YUlkLiBjcmVhdGUgYW4gZW1wdHkgbmV3IGZpbHRlclxyXG4gICAgICBuZXdGaWx0ZXIgPSB1cGRhdGVGaWx0ZXJEYXRhSWQoZGF0YUlkKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGSUxURVJfVVBEQVRFUl9QUk9QUy5uYW1lOlxyXG4gICAgICAvLyB3ZSBhcmUgc3VwcG9ydGluZyB0aGUgY3VycmVudCBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIC8vIFRPRE86IE5leHQgUFIgZm9yIFVJIGZpbHRlciBuYW1lIHdpbGwgb25seSB1cGRhdGUgZmlsdGVyIG5hbWUgYnV0IGl0IHdvbid0IGhhdmUgc2lkZSBlZmZlY3RzXHJcbiAgICAgIC8vIHdlIGFyZSBnb25uYSB1c2UgcGFpciBvZiBkYXRhc2V0cyBhbmQgZmllbGRJZHggdG8gdXBkYXRlIHRoZSBmaWx0ZXJcclxuICAgICAgY29uc3QgZGF0YXNldElkID0gbmV3RmlsdGVyLmRhdGFJZFt2YWx1ZUluZGV4XTtcclxuICAgICAgY29uc3Qge2ZpbHRlcjogdXBkYXRlZEZpbHRlciwgZGF0YXNldDogbmV3RGF0YXNldH0gPSBhcHBseUZpbHRlckZpZWxkTmFtZShcclxuICAgICAgICBuZXdGaWx0ZXIsXHJcbiAgICAgICAgc3RhdGUuZGF0YXNldHNbZGF0YXNldElkXSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICB2YWx1ZUluZGV4LFxyXG4gICAgICAgIHttZXJnZURvbWFpbjogZmFsc2V9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghdXBkYXRlZEZpbHRlcikge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlZEZpbHRlcjtcclxuXHJcbiAgICAgIGlmIChuZXdGaWx0ZXIuZ3B1KSB7XHJcbiAgICAgICAgbmV3RmlsdGVyID0gc2V0RmlsdGVyR3B1TW9kZShuZXdGaWx0ZXIsIHN0YXRlLmZpbHRlcnMpO1xyXG4gICAgICAgIG5ld0ZpbHRlciA9IGFzc2lnbkdwdUNoYW5uZWwobmV3RmlsdGVyLCBzdGF0ZS5maWx0ZXJzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cycsIGRhdGFzZXRJZF0sIG5ld0RhdGFzZXQsIHN0YXRlKTtcclxuXHJcbiAgICAgIC8vIG9ubHkgZmlsdGVyIHRoZSBjdXJyZW50IGRhdGFzZXRcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLmxheWVySWQ6XHJcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIG9ubHkgZGF0YXNldElkL3MgaWYgd2UgaGF2ZSBhZGRlZC9yZW1vdmVkIGxheWVyc1xyXG4gICAgICAvLyAtIGNoZWNrIGZvciBsYXllcklkIGNoYW5nZXMgKFhPUiB3b3JrcyBiZWNhdXNlIG9mIHN0cmluZyB2YWx1ZXMpXHJcbiAgICAgIC8vIGlmIG5vIGRpZmZlcmVuY2VzIGJldHdlZW4gbGF5ZXJJZHMsIGRvbid0IGRvIGFueSBmaWx0ZXJpbmdcclxuICAgICAgY29uc3QgbGF5ZXJJZERpZmZlcmVuY2UgPSB4b3IobmV3RmlsdGVyLmxheWVySWQsIG9sZEZpbHRlci5sYXllcklkKTtcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyRGF0YUlkcyA9IHVuaXEoXHJcbiAgICAgICAgbGF5ZXJJZERpZmZlcmVuY2VcclxuICAgICAgICAgIC5tYXAobGlkID0+XHJcbiAgICAgICAgICAgIGdldChcclxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXHJcbiAgICAgICAgICAgICAgWydjb25maWcnLCAnZGF0YUlkJ11cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLmZpbHRlcihkID0+IGQpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBvbmx5IGZpbHRlciBkYXRhc2V0c0lkc1xyXG4gICAgICBkYXRhc2V0SWRzID0gbGF5ZXJEYXRhSWRzO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIG5ld0ZpbHRlciBkYXRhSWRzXHJcbiAgICAgIGNvbnN0IG5ld0RhdGFJZHMgPSB1bmlxKFxyXG4gICAgICAgIG5ld0ZpbHRlci5sYXllcklkXHJcbiAgICAgICAgICAubWFwKGxpZCA9PlxyXG4gICAgICAgICAgICBnZXQoXHJcbiAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBsaWQpLFxyXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbmV3RmlsdGVyID0ge1xyXG4gICAgICAgIC4uLm5ld0ZpbHRlcixcclxuICAgICAgICBkYXRhSWQ6IG5ld0RhdGFJZHNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmxhcmdlZEZpbHRlciA9IHN0YXRlLmZpbHRlcnMuZmluZChmID0+IGYuZW5sYXJnZWQpO1xyXG5cclxuICBpZiAoZW5sYXJnZWRGaWx0ZXIgJiYgZW5sYXJnZWRGaWx0ZXIuaWQgIT09IG5ld0ZpbHRlci5pZCkge1xyXG4gICAgLy8gdGhlcmUgc2hvdWxkIGJlIG9ubHkgb25lIGVubGFyZ2VkIGZpbHRlclxyXG4gICAgbmV3RmlsdGVyLmVubGFyZ2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBzYXZlIG5ldyBmaWx0ZXJzIHRvIG5ld1N0YXRlXHJcbiAgbmV3U3RhdGUgPSBzZXQoWydmaWx0ZXJzJywgaWR4XSwgbmV3RmlsdGVyLCBuZXdTdGF0ZSk7XHJcblxyXG4gIC8vIGlmIHdlIGFyZSBjdXJyZW50bHkgc2V0dGluZyBhIHByb3AgdGhhdCBvbmx5IHJlcXVpcmVzIHRvIGZpbHRlciB0aGUgY3VycmVudFxyXG4gIC8vIGRhdGFzZXQgd2Ugd2lsbCBwYXNzIG9ubHkgdGhlIGN1cnJlbnQgZGF0YXNldCB0byBhcHBseUZpbHRlcnNUb0RhdGFzZXRzIGFuZFxyXG4gIC8vIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YSBvdGhlcndpc2Ugd2UgcGFzcyB0aGUgYWxsIGxpc3Qgb2YgZGF0YXNldHMgYXMgZGVmaW5lZCBpbiBkYXRhSWRcclxuICBjb25zdCBkYXRhc2V0SWRzVG9GaWx0ZXIgPSBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFNbcHJvcF1cclxuICAgID8gW2RhdGFzZXRJZHNbdmFsdWVJbmRleF1dXHJcbiAgICA6IGRhdGFzZXRJZHM7XHJcblxyXG4gIC8vIGZpbHRlciBkYXRhXHJcbiAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoXHJcbiAgICBkYXRhc2V0SWRzVG9GaWx0ZXIsXHJcbiAgICBuZXdTdGF0ZS5kYXRhc2V0cyxcclxuICAgIG5ld1N0YXRlLmZpbHRlcnMsXHJcbiAgICBuZXdTdGF0ZS5sYXllcnNcclxuICApO1xyXG5cclxuICBuZXdTdGF0ZSA9IHNldChbJ2RhdGFzZXRzJ10sIGZpbHRlcmVkRGF0YXNldHMsIG5ld1N0YXRlKTtcclxuICAvLyBkYXRhSWQgaXMgYW4gYXJyYXlcclxuICAvLyBwYXNzIG9ubHkgdGhlIGRhdGFzZXQgd2UgbmVlZCB0byB1cGRhdGVcclxuICBuZXdTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YXNldElkc1RvRmlsdGVyLCBuZXdGaWx0ZXIpO1xyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHhcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5uZXdQcm9wIGtleSB2YWx1ZSBtYXBwaW5nIG9mIG5ldyBwcm9wIGB7eUF4aXM6ICdoaXN0b2dyYW0nfWBcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRGaWx0ZXJQbG90VXBkYXRlciA9IChzdGF0ZSwge2lkeCwgbmV3UHJvcH0pID0+IHtcclxuICBsZXQgbmV3RmlsdGVyID0gey4uLnN0YXRlLmZpbHRlcnNbaWR4XSwgLi4ubmV3UHJvcH07XHJcbiAgY29uc3QgcHJvcCA9IE9iamVjdC5rZXlzKG5ld1Byb3ApWzBdO1xyXG4gIGlmIChwcm9wID09PSAneUF4aXMnKSB7XHJcbiAgICBjb25zdCBwbG90VHlwZSA9IGdldERlZmF1bHRGaWx0ZXJQbG90VHlwZShuZXdGaWx0ZXIpO1xyXG5cclxuICAgIGlmIChwbG90VHlwZSkge1xyXG4gICAgICBuZXdGaWx0ZXIgPSB7XHJcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxyXG4gICAgICAgIC4uLmdldEZpbHRlclBsb3Qoey4uLm5ld0ZpbHRlciwgcGxvdFR5cGV9LCBzdGF0ZS5kYXRhc2V0c1tuZXdGaWx0ZXIuZGF0YUlkXS5hbGxEYXRhKSxcclxuICAgICAgICBwbG90VHlwZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBpZHggPyBuZXdGaWx0ZXIgOiBmKSlcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIG5ldyBmaWx0ZXJcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhSWQgZGF0YXNldCBgaWRgIHRoaXMgbmV3IGZpbHRlciBpcyBhc3NvY2lhdGVkIHdpdGhcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGRGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XHJcbiAgIWFjdGlvbi5kYXRhSWRcclxuICAgID8gc3RhdGVcclxuICAgIDoge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZpbHRlcnM6IFsuLi5zdGF0ZS5maWx0ZXJzLCBnZXREZWZhdWx0RmlsdGVyKGFjdGlvbi5kYXRhSWQpXVxyXG4gICAgICB9O1xyXG5cclxuLyoqXHJcbiAqIFNldCBsYXllciBjb2xvciBwYWxldHRlIHVpIHN0YXRlXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucHJvcFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm5ld0NvbmZpZ1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIgPSAoc3RhdGUsIHtvbGRMYXllciwgcHJvcCwgbmV3Q29uZmlnfSkgPT4ge1xyXG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb2xvclVJKHByb3AsIG5ld0NvbmZpZyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbGF5ZXJzOiBzdGF0ZS5sYXllcnMubWFwKGwgPT4gKGwuaWQgPT09IG9sZExheWVyLmlkID8gbmV3TGF5ZXIgOiBsKSlcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFN0YXJ0IGFuZCBlbmQgZmlsdGVyIGFuaW1hdGlvblxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeCBpZHggb2YgZmlsdGVyXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBpc0FuaW1hdGluZzogIWYuaXNBbmltYXRpbmd9IDogZikpXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIENoYW5nZSBmaWx0ZXIgYW5pbWF0aW9uIHNwZWVkXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uaWR4ICBgaWR4YCBvZiBmaWx0ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5zcGVlZCBgc3BlZWRgIHRvIGNoYW5nZSBpdCB0by4gYHNwZWVkYCBpcyBhIG11bHRpcGxpZXJcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGFjdGlvbi5pZHggPyB7Li4uZiwgc3BlZWQ6IGFjdGlvbi5zcGVlZH0gOiBmKSlcclxufSk7XHJcblxyXG4vKipcclxuICogUmVzZXQgYW5pbWF0aW9uIGNvbmZpZyBjdXJyZW50IHRpbWUgdG8gYSBzcGVjaWZpZWQgdmFsdWVcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi52YWx1ZSB0aGUgdmFsdWUgY3VycmVudCB0aW1lIHdpbGwgYmUgc2V0IHRvXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlQW5pbWF0aW9uVGltZVVwZGF0ZXIgPSAoc3RhdGUsIHt2YWx1ZX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgYW5pbWF0aW9uQ29uZmlnOiB7XHJcbiAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXHJcbiAgICBjdXJyZW50VGltZTogdmFsdWVcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBhbmltYXRpb24gc3BlZWQgd2l0aCB0aGUgdmVydGljYWwgc3BlZWQgc2xpZGVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uc3BlZWQgdGhlIHVwZGF0ZWQgc3BlZWQgb2YgdGhlIGFuaW1hdGlvblxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyID0gKHN0YXRlLCB7c3BlZWR9KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XHJcbiAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcclxuICAgICAgc3BlZWRcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNob3cgbGFyZ2VyIHRpbWUgZmlsdGVyIGF0IGJvdHRvbSBmb3IgdGltZSBwbGF5YmFjayAoYXBwbHkgdG8gdGltZSBmaWx0ZXIgb25seSlcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHggaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbmxhcmdlRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgaXNFbmxhcmdlZCA9IHN0YXRlLmZpbHRlcnNbYWN0aW9uLmlkeF0uZW5sYXJnZWQ7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiB7XHJcbiAgICAgIGYuZW5sYXJnZWQgPSAhaXNFbmxhcmdlZCAmJiBpID09PSBhY3Rpb24uaWR4O1xyXG4gICAgICByZXR1cm4gZjtcclxuICAgIH0pXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGVzIGZpbHRlciBmZWF0dXJlIHZpc2liaWxpdHlcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHggaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGZpbHRlciA9IHN0YXRlLmZpbHRlcnNbYWN0aW9uLmlkeF07XHJcbiAgY29uc3QgaXNWaXNpYmxlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ2lzVmlzaWJsZSddKTtcclxuICBjb25zdCBuZXdGaWx0ZXIgPSB7XHJcbiAgICAuLi5maWx0ZXIsXHJcbiAgICB2YWx1ZTogZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmlsdGVyLnZhbHVlLCBmaWx0ZXIuaWQsIHtcclxuICAgICAgaXNWaXNpYmxlOiAhaXNWaXNpYmxlXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGZpbHRlcnM6IE9iamVjdC5hc3NpZ24oW10uY29uY2F0KHN0YXRlLmZpbHRlcnMpLCB7W2FjdGlvbi5pZHhdOiBuZXdGaWx0ZXJ9KVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGEgZmlsdGVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uaWR4IGluZGV4IG9mIGZpbHRlciB0byBiIGUgcmVtb3ZlZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHtpZHh9ID0gYWN0aW9uO1xyXG4gIGNvbnN0IHtkYXRhSWQsIGlkfSA9IHN0YXRlLmZpbHRlcnNbaWR4XTtcclxuXHJcbiAgY29uc3QgbmV3RmlsdGVycyA9IFtcclxuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoMCwgaWR4KSxcclxuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoaWR4ICsgMSwgc3RhdGUuZmlsdGVycy5sZW5ndGgpXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoZGF0YUlkLCBzdGF0ZS5kYXRhc2V0cywgbmV3RmlsdGVycywgc3RhdGUubGF5ZXJzKTtcclxuICBjb25zdCBuZXdFZGl0b3IgPVxyXG4gICAgZ2V0RmlsdGVySWRJbkZlYXR1cmUoc3RhdGUuZWRpdG9yLnNlbGVjdGVkRmVhdHVyZSkgPT09IGlkXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxyXG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHN0YXRlLmVkaXRvcjtcclxuXHJcbiAgbGV0IG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycyddLCBuZXdGaWx0ZXJzLCBzdGF0ZSk7XHJcbiAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cyddLCBmaWx0ZXJlZERhdGFzZXRzLCBuZXdTdGF0ZSk7XHJcbiAgbmV3U3RhdGUgPSBzZXQoWydlZGl0b3InXSwgbmV3RWRpdG9yLCBuZXdTdGF0ZSk7XHJcblxyXG4gIHJldHVybiB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobmV3U3RhdGUsIGRhdGFJZCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIGEgbmV3IGxheWVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ucHJvcHMgLSBuZXcgbGF5ZXIgcHJvcHNcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGRMYXllclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHREYXRhc2V0ID0gT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldHMpWzBdO1xyXG4gIGNvbnN0IG5ld0xheWVyID0gbmV3IExheWVyKHtcclxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgIGlzQ29uZmlnQWN0aXZlOiB0cnVlLFxyXG4gICAgZGF0YUlkOiBkZWZhdWx0RGF0YXNldCxcclxuICAgIC4uLmFjdGlvbi5wcm9wc1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBsYXllcnM6IFsuLi5zdGF0ZS5sYXllcnMsIG5ld0xheWVyXSxcclxuICAgIGxheWVyRGF0YTogWy4uLnN0YXRlLmxheWVyRGF0YSwge31dLFxyXG4gICAgbGF5ZXJPcmRlcjogWy4uLnN0YXRlLmxheWVyT3JkZXIsIHN0YXRlLmxheWVyT3JkZXIubGVuZ3RoXSxcclxuICAgIHNwbGl0TWFwczogYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzdGF0ZS5zcGxpdE1hcHMsIG5ld0xheWVyKVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogcmVtb3ZlIGxheWVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uaWR4IGluZGV4IG9mIGxheWVyIHRvIGIgZSByZW1vdmVkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCB7aWR4fSkgPT4ge1xyXG4gIGNvbnN0IHtsYXllcnMsIGxheWVyRGF0YSwgY2xpY2tlZCwgaG92ZXJJbmZvfSA9IHN0YXRlO1xyXG4gIGNvbnN0IGxheWVyVG9SZW1vdmUgPSBzdGF0ZS5sYXllcnNbaWR4XTtcclxuICBjb25zdCBuZXdNYXBzID0gcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXJUb1JlbW92ZSk7XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBsYXllcnM6IFsuLi5sYXllcnMuc2xpY2UoMCwgaWR4KSwgLi4ubGF5ZXJzLnNsaWNlKGlkeCArIDEsIGxheWVycy5sZW5ndGgpXSxcclxuICAgIGxheWVyRGF0YTogWy4uLmxheWVyRGF0YS5zbGljZSgwLCBpZHgpLCAuLi5sYXllckRhdGEuc2xpY2UoaWR4ICsgMSwgbGF5ZXJEYXRhLmxlbmd0aCldLFxyXG4gICAgbGF5ZXJPcmRlcjogc3RhdGUubGF5ZXJPcmRlci5maWx0ZXIoaSA9PiBpICE9PSBpZHgpLm1hcChwaWQgPT4gKHBpZCA+IGlkeCA/IHBpZCAtIDEgOiBwaWQpKSxcclxuICAgIGNsaWNrZWQ6IGxheWVyVG9SZW1vdmUuaXNMYXllckhvdmVyZWQoY2xpY2tlZCkgPyB1bmRlZmluZWQgOiBjbGlja2VkLFxyXG4gICAgaG92ZXJJbmZvOiBsYXllclRvUmVtb3ZlLmlzTGF5ZXJIb3ZlcmVkKGhvdmVySW5mbykgPyB1bmRlZmluZWQgOiBob3ZlckluZm8sXHJcbiAgICBzcGxpdE1hcHM6IG5ld01hcHNcclxuICAgIC8vIFRPRE86IHVwZGF0ZSBmaWx0ZXJzLCBjcmVhdGUgaGVscGVyIHRvIHJlbW92ZSBsYXllciBmb3JtIGZpbHRlciAocmVtb3ZlIGxheWVyaWQgYW5kIGRhdGFpZCkgaWYgbWFwcGVkXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihuZXdTdGF0ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVvcmRlciBsYXllclxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IGFjdGlvbi5vcmRlciBhbiBhcnJheSBvZiBsYXllciBpbmRleGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVvcmRlckxheWVyVXBkYXRlciA9IChzdGF0ZSwge29yZGVyfSkgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBsYXllck9yZGVyOiBvcmRlclxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmtleSBkYXRhc2V0IGlkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlRGF0YXNldFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGV4dHJhY3QgZGF0YXNldCBrZXlcclxuICBjb25zdCB7a2V5OiBkYXRhc2V0S2V5fSA9IGFjdGlvbjtcclxuICBjb25zdCB7ZGF0YXNldHN9ID0gc3RhdGU7XHJcblxyXG4gIC8vIGNoZWNrIGlmIGRhdGFzZXQgaXMgcHJlc2VudFxyXG4gIGlmICghZGF0YXNldHNbZGF0YXNldEtleV0pIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgY29uc3Qge1xyXG4gICAgbGF5ZXJzLFxyXG4gICAgZGF0YXNldHM6IHtbZGF0YXNldEtleV06IGRhdGFzZXQsIC4uLm5ld0RhdGFzZXRzfVxyXG4gIH0gPSBzdGF0ZTtcclxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4gIGNvbnN0IGluZGV4ZXMgPSBsYXllcnMucmVkdWNlKChsaXN0T2ZJbmRleGVzLCBsYXllciwgaW5kZXgpID0+IHtcclxuICAgIGlmIChsYXllci5jb25maWcuZGF0YUlkID09PSBkYXRhc2V0S2V5KSB7XHJcbiAgICAgIGxpc3RPZkluZGV4ZXMucHVzaChpbmRleCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdE9mSW5kZXhlcztcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHJlbW92ZSBsYXllcnMgYW5kIGRhdGFzZXRzXHJcbiAgY29uc3Qge25ld1N0YXRlfSA9IGluZGV4ZXMucmVkdWNlKFxyXG4gICAgKHtuZXdTdGF0ZTogY3VycmVudFN0YXRlLCBpbmRleENvdW50ZXJ9LCBpZHgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gaWR4IC0gaW5kZXhDb3VudGVyO1xyXG4gICAgICBjdXJyZW50U3RhdGUgPSByZW1vdmVMYXllclVwZGF0ZXIoY3VycmVudFN0YXRlLCB7aWR4OiBjdXJyZW50SW5kZXh9KTtcclxuICAgICAgaW5kZXhDb3VudGVyKys7XHJcbiAgICAgIHJldHVybiB7bmV3U3RhdGU6IGN1cnJlbnRTdGF0ZSwgaW5kZXhDb3VudGVyfTtcclxuICAgIH0sXHJcbiAgICB7bmV3U3RhdGU6IHsuLi5zdGF0ZSwgZGF0YXNldHM6IG5ld0RhdGFzZXRzfSwgaW5kZXhDb3VudGVyOiAwfVxyXG4gICk7XHJcblxyXG4gIC8vIHJlbW92ZSBmaWx0ZXJzXHJcbiAgY29uc3QgZmlsdGVycyA9IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiAhZmlsdGVyLmRhdGFJZC5pbmNsdWRlcyhkYXRhc2V0S2V5KSk7XHJcblxyXG4gIC8vIHVwZGF0ZSBpbnRlcmFjdGlvbkNvbmZpZ1xyXG4gIGxldCB7aW50ZXJhY3Rpb25Db25maWd9ID0gc3RhdGU7XHJcbiAgY29uc3Qge3Rvb2x0aXB9ID0gaW50ZXJhY3Rpb25Db25maWc7XHJcbiAgaWYgKHRvb2x0aXApIHtcclxuICAgIGNvbnN0IHtjb25maWd9ID0gdG9vbHRpcDtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgICBjb25zdCB7W2RhdGFzZXRLZXldOiBmaWVsZHMsIC4uLmZpZWxkc1RvU2hvd30gPSBjb25maWcuZmllbGRzVG9TaG93O1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgaW50ZXJhY3Rpb25Db25maWcgPSB7XHJcbiAgICAgIC4uLmludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgICB0b29sdGlwOiB7Li4udG9vbHRpcCwgY29uZmlnOiB7Li4uY29uZmlnLCBmaWVsZHNUb1Nob3d9fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7Li4ubmV3U3RhdGUsIGZpbHRlcnMsIGludGVyYWN0aW9uQ29uZmlnfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiB1cGRhdGUgbGF5ZXIgYmxlbmRpbmcgbW9kZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLm1vZGUgb25lIG9mIGBhZGRpdGl2ZWAsIGBub3JtYWxgIGFuZCBgc3VidHJhY3RpdmVgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBsYXllckJsZW5kaW5nOiBhY3Rpb24ubW9kZVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5IGRhdGFzZXQgdGFibGUgaW4gYSBtb2RhbFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFJZCBkYXRhc2V0IGlkIHRvIHNob3cgaW4gdGFibGVcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaG93RGF0YXNldFRhYmxlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZWRpdGluZ0RhdGFzZXQ6IGFjdGlvbi5kYXRhSWRcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlc2V0IHZpc1N0YXRlIHRvIGluaXRpYWwgU3RhdGVcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldE1hcENvbmZpZ1VwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLklOSVRJQUxfVklTX1NUQVRFLFxyXG4gIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcclxuICBpbml0aWFsU3RhdGU6IHN0YXRlLmluaXRpYWxTdGF0ZVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBQcm9wYWdhdGUgYHZpc1N0YXRlYCByZWR1Y2VyIHdpdGggYSBuZXcgY29uZmlndXJhdGlvbi4gQ3VycmVudCBjb25maWcgd2lsbCBiZSBvdmVycmlkZS5cclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkIG1hcCBjb25maWcgdG8gYmUgcHJvcGFnYXRlZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQuY29uZmlnIG1hcCBjb25maWcgdG8gYmUgcHJvcGFnYXRlZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQub3B0aW9uIHtrZWVwRXhpc3RpbmdDb25maWc6IHRydWUgfCBmYWxzZX1cclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHtjb25maWcgPSB7fSwgb3B0aW9ucyA9IHt9fX0pID0+IHtcclxuICBpZiAoIWNvbmZpZy52aXNTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZmlsdGVycyxcclxuICAgIGxheWVycyxcclxuICAgIGludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgbGF5ZXJCbGVuZGluZyxcclxuICAgIHNwbGl0TWFwcyxcclxuICAgIGFuaW1hdGlvbkNvbmZpZ1xyXG4gIH0gPSBjb25maWcudmlzU3RhdGU7XHJcblxyXG4gIGNvbnN0IHtrZWVwRXhpc3RpbmdDb25maWd9ID0gb3B0aW9ucztcclxuXHJcbiAgLy8gcmVzZXQgY29uZmlnIGlmIGtlZXBFeGlzdGluZ0NvbmZpZyBpcyBmYWxzeVxyXG4gIGxldCBtZXJnZWRTdGF0ZSA9ICFrZWVwRXhpc3RpbmdDb25maWcgPyByZXNldE1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUpIDogc3RhdGU7XHJcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUxheWVycyhtZXJnZWRTdGF0ZSwgbGF5ZXJzKTtcclxuICBtZXJnZWRTdGF0ZSA9IG1lcmdlRmlsdGVycyhtZXJnZWRTdGF0ZSwgZmlsdGVycyk7XHJcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUludGVyYWN0aW9ucyhtZXJnZWRTdGF0ZSwgaW50ZXJhY3Rpb25Db25maWcpO1xyXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VMYXllckJsZW5kaW5nKG1lcmdlZFN0YXRlLCBsYXllckJsZW5kaW5nKTtcclxuICBtZXJnZWRTdGF0ZSA9IG1lcmdlU3BsaXRNYXBzKG1lcmdlZFN0YXRlLCBzcGxpdE1hcHMpO1xyXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VBbmltYXRpb25Db25maWcobWVyZ2VkU3RhdGUsIGFuaW1hdGlvbkNvbmZpZyk7XHJcblxyXG4gIHJldHVybiBtZXJnZWRTdGF0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGxheWVyIGhvdmVyIGV2ZW50IHdpdGggaG92ZXJlZCBvYmplY3RcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5pbmZvIE9iamVjdCBob3ZlcmVkLCByZXR1cm5lZCBieSBkZWNrLmdsXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF5ZXJIb3ZlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBob3ZlckluZm86IGFjdGlvbi5pbmZvXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmluZm8gT2JqZWN0IGNsaWNrZWQsIHJldHVybmVkIGJ5IGRlY2suZ2xcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXllckNsaWNrVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIG1vdXNlUG9zOiBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy5jb29yZGluYXRlLmVuYWJsZWRcclxuICAgID8ge1xyXG4gICAgICAgIC4uLnN0YXRlLm1vdXNlUG9zLFxyXG4gICAgICAgIHBpbm5lZDogc3RhdGUubW91c2VQb3MucGlubmVkID8gbnVsbCA6IGNsb25lRGVlcChzdGF0ZS5tb3VzZVBvcylcclxuICAgICAgfVxyXG4gICAgOiBzdGF0ZS5tb3VzZVBvcyxcclxuICBjbGlja2VkOiBhY3Rpb24uaW5mbyAmJiBhY3Rpb24uaW5mby5waWNrZWQgPyBhY3Rpb24uaW5mbyA6IG51bGxcclxufSk7XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBtYXAgY2xpY2sgZXZlbnQsIHVuc2VsZWN0IGNsaWNrZWQgb2JqZWN0XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFwQ2xpY2tVcGRhdGVyID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGNsaWNrZWQ6IG51bGxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vdXNlTW92ZVVwZGF0ZXIgPSAoc3RhdGUsIHtldnR9KSA9PiB7XHJcbiAgaWYgKE9iamVjdC52YWx1ZXMoc3RhdGUuaW50ZXJhY3Rpb25Db25maWcpLnNvbWUoY29uZmlnID0+IGNvbmZpZy5lbmFibGVkKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIG1vdXNlUG9zOiB7XHJcbiAgICAgICAgLi4uc3RhdGUubW91c2VQb3MsXHJcbiAgICAgICAgbW91c2VQb3NpdGlvbjogWy4uLmV2dC5wb2ludF0sXHJcbiAgICAgICAgY29vcmRpbmF0ZTogWy4uLmV2dC5sbmdMYXRdXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbi8qKlxyXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGZvciBhIHNwbGl0IG1hcFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcnx1bmRlZmluZWR9IGFjdGlvbi5wYXlsb2FkIGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT5cclxuICBzdGF0ZS5zcGxpdE1hcHMgJiYgc3RhdGUuc3BsaXRNYXBzLmxlbmd0aCA9PT0gMFxyXG4gICAgPyB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gbWF5YmUgd2Ugc2hvdWxkIHVzZSBhbiBhcnJheSB0byBzdG9yZSBzdGF0ZSBmb3IgYSBzaW5nbGUgbWFwIGFzIHdlbGxcclxuICAgICAgICAvLyBpZiBjdXJyZW50IG1hcHMgbGVuZ3RoIGlzIGVxdWFsIHRvIDAgaXQgbWVhbnMgdGhhdCB3ZSBhcmUgYWJvdXQgdG8gc3BsaXQgdGhlIHZpZXdcclxuICAgICAgICBzcGxpdE1hcHM6IGNvbXB1dGVTcGxpdE1hcExheWVycyhzdGF0ZS5sYXllcnMpXHJcbiAgICAgIH1cclxuICAgIDogY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4vKipcclxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBpbiBhIHNwbGl0IG1hcFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLm1hcEluZGV4IGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5sYXllcklkIGlkIG9mIHRoZSBsYXllclxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlciA9IChzdGF0ZSwge21hcEluZGV4LCBsYXllcklkfSkgPT4ge1xyXG4gIGNvbnN0IHtzcGxpdE1hcHN9ID0gc3RhdGU7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIHNwbGl0TWFwczogc3BsaXRNYXBzLm1hcCgoc20sIGkpID0+XHJcbiAgICAgIGkgPT09IG1hcEluZGV4XHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIC4uLnNwbGl0TWFwc1tpXSxcclxuICAgICAgICAgICAgbGF5ZXJzOiB7XHJcbiAgICAgICAgICAgICAgLi4uc3BsaXRNYXBzW2ldLmxheWVycyxcclxuICAgICAgICAgICAgICAvLyBpZiBsYXllcklkIG5vdCBpbiBsYXllcnMsIHNldCBpdCB0byB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgW2xheWVySWRdOiAhc3BsaXRNYXBzW2ldLmxheWVyc1tsYXllcklkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiBzbVxyXG4gICAgKVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIG5ldyBkYXRhc2V0IHRvIGB2aXNTdGF0ZWAsIHdpdGggb3B0aW9uIHRvIGxvYWQgYSBtYXAgY29uZmlnIGFsb25nIHdpdGggdGhlIGRhdGFzZXRzXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0PnxPYmplY3R9IGFjdGlvbi5kYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xyXG4gKiBFYWNoIGRhdGFzZXQgb2JqZWN0IG5lZWRzIHRvIGhhdmUgYGluZm9gIGFuZCBgZGF0YWAgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24uZGF0YXNldHMuaW5mbyAtaW5mbyBvZiBhIGRhdGFzZXRcclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhc2V0cy5pbmZvLmlkIC0gaWQgb2YgdGhpcyBkYXRhc2V0LiBJZiBjb25maWcgaXMgZGVmaW5lZCwgYGlkYCBzaG91bGQgbWF0Y2hlcyB0aGUgYGRhdGFJZGAgaW4gY29uZmlnLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFzZXRzLmluZm8ubGFiZWwgLSBBIGRpc3BsYXkgbmFtZSBvZiB0aGlzIGRhdGFzZXRcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5kYXRhc2V0cy5kYXRhIC0gKioqcmVxdWlyZWQqKiBUaGUgZGF0YSBvYmplY3QsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCAyIHByb3BlcnRpZXMgYGZpZWxkc2AgYW5kIGByb3dzYFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGFjdGlvbi5kYXRhc2V0cy5kYXRhLmZpZWxkcyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2YgZmllbGRzLFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFzZXRzLmRhdGEuZmllbGRzLm5hbWUgLSAqKipyZXF1aXJlZCoqIE5hbWUgb2YgdGhlIGZpZWxkLFxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gYWN0aW9uLmRhdGFzZXRzLmRhdGEucm93cyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2Ygcm93cywgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5vcHRpb25zIG9wdGlvbiBvYmplY3QgYHtjZW50ZXJNYXA6IHRydWUsIGtlZXBFeGlzdGluZ0NvbmZpZzogZmFsc2V9YFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmNvbmZpZyBtYXAgY29uZmlnXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlVmlzRGF0YVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGRhdGFzZXRzIGNhbiBiZSBhIHNpbmdsZSBkYXRhIGVudHJpZXMgb3IgYW4gYXJyYXkgb2YgbXVsdGlwbGUgZGF0YSBlbnRyaWVzXHJcbiAgY29uc3Qge2NvbmZpZywgb3B0aW9uc30gPSBhY3Rpb247XHJcblxyXG4gIGNvbnN0IGRhdGFzZXRzID0gdG9BcnJheShhY3Rpb24uZGF0YXNldHMpO1xyXG5cclxuICBjb25zdCBuZXdEYXRhRW50cmllcyA9IGRhdGFzZXRzLnJlZHVjZShcclxuICAgIChhY2N1LCB7aW5mbyA9IHt9LCBkYXRhfSkgPT4gKHtcclxuICAgICAgLi4uYWNjdSxcclxuICAgICAgLi4uKGNyZWF0ZU5ld0RhdGFFbnRyeSh7aW5mbywgZGF0YX0sIHN0YXRlLmRhdGFzZXRzKSB8fCB7fSlcclxuICAgIH0pLFxyXG4gICAge31cclxuICApO1xyXG5cclxuICBpZiAoIU9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKS5sZW5ndGgpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIGFwcGx5IGNvbmZpZyBpZiBwYXNzZWQgZnJvbSBhY3Rpb25cclxuICBjb25zdCBwcmV2aW91c1N0YXRlID0gY29uZmlnXHJcbiAgICA/IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyKHN0YXRlLCB7XHJcbiAgICAgICAgcGF5bG9hZDoge2NvbmZpZywgb3B0aW9uc31cclxuICAgICAgfSlcclxuICAgIDogc3RhdGU7XHJcblxyXG4gIGNvbnN0IHN0YXRlV2l0aE5ld0RhdGEgPSB7XHJcbiAgICAuLi5wcmV2aW91c1N0YXRlLFxyXG4gICAgZGF0YXNldHM6IHtcclxuICAgICAgLi4ucHJldmlvdXNTdGF0ZS5kYXRhc2V0cyxcclxuICAgICAgLi4ubmV3RGF0YUVudHJpZXNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBwcmV2aW91c2x5IHNhdmVkIGNvbmZpZyBiZWZvcmUgZGF0YSBsb2FkZWRcclxuICBjb25zdCB7XHJcbiAgICBmaWx0ZXJUb0JlTWVyZ2VkID0gW10sXHJcbiAgICBsYXllclRvQmVNZXJnZWQgPSBbXSxcclxuICAgIGludGVyYWN0aW9uVG9CZU1lcmdlZCA9IHt9LFxyXG4gICAgc3BsaXRNYXBzVG9CZU1lcmdlZCA9IFtdXHJcbiAgfSA9IHN0YXRlV2l0aE5ld0RhdGE7XHJcblxyXG4gIC8vIFdlIG5lZWQgdG8gbWVyZ2UgbGF5ZXJzIGJlZm9yZSBmaWx0ZXJzIGJlY2F1c2UgcG9seWdvbiBmaWx0ZXJzIHJlcXVpcmVzIGxheWVycyB0byBiZSBsb2FkZWRcclxuICBsZXQgbWVyZ2VkU3RhdGUgPSBtZXJnZUxheWVycyhzdGF0ZVdpdGhOZXdEYXRhLCBsYXllclRvQmVNZXJnZWQpO1xyXG5cclxuICBtZXJnZWRTdGF0ZSA9IG1lcmdlRmlsdGVycyhtZXJnZWRTdGF0ZSwgZmlsdGVyVG9CZU1lcmdlZCk7XHJcblxyXG4gIC8vIG1lcmdlIHN0YXRlIHdpdGggc2F2ZWQgc3BsaXRNYXBzXHJcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZVNwbGl0TWFwcyhtZXJnZWRTdGF0ZSwgc3BsaXRNYXBzVG9CZU1lcmdlZCk7XHJcblxyXG4gIGxldCBuZXdMYXllcnMgPSBtZXJnZWRTdGF0ZS5sYXllcnMuZmlsdGVyKGwgPT4gbC5jb25maWcuZGF0YUlkIGluIG5ld0RhdGFFbnRyaWVzKTtcclxuXHJcbiAgaWYgKCFuZXdMYXllcnMubGVuZ3RoKSB7XHJcbiAgICAvLyBubyBsYXllciBtZXJnZWQsIGZpbmQgZGVmYXVsdHNcclxuICAgIGNvbnN0IHJlc3VsdCA9IGFkZERlZmF1bHRMYXllcnMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzKTtcclxuICAgIG1lcmdlZFN0YXRlID0gcmVzdWx0LnN0YXRlO1xyXG4gICAgbmV3TGF5ZXJzID0gcmVzdWx0Lm5ld0xheWVycztcclxuICB9XHJcblxyXG4gIGlmIChtZXJnZWRTdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XHJcbiAgICAvLyBpZiBtYXAgaXMgc3BsaXQsIGFkZCBuZXcgbGF5ZXJzIHRvIHNwbGl0TWFwc1xyXG4gICAgbmV3TGF5ZXJzID0gbWVyZ2VkU3RhdGUubGF5ZXJzLmZpbHRlcihsID0+IGwuY29uZmlnLmRhdGFJZCBpbiBuZXdEYXRhRW50cmllcyk7XHJcbiAgICBtZXJnZWRTdGF0ZSA9IHtcclxuICAgICAgLi4ubWVyZ2VkU3RhdGUsXHJcbiAgICAgIHNwbGl0TWFwczogYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChtZXJnZWRTdGF0ZS5zcGxpdE1hcHMsIG5ld0xheWVycylcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIHNhdmVkIGludGVyYWN0aW9uc1xyXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VJbnRlcmFjdGlvbnMobWVyZ2VkU3RhdGUsIGludGVyYWN0aW9uVG9CZU1lcmdlZCk7XHJcblxyXG4gIC8vIGlmIG5vIHRvb2x0aXBzIG1lcmdlZCBhZGQgZGVmYXVsdCB0b29sdGlwc1xyXG4gIE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKS5mb3JFYWNoKGRhdGFJZCA9PiB7XHJcbiAgICBjb25zdCB0b29sdGlwRmllbGRzID0gbWVyZ2VkU3RhdGUuaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF07XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodG9vbHRpcEZpZWxkcykgfHwgIXRvb2x0aXBGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgIG1lcmdlZFN0YXRlID0gYWRkRGVmYXVsdFRvb2x0aXBzKG1lcmdlZFN0YXRlLCBuZXdEYXRhRW50cmllc1tkYXRhSWRdKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGV0IHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShtZXJnZWRTdGF0ZSwgT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpKTtcclxuXHJcbiAgLy8gcmVnaXN0ZXIgbGF5ZXIgYW5pbWF0aW9uIGRvbWFpbixcclxuICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBsYXllciBkYXRhIGlzIGNhbGN1bGF0ZWRcclxuICB1cGRhdGVkU3RhdGUgPSB1cGRhdGVBbmltYXRpb25Eb21haW4odXBkYXRlZFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZWRTdGF0ZTtcclxufTtcclxuLyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gYSB1c2VyIGNsaWNrcyBvbiB0aGUgc3BlY2lmaWMgbWFwIGNsb3NpbmcgaWNvblxyXG4gKiB0aGUgYXBwbGljYXRpb24gd2lsbCBjbG9zZSB0aGUgc2VsZWN0ZWQgbWFwXHJcbiAqIGFuZCB3aWxsIG1lcmdlIHRoZSByZW1haW5pbmcgb25lIHdpdGggdGhlIGdsb2JhbCBzdGF0ZVxyXG4gKiBUT0RPOiBpIHRoaW5rIGluIHRoZSBmdXR1cmUgdGhpcyBhY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBtZXJnZSBtYXAgbGF5ZXJzIHdpdGggZ2xvYmFsIHNldHRpbmdzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgoc3RhdGUsIGFjdGlvbikge1xyXG4gIC8vIHJldHJpZXZlIGxheWVycyBtZXRhIGRhdGEgZnJvbSB0aGUgcmVtYWluaW5nIG1hcCB0aGF0IHdlIG5lZWQgdG8ga2VlcFxyXG4gIGNvbnN0IGluZGV4VG9SZXRyaWV2ZSA9IDEgLSBhY3Rpb24ucGF5bG9hZDtcclxuICBjb25zdCBtYXBMYXllcnMgPSBzdGF0ZS5zcGxpdE1hcHNbaW5kZXhUb1JldHJpZXZlXS5sYXllcnM7XHJcbiAgY29uc3Qge2xheWVyc30gPSBzdGF0ZTtcclxuXHJcbiAgLy8gdXBkYXRlIGxheWVyIHZpc2liaWxpdHlcclxuICBjb25zdCBuZXdMYXllcnMgPSBsYXllcnMubWFwKGxheWVyID0+XHJcbiAgICAhbWFwTGF5ZXJzW2xheWVyLmlkXSAmJiBsYXllci5jb25maWcuaXNWaXNpYmxlXHJcbiAgICAgID8gbGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xyXG4gICAgICAgICAgLy8gaWYgbGF5ZXIuaWQgaXMgbm90IGluIG1hcExheWVycywgaXQgc2hvdWxkIGJlIGluVmlzaWJsZVxyXG4gICAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIDogbGF5ZXJcclxuICApO1xyXG5cclxuICAvLyBkZWxldGUgbWFwXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXHJcbiAgICBzcGxpdE1hcHM6IFtdXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgZmlsZSBsb2FkaW5nIGRpc3BhdGNoIGBhZGREYXRhVG9NYXBgIGlmIHN1Y2NlZWQsIG9yIGBsb2FkRmlsZXNFcnJgIGlmIGZhaWxlZFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGFjdGlvbi5maWxlcyBhcnJheSBvZiBmaWxlYmxvYlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHtmaWxlc30gPSBhY3Rpb247XHJcbiAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVDYWNoZSA9IFtdO1xyXG4gIHJldHVybiB3aXRoVGFzayhcclxuICAgIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGZpbGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICBmaWxlTG9hZGluZ1Byb2dyZXNzOiAwXHJcbiAgICB9LFxyXG4gICAgbWFrZUxvYWRGaWxlVGFzayhmaWxlcy5sZW5ndGgsIGZpbGVzLCBmaWxlQ2FjaGUpXHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VMb2FkRmlsZVRhc2sodG90YWxDb3VudCwgZmlsZXNUb0xvYWQsIGZpbGVDYWNoZSkge1xyXG4gIGNvbnN0IGZpbGUgPSBmaWxlc1RvTG9hZC5wb3AoKTtcclxuXHJcbiAgcmV0dXJuIExPQURfRklMRV9UQVNLKHtmaWxlLCBmaWxlQ2FjaGV9KS5iaW1hcChcclxuICAgIC8vIHN1Y2Nlc3NcclxuICAgIHJlc3VsdCA9PlxyXG4gICAgICBsb2FkRmlsZVN1Y2Nlc3Moe1xyXG4gICAgICAgIGZpbGVDYWNoZTogcmVzdWx0LFxyXG4gICAgICAgIGZpbGVzVG9Mb2FkOiBbLi4uZmlsZXNUb0xvYWRdLFxyXG4gICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgfSksXHJcbiAgICAvLyBlcnJvclxyXG4gICAgbG9hZEZpbGVzRXJyXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlU3VjY2Vzc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHtmaWxlQ2FjaGUsIGZpbGVzVG9Mb2FkID0gW10sIHRvdGFsQ291bnR9ID0gYWN0aW9uO1xyXG5cclxuICAvLyBzdGlsbCBtb3JlIHRvIGxvYWRcclxuICBpZiAoZmlsZXNUb0xvYWQubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBmaWxlTG9hZGluZ1Byb2dyZXNzID0gKCh0b3RhbENvdW50IC0gZmlsZXNUb0xvYWQubGVuZ3RoKSAvIHRvdGFsQ291bnQpICogMTAwO1xyXG5cclxuICAgIHJldHVybiB3aXRoVGFzayhcclxuICAgICAge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZpbGVMb2FkaW5nUHJvZ3Jlc3NcclxuICAgICAgfSxcclxuICAgICAgbWFrZUxvYWRGaWxlVGFzayh0b3RhbENvdW50LCBmaWxlc1RvTG9hZCwgZmlsZUNhY2hlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGZpbGVDYWNoZS5yZWR1Y2UoXHJcbiAgICAoYWNjdSwgZmlsZSkgPT4ge1xyXG4gICAgICBjb25zdCB7ZGF0YSwgaW5mbyA9IHt9fSA9IGZpbGU7XHJcbiAgICAgIGNvbnN0IHtmb3JtYXR9ID0gaW5mbztcclxuXHJcbiAgICAgIGlmIChmb3JtYXQpIHtcclxuICAgICAgICBpZiAoZm9ybWF0ICE9PSBEQVRBU0VUX0ZPUk1BVFMua2VwbGVyZ2wpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0RhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgICBpZDogZ2VuZXJhdGVIYXNoSWQoNCksXHJcbiAgICAgICAgICAgICAgLi4uaW5mb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGFjY3UuZGF0YXNldHMucHVzaChuZXdEYXRhc2V0KTtcclxuICAgICAgICAgIHJldHVybiBhY2N1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRhdGFzZXRzOiBhY2N1LmRhdGFzZXRzLmNvbmNhdChkYXRhLmRhdGFzZXRzKSxcclxuICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZGVlcCBtZXJnZSB0aGlzIHRoaW5nIHVubGVzcyB3ZSBmaW5kIGEgYmV0dGVyIHNvbHV0aW9uXHJcbiAgICAgICAgICAvLyB0aGlzIGNhc2Ugd2lsbCBvbmx5IGhhcHBlbiBpZiB3ZSBhbGxvdyB0byBsb2FkIG11bHRpcGxlIGtlcGxlcmdsIGpzb24gZmlsZXNcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAuLi5hY2N1LmNvbmZpZyxcclxuICAgICAgICAgICAgLi4uKGRhdGEuY29uZmlnIHx8IHt9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjY3U7XHJcbiAgICB9LFxyXG4gICAge2RhdGFzZXRzOiBbXSwgY29uZmlnOiB7fX1cclxuICApO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgY2VudGVyTWFwOiAhKHJlc3VsdC5jb25maWcgJiYgcmVzdWx0LmNvbmZpZy5tYXBTdGF0ZSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gd2l0aFRhc2soXHJcbiAgICB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBmaWxlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGZpbGVMb2FkaW5nUHJvZ3Jlc3M6IDEwMFxyXG4gICAgfSxcclxuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWRkRGF0YVRvTWFwKHsuLi5yZXN1bHQsIG9wdGlvbnN9KSlcclxuICApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbG9hZGluZyBmaWxlIGVycm9yXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXHJcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uLmVycm9yXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzRXJyVXBkYXRlciA9IChzdGF0ZSwge2Vycm9yfSkgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBmaWxlTG9hZGluZzogZmFsc2UsXHJcbiAgZmlsZUxvYWRpbmdFcnI6IGVycm9yXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gc2VsZWN0IGRhdGFzZXQgZm9yIGV4cG9ydCwgYXBwbHkgY3B1IGZpbHRlciB0byBzZWxlY3RlZCBkYXRhc2V0XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhSWQgZGF0YXNldCBpZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGx5Q1BVRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwge2RhdGFJZH0pID0+IHtcclxuICAvLyBhcHBseSBjcHVGaWx0ZXJcclxuICBjb25zdCBkYXRhSWRzID0gdG9BcnJheShkYXRhSWQpO1xyXG5cclxuICByZXR1cm4gZGF0YUlkcy5yZWR1Y2UoKGFjY3UsIGlkKSA9PiBmaWx0ZXJEYXRhc2V0Q1BVKGFjY3UsIGlkKSwgc3RhdGUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZXIgaW5wdXQgdG8gdXBkYXRlIHRoZSBpbmZvIG9mIHRoZSBtYXBcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5pbmZvIHt0aXRsZTogJ2hlbGxvJ31cclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRNYXBJbmZvVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIG1hcEluZm86IHtcclxuICAgIC4uLnN0YXRlLm1hcEluZm8sXHJcbiAgICAuLi5hY3Rpb24uaW5mb1xyXG4gIH1cclxufSk7XHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIEFsbCBsYXllciBkb21haW4gYW5kIGxheWVyIGRhdGEgb2Ygc3RhdGVcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcclxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkYXRhc2V0c1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0TGF5ZXJzKHN0YXRlLCBkYXRhc2V0cykge1xyXG4gIGNvbnN0IGRlZmF1bHRMYXllcnMgPSBPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5yZWR1Y2UoXHJcbiAgICAoYWNjdSwgZGF0YXNldCkgPT4gWy4uLmFjY3UsIC4uLihmaW5kRGVmYXVsdExheWVyKGRhdGFzZXQsIHN0YXRlLmxheWVyQ2xhc3NlcykgfHwgW10pXSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBsYXllcnM6IFsuLi5zdGF0ZS5sYXllcnMsIC4uLmRlZmF1bHRMYXllcnNdLFxyXG4gICAgICBsYXllck9yZGVyOiBbXHJcbiAgICAgICAgLy8gcHV0IG5ldyBsYXllcnMgb24gdG9wIG9mIG9sZCBvbmVzXHJcbiAgICAgICAgLi4uZGVmYXVsdExheWVycy5tYXAoKF8sIGkpID0+IHN0YXRlLmxheWVycy5sZW5ndGggKyBpKSxcclxuICAgICAgICAuLi5zdGF0ZS5sYXllck9yZGVyXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBuZXdMYXllcnM6IGRlZmF1bHRMYXllcnNcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogaGVscGVyIGZ1bmN0aW9uIHRvIGZpbmQgZGVmYXVsdCB0b29sdGlwc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXRcclxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdFRvb2x0aXBzKHN0YXRlLCBkYXRhc2V0KSB7XHJcbiAgY29uc3QgdG9vbHRpcEZpZWxkcyA9IGZpbmRGaWVsZHNUb1Nob3coZGF0YXNldCk7XHJcbiAgY29uc3QgbWVyZ2VkID0ge1xyXG4gICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuZmllbGRzVG9TaG93LFxyXG4gICAgLi4udG9vbHRpcEZpZWxkc1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBzZXQoWydpbnRlcmFjdGlvbkNvbmZpZycsICd0b29sdGlwJywgJ2NvbmZpZycsICdmaWVsZHNUb1Nob3cnXSwgbWVyZ2VkLCBzdGF0ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIGxheWVyIGRvbWFpbnMgZm9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fEFycmF5PHN0cmluZz59IGRhdGFJZCBkYXRhc2V0IGlkIG9yIGFycmF5IG9mIGRhdGFzZXQgaWRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGVkRmlsdGVyIGlmIGlzIGNhbGxlZCBieSBzZXRGaWx0ZXIsIHRoZSBmaWx0ZXIgdGhhdCBoYXMgdXBkYXRlZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEoc3RhdGUsIGRhdGFJZCwgdXBkYXRlZEZpbHRlcikge1xyXG4gIGNvbnN0IGRhdGFJZHMgPSB0eXBlb2YgZGF0YUlkID09PSAnc3RyaW5nJyA/IFtkYXRhSWRdIDogZGF0YUlkO1xyXG4gIGNvbnN0IG5ld0xheWVycyA9IFtdO1xyXG4gIGNvbnN0IG5ld0xheWVyRGF0YSA9IFtdO1xyXG5cclxuICBzdGF0ZS5sYXllcnMuZm9yRWFjaCgob2xkTGF5ZXIsIGkpID0+IHtcclxuICAgIGlmIChvbGRMYXllci5jb25maWcuZGF0YUlkICYmIGRhdGFJZHMuaW5jbHVkZXMob2xkTGF5ZXIuY29uZmlnLmRhdGFJZCkpIHtcclxuICAgICAgLy8gTm8gbmVlZCB0byByZWNhbGN1bGF0ZSBsYXllciBkb21haW4gaWYgZmlsdGVyIGhhcyBmaXhlZCBkb21haW5cclxuICAgICAgY29uc3QgbmV3TGF5ZXIgPVxyXG4gICAgICAgIHVwZGF0ZWRGaWx0ZXIgJiYgdXBkYXRlZEZpbHRlci5maXhlZERvbWFpblxyXG4gICAgICAgICAgPyBvbGRMYXllclxyXG4gICAgICAgICAgOiBvbGRMYXllci51cGRhdGVMYXllckRvbWFpbihzdGF0ZS5kYXRhc2V0cywgdXBkYXRlZEZpbHRlcik7XHJcblxyXG4gICAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBzdGF0ZS5sYXllckRhdGFbaV0pO1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ0xheWVyRGF0YScsIGxheWVyRGF0YSk7XHJcbiAgICAgIG5ld0xheWVycy5wdXNoKGxheWVyKTtcclxuICAgICAgbmV3TGF5ZXJEYXRhLnB1c2gobGF5ZXJEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0xheWVycy5wdXNoKG9sZExheWVyKTtcclxuICAgICAgbmV3TGF5ZXJEYXRhLnB1c2goc3RhdGUubGF5ZXJEYXRhW2ldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxheWVyczogbmV3TGF5ZXJzLFxyXG4gICAgbGF5ZXJEYXRhOiBuZXdMYXllckRhdGFcclxuICB9O1xyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbmltYXRpb25Eb21haW4oc3RhdGUpIHtcclxuICAvLyBtZXJnZSBhbGwgYW5pbWF0YWJsZSBsYXllciBkb21haW4gYW5kIHVwZGF0ZSBnbG9iYWwgY29uZmlnXHJcbiAgY29uc3QgYW5pbWF0YWJsZUxheWVycyA9IHN0YXRlLmxheWVycy5maWx0ZXIoXHJcbiAgICBsID0+XHJcbiAgICAgIGwuY29uZmlnLmlzVmlzaWJsZSAmJlxyXG4gICAgICBsLmNvbmZpZy5hbmltYXRpb24gJiZcclxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgJiZcclxuICAgICAgQXJyYXkuaXNBcnJheShsLmFuaW1hdGlvbkRvbWFpbilcclxuICApO1xyXG5cclxuICBpZiAoIWFuaW1hdGFibGVMYXllcnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgYW5pbWF0aW9uQ29uZmlnOiBkZWZhdWx0QW5pbWF0aW9uQ29uZmlnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVyZ2VkRG9tYWluID0gYW5pbWF0YWJsZUxheWVycy5yZWR1Y2UoXHJcbiAgICAoYWNjdSwgbGF5ZXIpID0+IFtcclxuICAgICAgTWF0aC5taW4oYWNjdVswXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzBdKSxcclxuICAgICAgTWF0aC5tYXgoYWNjdVsxXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzFdKVxyXG4gICAgXSxcclxuICAgIFtOdW1iZXIoSW5maW5pdHkpLCAtSW5maW5pdHldXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XHJcbiAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcclxuICAgICAgY3VycmVudFRpbWU6IGlzSW5SYW5nZShzdGF0ZS5hbmltYXRpb25Db25maWcuY3VycmVudFRpbWUsIG1lcmdlZERvbWFpbilcclxuICAgICAgICA/IHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZVxyXG4gICAgICAgIDogbWVyZ2VkRG9tYWluWzBdLFxyXG4gICAgICBkb21haW46IG1lcmdlZERvbWFpblxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgZWRpdG9yXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHNldCB0byBlZGl0b3IgdG9cclxuICogQHJldHVybiB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFZGl0b3JNb2RlVXBkYXRlciA9IChzdGF0ZSwge21vZGV9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGVkaXRvcjoge1xyXG4gICAgLi4uc3RhdGUuZWRpdG9yLFxyXG4gICAgbW9kZSxcclxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBjb25zdCBmZWF0dXJlVG9GaWx0ZXJWYWx1ZSA9IChmZWF0dXJlKSA9PiAoey4uLmZlYXR1cmUsIGlkOiBmZWF0dXJlLmlkfSk7XHJcbi8qKlxyXG4gKiBVcGRhdGUgZWRpdG9yIGZlYXR1cmVzXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7W09iamVjdF19IGZlYXR1cmVzIHRvIHN0b3JlXHJcbiAqIEByZXR1cm4ge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RmVhdHVyZXNVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZXMgPSBbXX0pIHtcclxuICBjb25zdCBsYXN0RmVhdHVyZSA9IGZlYXR1cmVzLmxlbmd0aCAmJiBmZWF0dXJlc1tmZWF0dXJlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVkaXRvcjoge1xyXG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXHJcbiAgICAgIC8vIG9ubHkgc2F2ZSBub25lIGZpbHRlciBmZWF0dXJlcyB0byBlZGl0b3JcclxuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLmZpbHRlcihmID0+ICFnZXRGaWx0ZXJJZEluRmVhdHVyZShmKSksXHJcbiAgICAgIG1vZGU6IGxhc3RGZWF0dXJlICYmIGxhc3RGZWF0dXJlLnByb3BlcnRpZXMuaXNDbG9zZWQgPyBFRElUT1JfTU9ERVMuRURJVCA6IHN0YXRlLmVkaXRvci5tb2RlXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gUmV0cmlldmUgZXhpc3RpbmcgZmVhdHVyZVxyXG4gIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmV9ID0gc3RhdGUuZWRpdG9yO1xyXG5cclxuICAvLyBJZiBubyBmZWF0dXJlIGlzIHNlbGVjdGVkIHdlIGNhbiBzaW1wbHkgcmV0dXJuIHNpbmNlIG5vIG9wZXJhdGlvbnNcclxuICBpZiAoIXNlbGVjdGVkRmVhdHVyZSkge1xyXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogY2hlY2sgaWYgdGhlIGZlYXR1cmUgaGFzIGNoYW5nZWRcclxuICBjb25zdCBmZWF0dXJlID0gZmVhdHVyZXMuZmluZChmID0+IGYuaWQgPT09IHNlbGVjdGVkRmVhdHVyZS5pZCk7XHJcblxyXG4gIC8vIGlmIGZlYXR1cmUgaXMgcGFydCBvZiBhIGZpbHRlclxyXG4gIGNvbnN0IGZpbHRlcklkID0gZmVhdHVyZSAmJiBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKTtcclxuICBpZiAoZmlsdGVySWQpIHtcclxuICAgIGNvbnN0IGZlYXR1cmVWYWx1ZSA9IGZlYXR1cmVUb0ZpbHRlclZhbHVlKGZlYXR1cmUsIGZpbHRlcklkKTtcclxuICAgIGNvbnN0IGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGZpbCA9PiBmaWwuaWQgPT09IGZpbHRlcklkKTtcclxuICAgIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7XHJcbiAgICAgIGlkeDogZmlsdGVySWR4LFxyXG4gICAgICBwcm9wOiAndmFsdWUnLFxyXG4gICAgICB2YWx1ZTogZmVhdHVyZVZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgY3VycmVudCBzZWxlY3RlZCBmZWF0dXJlXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0ge1tPYmplY3RdfSBmZWF0dXJlcyB0byBzdG9yZVxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkRmVhdHVyZVVwZGF0ZXIgPSAoc3RhdGUsIHtmZWF0dXJlfSkgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBlZGl0b3I6IHtcclxuICAgIC4uLnN0YXRlLmVkaXRvcixcclxuICAgIHNlbGVjdGVkRmVhdHVyZTogZmVhdHVyZVxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogRGVsZXRlIGV4aXN0aW5nIGZlYXR1cmUgZnJvbSBmaWx0ZXJzXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZEZlYXR1cmVJZCBmZWF0dXJlIHRvIGRlbGV0ZVxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZlYXR1cmVVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZX0pIHtcclxuICBpZiAoIWZlYXR1cmUpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlZGl0b3I6IHtcclxuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxyXG4gICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSkpIHtcclxuICAgIGNvbnN0IGZpbHRlcklkeCA9IG5ld1N0YXRlLmZpbHRlcnMuZmluZEluZGV4KGYgPT4gZi5pZCA9PT0gZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSkpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJJZHggPiAtMSA/IHJlbW92ZUZpbHRlclVwZGF0ZXIobmV3U3RhdGUsIHtpZHg6IGZpbHRlcklkeH0pIDogbmV3U3RhdGU7XHJcbiAgfVxyXG5cclxuICAvLyBtb2RpZnkgZWRpdG9yIG9iamVjdFxyXG4gIGNvbnN0IG5ld0VkaXRvciA9IHtcclxuICAgIC4uLnN0YXRlLmVkaXRvcixcclxuICAgIGZlYXR1cmVzOiBzdGF0ZS5lZGl0b3IuZmVhdHVyZXMuZmlsdGVyKGYgPT4gZi5pZCAhPT0gZmVhdHVyZS5pZCksXHJcbiAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlZGl0b3I6IG5ld0VkaXRvclxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgZmVhdHVyZSBhcyBsYXllciBmaWx0ZXJcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHN0YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXlsb2FkLmZlYXR1cmVJZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZC5sYXllclxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvbHlnb25GaWx0ZXJMYXllclVwZGF0ZXIoc3RhdGUsIHBheWxvYWQpIHtcclxuICBjb25zdCB7bGF5ZXIsIGZlYXR1cmV9ID0gcGF5bG9hZDtcclxuICBjb25zdCBmaWx0ZXJJZCA9IGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpO1xyXG5cclxuICAvLyBsZXQgbmV3RmlsdGVyID0gbnVsbDtcclxuICBsZXQgZmlsdGVySWR4O1xyXG4gIGxldCBuZXdMYXllcklkID0gW2xheWVyLmlkXTtcclxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcclxuICAvLyBJZiBwb2x5Z29uIGZpbHRlciBhbHJlYWR5IGV4aXN0cywgd2UgbmVlZCB0byBmaW5kIG91dCBpZiB0aGUgY3VycmVudCBsYXllciBpcyBhbHJlYWR5IGluY2x1ZGVkXHJcbiAgaWYgKGZpbHRlcklkKSB7XHJcbiAgICBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmID0+IGYuaWQgPT09IGZpbHRlcklkKTtcclxuXHJcbiAgICBpZiAoIXN0YXRlLmZpbHRlcnNbZmlsdGVySWR4XSkge1xyXG4gICAgICAvLyB3aGF0IGlmIGZpbHRlciBkb2Vzbid0IGV4aXN0Py4uLiBub3QgcG9zc2libGUuXHJcbiAgICAgIC8vIGJlY2F1c2UgZmVhdHVyZXMgaW4gdGhlIGVkaXRvciBpcyBwYXNzZWQgaW4gZnJvbSBmaWx0ZXJzIGFuZCBlZGl0b3JzLlxyXG4gICAgICAvLyBidXQgd2Ugd2lsbCBtb3ZlIHRoaXMgZmVhdHVyZSBiYWNrIHRvIGVkaXRvciBqdXN0IGluIGNhc2VcclxuICAgICAgY29uc3Qgbm9uZUZpbHRlckZlYXR1cmUgPSB7XHJcbiAgICAgICAgLi4uZmVhdHVyZSxcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAuLi5mZWF0dXJlLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICBmaWx0ZXJJZDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5lZGl0b3IsXHJcbiAgICAgICAgICBmZWF0dXJlczogWy4uLnN0YXRlLmVkaXRvci5mZWF0dXJlcywgbm9uZUZpbHRlckZlYXR1cmVdLFxyXG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBub25lRmlsdGVyRmVhdHVyZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7bGF5ZXJJZH0gPSBzdGF0ZS5maWx0ZXJzW2ZpbHRlcklkeF0gfHwgW107XHJcbiAgICBjb25zdCBpc0xheWVySW5jbHVkZWQgPSBsYXllcklkLmluY2x1ZGVzKGxheWVyLmlkKTtcclxuICAgIGNvbnN0IGZpbHRlciA9IHN0YXRlLmZpbHRlcnNbZmlsdGVySWR4XTtcclxuXHJcbiAgICBuZXdMYXllcklkID0gaXNMYXllckluY2x1ZGVkXHJcbiAgICAgID8gLy8gaWYgbGF5ZXIgaXMgaW5jbHVkZWQsIHJlbW92ZSBpdFxyXG4gICAgICAgIGZpbHRlci5sYXllcklkLmZpbHRlcihsID0+IGwgIT09IGxheWVyLmlkKVxyXG4gICAgICA6IFsuLi5maWx0ZXIubGF5ZXJJZCwgbGF5ZXIuaWRdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiB3ZSBoYXZlbid0IGNyZWF0ZSB0aGUgcG9seWdvbiBmaWx0ZXIsIGNyZWF0ZSBpdFxyXG4gICAgY29uc3QgbmV3RmlsdGVyID0gZ2VuZXJhdGVQb2x5Z29uRmlsdGVyKFtdLCBmZWF0dXJlKTtcclxuICAgIGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMubGVuZ3RoO1xyXG5cclxuICAgIC8vIGFkZCBmZWF0dXJlLCByZW1vdmUgZmVhdHVyZSBmcm9tIGVpZHRvclxyXG4gICAgbmV3U3RhdGUgPSB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBmaWx0ZXJzOiBbLi4uc3RhdGUuZmlsdGVycywgbmV3RmlsdGVyXSxcclxuICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxyXG4gICAgICAgIGZlYXR1cmVzOiBzdGF0ZS5lZGl0b3IuZmVhdHVyZXMuZmlsdGVyKGYgPT4gZi5pZCAhPT0gZmVhdHVyZS5pZCksXHJcbiAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBuZXdGaWx0ZXIudmFsdWVcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7XHJcbiAgICBpZHg6IGZpbHRlcklkeCxcclxuICAgIHByb3A6ICdsYXllcklkJyxcclxuICAgIHZhbHVlOiBuZXdMYXllcklkXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgZWRpdG9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXHJcbiAqIEBwYXJhbSB2aXNpYmxlXHJcbiAqIEByZXR1cm4ge09iamVjdH0gbmV4dFN0YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRWRpdG9yVmlzaWJpbGl0eShzdGF0ZSwge3Zpc2libGV9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZWRpdG9yOiB7XHJcbiAgICAgIC4uLnN0YXRlLmVkaXRvcixcclxuICAgICAgdmlzaWJsZTogIXN0YXRlLmVkaXRvci52aXNpYmxlXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=