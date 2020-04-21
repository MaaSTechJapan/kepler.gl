"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _panelHeaderAction = _interopRequireDefault(require("../../side-panel/panel-header-action"));

var _sourceDataSelector = _interopRequireDefault(require("../../side-panel/common/source-data-selector"));

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
FieldPanelWithFieldSelectFactory.deps = [_filterPanelHeader["default"], _sourceDataSelector["default"]];

function FieldPanelWithFieldSelectFactory(FilterPanelHeader, SourceDataSelector) {
  var FilterPanelWithFieldSelect = _react["default"].memo(function (_ref) {
    var allAvailableFields = _ref.allAvailableFields,
        children = _ref.children,
        datasets = _ref.datasets,
        filter = _ref.filter,
        idx = _ref.idx,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        _ref$panelActions = _ref.panelActions,
        panelActions = _ref$panelActions === void 0 ? [] : _ref$panelActions;
    var onFieldSelector = (0, _react.useCallback)(function (field) {
      return setFilter(idx, 'name', field.name);
    }, [idx, setFilter]);
    var onSourceDataSelector = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'dataId', [value]);
    }, [idx, setFilter]);
    var fieldValue = (0, _react.useMemo)(function () {
      return Array.isArray(filter.name) ? filter.name[0] : filter.name;
    }, [filter.name]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: [datasets[filter.dataId[0]]],
      allAvailableFields: allAvailableFields,
      idx: idx,
      filter: filter,
      removeFilter: removeFilter
    }, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
      inputTheme: "secondary",
      fields: allAvailableFields,
      value: fieldValue,
      erasable: false,
      onSelect: onFieldSelector
    }), panelActions && panelActions.map(function (panelAction) {
      return /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
        id: panelAction.id,
        key: panelAction.id,
        onClick: panelAction.onClick,
        tooltip: panelAction.tooltip,
        IconComponent: panelAction.iconComponent,
        active: panelAction.active
      });
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
      inputTheme: "secondary",
      datasets: datasets,
      disabled: filter.freeze,
      dataId: filter.dataId,
      onSelect: onSourceDataSelector
    }), children));
  });

  FilterPanelWithFieldSelect.displayName = 'FilterPanelWithFieldSelect';
  return FilterPanelWithFieldSelect;
}

var _default = FieldPanelWithFieldSelectFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9maWx0ZXItcGFuZWwtd2l0aC1maWVsZC1zZWxlY3QuanMiXSwibmFtZXMiOlsiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJkZXBzIiwiRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSIsIkZpbHRlclBhbmVsSGVhZGVyIiwiU291cmNlRGF0YVNlbGVjdG9yIiwiRmlsdGVyUGFuZWxXaXRoRmllbGRTZWxlY3QiLCJSZWFjdCIsIm1lbW8iLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJjaGlsZHJlbiIsImRhdGFzZXRzIiwiZmlsdGVyIiwiaWR4IiwicmVtb3ZlRmlsdGVyIiwic2V0RmlsdGVyIiwicGFuZWxBY3Rpb25zIiwib25GaWVsZFNlbGVjdG9yIiwiZmllbGQiLCJuYW1lIiwib25Tb3VyY2VEYXRhU2VsZWN0b3IiLCJ2YWx1ZSIsImZpZWxkVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhSWQiLCJtYXAiLCJwYW5lbEFjdGlvbiIsImlkIiwib25DbGljayIsInRvb2x0aXAiLCJpY29uQ29tcG9uZW50IiwiYWN0aXZlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZyZWV6ZSIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQUEsZ0NBQWdDLENBQUNDLElBQWpDLEdBQXdDLENBQUNDLDZCQUFELEVBQTJCQyw4QkFBM0IsQ0FBeEM7O0FBRUEsU0FBU0gsZ0NBQVQsQ0FBMENJLGlCQUExQyxFQUE2REMsa0JBQTdELEVBQWlGO0FBQy9F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QXBFZ0MsQ0FBbkM7O0FBdUVBSixFQUFBQSwwQkFBMEIsQ0FBQytCLFdBQTNCLEdBQXlDLDRCQUF6QztBQUVBLFNBQU8vQiwwQkFBUDtBQUNEOztlQUVjTixnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7U3R5bGVkRmlsdGVyQ29udGVudH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9maWx0ZXItcGFuZWwvZmlsdGVyLXBhbmVsLWhlYWRlcic7XHJcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcclxuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcclxuaW1wb3J0IFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL2NvbW1vbi9zb3VyY2UtZGF0YS1zZWxlY3Rvcic7XHJcblxyXG5GaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeS5kZXBzID0gW0ZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSwgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeShGaWx0ZXJQYW5lbEhlYWRlciwgU291cmNlRGF0YVNlbGVjdG9yKSB7XHJcbiAgY29uc3QgRmlsdGVyUGFuZWxXaXRoRmllbGRTZWxlY3QgPSBSZWFjdC5tZW1vKFxyXG4gICAgKHtcclxuICAgICAgYWxsQXZhaWxhYmxlRmllbGRzLFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgZGF0YXNldHMsXHJcbiAgICAgIGZpbHRlcixcclxuICAgICAgaWR4LFxyXG4gICAgICByZW1vdmVGaWx0ZXIsXHJcbiAgICAgIHNldEZpbHRlcixcclxuICAgICAgcGFuZWxBY3Rpb25zID0gW11cclxuICAgIH0pID0+IHtcclxuICAgICAgY29uc3Qgb25GaWVsZFNlbGVjdG9yID0gdXNlQ2FsbGJhY2soZmllbGQgPT4gc2V0RmlsdGVyKGlkeCwgJ25hbWUnLCBmaWVsZC5uYW1lKSwgW1xyXG4gICAgICAgIGlkeCxcclxuICAgICAgICBzZXRGaWx0ZXJcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBjb25zdCBvblNvdXJjZURhdGFTZWxlY3RvciA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHNldEZpbHRlcihpZHgsICdkYXRhSWQnLCBbdmFsdWVdKSwgW1xyXG4gICAgICAgIGlkeCxcclxuICAgICAgICBzZXRGaWx0ZXJcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBjb25zdCBmaWVsZFZhbHVlID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoQXJyYXkuaXNBcnJheShmaWx0ZXIubmFtZSkgPyBmaWx0ZXIubmFtZVswXSA6IGZpbHRlci5uYW1lKSxcclxuICAgICAgICBbZmlsdGVyLm5hbWVdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RmlsdGVyUGFuZWxIZWFkZXJcclxuICAgICAgICAgICAgZGF0YXNldHM9e1tkYXRhc2V0c1tmaWx0ZXIuZGF0YUlkWzBdXV19XHJcbiAgICAgICAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfVxyXG4gICAgICAgICAgICBpZHg9e2lkeH1cclxuICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XHJcbiAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17cmVtb3ZlRmlsdGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmllbGRTZWxlY3RvclxyXG4gICAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWVsZFZhbHVlfVxyXG4gICAgICAgICAgICAgIGVyYXNhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvblNlbGVjdD17b25GaWVsZFNlbGVjdG9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cGFuZWxBY3Rpb25zICYmXHJcbiAgICAgICAgICAgICAgcGFuZWxBY3Rpb25zLm1hcChwYW5lbEFjdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cclxuICAgICAgICAgICAgICAgICAgaWQ9e3BhbmVsQWN0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3BhbmVsQWN0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwYW5lbEFjdGlvbi5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwPXtwYW5lbEFjdGlvbi50b29sdGlwfVxyXG4gICAgICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtwYW5lbEFjdGlvbi5pY29uQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e3BhbmVsQWN0aW9uLmFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZpbHRlclBhbmVsSGVhZGVyPlxyXG4gICAgICAgICAgPFN0eWxlZEZpbHRlckNvbnRlbnQgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgPFNvdXJjZURhdGFTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgaW5wdXRUaGVtZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmlsdGVyLmZyZWV6ZX1cclxuICAgICAgICAgICAgICAgIGRhdGFJZD17ZmlsdGVyLmRhdGFJZH1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtvblNvdXJjZURhdGFTZWxlY3Rvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L1N0eWxlZEZpbHRlckNvbnRlbnQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgRmlsdGVyUGFuZWxXaXRoRmllbGRTZWxlY3QuZGlzcGxheU5hbWUgPSAnRmlsdGVyUGFuZWxXaXRoRmllbGRTZWxlY3QnO1xyXG5cclxuICByZXR1cm4gRmlsdGVyUGFuZWxXaXRoRmllbGRTZWxlY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5O1xyXG4iXX0=