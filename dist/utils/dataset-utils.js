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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhc2V0LXV0aWxzLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlQ29sb3IiLCJkYXRhc2V0Q29sb3JzIiwibWFwIiwiaGV4VG9SZ2IiLCJpbmRleCIsImxlbmd0aCIsImRhdGFzZXRDb2xvck1ha2VyIiwiZ2V0TmV3RGF0YXNldENvbG9yIiwiZGF0YXNldHMiLCJwcmVzZXRDb2xvcnMiLCJTdHJpbmciLCJ1c2VkQ29sb3JzIiwiT2JqZWN0IiwidmFsdWVzIiwiZCIsImNvbG9yIiwiZmlsdGVyIiwiYyIsImluY2x1ZGVzIiwibmV4dCIsInZhbHVlIiwiY3JlYXRlTmV3RGF0YUVudHJ5IiwiaW5mbyIsImRhdGEiLCJ2YWxpZGF0ZWREYXRhIiwiYWxsRGF0YSIsInJvd3MiLCJkYXRhc2V0SW5mbyIsImlkIiwibGFiZWwiLCJkYXRhSWQiLCJmaWVsZHMiLCJmIiwiaSIsIm5hbWUiLCJ0YWJsZUZpZWxkSW5kZXgiLCJhbGxJbmRleGVzIiwiXyIsImZpbHRlcmVkSW5kZXgiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiZmllbGRQYWlycyIsImZpbmRQb2ludEZpZWxkUGFpcnMiLCJncHVGaWx0ZXIiLCJyZW1vdmVTdWZmaXhBbmREZWxpbWl0ZXJzIiwibGF5ZXJOYW1lIiwic3VmZml4IiwicmVwbGFjZSIsIlJlZ0V4cCIsInRyaW0iLCJhbGxOYW1lcyIsInRvTG93ZXJDYXNlIiwicmVkdWNlIiwiY2FycnkiLCJmaWVsZE5hbWUiLCJpZHgiLCJUUklQX1BPSU5UX0ZJRUxEUyIsInN1ZmZpeFBhaXIiLCJlbmRzV2l0aCIsIm90aGVyUGF0dGVybiIsInBhcnRuZXIiLCJwYXJ0bmVySWR4IiwiZmluZEluZGV4IiwiZGVmYXVsdE5hbWUiLCJwdXNoIiwicGFpciIsImxhdCIsImZpZWxkSWR4IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7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O0FBWkMsZUFBWDtBQWNBO0FBQUEsbUJBQU9KO0FBQVA7QUFDRDtBQXhCb0M7O0FBQUE7QUF5QnRDO0FBQ0Y7QUE5QitDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBK0JoRCxXQUFPQSxLQUFQO0FBQ0QsR0FoQ00sRUFnQ0osRUFoQ0ksQ0FBUDtBQWlDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJy4vY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XHJcbmltcG9ydCB7VFJJUF9QT0lOVF9GSUVMRFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7dmFsaWRhdGVJbnB1dERhdGF9IGZyb20gJ3Byb2Nlc3NvcnMvZGF0YS1wcm9jZXNzb3InO1xyXG5pbXBvcnQge2dldEdwdUZpbHRlclByb3BzfSBmcm9tICd1dGlscy9ncHUtZmlsdGVyLXV0aWxzJztcclxuXHJcbi8vIGFwcGx5IGEgY29sb3IgZm9yIGVhY2ggZGF0YXNldFxyXG4vLyB0byB1c2UgYXMgbGFiZWwgY29sb3JzXHJcbmNvbnN0IGRhdGFzZXRDb2xvcnMgPSBbXHJcbiAgJyM4RjJGQkYnLFxyXG4gICcjMDA1Q0ZGJyxcclxuICAnI0MwNkM4NCcsXHJcbiAgJyNGOEIxOTUnLFxyXG4gICcjNTQ3QTgyJyxcclxuICAnIzNFQUNBOCcsXHJcbiAgJyNBMkQ0QUInXHJcbl0ubWFwKGhleFRvUmdiKTtcclxuXHJcbi8qKlxyXG4gKiBSYW5kb20gY29sb3IgZ2VuZXJhdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiogZ2VuZXJhdGVDb2xvcigpIHtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIHdoaWxlIChpbmRleCA8IGRhdGFzZXRDb2xvcnMubGVuZ3RoICsgMSkge1xyXG4gICAgaWYgKGluZGV4ID09PSBkYXRhc2V0Q29sb3JzLmxlbmd0aCkge1xyXG4gICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICB5aWVsZCBkYXRhc2V0Q29sb3JzW2luZGV4KytdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFzZXRDb2xvck1ha2VyID0gZ2VuZXJhdGVDb2xvcigpO1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV3RGF0YXNldENvbG9yKGRhdGFzZXRzKSB7XHJcbiAgY29uc3QgcHJlc2V0Q29sb3JzID0gZGF0YXNldENvbG9ycy5tYXAoU3RyaW5nKTtcclxuICBjb25zdCB1c2VkQ29sb3JzID0gdW5pcShPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoZCA9PiBTdHJpbmcoZC5jb2xvcikpKS5maWx0ZXIoYyA9PlxyXG4gICAgcHJlc2V0Q29sb3JzLmluY2x1ZGVzKGMpXHJcbiAgKTtcclxuXHJcbiAgaWYgKHVzZWRDb2xvcnMubGVuZ3RoID09PSBwcmVzZXRDb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAvLyBpZiB3ZSBhbHJlYWR5IGRlcGxldGVkIHRoZSBwb29sIG9mIGNvbG9yXHJcbiAgICByZXR1cm4gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvbG9yID0gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xyXG4gIHdoaWxlICh1c2VkQ29sb3JzLmluY2x1ZGVzKFN0cmluZyhjb2xvcikpKSB7XHJcbiAgICBjb2xvciA9IGRhdGFzZXRDb2xvck1ha2VyLm5leHQoKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb2xvcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0RhdGFFbnRyeSh7aW5mbyA9IHt9LCBkYXRhfSwgZGF0YXNldHMgPSB7fSkge1xyXG4gIGNvbnN0IHZhbGlkYXRlZERhdGEgPSB2YWxpZGF0ZUlucHV0RGF0YShkYXRhKTtcclxuICBpZiAoIXZhbGlkYXRlZERhdGEpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFsbERhdGEgPSB2YWxpZGF0ZWREYXRhLnJvd3M7XHJcbiAgY29uc3QgZGF0YXNldEluZm8gPSB7XHJcbiAgICBpZDogZ2VuZXJhdGVIYXNoSWQoNCksXHJcbiAgICBsYWJlbDogJ25ldyBkYXRhc2V0JyxcclxuICAgIC4uLmluZm9cclxuICB9O1xyXG4gIGNvbnN0IGRhdGFJZCA9IGRhdGFzZXRJbmZvLmlkO1xyXG5cclxuICAvLyBhZGQgdGFibGVGaWVsZEluZGV4IGFuZCBpZCB0byBmaWVsZHNcclxuICAvLyBUT0RPOiBkb24ndCBuZWVkIGlkIGFuZCBuYW1lIGFuZCB0YWJsZUZpZWxkSW5kZXggYW55bW9yZVxyXG4gIC8vIEFkZCB2YWx1ZSBhY2Nlc3NvciBpbnN0ZWFkXHJcbiAgY29uc3QgZmllbGRzID0gdmFsaWRhdGVkRGF0YS5maWVsZHMubWFwKChmLCBpKSA9PiAoe1xyXG4gICAgLi4uZixcclxuICAgIGlkOiBmLm5hbWUsXHJcbiAgICB0YWJsZUZpZWxkSW5kZXg6IGkgKyAxXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBhbGxJbmRleGVzID0gYWxsRGF0YS5tYXAoKF8sIGkpID0+IGkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBbZGF0YUlkXToge1xyXG4gICAgICAuLi5kYXRhc2V0SW5mbyxcclxuICAgICAgY29sb3I6IGRhdGFzZXRJbmZvLmNvbG9yIHx8IGdldE5ld0RhdGFzZXRDb2xvcihkYXRhc2V0cyksXHJcbiAgICAgIGlkOiBkYXRhSWQsXHJcbiAgICAgIGFsbERhdGEsXHJcbiAgICAgIGFsbEluZGV4ZXMsXHJcbiAgICAgIGZpbHRlcmVkSW5kZXg6IGFsbEluZGV4ZXMsXHJcbiAgICAgIGZpbHRlcmVkSW5kZXhGb3JEb21haW46IGFsbEluZGV4ZXMsXHJcbiAgICAgIGZpZWxkUGFpcnM6IGZpbmRQb2ludEZpZWxkUGFpcnMoZmllbGRzKSxcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBncHVGaWx0ZXI6IGdldEdwdUZpbHRlclByb3BzKFtdLCBkYXRhSWQsIGZpZWxkcylcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3VmZml4QW5kRGVsaW1pdGVycyhsYXllck5hbWUsIHN1ZmZpeCkge1xyXG4gIHJldHVybiBsYXllck5hbWVcclxuICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoc3VmZml4LCAnaWcnKSwgJycpXHJcbiAgICAucmVwbGFjZSgvW18sLl0rL2csICcgJylcclxuICAgIC50cmltKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIHBvaW50IGZpZWxkcyBwYWlycyBmcm9tIGZpZWxkc1xyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBmaWVsZHNcclxuICogQHJldHVybnMge0FycmF5fSBmb3VuZCBwb2ludCBmaWVsZHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kUG9pbnRGaWVsZFBhaXJzKGZpZWxkcykge1xyXG4gIGNvbnN0IGFsbE5hbWVzID0gZmllbGRzLm1hcChmID0+IGYubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgLy8gZ2V0IGxpc3Qgb2YgYWxsIGZpZWxkcyB3aXRoIG1hdGNoaW5nIHN1ZmZpeGVzXHJcbiAgcmV0dXJuIGFsbE5hbWVzLnJlZHVjZSgoY2FycnksIGZpZWxkTmFtZSwgaWR4KSA9PiB7XHJcbiAgICAvLyBUaGlzIHNlYXJjaCBmb3IgcGFpcnMgd2lsbCBlYXJseSBleGl0IGlmIGZvdW5kLlxyXG4gICAgZm9yIChjb25zdCBzdWZmaXhQYWlyIG9mIFRSSVBfUE9JTlRfRklFTERTKSB7XHJcbiAgICAgIC8vIG1hdGNoIGZpcnN0IHN1ZmZpeGBgYFxyXG4gICAgICBpZiAoZmllbGROYW1lLmVuZHNXaXRoKHN1ZmZpeFBhaXJbMF0pKSB7XHJcbiAgICAgICAgLy8gbWF0Y2ggc2Vjb25kIHN1ZmZpeFxyXG4gICAgICAgIGNvbnN0IG90aGVyUGF0dGVybiA9IG5ldyBSZWdFeHAoYCR7c3VmZml4UGFpclswXX1cXCRgKTtcclxuICAgICAgICBjb25zdCBwYXJ0bmVyID0gZmllbGROYW1lLnJlcGxhY2Uob3RoZXJQYXR0ZXJuLCBzdWZmaXhQYWlyWzFdKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFydG5lcklkeCA9IGFsbE5hbWVzLmZpbmRJbmRleChkID0+IGQgPT09IHBhcnRuZXIpO1xyXG4gICAgICAgIGlmIChwYXJ0bmVySWR4ID4gLTEpIHtcclxuICAgICAgICAgIGNvbnN0IGRlZmF1bHROYW1lID0gcmVtb3ZlU3VmZml4QW5kRGVsaW1pdGVycyhmaWVsZE5hbWUsIHN1ZmZpeFBhaXJbMF0pO1xyXG5cclxuICAgICAgICAgIGNhcnJ5LnB1c2goe1xyXG4gICAgICAgICAgICBkZWZhdWx0TmFtZSxcclxuICAgICAgICAgICAgcGFpcjoge1xyXG4gICAgICAgICAgICAgIGxhdDoge1xyXG4gICAgICAgICAgICAgICAgZmllbGRJZHg6IGlkeCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZHNbaWR4XS5uYW1lXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBsbmc6IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkSWR4OiBwYXJ0bmVySWR4LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkc1twYXJ0bmVySWR4XS5uYW1lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeFBhaXJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGNhcnJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhcnJ5O1xyXG4gIH0sIFtdKTtcclxufVxyXG4iXX0=