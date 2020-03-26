"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rangeFilter = _interopRequireDefault(require("../range-filter"));

var _filterPanelWithFieldSelect = _interopRequireDefault(require("./filter-panel-with-field-select"));

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
RangeFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _rangeFilter["default"]];

function RangeFilterPanelFactory(FieldPanelWithFieldSelect, RangeFilter) {
  var RangeFilterPanel = _react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        enlargeFilter = _ref.enlargeFilter,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        toggleAnimation = _ref.toggleAnimation;
    var onSetFilter = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'value', value);
    }, [idx, setFilter]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "range-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter
    }, filter.type && !filter.enlarged && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(RangeFilter, {
      filter: filter,
      idx: idx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      toggleAnimation: toggleAnimation,
      setFilter: onSetFilter
    }))));
  });

  RangeFilterPanel.displayName = 'RangeFilterPanel';
  return RangeFilterPanel;
}

var _default = RangeFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9yYW5nZS1maWx0ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJSYW5nZUZpbHRlckZhY3RvcnkiLCJGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0IiwiUmFuZ2VGaWx0ZXIiLCJSYW5nZUZpbHRlclBhbmVsIiwiUmVhY3QiLCJtZW1vIiwiaWR4IiwiZGF0YXNldHMiLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJmaWx0ZXIiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsImVubGFyZ2VGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJvblNldEZpbHRlciIsInZhbHVlIiwidHlwZSIsImVubGFyZ2VkIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BQSx1QkFBdUIsQ0FBQ0MsSUFBeEIsR0FBK0IsQ0FBQ0Msc0NBQUQsRUFBbUNDLHVCQUFuQyxDQUEvQjs7QUFFQSxTQUFTSCx1QkFBVCxDQUFpQ0kseUJBQWpDLEVBQTREQyxXQUE1RCxFQUF5RTtBQUN2RSxNQUFNQyxnQkFBZ0IsR0FBR0Msa0JBQU1DLElBQU4sQ0FDdkIsZ0JBVU07QUFBQSxRQVRKQyxHQVNJLFFBVEpBLEdBU0k7QUFBQSxRQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxRQVBKQyxrQkFPSSxRQVBKQSxrQkFPSTtBQUFBLFFBTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLFFBTEpDLG9CQUtJLFFBTEpBLG9CQUtJO0FBQUEsUUFKSkMsYUFJSSxRQUpKQSxhQUlJO0FBQUEsUUFISkMsWUFHSSxRQUhKQSxZQUdJO0FBQUEsUUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsUUFESkMsZUFDSSxRQURKQSxlQUNJO0FBQ0osUUFBTUMsV0FBVyxHQUFHLHdCQUFZLFVBQUFDLEtBQUs7QUFBQSxhQUFJSCxTQUFTLENBQUNQLEdBQUQsRUFBTSxPQUFOLEVBQWVVLEtBQWYsQ0FBYjtBQUFBLEtBQWpCLEVBQXFELENBQUNWLEdBQUQsRUFBTU8sU0FBTixDQUFyRCxDQUFwQjtBQUVBLHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyx5QkFBRDtBQUNFLE1BQUEsa0JBQWtCLEVBQUVMLGtCQUR0QjtBQUVFLE1BQUEsUUFBUSxFQUFFRCxRQUZaO0FBR0UsTUFBQSxNQUFNLEVBQUVFLE1BSFY7QUFJRSxNQUFBLEdBQUcsRUFBRUgsR0FKUDtBQUtFLE1BQUEsWUFBWSxFQUFFTSxZQUxoQjtBQU1FLE1BQUEsU0FBUyxFQUFFQztBQU5iLE9BUUdKLE1BQU0sQ0FBQ1EsSUFBUCxJQUFlLENBQUNSLE1BQU0sQ0FBQ1MsUUFBdkIsaUJBQ0M7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLFdBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRVQsTUFEVjtBQUVFLE1BQUEsR0FBRyxFQUFFSCxHQUZQO0FBR0UsTUFBQSxvQkFBb0IsRUFBRUksb0JBSHhCO0FBSUUsTUFBQSxlQUFlLEVBQUVJLGVBSm5CO0FBS0UsTUFBQSxTQUFTLEVBQUVDO0FBTGIsTUFERixDQVRKLENBREYsQ0FERjtBQXdCRCxHQXRDc0IsQ0FBekI7O0FBeUNBWixFQUFBQSxnQkFBZ0IsQ0FBQ2dCLFdBQWpCLEdBQStCLGtCQUEvQjtBQUVBLFNBQU9oQixnQkFBUDtBQUNEOztlQUVjTix1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmFuZ2VGaWx0ZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycy9yYW5nZS1maWx0ZXInO1xuaW1wb3J0IEZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItcGFuZWxzL2ZpbHRlci1wYW5lbC13aXRoLWZpZWxkLXNlbGVjdCc7XG5cblJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5LmRlcHMgPSBbRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnksIFJhbmdlRmlsdGVyRmFjdG9yeV07XG5cbmZ1bmN0aW9uIFJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5KEZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3QsIFJhbmdlRmlsdGVyKSB7XG4gIGNvbnN0IFJhbmdlRmlsdGVyUGFuZWwgPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBpZHgsXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxuICAgICAgZW5sYXJnZUZpbHRlcixcbiAgICAgIHJlbW92ZUZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHRvZ2dsZUFuaW1hdGlvblxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IG9uU2V0RmlsdGVyID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ3ZhbHVlJywgdmFsdWUpLCBbaWR4LCBzZXRGaWx0ZXJdKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5nZS1maWx0ZXItcGFuZWxcIj5cbiAgICAgICAgICA8RmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdFxuICAgICAgICAgICAgYWxsQXZhaWxhYmxlRmllbGRzPXthbGxBdmFpbGFibGVGaWVsZHN9XG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZmlsdGVyLnR5cGUgJiYgIWZpbHRlci5lbmxhcmdlZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8UmFuZ2VGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgICAgICAgICAgICB0b2dnbGVBbmltYXRpb249e3RvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIHNldEZpbHRlcj17b25TZXRGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBSYW5nZUZpbHRlclBhbmVsLmRpc3BsYXlOYW1lID0gJ1JhbmdlRmlsdGVyUGFuZWwnO1xuXG4gIHJldHVybiBSYW5nZUZpbHRlclBhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZUZpbHRlclBhbmVsRmFjdG9yeTtcbiJdfQ==