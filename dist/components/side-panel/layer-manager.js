"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDataButtonFactory = AddDataButtonFactory;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSortableHoc = require("react-sortable-hoc");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _dataUtils = require("../../utils/data-utils");

var _layerPanel = _interopRequireDefault(require("./layer-panel/layer-panel"));

var _sourceDataCatalog = _interopRequireDefault(require("./common/source-data-catalog"));

var _icons = require("../common/icons");

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents2 = require("../common/styled-components");

var _defaultSettings = require("../../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: ", ";\n\n  &.sorting {\n    pointer-events: none;\n  }\n\n  &.sorting-layers .layer-panel__header {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    *,\n    *:before,\n    *:after {\n      box-sizing: border-box;\n    }\n    .layer__drag-handle {\n      opacity: 1;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LayerBlendingSelector = function LayerBlendingSelector(_ref) {
  var layerBlending = _ref.layerBlending,
      updateLayerBlending = _ref.updateLayerBlending;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "Layer Blending"), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: layerBlending,
    options: Object.keys(_defaultSettings.LAYER_BLENDINGS),
    multiSelect: false,
    searchable: false,
    onChange: updateLayerBlending
  }));
}; // make sure the element is always visible while is being dragged
// item being dragged is appended in body, here to reset its global style


var SortableStyledItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.textColorHl;
});

function AddDataButtonFactory() {
  var AddDataButton = function AddDataButton(_ref2) {
    var onClick = _ref2.onClick,
        isInactive = _ref2.isInactive;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      onClick: onClick,
      isInactive: !isInactive,
      width: "105px",
      secondary: true
    }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
      height: "12px"
    }), "Add Data");
  };

  return AddDataButton;
}

LayerManagerFactory.deps = [AddDataButtonFactory, _layerPanel["default"], _sourceDataCatalog["default"]];

function LayerManagerFactory(AddDataButton, LayerPanel, SourceDataCatalog) {
  var _class, _temp;

  // By wrapping layer panel using a sortable element we don't have to implement the drag and drop logic into the panel itself;
  // Developers can provide any layer panel implementation and it will still be sortable
  var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref3) {
    var children = _ref3.children,
        isSorting = _ref3.isSorting;
    return /*#__PURE__*/_react["default"].createElement(SortableStyledItem, {
      className: (0, _classnames["default"])('sortable-layer-items', {
        sorting: isSorting
      })
    }, children);
  });
  var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/_react["default"].createElement("div", null, children);
  });
  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerManager, _Component);

    var _super = _createSuper(LayerManager);

    function LayerManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSorting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerClassSelector", function (props) {
        return props.layerClasses;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerTypeOptionsSelector", (0, _reselect.createSelector)(_this.layerClassSelector, function (layerClasses) {
        return Object.keys(layerClasses).map(function (key) {
          var layer = new layerClasses[key]();
          return {
            id: key,
            label: layer.name,
            icon: layer.layerIcon
          };
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_addEmptyNewLayer", function () {
        _this.props.addLayer();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSort", function (_ref5) {
        var oldIndex = _ref5.oldIndex,
            newIndex = _ref5.newIndex;

        _this.props.updateLayerOrder((0, _dataUtils.arrayMove)(_this.props.layerOrder, oldIndex, newIndex));

        _this.setState({
          isSorting: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
        _this.setState({
          isSorting: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateBeforeSortStart", function (_ref6) {
        var index = _ref6.index;
        // if layer config is active, close it
        var _this$props = _this.props,
            layerOrder = _this$props.layerOrder,
            layers = _this$props.layers,
            layerConfigChange = _this$props.layerConfigChange;
        var layerIdx = layerOrder[index];

        if (layers[layerIdx].config.isConfigActive) {
          layerConfigChange(layers[layerIdx], {
            isConfigActive: false
          });
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerManager, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            layers = _this$props2.layers,
            datasets = _this$props2.datasets,
            layerOrder = _this$props2.layerOrder,
            openModal = _this$props2.openModal;
        var defaultDataset = Object.keys(datasets)[0];
        var layerTypeOptions = this.layerTypeOptionsSelector(this.props);
        var layerActions = {
          layerColorUIChange: this.props.layerColorUIChange,
          layerConfigChange: this.props.layerConfigChange,
          layerVisualChannelConfigChange: this.props.layerVisualChannelConfigChange,
          layerTypeChange: this.props.layerTypeChange,
          layerVisConfigChange: this.props.layerVisConfigChange,
          layerTextLabelChange: this.props.layerTextLabelChange,
          removeLayer: this.props.removeLayer
        };
        var panelProps = {
          datasets: datasets,
          openModal: openModal,
          layerTypeOptions: layerTypeOptions
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "layer-manager"
        }, /*#__PURE__*/_react["default"].createElement(SourceDataCatalog, {
          datasets: datasets,
          showDatasetTable: this.props.showDatasetTable,
          removeDataset: this.props.removeDataset,
          showDeleteDataset: true
        }), /*#__PURE__*/_react["default"].createElement(AddDataButton, {
          onClick: this.props.showAddDataModal,
          isInactive: !defaultDataset
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(SortableContainer, {
          onSortEnd: this._handleSort,
          onSortStart: this._onSortStart,
          updateBeforeSortStart: this._updateBeforeSortStart,
          lockAxis: "y",
          helperClass: "sorting-layers",
          useDragHandle: true
        }, layerOrder.map(function (layerIdx, index) {
          return /*#__PURE__*/_react["default"].createElement(SortableItem, {
            key: "layer-".concat(layerIdx),
            index: index,
            isSorting: _this2.state.isSorting
          }, /*#__PURE__*/_react["default"].createElement(LayerPanel, (0, _extends2["default"])({}, panelProps, layerActions, {
            sortData: layerIdx,
            key: layers[layerIdx].id,
            idx: layerIdx,
            layer: layers[layerIdx]
          })));
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, defaultDataset ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          onClick: this._addEmptyNewLayer,
          width: "105px"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), "Add Layer") : null), /*#__PURE__*/_react["default"].createElement(LayerBlendingSelector, {
          layerBlending: this.props.layerBlending,
          updateLayerBlending: this.props.updateLayerBlending
        }));
      }
    }]);
    return LayerManager;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    // functions
    addLayer: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTextLabelChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    removeDataset: _propTypes["default"].func.isRequired,
    showDatasetTable: _propTypes["default"].func.isRequired,
    updateLayerBlending: _propTypes["default"].func.isRequired,
    updateLayerOrder: _propTypes["default"].func.isRequired
  }), _temp;
}

var _default = LayerManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJMYXllckJsZW5kaW5nU2VsZWN0b3IiLCJsYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsIk9iamVjdCIsImtleXMiLCJMQVlFUl9CTEVORElOR1MiLCJTb3J0YWJsZVN0eWxlZEl0ZW0iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25XcmFwcGVyWiIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0Q29sb3JIbCIsIkFkZERhdGFCdXR0b25GYWN0b3J5IiwiQWRkRGF0YUJ1dHRvbiIsIm9uQ2xpY2siLCJpc0luYWN0aXZlIiwiTGF5ZXJNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJMYXllclBhbmVsRmFjdG9yeSIsIlNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSIsIkxheWVyUGFuZWwiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsIlNvcnRhYmxlSXRlbSIsImNoaWxkcmVuIiwiaXNTb3J0aW5nIiwic29ydGluZyIsIlNvcnRhYmxlQ29udGFpbmVyIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJDbGFzc1NlbGVjdG9yIiwibWFwIiwia2V5IiwibGF5ZXIiLCJpZCIsImxhYmVsIiwibmFtZSIsImljb24iLCJsYXllckljb24iLCJhZGRMYXllciIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJ1cGRhdGVMYXllck9yZGVyIiwibGF5ZXJPcmRlciIsInNldFN0YXRlIiwiaW5kZXgiLCJsYXllcnMiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVySWR4IiwiY29uZmlnIiwiaXNDb25maWdBY3RpdmUiLCJkYXRhc2V0cyIsIm9wZW5Nb2RhbCIsImRlZmF1bHREYXRhc2V0IiwibGF5ZXJUeXBlT3B0aW9ucyIsImxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciIsImxheWVyQWN0aW9ucyIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImxheWVyVHlwZUNoYW5nZSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJyZW1vdmVMYXllciIsInBhbmVsUHJvcHMiLCJzaG93RGF0YXNldFRhYmxlIiwicmVtb3ZlRGF0YXNldCIsInNob3dBZGREYXRhTW9kYWwiLCJfaGFuZGxlU29ydCIsIl9vblNvcnRTdGFydCIsIl91cGRhdGVCZWZvcmVTb3J0U3RhcnQiLCJzdGF0ZSIsIl9hZGRFbXB0eU5ld0xheWVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJhbnkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO0FBQUEsTUFBRUMsYUFBRixRQUFFQSxhQUFGO0FBQUEsTUFBaUJDLG1CQUFqQixRQUFpQkEsbUJBQWpCO0FBQUEsc0JBQzVCLGdDQUFDLG1DQUFELHFCQUNFLGdDQUFDLDZCQUFELHlCQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRUQsYUFEakI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsTUFBTSxDQUFDQyxJQUFQLENBQVlDLGdDQUFaLENBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUUsS0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFSDtBQUxaLElBRkYsQ0FENEI7QUFBQSxDQUE5QixDLENBYUE7QUFDQTs7O0FBQ0EsSUFBTUksa0JBQWtCLEdBQUdD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QUFnQmpCWCxJQUFBQSxnQkFBZ0IsRUFBRVMsc0JBQVVNLElBQVYsQ0FBZUosVUFoQmhCO0FBaUJqQjdFLElBQUFBLG1CQUFtQixFQUFFMkUsc0JBQVVNLElBQVYsQ0FBZUosVUFqQm5CO0FBa0JqQmpDLElBQUFBLGdCQUFnQixFQUFFK0Isc0JBQVVNLElBQVYsQ0FBZUo7QUFsQmhCLEdBRHJCO0FBcUlEOztlQUVjekQsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge3NvcnRhYmxlQ29udGFpbmVyLCBzb3J0YWJsZUVsZW1lbnR9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7YXJyYXlNb3ZlfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuXHJcbmltcG9ydCBMYXllclBhbmVsRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsJztcclxuaW1wb3J0IFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9zb3VyY2UtZGF0YS1jYXRhbG9nJztcclxuaW1wb3J0IHtBZGR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5pbXBvcnQge1xyXG4gIFBhbmVsTGFiZWwsXHJcbiAgU2lkZVBhbmVsRGl2aWRlcixcclxuICBTaWRlUGFuZWxTZWN0aW9uLFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7TEFZRVJfQkxFTkRJTkdTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBMYXllckJsZW5kaW5nU2VsZWN0b3IgPSAoe2xheWVyQmxlbmRpbmcsIHVwZGF0ZUxheWVyQmxlbmRpbmd9KSA9PiAoXHJcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICA8UGFuZWxMYWJlbD5MYXllciBCbGVuZGluZzwvUGFuZWxMYWJlbD5cclxuICAgIDxJdGVtU2VsZWN0b3JcclxuICAgICAgc2VsZWN0ZWRJdGVtcz17bGF5ZXJCbGVuZGluZ31cclxuICAgICAgb3B0aW9ucz17T2JqZWN0LmtleXMoTEFZRVJfQkxFTkRJTkdTKX1cclxuICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgb25DaGFuZ2U9e3VwZGF0ZUxheWVyQmxlbmRpbmd9XHJcbiAgICAvPlxyXG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuKTtcclxuXHJcbi8vIG1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBhbHdheXMgdmlzaWJsZSB3aGlsZSBpcyBiZWluZyBkcmFnZ2VkXHJcbi8vIGl0ZW0gYmVpbmcgZHJhZ2dlZCBpcyBhcHBlbmRlZCBpbiBib2R5LCBoZXJlIHRvIHJlc2V0IGl0cyBnbG9iYWwgc3R5bGVcclxuY29uc3QgU29ydGFibGVTdHlsZWRJdGVtID0gc3R5bGVkLmRpdmBcclxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV3JhcHBlclogKyAxfTtcclxuXHJcbiAgJi5zb3J0aW5nIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi5zb3J0aW5nLWxheWVycyAubGF5ZXItcGFuZWxfX2hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcclxuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRGYW1pbHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodH07XHJcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFNpemV9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodH07XHJcbiAgICAqLFxyXG4gICAgKjpiZWZvcmUsXHJcbiAgICAqOmFmdGVyIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIC5sYXllcl9fZHJhZy1oYW5kbGUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZERhdGFCdXR0b25GYWN0b3J5KCkge1xyXG4gIGNvbnN0IEFkZERhdGFCdXR0b24gPSAoe29uQ2xpY2ssIGlzSW5hY3RpdmV9KSA9PiAoXHJcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGlzSW5hY3RpdmU9eyFpc0luYWN0aXZlfSB3aWR0aD1cIjEwNXB4XCIgc2Vjb25kYXJ5PlxyXG4gICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPlxyXG4gICAgICBBZGQgRGF0YVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIEFkZERhdGFCdXR0b247XHJcbn1cclxuXHJcbkxheWVyTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtBZGREYXRhQnV0dG9uRmFjdG9yeSwgTGF5ZXJQYW5lbEZhY3RvcnksIFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBMYXllck1hbmFnZXJGYWN0b3J5KEFkZERhdGFCdXR0b24sIExheWVyUGFuZWwsIFNvdXJjZURhdGFDYXRhbG9nKSB7XHJcbiAgLy8gQnkgd3JhcHBpbmcgbGF5ZXIgcGFuZWwgdXNpbmcgYSBzb3J0YWJsZSBlbGVtZW50IHdlIGRvbid0IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBkcmFnIGFuZCBkcm9wIGxvZ2ljIGludG8gdGhlIHBhbmVsIGl0c2VsZjtcclxuICAvLyBEZXZlbG9wZXJzIGNhbiBwcm92aWRlIGFueSBsYXllciBwYW5lbCBpbXBsZW1lbnRhdGlvbiBhbmQgaXQgd2lsbCBzdGlsbCBiZSBzb3J0YWJsZVxyXG4gIGNvbnN0IFNvcnRhYmxlSXRlbSA9IHNvcnRhYmxlRWxlbWVudCgoe2NoaWxkcmVuLCBpc1NvcnRpbmd9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U29ydGFibGVTdHlsZWRJdGVtIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc29ydGFibGUtbGF5ZXItaXRlbXMnLCB7c29ydGluZzogaXNTb3J0aW5nfSl9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Tb3J0YWJsZVN0eWxlZEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBTb3J0YWJsZUNvbnRhaW5lciA9IHNvcnRhYmxlQ29udGFpbmVyKCh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdj57Y2hpbGRyZW59PC9kaXY+O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2xhc3MgTGF5ZXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxuICAgICAgLy8gZnVuY3Rpb25zXHJcbiAgICAgIGFkZExheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllclRleHRMYWJlbENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllclR5cGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICByZW1vdmVEYXRhc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBzaG93RGF0YXNldFRhYmxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB1cGRhdGVMYXllck9yZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGlzU29ydGluZzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgbGF5ZXJDbGFzc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJDbGFzc2VzO1xyXG4gICAgbGF5ZXJUeXBlT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5sYXllckNsYXNzU2VsZWN0b3IsIGxheWVyQ2xhc3NlcyA9PlxyXG4gICAgICBPYmplY3Qua2V5cyhsYXllckNsYXNzZXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IGxheWVyQ2xhc3Nlc1trZXldKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICBsYWJlbDogbGF5ZXIubmFtZSxcclxuICAgICAgICAgIGljb246IGxheWVyLmxheWVySWNvblxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIF9hZGRFbXB0eU5ld0xheWVyID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmFkZExheWVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9oYW5kbGVTb3J0ID0gKHtvbGRJbmRleCwgbmV3SW5kZXh9KSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlTGF5ZXJPcmRlcihhcnJheU1vdmUodGhpcy5wcm9wcy5sYXllck9yZGVyLCBvbGRJbmRleCwgbmV3SW5kZXgpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNTb3J0aW5nOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25Tb3J0U3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogdHJ1ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfdXBkYXRlQmVmb3JlU29ydFN0YXJ0ID0gKHtpbmRleH0pID0+IHtcclxuICAgICAgLy8gaWYgbGF5ZXIgY29uZmlnIGlzIGFjdGl2ZSwgY2xvc2UgaXRcclxuICAgICAgY29uc3Qge2xheWVyT3JkZXIsIGxheWVycywgbGF5ZXJDb25maWdDaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgbGF5ZXJJZHggPSBsYXllck9yZGVyW2luZGV4XTtcclxuICAgICAgaWYgKGxheWVyc1tsYXllcklkeF0uY29uZmlnLmlzQ29uZmlnQWN0aXZlKSB7XHJcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2UobGF5ZXJzW2xheWVySWR4XSwge2lzQ29uZmlnQWN0aXZlOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2xheWVycywgZGF0YXNldHMsIGxheWVyT3JkZXIsIG9wZW5Nb2RhbH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKVswXTtcclxuICAgICAgY29uc3QgbGF5ZXJUeXBlT3B0aW9ucyA9IHRoaXMubGF5ZXJUeXBlT3B0aW9uc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgY29uc3QgbGF5ZXJBY3Rpb25zID0ge1xyXG4gICAgICAgIGxheWVyQ29sb3JVSUNoYW5nZTogdGhpcy5wcm9wcy5sYXllckNvbG9yVUlDaGFuZ2UsXHJcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJDb25maWdDaGFuZ2UsXHJcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcclxuICAgICAgICBsYXllclR5cGVDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJUeXBlQ2hhbmdlLFxyXG4gICAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVmlzQ29uZmlnQ2hhbmdlLFxyXG4gICAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlLFxyXG4gICAgICAgIHJlbW92ZUxheWVyOiB0aGlzLnByb3BzLnJlbW92ZUxheWVyXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBwYW5lbFByb3BzID0ge1xyXG4gICAgICAgIGRhdGFzZXRzLFxyXG4gICAgICAgIG9wZW5Nb2RhbCxcclxuICAgICAgICBsYXllclR5cGVPcHRpb25zXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItbWFuYWdlclwiPlxyXG4gICAgICAgICAgPFNvdXJjZURhdGFDYXRhbG9nXHJcbiAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cclxuICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17dGhpcy5wcm9wcy5zaG93RGF0YXNldFRhYmxlfVxyXG4gICAgICAgICAgICByZW1vdmVEYXRhc2V0PXt0aGlzLnByb3BzLnJlbW92ZURhdGFzZXR9XHJcbiAgICAgICAgICAgIHNob3dEZWxldGVEYXRhc2V0XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEFkZERhdGFCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zaG93QWRkRGF0YU1vZGFsfSBpc0luYWN0aXZlPXshZGVmYXVsdERhdGFzZXR9IC8+XHJcbiAgICAgICAgICA8U2lkZVBhbmVsRGl2aWRlciAvPlxyXG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTb3J0YWJsZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIG9uU29ydEVuZD17dGhpcy5faGFuZGxlU29ydH1cclxuICAgICAgICAgICAgICBvblNvcnRTdGFydD17dGhpcy5fb25Tb3J0U3RhcnR9XHJcbiAgICAgICAgICAgICAgdXBkYXRlQmVmb3JlU29ydFN0YXJ0PXt0aGlzLl91cGRhdGVCZWZvcmVTb3J0U3RhcnR9XHJcbiAgICAgICAgICAgICAgbG9ja0F4aXM9XCJ5XCJcclxuICAgICAgICAgICAgICBoZWxwZXJDbGFzcz1cInNvcnRpbmctbGF5ZXJzXCJcclxuICAgICAgICAgICAgICB1c2VEcmFnSGFuZGxlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGF5ZXJPcmRlci5tYXAoKGxheWVySWR4LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlSXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2BsYXllci0ke2xheWVySWR4fWB9XHJcbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgaXNTb3J0aW5nPXt0aGlzLnN0YXRlLmlzU29ydGluZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExheWVyUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucGFuZWxQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJBY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnREYXRhPXtsYXllcklkeH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyc1tsYXllcklkeF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWR4PXtsYXllcklkeH1cclxuICAgICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJzW2xheWVySWR4XX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU29ydGFibGVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NvcnRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgIHtkZWZhdWx0RGF0YXNldCA/IChcclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2FkZEVtcHR5TmV3TGF5ZXJ9IHdpZHRoPVwiMTA1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XHJcbiAgICAgICAgICAgICAgICBBZGQgTGF5ZXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICA8TGF5ZXJCbGVuZGluZ1NlbGVjdG9yXHJcbiAgICAgICAgICAgIGxheWVyQmxlbmRpbmc9e3RoaXMucHJvcHMubGF5ZXJCbGVuZGluZ31cclxuICAgICAgICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZz17dGhpcy5wcm9wcy51cGRhdGVMYXllckJsZW5kaW5nfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllck1hbmFnZXJGYWN0b3J5O1xyXG4iXX0=