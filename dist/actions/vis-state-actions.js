"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTextLabelChange = layerTextLabelChange;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.layerColorUIChange = layerColorUIChange;
exports.updateLayerBlending = updateLayerBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.updateVisData = updateVisData;
exports.toggleFilterAnimation = toggleFilterAnimation;
exports.updateFilterAnimationSpeed = updateFilterAnimationSpeed;
exports.updateAnimationTime = updateAnimationTime;
exports.updateLayerAnimationSpeed = updateLayerAnimationSpeed;
exports.enlargeFilter = enlargeFilter;
exports.toggleFilterFeature = toggleFilterFeature;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.onMouseMove = onMouseMove;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setFilterPlot = setFilterPlot;
exports.setMapInfo = setMapInfo;
exports.loadFiles = loadFiles;
exports.loadFileSuccess = loadFileSuccess;
exports.loadFilesErr = loadFilesErr;
exports.setFeatures = setFeatures;
exports.setPolygonFilterLayer = setPolygonFilterLayer;
exports.setSelectedFeature = setSelectedFeature;
exports.deleteFeature = deleteFeature;
exports.setEditorMode = setEditorMode;
exports.applyCPUFilter = applyCPUFilter;
exports.toggleEditorVisibility = toggleEditorVisibility;

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
// vis-state-reducer

/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {Object} newConfig - new config
 * @returns {{type: ActionTypes.LAYER_CONFIG_CHANGE, oldLayer: oldLayer, newConfig: newConfig}}
 * @public
 */
function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
}
/**
 * Update layer text label
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {Number} idx -`idx` of text label to be updated
 * @param {string} prop - `prop` of text label, e,g, `anchor`, `alignment`, `color`, `size`, `field`
 * @param {*} value - new value
 * @returns {{type: ActionTypes.LAYER_TEXT_LABEL_CHANGE, oldLayer: oldLayer, idx: idx, prop: prop, value:}}
 * @public
 */


function layerTextLabelChange(oldLayer, idx, prop, value) {
  return {
    type: _actionTypes["default"].LAYER_TEXT_LABEL_CHANGE,
    oldLayer: oldLayer,
    idx: idx,
    prop: prop,
    value: value
  };
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {string} newType - new type
 * @returns {{type: ActionTypes.LAYER_TYPE_CHANGE, oldLayer: oldLayer, newType: newType}}
 * @public
 */


function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes["default"].LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}
/**
 * Update layer visual channel
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {Object} newConfig - new visual channel config
 * @param {string} channel - channel to be updated
 * @returns {{type: ActionTypes.LAYER_VISUAL_CHANNEL_CHANGE, oldLayer: oldLayer, newConfig: newConfig, channel: channel}}
 * @public
 */


function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}
/**
 * Update layer `visConfig`
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {Object} newVisConfig - new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns {{type: ActionTypes.LAYER_VIS_CONFIG_CHANGE, oldLayer: oldLayer, newVisConfig: newVisConfig}}
 * @public
 */


function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}
/**
 * Set the color palette ui for layer color
 * @memberOf visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {String} prop - which color prop
 * @param {object} newConfig - to be merged
 * @public
 */


function layerColorUIChange(oldLayer, prop, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_COLOR_UI_CHANGE,
    oldLayer: oldLayer,
    prop: prop,
    newConfig: newConfig
  };
}
/**
 * Update layer blending mode
 * @memberof visStateActions
 * @param {string} mode one of `additive`, `normal` and `subtractive`
 * @returns {{type: ActionTypes.UPDATE_LAYER_BLENDING, mode: mode}}
 * @public
 */


function updateLayerBlending(mode) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_BLENDING,
    mode: mode
  };
}
/**
 * Update `interactionConfig`
 * @memberof visStateActions
 * @param {Object} config - new config as key value map: `{tooltip: {enabled: true}}`
 * @returns {{type: ActionTypes.INTERACTION_CONFIG_CHANGE, config: config}}
 * @public
 */


function interactionConfigChange(config) {
  return {
    type: _actionTypes["default"].INTERACTION_CONFIG_CHANGE,
    config: config
  };
}
/**
 * Update filter property
 * @memberof visStateActions
 * @param {Number} idx -`idx` of filter to be updated
 * @param {string} prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param {*} value - new value
 * @param {Number} valueIndex - array properties like dataset require index in order to improve performance
 * @returns {{type: ActionTypes.SET_FILTER, idx: idx, prop: prop, value: value}}
 * @public
 */


function setFilter(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}
/**
 * Add a new filter
 * @memberof visStateActions
 * @param {string} dataId - dataset `id` this new filter is associated with
 * @returns {{type: ActionTypes.ADD_FILTER, dataId: dataId}}
 * @public
 */


function addFilter(dataId) {
  return {
    type: _actionTypes["default"].ADD_FILTER,
    dataId: dataId
  };
}
/**
 * Add a new layer
 * @memberof visStateActions
 * @param {Object} props - new layer props
 * @returns {{type: ActionTypes.ADD_LAYER, props: props}}
 * @public
 */


function addLayer(props) {
  return {
    type: _actionTypes["default"].ADD_LAYER,
    props: props
  };
}
/**
 * Reorder layer, order is an array of layer indexes, index 0 will be the one at the bottom
 * @memberof visStateActions
 * @param {Array<Number>} order an array of layer indexes
 * @returns {{type: ActionTypes.REORDER_LAYER, order: order}}
 * @public
 * @example
 *
 * // bring `layers[1]` below `layers[0]`, the sequence layers will be rendered is `1`, `0`, `2`, `3`.
 * // `1` will be at the bottom, `3` will be at the top.
 * this.props.dispatch(reorderLayer([1, 0, 2, 3]));
 */


function reorderLayer(order) {
  return {
    type: _actionTypes["default"].REORDER_LAYER,
    order: order
  };
}
/**
 * Remove a filter from `visState.filters`, once a filter is removed, data will be re-filtered and layer will be updated
 * @memberof visStateActions
 * @param {Number} idx idx of filter to be removed
 * @returns {{type: ActionTypes.REMOVE_FILTER, idx: idx}}
 * @public
 */


function removeFilter(idx) {
  return {
    type: _actionTypes["default"].REMOVE_FILTER,
    idx: idx
  };
}
/**
 * Remove a layer
 * @memberof visStateActions
 * @param {Number} idx idx of layer to be removed
 * @returns {{type: ActionTypes.REMOVE_LAYER, idx: idx}}
 * @public
 */


function removeLayer(idx) {
  return {
    type: _actionTypes["default"].REMOVE_LAYER,
    idx: idx
  };
}
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateActions
 * @param {string} key dataset id
 * @returns {{type: ActionTypes.REMOVE_DATASET, key: key}}
 * @public
 */


function removeDataset(key) {
  return {
    type: _actionTypes["default"].REMOVE_DATASET,
    key: key
  };
}
/**
 * Display dataset table in a modal
 * @memberof visStateActions
 * @param {string} dataId dataset id to show in table
 * @returns {{type: ActionTypes.SHOW_DATASET_TABLE, dataId: dataId}}
 * @public
 */


function showDatasetTable(dataId) {
  return {
    type: _actionTypes["default"].SHOW_DATASET_TABLE,
    dataId: dataId
  };
}
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateActions
 * @param {Array<Object>|Object} datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} datasets.info -info of a dataset
 * @param {string} datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} datasets.info.label - A display name of this dataset
 * @param {Object} datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} datasets.data.fields - ***required** Array of fields,
 * @param {string} datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`

 * @param {Object} options
 * @param {boolean} options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param {boolean} options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {Object} config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @returns {{type: ActionTypes.UPDATE_VIS_DATA, datasets: datasets, options: options, config: config}}
 * @public
 */


function updateVisData(datasets, options, config) {
  return {
    type: _actionTypes["default"].UPDATE_VIS_DATA,
    datasets: datasets,
    options: options,
    config: config
  };
}
/**
 * Start and end filter animation
 * @memberof visStateActions
 * @param {Number} idx - idx of filter
 * @returns {{type: ActionTypes.TOGGLE_FILTER_ANIMATION, idx: idx}}
 * @public
 */


function toggleFilterAnimation(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}
/**
 * Change filter animation speed
 * @memberof visStateActions
 * @param {Number} idx -  `idx` of filter
 * @param {Number} speed - `speed` to change it to. `speed` is a multiplier
 * @returns {{type: ActionTypes.UPDATE_FILTER_ANIMATION_SPEED, idx: idx, speed: speed}}
 * @public
 */


function updateFilterAnimationSpeed(idx, speed) {
  return {
    type: _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED,
    idx: idx,
    speed: speed
  };
}
/**
 * Reset animation
 * @memberof visStateActions
 * @param {Number} value -  Current value of the slider
 * @returns {{type: ActionTypes.UPDATE_ANIMATION_TIME, value: value}}
 * @public
 */


function updateAnimationTime(value) {
  return {
    type: _actionTypes["default"].UPDATE_ANIMATION_TIME,
    value: value
  };
}
/**
 * update trip layer animation speed
 * @memberof visStateActions
 * @param {Number} speed - `speed` to change it to. `speed` is a multiplier
 * @returns {{type: ActionTypes.UPDATE_LAYER_ANIMATION_SPEED, speed: speed}}
 * @public
 */


function updateLayerAnimationSpeed(speed) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_ANIMATION_SPEED,
    speed: speed
  };
}
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateActions
 * @param {Number} idx - index of filter to enlarge
 * @returns {{type: ActionTypes.ENLARGE_FILTER, idx: idx}}
 * @public
 */


function enlargeFilter(idx) {
  return {
    type: _actionTypes["default"].ENLARGE_FILTER,
    idx: idx
  };
}
/**
 * Show/hide filter feature on map
 * @memberof visStateActions
 * @param {Number} idx - index of filter feature to show/hide
 * @return {{type: ActionTypes.TOGGLE_FILTER_FEATURE, idx: idx}}
 */


function toggleFilterFeature(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_FEATURE,
    idx: idx
  };
}
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateActions
 * @param {Object} info - Object hovered, returned by deck.gl
 * @returns {{type: ActionTypes.LAYER_HOVER, info: info}}
 * @public
 */


function onLayerHover(info) {
  return {
    type: _actionTypes["default"].LAYER_HOVER,
    info: info
  };
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateActions
 * @param {Object} info - Object clicked, returned by deck.gl
 * @returns {{type: ActionTypes.LAYER_CLICK, info: info}}
 * @public
 */


function onLayerClick(info) {
  return {
    type: _actionTypes["default"].LAYER_CLICK,
    info: info
  };
}
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateActions
 * @returns {{type: ActionTypes.MAP_CLICK}}
 * @public
 */


function onMapClick() {
  return {
    type: _actionTypes["default"].MAP_CLICK
  };
}
/**
 * Trigger map mouse moveevent, payload would be
 * React-map-gl PointerEvent
 * https://uber.github.io/react-map-gl/#/documentation/api-reference/pointer-event
 *
 * @memberof visStateActions
 * @param {Object} evt - PointerEvent
 * @returns {{type: ActionTypes.MAP_CLICK}}
 * @public
 */


function onMouseMove(evt) {
  return {
    type: _actionTypes["default"].MOUSE_MOVE,
    evt: evt
  };
}
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateActions
 * @param {Number} mapIndex - index of the split map
 * @param {string} layerId - id of the layer
 * @returns {{type: ActionTypes.TOGGLE_LAYER_FOR_MAP, mapIndex: *, layerId: *}}
 * @public
 */


function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param {Number} idx
 * @param {Object} newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @returns {{type: ActionTypes.SET_FILTER_PLOT, idx: *, newProp: *}}
 * @public
 */


function setFilterPlot(idx, newProp) {
  return {
    type: _actionTypes["default"].SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param {Number} idx
 * @param {Object} newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @returns {{type: ActionTypes.SET_FILTER_PLOT, idx: *, newProp: *}}
 * @public
 */


function setMapInfo(info) {
  return {
    type: _actionTypes["default"].SET_MAP_INFO,
    info: info
  };
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateActions
 * @param {Array<Object>} files array of fileblob
 * @returns {{type: ActionTypes.LOAD_FILES, files: *}}
 * @public
 */


function loadFiles(files) {
  return {
    type: _actionTypes["default"].LOAD_FILES,
    files: files
  };
}

function loadFileSuccess(_ref) {
  var fileCache = _ref.fileCache,
      filesToLoad = _ref.filesToLoad,
      totalCount = _ref.totalCount;
  return {
    type: _actionTypes["default"].LOAD_FILES_SUCCESS,
    fileCache: fileCache,
    filesToLoad: filesToLoad,
    totalCount: totalCount
  };
}
/**
 * Trigger loading file error
 * @memberof visStateActions
 * @param {*} error
 * @returns {{type: ActionTypes.LOAD_FILES_ERR, error: Object}}
 * @public
 */


function loadFilesErr(error) {
  return {
    type: _actionTypes["default"].LOAD_FILES_ERR,
    error: error
  };
}
/**
 * Store features to state
 * @memberof visStateActions
 * @param {Array<Object>} features
 * @returns {{type: ActionTypes.SET_FEATURES, features: Object}}
 */


function setFeatures(features) {
  return {
    type: _actionTypes["default"].SET_FEATURES,
    features: features
  };
}
/**
 * It will apply the provide feature as filter to the given layer.
 * If the given feature is already applied as filter to the layer, it will remove the layer from the filter
 * @memberof visStateActions
 * @param {Object} layer
 * @param {Object} feature
 * @return {{feature: *, type: ActionTypes.SET_POLYGON_FILTER_LAYER, layer: *}}
 */


function setPolygonFilterLayer(layer, feature) {
  return {
    type: _actionTypes["default"].SET_POLYGON_FILTER_LAYER,
    layer: layer,
    feature: feature
  };
}
/**
 * Set the current feature to be edited/deleted
 * @memberof visStateActions
 * @param {Object} feature
 * @return {{feature: feature, type: ActionTypes.SET_SELECTED_FEATURE}}
 */


function setSelectedFeature(feature) {
  return {
    type: _actionTypes["default"].SET_SELECTED_FEATURE,
    feature: feature
  };
}
/**
 * Delete the given feature
 * @memberof visStateActions
 * @param {Object} feature
 * @return {{type: ActionTypes.DELETE_FEATURE, feature: feature}}
 */


function deleteFeature(feature) {
  return {
    type: _actionTypes["default"].DELETE_FEATURE,
    feature: feature
  };
}
/** Set the map mode
 * @memberof visStateActions
 * @param {string} mode one of EDITOR_MODES
 * @return {{type: ActionTypes. SET_EDITOR_MODE, mode: *}}
 * @public
 * @example
 * import {setMapMode} from 'kepler.gl/actions';
 * import {EDITOR_MODES} from 'kepler.gl/constants';
 *
 * this.props.dispatch(setMapMode(EDITOR_MODES.DRAW_POLYGON));
 */


function setEditorMode(mode) {
  return {
    type: _actionTypes["default"].SET_EDITOR_MODE,
    mode: mode
  };
}
/**
 * Trigger CPU filter of selected dataset
 * @memberof visStateActions
 * @param {string | Arrary<string>} dataId - single dataId or an array of dataIds
 * @returns {{type: ActionTypes.APPLY_CPU_FILTER, dataId: string}}
 * @public
 */


function applyCPUFilter(dataId) {
  return {
    type: _actionTypes["default"].APPLY_CPU_FILTER,
    dataId: dataId
  };
}
/**

 * Toggle editor layer visibility
 * @memberof visStateActions
 * @return {{type: ActionTypes.TOGGLE_EDITOR_VISIBILITY}}
 */


function toggleEditorVisibility() {
  return {
    type: _actionTypes["default"].TOGGLE_EDITOR_VISIBILITY
  };
}
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by `visState` reducer.
 * They manage how data is processed, filtered and displayed on the map by operates on layers,
 * filters and interaction settings.
 *
 * @public
 */

/* eslint-disable no-unused-vars */


var visStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwib2xkTGF5ZXIiLCJuZXdDb25maWciLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJpZHgiLCJwcm9wIiwidmFsdWUiLCJMQVlFUl9URVhUX0xBQkVMX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZSIsIm5ld1R5cGUiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImNoYW5uZWwiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsIm5ld1Zpc0NvbmZpZyIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwibGF5ZXJDb2xvclVJQ2hhbmdlIiwiTEFZRVJfQ09MT1JfVUlfQ0hBTkdFIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsIm1vZGUiLCJVUERBVEVfTEFZRVJfQkxFTkRJTkciLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJzZXRGaWx0ZXIiLCJ2YWx1ZUluZGV4IiwiU0VUX0ZJTFRFUiIsImFkZEZpbHRlciIsImRhdGFJZCIsIkFERF9GSUxURVIiLCJhZGRMYXllciIsInByb3BzIiwiQUREX0xBWUVSIiwicmVvcmRlckxheWVyIiwib3JkZXIiLCJSRU9SREVSX0xBWUVSIiwicmVtb3ZlRmlsdGVyIiwiUkVNT1ZFX0ZJTFRFUiIsInJlbW92ZUxheWVyIiwiUkVNT1ZFX0xBWUVSIiwicmVtb3ZlRGF0YXNldCIsImtleSIsIlJFTU9WRV9EQVRBU0VUIiwic2hvd0RhdGFzZXRUYWJsZSIsIlNIT1dfREFUQVNFVF9UQUJMRSIsInVwZGF0ZVZpc0RhdGEiLCJkYXRhc2V0cyIsIm9wdGlvbnMiLCJVUERBVEVfVklTX0RBVEEiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb24iLCJUT0dHTEVfRklMVEVSX0FOSU1BVElPTiIsInVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkIiwic3BlZWQiLCJVUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCIsInVwZGF0ZUFuaW1hdGlvblRpbWUiLCJVUERBVEVfQU5JTUFUSU9OX1RJTUUiLCJ1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkIiwiVVBEQVRFX0xBWUVSX0FOSU1BVElPTl9TUEVFRCIsImVubGFyZ2VGaWx0ZXIiLCJFTkxBUkdFX0ZJTFRFUiIsInRvZ2dsZUZpbHRlckZlYXR1cmUiLCJUT0dHTEVfRklMVEVSX0ZFQVRVUkUiLCJvbkxheWVySG92ZXIiLCJpbmZvIiwiTEFZRVJfSE9WRVIiLCJvbkxheWVyQ2xpY2siLCJMQVlFUl9DTElDSyIsIm9uTWFwQ2xpY2siLCJNQVBfQ0xJQ0siLCJvbk1vdXNlTW92ZSIsImV2dCIsIk1PVVNFX01PVkUiLCJ0b2dnbGVMYXllckZvck1hcCIsIm1hcEluZGV4IiwibGF5ZXJJZCIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwic2V0RmlsdGVyUGxvdCIsIm5ld1Byb3AiLCJTRVRfRklMVEVSX1BMT1QiLCJzZXRNYXBJbmZvIiwiU0VUX01BUF9JTkZPIiwibG9hZEZpbGVzIiwiZmlsZXMiLCJMT0FEX0ZJTEVTIiwibG9hZEZpbGVTdWNjZXNzIiwiZmlsZUNhY2hlIiwiZmlsZXNUb0xvYWQiLCJ0b3RhbENvdW50IiwiTE9BRF9GSUxFU19TVUNDRVNTIiwibG9hZEZpbGVzRXJyIiwiZXJyb3IiLCJMT0FEX0ZJTEVTX0VSUiIsInNldEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJTRVRfRkVBVFVSRVMiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXIiLCJsYXllciIsImZlYXR1cmUiLCJTRVRfUE9MWUdPTl9GSUxURVJfTEFZRVIiLCJzZXRTZWxlY3RlZEZlYXR1cmUiLCJTRVRfU0VMRUNURURfRkVBVFVSRSIsImRlbGV0ZUZlYXR1cmUiLCJERUxFVEVfRkVBVFVSRSIsInNldEVkaXRvck1vZGUiLCJTRVRfRURJVE9SX01PREUiLCJhcHBseUNQVUZpbHRlciIsIkFQUExZX0NQVV9GSUxURVIiLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5IiwiVE9HR0xFX0VESVRPUl9WSVNJQklMSVRZIiwidmlzU3RhdGVBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0E7Ozs7Ozs7O0FBUU8sU0FBU0EsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQXFDQyxTQUFyQyxFQUFnRDtBQUNyRCxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsd0JBQVlDLG1CQURiO0FBRUxKLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMQyxJQUFBQSxTQUFTLEVBQVRBO0FBSEssR0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNJLG9CQUFULENBQThCTCxRQUE5QixFQUF3Q00sR0FBeEMsRUFBNkNDLElBQTdDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUMvRCxTQUFPO0FBQ0xOLElBQUFBLElBQUksRUFBRUMsd0JBQVlNLHVCQURiO0FBRUxULElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMTSxJQUFBQSxHQUFHLEVBQUhBLEdBSEs7QUFJTEMsSUFBQUEsSUFBSSxFQUFKQSxJQUpLO0FBS0xDLElBQUFBLEtBQUssRUFBTEE7QUFMSyxHQUFQO0FBT0Q7QUFFRDs7Ozs7Ozs7OztBQVFPLFNBQVNFLGVBQVQsQ0FBeUJWLFFBQXpCLEVBQW1DVyxPQUFuQyxFQUE0QztBQUNqRCxTQUFPO0FBQ0xULElBQUFBLElBQUksRUFBRUMsd0JBQVlTLGlCQURiO0FBRUxaLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMVyxJ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Q0xwQixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZd0csZUFEYjtBQUVMckYsSUFBQUEsSUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRDtBQUVEOzs7Ozs7Ozs7QUFPTyxTQUFTc0YsY0FBVCxDQUF3QjdFLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQU87QUFDTDdCLElBQUFBLElBQUksRUFBRUMsd0JBQVkwRyxnQkFEYjtBQUVMOUUsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVMrRSxzQkFBVCxHQUFrQztBQUN2QyxTQUFPO0FBQ0w1RyxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZNEc7QUFEYixHQUFQO0FBR0Q7QUFFRDs7OztBQUdBOzs7Ozs7OztBQU9BOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIHZpcy1zdGF0ZS1yZWR1Y2VyXHJcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtPYmplY3R9IG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3Q29uZmlnIC0gbmV3IGNvbmZpZ1xyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NPTkZJR19DSEFOR0UsIG9sZExheWVyOiBvbGRMYXllciwgbmV3Q29uZmlnOiBuZXdDb25maWd9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJDb25maWdDaGFuZ2Uob2xkTGF5ZXIsIG5ld0NvbmZpZykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFLFxyXG4gICAgb2xkTGF5ZXIsXHJcbiAgICBuZXdDb25maWdcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIHRleHQgbGFiZWxcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLWBpZHhgIG9mIHRleHQgbGFiZWwgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIGBwcm9wYCBvZiB0ZXh0IGxhYmVsLCBlLGcsIGBhbmNob3JgLCBgYWxpZ25tZW50YCwgYGNvbG9yYCwgYHNpemVgLCBgZmllbGRgXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBuZXcgdmFsdWVcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9URVhUX0xBQkVMX0NIQU5HRSwgb2xkTGF5ZXI6IG9sZExheWVyLCBpZHg6IGlkeCwgcHJvcDogcHJvcCwgdmFsdWU6fX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlKG9sZExheWVyLCBpZHgsIHByb3AsIHZhbHVlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1RFWFRfTEFCRUxfQ0hBTkdFLFxyXG4gICAgb2xkTGF5ZXIsXHJcbiAgICBpZHgsXHJcbiAgICBwcm9wLFxyXG4gICAgdmFsdWVcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIHR5cGUuIFByZXZpZXdzIGxheWVyIGNvbmZpZyB3aWxsIGJlIGNvcGllZCBpZiBhcHBsaWNhYmxlLlxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1R5cGUgLSBuZXcgdHlwZVxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1RZUEVfQ0hBTkdFLCBvbGRMYXllcjogb2xkTGF5ZXIsIG5ld1R5cGU6IG5ld1R5cGV9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUeXBlQ2hhbmdlKG9sZExheWVyLCBuZXdUeXBlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1RZUEVfQ0hBTkdFLFxyXG4gICAgb2xkTGF5ZXIsXHJcbiAgICBuZXdUeXBlXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBsYXllciB2aXN1YWwgY2hhbm5lbFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIHtPYmplY3R9IG5ld0NvbmZpZyAtIG5ldyB2aXN1YWwgY2hhbm5lbCBjb25maWdcclxuICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWwgLSBjaGFubmVsIHRvIGJlIHVwZGF0ZWRcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UsIG9sZExheWVyOiBvbGRMYXllciwgbmV3Q29uZmlnOiBuZXdDb25maWcsIGNoYW5uZWw6IGNoYW5uZWx9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdDb25maWcsIGNoYW5uZWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFLFxyXG4gICAgb2xkTGF5ZXIsXHJcbiAgICBuZXdDb25maWcsXHJcbiAgICBjaGFubmVsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBsYXllciBgdmlzQ29uZmlnYFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIHtPYmplY3R9IG5ld1Zpc0NvbmZpZyAtIG5ldyB2aXNDb25maWcgYXMgYSBrZXkgdmFsdWUgbWFwOiBlLmcuIGB7b3BhY2l0eTogMC44fWBcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNfQ09ORklHX0NIQU5HRSwgb2xkTGF5ZXI6IG9sZExheWVyLCBuZXdWaXNDb25maWc6IG5ld1Zpc0NvbmZpZ319XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc0NvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3VmlzQ29uZmlnKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFLFxyXG4gICAgb2xkTGF5ZXIsXHJcbiAgICBuZXdWaXNDb25maWdcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBjb2xvciBwYWxldHRlIHVpIGZvciBsYXllciBjb2xvclxyXG4gKiBAbWVtYmVyT2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgLSB3aGljaCBjb2xvciBwcm9wXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXdDb25maWcgLSB0byBiZSBtZXJnZWRcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29sb3JVSUNoYW5nZShvbGRMYXllciwgcHJvcCwgbmV3Q29uZmlnKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NPTE9SX1VJX0NIQU5HRSxcclxuICAgIG9sZExheWVyLFxyXG4gICAgcHJvcCxcclxuICAgIG5ld0NvbmZpZ1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbGF5ZXIgYmxlbmRpbmcgbW9kZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIG9uZSBvZiBgYWRkaXRpdmVgLCBgbm9ybWFsYCBhbmQgYHN1YnRyYWN0aXZlYFxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9CTEVORElORywgbW9kZTogbW9kZX19XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYXllckJsZW5kaW5nKG1vZGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0xBWUVSX0JMRU5ESU5HLFxyXG4gICAgbW9kZVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYGludGVyYWN0aW9uQ29uZmlnYFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBuZXcgY29uZmlnIGFzIGtleSB2YWx1ZSBtYXA6IGB7dG9vbHRpcDoge2VuYWJsZWQ6IHRydWV9fWBcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5JTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFLCBjb25maWc6IGNvbmZpZ319XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZShjb25maWcpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSxcclxuICAgIGNvbmZpZ1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgZmlsdGVyIHByb3BlcnR5XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtYGlkeGAgb2YgZmlsdGVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBgcHJvcGAgb2YgZmlsdGVyLCBlLGcsIGBkYXRhSWRgLCBgbmFtZWAsIGB2YWx1ZWBcclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIG5ldyB2YWx1ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVJbmRleCAtIGFycmF5IHByb3BlcnRpZXMgbGlrZSBkYXRhc2V0IHJlcXVpcmUgaW5kZXggaW4gb3JkZXIgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVIsIGlkeDogaWR4LCBwcm9wOiBwcm9wLCB2YWx1ZTogdmFsdWV9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyKGlkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUixcclxuICAgIGlkeCxcclxuICAgIHByb3AsXHJcbiAgICB2YWx1ZSxcclxuICAgIHZhbHVlSW5kZXhcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgbmV3IGZpbHRlclxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhSWQgLSBkYXRhc2V0IGBpZGAgdGhpcyBuZXcgZmlsdGVyIGlzIGFzc29jaWF0ZWQgd2l0aFxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkFERF9GSUxURVIsIGRhdGFJZDogZGF0YUlkfX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZpbHRlcihkYXRhSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQUREX0ZJTFRFUixcclxuICAgIGRhdGFJZFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBuZXcgbGF5ZXJcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBuZXcgbGF5ZXIgcHJvcHNcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5BRERfTEFZRVIsIHByb3BzOiBwcm9wc319XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMYXllcihwcm9wcykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5BRERfTEFZRVIsXHJcbiAgICBwcm9wc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW9yZGVyIGxheWVyLCBvcmRlciBpcyBhbiBhcnJheSBvZiBsYXllciBpbmRleGVzLCBpbmRleCAwIHdpbGwgYmUgdGhlIG9uZSBhdCB0aGUgYm90dG9tXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBvcmRlciBhbiBhcnJheSBvZiBsYXllciBpbmRleGVzXHJcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuUkVPUkRFUl9MQVlFUiwgb3JkZXI6IG9yZGVyfX1cclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiAvLyBicmluZyBgbGF5ZXJzWzFdYCBiZWxvdyBgbGF5ZXJzWzBdYCwgdGhlIHNlcXVlbmNlIGxheWVycyB3aWxsIGJlIHJlbmRlcmVkIGlzIGAxYCwgYDBgLCBgMmAsIGAzYC5cclxuICogLy8gYDFgIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSwgYDNgIHdpbGwgYmUgYXQgdGhlIHRvcC5cclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaChyZW9yZGVyTGF5ZXIoWzEsIDAsIDIsIDNdKSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxheWVyKG9yZGVyKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFT1JERVJfTEFZRVIsXHJcbiAgICBvcmRlclxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBmaWx0ZXIgZnJvbSBgdmlzU3RhdGUuZmlsdGVyc2AsIG9uY2UgYSBmaWx0ZXIgaXMgcmVtb3ZlZCwgZGF0YSB3aWxsIGJlIHJlLWZpbHRlcmVkIGFuZCBsYXllciB3aWxsIGJlIHVwZGF0ZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IGlkeCBvZiBmaWx0ZXIgdG8gYmUgcmVtb3ZlZFxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9GSUxURVIsIGlkeDogaWR4fX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZpbHRlcihpZHgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0ZJTFRFUixcclxuICAgIGlkeFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBsYXllclxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggaWR4IG9mIGxheWVyIHRvIGJlIHJlbW92ZWRcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfTEFZRVIsIGlkeDogaWR4fX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxheWVyKGlkeCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfTEFZRVIsXHJcbiAgICBpZHhcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGEgZGF0YXNldCBhbmQgYWxsIGxheWVycywgZmlsdGVycywgdG9vbHRpcCBjb25maWdzIHRoYXQgYmFzZWQgb24gaXRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IGRhdGFzZXQgaWRcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfREFUQVNFVCwga2V5OiBrZXl9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGF0YXNldChrZXkpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0RBVEFTRVQsXHJcbiAgICBrZXlcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheSBkYXRhc2V0IHRhYmxlIGluIGEgbW9kYWxcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YUlkIGRhdGFzZXQgaWQgdG8gc2hvdyBpbiB0YWJsZVxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlNIT1dfREFUQVNFVF9UQUJMRSwgZGF0YUlkOiBkYXRhSWR9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0hPV19EQVRBU0VUX1RBQkxFLFxyXG4gICAgZGF0YUlkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0PnxPYmplY3R9IGRhdGFzZXRzIC0gKioqcmVxdWlyZWQqKiBkYXRhc2V0cyBjYW4gYmUgYSBkYXRhc2V0IG9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXHJcbiAqIEVhY2ggZGF0YXNldCBvYmplY3QgbmVlZHMgdG8gaGF2ZSBgaW5mb2AgYW5kIGBkYXRhYCBwcm9wZXJ0eS5cclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXRzLmluZm8gLWluZm8gb2YgYSBkYXRhc2V0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhc2V0cy5pbmZvLmlkIC0gaWQgb2YgdGhpcyBkYXRhc2V0LiBJZiBjb25maWcgaXMgZGVmaW5lZCwgYGlkYCBzaG91bGQgbWF0Y2hlcyB0aGUgYGRhdGFJZGAgaW4gY29uZmlnLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldHMuaW5mby5sYWJlbCAtIEEgZGlzcGxheSBuYW1lIG9mIHRoaXMgZGF0YXNldFxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldHMuZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBkYXRhc2V0cy5kYXRhLmZpZWxkcyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2YgZmllbGRzLFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldHMuZGF0YS5maWVsZHMubmFtZSAtICoqKnJlcXVpcmVkKiogTmFtZSBvZiB0aGUgZmllbGQsXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBkYXRhc2V0cy5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXHJcblxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY2VudGVyTWFwIGBkZWZhdWx0OiB0cnVlYCBpZiBgY2VudGVyTWFwYCBpcyBzZXQgdG8gYHRydWVgIGtlcGxlci5nbCB3aWxsXHJcbiAqIHBsYWNlIHRoZSBtYXAgdmlldyB3aXRoaW4gdGhlIGRhdGEgcG9pbnRzIGJvdW5kYXJpZXNcclxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnJlYWRPbmx5IGBkZWZhdWx0OiBmYWxzZWAgaWYgYHJlYWRPbmx5YCBpcyBzZXQgdG8gYHRydWVgXHJcbiAqIHRoZSBsZWZ0IHNldHRpbmcgcGFuZWwgd2lsbCBiZSBoaWRkZW5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGlzIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIGZ1bGwga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb24ge21hcFN0YXRlLCBtYXBTdHlsZSwgdmlzU3RhdGV9XHJcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBLCBkYXRhc2V0czogZGF0YXNldHMsIG9wdGlvbnM6IG9wdGlvbnMsIGNvbmZpZzogY29uZmlnfX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZpc0RhdGEoZGF0YXNldHMsIG9wdGlvbnMsIGNvbmZpZykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfVklTX0RBVEEsXHJcbiAgICBkYXRhc2V0cyxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBjb25maWdcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtIGlkeCBvZiBmaWx0ZXJcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTiwgaWR4OiBpZHh9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyQW5pbWF0aW9uKGlkeCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTixcclxuICAgIGlkeFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFuZ2UgZmlsdGVyIGFuaW1hdGlvbiBzcGVlZFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLSAgYGlkeGAgb2YgZmlsdGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzcGVlZCAtIGBzcGVlZGAgdG8gY2hhbmdlIGl0IHRvLiBgc3BlZWRgIGlzIGEgbXVsdGlwbGllclxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlVQREFURV9GSUxURVJfQU5JTUFUSU9OX1NQRUVELCBpZHg6IGlkeCwgc3BlZWQ6IHNwZWVkfX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkKGlkeCwgc3BlZWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQsXHJcbiAgICBpZHgsXHJcbiAgICBzcGVlZFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXNldCBhbmltYXRpb25cclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSAgQ3VycmVudCB2YWx1ZSBvZiB0aGUgc2xpZGVyXHJcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0FOSU1BVElPTl9USU1FLCB2YWx1ZTogdmFsdWV9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQW5pbWF0aW9uVGltZSh2YWx1ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfQU5JTUFUSU9OX1RJTUUsXHJcbiAgICB2YWx1ZVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1cGRhdGUgdHJpcCBsYXllciBhbmltYXRpb24gc3BlZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge051bWJlcn0gc3BlZWQgLSBgc3BlZWRgIHRvIGNoYW5nZSBpdCB0by4gYHNwZWVkYCBpcyBhIG11bHRpcGxpZXJcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQU5JTUFUSU9OX1NQRUVELCBzcGVlZDogc3BlZWR9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZChzcGVlZCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQU5JTUFUSU9OX1NQRUVELFxyXG4gICAgc3BlZWRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogU2hvdyBsYXJnZXIgdGltZSBmaWx0ZXIgYXQgYm90dG9tIGZvciB0aW1lIHBsYXliYWNrIChhcHBseSB0byB0aW1lIGZpbHRlciBvbmx5KVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLSBpbmRleCBvZiBmaWx0ZXIgdG8gZW5sYXJnZVxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkVOTEFSR0VfRklMVEVSLCBpZHg6IGlkeH19XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmxhcmdlRmlsdGVyKGlkeCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5FTkxBUkdFX0ZJTFRFUixcclxuICAgIGlkeFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93L2hpZGUgZmlsdGVyIGZlYXR1cmUgb24gbWFwXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtIGluZGV4IG9mIGZpbHRlciBmZWF0dXJlIHRvIHNob3cvaGlkZVxyXG4gKiBAcmV0dXJuIHt7dHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0ZJTFRFUl9GRUFUVVJFLCBpZHg6IGlkeH19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyRmVhdHVyZShpZHgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0ZJTFRFUl9GRUFUVVJFLFxyXG4gICAgaWR4XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbGF5ZXIgaG92ZXIgZXZlbnQgd2l0aCBob3ZlcmVkIG9iamVjdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbmZvIC0gT2JqZWN0IGhvdmVyZWQsIHJldHVybmVkIGJ5IGRlY2suZ2xcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9IT1ZFUiwgaW5mbzogaW5mb319XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkxheWVySG92ZXIoaW5mbykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9IT1ZFUixcclxuICAgIGluZm9cclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBsYXllciBjbGljayBldmVudCB3aXRoIGNsaWNrZWQgb2JqZWN0XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBPYmplY3QgY2xpY2tlZCwgcmV0dXJuZWQgYnkgZGVjay5nbFxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NMSUNLLCBpbmZvOiBpbmZvfX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJDbGljayhpbmZvKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NMSUNLLFxyXG4gICAgaW5mb1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIG1hcCBjbGljayBldmVudCwgdW5zZWxlY3QgY2xpY2tlZCBvYmplY3RcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLk1BUF9DTElDS319XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk1hcENsaWNrKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5NQVBfQ0xJQ0tcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBtYXAgbW91c2UgbW92ZWV2ZW50LCBwYXlsb2FkIHdvdWxkIGJlXHJcbiAqIFJlYWN0LW1hcC1nbCBQb2ludGVyRXZlbnRcclxuICogaHR0cHM6Ly91YmVyLmdpdGh1Yi5pby9yZWFjdC1tYXAtZ2wvIy9kb2N1bWVudGF0aW9uL2FwaS1yZWZlcmVuY2UvcG9pbnRlci1ldmVudFxyXG4gKlxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBQb2ludGVyRXZlbnRcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5NQVBfQ0xJQ0t9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZ0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLk1PVVNFX01PVkUsXHJcbiAgICBldnRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBpbiBhIHNwbGl0IG1hcFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXBJbmRleCAtIGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcclxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBpZCBvZiB0aGUgbGF5ZXJcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfRk9SX01BUCwgbWFwSW5kZXg6ICosIGxheWVySWQ6ICp9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTGF5ZXJGb3JNYXAobWFwSW5kZXgsIGxheWVySWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVAsXHJcbiAgICBtYXBJbmRleCxcclxuICAgIGxheWVySWRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGZpbHRlciBwbG90XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtOdW1iZXJ9IGlkeFxyXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3UHJvcCBrZXkgdmFsdWUgbWFwcGluZyBvZiBuZXcgcHJvcCBge3lBeGlzOiAnaGlzdG9ncmFtJ31gXHJcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9ULCBpZHg6ICosIG5ld1Byb3A6ICp9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyUGxvdChpZHgsIG5ld1Byb3ApIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9ULFxyXG4gICAgaWR4LFxyXG4gICAgbmV3UHJvcFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdQcm9wIGtleSB2YWx1ZSBtYXBwaW5nIG9mIG5ldyBwcm9wIGB7eUF4aXM6ICdoaXN0b2dyYW0nfWBcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1BMT1QsIGlkeDogKiwgbmV3UHJvcDogKn19XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXBJbmZvKGluZm8pIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX01BUF9JTkZPLFxyXG4gICAgaW5mb1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGZpbGUgbG9hZGluZyBkaXNwYXRjaCBgYWRkRGF0YVRvTWFwYCBpZiBzdWNjZWVkLCBvciBgbG9hZEZpbGVzRXJyYCBpZiBmYWlsZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpbGVzIGFycmF5IG9mIGZpbGVibG9iXHJcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFUywgZmlsZXM6ICp9fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzKGZpbGVzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRVMsXHJcbiAgICBmaWxlc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZVN1Y2Nlc3Moe2ZpbGVDYWNoZSwgZmlsZXNUb0xvYWQsIHRvdGFsQ291bnR9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRVNfU1VDQ0VTUyxcclxuICAgIGZpbGVDYWNoZSxcclxuICAgIGZpbGVzVG9Mb2FkLFxyXG4gICAgdG90YWxDb3VudFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGxvYWRpbmcgZmlsZSBlcnJvclxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7Kn0gZXJyb3JcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUiwgZXJyb3I6IE9iamVjdH19XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNFcnIoZXJyb3IpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19FUlIsXHJcbiAgICBlcnJvclxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdG9yZSBmZWF0dXJlcyB0byBzdGF0ZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmVhdHVyZXNcclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRkVBVFVSRVMsIGZlYXR1cmVzOiBPYmplY3R9fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEZlYXR1cmVzKGZlYXR1cmVzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GRUFUVVJFUyxcclxuICAgIGZlYXR1cmVzXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEl0IHdpbGwgYXBwbHkgdGhlIHByb3ZpZGUgZmVhdHVyZSBhcyBmaWx0ZXIgdG8gdGhlIGdpdmVuIGxheWVyLlxyXG4gKiBJZiB0aGUgZ2l2ZW4gZmVhdHVyZSBpcyBhbHJlYWR5IGFwcGxpZWQgYXMgZmlsdGVyIHRvIHRoZSBsYXllciwgaXQgd2lsbCByZW1vdmUgdGhlIGxheWVyIGZyb20gdGhlIGZpbHRlclxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBsYXllclxyXG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZVxyXG4gKiBAcmV0dXJuIHt7ZmVhdHVyZTogKiwgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1BPTFlHT05fRklMVEVSX0xBWUVSLCBsYXllcjogKn19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9seWdvbkZpbHRlckxheWVyKGxheWVyLCBmZWF0dXJlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9QT0xZR09OX0ZJTFRFUl9MQVlFUixcclxuICAgIGxheWVyLFxyXG4gICAgZmVhdHVyZVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGN1cnJlbnQgZmVhdHVyZSB0byBiZSBlZGl0ZWQvZGVsZXRlZFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmZWF0dXJlXHJcbiAqIEByZXR1cm4ge3tmZWF0dXJlOiBmZWF0dXJlLCB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfU0VMRUNURURfRkVBVFVSRX19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRGZWF0dXJlKGZlYXR1cmUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1NFTEVDVEVEX0ZFQVRVUkUsXHJcbiAgICBmZWF0dXJlXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSB0aGUgZ2l2ZW4gZmVhdHVyZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmZWF0dXJlXHJcbiAqIEByZXR1cm4ge3t0eXBlOiBBY3Rpb25UeXBlcy5ERUxFVEVfRkVBVFVSRSwgZmVhdHVyZTogZmVhdHVyZX19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRmVhdHVyZShmZWF0dXJlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkRFTEVURV9GRUFUVVJFLFxyXG4gICAgZmVhdHVyZVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKiBTZXQgdGhlIG1hcCBtb2RlXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgb25lIG9mIEVESVRPUl9NT0RFU1xyXG4gKiBAcmV0dXJuIHt7dHlwZTogQWN0aW9uVHlwZXMuIFNFVF9FRElUT1JfTU9ERSwgbW9kZTogKn19XHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICogaW1wb3J0IHtzZXRNYXBNb2RlfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqIGltcG9ydCB7RURJVE9SX01PREVTfSBmcm9tICdrZXBsZXIuZ2wvY29uc3RhbnRzJztcclxuICpcclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRNYXBNb2RlKEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04pKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFZGl0b3JNb2RlKG1vZGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0VESVRPUl9NT0RFLFxyXG4gICAgbW9kZVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIENQVSBmaWx0ZXIgb2Ygc2VsZWN0ZWQgZGF0YXNldFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXJ5PHN0cmluZz59IGRhdGFJZCAtIHNpbmdsZSBkYXRhSWQgb3IgYW4gYXJyYXkgb2YgZGF0YUlkc1xyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkFQUExZX0NQVV9GSUxURVIsIGRhdGFJZDogc3RyaW5nfX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q1BVRmlsdGVyKGRhdGFJZCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5BUFBMWV9DUFVfRklMVEVSLFxyXG4gICAgZGF0YUlkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcblxyXG4gKiBUb2dnbGUgZWRpdG9yIGxheWVyIHZpc2liaWxpdHlcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcmV0dXJuIHt7dHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0VESVRPUl9WSVNJQklMSVRZfX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFZGl0b3JWaXNpYmlsaXR5KCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRURJVE9SX1ZJU0lCSUxJVFlcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXHJcbiAqL1xyXG4vKipcclxuICogQWN0aW9ucyBoYW5kbGVkIG1vc3RseSBieSBgdmlzU3RhdGVgIHJlZHVjZXIuXHJcbiAqIFRoZXkgbWFuYWdlIGhvdyBkYXRhIGlzIHByb2Nlc3NlZCwgZmlsdGVyZWQgYW5kIGRpc3BsYXllZCBvbiB0aGUgbWFwIGJ5IG9wZXJhdGVzIG9uIGxheWVycyxcclxuICogZmlsdGVycyBhbmQgaW50ZXJhY3Rpb24gc2V0dGluZ3MuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IHZpc1N0YXRlQWN0aW9ucyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuIl19