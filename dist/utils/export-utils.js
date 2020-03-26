"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScaleFromImageSize = getScaleFromImageSize;
exports.calculateExportImageSize = calculateExportImageSize;
exports.convertToPng = convertToPng;
exports.dataURItoBlob = dataURItoBlob;
exports.downloadFile = downloadFile;
exports.exportImage = exportImage;
exports.exportToJsonString = exportToJsonString;
exports.getMapJSON = getMapJSON;
exports.exportJson = exportJson;
exports.exportHtml = exportHtml;
exports.exportData = exportData;
exports.exportMap = exportMap;
exports["default"] = exports.DEFAULT_EXPORT_JSON_SETTINGS = exports.DEFAULT_DATA_NAME = exports.DEFAULT_JSON_NAME = exports.DEFAULT_HTML_NAME = exports.DEFAULT_IMAGE_NAME = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _domToImage = _interopRequireDefault(require("./dom-to-image"));

var _window = require("global/window");

var _defaultSettings = require("../constants/default-settings");

var _exportMapHtml = require("../templates/export-map-html");

var _dataProcessor = require("../processors/data-processor");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _utils = require("./utils");

var _schemas = _interopRequireDefault(require("../schemas"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Default file names
 */
var DEFAULT_IMAGE_NAME = 'kepler-gl.png';
exports.DEFAULT_IMAGE_NAME = DEFAULT_IMAGE_NAME;
var DEFAULT_HTML_NAME = 'kepler.gl.html';
exports.DEFAULT_HTML_NAME = DEFAULT_HTML_NAME;
var DEFAULT_JSON_NAME = 'keplergl.json';
exports.DEFAULT_JSON_NAME = DEFAULT_JSON_NAME;
var DEFAULT_DATA_NAME = 'kepler-gl';
/**
 * Default json export settings
 * @type {{hasData: boolean}}
 */

exports.DEFAULT_DATA_NAME = DEFAULT_DATA_NAME;
var DEFAULT_EXPORT_JSON_SETTINGS = {
  hasData: true
};
exports.DEFAULT_EXPORT_JSON_SETTINGS = DEFAULT_EXPORT_JSON_SETTINGS;

var defaultResolution = _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.find(function (op) {
  return op.id === _defaultSettings.RESOLUTIONS.ONE_X;
});

var defaultRatio = _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.find(function (op) {
  return op.id === _defaultSettings.EXPORT_IMG_RATIOS.FOUR_BY_THREE;
});

function getScaleFromImageSize(imageW, imageH, mapW, mapH) {
  if ([imageW, imageH, mapW, mapH].some(function (d) {
    return d <= 0;
  })) {
    return 1;
  }

  var base = imageW / imageH > 1 ? imageW : imageH;
  var mapBase = imageW / imageH > 1 ? mapW : mapH;
  var scale = base / mapBase;
  return scale;
}

function calculateExportImageSize(_ref) {
  var mapW = _ref.mapW,
      mapH = _ref.mapH,
      ratio = _ref.ratio,
      resolution = _ref.resolution;

  if (mapW <= 0 || mapH <= 0) {
    return null;
  }

  var ratioItem = _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.find(function (op) {
    return op.id === ratio;
  }) || defaultRatio;
  var resolutionItem = _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.find(function (op) {
    return op.id === resolution;
  }) || defaultResolution;

  var _resolutionItem$getSi = resolutionItem.getSize(mapW, mapH),
      scaledWidth = _resolutionItem$getSi.width,
      scaledHeight = _resolutionItem$getSi.height;

  var _ratioItem$getSize = ratioItem.getSize(scaledWidth, scaledHeight),
      imageW = _ratioItem$getSize.width,
      imageH = _ratioItem$getSize.height;

  var _ref2 = ratioItem.id === _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM ? {} : resolutionItem,
      scale = _ref2.scale;

  return {
    scale: scale,
    imageW: imageW,
    imageH: imageH
  };
}

function convertToPng(sourceElem, options) {
  return _domToImage["default"].toPng(sourceElem, options);
}

function dataURItoBlob(dataURI) {
  var binary = (0, _window.atob)(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new _window.ArrayBuffer(binary.length); // create a view into the buffer

  var ia = new _window.Uint8Array(ab);

  for (var i = 0; i < binary.length; i++) {
    ia[i] = binary.charCodeAt(i);
  }

  return new _window.Blob([ab], {
    type: mimeString
  });
}

function downloadFile(fileBlob, filename) {
  var url = _window.URL.createObjectURL(fileBlob);

  var link = _window.document.createElement('a');

  link.setAttribute('href', url);
  link.setAttribute('download', filename);

  _window.document.body.appendChild(link);

  link.click();

  _window.document.body.removeChild(link);

  _window.URL.revokeObjectURL(url);
}

function exportImage(state) {
  var imageDataUri = state.uiState.exportImage.imageDataUri;

  if (imageDataUri) {
    var file = dataURItoBlob(imageDataUri);
    downloadFile(file, DEFAULT_IMAGE_NAME);
  }
}

function exportToJsonString(data) {
  try {
    return JSON.stringify(data);
  } catch (e) {
    return e.description;
  }
}

function getMapJSON(state) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_EXPORT_JSON_SETTINGS;
  var hasData = options.hasData;

  if (!hasData) {
    return _schemas["default"].getConfigToSave(state);
  }

  var mapToSave = _schemas["default"].save(state); // add file name if title is not provided


  var title = (0, _lodash["default"])(mapToSave, ['info', 'title']);

  if (!title || !title.length) {
    mapToSave = (0, _utils.set)(['info', 'title'], "keplergl_".concat((0, _utils.generateHashId)(6)), mapToSave);
  }

  return mapToSave;
}

function exportJson(state) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var map = getMapJSON(state, options);
  var fileBlob = new _window.Blob([exportToJsonString(map)], {
    type: 'application/json'
  });
  downloadFile(fileBlob, DEFAULT_JSON_NAME);
}

function exportHtml(state, options) {
  var userMapboxToken = options.userMapboxToken,
      exportMapboxAccessToken = options.exportMapboxAccessToken,
      mode = options.mode;

  var data = _objectSpread({}, getMapJSON(state), {
    mapboxApiAccessToken: (userMapboxToken || '') !== '' ? userMapboxToken : exportMapboxAccessToken,
    mode: mode
  });

  var fileBlob = new _window.Blob([(0, _exportMapHtml.exportMapToHTML)(data)], {
    type: 'text/html'
  });
  downloadFile(fileBlob, DEFAULT_HTML_NAME);
}

function exportData(state, option) {
  var visState = state.visState;
  var datasets = visState.datasets;
  var selectedDataset = option.selectedDataset,
      dataType = option.dataType,
      filtered = option.filtered; // get the selected data

  var filename = DEFAULT_DATA_NAME;
  var selectedDatasets = datasets[selectedDataset] ? [datasets[selectedDataset]] : Object.values(datasets);

  if (!selectedDatasets.length) {
    // error: selected dataset not found.
    return;
  }

  selectedDatasets.forEach(function (selectedData) {
    var allData = selectedData.allData,
        fields = selectedData.fields,
        label = selectedData.label,
        _selectedData$filtere = selectedData.filteredIdxCPU,
        filteredIdxCPU = _selectedData$filtere === void 0 ? [] : _selectedData$filtere;
    var toExport = filtered ? filteredIdxCPU.map(function (i) {
      return allData[i];
    }) : allData; // start to export data according to selected data type

    switch (dataType) {
      case _defaultSettings.EXPORT_DATA_TYPE.CSV:
        {
          var csv = (0, _dataProcessor.formatCsv)(toExport, fields);
          var fileBlob = new _window.Blob([csv], {
            type: 'text/csv'
          });
          downloadFile(fileBlob, "".concat(filename, "_").concat(label, ".csv"));
          break;
        }
      // TODO: support more file types.

      default:
        break;
    }
  });
}

function exportMap(state, option) {
  var imageDataUri = state.uiState.exportImage.imageDataUri;
  var thumbnail = imageDataUri ? dataURItoBlob(imageDataUri) : null;
  var mapToSave = getMapJSON(state, option);
  return {
    map: mapToSave,
    thumbnail: thumbnail
  };
}

var exporters = {
  exportImage: exportImage,
  exportJson: exportJson,
  exportHtml: exportHtml,
  exportData: exportData
};
var _default = exporters;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9leHBvcnQtdXRpbHMuanMiXSwibmFtZXMiOlsiREVGQVVMVF9JTUFHRV9OQU1FIiwiREVGQVVMVF9IVE1MX05BTUUiLCJERUZBVUxUX0pTT05fTkFNRSIsIkRFRkFVTFRfREFUQV9OQU1FIiwiREVGQVVMVF9FWFBPUlRfSlNPTl9TRVRUSU5HUyIsImhhc0RhdGEiLCJkZWZhdWx0UmVzb2x1dGlvbiIsIkVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TIiwiZmluZCIsIm9wIiwiaWQiLCJSRVNPTFVUSU9OUyIsIk9ORV9YIiwiZGVmYXVsdFJhdGlvIiwiRVhQT1JUX0lNR19SQVRJT19PUFRJT05TIiwiRVhQT1JUX0lNR19SQVRJT1MiLCJGT1VSX0JZX1RIUkVFIiwiZ2V0U2NhbGVGcm9tSW1hZ2VTaXplIiwiaW1hZ2VXIiwiaW1hZ2VIIiwibWFwVyIsIm1hcEgiLCJzb21lIiwiZCIsImJhc2UiLCJtYXBCYXNlIiwic2NhbGUiLCJjYWxjdWxhdGVFeHBvcnRJbWFnZVNpemUiLCJyYXRpbyIsInJlc29sdXRpb24iLCJyYXRpb0l0ZW0iLCJyZXNvbHV0aW9uSXRlbSIsImdldFNpemUiLCJzY2FsZWRXaWR0aCIsIndpZHRoIiwic2NhbGVkSGVpZ2h0IiwiaGVpZ2h0IiwiQ1VTVE9NIiwiY29udmVydFRvUG5nIiwic291cmNlRWxlbSIsIm9wdGlvbnMiLCJkb210b2ltYWdlIiwidG9QbmciLCJkYXRhVVJJdG9CbG9iIiwiZGF0YVVSSSIsImJpbmFyeSIsInNwbGl0IiwibWltZVN0cmluZyIsImFiIiwiQXJyYXlCdWZmZXIiLCJsZW5ndGgiLCJpYSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsIkJsb2IiLCJ0eXBlIiwiZG93bmxvYWRGaWxlIiwiZmlsZUJsb2IiLCJmaWxlbmFtZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwicmV2b2tlT2JqZWN0VVJMIiwiZXhwb3J0SW1hZ2UiLCJzdGF0ZSIsImltYWdlRGF0YVVyaSIsInVpU3RhdGUiLCJmaWxlIiwiZXhwb3J0VG9Kc29uU3RyaW5nIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiZGVzY3JpcHRpb24iLCJnZXRNYXBKU09OIiwiS2VwbGVyR2xTY2hlbWEiLCJnZXRDb25maWdUb1NhdmUiLCJtYXBUb1NhdmUiLCJzYXZlIiwidGl0bGUiLCJleHBvcnRKc29uIiwibWFwIiwiZXhwb3J0SHRtbCIsInVzZXJNYXBib3hUb2tlbiIsImV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIiwibW9kZSIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwiZXhwb3J0RGF0YSIsIm9wdGlvbiIsInZpc1N0YXRlIiwiZGF0YXNldHMiLCJzZWxlY3RlZERhdGFzZXQiLCJkYXRhVHlwZSIsImZpbHRlcmVkIiwic2VsZWN0ZWREYXRhc2V0cyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJzZWxlY3RlZERhdGEiLCJhbGxEYXRhIiwiZmllbGRzIiwibGFiZWwiLCJmaWx0ZXJlZElkeENQVSIsInRvRXhwb3J0IiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsImNzdiIsImV4cG9ydE1hcCIsInRodW1ibmFpbCIsImV4cG9ydGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBOzs7QUFHTyxJQUFNQSxrQkFBa0IsR0FBRyxlQUEzQjs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxnQkFBMUI7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsZUFBMUI7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsV0FBMUI7QUFFUDs7Ozs7O0FBSU8sSUFBTUMsNEJBQTRCLEdBQUc7QUFDMUNDLEVBQUFBLE9BQU8sRUFB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QUFDRSxXQUFLWSxrQ0FBaUJDLEdBQXRCO0FBQTJCO0FBQ3pCLGNBQU1DLEdBQUcsR0FBRyw4QkFBVUgsUUFBVixFQUFvQkgsTUFBcEIsQ0FBWjtBQUVBLGNBQU1uRCxRQUFRLEdBQUcsSUFBSUgsWUFBSixDQUFTLENBQUM0RCxHQUFELENBQVQsRUFBZ0I7QUFBQzNELFlBQUFBLElBQUksRUFBRTtBQUFQLFdBQWhCLENBQWpCO0FBQ0FDLFVBQUFBLFlBQVksQ0FBQ0MsUUFBRCxZQUFjQyxRQUFkLGNBQTBCbUQsS0FBMUIsVUFBWjtBQUNBO0FBQ0Q7QUFDRDs7QUFDQTtBQUNFO0FBVko7QUFZRCxHQWhCRDtBQWlCRDs7QUFFTSxTQUFTTSxTQUFULENBQW1CM0MsS0FBbkIsRUFBMEJ3QixNQUExQixFQUFrQztBQUFBLE1BQ2hDdkIsWUFEZ0MsR0FDaEJELEtBQUssQ0FBQ0UsT0FBTixDQUFjSCxXQURFLENBQ2hDRSxZQURnQztBQUV2QyxNQUFNMkMsU0FBUyxHQUFHM0MsWUFBWSxHQUFHL0IsYUFBYSxDQUFDK0IsWUFBRCxDQUFoQixHQUFpQyxJQUEvRDtBQUNBLE1BQU1ZLFNBQVMsR0FBR0gsVUFBVSxDQUFDVixLQUFELEVBQVF3QixNQUFSLENBQTVCO0FBRUEsU0FBTztBQUNMUCxJQUFBQSxHQUFHLEVBQUVKLFNBREE7QUFFTCtCLElBQUFBLFNBQVMsRUFBVEE7QUFGSyxHQUFQO0FBSUQ7O0FBRUQsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCOUMsRUFBQUEsV0FBVyxFQUFYQSxXQURnQjtBQUVoQmlCLEVBQUFBLFVBQVUsRUFBVkEsVUFGZ0I7QUFHaEJFLEVBQUFBLFVBQVUsRUFBVkEsVUFIZ0I7QUFJaEJLLEVBQUFBLFVBQVUsRUFBVkE7QUFKZ0IsQ0FBbEI7ZUFPZXNCLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgZG9tdG9pbWFnZSBmcm9tICd1dGlscy9kb20tdG8taW1hZ2UnO1xuaW1wb3J0IHtCbG9iLCBVUkwsIGF0b2IsIFVpbnQ4QXJyYXksIEFycmF5QnVmZmVyLCBkb2N1bWVudH0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge1xuICBFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUyxcbiAgRVhQT1JUX0lNR19SQVRJT19PUFRJT05TLFxuICBSRVNPTFVUSU9OUyxcbiAgRVhQT1JUX0lNR19SQVRJT1MsXG4gIEVYUE9SVF9EQVRBX1RZUEVcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtleHBvcnRNYXBUb0hUTUx9IGZyb20gJ3RlbXBsYXRlcy9leHBvcnQtbWFwLWh0bWwnO1xuaW1wb3J0IHtmb3JtYXRDc3Z9IGZyb20gJ3Byb2Nlc3NvcnMvZGF0YS1wcm9jZXNzb3InO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCB7c2V0LCBnZW5lcmF0ZUhhc2hJZH0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAnc2NoZW1hcyc7XG5cbi8qKlxuICogRGVmYXVsdCBmaWxlIG5hbWVzXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lNQUdFX05BTUUgPSAna2VwbGVyLWdsLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9IVE1MX05BTUUgPSAna2VwbGVyLmdsLmh0bWwnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSlNPTl9OQU1FID0gJ2tlcGxlcmdsLmpzb24nO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfREFUQV9OQU1FID0gJ2tlcGxlci1nbCc7XG5cbi8qKlxuICogRGVmYXVsdCBqc29uIGV4cG9ydCBzZXR0aW5nc1xuICogQHR5cGUge3toYXNEYXRhOiBib29sZWFufX1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0pTT05fU0VUVElOR1MgPSB7XG4gIGhhc0RhdGE6IHRydWVcbn07XG5cbmNvbnN0IGRlZmF1bHRSZXNvbHV0aW9uID0gRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMuZmluZChvcCA9PiBvcC5pZCA9PT0gUkVTT0xVVElPTlMuT05FX1gpO1xuXG5jb25zdCBkZWZhdWx0UmF0aW8gPSBFWFBPUlRfSU1HX1JBVElPX09QVElPTlMuZmluZChvcCA9PiBvcC5pZCA9PT0gRVhQT1JUX0lNR19SQVRJT1MuRk9VUl9CWV9USFJFRSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsZUZyb21JbWFnZVNpemUoaW1hZ2VXLCBpbWFnZUgsIG1hcFcsIG1hcEgpIHtcbiAgaWYgKFtpbWFnZVcsIGltYWdlSCwgbWFwVywgbWFwSF0uc29tZShkID0+IGQgPD0gMCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGNvbnN0IGJhc2UgPSBpbWFnZVcgLyBpbWFnZUggPiAxID8gaW1hZ2VXIDogaW1hZ2VIO1xuICBjb25zdCBtYXBCYXNlID0gaW1hZ2VXIC8gaW1hZ2VIID4gMSA/IG1hcFcgOiBtYXBIO1xuICBjb25zdCBzY2FsZSA9IGJhc2UgLyBtYXBCYXNlO1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUV4cG9ydEltYWdlU2l6ZSh7bWFwVywgbWFwSCwgcmF0aW8sIHJlc29sdXRpb259KSB7XG4gIGlmIChtYXBXIDw9IDAgfHwgbWFwSCA8PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCByYXRpb0l0ZW0gPSBFWFBPUlRfSU1HX1JBVElPX09QVElPTlMuZmluZChvcCA9PiBvcC5pZCA9PT0gcmF0aW8pIHx8IGRlZmF1bHRSYXRpbztcblxuICBjb25zdCByZXNvbHV0aW9uSXRlbSA9XG4gICAgRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMuZmluZChvcCA9PiBvcC5pZCA9PT0gcmVzb2x1dGlvbikgfHwgZGVmYXVsdFJlc29sdXRpb247XG5cbiAgY29uc3Qge3dpZHRoOiBzY2FsZWRXaWR0aCwgaGVpZ2h0OiBzY2FsZWRIZWlnaHR9ID0gcmVzb2x1dGlvbkl0ZW0uZ2V0U2l6ZShtYXBXLCBtYXBIKTtcblxuICBjb25zdCB7d2lkdGg6IGltYWdlVywgaGVpZ2h0OiBpbWFnZUh9ID0gcmF0aW9JdGVtLmdldFNpemUoc2NhbGVkV2lkdGgsIHNjYWxlZEhlaWdodCk7XG5cbiAgY29uc3Qge3NjYWxlfSA9IHJhdGlvSXRlbS5pZCA9PT0gRVhQT1JUX0lNR19SQVRJT1MuQ1VTVE9NID8ge30gOiByZXNvbHV0aW9uSXRlbTtcblxuICByZXR1cm4ge1xuICAgIHNjYWxlLFxuICAgIGltYWdlVyxcbiAgICBpbWFnZUhcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1BuZyhzb3VyY2VFbGVtLCBvcHRpb25zKSB7XG4gIHJldHVybiBkb210b2ltYWdlLnRvUG5nKHNvdXJjZUVsZW0sIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YVVSSXRvQmxvYihkYXRhVVJJKSB7XG4gIGNvbnN0IGJpbmFyeSA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcblxuICAvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG4gIGNvbnN0IG1pbWVTdHJpbmcgPSBkYXRhVVJJXG4gICAgLnNwbGl0KCcsJylbMF1cbiAgICAuc3BsaXQoJzonKVsxXVxuICAgIC5zcGxpdCgnOycpWzBdO1xuXG4gIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG4gIGNvbnN0IGFiID0gbmV3IEFycmF5QnVmZmVyKGJpbmFyeS5sZW5ndGgpO1xuXG4gIC8vIGNyZWF0ZSBhIHZpZXcgaW50byB0aGUgYnVmZmVyXG4gIGNvbnN0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWFbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgQmxvYihbYWJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKGZpbGVCbG9iLCBmaWxlbmFtZSkge1xuICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVCbG9iKTtcblxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVuYW1lKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICBsaW5rLmNsaWNrKCk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydEltYWdlKHN0YXRlKSB7XG4gIGNvbnN0IHtpbWFnZURhdGFVcml9ID0gc3RhdGUudWlTdGF0ZS5leHBvcnRJbWFnZTtcbiAgaWYgKGltYWdlRGF0YVVyaSkge1xuICAgIGNvbnN0IGZpbGUgPSBkYXRhVVJJdG9CbG9iKGltYWdlRGF0YVVyaSk7XG4gICAgZG93bmxvYWRGaWxlKGZpbGUsIERFRkFVTFRfSU1BR0VfTkFNRSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFRvSnNvblN0cmluZyhkYXRhKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUuZGVzY3JpcHRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEpTT04oc3RhdGUsIG9wdGlvbnMgPSBERUZBVUxUX0VYUE9SVF9KU09OX1NFVFRJTkdTKSB7XG4gIGNvbnN0IHtoYXNEYXRhfSA9IG9wdGlvbnM7XG5cbiAgaWYgKCFoYXNEYXRhKSB7XG4gICAgcmV0dXJuIEtlcGxlckdsU2NoZW1hLmdldENvbmZpZ1RvU2F2ZShzdGF0ZSk7XG4gIH1cblxuICBsZXQgbWFwVG9TYXZlID0gS2VwbGVyR2xTY2hlbWEuc2F2ZShzdGF0ZSk7XG4gIC8vIGFkZCBmaWxlIG5hbWUgaWYgdGl0bGUgaXMgbm90IHByb3ZpZGVkXG4gIGNvbnN0IHRpdGxlID0gZ2V0KG1hcFRvU2F2ZSwgWydpbmZvJywgJ3RpdGxlJ10pO1xuICBpZiAoIXRpdGxlIHx8ICF0aXRsZS5sZW5ndGgpIHtcbiAgICBtYXBUb1NhdmUgPSBzZXQoWydpbmZvJywgJ3RpdGxlJ10sIGBrZXBsZXJnbF8ke2dlbmVyYXRlSGFzaElkKDYpfWAsIG1hcFRvU2F2ZSk7XG4gIH1cbiAgcmV0dXJuIG1hcFRvU2F2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydEpzb24oc3RhdGUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBtYXAgPSBnZXRNYXBKU09OKHN0YXRlLCBvcHRpb25zKTtcblxuICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtleHBvcnRUb0pzb25TdHJpbmcobWFwKV0sIHt0eXBlOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgZG93bmxvYWRGaWxlKGZpbGVCbG9iLCBERUZBVUxUX0pTT05fTkFNRSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRIdG1sKHN0YXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHt1c2VyTWFwYm94VG9rZW4sIGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuLCBtb2RlfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICAuLi5nZXRNYXBKU09OKHN0YXRlKSxcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjpcbiAgICAgICh1c2VyTWFwYm94VG9rZW4gfHwgJycpICE9PSAnJyA/IHVzZXJNYXBib3hUb2tlbiA6IGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuLFxuICAgIG1vZGVcbiAgfTtcblxuICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtleHBvcnRNYXBUb0hUTUwoZGF0YSldLCB7dHlwZTogJ3RleHQvaHRtbCd9KTtcbiAgZG93bmxvYWRGaWxlKGZpbGVCbG9iLCBERUZBVUxUX0hUTUxfTkFNRSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBvcnREYXRhKHN0YXRlLCBvcHRpb24pIHtcbiAgY29uc3Qge3Zpc1N0YXRlfSA9IHN0YXRlO1xuICBjb25zdCB7ZGF0YXNldHN9ID0gdmlzU3RhdGU7XG4gIGNvbnN0IHtzZWxlY3RlZERhdGFzZXQsIGRhdGFUeXBlLCBmaWx0ZXJlZH0gPSBvcHRpb247XG4gIC8vIGdldCB0aGUgc2VsZWN0ZWQgZGF0YVxuICBjb25zdCBmaWxlbmFtZSA9IERFRkFVTFRfREFUQV9OQU1FO1xuICBjb25zdCBzZWxlY3RlZERhdGFzZXRzID0gZGF0YXNldHNbc2VsZWN0ZWREYXRhc2V0XVxuICAgID8gW2RhdGFzZXRzW3NlbGVjdGVkRGF0YXNldF1dXG4gICAgOiBPYmplY3QudmFsdWVzKGRhdGFzZXRzKTtcbiAgaWYgKCFzZWxlY3RlZERhdGFzZXRzLmxlbmd0aCkge1xuICAgIC8vIGVycm9yOiBzZWxlY3RlZCBkYXRhc2V0IG5vdCBmb3VuZC5cbiAgICByZXR1cm47XG4gIH1cblxuICBzZWxlY3RlZERhdGFzZXRzLmZvckVhY2goc2VsZWN0ZWREYXRhID0+IHtcbiAgICBjb25zdCB7YWxsRGF0YSwgZmllbGRzLCBsYWJlbCwgZmlsdGVyZWRJZHhDUFUgPSBbXX0gPSBzZWxlY3RlZERhdGE7XG4gICAgY29uc3QgdG9FeHBvcnQgPSBmaWx0ZXJlZCA/IGZpbHRlcmVkSWR4Q1BVLm1hcChpID0+IGFsbERhdGFbaV0pIDogYWxsRGF0YTtcbiAgICAvLyBzdGFydCB0byBleHBvcnQgZGF0YSBhY2NvcmRpbmcgdG8gc2VsZWN0ZWQgZGF0YSB0eXBlXG4gICAgc3dpdGNoIChkYXRhVHlwZSkge1xuICAgICAgY2FzZSBFWFBPUlRfREFUQV9UWVBFLkNTVjoge1xuICAgICAgICBjb25zdCBjc3YgPSBmb3JtYXRDc3YodG9FeHBvcnQsIGZpZWxkcyk7XG5cbiAgICAgICAgY29uc3QgZmlsZUJsb2IgPSBuZXcgQmxvYihbY3N2XSwge3R5cGU6ICd0ZXh0L2Nzdid9KTtcbiAgICAgICAgZG93bmxvYWRGaWxlKGZpbGVCbG9iLCBgJHtmaWxlbmFtZX1fJHtsYWJlbH0uY3N2YCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogc3VwcG9ydCBtb3JlIGZpbGUgdHlwZXMuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0TWFwKHN0YXRlLCBvcHRpb24pIHtcbiAgY29uc3Qge2ltYWdlRGF0YVVyaX0gPSBzdGF0ZS51aVN0YXRlLmV4cG9ydEltYWdlO1xuICBjb25zdCB0aHVtYm5haWwgPSBpbWFnZURhdGFVcmkgPyBkYXRhVVJJdG9CbG9iKGltYWdlRGF0YVVyaSkgOiBudWxsO1xuICBjb25zdCBtYXBUb1NhdmUgPSBnZXRNYXBKU09OKHN0YXRlLCBvcHRpb24pO1xuXG4gIHJldHVybiB7XG4gICAgbWFwOiBtYXBUb1NhdmUsXG4gICAgdGh1bWJuYWlsXG4gIH07XG59XG5cbmNvbnN0IGV4cG9ydGVycyA9IHtcbiAgZXhwb3J0SW1hZ2UsXG4gIGV4cG9ydEpzb24sXG4gIGV4cG9ydEh0bWwsXG4gIGV4cG9ydERhdGFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydGVycztcbiJdfQ==