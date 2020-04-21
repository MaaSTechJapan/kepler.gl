"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processCsvData = processCsvData;
exports.parseRowsByFields = parseRowsByFields;
exports.getSampleForTypeAnalyze = getSampleForTypeAnalyze;
exports.parseCsvRowsByFieldType = parseCsvRowsByFieldType;
exports.getFieldsFromData = getFieldsFromData;
exports.renameDuplicateFields = renameDuplicateFields;
exports.analyzerTypeToFieldType = analyzerTypeToFieldType;
exports.processRowObject = processRowObject;
exports.processGeojson = processGeojson;
exports.formatCsv = formatCsv;
exports.validateInputData = validateInputData;
exports.processKeplerglJSON = processKeplerglJSON;
exports.processKeplerglDataset = processKeplerglDataset;
exports.Processors = exports.DATASET_HANDLERS = exports.PARSE_FIELD_VALUE_FROM_STRING = exports.ACCEPTED_ANALYZER_TYPES = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Dsv = require("d3-dsv");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _assert = _interopRequireDefault(require("assert"));

var _typeAnalyzer = require("type-analyzer");

var _geojsonNormalize = _interopRequireDefault(require("@mapbox/geojson-normalize"));

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("../utils/data-utils");

var _schemas = _interopRequireDefault(require("../schemas"));

var _userGuides = require("../constants/user-guides");

var _utils = require("../utils/utils");

var _PARSE_FIELD_VALUE_FR, _DATASET_HANDLERS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACCEPTED_ANALYZER_TYPES = [_typeAnalyzer.DATA_TYPES.DATE, _typeAnalyzer.DATA_TYPES.TIME, _typeAnalyzer.DATA_TYPES.DATETIME, _typeAnalyzer.DATA_TYPES.NUMBER, _typeAnalyzer.DATA_TYPES.INT, _typeAnalyzer.DATA_TYPES.FLOAT, _typeAnalyzer.DATA_TYPES.BOOLEAN, _typeAnalyzer.DATA_TYPES.STRING, _typeAnalyzer.DATA_TYPES.GEOMETRY, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.ZIPCODE, _typeAnalyzer.DATA_TYPES.ARRAY, _typeAnalyzer.DATA_TYPES.OBJECT]; // if any of these value occurs in csv, parse it to null;

exports.ACCEPTED_ANALYZER_TYPES = ACCEPTED_ANALYZER_TYPES;
var CSV_NULLS = ['', 'null', 'NULL', 'Null', 'NaN', '/N'];
var IGNORE_DATA_TYPES = Object.keys(_typeAnalyzer.DATA_TYPES).filter(function (type) {
  return !ACCEPTED_ANALYZER_TYPES.includes(type);
});
var PARSE_FIELD_VALUE_FROM_STRING = (_PARSE_FIELD_VALUE_FR = {}, (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES["boolean"], {
  valid: function valid(d) {
    return typeof d === 'boolean';
  },
  parse: function parse(d) {
    return d === 'true' || d === 'True' || d === '1';
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.integer, {
  valid: function valid(d) {
    return parseInt(d, 10) === d;
  },
  parse: function parse(d) {
    return parseInt(d, 10);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.timestamp, {
  valid: function valid(d, field) {
    return ['x', 'X'].includes(field.format) ? typeof d === 'number' : typeof d === 'string';
  },
  parse: function parse(d, field) {
    return ['x', 'X'].includes(field.format) ? Number(d) : d;
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.real, {
  valid: function valid(d) {
    return parseFloat(d) === d;
  },
  parse: parseFloat
}), _PARSE_FIELD_VALUE_FR);
/**
 * Process csv data, output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param {string} rawData raw csv string
 * @returns {Object} data object `{fields: [], rows: []}`
 * @public
 * @example
 * import {processCsvData} from 'kepler.gl/processors';
 *
 * const testData = `gps_data.utc_timestamp,gps_data.lat,gps_data.lng,gps_data.types,epoch,has_result,id,time,begintrip_ts_utc,begintrip_ts_local,date
 * 2016-09-17 00:09:55,29.9900937,31.2590542,driver_analytics,1472688000000,False,1,2016-09-23T00:00:00.000Z,2016-10-01 09:41:39+00:00,2016-10-01 09:41:39+00:00,2016-09-23
 * 2016-09-17 00:10:56,29.9927699,31.2461142,driver_analytics,1472688000000,False,2,2016-09-23T00:00:00.000Z,2016-10-01 09:46:37+00:00,2016-10-01 16:46:37+00:00,2016-09-23
 * 2016-09-17 00:11:56,29.9907261,31.2312742,driver_analytics,1472688000000,False,3,2016-09-23T00:00:00.000Z,,,2016-09-23
 * 2016-09-17 00:12:58,29.9870074,31.2175827,driver_analytics,1472688000000,False,4,2016-09-23T00:00:00.000Z,,,2016-09-23`
 *
 * const dataset = {
 *  info: {id: 'test_data', label: 'My Csv'},
 *  data: processCsvData(testData)
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: [dataset],
 *  options: {centerMap: true, readOnly: true}
 * }));
 */

exports.PARSE_FIELD_VALUE_FROM_STRING = PARSE_FIELD_VALUE_FROM_STRING;

function processCsvData(rawData) {
  // here we assume the csv file that people uploaded will have first row
  // as name of the column
  // TODO: add a alert at upload csv to remind define first row
  var result = (0, _d3Dsv.csvParseRows)(rawData);

  if (!Array.isArray(result) || result.length < 2) {
    // looks like an empty file, throw error to be catch
    throw new Error('Read File Failed: CSV is empty');
  }

  var _result = (0, _toArray2["default"])(result),
      headerRow = _result[0],
      rows = _result.slice(1);

  cleanUpFalsyCsvValue(rows); // No need to run type detection on every data point
  // here we get a list of none null values to run analyze on

  var sample = getSampleForTypeAnalyze({
    fields: headerRow,
    allData: rows
  });
  var fields = getFieldsFromData(sample, headerRow);
  var parsedRows = parseRowsByFields(rows, fields);
  return {
    fields: fields,
    rows: parsedRows
  };
}
/**
 * Parse rows of csv by analyzed field types. So that `'1'` -> `1`, `'True'` -> `true`
 * @param {Array<Array>} rows
 * @param {Array<Object} fields
 */


function parseRowsByFields(rows, fields) {
  // Edit rows in place
  var geojsonFieldIdx = fields.findIndex(function (f) {
    return f.name === '_geojson';
  });
  fields.forEach(parseCsvRowsByFieldType.bind(null, rows, geojsonFieldIdx));
  return rows;
}
/**
 * Getting sample data for analyzing field type.
 *
 * @param {Array<string>} fields an array of field names
 * @param {Array<Array>} allData
 * @param {Array} sampleCount
 * @returns {Array} formatted fields
 */


function getSampleForTypeAnalyze(_ref) {
  var fields = _ref.fields,
      allData = _ref.allData,
      _ref$sampleCount = _ref.sampleCount,
      sampleCount = _ref$sampleCount === void 0 ? 50 : _ref$sampleCount;
  var total = Math.min(sampleCount, allData.length); // const fieldOrder = fields.map(f => f.name);

  var sample = (0, _d3Array.range)(0, total, 1).map(function (d) {
    return {};
  }); // collect sample data for each field

  fields.forEach(function (field, fieldIdx) {
    // data counter
    var i = 0; // sample counter

    var j = 0;

    while (j < total) {
      if (i >= allData.length) {
        // if depleted data pool
        sample[j][field] = null;
        j++;
      } else if ((0, _dataUtils.notNullorUndefined)(allData[i][fieldIdx])) {
        sample[j][field] = allData[i][fieldIdx];
        j++;
        i++;
      } else {
        i++;
      }
    }
  });
  return sample;
}
/**
 * Convert falsy value in csv including `'', 'null', 'NULL', 'Null', 'NaN'` to `null`,
 * so that type-analyzer won't detect it as string
 *
 * @param {Array<Array>} rows
 */


function cleanUpFalsyCsvValue(rows) {
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      // analyzer will set any fields to 'string' if there are empty values
      // which will be parsed as '' by d3.csv
      // here we parse empty data as null
      // TODO: create warning when deltect `CSV_NULLS` in the data
      if (!rows[i][j] || CSV_NULLS.includes(rows[i][j])) {
        rows[i][j] = null;
      }
    }
  }
}
/**
 * Process uploaded csv file to parse value by field type
 *
 * @param {Array<Array>} rows
 * @param {Number} geo field index
 * @param {Object} field
 * @param {Number} i
 * @returns {void}
 */


function parseCsvRowsByFieldType(rows, geoFieldIdx, field, i) {
  var parser = PARSE_FIELD_VALUE_FROM_STRING[field.type];

  if (parser) {
    // check first not null value of it's already parsed
    var first = rows.find(function (r) {
      return (0, _dataUtils.notNullorUndefined)(r[i]);
    });

    if (!first || parser.valid(first[i], field)) {
      return;
    }

    rows.forEach(function (row) {
      // parse string value based on field type
      if (row[i] !== null) {
        row[i] = parser.parse(row[i], field);

        if (geoFieldIdx > -1 && row[geoFieldIdx] && row[geoFieldIdx].properties) {
          row[geoFieldIdx].properties[field.name] = row[i];
        }
      }
    });
  }
}
/**
 * Analyze field types from data in `string` format, e.g. uploaded csv.
 * Assign `type`, `tableFieldIndex` and `format` (timestamp only) to each field
 *
 * @param {Array<Object>} data array of row object
 * @param {Array} fieldOrder array of field names as string
 * @returns {Array<Object>} formatted fields
 * @public
 * @example
 *
 * import {getFieldsFromData} from 'kepler.gl/processors';
 * const data = [{
 *   time: '2016-09-17 00:09:55',
 *   value: '4',
 *   surge: '1.2',
 *   isTrip: 'true',
 *   zeroOnes: '0'
 * }, {
 *   time: '2016-09-17 00:30:08',
 *   value: '3',
 *   surge: null,
 *   isTrip: 'false',
 *   zeroOnes: '1'
 * }, {
 *   time: null,
 *   value: '2',
 *   surge: '1.3',
 *   isTrip: null,
 *   zeroOnes: '1'
 * }];
 *
 * const fieldOrder = ['time', 'value', 'surge', 'isTrip', 'zeroOnes'];
 * const fields = getFieldsFromData(data, fieldOrder);
 * // fields = [
 * // {name: 'time', format: 'YYYY-M-D H:m:s', tableFieldIndex: 1, type: 'timestamp'},
 * // {name: 'value', format: '', tableFieldIndex: 4, type: 'integer'},
 * // {name: 'surge', format: '', tableFieldIndex: 5, type: 'real'},
 * // {name: 'isTrip', format: '', tableFieldIndex: 6, type: 'boolean'},
 * // {name: 'zeroOnes', format: '', tableFieldIndex: 7, type: 'integer'}];
 *
 */


function getFieldsFromData(data, fieldOrder) {
  // add a check for epoch timestamp
  var metadata = _typeAnalyzer.Analyzer.computeColMeta(data, [{
    regex: /.*geojson|all_points/g,
    dataType: 'GEOMETRY'
  }], {
    ignoredDataTypes: IGNORE_DATA_TYPES
  });

  var _renameDuplicateField = renameDuplicateFields(fieldOrder),
      fieldByIndex = _renameDuplicateField.fieldByIndex;

  var result = fieldOrder.reduce(function (orderedArray, field, index) {
    var name = fieldByIndex[index];
    var fieldMeta = metadata.find(function (m) {
      return m.key === field;
    });

    var _ref2 = fieldMeta || {},
        type = _ref2.type,
        format = _ref2.format;

    orderedArray[index] = {
      name: name,
      format: format,
      tableFieldIndex: index + 1,
      type: analyzerTypeToFieldType(type),
      analyzerType: type
    };
    return orderedArray;
  }, []);
  return result;
}
/**
 * pass in an array of field names, rename duplicated one
 * and return a map from old field index to new name
 *
 * @param {Array} fieldOrder
 * @returns {Object} new field name by index
 */


function renameDuplicateFields(fieldOrder) {
  return fieldOrder.reduce(function (accu, field, i) {
    var allNames = accu.allNames;
    var fieldName = field; // add a counter to duplicated names

    if (allNames.includes(field)) {
      var counter = 0;

      while (allNames.includes("".concat(field, "-").concat(counter))) {
        counter++;
      }

      fieldName = "".concat(field, "-").concat(counter);
    }

    accu.fieldByIndex[i] = fieldName;
    accu.allNames.push(fieldName);
    return accu;
  }, {
    allNames: [],
    fieldByIndex: {}
  });
}
/**
 * Convert type-analyzer output to kepler.gl field types
 *
 * @param {string} aType
 * @returns {string} corresponding type in `ALL_FIELD_TYPES`
 */

/* eslint-disable complexity */


function analyzerTypeToFieldType(aType) {
  var DATE = _typeAnalyzer.DATA_TYPES.DATE,
      TIME = _typeAnalyzer.DATA_TYPES.TIME,
      DATETIME = _typeAnalyzer.DATA_TYPES.DATETIME,
      NUMBER = _typeAnalyzer.DATA_TYPES.NUMBER,
      INT = _typeAnalyzer.DATA_TYPES.INT,
      FLOAT = _typeAnalyzer.DATA_TYPES.FLOAT,
      BOOLEAN = _typeAnalyzer.DATA_TYPES.BOOLEAN,
      STRING = _typeAnalyzer.DATA_TYPES.STRING,
      GEOMETRY = _typeAnalyzer.DATA_TYPES.GEOMETRY,
      GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING,
      PAIR_GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING,
      ZIPCODE = _typeAnalyzer.DATA_TYPES.ZIPCODE,
      ARRAY = _typeAnalyzer.DATA_TYPES.ARRAY,
      OBJECT = _typeAnalyzer.DATA_TYPES.OBJECT; // TODO: un recognized types
  // CURRENCY PERCENT NONE

  switch (aType) {
    case DATE:
      return _defaultSettings.ALL_FIELD_TYPES.date;

    case TIME:
    case DATETIME:
      return _defaultSettings.ALL_FIELD_TYPES.timestamp;

    case FLOAT:
      return _defaultSettings.ALL_FIELD_TYPES.real;

    case INT:
      return _defaultSettings.ALL_FIELD_TYPES.integer;

    case BOOLEAN:
      return _defaultSettings.ALL_FIELD_TYPES["boolean"];

    case GEOMETRY:
    case GEOMETRY_FROM_STRING:
    case PAIR_GEOMETRY_FROM_STRING:
    case ARRAY:
    case OBJECT:
      // TODO: create a new data type for objects and arrays
      return _defaultSettings.ALL_FIELD_TYPES.geojson;

    case NUMBER:
    case STRING:
    case ZIPCODE:
      return _defaultSettings.ALL_FIELD_TYPES.string;

    default:
      _window.console.warn("Unsupported analyzer type: ".concat(aType));

      return _defaultSettings.ALL_FIELD_TYPES.string;
  }
}
/* eslint-enable complexity */

/**
 * Process data where each row is an object, output can be passed to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param {Array<Object>} rawData an array of row object, each object should have the same number of keys
 * @returns {Object} dataset containing `fields` and `rows`
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processRowObject} from 'kepler.gl/processors';
 *
 * const data = [
 *  {lat: 31.27, lng: 127.56, value: 3},
 *  {lat: 31.22, lng: 126.26, value: 1}
 * ];
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {label: 'My Data', id: 'my_data'},
 *    data: processRowObject(data)
 *  }
 * }));
 */


function processRowObject(rawData) {
  if (!Array.isArray(rawData) || !rawData.length) {
    return null;
  }

  var keys = Object.keys(rawData[0]);
  var rows = rawData.map(function (d) {
    return keys.map(function (key) {
      return d[key];
    });
  }); // pick samples

  var sampleData = (0, _dataUtils.getSampleData)(rawData, 500);
  var fields = getFieldsFromData(sampleData, keys);
  var parsedRows = parseRowsByFields(rows, fields);
  return {
    fields: fields,
    rows: parsedRows
  };
}
/**
 * Process GeoJSON [`FeatureCollection`](http://wiki.geojson.org/GeoJSON_draft_version_6#FeatureCollection),
 * output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 *
 * @param {Object} rawData raw geojson feature collection
 * @returns {Object} dataset containing `fields` and `rows`
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processGeojson} from 'kepler.gl/processors';
 *
 * const geojson = {
 * 	"type" : "FeatureCollection",
 * 	"features" : [{
 * 		"type" : "Feature",
 * 		"properties" : {
 * 			"capacity" : "10",
 * 			"type" : "U-Rack"
 * 		},
 * 		"geometry" : {
 * 			"type" : "Point",
 * 			"coordinates" : [ -71.073283, 42.417500 ]
 * 		}
 * 	}]
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {
 *      label: 'Sample Taxi Trips in New York City',
 *      id: 'test_trip_data'
 *    },
 *    data: processGeojson(geojson)
 *  }
 * }));
 */


function processGeojson(rawData) {
  var normalizedGeojson = (0, _geojsonNormalize["default"])(rawData);

  if (!normalizedGeojson || !Array.isArray(normalizedGeojson.features)) {
    var error = new Error("Read File Failed: File is not a valid GeoJSON. Read more about [supported file format](".concat(_userGuides.GUIDES_FILE_FORMAT, ")"));
    throw error; // fail to normalize geojson
  } // getting all feature fields


  var allDataRows = [];

  for (var i = 0; i < normalizedGeojson.features.length; i++) {
    var f = normalizedGeojson.features[i];

    if (f.geometry) {
      allDataRows.push(_objectSpread({
        // add feature to _geojson field
        _geojson: f
      }, f.properties || {}));
    }
  } // get all the field


  var fields = allDataRows.reduce(function (prev, curr) {
    Object.keys(curr).forEach(function (key) {
      if (!prev.includes(key)) {
        prev.push(key);
      }
    });
    return prev;
  }, []); // make sure each feature has exact same fields

  allDataRows.forEach(function (d) {
    fields.forEach(function (f) {
      if (!(f in d)) {
        d[f] = null;
        d._geojson.properties[f] = null;
      }
    });
  });
  return processRowObject(allDataRows);
}
/**
 * On export data to csv
 * @param {Array<Array>} data `dataset.allData` or filtered data `dataset.data`
 * @param {Array<Object>} fields `dataset.fields`
 * @returns {string} csv string
 */


function formatCsv(data, fields) {
  var columns = fields.map(function (f) {
    return f.name;
  });
  var formattedData = [columns]; // parse geojson object as string

  data.forEach(function (row) {
    formattedData.push(row.map(function (d, i) {
      return (0, _dataUtils.parseFieldValue)(d, fields[i].type);
    }));
  });
  return (0, _d3Dsv.csvFormatRows)(formattedData);
}
/**
 * Validate input data, adding missing field types, rename duplicate columns
 * @param {Object} data dataset.data
 * @param {Array<Object>} data.fields an array of fields
 * @param {Array<Object>} data.rows an array of data rows
 * @returns {{allData: Array, fields: Array}}
 */


function validateInputData(data) {
  if (!(0, _utils.isPlainObject)(data)) {
    (0, _assert["default"])('addDataToMap Error: dataset.data cannot be null');
    return null;
  } else if (!Array.isArray(data.fields)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.fields to be an array');
    return null;
  } else if (!Array.isArray(data.rows)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.rows to be an array');
    return null;
  }

  var fields = data.fields,
      rows = data.rows; // check if all fields has name, format and type

  var allValid = fields.every(function (f, i) {
    if (!(0, _utils.isPlainObject)(f)) {
      (0, _assert["default"])("fields needs to be an array of object, but find ".concat((0, _typeof2["default"])(f)));
      fields[i] = {};
    }

    if (!f.name) {
      (0, _assert["default"])("field.name is required but missing in ".concat(JSON.stringify(f))); // assign a name

      fields[i].name = "column_".concat(i);
    }

    if (!_defaultSettings.ALL_FIELD_TYPES[f.type]) {
      (0, _assert["default"])("unknown field type ".concat(f.type));
      return false;
    }

    if (!fields.every(function (field) {
      return field.analyzerType;
    })) {
      (0, _assert["default"])('field missing analyzerType');
      return false;
    } // check time format is correct based on first 10 not empty element


    if (f.type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
      var sample = findNonEmptyRowsAtField(rows, i, 10).map(function (r) {
        return {
          ts: r[i]
        };
      });

      var analyzedType = _typeAnalyzer.Analyzer.computeColMeta(sample)[0];

      return analyzedType.category === 'TIME' && analyzedType.format === f.format;
    }

    return true;
  });

  if (allValid) {
    return {
      rows: rows,
      fields: fields
    };
  } // if any field has missing type, recalculate it for everyone
  // because we simply lost faith in humanity


  var sampleData = getSampleForTypeAnalyze({
    fields: fields.map(function (f) {
      return f.name;
    }),
    allData: rows
  });
  var fieldOrder = fields.map(function (f) {
    return f.name;
  });
  var meta = getFieldsFromData(sampleData, fieldOrder);
  var updatedFields = fields.map(function (f, i) {
    return _objectSpread({}, f, {
      type: meta[i].type,
      format: meta[i].format,
      analyzerType: meta[i].analyzerType
    });
  });
  return {
    fields: updatedFields,
    rows: rows
  };
}

function findNonEmptyRowsAtField(rows, fieldIdx, total) {
  var sample = [];
  var i = 0;

  while (sample.length < total && i < rows.length) {
    if ((0, _dataUtils.notNullorUndefined)(rows[i][fieldIdx])) {
      sample.push(rows[i]);
    }

    i++;
  }

  return sample;
}
/**
 * Process saved kepler.gl json to be pass to [`addDataToMap`](../actions/actions.md#adddatatomap).
 * The json object should contain `datasets` and `config`.
 * @param {Object} rawData
 * @param {Array} rawData.datasets
 * @param {Object} rawData.config
 * @returns {Object} datasets and config `{datasets: {}, config: {}}`
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processKeplerglJSON} from 'kepler.gl/processors';
 *
 * dispatch(addDataToMap(processKeplerglJSON(keplerGlJson)));
 */


function processKeplerglJSON(rawData) {
  return rawData ? _schemas["default"].load(rawData.datasets, rawData.config) : null;
}
/**
 * Parse a single or an array of datasets saved using kepler.gl schema
 * @param {Array | Array<Object>} rawData
 */


function processKeplerglDataset(rawData) {
  if (!rawData) {
    return null;
  }

  var results = _schemas["default"].parseSavedData((0, _utils.toArray)(rawData));

  return Array.isArray(rawData) ? results : results[0];
}

var DATASET_HANDLERS = (_DATASET_HANDLERS = {}, (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.row, processRowObject), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.geojson, processGeojson), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.csv, processCsvData), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.keplergl, processKeplerglDataset), _DATASET_HANDLERS);
exports.DATASET_HANDLERS = DATASET_HANDLERS;
var Processors = {
  processGeojson: processGeojson,
  processCsvData: processCsvData,
  processRowObject: processRowObject,
  processKeplerglJSON: processKeplerglJSON,
  processKeplerglDataset: processKeplerglDataset,
  analyzerTypeToFieldType: analyzerTypeToFieldType,
  getFieldsFromData: getFieldsFromData,
  parseCsvRowsByFieldType: parseCsvRowsByFieldType,
  formatCsv: formatCsv
};
exports.Processors = Processors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yLmpzIl0sIm5hbWVzIjpbIkFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTIiwiQW5hbHl6ZXJEQVRBX1RZUEVTIiwiREFURSIsIlRJTUUiLCJEQVRFVElNRSIsIk5VTUJFUiIsIklOVCIsIkZMT0FUIiwiQk9PTEVBTiIsIlNUUklORyIsIkdFT01FVFJZIiwiR0VPTUVUUllfRlJPTV9TVFJJTkciLCJQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HIiwiWklQQ09ERSIsIkFSUkFZIiwiT0JKRUNUIiwiQ1NWX05VTExTIiwiSUdOT1JFX0RBVEFfVFlQRVMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwidHlwZSIsImluY2x1ZGVzIiwiUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkciLCJBTExfRklFTERfVFlQRVMiLCJ2YWxpZCIsImQiLCJwYXJzZSIsImludGVnZXIiLCJwYXJzZUludCIsInRpbWVzdGFtcCIsImZpZWxkIiwiZm9ybWF0IiwiTnVtYmVyIiwicmVhbCIsInBhcnNlRmxvYXQiLCJwcm9jZXNzQ3N2RGF0YSIsInJhd0RhdGEiLCJyZXN1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImhlYWRlclJvdyIsInJvd3MiLCJjbGVhblVwRmFsc3lDc3ZWYWx1ZSIsInNhbXBsZSIsImdldFNhbXBsZUZvclR5cGVBbmFseXplIiwiZmllbGRzIiwiYWxsRGF0YSIsImdldEZpZWxkc0Zyb21EYXRhIiwicGFyc2VkUm93cyIsInBhcnNlUm93c0J5RmllbGRzIiwiZ2VvanNvbkZpZWxkSWR4IiwiZmluZEluZGV4IiwiZiIsIm5hbWUiLCJmb3JFYWNoIiwicGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUiLCJiaW5kIiwic2FtcGxlQ291bnQiLCJ0b3RhbCIsIk1hdGgiLCJtaW4iLCJtYXAiLCJmaWVsZElkeCIsImkiLCJqIiwiZ2VvRmllbGRJZHgiLCJwYXJzZXIiLCJmaXJzdCIsImZpbmQiLCJyIiwicm93IiwicHJvcGVydGllcyIsImRhdGEiLCJmaWVsZE9yZGVyIiwibWV0YWRhdGEiLCJBbmFseXplciIsImNvbXB1dGVDb2xNZXRhIiwicmVnZXgiLCJkYXRhVHlwZSIsImlnbm9yZWREYXRhVHlwZXMiLCJyZW5hbWVEdXBsaWNhdGVGaWVsZHMiLCJmaWVsZEJ5SW5kZXgiLCJyZWR1Y2UiLCJvcmRlcmVkQXJyYXkiLCJpbmRleCIsImZpZWxkTWV0YSIsIm0iLCJrZXkiLCJ0YWJsZUZpZWxkSW5kZXgiLCJhbmFseXplclR5cGVUb0ZpZWxkVHlwZSIsImFuYWx5emVyVHlwZSIsImFjY3UiLCJhbGxOYW1lcyIsImZpZWxkTmFtZSIsImNvdW50ZXIiLCJwdXNoIiwiYVR5cGUiLCJkYXRlIiwiZ2VvanNvbiIsInN0cmluZyIsImdsb2JhbENvbnNvbGUiLCJ3YXJuIiwicHJvY2Vzc1Jvd09iamVjdCIsInNhbXBsZURhdGEiLCJwcm9jZXNzR2VvanNvbiIsIm5vcm1hbGl6ZWRHZW9qc29uIiwiZmVhdHVyZXMiLCJlcnJvciIsIkdVSURFU19GSUxFX0ZPUk1BVCIsImFsbERhdGFSb3dzIiwiZ2VvbWV0cnkiLCJfZ2VvanNvbiIsInByZXYiLCJjdXJyIiwiZm9ybWF0Q3N2IiwiY29sdW1ucyIsImZvcm1hdHRlZERhdGEiLCJ2YWxpZGF0ZUlucHV0RGF0YSIsImFsbFZhbGlkIiwiZXZlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmluZE5vbkVtcHR5Um93c0F0RmllbGQiLCJ0cyIsImFuYWx5emVkVHlwZSIsImNhdGVnb3J5IiwibWV0YSIsInVwZGF0ZWRGaWVsZHMiLCJwcm9jZXNzS2VwbGVyZ2xKU09OIiwiS2VwbGVyR2xTY2hlbWEiLCJsb2FkIiwiZGF0YXNldHMiLCJjb25maWciLCJwcm9jZXNzS2VwbGVyZ2xEYXRhc2V0IiwicmVzdWx0cyIsInBhcnNlU2F2ZWREYXRhIiwiREFUQVNFVF9IQU5ETEVSUyIsIkRBVEFTRVRfRk9STUFUUyIsImNzdiIsImtlcGxlcmdsIiwiUHJvY2Vzc29ycyJd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QmlDLGlDQUFnQkMsR0FIVSxFQUdKekcsY0FISSx1REFJMUJ3RyxpQ0FBZ0JFLFFBSlUsRUFJQ04sc0JBSkQscUJBQXRCOztBQU9BLElBQU1PLFVBQVUsR0FBRztBQUN4QnBDLEVBQUFBLGNBQWMsRUFBZEEsY0FEd0I7QUFFeEJ2RSxFQUFBQSxjQUFjLEVBQWRBLGNBRndCO0FBR3hCcUUsRUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFId0I7QUFJeEIwQixFQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUp3QjtBQUt4QkssRUFBQUEsc0JBQXNCLEVBQXRCQSxzQkFMd0I7QUFNeEI1QyxFQUFBQSx1QkFBdUIsRUFBdkJBLHVCQU53QjtBQU94QjFDLEVBQUFBLGlCQUFpQixFQUFqQkEsaUJBUHdCO0FBUXhCUSxFQUFBQSx1QkFBdUIsRUFBdkJBLHVCQVJ3QjtBQVN4QjJELEVBQUFBLFNBQVMsRUFBVEE7QUFUd0IsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NzdlBhcnNlUm93cywgY3N2Rm9ybWF0Um93c30gZnJvbSAnZDMtZHN2JztcclxuaW1wb3J0IHtyYW5nZX0gZnJvbSAnZDMtYXJyYXknO1xyXG5pbXBvcnQge2NvbnNvbGUgYXMgZ2xvYmFsQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcclxuaW1wb3J0IHtBbmFseXplciwgREFUQV9UWVBFUyBhcyBBbmFseXplckRBVEFfVFlQRVN9IGZyb20gJ3R5cGUtYW5hbHl6ZXInO1xyXG5pbXBvcnQgbm9ybWFsaXplIGZyb20gJ0BtYXBib3gvZ2VvanNvbi1ub3JtYWxpemUnO1xyXG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFUywgREFUQVNFVF9GT1JNQVRTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkLCBwYXJzZUZpZWxkVmFsdWUsIGdldFNhbXBsZURhdGF9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAnc2NoZW1hcyc7XHJcbmltcG9ydCB7R1VJREVTX0ZJTEVfRk9STUFUfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xyXG5pbXBvcnQge2lzUGxhaW5PYmplY3QsIHRvQXJyYXl9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBQ0NFUFRFRF9BTkFMWVpFUl9UWVBFUyA9IFtcclxuICBBbmFseXplckRBVEFfVFlQRVMuREFURSxcclxuICBBbmFseXplckRBVEFfVFlQRVMuVElNRSxcclxuICBBbmFseXplckRBVEFfVFlQRVMuREFURVRJTUUsXHJcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLk5VTUJFUixcclxuICBBbmFseXplckRBVEFfVFlQRVMuSU5ULFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5GTE9BVCxcclxuICBBbmFseXplckRBVEFfVFlQRVMuQk9PTEVBTixcclxuICBBbmFseXplckRBVEFfVFlQRVMuU1RSSU5HLFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5HRU9NRVRSWSxcclxuICBBbmFseXplckRBVEFfVFlQRVMuR0VPTUVUUllfRlJPTV9TVFJJTkcsXHJcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLlBBSVJfR0VPTUVUUllfRlJPTV9TVFJJTkcsXHJcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLlpJUENPREUsXHJcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkFSUkFZLFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5PQkpFQ1RcclxuXTtcclxuXHJcbi8vIGlmIGFueSBvZiB0aGVzZSB2YWx1ZSBvY2N1cnMgaW4gY3N2LCBwYXJzZSBpdCB0byBudWxsO1xyXG5jb25zdCBDU1ZfTlVMTFMgPSBbJycsICdudWxsJywgJ05VTEwnLCAnTnVsbCcsICdOYU4nLCAnL04nXTtcclxuXHJcbmNvbnN0IElHTk9SRV9EQVRBX1RZUEVTID0gT2JqZWN0LmtleXMoQW5hbHl6ZXJEQVRBX1RZUEVTKS5maWx0ZXIoXHJcbiAgdHlwZSA9PiAhQUNDRVBURURfQU5BTFlaRVJfVFlQRVMuaW5jbHVkZXModHlwZSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQQVJTRV9GSUVMRF9WQUxVRV9GUk9NX1NUUklORyA9IHtcclxuICBbQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW5dOiB7XHJcbiAgICB2YWxpZDogZCA9PiB0eXBlb2YgZCA9PT0gJ2Jvb2xlYW4nLFxyXG4gICAgcGFyc2U6IGQgPT4gZCA9PT0gJ3RydWUnIHx8IGQgPT09ICdUcnVlJyB8fCBkID09PSAnMSdcclxuICB9LFxyXG4gIFtBTExfRklFTERfVFlQRVMuaW50ZWdlcl06IHtcclxuICAgIHZhbGlkOiBkID0+IHBhcnNlSW50KGQsIDEwKSA9PT0gZCxcclxuICAgIHBhcnNlOiBkID0+IHBhcnNlSW50KGQsIDEwKVxyXG4gIH0sXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXBdOiB7XHJcbiAgICB2YWxpZDogKGQsIGZpZWxkKSA9PlxyXG4gICAgICBbJ3gnLCAnWCddLmluY2x1ZGVzKGZpZWxkLmZvcm1hdCkgPyB0eXBlb2YgZCA9PT0gJ251bWJlcicgOiB0eXBlb2YgZCA9PT0gJ3N0cmluZycsXHJcbiAgICBwYXJzZTogKGQsIGZpZWxkKSA9PiAoWyd4JywgJ1gnXS5pbmNsdWRlcyhmaWVsZC5mb3JtYXQpID8gTnVtYmVyKGQpIDogZClcclxuICB9LFxyXG4gIFtBTExfRklFTERfVFlQRVMucmVhbF06IHtcclxuICAgIHZhbGlkOiBkID0+IHBhcnNlRmxvYXQoZCkgPT09IGQsXHJcbiAgICBwYXJzZTogcGFyc2VGbG9hdFxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzIGNzdiBkYXRhLCBvdXRwdXQgYSBkYXRhIG9iamVjdCB3aXRoIGB7ZmllbGRzOiBbXSwgcm93czogW119YC5cclxuICogVGhlIGRhdGEgb2JqZWN0IGNhbiBiZSB3cmFwcGVkIGluIGEgYGRhdGFzZXRgIGFuZCBwYXNzIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcclxuICogQHBhcmFtIHtzdHJpbmd9IHJhd0RhdGEgcmF3IGNzdiBzdHJpbmdcclxuICogQHJldHVybnMge09iamVjdH0gZGF0YSBvYmplY3QgYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gXHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICogaW1wb3J0IHtwcm9jZXNzQ3N2RGF0YX0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xyXG4gKlxyXG4gKiBjb25zdCB0ZXN0RGF0YSA9IGBncHNfZGF0YS51dGNfdGltZXN0YW1wLGdwc19kYXRhLmxhdCxncHNfZGF0YS5sbmcsZ3BzX2RhdGEudHlwZXMsZXBvY2gsaGFzX3Jlc3VsdCxpZCx0aW1lLGJlZ2ludHJpcF90c191dGMsYmVnaW50cmlwX3RzX2xvY2FsLGRhdGVcclxuICogMjAxNi0wOS0xNyAwMDowOTo1NSwyOS45OTAwOTM3LDMxLjI1OTA1NDIsZHJpdmVyX2FuYWx5dGljcywxNDcyNjg4MDAwMDAwLEZhbHNlLDEsMjAxNi0wOS0yM1QwMDowMDowMC4wMDBaLDIwMTYtMTAtMDEgMDk6NDE6MzkrMDA6MDAsMjAxNi0xMC0wMSAwOTo0MTozOSswMDowMCwyMDE2LTA5LTIzXHJcbiAqIDIwMTYtMDktMTcgMDA6MTA6NTYsMjkuOTkyNzY5OSwzMS4yNDYxMTQyLGRyaXZlcl9hbmFseXRpY3MsMTQ3MjY4ODAwMDAwMCxGYWxzZSwyLDIwMTYtMDktMjNUMDA6MDA6MDAuMDAwWiwyMDE2LTEwLTAxIDA5OjQ2OjM3KzAwOjAwLDIwMTYtMTAtMDEgMTY6NDY6MzcrMDA6MDAsMjAxNi0wOS0yM1xyXG4gKiAyMDE2LTA5LTE3IDAwOjExOjU2LDI5Ljk5MDcyNjEsMzEuMjMxMjc0Mixkcml2ZXJfYW5hbHl0aWNzLDE0NzI2ODgwMDAwMDAsRmFsc2UsMywyMDE2LTA5LTIzVDAwOjAwOjAwLjAwMFosLCwyMDE2LTA5LTIzXHJcbiAqIDIwMTYtMDktMTcgMDA6MTI6NTgsMjkuOTg3MDA3NCwzMS4yMTc1ODI3LGRyaXZlcl9hbmFseXRpY3MsMTQ3MjY4ODAwMDAwMCxGYWxzZSw0LDIwMTYtMDktMjNUMDA6MDA6MDAuMDAwWiwsLDIwMTYtMDktMjNgXHJcbiAqXHJcbiAqIGNvbnN0IGRhdGFzZXQgPSB7XHJcbiAqICBpbmZvOiB7aWQ6ICd0ZXN0X2RhdGEnLCBsYWJlbDogJ015IENzdid9LFxyXG4gKiAgZGF0YTogcHJvY2Vzc0NzdkRhdGEodGVzdERhdGEpXHJcbiAqIH07XHJcbiAqXHJcbiAqIGRpc3BhdGNoKGFkZERhdGFUb01hcCh7XHJcbiAqICBkYXRhc2V0czogW2RhdGFzZXRdLFxyXG4gKiAgb3B0aW9uczoge2NlbnRlck1hcDogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9XHJcbiAqIH0pKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzQ3N2RGF0YShyYXdEYXRhKSB7XHJcbiAgLy8gaGVyZSB3ZSBhc3N1bWUgdGhlIGNzdiBmaWxlIHRoYXQgcGVvcGxlIHVwbG9hZGVkIHdpbGwgaGF2ZSBmaXJzdCByb3dcclxuICAvLyBhcyBuYW1lIG9mIHRoZSBjb2x1bW5cclxuICAvLyBUT0RPOiBhZGQgYSBhbGVydCBhdCB1cGxvYWQgY3N2IHRvIHJlbWluZCBkZWZpbmUgZmlyc3Qgcm93XHJcbiAgY29uc3QgcmVzdWx0ID0gY3N2UGFyc2VSb3dzKHJhd0RhdGEpO1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShyZXN1bHQpIHx8IHJlc3VsdC5sZW5ndGggPCAyKSB7XHJcbiAgICAvLyBsb29rcyBsaWtlIGFuIGVtcHR5IGZpbGUsIHRocm93IGVycm9yIHRvIGJlIGNhdGNoXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWQgRmlsZSBGYWlsZWQ6IENTViBpcyBlbXB0eScpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2hlYWRlclJvdywgLi4ucm93c10gPSByZXN1bHQ7XHJcblxyXG4gIGNsZWFuVXBGYWxzeUNzdlZhbHVlKHJvd3MpO1xyXG4gIC8vIE5vIG5lZWQgdG8gcnVuIHR5cGUgZGV0ZWN0aW9uIG9uIGV2ZXJ5IGRhdGEgcG9pbnRcclxuICAvLyBoZXJlIHdlIGdldCBhIGxpc3Qgb2Ygbm9uZSBudWxsIHZhbHVlcyB0byBydW4gYW5hbHl6ZSBvblxyXG4gIGNvbnN0IHNhbXBsZSA9IGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtmaWVsZHM6IGhlYWRlclJvdywgYWxsRGF0YTogcm93c30pO1xyXG5cclxuICBjb25zdCBmaWVsZHMgPSBnZXRGaWVsZHNGcm9tRGF0YShzYW1wbGUsIGhlYWRlclJvdyk7XHJcblxyXG4gIGNvbnN0IHBhcnNlZFJvd3MgPSBwYXJzZVJvd3NCeUZpZWxkcyhyb3dzLCBmaWVsZHMpO1xyXG5cclxuICByZXR1cm4ge2ZpZWxkcywgcm93czogcGFyc2VkUm93c307XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSByb3dzIG9mIGNzdiBieSBhbmFseXplZCBmaWVsZCB0eXBlcy4gU28gdGhhdCBgJzEnYCAtPiBgMWAsIGAnVHJ1ZSdgIC0+IGB0cnVlYFxyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gcm93c1xyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdH0gZmllbGRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSb3dzQnlGaWVsZHMocm93cywgZmllbGRzKSB7XHJcbiAgLy8gRWRpdCByb3dzIGluIHBsYWNlXHJcbiAgY29uc3QgZ2VvanNvbkZpZWxkSWR4ID0gZmllbGRzLmZpbmRJbmRleChmID0+IGYubmFtZSA9PT0gJ19nZW9qc29uJyk7XHJcbiAgZmllbGRzLmZvckVhY2gocGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUuYmluZChudWxsLCByb3dzLCBnZW9qc29uRmllbGRJZHgpKTtcclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn1cclxuLyoqXHJcbiAqIEdldHRpbmcgc2FtcGxlIGRhdGEgZm9yIGFuYWx5emluZyBmaWVsZCB0eXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGZpZWxkcyBhbiBhcnJheSBvZiBmaWVsZCBuYW1lc1xyXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gYWxsRGF0YVxyXG4gKiBAcGFyYW0ge0FycmF5fSBzYW1wbGVDb3VudFxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGZvcm1hdHRlZCBmaWVsZHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZSh7ZmllbGRzLCBhbGxEYXRhLCBzYW1wbGVDb3VudCA9IDUwfSkge1xyXG4gIGNvbnN0IHRvdGFsID0gTWF0aC5taW4oc2FtcGxlQ291bnQsIGFsbERhdGEubGVuZ3RoKTtcclxuICAvLyBjb25zdCBmaWVsZE9yZGVyID0gZmllbGRzLm1hcChmID0+IGYubmFtZSk7XHJcbiAgY29uc3Qgc2FtcGxlID0gcmFuZ2UoMCwgdG90YWwsIDEpLm1hcChkID0+ICh7fSkpO1xyXG5cclxuICAvLyBjb2xsZWN0IHNhbXBsZSBkYXRhIGZvciBlYWNoIGZpZWxkXHJcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkLCBmaWVsZElkeCkgPT4ge1xyXG4gICAgLy8gZGF0YSBjb3VudGVyXHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICAvLyBzYW1wbGUgY291bnRlclxyXG4gICAgbGV0IGogPSAwO1xyXG5cclxuICAgIHdoaWxlIChqIDwgdG90YWwpIHtcclxuICAgICAgaWYgKGkgPj0gYWxsRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAvLyBpZiBkZXBsZXRlZCBkYXRhIHBvb2xcclxuICAgICAgICBzYW1wbGVbal1bZmllbGRdID0gbnVsbDtcclxuICAgICAgICBqKys7XHJcbiAgICAgIH0gZWxzZSBpZiAobm90TnVsbG9yVW5kZWZpbmVkKGFsbERhdGFbaV1bZmllbGRJZHhdKSkge1xyXG4gICAgICAgIHNhbXBsZVtqXVtmaWVsZF0gPSBhbGxEYXRhW2ldW2ZpZWxkSWR4XTtcclxuICAgICAgICBqKys7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc2FtcGxlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBmYWxzeSB2YWx1ZSBpbiBjc3YgaW5jbHVkaW5nIGAnJywgJ251bGwnLCAnTlVMTCcsICdOdWxsJywgJ05hTidgIHRvIGBudWxsYCxcclxuICogc28gdGhhdCB0eXBlLWFuYWx5emVyIHdvbid0IGRldGVjdCBpdCBhcyBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IHJvd3NcclxuICovXHJcbmZ1bmN0aW9uIGNsZWFuVXBGYWxzeUNzdlZhbHVlKHJvd3MpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93c1tpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAvLyBhbmFseXplciB3aWxsIHNldCBhbnkgZmllbGRzIHRvICdzdHJpbmcnIGlmIHRoZXJlIGFyZSBlbXB0eSB2YWx1ZXNcclxuICAgICAgLy8gd2hpY2ggd2lsbCBiZSBwYXJzZWQgYXMgJycgYnkgZDMuY3N2XHJcbiAgICAgIC8vIGhlcmUgd2UgcGFyc2UgZW1wdHkgZGF0YSBhcyBudWxsXHJcbiAgICAgIC8vIFRPRE86IGNyZWF0ZSB3YXJuaW5nIHdoZW4gZGVsdGVjdCBgQ1NWX05VTExTYCBpbiB0aGUgZGF0YVxyXG4gICAgICBpZiAoIXJvd3NbaV1bal0gfHwgQ1NWX05VTExTLmluY2x1ZGVzKHJvd3NbaV1bal0pKSB7XHJcbiAgICAgICAgcm93c1tpXVtqXSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzIHVwbG9hZGVkIGNzdiBmaWxlIHRvIHBhcnNlIHZhbHVlIGJ5IGZpZWxkIHR5cGVcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IHJvd3NcclxuICogQHBhcmFtIHtOdW1iZXJ9IGdlbyBmaWVsZCBpbmRleFxyXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGRcclxuICogQHBhcmFtIHtOdW1iZXJ9IGlcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUocm93cywgZ2VvRmllbGRJZHgsIGZpZWxkLCBpKSB7XHJcbiAgY29uc3QgcGFyc2VyID0gUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkdbZmllbGQudHlwZV07XHJcbiAgaWYgKHBhcnNlcikge1xyXG4gICAgLy8gY2hlY2sgZmlyc3Qgbm90IG51bGwgdmFsdWUgb2YgaXQncyBhbHJlYWR5IHBhcnNlZFxyXG4gICAgY29uc3QgZmlyc3QgPSByb3dzLmZpbmQociA9PiBub3ROdWxsb3JVbmRlZmluZWQocltpXSkpO1xyXG4gICAgaWYgKCFmaXJzdCB8fCBwYXJzZXIudmFsaWQoZmlyc3RbaV0sIGZpZWxkKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgLy8gcGFyc2Ugc3RyaW5nIHZhbHVlIGJhc2VkIG9uIGZpZWxkIHR5cGVcclxuICAgICAgaWYgKHJvd1tpXSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJvd1tpXSA9IHBhcnNlci5wYXJzZShyb3dbaV0sIGZpZWxkKTtcclxuICAgICAgICBpZiAoZ2VvRmllbGRJZHggPiAtMSAmJiByb3dbZ2VvRmllbGRJZHhdICYmIHJvd1tnZW9GaWVsZElkeF0ucHJvcGVydGllcykge1xyXG4gICAgICAgICAgcm93W2dlb0ZpZWxkSWR4XS5wcm9wZXJ0aWVzW2ZpZWxkLm5hbWVdID0gcm93W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW5hbHl6ZSBmaWVsZCB0eXBlcyBmcm9tIGRhdGEgaW4gYHN0cmluZ2AgZm9ybWF0LCBlLmcuIHVwbG9hZGVkIGNzdi5cclxuICogQXNzaWduIGB0eXBlYCwgYHRhYmxlRmllbGRJbmRleGAgYW5kIGBmb3JtYXRgICh0aW1lc3RhbXAgb25seSkgdG8gZWFjaCBmaWVsZFxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGRhdGEgYXJyYXkgb2Ygcm93IG9iamVjdFxyXG4gKiBAcGFyYW0ge0FycmF5fSBmaWVsZE9yZGVyIGFycmF5IG9mIGZpZWxkIG5hbWVzIGFzIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7QXJyYXk8T2JqZWN0Pn0gZm9ybWF0dGVkIGZpZWxkc1xyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCB7Z2V0RmllbGRzRnJvbURhdGF9IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcclxuICogY29uc3QgZGF0YSA9IFt7XHJcbiAqICAgdGltZTogJzIwMTYtMDktMTcgMDA6MDk6NTUnLFxyXG4gKiAgIHZhbHVlOiAnNCcsXHJcbiAqICAgc3VyZ2U6ICcxLjInLFxyXG4gKiAgIGlzVHJpcDogJ3RydWUnLFxyXG4gKiAgIHplcm9PbmVzOiAnMCdcclxuICogfSwge1xyXG4gKiAgIHRpbWU6ICcyMDE2LTA5LTE3IDAwOjMwOjA4JyxcclxuICogICB2YWx1ZTogJzMnLFxyXG4gKiAgIHN1cmdlOiBudWxsLFxyXG4gKiAgIGlzVHJpcDogJ2ZhbHNlJyxcclxuICogICB6ZXJvT25lczogJzEnXHJcbiAqIH0sIHtcclxuICogICB0aW1lOiBudWxsLFxyXG4gKiAgIHZhbHVlOiAnMicsXHJcbiAqICAgc3VyZ2U6ICcxLjMnLFxyXG4gKiAgIGlzVHJpcDogbnVsbCxcclxuICogICB6ZXJvT25lczogJzEnXHJcbiAqIH1dO1xyXG4gKlxyXG4gKiBjb25zdCBmaWVsZE9yZGVyID0gWyd0aW1lJywgJ3ZhbHVlJywgJ3N1cmdlJywgJ2lzVHJpcCcsICd6ZXJvT25lcyddO1xyXG4gKiBjb25zdCBmaWVsZHMgPSBnZXRGaWVsZHNGcm9tRGF0YShkYXRhLCBmaWVsZE9yZGVyKTtcclxuICogLy8gZmllbGRzID0gW1xyXG4gKiAvLyB7bmFtZTogJ3RpbWUnLCBmb3JtYXQ6ICdZWVlZLU0tRCBIOm06cycsIHRhYmxlRmllbGRJbmRleDogMSwgdHlwZTogJ3RpbWVzdGFtcCd9LFxyXG4gKiAvLyB7bmFtZTogJ3ZhbHVlJywgZm9ybWF0OiAnJywgdGFibGVGaWVsZEluZGV4OiA0LCB0eXBlOiAnaW50ZWdlcid9LFxyXG4gKiAvLyB7bmFtZTogJ3N1cmdlJywgZm9ybWF0OiAnJywgdGFibGVGaWVsZEluZGV4OiA1LCB0eXBlOiAncmVhbCd9LFxyXG4gKiAvLyB7bmFtZTogJ2lzVHJpcCcsIGZvcm1hdDogJycsIHRhYmxlRmllbGRJbmRleDogNiwgdHlwZTogJ2Jvb2xlYW4nfSxcclxuICogLy8ge25hbWU6ICd6ZXJvT25lcycsIGZvcm1hdDogJycsIHRhYmxlRmllbGRJbmRleDogNywgdHlwZTogJ2ludGVnZXInfV07XHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRzRnJvbURhdGEoZGF0YSwgZmllbGRPcmRlcikge1xyXG4gIC8vIGFkZCBhIGNoZWNrIGZvciBlcG9jaCB0aW1lc3RhbXBcclxuICBjb25zdCBtZXRhZGF0YSA9IEFuYWx5emVyLmNvbXB1dGVDb2xNZXRhKFxyXG4gICAgZGF0YSxcclxuICAgIFt7cmVnZXg6IC8uKmdlb2pzb258YWxsX3BvaW50cy9nLCBkYXRhVHlwZTogJ0dFT01FVFJZJ31dLFxyXG4gICAge2lnbm9yZWREYXRhVHlwZXM6IElHTk9SRV9EQVRBX1RZUEVTfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHtmaWVsZEJ5SW5kZXh9ID0gcmVuYW1lRHVwbGljYXRlRmllbGRzKGZpZWxkT3JkZXIpO1xyXG5cclxuICBjb25zdCByZXN1bHQgPSBmaWVsZE9yZGVyLnJlZHVjZSgob3JkZXJlZEFycmF5LCBmaWVsZCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBmaWVsZEJ5SW5kZXhbaW5kZXhdO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkTWV0YSA9IG1ldGFkYXRhLmZpbmQobSA9PiBtLmtleSA9PT0gZmllbGQpO1xyXG4gICAgY29uc3Qge3R5cGUsIGZvcm1hdH0gPSBmaWVsZE1ldGEgfHwge307XHJcblxyXG4gICAgb3JkZXJlZEFycmF5W2luZGV4XSA9IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZm9ybWF0LFxyXG4gICAgICB0YWJsZUZpZWxkSW5kZXg6IGluZGV4ICsgMSxcclxuICAgICAgdHlwZTogYW5hbHl6ZXJUeXBlVG9GaWVsZFR5cGUodHlwZSksXHJcbiAgICAgIGFuYWx5emVyVHlwZTogdHlwZVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvcmRlcmVkQXJyYXk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogcGFzcyBpbiBhbiBhcnJheSBvZiBmaWVsZCBuYW1lcywgcmVuYW1lIGR1cGxpY2F0ZWQgb25lXHJcbiAqIGFuZCByZXR1cm4gYSBtYXAgZnJvbSBvbGQgZmllbGQgaW5kZXggdG8gbmV3IG5hbWVcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gZmllbGRPcmRlclxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXcgZmllbGQgbmFtZSBieSBpbmRleFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUR1cGxpY2F0ZUZpZWxkcyhmaWVsZE9yZGVyKSB7XHJcbiAgcmV0dXJuIGZpZWxkT3JkZXIucmVkdWNlKFxyXG4gICAgKGFjY3UsIGZpZWxkLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHthbGxOYW1lc30gPSBhY2N1O1xyXG4gICAgICBsZXQgZmllbGROYW1lID0gZmllbGQ7XHJcblxyXG4gICAgICAvLyBhZGQgYSBjb3VudGVyIHRvIGR1cGxpY2F0ZWQgbmFtZXNcclxuICAgICAgaWYgKGFsbE5hbWVzLmluY2x1ZGVzKGZpZWxkKSkge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICB3aGlsZSAoYWxsTmFtZXMuaW5jbHVkZXMoYCR7ZmllbGR9LSR7Y291bnRlcn1gKSkge1xyXG4gICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZE5hbWUgPSBgJHtmaWVsZH0tJHtjb3VudGVyfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFjY3UuZmllbGRCeUluZGV4W2ldID0gZmllbGROYW1lO1xyXG4gICAgICBhY2N1LmFsbE5hbWVzLnB1c2goZmllbGROYW1lKTtcclxuXHJcbiAgICAgIHJldHVybiBhY2N1O1xyXG4gICAgfSxcclxuICAgIHthbGxOYW1lczogW10sIGZpZWxkQnlJbmRleDoge319XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgdHlwZS1hbmFseXplciBvdXRwdXQgdG8ga2VwbGVyLmdsIGZpZWxkIHR5cGVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhVHlwZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb3JyZXNwb25kaW5nIHR5cGUgaW4gYEFMTF9GSUVMRF9UWVBFU2BcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVyVHlwZVRvRmllbGRUeXBlKGFUeXBlKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgREFURSxcclxuICAgIFRJTUUsXHJcbiAgICBEQVRFVElNRSxcclxuICAgIE5VTUJFUixcclxuICAgIElOVCxcclxuICAgIEZMT0FULFxyXG4gICAgQk9PTEVBTixcclxuICAgIFNUUklORyxcclxuICAgIEdFT01FVFJZLFxyXG4gICAgR0VPTUVUUllfRlJPTV9TVFJJTkcsXHJcbiAgICBQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HLFxyXG4gICAgWklQQ09ERSxcclxuICAgIEFSUkFZLFxyXG4gICAgT0JKRUNUXHJcbiAgfSA9IEFuYWx5emVyREFUQV9UWVBFUztcclxuXHJcbiAgLy8gVE9ETzogdW4gcmVjb2duaXplZCB0eXBlc1xyXG4gIC8vIENVUlJFTkNZIFBFUkNFTlQgTk9ORVxyXG4gIHN3aXRjaCAoYVR5cGUpIHtcclxuICAgIGNhc2UgREFURTpcclxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5kYXRlO1xyXG4gICAgY2FzZSBUSU1FOlxyXG4gICAgY2FzZSBEQVRFVElNRTpcclxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA7XHJcbiAgICBjYXNlIEZMT0FUOlxyXG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnJlYWw7XHJcbiAgICBjYXNlIElOVDpcclxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyO1xyXG4gICAgY2FzZSBCT09MRUFOOlxyXG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW47XHJcbiAgICBjYXNlIEdFT01FVFJZOlxyXG4gICAgY2FzZSBHRU9NRVRSWV9GUk9NX1NUUklORzpcclxuICAgIGNhc2UgUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORzpcclxuICAgIGNhc2UgQVJSQVk6XHJcbiAgICBjYXNlIE9CSkVDVDpcclxuICAgICAgLy8gVE9ETzogY3JlYXRlIGEgbmV3IGRhdGEgdHlwZSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzXHJcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuZ2VvanNvbjtcclxuICAgIGNhc2UgTlVNQkVSOlxyXG4gICAgY2FzZSBTVFJJTkc6XHJcbiAgICBjYXNlIFpJUENPREU6XHJcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuc3RyaW5nO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgZ2xvYmFsQ29uc29sZS53YXJuKGBVbnN1cHBvcnRlZCBhbmFseXplciB0eXBlOiAke2FUeXBlfWApO1xyXG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnN0cmluZztcclxuICB9XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXHJcblxyXG4vKipcclxuICogUHJvY2VzcyBkYXRhIHdoZXJlIGVhY2ggcm93IGlzIGFuIG9iamVjdCwgb3V0cHV0IGNhbiBiZSBwYXNzZWQgdG8gW2BhZGREYXRhVG9NYXBgXSguLi9hY3Rpb25zL2FjdGlvbnMubWQjYWRkZGF0YXRvbWFwKVxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHJhd0RhdGEgYW4gYXJyYXkgb2Ygcm93IG9iamVjdCwgZWFjaCBvYmplY3Qgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGtleXNcclxuICogQHJldHVybnMge09iamVjdH0gZGF0YXNldCBjb250YWluaW5nIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBpbXBvcnQge2FkZERhdGFUb01hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKiBpbXBvcnQge3Byb2Nlc3NSb3dPYmplY3R9IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcclxuICpcclxuICogY29uc3QgZGF0YSA9IFtcclxuICogIHtsYXQ6IDMxLjI3LCBsbmc6IDEyNy41NiwgdmFsdWU6IDN9LFxyXG4gKiAge2xhdDogMzEuMjIsIGxuZzogMTI2LjI2LCB2YWx1ZTogMX1cclxuICogXTtcclxuICpcclxuICogZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHtcclxuICogIGRhdGFzZXRzOiB7XHJcbiAqICAgIGluZm86IHtsYWJlbDogJ015IERhdGEnLCBpZDogJ215X2RhdGEnfSxcclxuICogICAgZGF0YTogcHJvY2Vzc1Jvd09iamVjdChkYXRhKVxyXG4gKiAgfVxyXG4gKiB9KSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1Jvd09iamVjdChyYXdEYXRhKSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJhd0RhdGEpIHx8ICFyYXdEYXRhLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmF3RGF0YVswXSk7XHJcbiAgY29uc3Qgcm93cyA9IHJhd0RhdGEubWFwKGQgPT4ga2V5cy5tYXAoa2V5ID0+IGRba2V5XSkpO1xyXG5cclxuICAvLyBwaWNrIHNhbXBsZXNcclxuICBjb25zdCBzYW1wbGVEYXRhID0gZ2V0U2FtcGxlRGF0YShyYXdEYXRhLCA1MDApO1xyXG4gIGNvbnN0IGZpZWxkcyA9IGdldEZpZWxkc0Zyb21EYXRhKHNhbXBsZURhdGEsIGtleXMpO1xyXG4gIGNvbnN0IHBhcnNlZFJvd3MgPSBwYXJzZVJvd3NCeUZpZWxkcyhyb3dzLCBmaWVsZHMpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmllbGRzLFxyXG4gICAgcm93czogcGFyc2VkUm93c1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzIEdlb0pTT04gW2BGZWF0dXJlQ29sbGVjdGlvbmBdKGh0dHA6Ly93aWtpLmdlb2pzb24ub3JnL0dlb0pTT05fZHJhZnRfdmVyc2lvbl82I0ZlYXR1cmVDb2xsZWN0aW9uKSxcclxuICogb3V0cHV0IGEgZGF0YSBvYmplY3Qgd2l0aCBge2ZpZWxkczogW10sIHJvd3M6IFtdfWAuXHJcbiAqIFRoZSBkYXRhIG9iamVjdCBjYW4gYmUgd3JhcHBlZCBpbiBhIGBkYXRhc2V0YCBhbmQgcGFzcyB0byBbYGFkZERhdGFUb01hcGBdKC4uL2FjdGlvbnMvYWN0aW9ucy5tZCNhZGRkYXRhdG9tYXApXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSByYXdEYXRhIHJhdyBnZW9qc29uIGZlYXR1cmUgY29sbGVjdGlvblxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhc2V0IGNvbnRhaW5pbmcgYGZpZWxkc2AgYW5kIGByb3dzYFxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqIGltcG9ydCB7cHJvY2Vzc0dlb2pzb259IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcclxuICpcclxuICogY29uc3QgZ2VvanNvbiA9IHtcclxuICogXHRcInR5cGVcIiA6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICogXHRcImZlYXR1cmVzXCIgOiBbe1xyXG4gKiBcdFx0XCJ0eXBlXCIgOiBcIkZlYXR1cmVcIixcclxuICogXHRcdFwicHJvcGVydGllc1wiIDoge1xyXG4gKiBcdFx0XHRcImNhcGFjaXR5XCIgOiBcIjEwXCIsXHJcbiAqIFx0XHRcdFwidHlwZVwiIDogXCJVLVJhY2tcIlxyXG4gKiBcdFx0fSxcclxuICogXHRcdFwiZ2VvbWV0cnlcIiA6IHtcclxuICogXHRcdFx0XCJ0eXBlXCIgOiBcIlBvaW50XCIsXHJcbiAqIFx0XHRcdFwiY29vcmRpbmF0ZXNcIiA6IFsgLTcxLjA3MzI4MywgNDIuNDE3NTAwIF1cclxuICogXHRcdH1cclxuICogXHR9XVxyXG4gKiB9O1xyXG4gKlxyXG4gKiBkaXNwYXRjaChhZGREYXRhVG9NYXAoe1xyXG4gKiAgZGF0YXNldHM6IHtcclxuICogICAgaW5mbzoge1xyXG4gKiAgICAgIGxhYmVsOiAnU2FtcGxlIFRheGkgVHJpcHMgaW4gTmV3IFlvcmsgQ2l0eScsXHJcbiAqICAgICAgaWQ6ICd0ZXN0X3RyaXBfZGF0YSdcclxuICogICAgfSxcclxuICogICAgZGF0YTogcHJvY2Vzc0dlb2pzb24oZ2VvanNvbilcclxuICogIH1cclxuICogfSkpO1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NHZW9qc29uKHJhd0RhdGEpIHtcclxuICBjb25zdCBub3JtYWxpemVkR2VvanNvbiA9IG5vcm1hbGl6ZShyYXdEYXRhKTtcclxuXHJcbiAgaWYgKCFub3JtYWxpemVkR2VvanNvbiB8fCAhQXJyYXkuaXNBcnJheShub3JtYWxpemVkR2VvanNvbi5mZWF0dXJlcykpIHtcclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFxyXG4gICAgICBgUmVhZCBGaWxlIEZhaWxlZDogRmlsZSBpcyBub3QgYSB2YWxpZCBHZW9KU09OLiBSZWFkIG1vcmUgYWJvdXQgW3N1cHBvcnRlZCBmaWxlIGZvcm1hdF0oJHtHVUlERVNfRklMRV9GT1JNQVR9KWBcclxuICAgICk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICAgIC8vIGZhaWwgdG8gbm9ybWFsaXplIGdlb2pzb25cclxuICB9XHJcblxyXG4gIC8vIGdldHRpbmcgYWxsIGZlYXR1cmUgZmllbGRzXHJcbiAgY29uc3QgYWxsRGF0YVJvd3MgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vcm1hbGl6ZWRHZW9qc29uLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBmID0gbm9ybWFsaXplZEdlb2pzb24uZmVhdHVyZXNbaV07XHJcbiAgICBpZiAoZi5nZW9tZXRyeSkge1xyXG4gICAgICBhbGxEYXRhUm93cy5wdXNoKHtcclxuICAgICAgICAvLyBhZGQgZmVhdHVyZSB0byBfZ2VvanNvbiBmaWVsZFxyXG4gICAgICAgIF9nZW9qc29uOiBmLFxyXG4gICAgICAgIC4uLihmLnByb3BlcnRpZXMgfHwge30pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBnZXQgYWxsIHRoZSBmaWVsZFxyXG4gIGNvbnN0IGZpZWxkcyA9IGFsbERhdGFSb3dzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG4gICAgT2JqZWN0LmtleXMoY3VycikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoIXByZXYuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgIHByZXYucHVzaChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcmV2O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gbWFrZSBzdXJlIGVhY2ggZmVhdHVyZSBoYXMgZXhhY3Qgc2FtZSBmaWVsZHNcclxuICBhbGxEYXRhUm93cy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgZmllbGRzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgIGlmICghKGYgaW4gZCkpIHtcclxuICAgICAgICBkW2ZdID0gbnVsbDtcclxuICAgICAgICBkLl9nZW9qc29uLnByb3BlcnRpZXNbZl0gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHByb2Nlc3NSb3dPYmplY3QoYWxsRGF0YVJvd3MpO1xyXG59XHJcblxyXG4vKipcclxuICogT24gZXhwb3J0IGRhdGEgdG8gY3N2XHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBkYXRhIGBkYXRhc2V0LmFsbERhdGFgIG9yIGZpbHRlcmVkIGRhdGEgYGRhdGFzZXQuZGF0YWBcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBmaWVsZHMgYGRhdGFzZXQuZmllbGRzYFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3Ygc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3N2KGRhdGEsIGZpZWxkcykge1xyXG4gIGNvbnN0IGNvbHVtbnMgPSBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRhID0gW2NvbHVtbnNdO1xyXG5cclxuICAvLyBwYXJzZSBnZW9qc29uIG9iamVjdCBhcyBzdHJpbmdcclxuICBkYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgIGZvcm1hdHRlZERhdGEucHVzaChyb3cubWFwKChkLCBpKSA9PiBwYXJzZUZpZWxkVmFsdWUoZCwgZmllbGRzW2ldLnR5cGUpKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjc3ZGb3JtYXRSb3dzKGZvcm1hdHRlZERhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgaW5wdXQgZGF0YSwgYWRkaW5nIG1pc3NpbmcgZmllbGQgdHlwZXMsIHJlbmFtZSBkdXBsaWNhdGUgY29sdW1uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSBkYXRhc2V0LmRhdGFcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBkYXRhLmZpZWxkcyBhbiBhcnJheSBvZiBmaWVsZHNcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBkYXRhLnJvd3MgYW4gYXJyYXkgb2YgZGF0YSByb3dzXHJcbiAqIEByZXR1cm5zIHt7YWxsRGF0YTogQXJyYXksIGZpZWxkczogQXJyYXl9fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXREYXRhKGRhdGEpIHtcclxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcclxuICAgIGFzc2VydCgnYWRkRGF0YVRvTWFwIEVycm9yOiBkYXRhc2V0LmRhdGEgY2Fubm90IGJlIG51bGwnKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5maWVsZHMpKSB7XHJcbiAgICBhc3NlcnQoJ2FkZERhdGFUb01hcCBFcnJvcjogZXhwZWN0IGRhdGFzZXQuZGF0YS5maWVsZHMgdG8gYmUgYW4gYXJyYXknKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5yb3dzKSkge1xyXG4gICAgYXNzZXJ0KCdhZGREYXRhVG9NYXAgRXJyb3I6IGV4cGVjdCBkYXRhc2V0LmRhdGEucm93cyB0byBiZSBhbiBhcnJheScpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7ZmllbGRzLCByb3dzfSA9IGRhdGE7XHJcblxyXG4gIC8vIGNoZWNrIGlmIGFsbCBmaWVsZHMgaGFzIG5hbWUsIGZvcm1hdCBhbmQgdHlwZVxyXG4gIGNvbnN0IGFsbFZhbGlkID0gZmllbGRzLmV2ZXJ5KChmLCBpKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoZikpIHtcclxuICAgICAgYXNzZXJ0KGBmaWVsZHMgbmVlZHMgdG8gYmUgYW4gYXJyYXkgb2Ygb2JqZWN0LCBidXQgZmluZCAke3R5cGVvZiBmfWApO1xyXG4gICAgICBmaWVsZHNbaV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWYubmFtZSkge1xyXG4gICAgICBhc3NlcnQoYGZpZWxkLm5hbWUgaXMgcmVxdWlyZWQgYnV0IG1pc3NpbmcgaW4gJHtKU09OLnN0cmluZ2lmeShmKX1gKTtcclxuICAgICAgLy8gYXNzaWduIGEgbmFtZVxyXG4gICAgICBmaWVsZHNbaV0ubmFtZSA9IGBjb2x1bW5fJHtpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBTExfRklFTERfVFlQRVNbZi50eXBlXSkge1xyXG4gICAgICBhc3NlcnQoYHVua25vd24gZmllbGQgdHlwZSAke2YudHlwZX1gKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmllbGRzLmV2ZXJ5KGZpZWxkID0+IGZpZWxkLmFuYWx5emVyVHlwZSkpIHtcclxuICAgICAgYXNzZXJ0KCdmaWVsZCBtaXNzaW5nIGFuYWx5emVyVHlwZScpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgdGltZSBmb3JtYXQgaXMgY29ycmVjdCBiYXNlZCBvbiBmaXJzdCAxMCBub3QgZW1wdHkgZWxlbWVudFxyXG4gICAgaWYgKGYudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcCkge1xyXG4gICAgICBjb25zdCBzYW1wbGUgPSBmaW5kTm9uRW1wdHlSb3dzQXRGaWVsZChyb3dzLCBpLCAxMCkubWFwKHIgPT4gKHt0czogcltpXX0pKTtcclxuICAgICAgY29uc3QgYW5hbHl6ZWRUeXBlID0gQW5hbHl6ZXIuY29tcHV0ZUNvbE1ldGEoc2FtcGxlKVswXTtcclxuICAgICAgcmV0dXJuIGFuYWx5emVkVHlwZS5jYXRlZ29yeSA9PT0gJ1RJTUUnICYmIGFuYWx5emVkVHlwZS5mb3JtYXQgPT09IGYuZm9ybWF0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoYWxsVmFsaWQpIHtcclxuICAgIHJldHVybiB7cm93cywgZmllbGRzfTtcclxuICB9XHJcblxyXG4gIC8vIGlmIGFueSBmaWVsZCBoYXMgbWlzc2luZyB0eXBlLCByZWNhbGN1bGF0ZSBpdCBmb3IgZXZlcnlvbmVcclxuICAvLyBiZWNhdXNlIHdlIHNpbXBseSBsb3N0IGZhaXRoIGluIGh1bWFuaXR5XHJcbiAgY29uc3Qgc2FtcGxlRGF0YSA9IGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtcclxuICAgIGZpZWxkczogZmllbGRzLm1hcChmID0+IGYubmFtZSksXHJcbiAgICBhbGxEYXRhOiByb3dzXHJcbiAgfSk7XHJcbiAgY29uc3QgZmllbGRPcmRlciA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xyXG4gIGNvbnN0IG1ldGEgPSBnZXRGaWVsZHNGcm9tRGF0YShzYW1wbGVEYXRhLCBmaWVsZE9yZGVyKTtcclxuICBjb25zdCB1cGRhdGVkRmllbGRzID0gZmllbGRzLm1hcCgoZiwgaSkgPT4gKHtcclxuICAgIC4uLmYsXHJcbiAgICB0eXBlOiBtZXRhW2ldLnR5cGUsXHJcbiAgICBmb3JtYXQ6IG1ldGFbaV0uZm9ybWF0LFxyXG4gICAgYW5hbHl6ZXJUeXBlOiBtZXRhW2ldLmFuYWx5emVyVHlwZVxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtmaWVsZHM6IHVwZGF0ZWRGaWVsZHMsIHJvd3N9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kTm9uRW1wdHlSb3dzQXRGaWVsZChyb3dzLCBmaWVsZElkeCwgdG90YWwpIHtcclxuICBjb25zdCBzYW1wbGUgPSBbXTtcclxuICBsZXQgaSA9IDA7XHJcbiAgd2hpbGUgKHNhbXBsZS5sZW5ndGggPCB0b3RhbCAmJiBpIDwgcm93cy5sZW5ndGgpIHtcclxuICAgIGlmIChub3ROdWxsb3JVbmRlZmluZWQocm93c1tpXVtmaWVsZElkeF0pKSB7XHJcbiAgICAgIHNhbXBsZS5wdXNoKHJvd3NbaV0pO1xyXG4gICAgfVxyXG4gICAgaSsrO1xyXG4gIH1cclxuICByZXR1cm4gc2FtcGxlO1xyXG59XHJcbi8qKlxyXG4gKiBQcm9jZXNzIHNhdmVkIGtlcGxlci5nbCBqc29uIHRvIGJlIHBhc3MgdG8gW2BhZGREYXRhVG9NYXBgXSguLi9hY3Rpb25zL2FjdGlvbnMubWQjYWRkZGF0YXRvbWFwKS5cclxuICogVGhlIGpzb24gb2JqZWN0IHNob3VsZCBjb250YWluIGBkYXRhc2V0c2AgYW5kIGBjb25maWdgLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcmF3RGF0YVxyXG4gKiBAcGFyYW0ge0FycmF5fSByYXdEYXRhLmRhdGFzZXRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSByYXdEYXRhLmNvbmZpZ1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhc2V0cyBhbmQgY29uZmlnIGB7ZGF0YXNldHM6IHt9LCBjb25maWc6IHt9fWBcclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBpbXBvcnQge2FkZERhdGFUb01hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKiBpbXBvcnQge3Byb2Nlc3NLZXBsZXJnbEpTT059IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcclxuICpcclxuICogZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHByb2Nlc3NLZXBsZXJnbEpTT04oa2VwbGVyR2xKc29uKSkpO1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NLZXBsZXJnbEpTT04ocmF3RGF0YSkge1xyXG4gIHJldHVybiByYXdEYXRhID8gS2VwbGVyR2xTY2hlbWEubG9hZChyYXdEYXRhLmRhdGFzZXRzLCByYXdEYXRhLmNvbmZpZykgOiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYSBzaW5nbGUgb3IgYW4gYXJyYXkgb2YgZGF0YXNldHMgc2F2ZWQgdXNpbmcga2VwbGVyLmdsIHNjaGVtYVxyXG4gKiBAcGFyYW0ge0FycmF5IHwgQXJyYXk8T2JqZWN0Pn0gcmF3RGF0YVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NLZXBsZXJnbERhdGFzZXQocmF3RGF0YSkge1xyXG4gIGlmICghcmF3RGF0YSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHRzID0gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZERhdGEodG9BcnJheShyYXdEYXRhKSk7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmF3RGF0YSkgPyByZXN1bHRzIDogcmVzdWx0c1swXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFTRVRfSEFORExFUlMgPSB7XHJcbiAgW0RBVEFTRVRfRk9STUFUUy5yb3ddOiBwcm9jZXNzUm93T2JqZWN0LFxyXG4gIFtEQVRBU0VUX0ZPUk1BVFMuZ2VvanNvbl06IHByb2Nlc3NHZW9qc29uLFxyXG4gIFtEQVRBU0VUX0ZPUk1BVFMuY3N2XTogcHJvY2Vzc0NzdkRhdGEsXHJcbiAgW0RBVEFTRVRfRk9STUFUUy5rZXBsZXJnbF06IHByb2Nlc3NLZXBsZXJnbERhdGFzZXRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzb3JzID0ge1xyXG4gIHByb2Nlc3NHZW9qc29uLFxyXG4gIHByb2Nlc3NDc3ZEYXRhLFxyXG4gIHByb2Nlc3NSb3dPYmplY3QsXHJcbiAgcHJvY2Vzc0tlcGxlcmdsSlNPTixcclxuICBwcm9jZXNzS2VwbGVyZ2xEYXRhc2V0LFxyXG4gIGFuYWx5emVyVHlwZVRvRmllbGRUeXBlLFxyXG4gIGdldEZpZWxkc0Zyb21EYXRhLFxyXG4gIHBhcnNlQ3N2Um93c0J5RmllbGRUeXBlLFxyXG4gIGZvcm1hdENzdlxyXG59O1xyXG4iXX0=