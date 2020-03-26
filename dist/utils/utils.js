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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUhhc2hJZCIsImNvdW50IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiaXNDaHJvbWUiLCJ3aW5kb3ciLCJjaHJvbWUiLCJ3ZWJzdG9yZSIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2FtZWxUb1RpdGxlIiwiYnJlYWtXb3JkIiwicmVwbGFjZSIsImdldEhUTUxNYXBNb2RlVGlsZVVybCIsIm1vZGUiLCJ0b0xvd2VyQ2FzZSIsInRvQXJyYXkiLCJpdGVtIiwiaW5zZXJ0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImxlbmd0aCIsImlzT2JqZWN0Iiwic2V0UGF0aCIsIm5leHQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldCIsInBhdGgiLCJnZXRFcnJvciIsImVyciIsIkVycm9yIiwibWVzc2FnZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNBLGNBQVQsR0FBbUM7QUFBQSxNQUFYQyxLQUFXLHVFQUFILENBQUc7QUFDeEMsU0FBT0MsSUFBSSxDQUFDQyxNQUFMLEdBQ0pDLFFBREksQ0FDSyxFQURMLEVBRUpDLE1BRkksQ0FFR0osS0FGSCxDQUFQO0FBR0Q7QUFFRDs7Ozs7O0FBSU8sU0FBU0ssUUFBVCxHQUFvQjtBQUN6QjtBQUNBLFNBQU9DLG1CQUFPQyxNQUFQLElBQWlCRCxtQkFBT0MsTUFBUCxDQUFjQyxRQUF0QztBQUNEO0FBRUQ7Ozs7OztBQUlPLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQ2pDLFNBQU9BLEdBQUcsS0FBS0MsTUFBTSxDQUFDRCxHQUFELENB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QUEsU0FBdUJBLEdBQUcsS0FBSyxJQUFSLEdBQWVBLEdBQWYsR0FBcUJzQixPQUFPLENBQUNJLElBQUQsRUFBT1AsS0FBUCxFQUFjbkIsR0FBZCxDQUFuRDtBQUFBLENBQVo7QUFFUDs7Ozs7Ozs7Ozs7OztBQVNPLFNBQVMyQixRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUM1QixNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNSLFdBQU8sc0JBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQixXQUFPQSxHQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLEdBQUcsWUFBWUMsS0FBbkIsRUFBMEI7QUFDL0IsV0FBT0QsR0FBRyxDQUFDRSxPQUFYO0FBQ0QsR0FGTSxNQUVBLElBQUkseUJBQU9GLEdBQVAsTUFBZSxRQUFuQixFQUE2QjtBQUNsQyxXQUFPQSxHQUFHLENBQUNHLEtBQUosR0FDSEosUUFBUSxDQUFDQyxHQUFHLENBQUNHLEtBQUwsQ0FETCxHQUVISCxHQUFHLENBQUNBLEdBQUosR0FDQUQsUUFBUSxDQUFDQyxHQUFHLENBQUNBLEdBQUwsQ0FEUixHQUVBQSxHQUFHLENBQUNFLE9BQUosR0FDQUgsUUFBUSxDQUFDQyxHQUFHLENBQUNFLE9BQUwsQ0FEUixHQUVBRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsR0FBZixDQU5KO0FBT0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgaGFzaCBzdHJpbmcgYmFzZWQgb24gbnVtYmVyIG9mIGNoYXJhY3RlclxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBoYXNoIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIYXNoSWQoY291bnQgPSA2KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5zdWJzdHIoY291bnQpO1xufVxuXG4vKipcbiAqIERldGVjdCBjaHJvbWVcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHllcyBvciBub1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gIC8vIENocm9tZSAxK1xuICByZXR1cm4gd2luZG93LmNocm9tZSAmJiB3aW5kb3cuY2hyb21lLndlYnN0b3JlO1xufVxuXG4vKipcbiAqIHdoZXRoZXIgaXMgYW4gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB5ZXMgb3Igbm9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpIDogc3RyO1xufVxuXG4vKipcbiAqIENvbnZlcnQgY2FtZWwgc3R5bGUgbmFtZXMgdG8gdGl0bGVcbiAqIHN0cm9rZUNvbG9yIC0+IFN0cm9rZSBDb2xvclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9UaXRsZShzdHIpIHtcbiAgY29uc3QgYnJlYWtXb3JkID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJyAkMScpO1xuICByZXR1cm4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJyZWFrV29yZCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW1nIHVybCBmb3IgYSBnaXZlbiBtYXAgZXhwb3J0IG9wdGlvblxuICogQHBhcmFtIG1vZGUgZXhwb3J0IG9wdGlvblxuICogQHJldHVybiB7c3RyaW5nfSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhUTUxNYXBNb2RlVGlsZVVybChtb2RlKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9kMWEzZjRzcGF6enJwNC5jbG91ZGZyb250Lm5ldC9rZXBsZXIuZ2wvZG9jdW1lbnRhdGlvbi9tYXAtJHttb2RlLnRvTG93ZXJDYXNlKCl9LW1vZGUucG5nYDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBub24tYXJyYXlzIHRvIGFycmF5cy4gIExlYXZlcyBhcnJheXMgYWxvbmUuICBDb252ZXJ0c1xuICogdW5kZWZpbmVkIHZhbHVlcyB0byBlbXB0eSBhcnJheXMgKFtdIGluc3RlYWQgb2YgW3VuZGVmaW5lZF0pLlxuICogT3RoZXJ3aXNlLCBqdXN0IHJldHVybnMgW2l0ZW1dIGZvciBub24tYXJyYXkgaXRlbXMuXG4gKlxuICogQHBhcmFtIHsqfSBpdGVtXG4gKiBAcmV0dXJucyB7YXJyYXl9IGJvb20hIG11Y2ggYXJyYXkuIHZlcnkgaW5kZXhlZC4gc28gdXNlZnVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShpdGVtKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBpZiAodHlwZW9mIGl0ZW0gPT09ICd1bmRlZmluZWQnIHx8IGl0ZW0gPT09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gW2l0ZW1dO1xufVxuXG4vKipcbiAqIGltbXV0YWJseSBpbnNlcnQgdmFsdWUgdG8gYW4gQXJyYXkgb3IgT2JqZWN0XG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gb2JqXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge0FycmF5fE9iamVjdH1cbiAqL1xuY29uc3QgaW5zZXJ0VmFsdWUgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikgJiYgdHlwZW9mIGtleSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gWy4uLm9iai5zbGljZSgwLCBrZXkpLCB2YWx1ZSwgLi4ub2JqLnNsaWNlKGtleSArIDEsIG9iai5sZW5ndGgpXTtcbiAgfVxuXG4gIHJldHVybiB7Li4ub2JqLCBba2V5XTogdmFsdWV9O1xufTtcblxuLyoqXG4gKiBjaGVjayBpZiB2YWx1ZSBpcyBhIGxvb3NlIG9iamVjdCBpbmNsdWRpbmcgYSBwbGFpbiBvYmplY3QsIGFycmF5LCBmdW5jdGlvblxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmNvbnN0IHNldFBhdGggPSAoW2tleSwgLi4ubmV4dF0sIHZhbHVlLCBvYmopID0+IHtcbiAgLy8gaXMgT2JqZWN0IGFsbG93cyBqcyBvYmplY3QsIGFycmF5IGFuZCBmdW5jdGlvblxuICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG5leHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGluc2VydFZhbHVlKG9iaiwga2V5LCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gaW5zZXJ0VmFsdWUob2JqLCBrZXksIHNldFBhdGgobmV4dCwgdmFsdWUsIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpID8gb2JqW2tleV0gOiB7fSkpO1xufTtcblxuLyoqXG4gKiBJbW11dGFibGUgdmVyc2lvbiBvZiBfLnNldFxuICogQHBhcmFtIHtBcnJheTxTdHJpbmd8TnVtYmVyPn0gcGF0aFxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldCA9IChwYXRoLCB2YWx1ZSwgb2JqKSA9PiAob2JqID09PSBudWxsID8gb2JqIDogc2V0UGF0aChwYXRoLCB2YWx1ZSwgb2JqKSk7XG5cbi8qKlxuICogR2V0IGVycm9yIGluZm9ybWF0aW9uIG9mIHVua25vd24gdHlwZVxuICogRXh0cmFjdHMgYXMgbXVjaCBodW1hbiByZWFkYWJsZSBpbmZvcm1hdGlvbiBhcyBwb3NzaWJsZVxuICogRW5zdXJlIHJlc3VsdCBpcyBhbiBFcnJvciBvYmplY3Qgc3VpdGFibGUgZm9yIHRocm93IG9yIHByb21pc2UgcmVqZWN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gIGVyciAtIFVua25vd24gZXJyb3JcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBodW1hbiByZWFkYWJsZSBlcnJvciBtc2dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yKGVycikge1xuICBpZiAoIWVycikge1xuICAgIHJldHVybiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlcnIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfSBlbHNlIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiBlcnIubWVzc2FnZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXJyID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcnIuZXJyb3JcbiAgICAgID8gZ2V0RXJyb3IoZXJyLmVycm9yKVxuICAgICAgOiBlcnIuZXJyXG4gICAgICA/IGdldEVycm9yKGVyci5lcnIpXG4gICAgICA6IGVyci5tZXNzYWdlXG4gICAgICA/IGdldEVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgOiBKU09OLnN0cmluZ2lmeShlcnIpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=