"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _components = require("./components");

var _constants = require("../../constants");

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
var layerFilter = function layerFilter(layer) {
  return layer.type === _constants.LAYER_TYPES.point;
};

var isAlreadySelected = function isAlreadySelected(selectedLayers, layerId) {
  return selectedLayers.findIndex(function (l) {
    return l.id === layerId;
  }) === -1;
};

function PolygonFilterFactory() {
  var PolygonFilter = _react["default"].memo(function (_ref) {
    var filter = _ref.filter,
        layers = _ref.layers,
        setLayers = _ref.setLayers;
    var setNewLayers = (0, _react.useCallback)(function (newLayers) {
      return setLayers(newLayers.map(function (l) {
        return l.id;
      }));
    }, [layers, setLayers]);
    var selectedLayers = (0, _react.useMemo)(function () {
      return layers.filter(function (l) {
        return filter.layerId.includes(l.id);
      });
    }, [filter, layers]);
    var availableLayers = (0, _react.useMemo)(function () {
      // remove already added layers and filter out non point layers
      return layers.filter(function (layer) {
        return layerFilter(layer) && isAlreadySelected(selectedLayers, layer.id);
      });
    }, [layers, selectedLayers]);
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, {
      htmlFor: "filter-".concat(filter.id)
    }, "Layers:"), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      options: availableLayers,
      selectedItems: selectedLayers,
      onChange: setNewLayers,
      searchable: false,
      multiSelect: true,
      getOptionValue: function getOptionValue(l) {
        return l.id;
      },
      displayOption: function displayOption(l) {
        return l.config.label;
      }
    }));
  });

  PolygonFilter.displayName = 'PolygonFilter';
  return PolygonFilter;
}

var _default = PolygonFilterFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvcG9seWdvbi1maWx0ZXIuanMiXSwibmFtZXMiOlsibGF5ZXJGaWx0ZXIiLCJsYXllciIsInR5cGUiLCJMQVlFUl9UWVBFUyIsInBvaW50IiwiaXNBbHJlYWR5U2VsZWN0ZWQiLCJzZWxlY3RlZExheWVycyIsImxheWVySWQiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJQb2x5Z29uRmlsdGVyRmFjdG9yeSIsIlBvbHlnb25GaWx0ZXIiLCJSZWFjdCIsIm1lbW8iLCJmaWx0ZXIiLCJsYXllcnMiLCJzZXRMYXllcnMiLCJzZXROZXdMYXllcnMiLCJuZXdMYXllcnMiLCJtYXAiLCJpbmNsdWRlcyIsImF2YWlsYWJsZUxheWVycyIsImNvbmZpZyIsImxhYmVsIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZUMsdUJBQVlDLEtBQS9CO0FBQUEsQ0FBekI7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxjQUFELEVBQWlCQyxPQUFqQjtBQUFBLFNBQ3hCRCxjQUFjLENBQUNFLFNBQWYsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxPQUFiO0FBQUEsR0FBMUIsTUFBb0QsQ0FBQyxDQUQ3QjtBQUFBLENBQTFCOztBQUdBLFNBQVNJLG9CQUFULEdBQWdDO0FBQzlCLE1BQU1DLGFBQWEsR0FBR0Msa0JBQU1DLElBQU4sQ0FBVyxnQkFBaUM7QUFBQSxRQUEvQkMsTUFBK0IsUUFBL0JBLE1BQStCO0FBQUEsUUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFFBQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUNoRSxRQUFNQyxZQUFZLEdBQUcsd0JBQ25CLFVBQUFDLFNBQVMsRUFBSTtBQUNYLGFBQU9GLFNBQVMsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQVgsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsRUFBTjtBQUFBLE9BQWYsQ0FBRCxDQUFoQjtBQUNELEtBSGtCLEVBSW5CLENBQUNNLE1BQUQsRUFBU0MsU0FBVCxDQUptQixDQUFyQjtBQU9BLFFBQU1YLGNBQWMsR0FBRyxvQkFBUTtBQUFBLGFBQU1VLE1BQU0sQ0FBQ0QsTUFBUCxDQUFjLFVBQUFOLENBQUM7QUFBQSxlQUFJTSxNQUFNLENBQUNSLE9BQVAsQ0FBZWMsUUFBZixDQUF3QlosQ0FBQyxDQUFDQyxFQUExQixDQUFKO0FBQUEsT0FBZixDQUFOO0FBQUEsS0FBUixFQUFpRSxDQUN0RkssTUFEc0YsRUFFdEZDLE1BRnNGLENBQWpFLENBQXZCO0FBS0EsUUFBTU0sZUFBZSxHQUFHLG9CQUFRLFlBQU07QUFDcEM7QUFDQSxhQUFPTixNQUFNLENBQUNELE1BQVAsQ0FDTCxVQUFBZCxLQUFLO0FBQUEsZUFBSUQsV0FBVyxDQUFDQyxLQUFELENBQVgsSUFBc0JJLGlCQUFpQixDQUFDQyxjQUFELEVBQWlCTCxLQUFLLENBQUNTLEVBQXZCLENBQTNDO0FBQUEsT0FEQSxDQUFQO0FBR0QsS0FMdUIsRUFLckIsQ0FBQ00sTUFBRCxFQUFTVixjQUFULENBTHFCLENBQXhCO0FBT0Esd0JBQ0UsMERBQ0UsZ0NBQUMsNkJBQUQ7QUFBbUIsTUFBQSxPQUFPLG1CQUFZUyxNQUFNLENBQUNMLEVBQW5CO0FBQTFCLGlCQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRVksZUFEWDtBQUVFLE1BQUEsYUFBYSxFQUFFaEIsY0FGakI7QUFHRSxNQUFBLFFBQVEsRUFBRVksWUFIWjtBQUlFLE1BQUEsVUFBVSxFQUFFLEtBSmQ7QUFLRSxNQUFBLFdBQVcsRUFBRSxJQUxmO0FBTUUsTUFBQSxjQUFjLEVBQUUsd0JBQUFULENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxPQU5uQjtBQU9FLE1BQUEsYUFBYSxFQUFFLHVCQUFBRCxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQWI7QUFBQTtBQVBsQixNQUZGLENBREY7QUFjRCxHQWxDcUIsQ0FBdEI7O0FBb0NBWixFQUFBQSxhQUFhLENBQUNhLFdBQWQsR0FBNEIsZUFBNUI7QUFFQSxTQUFPYixhQUFQO0FBQ0Q7O2VBRWNELG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7U3R5bGVkRmlsdGVyUGFuZWx9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQge0xBWUVSX1RZUEVTfSBmcm9tICdjb25zdGFudHMnO1xuXG5jb25zdCBsYXllckZpbHRlciA9IGxheWVyID0+IGxheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLnBvaW50O1xuY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSAoc2VsZWN0ZWRMYXllcnMsIGxheWVySWQpID0+XG4gIHNlbGVjdGVkTGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IGxheWVySWQpID09PSAtMTtcblxuZnVuY3Rpb24gUG9seWdvbkZpbHRlckZhY3RvcnkoKSB7XG4gIGNvbnN0IFBvbHlnb25GaWx0ZXIgPSBSZWFjdC5tZW1vKCh7ZmlsdGVyLCBsYXllcnMsIHNldExheWVyc30pID0+IHtcbiAgICBjb25zdCBzZXROZXdMYXllcnMgPSB1c2VDYWxsYmFjayhcbiAgICAgIG5ld0xheWVycyA9PiB7XG4gICAgICAgIHJldHVybiBzZXRMYXllcnMobmV3TGF5ZXJzLm1hcChsID0+IGwuaWQpKTtcbiAgICAgIH0sXG4gICAgICBbbGF5ZXJzLCBzZXRMYXllcnNdXG4gICAgKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJzID0gdXNlTWVtbygoKSA9PiBsYXllcnMuZmlsdGVyKGwgPT4gZmlsdGVyLmxheWVySWQuaW5jbHVkZXMobC5pZCkpLCBbXG4gICAgICBmaWx0ZXIsXG4gICAgICBsYXllcnNcbiAgICBdKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZUxheWVycyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgLy8gcmVtb3ZlIGFscmVhZHkgYWRkZWQgbGF5ZXJzIGFuZCBmaWx0ZXIgb3V0IG5vbiBwb2ludCBsYXllcnNcbiAgICAgIHJldHVybiBsYXllcnMuZmlsdGVyKFxuICAgICAgICBsYXllciA9PiBsYXllckZpbHRlcihsYXllcikgJiYgaXNBbHJlYWR5U2VsZWN0ZWQoc2VsZWN0ZWRMYXllcnMsIGxheWVyLmlkKVxuICAgICAgKTtcbiAgICB9LCBbbGF5ZXJzLCBzZWxlY3RlZExheWVyc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTdHlsZWRGaWx0ZXJQYW5lbCBodG1sRm9yPXtgZmlsdGVyLSR7ZmlsdGVyLmlkfWB9PkxheWVyczo8L1N0eWxlZEZpbHRlclBhbmVsPlxuICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgb3B0aW9ucz17YXZhaWxhYmxlTGF5ZXJzfVxuICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkTGF5ZXJzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXROZXdMYXllcnN9XG4gICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgbXVsdGlTZWxlY3Q9e3RydWV9XG4gICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2wgPT4gbC5pZH1cbiAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtsID0+IGwuY29uZmlnLmxhYmVsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG5cbiAgUG9seWdvbkZpbHRlci5kaXNwbGF5TmFtZSA9ICdQb2x5Z29uRmlsdGVyJztcblxuICByZXR1cm4gUG9seWdvbkZpbHRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9seWdvbkZpbHRlckZhY3Rvcnk7XG4iXX0=