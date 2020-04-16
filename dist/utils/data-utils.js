"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = unique;
exports.findMapBounds = findMapBounds;
exports.getLatLngBounds = getLatLngBounds;
exports.clamp = clamp;
exports.getSampleData = getSampleData;
exports.timeToUnixMilli = timeToUnixMilli;
exports.maybeToDate = maybeToDate;
exports.notNullorUndefined = notNullorUndefined;
exports.isPlainObject = isPlainObject;
exports.numberSort = numberSort;
exports.getSortingFunction = getSortingFunction;
exports.preciseRound = preciseRound;
exports.getRoundingDecimalFromStep = getRoundingDecimalFromStep;
exports.roundValToStep = roundValToStep;
exports.findFirstNoneEmpty = findFirstNoneEmpty;
exports.arrayMove = exports.parseFieldValue = exports.FIELD_DISPLAY_FORMAT = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _moment = _interopRequireDefault(require("moment"));

var _assert = _interopRequireDefault(require("assert"));

var _defaultSettings = require("../constants/default-settings");

var _FIELD_DISPLAY_FORMAT;

var MAX_LATITUDE = 90;
var MIN_LATITUDE = -90;
var MAX_LONGITUDE = 180;
var MIN_LONGITUDE = -180;
/**
 * simple getting unique values of an array
 *
 * @param {array} values
 * @returns {array} unique values
 */

function unique(values) {
  var results = [];
  values.forEach(function (v) {
    if (!results.includes(v) && notNullorUndefined(v)) {
      results.push(v);
    }
  });
  return results;
}
/* eslint-disable max-statements */

/**
 * return center of map from given points
 * @param {array} layers
 * @param {string} dataId
 * @returns {object} coordinates of map center, empty if not found
 */


function findMapBounds(layers) {
  // find bounds in formatted layerData
  // take ALL layers into account when finding map bounds
  var availableLayerBounds = layers.reduce(function (res, l) {
    if (l.meta && l.meta.bounds) {
      res.push(l.meta.bounds);
    }

    return res;
  }, []); // return null if no layer is available

  if (availableLayerBounds.length === 0) {
    return null;
  } // merge bounds in each layer


  var newBounds = availableLayerBounds.reduce(function (res, b) {
    return [Math.min(res[0], b[0]), Math.min(res[1], b[1]), Math.max(res[2], b[2]), Math.max(res[3], b[3])];
  }, [MAX_LONGITUDE, MAX_LATITUDE, MIN_LONGITUDE, MIN_LATITUDE]);
  return newBounds;
}
/* eslint-enable max-statements */


function getLatLngBounds(points, idx, limit) {
  var lats = points.map(function (d) {
    return Array.isArray(d) && d[idx];
  }).filter(Number.isFinite).sort(numberSort);

  if (!lats.length) {
    return null;
  } // use 99 percentile to filter out outliers
  // clamp to limit


  return [Math.max(lats[Math.floor(0.01 * (lats.length - 1))], limit[0]), Math.min(lats[Math.ceil(0.99 * (lats.length - 1))], limit[1])];
}

function clamp(_ref, val) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  return val <= min ? min : val >= max ? max : val;
}

function getSampleData(data) {
  var sampleSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var getValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (d) {
    return d;
  };
  var sampleStep = Math.max(Math.floor(data.length / sampleSize), 1);
  var output = [];

  for (var i = 0; i < data.length; i += sampleStep) {
    output.push(getValue(data[i]));
  }

  return output;
}
/**
 * Convert different time format to unix milliseconds
 * @param {*} value
 * @param {*} format
 */


function timeToUnixMilli(value, format) {
  if (notNullorUndefined(value)) {
    return typeof value === 'string' ? _moment["default"].utc(value, format).valueOf() : format === 'x' ? value * 1000 : value;
  }

  return null;
}

function maybeToDate(isTime, fieldIdx, format, d) {
  if (isTime) {
    return timeToUnixMilli(d[fieldIdx], format);
  }

  return d[fieldIdx];
}
/**
 * whether null or undefined
 * @returns {boolean} - yes or no
 */


function notNullorUndefined(d) {
  return d !== undefined && d !== null;
}

function isPlainObject(obj) {
  return obj === Object(obj) && typeof obj !== 'function' && !Array.isArray(obj);
}

function numberSort(a, b) {
  return a - b;
}

function getSortingFunction(fieldType) {
  switch (fieldType) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return numberSort;

    default:
      return undefined;
  }
}
/**
 * round number with exact number of decimals
 * return as a string
 * @param {number} num
 * @param {number} decimals
 * @returns {string} - a rounded number in string format
 */


function preciseRound(num, decimals) {
  var t = Math.pow(10, decimals);
  return (Math.round(num * t + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}
/**
 * get number of decimals to round to for slider from step
 * @param {number} step
 * @returns {number} - number of decimal
 */


function getRoundingDecimalFromStep(step) {
  if (isNaN(step)) {
    (0, _assert["default"])('step is not a number');
    (0, _assert["default"])(step);
  }

  var splitZero = step.toString().split('.');

  if (splitZero.length === 1) {
    return 0;
  }

  return splitZero[1].length;
}
/**
 * round the value to step for the slider
 * @param {number} minValue
 * @param {number} step
 * @param {number} val
 * @returns {number} - rounded number
 */


function roundValToStep(minValue, step, val) {
  if (isNaN(step)) {
    return val;
  }

  var decimal = getRoundingDecimalFromStep(step);
  var steps = Math.floor((val - minValue) / step);
  var remain = val - (steps * step + minValue); // has to round because javascript turns 0.1 into 0.9999999999999987

  remain = Number(preciseRound(remain, 8));
  var closest;

  if (remain === 0) {
    closest = val;
  } else if (remain < step / 2) {
    closest = steps * step + minValue;
  } else {
    closest = (steps + 1) * step + minValue;
  } // precise round return a string rounded to the defined decimal


  var rounded = preciseRound(closest, decimal);
  return Number(rounded);
}

var identity = function identity(d) {
  return d;
};

var FIELD_DISPLAY_FORMAT = (_FIELD_DISPLAY_FORMAT = {}, (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.string, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.timestamp, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.integer, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.real, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES["boolean"], function (d) {
  return String(d);
}), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.date, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.geojson, function (d) {
  return typeof d === 'string' ? d : isPlainObject(d) ? JSON.stringify(d) : Array.isArray(d) ? "[".concat(String(d), "]") : '';
}), _FIELD_DISPLAY_FORMAT);
/**
 * Parse field value and type and return a string representation
 * @param {string} value the field value
 * @param {string} type the field type
 * @return {*}
 */

exports.FIELD_DISPLAY_FORMAT = FIELD_DISPLAY_FORMAT;

var parseFieldValue = function parseFieldValue(value, type) {
  if (!notNullorUndefined(value)) {
    return '';
  }

  return FIELD_DISPLAY_FORMAT[type] ? FIELD_DISPLAY_FORMAT[type](value) : String(value);
};

exports.parseFieldValue = parseFieldValue;

var arrayMoveMutate = function arrayMoveMutate(array, from, to) {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

var arrayMove = function arrayMove(array, from, to) {
  array = array.slice();
  arrayMoveMutate(array, from, to);
  return array;
};

exports.arrayMove = arrayMove;

function findFirstNoneEmpty(data) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var getValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  var c = 0;
  var found = [];

  while (c < count && c < data.length) {
    var value = getValue(data[c]);

    if (notNullorUndefined(value)) {
      found.push(value);
    }

    c++;
  }

  return found;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhLXV0aWxzLmpzIl0sIm5hbWVzIjpbIk1BWF9MQVRJVFVERSIsIk1JTl9MQVRJVFVERSIsIk1BWF9MT05HSVRVREUiLCJNSU5fTE9OR0lUVURFIiwidW5pcXVlIiwidmFsdWVzIiwicmVzdWx0cyIsImZvckVhY2giLCJ2IiwiaW5jbHVkZXMiLCJub3ROdWxsb3JVbmRlZmluZWQiLCJwdXNoIiwiZmluZE1hcEJvdW5kcyIsImxheWVycyIsImF2YWlsYWJsZUxheWVyQm91bmRzIiwicmVkdWNlIiwicmVzIiwibCIsIm1ldGEiLCJib3VuZHMiLCJsZW5ndGgiLCJuZXdCb3VuZHMiLCJiIiwiTWF0aCIsIm1pbiIsIm1heCIsImdldExhdExuZ0JvdW5kcyIsInBvaW50cyIsImlkeCIsImxpbWl0IiwibGF0cyIsIm1hcCIsImQiLCJBcnJheSIsImlzQXJyYXkiLCJmaWx0ZXIiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNvcnQiLCJudW1iZXJTb3J0IiwiZmxvb3IiLCJjZWlsIiwiY2xhbXAiLCJ2YWwiLCJnZXRTYW1wbGVEYXRhIiwiZGF0YSIsInNhbXBsZVNpemUiLCJnZXRWYWx1ZSIsInNhbXBsZVN0ZXAiLCJvdXRwdXQiLCJpIiwidGltZVRvVW5peE1pbGxpIiwidmFsdWUiLCJmb3JtYXQiLCJtb21lbnQiLCJ1dGMiLCJ2YWx1ZU9mIiwibWF5YmVUb0RhdGUiLCJpc1RpbWUiLCJmaWVsZElkeCIsInVuZGVmaW5lZCIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJPYmplY3QiLCJhIiwiZ2V0U29ydGluZ0Z1bmN0aW9uIiwiZmllbGRUeXBlIiwiQUxMX0ZJRUxEX1RZUEVTIiwicmVhbCIsImludGVnZXIiLCJ0aW1lc3RhbXAiLCJwcmVjaXNlUm91bmQiLCJudW0iLCJkZWNpbWFscyIsInQiLCJwb3ciLCJyb3VuZCIsInNpZ24iLCJ0b0ZpeGVkIiwiZ2V0Um91bmRpbmdEZWNpbWFsRnJvbVN0ZXAiLCJzdGVwIiwiaXNOYU4iLCJzcGxpdFplcm8iLCJ0b1N0cmluZyIsInNwbGl0Iiwicm91bmRWYWxUb1N0ZXAiLCJtaW5WYWx1ZSIsImRlY2ltYWwiLCJzdGVwcyIsInJlbWFpbiIsImNsb3Nlc3QiLCJyb3VuZGVkIiwiaWRlbnRpdHkiLCJGSUVMRF9ESVNQTEFZX0ZPUk1BVCIsInN0cmluZyIsIlN0cmluZyIsImRhdGUiLCJnZW9qc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlRmllbGRWYWx1ZSIsInR5cGUiLCJhcnJheU1vdmVNdXRhdGUiLCJhcnJheSIsImZyb20iLCJ0byIsInNwbGljZSIsImFycmF5TW92ZSIsInNsaWNlIiwiZmluZEZpcnN0Tm9uZUVtcHR5IiwiY291bnQiLCJjIiwiZm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsQ0FBQyxFQUF0QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxHQUF0QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxDQUFDLEdBQXZCO0FBRUE7Ozs7Ozs7QUFNTyxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUM3QixNQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxPQUFQLENBQWUsVUFBQUMsQ0FBQyxFQUFJO0FBQ2xCLFFBQUksQ0FBQ0YsT0FBTyxDQUFDRyxRQUFSLENBQWlCRCxDQUFqQixDQUFELElBQXdCRSxrQkFBa0IsQ0FBQ0YsQ0FBRCxDQUE5QyxFQUFtRDtBQUNqREYsTUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWFILENBQWI7QUFDRDtBQUNGLEdBSkQ7QUFNQSxTQUFPRixPQUFQO0FBQ0Q7QUFFRDs7QUFDQTs7Ozs7Ozs7QUFNTyxTQUFTTSxhQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUNwQztBQUNBO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVB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LEtBQUssQ0FBQ3JHLElBQU4sQ0FBV3lDLEtBQVg7QUFDRDs7QUFDRDJELElBQUFBLENBQUM7QUFDRjs7QUFDRCxTQUFPQyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBNQVhfTEFUSVRVREUgPSA5MDtcbmNvbnN0IE1JTl9MQVRJVFVERSA9IC05MDtcbmNvbnN0IE1BWF9MT05HSVRVREUgPSAxODA7XG5jb25zdCBNSU5fTE9OR0lUVURFID0gLTE4MDtcblxuLyoqXG4gKiBzaW1wbGUgZ2V0dGluZyB1bmlxdWUgdmFsdWVzIG9mIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHthcnJheX0gdmFsdWVzXG4gKiBAcmV0dXJucyB7YXJyYXl9IHVuaXF1ZSB2YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZSh2YWx1ZXMpIHtcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICB2YWx1ZXMuZm9yRWFjaCh2ID0+IHtcbiAgICBpZiAoIXJlc3VsdHMuaW5jbHVkZXModikgJiYgbm90TnVsbG9yVW5kZWZpbmVkKHYpKSB7XG4gICAgICByZXN1bHRzLnB1c2godik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMgKi9cbi8qKlxuICogcmV0dXJuIGNlbnRlciBvZiBtYXAgZnJvbSBnaXZlbiBwb2ludHNcbiAqIEBwYXJhbSB7YXJyYXl9IGxheWVyc1xuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFJZFxuICogQHJldHVybnMge29iamVjdH0gY29vcmRpbmF0ZXMgb2YgbWFwIGNlbnRlciwgZW1wdHkgaWYgbm90IGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTWFwQm91bmRzKGxheWVycykge1xuICAvLyBmaW5kIGJvdW5kcyBpbiBmb3JtYXR0ZWQgbGF5ZXJEYXRhXG4gIC8vIHRha2UgQUxMIGxheWVycyBpbnRvIGFjY291bnQgd2hlbiBmaW5kaW5nIG1hcCBib3VuZHNcbiAgY29uc3QgYXZhaWxhYmxlTGF5ZXJCb3VuZHMgPSBsYXllcnMucmVkdWNlKChyZXMsIGwpID0+IHtcbiAgICBpZiAobC5tZXRhICYmIGwubWV0YS5ib3VuZHMpIHtcbiAgICAgIHJlcy5wdXNoKGwubWV0YS5ib3VuZHMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9LCBbXSk7XG4gIC8vIHJldHVybiBudWxsIGlmIG5vIGxheWVyIGlzIGF2YWlsYWJsZVxuICBpZiAoYXZhaWxhYmxlTGF5ZXJCb3VuZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gbWVyZ2UgYm91bmRzIGluIGVhY2ggbGF5ZXJcbiAgY29uc3QgbmV3Qm91bmRzID0gYXZhaWxhYmxlTGF5ZXJCb3VuZHMucmVkdWNlKFxuICAgIChyZXMsIGIpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIE1hdGgubWluKHJlc1swXSwgYlswXSksXG4gICAgICAgIE1hdGgubWluKHJlc1sxXSwgYlsxXSksXG4gICAgICAgIE1hdGgubWF4KHJlc1syXSwgYlsyXSksXG4gICAgICAgIE1hdGgubWF4KHJlc1szXSwgYlszXSlcbiAgICAgIF07XG4gICAgfSxcbiAgICBbTUFYX0xPTkdJVFVERSwgTUFYX0xBVElUVURFLCBNSU5fTE9OR0lUVURFLCBNSU5fTEFUSVRVREVdXG4gICk7XG4gIHJldHVybiBuZXdCb3VuZHM7XG59XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCBpZHgsIGxpbWl0KSB7XG4gIGNvbnN0IGxhdHMgPSBwb2ludHNcbiAgICAubWFwKGQgPT4gQXJyYXkuaXNBcnJheShkKSAmJiBkW2lkeF0pXG4gICAgLmZpbHRlcihOdW1iZXIuaXNGaW5pdGUpXG4gICAgLnNvcnQobnVtYmVyU29ydCk7XG5cbiAgaWYgKCFsYXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIHVzZSA5OSBwZXJjZW50aWxlIHRvIGZpbHRlciBvdXQgb3V0bGllcnNcbiAgLy8gY2xhbXAgdG8gbGltaXRcbiAgcmV0dXJuIFtcbiAgICBNYXRoLm1heChsYXRzW01hdGguZmxvb3IoMC4wMSAqIChsYXRzLmxlbmd0aCAtIDEpKV0sIGxpbWl0WzBdKSxcbiAgICBNYXRoLm1pbihsYXRzW01hdGguY2VpbCgwLjk5ICogKGxhdHMubGVuZ3RoIC0gMSkpXSwgbGltaXRbMV0pXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChbbWluLCBtYXhdLCB2YWwpIHtcbiAgcmV0dXJuIHZhbCA8PSBtaW4gPyBtaW4gOiB2YWwgPj0gbWF4ID8gbWF4IDogdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FtcGxlRGF0YShkYXRhLCBzYW1wbGVTaXplID0gNTAwLCBnZXRWYWx1ZSA9IGQgPT4gZCkge1xuICBjb25zdCBzYW1wbGVTdGVwID0gTWF0aC5tYXgoTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHNhbXBsZVNpemUpLCAxKTtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gc2FtcGxlU3RlcCkge1xuICAgIG91dHB1dC5wdXNoKGdldFZhbHVlKGRhdGFbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQ29udmVydCBkaWZmZXJlbnQgdGltZSBmb3JtYXQgdG8gdW5peCBtaWxsaXNlY29uZHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Kn0gZm9ybWF0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lVG9Vbml4TWlsbGkodmFsdWUsIGZvcm1hdCkge1xuICBpZiAobm90TnVsbG9yVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICA/IG1vbWVudC51dGModmFsdWUsIGZvcm1hdCkudmFsdWVPZigpXG4gICAgICA6IGZvcm1hdCA9PT0gJ3gnXG4gICAgICA/IHZhbHVlICogMTAwMFxuICAgICAgOiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlVG9EYXRlKGlzVGltZSwgZmllbGRJZHgsIGZvcm1hdCwgZCkge1xuICBpZiAoaXNUaW1lKSB7XG4gICAgcmV0dXJuIHRpbWVUb1VuaXhNaWxsaShkW2ZpZWxkSWR4XSwgZm9ybWF0KTtcbiAgfVxuXG4gIHJldHVybiBkW2ZpZWxkSWR4XTtcbn1cblxuLyoqXG4gKiB3aGV0aGVyIG51bGwgb3IgdW5kZWZpbmVkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB5ZXMgb3Igbm9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdE51bGxvclVuZGVmaW5lZChkKSB7XG4gIHJldHVybiBkICE9PSB1bmRlZmluZWQgJiYgZCAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclNvcnQoYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0aW5nRnVuY3Rpb24oZmllbGRUeXBlKSB7XG4gIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMucmVhbDpcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyOlxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcbiAgICAgIHJldHVybiBudW1iZXJTb3J0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogcm91bmQgbnVtYmVyIHdpdGggZXhhY3QgbnVtYmVyIG9mIGRlY2ltYWxzXG4gKiByZXR1cm4gYXMgYSBzdHJpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWNpbWFsc1xuICogQHJldHVybnMge3N0cmluZ30gLSBhIHJvdW5kZWQgbnVtYmVyIGluIHN0cmluZyBmb3JtYXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWNpc2VSb3VuZChudW0sIGRlY2ltYWxzKSB7XG4gIGNvbnN0IHQgPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICByZXR1cm4gKFxuICAgIE1hdGgucm91bmQoXG4gICAgICBudW0gKiB0ICsgKGRlY2ltYWxzID4gMCA/IDEgOiAwKSAqIChNYXRoLnNpZ24obnVtKSAqICgxMCAvIE1hdGgucG93KDEwMCwgZGVjaW1hbHMpKSlcbiAgICApIC8gdFxuICApLnRvRml4ZWQoZGVjaW1hbHMpO1xufVxuXG4vKipcbiAqIGdldCBudW1iZXIgb2YgZGVjaW1hbHMgdG8gcm91bmQgdG8gZm9yIHNsaWRlciBmcm9tIHN0ZXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIG51bWJlciBvZiBkZWNpbWFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ0RlY2ltYWxGcm9tU3RlcChzdGVwKSB7XG4gIGlmIChpc05hTihzdGVwKSkge1xuICAgIGFzc2VydCgnc3RlcCBpcyBub3QgYSBudW1iZXInKTtcbiAgICBhc3NlcnQoc3RlcCk7XG4gIH1cblxuICBjb25zdCBzcGxpdFplcm8gPSBzdGVwLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgaWYgKHNwbGl0WmVyby5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gc3BsaXRaZXJvWzFdLmxlbmd0aDtcbn1cblxuLyoqXG4gKiByb3VuZCB0aGUgdmFsdWUgdG8gc3RlcCBmb3IgdGhlIHNsaWRlclxuICogQHBhcmFtIHtudW1iZXJ9IG1pblZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RlcFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICogQHJldHVybnMge251bWJlcn0gLSByb3VuZGVkIG51bWJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmRWYWxUb1N0ZXAobWluVmFsdWUsIHN0ZXAsIHZhbCkge1xuICBpZiAoaXNOYU4oc3RlcCkpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgY29uc3QgZGVjaW1hbCA9IGdldFJvdW5kaW5nRGVjaW1hbEZyb21TdGVwKHN0ZXApO1xuICBjb25zdCBzdGVwcyA9IE1hdGguZmxvb3IoKHZhbCAtIG1pblZhbHVlKSAvIHN0ZXApO1xuICBsZXQgcmVtYWluID0gdmFsIC0gKHN0ZXBzICogc3RlcCArIG1pblZhbHVlKTtcblxuICAvLyBoYXMgdG8gcm91bmQgYmVjYXVzZSBqYXZhc2NyaXB0IHR1cm5zIDAuMSBpbnRvIDAuOTk5OTk5OTk5OTk5OTk4N1xuICByZW1haW4gPSBOdW1iZXIocHJlY2lzZVJvdW5kKHJlbWFpbiwgOCkpO1xuXG4gIGxldCBjbG9zZXN0O1xuICBpZiAocmVtYWluID09PSAwKSB7XG4gICAgY2xvc2VzdCA9IHZhbDtcbiAgfSBlbHNlIGlmIChyZW1haW4gPCBzdGVwIC8gMikge1xuICAgIGNsb3Nlc3QgPSBzdGVwcyAqIHN0ZXAgKyBtaW5WYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBjbG9zZXN0ID0gKHN0ZXBzICsgMSkgKiBzdGVwICsgbWluVmFsdWU7XG4gIH1cblxuICAvLyBwcmVjaXNlIHJvdW5kIHJldHVybiBhIHN0cmluZyByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIGRlY2ltYWxcbiAgY29uc3Qgcm91bmRlZCA9IHByZWNpc2VSb3VuZChjbG9zZXN0LCBkZWNpbWFsKTtcblxuICByZXR1cm4gTnVtYmVyKHJvdW5kZWQpO1xufVxuXG5jb25zdCBpZGVudGl0eSA9IGQgPT4gZDtcblxuZXhwb3J0IGNvbnN0IEZJRUxEX0RJU1BMQVlfRk9STUFUID0ge1xuICBbQUxMX0ZJRUxEX1RZUEVTLnN0cmluZ106IGlkZW50aXR5LFxuICBbQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcF06IGlkZW50aXR5LFxuICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiBpZGVudGl0eSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogaWRlbnRpdHksXG4gIFtBTExfRklFTERfVFlQRVMuYm9vbGVhbl06IGQgPT4gU3RyaW5nKGQpLFxuICBbQUxMX0ZJRUxEX1RZUEVTLmRhdGVdOiBpZGVudGl0eSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5nZW9qc29uXTogZCA9PlxuICAgIHR5cGVvZiBkID09PSAnc3RyaW5nJ1xuICAgICAgPyBkXG4gICAgICA6IGlzUGxhaW5PYmplY3QoZClcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkoZClcbiAgICAgIDogQXJyYXkuaXNBcnJheShkKVxuICAgICAgPyBgWyR7U3RyaW5nKGQpfV1gXG4gICAgICA6ICcnXG59O1xuXG4vKipcbiAqIFBhcnNlIGZpZWxkIHZhbHVlIGFuZCB0eXBlIGFuZCByZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgZmllbGQgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHRoZSBmaWVsZCB0eXBlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VGaWVsZFZhbHVlID0gKHZhbHVlLCB0eXBlKSA9PiB7XG4gIGlmICghbm90TnVsbG9yVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBGSUVMRF9ESVNQTEFZX0ZPUk1BVFt0eXBlXSA/IEZJRUxEX0RJU1BMQVlfRk9STUFUW3R5cGVdKHZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG59O1xuXG5jb25zdCBhcnJheU1vdmVNdXRhdGUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpO1xuICBhcnJheU1vdmVNdXRhdGUoYXJyYXksIGZyb20sIHRvKTtcbiAgcmV0dXJuIGFycmF5O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdE5vbmVFbXB0eShkYXRhLCBjb3VudCA9IDEsIGdldFZhbHVlID0gaWRlbnRpdHkpIHtcbiAgbGV0IGMgPSAwO1xuICBjb25zdCBmb3VuZCA9IFtdO1xuICB3aGlsZSAoYyA8IGNvdW50ICYmIGMgPCBkYXRhLmxlbmd0aCkge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZGF0YVtjXSk7XG4gICAgaWYgKG5vdE51bGxvclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgIGZvdW5kLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBjKys7XG4gIH1cbiAgcmV0dXJuIGZvdW5kO1xufVxuIl19