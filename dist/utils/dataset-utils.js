"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewDataEntry = createNewDataEntry;
exports.removeSuffixAndDelimiters = removeSuffixAndDelimiters;
exports.findPointFieldPairs = findPointFieldPairs;
exports.datasetColorMaker = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _colorUtils = require("./color-utils");

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _defaultSettings = require("../constants/default-settings");

var _utils = require("./utils");

var _dataProcessor = require("../processors/data-processor");

var _gpuFilterUtils = require("./gpu-filter-utils");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

// apply a color for each dataset
// to use as label colors
var datasetColors = ['#8F2FBF', '#005CFF', '#C06C84', '#F8B195', '#547A82', '#3EACA8', '#A2D4AB'].map(_colorUtils.hexToRgb);
/**
 * Random color generator
 */

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < datasetColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === datasetColors.length) {
            index = 0;
          }

          _context.next = 5;
          return datasetColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var datasetColorMaker = generateColor();
exports.datasetColorMaker = datasetColorMaker;

function getNewDatasetColor(datasets) {
  var presetColors = datasetColors.map(String);
  var usedColors = (0, _lodash["default"])(Object.values(datasets).map(function (d) {
    return String(d.color);
  })).filter(function (c) {
    return presetColors.includes(c);
  });

  if (usedColors.length === presetColors.length) {
    // if we already depleted the pool of color
    return datasetColorMaker.next().value;
  }

  var color = datasetColorMaker.next().value;

  while (usedColors.includes(String(color))) {
    color = datasetColorMaker.next().value;
  }

  return color;
}

function createNewDataEntry(_ref) {
  var _ref$info = _ref.info,
      info = _ref$info === void 0 ? {} : _ref$info,
      data = _ref.data;
  var datasets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var validatedData = (0, _dataProcessor.validateInputData)(data);

  if (!validatedData) {
    return {};
  }

  var allData = validatedData.rows;

  var datasetInfo = _objectSpread({
    id: (0, _utils.generateHashId)(4),
    label: 'new dataset'
  }, info);

  var dataId = datasetInfo.id; // add tableFieldIndex and id to fields
  // TODO: don't need id and name and tableFieldIndex anymore
  // Add value accessor instead

  var fields = validatedData.fields.map(function (f, i) {
    return _objectSpread({}, f, {
      id: f.name,
      tableFieldIndex: i + 1
    });
  });
  var allIndexes = allData.map(function (_, i) {
    return i;
  });
  return (0, _defineProperty2["default"])({}, dataId, _objectSpread({}, datasetInfo, {
    color: datasetInfo.color || getNewDatasetColor(datasets),
    id: dataId,
    allData: allData,
    allIndexes: allIndexes,
    filteredIndex: allIndexes,
    filteredIndexForDomain: allIndexes,
    fieldPairs: findPointFieldPairs(fields),
    fields: fields,
    gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)([], dataId, fields)
  }));
}

function removeSuffixAndDelimiters(layerName, suffix) {
  return layerName.replace(new RegExp(suffix, 'ig'), '').replace(/[_,.]+/g, ' ').trim();
}
/**
 * Find point fields pairs from fields
 *
 * @param {Array} fields
 * @returns {Array} found point fields
 */


function findPointFieldPairs(fields) {
  var allNames = fields.map(function (f) {
    return f.name.toLowerCase();
  }); // get list of all fields with matching suffixes

  return allNames.reduce(function (carry, fieldName, idx) {
    // This search for pairs will early exit if found.
    var _iterator = _createForOfIteratorHelper(_defaultSettings.TRIP_POINT_FIELDS),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var suffixPair = _step.value;

        // match first suffix```
        if (fieldName.endsWith(suffixPair[0])) {
          var _ret = function () {
            // match second suffix
            var otherPattern = new RegExp("".concat(suffixPair[0], "$"));
            var partner = fieldName.replace(otherPattern, suffixPair[1]);
            var partnerIdx = allNames.findIndex(function (d) {
              return d === partner;
            });

            if (partnerIdx > -1) {
              var defaultName = removeSuffixAndDelimiters(fieldName, suffixPair[0]);
              carry.push({
                defaultName: defaultName,
                pair: {
                  lat: {
                    fieldIdx: idx,
                    value: fields[idx].name
                  },
                  lng: {
                    fieldIdx: partnerIdx,
                    value: fields[partnerIdx].name
                  }
                },
                suffix: suffixPair
              });
              return {
                v: carry
              };
            }
          }();

          if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return carry;
  }, []);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhc2V0LXV0aWxzLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlQ29sb3IiLCJkYXRhc2V0Q29sb3JzIiwibWFwIiwiaGV4VG9SZ2IiLCJpbmRleCIsImxlbmd0aCIsImRhdGFzZXRDb2xvck1ha2VyIiwiZ2V0TmV3RGF0YXNldENvbG9yIiwiZGF0YXNldHMiLCJwcmVzZXRDb2xvcnMiLCJTdHJpbmciLCJ1c2VkQ29sb3JzIiwiT2JqZWN0IiwidmFsdWVzIiwiZCIsImNvbG9yIiwiZmlsdGVyIiwiYyIsImluY2x1ZGVzIiwibmV4dCIsInZhbHVlIiwiY3JlYXRlTmV3RGF0YUVudHJ5IiwiaW5mbyIsImRhdGEiLCJ2YWxpZGF0ZWREYXRhIiwiYWxsRGF0YSIsInJvd3MiLCJkYXRhc2V0SW5mbyIsImlkIiwibGFiZWwiLCJkYXRhSWQiLCJmaWVsZHMiLCJmIiwiaSIsIm5hbWUiLCJ0YWJsZUZpZWxkSW5kZXgiLCJhbGxJbmRleGVzIiwiXyIsImZpbHRlcmVkSW5kZXgiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiZmllbGRQYWlycyIsImZpbmRQb2ludEZpZWxkUGFpcnMiLCJncHVGaWx0ZXIiLCJyZW1vdmVTdWZmaXhBbmREZWxpbWl0ZXJzIiwibGF5ZXJOYW1lIiwic3VmZml4IiwicmVwbGFjZSIsIlJlZ0V4cCIsInRyaW0iLCJhbGxOYW1lcyIsInRvTG93ZXJDYXNlIiwicmVkdWNlIiwiY2FycnkiLCJmaWVsZE5hbWUiLCJpZHgiLCJUUklQX1BPSU5UX0ZJRUxEUyIsInN1ZmZpeFBhaXIiLCJlbmRzV2l0aCIsIm90aGVyUGF0dGVybiIsInBhcnRuZXIiLCJwYXJ0bmVySWR4IiwiZmluZEluZGV4IiwiZGVmYXVsdE5hbWUiLCJwdXNoIiwicGFpciIsImxhdCIsImZpZWxkSWR4IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7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O0FBWkMsZUFBWDtBQWNBO0FBQUEsbUJBQU9KO0FBQVA7QUFDRDtBQXhCb0M7O0FBQUE7QUF5QnRDO0FBQ0Y7QUE5QitDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBK0JoRCxXQUFPQSxLQUFQO0FBQ0QsR0FoQ00sRUFnQ0osRUFoQ0ksQ0FBUDtBQWlDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJy4vY29sb3ItdXRpbHMnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IHtUUklQX1BPSU5UX0ZJRUxEU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge3ZhbGlkYXRlSW5wdXREYXRhfSBmcm9tICdwcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yJztcbmltcG9ydCB7Z2V0R3B1RmlsdGVyUHJvcHN9IGZyb20gJ3V0aWxzL2dwdS1maWx0ZXItdXRpbHMnO1xuXG4vLyBhcHBseSBhIGNvbG9yIGZvciBlYWNoIGRhdGFzZXRcbi8vIHRvIHVzZSBhcyBsYWJlbCBjb2xvcnNcbmNvbnN0IGRhdGFzZXRDb2xvcnMgPSBbXG4gICcjOEYyRkJGJyxcbiAgJyMwMDVDRkYnLFxuICAnI0MwNkM4NCcsXG4gICcjRjhCMTk1JyxcbiAgJyM1NDdBODInLFxuICAnIzNFQUNBOCcsXG4gICcjQTJENEFCJ1xuXS5tYXAoaGV4VG9SZ2IpO1xuXG4vKipcbiAqIFJhbmRvbSBjb2xvciBnZW5lcmF0b3JcbiAqL1xuZnVuY3Rpb24qIGdlbmVyYXRlQ29sb3IoKSB7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChpbmRleCA8IGRhdGFzZXRDb2xvcnMubGVuZ3RoICsgMSkge1xuICAgIGlmIChpbmRleCA9PT0gZGF0YXNldENvbG9ycy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgeWllbGQgZGF0YXNldENvbG9yc1tpbmRleCsrXTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0YXNldENvbG9yTWFrZXIgPSBnZW5lcmF0ZUNvbG9yKCk7XG5cbmZ1bmN0aW9uIGdldE5ld0RhdGFzZXRDb2xvcihkYXRhc2V0cykge1xuICBjb25zdCBwcmVzZXRDb2xvcnMgPSBkYXRhc2V0Q29sb3JzLm1hcChTdHJpbmcpO1xuICBjb25zdCB1c2VkQ29sb3JzID0gdW5pcShPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoZCA9PiBTdHJpbmcoZC5jb2xvcikpKS5maWx0ZXIoYyA9PlxuICAgIHByZXNldENvbG9ycy5pbmNsdWRlcyhjKVxuICApO1xuXG4gIGlmICh1c2VkQ29sb3JzLmxlbmd0aCA9PT0gcHJlc2V0Q29sb3JzLmxlbmd0aCkge1xuICAgIC8vIGlmIHdlIGFscmVhZHkgZGVwbGV0ZWQgdGhlIHBvb2wgb2YgY29sb3JcbiAgICByZXR1cm4gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xuICB9XG5cbiAgbGV0IGNvbG9yID0gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xuICB3aGlsZSAodXNlZENvbG9ycy5pbmNsdWRlcyhTdHJpbmcoY29sb3IpKSkge1xuICAgIGNvbG9yID0gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3RGF0YUVudHJ5KHtpbmZvID0ge30sIGRhdGF9LCBkYXRhc2V0cyA9IHt9KSB7XG4gIGNvbnN0IHZhbGlkYXRlZERhdGEgPSB2YWxpZGF0ZUlucHV0RGF0YShkYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWREYXRhKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3QgYWxsRGF0YSA9IHZhbGlkYXRlZERhdGEucm93cztcbiAgY29uc3QgZGF0YXNldEluZm8gPSB7XG4gICAgaWQ6IGdlbmVyYXRlSGFzaElkKDQpLFxuICAgIGxhYmVsOiAnbmV3IGRhdGFzZXQnLFxuICAgIC4uLmluZm9cbiAgfTtcbiAgY29uc3QgZGF0YUlkID0gZGF0YXNldEluZm8uaWQ7XG5cbiAgLy8gYWRkIHRhYmxlRmllbGRJbmRleCBhbmQgaWQgdG8gZmllbGRzXG4gIC8vIFRPRE86IGRvbid0IG5lZWQgaWQgYW5kIG5hbWUgYW5kIHRhYmxlRmllbGRJbmRleCBhbnltb3JlXG4gIC8vIEFkZCB2YWx1ZSBhY2Nlc3NvciBpbnN0ZWFkXG4gIGNvbnN0IGZpZWxkcyA9IHZhbGlkYXRlZERhdGEuZmllbGRzLm1hcCgoZiwgaSkgPT4gKHtcbiAgICAuLi5mLFxuICAgIGlkOiBmLm5hbWUsXG4gICAgdGFibGVGaWVsZEluZGV4OiBpICsgMVxuICB9KSk7XG5cbiAgY29uc3QgYWxsSW5kZXhlcyA9IGFsbERhdGEubWFwKChfLCBpKSA9PiBpKTtcbiAgcmV0dXJuIHtcbiAgICBbZGF0YUlkXToge1xuICAgICAgLi4uZGF0YXNldEluZm8sXG4gICAgICBjb2xvcjogZGF0YXNldEluZm8uY29sb3IgfHwgZ2V0TmV3RGF0YXNldENvbG9yKGRhdGFzZXRzKSxcbiAgICAgIGlkOiBkYXRhSWQsXG4gICAgICBhbGxEYXRhLFxuICAgICAgYWxsSW5kZXhlcyxcbiAgICAgIGZpbHRlcmVkSW5kZXg6IGFsbEluZGV4ZXMsXG4gICAgICBmaWx0ZXJlZEluZGV4Rm9yRG9tYWluOiBhbGxJbmRleGVzLFxuICAgICAgZmllbGRQYWlyczogZmluZFBvaW50RmllbGRQYWlycyhmaWVsZHMpLFxuICAgICAgZmllbGRzLFxuICAgICAgZ3B1RmlsdGVyOiBnZXRHcHVGaWx0ZXJQcm9wcyhbXSwgZGF0YUlkLCBmaWVsZHMpXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3VmZml4QW5kRGVsaW1pdGVycyhsYXllck5hbWUsIHN1ZmZpeCkge1xuICByZXR1cm4gbGF5ZXJOYW1lXG4gICAgLnJlcGxhY2UobmV3IFJlZ0V4cChzdWZmaXgsICdpZycpLCAnJylcbiAgICAucmVwbGFjZSgvW18sLl0rL2csICcgJylcbiAgICAudHJpbSgpO1xufVxuXG4vKipcbiAqIEZpbmQgcG9pbnQgZmllbGRzIHBhaXJzIGZyb20gZmllbGRzXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZmllbGRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGZvdW5kIHBvaW50IGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFBvaW50RmllbGRQYWlycyhmaWVsZHMpIHtcbiAgY29uc3QgYWxsTmFtZXMgPSBmaWVsZHMubWFwKGYgPT4gZi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuXG4gIC8vIGdldCBsaXN0IG9mIGFsbCBmaWVsZHMgd2l0aCBtYXRjaGluZyBzdWZmaXhlc1xuICByZXR1cm4gYWxsTmFtZXMucmVkdWNlKChjYXJyeSwgZmllbGROYW1lLCBpZHgpID0+IHtcbiAgICAvLyBUaGlzIHNlYXJjaCBmb3IgcGFpcnMgd2lsbCBlYXJseSBleGl0IGlmIGZvdW5kLlxuICAgIGZvciAoY29uc3Qgc3VmZml4UGFpciBvZiBUUklQX1BPSU5UX0ZJRUxEUykge1xuICAgICAgLy8gbWF0Y2ggZmlyc3Qgc3VmZml4YGBgXG4gICAgICBpZiAoZmllbGROYW1lLmVuZHNXaXRoKHN1ZmZpeFBhaXJbMF0pKSB7XG4gICAgICAgIC8vIG1hdGNoIHNlY29uZCBzdWZmaXhcbiAgICAgICAgY29uc3Qgb3RoZXJQYXR0ZXJuID0gbmV3IFJlZ0V4cChgJHtzdWZmaXhQYWlyWzBdfVxcJGApO1xuICAgICAgICBjb25zdCBwYXJ0bmVyID0gZmllbGROYW1lLnJlcGxhY2Uob3RoZXJQYXR0ZXJuLCBzdWZmaXhQYWlyWzFdKTtcblxuICAgICAgICBjb25zdCBwYXJ0bmVySWR4ID0gYWxsTmFtZXMuZmluZEluZGV4KGQgPT4gZCA9PT0gcGFydG5lcik7XG4gICAgICAgIGlmIChwYXJ0bmVySWR4ID4gLTEpIHtcbiAgICAgICAgICBjb25zdCBkZWZhdWx0TmFtZSA9IHJlbW92ZVN1ZmZpeEFuZERlbGltaXRlcnMoZmllbGROYW1lLCBzdWZmaXhQYWlyWzBdKTtcblxuICAgICAgICAgIGNhcnJ5LnB1c2goe1xuICAgICAgICAgICAgZGVmYXVsdE5hbWUsXG4gICAgICAgICAgICBwYWlyOiB7XG4gICAgICAgICAgICAgIGxhdDoge1xuICAgICAgICAgICAgICAgIGZpZWxkSWR4OiBpZHgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkc1tpZHhdLm5hbWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbG5nOiB7XG4gICAgICAgICAgICAgICAgZmllbGRJZHg6IHBhcnRuZXJJZHgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkc1twYXJ0bmVySWR4XS5uYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeFBhaXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY2Fycnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhcnJ5O1xuICB9LCBbXSk7XG59XG4iXX0=