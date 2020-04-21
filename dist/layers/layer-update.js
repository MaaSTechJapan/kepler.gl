"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffUpdateTriggers = diffUpdateTriggers;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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

/* eslint-disable guard-for-in */

/**
 *
 * @param {Object} updateTriggers {getPosition: {column}, getData: {filteredIndex}}
 * @param {Object} oldUpdateTriggers
 * @returns {Boolean|Object} `false` if nothing changed, or `triggerChanged` as an object
 */
function diffUpdateTriggers(updateTriggers) {
  var oldUpdateTriggers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var triggerChanged = {};
  var reason = false;

  for (var triggerName in updateTriggers) {
    var newTriggers = updateTriggers[triggerName] || {};
    var oldTriggers = oldUpdateTriggers[triggerName] || {};
    var diffReason = compareUpdateTrigger(newTriggers, oldTriggers, triggerName);

    if (diffReason) {
      triggerChanged[triggerName] = true;
      reason = triggerChanged;
    }
  }

  return reason;
}

function compareUpdateTrigger(newTriggers, oldTriggers, triggerName) {
  if ((0, _typeof2["default"])(oldTriggers) !== 'object') {
    return oldTriggers === newTriggers ? null : "".concat(triggerName, " changed shallowly");
  }

  for (var key in oldTriggers) {
    if (!(key in newTriggers)) {
      return "".concat(triggerName, ".").concat(key, " deleted");
    } // shallow compare


    if (oldTriggers[key] !== newTriggers[key]) {
      return "".concat(triggerName, ".").concat(key, " changed shallowly");
    }
  }

  for (var _key in newTriggers) {
    if (!(_key in oldTriggers)) {
      return "".concat(triggerName, ".").concat(_key, " added");
    }
  }

  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvbGF5ZXItdXBkYXRlLmpzIl0sIm5hbWVzIjpbImRpZmZVcGRhdGVUcmlnZ2VycyIsInVwZGF0ZVRyaWdnZXJzIiwib2xkVXBkYXRlVHJpZ2dlcnMiLCJ0cmlnZ2VyQ2hhbmdlZCIsInJlYXNvbiIsInRyaWdnZXJOYW1lIiwibmV3VHJpZ2dlcnMiLCJvbGRUcmlnZ2VycyIsImRpZmZSZWFzb24iLCJjb21wYXJlVXBkYXRlVHJpZ2dlciIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTU8sU0FBU0Esa0JBQVQsQ0FBNEJDLGNBQTVCLEVBQW9FO0FBQUEsTUFBeEJDLGlCQUF3Qix1RUFBSixFQUFJO0FBQ3pFLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxLQUFiOztBQUVBLE9BQUssSUFBTUMsV0FBWCxJQUEwQkosY0FBMUIsRUFBMEM7QUFDeEMsUUFBTUssV0FBVyxHQUFHTCxjQUFjLENBQUNJLFdBQUQsQ0FBZCxJQUErQixFQUFuRDtBQUNBLFFBQU1FLFdBQVcsR0FBR0wsaUJBQWlCLENBQUNHLFdBQUQsQ0FBakIsSUFBa0MsRUFBdEQ7QUFDQSxRQUFNRyxVQUFVLEdBQUdDLG9CQUFvQixDQUFDSCxXQUFELEVBQWNDLFdBQWQsRUFBMkJGLFdBQTNCLENBQXZDOztBQUVBLFFBQUlHLFVBQUosRUFBZ0I7QUFDZEwsTUFBQUEsY0FBYyxDQUFDRSxXQUFELENBQWQsR0FBOEIsSUFBOUI7QUFDQUQsTUFBQUEsTUFBTSxHQUFHRCxjQUFUO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQyxNQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssb0JBQVQsQ0FBOEJILFdBQTlCLEVBQTJDQyxXQUEzQyxFQUF3REYsV0FBeEQsRUFBcUU7QUFDbkUsTUFBSSx5QkFBT0UsV0FBUCxNQUF1QixRQUEzQixFQUFxQztBQUNuQyxXQUFPQSxXQUFXLEtBQUtELFdBQWhCLEdBQThCLElBQTlCLGFBQXdDRCxXQUF4Qyx1QkFBUDtBQUNEOztBQUVELE9BQUssSUFBTUssR0FBWCxJQUFrQkgsV0FBbEIsRUFBK0I7QUFDN0IsUUFBSSxFQUFFRyxHQUFHLElBQUlKLFdBQVQsQ0FBSixFQUEyQjtBQUN6Qix1QkFBVUQsV0FBVixjQUF5QkssR0FBekI7QUFDRCxLQUg0QixDQUs3Qjs7O0FBQ0EsUUFBSUgsV0FBVyxDQUFDRyxHQUFELENBQVgsS0FBcUJKLFdBQVcsQ0FBQ0ksR0FBRCxDQUFwQyxFQUEyQztBQUN6Qyx1QkFBVUwsV0FBVixjQUF5QkssR0FBekI7QUFDRDtBQUNGOztBQUVELE9BQUssSUFBTUEsSUFBWCxJQUFrQkosV0FBbEIsRUFBK0I7QUFDN0IsUUFBSSxFQUFFSSxJQUFHLElBQUlILFdBQVQsQ0FBSixFQUEyQjtBQUN6Qix1QkFBVUYsV0FBVixjQUF5QkssSUFBekI7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVRyaWdnZXJzIHtnZXRQb3NpdGlvbjoge2NvbHVtbn0sIGdldERhdGE6IHtmaWx0ZXJlZEluZGV4fX1cclxuICogQHBhcmFtIHtPYmplY3R9IG9sZFVwZGF0ZVRyaWdnZXJzXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufE9iamVjdH0gYGZhbHNlYCBpZiBub3RoaW5nIGNoYW5nZWQsIG9yIGB0cmlnZ2VyQ2hhbmdlZGAgYXMgYW4gb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZlVwZGF0ZVRyaWdnZXJzKHVwZGF0ZVRyaWdnZXJzLCBvbGRVcGRhdGVUcmlnZ2VycyA9IHt9KSB7XHJcbiAgY29uc3QgdHJpZ2dlckNoYW5nZWQgPSB7fTtcclxuICBsZXQgcmVhc29uID0gZmFsc2U7XHJcblxyXG4gIGZvciAoY29uc3QgdHJpZ2dlck5hbWUgaW4gdXBkYXRlVHJpZ2dlcnMpIHtcclxuICAgIGNvbnN0IG5ld1RyaWdnZXJzID0gdXBkYXRlVHJpZ2dlcnNbdHJpZ2dlck5hbWVdIHx8IHt9O1xyXG4gICAgY29uc3Qgb2xkVHJpZ2dlcnMgPSBvbGRVcGRhdGVUcmlnZ2Vyc1t0cmlnZ2VyTmFtZV0gfHwge307XHJcbiAgICBjb25zdCBkaWZmUmVhc29uID0gY29tcGFyZVVwZGF0ZVRyaWdnZXIobmV3VHJpZ2dlcnMsIG9sZFRyaWdnZXJzLCB0cmlnZ2VyTmFtZSk7XHJcblxyXG4gICAgaWYgKGRpZmZSZWFzb24pIHtcclxuICAgICAgdHJpZ2dlckNoYW5nZWRbdHJpZ2dlck5hbWVdID0gdHJ1ZTtcclxuICAgICAgcmVhc29uID0gdHJpZ2dlckNoYW5nZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVhc29uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wYXJlVXBkYXRlVHJpZ2dlcihuZXdUcmlnZ2Vycywgb2xkVHJpZ2dlcnMsIHRyaWdnZXJOYW1lKSB7XHJcbiAgaWYgKHR5cGVvZiBvbGRUcmlnZ2VycyAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBvbGRUcmlnZ2VycyA9PT0gbmV3VHJpZ2dlcnMgPyBudWxsIDogYCR7dHJpZ2dlck5hbWV9IGNoYW5nZWQgc2hhbGxvd2x5YDtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3Qga2V5IGluIG9sZFRyaWdnZXJzKSB7XHJcbiAgICBpZiAoIShrZXkgaW4gbmV3VHJpZ2dlcnMpKSB7XHJcbiAgICAgIHJldHVybiBgJHt0cmlnZ2VyTmFtZX0uJHtrZXl9IGRlbGV0ZWRgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNoYWxsb3cgY29tcGFyZVxyXG4gICAgaWYgKG9sZFRyaWdnZXJzW2tleV0gIT09IG5ld1RyaWdnZXJzW2tleV0pIHtcclxuICAgICAgcmV0dXJuIGAke3RyaWdnZXJOYW1lfS4ke2tleX0gY2hhbmdlZCBzaGFsbG93bHlgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBrZXkgaW4gbmV3VHJpZ2dlcnMpIHtcclxuICAgIGlmICghKGtleSBpbiBvbGRUcmlnZ2VycykpIHtcclxuICAgICAgcmV0dXJuIGAke3RyaWdnZXJOYW1lfS4ke2tleX0gYWRkZWRgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuIl19