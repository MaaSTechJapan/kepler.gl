"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeFilters = mergeFilters;
exports.mergeLayers = mergeLayers;
exports.mergeInteractions = mergeInteractions;
exports.mergeSplitMaps = mergeSplitMaps;
exports.mergeInteractionTooltipConfig = mergeInteractionTooltipConfig;
exports.mergeLayerBlending = mergeLayerBlending;
exports.mergeAnimationConfig = mergeAnimationConfig;
exports.validateSavedLayerColumns = validateSavedLayerColumns;
exports.validateSavedTextLabel = validateSavedTextLabel;
exports.validateSavedVisualChannels = validateSavedVisualChannels;
exports.validateLayerWithData = validateLayerWithData;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _lodash2 = _interopRequireDefault(require("lodash.pick"));

var _lodash3 = _interopRequireDefault(require("lodash.isequal"));

var _lodash4 = _interopRequireDefault(require("lodash.flattendeep"));

var _utils = require("../utils/utils");

var _filterUtils = require("../utils/filter-utils");

var _splitMapUtils = require("../utils/split-map-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Merge loaded filters with current state, if no fields or data are loaded
 * save it for later
 *
 * @param {Object} state
 * @param {Array<Object>} filtersToMerge
 * @return {Object} updatedState
 */
function mergeFilters(state, filtersToMerge) {
  var merged = [];
  var unmerged = [];
  var datasets = state.datasets;
  var updatedDatasets = datasets;

  if (!Array.isArray(filtersToMerge) || !filtersToMerge.length) {
    return state;
  } // merge filters


  filtersToMerge.forEach(function (filter) {
    // we can only look for datasets define in the filter dataId
    var datasetIds = (0, _utils.toArray)(filter.dataId); // we can merge a filter only if all datasets in filter.dataId are loaded

    if (datasetIds.every(function (d) {
      return datasets[d];
    })) {
      // all datasetIds in filter must be present the state datasets
      var _datasetIds$reduce = datasetIds.reduce(function (acc, datasetId) {
        var dataset = updatedDatasets[datasetId];
        var layers = state.layers.filter(function (l) {
          return l.config.dataId === dataset.id;
        });

        var _validateFilterWithDa = (0, _filterUtils.validateFilterWithData)(acc.augmentedDatasets[datasetId] || dataset, filter, layers),
            updatedFilter = _validateFilterWithDa.filter,
            updatedDataset = _validateFilterWithDa.dataset;

        if (updatedFilter) {
          return _objectSpread({}, acc, {
            // merge filter props
            filter: acc.filter ? _objectSpread({}, acc.filter, {}, (0, _filterUtils.mergeFilterDomainStep)(acc, updatedFilter)) : updatedFilter,
            applyToDatasets: [].concat((0, _toConsumableArray2["default"])(acc.applyToDatasets), [datasetId]),
            augmentedDatasets: _objectSpread({}, acc.augmentedDatasets, (0, _defineProperty2["default"])({}, datasetId, updatedDataset))
          });
        }

        return acc;
      }, {
        filter: null,
        applyToDatasets: [],
        augmentedDatasets: {}
      }),
          validatedFilter = _datasetIds$reduce.filter,
          applyToDatasets = _datasetIds$reduce.applyToDatasets,
          augmentedDatasets = _datasetIds$reduce.augmentedDatasets;

      if (validatedFilter && (0, _lodash3["default"])(datasetIds, applyToDatasets)) {
        merged.push(validatedFilter);
        updatedDatasets = _objectSpread({}, updatedDatasets, {}, augmentedDatasets);
      }
    } else {
      unmerged.push(filter);
    }
  }); // merge filter with existing

  var updatedFilters = [].concat((0, _toConsumableArray2["default"])(state.filters || []), merged);
  updatedFilters = (0, _gpuFilterUtils.resetFilterGpuMode)(updatedFilters);
  updatedFilters = (0, _gpuFilterUtils.assignGpuChannels)(updatedFilters); // filter data

  var datasetsToFilter = (0, _lodash["default"])((0, _lodash4["default"])(merged.map(function (f) {
    return f.dataId;
  })));
  var filtered = (0, _filterUtils.applyFiltersToDatasets)(datasetsToFilter, updatedDatasets, updatedFilters, state.layers);
  return _objectSpread({}, state, {
    filters: updatedFilters,
    datasets: filtered,
    filterToBeMerged: unmerged
  });
}
/**
 * Merge layers from de-serialized state, if no fields or data are loaded
 * save it for later
 *
 * @param {Object} state
 * @param {Array<Object>} layersToMerge
 * @return {Object} state
 */


function mergeLayers(state, layersToMerge) {
  var mergedLayer = [];
  var unmerged = [];
  var datasets = state.datasets;

  if (!Array.isArray(layersToMerge) || !layersToMerge.length) {
    return state;
  }

  layersToMerge.forEach(function (layer) {
    if (datasets[layer.config.dataId]) {
      // datasets are already loaded
      var validateLayer = validateLayerWithData(datasets[layer.config.dataId], layer, state.layerClasses);

      if (validateLayer) {
        mergedLayer.push(validateLayer);
      }
    } else {
      // datasets not yet loaded
      unmerged.push(layer);
    }
  });
  var layers = [].concat((0, _toConsumableArray2["default"])(state.layers), mergedLayer);
  var newLayerOrder = mergedLayer.map(function (_, i) {
    return state.layers.length + i;
  }); // put new layers in front of current layers

  var layerOrder = [].concat((0, _toConsumableArray2["default"])(newLayerOrder), (0, _toConsumableArray2["default"])(state.layerOrder));
  return _objectSpread({}, state, {
    layers: layers,
    layerOrder: layerOrder,
    layerToBeMerged: unmerged
  });
}
/**
 * Merge interactions with saved config
 *
 * @param {Object} state
 * @param {Object} interactionToBeMerged
 * @return {Object} mergedState
 */


function mergeInteractions(state, interactionToBeMerged) {
  var merged = {};
  var unmerged = {};

  if (interactionToBeMerged) {
    Object.keys(interactionToBeMerged).forEach(function (key) {
      if (!state.interactionConfig[key]) {
        return;
      }

      var currentConfig = state.interactionConfig[key].config;

      var _ref = interactionToBeMerged[key] || {},
          enabled = _ref.enabled,
          configSaved = (0, _objectWithoutProperties2["default"])(_ref, ["enabled"]);

      var configToMerge = configSaved;

      if (key === 'tooltip') {
        var _mergeInteractionTool = mergeInteractionTooltipConfig(state, configSaved),
            mergedTooltip = _mergeInteractionTool.mergedTooltip,
            unmergedTooltip = _mergeInteractionTool.unmergedTooltip; // merge new dataset tooltips with original dataset tooltips


        configToMerge = {
          fieldsToShow: _objectSpread({}, currentConfig.fieldsToShow, {}, mergedTooltip)
        };

        if (Object.keys(unmergedTooltip).length) {
          unmerged.tooltip = {
            fieldsToShow: unmergedTooltip,
            enabled: enabled
          };
        }
      }

      merged[key] = _objectSpread({}, state.interactionConfig[key], {
        enabled: enabled
      }, currentConfig ? {
        config: (0, _lodash2["default"])(_objectSpread({}, currentConfig, {}, configToMerge), Object.keys(currentConfig))
      } : {});
    });
  }

  return _objectSpread({}, state, {
    interactionConfig: _objectSpread({}, state.interactionConfig, {}, merged),
    interactionToBeMerged: unmerged
  });
}
/**
 * Merge splitMaps config with current visStete.
 * 1. if current map is split, but splitMap DOESNOT contain maps
 *    : don't merge anything
 * 2. if current map is NOT split, but splitMaps contain maps
 *    : add to splitMaps, and add current layers to splitMaps
 */


function mergeSplitMaps(state) {
  var splitMaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var merged = (0, _toConsumableArray2["default"])(state.splitMaps);
  var unmerged = [];
  splitMaps.forEach(function (sm, i) {
    Object.entries(sm.layers).forEach(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
          id = _ref3[0],
          value = _ref3[1];

      // check if layer exists
      var pushTo = state.layers.find(function (l) {
        return l.id === id;
      }) ? merged : unmerged; // create map panel if current map is not split

      pushTo[i] = pushTo[i] || {
        layers: pushTo === merged ? (0, _splitMapUtils.getInitialMapLayersForSplitMap)(state.layers) : []
      };
      pushTo[i].layers = _objectSpread({}, pushTo[i].layers, (0, _defineProperty2["default"])({}, id, value));
    });
  });
  return _objectSpread({}, state, {
    splitMaps: merged,
    splitMapsToBeMerged: unmerged
  });
}
/**
 * Merge interactionConfig.tooltip with saved config,
 * validate fieldsToShow
 *
 * @param {string} state
 * @param {Object} tooltipConfig
 * @return {Object} - {mergedTooltip: {}, unmergedTooltip: {}}
 */


function mergeInteractionTooltipConfig(state) {
  var tooltipConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var unmergedTooltip = {};
  var mergedTooltip = {};

  if (!tooltipConfig.fieldsToShow || !Object.keys(tooltipConfig.fieldsToShow).length) {
    return {
      mergedTooltip: mergedTooltip,
      unmergedTooltip: unmergedTooltip
    };
  }

  for (var dataId in tooltipConfig.fieldsToShow) {
    if (!state.datasets[dataId]) {
      // is not yet loaded
      unmergedTooltip[dataId] = tooltipConfig.fieldsToShow[dataId];
    } else {
      (function () {
        // if dataset is loaded
        var allFields = state.datasets[dataId].fields.map(function (d) {
          return d.name;
        });
        var foundFieldsToShow = tooltipConfig.fieldsToShow[dataId].filter(function (name) {
          return allFields.includes(name);
        });
        mergedTooltip[dataId] = foundFieldsToShow;
      })();
    }
  }

  return {
    mergedTooltip: mergedTooltip,
    unmergedTooltip: unmergedTooltip
  };
}
/**
 * Merge layerBlending with saved
 *
 * @param {object} state
 * @param {string} layerBlending
 * @return {object} merged state
 */


function mergeLayerBlending(state, layerBlending) {
  if (layerBlending && _defaultSettings.LAYER_BLENDINGS[layerBlending]) {
    return _objectSpread({}, state, {
      layerBlending: layerBlending
    });
  }

  return state;
}
/**
 * Merge animation config
 * @param {Object} state
 * @param {Object} animation
 */


function mergeAnimationConfig(state, animation) {
  if (animation && animation.currentTime) {
    return _objectSpread({}, state, {
      animationConfig: _objectSpread({}, state.animationConfig, {}, animation, {
        domain: null
      })
    });
  }

  return state;
}
/**
 * Validate saved layer columns with new data,
 * update fieldIdx based on new fields
 *
 * @param {Array<Object>} fields
 * @param {Object} savedCols
 * @param {Object} emptyCols
 * @return {null | Object} - validated columns or null
 */


function validateSavedLayerColumns(fields, savedCols, emptyCols) {
  var colFound = {}; // find actual column fieldIdx, in case it has changed

  var allColFound = Object.keys(emptyCols).every(function (key) {
    var saved = savedCols[key];
    colFound[key] = _objectSpread({}, emptyCols[key]); // TODO: replace with new approach

    var fieldIdx = fields.findIndex(function (_ref4) {
      var name = _ref4.name;
      return name === saved;
    });

    if (fieldIdx > -1) {
      // update found columns
      colFound[key].fieldIdx = fieldIdx;
      colFound[key].value = saved;
      return true;
    } // if col is optional, allow null value


    return emptyCols[key].optional || false;
  });
  return allColFound && colFound;
}
/**
 * Validate saved text label config with new data
 * refer to vis-state-schema.js TextLabelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} savedTextLabel
 * @return {Object} - validated textlabel
 */


function validateSavedTextLabel(fields, _ref5, savedTextLabel) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref5, 1),
      layerTextLabel = _ref6[0];

  var savedTextLabels = Array.isArray(savedTextLabel) ? savedTextLabel : [savedTextLabel]; // validate field

  return savedTextLabels.map(function (textLabel) {
    var field = textLabel.field ? fields.find(function (fd) {
      return Object.keys(textLabel.field).every(function (key) {
        return textLabel.field[key] === fd[key];
      });
    }) : null;
    return Object.keys(layerTextLabel).reduce(function (accu, key) {
      return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, key === 'field' ? field : textLabel[key] || layerTextLabel[key]));
    }, {});
  });
}
/**
 * Validate saved visual channels config with new data,
 * refer to vis-state-schema.js VisualChannelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} newLayer
 * @param {Object} savedLayer
 * @return {Object} - newLayer
 */


function validateSavedVisualChannels(fields, newLayer, savedLayer) {
  Object.values(newLayer.visualChannels).forEach(function (_ref7) {
    var field = _ref7.field,
        scale = _ref7.scale,
        key = _ref7.key;
    var foundField;

    if (savedLayer.config[field]) {
      foundField = fields.find(function (fd) {
        return Object.keys(savedLayer.config[field]).every(function (prop) {
          return savedLayer.config[field][prop] === fd[prop];
        });
      });
    }

    var foundChannel = _objectSpread({}, foundField ? (0, _defineProperty2["default"])({}, field, foundField) : {}, {}, savedLayer.config[scale] ? (0, _defineProperty2["default"])({}, scale, savedLayer.config[scale]) : {});

    if (Object.keys(foundChannel).length) {
      newLayer.updateLayerConfig(foundChannel);
      newLayer.validateVisualChannel(key);
    }
  });
  return newLayer;
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 *
 * @param {Array<Object>} fields
 * @param {string} dataId
 * @param {Object} savedLayer
 * @param {Object} layerClasses
 * @return {null | Object} - validated layer or null
 */


function validateLayerWithData(_ref10, savedLayer, layerClasses) {
  var fields = _ref10.fields,
      dataId = _ref10.id;
  var type = savedLayer.type; // layer doesnt have a valid type

  if (!layerClasses.hasOwnProperty(type) || !savedLayer.config || !savedLayer.config.columns) {
    return null;
  }

  var newLayer = new layerClasses[type]({
    id: savedLayer.id,
    dataId: dataId,
    label: savedLayer.config.label,
    color: savedLayer.config.color,
    isVisible: savedLayer.config.isVisible
  }); // find column fieldIdx

  var columns = validateSavedLayerColumns(fields, savedLayer.config.columns, newLayer.getLayerColumns());

  if (!columns) {
    return null;
  } // visual channel field is saved to be {name, type}
  // find visual channel field by matching both name and type
  // refer to vis-state-schema.js VisualChannelSchemaV1


  newLayer = validateSavedVisualChannels(fields, newLayer, savedLayer);
  var textLabel = savedLayer.config.textLabel && newLayer.config.textLabel ? validateSavedTextLabel(fields, newLayer.config.textLabel, savedLayer.config.textLabel) : newLayer.config.textLabel; // copy visConfig over to emptyLayer to make sure it has all the props

  var visConfig = newLayer.copyLayerConfig(newLayer.config.visConfig, savedLayer.config.visConfig || {}, {
    shallowCopy: ['colorRange', 'strokeColorRange']
  });
  newLayer.updateLayerConfig({
    columns: columns,
    visConfig: visConfig,
    textLabel: textLabel
  });
  return newLayer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtbWVyZ2VyLmpzIl0sIm5hbWVzIjpbIm1lcmdlRmlsdGVycyIsInN0YXRlIiwiZmlsdGVyc1RvTWVyZ2UiLCJtZXJnZWQiLCJ1bm1lcmdlZCIsImRhdGFzZXRzIiwidXBkYXRlZERhdGFzZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZm9yRWFjaCIsImZpbHRlciIsImRhdGFzZXRJZHMiLCJkYXRhSWQiLCJldmVyeSIsImQiLCJyZWR1Y2UiLCJhY2MiLCJkYXRhc2V0SWQiLCJkYXRhc2V0IiwibGF5ZXJzIiwibCIsImNvbmZpZyIsImlkIiwiYXVnbWVudGVkRGF0YXNldHMiLCJ1cGRhdGVkRmlsdGVyIiwidXBkYXRlZERhdGFzZXQiLCJhcHBseVRvRGF0YXNldHMiLCJ2YWxpZGF0ZWRGaWx0ZXIiLCJwdXNoIiwidXBkYXRlZEZpbHRlcnMiLCJmaWx0ZXJzIiwiZGF0YXNldHNUb0ZpbHRlciIsIm1hcCIsImYiLCJmaWx0ZXJlZCIsImZpbHRlclRvQmVNZXJnZWQiLCJtZXJnZUxheWVycyIsImxheWVyc1RvTWVyZ2UiLCJtZXJnZWRMYXllciIsImxheWVyIiwidmFsaWRhdGVMYXllciIsInZhbGlkYXRlTGF5ZXJXaXRoRGF0YSIsImxheWVyQ2xhc3NlcyIsIm5ld0xheWVyT3JkZXIiLCJfIiwiaSIsImxheWVyT3JkZXIiLCJsYXllclRvQmVNZXJnZWQiLCJtZXJnZUludGVyYWN0aW9ucyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImN1cnJlbnRDb25maWciLCJlbmFibGVkIiwiY29uZmlnU2F2ZWQiLCJjb25maWdUb01lcmdlIiwibWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWciLCJtZXJnZWRUb29sdGlwIiwidW5tZXJnZWRUb29sdGlwIiwiZmllbGRzVG9TaG93IiwidG9vbHRpcCIsIm1lcmdlU3BsaXRNYXBzIiwic3BsaXRNYXBzIiwic20iLCJlbnRyaWVzIiwidmFsdWUiLCJwdXNoVG8iLCJmaW5kIiwic3BsaXRNYXBzVG9CZU1lcmdlZCIsInRvb2x0aXBDb25maWciLCJhbGxGaWVsZHMiLCJmaWVsZHMiLCJuYW1lIiwiZm91bmRGaWVsZHNUb1Nob3ciLCJpbmNsdWRlcyIsIm1lcmdlTGF5ZXJCbGVuZGluZyIsImxheWVyQmxlbmRpbmciLCJMQVlFUl9CTEVORElOR1MiLCJtZXJnZUFuaW1hdGlvbkNvbmZpZyIsImFuaW1hdGlvbiIsImN1cnJlbnRUaW1lIiwiYW5pbWF0aW9uQ29uZmlnIiwiZG9tYWluIiwidmFsaWRhdGVTYXZlZExheWVyQ29sdW1ucyIsInNhdmVkQ29scyIsImVtcHR5Q29scyIsImNvbEZvdW5kIiwiYWxsQ29sRm91bmQiLCJzYXZlZCIsImZpZWxkSWR4IiwiZmluZEluZGV4Iiwib3B0aW9uYWwiLCJ2YWxpZGF0ZVNhdmVkVGV4dExhYmVsIiwic2F2ZWRUZXh0TGFiZWwiLCJsYXllclRleHRMYWJlbCIsInNhdmVkVGV4dExhYmVscyIsInRleHRMYWJlbCIsImZpZWxkIiwiZmQiLCJhY2N1IiwidmFsaWRhdGVTYXZlZFZpc3VhbENoYW5uZWxzIiwibmV3TGF5ZXIiLCJzYXZlZExheWVyIiwidmFsdWVzIiwidmlzdWFsQ2hhbm5lbHMiLCJzY2FsZSIsImZvdW5kRmllbGQiLCJwcm9wIiwiZm91bmRDaGFubmVsIiwidXBkYXRlTGF5ZXJDb25maWciLCJ2YWxpZGF0ZVZpc3VhbENoYW5uZWwiLCJ0eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjb2x1bW5zIiwibGFiZWwiLCJjb2xvciIsImlzVmlzaWJsZSIsImdldExheWVyQ29sdW1ucyIsInZpc0NvbmZpZyIsImNvcHlMYXllckNvbmZpZyIsInNoYWxsb3dDb3B5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7OztB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QUFHekJ0QixJQUFBQSxTQUFTLEVBQVRBO0FBSHlCLEdBQTNCO0FBTUEsU0FBT0ssUUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xyXG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gucGljayc7XHJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC5pc2VxdWFsJztcclxuaW1wb3J0IGZsYXR0ZW5EZWVwIGZyb20gJ2xvZGFzaC5mbGF0dGVuZGVlcCc7XHJcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHthcHBseUZpbHRlcnNUb0RhdGFzZXRzLCB2YWxpZGF0ZUZpbHRlcldpdGhEYXRhfSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtnZXRJbml0aWFsTWFwTGF5ZXJzRm9yU3BsaXRNYXB9IGZyb20gJ3V0aWxzL3NwbGl0LW1hcC11dGlscyc7XHJcbmltcG9ydCB7cmVzZXRGaWx0ZXJHcHVNb2RlLCBhc3NpZ25HcHVDaGFubmVsc30gZnJvbSAndXRpbHMvZ3B1LWZpbHRlci11dGlscyc7XHJcblxyXG5pbXBvcnQge0xBWUVSX0JMRU5ESU5HU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge21lcmdlRmlsdGVyRG9tYWluU3RlcH0gZnJvbSAnLi4vdXRpbHMvZmlsdGVyLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBNZXJnZSBsb2FkZWQgZmlsdGVycyB3aXRoIGN1cnJlbnQgc3RhdGUsIGlmIG5vIGZpZWxkcyBvciBkYXRhIGFyZSBsb2FkZWRcclxuICogc2F2ZSBpdCBmb3IgbGF0ZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmlsdGVyc1RvTWVyZ2VcclxuICogQHJldHVybiB7T2JqZWN0fSB1cGRhdGVkU3RhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUZpbHRlcnMoc3RhdGUsIGZpbHRlcnNUb01lcmdlKSB7XHJcbiAgY29uc3QgbWVyZ2VkID0gW107XHJcbiAgY29uc3QgdW5tZXJnZWQgPSBbXTtcclxuICBjb25zdCB7ZGF0YXNldHN9ID0gc3RhdGU7XHJcbiAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IGRhdGFzZXRzO1xyXG5cclxuICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsdGVyc1RvTWVyZ2UpIHx8ICFmaWx0ZXJzVG9NZXJnZS5sZW5ndGgpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIG1lcmdlIGZpbHRlcnNcclxuICBmaWx0ZXJzVG9NZXJnZS5mb3JFYWNoKGZpbHRlciA9PiB7XHJcbiAgICAvLyB3ZSBjYW4gb25seSBsb29rIGZvciBkYXRhc2V0cyBkZWZpbmUgaW4gdGhlIGZpbHRlciBkYXRhSWRcclxuICAgIGNvbnN0IGRhdGFzZXRJZHMgPSB0b0FycmF5KGZpbHRlci5kYXRhSWQpO1xyXG5cclxuICAgIC8vIHdlIGNhbiBtZXJnZSBhIGZpbHRlciBvbmx5IGlmIGFsbCBkYXRhc2V0cyBpbiBmaWx0ZXIuZGF0YUlkIGFyZSBsb2FkZWRcclxuICAgIGlmIChkYXRhc2V0SWRzLmV2ZXJ5KGQgPT4gZGF0YXNldHNbZF0pKSB7XHJcbiAgICAgIC8vIGFsbCBkYXRhc2V0SWRzIGluIGZpbHRlciBtdXN0IGJlIHByZXNlbnQgdGhlIHN0YXRlIGRhdGFzZXRzXHJcbiAgICAgIGNvbnN0IHtmaWx0ZXI6IHZhbGlkYXRlZEZpbHRlciwgYXBwbHlUb0RhdGFzZXRzLCBhdWdtZW50ZWREYXRhc2V0c30gPSBkYXRhc2V0SWRzLnJlZHVjZShcclxuICAgICAgICAoYWNjLCBkYXRhc2V0SWQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGFzZXQgPSB1cGRhdGVkRGF0YXNldHNbZGF0YXNldElkXTtcclxuICAgICAgICAgIGNvbnN0IGxheWVycyA9IHN0YXRlLmxheWVycy5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgPT09IGRhdGFzZXQuaWQpO1xyXG4gICAgICAgICAgY29uc3Qge2ZpbHRlcjogdXBkYXRlZEZpbHRlciwgZGF0YXNldDogdXBkYXRlZERhdGFzZXR9ID0gdmFsaWRhdGVGaWx0ZXJXaXRoRGF0YShcclxuICAgICAgICAgICAgYWNjLmF1Z21lbnRlZERhdGFzZXRzW2RhdGFzZXRJZF0gfHwgZGF0YXNldCxcclxuICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICBsYXllcnNcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKHVwZGF0ZWRGaWx0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgLy8gbWVyZ2UgZmlsdGVyIHByb3BzXHJcbiAgICAgICAgICAgICAgZmlsdGVyOiBhY2MuZmlsdGVyXHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY2MuZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lcmdlRmlsdGVyRG9tYWluU3RlcChhY2MsIHVwZGF0ZWRGaWx0ZXIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogdXBkYXRlZEZpbHRlcixcclxuXHJcbiAgICAgICAgICAgICAgYXBwbHlUb0RhdGFzZXRzOiBbLi4uYWNjLmFwcGx5VG9EYXRhc2V0cywgZGF0YXNldElkXSxcclxuXHJcbiAgICAgICAgICAgICAgYXVnbWVudGVkRGF0YXNldHM6IHtcclxuICAgICAgICAgICAgICAgIC4uLmFjYy5hdWdtZW50ZWREYXRhc2V0cyxcclxuICAgICAgICAgICAgICAgIFtkYXRhc2V0SWRdOiB1cGRhdGVkRGF0YXNldFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmlsdGVyOiBudWxsLFxyXG4gICAgICAgICAgYXBwbHlUb0RhdGFzZXRzOiBbXSxcclxuICAgICAgICAgIGF1Z21lbnRlZERhdGFzZXRzOiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh2YWxpZGF0ZWRGaWx0ZXIgJiYgaXNFcXVhbChkYXRhc2V0SWRzLCBhcHBseVRvRGF0YXNldHMpKSB7XHJcbiAgICAgICAgbWVyZ2VkLnB1c2godmFsaWRhdGVkRmlsdGVyKTtcclxuICAgICAgICB1cGRhdGVkRGF0YXNldHMgPSB7XHJcbiAgICAgICAgICAuLi51cGRhdGVkRGF0YXNldHMsXHJcbiAgICAgICAgICAuLi5hdWdtZW50ZWREYXRhc2V0c1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVubWVyZ2VkLnB1c2goZmlsdGVyKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gbWVyZ2UgZmlsdGVyIHdpdGggZXhpc3RpbmdcclxuICBsZXQgdXBkYXRlZEZpbHRlcnMgPSBbLi4uKHN0YXRlLmZpbHRlcnMgfHwgW10pLCAuLi5tZXJnZWRdO1xyXG4gIHVwZGF0ZWRGaWx0ZXJzID0gcmVzZXRGaWx0ZXJHcHVNb2RlKHVwZGF0ZWRGaWx0ZXJzKTtcclxuICB1cGRhdGVkRmlsdGVycyA9IGFzc2lnbkdwdUNoYW5uZWxzKHVwZGF0ZWRGaWx0ZXJzKTtcclxuICAvLyBmaWx0ZXIgZGF0YVxyXG4gIGNvbnN0IGRhdGFzZXRzVG9GaWx0ZXIgPSB1bmlxKGZsYXR0ZW5EZWVwKG1lcmdlZC5tYXAoZiA9PiBmLmRhdGFJZCkpKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWQgPSBhcHBseUZpbHRlcnNUb0RhdGFzZXRzKFxyXG4gICAgZGF0YXNldHNUb0ZpbHRlcixcclxuICAgIHVwZGF0ZWREYXRhc2V0cyxcclxuICAgIHVwZGF0ZWRGaWx0ZXJzLFxyXG4gICAgc3RhdGUubGF5ZXJzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZmlsdGVyczogdXBkYXRlZEZpbHRlcnMsXHJcbiAgICBkYXRhc2V0czogZmlsdGVyZWQsXHJcbiAgICBmaWx0ZXJUb0JlTWVyZ2VkOiB1bm1lcmdlZFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXJnZSBsYXllcnMgZnJvbSBkZS1zZXJpYWxpemVkIHN0YXRlLCBpZiBubyBmaWVsZHMgb3IgZGF0YSBhcmUgbG9hZGVkXHJcbiAqIHNhdmUgaXQgZm9yIGxhdGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGxheWVyc1RvTWVyZ2VcclxuICogQHJldHVybiB7T2JqZWN0fSBzdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJzKHN0YXRlLCBsYXllcnNUb01lcmdlKSB7XHJcbiAgY29uc3QgbWVyZ2VkTGF5ZXIgPSBbXTtcclxuICBjb25zdCB1bm1lcmdlZCA9IFtdO1xyXG5cclxuICBjb25zdCB7ZGF0YXNldHN9ID0gc3RhdGU7XHJcblxyXG4gIGlmICghQXJyYXkuaXNBcnJheShsYXllcnNUb01lcmdlKSB8fCAhbGF5ZXJzVG9NZXJnZS5sZW5ndGgpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGxheWVyc1RvTWVyZ2UuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICBpZiAoZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0pIHtcclxuICAgICAgLy8gZGF0YXNldHMgYXJlIGFscmVhZHkgbG9hZGVkXHJcbiAgICAgIGNvbnN0IHZhbGlkYXRlTGF5ZXIgPSB2YWxpZGF0ZUxheWVyV2l0aERhdGEoXHJcbiAgICAgICAgZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0sXHJcbiAgICAgICAgbGF5ZXIsXHJcbiAgICAgICAgc3RhdGUubGF5ZXJDbGFzc2VzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodmFsaWRhdGVMYXllcikge1xyXG4gICAgICAgIG1lcmdlZExheWVyLnB1c2godmFsaWRhdGVMYXllcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGRhdGFzZXRzIG5vdCB5ZXQgbG9hZGVkXHJcbiAgICAgIHVubWVyZ2VkLnB1c2gobGF5ZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsYXllcnMgPSBbLi4uc3RhdGUubGF5ZXJzLCAuLi5tZXJnZWRMYXllcl07XHJcbiAgY29uc3QgbmV3TGF5ZXJPcmRlciA9IG1lcmdlZExheWVyLm1hcCgoXywgaSkgPT4gc3RhdGUubGF5ZXJzLmxlbmd0aCArIGkpO1xyXG5cclxuICAvLyBwdXQgbmV3IGxheWVycyBpbiBmcm9udCBvZiBjdXJyZW50IGxheWVyc1xyXG4gIGNvbnN0IGxheWVyT3JkZXIgPSBbLi4ubmV3TGF5ZXJPcmRlciwgLi4uc3RhdGUubGF5ZXJPcmRlcl07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxheWVycyxcclxuICAgIGxheWVyT3JkZXIsXHJcbiAgICBsYXllclRvQmVNZXJnZWQ6IHVubWVyZ2VkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlIGludGVyYWN0aW9ucyB3aXRoIHNhdmVkIGNvbmZpZ1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IGludGVyYWN0aW9uVG9CZU1lcmdlZFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IG1lcmdlZFN0YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRlcmFjdGlvbnMoc3RhdGUsIGludGVyYWN0aW9uVG9CZU1lcmdlZCkge1xyXG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xyXG4gIGNvbnN0IHVubWVyZ2VkID0ge307XHJcblxyXG4gIGlmIChpbnRlcmFjdGlvblRvQmVNZXJnZWQpIHtcclxuICAgIE9iamVjdC5rZXlzKGludGVyYWN0aW9uVG9CZU1lcmdlZCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoIXN0YXRlLmludGVyYWN0aW9uQ29uZmlnW2tleV0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZztcclxuXHJcbiAgICAgIGNvbnN0IHtlbmFibGVkLCAuLi5jb25maWdTYXZlZH0gPSBpbnRlcmFjdGlvblRvQmVNZXJnZWRba2V5XSB8fCB7fTtcclxuICAgICAgbGV0IGNvbmZpZ1RvTWVyZ2UgPSBjb25maWdTYXZlZDtcclxuXHJcbiAgICAgIGlmIChrZXkgPT09ICd0b29sdGlwJykge1xyXG4gICAgICAgIGNvbnN0IHttZXJnZWRUb29sdGlwLCB1bm1lcmdlZFRvb2x0aXB9ID0gbWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWcoc3RhdGUsIGNvbmZpZ1NhdmVkKTtcclxuXHJcbiAgICAgICAgLy8gbWVyZ2UgbmV3IGRhdGFzZXQgdG9vbHRpcHMgd2l0aCBvcmlnaW5hbCBkYXRhc2V0IHRvb2x0aXBzXHJcbiAgICAgICAgY29uZmlnVG9NZXJnZSA9IHtcclxuICAgICAgICAgIGZpZWxkc1RvU2hvdzoge1xyXG4gICAgICAgICAgICAuLi5jdXJyZW50Q29uZmlnLmZpZWxkc1RvU2hvdyxcclxuICAgICAgICAgICAgLi4ubWVyZ2VkVG9vbHRpcFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1bm1lcmdlZFRvb2x0aXApLmxlbmd0aCkge1xyXG4gICAgICAgICAgdW5tZXJnZWQudG9vbHRpcCA9IHtmaWVsZHNUb1Nob3c6IHVubWVyZ2VkVG9vbHRpcCwgZW5hYmxlZH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtZXJnZWRba2V5XSA9IHtcclxuICAgICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLFxyXG4gICAgICAgIGVuYWJsZWQsXHJcbiAgICAgICAgLi4uKGN1cnJlbnRDb25maWdcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIGNvbmZpZzogcGljayhcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uY3VycmVudENvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgLi4uY29uZmlnVG9NZXJnZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnRDb25maWcpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHt9KVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpbnRlcmFjdGlvbkNvbmZpZzoge1xyXG4gICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcclxuICAgICAgLi4ubWVyZ2VkXHJcbiAgICB9LFxyXG4gICAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkOiB1bm1lcmdlZFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXJnZSBzcGxpdE1hcHMgY29uZmlnIHdpdGggY3VycmVudCB2aXNTdGV0ZS5cclxuICogMS4gaWYgY3VycmVudCBtYXAgaXMgc3BsaXQsIGJ1dCBzcGxpdE1hcCBET0VTTk9UIGNvbnRhaW4gbWFwc1xyXG4gKiAgICA6IGRvbid0IG1lcmdlIGFueXRoaW5nXHJcbiAqIDIuIGlmIGN1cnJlbnQgbWFwIGlzIE5PVCBzcGxpdCwgYnV0IHNwbGl0TWFwcyBjb250YWluIG1hcHNcclxuICogICAgOiBhZGQgdG8gc3BsaXRNYXBzLCBhbmQgYWRkIGN1cnJlbnQgbGF5ZXJzIHRvIHNwbGl0TWFwc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3BsaXRNYXBzKHN0YXRlLCBzcGxpdE1hcHMgPSBbXSkge1xyXG4gIGNvbnN0IG1lcmdlZCA9IFsuLi5zdGF0ZS5zcGxpdE1hcHNdO1xyXG4gIGNvbnN0IHVubWVyZ2VkID0gW107XHJcbiAgc3BsaXRNYXBzLmZvckVhY2goKHNtLCBpKSA9PiB7XHJcbiAgICBPYmplY3QuZW50cmllcyhzbS5sYXllcnMpLmZvckVhY2goKFtpZCwgdmFsdWVdKSA9PiB7XHJcbiAgICAgIC8vIGNoZWNrIGlmIGxheWVyIGV4aXN0c1xyXG4gICAgICBjb25zdCBwdXNoVG8gPSBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGlkKSA/IG1lcmdlZCA6IHVubWVyZ2VkO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIG1hcCBwYW5lbCBpZiBjdXJyZW50IG1hcCBpcyBub3Qgc3BsaXRcclxuICAgICAgcHVzaFRvW2ldID0gcHVzaFRvW2ldIHx8IHtcclxuICAgICAgICBsYXllcnM6IHB1c2hUbyA9PT0gbWVyZ2VkID8gZ2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwKHN0YXRlLmxheWVycykgOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICBwdXNoVG9baV0ubGF5ZXJzID0ge1xyXG4gICAgICAgIC4uLnB1c2hUb1tpXS5sYXllcnMsXHJcbiAgICAgICAgW2lkXTogdmFsdWVcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBzcGxpdE1hcHM6IG1lcmdlZCxcclxuICAgIHNwbGl0TWFwc1RvQmVNZXJnZWQ6IHVubWVyZ2VkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlIGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAgd2l0aCBzYXZlZCBjb25maWcsXHJcbiAqIHZhbGlkYXRlIGZpZWxkc1RvU2hvd1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IHRvb2x0aXBDb25maWdcclxuICogQHJldHVybiB7T2JqZWN0fSAtIHttZXJnZWRUb29sdGlwOiB7fSwgdW5tZXJnZWRUb29sdGlwOiB7fX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVyYWN0aW9uVG9vbHRpcENvbmZpZyhzdGF0ZSwgdG9vbHRpcENvbmZpZyA9IHt9KSB7XHJcbiAgY29uc3QgdW5tZXJnZWRUb29sdGlwID0ge307XHJcbiAgY29uc3QgbWVyZ2VkVG9vbHRpcCA9IHt9O1xyXG5cclxuICBpZiAoIXRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93IHx8ICFPYmplY3Qua2V5cyh0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvdykubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4ge21lcmdlZFRvb2x0aXAsIHVubWVyZ2VkVG9vbHRpcH07XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGRhdGFJZCBpbiB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvdykge1xyXG4gICAgaWYgKCFzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdKSB7XHJcbiAgICAgIC8vIGlzIG5vdCB5ZXQgbG9hZGVkXHJcbiAgICAgIHVubWVyZ2VkVG9vbHRpcFtkYXRhSWRdID0gdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIGRhdGFzZXQgaXMgbG9hZGVkXHJcbiAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF0uZmllbGRzLm1hcChkID0+IGQubmFtZSk7XHJcbiAgICAgIGNvbnN0IGZvdW5kRmllbGRzVG9TaG93ID0gdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXS5maWx0ZXIobmFtZSA9PlxyXG4gICAgICAgIGFsbEZpZWxkcy5pbmNsdWRlcyhuYW1lKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbWVyZ2VkVG9vbHRpcFtkYXRhSWRdID0gZm91bmRGaWVsZHNUb1Nob3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge21lcmdlZFRvb2x0aXAsIHVubWVyZ2VkVG9vbHRpcH07XHJcbn1cclxuLyoqXHJcbiAqIE1lcmdlIGxheWVyQmxlbmRpbmcgd2l0aCBzYXZlZFxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVyQmxlbmRpbmdcclxuICogQHJldHVybiB7b2JqZWN0fSBtZXJnZWQgc3RhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUxheWVyQmxlbmRpbmcoc3RhdGUsIGxheWVyQmxlbmRpbmcpIHtcclxuICBpZiAobGF5ZXJCbGVuZGluZyAmJiBMQVlFUl9CTEVORElOR1NbbGF5ZXJCbGVuZGluZ10pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBsYXllckJsZW5kaW5nXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG4vKipcclxuICogTWVyZ2UgYW5pbWF0aW9uIGNvbmZpZ1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IGFuaW1hdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQW5pbWF0aW9uQ29uZmlnKHN0YXRlLCBhbmltYXRpb24pIHtcclxuICBpZiAoYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5jdXJyZW50VGltZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGFuaW1hdGlvbkNvbmZpZzoge1xyXG4gICAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcclxuICAgICAgICAuLi5hbmltYXRpb24sXHJcbiAgICAgICAgZG9tYWluOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBzYXZlZCBsYXllciBjb2x1bW5zIHdpdGggbmV3IGRhdGEsXHJcbiAqIHVwZGF0ZSBmaWVsZElkeCBiYXNlZCBvbiBuZXcgZmllbGRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmllbGRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzYXZlZENvbHNcclxuICogQHBhcmFtIHtPYmplY3R9IGVtcHR5Q29sc1xyXG4gKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSAtIHZhbGlkYXRlZCBjb2x1bW5zIG9yIG51bGxcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTYXZlZExheWVyQ29sdW1ucyhmaWVsZHMsIHNhdmVkQ29scywgZW1wdHlDb2xzKSB7XHJcbiAgY29uc3QgY29sRm91bmQgPSB7fTtcclxuICAvLyBmaW5kIGFjdHVhbCBjb2x1bW4gZmllbGRJZHgsIGluIGNhc2UgaXQgaGFzIGNoYW5nZWRcclxuICBjb25zdCBhbGxDb2xGb3VuZCA9IE9iamVjdC5rZXlzKGVtcHR5Q29scykuZXZlcnkoa2V5ID0+IHtcclxuICAgIGNvbnN0IHNhdmVkID0gc2F2ZWRDb2xzW2tleV07XHJcbiAgICBjb2xGb3VuZFtrZXldID0gey4uLmVtcHR5Q29sc1trZXldfTtcclxuXHJcbiAgICAvLyBUT0RPOiByZXBsYWNlIHdpdGggbmV3IGFwcHJvYWNoXHJcbiAgICBjb25zdCBmaWVsZElkeCA9IGZpZWxkcy5maW5kSW5kZXgoKHtuYW1lfSkgPT4gbmFtZSA9PT0gc2F2ZWQpO1xyXG5cclxuICAgIGlmIChmaWVsZElkeCA+IC0xKSB7XHJcbiAgICAgIC8vIHVwZGF0ZSBmb3VuZCBjb2x1bW5zXHJcbiAgICAgIGNvbEZvdW5kW2tleV0uZmllbGRJZHggPSBmaWVsZElkeDtcclxuICAgICAgY29sRm91bmRba2V5XS52YWx1ZSA9IHNhdmVkO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBjb2wgaXMgb3B0aW9uYWwsIGFsbG93IG51bGwgdmFsdWVcclxuICAgIHJldHVybiBlbXB0eUNvbHNba2V5XS5vcHRpb25hbCB8fCBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGFsbENvbEZvdW5kICYmIGNvbEZvdW5kO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgc2F2ZWQgdGV4dCBsYWJlbCBjb25maWcgd2l0aCBuZXcgZGF0YVxyXG4gKiByZWZlciB0byB2aXMtc3RhdGUtc2NoZW1hLmpzIFRleHRMYWJlbFNjaGVtYVYxXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmllbGRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzYXZlZFRleHRMYWJlbFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdmFsaWRhdGVkIHRleHRsYWJlbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2F2ZWRUZXh0TGFiZWwoZmllbGRzLCBbbGF5ZXJUZXh0TGFiZWxdLCBzYXZlZFRleHRMYWJlbCkge1xyXG4gIGNvbnN0IHNhdmVkVGV4dExhYmVscyA9IEFycmF5LmlzQXJyYXkoc2F2ZWRUZXh0TGFiZWwpID8gc2F2ZWRUZXh0TGFiZWwgOiBbc2F2ZWRUZXh0TGFiZWxdO1xyXG5cclxuICAvLyB2YWxpZGF0ZSBmaWVsZFxyXG4gIHJldHVybiBzYXZlZFRleHRMYWJlbHMubWFwKHRleHRMYWJlbCA9PiB7XHJcbiAgICBjb25zdCBmaWVsZCA9IHRleHRMYWJlbC5maWVsZFxyXG4gICAgICA/IGZpZWxkcy5maW5kKGZkID0+XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh0ZXh0TGFiZWwuZmllbGQpLmV2ZXJ5KGtleSA9PiB0ZXh0TGFiZWwuZmllbGRba2V5XSA9PT0gZmRba2V5XSlcclxuICAgICAgICApXHJcbiAgICAgIDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGF5ZXJUZXh0TGFiZWwpLnJlZHVjZShcclxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgIFtrZXldOiBrZXkgPT09ICdmaWVsZCcgPyBmaWVsZCA6IHRleHRMYWJlbFtrZXldIHx8IGxheWVyVGV4dExhYmVsW2tleV1cclxuICAgICAgfSksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgc2F2ZWQgdmlzdWFsIGNoYW5uZWxzIGNvbmZpZyB3aXRoIG5ldyBkYXRhLFxyXG4gKiByZWZlciB0byB2aXMtc3RhdGUtc2NoZW1hLmpzIFZpc3VhbENoYW5uZWxTY2hlbWFWMVxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3TGF5ZXJcclxuICogQHBhcmFtIHtPYmplY3R9IHNhdmVkTGF5ZXJcclxuICogQHJldHVybiB7T2JqZWN0fSAtIG5ld0xheWVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTYXZlZFZpc3VhbENoYW5uZWxzKGZpZWxkcywgbmV3TGF5ZXIsIHNhdmVkTGF5ZXIpIHtcclxuICBPYmplY3QudmFsdWVzKG5ld0xheWVyLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKCh7ZmllbGQsIHNjYWxlLCBrZXl9KSA9PiB7XHJcbiAgICBsZXQgZm91bmRGaWVsZDtcclxuICAgIGlmIChzYXZlZExheWVyLmNvbmZpZ1tmaWVsZF0pIHtcclxuICAgICAgZm91bmRGaWVsZCA9IGZpZWxkcy5maW5kKGZkID0+XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc2F2ZWRMYXllci5jb25maWdbZmllbGRdKS5ldmVyeShcclxuICAgICAgICAgIHByb3AgPT4gc2F2ZWRMYXllci5jb25maWdbZmllbGRdW3Byb3BdID09PSBmZFtwcm9wXVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3VuZENoYW5uZWwgPSB7XHJcbiAgICAgIC4uLihmb3VuZEZpZWxkID8ge1tmaWVsZF06IGZvdW5kRmllbGR9IDoge30pLFxyXG4gICAgICAuLi4oc2F2ZWRMYXllci5jb25maWdbc2NhbGVdID8ge1tzY2FsZV06IHNhdmVkTGF5ZXIuY29uZmlnW3NjYWxlXX0gOiB7fSlcclxuICAgIH07XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoZm91bmRDaGFubmVsKS5sZW5ndGgpIHtcclxuICAgICAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoZm91bmRDaGFubmVsKTtcclxuICAgICAgbmV3TGF5ZXIudmFsaWRhdGVWaXN1YWxDaGFubmVsKGtleSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld0xheWVyO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgc2F2ZWQgbGF5ZXIgY29uZmlnIHdpdGggbmV3IGRhdGEsXHJcbiAqIHVwZGF0ZSBmaWVsZElkeCBiYXNlZCBvbiBuZXcgZmllbGRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmllbGRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhSWRcclxuICogQHBhcmFtIHtPYmplY3R9IHNhdmVkTGF5ZXJcclxuICogQHBhcmFtIHtPYmplY3R9IGxheWVyQ2xhc3Nlc1xyXG4gKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSAtIHZhbGlkYXRlZCBsYXllciBvciBudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMYXllcldpdGhEYXRhKHtmaWVsZHMsIGlkOiBkYXRhSWR9LCBzYXZlZExheWVyLCBsYXllckNsYXNzZXMpIHtcclxuICBjb25zdCB7dHlwZX0gPSBzYXZlZExheWVyO1xyXG4gIC8vIGxheWVyIGRvZXNudCBoYXZlIGEgdmFsaWQgdHlwZVxyXG4gIGlmICghbGF5ZXJDbGFzc2VzLmhhc093blByb3BlcnR5KHR5cGUpIHx8ICFzYXZlZExheWVyLmNvbmZpZyB8fCAhc2F2ZWRMYXllci5jb25maWcuY29sdW1ucykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmV3TGF5ZXIgPSBuZXcgbGF5ZXJDbGFzc2VzW3R5cGVdKHtcclxuICAgIGlkOiBzYXZlZExheWVyLmlkLFxyXG4gICAgZGF0YUlkLFxyXG4gICAgbGFiZWw6IHNhdmVkTGF5ZXIuY29uZmlnLmxhYmVsLFxyXG4gICAgY29sb3I6IHNhdmVkTGF5ZXIuY29uZmlnLmNvbG9yLFxyXG4gICAgaXNWaXNpYmxlOiBzYXZlZExheWVyLmNvbmZpZy5pc1Zpc2libGVcclxuICB9KTtcclxuXHJcbiAgLy8gZmluZCBjb2x1bW4gZmllbGRJZHhcclxuICBjb25zdCBjb2x1bW5zID0gdmFsaWRhdGVTYXZlZExheWVyQ29sdW1ucyhcclxuICAgIGZpZWxkcyxcclxuICAgIHNhdmVkTGF5ZXIuY29uZmlnLmNvbHVtbnMsXHJcbiAgICBuZXdMYXllci5nZXRMYXllckNvbHVtbnMoKVxyXG4gICk7XHJcblxyXG4gIGlmICghY29sdW1ucykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyB2aXN1YWwgY2hhbm5lbCBmaWVsZCBpcyBzYXZlZCB0byBiZSB7bmFtZSwgdHlwZX1cclxuICAvLyBmaW5kIHZpc3VhbCBjaGFubmVsIGZpZWxkIGJ5IG1hdGNoaW5nIGJvdGggbmFtZSBhbmQgdHlwZVxyXG4gIC8vIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXHJcbiAgbmV3TGF5ZXIgPSB2YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHMoZmllbGRzLCBuZXdMYXllciwgc2F2ZWRMYXllcik7XHJcblxyXG4gIGNvbnN0IHRleHRMYWJlbCA9XHJcbiAgICBzYXZlZExheWVyLmNvbmZpZy50ZXh0TGFiZWwgJiYgbmV3TGF5ZXIuY29uZmlnLnRleHRMYWJlbFxyXG4gICAgICA/IHZhbGlkYXRlU2F2ZWRUZXh0TGFiZWwoZmllbGRzLCBuZXdMYXllci5jb25maWcudGV4dExhYmVsLCBzYXZlZExheWVyLmNvbmZpZy50ZXh0TGFiZWwpXHJcbiAgICAgIDogbmV3TGF5ZXIuY29uZmlnLnRleHRMYWJlbDtcclxuXHJcbiAgLy8gY29weSB2aXNDb25maWcgb3ZlciB0byBlbXB0eUxheWVyIHRvIG1ha2Ugc3VyZSBpdCBoYXMgYWxsIHRoZSBwcm9wc1xyXG4gIGNvbnN0IHZpc0NvbmZpZyA9IG5ld0xheWVyLmNvcHlMYXllckNvbmZpZyhcclxuICAgIG5ld0xheWVyLmNvbmZpZy52aXNDb25maWcsXHJcbiAgICBzYXZlZExheWVyLmNvbmZpZy52aXNDb25maWcgfHwge30sXHJcbiAgICB7c2hhbGxvd0NvcHk6IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ119XHJcbiAgKTtcclxuXHJcbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xyXG4gICAgY29sdW1ucyxcclxuICAgIHZpc0NvbmZpZyxcclxuICAgIHRleHRMYWJlbFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmV3TGF5ZXI7XHJcbn1cclxuIl19