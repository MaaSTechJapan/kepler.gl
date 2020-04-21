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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvcG9seWdvbi1maWx0ZXIuanMiXSwibmFtZXMiOlsibGF5ZXJGaWx0ZXIiLCJsYXllciIsInR5cGUiLCJMQVlFUl9UWVBFUyIsInBvaW50IiwiaXNBbHJlYWR5U2VsZWN0ZWQiLCJzZWxlY3RlZExheWVycyIsImxheWVySWQiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJQb2x5Z29uRmlsdGVyRmFjdG9yeSIsIlBvbHlnb25GaWx0ZXIiLCJSZWFjdCIsIm1lbW8iLCJmaWx0ZXIiLCJsYXllcnMiLCJzZXRMYXllcnMiLCJzZXROZXdMYXllcnMiLCJuZXdMYXllcnMiLCJtYXAiLCJpbmNsdWRlcyIsImF2YWlsYWJsZUxheWVycyIsImNvbmZpZyIsImxhYmVsIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZUMsdUJBQVlDLEtBQS9CO0FBQUEsQ0FBekI7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxjQUFELEVBQWlCQyxPQUFqQjtBQUFBLFNBQ3hCRCxjQUFjLENBQUNFLFNBQWYsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxPQUFiO0FBQUEsR0FBMUIsTUFBb0QsQ0FBQyxDQUQ3QjtBQUFBLENBQTFCOztBQUdBLFNBQVNJLG9CQUFULEdBQWdDO0FBQzlCLE1BQU1DLGFBQWEsR0FBR0Msa0JBQU1DLElBQU4sQ0FBVyxnQkFBaUM7QUFBQSxRQUEvQkMsTUFBK0IsUUFBL0JBLE1BQStCO0FBQUEsUUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFFBQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUNoRSxRQUFNQyxZQUFZLEdBQUcsd0JBQ25CLFVBQUFDLFNBQVMsRUFBSTtBQUNYLGFBQU9GLFNBQVMsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQVgsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsRUFBTjtBQUFBLE9BQWYsQ0FBRCxDQUFoQjtBQUNELEtBSGtCLEVBSW5CLENBQUNNLE1BQUQsRUFBU0MsU0FBVCxDQUptQixDQUFyQjtBQU9BLFFBQU1YLGNBQWMsR0FBRyxvQkFBUTtBQUFBLGFBQU1VLE1BQU0sQ0FBQ0QsTUFBUCxDQUFjLFVBQUFOLENBQUM7QUFBQSxlQUFJTSxNQUFNLENBQUNSLE9BQVAsQ0FBZWMsUUFBZixDQUF3QlosQ0FBQyxDQUFDQyxFQUExQixDQUFKO0FBQUEsT0FBZixDQUFOO0FBQUEsS0FBUixFQUFpRSxDQUN0RkssTUFEc0YsRUFFdEZDLE1BRnNGLENBQWpFLENBQXZCO0FBS0EsUUFBTU0sZUFBZSxHQUFHLG9CQUFRLFlBQU07QUFDcEM7QUFDQSxhQUFPTixNQUFNLENBQUNELE1BQVAsQ0FDTCxVQUFBZCxLQUFLO0FBQUEsZUFBSUQsV0FBVyxDQUFDQyxLQUFELENBQVgsSUFBc0JJLGlCQUFpQixDQUFDQyxjQUFELEVBQWlCTCxLQUFLLENBQUNTLEVBQXZCLENBQTNDO0FBQUEsT0FEQSxDQUFQO0FBR0QsS0FMdUIsRUFLckIsQ0FBQ00sTUFBRCxFQUFTVixjQUFULENBTHFCLENBQXhCO0FBT0Esd0JBQ0UsMERBQ0UsZ0NBQUMsNkJBQUQ7QUFBbUIsTUFBQSxPQUFPLG1CQUFZUyxNQUFNLENBQUNMLEVBQW5CO0FBQTFCLGlCQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRVksZUFEWDtBQUVFLE1BQUEsYUFBYSxFQUFFaEIsY0FGakI7QUFHRSxNQUFBLFFBQVEsRUFBRVksWUFIWjtBQUlFLE1BQUEsVUFBVSxFQUFFLEtBSmQ7QUFLRSxNQUFBLFdBQVcsRUFBRSxJQUxmO0FBTUUsTUFBQSxjQUFjLEVBQUUsd0JBQUFULENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxPQU5uQjtBQU9FLE1BQUEsYUFBYSxFQUFFLHVCQUFBRCxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQWI7QUFBQTtBQVBsQixNQUZGLENBREY7QUFjRCxHQWxDcUIsQ0FBdEI7O0FBb0NBWixFQUFBQSxhQUFhLENBQUNhLFdBQWQsR0FBNEIsZUFBNUI7QUFFQSxTQUFPYixhQUFQO0FBQ0Q7O2VBRWNELG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5pbXBvcnQge1N0eWxlZEZpbHRlclBhbmVsfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQge0xBWUVSX1RZUEVTfSBmcm9tICdjb25zdGFudHMnO1xyXG5cclxuY29uc3QgbGF5ZXJGaWx0ZXIgPSBsYXllciA9PiBsYXllci50eXBlID09PSBMQVlFUl9UWVBFUy5wb2ludDtcclxuY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSAoc2VsZWN0ZWRMYXllcnMsIGxheWVySWQpID0+XHJcbiAgc2VsZWN0ZWRMYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gbGF5ZXJJZCkgPT09IC0xO1xyXG5cclxuZnVuY3Rpb24gUG9seWdvbkZpbHRlckZhY3RvcnkoKSB7XHJcbiAgY29uc3QgUG9seWdvbkZpbHRlciA9IFJlYWN0Lm1lbW8oKHtmaWx0ZXIsIGxheWVycywgc2V0TGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3Qgc2V0TmV3TGF5ZXJzID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgIG5ld0xheWVycyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNldExheWVycyhuZXdMYXllcnMubWFwKGwgPT4gbC5pZCkpO1xyXG4gICAgICB9LFxyXG4gICAgICBbbGF5ZXJzLCBzZXRMYXllcnNdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJzID0gdXNlTWVtbygoKSA9PiBsYXllcnMuZmlsdGVyKGwgPT4gZmlsdGVyLmxheWVySWQuaW5jbHVkZXMobC5pZCkpLCBbXHJcbiAgICAgIGZpbHRlcixcclxuICAgICAgbGF5ZXJzXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBhdmFpbGFibGVMYXllcnMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgLy8gcmVtb3ZlIGFscmVhZHkgYWRkZWQgbGF5ZXJzIGFuZCBmaWx0ZXIgb3V0IG5vbiBwb2ludCBsYXllcnNcclxuICAgICAgcmV0dXJuIGxheWVycy5maWx0ZXIoXHJcbiAgICAgICAgbGF5ZXIgPT4gbGF5ZXJGaWx0ZXIobGF5ZXIpICYmIGlzQWxyZWFkeVNlbGVjdGVkKHNlbGVjdGVkTGF5ZXJzLCBsYXllci5pZClcclxuICAgICAgKTtcclxuICAgIH0sIFtsYXllcnMsIHNlbGVjdGVkTGF5ZXJzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U3R5bGVkRmlsdGVyUGFuZWwgaHRtbEZvcj17YGZpbHRlci0ke2ZpbHRlci5pZH1gfT5MYXllcnM6PC9TdHlsZWRGaWx0ZXJQYW5lbD5cclxuICAgICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgICBvcHRpb25zPXthdmFpbGFibGVMYXllcnN9XHJcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZExheWVyc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXROZXdMYXllcnN9XHJcbiAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgIG11bHRpU2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2wgPT4gbC5pZH1cclxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e2wgPT4gbC5jb25maWcubGFiZWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBQb2x5Z29uRmlsdGVyLmRpc3BsYXlOYW1lID0gJ1BvbHlnb25GaWx0ZXInO1xyXG5cclxuICByZXR1cm4gUG9seWdvbkZpbHRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9seWdvbkZpbHRlckZhY3Rvcnk7XHJcbiJdfQ==