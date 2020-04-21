"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultFilter = getDefaultFilter;
exports.shouldApplyFilter = shouldApplyFilter;
exports.validatePolygonFilter = validatePolygonFilter;
exports.validateFilter = validateFilter;
exports.validateFilterWithData = validateFilterWithData;
exports.getFilterProps = getFilterProps;
exports.getFieldDomain = getFieldDomain;
exports.getFilterFunction = getFilterFunction;
exports.updateFilterDataId = updateFilterDataId;
exports.filterDataset = filterDataset;
exports.getFilterRecord = getFilterRecord;
exports.diffFilters = diffFilters;
exports.adjustValueToFilterDomain = adjustValueToFilterDomain;
exports.getNumericFieldDomain = getNumericFieldDomain;
exports.getNumericStepSize = getNumericStepSize;
exports.getTimestampFieldDomain = getTimestampFieldDomain;
exports.histogramConstruct = histogramConstruct;
exports.getHistogram = getHistogram;
exports.formatNumberByStep = formatNumberByStep;
exports.isInRange = isInRange;
exports.isInPolygon = isInPolygon;
exports.getTimeWidgetTitleFormatter = getTimeWidgetTitleFormatter;
exports.getTimeWidgetHintFormatter = getTimeWidgetHintFormatter;
exports.isValidFilterValue = isValidFilterValue;
exports.getFilterPlot = getFilterPlot;
exports.getDefaultFilterPlotType = getDefaultFilterPlotType;
exports.applyFiltersToDatasets = applyFiltersToDatasets;
exports.applyFilterFieldName = applyFilterFieldName;
exports.mergeFilterDomainStep = mergeFilterDomainStep;
exports.generatePolygonFilter = generatePolygonFilter;
exports.filterDatasetCPU = filterDatasetCPU;
exports.getFilterIdInFeature = exports.featureToFilterValue = exports.getPolygonFilterFunctor = exports.LAYER_FILTERS = exports.FILTER_ID_LENGTH = exports.DEFAULT_FILTER_STRUCTURE = exports.FILTER_COMPONENTS = exports.LIMITED_FILTER_EFFECT_PROPS = exports.FILTER_UPDATER_PROPS = exports.PLOT_TYPES = exports.enlargedHistogramBins = exports.histogramBins = exports.TimestampStepMap = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Array = require("d3-array");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _booleanWithin = _interopRequireDefault(require("@turf/boolean-within"));

var _helpers = require("@turf/helpers");

var _decimal = require("decimal.js");

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("./data-utils");

var ScaleUtils = _interopRequireWildcard(require("./data-scale-utils"));

var _constants = require("../constants");

var _utils = require("./utils");

var _gpuFilterUtils = require("./gpu-filter-utils");

var _FILTER_TYPES$timeRan, _FILTER_TYPES$range, _SupportedPlotType, _FILTER_COMPONENTS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TimestampStepMap = [{
  max: 1,
  step: 0.05
}, {
  max: 10,
  step: 0.1
}, {
  max: 100,
  step: 1
}, {
  max: 500,
  step: 5
}, {
  max: 1000,
  step: 10
}, {
  max: 5000,
  step: 50
}, {
  max: Number.POSITIVE_INFINITY,
  step: 1000
}];
exports.TimestampStepMap = TimestampStepMap;
var histogramBins = 30;
exports.histogramBins = histogramBins;
var enlargedHistogramBins = 100;
exports.enlargedHistogramBins = enlargedHistogramBins;
var durationSecond = 1000;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationYear = durationDay * 365;
var PLOT_TYPES = (0, _keymirror["default"])({
  histogram: null,
  lineChart: null
});
exports.PLOT_TYPES = PLOT_TYPES;
var FILTER_UPDATER_PROPS = (0, _keymirror["default"])({
  dataId: null,
  name: null,
  layerId: null
});
exports.FILTER_UPDATER_PROPS = FILTER_UPDATER_PROPS;
var LIMITED_FILTER_EFFECT_PROPS = (0, _keymirror["default"])((0, _defineProperty2["default"])({}, FILTER_UPDATER_PROPS.name, null));
/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.LIMITED_FILTER_EFFECT_PROPS = LIMITED_FILTER_EFFECT_PROPS;
var SupportedPlotType = (_SupportedPlotType = {}, (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.timeRange, (_FILTER_TYPES$timeRan = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$timeRan)), (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.range, (_FILTER_TYPES$range = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$range)), _SupportedPlotType);
var FILTER_COMPONENTS = (_FILTER_COMPONENTS = {}, (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.select, 'SingleSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.multiSelect, 'MultiSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.timeRange, 'TimeRangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.range, 'RangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.polygon, 'PolygonFilter'), _FILTER_COMPONENTS);
exports.FILTER_COMPONENTS = FILTER_COMPONENTS;
var DEFAULT_FILTER_STRUCTURE = {
  dataId: [],
  // [string]
  freeze: false,
  id: null,
  // time range filter specific
  fixedDomain: false,
  enlarged: false,
  isAnimating: false,
  speed: 1,
  // field specific
  name: [],
  // string
  type: null,
  fieldIdx: [],
  // [integer]
  domain: null,
  value: null,
  // plot
  plotType: PLOT_TYPES.histogram,
  yAxis: null,
  interval: null,
  // mode
  gpu: false
};
exports.DEFAULT_FILTER_STRUCTURE = DEFAULT_FILTER_STRUCTURE;
var FILTER_ID_LENGTH = 4;
exports.FILTER_ID_LENGTH = FILTER_ID_LENGTH;
var LAYER_FILTERS = [_defaultSettings.FILTER_TYPES.polygon];
/**
 * Generates a filter with a dataset id as dataId
 * @param {[string]} dataId
 * @return {object} filter
 */

exports.LAYER_FILTERS = LAYER_FILTERS;

function getDefaultFilter(dataId) {
  return _objectSpread({}, DEFAULT_FILTER_STRUCTURE, {
    // store it as dataId and it could be one or many
    dataId: (0, _utils.toArray)(dataId),
    id: (0, _utils.generateHashId)(FILTER_ID_LENGTH)
  });
}
/**
 * Check if a filter is valid based on the given dataId
 * @param {object} filter to validate
 * @param {string} dataset id to validate filter against
 * @return {boolean} true if a filter is valid, false otherwise
 */


function shouldApplyFilter(filter, datasetId) {
  var dataIds = (0, _utils.toArray)(filter.dataId);
  return dataIds.includes(datasetId) && filter.value !== null;
}
/**
 * Validates and modifies polygon filter structure
 * @param dataset
 * @param filter
 * @param layers
 * @return {object}
 */


function validatePolygonFilter(dataset, filter, layers) {
  var failed = {
    dataset: dataset,
    filter: null
  };
  var value = filter.value,
      layerId = filter.layerId,
      type = filter.type,
      dataId = filter.dataId;

  if (!layerId || !isValidFilterValue(type, value)) {
    return failed;
  }

  var isValidDataset = dataId.includes(dataset.id);

  if (!isValidDataset) {
    return failed;
  }

  var layer = layers.find(function (l) {
    return layerId.includes(l.id);
  });

  if (!layer) {
    return failed;
  }

  return {
    filter: _objectSpread({}, filter, {
      freeze: true,
      fieldIdx: []
    }),
    dataset: dataset
  };
}
/**
 * Custom filter validators
 * @type {Function}
 */


var filterValidators = (0, _defineProperty2["default"])({}, _defaultSettings.FILTER_TYPES.polygon, validatePolygonFilter);
/**
 * Default validate filter function
 * @param dataset
 * @param filter
 * @return {*}
 */

function validateFilter(dataset, filter) {
  // match filter.dataId
  var failed = {
    dataset: dataset,
    filter: null
  };
  var filterDataId = (0, _utils.toArray)(filter.dataId);
  var filterDatasetIndex = filterDataId.indexOf(dataset.id);

  if (filterDatasetIndex < 0) {
    // the current filter is not mapped against the current dataset
    return failed;
  }

  var initializeFilter = _objectSpread({}, getDefaultFilter(filter.dataId), {}, filter, {
    dataId: filterDataId,
    name: (0, _utils.toArray)(filter.name)
  });

  var fieldName = initializeFilter.name[filterDatasetIndex];

  var _applyFilterFieldName = applyFilterFieldName(initializeFilter, dataset, fieldName, filterDatasetIndex, {
    mergeDomain: true
  }),
      updatedFilter = _applyFilterFieldName.filter,
      updatedDataset = _applyFilterFieldName.dataset;

  if (!updatedFilter) {
    return failed;
  }

  updatedFilter.value = adjustValueToFilterDomain(filter.value, updatedFilter);

  if (updatedFilter.value === null) {
    // cannot adjust saved value to filter
    return failed;
  }

  return {
    filter: validateFilterYAxis(updatedFilter, updatedDataset),
    dataset: updatedDataset
  };
}
/**
 * Validate saved filter config with new data,
 * calculate domain and fieldIdx based new fields and data
 *
 * @param {Object} dataset
 * @param {Object} filter - filter to be validate
 * @return {Object | null} - validated filter
 */


function validateFilterWithData(dataset, filter, layers) {
  return filterValidators.hasOwnProperty(filter.type) ? filterValidators[filter.type](dataset, filter, layers) : validateFilter(dataset, filter);
}
/**
 * Validate YAxis
 * @param filter
 * @param dataset
 * @return {*}
 */


function validateFilterYAxis(filter, dataset) {
  // TODO: validate yAxis against other datasets
  var fields = dataset.fields,
      allData = dataset.allData;
  var _filter = filter,
      yAxis = _filter.yAxis; // TODO: validate yAxis against other datasets

  if (yAxis) {
    var matchedAxis = fields.find(function (_ref) {
      var name = _ref.name,
          type = _ref.type;
      return name === yAxis.name && type === yAxis.type;
    });
    filter = matchedAxis ? _objectSpread({}, filter, {
      yAxis: matchedAxis
    }, getFilterPlot(_objectSpread({}, filter, {
      yAxis: matchedAxis
    }), allData)) : filter;
  }

  return filter;
}
/**
 * Get default filter prop based on field type
 *
 * @param {Array<Array>} allData
 * @param {Object} field
 * @returns {Object} default filter
 */


function getFilterProps(allData, field) {
  var filterProps = _objectSpread({}, getFieldDomain(allData, field), {
    fieldType: field.type
  });

  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      return _objectSpread({}, filterProps, {
        value: filterProps.domain,
        type: _defaultSettings.FILTER_TYPES.range,
        typeOptions: [_defaultSettings.FILTER_TYPES.range],
        gpu: true
      });

    case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
      return _objectSpread({}, filterProps, {
        type: _defaultSettings.FILTER_TYPES.select,
        value: true,
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread({}, filterProps, {
        type: _defaultSettings.FILTER_TYPES.multiSelect,
        value: [],
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return _objectSpread({}, filterProps, {
        type: _defaultSettings.FILTER_TYPES.timeRange,
        enlarged: true,
        fixedDomain: true,
        value: filterProps.domain,
        gpu: true
      });

    default:
      return {};
  }
}
/**
 * Calculate field domain based on field type and data
 *
 * @param {Array<Array>} allData
 * @param {Object} field
 * @returns {Object} with domain as key
 */


function getFieldDomain(allData, field) {
  var fieldIdx = field.tableFieldIndex - 1;
  var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;

  var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);

  var domain;

  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      // calculate domain and step
      return getNumericFieldDomain(allData, valueAccessor);

    case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
      return {
        domain: [true, false]
      };

    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      domain = ScaleUtils.getOrdinalDomain(allData, valueAccessor);
      return {
        domain: domain
      };

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return getTimestampFieldDomain(allData, valueAccessor);

    default:
      return {
        domain: ScaleUtils.getOrdinalDomain(allData, valueAccessor)
      };
  }
}

var getPolygonFilterFunctor = function getPolygonFilterFunctor(layer, filter) {
  var getPosition = layer.getPositionAccessor();

  switch (layer.type) {
    case _constants.LAYER_TYPES.point:
    case _constants.LAYER_TYPES.icon:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && isInPolygon(pos, filter.value);
      };

    case _constants.LAYER_TYPES.arc:
    case _constants.LAYER_TYPES.line:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && [[pos[0], pos[1]], [pos[3], pos[4]]].every(function (point) {
          return isInPolygon(point, filter.value);
        });
      };

    default:
      return function () {
        return true;
      };
  }
};
/**
 * @param field dataset Field
 * @param dataId Dataset id
 * @param filter Filter object
 * @param layers list of layers to filter upon
 * @return {*}
 */


exports.getPolygonFilterFunctor = getPolygonFilterFunctor;

function getFilterFunction(field, dataId, filter, layers) {
  // field could be null
  var valueAccessor = function valueAccessor(data) {
    return field ? data[field.tableFieldIndex - 1] : null;
  };

  switch (filter.type) {
    case _defaultSettings.FILTER_TYPES.range:
      return function (data) {
        return isInRange(valueAccessor(data), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return function (data) {
        return filter.value.includes(valueAccessor(data));
      };

    case _defaultSettings.FILTER_TYPES.select:
      return function (data) {
        return valueAccessor(data) === filter.value;
      };

    case _defaultSettings.FILTER_TYPES.timeRange:
      var mappedValue = (0, _lodash["default"])(field, ['filterProps', 'mappedValue']);
      var accessor = Array.isArray(mappedValue) ? function (data, index) {
        return mappedValue[index];
      } : function (data) {
        return (0, _dataUtils.timeToUnixMilli)(valueAccessor(data), field.format);
      };
      return function (data, index) {
        return isInRange(accessor(data, index), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.polygon:
      if (!layers || !layers.length) {
        return function () {
          return true;
        };
      }

      var layerFilterFunctions = filter.layerId.map(function (id) {
        return layers.find(function (l) {
          return l.id === id;
        });
      }).filter(function (l) {
        return l && l.config.dataId === dataId;
      }).map(function (layer) {
        return getPolygonFilterFunctor(layer, filter);
      });
      return function (data) {
        return layerFilterFunctions.every(function (filterFunc) {
          return filterFunc(data);
        });
      };

    default:
      return function () {
        return true;
      };
  }
}

function updateFilterDataId(dataId) {
  return getDefaultFilter(dataId);
}
/**
 * Filter data based on an array of filters
 *
 * @param {Object} dataset
 * @param {Array<Object>} filters
 * @param {Object} opt
 * @param {Object} opt.cpuOnly only allow cpu filtering
 * @param {Object} opt.ignoreDomain ignore filter for domain calculation
 * @returns {Object} dataset
 * @returns {Array<Number>} dataset.filteredIndex
 * @returns {Array<Number>} dataset.filteredIndexForDomain
 */


function filterDataset(dataset, filters, layers) {
  var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var allData = dataset.allData,
      dataId = dataset.id,
      oldFilterRecord = dataset.filterRecord,
      fields = dataset.fields; // if there is no filters

  var filterRecord = getFilterRecord(dataId, filters, opt);
  var newDataset = (0, _utils.set)(['filterRecord'], filterRecord, dataset);

  if (!filters.length) {
    return _objectSpread({}, newDataset, {
      gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)(filters, dataId, fields),
      filteredIndex: dataset.allIndexes,
      filteredIndexForDomain: dataset.allIndexes
    });
  }

  var changedFilters = diffFilters(filterRecord, oldFilterRecord); // generate 2 sets of filter result
  // filteredIndex used to calculate layer data
  // filteredIndexForDomain used to calculate layer Domain

  var shouldCalDomain = Boolean(changedFilters.dynamicDomain);
  var shouldCalIndex = Boolean(changedFilters.cpu);
  var filterResult = {};

  if (shouldCalDomain || shouldCalIndex) {
    var dynamicDomainFilters = shouldCalDomain ? filterRecord.dynamicDomain : null;
    var cpuFilters = shouldCalIndex ? filterRecord.cpu : null;
    var filterFuncs = filters.reduce(function (acc, filter) {
      var fieldIndex = (0, _gpuFilterUtils.getDatasetFieldIndexForFilter)(dataset.id, filter);
      var field = fieldIndex !== -1 ? fields[fieldIndex] : null;
      return _objectSpread({}, acc, (0, _defineProperty2["default"])({}, filter.id, getFilterFunction(field, dataset.id, filter, layers)));
    }, {});
    filterResult = filterDataByFilterTypes({
      dynamicDomainFilters: dynamicDomainFilters,
      cpuFilters: cpuFilters,
      filterFuncs: filterFuncs
    }, allData);
  }

  return _objectSpread({}, newDataset, {}, filterResult, {
    gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)(filters, dataId, fields)
  });
}
/**
 *
 * @param {Object} filters
 * @param {Array|null} filters.dynamicDomainFilters
 * @param {Array|null} filters.cpuFilters
 * @param {Object} filters.filterFuncs
 * @returns {{filteredIndex: Array, filteredIndexForDomain: Array}} filteredIndex and filteredIndexForDomain
 */


function filterDataByFilterTypes(_ref2, allData) {
  var dynamicDomainFilters = _ref2.dynamicDomainFilters,
      cpuFilters = _ref2.cpuFilters,
      filterFuncs = _ref2.filterFuncs;

  var result = _objectSpread({}, dynamicDomainFilters ? {
    filteredIndexForDomain: []
  } : {}, {}, cpuFilters ? {
    filteredIndex: []
  } : {});

  var _loop = function _loop(i) {
    var d = allData[i];
    var matchForDomain = dynamicDomainFilters && dynamicDomainFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForDomain) {
      result.filteredIndexForDomain.push(i);
    }

    var matchForRender = cpuFilters && cpuFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForRender) {
      result.filteredIndex.push(i);
    }
  };

  for (var i = 0; i < allData.length; i++) {
    _loop(i);
  }

  return result;
}
/**
 * Get a record of filters based on domain type and gpu / cpu
 * @param {string} dataId
 * @param {Array<Object>} filters
 * @param {Object} opt.cpuOnly only allow cpu filtering
 * @param {Object} opt.ignoreDomain ignore filter for domain calculation
 * @returns {{dynamicDomain: Array, fixedDomain: Array, cpu: Array, gpu: Array}} filterRecord
 */


function getFilterRecord(dataId, filters) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var filterRecord = {
    dynamicDomain: [],
    fixedDomain: [],
    cpu: [],
    gpu: []
  };
  filters.forEach(function (f) {
    if (isValidFilterValue(f.type, f.value) && (0, _utils.toArray)(f.dataId).includes(dataId)) {
      (f.fixedDomain || opt.ignoreDomain ? filterRecord.fixedDomain : filterRecord.dynamicDomain).push(f);
      (f.gpu && !opt.cpuOnly ? filterRecord.gpu : filterRecord.cpu).push(f);
    }
  });
  return filterRecord;
}
/**
 * Compare filter records to get what has changed
 * @param {Object} filterRecord
 * @param {Object} oldFilterRecord
 * @returns {{dynamicDomain: Object, fixedDomain: Object, cpu: Object, gpu: Object}} changed filters based on type
 */


function diffFilters(filterRecord) {
  var oldFilterRecord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filterChanged = {};
  Object.entries(filterRecord).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        record = _ref4[0],
        items = _ref4[1];

    items.forEach(function (filter) {
      var oldFilter = (oldFilterRecord[record] || []).find(function (f) {
        return f.id === filter.id;
      });

      if (!oldFilter) {
        // added
        filterChanged = (0, _utils.set)([record, filter.id], 'added', filterChanged);
      } else {
        // check  what has changed
        ['name', 'value', 'dataId'].forEach(function (prop) {
          if (filter[prop] !== oldFilter[prop]) {
            filterChanged = (0, _utils.set)([record, filter.id], "".concat(prop, "_changed"), filterChanged);
          }
        });
      }
    });
    (oldFilterRecord[record] || []).forEach(function (oldFilter) {
      // deleted
      if (!items.find(function (f) {
        return f.id === oldFilter.id;
      })) {
        filterChanged = (0, _utils.set)([record, oldFilter.id], 'deleted', filterChanged);
      }
    });

    if (!filterChanged[record]) {
      filterChanged[record] = null;
    }
  });
  return filterChanged;
}
/**
 * Call by parsing filters from URL
 * Check if value of filter within filter domain, if not adjust it to match
 * filter domain
 *
 * @param {Array<string> | string | Number | Array<Number>} value
 * @param {Array} filter.domain
 * @param {String} filter.type
 * @returns {*} - adjusted value to match filter or null to remove filter
 */

/* eslint-disable complexity */


function adjustValueToFilterDomain(value, _ref5) {
  var domain = _ref5.domain,
      type = _ref5.type;

  if (!domain || !type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      if (!Array.isArray(value) || value.length !== 2) {
        return domain.map(function (d) {
          return d;
        });
      }

      return value.map(function (d, i) {
        return (0, _dataUtils.notNullorUndefined)(d) && isInRange(d, domain) ? d : domain[i];
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      if (!Array.isArray(value)) {
        return [];
      }

      var filteredValue = value.filter(function (d) {
        return domain.includes(d);
      });
      return filteredValue.length ? filteredValue : [];

    case _defaultSettings.FILTER_TYPES.select:
      return domain.includes(value) ? value : true;

    default:
      return null;
  }
}
/* eslint-enable complexity */

/**
 * Calculate numeric domain and suitable step
 *
 * @param {Object[]} data
 * @param {function} valueAccessor
 * @returns {object} domain and step
 */


function getNumericFieldDomain(data, valueAccessor) {
  var domain = [0, 1];
  var step = 0.1;
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];

  if (Array.isArray(data) && data.length > 1) {
    domain = ScaleUtils.getLinearDomain(mappedValue);
    var diff = domain[1] - domain[0]; // in case equal domain, [96, 96], which will break quantize scale

    if (!diff) {
      domain[1] = domain[0] + 1;
    }

    step = getNumericStepSize(diff) || step;
    domain[0] = formatNumberByStep(domain[0], step, 'floor');
    domain[1] = formatNumberByStep(domain[1], step, 'ceil');
  }

  var _getHistogram = getHistogram(domain, mappedValue),
      histogram = _getHistogram.histogram,
      enlargedHistogram = _getHistogram.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}

function getNumericStepSize(diff) {
  diff = Math.abs(diff);

  if (diff > 100) {
    return 1;
  } else if (diff > 3) {
    return 0.01;
  } else if (diff > 1) {
    return 0.001;
  } else if (diff <= 1) {
    // Try to get at least 1000 steps - and keep the step size below that of
    // the (diff > 1) case.
    var x = diff / 1000; // Find the exponent and truncate to 10 to the power of that exponent

    var exponentialForm = x.toExponential();
    var exponent = parseFloat(exponentialForm.split('e')[1]); // Getting ready for node 12
    // this is why we need decimal.js
    // Math.pow(10, -5) = 0.000009999999999999999
    //  the above result shows in browser and node 10
    //  node 12 behaves correctly

    return new _decimal.Decimal(10).pow(exponent).toNumber();
  }
}
/**
 * Calculate timestamp domain and suitable step
 *
 * @param {Array<Array>} data
 * @param {Function} valueAccessor
 * @returns {{
 *  domain: Array<Number>,
 *  step: Number,
 *  mappedValue: Array<Number>,
 *  histogram: Array<Object>,
 *  enlargedHistogram: Array<Object>
 * }} timestamp field domain
 */


function getTimestampFieldDomain(data, valueAccessor) {
  // to avoid converting string format time to epoch
  // every time we compare we store a value mapped to int in filter domain
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];
  var domain = ScaleUtils.getLinearDomain(mappedValue);
  var step = 0.01;
  var diff = domain[1] - domain[0];
  var entry = TimestampStepMap.find(function (f) {
    return f.max >= diff;
  });

  if (entry) {
    step = entry.step;
  }

  var _getHistogram2 = getHistogram(domain, mappedValue),
      histogram = _getHistogram2.histogram,
      enlargedHistogram = _getHistogram2.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    mappedValue: mappedValue,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 *
 * @param {Array<Number>} domain
 * @param {Array<Number>} mappedValue
 * @param {Number} bins
 * @returns {Array<{count: Number, x0: Number, x1: number}>} histogram
 */


function histogramConstruct(domain, mappedValue, bins) {
  return (0, _d3Array.histogram)().thresholds((0, _d3Array.ticks)(domain[0], domain[1], bins)).domain(domain)(mappedValue).map(function (bin) {
    return {
      count: bin.length,
      x0: bin.x0,
      x1: bin.x1
    };
  });
}
/**
 * Calculate histogram from domain and array of values
 *
 * @param {Array<Number>} domain
 * @param {Array<Object>} mappedValue
 * @returns {{histogram: Array<Object>, enlargedHistogram: Array<Object>}} 2 sets of histogram
 */


function getHistogram(domain, mappedValue) {
  var histogram = histogramConstruct(domain, mappedValue, histogramBins);
  var enlargedHistogram = histogramConstruct(domain, mappedValue, enlargedHistogramBins);
  return {
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 * round number based on step
 *
 * @param {Number} val
 * @param {Number} step
 * @param {string} bound
 * @returns {Number} rounded number
 */


function formatNumberByStep(val, step, bound) {
  if (bound === 'floor') {
    return Math.floor(val * (1 / step)) / (1 / step);
  }

  return Math.ceil(val * (1 / step)) / (1 / step);
}

function isInRange(val, domain) {
  if (!Array.isArray(domain)) {
    return false;
  }

  return val >= domain[0] && val <= domain[1];
}
/**
 * Determines whether a point is within the provided polygon
 *
 * @param point as input search [lat, lng]
 * @param polygon Points must be within these (Multi)Polygon(s)
 * @return {boolean}
 */


function isInPolygon(point, polygon) {
  return (0, _booleanWithin["default"])((0, _helpers.point)(point), polygon);
}

function getTimeWidgetTitleFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationYear ? 'MM/DD/YY' : diff > durationDay ? 'MM/DD/YY hh:mma' : 'MM/DD/YY hh:mm:ssa';
}

function getTimeWidgetHintFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationYear ? 'MM/DD/YY' : diff > durationWeek ? 'MM/DD' : diff > durationDay ? 'MM/DD hha' : diff > durationHour ? 'hh:mma' : 'hh:mm:ssa';
}
/**
 * Sanity check on filters to prepare for save
 * @param {String} type - filter type
 * @param {*} value - filter value
 * @returns {boolean} whether filter is value
 */

/* eslint-disable complexity */


function isValidFilterValue(type, value) {
  if (!type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.select:
      return value === true || value === false;

    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      return Array.isArray(value) && value.every(function (v) {
        return v !== null && !isNaN(v);
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return Array.isArray(value) && Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.input:
      return Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.polygon:
      var coordinates = (0, _lodash["default"])(value, ['geometry', 'coordinates']);
      return Boolean(value && value.id && coordinates);

    default:
      return true;
  }
}

function getFilterPlot(filter, allData) {
  if (filter.plotType === PLOT_TYPES.histogram || !filter.yAxis) {
    // histogram should be calculated when create filter
    return {};
  }

  var mappedValue = filter.mappedValue;
  var yAxis = filter.yAxis; // return lineChart

  var series = allData.map(function (d, i) {
    return {
      x: mappedValue[i],
      y: d[yAxis.tableFieldIndex - 1]
    };
  }).filter(function (_ref6) {
    var x = _ref6.x,
        y = _ref6.y;
    return Number.isFinite(x) && Number.isFinite(y);
  }).sort(function (a, b) {
    return (0, _d3Array.ascending)(a.x, b.x);
  });
  var yDomain = (0, _d3Array.extent)(series, function (d) {
    return d.y;
  });
  var xDomain = [series[0].x, series[series.length - 1].x];
  return {
    lineChart: {
      series: series,
      yDomain: yDomain,
      xDomain: xDomain
    },
    yAxis: yAxis
  };
}

function getDefaultFilterPlotType(filter) {
  var filterPlotTypes = SupportedPlotType[filter.type];

  if (!filterPlotTypes) {
    return null;
  }

  if (!filter.yAxis) {
    return filterPlotTypes["default"];
  }

  return filterPlotTypes[filter.yAxis.type] || null;
}
/**
 *
 * @param datasetIds list of dataset ids to be filtered
 * @param datasets all datasets
 * @param filters all filters to be applied to datasets
 * @return {{[datasetId: string]: Object}} datasets - new updated datasets
 */


function applyFiltersToDatasets(datasetIds, datasets, filters, layers) {
  var dataIds = (0, _utils.toArray)(datasetIds);
  return dataIds.reduce(function (acc, dataId) {
    var layersToFilter = (layers || []).filter(function (l) {
      return l.config.dataId === dataId;
    });
    var appliedFilters = filters.filter(function (d) {
      return shouldApplyFilter(d, dataId);
    });
    return _objectSpread({}, acc, (0, _defineProperty2["default"])({}, dataId, filterDataset(datasets[dataId], appliedFilters, layersToFilter)));
  }, datasets);
}
/**
 * Applies a new field name value to fielter and update both filter and dataset
 * @param {Object} filter - to be applied the new field name on
 * @param {Object} dataset - dataset the field belongs to
 * @param {string} fieldName - field.name
 * @param {Number} filterDatasetIndex - field.name
 * @param {Number} filters - current
 * @param {Object} option
 * @return {Object} {filter, datasets}
 */


function applyFilterFieldName(filter, dataset, fieldName) {
  var filterDatasetIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var _ref7 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref7$mergeDomain = _ref7.mergeDomain,
      mergeDomain = _ref7$mergeDomain === void 0 ? false : _ref7$mergeDomain;

  // using filterDatasetIndex we can filter only the specified dataset
  var fields = dataset.fields,
      allData = dataset.allData;
  var fieldIndex = fields.findIndex(function (f) {
    return f.name === fieldName;
  }); // if no field with same name is found, move to the next datasets

  if (fieldIndex === -1) {
    // throw new Error(`fieldIndex not found. Dataset must contain a property with name: ${fieldName}`);
    return {
      filter: null,
      dataset: dataset
    };
  } // TODO: validate field type


  var field = fields[fieldIndex];
  var filterProps = field.hasOwnProperty('filterProps') ? field.filterProps : getFilterProps(allData, field);

  var newFilter = _objectSpread({}, mergeDomain ? mergeFilterDomainStep(filter, filterProps) : _objectSpread({}, filter, {}, filterProps), {
    name: Object.assign([].concat(filter.name), (0, _defineProperty2["default"])({}, filterDatasetIndex, field.name)),
    fieldIdx: Object.assign([].concat(filter.fieldIdx), (0, _defineProperty2["default"])({}, filterDatasetIndex, field.tableFieldIndex - 1)),
    // TODO, since we allow to add multiple fields to a filter we can no longer freeze the filter
    freeze: true
  });

  var fieldWithFilterProps = _objectSpread({}, field, {
    filterProps: filterProps
  });

  var newFields = Object.assign([].concat(fields), (0, _defineProperty2["default"])({}, fieldIndex, fieldWithFilterProps));
  return {
    filter: newFilter,
    dataset: _objectSpread({}, dataset, {
      fields: newFields
    })
  };
}
/**
 * Merge one filter with other filter prop domain
 * @param filter
 * @param filterProps
 * @param fieldIndex
 * @param datasetIndex
 * @return {*}
 */

/* eslint-disable complexity */


function mergeFilterDomainStep(filter, filterProps) {
  if (!filter) {
    return null;
  }

  if (!filterProps) {
    return filter;
  }

  if (filter.fieldType && filter.fieldType !== filterProps.fieldType || !filterProps.domain) {
    return filter;
  }

  var combinedDomain = !filter.domain ? filterProps.domain : [].concat((0, _toConsumableArray2["default"])(filter.domain || []), (0, _toConsumableArray2["default"])(filterProps.domain || [])).sort(function (a, b) {
    return a - b;
  });

  var newFilter = _objectSpread({}, filter, {}, filterProps, {
    domain: [combinedDomain[0], combinedDomain[combinedDomain.length - 1]]
  });

  switch (filterProps.fieldType) {
    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread({}, newFilter, {
        domain: (0, _dataUtils.unique)(combinedDomain).sort()
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      var step = filter.step < filterProps.step ? filter.step : filterProps.step;
      return _objectSpread({}, newFilter, {
        step: step
      });

    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
    default:
      return newFilter;
  }
}
/* eslint-enable complexity */


var featureToFilterValue = function featureToFilterValue(feature, filterId) {
  var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread({}, feature, {
    id: feature.id,
    properties: _objectSpread({}, feature.properties, {}, properties, {
      filterId: filterId
    })
  });
};

exports.featureToFilterValue = featureToFilterValue;

var getFilterIdInFeature = function getFilterIdInFeature(f) {
  return (0, _lodash["default"])(f, ['properties', 'filterId']);
};
/**
 * Generates polygon filter
 * @param layers array of layers
 * @param feature polygon to use
 * @return {object} filter
 */


exports.getFilterIdInFeature = getFilterIdInFeature;

function generatePolygonFilter(layers, feature) {
  var _layers$reduce = layers.reduce(function (acc, layer) {
    return _objectSpread({}, acc, {
      dataId: [].concat((0, _toConsumableArray2["default"])(acc.dataId), [layer.config.dataId]),
      layerId: [].concat((0, _toConsumableArray2["default"])(acc.layerId), [layer.id]),
      name: [].concat((0, _toConsumableArray2["default"])(acc.name), [layer.config.label])
    });
  }, {
    dataId: [],
    layerId: [],
    name: []
  }),
      dataId = _layers$reduce.dataId,
      layerId = _layers$reduce.layerId,
      name = _layers$reduce.name;

  var filter = getDefaultFilter(dataId);
  return _objectSpread({}, filter, {
    fixedDomain: true,
    type: _defaultSettings.FILTER_TYPES.polygon,
    name: name,
    layerId: layerId,
    value: featureToFilterValue(feature, filter.id, {
      isVisible: true
    })
  });
}
/**
 * Run filter entirely on CPU
 * @param {Object} state - visState
 * @param {string} dataId
 * @return {Object} state state with updated datasets
 */


function filterDatasetCPU(state, dataId) {
  var datasetFilters = state.filters.filter(function (f) {
    return f.dataId.includes(dataId);
  });
  var selectedDataset = state.datasets[dataId];

  if (!selectedDataset) {
    return state;
  }

  var opt = {
    cpuOnly: true,
    ignoreDomain: true
  };

  if (!datasetFilters.length) {
    // no filter
    var _filtered = _objectSpread({}, selectedDataset, {
      filteredIdxCPU: selectedDataset.allIndexes,
      filterRecordCPU: getFilterRecord(dataId, state.filters, opt)
    });

    return (0, _utils.set)(['datasets', dataId], _filtered, state);
  } // no gpu filter


  if (!datasetFilters.find(function (f) {
    return f.gpu;
  })) {
    var _filtered2 = _objectSpread({}, selectedDataset, {
      filteredIdxCPU: selectedDataset.filteredIndex,
      filterRecordCPU: getFilterRecord(dataId, state.filters, opt)
    });

    return (0, _utils.set)(['datasets', dataId], _filtered2, state);
  } // make a copy for cpu filtering


  var copied = _objectSpread({}, selectedDataset, {
    filterRecord: selectedDataset.filterRecordCPU,
    filteredIndex: selectedDataset.filteredIdxCPU
  });

  var filtered = filterDataset(copied, state.filters, state.layers, opt);

  var cpuFilteredDataset = _objectSpread({}, selectedDataset, {
    filteredIdxCPU: filtered.filteredIndex,
    filterRecordCPU: filtered.filterRecord
  });

  return (0, _utils.set)(['datasets', dataId], cpuFilteredDataset, state);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWx0ZXItdXRpbHMuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wU3RlcE1hcCIsIm1heCIsInN0ZXAiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImhpc3RvZ3JhbUJpbnMiLCJlbmxhcmdlZEhpc3RvZ3JhbUJpbnMiLCJkdXJhdGlvblNlY29uZCIsImR1cmF0aW9uTWludXRlIiwiZHVyYXRpb25Ib3VyIiwiZHVyYXRpb25EYXkiLCJkdXJhdGlvbldlZWsiLCJkdXJhdGlvblllYXIiLCJQTE9UX1RZUEVTIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwiRklMVEVSX1VQREFURVJfUFJPUFMiLCJkYXRhSWQiLCJuYW1lIiwibGF5ZXJJZCIsIkxJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyIsIlN1cHBvcnRlZFBsb3RUeXBlIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwiQUxMX0ZJRUxEX1RZUEVTIiwiaW50ZWdlciIsInJlYWwiLCJyYW5nZSIsIkZJTFRFUl9DT01QT05FTlRTIiwic2VsZWN0IiwibXVsdGlTZWxlY3QiLCJwb2x5Z29uIiwiREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFIiwiZnJlZXplIiwiaWQiLCJmaXhlZERvbWFpbiIsImVubGFyZ2VkIiwiaXNBbmltYXRpbmciLCJzcGVlZCIsInR5cGUiLCJmaWVsZElkeCIsImRvbWFpbiIsInZhbHVlIiwicGxvdFR5cGUiLCJ5QXhpcyIsImludGVydmFsIiwiZ3B1IiwiRklMVEVSX0lEX0xFTkdUSCIsIkxBWUVSX0ZJTFRFUlMiLCJnZXREZWZhdWx0RmlsdGVyIiwic2hvdWxkQXBwbHlGaWx0ZXIiLCJmaWx0ZXIiLCJkYXRhc2V0SWQiLCJkYXRhSWRzIiwiaW5jbHVkZXMiLCJ2YWxpZGF0ZVBvbHlnb25GaWx0ZXIiLCJkYXRhc2V0IiwibGF5ZXJzIiwiZmFpbGVkIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaXNWYWxpZERhdGFzZXQiLCJsYXllciIsImZpbmQiLCJsIiwiZmlsdGVyVmFsaWRhdG9ycyIsInZhbGlkYXRlRmlsdGVyIiwiZmlsdGVyRGF0YUlkIiwiZmlsdGVyRGF0YXNldEluZGV4IiwiaW5kZXhPZiIsImluaXRpYWxpemVGaWx0ZXIiLCJmaWVsZE5hbWUiLCJhcHBseUZpbHRlckZpZWxkTmFtZSIsIm1lcmdlRG9tYWluIiwidXBkYXRlZEZpbHRlciIsInVwZGF0ZWREYXRhc2V0IiwiYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbiIsInZhbGlkYXRlRmlsdGVyWUF4aXMiLCJ2YWxpZGF0ZUZpbHRlcldpdGhEYXRhIiwiaGFzT3duUHJvcGVydHkiLCJmaWVsZHMiLCJhbGxEYXRhIiwibWF0Y2hlZEF4aXMiLCJnZXRGaWx0ZXJQbG90IiwiZ2V0RmlsdGVyUHJvcHMiLCJmaWVsZCIsImZpbHRlclByb3BzIiwiZ2V0RmllbGREb21haW4iLCJmaWVsZFR5cGUiLCJ0eXBlT3B0aW9ucyIsInN0cmluZyIsImRhdGUiLCJ0aW1lc3RhbXAiLCJ0YWJsZUZpZWxkSW5kZXgiLCJpc1RpbWUiLCJ2YWx1ZUFjY2Vzc29yIiwibWF5YmVUb0RhdGUiLCJiaW5kIiwiZm9ybWF0IiwiZ2V0TnVtZXJpY0ZpZWxkRG9tYWluIiwiU2NhbGVVdGlscyIsImdldE9yZGluYWxEb21haW4iLCJnZXRUaW1lc3RhbXBGaWVsZERvbWFpbiIsImdldFBvbHlnb25GaWx0ZXJGdW5jdG9yIiwiZ2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiTEFZRVJfVFlQRVMiLCJwb2ludCIsImljb24iLCJkYXRhIiwicG9zIiwiZXZlcnkiLCJpc0Zpbml0ZSIsImlzSW5Qb2x5Z29uIiwiYXJjIiwibGluZSIsImdldEZpbHRlckZ1bmN0aW9uIiwiaXNJblJhbmdlIiwibWFwcGVkVmFsdWUiLCJhY2Nlc3NvciIsIkFycmF5IiwiaXNBcnJheSIsImluZGV4IiwibGVuZ3RoIiwibGF5ZXJGaWx0ZXJGdW5jdGlvbnMiLCJtYXAiLCJjb25maWciLCJmaWx0ZXJGdW5jIiwidXBkYXRlRmlsdGVyRGF0YUlkIiwiZmlsdGVyRGF0YXNldCIsImZpbHRlcnMiLCJvcHQiLCJvbGRGaWx0ZXJSZWNvcmQiLCJmaWx0ZXJSZWNvcmQiLCJnZXRGaWx0ZXJSZWNvcmQiLCJuZXdEYXRhc2V0IiwiZ3B1RmlsdGVyIiwiZmlsdGVyZWRJbmRleCIsImFsbEluZGV4ZXMiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiY2hhbmdlZEZpbHRlcnMiLCJkaWZmRmlsdGVycyIsInNob3VsZENhbERvbWFpbiIsIkJvb2xlYW4iLCJkeW5hbWljRG9tYWluIiwic2hvdWxkQ2FsSW5kZXgiLCJjcHUiLCJmaWx0ZXJSZXN1bHQiLCJkeW5hbWljRG9tYWluRmlsdGVycyIsImNwdUZpbHRlcnMiLCJmaWx0ZXJGdW5jcyIsInJlZHVjZSIsImFjYyIsImZpZWxkSW5kZXgiLCJmaWx0ZXJEYXRhQnlGaWx0ZXJUeXBlcyIsInJlc3VsdCIsImkiLCJkIiwibWF0Y2hGb3JEb21haW4iLCJwdXNoIiwibWF0Y2hGb3JSZW5kZXIiLCJmb3JFYWNoIiwiZiIsImlnbm9yZURvbWFpbiIsImNwdU9ubHkiLCJmaWx0ZXJDaGFuZ2VkIiwiT2JqZWN0IiwiZW50cmllcyIsInJlY29yZCIsIml0ZW1zIiwib2xkRmlsdGVyIiwicHJvcCIsImZpbHRlcmVkVmFsdWUiLCJnZXRMaW5lYXJEb21haW4iLCJkaWZmIiwiZ2V0TnVtZXJpY1N0ZXBTaXplIiwiZm9ybWF0TnVtYmVyQnlTdGVwIiwiZ2V0SGlzdG9ncmFtIiwiZW5sYXJnZWRIaXN0b2dyYW0iLCJNYXRoIiwiYWJzIiwieCIsImV4cG9uZW50aWFsRm9ybSIsInRvRXhwb25lbnRpYWwiLCJleHBvbmVudCIsInBhcnNlRmxvYXQiLCJzcGxpdCIsIkRlY2ltYWwiLCJwb3ciLCJ0b051bWJlciIsImVudHJ5IiwiaGlzdG9ncmFtQ29uc3RydWN0IiwiYmlucyIsInRocmVzaG9sZHMiLCJiaW4iLCJjb3VudCIsIngwIiwieDEiLCJ2YWwiLCJib3VuZCIsImZsb29yIiwiY2VpbCIsImdldFRpbWVXaWRnZXRUaXRsZUZvcm1hdHRlciIsImdldFRpbWVXaWRnZXRIaW50Rm9ybWF0dGVyIiwidiIsImlzTmFOIiwiaW5wdXQiLCJjb29yZGluYXRlcyIsInNlcmllcyIsInkiLCJzb3J0IiwiYSIsImIiLCJ5RG9tYWluIiwieERvbWFpbiIsImdldERlZmF1bHRGaWx0ZXJQbG90VHlwZSIsImZpbHRlclBsb3RUeXBlcyIsImFwcGx5RmlsdGVyc1RvRGF0YXNldHMiLCJkYXRhc2V0SWRzIiwiZGF0YXNldHMiLCJsYXllcnNUb0ZpbHRlciIsImFwcGxpZWRGaWx0ZXJzIiwiZmluZEluZGV4IiwibmV3RmlsdGVyIiwibWVyZ2VGaWx0ZXJEb21haW5TdGVwIiwiYXNzaWduIiwiY29uY2F0IiwiZmllbGRXaXRoRmlsdGVyUHJvcHMiLCJuZXdGaWVsZHMiLCJjb21iaW5lZERvbWFpbiIsImZlYXR1cmVUb0ZpbHRlclZhbHVlIiwiZmVhdHVyZSIsImZpbHRlcklkIiwicHJvcGVydGllcyIsImdldEZpbHRlcklkSW5GZWF0dXJlIiwiZ2VuZXJhdGVQb2x5Z29uRmlsdGVyIiwibGFiZWwiLCJpc1Zpc2libGUiLCJmaWx0ZXJEYXRhc2V0Q1BVIiwic3RhdGUiLCJkYXRhc2V0RmlsdGVycyIsInNlbGVjdGVkRGF0YXNldCIsImZpbHRlcmVkIiwiZmlsdGVyZWRJZHhDUFUiLCJmaWx0ZXJSZWNvcmRDUFUiLCJjb3BpZWQiLCJjcHVGaWx0ZXJlZERhdGFzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxDQUM5QjtBQUFDQyxFQUFBQSxHQUFHLEVBQUUsQ0FBTjtBQUFTQyxFQUFBQSxJQUFJLEVBQUU7QUFBZixDQUQ4QixFQUU5QjtBQUFDRCxFQUFBQSxHQUFHLEVBQUUsRUFBTjtBQUFV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QUFZLEVBQUU0RyxlQUFlLENBQUNHLGVBRnBCO0FBR1YzRyxJQUFBQSxhQUFhLEVBQUV3RyxlQUFlLENBQUNFO0FBSHJCLElBQVo7O0FBTUEsTUFBTUQsUUFBUSxHQUFHakgsYUFBYSxDQUFDb0gsTUFBRCxFQUFTTixLQUFLLENBQUM3RyxPQUFmLEVBQXdCNkcsS0FBSyxDQUFDckwsTUFBOUIsRUFBc0N5RSxHQUF0QyxDQUE5Qjs7QUFFQSxNQUFNbUgsa0JBQWtCLHFCQUNuQkwsZUFEbUI7QUFFdEJFLElBQUFBLGNBQWMsRUFBRUQsUUFBUSxDQUFDekcsYUFGSDtBQUd0QjJHLElBQUFBLGVBQWUsRUFBRUYsUUFBUSxDQUFDN0c7QUFISixJQUF4Qjs7QUFNQSxTQUFPLGdCQUFJLENBQUMsVUFBRCxFQUFhbkgsTUFBYixDQUFKLEVBQTBCb08sa0JBQTFCLEVBQThDUCxLQUE5QyxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2FzY2VuZGluZywgZXh0ZW50LCBoaXN0b2dyYW0gYXMgZDNIaXN0b2dyYW0sIHRpY2tzfSBmcm9tICdkMy1hcnJheSc7XHJcbmltcG9ydCBrZXlNaXJyb3IgZnJvbSAna2V5bWlycm9yJztcclxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcclxuaW1wb3J0IGJvb2xlYW5XaXRoaW4gZnJvbSAnQHR1cmYvYm9vbGVhbi13aXRoaW4nO1xyXG5pbXBvcnQge3BvaW50IGFzIHR1cmZQb2ludH0gZnJvbSAnQHR1cmYvaGVscGVycyc7XHJcbmltcG9ydCB7RGVjaW1hbH0gZnJvbSAnZGVjaW1hbC5qcyc7XHJcbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTLCBGSUxURVJfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHttYXliZVRvRGF0ZSwgbm90TnVsbG9yVW5kZWZpbmVkLCB1bmlxdWUsIHRpbWVUb1VuaXhNaWxsaX0gZnJvbSAnLi9kYXRhLXV0aWxzJztcclxuaW1wb3J0ICogYXMgU2NhbGVVdGlscyBmcm9tICcuL2RhdGEtc2NhbGUtdXRpbHMnO1xyXG5pbXBvcnQge0xBWUVSX1RZUEVTfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBzZXQsIHRvQXJyYXl9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge2dldEdwdUZpbHRlclByb3BzLCBnZXREYXRhc2V0RmllbGRJbmRleEZvckZpbHRlcn0gZnJvbSAnLi9ncHUtZmlsdGVyLXV0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lc3RhbXBTdGVwTWFwID0gW1xyXG4gIHttYXg6IDEsIHN0ZXA6IDAuMDV9LFxyXG4gIHttYXg6IDEwLCBzdGVwOiAwLjF9LFxyXG4gIHttYXg6IDEwMCwgc3RlcDogMX0sXHJcbiAge21heDogNTAwLCBzdGVwOiA1fSxcclxuICB7bWF4OiAxMDAwLCBzdGVwOiAxMH0sXHJcbiAge21heDogNTAwMCwgc3RlcDogNTB9LFxyXG4gIHttYXg6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgc3RlcDogMTAwMH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaXN0b2dyYW1CaW5zID0gMzA7XHJcbmV4cG9ydCBjb25zdCBlbmxhcmdlZEhpc3RvZ3JhbUJpbnMgPSAxMDA7XHJcblxyXG5jb25zdCBkdXJhdGlvblNlY29uZCA9IDEwMDA7XHJcbmNvbnN0IGR1cmF0aW9uTWludXRlID0gZHVyYXRpb25TZWNvbmQgKiA2MDtcclxuY29uc3QgZHVyYXRpb25Ib3VyID0gZHVyYXRpb25NaW51dGUgKiA2MDtcclxuY29uc3QgZHVyYXRpb25EYXkgPSBkdXJhdGlvbkhvdXIgKiAyNDtcclxuY29uc3QgZHVyYXRpb25XZWVrID0gZHVyYXRpb25EYXkgKiA3O1xyXG5jb25zdCBkdXJhdGlvblllYXIgPSBkdXJhdGlvbkRheSAqIDM2NTtcclxuXHJcbmV4cG9ydCBjb25zdCBQTE9UX1RZUEVTID0ga2V5TWlycm9yKHtcclxuICBoaXN0b2dyYW06IG51bGwsXHJcbiAgbGluZUNoYXJ0OiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9VUERBVEVSX1BST1BTID0ga2V5TWlycm9yKHtcclxuICBkYXRhSWQ6IG51bGwsXHJcbiAgbmFtZTogbnVsbCxcclxuICBsYXllcklkOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyA9IGtleU1pcnJvcih7XHJcbiAgW0ZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWVdOiBudWxsXHJcbn0pO1xyXG4vKipcclxuICogTWF4IG51bWJlciBvZiBmaWx0ZXIgdmFsdWUgYnVmZmVycyB0aGF0IGRlY2suZ2wgcHJvdmlkZXNcclxuICovXHJcblxyXG5jb25zdCBTdXBwb3J0ZWRQbG90VHlwZSA9IHtcclxuICBbRklMVEVSX1RZUEVTLnRpbWVSYW5nZV06IHtcclxuICAgIGRlZmF1bHQ6ICdoaXN0b2dyYW0nLFxyXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogJ2xpbmVDaGFydCcsXHJcbiAgICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiAnbGluZUNoYXJ0J1xyXG4gIH0sXHJcbiAgW0ZJTFRFUl9UWVBFUy5yYW5nZV06IHtcclxuICAgIGRlZmF1bHQ6ICdoaXN0b2dyYW0nLFxyXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogJ2xpbmVDaGFydCcsXHJcbiAgICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiAnbGluZUNoYXJ0J1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxURVJfQ09NUE9ORU5UUyA9IHtcclxuICBbRklMVEVSX1RZUEVTLnNlbGVjdF06ICdTaW5nbGVTZWxlY3RGaWx0ZXInLFxyXG4gIFtGSUxURVJfVFlQRVMubXVsdGlTZWxlY3RdOiAnTXVsdGlTZWxlY3RGaWx0ZXInLFxyXG4gIFtGSUxURVJfVFlQRVMudGltZVJhbmdlXTogJ1RpbWVSYW5nZUZpbHRlcicsXHJcbiAgW0ZJTFRFUl9UWVBFUy5yYW5nZV06ICdSYW5nZUZpbHRlcicsXHJcbiAgW0ZJTFRFUl9UWVBFUy5wb2x5Z29uXTogJ1BvbHlnb25GaWx0ZXInXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFID0ge1xyXG4gIGRhdGFJZDogW10sIC8vIFtzdHJpbmddXHJcbiAgZnJlZXplOiBmYWxzZSxcclxuICBpZDogbnVsbCxcclxuXHJcbiAgLy8gdGltZSByYW5nZSBmaWx0ZXIgc3BlY2lmaWNcclxuICBmaXhlZERvbWFpbjogZmFsc2UsXHJcbiAgZW5sYXJnZWQ6IGZhbHNlLFxyXG4gIGlzQW5pbWF0aW5nOiBmYWxzZSxcclxuICBzcGVlZDogMSxcclxuXHJcbiAgLy8gZmllbGQgc3BlY2lmaWNcclxuICBuYW1lOiBbXSwgLy8gc3RyaW5nXHJcbiAgdHlwZTogbnVsbCxcclxuICBmaWVsZElkeDogW10sIC8vIFtpbnRlZ2VyXVxyXG4gIGRvbWFpbjogbnVsbCxcclxuICB2YWx1ZTogbnVsbCxcclxuXHJcbiAgLy8gcGxvdFxyXG4gIHBsb3RUeXBlOiBQTE9UX1RZUEVTLmhpc3RvZ3JhbSxcclxuICB5QXhpczogbnVsbCxcclxuICBpbnRlcnZhbDogbnVsbCxcclxuXHJcbiAgLy8gbW9kZVxyXG4gIGdwdTogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxURVJfSURfTEVOR1RIID0gNDtcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlFUl9GSUxURVJTID0gW0ZJTFRFUl9UWVBFUy5wb2x5Z29uXTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBmaWx0ZXIgd2l0aCBhIGRhdGFzZXQgaWQgYXMgZGF0YUlkXHJcbiAqIEBwYXJhbSB7W3N0cmluZ119IGRhdGFJZFxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IGZpbHRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGaWx0ZXIoZGF0YUlkKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLkRFRkFVTFRfRklMVEVSX1NUUlVDVFVSRSxcclxuICAgIC8vIHN0b3JlIGl0IGFzIGRhdGFJZCBhbmQgaXQgY291bGQgYmUgb25lIG9yIG1hbnlcclxuICAgIGRhdGFJZDogdG9BcnJheShkYXRhSWQpLFxyXG4gICAgaWQ6IGdlbmVyYXRlSGFzaElkKEZJTFRFUl9JRF9MRU5HVEgpXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgZmlsdGVyIGlzIHZhbGlkIGJhc2VkIG9uIHRoZSBnaXZlbiBkYXRhSWRcclxuICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciB0byB2YWxpZGF0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldCBpZCB0byB2YWxpZGF0ZSBmaWx0ZXIgYWdhaW5zdFxyXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGEgZmlsdGVyIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRBcHBseUZpbHRlcihmaWx0ZXIsIGRhdGFzZXRJZCkge1xyXG4gIGNvbnN0IGRhdGFJZHMgPSB0b0FycmF5KGZpbHRlci5kYXRhSWQpO1xyXG4gIHJldHVybiBkYXRhSWRzLmluY2x1ZGVzKGRhdGFzZXRJZCkgJiYgZmlsdGVyLnZhbHVlICE9PSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGFuZCBtb2RpZmllcyBwb2x5Z29uIGZpbHRlciBzdHJ1Y3R1cmVcclxuICogQHBhcmFtIGRhdGFzZXRcclxuICogQHBhcmFtIGZpbHRlclxyXG4gKiBAcGFyYW0gbGF5ZXJzXHJcbiAqIEByZXR1cm4ge29iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBvbHlnb25GaWx0ZXIoZGF0YXNldCwgZmlsdGVyLCBsYXllcnMpIHtcclxuICBjb25zdCBmYWlsZWQgPSB7ZGF0YXNldCwgZmlsdGVyOiBudWxsfTtcclxuICBjb25zdCB7dmFsdWUsIGxheWVySWQsIHR5cGUsIGRhdGFJZH0gPSBmaWx0ZXI7XHJcblxyXG4gIGlmICghbGF5ZXJJZCB8fCAhaXNWYWxpZEZpbHRlclZhbHVlKHR5cGUsIHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhaWxlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzVmFsaWREYXRhc2V0ID0gZGF0YUlkLmluY2x1ZGVzKGRhdGFzZXQuaWQpO1xyXG5cclxuICBpZiAoIWlzVmFsaWREYXRhc2V0KSB7XHJcbiAgICByZXR1cm4gZmFpbGVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGF5ZXIgPSBsYXllcnMuZmluZChsID0+IGxheWVySWQuaW5jbHVkZXMobC5pZCkpO1xyXG5cclxuICBpZiAoIWxheWVyKSB7XHJcbiAgICByZXR1cm4gZmFpbGVkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZpbHRlcjoge1xyXG4gICAgICAuLi5maWx0ZXIsXHJcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcclxuICAgICAgZmllbGRJZHg6IFtdXHJcbiAgICB9LFxyXG4gICAgZGF0YXNldFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gZmlsdGVyIHZhbGlkYXRvcnNcclxuICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gKi9cclxuY29uc3QgZmlsdGVyVmFsaWRhdG9ycyA9IHtcclxuICBbRklMVEVSX1RZUEVTLnBvbHlnb25dOiB2YWxpZGF0ZVBvbHlnb25GaWx0ZXJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHZhbGlkYXRlIGZpbHRlciBmdW5jdGlvblxyXG4gKiBAcGFyYW0gZGF0YXNldFxyXG4gKiBAcGFyYW0gZmlsdGVyXHJcbiAqIEByZXR1cm4geyp9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGaWx0ZXIoZGF0YXNldCwgZmlsdGVyKSB7XHJcbiAgLy8gbWF0Y2ggZmlsdGVyLmRhdGFJZFxyXG4gIGNvbnN0IGZhaWxlZCA9IHtkYXRhc2V0LCBmaWx0ZXI6IG51bGx9O1xyXG4gIGNvbnN0IGZpbHRlckRhdGFJZCA9IHRvQXJyYXkoZmlsdGVyLmRhdGFJZCk7XHJcblxyXG4gIGNvbnN0IGZpbHRlckRhdGFzZXRJbmRleCA9IGZpbHRlckRhdGFJZC5pbmRleE9mKGRhdGFzZXQuaWQpO1xyXG4gIGlmIChmaWx0ZXJEYXRhc2V0SW5kZXggPCAwKSB7XHJcbiAgICAvLyB0aGUgY3VycmVudCBmaWx0ZXIgaXMgbm90IG1hcHBlZCBhZ2FpbnN0IHRoZSBjdXJyZW50IGRhdGFzZXRcclxuICAgIHJldHVybiBmYWlsZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbml0aWFsaXplRmlsdGVyID0ge1xyXG4gICAgLi4uZ2V0RGVmYXVsdEZpbHRlcihmaWx0ZXIuZGF0YUlkKSxcclxuICAgIC4uLmZpbHRlcixcclxuICAgIGRhdGFJZDogZmlsdGVyRGF0YUlkLFxyXG4gICAgbmFtZTogdG9BcnJheShmaWx0ZXIubmFtZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWVsZE5hbWUgPSBpbml0aWFsaXplRmlsdGVyLm5hbWVbZmlsdGVyRGF0YXNldEluZGV4XTtcclxuICBjb25zdCB7ZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBkYXRhc2V0OiB1cGRhdGVkRGF0YXNldH0gPSBhcHBseUZpbHRlckZpZWxkTmFtZShcclxuICAgIGluaXRpYWxpemVGaWx0ZXIsXHJcbiAgICBkYXRhc2V0LFxyXG4gICAgZmllbGROYW1lLFxyXG4gICAgZmlsdGVyRGF0YXNldEluZGV4LFxyXG4gICAge21lcmdlRG9tYWluOiB0cnVlfVxyXG4gICk7XHJcblxyXG4gIGlmICghdXBkYXRlZEZpbHRlcikge1xyXG4gICAgcmV0dXJuIGZhaWxlZDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZWRGaWx0ZXIudmFsdWUgPSBhZGp1c3RWYWx1ZVRvRmlsdGVyRG9tYWluKGZpbHRlci52YWx1ZSwgdXBkYXRlZEZpbHRlcik7XHJcbiAgaWYgKHVwZGF0ZWRGaWx0ZXIudmFsdWUgPT09IG51bGwpIHtcclxuICAgIC8vIGNhbm5vdCBhZGp1c3Qgc2F2ZWQgdmFsdWUgdG8gZmlsdGVyXHJcbiAgICByZXR1cm4gZmFpbGVkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZpbHRlcjogdmFsaWRhdGVGaWx0ZXJZQXhpcyh1cGRhdGVkRmlsdGVyLCB1cGRhdGVkRGF0YXNldCksXHJcbiAgICBkYXRhc2V0OiB1cGRhdGVkRGF0YXNldFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBzYXZlZCBmaWx0ZXIgY29uZmlnIHdpdGggbmV3IGRhdGEsXHJcbiAqIGNhbGN1bGF0ZSBkb21haW4gYW5kIGZpZWxkSWR4IGJhc2VkIG5ldyBmaWVsZHMgYW5kIGRhdGFcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXRcclxuICogQHBhcmFtIHtPYmplY3R9IGZpbHRlciAtIGZpbHRlciB0byBiZSB2YWxpZGF0ZVxyXG4gKiBAcmV0dXJuIHtPYmplY3QgfCBudWxsfSAtIHZhbGlkYXRlZCBmaWx0ZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZpbHRlcldpdGhEYXRhKGRhdGFzZXQsIGZpbHRlciwgbGF5ZXJzKSB7XHJcbiAgcmV0dXJuIGZpbHRlclZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoZmlsdGVyLnR5cGUpXHJcbiAgICA/IGZpbHRlclZhbGlkYXRvcnNbZmlsdGVyLnR5cGVdKGRhdGFzZXQsIGZpbHRlciwgbGF5ZXJzKVxyXG4gICAgOiB2YWxpZGF0ZUZpbHRlcihkYXRhc2V0LCBmaWx0ZXIpO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgWUF4aXNcclxuICogQHBhcmFtIGZpbHRlclxyXG4gKiBAcGFyYW0gZGF0YXNldFxyXG4gKiBAcmV0dXJuIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVGaWx0ZXJZQXhpcyhmaWx0ZXIsIGRhdGFzZXQpIHtcclxuICAvLyBUT0RPOiB2YWxpZGF0ZSB5QXhpcyBhZ2FpbnN0IG90aGVyIGRhdGFzZXRzXHJcblxyXG4gIGNvbnN0IHtmaWVsZHMsIGFsbERhdGF9ID0gZGF0YXNldDtcclxuICBjb25zdCB7eUF4aXN9ID0gZmlsdGVyO1xyXG4gIC8vIFRPRE86IHZhbGlkYXRlIHlBeGlzIGFnYWluc3Qgb3RoZXIgZGF0YXNldHNcclxuICBpZiAoeUF4aXMpIHtcclxuICAgIGNvbnN0IG1hdGNoZWRBeGlzID0gZmllbGRzLmZpbmQoKHtuYW1lLCB0eXBlfSkgPT4gbmFtZSA9PT0geUF4aXMubmFtZSAmJiB0eXBlID09PSB5QXhpcy50eXBlKTtcclxuXHJcbiAgICBmaWx0ZXIgPSBtYXRjaGVkQXhpc1xyXG4gICAgICA/IHtcclxuICAgICAgICAgIC4uLmZpbHRlcixcclxuICAgICAgICAgIHlBeGlzOiBtYXRjaGVkQXhpcyxcclxuICAgICAgICAgIC4uLmdldEZpbHRlclBsb3Qoey4uLmZpbHRlciwgeUF4aXM6IG1hdGNoZWRBeGlzfSwgYWxsRGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIDogZmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkZWZhdWx0IGZpbHRlciBwcm9wIGJhc2VkIG9uIGZpZWxkIHR5cGVcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFsbERhdGFcclxuICogQHBhcmFtIHtPYmplY3R9IGZpZWxkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IGRlZmF1bHQgZmlsdGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyUHJvcHMoYWxsRGF0YSwgZmllbGQpIHtcclxuICBjb25zdCBmaWx0ZXJQcm9wcyA9IHtcclxuICAgIC4uLmdldEZpZWxkRG9tYWluKGFsbERhdGEsIGZpZWxkKSxcclxuICAgIGZpZWxkVHlwZTogZmllbGQudHlwZVxyXG4gIH07XHJcblxyXG4gIHN3aXRjaCAoZmllbGQudHlwZSkge1xyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMucmVhbDpcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmludGVnZXI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZmlsdGVyUHJvcHMsXHJcbiAgICAgICAgdmFsdWU6IGZpbHRlclByb3BzLmRvbWFpbixcclxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMucmFuZ2UsXHJcbiAgICAgICAgdHlwZU9wdGlvbnM6IFtGSUxURVJfVFlQRVMucmFuZ2VdLFxyXG4gICAgICAgIGdwdTogdHJ1ZVxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZmlsdGVyUHJvcHMsXHJcbiAgICAgICAgdHlwZTogRklMVEVSX1RZUEVTLnNlbGVjdCxcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICBncHU6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuc3RyaW5nOlxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuZGF0ZTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5maWx0ZXJQcm9wcyxcclxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3QsXHJcbiAgICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICAgIGdwdTogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZmlsdGVyUHJvcHMsXHJcbiAgICAgICAgdHlwZTogRklMVEVSX1RZUEVTLnRpbWVSYW5nZSxcclxuICAgICAgICBlbmxhcmdlZDogdHJ1ZSxcclxuICAgICAgICBmaXhlZERvbWFpbjogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogZmlsdGVyUHJvcHMuZG9tYWluLFxyXG4gICAgICAgIGdwdTogdHJ1ZVxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7fTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgZmllbGQgZG9tYWluIGJhc2VkIG9uIGZpZWxkIHR5cGUgYW5kIGRhdGFcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFsbERhdGFcclxuICogQHBhcmFtIHtPYmplY3R9IGZpZWxkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IHdpdGggZG9tYWluIGFzIGtleVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkRG9tYWluKGFsbERhdGEsIGZpZWxkKSB7XHJcbiAgY29uc3QgZmllbGRJZHggPSBmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxO1xyXG4gIGNvbnN0IGlzVGltZSA9IGZpZWxkLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA7XHJcbiAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IG1heWJlVG9EYXRlLmJpbmQobnVsbCwgaXNUaW1lLCBmaWVsZElkeCwgZmllbGQuZm9ybWF0KTtcclxuICBsZXQgZG9tYWluO1xyXG5cclxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnJlYWw6XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyOlxyXG4gICAgICAvLyBjYWxjdWxhdGUgZG9tYWluIGFuZCBzdGVwXHJcbiAgICAgIHJldHVybiBnZXROdW1lcmljRmllbGREb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcik7XHJcblxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuYm9vbGVhbjpcclxuICAgICAgcmV0dXJuIHtkb21haW46IFt0cnVlLCBmYWxzZV19O1xyXG5cclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnN0cmluZzpcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmRhdGU6XHJcbiAgICAgIGRvbWFpbiA9IFNjYWxlVXRpbHMuZ2V0T3JkaW5hbERvbWFpbihhbGxEYXRhLCB2YWx1ZUFjY2Vzc29yKTtcclxuICAgICAgcmV0dXJuIHtkb21haW59O1xyXG5cclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcclxuICAgICAgcmV0dXJuIGdldFRpbWVzdGFtcEZpZWxkRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7ZG9tYWluOiBTY2FsZVV0aWxzLmdldE9yZGluYWxEb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcil9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvbHlnb25GaWx0ZXJGdW5jdG9yID0gKGxheWVyLCBmaWx0ZXIpID0+IHtcclxuICBjb25zdCBnZXRQb3NpdGlvbiA9IGxheWVyLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcclxuXHJcbiAgc3dpdGNoIChsYXllci50eXBlKSB7XHJcbiAgICBjYXNlIExBWUVSX1RZUEVTLnBvaW50OlxyXG4gICAgY2FzZSBMQVlFUl9UWVBFUy5pY29uOlxyXG4gICAgICByZXR1cm4gZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGF9KTtcclxuICAgICAgICByZXR1cm4gcG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkgJiYgaXNJblBvbHlnb24ocG9zLCBmaWx0ZXIudmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMQVlFUl9UWVBFUy5hcmM6XHJcbiAgICBjYXNlIExBWUVSX1RZUEVTLmxpbmU6XHJcbiAgICAgIHJldHVybiBkYXRhID0+IHtcclxuICAgICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YX0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBwb3MuZXZlcnkoTnVtYmVyLmlzRmluaXRlKSAmJlxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBbcG9zWzBdLCBwb3NbMV1dLFxyXG4gICAgICAgICAgICBbcG9zWzNdLCBwb3NbNF1dXHJcbiAgICAgICAgICBdLmV2ZXJ5KHBvaW50ID0+IGlzSW5Qb2x5Z29uKHBvaW50LCBmaWx0ZXIudmFsdWUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gKCkgPT4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIGZpZWxkIGRhdGFzZXQgRmllbGRcclxuICogQHBhcmFtIGRhdGFJZCBEYXRhc2V0IGlkXHJcbiAqIEBwYXJhbSBmaWx0ZXIgRmlsdGVyIG9iamVjdFxyXG4gKiBAcGFyYW0gbGF5ZXJzIGxpc3Qgb2YgbGF5ZXJzIHRvIGZpbHRlciB1cG9uXHJcbiAqIEByZXR1cm4geyp9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyRnVuY3Rpb24oZmllbGQsIGRhdGFJZCwgZmlsdGVyLCBsYXllcnMpIHtcclxuICAvLyBmaWVsZCBjb3VsZCBiZSBudWxsXHJcbiAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IGRhdGEgPT4gKGZpZWxkID8gZGF0YVtmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxXSA6IG51bGwpO1xyXG5cclxuICBzd2l0Y2ggKGZpbHRlci50eXBlKSB7XHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5yYW5nZTpcclxuICAgICAgcmV0dXJuIGRhdGEgPT4gaXNJblJhbmdlKHZhbHVlQWNjZXNzb3IoZGF0YSksIGZpbHRlci52YWx1ZSk7XHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5tdWx0aVNlbGVjdDpcclxuICAgICAgcmV0dXJuIGRhdGEgPT4gZmlsdGVyLnZhbHVlLmluY2x1ZGVzKHZhbHVlQWNjZXNzb3IoZGF0YSkpO1xyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMuc2VsZWN0OlxyXG4gICAgICByZXR1cm4gZGF0YSA9PiB2YWx1ZUFjY2Vzc29yKGRhdGEpID09PSBmaWx0ZXIudmFsdWU7XHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy50aW1lUmFuZ2U6XHJcbiAgICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZ2V0KGZpZWxkLCBbJ2ZpbHRlclByb3BzJywgJ21hcHBlZFZhbHVlJ10pO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5LmlzQXJyYXkobWFwcGVkVmFsdWUpXHJcbiAgICAgICAgPyAoZGF0YSwgaW5kZXgpID0+IG1hcHBlZFZhbHVlW2luZGV4XVxyXG4gICAgICAgIDogZGF0YSA9PiB0aW1lVG9Vbml4TWlsbGkodmFsdWVBY2Nlc3NvcihkYXRhKSwgZmllbGQuZm9ybWF0KTtcclxuICAgICAgcmV0dXJuIChkYXRhLCBpbmRleCkgPT4gaXNJblJhbmdlKGFjY2Vzc29yKGRhdGEsIGluZGV4KSwgZmlsdGVyLnZhbHVlKTtcclxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnBvbHlnb246XHJcbiAgICAgIGlmICghbGF5ZXJzIHx8ICFsYXllcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxheWVyRmlsdGVyRnVuY3Rpb25zID0gZmlsdGVyLmxheWVySWRcclxuICAgICAgICAubWFwKGlkID0+IGxheWVycy5maW5kKGwgPT4gbC5pZCA9PT0gaWQpKVxyXG4gICAgICAgIC5maWx0ZXIobCA9PiBsICYmIGwuY29uZmlnLmRhdGFJZCA9PT0gZGF0YUlkKVxyXG4gICAgICAgIC5tYXAobGF5ZXIgPT4gZ2V0UG9seWdvbkZpbHRlckZ1bmN0b3IobGF5ZXIsIGZpbHRlcikpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGEgPT4gbGF5ZXJGaWx0ZXJGdW5jdGlvbnMuZXZlcnkoZmlsdGVyRnVuYyA9PiBmaWx0ZXJGdW5jKGRhdGEpKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiAoKSA9PiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZpbHRlckRhdGFJZChkYXRhSWQpIHtcclxuICByZXR1cm4gZ2V0RGVmYXVsdEZpbHRlcihkYXRhSWQpO1xyXG59XHJcblxyXG4vKipcclxuICogRmlsdGVyIGRhdGEgYmFzZWQgb24gYW4gYXJyYXkgb2YgZmlsdGVyc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpbHRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0LmNwdU9ubHkgb25seSBhbGxvdyBjcHUgZmlsdGVyaW5nXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHQuaWdub3JlRG9tYWluIGlnbm9yZSBmaWx0ZXIgZm9yIGRvbWFpbiBjYWxjdWxhdGlvblxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhc2V0XHJcbiAqIEByZXR1cm5zIHtBcnJheTxOdW1iZXI+fSBkYXRhc2V0LmZpbHRlcmVkSW5kZXhcclxuICogQHJldHVybnMge0FycmF5PE51bWJlcj59IGRhdGFzZXQuZmlsdGVyZWRJbmRleEZvckRvbWFpblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRhdGFzZXQoZGF0YXNldCwgZmlsdGVycywgbGF5ZXJzLCBvcHQgPSB7fSkge1xyXG4gIGNvbnN0IHthbGxEYXRhLCBpZDogZGF0YUlkLCBmaWx0ZXJSZWNvcmQ6IG9sZEZpbHRlclJlY29yZCwgZmllbGRzfSA9IGRhdGFzZXQ7XHJcblxyXG4gIC8vIGlmIHRoZXJlIGlzIG5vIGZpbHRlcnNcclxuICBjb25zdCBmaWx0ZXJSZWNvcmQgPSBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBmaWx0ZXJzLCBvcHQpO1xyXG5cclxuICBjb25zdCBuZXdEYXRhc2V0ID0gc2V0KFsnZmlsdGVyUmVjb3JkJ10sIGZpbHRlclJlY29yZCwgZGF0YXNldCk7XHJcblxyXG4gIGlmICghZmlsdGVycy5sZW5ndGgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm5ld0RhdGFzZXQsXHJcbiAgICAgIGdwdUZpbHRlcjogZ2V0R3B1RmlsdGVyUHJvcHMoZmlsdGVycywgZGF0YUlkLCBmaWVsZHMpLFxyXG4gICAgICBmaWx0ZXJlZEluZGV4OiBkYXRhc2V0LmFsbEluZGV4ZXMsXHJcbiAgICAgIGZpbHRlcmVkSW5kZXhGb3JEb21haW46IGRhdGFzZXQuYWxsSW5kZXhlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZWRGaWx0ZXJzID0gZGlmZkZpbHRlcnMoZmlsdGVyUmVjb3JkLCBvbGRGaWx0ZXJSZWNvcmQpO1xyXG5cclxuICAvLyBnZW5lcmF0ZSAyIHNldHMgb2YgZmlsdGVyIHJlc3VsdFxyXG4gIC8vIGZpbHRlcmVkSW5kZXggdXNlZCB0byBjYWxjdWxhdGUgbGF5ZXIgZGF0YVxyXG4gIC8vIGZpbHRlcmVkSW5kZXhGb3JEb21haW4gdXNlZCB0byBjYWxjdWxhdGUgbGF5ZXIgRG9tYWluXHJcbiAgY29uc3Qgc2hvdWxkQ2FsRG9tYWluID0gQm9vbGVhbihjaGFuZ2VkRmlsdGVycy5keW5hbWljRG9tYWluKTtcclxuICBjb25zdCBzaG91bGRDYWxJbmRleCA9IEJvb2xlYW4oY2hhbmdlZEZpbHRlcnMuY3B1KTtcclxuXHJcbiAgbGV0IGZpbHRlclJlc3VsdCA9IHt9O1xyXG4gIGlmIChzaG91bGRDYWxEb21haW4gfHwgc2hvdWxkQ2FsSW5kZXgpIHtcclxuICAgIGNvbnN0IGR5bmFtaWNEb21haW5GaWx0ZXJzID0gc2hvdWxkQ2FsRG9tYWluID8gZmlsdGVyUmVjb3JkLmR5bmFtaWNEb21haW4gOiBudWxsO1xyXG4gICAgY29uc3QgY3B1RmlsdGVycyA9IHNob3VsZENhbEluZGV4ID8gZmlsdGVyUmVjb3JkLmNwdSA6IG51bGw7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyRnVuY3MgPSBmaWx0ZXJzLnJlZHVjZSgoYWNjLCBmaWx0ZXIpID0+IHtcclxuICAgICAgY29uc3QgZmllbGRJbmRleCA9IGdldERhdGFzZXRGaWVsZEluZGV4Rm9yRmlsdGVyKGRhdGFzZXQuaWQsIGZpbHRlcik7XHJcbiAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRJbmRleCAhPT0gLTEgPyBmaWVsZHNbZmllbGRJbmRleF0gOiBudWxsO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgW2ZpbHRlci5pZF06IGdldEZpbHRlckZ1bmN0aW9uKGZpZWxkLCBkYXRhc2V0LmlkLCBmaWx0ZXIsIGxheWVycylcclxuICAgICAgfTtcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICBmaWx0ZXJSZXN1bHQgPSBmaWx0ZXJEYXRhQnlGaWx0ZXJUeXBlcyhcclxuICAgICAge2R5bmFtaWNEb21haW5GaWx0ZXJzLCBjcHVGaWx0ZXJzLCBmaWx0ZXJGdW5jc30sXHJcbiAgICAgIGFsbERhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4ubmV3RGF0YXNldCxcclxuICAgIC4uLmZpbHRlclJlc3VsdCxcclxuICAgIGdwdUZpbHRlcjogZ2V0R3B1RmlsdGVyUHJvcHMoZmlsdGVycywgZGF0YUlkLCBmaWVsZHMpXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmaWx0ZXJzXHJcbiAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gZmlsdGVycy5keW5hbWljRG9tYWluRmlsdGVyc1xyXG4gKiBAcGFyYW0ge0FycmF5fG51bGx9IGZpbHRlcnMuY3B1RmlsdGVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gZmlsdGVycy5maWx0ZXJGdW5jc1xyXG4gKiBAcmV0dXJucyB7e2ZpbHRlcmVkSW5kZXg6IEFycmF5LCBmaWx0ZXJlZEluZGV4Rm9yRG9tYWluOiBBcnJheX19IGZpbHRlcmVkSW5kZXggYW5kIGZpbHRlcmVkSW5kZXhGb3JEb21haW5cclxuICovXHJcbmZ1bmN0aW9uIGZpbHRlckRhdGFCeUZpbHRlclR5cGVzKHtkeW5hbWljRG9tYWluRmlsdGVycywgY3B1RmlsdGVycywgZmlsdGVyRnVuY3N9LCBhbGxEYXRhKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgLi4uKGR5bmFtaWNEb21haW5GaWx0ZXJzID8ge2ZpbHRlcmVkSW5kZXhGb3JEb21haW46IFtdfSA6IHt9KSxcclxuICAgIC4uLihjcHVGaWx0ZXJzID8ge2ZpbHRlcmVkSW5kZXg6IFtdfSA6IHt9KVxyXG4gIH07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZCA9IGFsbERhdGFbaV07XHJcblxyXG4gICAgY29uc3QgbWF0Y2hGb3JEb21haW4gPVxyXG4gICAgICBkeW5hbWljRG9tYWluRmlsdGVycyAmJiBkeW5hbWljRG9tYWluRmlsdGVycy5ldmVyeShmaWx0ZXIgPT4gZmlsdGVyRnVuY3NbZmlsdGVyLmlkXShkLCBpKSk7XHJcblxyXG4gICAgaWYgKG1hdGNoRm9yRG9tYWluKSB7XHJcbiAgICAgIHJlc3VsdC5maWx0ZXJlZEluZGV4Rm9yRG9tYWluLnB1c2goaSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWF0Y2hGb3JSZW5kZXIgPSBjcHVGaWx0ZXJzICYmIGNwdUZpbHRlcnMuZXZlcnkoZmlsdGVyID0+IGZpbHRlckZ1bmNzW2ZpbHRlci5pZF0oZCwgaSkpO1xyXG5cclxuICAgIGlmIChtYXRjaEZvclJlbmRlcikge1xyXG4gICAgICByZXN1bHQuZmlsdGVyZWRJbmRleC5wdXNoKGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhIHJlY29yZCBvZiBmaWx0ZXJzIGJhc2VkIG9uIGRvbWFpbiB0eXBlIGFuZCBncHUgLyBjcHVcclxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFJZFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpbHRlcnNcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdC5jcHVPbmx5IG9ubHkgYWxsb3cgY3B1IGZpbHRlcmluZ1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0Lmlnbm9yZURvbWFpbiBpZ25vcmUgZmlsdGVyIGZvciBkb21haW4gY2FsY3VsYXRpb25cclxuICogQHJldHVybnMge3tkeW5hbWljRG9tYWluOiBBcnJheSwgZml4ZWREb21haW46IEFycmF5LCBjcHU6IEFycmF5LCBncHU6IEFycmF5fX0gZmlsdGVyUmVjb3JkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyUmVjb3JkKGRhdGFJZCwgZmlsdGVycywgb3B0ID0ge30pIHtcclxuICBjb25zdCBmaWx0ZXJSZWNvcmQgPSB7XHJcbiAgICBkeW5hbWljRG9tYWluOiBbXSxcclxuICAgIGZpeGVkRG9tYWluOiBbXSxcclxuICAgIGNwdTogW10sXHJcbiAgICBncHU6IFtdXHJcbiAgfTtcclxuXHJcbiAgZmlsdGVycy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgaWYgKGlzVmFsaWRGaWx0ZXJWYWx1ZShmLnR5cGUsIGYudmFsdWUpICYmIHRvQXJyYXkoZi5kYXRhSWQpLmluY2x1ZGVzKGRhdGFJZCkpIHtcclxuICAgICAgKGYuZml4ZWREb21haW4gfHwgb3B0Lmlnbm9yZURvbWFpblxyXG4gICAgICAgID8gZmlsdGVyUmVjb3JkLmZpeGVkRG9tYWluXHJcbiAgICAgICAgOiBmaWx0ZXJSZWNvcmQuZHluYW1pY0RvbWFpblxyXG4gICAgICApLnB1c2goZik7XHJcblxyXG4gICAgICAoZi5ncHUgJiYgIW9wdC5jcHVPbmx5ID8gZmlsdGVyUmVjb3JkLmdwdSA6IGZpbHRlclJlY29yZC5jcHUpLnB1c2goZik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmaWx0ZXJSZWNvcmQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlIGZpbHRlciByZWNvcmRzIHRvIGdldCB3aGF0IGhhcyBjaGFuZ2VkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmaWx0ZXJSZWNvcmRcclxuICogQHBhcmFtIHtPYmplY3R9IG9sZEZpbHRlclJlY29yZFxyXG4gKiBAcmV0dXJucyB7e2R5bmFtaWNEb21haW46IE9iamVjdCwgZml4ZWREb21haW46IE9iamVjdCwgY3B1OiBPYmplY3QsIGdwdTogT2JqZWN0fX0gY2hhbmdlZCBmaWx0ZXJzIGJhc2VkIG9uIHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmRmlsdGVycyhmaWx0ZXJSZWNvcmQsIG9sZEZpbHRlclJlY29yZCA9IHt9KSB7XHJcbiAgbGV0IGZpbHRlckNoYW5nZWQgPSB7fTtcclxuXHJcbiAgT2JqZWN0LmVudHJpZXMoZmlsdGVyUmVjb3JkKS5mb3JFYWNoKChbcmVjb3JkLCBpdGVtc10pID0+IHtcclxuICAgIGl0ZW1zLmZvckVhY2goZmlsdGVyID0+IHtcclxuICAgICAgY29uc3Qgb2xkRmlsdGVyID0gKG9sZEZpbHRlclJlY29yZFtyZWNvcmRdIHx8IFtdKS5maW5kKGYgPT4gZi5pZCA9PT0gZmlsdGVyLmlkKTtcclxuXHJcbiAgICAgIGlmICghb2xkRmlsdGVyKSB7XHJcbiAgICAgICAgLy8gYWRkZWRcclxuICAgICAgICBmaWx0ZXJDaGFuZ2VkID0gc2V0KFtyZWNvcmQsIGZpbHRlci5pZF0sICdhZGRlZCcsIGZpbHRlckNoYW5nZWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNoZWNrICB3aGF0IGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgWyduYW1lJywgJ3ZhbHVlJywgJ2RhdGFJZCddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyW3Byb3BdICE9PSBvbGRGaWx0ZXJbcHJvcF0pIHtcclxuICAgICAgICAgICAgZmlsdGVyQ2hhbmdlZCA9IHNldChbcmVjb3JkLCBmaWx0ZXIuaWRdLCBgJHtwcm9wfV9jaGFuZ2VkYCwgZmlsdGVyQ2hhbmdlZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIChvbGRGaWx0ZXJSZWNvcmRbcmVjb3JkXSB8fCBbXSkuZm9yRWFjaChvbGRGaWx0ZXIgPT4ge1xyXG4gICAgICAvLyBkZWxldGVkXHJcbiAgICAgIGlmICghaXRlbXMuZmluZChmID0+IGYuaWQgPT09IG9sZEZpbHRlci5pZCkpIHtcclxuICAgICAgICBmaWx0ZXJDaGFuZ2VkID0gc2V0KFtyZWNvcmQsIG9sZEZpbHRlci5pZF0sICdkZWxldGVkJywgZmlsdGVyQ2hhbmdlZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZmlsdGVyQ2hhbmdlZFtyZWNvcmRdKSB7XHJcbiAgICAgIGZpbHRlckNoYW5nZWRbcmVjb3JkXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmaWx0ZXJDaGFuZ2VkO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsIGJ5IHBhcnNpbmcgZmlsdGVycyBmcm9tIFVSTFxyXG4gKiBDaGVjayBpZiB2YWx1ZSBvZiBmaWx0ZXIgd2l0aGluIGZpbHRlciBkb21haW4sIGlmIG5vdCBhZGp1c3QgaXQgdG8gbWF0Y2hcclxuICogZmlsdGVyIGRvbWFpblxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz4gfCBzdHJpbmcgfCBOdW1iZXIgfCBBcnJheTxOdW1iZXI+fSB2YWx1ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBmaWx0ZXIuZG9tYWluXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWx0ZXIudHlwZVxyXG4gKiBAcmV0dXJucyB7Kn0gLSBhZGp1c3RlZCB2YWx1ZSB0byBtYXRjaCBmaWx0ZXIgb3IgbnVsbCB0byByZW1vdmUgZmlsdGVyXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RWYWx1ZVRvRmlsdGVyRG9tYWluKHZhbHVlLCB7ZG9tYWluLCB0eXBlfSkge1xyXG4gIGlmICghZG9tYWluIHx8ICF0eXBlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnJhbmdlOlxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMudGltZVJhbmdlOlxyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCAhPT0gMikge1xyXG4gICAgICAgIHJldHVybiBkb21haW4ubWFwKGQgPT4gZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2YWx1ZS5tYXAoKGQsIGkpID0+IChub3ROdWxsb3JVbmRlZmluZWQoZCkgJiYgaXNJblJhbmdlKGQsIGRvbWFpbikgPyBkIDogZG9tYWluW2ldKSk7XHJcblxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3Q6XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZmlsdGVyZWRWYWx1ZSA9IHZhbHVlLmZpbHRlcihkID0+IGRvbWFpbi5pbmNsdWRlcyhkKSk7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFZhbHVlLmxlbmd0aCA/IGZpbHRlcmVkVmFsdWUgOiBbXTtcclxuXHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5zZWxlY3Q6XHJcbiAgICAgIHJldHVybiBkb21haW4uaW5jbHVkZXModmFsdWUpID8gdmFsdWUgOiB0cnVlO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4vKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgbnVtZXJpYyBkb21haW4gYW5kIHN1aXRhYmxlIHN0ZXBcclxuICpcclxuICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB2YWx1ZUFjY2Vzc29yXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IGRvbWFpbiBhbmQgc3RlcFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWVyaWNGaWVsZERvbWFpbihkYXRhLCB2YWx1ZUFjY2Vzc29yKSB7XHJcbiAgbGV0IGRvbWFpbiA9IFswLCAxXTtcclxuICBsZXQgc3RlcCA9IDAuMTtcclxuXHJcbiAgY29uc3QgbWFwcGVkVmFsdWUgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YS5tYXAodmFsdWVBY2Nlc3NvcikgOiBbXTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICBkb21haW4gPSBTY2FsZVV0aWxzLmdldExpbmVhckRvbWFpbihtYXBwZWRWYWx1ZSk7XHJcbiAgICBjb25zdCBkaWZmID0gZG9tYWluWzFdIC0gZG9tYWluWzBdO1xyXG5cclxuICAgIC8vIGluIGNhc2UgZXF1YWwgZG9tYWluLCBbOTYsIDk2XSwgd2hpY2ggd2lsbCBicmVhayBxdWFudGl6ZSBzY2FsZVxyXG4gICAgaWYgKCFkaWZmKSB7XHJcbiAgICAgIGRvbWFpblsxXSA9IGRvbWFpblswXSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RlcCA9IGdldE51bWVyaWNTdGVwU2l6ZShkaWZmKSB8fCBzdGVwO1xyXG4gICAgZG9tYWluWzBdID0gZm9ybWF0TnVtYmVyQnlTdGVwKGRvbWFpblswXSwgc3RlcCwgJ2Zsb29yJyk7XHJcbiAgICBkb21haW5bMV0gPSBmb3JtYXROdW1iZXJCeVN0ZXAoZG9tYWluWzFdLCBzdGVwLCAnY2VpbCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge2hpc3RvZ3JhbSwgZW5sYXJnZWRIaXN0b2dyYW19ID0gZ2V0SGlzdG9ncmFtKGRvbWFpbiwgbWFwcGVkVmFsdWUpO1xyXG5cclxuICByZXR1cm4ge2RvbWFpbiwgc3RlcCwgaGlzdG9ncmFtLCBlbmxhcmdlZEhpc3RvZ3JhbX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1lcmljU3RlcFNpemUoZGlmZikge1xyXG4gIGRpZmYgPSBNYXRoLmFicyhkaWZmKTtcclxuXHJcbiAgaWYgKGRpZmYgPiAxMDApIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH0gZWxzZSBpZiAoZGlmZiA+IDMpIHtcclxuICAgIHJldHVybiAwLjAxO1xyXG4gIH0gZWxzZSBpZiAoZGlmZiA+IDEpIHtcclxuICAgIHJldHVybiAwLjAwMTtcclxuICB9IGVsc2UgaWYgKGRpZmYgPD0gMSkge1xyXG4gICAgLy8gVHJ5IHRvIGdldCBhdCBsZWFzdCAxMDAwIHN0ZXBzIC0gYW5kIGtlZXAgdGhlIHN0ZXAgc2l6ZSBiZWxvdyB0aGF0IG9mXHJcbiAgICAvLyB0aGUgKGRpZmYgPiAxKSBjYXNlLlxyXG4gICAgY29uc3QgeCA9IGRpZmYgLyAxMDAwO1xyXG4gICAgLy8gRmluZCB0aGUgZXhwb25lbnQgYW5kIHRydW5jYXRlIHRvIDEwIHRvIHRoZSBwb3dlciBvZiB0aGF0IGV4cG9uZW50XHJcblxyXG4gICAgY29uc3QgZXhwb25lbnRpYWxGb3JtID0geC50b0V4cG9uZW50aWFsKCk7XHJcbiAgICBjb25zdCBleHBvbmVudCA9IHBhcnNlRmxvYXQoZXhwb25lbnRpYWxGb3JtLnNwbGl0KCdlJylbMV0pO1xyXG5cclxuICAgIC8vIEdldHRpbmcgcmVhZHkgZm9yIG5vZGUgMTJcclxuICAgIC8vIHRoaXMgaXMgd2h5IHdlIG5lZWQgZGVjaW1hbC5qc1xyXG4gICAgLy8gTWF0aC5wb3coMTAsIC01KSA9IDAuMDAwMDA5OTk5OTk5OTk5OTk5OTk5XHJcbiAgICAvLyAgdGhlIGFib3ZlIHJlc3VsdCBzaG93cyBpbiBicm93c2VyIGFuZCBub2RlIDEwXHJcbiAgICAvLyAgbm9kZSAxMiBiZWhhdmVzIGNvcnJlY3RseVxyXG5cclxuICAgIHJldHVybiBuZXcgRGVjaW1hbCgxMCkucG93KGV4cG9uZW50KS50b051bWJlcigpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSB0aW1lc3RhbXAgZG9tYWluIGFuZCBzdWl0YWJsZSBzdGVwXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBkYXRhXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlQWNjZXNzb3JcclxuICogQHJldHVybnMge3tcclxuICogIGRvbWFpbjogQXJyYXk8TnVtYmVyPixcclxuICogIHN0ZXA6IE51bWJlcixcclxuICogIG1hcHBlZFZhbHVlOiBBcnJheTxOdW1iZXI+LFxyXG4gKiAgaGlzdG9ncmFtOiBBcnJheTxPYmplY3Q+LFxyXG4gKiAgZW5sYXJnZWRIaXN0b2dyYW06IEFycmF5PE9iamVjdD5cclxuICogfX0gdGltZXN0YW1wIGZpZWxkIGRvbWFpblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVzdGFtcEZpZWxkRG9tYWluKGRhdGEsIHZhbHVlQWNjZXNzb3IpIHtcclxuICAvLyB0byBhdm9pZCBjb252ZXJ0aW5nIHN0cmluZyBmb3JtYXQgdGltZSB0byBlcG9jaFxyXG4gIC8vIGV2ZXJ5IHRpbWUgd2UgY29tcGFyZSB3ZSBzdG9yZSBhIHZhbHVlIG1hcHBlZCB0byBpbnQgaW4gZmlsdGVyIGRvbWFpblxyXG5cclxuICBjb25zdCBtYXBwZWRWYWx1ZSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhLm1hcCh2YWx1ZUFjY2Vzc29yKSA6IFtdO1xyXG4gIGNvbnN0IGRvbWFpbiA9IFNjYWxlVXRpbHMuZ2V0TGluZWFyRG9tYWluKG1hcHBlZFZhbHVlKTtcclxuICBsZXQgc3RlcCA9IDAuMDE7XHJcblxyXG4gIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XHJcbiAgY29uc3QgZW50cnkgPSBUaW1lc3RhbXBTdGVwTWFwLmZpbmQoZiA9PiBmLm1heCA+PSBkaWZmKTtcclxuICBpZiAoZW50cnkpIHtcclxuICAgIHN0ZXAgPSBlbnRyeS5zdGVwO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge2hpc3RvZ3JhbSwgZW5sYXJnZWRIaXN0b2dyYW19ID0gZ2V0SGlzdG9ncmFtKGRvbWFpbiwgbWFwcGVkVmFsdWUpO1xyXG5cclxuICByZXR1cm4ge2RvbWFpbiwgc3RlcCwgbWFwcGVkVmFsdWUsIGhpc3RvZ3JhbSwgZW5sYXJnZWRIaXN0b2dyYW19O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBkb21haW5cclxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBtYXBwZWRWYWx1ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYmluc1xyXG4gKiBAcmV0dXJucyB7QXJyYXk8e2NvdW50OiBOdW1iZXIsIHgwOiBOdW1iZXIsIHgxOiBudW1iZXJ9Pn0gaGlzdG9ncmFtXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGlzdG9ncmFtQ29uc3RydWN0KGRvbWFpbiwgbWFwcGVkVmFsdWUsIGJpbnMpIHtcclxuICByZXR1cm4gZDNIaXN0b2dyYW0oKVxyXG4gICAgLnRocmVzaG9sZHModGlja3MoZG9tYWluWzBdLCBkb21haW5bMV0sIGJpbnMpKVxyXG4gICAgLmRvbWFpbihkb21haW4pKG1hcHBlZFZhbHVlKVxyXG4gICAgLm1hcChiaW4gPT4gKHtcclxuICAgICAgY291bnQ6IGJpbi5sZW5ndGgsXHJcbiAgICAgIHgwOiBiaW4ueDAsXHJcbiAgICAgIHgxOiBiaW4ueDFcclxuICAgIH0pKTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlIGhpc3RvZ3JhbSBmcm9tIGRvbWFpbiBhbmQgYXJyYXkgb2YgdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gZG9tYWluXHJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbWFwcGVkVmFsdWVcclxuICogQHJldHVybnMge3toaXN0b2dyYW06IEFycmF5PE9iamVjdD4sIGVubGFyZ2VkSGlzdG9ncmFtOiBBcnJheTxPYmplY3Q+fX0gMiBzZXRzIG9mIGhpc3RvZ3JhbVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhpc3RvZ3JhbShkb21haW4sIG1hcHBlZFZhbHVlKSB7XHJcbiAgY29uc3QgaGlzdG9ncmFtID0gaGlzdG9ncmFtQ29uc3RydWN0KGRvbWFpbiwgbWFwcGVkVmFsdWUsIGhpc3RvZ3JhbUJpbnMpO1xyXG4gIGNvbnN0IGVubGFyZ2VkSGlzdG9ncmFtID0gaGlzdG9ncmFtQ29uc3RydWN0KGRvbWFpbiwgbWFwcGVkVmFsdWUsIGVubGFyZ2VkSGlzdG9ncmFtQmlucyk7XHJcblxyXG4gIHJldHVybiB7aGlzdG9ncmFtLCBlbmxhcmdlZEhpc3RvZ3JhbX07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiByb3VuZCBudW1iZXIgYmFzZWQgb24gc3RlcFxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSByb3VuZGVkIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlckJ5U3RlcCh2YWwsIHN0ZXAsIGJvdW5kKSB7XHJcbiAgaWYgKGJvdW5kID09PSAnZmxvb3InKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwgKiAoMSAvIHN0ZXApKSAvICgxIC8gc3RlcCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5jZWlsKHZhbCAqICgxIC8gc3RlcCkpIC8gKDEgLyBzdGVwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SYW5nZSh2YWwsIGRvbWFpbikge1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShkb21haW4pKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsID49IGRvbWFpblswXSAmJiB2YWwgPD0gZG9tYWluWzFdO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcG9pbnQgaXMgd2l0aGluIHRoZSBwcm92aWRlZCBwb2x5Z29uXHJcbiAqXHJcbiAqIEBwYXJhbSBwb2ludCBhcyBpbnB1dCBzZWFyY2ggW2xhdCwgbG5nXVxyXG4gKiBAcGFyYW0gcG9seWdvbiBQb2ludHMgbXVzdCBiZSB3aXRoaW4gdGhlc2UgKE11bHRpKVBvbHlnb24ocylcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luUG9seWdvbihwb2ludCwgcG9seWdvbikge1xyXG4gIHJldHVybiBib29sZWFuV2l0aGluKHR1cmZQb2ludChwb2ludCksIHBvbHlnb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVdpZGdldFRpdGxlRm9ybWF0dGVyKGRvbWFpbikge1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShkb21haW4pKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XHJcbiAgcmV0dXJuIGRpZmYgPiBkdXJhdGlvblllYXJcclxuICAgID8gJ01NL0REL1lZJ1xyXG4gICAgOiBkaWZmID4gZHVyYXRpb25EYXlcclxuICAgID8gJ01NL0REL1lZIGhoOm1tYSdcclxuICAgIDogJ01NL0REL1lZIGhoOm1tOnNzYSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tYWluKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaWZmID0gZG9tYWluWzFdIC0gZG9tYWluWzBdO1xyXG4gIHJldHVybiBkaWZmID4gZHVyYXRpb25ZZWFyXHJcbiAgICA/ICdNTS9ERC9ZWSdcclxuICAgIDogZGlmZiA+IGR1cmF0aW9uV2Vla1xyXG4gICAgPyAnTU0vREQnXHJcbiAgICA6IGRpZmYgPiBkdXJhdGlvbkRheVxyXG4gICAgPyAnTU0vREQgaGhhJ1xyXG4gICAgOiBkaWZmID4gZHVyYXRpb25Ib3VyXHJcbiAgICA/ICdoaDptbWEnXHJcbiAgICA6ICdoaDptbTpzc2EnO1xyXG59XHJcblxyXG4vKipcclxuICogU2FuaXR5IGNoZWNrIG9uIGZpbHRlcnMgdG8gcHJlcGFyZSBmb3Igc2F2ZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIGZpbHRlciB0eXBlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBmaWx0ZXIgdmFsdWVcclxuICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgZmlsdGVyIGlzIHZhbHVlXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRmlsdGVyVmFsdWUodHlwZSwgdmFsdWUpIHtcclxuICBpZiAoIXR5cGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5zZWxlY3Q6XHJcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2U7XHJcblxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMucmFuZ2U6XHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy50aW1lUmFuZ2U6XHJcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2ID0+IHYgIT09IG51bGwgJiYgIWlzTmFOKHYpKTtcclxuXHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5tdWx0aVNlbGVjdDpcclxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEJvb2xlYW4odmFsdWUubGVuZ3RoKTtcclxuXHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5pbnB1dDpcclxuICAgICAgcmV0dXJuIEJvb2xlYW4odmFsdWUubGVuZ3RoKTtcclxuXHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5wb2x5Z29uOlxyXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldCh2YWx1ZSwgWydnZW9tZXRyeScsICdjb29yZGluYXRlcyddKTtcclxuICAgICAgcmV0dXJuIEJvb2xlYW4odmFsdWUgJiYgdmFsdWUuaWQgJiYgY29vcmRpbmF0ZXMpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlclBsb3QoZmlsdGVyLCBhbGxEYXRhKSB7XHJcbiAgaWYgKGZpbHRlci5wbG90VHlwZSA9PT0gUExPVF9UWVBFUy5oaXN0b2dyYW0gfHwgIWZpbHRlci55QXhpcykge1xyXG4gICAgLy8gaGlzdG9ncmFtIHNob3VsZCBiZSBjYWxjdWxhdGVkIHdoZW4gY3JlYXRlIGZpbHRlclxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge21hcHBlZFZhbHVlfSA9IGZpbHRlcjtcclxuICBjb25zdCB7eUF4aXN9ID0gZmlsdGVyO1xyXG5cclxuICAvLyByZXR1cm4gbGluZUNoYXJ0XHJcbiAgY29uc3Qgc2VyaWVzID0gYWxsRGF0YVxyXG4gICAgLm1hcCgoZCwgaSkgPT4gKHtcclxuICAgICAgeDogbWFwcGVkVmFsdWVbaV0sXHJcbiAgICAgIHk6IGRbeUF4aXMudGFibGVGaWVsZEluZGV4IC0gMV1cclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcigoe3gsIHl9KSA9PiBOdW1iZXIuaXNGaW5pdGUoeCkgJiYgTnVtYmVyLmlzRmluaXRlKHkpKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGFzY2VuZGluZyhhLngsIGIueCkpO1xyXG5cclxuICBjb25zdCB5RG9tYWluID0gZXh0ZW50KHNlcmllcywgZCA9PiBkLnkpO1xyXG4gIGNvbnN0IHhEb21haW4gPSBbc2VyaWVzWzBdLngsIHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV0ueF07XHJcblxyXG4gIHJldHVybiB7bGluZUNoYXJ0OiB7c2VyaWVzLCB5RG9tYWluLCB4RG9tYWlufSwgeUF4aXN9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZpbHRlclBsb3RUeXBlKGZpbHRlcikge1xyXG4gIGNvbnN0IGZpbHRlclBsb3RUeXBlcyA9IFN1cHBvcnRlZFBsb3RUeXBlW2ZpbHRlci50eXBlXTtcclxuICBpZiAoIWZpbHRlclBsb3RUeXBlcykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAoIWZpbHRlci55QXhpcykge1xyXG4gICAgcmV0dXJuIGZpbHRlclBsb3RUeXBlcy5kZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbHRlclBsb3RUeXBlc1tmaWx0ZXIueUF4aXMudHlwZV0gfHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBkYXRhc2V0SWRzIGxpc3Qgb2YgZGF0YXNldCBpZHMgdG8gYmUgZmlsdGVyZWRcclxuICogQHBhcmFtIGRhdGFzZXRzIGFsbCBkYXRhc2V0c1xyXG4gKiBAcGFyYW0gZmlsdGVycyBhbGwgZmlsdGVycyB0byBiZSBhcHBsaWVkIHRvIGRhdGFzZXRzXHJcbiAqIEByZXR1cm4ge3tbZGF0YXNldElkOiBzdHJpbmddOiBPYmplY3R9fSBkYXRhc2V0cyAtIG5ldyB1cGRhdGVkIGRhdGFzZXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhkYXRhc2V0SWRzLCBkYXRhc2V0cywgZmlsdGVycywgbGF5ZXJzKSB7XHJcbiAgY29uc3QgZGF0YUlkcyA9IHRvQXJyYXkoZGF0YXNldElkcyk7XHJcbiAgcmV0dXJuIGRhdGFJZHMucmVkdWNlKChhY2MsIGRhdGFJZCkgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXJzVG9GaWx0ZXIgPSAobGF5ZXJzIHx8IFtdKS5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgPT09IGRhdGFJZCk7XHJcbiAgICBjb25zdCBhcHBsaWVkRmlsdGVycyA9IGZpbHRlcnMuZmlsdGVyKGQgPT4gc2hvdWxkQXBwbHlGaWx0ZXIoZCwgZGF0YUlkKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uYWNjLFxyXG4gICAgICBbZGF0YUlkXTogZmlsdGVyRGF0YXNldChkYXRhc2V0c1tkYXRhSWRdLCBhcHBsaWVkRmlsdGVycywgbGF5ZXJzVG9GaWx0ZXIpXHJcbiAgICB9O1xyXG4gIH0sIGRhdGFzZXRzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgYSBuZXcgZmllbGQgbmFtZSB2YWx1ZSB0byBmaWVsdGVyIGFuZCB1cGRhdGUgYm90aCBmaWx0ZXIgYW5kIGRhdGFzZXRcclxuICogQHBhcmFtIHtPYmplY3R9IGZpbHRlciAtIHRvIGJlIGFwcGxpZWQgdGhlIG5ldyBmaWVsZCBuYW1lIG9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0IC0gZGF0YXNldCB0aGUgZmllbGQgYmVsb25ncyB0b1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gZmllbGQubmFtZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZmlsdGVyRGF0YXNldEluZGV4IC0gZmllbGQubmFtZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZmlsdGVycyAtIGN1cnJlbnRcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IHtmaWx0ZXIsIGRhdGFzZXRzfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RmlsdGVyRmllbGROYW1lKFxyXG4gIGZpbHRlcixcclxuICBkYXRhc2V0LFxyXG4gIGZpZWxkTmFtZSxcclxuICBmaWx0ZXJEYXRhc2V0SW5kZXggPSAwLFxyXG4gIHttZXJnZURvbWFpbiA9IGZhbHNlfSA9IHt9XHJcbikge1xyXG4gIC8vIHVzaW5nIGZpbHRlckRhdGFzZXRJbmRleCB3ZSBjYW4gZmlsdGVyIG9ubHkgdGhlIHNwZWNpZmllZCBkYXRhc2V0XHJcbiAgY29uc3Qge2ZpZWxkcywgYWxsRGF0YX0gPSBkYXRhc2V0O1xyXG5cclxuICBjb25zdCBmaWVsZEluZGV4ID0gZmllbGRzLmZpbmRJbmRleChmID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcclxuICAvLyBpZiBubyBmaWVsZCB3aXRoIHNhbWUgbmFtZSBpcyBmb3VuZCwgbW92ZSB0byB0aGUgbmV4dCBkYXRhc2V0c1xyXG4gIGlmIChmaWVsZEluZGV4ID09PSAtMSkge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBmaWVsZEluZGV4IG5vdCBmb3VuZC4gRGF0YXNldCBtdXN0IGNvbnRhaW4gYSBwcm9wZXJ0eSB3aXRoIG5hbWU6ICR7ZmllbGROYW1lfWApO1xyXG4gICAgcmV0dXJuIHtmaWx0ZXI6IG51bGwsIGRhdGFzZXR9O1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogdmFsaWRhdGUgZmllbGQgdHlwZVxyXG4gIGNvbnN0IGZpZWxkID0gZmllbGRzW2ZpZWxkSW5kZXhdO1xyXG4gIGNvbnN0IGZpbHRlclByb3BzID0gZmllbGQuaGFzT3duUHJvcGVydHkoJ2ZpbHRlclByb3BzJylcclxuICAgID8gZmllbGQuZmlsdGVyUHJvcHNcclxuICAgIDogZ2V0RmlsdGVyUHJvcHMoYWxsRGF0YSwgZmllbGQpO1xyXG5cclxuICBjb25zdCBuZXdGaWx0ZXIgPSB7XHJcbiAgICAuLi4obWVyZ2VEb21haW4gPyBtZXJnZUZpbHRlckRvbWFpblN0ZXAoZmlsdGVyLCBmaWx0ZXJQcm9wcykgOiB7Li4uZmlsdGVyLCAuLi5maWx0ZXJQcm9wc30pLFxyXG4gICAgbmFtZTogT2JqZWN0LmFzc2lnbihbXS5jb25jYXQoZmlsdGVyLm5hbWUpLCB7W2ZpbHRlckRhdGFzZXRJbmRleF06IGZpZWxkLm5hbWV9KSxcclxuICAgIGZpZWxkSWR4OiBPYmplY3QuYXNzaWduKFtdLmNvbmNhdChmaWx0ZXIuZmllbGRJZHgpLCB7XHJcbiAgICAgIFtmaWx0ZXJEYXRhc2V0SW5kZXhdOiBmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxXHJcbiAgICB9KSxcclxuICAgIC8vIFRPRE8sIHNpbmNlIHdlIGFsbG93IHRvIGFkZCBtdWx0aXBsZSBmaWVsZHMgdG8gYSBmaWx0ZXIgd2UgY2FuIG5vIGxvbmdlciBmcmVlemUgdGhlIGZpbHRlclxyXG4gICAgZnJlZXplOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmllbGRXaXRoRmlsdGVyUHJvcHMgPSB7XHJcbiAgICAuLi5maWVsZCxcclxuICAgIGZpbHRlclByb3BzXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV3RmllbGRzID0gT2JqZWN0LmFzc2lnbihbXS5jb25jYXQoZmllbGRzKSwge1tmaWVsZEluZGV4XTogZmllbGRXaXRoRmlsdGVyUHJvcHN9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZpbHRlcjogbmV3RmlsdGVyLFxyXG4gICAgZGF0YXNldDoge1xyXG4gICAgICAuLi5kYXRhc2V0LFxyXG4gICAgICBmaWVsZHM6IG5ld0ZpZWxkc1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXJnZSBvbmUgZmlsdGVyIHdpdGggb3RoZXIgZmlsdGVyIHByb3AgZG9tYWluXHJcbiAqIEBwYXJhbSBmaWx0ZXJcclxuICogQHBhcmFtIGZpbHRlclByb3BzXHJcbiAqIEBwYXJhbSBmaWVsZEluZGV4XHJcbiAqIEBwYXJhbSBkYXRhc2V0SW5kZXhcclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRmlsdGVyRG9tYWluU3RlcChmaWx0ZXIsIGZpbHRlclByb3BzKSB7XHJcbiAgaWYgKCFmaWx0ZXIpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFmaWx0ZXJQcm9wcykge1xyXG4gICAgcmV0dXJuIGZpbHRlcjtcclxuICB9XHJcblxyXG4gIGlmICgoZmlsdGVyLmZpZWxkVHlwZSAmJiBmaWx0ZXIuZmllbGRUeXBlICE9PSBmaWx0ZXJQcm9wcy5maWVsZFR5cGUpIHx8ICFmaWx0ZXJQcm9wcy5kb21haW4pIHtcclxuICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21iaW5lZERvbWFpbiA9ICFmaWx0ZXIuZG9tYWluXHJcbiAgICA/IGZpbHRlclByb3BzLmRvbWFpblxyXG4gICAgOiBbLi4uKGZpbHRlci5kb21haW4gfHwgW10pLCAuLi4oZmlsdGVyUHJvcHMuZG9tYWluIHx8IFtdKV0uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG5cclxuICBjb25zdCBuZXdGaWx0ZXIgPSB7XHJcbiAgICAuLi5maWx0ZXIsXHJcbiAgICAuLi5maWx0ZXJQcm9wcyxcclxuICAgIGRvbWFpbjogW2NvbWJpbmVkRG9tYWluWzBdLCBjb21iaW5lZERvbWFpbltjb21iaW5lZERvbWFpbi5sZW5ndGggLSAxXV1cclxuICB9O1xyXG5cclxuICBzd2l0Y2ggKGZpbHRlclByb3BzLmZpZWxkVHlwZSkge1xyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuc3RyaW5nOlxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuZGF0ZTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5uZXdGaWx0ZXIsXHJcbiAgICAgICAgZG9tYWluOiB1bmlxdWUoY29tYmluZWREb21haW4pLnNvcnQoKVxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcclxuICAgICAgY29uc3Qgc3RlcCA9IGZpbHRlci5zdGVwIDwgZmlsdGVyUHJvcHMuc3RlcCA/IGZpbHRlci5zdGVwIDogZmlsdGVyUHJvcHMuc3RlcDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxyXG4gICAgICAgIHN0ZXBcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnJlYWw6XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyOlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG5ld0ZpbHRlcjtcclxuICB9XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXHJcblxyXG5leHBvcnQgY29uc3QgZmVhdHVyZVRvRmlsdGVyVmFsdWUgPSAoZmVhdHVyZSwgZmlsdGVySWQsIHByb3BlcnRpZXMgPSB7fSkgPT4gKHtcclxuICAuLi5mZWF0dXJlLFxyXG4gIGlkOiBmZWF0dXJlLmlkLFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIC4uLmZlYXR1cmUucHJvcGVydGllcyxcclxuICAgIC4uLnByb3BlcnRpZXMsXHJcbiAgICBmaWx0ZXJJZFxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVySWRJbkZlYXR1cmUgPSBmID0+IGdldChmLCBbJ3Byb3BlcnRpZXMnLCAnZmlsdGVySWQnXSk7XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIHBvbHlnb24gZmlsdGVyXHJcbiAqIEBwYXJhbSBsYXllcnMgYXJyYXkgb2YgbGF5ZXJzXHJcbiAqIEBwYXJhbSBmZWF0dXJlIHBvbHlnb24gdG8gdXNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gZmlsdGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQb2x5Z29uRmlsdGVyKGxheWVycywgZmVhdHVyZSkge1xyXG4gIGNvbnN0IHtkYXRhSWQsIGxheWVySWQsIG5hbWV9ID0gbGF5ZXJzLnJlZHVjZShcclxuICAgIChhY2MsIGxheWVyKSA9PiAoe1xyXG4gICAgICAuLi5hY2MsXHJcbiAgICAgIGRhdGFJZDogWy4uLmFjYy5kYXRhSWQsIGxheWVyLmNvbmZpZy5kYXRhSWRdLFxyXG4gICAgICBsYXllcklkOiBbLi4uYWNjLmxheWVySWQsIGxheWVyLmlkXSxcclxuICAgICAgbmFtZTogWy4uLmFjYy5uYW1lLCBsYXllci5jb25maWcubGFiZWxdXHJcbiAgICB9KSxcclxuICAgIHtcclxuICAgICAgZGF0YUlkOiBbXSxcclxuICAgICAgbGF5ZXJJZDogW10sXHJcbiAgICAgIG5hbWU6IFtdXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyID0gZ2V0RGVmYXVsdEZpbHRlcihkYXRhSWQpO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5maWx0ZXIsXHJcbiAgICBmaXhlZERvbWFpbjogdHJ1ZSxcclxuICAgIHR5cGU6IEZJTFRFUl9UWVBFUy5wb2x5Z29uLFxyXG4gICAgbmFtZSxcclxuICAgIGxheWVySWQsXHJcbiAgICB2YWx1ZTogZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmVhdHVyZSwgZmlsdGVyLmlkLCB7aXNWaXNpYmxlOiB0cnVlfSlcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUnVuIGZpbHRlciBlbnRpcmVseSBvbiBDUFVcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gdmlzU3RhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFJZFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IHN0YXRlIHN0YXRlIHdpdGggdXBkYXRlZCBkYXRhc2V0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRhdGFzZXRDUFUoc3RhdGUsIGRhdGFJZCkge1xyXG4gIGNvbnN0IGRhdGFzZXRGaWx0ZXJzID0gc3RhdGUuZmlsdGVycy5maWx0ZXIoZiA9PiBmLmRhdGFJZC5pbmNsdWRlcyhkYXRhSWQpKTtcclxuICBjb25zdCBzZWxlY3RlZERhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xyXG5cclxuICBpZiAoIXNlbGVjdGVkRGF0YXNldCkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3B0ID0ge1xyXG4gICAgY3B1T25seTogdHJ1ZSxcclxuICAgIGlnbm9yZURvbWFpbjogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIGlmICghZGF0YXNldEZpbHRlcnMubGVuZ3RoKSB7XHJcbiAgICAvLyBubyBmaWx0ZXJcclxuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xyXG4gICAgICAuLi5zZWxlY3RlZERhdGFzZXQsXHJcbiAgICAgIGZpbHRlcmVkSWR4Q1BVOiBzZWxlY3RlZERhdGFzZXQuYWxsSW5kZXhlcyxcclxuICAgICAgZmlsdGVyUmVjb3JkQ1BVOiBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBzdGF0ZS5maWx0ZXJzLCBvcHQpXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZF0sIGZpbHRlcmVkLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBubyBncHUgZmlsdGVyXHJcbiAgaWYgKCFkYXRhc2V0RmlsdGVycy5maW5kKGYgPT4gZi5ncHUpKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHtcclxuICAgICAgLi4uc2VsZWN0ZWREYXRhc2V0LFxyXG4gICAgICBmaWx0ZXJlZElkeENQVTogc2VsZWN0ZWREYXRhc2V0LmZpbHRlcmVkSW5kZXgsXHJcbiAgICAgIGZpbHRlclJlY29yZENQVTogZ2V0RmlsdGVyUmVjb3JkKGRhdGFJZCwgc3RhdGUuZmlsdGVycywgb3B0KVxyXG4gICAgfTtcclxuICAgIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZF0sIGZpbHRlcmVkLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBtYWtlIGEgY29weSBmb3IgY3B1IGZpbHRlcmluZ1xyXG4gIGNvbnN0IGNvcGllZCA9IHtcclxuICAgIC4uLnNlbGVjdGVkRGF0YXNldCxcclxuICAgIGZpbHRlclJlY29yZDogc2VsZWN0ZWREYXRhc2V0LmZpbHRlclJlY29yZENQVSxcclxuICAgIGZpbHRlcmVkSW5kZXg6IHNlbGVjdGVkRGF0YXNldC5maWx0ZXJlZElkeENQVVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyRGF0YXNldChjb3BpZWQsIHN0YXRlLmZpbHRlcnMsIHN0YXRlLmxheWVycywgb3B0KTtcclxuXHJcbiAgY29uc3QgY3B1RmlsdGVyZWREYXRhc2V0ID0ge1xyXG4gICAgLi4uc2VsZWN0ZWREYXRhc2V0LFxyXG4gICAgZmlsdGVyZWRJZHhDUFU6IGZpbHRlcmVkLmZpbHRlcmVkSW5kZXgsXHJcbiAgICBmaWx0ZXJSZWNvcmRDUFU6IGZpbHRlcmVkLmZpbHRlclJlY29yZFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZF0sIGNwdUZpbHRlcmVkRGF0YXNldCwgc3RhdGUpO1xyXG59XHJcbiJdfQ==