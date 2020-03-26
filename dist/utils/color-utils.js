"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgb = hexToRgb;
exports.isHexColor = isHexColor;
exports.rgbToHex = rgbToHex;
exports.getColorGroupByName = getColorGroupByName;
exports.reverseColorRange = reverseColorRange;
exports.createLinearGradient = createLinearGradient;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/**
 * get r g b from hex code
 *
 * @param {string} hex
 * @returns {array} array of r g bs
 */
function hexToRgb(hex) {
  var result = isHexColor(hex);

  if (!result) {
    return [0, 0, 0];
  }

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);
  return [r, g, b];
}

function isHexColor(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result;
}

function PadNum(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * get hex from r g b
 *
 * @param {array} rgb
 * @returns {string} hex string
 */


function rgbToHex(_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 3),
      r = _ref2[0],
      g = _ref2[1],
      b = _ref2[2];

  return "#".concat([r, g, b].map(function (n) {
    return PadNum(n);
  }).join('')).toUpperCase();
}
/**
 * Get color group name by parsing name, discard step in the name
 * e.g. Global Warming 6 -> Global Warming
 *
 * @param {Object} colorRange
 * @return {string}
 */


function getColorGroupByName(colorRange) {
  if (!colorRange || typeof colorRange.name !== 'string') {
    return null;
  }

  return colorRange.name.replace(/\b[^a-zA-Z]+$/, '');
}
/**
 * Get a reversed colorRange
 * @param {Boolean} reversed
 * @param {Object} colorRange
 */


function reverseColorRange(reversed, colorRange) {
  if (!colorRange) return null; // if (colorRange.reversed) return colorRange;

  return _objectSpread({}, colorRange, {
    reversed: reversed,
    colors: colorRange.colors.slice().reverse()
  });
}
/**
 * given a list of rgb arrays it will generate a linear gradient css rule
 * @param direction
 * @param colors
 * @return {string}
 */


function createLinearGradient(direction, colors) {
  var step = parseFloat(100.0 / colors.length).toFixed(2);
  var bands = colors.map(function (rgb, index) {
    return "rgba(".concat(rgb.join(','), ", 1) ").concat(step * index, "%, rgba(").concat(rgb.join(','), ", 1) ").concat(step * (index + 1), "%");
  });
  return "linear-gradient(to ".concat(direction, ", ").concat(bands.join(','), ")");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb2xvci11dGlscy5qcyJdLCJuYW1lcyI6WyJoZXhUb1JnYiIsImhleCIsInJlc3VsdCIsImlzSGV4Q29sb3IiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsImV4ZWMiLCJQYWROdW0iLCJjIiwidG9TdHJpbmciLCJsZW5ndGgiLCJyZ2JUb0hleCIsIm1hcCIsIm4iLCJqb2luIiwidG9VcHBlckNhc2UiLCJnZXRDb2xvckdyb3VwQnlOYW1lIiwiY29sb3JSYW5nZSIsIm5hbWUiLCJyZXBsYWNlIiwicmV2ZXJzZUNvbG9yUmFuZ2UiLCJyZXZlcnNlZCIsImNvbG9ycyIsInNsaWNlIiwicmV2ZXJzZSIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiZGlyZWN0aW9uIiwic3RlcCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiYmFuZHMiLCJyZ2IiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUM1QixNQUFNQyxNQUFNLEdBQUdDLFVBQVUsQ0FBQ0YsR0FBRCxDQUF6Qjs7QUFFQSxNQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLFdBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBUDtBQUNEOztBQUVELE1BQU1FLENBQUMsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVksRUFBWixDQUFsQjtBQUNBLE1BQU1JLENBQUMsR0FBR0QsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVksRUFBWixDQUFsQjtBQUNBLE1BQU1LLENBQUMsR0FBR0YsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVksRUFBWixDQUFsQjtBQUVBLFNBQU8sQ0FBQ0UsQ0FBRCxFQUFJRSxDQUFKLEVBQU9DLENBQVAsQ0FBUDtBQUNEOztBQUVNLFNBQVNKLFVBQVQsQ0FBb0JGLEdBQXBCLEVBQXlCO0FBQzlCLE1BQU1DLE1BQU0sR0FBRyw0Q0FBNENNLElBQTVDLENBQWlEUCxHQUFqRCxDQUFmO0FBRUEsU0FBT0MsTUFBUDtBQUNEOztBQUVELFNBQVNPLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2pCLE1BQU1ULEdBQUcsR0FBR1MsQ0FBQyxDQUFDQyxRQUFGLENBQVcsRUFBWCxDQUFaO0FBQ0EsU0FBT1YsR0FBRyxDQUFDVyxNQUFKLEtBQWUsQ0FBZixjQUF1QlgsR0FBdkIsSUFBK0JBLEdBQXRDO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTWSxRQUFULE9BQTZCO0FBQUE7QUFBQSxNQUFWVCxDQUFVO0FBQUEsTUFBUEUsQ0FBTztBQUFBLE1BQUpDLENBQUk7O0FBQ2xDLFNBQU8sV0FBSSxDQUFDSCxDQUFELEVBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVTyxHQUFWLENBQWMsVUFBQUMsQ0FBQztBQUFBLFdBQUlOLE1BQU0sQ0FBQ00sQ0FBRCxDQUFWO0FBQUEsR0FBZixFQUE4QkMsSUFBOUIsQ0FBbUMsRUFBbkMsQ0FBSixFQUE2Q0MsV0FBN0MsRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9PLFNBQVNDLG1CQUFULENBQTZCQyxVQUE3QixFQUF5QztBQUM5QyxNQUFJLENBQUNBLFVBQUQsSUFBZSxPQUFPQSxVQUFVLENBQUNDLElBQWxCLEtBQTJCLFFBQTlDLEVBQXdEO0FBQ3RELFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU9ELFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsT0FBaEIsQ0FBd0IsZUFBeEIsRUFBeUMsRUFBekMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTQyxpQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUNKLFVBQXJDLEVBQWlEO0FBQ3RELE1BQUksQ0FBQ0EsVUFBTCxFQUFpQixPQUFPLElBQVAsQ0FEcUMsQ0FFdEQ7O0FBQ0EsMkJBQ0tBLFVBREw7QUFFRUksSUFBQUEsUUFBUSxFQUFSQSxRQUZGO0FBR0VDLElBQUFBLE1BQU0sRUFBRUwsVUFBVSxDQUFDSyxNQUFYLENBQWtCQyxLQUFsQixHQUEwQkMsT0FBMUI7QUFIVjtBQUtEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDSixNQUF6QyxFQUFpRDtBQUN0RCxNQUFNSyxJQUFJLEdBQUdDLFVBQVUsQ0FBQyxRQUFRTixNQUFNLENBQUNaLE1BQWhCLENBQVYsQ0FBa0NtQixPQUFsQyxDQUEwQyxDQUExQyxDQUFiO0FBQ0EsTUFBTUMsS0FBSyxHQUFHUixNQUFNLENBQUNWLEdBQVAsQ0FBVyxVQUFDbUIsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZDLDBCQUFlRCxHQUFHLENBQUNqQixJQUFKLENBQVMsR0FBVCxDQUFmLGtCQUFvQ2EsSUFBSSxHQUFHSyxLQUEzQyxxQkFBMkRELEdBQUcsQ0FBQ2pCLElBQUosQ0FBUyxHQUFULENBQTNELGtCQUFnRmEsSUFBSSxJQUNqRkssS0FBSyxHQUFHLENBRHlFLENBQXBGO0FBRUQsR0FIYSxDQUFkO0FBS0Esc0NBQTZCTixTQUE3QixlQUEyQ0ksS0FBSyxDQUFDaEIsSUFBTixDQUFXLEdBQVgsQ0FBM0M7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qKlxuICogZ2V0IHIgZyBiIGZyb20gaGV4IGNvZGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaGV4XG4gKiBAcmV0dXJucyB7YXJyYXl9IGFycmF5IG9mIHIgZyBic1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGlzSGV4Q29sb3IoaGV4KTtcblxuICBpZiAoIXJlc3VsdCkge1xuICAgIHJldHVybiBbMCwgMCwgMF07XG4gIH1cblxuICBjb25zdCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xuXG4gIHJldHVybiBbciwgZywgYl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hleENvbG9yKGhleCkge1xuICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBQYWROdW0oYykge1xuICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBgMCR7aGV4fWAgOiBoZXg7XG59XG5cbi8qKlxuICogZ2V0IGhleCBmcm9tIHIgZyBiXG4gKlxuICogQHBhcmFtIHthcnJheX0gcmdiXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBoZXggc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChbciwgZywgYl0pIHtcbiAgcmV0dXJuIGAjJHtbciwgZywgYl0ubWFwKG4gPT4gUGFkTnVtKG4pKS5qb2luKCcnKX1gLnRvVXBwZXJDYXNlKCk7XG59XG5cbi8qKlxuICogR2V0IGNvbG9yIGdyb3VwIG5hbWUgYnkgcGFyc2luZyBuYW1lLCBkaXNjYXJkIHN0ZXAgaW4gdGhlIG5hbWVcbiAqIGUuZy4gR2xvYmFsIFdhcm1pbmcgNiAtPiBHbG9iYWwgV2FybWluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvclJhbmdlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xvckdyb3VwQnlOYW1lKGNvbG9yUmFuZ2UpIHtcbiAgaWYgKCFjb2xvclJhbmdlIHx8IHR5cGVvZiBjb2xvclJhbmdlLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gY29sb3JSYW5nZS5uYW1lLnJlcGxhY2UoL1xcYlteYS16QS1aXSskLywgJycpO1xufVxuXG4vKipcbiAqIEdldCBhIHJldmVyc2VkIGNvbG9yUmFuZ2VcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmV2ZXJzZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvclJhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlQ29sb3JSYW5nZShyZXZlcnNlZCwgY29sb3JSYW5nZSkge1xuICBpZiAoIWNvbG9yUmFuZ2UpIHJldHVybiBudWxsO1xuICAvLyBpZiAoY29sb3JSYW5nZS5yZXZlcnNlZCkgcmV0dXJuIGNvbG9yUmFuZ2U7XG4gIHJldHVybiB7XG4gICAgLi4uY29sb3JSYW5nZSxcbiAgICByZXZlcnNlZCxcbiAgICBjb2xvcnM6IGNvbG9yUmFuZ2UuY29sb3JzLnNsaWNlKCkucmV2ZXJzZSgpXG4gIH07XG59XG5cbi8qKlxuICogZ2l2ZW4gYSBsaXN0IG9mIHJnYiBhcnJheXMgaXQgd2lsbCBnZW5lcmF0ZSBhIGxpbmVhciBncmFkaWVudCBjc3MgcnVsZVxuICogQHBhcmFtIGRpcmVjdGlvblxuICogQHBhcmFtIGNvbG9yc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluZWFyR3JhZGllbnQoZGlyZWN0aW9uLCBjb2xvcnMpIHtcbiAgY29uc3Qgc3RlcCA9IHBhcnNlRmxvYXQoMTAwLjAgLyBjb2xvcnMubGVuZ3RoKS50b0ZpeGVkKDIpO1xuICBjb25zdCBiYW5kcyA9IGNvbG9ycy5tYXAoKHJnYiwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZ2Iuam9pbignLCcpfSwgMSkgJHtzdGVwICogaW5kZXh9JSwgcmdiYSgke3JnYi5qb2luKCcsJyl9LCAxKSAke3N0ZXAgKlxuICAgICAgKGluZGV4ICsgMSl9JWA7XG4gIH0pO1xuXG4gIHJldHVybiBgbGluZWFyLWdyYWRpZW50KHRvICR7ZGlyZWN0aW9ufSwgJHtiYW5kcy5qb2luKCcsJyl9KWA7XG59XG4iXX0=