"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHashId = generateHashId;
exports.isChrome = isChrome;
exports.isPlainObject = isPlainObject;
exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.camelToTitle = camelToTitle;
exports.getHTMLMapModeTileUrl = getHTMLMapModeTileUrl;
exports.toArray = toArray;
exports.isObject = isObject;
exports.getError = getError;
exports.set = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _window = _interopRequireDefault(require("global/window"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Generate a hash string based on number of character
 * @param {number} count
 * @returns {string} hash string
 */
function generateHashId() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  return Math.random().toString(36).substr(count);
}
/**
 * Detect chrome
 * @returns {boolean} - yes or no
 */


function isChrome() {
  // Chrome 1+
  return _window["default"].chrome && _window["default"].chrome.webstore;
}
/**
 * whether is an object
 * @returns {boolean} - yes or no
 */


function isPlainObject(obj) {
  return obj === Object(obj) && typeof obj !== 'function' && !Array.isArray(obj);
}
/**
 * Capitalize first letter of a string
 * @param {string} str
 * @returns {string}
 */


function capitalizeFirstLetter(str) {
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
/**
 * Convert camel style names to title
 * strokeColor -> Stroke Color
 * @param {string} str
 * @returns {string}
 */


function camelToTitle(str) {
  var breakWord = str.replace(/([A-Z])/g, ' $1');
  return capitalizeFirstLetter(breakWord);
}
/**
 * Returns the img url for a given map export option
 * @param mode export option
 * @return {string} url
 */


function getHTMLMapModeTileUrl(mode) {
  return "https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/documentation/map-".concat(mode.toLowerCase(), "-mode.png");
}
/**
 * Converts non-arrays to arrays.  Leaves arrays alone.  Converts
 * undefined values to empty arrays ([] instead of [undefined]).
 * Otherwise, just returns [item] for non-array items.
 *
 * @param {*} item
 * @returns {array} boom! much array. very indexed. so useful.
 */


function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  if (typeof item === 'undefined' || item === null) {
    return [];
  }

  return [item];
}
/**
 * immutably insert value to an Array or Object
 * @param {Array|Object} obj
 * @param {Number|String} key
 * @param {*} value
 * @returns {Array|Object}
 */


var insertValue = function insertValue(obj, key, value) {
  if (Array.isArray(obj) && typeof key === 'number') {
    return [].concat((0, _toConsumableArray2["default"])(obj.slice(0, key)), [value], (0, _toConsumableArray2["default"])(obj.slice(key + 1, obj.length)));
  }

  return _objectSpread({}, obj, (0, _defineProperty2["default"])({}, key, value));
};
/**
 * check if value is a loose object including a plain object, array, function
 * @param {*} value
 */


function isObject(value) {
  return value !== null && ((0, _typeof2["default"])(value) === 'object' || typeof value === 'function');
}

var setPath = function setPath(_ref, value, obj) {
  var _ref2 = (0, _toArray2["default"])(_ref),
      key = _ref2[0],
      next = _ref2.slice(1);

  // is Object allows js object, array and function
  if (!isObject(obj)) {
    return obj;
  }

  if (next.length === 0) {
    return insertValue(obj, key, value);
  }

  return insertValue(obj, key, setPath(next, value, obj.hasOwnProperty(key) ? obj[key] : {}));
};
/**
 * Immutable version of _.set
 * @param {Array<String|Number>} path
 * @param {*} value
 * @param {Object} obj
 * @returns {Object}
 */


var set = function set(path, value, obj) {
  return obj === null ? obj : setPath(path, value, obj);
};
/**
 * Get error information of unknown type
 * Extracts as much human readable information as possible
 * Ensure result is an Error object suitable for throw or promise rejection
 *
 * @private
 * @param {*}  err - Unknown error
 * @return {string} - human readable error msg
 */


exports.set = set;

function getError(err) {
  if (!err) {
    return 'Something went wrong';
  }

  if (typeof err === 'string') {
    return err;
  } else if (err instanceof Error) {
    return err.message;
  } else if ((0, _typeof2["default"])(err) === 'object') {
    return err.error ? getError(err.error) : err.err ? getError(err.err) : err.message ? getError(err.message) : JSON.stringify(err);
  }

  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUhhc2hJZCIsImNvdW50IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiaXNDaHJvbWUiLCJ3aW5kb3ciLCJjaHJvbWUiLCJ3ZWJzdG9yZSIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2FtZWxUb1RpdGxlIiwiYnJlYWtXb3JkIiwicmVwbGFjZSIsImdldEhUTUxNYXBNb2RlVGlsZVVybCIsIm1vZGUiLCJ0b0xvd2VyQ2FzZSIsInRvQXJyYXkiLCJpdGVtIiwiaW5zZXJ0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImxlbmd0aCIsImlzT2JqZWN0Iiwic2V0UGF0aCIsIm5leHQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldCIsInBhdGgiLCJnZXRFcnJvciIsImVyciIsIkVycm9yIiwibWVzc2FnZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNBLGNBQVQsR0FBbUM7QUFBQSxNQUFYQyxLQUFXLHVFQUFILENBQUc7QUFDeEMsU0FBT0MsSUFBSSxDQUFDQyxNQUFMLEdBQ0pDLFFBREksQ0FDSyxFQURMLEVBRUpDLE1BRkksQ0FFR0osS0FGSCxDQUFQO0FBR0Q7QUFFRDs7Ozs7O0FBSU8sU0FBU0ssUUFBVCxHQUFvQjtBQUN6QjtBQUNBLFNBQU9DLG1CQUFPQyxNQUFQLElBQWlCRCxtQkFBT0MsTUFBUCxDQUFjQyxRQUF0QztBQUNEO0FBRUQ7Ozs7OztBQUlPLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQ2pDLFNBQU9BLEdBQUcsS0FBS0MsTUFBTSxDQUFDRCxHQUFELENB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QUEsU0FBdUJBLEdBQUcsS0FBSyxJQUFSLEdBQWVBLEdBQWYsR0FBcUJzQixPQUFPLENBQUNJLElBQUQsRUFBT1AsS0FBUCxFQUFjbkIsR0FBZCxDQUFuRDtBQUFBLENBQVo7QUFFUDs7Ozs7Ozs7Ozs7OztBQVNPLFNBQVMyQixRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUM1QixNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNSLFdBQU8sc0JBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQixXQUFPQSxHQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLEdBQUcsWUFBWUMsS0FBbkIsRUFBMEI7QUFDL0IsV0FBT0QsR0FBRyxDQUFDRSxPQUFYO0FBQ0QsR0FGTSxNQUVBLElBQUkseUJBQU9GLEdBQVAsTUFBZSxRQUFuQixFQUE2QjtBQUNsQyxXQUFPQSxHQUFHLENBQUNHLEtBQUosR0FDSEosUUFBUSxDQUFDQyxHQUFHLENBQUNHLEtBQUwsQ0FETCxHQUVISCxHQUFHLENBQUNBLEdBQUosR0FDQUQsUUFBUSxDQUFDQyxHQUFHLENBQUNBLEdBQUwsQ0FEUixHQUVBQSxHQUFHLENBQUNFLE9BQUosR0FDQUgsUUFBUSxDQUFDQyxHQUFHLENBQUNFLE9BQUwsQ0FEUixHQUVBRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsR0FBZixDQU5KO0FBT0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgaGFzaCBzdHJpbmcgYmFzZWQgb24gbnVtYmVyIG9mIGNoYXJhY3RlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcclxuICogQHJldHVybnMge3N0cmluZ30gaGFzaCBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhhc2hJZChjb3VudCA9IDYpIHtcclxuICByZXR1cm4gTWF0aC5yYW5kb20oKVxyXG4gICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgLnN1YnN0cihjb3VudCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlY3QgY2hyb21lXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHllcyBvciBub1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lKCkge1xyXG4gIC8vIENocm9tZSAxK1xyXG4gIHJldHVybiB3aW5kb3cuY2hyb21lICYmIHdpbmRvdy5jaHJvbWUud2Vic3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB3aGV0aGVyIGlzIGFuIG9iamVjdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB5ZXMgb3Igbm9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xyXG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpIDogc3RyO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBjYW1lbCBzdHlsZSBuYW1lcyB0byB0aXRsZVxyXG4gKiBzdHJva2VDb2xvciAtPiBTdHJva2UgQ29sb3JcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9UaXRsZShzdHIpIHtcclxuICBjb25zdCBicmVha1dvcmQgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAnICQxJyk7XHJcbiAgcmV0dXJuIGNhcGl0YWxpemVGaXJzdExldHRlcihicmVha1dvcmQpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgaW1nIHVybCBmb3IgYSBnaXZlbiBtYXAgZXhwb3J0IG9wdGlvblxyXG4gKiBAcGFyYW0gbW9kZSBleHBvcnQgb3B0aW9uXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gdXJsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SFRNTE1hcE1vZGVUaWxlVXJsKG1vZGUpIHtcclxuICByZXR1cm4gYGh0dHBzOi8vZDFhM2Y0c3BhenpycDQuY2xvdWRmcm9udC5uZXQva2VwbGVyLmdsL2RvY3VtZW50YXRpb24vbWFwLSR7bW9kZS50b0xvd2VyQ2FzZSgpfS1tb2RlLnBuZ2A7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBub24tYXJyYXlzIHRvIGFycmF5cy4gIExlYXZlcyBhcnJheXMgYWxvbmUuICBDb252ZXJ0c1xyXG4gKiB1bmRlZmluZWQgdmFsdWVzIHRvIGVtcHR5IGFycmF5cyAoW10gaW5zdGVhZCBvZiBbdW5kZWZpbmVkXSkuXHJcbiAqIE90aGVyd2lzZSwganVzdCByZXR1cm5zIFtpdGVtXSBmb3Igbm9uLWFycmF5IGl0ZW1zLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IGl0ZW1cclxuICogQHJldHVybnMge2FycmF5fSBib29tISBtdWNoIGFycmF5LiB2ZXJ5IGluZGV4ZWQuIHNvIHVzZWZ1bC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGl0ZW0pIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGl0ZW0gPT09ICd1bmRlZmluZWQnIHx8IGl0ZW0gPT09IG51bGwpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbaXRlbV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpbW11dGFibHkgaW5zZXJ0IHZhbHVlIHRvIGFuIEFycmF5IG9yIE9iamVjdFxyXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gb2JqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICogQHJldHVybnMge0FycmF5fE9iamVjdH1cclxuICovXHJcbmNvbnN0IGluc2VydFZhbHVlID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikgJiYgdHlwZW9mIGtleSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBbLi4ub2JqLnNsaWNlKDAsIGtleSksIHZhbHVlLCAuLi5vYmouc2xpY2Uoa2V5ICsgMSwgb2JqLmxlbmd0aCldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsuLi5vYmosIFtrZXldOiB2YWx1ZX07XHJcbn07XHJcblxyXG4vKipcclxuICogY2hlY2sgaWYgdmFsdWUgaXMgYSBsb29zZSBvYmplY3QgaW5jbHVkaW5nIGEgcGxhaW4gb2JqZWN0LCBhcnJheSwgZnVuY3Rpb25cclxuICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyk7XHJcbn1cclxuXHJcbmNvbnN0IHNldFBhdGggPSAoW2tleSwgLi4ubmV4dF0sIHZhbHVlLCBvYmopID0+IHtcclxuICAvLyBpcyBPYmplY3QgYWxsb3dzIGpzIG9iamVjdCwgYXJyYXkgYW5kIGZ1bmN0aW9uXHJcbiAgaWYgKCFpc09iamVjdChvYmopKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5leHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gaW5zZXJ0VmFsdWUob2JqLCBrZXksIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnNlcnRWYWx1ZShvYmosIGtleSwgc2V0UGF0aChuZXh0LCB2YWx1ZSwgb2JqLmhhc093blByb3BlcnR5KGtleSkgPyBvYmpba2V5XSA6IHt9KSk7XHJcbn07XHJcblxyXG4vKipcclxuICogSW1tdXRhYmxlIHZlcnNpb24gb2YgXy5zZXRcclxuICogQHBhcmFtIHtBcnJheTxTdHJpbmd8TnVtYmVyPn0gcGF0aFxyXG4gKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXQgPSAocGF0aCwgdmFsdWUsIG9iaikgPT4gKG9iaiA9PT0gbnVsbCA/IG9iaiA6IHNldFBhdGgocGF0aCwgdmFsdWUsIG9iaikpO1xyXG5cclxuLyoqXHJcbiAqIEdldCBlcnJvciBpbmZvcm1hdGlvbiBvZiB1bmtub3duIHR5cGVcclxuICogRXh0cmFjdHMgYXMgbXVjaCBodW1hbiByZWFkYWJsZSBpbmZvcm1hdGlvbiBhcyBwb3NzaWJsZVxyXG4gKiBFbnN1cmUgcmVzdWx0IGlzIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3cgb3IgcHJvbWlzZSByZWplY3Rpb25cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSAgZXJyIC0gVW5rbm93biBlcnJvclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gaHVtYW4gcmVhZGFibGUgZXJyb3IgbXNnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3IoZXJyKSB7XHJcbiAgaWYgKCFlcnIpIHtcclxuICAgIHJldHVybiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBlcnIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH0gZWxzZSBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgIHJldHVybiBlcnIubWVzc2FnZTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBlcnIgPT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gZXJyLmVycm9yXHJcbiAgICAgID8gZ2V0RXJyb3IoZXJyLmVycm9yKVxyXG4gICAgICA6IGVyci5lcnJcclxuICAgICAgPyBnZXRFcnJvcihlcnIuZXJyKVxyXG4gICAgICA6IGVyci5tZXNzYWdlXHJcbiAgICAgID8gZ2V0RXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICAgIDogSlNPTi5zdHJpbmdpZnkoZXJyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcbiJdfQ==