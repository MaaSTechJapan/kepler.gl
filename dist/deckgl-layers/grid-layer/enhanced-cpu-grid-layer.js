"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.gridAggregation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _aggregationLayers = require("@deck.gl/aggregation-layers");

var _cpuAggregator = _interopRequireWildcard(require("../layer-utils/cpu-aggregator"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var gridAggregation = {
  key: 'position',
  updateSteps: [{
    key: 'aggregate',
    triggers: {
      cellSize: {
        prop: 'cellSize'
      },
      position: {
        prop: 'getPosition',
        updateTrigger: 'getPosition'
      },
      aggregator: {
        prop: 'gridAggregator'
      }
    },
    updater: _cpuAggregator.getAggregatedData
  }]
};
exports.gridAggregation = gridAggregation;

var ScaleEnhancedGridLayer = /*#__PURE__*/function (_CPUGridLayer) {
  (0, _inherits2["default"])(ScaleEnhancedGridLayer, _CPUGridLayer);

  var _super = _createSuper(ScaleEnhancedGridLayer);

  function ScaleEnhancedGridLayer() {
    (0, _classCallCheck2["default"])(this, ScaleEnhancedGridLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ScaleEnhancedGridLayer, [{
    key: "initializeState",
    value: function initializeState() {
      var cpuAggregator = new _cpuAggregator["default"]({
        aggregation: gridAggregation
      });
      this.state = {
        cpuAggregator: cpuAggregator,
        aggregatorState: cpuAggregator.state
      };
      var attributeManager = this.getAttributeManager();
      attributeManager.add({
        positions: {
          size: 3,
          accessor: 'getPosition'
        }
      });
    }
  }]);
  return ScaleEnhancedGridLayer;
}(_aggregationLayers.CPUGridLayer);

exports["default"] = ScaleEnhancedGridLayer;
ScaleEnhancedGridLayer.layerName = 'ScaleEnhancedGridLayer';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2dyaWQtbGF5ZXIvZW5oYW5jZWQtY3B1LWdyaWQtbGF5ZXIuanMiXSwibmFtZXMiOlsiZ3JpZEFnZ3JlZ2F0aW9uIiwia2V5IiwidXBkYXRlU3RlcHMiLCJ0cmlnZ2VycyIsImNlbGxTaXplIiwicHJvcCIsInBvc2l0aW9uIiwidXBkYXRlVHJpZ2dlciIsImFnZ3JlZ2F0b3IiLCJ1cGRhdGVyIiwiZ2V0QWdncmVnYXRlZERhdGEiLCJTY2FsZUVuaGFuY2VkR3JpZExheWVyIiwiY3B1QWdncmVnYXRvciIsIkNQVUFnZ3JlZ2F0b3IiLCJhZ2dyZWdhdGlvbiIsInN0YXRlIiwiYWdncmVnYXRvclN0YXRlIiwiYXR0cmlidXRlTWFuYWdlciIsImdldEF0dHJpYnV0ZU1hbmFnZXIiLCJhZGQiLCJwb3NpdGlvbnMiLCJzaXplIiwiYWNjZXNzb3IiLCJDUFVHcmlkTGF5ZXIiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsZUFBZSxHQUFHO0FBQzdCQyxFQUFBQSxHQUFHLEVBQUUsVUFEd0I7QUFFN0JDLEVBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxXQURQO0FBRUVFLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkMsUUFBQUEsSUFBSSxFQUFFO0FBREUsT0FERjtBQUlSQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkQsUUFBQUEsSUFBSSxFQUFFLGFBREU7QUFFUkUsUUFBQUEsYUFBYSxFQUFFO0FBRlAsT0FKRjtBQVFSQyxNQUFBQSxVQUFVLEVBQUU7QUFDVkgsUUFBQUEsSUFBSSxFQUFFO0FBREk7QUFSSixLQUZaO0FBY0VJLElBQUFBLE9BQU8sRUFBRUM7QUFkWCxHQURXO0FBRmdCLENBQXhCOzs7SUFzQmNDLHNCOzs7Ozs7Ozs7Ozs7c0NBQ0Q7QUFDaEIsVUFBTUMsYUFBYSxHQUFHLElBQUlDLHlCQUFKLENBQWtCO0FBQ3RDQyxRQUFBQSxXQUFXLEVBQUVkO0FBRHlCLE9BQWxCLENBQXRCO0FBSUEsV0FBS2UsS0FBTCxHQUFhO0FBQ1hILFFBQUFBLGFBQWEsRUFBYkEsYUFEVztBQUVYSSxRQUFBQSxlQUFlLEVBQUVKLGFBQWEsQ0FBQ0c7QUFGcEIsT0FBYjtBQUlBLFVBQU1FLGdCQUFnQixHQUFHLEtBQUtDLG1CQUFMLEVBQXpCO0FBQ0FELE1BQUFBLGdCQUFnQixDQUFDRSxHQUFqQixDQUFxQjtBQUNuQkMsUUFBQUEsU0FBUyxFQUFFO0FBQUNDLFVBQUFBLElBQUksRUFBRSxDQUFQO0FBQVVDLFVBQUFBLFFBQVEsRUFBRTtBQUFwQjtBQURRLE9BQXJCO0FBR0Q7OztFQWRpREMsK0I7OztBQWlCcERaLHNCQUFzQixDQUFDYSxTQUF2QixHQUFtQyx3QkFBbkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0NQVUdyaWRMYXllcn0gZnJvbSAnQGRlY2suZ2wvYWdncmVnYXRpb24tbGF5ZXJzJztcclxuaW1wb3J0IENQVUFnZ3JlZ2F0b3IsIHtnZXRBZ2dyZWdhdGVkRGF0YX0gZnJvbSAnLi4vbGF5ZXItdXRpbHMvY3B1LWFnZ3JlZ2F0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRBZ2dyZWdhdGlvbiA9IHtcclxuICBrZXk6ICdwb3NpdGlvbicsXHJcbiAgdXBkYXRlU3RlcHM6IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnYWdncmVnYXRlJyxcclxuICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICBjZWxsU2l6ZToge1xyXG4gICAgICAgICAgcHJvcDogJ2NlbGxTaXplJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgIHByb3A6ICdnZXRQb3NpdGlvbicsXHJcbiAgICAgICAgICB1cGRhdGVUcmlnZ2VyOiAnZ2V0UG9zaXRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZ2dyZWdhdG9yOiB7XHJcbiAgICAgICAgICBwcm9wOiAnZ3JpZEFnZ3JlZ2F0b3InXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVyOiBnZXRBZ2dyZWdhdGVkRGF0YVxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlRW5oYW5jZWRHcmlkTGF5ZXIgZXh0ZW5kcyBDUFVHcmlkTGF5ZXIge1xyXG4gIGluaXRpYWxpemVTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGNwdUFnZ3JlZ2F0b3IgPSBuZXcgQ1BVQWdncmVnYXRvcih7XHJcbiAgICAgIGFnZ3JlZ2F0aW9uOiBncmlkQWdncmVnYXRpb25cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNwdUFnZ3JlZ2F0b3IsXHJcbiAgICAgIGFnZ3JlZ2F0b3JTdGF0ZTogY3B1QWdncmVnYXRvci5zdGF0ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZU1hbmFnZXIgPSB0aGlzLmdldEF0dHJpYnV0ZU1hbmFnZXIoKTtcclxuICAgIGF0dHJpYnV0ZU1hbmFnZXIuYWRkKHtcclxuICAgICAgcG9zaXRpb25zOiB7c2l6ZTogMywgYWNjZXNzb3I6ICdnZXRQb3NpdGlvbid9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblNjYWxlRW5oYW5jZWRHcmlkTGF5ZXIubGF5ZXJOYW1lID0gJ1NjYWxlRW5oYW5jZWRHcmlkTGF5ZXInO1xyXG4iXX0=