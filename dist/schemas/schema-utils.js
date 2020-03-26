"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savePropertiesOrApplySchema = savePropertiesOrApplySchema;
exports.loadPropertiesOrApplySchema = loadPropertiesOrApplySchema;
exports.getPropertyValueFromSchema = getPropertyValueFromSchema;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
 * Recursively save / load value for state based on property keys,
 * if property[key] is another schema
 * Use is to get value to save
 * @param {Object} opertation - 'save' or 'load'
 * @param {Object} state - state to save
 * @param {Object} properties - properties schema
 * @returns {Object} - saved state
 */
function savePropertiesOrApplySchema(state, properties) {
  return getPropertyValueFromSchema('save', state, properties);
}

function loadPropertiesOrApplySchema(state, properties) {
  return getPropertyValueFromSchema('load', state, properties);
}

function getPropertyValueFromSchema(operation, state, properties) {
  return Object.keys(properties).reduce(function (accu, key) {
    return _objectSpread({}, accu, {}, key in state ? properties[key] ? // if it's another schema
    properties[key][operation] ? // call save or load
    properties[key][operation](state[key], state) : // if it's another property object
    getPropertyValueFromSchema(operation, state[key], properties[key]) : (0, _defineProperty2["default"])({}, key, state[key]) : {});
  }, {});
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS11dGlscy5qcyJdLCJuYW1lcyI6WyJzYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEiLCJzdGF0ZSIsInByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSIsImxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYSIsIm9wZXJhdGlvbiIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTTyxTQUFTQSwyQkFBVCxDQUFxQ0MsS0FBckMsRUFBNENDLFVBQTVDLEVBQXdEO0FBQzdELFNBQU9DLDBCQUEwQixDQUFDLE1BQUQsRUFBU0YsS0FBVCxFQUFnQkMsVUFBaEIsQ0FBakM7QUFDRDs7QUFFTSxTQUFTRSwyQkFBVCxDQUFxQ0gsS0FBckMsRUFBNENDLFVBQTVDLEVBQXdEO0FBQzdELFNBQU9DLDBCQUEwQixDQUFDLE1BQUQsRUFBU0YsS0FBVCxFQUFnQkMsVUFBaEIsQ0FBakM7QUFDRDs7QUFFTSxTQUFTQywwQkFBVCxDQUFvQ0UsU0FBcEMsRUFBK0NKLEtBQS9DLEVBQXNEQyxVQUF0RCxFQUFrRTtBQUN2RSxTQUFPSSxNQUFNLENBQUNDLElBQVAsQ0FBWUwsVUFBWixFQUF3Qk0sTUFBeEIsQ0FDTCxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSw2QkFDS0QsSUFETCxNQUVNQyxHQUFHLElBQUlULEtBQVAsR0FDQUMsVUFBVSxDQUFDUSxHQUFELENBQVYsR0FDRTtBQUNBUixJQUFBQSxVQUFVLENBQUNRLEdBQUQsQ0FBVixDQUFnQkwsU0FBaEIsSUFDRTtBQUNBSCxJQUFBQSxVQUFVLENBQUNRLEdBQUQsQ0FBVixDQUFnQkwsU0FBaEIsRUFBMkJKLEtBQUssQ0FBQ1MsR0FBRCxDQUFoQyxFQUF1Q1QsS0FBdkMsQ0FGRixHQUdFO0FBQ0FFLElBQUFBLDBCQUEwQixDQUFDRSxTQUFELEVBQVlKLEtBQUssQ0FBQ1MsR0FBRCxDQUFqQixFQUF3QlIsVUFBVSxDQUFDUSxHQUFELENBQWxDLENBTjlCLHdDQU9JQSxHQVBKLEVBT1VULEtBQUssQ0FBQ1MsR0FBRCxDQVBmLENBREEsR0FTQSxFQVhOO0FBQUEsR0FESyxFQWNMLEVBZEssQ0FBUDtBQWdCRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qKlxuICogUmVjdXJzaXZlbHkgc2F2ZSAvIGxvYWQgdmFsdWUgZm9yIHN0YXRlIGJhc2VkIG9uIHByb3BlcnR5IGtleXMsXG4gKiBpZiBwcm9wZXJ0eVtrZXldIGlzIGFub3RoZXIgc2NoZW1hXG4gKiBVc2UgaXMgdG8gZ2V0IHZhbHVlIHRvIHNhdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcGVydGF0aW9uIC0gJ3NhdmUnIG9yICdsb2FkJ1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gc3RhdGUgdG8gc2F2ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSBwcm9wZXJ0aWVzIHNjaGVtYVxuICogQHJldHVybnMge09iamVjdH0gLSBzYXZlZCBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKHN0YXRlLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSgnc2F2ZScsIHN0YXRlLCBwcm9wZXJ0aWVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShzdGF0ZSwgcHJvcGVydGllcykge1xuICByZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZUZyb21TY2hlbWEoJ2xvYWQnLCBzdGF0ZSwgcHJvcGVydGllcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYShvcGVyYXRpb24sIHN0YXRlLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5yZWR1Y2UoXG4gICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICAuLi4oa2V5IGluIHN0YXRlXG4gICAgICAgID8gcHJvcGVydGllc1trZXldXG4gICAgICAgICAgPyAvLyBpZiBpdCdzIGFub3RoZXIgc2NoZW1hXG4gICAgICAgICAgICBwcm9wZXJ0aWVzW2tleV1bb3BlcmF0aW9uXVxuICAgICAgICAgICAgPyAvLyBjYWxsIHNhdmUgb3IgbG9hZFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2tleV1bb3BlcmF0aW9uXShzdGF0ZVtrZXldLCBzdGF0ZSlcbiAgICAgICAgICAgIDogLy8gaWYgaXQncyBhbm90aGVyIHByb3BlcnR5IG9iamVjdFxuICAgICAgICAgICAgICBnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYShvcGVyYXRpb24sIHN0YXRlW2tleV0sIHByb3BlcnRpZXNba2V5XSlcbiAgICAgICAgICA6IHtba2V5XTogc3RhdGVba2V5XX1cbiAgICAgICAgOiB7fSlcbiAgICB9KSxcbiAgICB7fVxuICApO1xufVxuIl19