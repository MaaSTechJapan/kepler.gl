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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJMYXllckJsZW5kaW5nU2VsZWN0b3IiLCJsYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsIk9iamVjdCIsImtleXMiLCJMQVlFUl9CTEVORElOR1MiLCJTb3J0YWJsZVN0eWxlZEl0ZW0iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25XcmFwcGVyWiIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0Q29sb3JIbCIsIkFkZERhdGFCdXR0b25GYWN0b3J5IiwiQWRkRGF0YUJ1dHRvbiIsIm9uQ2xpY2siLCJpc0luYWN0aXZlIiwiTGF5ZXJNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJMYXllclBhbmVsRmFjdG9yeSIsIlNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSIsIkxheWVyUGFuZWwiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsIlNvcnRhYmxlSXRlbSIsImNoaWxkcmVuIiwiaXNTb3J0aW5nIiwic29ydGluZyIsIlNvcnRhYmxlQ29udGFpbmVyIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJDbGFzc1NlbGVjdG9yIiwibWFwIiwia2V5IiwibGF5ZXIiLCJpZCIsImxhYmVsIiwibmFtZSIsImljb24iLCJsYXllckljb24iLCJhZGRMYXllciIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJ1cGRhdGVMYXllck9yZGVyIiwibGF5ZXJPcmRlciIsInNldFN0YXRlIiwiaW5kZXgiLCJsYXllcnMiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVySWR4IiwiY29uZmlnIiwiaXNDb25maWdBY3RpdmUiLCJkYXRhc2V0cyIsIm9wZW5Nb2RhbCIsImRlZmF1bHREYXRhc2V0IiwibGF5ZXJUeXBlT3B0aW9ucyIsImxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciIsImxheWVyQWN0aW9ucyIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImxheWVyVHlwZUNoYW5nZSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJyZW1vdmVMYXllciIsInBhbmVsUHJvcHMiLCJzaG93RGF0YXNldFRhYmxlIiwicmVtb3ZlRGF0YXNldCIsInNob3dBZGREYXRhTW9kYWwiLCJfaGFuZGxlU29ydCIsIl9vblNvcnRTdGFydCIsIl91cGRhdGVCZWZvcmVTb3J0U3RhcnQiLCJzdGF0ZSIsIl9hZGRFbXB0eU5ld0xheWVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJhbnkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO0FBQUEsTUFBRUMsYUFBRixRQUFFQSxhQUFGO0FBQUEsTUFBaUJDLG1CQUFqQixRQUFpQkEsbUJBQWpCO0FBQUEsc0JBQzVCLGdDQUFDLG1DQUFELHFCQUNFLGdDQUFDLDZCQUFELHlCQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRUQsYUFEakI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsTUFBTSxDQUFDQyxJQUFQLENBQVlDLGdDQUFaLENBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUUsS0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFSDtBQUxaLElBRkYsQ0FENEI7QUFBQSxDQUE5QixDLENBYUE7QUFDQTs7O0FBQ0EsSUFBTUksa0JBQWtCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZ0JBQVosR0FBK0IsQ0FBbkM7QUFBQSxDQURNLEVBUUEsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxvQkFBaEI7QUFBQSxDQVJMLEVBU0wsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxVQUFoQjtBQUFBLENBVEEsRUFVTCxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLFVBQWhCO0FBQUEsQ0FWQSxFQVdQLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssUUFBaEI7QUFBQSxDQVhFLEVBWUwsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxVQUFoQjtBQUFBLENBWkEsRUFvQlQsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxXQUFoQjtBQUFBLENBcEJJLENBQXhCOztBQXlCTyxTQUFTQyxvQkFBVCxHQUFnQztBQUNyQyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsUUFBRUMsT0FBRixTQUFFQSxPQUFGO0FBQUEsUUFBV0MsVUFBWCxTQUFXQSxVQUFYO0FBQUEsd0JBQ3BCLGdDQUFDLHlCQUFEO0FBQVEsTUFBQSxPQUFPLEVBQUVELE9BQWpCO0FBQTBCLE1BQUEsVUFBVSxFQUFFLENBQUNDLFVBQXZDO0FBQW1ELE1BQUEsS0FBSyxFQUFDLE9BQXpEO0FBQWlFLE1BQUEsU0FBUztBQUExRSxvQkFDRSxnQ0FBQyxVQUFEO0FBQUssTUFBQSxNQUFNLEVBQUM7QUFBWixNQURGLGFBRG9CO0FBQUEsR0FBdEI7O0FBT0EsU0FBT0YsYUFBUDtBQUNEOztBQUVERyxtQkFBbUIsQ0FBQ0MsSUFBcEIsR0FBMkIsQ0FBQ0wsb0JBQUQsRUFBdUJNLHNCQUF2QixFQUEwQ0MsNkJBQTFDLENBQTNCOztBQUVBLFNBQVNILG1CQUFULENBQTZCSCxhQUE3QixFQUE0Q08sVUFBNUMsRUFBd0RDLGlCQUF4RCxFQUEyRTtBQUFBOztBQUN6RTtBQUNBO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLHVDQUFnQixpQkFBMkI7QUFBQSxRQUF6QkMsUUFBeUIsU0FBekJBLFFBQXlCO0FBQUEsUUFBZkMsU0FBZSxTQUFmQSxTQUFlO0FBQzlELHdCQUNFLGdDQUFDLGtCQUFEO0FBQW9CLE1BQUEsU0FBUyxFQUFFLDRCQUFXLHNCQUFYLEVBQW1DO0FBQUNDLFFBQUFBLE9BQU8sRUFBRUQ7QUFBVixPQUFuQztBQUEvQixPQUNHRCxRQURILENBREY7QUFLRCxHQU5vQixDQUFyQjtBQVFBLE1BQU1HLGlCQUFpQixHQUFHLHlDQUFrQixpQkFBZ0I7QUFBQSxRQUFkSCxRQUFjLFNBQWRBLFFBQWM7QUFDMUQsd0JBQU8sNkNBQU1BLFFBQU4sQ0FBUDtBQUNELEdBRnlCLENBQTFCO0FBSUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdHQXFCVTtBQUNOQyxRQUFBQSxTQUFTLEVBQUU7QUFETCxPQXJCVjtBQUFBLDZHQXlCdUIsVUFBQXJCLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUN3QixZQUFWO0FBQUEsT0F6QjVCO0FBQUEsbUhBMEI2Qiw4QkFBZSxNQUFLQyxrQkFBcEIsRUFBd0MsVUFBQUQsWUFBWTtBQUFBLGVBQzdFOUIsTUFBTSxDQUFDQyxJQUFQLENBQVk2QixZQUFaLEVBQTBCRSxHQUExQixDQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDbkMsY0FBTUMsS0FBSyxHQUFHLElBQUlKLFlBQVksQ0FBQ0csR0FBRCxDQUFoQixFQUFkO0FBQ0EsaUJBQU87QUFDTEUsWUFBQUEsRUFBRSxFQUFFRixHQURDO0FBRUxHLFlBQUFBLEtBQUssRUFBRUYsS0FBSyxDQUFDRyxJQUZSO0FBR0xDLFlBQUFBLElBQUksRUFBRUosS0FBSyxDQUFDSztBQUhQLFdBQVA7QUFLRCxTQVBELENBRDZFO0FBQUEsT0FBcEQsQ0ExQjdCO0FBQUEsNEdBcUNzQixZQUFNO0FBQ3hCLGNBQUtqQyxLQUFMLENBQVdrQyxRQUFYO0FBQ0QsT0F2Q0g7QUFBQSxzR0F5Q2dCLGlCQUEwQjtBQUFBLFlBQXhCQyxRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxZQUFkQyxRQUFjLFNBQWRBLFFBQWM7O0FBQ3RDLGNBQUtwQyxLQUFMLENBQVdxQyxnQkFBWCxDQUE0QiwwQkFBVSxNQUFLckMsS0FBTCxDQUFXc0MsVUFBckIsRUFBaUNILFFBQWpDLEVBQTJDQyxRQUEzQyxDQUE1Qjs7QUFDQSxjQUFLRyxRQUFMLENBQWM7QUFBQ2xCLFVBQUFBLFNBQVMsRUFBRTtBQUFaLFNBQWQ7QUFDRCxPQTVDSDtBQUFBLHVHQThDaUIsWUFBTTtBQUNuQixjQUFLa0IsUUFBTCxDQUFjO0FBQUNsQixVQUFBQSxTQUFTLEVBQUU7QUFBWixTQUFkO0FBQ0QsT0FoREg7QUFBQSxpSEFrRDJCLGlCQUFhO0FBQUEsWUFBWG1CLEtBQVcsU0FBWEEsS0FBVztBQUNwQztBQURvQywwQkFFWSxNQUFLeEMsS0FGakI7QUFBQSxZQUU3QnNDLFVBRjZCLGVBRTdCQSxVQUY2QjtBQUFBLFlBRWpCRyxNQUZpQixlQUVqQkEsTUFGaUI7QUFBQSxZQUVUQyxpQkFGUyxlQUVUQSxpQkFGUztBQUdwQyxZQUFNQyxRQUFRLEdBQUdMLFVBQVUsQ0FBQ0UsS0FBRCxDQUEzQjs7QUFDQSxZQUFJQyxNQUFNLENBQUNFLFFBQUQsQ0FBTixDQUFpQkMsTUFBakIsQ0FBd0JDLGNBQTVCLEVBQTRDO0FBQzFDSCxVQUFBQSxpQkFBaUIsQ0FBQ0QsTUFBTSxDQUFDRSxRQUFELENBQVAsRUFBbUI7QUFBQ0UsWUFBQUEsY0FBYyxFQUFFO0FBQWpCLFdBQW5CLENBQWpCO0FBQ0Q7QUFDRixPQXpESDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQTJEVztBQUFBOztBQUFBLDJCQUMyQyxLQUFLN0MsS0FEaEQ7QUFBQSxZQUNBeUMsTUFEQSxnQkFDQUEsTUFEQTtBQUFBLFlBQ1FLLFFBRFIsZ0JBQ1FBLFFBRFI7QUFBQSxZQUNrQlIsVUFEbEIsZ0JBQ2tCQSxVQURsQjtBQUFBLFlBQzhCUyxTQUQ5QixnQkFDOEJBLFNBRDlCO0FBRVAsWUFBTUMsY0FBYyxHQUFHdEQsTUFBTSxDQUFDQyxJQUFQLENBQVltRCxRQUFaLEVBQXNCLENBQXRCLENBQXZCO0FBQ0EsWUFBTUcsZ0JBQWdCLEdBQUcsS0FBS0Msd0JBQUwsQ0FBOEIsS0FBS2xELEtBQW5DLENBQXpCO0FBRUEsWUFBTW1ELFlBQVksR0FBRztBQUNuQkMsVUFBQUEsa0JBQWtCLEVBQUUsS0FBS3BELEtBQUwsQ0FBV29ELGtCQURaO0FBRW5CVixVQUFBQSxpQkFBaUIsRUFBRSxLQUFLMUMsS0FBTCxDQUFXMEMsaUJBRlg7QUFHbkJXLFVBQUFBLDhCQUE4QixFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCw4QkFIeEI7QUFJbkJDLFVBQUFBLGVBQWUsRUFBRSxLQUFLdEQsS0FBTCxDQUFXc0QsZUFKVDtBQUtuQkMsVUFBQUEsb0JBQW9CLEVBQUUsS0FBS3ZELEtBQUwsQ0FBV3VELG9CQUxkO0FBTW5CQyxVQUFBQSxvQkFBb0IsRUFBRSxLQUFLeEQsS0FBTCxDQUFXd0Qsb0JBTmQ7QUFPbkJDLFVBQUFBLFdBQVcsRUFBRSxLQUFLekQsS0FBTCxDQUFXeUQ7QUFQTCxTQUFyQjtBQVVBLFlBQU1DLFVBQVUsR0FBRztBQUNqQlosVUFBQUEsUUFBUSxFQUFSQSxRQURpQjtBQUVqQkMsVUFBQUEsU0FBUyxFQUFUQSxTQUZpQjtBQUdqQkUsVUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUhpQixTQUFuQjtBQU1BLDRCQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRSxnQ0FBQyxpQkFBRDtBQUNFLFVBQUEsUUFBUSxFQUFFSCxRQURaO0FBRUUsVUFBQSxnQkFBZ0IsRUFBRSxLQUFLOUMsS0FBTCxDQUFXMkQsZ0JBRi9CO0FBR0UsVUFBQSxhQUFhLEVBQUUsS0FBSzNELEtBQUwsQ0FBVzRELGFBSDVCO0FBSUUsVUFBQSxpQkFBaUI7QUFKbkIsVUFERixlQU9FLGdDQUFDLGFBQUQ7QUFBZSxVQUFBLE9BQU8sRUFBRSxLQUFLNUQsS0FBTCxDQUFXNkQsZ0JBQW5DO0FBQXFELFVBQUEsVUFBVSxFQUFFLENBQUNiO0FBQWxFLFVBUEYsZUFRRSxnQ0FBQyxtQ0FBRCxPQVJGLGVBU0UsZ0NBQUMsbUNBQUQscUJBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBRSxLQUFLYyxXQURsQjtBQUVFLFVBQUEsV0FBVyxFQUFFLEtBQUtDLFlBRnBCO0FBR0UsVUFBQSxxQkFBcUIsRUFBRSxLQUFLQyxzQkFIOUI7QUFJRSxVQUFBLFFBQVEsRUFBQyxHQUpYO0FBS0UsVUFBQSxXQUFXLEVBQUMsZ0JBTGQ7QUFNRSxVQUFBLGFBQWE7QUFOZixXQVFHMUIsVUFBVSxDQUFDWixHQUFYLENBQWUsVUFBQ2lCLFFBQUQsRUFBV0gsS0FBWDtBQUFBLDhCQUNkLGdDQUFDLFlBQUQ7QUFDRSxZQUFBLEdBQUcsa0JBQVdHLFFBQVgsQ0FETDtBQUVFLFlBQUEsS0FBSyxFQUFFSCxLQUZUO0FBR0UsWUFBQSxTQUFTLEVBQUUsTUFBSSxDQUFDeUIsS0FBTCxDQUFXNUM7QUFIeEIsMEJBS0UsZ0NBQUMsVUFBRCxnQ0FDTXFDLFVBRE4sRUFFTVAsWUFGTjtBQUdFLFlBQUEsUUFBUSxFQUFFUixRQUhaO0FBSUUsWUFBQSxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0UsUUFBRCxDQUFOLENBQWlCZCxFQUp4QjtBQUtFLFlBQUEsR0FBRyxFQUFFYyxRQUxQO0FBTUUsWUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsUUFBRDtBQU5mLGFBTEYsQ0FEYztBQUFBLFNBQWYsQ0FSSCxDQURGLENBVEYsZUFvQ0UsZ0NBQUMsbUNBQUQsUUFDR0ssY0FBYyxnQkFDYixnQ0FBQyx5QkFBRDtBQUFRLFVBQUEsT0FBTyxFQUFFLEtBQUtrQixpQkFBdEI7QUFBeUMsVUFBQSxLQUFLLEVBQUM7QUFBL0Msd0JBQ0UsZ0NBQUMsVUFBRDtBQUFLLFVBQUEsTUFBTSxFQUFDO0FBQVosVUFERixjQURhLEdBS1gsSUFOTixDQXBDRixlQTRDRSxnQ0FBQyxxQkFBRDtBQUNFLFVBQUEsYUFBYSxFQUFFLEtBQUtsRSxLQUFMLENBQVdSLGFBRDVCO0FBRUUsVUFBQSxtQkFBbUIsRUFBRSxLQUFLUSxLQUFMLENBQVdQO0FBRmxDLFVBNUNGLENBREY7QUFtREQ7QUFuSUg7QUFBQTtBQUFBLElBQWtDMEUsZ0JBQWxDLHlEQUNxQjtBQUNqQnJCLElBQUFBLFFBQVEsRUFBRXNCLHNCQUFVQyxNQUFWLENBQWlCQyxVQURWO0FBRWpCOUUsSUFBQUEsYUFBYSxFQUFFNEUsc0JBQVVHLE1BQVYsQ0FBaUJELFVBRmY7QUFHakI5QyxJQUFBQSxZQUFZLEVBQUU0QyxzQkFBVUMsTUFBVixDQUFpQkMsVUFIZDtBQUlqQjdCLElBQUFBLE1BQU0sRUFBRTJCLHNCQUFVSSxPQUFWLENBQWtCSixzQkFBVUssR0FBNUIsRUFBaUNILFVBSnhCO0FBS2pCO0FBQ0FwQyxJQUFBQSxRQUFRLEVBQUVrQyxzQkFBVU0sSUFBVixDQUFlSixVQU5SO0FBT2pCbEIsSUFBQUEsa0JBQWtCLEVBQUVnQixzQkFBVU0sSUFBVixDQUFlSixVQVBsQjtBQVFqQjVCLElBQUFBLGlCQUFpQixFQUFFMEIsc0JBQVVNLElBQVYsQ0FBZUosVUFSakI7QUFTakJkLElBQUFBLG9CQUFvQixFQUFFWSxzQkFBVU0sSUFBVixDQUFlSixVQVRwQjtBQVVqQmpCLElBQUFBLDhCQUE4QixFQUFFZSxzQkFBVU0sSUFBVixDQUFlSixVQVY5QjtBQVdqQmhCLElBQUFBLGVBQWUsRUFBRWMsc0JBQVVNLElBQVYsQ0FBZUosVUFYZjtBQVlqQmYsSUFBQUEsb0JBQW9CLEVBQUVhLHNCQUFVTSxJQUFWLENBQWVKLFVBWnBCO0FBYWpCdkIsSUFBQUEsU0FBUyxFQUFFcUIsc0JBQVVNLElBQVYsQ0FBZUosVUFiVDtBQWNqQmIsSUFBQUEsV0FBVyxFQUFFVyxzQkFBVU0sSUFBVixDQUFlSixVQWRYO0FBZWpCVixJQUFBQSxhQUFhLEVBQUVRLHNCQUFVTSxJQUFWLENBQWVKLFVBZmI7QUFnQmpCWCxJQUFBQSxnQkFBZ0IsRUFBRVMsc0JBQVVNLElBQVYsQ0FBZUosVUFoQmhCO0FBaUJqQjdFLElBQUFBLG1CQUFtQixFQUFFMkUsc0JBQVVNLElBQVYsQ0FBZUosVUFqQm5CO0FBa0JqQmpDLElBQUFBLGdCQUFnQixFQUFFK0Isc0JBQVVNLElBQVYsQ0FBZUo7QUFsQmhCLEdBRHJCO0FBcUlEOztlQUVjekQsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50fSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge2FycmF5TW92ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmltcG9ydCBMYXllclBhbmVsRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsJztcbmltcG9ydCBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkgZnJvbSAnLi9jb21tb24vc291cmNlLWRhdGEtY2F0YWxvZyc7XG5pbXBvcnQge0FkZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuaW1wb3J0IHtcbiAgUGFuZWxMYWJlbCxcbiAgU2lkZVBhbmVsRGl2aWRlcixcbiAgU2lkZVBhbmVsU2VjdGlvbixcbiAgQnV0dG9uXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtMQVlFUl9CTEVORElOR1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgTGF5ZXJCbGVuZGluZ1NlbGVjdG9yID0gKHtsYXllckJsZW5kaW5nLCB1cGRhdGVMYXllckJsZW5kaW5nfSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8UGFuZWxMYWJlbD5MYXllciBCbGVuZGluZzwvUGFuZWxMYWJlbD5cbiAgICA8SXRlbVNlbGVjdG9yXG4gICAgICBzZWxlY3RlZEl0ZW1zPXtsYXllckJsZW5kaW5nfVxuICAgICAgb3B0aW9ucz17T2JqZWN0LmtleXMoTEFZRVJfQkxFTkRJTkdTKX1cbiAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgb25DaGFuZ2U9e3VwZGF0ZUxheWVyQmxlbmRpbmd9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuLy8gbWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIGFsd2F5cyB2aXNpYmxlIHdoaWxlIGlzIGJlaW5nIGRyYWdnZWRcbi8vIGl0ZW0gYmVpbmcgZHJhZ2dlZCBpcyBhcHBlbmRlZCBpbiBib2R5LCBoZXJlIHRvIHJlc2V0IGl0cyBnbG9iYWwgc3R5bGVcbmNvbnN0IFNvcnRhYmxlU3R5bGVkSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWiArIDF9O1xuXG4gICYuc29ydGluZyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAmLnNvcnRpbmctbGF5ZXJzIC5sYXllci1wYW5lbF9faGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0fTtcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFNpemV9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHR9O1xuICAgICosXG4gICAgKjpiZWZvcmUsXG4gICAgKjphZnRlciB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAubGF5ZXJfX2RyYWctaGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gQWRkRGF0YUJ1dHRvbkZhY3RvcnkoKSB7XG4gIGNvbnN0IEFkZERhdGFCdXR0b24gPSAoe29uQ2xpY2ssIGlzSW5hY3RpdmV9KSA9PiAoXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSBpc0luYWN0aXZlPXshaXNJbmFjdGl2ZX0gd2lkdGg9XCIxMDVweFwiIHNlY29uZGFyeT5cbiAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICBBZGQgRGF0YVxuICAgIDwvQnV0dG9uPlxuICApO1xuXG4gIHJldHVybiBBZGREYXRhQnV0dG9uO1xufVxuXG5MYXllck1hbmFnZXJGYWN0b3J5LmRlcHMgPSBbQWRkRGF0YUJ1dHRvbkZhY3RvcnksIExheWVyUGFuZWxGYWN0b3J5LCBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnldO1xuXG5mdW5jdGlvbiBMYXllck1hbmFnZXJGYWN0b3J5KEFkZERhdGFCdXR0b24sIExheWVyUGFuZWwsIFNvdXJjZURhdGFDYXRhbG9nKSB7XG4gIC8vIEJ5IHdyYXBwaW5nIGxheWVyIHBhbmVsIHVzaW5nIGEgc29ydGFibGUgZWxlbWVudCB3ZSBkb24ndCBoYXZlIHRvIGltcGxlbWVudCB0aGUgZHJhZyBhbmQgZHJvcCBsb2dpYyBpbnRvIHRoZSBwYW5lbCBpdHNlbGY7XG4gIC8vIERldmVsb3BlcnMgY2FuIHByb3ZpZGUgYW55IGxheWVyIHBhbmVsIGltcGxlbWVudGF0aW9uIGFuZCBpdCB3aWxsIHN0aWxsIGJlIHNvcnRhYmxlXG4gIGNvbnN0IFNvcnRhYmxlSXRlbSA9IHNvcnRhYmxlRWxlbWVudCgoe2NoaWxkcmVuLCBpc1NvcnRpbmd9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTb3J0YWJsZVN0eWxlZEl0ZW0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzb3J0YWJsZS1sYXllci1pdGVtcycsIHtzb3J0aW5nOiBpc1NvcnRpbmd9KX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU29ydGFibGVTdHlsZWRJdGVtPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IFNvcnRhYmxlQ29udGFpbmVyID0gc29ydGFibGVDb250YWluZXIoKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gPGRpdj57Y2hpbGRyZW59PC9kaXY+O1xuICB9KTtcblxuICByZXR1cm4gY2xhc3MgTGF5ZXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgLy8gZnVuY3Rpb25zXG4gICAgICBhZGRMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ29sb3JVSUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJUZXh0TGFiZWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllclR5cGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9wZW5Nb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVtb3ZlRGF0YXNldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHNob3dEYXRhc2V0VGFibGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJPcmRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG4gICAgc3RhdGUgPSB7XG4gICAgICBpc1NvcnRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIGxheWVyQ2xhc3NTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyQ2xhc3NlcztcbiAgICBsYXllclR5cGVPcHRpb25zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmxheWVyQ2xhc3NTZWxlY3RvciwgbGF5ZXJDbGFzc2VzID0+XG4gICAgICBPYmplY3Qua2V5cyhsYXllckNsYXNzZXMpLm1hcChrZXkgPT4ge1xuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBsYXllckNsYXNzZXNba2V5XSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgbGFiZWw6IGxheWVyLm5hbWUsXG4gICAgICAgICAgaWNvbjogbGF5ZXIubGF5ZXJJY29uXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBfYWRkRW1wdHlOZXdMYXllciA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuYWRkTGF5ZXIoKTtcbiAgICB9O1xuXG4gICAgX2hhbmRsZVNvcnQgPSAoe29sZEluZGV4LCBuZXdJbmRleH0pID0+IHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlTGF5ZXJPcmRlcihhcnJheU1vdmUodGhpcy5wcm9wcy5sYXllck9yZGVyLCBvbGRJbmRleCwgbmV3SW5kZXgpKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgX29uU29ydFN0YXJ0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNTb3J0aW5nOiB0cnVlfSk7XG4gICAgfTtcblxuICAgIF91cGRhdGVCZWZvcmVTb3J0U3RhcnQgPSAoe2luZGV4fSkgPT4ge1xuICAgICAgLy8gaWYgbGF5ZXIgY29uZmlnIGlzIGFjdGl2ZSwgY2xvc2UgaXRcbiAgICAgIGNvbnN0IHtsYXllck9yZGVyLCBsYXllcnMsIGxheWVyQ29uZmlnQ2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBsYXllcklkeCA9IGxheWVyT3JkZXJbaW5kZXhdO1xuICAgICAgaWYgKGxheWVyc1tsYXllcklkeF0uY29uZmlnLmlzQ29uZmlnQWN0aXZlKSB7XG4gICAgICAgIGxheWVyQ29uZmlnQ2hhbmdlKGxheWVyc1tsYXllcklkeF0sIHtpc0NvbmZpZ0FjdGl2ZTogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2xheWVycywgZGF0YXNldHMsIGxheWVyT3JkZXIsIG9wZW5Nb2RhbH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZGVmYXVsdERhdGFzZXQgPSBPYmplY3Qua2V5cyhkYXRhc2V0cylbMF07XG4gICAgICBjb25zdCBsYXllclR5cGVPcHRpb25zID0gdGhpcy5sYXllclR5cGVPcHRpb25zU2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICAgIGNvbnN0IGxheWVyQWN0aW9ucyA9IHtcbiAgICAgICAgbGF5ZXJDb2xvclVJQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyQ29sb3JVSUNoYW5nZSxcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVHlwZUNoYW5nZTogdGhpcy5wcm9wcy5sYXllclR5cGVDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVmlzQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllclRleHRMYWJlbENoYW5nZTogdGhpcy5wcm9wcy5sYXllclRleHRMYWJlbENoYW5nZSxcbiAgICAgICAgcmVtb3ZlTGF5ZXI6IHRoaXMucHJvcHMucmVtb3ZlTGF5ZXJcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHBhbmVsUHJvcHMgPSB7XG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBvcGVuTW9kYWwsXG4gICAgICAgIGxheWVyVHlwZU9wdGlvbnNcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItbWFuYWdlclwiPlxuICAgICAgICAgIDxTb3VyY2VEYXRhQ2F0YWxvZ1xuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17dGhpcy5wcm9wcy5zaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgcmVtb3ZlRGF0YXNldD17dGhpcy5wcm9wcy5yZW1vdmVEYXRhc2V0fVxuICAgICAgICAgICAgc2hvd0RlbGV0ZURhdGFzZXRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBZGREYXRhQnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2hvd0FkZERhdGFNb2RhbH0gaXNJbmFjdGl2ZT17IWRlZmF1bHREYXRhc2V0fSAvPlxuICAgICAgICAgIDxTaWRlUGFuZWxEaXZpZGVyIC8+XG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICA8U29ydGFibGVDb250YWluZXJcbiAgICAgICAgICAgICAgb25Tb3J0RW5kPXt0aGlzLl9oYW5kbGVTb3J0fVxuICAgICAgICAgICAgICBvblNvcnRTdGFydD17dGhpcy5fb25Tb3J0U3RhcnR9XG4gICAgICAgICAgICAgIHVwZGF0ZUJlZm9yZVNvcnRTdGFydD17dGhpcy5fdXBkYXRlQmVmb3JlU29ydFN0YXJ0fVxuICAgICAgICAgICAgICBsb2NrQXhpcz1cInlcIlxuICAgICAgICAgICAgICBoZWxwZXJDbGFzcz1cInNvcnRpbmctbGF5ZXJzXCJcbiAgICAgICAgICAgICAgdXNlRHJhZ0hhbmRsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGF5ZXJPcmRlci5tYXAoKGxheWVySWR4LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17YGxheWVyLSR7bGF5ZXJJZHh9YH1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGlzU29ydGluZz17dGhpcy5zdGF0ZS5pc1NvcnRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExheWVyUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgey4uLnBhbmVsUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHNvcnREYXRhPXtsYXllcklkeH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtsYXllcnNbbGF5ZXJJZHhdLmlkfVxuICAgICAgICAgICAgICAgICAgICBpZHg9e2xheWVySWR4fVxuICAgICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJzW2xheWVySWR4XX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Tb3J0YWJsZUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Tb3J0YWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICB7ZGVmYXVsdERhdGFzZXQgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5fYWRkRW1wdHlOZXdMYXllcn0gd2lkdGg9XCIxMDVweFwiPlxuICAgICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICAgICAgICAgICAgQWRkIExheWVyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxMYXllckJsZW5kaW5nU2VsZWN0b3JcbiAgICAgICAgICAgIGxheWVyQmxlbmRpbmc9e3RoaXMucHJvcHMubGF5ZXJCbGVuZGluZ31cbiAgICAgICAgICAgIHVwZGF0ZUxheWVyQmxlbmRpbmc9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJCbGVuZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllck1hbmFnZXJGYWN0b3J5O1xuIl19