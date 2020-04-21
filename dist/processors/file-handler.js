"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = readFile;
exports.getFileHandler = getFileHandler;
exports.getFileType = getFileType;
exports.loadCsv = loadCsv;
exports.loadJSON = loadJSON;
exports.readJSONFile = readJSONFile;
exports.isGeoJson = isGeoJson;
exports.isFeature = isFeature;
exports.isFeatureCollection = isFeatureCollection;
exports.isRowObject = isRowObject;
exports.isKeplerGlMap = isKeplerGlMap;
exports.determineJsonProcess = determineJsonProcess;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _window = require("global/window");

var _console = _interopRequireDefault(require("global/console"));

var _dataProcessor = require("./data-processor");

var _utils = require("../utils/utils");

var _defaultSettings = require("../constants/default-settings");

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
var FILE_HANDLERS = {
  csv: loadCsv,
  json: loadJSON
};

function readFile(_ref) {
  var file = _ref.file,
      _ref$fileCache = _ref.fileCache,
      fileCache = _ref$fileCache === void 0 ? [] : _ref$fileCache;
  return new Promise(function (resolve, reject) {
    var _getFileHandler = getFileHandler(file),
        handler = _getFileHandler.handler,
        format = _getFileHandler.format;
    /*    if (!handler) {
          Console.warn(
            `Canont determine file handler for file ${file.name}. It must have a valid file extension`
          );
          resolve(fileCache);
        }
    */


    handler({
      file: file,
      format: format
    }).then(function (result) {
      if (!result || !result.data) {
        // return fileCache, to keep process other files
        resolve(fileCache);
      }

      resolve([].concat((0, _toConsumableArray2["default"])(fileCache), [{
        data: result.data,
        info: {
          label: file.name,
          format: result.format
        }
      }]));
    });
  });
}

function getFileHandler(fileBlob) {
  var type = getFileType(fileBlob.name);
  return {
    handler: FILE_HANDLERS[type],
    format: type
  };
}

function getFileType(filename) {
  console.log(filename);

  if (filename.endsWith('csv')) {
    return 'csv';
  } else if (filename.endsWith('json') || filename.endsWith('geojson')) {
    // Read GeoJson from browser
    return 'json';
  } else {
    return 'json';
  } // Wait to add other file type handler


  return 'other';
}

function readCSVFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();

    fileReader.onload = function (_ref2) {
      var result = _ref2.target.result;
      resolve(result);
    };

    fileReader.readAsText(fileBlob);
  });
}

function loadCsv(_ref3) {
  var file = _ref3.file,
      format = _ref3.format,
      _ref3$processor = _ref3.processor,
      processor = _ref3$processor === void 0 ? _dataProcessor.processCsvData : _ref3$processor;
  return readCSVFile(file).then(function (rawData) {
    return rawData ? {
      data: processor(rawData),
      format: format
    } : null;
  });
}

function loadJSON(_ref4) {
  var file = _ref4.file,
      _ref4$processor = _ref4.processor,
      processor = _ref4$processor === void 0 ? _dataProcessor.processGeojson : _ref4$processor;
  return readJSONFile(file).then(function (content) {
    if (isKeplerGlMap(content)) {
      return {
        format: _defaultSettings.DATASET_FORMATS.keplergl,
        data: (0, _dataProcessor.processKeplerglJSON)(content)
      };
    } else if (isRowObject(content)) {
      return {
        format: _defaultSettings.DATASET_FORMATS.row,
        data: (0, _dataProcessor.processRowObject)(content)
      };
    } else if (isGeoJson(content)) {
      return {
        format: _defaultSettings.DATASET_FORMATS.geojson,
        data: (0, _dataProcessor.processGeojson)(content)
      };
    } // unsupported json format


    _console["default"].warn("unsupported Json format ".concat(file.name));

    return null;
  });
}

function readJSONFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();

    fileReader.onload = function (_ref5) {
      var result = _ref5.target.result;

      try {
        var json = JSON.parse(result);
        resolve(json);
      } catch (err) {
        reject(null);
      }
    };

    fileReader.readAsText(fileBlob, 'UTF-8');
  });
}

function isGeoJson(json) {
  // json can be feature collection
  // or simgle feature
  return (0, _utils.isPlainObject)(json) && (isFeature(json) || isFeatureCollection(json));
}

function isFeature(json) {
  return json.type === 'Feature' && json.geometry;
}

function isFeatureCollection(json) {
  return json.type === 'FeatureCollection' && json.features;
}

function isRowObject(json) {
  return Array.isArray(json) && (0, _utils.isPlainObject)(json[0]);
}

function isKeplerGlMap(json) {
  return (0, _utils.isPlainObject)(json) && json.datasets && json.config && json.info && json.info.app === 'kepler.gl';
}

function determineJsonProcess(_ref6, defaultProcessor) {
  var dataset = _ref6.dataset,
      format = _ref6.format;

  if (isKeplerGlMap(dataset)) {
    return _dataProcessor.processKeplerglJSON;
  }

  return defaultProcessor;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2ZpbGUtaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJGSUxFX0hBTkRMRVJTIiwiY3N2IiwibG9hZENzdiIsImpzb24iLCJsb2FkSlNPTiIsInJlYWRGaWxlIiwiZmlsZSIsImZpbGVDYWNoZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0RmlsZUhhbmRsZXIiLCJoYW5kbGVyIiwiZm9ybWF0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJpbmZvIiwibGFiZWwiLCJuYW1lIiwiZmlsZUJsb2IiLCJ0eXBlIiwiZ2V0RmlsZVR5cGUiLCJmaWxlbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJlbmRzV2l0aCIsInJlYWRDU1ZGaWxlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZWFkQXNUZXh0IiwicHJvY2Vzc29yIiwicHJvY2Vzc0NzdkRhdGEiLCJyYXdEYXRhIiwicHJvY2Vzc0dlb2pzb24iLCJyZWFkSlNPTkZpbGUiLCJjb250ZW50IiwiaXNLZXBsZXJHbE1hcCIsIkRBVEFTRVRfRk9STUFUUyIsImtlcGxlcmdsIiwiaXNSb3dPYmplY3QiLCJyb3ciLCJpc0dlb0pzb24iLCJnZW9qc29uIiwiQ29uc29sZSIsIndhcm4iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJpc0ZlYXR1cmUiLCJpc0ZlYXR1cmVDb2xsZWN0aW9uIiwiZ2VvbWV0cnkiLCJmZWF0dXJlcyIsIkFycmF5IiwiaXNBcnJheSIsImRhdGFzZXRzIiwiY29uZmlnIiwiYXBwIiwiZGV0ZXJtaW5lSnNvblByb2Nlc3MiLCJkZWZhdWx0UHJvY2Vzc29yIiwiZGF0YXNldCIsInByb2Nlc3NLZXBsZXJnbEpTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTJCO0FBQ2hDLFNBQU9vRCxLQUFLLENBQUNDLE9BQU4sQ0FBY3JELElBQWQsS0FBdUIsMEJBQWNBLElBQUksQ0FBQyxDQUFELENBQWxCLENBQTlCO0FBQ0Q7O0FBRU0sU0FBU29DLGFBQVQsQ0FBdUJwQyxJQUF2QixFQUE2QjtBQUNsQyxTQUNFLDBCQUFjQSxJQUFkLEtBQ0FBLElBQUksQ0FBQ3NELFFBREwsSUFFQXRELElBQUksQ0FBQ3VELE1BRkwsSUFHQXZELElBQUksQ0FBQ2MsSUFITCxJQUlBZCxJQUFJLENBQUNjLElBQUwsQ0FBVTBDLEdBQVYsS0FBa0IsV0FMcEI7QUFPRDs7QUFFTSxTQUFTQyxvQkFBVCxRQUFpREMsZ0JBQWpELEVBQW1FO0FBQUEsTUFBcENDLE9BQW9DLFNBQXBDQSxPQUFvQztBQUFBLE1BQTNCakQsTUFBMkIsU0FBM0JBLE1BQTJCOztBQUN4RSxNQUFJMEIsYUFBYSxDQUFDdUIsT0FBRCxDQUFqQixFQUE0QjtBQUMxQixXQUFPQyxrQ0FBUDtBQUNEOztBQUVELFNBQU9GLGdCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0ZpbGVSZWFkZXJ9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XHJcbmltcG9ydCB7XHJcbiAgcHJvY2Vzc0NzdkRhdGEsXHJcbiAgcHJvY2Vzc0dlb2pzb24sXHJcbiAgcHJvY2Vzc0tlcGxlcmdsSlNPTixcclxuICBwcm9jZXNzUm93T2JqZWN0XHJcbn0gZnJvbSAnLi9kYXRhLXByb2Nlc3Nvcic7XHJcbmltcG9ydCB7aXNQbGFpbk9iamVjdH0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQge0RBVEFTRVRfRk9STUFUU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuY29uc3QgRklMRV9IQU5ETEVSUyA9IHtcclxuICBjc3Y6IGxvYWRDc3YsXHJcbiAganNvbjogbG9hZEpTT05cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZSh7ZmlsZSwgZmlsZUNhY2hlID0gW119KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHtoYW5kbGVyLCBmb3JtYXR9ID0gZ2V0RmlsZUhhbmRsZXIoZmlsZSk7XHJcbi8qICAgIGlmICghaGFuZGxlcikge1xyXG4gICAgICBDb25zb2xlLndhcm4oXHJcbiAgICAgICAgYENhbm9udCBkZXRlcm1pbmUgZmlsZSBoYW5kbGVyIGZvciBmaWxlICR7ZmlsZS5uYW1lfS4gSXQgbXVzdCBoYXZlIGEgdmFsaWQgZmlsZSBleHRlbnNpb25gXHJcbiAgICAgICk7XHJcbiAgICAgIHJlc29sdmUoZmlsZUNhY2hlKTtcclxuICAgIH1cclxuKi9cclxuICAgIGhhbmRsZXIoe2ZpbGUsIGZvcm1hdH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGZpbGVDYWNoZSwgdG8ga2VlcCBwcm9jZXNzIG90aGVyIGZpbGVzXHJcbiAgICAgICAgcmVzb2x2ZShmaWxlQ2FjaGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc29sdmUoW1xyXG4gICAgICAgIC4uLmZpbGVDYWNoZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgbGFiZWw6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgZm9ybWF0OiByZXN1bHQuZm9ybWF0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZUhhbmRsZXIoZmlsZUJsb2IpIHtcclxuICBjb25zdCB0eXBlID0gZ2V0RmlsZVR5cGUoZmlsZUJsb2IubmFtZSk7XHJcblxyXG4gIHJldHVybiB7aGFuZGxlcjogRklMRV9IQU5ETEVSU1t0eXBlXSwgZm9ybWF0OiB0eXBlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVUeXBlKGZpbGVuYW1lKSB7XHJcbiAgY29uc29sZS5sb2coZmlsZW5hbWUpO1xyXG4gIGlmIChmaWxlbmFtZS5lbmRzV2l0aCgnY3N2JykpIHtcclxuICAgIHJldHVybiAnY3N2JztcclxuICB9IGVsc2UgaWYgKGZpbGVuYW1lLmVuZHNXaXRoKCdqc29uJykgfHwgZmlsZW5hbWUuZW5kc1dpdGgoJ2dlb2pzb24nKSkge1xyXG4gICAgLy8gUmVhZCBHZW9Kc29uIGZyb20gYnJvd3NlclxyXG4gICAgcmV0dXJuICdqc29uJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICdqc29uJztcclxuICB9XHJcblxyXG4gIC8vIFdhaXQgdG8gYWRkIG90aGVyIGZpbGUgdHlwZSBoYW5kbGVyXHJcbiAgcmV0dXJuICdvdGhlcic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRDU1ZGaWxlKGZpbGVCbG9iKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoe3RhcmdldDoge3Jlc3VsdH19KSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgIH07XHJcblxyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVCbG9iKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3Yoe2ZpbGUsIGZvcm1hdCwgcHJvY2Vzc29yID0gcHJvY2Vzc0NzdkRhdGF9KSB7XHJcbiAgcmV0dXJuIHJlYWRDU1ZGaWxlKGZpbGUpLnRoZW4ocmF3RGF0YSA9PiAocmF3RGF0YSA/IHtkYXRhOiBwcm9jZXNzb3IocmF3RGF0YSksIGZvcm1hdH0gOiBudWxsKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSlNPTih7ZmlsZSwgcHJvY2Vzc29yID0gcHJvY2Vzc0dlb2pzb259KSB7XHJcbiAgcmV0dXJuIHJlYWRKU09ORmlsZShmaWxlKS50aGVuKGNvbnRlbnQgPT4ge1xyXG4gICAgaWYgKGlzS2VwbGVyR2xNYXAoY29udGVudCkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmb3JtYXQ6IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbCxcclxuICAgICAgICBkYXRhOiBwcm9jZXNzS2VwbGVyZ2xKU09OKGNvbnRlbnQpXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2UgaWYgKGlzUm93T2JqZWN0KGNvbnRlbnQpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZm9ybWF0OiBEQVRBU0VUX0ZPUk1BVFMucm93LFxyXG4gICAgICAgIGRhdGE6IHByb2Nlc3NSb3dPYmplY3QoY29udGVudClcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAoaXNHZW9Kc29uKGNvbnRlbnQpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZm9ybWF0OiBEQVRBU0VUX0ZPUk1BVFMuZ2VvanNvbixcclxuICAgICAgICBkYXRhOiBwcm9jZXNzR2VvanNvbihjb250ZW50KVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gdW5zdXBwb3J0ZWQganNvbiBmb3JtYXRcclxuICAgIENvbnNvbGUud2FybihgdW5zdXBwb3J0ZWQgSnNvbiBmb3JtYXQgJHtmaWxlLm5hbWV9YCk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRKU09ORmlsZShmaWxlQmxvYikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKHt0YXJnZXQ6IHtyZXN1bHR9fSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgcmVzb2x2ZShqc29uKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlQmxvYiwgJ1VURi04Jyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0dlb0pzb24oanNvbikge1xyXG4gIC8vIGpzb24gY2FuIGJlIGZlYXR1cmUgY29sbGVjdGlvblxyXG4gIC8vIG9yIHNpbWdsZSBmZWF0dXJlXHJcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoanNvbikgJiYgKGlzRmVhdHVyZShqc29uKSB8fCBpc0ZlYXR1cmVDb2xsZWN0aW9uKGpzb24pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmVhdHVyZShqc29uKSB7XHJcbiAgcmV0dXJuIGpzb24udHlwZSA9PT0gJ0ZlYXR1cmUnICYmIGpzb24uZ2VvbWV0cnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ZlYXR1cmVDb2xsZWN0aW9uKGpzb24pIHtcclxuICByZXR1cm4ganNvbi50eXBlID09PSAnRmVhdHVyZUNvbGxlY3Rpb24nICYmIGpzb24uZmVhdHVyZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Jvd09iamVjdChqc29uKSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoanNvbikgJiYgaXNQbGFpbk9iamVjdChqc29uWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzS2VwbGVyR2xNYXAoanNvbikge1xyXG4gIHJldHVybiAoXHJcbiAgICBpc1BsYWluT2JqZWN0KGpzb24pICYmXHJcbiAgICBqc29uLmRhdGFzZXRzICYmXHJcbiAgICBqc29uLmNvbmZpZyAmJlxyXG4gICAganNvbi5pbmZvICYmXHJcbiAgICBqc29uLmluZm8uYXBwID09PSAna2VwbGVyLmdsJ1xyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVKc29uUHJvY2Vzcyh7ZGF0YXNldCwgZm9ybWF0fSwgZGVmYXVsdFByb2Nlc3Nvcikge1xyXG4gIGlmIChpc0tlcGxlckdsTWFwKGRhdGFzZXQpKSB7XHJcbiAgICByZXR1cm4gcHJvY2Vzc0tlcGxlcmdsSlNPTjtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZWZhdWx0UHJvY2Vzc29yO1xyXG59XHJcbiJdfQ==