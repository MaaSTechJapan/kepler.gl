"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _polygonFilter = _interopRequireDefault(require("../polygon-filter"));

var _panelHeaderAction = _interopRequireDefault(require("../../side-panel/panel-header-action"));

var _icons = require("../../common/icons");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _components = require("../components");

var _lodash = _interopRequireDefault(require("lodash.get"));

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
PolygonFilterPanelFactory.deps = [_filterPanelHeader["default"], _polygonFilter["default"]];

function PolygonFilterPanelFactory(FilterPanelHeader, PolygonFilter) {
  var PolygonFilterPanel = _react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        layers = _ref.layers,
        layerData = _ref.layerData,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        enlargeFilter = _ref.enlargeFilter,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        toggleFilterFeature = _ref.toggleFilterFeature;
    var filterDatasets = (0, _react.useMemo)(function () {
      return filter.dataId.map(function (d) {
        return datasets[d];
      });
    }, [filter, datasets]);
    var onSetLayers = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'layerId', value);
    }, [setFilter]);
    var isVisible = (0, _lodash["default"])(filter, ['value', 'properties', 'isVisible'], true);
    var featureType = (0, _lodash["default"])(filter, ['value', 'properties', 'renderType'], true);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "polygon-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: filterDatasets,
      allAvailableFields: allAvailableFields,
      idx: idx,
      filter: filter,
      removeFilter: removeFilter
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, null, "Geo - ", featureType), /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
      id: filter.id,
      onClick: toggleFilterFeature,
      tooltip: isVisible ? 'Hide Feature' : 'Show feature',
      IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen,
      active: isVisible
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(PolygonFilter, {
      filter: filter,
      layers: layers,
      setLayers: onSetLayers,
      toggleFilterFeature: toggleFilterFeature
    }))));
  });

  PolygonFilterPanel.displayName = 'PolygonFilterPanel';
  return PolygonFilterPanel;
}

var _default = PolygonFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9wb2x5Z29uLWZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJQb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5IiwiZGVwcyIsIkZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSIsIlBvbHlnb25GaWx0ZXJGYWN0b3J5IiwiRmlsdGVyUGFuZWxIZWFkZXIiLCJQb2x5Z29uRmlsdGVyIiwiUG9seWdvbkZpbHRlclBhbmVsIiwiUmVhY3QiLCJtZW1vIiwiaWR4IiwiZGF0YXNldHMiLCJsYXllcnMiLCJsYXllckRhdGEiLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJmaWx0ZXIiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsImVubGFyZ2VGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwiZmlsdGVyRGF0YXNldHMiLCJkYXRhSWQiLCJtYXAiLCJkIiwib25TZXRMYXllcnMiLCJ2YWx1ZSIsImlzVmlzaWJsZSIsImZlYXR1cmVUeXBlIiwiaWQiLCJFeWVTZWVuIiwiRXllVW5zZWVuIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBQSx5QkFBeUIsQ0FBQ0MsSUFBMUIsR0FBaUMsQ0FBQ0MsNkJBQUQsRUFBMkJDLHlCQUEzQixDQUFqQzs7QUFFQSxTQUFTSCx5QkFBVCxDQUFtQ0ksaUJBQW5DLEVBQXNEQyxhQUF0RCxFQUFxRTtBQUNuRSxNQUFNQyxrQkFBa0IsR0FBR0Msa0JBQU1DLElBQU4sQ0FDekIsZ0JBWU07QUFBQSxRQVhKQyxHQVdJLFFBWEpBLEdBV0k7QUFBQSxRQVZKQyxRQVVJLFFBVkpBLFFBVUk7QUFBQSxRQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxRQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxRQVBKQyxrQkFPSSxRQVBKQSxrQkFPSTtBQUFBLFFBTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLFFBTEpDLG9CQUtJLFFBTEpBLG9CQUtJO0FBQUEsUUFKSkMsYUFJSSxRQUpKQSxhQUlJO0FBQUEsUUFISkMsWUFHSSxRQUhKQSxZQUdJO0FBQUEsUUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsUUFESkMsbUJBQ0ksUUFESkEsbUJBQ0k7QUFDSixRQUFNQyxjQUFjLEdBQUcsb0JBQVE7QUFBQSxhQUFNTixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxDQUFDO0FBQUEsZUFBSWIsUUFBUSxDQUFDYSxDQUFELENBQVo7QUFBQSxPQUFuQixDQUFOO0FBQUEsS0FBUixFQUFtRCxDQUFDVCxNQUFELEVBQVNKLFFBQVQsQ0FBbkQsQ0FBdkI7QUFFQSxRQUFNYyxXQUFXLEdBQUcsd0JBQVksVUFBQUMsS0FBSztBQUFBLGFBQUlQLFNBQVMsQ0FBQ1QsR0FBRCxFQUFNLFNBQU4sRUFBaUJnQixLQUFqQixDQUFiO0FBQUEsS0FBakIsRUFBdUQsQ0FBQ1AsU0FBRCxDQUF2RCxDQUFwQjtBQUVBLFFBQU1RLFNBQVMsR0FBRyx3QkFBSVosTUFBSixFQUFZLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsV0FBeEIsQ0FBWixFQUFrRCxJQUFsRCxDQUFsQjtBQUNBLFFBQU1hLFdBQVcsR0FBRyx3QkFBSWIsTUFBSixFQUFZLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsWUFBeEIsQ0FBWixFQUFtRCxJQUFuRCxDQUFwQjtBQUVBLHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyxpQkFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFTSxjQURaO0FBRUUsTUFBQSxrQkFBa0IsRUFBRVAsa0JBRnRCO0FBR0UsTUFBQSxHQUFHLEVBQUVKLEdBSFA7QUFJRSxNQUFBLE1BQU0sRUFBRUssTUFKVjtBQUtFLE1BQUEsWUFBWSxFQUFFRztBQUxoQixvQkFPRSxnQ0FBQyw2QkFBRCxrQkFBMEJVLFdBQTFCLENBUEYsZUFRRSxnQ0FBQyw2QkFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFYixNQUFNLENBQUNjLEVBRGI7QUFFRSxNQUFBLE9BQU8sRUFBRVQsbUJBRlg7QUFHRSxNQUFBLE9BQU8sRUFBRU8sU0FBUyxHQUFHLGNBQUgsR0FBb0IsY0FIeEM7QUFJRSxNQUFBLGFBQWEsRUFBRUEsU0FBUyxHQUFHRyxjQUFILEdBQWFDLGdCQUp2QztBQUtFLE1BQUEsTUFBTSxFQUFFSjtBQUxWLE1BUkYsQ0FERixlQWlCRSxnQ0FBQyxxQ0FBRDtBQUFxQixNQUFBLFNBQVMsRUFBQztBQUEvQixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsYUFBRDtBQUNFLE1BQUEsTUFBTSxFQUFFWixNQURWO0FBRUUsTUFBQSxNQUFNLEVBQUVILE1BRlY7QUFHRSxNQUFBLFNBQVMsRUFBRWEsV0FIYjtBQUlFLE1BQUEsbUJBQW1CLEVBQUVMO0FBSnZCLE1BREYsQ0FERixDQWpCRixDQURGO0FBOEJELEdBbkR3QixDQUEzQjs7QUFzREFiLEVBQUFBLGtCQUFrQixDQUFDeUIsV0FBbkIsR0FBaUMsb0JBQWpDO0FBRUEsU0FBT3pCLGtCQUFQO0FBQ0Q7O2VBRWNOLHlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3R5bGVkRmlsdGVyQ29udGVudH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBvbHlnb25GaWx0ZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycy9wb2x5Z29uLWZpbHRlcic7XG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb24gZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci1hY3Rpb24nO1xuaW1wb3J0IHtFeWVTZWVufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge0V5ZVVuc2Vlbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IEZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC1oZWFkZXInO1xuaW1wb3J0IHtTdHlsZWRGaWx0ZXJQYW5lbH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5cblBvbHlnb25GaWx0ZXJQYW5lbEZhY3RvcnkuZGVwcyA9IFtGaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnksIFBvbHlnb25GaWx0ZXJGYWN0b3J5XTtcblxuZnVuY3Rpb24gUG9seWdvbkZpbHRlclBhbmVsRmFjdG9yeShGaWx0ZXJQYW5lbEhlYWRlciwgUG9seWdvbkZpbHRlcikge1xuICBjb25zdCBQb2x5Z29uRmlsdGVyUGFuZWwgPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBpZHgsXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGxheWVycyxcbiAgICAgIGxheWVyRGF0YSxcbiAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxuICAgICAgZW5sYXJnZUZpbHRlcixcbiAgICAgIHJlbW92ZUZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmVcbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJEYXRhc2V0cyA9IHVzZU1lbW8oKCkgPT4gZmlsdGVyLmRhdGFJZC5tYXAoZCA9PiBkYXRhc2V0c1tkXSksIFtmaWx0ZXIsIGRhdGFzZXRzXSk7XG5cbiAgICAgIGNvbnN0IG9uU2V0TGF5ZXJzID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ2xheWVySWQnLCB2YWx1ZSksIFtzZXRGaWx0ZXJdKTtcblxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ2lzVmlzaWJsZSddLCB0cnVlKTtcbiAgICAgIGNvbnN0IGZlYXR1cmVUeXBlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ3JlbmRlclR5cGUnXSwgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9seWdvbi1maWx0ZXItcGFuZWxcIj5cbiAgICAgICAgICA8RmlsdGVyUGFuZWxIZWFkZXJcbiAgICAgICAgICAgIGRhdGFzZXRzPXtmaWx0ZXJEYXRhc2V0c31cbiAgICAgICAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfVxuICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17cmVtb3ZlRmlsdGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdHlsZWRGaWx0ZXJQYW5lbD5HZW8gLSB7ZmVhdHVyZVR5cGV9PC9TdHlsZWRGaWx0ZXJQYW5lbD5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICBpZD17ZmlsdGVyLmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVGaWx0ZXJGZWF0dXJlfVxuICAgICAgICAgICAgICB0b29sdGlwPXtpc1Zpc2libGUgPyAnSGlkZSBGZWF0dXJlJyA6ICdTaG93IGZlYXR1cmUnfVxuICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtpc1Zpc2libGUgPyBFeWVTZWVuIDogRXllVW5zZWVufVxuICAgICAgICAgICAgICBhY3RpdmU9e2lzVmlzaWJsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWx0ZXJQYW5lbEhlYWRlcj5cbiAgICAgICAgICA8U3R5bGVkRmlsdGVyQ29udGVudCBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19maWx0ZXJcIj5cbiAgICAgICAgICAgICAgPFBvbHlnb25GaWx0ZXJcbiAgICAgICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgICAgICBzZXRMYXllcnM9e29uU2V0TGF5ZXJzfVxuICAgICAgICAgICAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU9e3RvZ2dsZUZpbHRlckZlYXR1cmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1N0eWxlZEZpbHRlckNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgUG9seWdvbkZpbHRlclBhbmVsLmRpc3BsYXlOYW1lID0gJ1BvbHlnb25GaWx0ZXJQYW5lbCc7XG5cbiAgcmV0dXJuIFBvbHlnb25GaWx0ZXJQYW5lbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9seWdvbkZpbHRlclBhbmVsRmFjdG9yeTtcbiJdfQ==