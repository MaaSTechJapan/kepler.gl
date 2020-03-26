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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwib2xkTGF5ZXIiLCJuZXdDb25maWciLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJpZHgiLCJwcm9wIiwidmFsdWUiLCJMQVlFUl9URVhUX0xBQkVMX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZSIsIm5ld1R5cGUiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImNoYW5uZWwiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsIm5ld1Zpc0NvbmZpZyIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwibGF5ZXJDb2xvclVJQ2hhbmdlIiwiTEFZRVJfQ09MT1JfVUlfQ0hBTkdFIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsIm1vZGUiLCJVUERBVEVfTEFZRVJfQkxFTkRJTkciLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJzZXRGaWx0ZXIiLCJ2YWx1ZUluZGV4IiwiU0VUX0ZJTFRFUiIsImFkZEZpbHRlciIsImRhdGFJZCIsIkFERF9GSUxURVIiLCJhZGRMYXllciIsInByb3BzIiwiQUREX0xBWUVSIiwicmVvcmRlckxheWVyIiwib3JkZXIiLCJSRU9SREVSX0xBWUVSIiwicmVtb3ZlRmlsdGVyIiwiUkVNT1ZFX0ZJTFRFUiIsInJlbW92ZUxheWVyIiwiUkVNT1ZFX0xBWUVSIiwicmVtb3ZlRGF0YXNldCIsImtleSIsIlJFTU9WRV9EQVRBU0VUIiwic2hvd0RhdGFzZXRUYWJsZSIsIlNIT1dfREFUQVNFVF9UQUJMRSIsInVwZGF0ZVZpc0RhdGEiLCJkYXRhc2V0cyIsIm9wdGlvbnMiLCJVUERBVEVfVklTX0RBVEEiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb24iLCJUT0dHTEVfRklMVEVSX0FOSU1BVElPTiIsInVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkIiwic3BlZWQiLCJVUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCIsInVwZGF0ZUFuaW1hdGlvblRpbWUiLCJVUERBVEVfQU5JTUFUSU9OX1RJTUUiLCJ1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkIiwiVVBEQVRFX0xBWUVSX0FOSU1BVElPTl9TUEVFRCIsImVubGFyZ2VGaWx0ZXIiLCJFTkxBUkdFX0ZJTFRFUiIsInRvZ2dsZUZpbHRlckZlYXR1cmUiLCJUT0dHTEVfRklMVEVSX0ZFQVRVUkUiLCJvbkxheWVySG92ZXIiLCJpbmZvIiwiTEFZRVJfSE9WRVIiLCJvbkxheWVyQ2xpY2siLCJMQVlFUl9DTElDSyIsIm9uTWFwQ2xpY2siLCJNQVBfQ0xJQ0siLCJvbk1vdXNlTW92ZSIsImV2dCIsIk1PVVNFX01PVkUiLCJ0b2dnbGVMYXllckZvck1hcCIsIm1hcEluZGV4IiwibGF5ZXJJZCIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwic2V0RmlsdGVyUGxvdCIsIm5ld1Byb3AiLCJTRVRfRklMVEVSX1BMT1QiLCJzZXRNYXBJbmZvIiwiU0VUX01BUF9JTkZPIiwibG9hZEZpbGVzIiwiZmlsZXMiLCJMT0FEX0ZJTEVTIiwibG9hZEZpbGVTdWNjZXNzIiwiZmlsZUNhY2hlIiwiZmlsZXNUb0xvYWQiLCJ0b3RhbENvdW50IiwiTE9BRF9GSUxFU19TVUNDRVNTIiwibG9hZEZpbGVzRXJyIiwiZXJyb3IiLCJMT0FEX0ZJTEVTX0VSUiIsInNldEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJTRVRfRkVBVFVSRVMiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXIiLCJsYXllciIsImZlYXR1cmUiLCJTRVRfUE9MWUdPTl9GSUxURVJfTEFZRVIiLCJzZXRTZWxlY3RlZEZlYXR1cmUiLCJTRVRfU0VMRUNURURfRkVBVFVSRSIsImRlbGV0ZUZlYXR1cmUiLCJERUxFVEVfRkVBVFVSRSIsInNldEVkaXRvck1vZGUiLCJTRVRfRURJVE9SX01PREUiLCJhcHBseUNQVUZpbHRlciIsIkFQUExZX0NQVV9GSUxURVIiLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5IiwiVE9HR0xFX0VESVRPUl9WSVNJQklMSVRZIiwidmlzU3RhdGVBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0E7Ozs7Ozs7O0FBUU8sU0FBU0EsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQXFDQyxTQUFyQyxFQUFnRDtBQUNyRCxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsd0JBQVlDLG1CQURiO0FBRUxKLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMQyxJQUFBQSxTQUFTLEVBQVRBO0FBSEssR0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNJLG9CQUFULENBQThCTCxRQUE5QixFQUF3Q00sR0FBeEMsRUFBNkNDLElBQTdDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUMvRCxTQUFPO0FBQ0xOLElBQUFBLElBQUksRUFBRUMsd0JBQVlNLHVCQURiO0FBRUxULElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMTSxJQUFBQSxHQUFHLEVBQUhBLEdBSEs7QUFJTEMsSUFBQUEsSUFBSSxFQUFKQSxJQUpLO0FBS0xDLElBQUFBLEtBQUssRUFBTEE7QUFMSyxHQUFQO0FBT0Q7QUFFRDs7Ozs7Ozs7OztBQVFPLFNBQVNFLGVBQVQsQ0FBeUJWLFFBQXpCLEVBQW1DVyxPQUFuQyxFQUE0QztBQUNqRCxTQUFPO0FBQ0xULElBQUFBLElBQUksRUFBRUMsd0JBQVlTLGlCQURiO0FBRUxaLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMVyxJ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Q0xwQixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZd0csZUFEYjtBQUVMckYsSUFBQUEsSUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRDtBQUVEOzs7Ozs7Ozs7QUFPTyxTQUFTc0YsY0FBVCxDQUF3QjdFLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQU87QUFDTDdCLElBQUFBLElBQUksRUFBRUMsd0JBQVkwRyxnQkFEYjtBQUVMOUUsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVMrRSxzQkFBVCxHQUFrQztBQUN2QyxTQUFPO0FBQ0w1RyxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZNEc7QUFEYixHQUFQO0FBR0Q7QUFFRDs7OztBQUdBOzs7Ozs7OztBQU9BOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIHZpcy1zdGF0ZS1yZWR1Y2VyXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IG5ld0NvbmZpZyAtIG5ldyBjb25maWdcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ09ORklHX0NIQU5HRSwgb2xkTGF5ZXI6IG9sZExheWVyLCBuZXdDb25maWc6IG5ld0NvbmZpZ319XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3Q29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ09ORklHX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdDb25maWdcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdGV4dCBsYWJlbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtYGlkeGAgb2YgdGV4dCBsYWJlbCB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIGBwcm9wYCBvZiB0ZXh0IGxhYmVsLCBlLGcsIGBhbmNob3JgLCBgYWxpZ25tZW50YCwgYGNvbG9yYCwgYHNpemVgLCBgZmllbGRgXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gbmV3IHZhbHVlXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1RFWFRfTEFCRUxfQ0hBTkdFLCBvbGRMYXllcjogb2xkTGF5ZXIsIGlkeDogaWR4LCBwcm9wOiBwcm9wLCB2YWx1ZTp9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUZXh0TGFiZWxDaGFuZ2Uob2xkTGF5ZXIsIGlkeCwgcHJvcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9URVhUX0xBQkVMX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBpZHgsXG4gICAgcHJvcCxcbiAgICB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUeXBlIC0gbmV3IHR5cGVcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVFlQRV9DSEFOR0UsIG9sZExheWVyOiBvbGRMYXllciwgbmV3VHlwZTogbmV3VHlwZX19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclR5cGVDaGFuZ2Uob2xkTGF5ZXIsIG5ld1R5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9UWVBFX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdUeXBlXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIHZpc3VhbCBjaGFubmVsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3Q29uZmlnIC0gbmV3IHZpc3VhbCBjaGFubmVsIGNvbmZpZ1xuICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWwgLSBjaGFubmVsIHRvIGJlIHVwZGF0ZWRcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFLCBvbGRMYXllcjogb2xkTGF5ZXIsIG5ld0NvbmZpZzogbmV3Q29uZmlnLCBjaGFubmVsOiBjaGFubmVsfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3Q29uZmlnLCBjaGFubmVsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZyxcbiAgICBjaGFubmVsXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGB2aXNDb25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3VmlzQ29uZmlnIC0gbmV3IHZpc0NvbmZpZyBhcyBhIGtleSB2YWx1ZSBtYXA6IGUuZy4gYHtvcGFjaXR5OiAwLjh9YFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNfQ09ORklHX0NIQU5HRSwgb2xkTGF5ZXI6IG9sZExheWVyLCBuZXdWaXNDb25maWc6IG5ld1Zpc0NvbmZpZ319XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc0NvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3VmlzQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3VmlzQ29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb2xvciBwYWxldHRlIHVpIGZvciBsYXllciBjb2xvclxuICogQG1lbWJlck9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgLSB3aGljaCBjb2xvciBwcm9wXG4gKiBAcGFyYW0ge29iamVjdH0gbmV3Q29uZmlnIC0gdG8gYmUgbWVyZ2VkXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbG9yVUlDaGFuZ2Uob2xkTGF5ZXIsIHByb3AsIG5ld0NvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NPTE9SX1VJX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBwcm9wLFxuICAgIG5ld0NvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBibGVuZGluZyBtb2RlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBvbmUgb2YgYGFkZGl0aXZlYCwgYG5vcm1hbGAgYW5kIGBzdWJ0cmFjdGl2ZWBcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0xBWUVSX0JMRU5ESU5HLCBtb2RlOiBtb2RlfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxheWVyQmxlbmRpbmcobW9kZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9CTEVORElORyxcbiAgICBtb2RlXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGBpbnRlcmFjdGlvbkNvbmZpZ2BcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBuZXcgY29uZmlnIGFzIGtleSB2YWx1ZSBtYXA6IGB7dG9vbHRpcDoge2VuYWJsZWQ6IHRydWV9fWBcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSwgY29uZmlnOiBjb25maWd9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UoY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSxcbiAgICBjb25maWdcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgZmlsdGVyIHByb3BlcnR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IC1gaWR4YCBvZiBmaWx0ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBgcHJvcGAgb2YgZmlsdGVyLCBlLGcsIGBkYXRhSWRgLCBgbmFtZWAsIGB2YWx1ZWBcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBuZXcgdmFsdWVcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZUluZGV4IC0gYXJyYXkgcHJvcGVydGllcyBsaWtlIGRhdGFzZXQgcmVxdWlyZSBpbmRleCBpbiBvcmRlciB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVIsIGlkeDogaWR4LCBwcm9wOiBwcm9wLCB2YWx1ZTogdmFsdWV9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyKGlkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSLFxuICAgIGlkeCxcbiAgICBwcm9wLFxuICAgIHZhbHVlLFxuICAgIHZhbHVlSW5kZXhcbiAgfTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YUlkIC0gZGF0YXNldCBgaWRgIHRoaXMgbmV3IGZpbHRlciBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuQUREX0ZJTFRFUiwgZGF0YUlkOiBkYXRhSWR9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRmlsdGVyKGRhdGFJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFERF9GSUxURVIsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBuZXcgbGF5ZXIgcHJvcHNcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuQUREX0xBWUVSLCBwcm9wczogcHJvcHN9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGF5ZXIocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5BRERfTEFZRVIsXG4gICAgcHJvcHNcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW9yZGVyIGxheWVyLCBvcmRlciBpcyBhbiBhcnJheSBvZiBsYXllciBpbmRleGVzLCBpbmRleCAwIHdpbGwgYmUgdGhlIG9uZSBhdCB0aGUgYm90dG9tXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IG9yZGVyIGFuIGFycmF5IG9mIGxheWVyIGluZGV4ZXNcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuUkVPUkRFUl9MQVlFUiwgb3JkZXI6IG9yZGVyfX1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYnJpbmcgYGxheWVyc1sxXWAgYmVsb3cgYGxheWVyc1swXWAsIHRoZSBzZXF1ZW5jZSBsYXllcnMgd2lsbCBiZSByZW5kZXJlZCBpcyBgMWAsIGAwYCwgYDJgLCBgM2AuXG4gKiAvLyBgMWAgd2lsbCBiZSBhdCB0aGUgYm90dG9tLCBgM2Agd2lsbCBiZSBhdCB0aGUgdG9wLlxuICogdGhpcy5wcm9wcy5kaXNwYXRjaChyZW9yZGVyTGF5ZXIoWzEsIDAsIDIsIDNdKSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyTGF5ZXIob3JkZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU9SREVSX0xBWUVSLFxuICAgIG9yZGVyXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZmlsdGVyIGZyb20gYHZpc1N0YXRlLmZpbHRlcnNgLCBvbmNlIGEgZmlsdGVyIGlzIHJlbW92ZWQsIGRhdGEgd2lsbCBiZSByZS1maWx0ZXJlZCBhbmQgbGF5ZXIgd2lsbCBiZSB1cGRhdGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IGlkeCBvZiBmaWx0ZXIgdG8gYmUgcmVtb3ZlZFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfRklMVEVSLCBpZHg6IGlkeH19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGaWx0ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0ZJTFRFUixcbiAgICBpZHhcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCBpZHggb2YgbGF5ZXIgdG8gYmUgcmVtb3ZlZFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfTEFZRVIsIGlkeDogaWR4fX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxheWVyKGlkeCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9MQVlFUixcbiAgICBpZHhcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBkYXRhc2V0IGlkXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9EQVRBU0VULCBrZXk6IGtleX19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEYXRhc2V0KGtleSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9EQVRBU0VULFxuICAgIGtleVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BsYXkgZGF0YXNldCB0YWJsZSBpbiBhIG1vZGFsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YUlkIGRhdGFzZXQgaWQgdG8gc2hvdyBpbiB0YWJsZVxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5TSE9XX0RBVEFTRVRfVEFCTEUsIGRhdGFJZDogZGF0YUlkfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dEYXRhc2V0VGFibGUoZGF0YUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0hPV19EQVRBU0VUX1RBQkxFLFxuICAgIGRhdGFJZFxuICB9O1xufVxuXG4vKipcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fE9iamVjdH0gZGF0YXNldHMgLSAqKipyZXF1aXJlZCoqIGRhdGFzZXRzIGNhbiBiZSBhIGRhdGFzZXQgb3IgYW4gYXJyYXkgb2YgZGF0YXNldHNcbiAqIEVhY2ggZGF0YXNldCBvYmplY3QgbmVlZHMgdG8gaGF2ZSBgaW5mb2AgYW5kIGBkYXRhYCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0cy5pbmZvIC1pbmZvIG9mIGEgZGF0YXNldFxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFzZXRzLmluZm8uaWQgLSBpZCBvZiB0aGlzIGRhdGFzZXQuIElmIGNvbmZpZyBpcyBkZWZpbmVkLCBgaWRgIHNob3VsZCBtYXRjaGVzIHRoZSBgZGF0YUlkYCBpbiBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldHMuaW5mby5sYWJlbCAtIEEgZGlzcGxheSBuYW1lIG9mIHRoaXMgZGF0YXNldFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXRzLmRhdGEgLSAqKipyZXF1aXJlZCoqIFRoZSBkYXRhIG9iamVjdCwgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIDIgcHJvcGVydGllcyBgZmllbGRzYCBhbmQgYHJvd3NgXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGRhdGFzZXRzLmRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldHMuZGF0YS5maWVsZHMubmFtZSAtICoqKnJlcXVpcmVkKiogTmFtZSBvZiB0aGUgZmllbGQsXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gZGF0YXNldHMuZGF0YS5yb3dzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiByb3dzLCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggYGZpZWxkc2AgYW5kIGByb3dzYFxuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNlbnRlck1hcCBgZGVmYXVsdDogdHJ1ZWAgaWYgYGNlbnRlck1hcGAgaXMgc2V0IHRvIGB0cnVlYCBrZXBsZXIuZ2wgd2lsbFxuICogcGxhY2UgdGhlIG1hcCB2aWV3IHdpdGhpbiB0aGUgZGF0YSBwb2ludHMgYm91bmRhcmllc1xuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnJlYWRPbmx5IGBkZWZhdWx0OiBmYWxzZWAgaWYgYHJlYWRPbmx5YCBpcyBzZXQgdG8gYHRydWVgXG4gKiB0aGUgbGVmdCBzZXR0aW5nIHBhbmVsIHdpbGwgYmUgaGlkZGVuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoaXMgb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgZnVsbCBrZXBsZXIuZ2wgaW5zdGFuY2UgY29uZmlndXJhdGlvbiB7bWFwU3RhdGUsIG1hcFN0eWxlLCB2aXNTdGF0ZX1cbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBLCBkYXRhc2V0czogZGF0YXNldHMsIG9wdGlvbnM6IG9wdGlvbnMsIGNvbmZpZzogY29uZmlnfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZpc0RhdGEoZGF0YXNldHMsIG9wdGlvbnMsIGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9WSVNfREFUQSxcbiAgICBkYXRhc2V0cyxcbiAgICBvcHRpb25zLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFN0YXJ0IGFuZCBlbmQgZmlsdGVyIGFuaW1hdGlvblxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtIGlkeCBvZiBmaWx0ZXJcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04sIGlkeDogaWR4fX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZpbHRlckFuaW1hdGlvbihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTixcbiAgICBpZHhcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgZmlsdGVyIGFuaW1hdGlvbiBzcGVlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtICBgaWR4YCBvZiBmaWx0ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzcGVlZCAtIGBzcGVlZGAgdG8gY2hhbmdlIGl0IHRvLiBgc3BlZWRgIGlzIGEgbXVsdGlwbGllclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCwgaWR4OiBpZHgsIHNwZWVkOiBzcGVlZH19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZChpZHgsIHNwZWVkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQsXG4gICAgaWR4LFxuICAgIHNwZWVkXG4gIH07XG59XG5cbi8qKlxuICogUmVzZXQgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSAgQ3VycmVudCB2YWx1ZSBvZiB0aGUgc2xpZGVyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlVQREFURV9BTklNQVRJT05fVElNRSwgdmFsdWU6IHZhbHVlfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGlvblRpbWUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfQU5JTUFUSU9OX1RJTUUsXG4gICAgdmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiB1cGRhdGUgdHJpcCBsYXllciBhbmltYXRpb24gc3BlZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBzcGVlZCAtIGBzcGVlZGAgdG8gY2hhbmdlIGl0IHRvLiBgc3BlZWRgIGlzIGEgbXVsdGlwbGllclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQU5JTUFUSU9OX1NQRUVELCBzcGVlZDogc3BlZWR9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZChzcGVlZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9BTklNQVRJT05fU1BFRUQsXG4gICAgc3BlZWRcbiAgfTtcbn1cblxuLyoqXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuRU5MQVJHRV9GSUxURVIsIGlkeDogaWR4fX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVubGFyZ2VGaWx0ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuRU5MQVJHRV9GSUxURVIsXG4gICAgaWR4XG4gIH07XG59XG5cbi8qKlxuICogU2hvdy9oaWRlIGZpbHRlciBmZWF0dXJlIG9uIG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtIGluZGV4IG9mIGZpbHRlciBmZWF0dXJlIHRvIHNob3cvaGlkZVxuICogQHJldHVybiB7e3R5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfRkVBVFVSRSwgaWR4OiBpZHh9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyRmVhdHVyZShpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0ZFQVRVUkUsXG4gICAgaWR4XG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIE9iamVjdCBob3ZlcmVkLCByZXR1cm5lZCBieSBkZWNrLmdsXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0hPVkVSLCBpbmZvOiBpbmZvfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJIb3ZlcihpbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVIsXG4gICAgaW5mb1xuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBPYmplY3QgY2xpY2tlZCwgcmV0dXJuZWQgYnkgZGVjay5nbFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DTElDSywgaW5mbzogaW5mb319XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkxheWVyQ2xpY2soaW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NMSUNLLFxuICAgIGluZm9cbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIG1hcCBjbGljayBldmVudCwgdW5zZWxlY3QgY2xpY2tlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTUFQX0NMSUNLfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTWFwQ2xpY2soKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTUFQX0NMSUNLXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBtYXAgbW91c2UgbW92ZWV2ZW50LCBwYXlsb2FkIHdvdWxkIGJlXG4gKiBSZWFjdC1tYXAtZ2wgUG9pbnRlckV2ZW50XG4gKiBodHRwczovL3ViZXIuZ2l0aHViLmlvL3JlYWN0LW1hcC1nbC8jL2RvY3VtZW50YXRpb24vYXBpLXJlZmVyZW5jZS9wb2ludGVyLWV2ZW50XG4gKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGV2dCAtIFBvaW50ZXJFdmVudFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5NQVBfQ0xJQ0t9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZ0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9VU0VfTU9WRSxcbiAgICBldnRcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gbWFwSW5kZXggLSBpbmRleCBvZiB0aGUgc3BsaXQgbWFwXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIGlkIG9mIHRoZSBsYXllclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfRk9SX01BUCwgbWFwSW5kZXg6ICosIGxheWVySWQ6ICp9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTGF5ZXJGb3JNYXAobWFwSW5kZXgsIGxheWVySWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfRk9SX01BUCxcbiAgICBtYXBJbmRleCxcbiAgICBsYXllcklkXG4gIH07XG59XG5cbi8qKlxuICogU2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGZpbHRlciBwbG90XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4XG4gKiBAcGFyYW0ge09iamVjdH0gbmV3UHJvcCBrZXkgdmFsdWUgbWFwcGluZyBvZiBuZXcgcHJvcCBge3lBeGlzOiAnaGlzdG9ncmFtJ31gXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVJfUExPVCwgaWR4OiAqLCBuZXdQcm9wOiAqfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlclBsb3QoaWR4LCBuZXdQcm9wKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9ULFxuICAgIGlkeCxcbiAgICBuZXdQcm9wXG4gIH07XG59XG5cbi8qKlxuICogU2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGZpbHRlciBwbG90XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4XG4gKiBAcGFyYW0ge09iamVjdH0gbmV3UHJvcCBrZXkgdmFsdWUgbWFwcGluZyBvZiBuZXcgcHJvcCBge3lBeGlzOiAnaGlzdG9ncmFtJ31gXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVJfUExPVCwgaWR4OiAqLCBuZXdQcm9wOiAqfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1hcEluZm8oaW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9NQVBfSU5GTyxcbiAgICBpbmZvXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBmaWxlIGxvYWRpbmcgZGlzcGF0Y2ggYGFkZERhdGFUb01hcGAgaWYgc3VjY2VlZCwgb3IgYGxvYWRGaWxlc0VycmAgaWYgZmFpbGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpbGVzIGFycmF5IG9mIGZpbGVibG9iXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRVMsIGZpbGVzOiAqfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlcyhmaWxlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRVMsXG4gICAgZmlsZXNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlU3VjY2Vzcyh7ZmlsZUNhY2hlLCBmaWxlc1RvTG9hZCwgdG90YWxDb3VudH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX1NVQ0NFU1MsXG4gICAgZmlsZUNhY2hlLFxuICAgIGZpbGVzVG9Mb2FkLFxuICAgIHRvdGFsQ291bnRcbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGxvYWRpbmcgZmlsZSBlcnJvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHsqfSBlcnJvclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUiwgZXJyb3I6IE9iamVjdH19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNFcnIoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUixcbiAgICBlcnJvclxuICB9O1xufVxuXG4vKipcbiAqIFN0b3JlIGZlYXR1cmVzIHRvIHN0YXRlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZlYXR1cmVzXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlNFVF9GRUFUVVJFUywgZmVhdHVyZXM6IE9iamVjdH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGZWF0dXJlcyhmZWF0dXJlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GRUFUVVJFUyxcbiAgICBmZWF0dXJlc1xuICB9O1xufVxuXG4vKipcbiAqIEl0IHdpbGwgYXBwbHkgdGhlIHByb3ZpZGUgZmVhdHVyZSBhcyBmaWx0ZXIgdG8gdGhlIGdpdmVuIGxheWVyLlxuICogSWYgdGhlIGdpdmVuIGZlYXR1cmUgaXMgYWxyZWFkeSBhcHBsaWVkIGFzIGZpbHRlciB0byB0aGUgbGF5ZXIsIGl0IHdpbGwgcmVtb3ZlIHRoZSBsYXllciBmcm9tIHRoZSBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IGZlYXR1cmVcbiAqIEByZXR1cm4ge3tmZWF0dXJlOiAqLCB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfUE9MWUdPTl9GSUxURVJfTEFZRVIsIGxheWVyOiAqfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFBvbHlnb25GaWx0ZXJMYXllcihsYXllciwgZmVhdHVyZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9QT0xZR09OX0ZJTFRFUl9MQVlFUixcbiAgICBsYXllcixcbiAgICBmZWF0dXJlXG4gIH07XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IGZlYXR1cmUgdG8gYmUgZWRpdGVkL2RlbGV0ZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBmZWF0dXJlXG4gKiBAcmV0dXJuIHt7ZmVhdHVyZTogZmVhdHVyZSwgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1NFTEVDVEVEX0ZFQVRVUkV9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfU0VMRUNURURfRkVBVFVSRSxcbiAgICBmZWF0dXJlXG4gIH07XG59XG5cbi8qKlxuICogRGVsZXRlIHRoZSBnaXZlbiBmZWF0dXJlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZVxuICogQHJldHVybiB7e3R5cGU6IEFjdGlvblR5cGVzLkRFTEVURV9GRUFUVVJFLCBmZWF0dXJlOiBmZWF0dXJlfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZlYXR1cmUoZmVhdHVyZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkRFTEVURV9GRUFUVVJFLFxuICAgIGZlYXR1cmVcbiAgfTtcbn1cblxuLyoqIFNldCB0aGUgbWFwIG1vZGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIG9uZSBvZiBFRElUT1JfTU9ERVNcbiAqIEByZXR1cm4ge3t0eXBlOiBBY3Rpb25UeXBlcy4gU0VUX0VESVRPUl9NT0RFLCBtb2RlOiAqfX1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3NldE1hcE1vZGV9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcbiAqIGltcG9ydCB7RURJVE9SX01PREVTfSBmcm9tICdrZXBsZXIuZ2wvY29uc3RhbnRzJztcbiAqXG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHNldE1hcE1vZGUoRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTikpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RWRpdG9yTW9kZShtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0VESVRPUl9NT0RFLFxuICAgIG1vZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIENQVSBmaWx0ZXIgb2Ygc2VsZWN0ZWQgZGF0YXNldFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmcgfCBBcnJhcnk8c3RyaW5nPn0gZGF0YUlkIC0gc2luZ2xlIGRhdGFJZCBvciBhbiBhcnJheSBvZiBkYXRhSWRzXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkFQUExZX0NQVV9GSUxURVIsIGRhdGFJZDogc3RyaW5nfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q1BVRmlsdGVyKGRhdGFJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFQUExZX0NQVV9GSUxURVIsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbi8qKlxuXG4gKiBUb2dnbGUgZWRpdG9yIGxheWVyIHZpc2liaWxpdHlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEByZXR1cm4ge3t0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRURJVE9SX1ZJU0lCSUxJVFl9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRURJVE9SX1ZJU0lCSUxJVFlcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGRlY2xhcmF0aW9uIGlzIG5lZWRlZCB0byBncm91cCBhY3Rpb25zIGluIGRvY3NcbiAqL1xuLyoqXG4gKiBBY3Rpb25zIGhhbmRsZWQgbW9zdGx5IGJ5IGB2aXNTdGF0ZWAgcmVkdWNlci5cbiAqIFRoZXkgbWFuYWdlIGhvdyBkYXRhIGlzIHByb2Nlc3NlZCwgZmlsdGVyZWQgYW5kIGRpc3BsYXllZCBvbiB0aGUgbWFwIGJ5IG9wZXJhdGVzIG9uIGxheWVycyxcbiAqIGZpbHRlcnMgYW5kIGludGVyYWN0aW9uIHNldHRpbmdzLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IHZpc1N0YXRlQWN0aW9ucyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4iXX0=