"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultColorRange = exports.COLOR_RANGES = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _colorbrewer = _interopRequireDefault(require("colorbrewer"));

var _customColorRanges = require("./custom-color-ranges");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Add colorbrewer color schemes (Data Science requirement)
// See http://colorbrewer2.org/
var colorBrewerMap = Object.entries(_colorbrewer["default"].schemeGroups).reduce(function (accu, _ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      type = _ref2[0],
      palettes = _ref2[1];

  return _objectSpread({}, accu, {}, palettes.reduce(function (group, name) {
    return _objectSpread({}, group, (0, _defineProperty2["default"])({}, name, type));
  }, {}));
}, {});
var colorRanges = (0, _toConsumableArray2["default"])(_customColorRanges.VizColorPalette);

for (var _i = 0, _Object$entries = Object.entries(_colorbrewer["default"]); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
      keyName = _Object$entries$_i[0],
      colorScheme = _Object$entries$_i[1];

  if (keyName !== 'schemeGroups') {
    for (var _i2 = 0, _Object$entries2 = Object.entries(colorScheme); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
          lenKey = _Object$entries2$_i[0],
          colors = _Object$entries2$_i[1];

      colorRanges.push({
        name: "ColorBrewer ".concat(keyName, "-").concat(lenKey),
        type: colorBrewerMap[keyName],
        category: 'ColorBrewer',
        colors: colors
      });
    }
  }
}

var COLOR_RANGES = colorRanges;
exports.COLOR_RANGES = COLOR_RANGES;
var DefaultColorRange = colorRanges.find(function (_ref3) {
  var name = _ref3.name;
  return name === 'Global Warming';
});
exports.DefaultColorRange = DefaultColorRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvY29sb3ItcmFuZ2VzLmpzIl0sIm5hbWVzIjpbImNvbG9yQnJld2VyTWFwIiwiT2JqZWN0IiwiZW50cmllcyIsImNvbG9yYnJld2VyIiwic2NoZW1lR3JvdXBzIiwicmVkdWNlIiwiYWNjdSIsInR5cGUiLCJwYWxldHRlcyIsImdyb3VwIiwibmFtZSIsImNvbG9yUmFuZ2VzIiwiVml6Q29sb3JQYWxldHRlIiwia2V5TmFtZSIsImNvbG9yU2NoZW1lIiwibGVuS2V5IiwiY29sb3JzIiwicHVzaCIsImNhdGVnb3J5IiwiQ09MT1JfUkFOR0VTIiwiRGVmYXVsdENvbG9yUmFuZ2UiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyx3QkFBWUMsWUFBM0IsRUFBeUNDLE1BQXpDLENBQ3JCLFVBQUNDLElBQUQ7QUFBQTtBQUFBLE1BQVFDLElBQVI7QUFBQSxNQUFjQyxRQUFkOztBQUFBLDJCQUNLRixJQURMLE1BRUtFLFFBQVEsQ0FBQ0gsTUFBVCxDQUNELFVBQUNJLEtBQUQsRUFBUUMsSUFBUjtBQUFBLDZCQUNLRCxLQURMLHVDQUVHQyxJQUZILEVBRVVILElBRlY7QUFBQSxHQURDLEVBS0QsRUFMQyxDQUZMO0FBQUEsQ0FEcUIsRUFXckIsRUFYcUIsQ0FBdkI7QUFjQSxJQUFNSSxXQUFXLHVDQUFPQyxrQ0FBUCxDQUFqQjs7QUFFQSxtQ0FBcUNYLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyx1QkFBZixDQUFyQyxxQ0FBa0U7QUFBQTtBQUFBLE1BQXREVSxPQUFzRDtBQUFBLE1BQTdDQyxXQUE2Qzs7QUFDaEUsTUFBSUQsT0FBTyxLQUFLLGNBQWhCLEVBQWdDO0FBQzlCLHlDQUErQlosTUFBTSxDQUFDQyxPQUFQLENBQWVZLFdBQWYsQ0FBL0Isd0NBQTREO0FBQUE7QUFBQSxVQUFoREMsTUFBZ0Q7QUFBQSxVQUF4Q0MsTUFBd0M7O0FBQzFETCxNQUFBQSxXQUFXLENBQUNNLElBQVosQ0FBaUI7QUFDZlAsUUFBQUEsSUFBSSx3QkFBaUJHLE9BQWpCLGNBQTRCRSxNQUE1QixDQURXO0FBRWZSLFFBQUFBLElBQUksRUFBRVAsY0FBYyxDQUFDYSxPQUFELENBRkw7QUFHZkssUUFBQUEsUUFBUSxFQUFFLGFBSEs7QUFJZkYsUUFBQUEsTUFBTSxFQUFOQTtBQUplLE9BQWpCO0FBTUQ7QUFDRjtBQUNGOztBQUVNLElBQU1HLFlBQVksR0FBR1IsV0FBckI7O0FBRUEsSUFBTVMsaUJBQWlCLEdBQUdULFdBQVcsQ0FBQ1UsSUFBWixDQUFpQjtBQUFBLE1BQUVYLElBQUYsU0FBRUEsSUFBRjtBQUFBLFNBQVlBLElBQUksS0FBSyxnQkFBckI7QUFBQSxDQUFqQixDQUExQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBjb2xvcmJyZXdlciBmcm9tICdjb2xvcmJyZXdlcic7XHJcbmltcG9ydCB7Vml6Q29sb3JQYWxldHRlfSBmcm9tICcuL2N1c3RvbS1jb2xvci1yYW5nZXMnO1xyXG5cclxuLy8gQWRkIGNvbG9yYnJld2VyIGNvbG9yIHNjaGVtZXMgKERhdGEgU2NpZW5jZSByZXF1aXJlbWVudClcclxuLy8gU2VlIGh0dHA6Ly9jb2xvcmJyZXdlcjIub3JnL1xyXG5cclxuY29uc3QgY29sb3JCcmV3ZXJNYXAgPSBPYmplY3QuZW50cmllcyhjb2xvcmJyZXdlci5zY2hlbWVHcm91cHMpLnJlZHVjZShcclxuICAoYWNjdSwgW3R5cGUsIHBhbGV0dGVzXSkgPT4gKHtcclxuICAgIC4uLmFjY3UsXHJcbiAgICAuLi5wYWxldHRlcy5yZWR1Y2UoXHJcbiAgICAgIChncm91cCwgbmFtZSkgPT4gKHtcclxuICAgICAgICAuLi5ncm91cCxcclxuICAgICAgICBbbmFtZV06IHR5cGVcclxuICAgICAgfSksXHJcbiAgICAgIHt9XHJcbiAgICApXHJcbiAgfSksXHJcbiAge31cclxuKTtcclxuXHJcbmNvbnN0IGNvbG9yUmFuZ2VzID0gWy4uLlZpekNvbG9yUGFsZXR0ZV07XHJcblxyXG5mb3IgKGNvbnN0IFtrZXlOYW1lLCBjb2xvclNjaGVtZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sb3JicmV3ZXIpKSB7XHJcbiAgaWYgKGtleU5hbWUgIT09ICdzY2hlbWVHcm91cHMnKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtsZW5LZXksIGNvbG9yc10gb2YgT2JqZWN0LmVudHJpZXMoY29sb3JTY2hlbWUpKSB7XHJcbiAgICAgIGNvbG9yUmFuZ2VzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IGBDb2xvckJyZXdlciAke2tleU5hbWV9LSR7bGVuS2V5fWAsXHJcbiAgICAgICAgdHlwZTogY29sb3JCcmV3ZXJNYXBba2V5TmFtZV0sXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdDb2xvckJyZXdlcicsXHJcbiAgICAgICAgY29sb3JzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SX1JBTkdFUyA9IGNvbG9yUmFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlZmF1bHRDb2xvclJhbmdlID0gY29sb3JSYW5nZXMuZmluZCgoe25hbWV9KSA9PiBuYW1lID09PSAnR2xvYmFsIFdhcm1pbmcnKTtcclxuIl19