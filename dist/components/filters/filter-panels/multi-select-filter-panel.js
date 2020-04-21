"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _multiSelectFilter = _interopRequireDefault(require("../multi-select-filter"));

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
MultiSelectFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _multiSelectFilter["default"]];

function MultiSelectFilterPanelFactory(FieldPanelWithFieldSelect, MultiSelectFilter) {
  var MultiSelectFilterPanel = _react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        enlargeFilter = _ref.enlargeFilter,
        setFilter = _ref.setFilter,
        removeFilter = _ref.removeFilter,
        toggleAnimation = _ref.toggleAnimation;
    var onSetFilter = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'value', value);
    }, [idx, setFilter]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "multi-select-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter
    }, filter.type && !filter.enlarged && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(MultiSelectFilter, {
      filter: filter,
      idx: idx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      toggleAnimation: toggleAnimation,
      setFilter: onSetFilter
    }))));
  });

  MultiSelectFilterPanel.displayName = 'MultiSelectFilterPanel';
  return MultiSelectFilterPanel;
}

var _default = MultiSelectFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9tdWx0aS1zZWxlY3QtZmlsdGVyLXBhbmVsLmpzIl0sIm5hbWVzIjpbIk11bHRpU2VsZWN0RmlsdGVyUGFuZWxGYWN0b3J5IiwiZGVwcyIsIkZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5IiwiTXVsdGlTZWxlY3RGaWx0ZXJGYWN0b3J5IiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdCIsIk11bHRpU2VsZWN0RmlsdGVyIiwiTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbCIsIlJlYWN0IiwibWVtbyIsImlkeCIsImRhdGFzZXRzIiwiYWxsQXZhaWxhYmxlRmllbGRzIiwiZmlsdGVyIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJlbmxhcmdlRmlsdGVyIiwic2V0RmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwib25TZXRGaWx0ZXIiLCJ2YWx1ZSIsInR5cGUiLCJlbmxhcmdlZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQUEsNkJBQTZCLENBQUNDLElBQTlCLEdBQXFDLENBQUNDLHNDQUFELEVBQW1DQyw2QkFBbkMsQ0FBckM7O0FBRUEsU0FBU0gsNkJBQVQsQ0FBdUNJLHlCQUF2QyxFQUFrRUMsaUJBQWxFLEVBQXFGO0FBQ25GLE1BQU1DLHNCQUFzQixHQUFHQyxrQkFBTUMsSUFBTixDQUM3QixnQkFVTTtBQUFBLFFBVEpDLEdBU0ksUUFUSkEsR0FTSTtBQUFBLFFBUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLFFBUEpDLGtCQU9JLFFBUEpBLGtCQU9JO0FBQUEsUUFOSkMsTUFNSSxRQU5KQSxNQU1JO0FBQUEsUUFMSkMsb0JBS0ksUUFMSkEsb0JBS0k7QUFBQSxRQUpKQyxhQUlJLFFBSkpBLGFBSUk7QUFBQSxRQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxRQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxRQURKQyxlQUNJLFFBREpBLGVBQ0k7QUFDSixRQUFNQyxXQUFXLEdBQUcsd0JBQVksVUFBQUMsS0FBSztBQUFBLGFBQUlKLFNBQVMsQ0FBQ04sR0FBRCxFQUFNLE9BQU4sRUFBZVUsS0FBZixDQUFiO0FBQUEsS0FBakIsRUFBcUQsQ0FBQ1YsR0FBRCxFQUFNTSxTQUFOLENBQXJELENBQXBCO0FBRUEsd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLHlCQUFEO0FBQ0UsTUFBQSxrQkFBa0IsRUFBRUosa0JBRHRCO0FBRUUsTUFBQSxRQUFRLEVBQUVELFFBRlo7QUFHRSxNQUFBLE1BQU0sRUFBRUUsTUFIVjtBQUlFLE1BQUEsR0FBRyxFQUFFSCxHQUpQO0FBS0UsTUFBQSxZQUFZLEVBQUVPLFlBTGhCO0FBTUUsTUFBQSxTQUFTLEVBQUVEO0FBTmIsT0FRR0gsTUFBTSxDQUFDUSxJQUFQLElBQWUsQ0FBQ1IsTUFBTSxDQUFDUyxRQUF2QixpQkFDQztBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRVQsTUFEVjtBQUVFLE1BQUEsR0FBRyxFQUFFSCxHQUZQO0FBR0UsTUFBQSxvQkFBb0IsRUFBRUksb0JBSHhCO0FBSUUsTUFBQSxlQUFlLEVBQUVJLGVBSm5CO0FBS0UsTUFBQSxTQUFTLEVBQUVDO0FBTGIsTUFERixDQVRKLENBREYsQ0FERjtBQXdCRCxHQXRDNEIsQ0FBL0I7O0FBeUNBWixFQUFBQSxzQkFBc0IsQ0FBQ2dCLFdBQXZCLEdBQXFDLHdCQUFyQztBQUVBLFNBQU9oQixzQkFBUDtBQUNEOztlQUVjTiw2QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNdWx0aVNlbGVjdEZpbHRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9maWx0ZXJzL211bHRpLXNlbGVjdC1maWx0ZXInO1xyXG5pbXBvcnQgRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlci1wYW5lbHMvZmlsdGVyLXBhbmVsLXdpdGgtZmllbGQtc2VsZWN0JztcclxuXHJcbk11bHRpU2VsZWN0RmlsdGVyUGFuZWxGYWN0b3J5LmRlcHMgPSBbRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnksIE11bHRpU2VsZWN0RmlsdGVyRmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBNdWx0aVNlbGVjdEZpbHRlclBhbmVsRmFjdG9yeShGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0LCBNdWx0aVNlbGVjdEZpbHRlcikge1xyXG4gIGNvbnN0IE11bHRpU2VsZWN0RmlsdGVyUGFuZWwgPSBSZWFjdC5tZW1vKFxyXG4gICAgKHtcclxuICAgICAgaWR4LFxyXG4gICAgICBkYXRhc2V0cyxcclxuICAgICAgYWxsQXZhaWxhYmxlRmllbGRzLFxyXG4gICAgICBmaWx0ZXIsXHJcbiAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxyXG4gICAgICBlbmxhcmdlRmlsdGVyLFxyXG4gICAgICBzZXRGaWx0ZXIsXHJcbiAgICAgIHJlbW92ZUZpbHRlcixcclxuICAgICAgdG9nZ2xlQW5pbWF0aW9uXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9uU2V0RmlsdGVyID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ3ZhbHVlJywgdmFsdWUpLCBbaWR4LCBzZXRGaWx0ZXJdKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aS1zZWxlY3QtZmlsdGVyLXBhbmVsXCI+XHJcbiAgICAgICAgICA8RmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdFxyXG4gICAgICAgICAgICBhbGxBdmFpbGFibGVGaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cclxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cclxuICAgICAgICAgICAgaWR4PXtpZHh9XHJcbiAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17cmVtb3ZlRmlsdGVyfVxyXG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ZpbHRlci50eXBlICYmICFmaWx0ZXIuZW5sYXJnZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdEZpbHRlclxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgaWR4PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nPXtpc0FueUZpbHRlckFuaW1hdGluZ31cclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXt0b2dnbGVBbmltYXRpb259XHJcbiAgICAgICAgICAgICAgICAgIHNldEZpbHRlcj17b25TZXRGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9GaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIE11bHRpU2VsZWN0RmlsdGVyUGFuZWwuZGlzcGxheU5hbWUgPSAnTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbCc7XHJcblxyXG4gIHJldHVybiBNdWx0aVNlbGVjdEZpbHRlclBhbmVsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdWx0aVNlbGVjdEZpbHRlclBhbmVsRmFjdG9yeTtcclxuIl19